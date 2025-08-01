const CACHE_NAME = 'slimrate-cache-v2';

// Time (in milliseconds) to keep cached responses before updating.
// Currently set to thirty days.
const CACHE_MAX_AGE = 30 * 24 * 60 * 60 * 1000;

// Helper to clone a response and attach the current timestamp so we can
// determine its age later.
async function timestampedResponse(response) {
  const cloned = response.clone();
  const headers = new Headers(cloned.headers);
  headers.set('sw-cache-time', Date.now().toString());
  const body = await cloned.blob();
  return new Response(body, {
    status: cloned.status,
    statusText: cloned.statusText,
    headers,
  });
}
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

// Clean up old caches when a new service worker activates.
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => (key !== CACHE_NAME ? caches.delete(key) : null))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  // Only handle GET requests so we don't interfere with form submissions.
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(event.request).then(async cachedResponse => {
        const fetchAndCache = fetch(event.request)
          .then(networkResponse =>
            timestampedResponse(networkResponse).then(responseToCache => {
              cache.put(event.request, responseToCache.clone());
              return networkResponse;
            })
          )
          .catch(() => cachedResponse);

        if (cachedResponse) {
          const cachedTime = cachedResponse.headers.get('sw-cache-time');
          const isFresh =
            cachedTime && Date.now() - Number(cachedTime) < CACHE_MAX_AGE;

          if (isFresh) {
            // Serve cached response immediately and update in background.
            event.waitUntil(fetchAndCache);
            return cachedResponse;
          }
        }

        // Either no cache or cache expired; return network fetch.
        return fetchAndCache;
      })
    )
  );
});
