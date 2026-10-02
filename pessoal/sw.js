// Service worker mínimo: necessário para a app ser instalável. Não guarda dados em cache (a app vive no Google).
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {});
