export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <img
            src="/logo.png"
            alt="Arya ECY"
            className="h-16"
          />

          <nav className="hidden gap-8 lg:flex">
            <a href="#hizmetler">Hizmetler</a>
            <a href="#yazilim">Yazılım</a>
            <a href="#hakkimizda">Hakkımızda</a>
            <a href="#iletisim">İletişim</a>
          </nav>

          <a
            href="https://app.aryaecy.com"
            className="rounded-xl bg-green-600 px-5 py-3 text-white hover:bg-green-700"
          >
            Platform Giriş
          </a>

        </div>
      </header>

      {/* Hero */}

      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white">

        <div className="mx-auto flex max-w-7xl items-center px-6 py-24">

          <div className="w-1/2">

            <h1 className="mb-8 text-6xl font-bold leading-tight">

              Türkiye'nin
              <br />

              Entegre Çevre
              <br />

              Yönetim Platformu

            </h1>

            <p className="mb-10 text-xl">

              Çevre Yönetimi, ÇED, Atık, Atıksu, ESG,
              Karbon Ayak İzi ve Yapay Zeka çözümlerini
              tek platformda yönetin.

            </p>

            <div className="flex gap-5">

              <a
                href="https://app.aryaecy.com"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-green-700"
              >
                Platforma Giriş
              </a>

              <a
                href="#iletisim"
                className="rounded-xl border border-white px-8 py-4"
              >
                Demo Talep Et
              </a>

            </div>

          </div>

          <div className="w-1/2">

            <img
              src="/hero.png"
              alt="Arya Platform"
            />

          </div>

        </div>

      </section>
<section id="hizmetler" className="bg-white px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-3 font-semibold uppercase tracking-widest text-green-700">
        Entegre Çözümler
      </p>

      <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
        Tüm Çevre Süreçleriniz Tek Platformda
      </h2>

      <p className="mt-5 text-lg text-slate-600">
        Mevzuat takibinden sürdürülebilirlik raporlamasına kadar tüm
        süreçlerinizi dijital, güvenli ve ölçülebilir şekilde yönetin.
      </p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        ["01", "Çevre Yönetimi", "Çevre mevzuatı, izinler ve yükümlülükleri yönetin."],
        ["02", "ÇED Yönetimi", "ÇED süreçlerini uçtan uca dijital olarak takip edin."],
        ["03", "Atıksu Yönetimi", "Arıtma, analiz ve deşarj süreçlerini yönetin."],
        ["04", "Atık Yönetimi", "Atık beyanı, taşıma ve bertaraf süreçlerini izleyin."],
        ["05", "TMGD", "Tehlikeli madde güvenlik danışmanlığı süreçlerini yönetin."],
        ["06", "KDU", "Kimyasal değerlendirme ve uyumluluk süreçlerini takip edin."],
        ["07", "ESG", "Çevresel, sosyal ve yönetişim performansınızı raporlayın."],
        ["08", "Karbon Ayak İzi", "Emisyonlarınızı hesaplayın, azaltın ve raporlayın."],
        ["09", "Su Ayak İzi", "Su tüketiminizi ölçün ve sürdürülebilir şekilde yönetin."],
        ["10", "Su Verimliliği", "Su kullanımınızı izleyin ve verimlilik sağlayın."],
        ["11", "Yapay Zekâ", "Arya AI ile süreçlerinizi hızlandırın ve akıllı öneriler alın."],
      ].map(([number, title, description]) => (
        <article
          key={title}
          className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="text-4xl font-bold text-green-100 transition group-hover:text-green-200">
              {number}
            </span>

            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-2xl text-green-700">
              ●
            </span>
          </div>

          <h3 className="mb-3 text-xl font-bold text-slate-900">
            {title}
          </h3>

          <p className="leading-7 text-slate-600">
            {description}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>
<section id="yazilim" className="bg-slate-950 px-6 py-24 text-white">
  <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
    <div>
      <p className="mb-3 font-semibold uppercase tracking-widest text-green-400">
        Arya ECY Platformu
      </p>

      <h2 className="text-4xl font-bold leading-tight md:text-5xl">
        Çevre süreçlerinizi tek merkezden yönetin
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-300">
        Görevlerden izin takibine, raporlamadan sürdürülebilirlik
        performansına kadar tüm süreçleri gerçek zamanlı izleyin.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {[
          "Gerçek zamanlı dashboard",
          "Görev ve bildirim yönetimi",
          "İzin ve mevzuat takibi",
          "Mobil erişim",
          "Raporlama ve analiz",
          "Yapay zekâ destekli asistan",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <span className="mr-2 text-green-400">✓</span>
            {item}
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="https://app.aryaecy.com"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-green-500 px-7 py-4 font-semibold text-white transition hover:bg-green-400"
        >
          Platforma Giriş
        </a>

        <a
          href="#iletisim"
          className="rounded-xl border border-white/20 px-7 py-4 font-semibold transition hover:bg-white/10"
        >
          Demo Talep Et
        </a>
      </div>
    </div>

    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-green-500/20 blur-3xl" />

      <img
        src="/hero.png"
        alt="Arya ECY Platform ekranı"
        className="relative rounded-3xl border border-white/10 shadow-2xl"
      />
    </div>
  </div>
</section>
    </main>
  );
}

