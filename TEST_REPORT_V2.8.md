# ARYA Akademi V2.8.0 - Kontrol Notu

## Yapılan statik kontroller
- `App.jsx` ve `src/App.jsx` senkronize edildi.
- Parantez, süslü parantez ve köşeli parantez ham sayım dengeleri kontrol edildi.
- Sürüm bilgileri 2.8.0 olarak güncellendi.
- Yönetim, Bilgi Bankası, Sertifikalar, KVKK ve kullanıcı atama bileşenlerinin tekil tanımları kontrol edildi.

## Canlı Supabase için gerekli ek kurulum
1. `supabase/010_v2_8_accounts_kvkk.sql` çalıştırılmalı.
2. `supabase/functions/create-participant-account` deploy edilmeli.
3. `supabase/functions/resolve-login-code` deploy edilmeli.
4. `supabase/functions/kvkk-consent` deploy edilmeli.
5. Edge Function ortamında `SUPABASE_SERVICE_ROLE_KEY` yalnızca sunucu sırrı olarak tanımlanmalı; istemciye veya VITE değişkenlerine eklenmemeli.

## Build notu
Bu çalışma ortamında npm bağımlılıkları indirilemediği için tam Vite production build doğrulaması çalıştırılamadı. Bu nedenle Vercel deploy sonrasında build logu son kez kontrol edilmelidir.
