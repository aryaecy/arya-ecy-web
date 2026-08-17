import {services} from '@/lib/siteData';
import Link from 'next/link';
import {ArrowLeft, CheckCircle2, Home, Sparkles} from 'lucide-react';

export default function ServiceDetail({slug}:{slug:string}){
  const s=services.find(x=>x.slug===slug);
  if(!s) return null;
  const Icon=s.icon;
  return <main className="service-page-pro">
    <header className="service-pro-header">
      <Link href="/" className="service-pro-brand"><img src="/logo.png" alt="ARYA ECY"/></Link>
      <Link href="/" className="home-return"><Home size={16}/> Ana Sayfaya Dön</Link>
    </header>
    <section className="service-pro-hero">
      <div className="service-pro-title">
        <span>ARYA ECY / HİZMETLER</span><div className="service-icon"><Icon size={27}/></div>
        <h1>{s.title}</h1><p>{s.intro}</p>
        <div className="service-highlight"><Sparkles size={17}/><b>{s.highlight}</b></div>
      </div>
      <div className="service-pro-image" style={{backgroundImage:`linear-gradient(135deg,rgba(18,53,43,.04),rgba(18,53,43,.12)),url("${s.image}")`}} role="img" aria-label={`${s.title} hizmet görseli`}/>
    </section>
    <section className="service-pro-body">
      <aside className="service-pro-aside"><b>Bu hizmette ne sağlıyoruz?</b><p>{s.summary}</p>
        <div className="deliverables"><span>Çalışma çıktıları</span>{s.deliverables.map(item=><div key={item}><CheckCircle2 size={15}/>{item}</div>)}</div>
        <Link href="/hizmetler" className="all-services"><ArrowLeft size={15}/> Tüm hizmetler</Link>
      </aside>
      <article className="service-pro-content">{s.sections.map(([h,p],i)=><section key={h}><div className="section-no">{String(i+1).padStart(2,'0')}</div><div><h2>{h.replace(/^\d+\.\s*/, '')}</h2><p>{p}</p></div></section>)}
        <div className="service-result"><b>ARYA ECY çalışma prensibi</b><p>Her çalışma mevcut durumun anlaşılmasıyla başlar; mevzuat, saha ve operasyon birlikte değerlendirilir. Bulgular yalnızca rapora yazılmaz, sorumlusu ve termin tarihi belli aksiyonlara dönüştürülür. Tamamlanan işlerin kanıtları düzenli tutulur ve değişen faaliyetler sisteme yeniden dahil edilir. Böylece danışmanlık, tek seferlik doküman üretiminden çıkarak işletmenin günlük yönetimine yerleşir.</p></div>
      </article>
    </section>
  </main>
}
