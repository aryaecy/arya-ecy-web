'use client';
import {useEffect,useState} from 'react';import {getPublished,SiteContent} from '@/lib/cms';import {useLanguage} from '@/components/LanguageProvider';
const ext=' ↗';
export default function Footer(){const {lang}=useLanguage();const [contact,setContact]=useState<SiteContent|null>(null);useEffect(()=>{getPublished('contact').then(x=>setContact(x[0]||null))},[]);const email=contact?.excerpt||'arya@aryaecy.com';return <footer className="final-footer final-footer-compact" id="iletisim"><div className="footer-bottom">
    <a className="mail" href={`mailto:${email}`}>✉ {email}</a>
    <div className="quick"><a href="/yonetim">ARYA{ext}</a><a href="https://www.csb.gov.tr/" target="_blank" rel="noreferrer">CSB{ext}</a><a href="https://ucbs.cevre.gov.tr/" target="_blank" rel="noreferrer">UCBS{ext}</a><a href="https://www.cmo.org.tr/" target="_blank" rel="noreferrer">CMO{ext}</a><a href="https://www.linkedin.com/company/arya-entegre-%C3%A7evre-y%C3%B6netimi-ve-m%C3%BChendislik-a-%C5%9F/" target="_blank" rel="noreferrer">LinkedIn{ext}</a></div>
    <span>© 2026 ARYA ECY · {lang==='en'?'All rights reserved.':'Tüm hakları saklıdır.'}</span>
  </div></footer>}
