-- ARYA Akademi V2.2 Yönetim Modülü yükseltmesi
-- V2.1 kurulu sistemde bir kez çalıştırın. Mevcut veriyi silmez.

create or replace function public.claim_first_academy_admin()
returns boolean
language plpgsql
security definer
set search_path=public
as $$
declare admin_count integer; me public.profiles%rowtype; first_id uuid;
begin
  if auth.uid() is null then return false; end if;
  select count(*) into admin_count from public.profiles where role='system_admin';
  select * into me from public.profiles where id=auth.uid();
  if not found then
    insert into public.profiles(id,email,full_name,role)
    select id,email,coalesce(raw_user_meta_data->>'full_name',email),'participant'
    from auth.users where id=auth.uid()
    on conflict(id) do nothing;
    select * into me from public.profiles where id=auth.uid();
  end if;
  select id into first_id from public.profiles order by created_at asc limit 1;
  if admin_count=0 or auth.uid()=first_id then
    update public.profiles set role='system_admin' where id=auth.uid();
    return true;
  end if;
  return me.role='system_admin';
end; $$;
grant execute on function public.claim_first_academy_admin() to authenticated;

-- V2.2 sertifika kayıt alanları
alter table public.certificate_registry add column if not exists revoked_at timestamptz;
alter table public.certificate_registry add column if not exists revoked_by uuid references auth.users(id);

create or replace function public.revoke_academy_certificate(p_certificate_no text)
returns boolean
language plpgsql
security definer
set search_path=public
as $$
begin
  if not public.is_academy_admin() then raise exception 'Yetkisiz işlem'; end if;
  update public.certificate_registry
    set status='revoked', revoked_at=now(), revoked_by=auth.uid()
    where certificate_no=p_certificate_no;
  return found;
end; $$;
grant execute on function public.revoke_academy_certificate(text) to authenticated;

-- Mobil bağlantıların yönetici tarafından iptal edilebilmesi
create or replace function public.revoke_mobile_access(p_token text)
returns boolean
language plpgsql
security definer
set search_path=public
as $$
begin
  if not public.is_academy_admin() then raise exception 'Yetkisiz işlem'; end if;
  update public.mobile_access set status='revoked' where token=p_token;
  return found;
end; $$;
grant execute on function public.revoke_mobile_access(text) to authenticated;

-- academy_state güncelleme zamanını otomatik tut
create or replace function public.touch_academy_state()
returns trigger language plpgsql as $$
begin new.updated_at=now(); return new; end; $$;
drop trigger if exists trg_touch_academy_state on public.academy_state;
create trigger trg_touch_academy_state before update on public.academy_state
for each row execute procedure public.touch_academy_state();
