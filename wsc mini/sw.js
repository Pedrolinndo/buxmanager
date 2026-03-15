const CACHE_NAME = 'wfmanager-v1';

// Arquivos que serão salvos para uso offline
const ASSETS = [
    './',
    './index.html',
    './manifest.json'
];

// Instala e faz cache dos arquivos principais
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('[SW] Cache aberto');
            return cache.addAll(ASSETS);
        })
    );
    self.skipWaiting();
});

// Ativa e limpa caches antigos
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
            )
        )
    );
    self.clients.claim();
});

// Intercepta requisições — serve do cache se offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) return cached;
            return fetch(event.request).then(response => {
                // Cacheia patches e assets novos automaticamente
                if (response && response.status === 200 && event.request.method === 'GET') {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                }
                return response;
            }).catch(() => cached); // fallback para cache se sem internet
        })
    );
});
