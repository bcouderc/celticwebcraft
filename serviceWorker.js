// serviceWorker.js

// Évènement d'installation du service worker
self.addEventListener("install", (event) => {
  //console.log("✅ Service Worker installé");
  self.skipWaiting(); // Active immédiatement sans attendre les anciens SW
});
