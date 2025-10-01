// OneSignal SDK Worker v16 (debe ir primero)
try { importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js'); } catch(e) {}

// Opcional: versión para forzar actualización del SW cuando cambies este archivo
self.__SW_VERSION__ = 'v2';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

// Red primero; si falla, intenta caché (si existe)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
