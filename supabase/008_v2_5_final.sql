-- ARYA Akademi V2.5 final: registration approval metadata.
alter table public.profiles add column if not exists approval_status text not null default 'pending' check (approval_status in ('pending','approved','rejected'));
alter table public.profiles add column if not exists approved_at timestamptz;
alter table public.profiles add column if not exists approved_by uuid;
update public.profiles set approval_status='approved' where role='system_admin';
create or replace function public.academy_set_user_approval(p_user_id uuid,p_status text)
returns jsonb language plpgsql security definer set search_path=public as $$
begin
 if not exists(select 1 from public.profiles where id=auth.uid() and role='system_admin') then return jsonb_build_object('ok',false,'message','Yetkisiz işlem'); end if;
 if p_status not in ('approved','rejected') then return jsonb_build_object('ok',false,'message','Geçersiz durum'); end if;
 update public.profiles set approval_status=p_status,approved_at=case when p_status='approved' then now() else null end,approved_by=auth.uid() where id=p_user_id;
 return jsonb_build_object('ok',true);
end $$;
grant execute on function public.academy_set_user_approval(uuid,text) to authenticated;
-- Onay e-postası için Supabase Edge Function / SMTP entegrasyonu kullanılmalıdır.
