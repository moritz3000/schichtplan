const CACHE_NAME = 'bunker-schichten-cache-v1';
const CACHE_URLS = [
  '/index.html',
  '/login.html',
  '/register.html',
  '/home.html',
  '/kalender.html',
  '/schichtleitung.html',
  '/details.html',
  '/admin.html',
  '/css/styles.css',
  '/js/firebaseConfig.js',
  '/js/main.js',
  '/manifest.json',
  // ggf. Bilder, Icons usw. hinzufügen
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CACHE_URLS);
    })
  );
});

// Bei Anfragen zuerst versuchen, aus dem Cache zu laden. 
// Falls nicht vorhanden, aus dem Netz laden.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
