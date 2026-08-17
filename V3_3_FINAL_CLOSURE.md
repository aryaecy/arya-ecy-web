# ARYA ECY Web V3.3 — Final Closure

Bu sürümde yalnızca kapanış için istenen işlevler tamamlandı:

- Önemli bölümü kaldırıldı; ana ekrandaki üçüncü kart Kariyer oldu.
- Kariyer sayfasına İş / Staj başvuru formu eklendi.
- Kariyer başvuruları ARYA Yönetim panelinde Kariyer Başvuruları modülüne düşer.
- Hakkımızda içeriği yönetim panelinden ayrı Hakkımızda sayfasına bağlandı.
- Reklam/Güncel yerine Bizden Haberler modülü kullanılır; eski `ad` kayıtları da haberlerde görünmeye devam eder.
- İletişim bölümü yönetim paneline bağlandı ve ayrı İletişim sayfası oluşturuldu.
- Ana ekrandaki Duyurular, Bizden Haberler ve Kariyer kartları resimsiz/metin ağırlıklı hale getirildi.
- Duyuru, Bizden Haberler ve Kütüphane içeriklerine PNG/JPG/WEBP görsel veya MP4/WEBM video yüklenebilir.
- Medya, içerik detay sayfası açıldığında gösterilir.
- Türkçe / İngilizce dil düğmesi eklendi. Ana sayfa, navigasyon, hizmet arayüzü, içerik sayfaları, iletişim ve kariyer çift dilli çalışır.
- Yönetim panelinde içerikler için Türkçe ve İngilizce alanları eklendi.

## Supabase

Canlıya almadan önce Supabase SQL Editor'da `supabase/011_v3_3_career_media_i18n.sql` dosyasının tamamını bir kez çalıştırın.

Bu SQL:
- CMS'e İngilizce alanları ekler,
- `contact` içerik tipini açar,
- `career_applications` tablosunu ve yetkilerini kurar,
- `site-media` bucket'ını ve medya erişim politikalarını kurar.
