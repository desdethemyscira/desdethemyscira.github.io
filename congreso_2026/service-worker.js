/* Installation support only: always use the network for the current programme.
   No forms, credentials, API responses or programme snapshots are cached. */
self.addEventListener('install', event => {
    event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
    const request = event.request;
    if (request.method !== 'GET' || request.mode !== 'navigate') return;
    const url = new URL(request.url);
    if (url.origin !== self.location.origin || !url.href.startsWith(self.registration.scope)) return;
    event.respondWith(fetch(request).catch(() => new Response(`<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Desde Themyscira · Sin conexión</title>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#25162b;color:#f3eef8;font:17px/1.6 system-ui}main{max-width:32rem;padding:2rem}h1{color:#eed28b;font:32px Georgia,serif}a{display:inline-block;background:#eed28b;color:#25162b;padding:.8rem 1.2rem;border-radius:8px;text-decoration:none}</style></head>
<body><main><h1>Necesitas conexión a internet</h1><p>Conéctate para consultar el programa actualizado, registrarte o usar el Oráculo.</p><a href="./">Volver a intentar</a></main></body></html>`, {
        status: 503,
        headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' }
    })));
});
