-- ARYA Akademi V2.4.1 - Taşeron Çalışanlar
-- Bu sürüm personel tipini academy_state JSON verisinde saklar.
-- Mevcut veriyi silmez. İstemci eski çalışan kayıtlarını otomatik olarak "employee" tipine yükseltir.

update public.academy_state
set payload = jsonb_set(
  coalesce(payload, '{}'::jsonb),
  '{settings,version}',
  '"2.4.1"'::jsonb,
  true
),
updated_at = now()
where id = 'main';
