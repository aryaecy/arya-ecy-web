# ARYA Akademi V2.4.3

V2.4.3, V2.4.1'in tum ozelliklerini korur ve Calisanlar ile Taseron Calisanlar icin Excel'den toplu veri yukleme ekler.

## Excel toplu yukleme
- Calisanlar > Excel'den Toplu Yukle
- Taseron Calisanlar > Excel'den Toplu Yukle
- Her ekran icinden uygun Excel sablonu indirilebilir.
- .xlsx, .xls ve .csv dosyalari okunur.
- Yukleme oncesinde satir onizlemesi, zorunlu alan kontrolu ve mukerrer kayit kontrolu yapilir.
- Hatali satirlar sisteme eklenmez; gecerli satirlar tek seferde kaydedilir.
- Sistem Yoneticisi tum firmalar gorunumundeyse Excel'deki Musteri sutunu firma adi ile eslestirilir.
- Belirli musteri filtresinde veya Firma Yoneticisi hesabinda Musteri alani bos birakilabilir; secili firma kullanilir.

## Mukerrer kayit kontrolu
Ayni musteri ve personel turu icinde sirasiyla Sicil No, e-posta ve telefon kontrol edilir.

## Kurulum
Bu surum icin yeni Supabase migration gerekmiyor. Mevcut V2.4.1 veritabani aynen kullanilir.
GitHub reposunda V2.4.3 dosyalarini V2.4.1 dosyalarinin uzerine yukleyin. package.json'da Excel okuma icin `xlsx` bagimliligi eklenmistir. Vercel yeni build'de otomatik kurar.
