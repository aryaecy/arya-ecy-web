export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <a href="/">
          <img
            src="/logo.png"
            alt="Arya"
            className="h-12"
          />
        </a>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#hizmetler" className="hover:text-green-600 transition">
            Hizmetler
          </a>

          <a href="#yazilim" className="hover:text-green-600 transition">
            Yazılım
          </a>

          <a href="#ai" className="hover:text-green-600 transition">
            Arya AI
          </a>

          <a href="#iletisim" className="hover:text-green-600 transition">
            İletişim
          </a>
        </nav>

        <a
          href="https://app.aryaecy.com"
          className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
        >
          Platforma Giriş
        </a>

      </div>
    </header>
  );
}