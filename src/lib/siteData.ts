import { Leaf, ClipboardCheck, Droplets, Recycle, Truck, FlaskConical, Globe2, Trees, Waves, Gauge, Zap } from 'lucide-react';

export type Service = {
  slug:string;
  icon:any;
  title:string;
  image:string;
  summary:string;
  intro:string;
  sections:[string,string][];
  deliverables:string[];
  highlight:string;
};

export const services: Service[] = [
  {
    slug:'cevre-yonetimi', icon:Leaf, title:'Çevre Yönetimi Danışmanlığı', image:'/service-environment.webp',
    summary:'Çevre mevzuatı, izin ve lisanslar, beyanlar, saha kontrolleri ve çevresel performansın tek sistemde yönetimi.',
    intro:'Çevre Yönetimi Danışmanlığımız, işletmenin çevre mevzuatına uyumunu yalnızca evrak üzerinden değil; proses, saha, insan, izin, ölçüm ve kayıt sistemi birlikte ele alınarak yönetir. İlk günden itibaren tesisin çevresel fotoğrafını çıkarır, yükümlülükleri takvime bağlar, sahadaki riskleri görünür hale getirir ve yönetimin karar verebileceği ölçülebilir bir çevre yönetim sistemi kurar. Amaç sadece denetimden geçmek değil; uygunsuzluğu oluşmadan önleyen, sorumluluğu belli ve kanıtı hazır bir işletme düzeni oluşturmaktır.',
    sections:[
      ['1. Çevresel durum tespiti ve mevzuat matrisi','Tesis yerleşimi, faaliyet konusu, kapasite, proses akışları, hammadde ve kimyasallar, emisyon kaynakları, su-atıksu noktaları, atık oluşum alanları, geçici depolama, gürültü kaynakları ve mevcut izin/beyan geçmişi saha turu ve doküman incelemesiyle birlikte değerlendirilir. Çıktı olarak işletmeye özel mevzuat matrisi hazırlanır; her yükümlülük için sorumlu, periyot, son tarih, gerekli kanıt ve mevcut durum tanımlanır. Böylece çevre yönetimi kişisel hafızadan çıkar, kurumsal bir kontrol sistemine dönüşür.'],
      ['2. İzin, lisans, beyan ve resmi süreç yönetimi','Çevre izin/lisans kapsamı, muafiyet veya kapsam değerlendirmeleri, dönemsel beyanlar, ölçüm-analiz programları, kurum yazışmaları ve başvuru dosyaları yıllık takvim üzerinden yönetilir. Dosyadaki kapasite, proses ve ekipman bilgilerinin sahadaki gerçek durumla aynı olması kontrol edilir. Değişiklik olduğunda bunun ÇED, izin, emisyon, atıksu veya atık yükümlülüklerine etkisi ayrıca değerlendirilir; böylece eski dosya-yeni tesis uyumsuzluğu oluşmaz.'],
      ['3. Aylık saha kontrolleri ve uygunsuzluk yönetimi','Atık ve kimyasal alanları, etiketleme, ikincil kontenman, dökülme ekipmanı, drenaj hatları, emisyon noktaları, arıtma üniteleri, yağmur suyu riski ve çevresel acil durum hazırlığı periyodik saha kontrolleriyle incelenir. Her bulgu fotoğraf, lokasyon ve açıklamayla kayıt altına alınır; risk derecesi, sorumlusu ve termin tarihi atanır. Kapanan aksiyonun kanıtı sisteme eklenir ve tekrar eden uygunsuzlukların kök nedeni analiz edilir.'],
      ['4. Denetim, eğitim ve kurumsal kayıt düzeni','Resmi denetim öncesinde izinler, beyanlar, analizler, atık sevkleri, eğitimler, iç kontroller ve kurum yazışmaları çapraz kontrol edilir. İlgili çalışanlara görevlerine uygun çevre farkındalık ve saha uygulama eğitimleri verilir. Denetimde sorulabilecek konular için kanıt dosyası güncel tutulur; eksik bir belgenin denetim günü aranması yerine kayıtlar sürekli hazır durumda tutulur.'],
      ['5. Yönetim raporlaması, KPI ve sürekli iyileştirme','Yönetime yalnızca yapılan işler değil; açık aksiyonlar, yaklaşan yasal tarihler, kritik riskler, atık-su-enerji eğilimleri, tekrar eden saha bulguları ve iyileştirme fırsatları sunulur. Gerekli durumlarda aylık/yıllık KPI setleri oluşturulur. Böylece çevre performansı operasyonun dışında kalan bir konu olmaktan çıkar; yatırım, bakım, satın alma ve üretim kararlarına veri sağlayan bir yönetim göstergesine dönüşür.']
    ],
    deliverables:['İşletmeye özel mevzuat ve yükümlülük matrisi','Yıllık izin / beyan / ölçüm / analiz takvimi','Fotoğraflı saha denetim ve aksiyon kayıtları','İzin-lisans ve resmi yazışma dosya sistemi','Çevre eğitimleri ve farkındalık kayıtları','Yönetim KPI, risk ve performans raporu'],
    highlight:'Mevzuat masada, uygulama sahada, kanıt kayıt sisteminde yönetilir.'
  },
  {
    slug:'ced-yonetimi', icon:ClipboardCheck, title:'ÇED Yönetimi Danışmanlığı', image:'/service-eia.jpg',
    summary:'Yeni yatırım, kapasite artışı ve proses değişikliklerinde ÇED kapsamının doğru belirlenmesi ve sürecin uçtan uca yönetimi.',
    intro:'Bir yatırımın çevresel değerlendirme süreci yanlış kurgulandığında proje takvimi, izinler ve işletmeye alma aşaması doğrudan etkilenebilir. ARYA ECY; yatırım fikrini teknik verilerle birlikte değerlendirir, ÇED kapsamını doğru kurar ve karar sonrasındaki taahhütlerin sahada karşılık bulmasını sağlar.',
    sections:[
      ['1. Projenin çevresel kapsam analizi','Yatırım alanı, kapasite, proses, hammadde, ürün, enerji, su, emisyon, atıksu ve atık kaynakları birlikte değerlendirilir. Mevcut tesislerde planlanan kapasite veya proses değişikliğinin önceki karar ve izinlerle ilişkisi ayrıca incelenir.'],
      ['2. Başvuru dosyasının teknik kurgusu','Proje tanımı yalnızca metin olarak hazırlanmaz; sahada uygulanacak gerçek yatırım ile uyumlu teknik bir çerçevede oluşturulur. Yerleşim, kapasite, kaynak kullanımı, emisyon ve atık akışları gibi temel bilgiler birbirleriyle tutarlı hale getirilir.'],
      ['3. Kurum görüşleri ve revizyon yönetimi','Süreç sırasında talep edilen ilave bilgi, görüş ve revizyonlar proje ekibiyle birlikte değerlendirilir. Revizyonların yatırım kararlarını ve sonraki çevre izinlerini etkilememesi için teknik bütünlük korunur.'],
      ['4. Karar sonrası taahhütlerin takibi','ÇED sürecinde verilen çevresel taahhütler işletme için uygulanabilir bir kontrol listesine dönüştürülür. İnşaat, devreye alma ve işletme dönemindeki kritik yükümlülükler sorumlular ve terminlerle takip edilir.'],
      ['5. Yatırım ile izin süreçlerinin entegrasyonu','ÇED kararı ile çevre izni, su, atıksu, emisyon, atık ve diğer çevresel süreçlerin birbiriyle bağlantısı kontrol edilir. Böylece yatırım tamamlandığında eksik bir çevresel süreç nedeniyle gecikme yaşanma riski azaltılır.']
    ],
    deliverables:['ÇED kapsam / proje değişikliği ön değerlendirmesi','Teknik veri ve doküman ihtiyaç listesi','Başvuru ve revizyon takip tablosu','Karar sonrası çevresel taahhüt matrisi','Yatırım çevre izinleri yol haritası'],
    highlight:'Yatırım kararını çevresel yükümlülüklerle aynı masada yönetiriz.'
  },
  {
    slug:'atiksu-yonetimi', icon:Droplets, title:'Atıksu Yönetimi Danışmanlığı', image:'/service-water.webp',
    summary:'Atıksu kaynakları, arıtma performansı, analizler, deşarj koşulları ve geri kullanım fırsatlarının teknik yönetimi.',
    intro:'Atıksu yönetimi yalnızca çıkış suyundan numune alıp sonucu kontrol etmek değildir. Kaynağın nerede oluştuğunu, prosesle nasıl değiştiğini, arıtma sisteminin neden dalgalandığını ve suyun yeniden kullanım potansiyelini birlikte anlamak gerekir.',
    sections:[
      ['1. Atıksu envanteri ve su akış şeması','Proseste kullanılan suyun girişten çıkışa kadar izlediği yol çıkarılır. Evsel, proses, yıkama, soğutma ve diğer akımlar ayrı değerlendirilir; mümkün olan noktalarda debi ve kalite bilgileriyle su-atıksu dengesi kurulur.'],
      ['2. Karakterizasyon ve analiz planı','Atıksuyun proses kaynaklı değişkenliği dikkate alınarak ölçülmesi gereken parametreler, numune noktaları ve izleme sıklığı belirlenir. Sonuçlar yalnızca limit karşılaştırması için değil, arıtma performansını anlamak için de yorumlanır.'],
      ['3. Arıtma tesisi performans değerlendirmesi','Kimyasal tüketimleri, çamur oluşumu, pH, debi, havalandırma, çöktürme, filtrasyon ve benzeri işletme parametreleri incelenir. Uygunsuzlukların kök nedeni proses, ekipman veya işletme koşulları açısından değerlendirilir.'],
      ['4. Deşarj ve izin süreçleri','Deşarj noktaları, izin koşulları, analiz sonuçları ve periyodik yükümlülükler birlikte takip edilir. Tesisin izin dosyası ile sahadaki gerçek atıksu yönetiminin uyumlu olması sağlanır.'],
      ['5. Azaltım ve geri kullanım','Kaynakta azaltım, kapalı devre kullanım, durulama optimizasyonu, yağmur suyu, kondens veya uygun arıtılmış suyun yeniden kullanımı gibi seçenekler teknik uygulanabilirlik açısından değerlendirilir.']
    ],
    deliverables:['Su ve atıksu akış şeması','Atıksu karakterizasyon / numune planı','Arıtma performans kontrol listesi','Deşarj ve analiz takip tablosu','Azaltım ve geri kullanım fırsat listesi'],
    highlight:'Sorunu çıkış borusunda değil, oluştuğu proseste ararız.'
  },
  {
    slug:'atik-yonetimi', icon:Recycle, title:'Atık Yönetimi Danışmanlığı', image:'/service-waste.jpg',
    summary:'Atığın oluştuğu noktadan geçici depolama, taşıma, geri kazanım / bertaraf ve beyana kadar izlenebilir yönetim sistemi.',
    intro:'Atık Yönetimi Danışmanlığımız, tesiste oluşan her atığın kaynağından nihai geri kazanım veya bertaraf noktasına kadar izlenebilir, güvenli ve ekonomik biçimde yönetilmesini amaçlar. Atık kodunu seçip sevk yapmakla yetinmeyiz; atığın neden oluştuğunu, nasıl azaltılacağını, sahada hangi riskleri yarattığını, hangi ekipmanda toplanacağını, hangi lisanslı tesise hangi kayıtlarla gönderileceğini ve maliyetinin nasıl iyileştirileceğini birlikte yönetiriz.',
    sections:[
      ['1. Proses bazlı atık envanteri ve doğru sınıflandırma','Üretim, bakım, laboratuvar, depo, arıtma, ofis ve yardımcı işletmeler tek tek incelenir. Her atık için oluşum noktası, fiziksel özellik, muhtemel tehlikelilik, miktar, mevcut toplama yöntemi ve prosesle ilişkisi kayıt altına alınır. Atık kodu yalnızca isim benzerliğiyle değil, atığın hangi faaliyetten ve hangi içerikle oluştuğu değerlendirilerek belirlenir; tereddütlü akımlar için analiz veya teknik değerlendirme ihtiyacı tanımlanır.'],
      ['2. Kaynağında ayrı toplama ve saha standardı','Her üretim noktasında kullanılacak konteyner, varil, IBC veya diğer toplama ekipmanı belirlenir; etiket standardı ve görsel yönlendirmeler oluşturulur. Tehlikeli-tehlikesiz atıkların, geri kazanılabilir malzemelerin ve birbirleriyle reaksiyon riski bulunan akımların karışması önlenir. Saha düzeni çalışan açısından kolay uygulanabilir olacak şekilde tasarlanır ve ilgili personele uygulamalı eğitim verilir.'],
      ['3. Geçici depolama alanı ve çevresel güvenlik','Geçici depolama alanının kapasitesi, zemin ve sızdırmazlığı, üst örtüsü, drenajı, ikincil kontenmanı, yangın/dökülme ekipmanı, erişim kontrolü ve etiket düzeni incelenir. Kimyasal uyumsuzluklar ve olası sızıntının toprağa veya yağmur suyu hattına ulaşma riski değerlendirilir. Eksikler fotoğraflı aksiyon planına dönüştürülür ve kapanışları takip edilir.'],
      ['4. Sevk, lisanslı tesis ve izlenebilirlik yönetimi','Atığın niteliğine uygun taşıma ve kabul koşulları kontrol edilir; geri kazanım/bertaraf firmasının ilgili atığı kabul etmeye yetkili olup olmadığı doğrulanır. Sevk öncesi kayıtlar hazırlanır, teslim belgeleri kapatılır ve miktarlar dönemsel olarak mutabık hale getirilir. Böylece tesisten çıkan atığın nihai hareketi belgeyle izlenebilir olur.'],
      ['5. Beyan, performans, azaltım ve maliyet optimizasyonu','Yıllık atık miktarları sevk kayıtlarıyla karşılaştırılır; beyan altyapısı düzenli tutulur. Kg ürün başına atık, tehlikeli atık oranı, geri kazanım oranı ve atık maliyeti gibi göstergelerle performans izlenir. Fire azaltımı, ambalaj optimizasyonu, yeniden kullanım, tedarikçiye iade ve alternatif geri kazanım kanalları teknik ve ekonomik açıdan değerlendirilir.']
    ],
    deliverables:['Proses bazlı atık envanteri ve kod matrisi','Toplama ekipmanı / etiketleme saha standardı','Geçici depolama uygunluk ve risk raporu','Lisanslı tesis ve sevk izlenebilirlik kayıtları','Beyan mutabakat ve miktar takip tablosu','Atık azaltım, geri kazanım ve maliyet fırsat planı'],
    highlight:'Atığı bir gider kalemi değil; yönetilebilir bir malzeme akışı olarak görürüz.'
  },
  {
    slug:'tmgd', icon:Truck, title:'TMGD Danışmanlığı', image:'/service-tmgd.jpg',
    summary:'Tehlikeli madde taşımacılığı faaliyetlerinde ADR sorumlulukları, saha uygulamaları ve operasyon kayıtlarının yönetimi.',
    intro:'Tehlikeli madde güvenlik danışmanlığı; yalnızca yıllık rapor hazırlamak değil, gönderme, alma, yükleme, boşaltma, ambalajlama ve taşıma faaliyetlerinin günlük operasyonda güvenli ve kurallı yürütülmesini sağlamaktır.',
    sections:[
      ['1. Faaliyet ve rol analizi','İşletmenin tehlikeli madde zincirinde gönderici, alıcı, yükleyen, boşaltan, paketleyen veya dolduran gibi hangi rolleri üstlendiği belirlenir. Her role bağlı sorumluluklar operasyon akışına yerleştirilir.'],
      ['2. Tehlikeli madde envanteri','Taşınan maddelerin sınıfı, UN numarası, paketleme grubu, miktarı, taşıma şekli ve muafiyet koşulları kontrol edilir. Yeni ürün ve kimyasallar sisteme dahil oldukça envanter güncellenir.'],
      ['3. Evrak, etiketleme ve araç kontrolleri','Taşıma evrakları, ambalaj ve işaretlemeler, araç ve ekipman gereklilikleri ile yükleme öncesi kontroller operasyonel kontrol listeleri üzerinden doğrulanır.'],
      ['4. Saha gözlemi ve uygunsuzluk yönetimi','Yükleme-boşaltma alanı, personel uygulamaları, acil durum ekipmanları ve fiili operasyon düzenli olarak gözlemlenir. Uygunsuzluklar düzeltici faaliyetlerle takip edilir.'],
      ['5. Olay, eğitim ve yıllık değerlendirme','Olayların kayıt ve değerlendirilmesi, personel farkındalığı ve dönemsel raporlama süreçleri birlikte yönetilerek TMGD hizmeti yaşayan bir güvenlik sistemine dönüştürülür.']
    ],
    deliverables:['ADR rol ve faaliyet matrisi','Tehlikeli madde envanteri','Operasyon kontrol formları','Uygunsuzluk / olay takip kayıtları','Dönemsel ve yıllık TMGD değerlendirmeleri'],
    highlight:'Belgeyi değil, tehlikeli madde operasyonunun tamamını yönetiriz.'
  },
  {
    slug:'kdu', icon:FlaskConical, title:'KDU Danışmanlığı', image:'/service-kdu.jpg',
    summary:'Kimyasal envanter, güvenlik bilgi formları, sınıflandırma, etiketleme ve kimyasal mevzuat yükümlülüklerinin yönetimi.',
    intro:'Kimyasal yönetiminde doğru kararın temeli doğru veridir. ARYA ECY, işletmedeki kimyasal ürünleri miktar, kullanım, tehlike sınıfı, tedarikçi dokümanı ve mevzuat yükümlülükleriyle birlikte ele alarak izlenebilir bir kimyasal yönetim altyapısı oluşturur.',
    sections:[
      ['1. Kimyasal envanterin kurulması','Hammadde, yardımcı kimyasal, bakım ürünü ve proses kimyasalları tek envanterde toplanır. Ürün adı, tedarikçi, kullanım alanı, miktar, depolama noktası ve güvenlik bilgi formu durumu birlikte izlenir.'],
      ['2. Güvenlik bilgi formu kalite kontrolü','GBF/SDS dokümanlarının güncelliği, dil, sınıflandırma, tehlike ifadeleri, maruziyet ve depolama bilgileri kontrol edilir. Eksik veya güncel olmayan dokümanlar tedarikçi aksiyonuna dönüştürülür.'],
      ['3. Sınıflandırma, etiketleme ve saha uyumu','Etiketler, kaplar, transfer kapları ve depolama alanları kimyasalın tehlike özelliklerine göre değerlendirilir. Uyumsuz kimyasalların birlikte depolanması ve ikincil sızdırmazlık gibi saha riskleri kontrol edilir.'],
      ['4. Mevzuat eşikleri ve yükümlülük takibi','Kimyasal miktarları ve kullanım biçimleri ilgili yükümlülük eşikleri açısından periyodik olarak değerlendirilir. Yeni kimyasal girişi veya miktar değişikliği olduğunda mevzuat etkisi tekrar kontrol edilir.'],
      ['5. Çalışan farkındalığı ve acil durum bağlantısı','Kimyasalla çalışan personelin gerekli bilgilere hızlı ulaşması, dökülme ve maruziyet senaryolarının acil durum planlarıyla uyumlu olması sağlanır.']
    ],
    deliverables:['Kurumsal kimyasal envanter','GBF / SDS uygunluk listesi','Kimyasal depolama uyum kontrolü','Yükümlülük eşik takip tablosu','Kimyasal saha iyileştirme aksiyonları'],
    highlight:'Kimyasal veriyi raflarda değil, karar mekanizmasının içinde tutarız.'
  },
  {
    slug:'esg', icon:Globe2, title:'ESG Danışmanlığı', image:'/service-esg.png',
    summary:'Çevresel, sosyal ve yönetişim göstergelerinin veri sahipliği, hedefler, performans takibi ve raporlama altyapısı.',
    intro:'ESG çalışması bir sunum veya yıllık rapor hazırlama işi değildir. Doğru göstergelerin seçilmesi, verinin kaynağının belli olması, sorumluların tanımlanması ve performansın yönetim kararlarına girecek şekilde izlenmesi gerekir.',
    sections:[
      ['1. Öncelik ve etki alanlarının belirlenmesi','Şirketin faaliyetleri, paydaş beklentileri, çevresel etkileri, çalışan ve yönetişim yapısı değerlendirilerek izlenmesi gereken ana konu başlıkları belirlenir.'],
      ['2. Gösterge ve veri mimarisi','Enerji, emisyon, su, atık, çalışan, iş sağlığı-güvenliği, etik, tedarik ve yönetişim gibi göstergeler için veri kaynağı, hesaplama yöntemi, sorumlu kişi ve kontrol mekanizması tanımlanır.'],
      ['3. Hedef ve performans yönetimi','Baz yıl ve mevcut performans belirlenir; gerçekçi, ölçülebilir hedefler oluşturulur. Hedeflerin yalnızca raporda kalmaması için projeler, bütçe ve sorumlularla ilişkilendirilir.'],
      ['4. Veri doğrulama ve kanıt yapısı','Raporlanan verilerin dayandığı sayaç, fatura, analiz, kayıt ve sistem çıktıları izlenebilir hale getirilir. Veri tutarsızlıkları ve eksikler raporlama öncesinde tespit edilir.'],
      ['5. Yönetim ve raporlama hazırlığı','Dönemsel ESG performansı yönetim için sade bir gösterge setine dönüştürülür. Güçlü alanlar, riskler ve iyileştirme projeleri karar vericilerin görebileceği şekilde sunulur.']
    ],
    deliverables:['ESG konu ve gösterge matrisi','Veri sahipliği / sorumluluk tablosu','Baz yıl ve hedef seti','Kanıt / veri doğrulama listesi','Yönetim ESG performans özeti'],
    highlight:'ESG’yi rapor yazımından önce veri ve yönetim disiplini olarak kurarız.'
  },
  {
    slug:'karbon-ayak-izi', icon:Trees, title:'Karbon Ayak İzi Danışmanlığı', image:'/service-carbon.png',
    summary:'Kurumsal sera gazı envanteri, veri kalitesi, hesaplama, doğrulama hazırlığı ve azaltım yol haritası.',
    intro:'Karbon ayak izi çalışmasının değeri yalnızca toplam emisyon sonucunda değildir. Hangi faaliyetlerin emisyonu yükselttiğini, verinin ne kadar güvenilir olduğunu ve hangi azaltım projesinin gerçekten etkili olacağını gösterebilmesi gerekir.',
    sections:[
      ['1. Organizasyon ve operasyon sınırları','Hesaba dahil edilecek tesisler, faaliyetler ve operasyonel kontrol sınırları tanımlanır. Hesaplama dönemi ve baz yıl yaklaşımı netleştirilir.'],
      ['2. Emisyon kaynak envanteri','Yakıt, elektrik, proses, soğutucu gaz, şirket araçları, lojistik, iş seyahati ve ilgili diğer doğrudan / dolaylı kaynaklar belirlenir. Her kaynak için veri sorumlusu ve kanıt dokümanı tanımlanır.'],
      ['3. Veri kalite kontrolü ve hesaplama','Tüketim verileri birim, dönem ve kapsam açısından kontrol edilir; uygun emisyon faktörleriyle hesaplama yapılır. Tahmin kullanılan alanlar ve veri belirsizlikleri ayrıca işaretlenir.'],
      ['4. Emisyon yoğunluğu ve sıcak noktalar','Toplam sonucun yanında ton ürün, ciro, çalışan veya uygun başka faaliyet göstergelerine göre yoğunluk metrikleri oluşturulur. En yüksek emisyon kaynakları azaltım önceliği için belirlenir.'],
      ['5. Azaltım yol haritası','Enerji verimliliği, yenilenebilir enerji, yakıt dönüşümü, proses iyileştirmesi, lojistik ve tedarik gibi başlıklarda uygulanabilir projeler etki ve fizibilite açısından sıralanır.']
    ],
    deliverables:['Sera gazı kaynak envanteri','Kurumsal karbon ayak izi hesaplama dosyası','Veri / kanıt kalite kontrol tablosu','Emisyon yoğunluğu ve sıcak nokta analizi','Karbon azaltım yol haritası'],
    highlight:'Karbon hesabını bir sonuç tablosundan azaltım kararlarına dönüştürürüz.'
  },
  {
    slug:'su-ayak-izi', icon:Waves, title:'Su Ayak İzi Danışmanlığı', image:'/service-water.webp',
    summary:'Su kullanımının miktar, kaynak, havza riski ve çevresel etki boyutlarıyla değerlendirilmesi.',
    intro:'Aynı miktarda su tüketimi farklı bölgelerde aynı çevresel anlama gelmez. Su ayak izi yaklaşımı; ne kadar su kullanıldığını, nereden alındığını, hangi proseste tüketildiğini ve bulunduğu havzanın koşullarını birlikte ele alır.',
    sections:[
      ['1. Su kaynakları ve tüketim sınırı','Şebeke, kuyu, yüzey suyu, yağmur suyu veya diğer kaynaklar ayrı tanımlanır. Hesaplama kapsamına dahil edilecek tesisler, prosesler ve dönem belirlenir.'],
      ['2. Su dengesi ve proses kırılımı','Ana sayaç ile alt kullanım noktaları arasında su dengesi kurulur; üretim, yıkama, soğutma, kazan, sosyal kullanım ve diğer tüketimler mümkün olduğunca ayrıştırılır.'],
      ['3. Havza ve su riski yaklaşımı','Tesisin bulunduğu bölgedeki su stresi, mevsimsellik ve kaynak hassasiyeti değerlendirmeye dahil edilir. Böylece yalnızca tüketim miktarı değil, tüketimin gerçekleştiği çevresel bağlam da görünür olur.'],
      ['4. Kayıp ve geri kullanım potansiyeli','Sayaç farkları, sürekli akışlar, taşmalar, temizlik yöntemleri ve geri kullanım imkanları incelenerek azaltım alanları belirlenir.'],
      ['5. Hedef ve izleme sistemi','Önemli tüketim noktaları için performans göstergeleri ve azaltım hedefleri oluşturulur. Sonuçların dönemsel izlenebilmesi için veri toplama yapısı standardize edilir.']
    ],
    deliverables:['Su kaynak ve tüketim envanteri','Proses bazlı su dengesi','Havza / su riski değerlendirmesi','Kayıp ve geri kullanım fırsat listesi','Su performans göstergeleri ve hedefleri'],
    highlight:'Suyu yalnızca tüketim miktarıyla değil, bulunduğu havzanın değeriyle birlikte yönetiriz.'
  },
  {
    slug:'su-verimliligi', icon:Gauge, title:'Su Verimliliği Danışmanlığı', image:'/service-water-eff.jpg',
    summary:'Su tüketimini azaltmak, kaçak ve kayıpları önlemek, prosesleri optimize etmek ve yeniden kullanım olanaklarını geliştirmek.',
    intro:'Su verimliliğinde gerçek kazanım, genel tüketimi görmekten değil tüketimin neden oluştuğunu anlamaktan gelir. ARYA ECY, suyu proses bazında izleyerek teknik ve operasyonel tasarruf potansiyelini somut aksiyonlara dönüştürür.',
    sections:[
      ['1. Ölçüm altyapısı ve su dengesi','Mevcut sayaç yapısı değerlendirilir; kritik tüketim noktalarında alt ölçüm ihtiyacı belirlenir. Ana tüketim ile proses tüketimleri karşılaştırılarak görünmeyen kayıplar araştırılır.'],
      ['2. Proses ve ekipman analizi','Yıkama, durulama, soğutma, kazan, ters ozmoz, arıtma, sosyal kullanım ve benzeri noktalar ekipman ve çalışma yöntemi açısından incelenir.'],
      ['3. Hızlı kazanım uygulamaları','Kaçak giderme, basınç / debi ayarı, otomatik kapanma, nozul değişimi, temizlik standardı ve işletme disiplinine dayalı düşük maliyetli aksiyonlar belirlenir.'],
      ['4. Geri kullanım ve alternatif kaynaklar','Uygun kalitedeki proses suyu, arıtılmış su, kondens veya yağmur suyunun yeniden kullanım potansiyeli kalite gereksinimleriyle birlikte değerlendirilir.'],
      ['5. Teknik-ekonomik önceliklendirme','Her proje beklenen su tasarrufu, yatırım ihtiyacı, işletme etkisi ve geri dönüş süresine göre sıralanır. Böylece işletme uygulanabilir bir su verimliliği yol haritasına sahip olur.']
    ],
    deliverables:['Sayaç ve ölçüm ihtiyaç analizi','Detaylı su dengesi','Hızlı kazanım aksiyon listesi','Geri kullanım teknik ön değerlendirmesi','Tasarruf / yatırım önceliklendirme tablosu'],
    highlight:'Her metreküp su için “nerede, neden ve nasıl azaltılır?” sorusunu sorarız.'
  },
  {
    slug:'enerji-yonetimi', icon:Zap, title:'Enerji Yönetimi Danışmanlığı', image:'/service-energy.png',
    summary:'Enerji tüketiminin proses bazında izlenmesi, önemli kullanım alanlarının belirlenmesi ve verimlilik fırsatlarının yönetimi.',
    intro:'Enerji yönetimi yalnızca faturayı izlemek değildir. Üretim miktarı, ekipman çalışma süresi, proses koşulları ve enerji tüketimi birlikte değerlendirilerek kayıpların nerede oluştuğu ve hangi projelerin gerçek tasarruf sağlayacağı belirlenmelidir.',
    sections:[
      ['1. Enerji profili ve baz tüketim','Elektrik, doğal gaz, yakıt, buhar veya diğer enerji türleri dönemsel olarak analiz edilir. Üretim ve çalışma koşullarından bağımsız baz tüketimler ile anormal sapmalar belirlenir.'],
      ['2. Önemli enerji kullanım alanları','Motorlar, pompalar, fanlar, basınçlı hava, soğutma, ısıtma, fırınlar, proses ısısı, aydınlatma ve diğer büyük tüketiciler önceliklendirilir.'],
      ['3. Performans göstergeleri','Toplam tüketimin yanında ürün, proses, saat veya uygun başka faaliyet göstergelerine göre enerji yoğunluğu takip edilir. Böylece yalnızca üretim artışından kaynaklanan tüketim ile verimsizlik ayrıştırılır.'],
      ['4. Verimlilik projeleri','Basınçlı hava kaçakları, motor verimi, hız kontrolü, ısı geri kazanımı, izolasyon, set değerleri, otomasyon ve çalışma programı gibi alanlarda teknik iyileştirmeler değerlendirilir.'],
      ['5. Proje önceliği ve sürdürülebilir takip','Tasarruf potansiyeli, yatırım maliyeti, geri dönüş süresi ve operasyon riski birlikte değerlendirilerek proje portföyü oluşturulur; tamamlanan projelerin gerçek kazanımı ölçülür.']
    ],
    deliverables:['Enerji tüketim ve yoğunluk analizi','Önemli enerji kullanım alanları listesi','Enerji kayıp / verimlilik fırsat raporu','Teknik-ekonomik proje önceliklendirmesi','Periyodik enerji performans takip seti'],
    highlight:'Enerjiyi faturada değil, proseste yönetiriz.'
  },
];

export const ministryUrl='https://www.csb.gov.tr/';
export const ucbsUrl='https://ucbs.cevre.gov.tr/';
