const CACHE='arya-akademi-v2.1.0';
const CORE=['/','/index.html','/arya-logo.png','/icon-192.png','/icon-512.png','/manifest.webmanifest','/offline.html'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('arya-akademi-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==location.origin)return;
  if(req.mode==='navigate'){
    event.respondWith(fetch(req,{cache:'no-store'}).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put('/index.html',copy));return res}).catch(async()=>await caches.match('/index.html')||await caches.match('/offline.html')));
    return;
  }
  event.respondWith(fetch(req).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy))}return res}).catch(async()=>await caches.match(req)||new Response('Çevrimdışı ve kaynak önbellekte değil.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}})));
});
