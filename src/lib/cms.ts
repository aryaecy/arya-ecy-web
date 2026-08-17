export type ContentType='article'|'announcement'|'ad';
export type SiteContent={id?:string;type:ContentType;title:string;excerpt?:string;body?:string;image_url?:string;published:boolean;published_at?:string;created_at?:string};
const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const cmsEnabled=Boolean(url&&anon);
const headers=(token?:string)=>({apikey:anon||'',Authorization:`Bearer ${token||anon||''}`,'Content-Type':'application/json'});
export async function getPublished(type?:ContentType): Promise<SiteContent[]>{
 if(!cmsEnabled) return [] as SiteContent[];
 const q=type?`&type=eq.${type}`:'';
 const r=await fetch(`${url}/rest/v1/site_content?select=*&published=eq.true${q}&order=published_at.desc`,{headers:headers(),cache:'no-store'});
 if(!r.ok) return [];
 const data: unknown = await r.json();
 return Array.isArray(data) ? (data as SiteContent[]) : [];
}
export async function signInAdmin(email:string,password:string){
 if(!cmsEnabled) throw new Error('Supabase ortam değişkenleri tanımlı değil.');
 const r=await fetch(`${url}/auth/v1/token?grant_type=password`,{method:'POST',headers:headers(),body:JSON.stringify({email,password})});
 const data=await r.json(); if(!r.ok) throw new Error(data?.error_description||data?.msg||'Giriş başarısız');
 const chk=await fetch(`${url}/rest/v1/admin_users?user_id=eq.${data.user.id}&select=user_id`,{headers:headers(data.access_token)});
 const rows=await chk.json(); if(!chk.ok||!Array.isArray(rows)||rows.length===0) throw new Error('Bu hesap yönetim yetkisine sahip değil.');
 return data;
}
export async function adminList(token:string): Promise<SiteContent[]>{const r=await fetch(`${url}/rest/v1/site_content?select=*&order=created_at.desc`,{headers:headers(token),cache:'no-store'});if(!r.ok)throw new Error('İçerikler alınamadı');const data: unknown=await r.json();return Array.isArray(data)?(data as SiteContent[]):[];}
export async function saveContent(token:string,item:SiteContent){
 const payload={...item,published_at:item.published?new Date().toISOString():null};
 if(item.id){const {id,...rest}=payload;const r=await fetch(`${url}/rest/v1/site_content?id=eq.${id}`,{method:'PATCH',headers:{...headers(token),Prefer:'return=representation'},body:JSON.stringify(rest)});if(!r.ok)throw new Error('Güncelleme başarısız');return r.json();}
 const r=await fetch(`${url}/rest/v1/site_content`,{method:'POST',headers:{...headers(token),Prefer:'return=representation'},body:JSON.stringify(payload)});if(!r.ok)throw new Error('Kayıt başarısız');return r.json();
}
export async function deleteContent(token:string,id:string){const r=await fetch(`${url}/rest/v1/site_content?id=eq.${id}`,{method:'DELETE',headers:headers(token)});if(!r.ok)throw new Error('Silme başarısız');}
