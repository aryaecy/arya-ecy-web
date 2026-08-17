-- ARYA Akademi v1.0 - Supabase kurulumu
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  role text not null default 'participant' check (role in ('system_admin','company_admin','participant')),
  company_id text,
  created_at timestamptz not null default now()
);

create table if not exists public.academy_state (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.certificate_registry (
  certificate_no text primary key,
  holder_name text not null,
  course_title text not null,
  score integer,
  issued_at date not null,
  expires_at date,
  created_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path=public as $$
begin
  insert into public.profiles(id,email,full_name,role)
  values(new.id,new.email,coalesce(new.raw_user_meta_data->>'full_name',new.email),'participant')
  on conflict(id) do nothing;
  return new;
end; $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.academy_state enable row level security;
alter table public.certificate_registry enable row level security;

-- Profil: kullanıcı kendisini görebilir; sistem yöneticileri tüm profilleri görebilir.
drop policy if exists "profiles_select" on public.profiles;
create policy "profiles_select" on public.profiles for select to authenticated using (
 id=auth.uid() or exists(select 1 from public.profiles p where p.id=auth.uid() and p.role='system_admin')
);
drop policy if exists "profiles_update_admin" on public.profiles;
create policy "profiles_update_admin" on public.profiles for update to authenticated using (
 id=auth.uid() or exists(select 1 from public.profiles p where p.id=auth.uid() and p.role='system_admin')
);

-- Akademi state: uygulama oturum açmış kullanıcılarca kullanılabilir. Kurumsal ölçekte
-- normalized tablo modeline geçiş için README'deki üretim sertleştirme notuna bakın.
drop policy if exists "academy_read" on public.academy_state;
create policy "academy_read" on public.academy_state for select to authenticated using (true);
drop policy if exists "academy_write" on public.academy_state;
create policy "academy_write" on public.academy_state for all to authenticated using (true) with check (true);

-- Sertifika doğrulama herkese açık, yazma sadece oturum açmış kullanıcıya açık.
drop policy if exists "certificate_public_read" on public.certificate_registry;
create policy "certificate_public_read" on public.certificate_registry for select to anon,authenticated using (true);
drop policy if exists "certificate_auth_write" on public.certificate_registry;
create policy "certificate_auth_write" on public.certificate_registry for insert to authenticated with check (true);
drop policy if exists "certificate_auth_update" on public.certificate_registry;
create policy "certificate_auth_update" on public.certificate_registry for update to authenticated using (true) with check (true);

insert into public.academy_state(id,payload) values('main','{}'::jsonb) on conflict(id) do nothing;
