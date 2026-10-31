const CACHE='chemin-de-foi-demo-lot1-v1';const FILES=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./assets/icon.svg','./assets/hero.webp','./assets/ambiance.webp'];
self.addEventListener('install',ev=>{ev.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',ev=>{ev.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',ev=>{if(ev.request.method!=='GET'||new URL(ev.request.url).origin!==location.origin)return;ev.respondWith(caches.match(ev.request).then(x=>x||fetch(ev.request).then(r=>{if(r.ok){let copy=r.clone();caches.open(CACHE).then(c=>c.put(ev.request,copy))}return r})))})
