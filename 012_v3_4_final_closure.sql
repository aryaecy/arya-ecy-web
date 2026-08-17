-- ARYA ECY v3.4 final closing migration
alter table public.career_applications add column if not exists cv_path text;

-- Existing Bizden Haberler entries are intentionally cleared so new content can be entered from ARYA Yönetim.
delete from public.site_content where type in ('news','ad');

insert into storage.buckets (id,name,public)
values ('career-cv','career-cv',false)
on conflict (id) do update set public=false;

drop policy if exists "Career applicants can upload CV" on storage.objects;
drop policy if exists "Admins can read career CV" on storage.objects;
drop policy if exists "Admins can delete career CV" on storage.objects;

create policy "Career applicants can upload CV"
on storage.objects for insert to anon, authenticated
with check (bucket_id='career-cv');

create policy "Admins can read career CV"
on storage.objects for select to authenticated
using (bucket_id='career-cv' and exists(select 1 from public.admin_users a where a.user_id=auth.uid()));

create policy "Admins can delete career CV"
on storage.objects for delete to authenticated
using (bucket_id='career-cv' and exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
