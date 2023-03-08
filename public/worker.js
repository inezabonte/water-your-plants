self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("push", function (event) {
  const data = event.data.json();
  const promiseChain = self.registration.showNotification(data.title, {
    body: data.body,
    icon: "/icons/manifest-icon-192.maskable.png",
    badge: "/icons/badge_72x72.png",
  });
  event.waitUntil(promiseChain);
});
