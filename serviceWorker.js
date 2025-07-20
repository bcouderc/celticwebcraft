// serviceWorker.js

// Évènement d'installation du service worker
self.addEventListener("install", (event) => {
  console.log("✅ Service Worker installé");
  self.skipWaiting(); // Active immédiatement sans attendre les anciens SW
});

// Évènement d'activation (utile plus tard pour le cache)
self.addEventListener("activate", (event) => {
  console.log("🔁 Service Worker activé");
});

// Évènement de fetch (optionnel ici, on ne met pas de cache)
self.addEventListener("fetch", (event) => {
  // console.log("📦 Requête interceptée :", event.request.url);
});
