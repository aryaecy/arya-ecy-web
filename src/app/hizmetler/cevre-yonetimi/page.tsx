import Link from "next/link";
import {
  Leaf,
  ShieldCheck,
  ClipboardCheck,
  BellRing,
  FileCheck,
  BarChart3,
} from "lucide-react";

export default function CevreYonetimiPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <p className="uppercase tracking-[4px] text-green-300 font-semibold">
            ARYA ECY
          </p>

          <h1 className="mt-4 text-6xl font-extrabold leading-tight">
            Çevre Yönetimi
            <br />
            Danışmanlığı
          </h1>

          <p className="mt-8 text-xl text-green-100 leading-9 max-w-3xl">
            Çevre mevzuatına tam uyum sağlayın. Arya ECY ile tüm çevresel
            yükümlülüklerinizi tek panelden yönetin, risklerinizi azaltın,
            resmi süreçlerinizi dijitalleştirin.
          </p>

          <div className="mt-10 flex gap-5">

            <Link
              href="/platform"
              className="bg-white text-green-800 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              Platformu İncele
            </Link>

            <Link
              href="/iletisim"
              className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-800 transition"
            >
              Teklif Al
            </Link>

          </div>

        </div>
      </section>

      {/* Hizmetler */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold text-slate-900 text-center">
            Çevre Yönetimi Kapsamımız
          </h2>

          <p className="text-slate-700 text-xl leading-9 text-center mt-6 max-w-3xl mx-auto">
            İşletmenizin tüm çevre yükümlülüklerini tek platform üzerinden
            takip ediyor, mevzuata tam uyum sağlayacak profesyonel danışmanlık
            sunuyoruz.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                icon: Leaf,
                title: "Çevre İzin ve Lisansları",
                text: "İzin ve lisans süreçlerinin eksiksiz yürütülmesi.",
              },
              {
                icon: ClipboardCheck,
                title: "Mevzuat Takibi",
                text: "Güncel çevre mevzuatının sürekli takibi.",
              },
              {
                icon: BellRing,
                title: "Resmi Bildirimler",
                text: "Beyan ve bildirimlerin zamanında yapılması.",
              },
              {
                icon: ShieldCheck,
                title: "İç Denetimler",
                text: "Saha denetimleri ve mevzuat uygunluk kontrolleri.",
              },
              {
                icon: FileCheck,
                title: "Dijital Evrak Yönetimi",
                text: "Tüm belgelerin güvenli dijital arşivlenmesi.",
              },
              {
                icon: BarChart3,
                title: "Online Raporlama",
                text: "Anlık performans ve çevresel risk raporları.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md hover:shadow-xl transition duration-300"
                >

                  <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">

                    <Icon className="text-green-700" size={30} />

                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-slate-700 leading-8 text-lg">
                    {item.text}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* Avantajlar */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold text-slate-900 text-center">
            Neden Arya ECY?
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 mt-16">

            <div>

              <ul className="space-y-8 text-lg text-slate-800">

                <li>✅ Yapay zekâ destekli çevre yönetimi</li>

                <li>✅ Otomatik mevzuat güncellemeleri</li>

                <li>✅ Resmi bildirim hatırlatma sistemi</li>

                <li>✅ Mobil cihazlardan erişim</li>

                <li>✅ Dijital evrak yönetimi</li>

                <li>✅ Tek panelden tüm tesislerin yönetimi</li>

                <li>✅ Online analiz ve raporlama</li>

              </ul>

            </div>

            <div className="rounded-3xl bg-green-700 text-white p-10">

              <h3 className="text-3xl font-bold">
                %100 Mevzuat Uyumuna Hazır
              </h3>

              <p className="mt-6 text-green-100 leading-8 text-lg">
                Arya ECY Platformu ile çevresel süreçlerinizi dijital ortama
                taşıyın, riskleri azaltın ve sürdürülebilir yönetim anlayışına
                geçiş yapın.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}