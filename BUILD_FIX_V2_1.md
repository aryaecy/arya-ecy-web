# ARYA ECY Web V2.1 Build Fix

Vercel build hatasına neden olan `lucide-react` sosyal medya ikon importları kaldırıldı.
`Linkedin`, `Instagram` ve `ExternalLink` ikonları paket sürümünde export edilmediği için sayfa derlenemiyordu.
Sosyal medya ve hızlı bağlantılar bağımlılıksız işaretlerle değiştirildi; işlev ve bağlantılar korunuyor.
