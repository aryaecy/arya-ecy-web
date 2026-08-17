-- ARYA Akademi V2.4 - müşteri kullanıcı yetkileri
-- 005_v2_3_admin_repair.sql sonrasında bir kez çalıştırın. Veri silmez.

create or replace function public.academy_list_profiles()
returns table(id uuid,email text,full_name text,role text,company_id text,created_at timestamptz)
language plpgsql
security definer
set search_path=public
as $$
begin
  if not exists(select 1 from public.profiles p where p.id=auth.uid() and p.role='system_admin') then
    raise exception 'Yetkisiz işlem';
  end if;
  return query
    select p.id,p.email,p.full_name,p.role,p.company_id,p.created_at
    from public.profiles p
    order by p.created_at asc;
end; $$;
grant execute on function public.academy_list_profiles() to authenticated;

create or replace function public.academy_update_profile_access(p_user_id uuid,p_role text,p_company_id text)
returns jsonb
language plpgsql
security definer
set search_path=public
as $$
begin
  if not exists(select 1 from public.profiles p where p.id=auth.uid() and p.role='system_admin') then
    return jsonb_build_object('ok',false,'message','Yetkisiz işlem');
  end if;
  if p_role not in ('system_admin','company_admin','participant') then
    return jsonb_build_object('ok',false,'message','Geçersiz rol');
  end if;
  update public.profiles
     set role=p_role, company_id=nullif(p_company_id,'')
   where id=p_user_id;
  if not found then return jsonb_build_object('ok',false,'message','Kullanıcı bulunamadı'); end if;
  return jsonb_build_object('ok',true);
end; $$;
grant execute on function public.academy_update_profile_access(uuid,text,text) to authenticated;

-- Company admin kendi profilini ve aynı firmadaki kullanıcıları okuyabilsin.
drop policy if exists "profiles_select" on public.profiles;
create policy "profiles_select" on public.profiles for select to authenticated using (
 id=auth.uid()
 or exists(select 1 from public.profiles me where me.id=auth.uid() and me.role='system_admin')
 or exists(select 1 from public.profiles me where me.id=auth.uid() and me.role='company_admin' and me.company_id=profiles.company_id)
);
