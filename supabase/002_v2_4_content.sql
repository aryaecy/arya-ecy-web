-- ARYA ECY Web V2.4 içerik genişletmesi
alter table public.site_content drop constraint if exists site_content_type_check;
alter table public.site_content add constraint site_content_type_check check(type in ('article','announcement','ad','about','important','regulation'));
alter table public.site_content add column if not exists file_url text;
alter table public.site_content add column if not exists sort_order integer default 0;

insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('site-documents','site-documents',true,15728640,array['application/pdf'])
on conflict (id) do update set public=true,file_size_limit=15728640,allowed_mime_types=array['application/pdf'];

-- Yönetici kullanıcılar PDF yükleyebilir/değiştirebilir/silebilir.
drop policy if exists "admins upload site documents" on storage.objects;
create policy "admins upload site documents" on storage.objects for insert to authenticated
with check (bucket_id='site-documents' and exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
drop policy if exists "admins update site documents" on storage.objects;
create policy "admins update site documents" on storage.objects for update to authenticated
using (bucket_id='site-documents' and exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
drop policy if exists "admins delete site documents" on storage.objects;
create policy "admins delete site documents" on storage.objects for delete to authenticated
using (bucket_id='site-documents' and exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
