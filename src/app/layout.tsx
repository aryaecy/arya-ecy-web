import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'ARYA ECY | Entegre Çevre Yönetimi',description:'ARYA ECY çevre yönetimi, ÇED, atık ve atıksu yönetimi, TMGD, KDU, ESG, karbon ve su ayak izi, su verimliliği ve enerji yönetimi hizmetleri.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="tr"><body>{children}</body></html>}
