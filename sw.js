importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js");

const {registerRoute} = workbox.routing;
const {StaleWhileRevalidate} = workbox.strategies;

registerRoute(({url}) => url.pathname.startsWith("/sounds/"), new StaleWhileRevalidate());
registerRoute(({url}) => url.pathname.startsWith("/images/"), new StaleWhileRevalidate());
registerRoute(({url}) => url.pathname.startsWith("/js/"), new StaleWhileRevalidate());
registerRoute(({url}) => url.pathname.startsWith("/css/"), new StaleWhileRevalidate());
registerRoute(({url}) => url.pathname === "/", new StaleWhileRevalidate());

self.skipWaiting();
