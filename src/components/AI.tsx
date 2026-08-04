export default function AI() {
  return (
    <section id="ai" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-green-700">
            Arya AI
          </p>

          <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Yapay zekâ destekli çevre uzmanınız
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Mevzuat yorumlama, görev takibi, raporlama ve çevresel performans
            analizlerinde Arya AI ile daha hızlı ve kontrollü ilerleyin.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Çevre mevzuatı hakkında akıllı yönlendirme",
              "Görev ve yükümlülükler için öneriler",
              "Rapor ve doküman hazırlama desteği",
              "Karbon, su ve sürdürülebilirlik analizleri",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                  ✓
                </span>
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="https://app.aryaecy.com"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
          >
            Arya AI’ı Keşfet
          </a>
        </div>

        <div className="rounded-[2rem] bg-slate-950 p-8 shadow-2xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
              Arya AI Asistan
            </p>

            <div className="mt-6 space-y-4">
              <div className="ml-auto max-w-sm rounded-2xl rounded-br-md bg-green-600 p-4 text-white">
                Bu tesis hangi çevre izinlerine tabi?
              </div>

              <div className="max-w-md rounded-2xl rounded-bl-md bg-white p-5 text-slate-700">
                Tesisin faaliyet konusu ve kapasitesine göre çevre izinleri,
                emisyon, atıksu ve atık yükümlülükleri değerlendirilmelidir.
                İsterseniz tesis bilgilerini birlikte inceleyebiliriz.
              </div>

              <div className="ml-auto max-w-sm rounded-2xl rounded-br-md bg-green-600 p-4 text-white">
                Gerekli kontrol listesini hazırla.
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-slate-400">
              Arya AI’a bir soru sorun...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}