-- ARYA Akademi V2 - mevcut V1 verisini silmeden yükseltme
-- SQL Editor'da 001 çalıştıktan sonra bu dosyayı bir kez çalıştırın.
create extension if not exists pgcrypto;

alter table public.certificate_registry add column if not exists status text not null default 'valid';
alter table public.certificate_registry add column if not exists language text not null default 'tr';
alter table public.certificate_registry add column if not exists verification_token text;

create or replace function public.is_academy_admin()
returns boolean language sql stable security definer set search_path=public as $$
  select exists(select 1 from public.profiles where id=auth.uid() and role in ('system_admin','company_admin'));
$$;

create table if not exists public.mobile_access (
  id uuid primary key default gen_random_uuid(),
  token text not null unique default encode(gen_random_bytes(24),'hex'),
  employee_name text not null,
  employee_no text,
  phone text,
  company_id text,
  course_id text not null,
  due_date date,
  expires_at timestamptz not null default (now()+interval '30 days'),
  pin_hash text not null,
  status text not null default 'assigned' check(status in ('assigned','in_progress','completed','expired','revoked')),
  progress integer not null default 0 check(progress between 0 and 100),
  score integer,
  certificate_no text references public.certificate_registry(certificate_no),
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  completed_at timestamptz
);
alter table public.mobile_access enable row level security;
drop policy if exists mobile_admin_select on public.mobile_access;
create policy mobile_admin_select on public.mobile_access for select to authenticated using(public.is_academy_admin());
drop policy if exists mobile_admin_update on public.mobile_access;
create policy mobile_admin_update on public.mobile_access for update to authenticated using(public.is_academy_admin()) with check(public.is_academy_admin());

-- Ek eğitim materyalleri için public bucket. Gizli/kişisel belge yüklemeyin.
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values('academy-content','academy-content',true,52428800,array['application/pdf','image/png','image/jpeg','image/webp','video/mp4','video/webm','text/plain'])
on conflict(id) do update set public=true,file_size_limit=52428800;

drop policy if exists academy_content_public_read on storage.objects;
create policy academy_content_public_read on storage.objects for select to public using(bucket_id='academy-content');
drop policy if exists academy_content_admin_insert on storage.objects;
create policy academy_content_admin_insert on storage.objects for insert to authenticated with check(bucket_id='academy-content' and public.is_academy_admin());
drop policy if exists academy_content_admin_update on storage.objects;
create policy academy_content_admin_update on storage.objects for update to authenticated using(bucket_id='academy-content' and public.is_academy_admin()) with check(bucket_id='academy-content' and public.is_academy_admin());
drop policy if exists academy_content_admin_delete on storage.objects;
create policy academy_content_admin_delete on storage.objects for delete to authenticated using(bucket_id='academy-content' and public.is_academy_admin());

create or replace function public.create_mobile_access(
 p_employee_name text,p_employee_no text,p_phone text,p_company_id text,p_course_id text,p_due date,p_pin text,p_days integer default 30)
returns text language plpgsql security definer set search_path=public as $$
declare t text;
begin
 if not public.is_academy_admin() then raise exception 'Yetkisiz işlem'; end if;
 if coalesce(length(trim(p_pin)),0)<4 then raise exception 'PIN en az 4 karakter olmalı'; end if;
 t:=encode(gen_random_bytes(24),'hex');
 insert into public.mobile_access(token,employee_name,employee_no,phone,company_id,course_id,due_date,expires_at,pin_hash,created_by)
 values(t,p_employee_name,p_employee_no,p_phone,p_company_id,p_course_id,p_due,now()+make_interval(days=>greatest(1,least(coalesce(p_days,30),180))),crypt(p_pin,gen_salt('bf')),auth.uid());
 return t;
end;$$;
grant execute on function public.create_mobile_access(text,text,text,text,text,date,text,integer) to authenticated;

create or replace function public.get_mobile_training(p_token text,p_pin text)
returns jsonb language plpgsql security definer set search_path=public as $$
declare a public.mobile_access%rowtype; st jsonb; c jsonb; safeq jsonb;
begin
 select * into a from public.mobile_access where token=p_token and status not in('revoked','expired');
 if not found or a.expires_at<now() then return jsonb_build_object('ok',false,'message','Bağlantı geçersiz veya süresi dolmuş.'); end if;
 if a.pin_hash<>crypt(p_pin,a.pin_hash) then return jsonb_build_object('ok',false,'message','Doğrulama bilgisi hatalı.'); end if;
 select payload into st from public.academy_state where id='main';
 select x into c from jsonb_array_elements(coalesce(st->'courses','[]'::jsonb)) x where x->>'id'=a.course_id limit 1;
 if c is null then return jsonb_build_object('ok',false,'message','Eğitim bulunamadı.'); end if;
 select coalesce(jsonb_agg(q-'answer'),'[]'::jsonb) into safeq from jsonb_array_elements(coalesce(c->'questions','[]'::jsonb)||coalesce(c->'customQuestions','[]'::jsonb)) q;
 update public.mobile_access set status=case when status='assigned' then 'in_progress' else status end where id=a.id;
 return jsonb_build_object('ok',true,'employeeName',a.employee_name,'employeeNo',a.employee_no,'course', (c-'questions'-'customQuestions') || jsonb_build_object('examQuestions',safeq),'due',a.due_date,'progress',a.progress,'status',a.status);
end;$$;
grant execute on function public.get_mobile_training(text,text) to anon,authenticated;

create or replace function public.mobile_set_progress(p_token text,p_pin text,p_progress integer)
returns boolean language plpgsql security definer set search_path=public as $$
declare a public.mobile_access%rowtype;
begin
 select * into a from public.mobile_access where token=p_token;
 if not found or a.expires_at<now() or a.status in('revoked','expired') or a.pin_hash<>crypt(p_pin,a.pin_hash) then return false; end if;
 update public.mobile_access set progress=greatest(progress,least(100,greatest(0,p_progress))),status=case when status='assigned' then 'in_progress' else status end where id=a.id;
 return true;
end;$$;
grant execute on function public.mobile_set_progress(text,text,integer) to anon,authenticated;

create or replace function public.submit_mobile_exam(p_token text,p_pin text,p_answers jsonb)
returns jsonb language plpgsql security definer set search_path=public as $$
declare a public.mobile_access%rowtype; st jsonb; c jsonb; qs jsonb; q jsonb; total int:=0; correct int:=0; choice int; score int; passed boolean; cert text; expdate date;
begin
 select * into a from public.mobile_access where token=p_token and status not in('revoked','expired');
 if not found or a.expires_at<now() then return jsonb_build_object('ok',false,'message','Bağlantı geçersiz veya süresi dolmuş.'); end if;
 if a.pin_hash<>crypt(p_pin,a.pin_hash) then return jsonb_build_object('ok',false,'message','Doğrulama bilgisi hatalı.'); end if;
 select payload into st from public.academy_state where id='main';
 select x into c from jsonb_array_elements(coalesce(st->'courses','[]'::jsonb)) x where x->>'id'=a.course_id limit 1;
 qs:=coalesce(c->'questions','[]'::jsonb)||coalesce(c->'customQuestions','[]'::jsonb);
 for q in select * from jsonb_array_elements(qs) loop
   total:=total+1;
   begin choice:=(p_answers->>(q->>'id'))::int; exception when others then choice:=-1; end;
   if choice=coalesce((q->>'answer')::int,-99) then correct:=correct+1; end if;
 end loop;
 if total=0 then return jsonb_build_object('ok',false,'message','Bu eğitim için sınav bulunamadı.'); end if;
 score:=round(correct*100.0/total); passed:=score>=coalesce((c->>'passing')::int,70);
 if passed then
   cert:='ARYA-'||to_char(current_date,'YYYY')||'-'||upper(substr(a.token,1,8));
   expdate:=current_date + make_interval(months=>coalesce((c->>'validMonths')::int,12));
   insert into public.certificate_registry(certificate_no,holder_name,course_title,score,issued_at,expires_at,status,language,verification_token)
   values(cert,a.employee_name,c->>'title',score,current_date,expdate,'valid','tr',a.token)
   on conflict(certificate_no) do update set score=excluded.score,issued_at=excluded.issued_at,expires_at=excluded.expires_at,status='valid';
   update public.mobile_access set status='completed',progress=100,score=score,certificate_no=cert,completed_at=now() where id=a.id;
 else
   update public.mobile_access set status='in_progress',progress=100,score=score where id=a.id;
 end if;
 return jsonb_build_object('ok',true,'score',score,'passed',passed,'passing',coalesce((c->>'passing')::int,70),'certificateNo',cert);
end;$$;
grant execute on function public.submit_mobile_exam(text,text,jsonb) to anon,authenticated;

create or replace function public.get_kiosk_trainings(p_employee_no text,p_pin text)
returns jsonb language plpgsql security definer set search_path=public as $$
declare r jsonb;
begin
 select coalesce(jsonb_agg(jsonb_build_object('token',m.token,'employeeName',m.employee_name,'courseId',m.course_id,'due',m.due_date)),'[]'::jsonb) into r
 from public.mobile_access m
 where m.employee_no=p_employee_no and m.status not in('revoked','expired','completed') and m.expires_at>=now() and m.pin_hash=crypt(p_pin,m.pin_hash);
 return jsonb_build_object('ok',jsonb_array_length(r)>0,'items',r,'message',case when jsonb_array_length(r)>0 then null else 'Aktif eğitim bulunamadı veya PIN hatalı.' end);
end;$$;
grant execute on function public.get_kiosk_trainings(text,text) to anon,authenticated;
