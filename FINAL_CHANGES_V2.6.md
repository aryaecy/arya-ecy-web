# ARYA Akademi V2.6.0 Final Değişiklikleri
- Ana Panel sadeleştirildi: yalnızca Duyurular ve Yönetime Mesaj.
- Katılımcılar ekranında “Katılımcı Ekle”.
- Eğitim Atamaları: önce firma, sonra sadece o firmanın katılımcıları.
- Eğitim Matrisi: firma filtresi ve seçilen firmanın katılımcıları.
- Firma giriş kodu + giriş e-postası alanları; giriş ekranı e-posta veya firma kodu kabul eder.
- Blog modülü: sınırsız konu, yazı ve genel/firma bazlı görünürlük ataması.
- Önceki V2.5.0 final özellikleri korunmuştur.

## Canlı kullanım notu
Firma koduyla giriş, kodun ilişkili giriş e-postasını kullanarak Supabase Auth oturumu açar. İlgili firma için Supabase Auth hesabı ve şifresi tanımlanmalıdır. SQL 009 şema alanlarını ekler.
