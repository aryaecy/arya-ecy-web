import {ministryUrl,ucbsUrl} from '@/lib/siteData';
export default function Navbar(){return <header className="topbar v24-topbar">
  <div className="brand-zone">
    <a href="/" className="brand"><img src="/logo.png" alt="ARYA Entegre Çevre Yönetimi"/></a>
    <div className="brand-quick" aria-label="Hızlı bağlantılar">
      <a href={ministryUrl} target="_blank" rel="noreferrer"><i className="qicon">Ç</i><span>ÇSB</span></a>
      <a href={ucbsUrl} target="_blank" rel="noreferrer"><i className="qicon">U</i><span>UÇBS</span></a>
      <a href="https://www.linkedin.com/company/arya-entegre-%C3%A7evre-y%C3%B6netimi-ve-m%C3%BChendislik-a-%C5%9F/" target="_blank" rel="noreferrer"><i className="qicon in">in</i><span>LinkedIn</span></a>
    </div>
  </div>
  <nav className="main-nav v24-nav">
    <a href="/#hakkimizda">Hakkımızda</a><a href="/hizmetler">Hizmetler</a><a href="/#iletisim">İletişim</a><a href="/kutuphane">Kütüphane</a><a href="/kanun-yonetmelikler">Kanun / Yönetmelikler</a>
  </nav>
  <div className="login-stack">
    <div className="login-row top"><a className="corp-login" href="/yonetim"><i className="login-icon">AŞ</i><span>ARYA A.Ş.</span></a><a className="ai-login" href="#" aria-label="ARYA AI"><i className="login-icon">AI</i><span>ARYA AI</span></a></div>
    <div className="login-row"><a href="https://app.aryaecy.com" target="_blank" rel="noreferrer"><i className="login-icon">E</i><span>aryaECY</span></a><a href="https://arya-akademi.vercel.app" target="_blank" rel="noreferrer"><i className="login-icon">A</i><span>aryaAKADEMİ</span></a></div>
  </div>
</header>}
