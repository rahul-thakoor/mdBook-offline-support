importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js"
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "ayu-highlight.css",
    "revision": "ea1b5700d9961a50e78a175eb6166308"
  },
  {
    "url": "book.js",
    "revision": "cac88352d047fd1e5181d3654bbb5891"
  },
  {
    "url": "chapter_1.html",
    "revision": "61ed338e313afcd964e9e3d4ee2902fd"
  },
  {
    "url": "clipboard.min.js",
    "revision": "e77a83c01eb89942d5ae12a79183a741"
  },
  {
    "url": "css/chrome.css",
    "revision": "0a65ead6e7a947bd9e0a3ea82b565643"
  },
  {
    "url": "css/general.css",
    "revision": "b11677c1f12ff8a21cc0d9b0a768f26f"
  },
  {
    "url": "css/print.css",
    "revision": "d8fbfe012d73d4a638a3f7f06956e1db"
  },
  {
    "url": "css/variables.css",
    "revision": "7c0d02f4e62eb31a9909d25edd5a0bc1"
  },
  {
    "url": "elasticlunr.min.js",
    "revision": "bdc2dbed628a3bb7a62d58b999dd7123"
  },
  {
    "url": "favicon.png",
    "revision": "99aa04c6ee89063ee9fe65f6544e3d0b"
  },
  {
    "url": "FontAwesome/css/font-awesome.css",
    "revision": "269550530cc127b6aa5a35925a7de6ce"
  },
  {
    "url": "FontAwesome/fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "FontAwesome/fonts/fontawesome-webfont.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "FontAwesome/fonts/fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "FontAwesome/fonts/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "FontAwesome/fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "FontAwesome/fonts/FontAwesome.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "highlight.css",
    "revision": "4ea97d07c0edcea46bb0cf3c45eb7bc8"
  },
  {
    "url": "highlight.js",
    "revision": "bcf89c04116f8eff4bcdf1da206e69b4"
  },
  {
    "url": "how_to.html",
    "revision": "9048692e6e8cf1d106cd2b6a7ffef567"
  },
  {
    "url": "index.html",
    "revision": "eee5800c01d0d88b03bb44c33baa75b6"
  },
  {
    "url": "mark.min.js",
    "revision": "2ab50194c1473b8ab8589a3f63f204d8"
  },
  {
    "url": "print.html",
    "revision": "e9ac62cb6c08061b139d345c88e6da2a"
  },
  {
    "url": "register-sw.js",
    "revision": "b7b4ed07ba396ceabc8029b7c4c98c00"
  },
  {
    "url": "searcher.js",
    "revision": "10e6e5a13beac5cfb891ef19ed5ed902"
  },
  {
    "url": "searchindex.js",
    "revision": "82020abccc4f0f25ea01bd4366ef76f5"
  },
  {
    "url": "searchindex.json",
    "revision": "be7f7fb9b3f0f936cf67541ff1953fb3"
  },
  {
    "url": "tomorrow-night.css",
    "revision": "50f8f2e6d64d78013664bde3081094e0"
  }
], {
    ignoreUrlParametersMatching: [/.*/]
  });

  // Cache the Google Fonts stylesheets with a stale while revalidate strategy.
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.CacheFirst({
      cacheName: "google-fonts-stylesheets"
    })
  );

  self.addEventListener('activate', function(event) {
    
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName) {

          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    );
  });

  self.addEventListener('message', function(event) {
    if (event.data.action === 'skipWaiting') {
      self.skipWaiting();
    }
  });

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
