// OneSignal SDK Worker (debe ir antes de cualquier otra cosa)
try { importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js'); } catch(e) { /* ignore */ }

// Opcional: versión para forzar actualización del SW cuando cambies este archivo
// Cambia el número cuando quieras obligar a refrescar el SW en clientes
self.__SW_VERSION__ = 'v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

// Red primero; si falla, intenta caché (si existe)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
