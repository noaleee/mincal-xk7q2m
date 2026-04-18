'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d212f4055804e705394bd3f09bb6c049",
".git/config": "56fcc98adef01b002dc6daae130d7f24",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "37f54228defce4ee33fadd52fbda0ae1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "953008c065fb7748edbb27864d85731e",
".git/logs/refs/heads/gh-pages": "953008c065fb7748edbb27864d85731e",
".git/logs/refs/remotes/origin/gh-pages": "966574401336c951eb8ae9fe9595ec6e",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/05/7506983f0a8b0438fc5f24382db64497bf6eae": "90601edfa45851b2856f614e122579a0",
".git/objects/06/877e136abd041630969d7b3a4cc4992ce6a759": "9ee744d3d76c3ef522c29f904466a9a0",
".git/objects/08/bf4cfc2164a0bff74a4bf844128d3b843bbf87": "8a381c2400a8d3d6a20fb6bd660b5405",
".git/objects/11/57b8c79cd9e7e9f3def511eb9fb517b5fec90f": "755dc0f162972332188c0e241d1a8d07",
".git/objects/14/b64fff4900f6300fa44be6bee216fd0ff255ae": "90d798e3c5b3b375d7a4294492278771",
".git/objects/17/b73521cb23a2a41d2dd880eb36bb441dd418ee": "810582de93a7cf6d6e136a4c19d583fd",
".git/objects/2b/945fa253fd16fb5f9e551ef85c1f1742e72527": "d709a04ecaba46892faf1fc22c398489",
".git/objects/2c/b73084be5561c3dee9fdca018f110746c6949e": "108c06fc3e0365d41a033148c0d61aae",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3a/659f0b5cf061d77d06041e12a6446d22f4f730": "4d11abc17ed24a2da93f6a2e4cd9daa6",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/44/06cf0fba781043792968bea545b4a96783f59a": "562b7b9ce3b70dc22a090b87a61acd4a",
".git/objects/44/e03d4ef7cb9758c445188c1a8d955f9984954f": "7c86df25e05b90cde77b955aa442b8e1",
".git/objects/46/d47a485d60c6f754a2f6168f12887357050d6f": "3d890bba18c08e119fdc4316722e61e1",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/9c107d310d331beafc15661cc9afa547106b3a": "d5dce373595cd9205d30bd9992d4de0e",
".git/objects/55/227466688587e0193566704b0442b9de7b163f": "a8d9a400765ae356f88d57b9ea1d4483",
".git/objects/55/42e963bf8d3dea05a2b9bdc654e843cd8caba9": "478d1d38b9f859ee75210c8bf014a168",
".git/objects/56/eff4b6c92845f95570faccceea64c0da7fb07d": "2980f5a14dfdcc17e4b2a8869be18b20",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/b73d550bb3b8fc7ec4c0cf4110e4cdb8f52790": "4808303a761a5a53d4f6598c2709140e",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6a/9c887b4b272ef247a02047b609428afbbdccd3": "67e9602ef01a59c72d972913029497d2",
".git/objects/6c/2b947fc92c79176aca3bb419bbc3ec7d29edbb": "61abb29e206bf4c9ba5a349de683954d",
".git/objects/82/74ef431592aeed92724963515ad7f7f8928b2c": "1605e2dc69092d4a92416646f829969e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8066cd0e5e8bef6cb1e1b273fe00dfe07b41eb": "a433ee3265df62fe74dedcc4e9c4ec51",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/5e30a28b4435359945cf08b261c86d0de8da53": "6906b6f1c1183f6388ddf8a760f85a58",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/96/ce4c5a7914be46be85392b59c41c7994b2dd09": "c4bdba5fa14740ccf3301d1905ea15f4",
".git/objects/98/b3faf2fd52fbf91f00b34868f616c0d36a2544": "a9535689fb17be406d16a28d31c5ae4f",
".git/objects/a3/2c1f11ca20c4cde2090a6e8cf7080469d00aed": "727941dd66ea95477c5014581f88d2f4",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/9cae53d7bc258b5c6cc5274ad916332bd79b5d": "f475ae69b5d3106b99e74df73c4fe432",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ca/43af843e557e083755386ea2eeb05793755ed7": "e1bb22dd17e6e2535fd0a65cb2b9600d",
".git/objects/d2/7da8a4a73f2b3703c6f14fd2063c5ccec7b677": "5b765c3edbb5f18062e4cae644d568f1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a7c59d84e3820c18a1b208439c05a9b4a0a281": "2025031449347c9aa62cefe799c69a97",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/aafc2c9c517782ae525bbe381ec08c4f934f3e": "8cdfd052745780b1f37cb88526c9e1f2",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/4c6f1b39f83b5784b4b9a0e3126ae6d5260be2": "0b8ba0a312ffc0bc686eff070da18aa1",
".git/objects/dc/4a7c65e6f450bf17c10a2405250b620eb78703": "82f65758015f924cad1fefe4c5ceb4aa",
".git/objects/dd/1a6b9a2ee428b943647147333748ac813a376e": "11b142f86e2ce78621ee09876eb57c3e",
".git/objects/e4/38af8f19c81dba4fc3838cdc1a40872b5e6ea2": "9809e0610123e2734d0dfdbe229a83d4",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/e36abc474796c8b6c383380ddd9f87655682ec": "912edc8b67d1189740b5749ac48d469e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/c322c86fe3041c9695133dacf5cde02ae8fdb6": "a8723ca05dadc39893d917b86e2b829b",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/refs/heads/gh-pages": "23dc6951058995eccbde774b757a0136",
".git/refs/remotes/origin/gh-pages": "23dc6951058995eccbde774b757a0136",
"assets/AssetManifest.bin": "3b6ecab5da1294f617c0bb7d943e6463",
"assets/AssetManifest.bin.json": "35b8c05c5ad966c7d258c1b52e6969e3",
"assets/AssetManifest.json": "ed39b6acf41ab3569246d3c9df949540",
"assets/assets/fonts/NotoSansKR/NotoSansKR-Bold.otf": "74752df70b0269ef22f42bf9fefe8204",
"assets/assets/fonts/NotoSansKR/NotoSansKR-Medium.otf": "f5da879570e571a7308f804309479f19",
"assets/assets/fonts/NotoSansKR/NotoSansKR-Regular.otf": "be4ea586e2517793c1b6eb84f4f86c12",
"assets/assets/fonts/Pretendard/Pretendard-Bold.otf": "f8a9b84216af5155ffe0e8661203f36f",
"assets/assets/fonts/Pretendard/Pretendard-Medium.otf": "13a352bd44156de92cce335ce93cd02d",
"assets/assets/fonts/Pretendard/Pretendard-Regular.otf": "84c0ea9d65324c758c8bd9686207afea",
"assets/assets/fonts/Pretendard/Pretendard-SemiBold.otf": "6fe301765c4f438e2034a0a47b609c61",
"assets/assets/icons/app_icon.png": "159127ebcf485be468964e53bcb76d80",
"assets/assets/icons/app_icon_foreground.png": "e215df62a061beba313eb06e7e7946f2",
"assets/assets/icons/ic_notification.png": "79075a25972ede57806df64c412aae6b",
"assets/assets/icons/ic_notification_24.png": "812576ddc443e6efb00dce60ca241284",
"assets/assets/icons/ic_notification_36.png": "6d1eedaa3aa02ab28f630a578af8f998",
"assets/assets/icons/ic_notification_48.png": "02cc39ed71cc4709689b03a6e735b8ad",
"assets/assets/icons/ic_notification_72.png": "6995eb6e7892801954e851db7fcab200",
"assets/assets/icons/ic_notification_96.png": "79075a25972ede57806df64c412aae6b",
"assets/FontManifest.json": "65cf43bcbcdb1238b93d5ee0544b9e3f",
"assets/fonts/MaterialIcons-Regular.otf": "fc55a6fd4bfcd9800c78f278aee73bed",
"assets/NOTICES": "04d47309a5147daa45af7901a7a6ccc8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "2980e1fa839db7ac570f1da20757b8d4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "45ba693846b017cbc57b3d7027e8e669",
"/": "45ba693846b017cbc57b3d7027e8e669",
"main.dart.js": "8afe91cdc915c30672fc76c0e4485c36",
"manifest.json": "1e18c88b415cfe26c4fc36fdf97d6445",
"version.json": "6d29a13535c0c8de6821957ee8ae53d5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
