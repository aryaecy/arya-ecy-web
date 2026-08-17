-- ARYA Akademi V2.3 admin repair
-- V2.2 kurulu sistemde bir kez calistirin. Veri silmez.

-- Ana yonetici hesabini kesin olarak sistem yoneticisi yap.
update public.profiles
set role='system_admin', full_name=coalesce(nullif(full_name,''),'ARYA Yoneticisi')
where lower(email)='guven@guvenozkan.com';

-- Oturumdaki kullanici ayni hesapsa da duzelt.
update public.profiles p
set role='system_admin'
from auth.users u
where p.id=u.id and p.id=auth.uid() and lower(u.email)='guven@guvenozkan.com';

-- Kontrol sonucu.
select email, full_name, role from public.profiles where lower(email)='guven@guvenozkan.com';
