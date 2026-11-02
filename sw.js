/* RAFINOOR minimal service worker — makes the app installable. No caching, so live data is never stale. */
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(){});
