const CACHE_NAME = 'slimrate-cache-v10';

// Cache durations for different resource types (in milliseconds)
const CACHE_DURATIONS = {
  images: 365 * 24 * 60 * 60 * 1000,      // 1 year for images (webp, jpg, png, svg)
  styles: 180 * 24 * 60 * 60 * 1000,      // 6 months for CSS
  scripts: 180 * 24 * 60 * 60 * 1000,     // 6 months for JS
  fonts: 365 * 24 * 60 * 60 * 1000,       // 1 year for fonts
  html: 7 * 24 * 60 * 60 * 1000,          // 7 days for HTML pages
  default: 30 * 24 * 60 * 60 * 1000       // 30 days for everything else
};

// Helper function to get cache duration based on resource type
function getCacheDuration(url) {
  const urlObj = new URL(url);
  const pathname = urlObj.pathname.toLowerCase();
  
  if (pathname.match(/\.(webp|jpg|jpeg|png|gif|svg|ico)$/)) {
    return CACHE_DURATIONS.images;
  } else if (pathname.match(/\.css$/)) {
    return CACHE_DURATIONS.styles;
  } else if (pathname.match(/\.js$/)) {
    return CACHE_DURATIONS.scripts;
  } else if (pathname.match(/\.(woff|woff2|ttf|eot|otf)$/)) {
    return CACHE_DURATIONS.fonts;
  } else if (pathname.match(/\.html$/) || pathname === '/' || !pathname.includes('.')) {
    return CACHE_DURATIONS.html;
  }
  
  return CACHE_DURATIONS.default;
}

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
  '/assets/css/variables.css',
  '/assets/css/base.css',
  '/assets/css/spacing-system.css',
  '/assets/css/header.css',
  '/assets/css/buttons.css',
  '/assets/css/dropdown-menu.css',
  '/assets/css/hero.css',
  '/assets/css/cards.css',
  '/assets/css/forms.css',
  '/assets/css/footer.css',
  '/assets/css/faq.css',
  '/assets/css/pricing.css',
  '/assets/css/equip.css',
  '/assets/css/sections.css',
  '/assets/css/hardware-nav.css',
  '/assets/css/breakpoints.css',
  '/assets/css/responsive.css',
  '/assets/css/burger.css',
  '/assets/css/layout-overrides.css',
  '/assets/css/hardware-cards-vertical-slider.css',
  '/assets/js/masks.js',
  '/assets/js/more.js',
  '/assets/slick/slick.min.js',
  '/assets/slick/slick.css',
  '/assets/slick/slick-theme.css',
  '/components/top_menu.js',
  '/components/bottom_menu.js',
  '/components/pricing_form.js',
  '/components/faq.js',
  '/components/our_products.js',
  '/assets/img/logo.svg',
  '/assets/2025mainbg.webp',
  '/assets/hardware2025bg.webp'
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

  const requestUrl = new URL(event.request.url);
  // Skip cross-origin requests (e.g., CDN scripts) to avoid caching issues
  if (requestUrl.origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(event.request).then(async cachedResponse => {
        const cacheDuration = getCacheDuration(event.request.url);
        
        const fetchAndCache = fetch(event.request)
          .then(networkResponse => {
            // Only cache successful responses
            if (networkResponse && networkResponse.status === 200) {
              return timestampedResponse(networkResponse).then(responseToCache => {
                cache.put(event.request, responseToCache.clone());
                return networkResponse;
              });
            }
            return networkResponse;
          })
          .catch(() => cachedResponse);

        if (cachedResponse) {
          const cachedTime = cachedResponse.headers.get('sw-cache-time');
          const isFresh =
            cachedTime && Date.now() - Number(cachedTime) < cacheDuration;

          if (isFresh) {
            // Serve cached response immediately and update in background for HTML.
            // For static assets, just serve from cache without updating
            const isStaticAsset = !requestUrl.pathname.match(/\.html$/) && 
                                 requestUrl.pathname !== '/' && 
                                 requestUrl.pathname.includes('.');
            
            if (!isStaticAsset) {
              event.waitUntil(fetchAndCache);
            }
            return cachedResponse;
          }
        }

        // Either no cache or cache expired; return network fetch.
        return fetchAndCache;
      })
    )
  );
});
