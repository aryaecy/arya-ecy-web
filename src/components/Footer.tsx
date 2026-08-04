export default function Footer() {
  return (
    <footer id="iletisim" className="bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src="/logo.png"
            alt="Arya ECY"
            className="h-14 rounded-lg bg-white p-2"
          />

          <p className="mt-6 leading-7 text-slate-400">
            Çevre ve sürdürülebilirlik süreçlerini tek platformda yöneten
            yeni nesil dijital çözüm.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Hızlı Bağlantılar</h3>

          <div className="mt-5 flex flex-col gap-3 text-slate-400">
            <a href="#hizmetler" className="hover:text-green-400">
              Hizmetler
            </a>
            <a href="#yazilim" className="hover:text-green-400">
              Yazılım
            </a>
            <a href="#ai" className="hover:text-green-400">
              Arya AI
            </a>
            <a href="https://app.aryaecy.com" className="hover:text-green-400">
              Platform Giriş
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">Çözümler</h3>

          <div className="mt-5 flex flex-col gap-3 text-slate-400">
            <span>Çevre Yönetimi</span>
            <span>ÇED Yönetimi</span>
            <span>Atık ve Atıksu Yönetimi</span>
            <span>ESG ve Sürdürülebilirlik</span>
            <span>Karbon ve Su Ayak İzi</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">İletişim</h3>

          <div className="mt-5 space-y-3 text-slate-400">
            <p>Sakarya, Türkiye</p>
            <p>info@aryaecy.com</p>
            <p>www.aryaecy.com</p>
            <p>app.aryaecy.com</p>
          </div>

          <a
            href="mailto:info@aryaecy.com"
            className="mt-6 inline-flex rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Bize Ulaşın
          </a>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Arya ECY. Tüm hakları saklıdır.</p>
        <p>Entegre Çevre Yönetimi Platformu</p>
      </div>
    </footer>
  );
}