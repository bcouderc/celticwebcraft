// registerSW.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/celticwebcraft/serviceWorker.js')
    .then(() => console.log('✅ Service Worker enregistré'))
    .catch(err => console.error('❌ Échec Service Worker :', err));
}
