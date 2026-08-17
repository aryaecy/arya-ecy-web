# ARYA Akademi V2.8.0

- Ana Panel Bilgi Bankası yalnızca yayınlanmış makaleleri gösterir; içerik hazırlama Yönetim > Bilgi Bankası altına taşındı.
- Yönetim ekranı kartlı alt modül yapısına dönüştürüldü: Kullanıcı Atamaları, Sertifika Yönetimi, Bilgi Bankası, Duyurular, Mesajlar, Fiyatlandırma, Raporlar, Eğitmenler ve KVKK Kayıtları.
- Kullanıcı Atamaları yeniden oluşturuldu; firma ve katılımcı bazında modül/eğitim erişimi seçilebilir.
- Sertifika ekranı firma içinde çalışacak şekilde sadeleştirildi; önizleme QR hatasına karşı korumalı hale getirildi.
- Sertifikada kişinin çalıştığı firma adı, düzenlenme ve geçerlilik bitiş tarihi görünür.
- Sertifika üretimi Yönetim sertifika onayına bağlandı.
- Katılımcı eklerken T.C. Kimlik No giriş kodu ve ilk şifre (varsayılan 123456, değiştirilebilir) tanımlanabilir.
- Canlı katılımcı hesabı için `create-participant-account`, kod çözümleme için `resolve-login-code` Supabase Edge Function örnekleri eklendi.
- KVKK onayı kayıt anında yönetici tarafından değil, firma/katılımcı ilk girişinde alınır.
- KVKK kanıtı `kvkk-consent` Edge Function üzerinden kullanıcı, metin sürümü, zaman, IP, user-agent, request ID ve SHA-256 kanıt hash'i ile tutulur.

> KVKK metni ve veri işleme hukuki dayanakları, canlıya geçmeden önce şirketin gerçek süreçlerine göre hukuk danışmanı tarafından doğrulanmalıdır.
