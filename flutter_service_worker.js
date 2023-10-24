'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5b319888e4dcbad4a5fb5619a91bc5bc",
"assets/AssetManifest.bin.json": "14b74fe3ce0229755c74965cb316d230",
"assets/AssetManifest.json": "2fbfed2db773b102294506772568cfb3",
"assets/assets/images/ball.png": "e935cbdd628ccde9a4f50faffb93c688",
"assets/assets/images/calculator.png": "0d5c9d28c5f2fa7883a3089bf6ab4007",
"assets/assets/images/coin.png": "46c45a9f112dab5cfe94a00b4cec212d",
"assets/assets/images/failed.png": "4ee38d35c213713029b72797ca8b4f79",
"assets/assets/images/gk.png": "e29a50af5c4215c61031134d636cb681",
"assets/assets/images/gk1.png": "3cd2287f0854bdf511648dc2024cc1a3",
"assets/assets/images/gk11.png": "c9241946d2b9de7e9453f52347929b0e",
"assets/assets/images/gk2.png": "b78cb615e61315ba2512098eb9e1dceb",
"assets/assets/images/gk5.png": "e71f66a6e3fbdc6fc10f78a4bdb5b2ab",
"assets/assets/images/happy.png": "b3db535366b6936d23cf3339d66d7e33",
"assets/assets/images/icon.png": "6078badb5d6425c9f68bb0d0d61fff32",
"assets/assets/images/icon1.png": "0711dd82b378376d904ccf21bd536486",
"assets/assets/images/logo.png": "bf5ddc1cfd12f435404e0725b0c0cf66",
"assets/assets/images/logo1.png": "83e5cf9c56bdd1553c4d0af67a8b0a9e",
"assets/assets/images/logo11.png": "f18e1b9fdc4ea38e7bfd629137907dad",
"assets/assets/images/logo12.png": "dde2334e15bacf47f845c8322fa09dcc",
"assets/assets/images/logo122.png": "b9eee0f02d5e28d3f5f19bf1354e1a12",
"assets/assets/images/logo2.png": "e51249aeaaff00a12d968d5be8603de0",
"assets/assets/images/movie.png": "aee6f26729a37dff2286b0b5eddebf0c",
"assets/assets/images/movie1.png": "41f9264ed3fcf13ba5171060ff6b85d5",
"assets/assets/images/movie2.png": "0fa14decf58cec25cdf79ffb3a9f358f",
"assets/assets/images/passed.png": "5648ad29095129a97755f11f9b14516d",
"assets/assets/images/passed1.png": "64de85d479dbd3ee4c46f7edb62f3118",
"assets/assets/images/profile1.png": "6e0f2dc17911bd7e63a297dc7c40437a",
"assets/assets/images/quiziq.png": "20be09401348e46af685baa573b50543",
"assets/assets/images/quiziq1.png": "9e417c98f8f9b3e30ef143c0391fd172",
"assets/assets/images/quiziq11.png": "34680862f022db1b3f60378eb3b376c0",
"assets/assets/images/science.png": "a0c7c45c53249fd870d612a3bc1682bf",
"assets/assets/images/tech.png": "da562d5a078db98d5b7e4e0487710695",
"assets/assets/images/tech1.png": "c9f8e0a8536185cd6986d9b2620cd153",
"assets/assets/images/tech2.png": "d12cab6a5fe220df2e31454bf6edd378",
"assets/assets/images/tech22.png": "ced52fd628181ff322d82a51476e4155",
"assets/assets/images/tech3.png": "8a1067f4752961f09a8c176b6c3181e2",
"assets/assets/images/tech4.png": "9272b25584d43c6da650137d03bc7672",
"assets/assets/images/techl1.png": "b587b0adc34e9e229249ae6fd34db283",
"assets/assets/images/techl2.png": "cc9d5b7ada782c4393e4439ab692618f",
"assets/assets/images/techl212.png": "f8a958155a2676c3c11144608e3df64b",
"assets/assets/images/techl3.png": "d167256a0dba71aac9f00d233a55dfde",
"assets/assets/images/trophy.png": "0609efb7ed5a37a0d4abaf00764da9d7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d3e7188f992224a40d1c879358973bd6",
"assets/NOTICES": "b2cca8b221125606c309595d490399ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "93a63b18433d5c16dd17b5d9ab497edb",
"canvaskit/canvaskit.js.symbols": "e7c77ac76232599bc6156427fd62f1b5",
"canvaskit/canvaskit.wasm": "66fc8d37ab1570dc506e77a6eaf792f7",
"canvaskit/chromium/canvaskit.js": "ee5174694d4a451c41b16dc39ef73808",
"canvaskit/chromium/canvaskit.js.symbols": "01d9caade2ea14c491935bdd84ef7766",
"canvaskit/chromium/canvaskit.wasm": "e7fba470d068804648840dc7c47976d3",
"canvaskit/skwasm.js": "411f776c9a5204d1e466141767f5a8fa",
"canvaskit/skwasm.js.symbols": "1406bb4132af226781d78e74fe6c1fd5",
"canvaskit/skwasm.wasm": "3374362664927884d944e1f9babdbbc4",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3d1b8f8209b32015a48c45b668fa86af",
"/": "3d1b8f8209b32015a48c45b668fa86af",
"main.dart.js": "ce7593169ff18182ce42f4a806756a35",
"manifest.json": "fe7eb07bf1b9dfec63546a4a4c644919",
"version.json": "8a95f0ac5143ea6ef228bf3cf2133aa1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
