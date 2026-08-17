export type ContentType='article'|'announcement'|'ad'|'about'|'important'|'regulation'|'news'|'contact';
export type SiteContent={id?:string;type:ContentType;title:string;title_en?:string;excerpt?:string;excerpt_en?:string;body?:string;body_en?:string;image_url?:string;file_url?:string;published:boolean;published_at?:string;created_at?:string;sort_order?:number;category?:string;subcategory?:string};
export type CareerApplication={id?:string;application_type:'job'|'internship';full_name:string;email:string;phone?:string;city?:string;education?:string;experience?:string;cv_path?:string;message?:string;consent:boolean;status?:string;created_at?:string};
const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const cmsEnabled=Boolean(url&&anon);
const headers=(token?:string)=>({apikey:anon||'',Authorization:`Bearer ${token||anon||''}`,'Content-Type':'application/json'});
export async function getPublished(type?:ContentType): Promise<SiteContent[]>{
 if(!cmsEnabled) return [];
 const q=type?`&type=eq.${type}`:'';
 const order=type==='regulation'?'sort_order.asc.nullslast,published_at.desc':'published_at.desc';
 const r=await fetch(`${url}/rest/v1/site_content?select=*&published=eq.true${q}&order=${order}`,{headers:headers(),cache:'no-store'});
 if(!r.ok) return [];
 const data:unknown=await r.json();
 return Array.isArray(data)?data as SiteContent[]:[];
}
export async function getPublishedNews():Promise<SiteContent[]>{
 const [news,legacyAds]=await Promise.all([getPublished('news'),getPublished('ad')]);
 return [...news,...legacyAds].sort((a,b)=>String(b.published_at||b.created_at||'').localeCompare(String(a.published_at||a.created_at||'')));
}
export async function signInAdmin(email:string,password:string){
 if(!cmsEnabled) throw new Error('Supabase ortam değişkenleri tanımlı değil.');
 const r=await fetch(`${url}/auth/v1/token?grant_type=password`,{method:'POST',headers:headers(),body:JSON.stringify({email,password})});
 const data=await r.json(); if(!r.ok) throw new Error(data?.error_description||data?.msg||'Giriş başarısız');
 const chk=await fetch(`${url}/rest/v1/admin_users?user_id=eq.${data.user.id}&select=user_id`,{headers:headers(data.access_token)});
 const rows=await chk.json(); if(!chk.ok||!Array.isArray(rows)||rows.length===0) throw new Error('Bu hesap ARYA A.Ş. yönetim yetkisine sahip değil.');
 return data;
}
export async function adminList(token:string):Promise<SiteContent[]>{
 const r=await fetch(`${url}/rest/v1/site_content?select=*&order=created_at.desc`,{headers:headers(token),cache:'no-store'});
 if(!r.ok) throw new Error('İçerikler alınamadı');
 const data:unknown=await r.json(); return Array.isArray(data)?data as SiteContent[]:[];
}
export async function saveContent(token:string,item:SiteContent){
 const payload={...item,published_at:item.published?new Date().toISOString():null};
 if(item.id){const {id,...rest}=payload;const r=await fetch(`${url}/rest/v1/site_content?id=eq.${id}`,{method:'PATCH',headers:{...headers(token),Prefer:'return=representation'},body:JSON.stringify(rest)});if(!r.ok)throw new Error('Güncelleme başarısız');return r.json();}
 const r=await fetch(`${url}/rest/v1/site_content`,{method:'POST',headers:{...headers(token),Prefer:'return=representation'},body:JSON.stringify(payload)});if(!r.ok)throw new Error('Kayıt başarısız');return r.json();
}
export async function deleteContent(token:string,id:string){const r=await fetch(`${url}/rest/v1/site_content?id=eq.${id}`,{method:'DELETE',headers:headers(token)});if(!r.ok)throw new Error('Silme başarısız');}
async function uploadToBucket(token:string,file:File,bucket:string,prefix:string,allowed:(f:File)=>boolean,errorText:string):Promise<string>{
 if(!url||!anon) throw new Error('Supabase ortam değişkenleri tanımlı değil.');
 if(!allowed(file)) throw new Error(errorText);
 const safe=file.name.replace(/[^a-zA-Z0-9._-]/g,'-'); const path=`${prefix}/${Date.now()}-${safe}`;
 const r=await fetch(`${url}/storage/v1/object/${bucket}/${path}`,{method:'POST',headers:{apikey:anon,Authorization:`Bearer ${token}`,'Content-Type':file.type||'application/octet-stream','x-upsert':'false'},body:file});
 if(!r.ok) throw new Error('Dosya yüklenemedi. Supabase Storage kurulumu kontrol edilmeli.');
 return `${url}/storage/v1/object/public/${bucket}/${path}`;
}
export const uploadPdf=(token:string,file:File)=>uploadToBucket(token,file,'site-documents','regulations',f=>f.type==='application/pdf'||f.name.toLowerCase().endsWith('.pdf'),'Yalnızca PDF dosyası yüklenebilir.');
export const uploadMedia=(token:string,file:File)=>uploadToBucket(token,file,'site-media','content',f=>f.type.startsWith('image/')||f.type.startsWith('video/'),'PNG/JPG/WEBP görsel veya MP4/WEBM video yükleyin.');

export async function uploadCareerCv(file:File):Promise<string>{
 if(!url||!anon) throw new Error('Başvuru sistemi şu anda kullanılamıyor.');
 const lower=file.name.toLowerCase();
 const ok=file.type==='application/pdf'||file.type==='application/msword'||file.type==='application/vnd.openxmlformats-officedocument.wordprocessingml.document'||lower.endsWith('.pdf')||lower.endsWith('.doc')||lower.endsWith('.docx');
 if(!ok) throw new Error('CV için PDF, DOC veya DOCX dosyası yükleyin.');
 if(file.size>10*1024*1024) throw new Error('CV dosyası en fazla 10 MB olabilir.');
 const safe=file.name.replace(/[^a-zA-Z0-9._-]/g,'-');
 const id=typeof crypto!=='undefined'&&'randomUUID' in crypto?crypto.randomUUID():`${Date.now()}-${Math.random().toString(36).slice(2)}`;
 const path=`applications/${id}-${safe}`;
 const r=await fetch(`${url}/storage/v1/object/career-cv/${path}`,{method:'POST',headers:{apikey:anon,Authorization:`Bearer ${anon}`,'Content-Type':file.type||'application/octet-stream','x-upsert':'false'},body:file});
 if(!r.ok) throw new Error('CV yüklenemedi. Lütfen tekrar deneyin.');
 return path;
}
export async function getCareerCvSignedUrl(token:string,path:string):Promise<string>{
 if(!url||!anon) throw new Error('Supabase ortam değişkenleri tanımlı değil.');
 const r=await fetch(`${url}/storage/v1/object/sign/career-cv/${path}`,{method:'POST',headers:headers(token),body:JSON.stringify({expiresIn:300})});
 const d=await r.json();
 if(!r.ok||!d?.signedURL) throw new Error('CV bağlantısı oluşturulamadı.');
 return `${url}/storage/v1${d.signedURL}`;
}

export async function submitCareerApplication(item:CareerApplication){
 if(!cmsEnabled) throw new Error('Başvuru sistemi şu anda kullanılamıyor.');
 const r=await fetch(`${url}/rest/v1/career_applications`,{method:'POST',headers:{...headers(),Prefer:'return=minimal'},body:JSON.stringify(item)});
 if(!r.ok) throw new Error('Başvuru gönderilemedi. Lütfen tekrar deneyin.');
}
export async function adminCareerList(token:string):Promise<CareerApplication[]>{
 const r=await fetch(`${url}/rest/v1/career_applications?select=*&order=created_at.desc`,{headers:headers(token),cache:'no-store'});if(!r.ok)throw new Error('Başvurular alınamadı');const d=await r.json();return Array.isArray(d)?d:[];
}
export async function deleteCareerApplication(token:string,id:string){const r=await fetch(`${url}/rest/v1/career_applications?id=eq.${id}`,{method:'DELETE',headers:headers(token)});if(!r.ok)throw new Error('Başvuru silinemedi');}
