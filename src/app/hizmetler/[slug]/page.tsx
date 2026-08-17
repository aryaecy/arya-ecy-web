import {services} from '@/lib/siteData';
import {notFound} from 'next/navigation';
import Link from 'next/link';
import {ArrowLeft, CheckCircle2, Home, Sparkles} from 'lucide-react';

export function generateStaticParams(){return services.map(s=>({slug:s.slug}))}

export default async function ServicePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const s=services.find(x=>x.slug===slug);
  if(!s)notFound();
  const Icon=s.icon;
  return <main className="service-page-pro">
    <header className="service-pro-header">
      <a href="/" className="service-pro-brand"><img src="/logo.png" alt="ARYA ECY"/></a>
      <Link href="/" className="home-return"><Home size={16}/> Ana Ekrana Dön</Link>
    </header>

    <section className="service-pro-hero">
      <div className="service-pro-title">
        <span>ARYA ECY / HİZMETLER</span>
        <div className="service-icon"><Icon size={27}/></div>
        <h1>{s.title}</h1>
        <p>{s.intro}</p>
        <div className="service-highlight"><Sparkles size={17}/><b>{s.highlight}</b></div>
      </div>
      <div className="service-pro-image" style={{backgroundImage:`linear-gradient(135deg,rgba(18,53,43,.08),rgba(18,53,43,.18)),url(${s.image})`}} role="img" aria-label={`${s.title} - ARYA ECY hizmet görseli`}/>
    </section>

    <section className="service-pro-body">
      <aside className="service-pro-aside">
        <b>Bu hizmette ne sağlıyoruz?</b>
        <p>{s.summary}</p>
        <div className="deliverables">
          <span>Çalışma çıktıları</span>
          {s.deliverables.map(item=><div key={item}><CheckCircle2 size={15}/>{item}</div>)}
        </div>
        <Link href="/hizmetler" className="all-services"><ArrowLeft size={15}/> Tüm hizmetler</Link>
      </aside>
      <article className="service-pro-content">
        {s.sections.map(([h,p],i)=><section key={h}>
          <div className="section-no">0{i+1}</div>
          <div><h2>{h.replace(/^\d+\.\s*/, '')}</h2><p>{p}</p></div>
        </section>)}
        <div className="service-result">
          <b>ARYA ECY çalışma prensibi</b>
          <p>Her çalışma mevcut durumun anlaşılmasıyla başlar; mevzuat, saha ve operasyon birlikte değerlendirilir. Bulgular yalnızca rapora yazılmaz, sorumlusu ve termin tarihi belli aksiyonlara dönüştürülür. Tamamlanan işlerin kanıtları düzenli tutulur ve değişen faaliyetler sisteme yeniden dahil edilir. Böylece hizmet, tek seferlik doküman üretiminden çıkarak işletmenin günlük yönetimine yerleşir.</p>
        </div>
      </article>
    </section>
  </main>
}
