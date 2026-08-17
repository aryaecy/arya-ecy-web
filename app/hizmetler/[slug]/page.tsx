import {services} from '@/lib/siteData';
import {notFound} from 'next/navigation';
import ServiceDetail from '@/components/ServiceDetail';
export function generateStaticParams(){return services.map(s=>({slug:s.slug}))}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!services.some(s=>s.slug===slug))notFound();return <ServiceDetail slug={slug}/>}
