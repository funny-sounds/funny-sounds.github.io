importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js");

const {registerRoute} = workbox.routing;
const {StaleWhileRevalidate} = workbox.strategies;
const {CacheFirst} = workbox.strategies;
const {RangeRequestsPlugin} = workbox.rangeRequests;

registerRoute(({url}) => url.pathname.startsWith("/images/"), new StaleWhileRevalidate());
registerRoute(({url}) => url.pathname.startsWith("/js/"), new StaleWhileRevalidate());
registerRoute(({url}) => url.pathname.startsWith("/css/"), new StaleWhileRevalidate());
registerRoute(({url}) => url.pathname === "/manifest.json", new StaleWhileRevalidate());
registerRoute(({url}) => url.pathname === "/", new StaleWhileRevalidate());

registerRoute(
  ({url}) => url.pathname.endsWith(".mp3"),
  new CacheFirst({
    plugins: [new RangeRequestsPlugin()],
  })
);

self.skipWaiting();
