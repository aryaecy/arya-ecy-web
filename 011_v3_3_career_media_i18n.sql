-- ARYA ECY WEB V3.3 - Career, media, contact and bilingual CMS

-- Bilingual content fields
alter table public.site_content add column if not exists title_en text;
alter table public.site_content add column if not exists excerpt_en text;
alter table public.site_content add column if not exists body_en text;

-- Allow the new contact content type while preserving legacy types.
alter table public.site_content drop constraint if exists site_content_type_check;
alter table public.site_content add constraint site_content_type_check
check (type in ('article','announcement','ad','about','important','regulation','news','contact'));

-- Career applications
create table if not exists public.career_applications (
  id uuid primary key default gen_random_uuid(),
  application_type text not null check (application_type in ('job','internship')),
  full_name text not null,
  email text not null,
  phone text,
  city text,
  education text,
  experience text,
  linkedin_url text,
  message text,
  consent boolean not null default false,
  status text not null default 'new',
  created_at timestamptz not null default now()
);
alter table public.career_applications enable row level security;
drop policy if exists "career public insert" on public.career_applications;
drop policy if exists "career admin read" on public.career_applications;
drop policy if exists "career admin update" on public.career_applications;
drop policy if exists "career admin delete" on public.career_applications;
create policy "career public insert" on public.career_applications for insert to anon, authenticated with check (consent = true);
create policy "career admin read" on public.career_applications for select to authenticated using (exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
create policy "career admin update" on public.career_applications for update to authenticated using (exists(select 1 from public.admin_users a where a.user_id=auth.uid())) with check (exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
create policy "career admin delete" on public.career_applications for delete to authenticated using (exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
grant insert on public.career_applications to anon;
grant insert,select,update,delete on public.career_applications to authenticated;

-- Public media bucket for images/videos used in published content.
insert into storage.buckets (id,name,public) values ('site-media','site-media',true)
on conflict (id) do update set public=true;
drop policy if exists "Public can read site media" on storage.objects;
drop policy if exists "Admins can upload site media" on storage.objects;
drop policy if exists "Admins can update site media" on storage.objects;
drop policy if exists "Admins can delete site media" on storage.objects;
create policy "Public can read site media" on storage.objects for select to public using (bucket_id='site-media');
create policy "Admins can upload site media" on storage.objects for insert to authenticated with check (bucket_id='site-media' and exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
create policy "Admins can update site media" on storage.objects for update to authenticated using (bucket_id='site-media' and exists(select 1 from public.admin_users a where a.user_id=auth.uid())) with check (bucket_id='site-media' and exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
create policy "Admins can delete site media" on storage.objects for delete to authenticated using (bucket_id='site-media' and exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
