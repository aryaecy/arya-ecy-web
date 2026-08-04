export default function CevreYonetimiPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-bold">
            Çevre Yönetimi Danışmanlığı
          </h1>

          <p className="mt-6 text-xl max-w-3xl text-green-100">
            Arya ECY ile çevre mevzuatına tam uyum sağlayın,
            tüm çevre yönetimi süreçlerinizi dijital olarak yönetin
            ve yapay zekâ destekli platformumuz sayesinde
            yükümlülüklerinizi tek noktadan takip edin.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="/"
              className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold"
            >
              Ana Sayfa
            </a>

            <a
              href="https://app.aryaecy.com"
              className="border border-white px-8 py-4 rounded-xl"
            >
              Platforma Giriş
            </a>
          </div>

        </div>
      </section>

      {/* Hizmetler */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Çevre Yönetimi Danışmanlığı Kapsamı
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            <div className="p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold">
                Mevzuat Takibi
              </h3>

              <p className="mt-4 text-gray-600">
                Güncel çevre mevzuatını takip ederek işletmenizin
                tüm yükümlülüklerini eksiksiz yerine getiriyoruz.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold">
                Çevre İzin Süreçleri
              </h3>

              <p className="mt-4 text-gray-600">
                Çevre izin ve lisans süreçlerini dijital ortamda
                planlıyor ve yönetiyoruz.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold">
                Aylık Saha Denetimleri
              </h3>

              <p className="mt-4 text-gray-600">
                Tesislerinizi düzenli ziyaret ederek çevresel
                uygunluk kontrollerini gerçekleştiriyoruz.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold">
                Dijital Takip
              </h3>

              <p className="mt-4 text-gray-600">
                Arya ECY Platformu üzerinden tüm çevre süreçlerinizi
                tek panelden yönetebilirsiniz.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}