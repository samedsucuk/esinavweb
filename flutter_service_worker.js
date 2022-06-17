'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f751155e7852aba2078ddf70b658c95c",
"assets/assets/animations/campdate.json": "500d60cf74876987722e9a390dbea775",
"assets/assets/animations/mynotescamping.json": "be60c705d0f588d62f56b7db0279e7d3",
"assets/assets/fonts/Montserrat-Bold.ttf": "d14ad1035ae6da4e5a71eca362a8d696",
"assets/assets/fonts/Montserrat-BoldItalic.ttf": "616c74c716c5c55f333bb8f91af216fb",
"assets/assets/fonts/Montserrat-ExtraBold.ttf": "dc2f156b60f53c591fc0d2b98cbf01bf",
"assets/assets/fonts/Montserrat-Regular.ttf": "34de1239b12123b85ff1a68b58835a1f",
"assets/assets/images/camping.png": "e396c9b5960d8324bd8922ec12225de0",
"assets/assets/images/campingclothings.png": "9dde5fcab56c0c334939dbe37f5098d4",
"assets/assets/images/campingequipments.png": "3674625aeeb685c0721a300c373ca326",
"assets/assets/images/campingplaces.png": "2654a0babeb0e5c4de1cc2c37194a938",
"assets/assets/images/climbing.png": "2617d7ab488443a057f0e8e9f6685b44",
"assets/assets/images/climbingclothings.png": "a0e3e575762cfa50d9e16c4926a2df81",
"assets/assets/images/climbingequipments.png": "7ab8be5247282f523785870f3b079c9b",
"assets/assets/images/climbingplaces.png": "f61701ced84ba7d1c40c98d17647f06b",
"assets/assets/images/loading.gif": "dae3921355ceba50d5edfae98f4170bd",
"assets/assets/images/mountain1.jpg": "3f68d1739232bdfddf5f7ff10bacaab7",
"assets/assets/images/mountain2.jpg": "2a5c3dba2327af724df1f14e27618c8d",
"assets/assets/images/mountain3.jpg": "8cdb36a243201b7a033f71092c77a7a8",
"assets/assets/images/mountain4.jpg": "326263c8880952ea47ac566c231da024",
"assets/assets/images/mountain5.jpg": "4dda5637152e508306e3ad0d0ca53aa8",
"assets/assets/images/mountain7.jpg": "9be6beb224026d15c608270863f4bf84",
"assets/assets/images/myoutdoordaily.jpg": "7ff4bd5ab0ef3703522d6fdfc845b84f",
"assets/assets/images/noteadd.png": "a22edeafbff91407ab238b45c8f4fbea",
"assets/assets/images/notes.png": "81198a792583afa36ddf86af26e7cac5",
"assets/assets/images/trekking.png": "a05eae54cca336b687a63484e35b428c",
"assets/assets/images/trekkingclothings.png": "80c641815b7c1f0399b86eadad014a5f",
"assets/assets/images/trekkingequipments.png": "8956737ca1131ad26847e8964ce76705",
"assets/assets/images/trekkingplaces.png": "4bc3f5f0a153c6b69e0163aca4395d68",
"assets/FontManifest.json": "b16b414d3cb7b692b446be71ea2e2f1e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7f9320e0fa7126f3d98bb66370ca632d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/lottie_flutter/assets/checked_done_.json": "05e1fb9152e598ac312807458f59536c",
"assets/packages/lottie_flutter/assets/emoji_shock.json": "20f19001b9e67ba054417ee6d485606c",
"assets/packages/lottie_flutter/assets/empty_box.json": "6885ee14cc038225eec3fb6ccbd0a65e",
"assets/packages/lottie_flutter/assets/favourite_app_icon.json": "ccb04721931dd1cf900ed574d3295d54",
"assets/packages/lottie_flutter/assets/hamburger_arrow.json": "9def84d12cf68f58ae298d829e769925",
"assets/packages/lottie_flutter/assets/happy_gift.json": "5291bbc15a1570ba508b2e295c5f2c55",
"assets/packages/lottie_flutter/assets/Indicators2.json": "4f249bbfb006933b4e7925e39b948911",
"assets/packages/lottie_flutter/assets/motorcycle.json": "83e43c2d2ea41af6ed030dacee8c10f4",
"assets/packages/lottie_flutter/assets/muzli.json": "1d82beccb985674b7383681eb2c63ddb",
"assets/packages/lottie_flutter/assets/preloader.json": "1fc56294faa15fea6b84a58d1dfe1ee5",
"assets/packages/lottie_flutter/assets/rrect.json": "b22a25462064d46038278716cd2d3f91",
"assets/packages/lottie_flutter/assets/walkthrough.json": "7c6fff77dc2cb03fb5df84e3b77a1899",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f3e2df357742ff2cbf8e94ec1a86a291",
"/": "f3e2df357742ff2cbf8e94ec1a86a291",
"main.dart.js": "63da1fec6009508910b0896a3a922546",
"manifest.json": "0fa392ab2026f19c3b9581e76b976585",
"version.json": "6b0a955b0d6789d1b17b8416e56ed277"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
