// CHANGE THIS VERSION NUMBER EVERY TIME YOU UPDATE YOUR CODE
// Example: 'christ-mandir-v2', 'christ-mandir-v3', etc.
const CACHE_NAME = 'christ-mandir-v3.2';

// List of files to cache immediately
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './bible.html',
  './dailyverse.html',
  './stories.html',
  './quiz.html',
  './manifest.json'
];

// 1. INSTALL EVENT
self.addEventListener('install', (e) => {
  // skipWaiting forces the new Service Worker to take over immediately
  // instead of waiting for the user to close the browser.
  self.skipWaiting(); 
  
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. ACTIVATE EVENT (Cleans up old versions)
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          // If the cache name is different (e.g., v1 vs v2), delete the old one
          if (key !== CACHE_NAME) {
            console.log('Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  // clients.claim() makes the SW control the open page immediately
  return self.clients.claim(); 
});

// 3. FETCH EVENT (Network First Strategy)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        // If the network request succeeds, update the cache with the new file
        // and send the new file to the user.
        const resClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, resClone);
        });
        return response;
      })
      .catch(() => {
        // If the network fails (OFFLINE), trying to get it from the cache
        return caches.match(e.request);
      })
  );
});
