importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

// Estrategia red-primero con fallback a caché (tu lógica existente)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
