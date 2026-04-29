const CACHE_NAME = 'crunch-lab-pos-v1';
const APP_FILES = [
  './',
  './crunch_lab_pos_PWA_install_app.html',
  './manifest.json',
  './crunch-icon-192.png',
  './crunch-icon-512.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES).catch(() => null)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null))));
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
