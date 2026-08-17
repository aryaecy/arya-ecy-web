'use client';
import {useLanguage} from '@/components/LanguageProvider';
export default function Hero(){const {lang}=useLanguage();const en=lang==='en';return <section className="final-hero final-hero-integrated">
  <div className="final-hero-image" role="img" aria-label={en?'ARYA ECY integrated environmental management field work':'ARYA ECY entegre çevre yönetimi saha çalışması'} />
  <div className="final-hero-overlay" />
  <div className="final-hero-copy">
    <span className="hero-kicker">{en?'ARYA INTEGRATED ENVIRONMENTAL MANAGEMENT':'ARYA ENTEGRE ÇEVRE YÖNETİMİ'}</span>
    <h1>{en?'WE MANAGE THE ENVIRONMENT,':'ÇEVREYİ YÖNETİR,'}<br/><em>{en?'WE PROTECT YOUR BUSINESS.':'İŞLETMENİZİ GÜVENCEYE ALIRIZ.'}</em></h1>
    <div className="hero-line"/>
    <p>{en?'From regulatory compliance and field audits to waste, water, chemicals, carbon and sustainability, we manage environmental processes under one integrated discipline.':'Mevzuat uyumundan saha denetimine; atık, su, kimyasal, karbon ve sürdürülebilirlik süreçlerine kadar çevre yönetimini tek bir disiplin altında yürütüyoruz.'}</p>
    <div className="hero-values">
      <span><strong>01</strong><b>{en?'Regulatory':'Mevzuat'}<br/>{en?'Compliance':'Uyumu'}</b></span>
      <span><strong>02</strong><b>{en?'Field':'Saha'}<br/>{en?'Management':'Yönetimi'}</b></span>
      <span><strong>03</strong><b>{en?'Measurable':'Ölçülebilir'}<br/>{en?'Improvement':'İyileştirme'}</b></span>
    </div>
  </div>
</section>}
