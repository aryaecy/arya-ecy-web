'use client';
import {useLanguage} from '@/components/LanguageProvider';
export default function Navbar(){const {lang,toggle}=useLanguage();const en=lang==='en';return <header className="final-topbar">
  <a href="/" className="final-brand"><img src="/logo.png" alt="ARYA ECY"/></a>
  <nav className="final-main-nav" aria-label={en?'Main menu':'Ana menü'}>
    <a href="/hakkimizda">{en?'About Us':'Hakkımızda'}</a><a href="/hizmetler">{en?'Services':'Hizmetler'}</a><a href="/kutuphane">{en?'Library':'Kütüphane'}</a><a href="/mevzuat">{en?'Legislation':'Mevzuat'}</a><a href="/iletisim">{en?'Contact':'İletişim'}</a><a href="/kariyer">{en?'Careers':'Kariyer'}</a><a href="#">ARYA AI</a>
  </nav>
  <div className="final-apps"><button className="lang-toggle" onClick={toggle} aria-label="Dil değiştir">{en?'TR':'EN'}</button><a href="https://app.aryaecy.com" target="_blank" rel="noreferrer"><span className="app-dot"/>aryaECY <b>↗</b></a><a href="https://arya-akademi.vercel.app" target="_blank" rel="noreferrer"><span className="app-dot"/>aryaAKADEMİ <b>↗</b></a></div>
</header>}
