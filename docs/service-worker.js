const CACHE_NAME = 'slimrate-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/assets/css/style.css',
  '/assets/css/burger.css',
  '/assets/js/masks.js',
  '/assets/js/more.js',
  '/assets/slick/slick.min.js',
  '/components/top_menu.js',
  '/components/bottom_menu.js',
  '/components/pricing_form.js',
  '/assets/img/logo.svg',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
