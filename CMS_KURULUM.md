# ARYA ECY Site Yönetimi kurulumu

1. Supabase projesinde `supabase/001_site_cms.sql` dosyasını SQL Editor'de çalıştırın.
2. Authentication > Users bölümünden yalnızca yönetim için kullanılacak e-posta/şifre hesabını oluşturun.
3. Oluşan kullanıcının UUID değerini SQL dosyasının sonundaki örneğe göre `admin_users` tablosuna ekleyin.
4. Vercel Project Settings > Environment Variables bölümüne `.env.example` içindeki iki değişkeni gerçek değerleriyle ekleyin.
5. Yeniden deploy edin. `/yonetim` ekranından giriş yaptıktan sonra Makale, Duyuru ve Reklam oluşturabilirsiniz.
6. "Yayına al" işaretli içerikler Supabase REST API üzerinden ziyaretçilere sunulur. Makaleler Kütüphane'ye, duyurular alt banda, reklamlar ana ekrandaki Güncel alanına gelir.

Not: Instagram bağlantısı `src/app/page.tsx` içinde `href="#"` olarak bırakıldı; firmanın kesin Instagram adresi bilindiğinde gerçek adresle değiştirin.
