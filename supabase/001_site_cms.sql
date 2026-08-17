create extension if not exists pgcrypto;
create table if not exists public.admin_users (user_id uuid primary key references auth.users(id) on delete cascade, created_at timestamptz default now());
create table if not exists public.site_content (
 id uuid primary key default gen_random_uuid(),
 type text not null check(type in ('article','announcement','ad')),
 title text not null,
 excerpt text,
 body text,
 image_url text,
 published boolean not null default false,
 published_at timestamptz,
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);
alter table public.admin_users enable row level security;
alter table public.site_content enable row level security;
create policy "admin can verify self" on public.admin_users for select using (auth.uid()=user_id);
create policy "public reads published content" on public.site_content for select using (published=true or exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
create policy "admins insert content" on public.site_content for insert with check (exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
create policy "admins update content" on public.site_content for update using (exists(select 1 from public.admin_users a where a.user_id=auth.uid())) with check (exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
create policy "admins delete content" on public.site_content for delete using (exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
-- Supabase Authentication > Users ekranında yönetici hesabını oluşturduktan sonra aşağıdaki komutu kendi UUID'niz ile çalıştırın:
-- insert into public.admin_users(user_id) values ('YONETICI_AUTH_USER_UUID');
