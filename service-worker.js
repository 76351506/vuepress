/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fbd58d642fe212aa270f1e6b13236929"
  },
  {
    "url": "assets/css/1.styles.2ec4f90a.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/2.styles.c79e1fa7.css",
    "revision": "27c433152cbe829319ee7413419f35a3"
  },
  {
    "url": "assets/css/3.styles.efaedfa7.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/4.styles.cddb6f2c.css",
    "revision": "09594ef5e62fec13f0dc32db260b1082"
  },
  {
    "url": "assets/css/5.styles.7caa7290.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.98f3297b.css",
    "revision": "21e3551f8e5ce658173d87321ab2d470"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.2ec4f90a.js",
    "revision": "eb659f99dc64cb47de7b3ec06db48f1c"
  },
  {
    "url": "assets/js/10.c0e6261b.js",
    "revision": "005a029e5143b48c0301754bcaa268ef"
  },
  {
    "url": "assets/js/11.1ac5a50f.js",
    "revision": "87388e553ca49ea00049c27dcbce680d"
  },
  {
    "url": "assets/js/12.23151c5a.js",
    "revision": "74435aacd2e862765fe647520a107a0e"
  },
  {
    "url": "assets/js/13.e1b33689.js",
    "revision": "ae00fab61311153f3907cdf683c30c77"
  },
  {
    "url": "assets/js/14.407380c5.js",
    "revision": "b533105e71dfae149e6d3a05be837277"
  },
  {
    "url": "assets/js/15.73f925e6.js",
    "revision": "23df201b7eaedf668b9ec08014dad5a0"
  },
  {
    "url": "assets/js/16.c05a9876.js",
    "revision": "97b7a8dd7c8d628a93c66f6c72b78c80"
  },
  {
    "url": "assets/js/17.1c7053fd.js",
    "revision": "9357d8fcd1e94c0308a9a56d28255fc2"
  },
  {
    "url": "assets/js/18.ac65dced.js",
    "revision": "3e93ad871ec5069cf58bcf14e6bbd897"
  },
  {
    "url": "assets/js/19.20cfae45.js",
    "revision": "8fb87d77467de4f7aeb944eb519b0a48"
  },
  {
    "url": "assets/js/2.c79e1fa7.js",
    "revision": "58d8190126ce4b1bbcf628022ddfc3b4"
  },
  {
    "url": "assets/js/20.f4d86a65.js",
    "revision": "641f967b1cb90d111317df08890f079b"
  },
  {
    "url": "assets/js/21.72929d7d.js",
    "revision": "3bf5065eecf377d89156e69bb29a9fbc"
  },
  {
    "url": "assets/js/22.1df2d1f5.js",
    "revision": "a1e434e79e071dbcf51c055621a16dec"
  },
  {
    "url": "assets/js/23.8ea023fb.js",
    "revision": "245255a90c360e6e6d64fc6388d0aa2b"
  },
  {
    "url": "assets/js/24.c5af4c1e.js",
    "revision": "3124ccc48d612273401e5dac1885bfc8"
  },
  {
    "url": "assets/js/25.2a550a0b.js",
    "revision": "0a0589d1e0048574b490f7c1dee134e0"
  },
  {
    "url": "assets/js/26.48ad7c17.js",
    "revision": "c98b92020e9cf8b7b5a66af2f6bc906b"
  },
  {
    "url": "assets/js/27.fec05349.js",
    "revision": "4cfd554869fad6257946a128a25c8694"
  },
  {
    "url": "assets/js/28.55307e92.js",
    "revision": "2612cec32c51009374a90186d58e851e"
  },
  {
    "url": "assets/js/29.f8c13449.js",
    "revision": "922442ef5109ec44959006fb342dd3b7"
  },
  {
    "url": "assets/js/3.efaedfa7.js",
    "revision": "96cfa5e64353852684391d770f977431"
  },
  {
    "url": "assets/js/30.67af1d04.js",
    "revision": "4ed8adee89b2f0d033d8efe1e5f240a1"
  },
  {
    "url": "assets/js/31.9469df18.js",
    "revision": "89af638c8f0624e37e6d02cb69d271d3"
  },
  {
    "url": "assets/js/32.8fbc23d8.js",
    "revision": "7495b443280247981f450be618428965"
  },
  {
    "url": "assets/js/33.eec3d4e5.js",
    "revision": "712e3fe90cce0163ae637512e33ddf58"
  },
  {
    "url": "assets/js/34.24e164c5.js",
    "revision": "b1f71c4edbb71ebc53f4e05916f98579"
  },
  {
    "url": "assets/js/35.53e08221.js",
    "revision": "621688f9f618ec6fead8dac847e2cda1"
  },
  {
    "url": "assets/js/36.ec11b9c7.js",
    "revision": "e5a6f0483b8ff24764033f9e86296931"
  },
  {
    "url": "assets/js/37.9ff91143.js",
    "revision": "d62af1dcf33f84346bb7849222a39c3e"
  },
  {
    "url": "assets/js/38.0d71ad0c.js",
    "revision": "31415cac4e125b83084ef1ea50f89396"
  },
  {
    "url": "assets/js/39.8c84ba65.js",
    "revision": "c77e2135358fd23d5c9ba2d699b82cba"
  },
  {
    "url": "assets/js/4.cddb6f2c.js",
    "revision": "17b371b9a9f3681e90ac921998f79c31"
  },
  {
    "url": "assets/js/40.cb508571.js",
    "revision": "fd6071dcca5b88c306258cc3a8f80ebe"
  },
  {
    "url": "assets/js/41.3b742c3e.js",
    "revision": "74140a7a6cc799b2d859514a6cf654da"
  },
  {
    "url": "assets/js/42.f6088ae6.js",
    "revision": "eb793d7968033ba3eda723f3e46097df"
  },
  {
    "url": "assets/js/43.0aade89f.js",
    "revision": "95cd15177c0aa4260f49d9533219572c"
  },
  {
    "url": "assets/js/44.f2d47cbd.js",
    "revision": "7c85f4a31a6254061bdcbdcefbace4fe"
  },
  {
    "url": "assets/js/45.2460ab6e.js",
    "revision": "02f500e687a42ed3df16a06f84eeb535"
  },
  {
    "url": "assets/js/46.65c26d4d.js",
    "revision": "4083673eff75725a3080ab2bb258ef29"
  },
  {
    "url": "assets/js/47.3c45da60.js",
    "revision": "c6c38e33a158c7c9b3781af6e390f684"
  },
  {
    "url": "assets/js/48.9f198d53.js",
    "revision": "986c2d972d54877d37a4527657a70fea"
  },
  {
    "url": "assets/js/49.1a1cbb1d.js",
    "revision": "cfb805f60a47b9298a66ec8d4f54761f"
  },
  {
    "url": "assets/js/5.7caa7290.js",
    "revision": "9e41354fec20308f9da89ae8c9743c14"
  },
  {
    "url": "assets/js/50.69212b6f.js",
    "revision": "17dd05f9d230066dd42826b5b600c574"
  },
  {
    "url": "assets/js/51.540c2771.js",
    "revision": "8df4e35a78b510c398a364e9ae79f709"
  },
  {
    "url": "assets/js/52.e1f3d91a.js",
    "revision": "d59f8338ee08ae6b9d43dfd88833fb8b"
  },
  {
    "url": "assets/js/53.23dc1f55.js",
    "revision": "f306e8a456daac32ab82af226d4c52ce"
  },
  {
    "url": "assets/js/54.ece449f8.js",
    "revision": "ff7532bb5b90bbeaa9d07dea024c6456"
  },
  {
    "url": "assets/js/55.3a31134b.js",
    "revision": "ed67e206e11747fbf50a3cf374950a48"
  },
  {
    "url": "assets/js/56.4d90a52a.js",
    "revision": "ec7aeaee5bb870cfd4ac2c1a072ad420"
  },
  {
    "url": "assets/js/57.ce3c62bb.js",
    "revision": "0b747d7d3cd351061f89c4c25e52f160"
  },
  {
    "url": "assets/js/58.f289468c.js",
    "revision": "b2c5846c7d10d3eb7d79feb7b56699c5"
  },
  {
    "url": "assets/js/59.e6b08c30.js",
    "revision": "7befa1872863606bc591d43c9ef28345"
  },
  {
    "url": "assets/js/6.cd9f7e7f.js",
    "revision": "e80987a44b0d808fa04178a08b5bf791"
  },
  {
    "url": "assets/js/60.388e9a38.js",
    "revision": "17c60a9475eb3c98f8bfcd71b829ffd4"
  },
  {
    "url": "assets/js/7.bc003cb1.js",
    "revision": "b23129dc63e692fcc3c9aa4bb4306f8f"
  },
  {
    "url": "assets/js/8.c52e3010.js",
    "revision": "50b2245e88a5d2136e0ed8201d9ed681"
  },
  {
    "url": "assets/js/9.055c3605.js",
    "revision": "78c69c8abac65e8385deca8b3f617a61"
  },
  {
    "url": "assets/js/app.98f3297b.js",
    "revision": "8ab1ea478a9804e39913d24c8519eee4"
  },
  {
    "url": "guide/assets.html",
    "revision": "6fb878c98fc6d74191dd2750457d5fb7"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "9f6335df1b8b0c86443107f43207beb9"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "92f4ea907713664af3a15c189eda80ae"
  },
  {
    "url": "guide/deploy.html",
    "revision": "188116a1bcb689e9ac64726052c84ee9"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "aa05a3b66fdfbe37fd680678f670c230"
  },
  {
    "url": "guide/i18n.html",
    "revision": "890bd7351f25eacb0a500c9ec3e47a8a"
  },
  {
    "url": "guide/index.html",
    "revision": "07061a05b983ba0fab53c45a000f8b2c"
  },
  {
    "url": "guide/markdown.html",
    "revision": "e9dde64770e20013c23c05e86bce99f2"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "f205d1dc4ecea0cb13b093f09587ea26"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "images/nodepath.png",
    "revision": "a3c631c0f4158cc66e24ffe73cc14c12"
  },
  {
    "url": "images/redux_data_flow.png",
    "revision": "9083525bedf0af2ae04a8a079c64fda7"
  },
  {
    "url": "index.html",
    "revision": "fa007753bec9114b9177529e2277b2b8"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miniProgram/index.html",
    "revision": "5e858bed4e90cdcaa2f104dfdaae435b"
  },
  {
    "url": "miniProgram/wx-catalog.html",
    "revision": "4d53413c852441ad94e245a5b6490282"
  },
  {
    "url": "miniProgram/wx-component-custom.html",
    "revision": "eccd6fef8c94467f96b9a99e1ecf69b7"
  },
  {
    "url": "miniProgram/wx-component-native.html",
    "revision": "f4b485b94fe2aeb0b68f1a9b5764c3dd"
  },
  {
    "url": "miniProgram/wx-data.html",
    "revision": "641a496940bed18dfa454aff64e81390"
  },
  {
    "url": "miniProgram/wx-event.html",
    "revision": "8ee25930af5bee073ff2a6a58bd40e63"
  },
  {
    "url": "miniProgram/wx-guide.html",
    "revision": "2039e9ff0ef08629b9e411c038f4a819"
  },
  {
    "url": "miniProgram/wx-install.html",
    "revision": "2d076acb35349f40dc63c3aa41004262"
  },
  {
    "url": "miniProgram/wx-life-cycle.html",
    "revision": "c1299bcebc8a26e950115b747de7e2d1"
  },
  {
    "url": "miniProgram/wx-loop.html",
    "revision": "49ec3004aec56485fe2ab8337701a312"
  },
  {
    "url": "miniProgram/wx-plugin.html",
    "revision": "b0f3f05d9b04dfba31817879babbfc0c"
  },
  {
    "url": "miniProgram/wx-request.html",
    "revision": "710589e6f503dff4b538a435c139e05a"
  },
  {
    "url": "miniProgram/wx-route.html",
    "revision": "273429e6e9d4c4cf7a2c16ff12d8a061"
  },
  {
    "url": "miniProgram/wx-sdk.html",
    "revision": "7ebc1fbc38f0ec348e6ff13213e80c3f"
  },
  {
    "url": "miniProgram/wx-storage.html",
    "revision": "6cabb1b420eaf81e3521792780e7f5ee"
  },
  {
    "url": "miniProgram/wx-template.html",
    "revision": "13c3d522bf9ca89f791023d47a7ac792"
  },
  {
    "url": "nodejs/index.html",
    "revision": "41a1ac2c09843a32c8775a9777722de1"
  },
  {
    "url": "nodejs/install.html",
    "revision": "9e53a33c77f25b6571099e1cf793649f"
  },
  {
    "url": "nodejs/middleware.html",
    "revision": "cdad33113dfc59ae5ab4b94f3a445200"
  },
  {
    "url": "nodejs/package.html",
    "revision": "4e4475da9657c3f2fcc9749f0fc0097c"
  },
  {
    "url": "react/communicate.html",
    "revision": "65884d095ab9cb8a1209ec3a37e53de2"
  },
  {
    "url": "react/component.html",
    "revision": "91a9239fe4cab9767a2815db605067a6"
  },
  {
    "url": "react/index.html",
    "revision": "1f8c6323a1a1490a3fb21a20f605a6a0"
  },
  {
    "url": "react/install.html",
    "revision": "9f0185dee900d101823781accdff25d2"
  },
  {
    "url": "react/jsx.html",
    "revision": "9f388b0b9363079ba5ebaf1b125c7481"
  },
  {
    "url": "react/router.html",
    "revision": "cc0e98cab310d660505e4326c9fae778"
  },
  {
    "url": "redux/action.html",
    "revision": "6a6b520038b19e762c35428388e1208f"
  },
  {
    "url": "redux/index.html",
    "revision": "faac17c4792a065cc7ec5ca617961e78"
  },
  {
    "url": "redux/react-redux.html",
    "revision": "595588c70a183cd6f0fdbfe975520ff9"
  },
  {
    "url": "redux/reducer.html",
    "revision": "da68db54a51a5faacf8b9eeec0c5f281"
  },
  {
    "url": "redux/store.html",
    "revision": "3b7cd54a13793eb8b942b83c6dd4e296"
  },
  {
    "url": "redux/wepy-redux.html",
    "revision": "ac2d2d978a11fe5524578ca89b29e3dc"
  },
  {
    "url": "wepy/application.html",
    "revision": "dd4712af602606800cdf214630b7e788"
  },
  {
    "url": "wepy/catalog.html",
    "revision": "a684bc0a876b564b4954e2f17673277b"
  },
  {
    "url": "wepy/component.html",
    "revision": "8796f362610ea958d8069ed9b12f803d"
  },
  {
    "url": "wepy/computed.html",
    "revision": "999eaf50340614ec97ec5b1f9a623d3f"
  },
  {
    "url": "wepy/entry.html",
    "revision": "2c2734c8506f40f7fe0fb417631ee5d6"
  },
  {
    "url": "wepy/events.html",
    "revision": "51edab7d5b82d8c71660bbabc1087f1f"
  },
  {
    "url": "wepy/index.html",
    "revision": "8422a354866c9ba9105a6771da9d670c"
  },
  {
    "url": "wepy/install.html",
    "revision": "21235076f154af18695180a05e7a581e"
  },
  {
    "url": "wepy/props.html",
    "revision": "deb1fd82cdd7d27c59d33af2e4f38404"
  },
  {
    "url": "wepy/repeat.html",
    "revision": "861875ed5ef66daffc69b4fd3c78772a"
  },
  {
    "url": "wepy/slot.html",
    "revision": "07839a8640349b4ef3ac0e99d3d486df"
  },
  {
    "url": "wepy/watcher.html",
    "revision": "cd283ac29c973dfcc286bcf84769c4f3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
