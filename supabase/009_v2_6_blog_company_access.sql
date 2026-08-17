-- ARYA Akademi V2.6.0
alter table if exists public.academy_companies add column if not exists login_code text;
alter table if exists public.academy_companies add column if not exists login_email text;
create unique index if not exists academy_companies_login_code_uq on public.academy_companies (upper(login_code)) where login_code is not null and login_code <> '';

create table if not exists public.academy_blog_topics (
  id uuid primary key default gen_random_uuid(), name text not null, created_at timestamptz not null default now()
);
create table if not exists public.academy_blogs (
  id uuid primary key default gen_random_uuid(), topic_id uuid references public.academy_blog_topics(id) on delete set null,
  title text not null, body text not null, published boolean not null default true,
  company_ids uuid[] not null default '{}', created_at timestamptz not null default now()
);
