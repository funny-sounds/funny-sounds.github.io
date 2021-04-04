importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js");

const {registerRoute} = workbox.routing;
const {StaleWhileRevalidate} = workbox.strategies;

registerRoute(
  ({url}) =>
    url.pathname.startsWith("/sounds/") ||
    url.pathname.startsWith("/images/") ||
    url.pathname.startsWith("/js/") ||
    url.pathname.startsWith("/css/"),
  new StaleWhileRevalidate()
);
