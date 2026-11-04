const CACHE='chemin-de-foi-aelf-online-v1';const FILES=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./assets/icon.svg','./assets/accueil-cinema.webp','./assets/hero.webp','./assets/ambiance.webp'];
const STATIC=new Set(FILES.map(p=>new URL(p,self.location.href).href));
self.addEventListener('install',ev=>{ev.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',ev=>{ev.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('chemin-de-foi-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
// Aucun appel API (AELF compris) n'entre dans le cache : seuls les fichiers statiques listés sont servis ici.
self.addEventListener('fetch',ev=>{const url=new URL(ev.request.url);url.hash='';if(ev.request.method!=='GET'||!STATIC.has(url.href))return;ev.respondWith(caches.match(ev.request).then(x=>x||fetch(ev.request,{cache:'no-store'})))})

