-- ARYA ECY Web V2.5 Mevzuat hiyerarsisi
alter table public.site_content add column if not exists category text;
alter table public.site_content add column if not exists subcategory text;
create index if not exists site_content_regulation_category_idx on public.site_content(type,category,subcategory,sort_order);
