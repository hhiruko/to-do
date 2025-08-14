
    const assets = [
  "/to-do/index.html",
  "/to-do/favicons/yandex-browser-manifest.json",
  "/to-do/favicons/yandex-browser-50x50.png",
  "/to-do/favicons/mstile-70x70.png",
  "/to-do/favicons/mstile-310x310.png",
  "/to-do/favicons/mstile-310x150.png",
  "/to-do/favicons/mstile-150x150.png",
  "/to-do/favicons/mstile-144x144.png",
  "/to-do/favicons/manifest.webmanifest",
  "/to-do/favicons/ico.svg",
  "/to-do/favicons/favicon.ico",
  "/to-do/favicons/favicon-48x48.png",
  "/to-do/favicons/favicon-32x32.png",
  "/to-do/favicons/favicon-16x16.png",
  "/to-do/favicons/browserconfig.xml",
  "/to-do/favicons/apple-touch-startup-image-828x1792.png",
  "/to-do/favicons/apple-touch-startup-image-750x1334.png",
  "/to-do/favicons/apple-touch-startup-image-640x1136.png",
  "/to-do/favicons/apple-touch-startup-image-2796x1290.png",
  "/to-do/favicons/apple-touch-startup-image-2778x1284.png",
  "/to-do/favicons/apple-touch-startup-image-2732x2048.png",
  "/to-do/favicons/apple-touch-startup-image-2688x1242.png",
  "/to-do/favicons/apple-touch-startup-image-2556x1179.png",
  "/to-do/favicons/apple-touch-startup-image-2532x1170.png",
  "/to-do/favicons/apple-touch-startup-image-2436x1125.png",
  "/to-do/favicons/apple-touch-startup-image-2388x1668.png",
  "/to-do/favicons/apple-touch-startup-image-2266x1488.png",
  "/to-do/favicons/apple-touch-startup-image-2224x1668.png",
  "/to-do/favicons/apple-touch-startup-image-2208x1242.png",
  "/to-do/favicons/apple-touch-startup-image-2160x1640.png",
  "/to-do/favicons/apple-touch-startup-image-2160x1620.png",
  "/to-do/favicons/apple-touch-startup-image-2048x2732.png",
  "/to-do/favicons/apple-touch-startup-image-2048x1536.png",
  "/to-do/favicons/apple-touch-startup-image-1792x828.png",
  "/to-do/favicons/apple-touch-startup-image-1668x2388.png",
  "/to-do/favicons/apple-touch-startup-image-1668x2224.png",
  "/to-do/favicons/apple-touch-startup-image-1640x2160.png",
  "/to-do/favicons/apple-touch-startup-image-1620x2160.png",
  "/to-do/favicons/apple-touch-startup-image-1536x2048.png",
  "/to-do/favicons/apple-touch-startup-image-1488x2266.png",
  "/to-do/favicons/apple-touch-startup-image-1334x750.png",
  "/to-do/favicons/apple-touch-startup-image-1290x2796.png",
  "/to-do/favicons/apple-touch-startup-image-1284x2778.png",
  "/to-do/favicons/apple-touch-startup-image-1242x2688.png",
  "/to-do/favicons/apple-touch-startup-image-1242x2208.png",
  "/to-do/favicons/apple-touch-startup-image-1179x2556.png",
  "/to-do/favicons/apple-touch-startup-image-1170x2532.png",
  "/to-do/favicons/apple-touch-startup-image-1136x640.png",
  "/to-do/favicons/apple-touch-startup-image-1125x2436.png",
  "/to-do/favicons/apple-touch-icon.png",
  "/to-do/favicons/apple-touch-icon-precomposed.png",
  "/to-do/favicons/apple-touch-icon-76x76.png",
  "/to-do/favicons/apple-touch-icon-72x72.png",
  "/to-do/favicons/apple-touch-icon-60x60.png",
  "/to-do/favicons/apple-touch-icon-57x57.png",
  "/to-do/favicons/apple-touch-icon-180x180.png",
  "/to-do/favicons/apple-touch-icon-167x167.png",
  "/to-do/favicons/apple-touch-icon-152x152.png",
  "/to-do/favicons/apple-touch-icon-144x144.png",
  "/to-do/favicons/apple-touch-icon-120x120.png",
  "/to-do/favicons/apple-touch-icon-114x114.png",
  "/to-do/favicons/apple-touch-icon-1024x1024.png",
  "/to-do/favicons/android-chrome-96x96.png",
  "/to-do/favicons/android-chrome-72x72.png",
  "/to-do/favicons/android-chrome-512x512.png",
  "/to-do/favicons/android-chrome-48x48.png",
  "/to-do/favicons/android-chrome-384x384.png",
  "/to-do/favicons/android-chrome-36x36.png",
  "/to-do/favicons/android-chrome-256x256.png",
  "/to-do/favicons/android-chrome-192x192.png",
  "/to-do/favicons/android-chrome-144x144.png",
  "/to-do/cdn/water.system.min.css",
  "/to-do/cdn/water.light.min.css",
  "/to-do/cdn/water.dark.min.css",
  "/to-do/assets/index-xxpSfgxz.js",
  "/to-do/assets/index-BFS3DZWl.css",
  "/to-do/"
];
    const CACHE_NAME = 'v2025-08-14T11:13:51.607Z';

    self.addEventListener('install', event => {
        self.skipWaiting();
        event.waitUntil(
            caches.open(CACHE_NAME).then(async cache => {
                for(const asset of assets) {
                    try {
                        await cache.add(asset);
                    } catch (e) {
                        console.error('❌ Failed to cache:', asset, e);
                    }
                }
            })
        );
    });

    self.addEventListener('fetch', event => {
        event.respondWith(
            caches.match(event.request).then(response => {
                if(response) return response;
                return fetch(event.request).catch(() => {
                    if(event.request.mode === 'navigate') {
                        return caches.match('/to-do/index.html');
                    }
                });
            })
        );
    });

    self.addEventListener('activate', event => {
        self.clients.claim();
        event.waitUntil(
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_NAME) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        );
    });
