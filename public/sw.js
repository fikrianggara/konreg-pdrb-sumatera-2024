if (!self.define) {
  let e,
    a = {};
  const s = (s, i) => (
    (s = new URL(s + ".js", i).href),
    a[s] ||
      new Promise((a) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = a), document.head.appendChild(e);
        } else (e = s), importScripts(s), a();
      }).then(() => {
        let e = a[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, n) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (a[c]) return;
    let r = {};
    const t = (e) => s(e, c),
      f = { module: { uri: c }, exports: r, require: t };
    a[c] = Promise.all(i.map((e) => f[e] || t(e))).then((e) => (n(...e), r));
  };
}
define(["./workbox-4754cb34"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "fbed2dcb6550df22292f611ca4286d6f",
        },
        {
          url: "/_next/static/QOzSwihiSSEacWK3nBvWK/_buildManifest.js",
          revision: "e50bd43c906648e2a1ccbe057d6ceadb",
        },
        {
          url: "/_next/static/QOzSwihiSSEacWK3nBvWK/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/119-52fd6315959d4899.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/136-a489a38d9b74d252.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/178-6f64b3a7a34b7150.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/250-346521b793cd217c.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/292-281ff5fec1afd780.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/359-0d1c263b7c454de4.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/366-ebfc1c0d2f5d2a2a.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/443-926e8f77fc5e3a40.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/539-135052395bacee89.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/59-e07736b88e7df372.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/610-e598c6fd77ab0a98.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/64-577cf1867bfaea78.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/65-9bfc0b5b8527b486.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/728-1fc791c46dcb5c0a.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/749-337269b8c4176048.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/938-b8b2515b8cd780fa.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/967-3fb5dba72e24afb0.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/data-infografis/data/page-919759707e3adc8c.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/data-infografis/infografis/%5Btag%5D/page-5413713534e54717.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/error-530b7593444e90b5.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/galeri/page-a1d9bc19f363d38b.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/hiburan/kuliner/page-25869db3a30a0e03.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/hiburan/layout-bbf347900a9cdb57.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/hiburan/oleh-oleh/page-398ee7b6bdcae210.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/hiburan/page-85cb62bf1f4d7e96.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/hiburan/wisata/page-c1fd8e0816b8533e.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/kegiatan/jadwal/page-e00c74207817a535.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/kegiatan/layout-b10ccc554433e576.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/kegiatan/lokasi/page-69f458d737382b8e.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/kegiatan/map/page-8707426a50153438.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/kegiatan/materi/page-539cb327bd3cab17.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/kegiatan/notula/page-4622f11b4f15033e.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/kontak/page-387e2a824ff1aab1.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/layout-f385599ed8b382b7.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/loading-820bd407cbf1fb12.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/not-found-fb0ed79169607449.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/page-7a542e894c819d47.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/app/tentang/page-1b6ae744f6f7bb26.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/c36f3faa-145183274638b35a.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/fd9d1056-1821fd5dea71ad51.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/framework-43665103d101a22d.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/main-073a2d71d1006191.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/main-app-655a91f087f9b07d.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/pages/_app-8e650e1c50ef0819.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/pages/_error-0ffac66cb3fae446.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-6c484f983d711734.js",
          revision: "QOzSwihiSSEacWK3nBvWK",
        },
        {
          url: "/_next/static/css/5365197b4a26b853.css",
          revision: "5365197b4a26b853",
        },
        {
          url: "/_next/static/css/9c94e8e687ba35ba.css",
          revision: "9c94e8e687ba35ba",
        },
        {
          url: "/_next/static/css/ad4e722007fd5fb4.css",
          revision: "ad4e722007fd5fb4",
        },
        {
          url: "/_next/static/media/0484562807a97172-s.p.woff2",
          revision: "b550bca8934bd86812d1f5e28c9cc1de",
        },
        {
          url: "/_next/static/media/0a03a6d30c07af2e-s.woff2",
          revision: "79da53ebaf3308c806394df4882b343d",
        },
        {
          url: "/_next/static/media/30cd8f99d32fa6e8-s.woff2",
          revision: "e5c1b944d9e3380a062bf911e26728a3",
        },
        {
          url: "/_next/static/media/3f9466fc53690ba7-s.woff2",
          revision: "173212bc7f69965527b29df7419d615c",
        },
        {
          url: "/_next/static/media/46c21389e888bf13-s.woff2",
          revision: "272930c09ba14c81bb294be1fe18b049",
        },
        {
          url: "/_next/static/media/4c285fdca692ea22-s.p.woff2",
          revision: "42d3308e3aca8742731f63154187bdd7",
        },
        {
          url: "/_next/static/media/6245472ced48d3be-s.p.woff2",
          revision: "335da181ffc3c425a4abf0e8fc0f1e42",
        },
        {
          url: "/_next/static/media/7108afb8b1381ad1-s.p.woff2",
          revision: "d5a9cbc34d22ffd5c4eb636dcca02f5d",
        },
        {
          url: "/_next/static/media/7db6c35d839a711c-s.p.woff2",
          revision: "de2b6fe4e663c0669007e5b501c2026b",
        },
        {
          url: "/_next/static/media/8888a3826f4a3af4-s.p.woff2",
          revision: "792477d09826b11d1e5a611162c9797a",
        },
        {
          url: "/_next/static/media/8d346445d24062b5-s.woff2",
          revision: "c965abed1310982a4d2148cb81765b56",
        },
        {
          url: "/_next/static/media/94575ae3783e7c88-s.woff2",
          revision: "a56bc9adab4ad49a6e6d19f72ac23bc0",
        },
        {
          url: "/_next/static/media/9e82d62334b205f4-s.p.woff2",
          revision: "1c2ea932e7620e3a752301d0e54d3d91",
        },
        {
          url: "/_next/static/media/b957ea75a84b6ea7-s.p.woff2",
          revision: "0bd523f6049956faaf43c254a719d06a",
        },
        {
          url: "/_next/static/media/dfa2ccbeca9e77a8-s.woff2",
          revision: "4d88c8f550833714f8721257780b9000",
        },
        {
          url: "/_next/static/media/eafabf029ad39a43-s.p.woff2",
          revision: "43751174b6b810eb169101a20d8c26f8",
        },
        {
          url: "/_next/static/media/f5767adec246cdc1-s.woff2",
          revision: "7a1c6501aa2b3327c1cf556362a851cb",
        },
        {
          url: "/_next/static/media/f7099cae2a5aa83f-s.woff2",
          revision: "8717ab2d20ae5ec51c6ac277e0331511",
        },
        {
          url: "/assets/1x3_banner_kuliner.png",
          revision: "300c3f60efe311aa952ff44f66d5f2d4",
        },
        {
          url: "/assets/1x3_banner_kuliner_nocheck.png",
          revision: "e63938fbb8580189001624984a7e91ae",
        },
        {
          url: "/assets/1x3_banner_oleh-oleh.png",
          revision: "2845f5588d521a701aefd04c16a06320",
        },
        {
          url: "/assets/1x3_banner_oleh-oleh_nocheck.png",
          revision: "2a8c020fb8be140948bc2cea4ce91df7",
        },
        {
          url: "/assets/1x3_banner_wisata.png",
          revision: "62d7055703276256defbd8e3af058be0",
        },
        {
          url: "/assets/1x3_banner_wisata_nocheck.png",
          revision: "e01db06b320daffc024b22d3eae5f37b",
        },
        {
          url: "/assets/404.png",
          revision: "081e94f6c837e9cf4669476a5a98d0a2",
        },
        {
          url: "/assets/500.png",
          revision: "dcf32e42274de6fe2258e1bdc2c54432",
        },
        {
          url: "/assets/ACEH.jpg",
          revision: "48022fc0a5f01a07ffc23e8c44602457",
        },
        {
          url: "/assets/Adila Snack.png",
          revision: "3c21f4499a5ab9d7f4ae24438ee5b6d2",
        },
        {
          url: "/assets/BANGKA BELITUNG.jpg",
          revision: "1e1a55c0b0c955bc95f62b78afa8ae42",
        },
        {
          url: "/assets/BENGKULU.jpg",
          revision: "8301032606807cdb03b84b216cefc15e",
        },
        {
          url: "/assets/BERASO COFFEE.png",
          revision: "ce97dfc889f2c8092ae3eada2790df6a",
        },
        {
          url: "/assets/Batik Azmiah.png",
          revision: "d490a23aeb46707dbf0f7b83cbeed778",
        },
        {
          url: "/assets/Batik Jambi Berkah.png",
          revision: "eac9930f0547dbd5df149f28d1fafd3e",
        },
        {
          url: "/assets/CIK MIA SONGKET.png",
          revision: "c30d363011ead23de43cbd186057904e",
        },
        {
          url: "/assets/Cake by Nadia.png",
          revision: "cdd1faf9e93b34f41c50367e8d97dbac",
        },
        {
          url: "/assets/ILHAMUMTAZA.png",
          revision: "1d247bf890e0bcc842a1bae1a85b91e3",
        },
        {
          url: "/assets/JAMBI.jpg",
          revision: "691faffd7a9280a834eaf95841c071bc",
        },
        {
          url: "/assets/KEPRI.jpeg",
          revision: "1018a1f9ee6599938c6b10334df5ad2a",
        },
        {
          url: "/assets/LAMPUNG.jpeg",
          revision: "2e99fbbee3d890e2710482bea27d3595",
        },
        {
          url: "/assets/Pempek Balap.png",
          revision: "4f127f48ec06286cb3d29257aef32ae6",
        },
        {
          url: "/assets/Persekutuan dan Perkumpulan Mega Buana.png",
          revision: "ea5d13c7ee1dafd872376f1193ea80e2",
        },
        {
          url: "/assets/R&R.png",
          revision: "7e9b986ecd725e8294fd136199d69bfd",
        },
        {
          url: "/assets/RIAU.jpg",
          revision: "ae8c16a9c9d51abb88bd792cbf9cdcee",
        },
        {
          url: "/assets/RM CAHAYA MINANG.png",
          revision: "ccc4e650a9d32d2b70edffc6b62349f6",
        },
        {
          url: "/assets/SUMBAR.jpg",
          revision: "0078a5f61e383a3a5a41d07398c81b60",
        },
        {
          url: "/assets/SUMSEL.jpg",
          revision: "02b04cfbc9a31ca7a4bfcc0eb1745625",
        },
        {
          url: "/assets/SUMUT.jpg",
          revision: "4704523e5e1054ab4988dbb218a8c1bd",
        },
        {
          url: "/assets/banner_kuliner.png",
          revision: "5ad466e7bc7f95f57f8b2188de9a7912",
        },
        {
          url: "/assets/banner_oleh-oleh.png",
          revision: "422647cd3e1809e391cac2184625a440",
        },
        {
          url: "/assets/banner_wisata.png",
          revision: "0eebb7f976ded2e34045b2bbbf70d303",
        },
        {
          url: "/assets/icon144_maskable.png",
          revision: "7c80a995069d008f5a01f87f40e0d40f",
        },
        {
          url: "/assets/icon512_maskable.png",
          revision: "3ced312a940bf4315286fefcd3754bed",
        },
        {
          url: "/assets/icon512_rounded.png",
          revision: "e24e7e4138324418abc32c146bc9211e",
        },
        {
          url: "/assets/infografis/gini-ratio/babel.jpeg",
          revision: "2f7d92905c1fb63c03b09a23f9ad6167",
        },
        {
          url: "/assets/infografis/gini-ratio/bengkulu.jpg",
          revision: "88455423419dfad960006513d86e58ba",
        },
        {
          url: "/assets/infografis/gini-ratio/jambi.jpg",
          revision: "c8b050558db547c920f4558b5df69b14",
        },
        {
          url: "/assets/infografis/gini-ratio/kepri.png",
          revision: "4420f695d03a351e91cd42451a0c3025",
        },
        {
          url: "/assets/infografis/gini-ratio/riau.jpg",
          revision: "21a46178035e2ae6553aaba569f554e0",
        },
        {
          url: "/assets/infografis/gini-ratio/sumbar.png",
          revision: "b43c67801d8b0dfae1639648234a6547",
        },
        {
          url: "/assets/infografis/gini-ratio/sumsel.jpg",
          revision: "189c25b678e08c5bd0c615ec6b0a25b6",
        },
        {
          url: "/assets/infografis/gini-ratio/sumut.jpg",
          revision: "2cc6a286b4bc0af85f12a7156e60dbed",
        },
        {
          url: "/assets/infografis/infografis-not-found.png",
          revision: "8aee9d9d6c8f324a6fc33dbe0b6b0dc8",
        },
        {
          url: "/assets/infografis/ipm/aceh.jpg",
          revision: "41ac176fd1d077cfa531b10a2f90fa8a",
        },
        {
          url: "/assets/infografis/ipm/babel.jpg",
          revision: "b0ced110592f23e9c857031f7785d2b0",
        },
        {
          url: "/assets/infografis/ipm/bengkulu.png",
          revision: "216e48a0fd229517f5c156a535ea5a3a",
        },
        {
          url: "/assets/infografis/ipm/jambi.jpg",
          revision: "1a3a3e47abe1adad38904050e983009c",
        },
        {
          url: "/assets/infografis/ipm/kepri.png",
          revision: "08a329528d96326f9bc6bb6fc1732a06",
        },
        {
          url: "/assets/infografis/ipm/lampung.jpg",
          revision: "a6924f07123165e3f2d09d5c97a87837",
        },
        {
          url: "/assets/infografis/ipm/riau.jpg",
          revision: "ac5578202a917377bcefb748d113ba6a",
        },
        {
          url: "/assets/infografis/ipm/sumbar.png",
          revision: "69316ab96abf323b1ac23ccfe6b50a0e",
        },
        {
          url: "/assets/infografis/ipm/sumsel.jpg",
          revision: "6fe8b0defb55b22ad5f2b8b3f6314c99",
        },
        {
          url: "/assets/infografis/ipm/sumut.jpg",
          revision: "11ffbf30540eb0ebf7f117cbaa4a5d68",
        },
        {
          url: "/assets/infografis/kemiskinan/babel.jpeg",
          revision: "155e28c8634eba04a60ae346dfbdef36",
        },
        {
          url: "/assets/infografis/kemiskinan/bengkulu.jpg",
          revision: "b1697bd200850e8cf27e34dd1c1bdc92",
        },
        {
          url: "/assets/infografis/kemiskinan/jambi.jpg",
          revision: "e69763ac62241ebe1b94875bb9660fa6",
        },
        {
          url: "/assets/infografis/kemiskinan/kepri.png",
          revision: "c89f0e7ae5817a403c755e3a07346174",
        },
        {
          url: "/assets/infografis/kemiskinan/lampung.jpg",
          revision: "5de937dac34fda1f198080b3c6ad7367",
        },
        {
          url: "/assets/infografis/kemiskinan/riau.jpg",
          revision: "5e720af21b8d76d4dd5087c8b5bbc329",
        },
        {
          url: "/assets/infografis/kemiskinan/sumbar.png",
          revision: "bd349ba3de68e7e97719fd25527cfee8",
        },
        {
          url: "/assets/infografis/kemiskinan/sumsel.jpg",
          revision: "189c25b678e08c5bd0c615ec6b0a25b6",
        },
        {
          url: "/assets/infografis/kemiskinan/sumut.jpg",
          revision: "639acee3803fd8320d869d4bb8f0abcc",
        },
        {
          url: "/assets/infografis/ketenagakerjaan/aceh.png",
          revision: "c3fad10fa3cf3428bab0dafe69b72240",
        },
        {
          url: "/assets/infografis/ketenagakerjaan/babel.jpeg",
          revision: "4f5e9e65f464bdf75b16e3df863ccd9a",
        },
        {
          url: "/assets/infografis/ketenagakerjaan/bengkulu.png",
          revision: "9331fd00ca4ba73f4f8310fb124506a3",
        },
        {
          url: "/assets/infografis/ketenagakerjaan/jambi.jpg",
          revision: "61c3317fbd6cab0d442cfacf260cd44f",
        },
        {
          url: "/assets/infografis/ketenagakerjaan/kepri.jpg",
          revision: "d3e2f88e127322343043e21eb1a170d6",
        },
        {
          url: "/assets/infografis/ketenagakerjaan/lampung.jpeg",
          revision: "538d855d7b627cd97f3625b4796f45dd",
        },
        {
          url: "/assets/infografis/ketenagakerjaan/riau.png",
          revision: "ed86ad1cf405a6ebbb6bd70b9bb65a37",
        },
        {
          url: "/assets/infografis/ketenagakerjaan/sumbar.png",
          revision: "03afa4955c3126363c1d88719efaf35a",
        },
        {
          url: "/assets/infografis/ketenagakerjaan/sumsel.jpg",
          revision: "aaeeada9bbe28c4d0d4fcba3c82024d3",
        },
        {
          url: "/assets/infografis/ketenagakerjaan/sumut.jpg",
          revision: "4ee2e2da69a4ed1d591dfee63451025e",
        },
        {
          url: "/assets/logo aceh.png",
          revision: "6d4dd2e5395c6cff7b7bc2f5802403ad",
        },
        {
          url: "/assets/logo babel.png",
          revision: "d1302bad4d0b2b4b4f66b5b679de7493",
        },
        {
          url: "/assets/logo bengkulu.png",
          revision: "9ade4c4a86c954b55111391a76a3b020",
        },
        {
          url: "/assets/logo bi.png",
          revision: "ee0648d3ebe3effc7e8d89367f2e3494",
        },
        {
          url: "/assets/logo bps.png",
          revision: "3bba6cdfadbd31d14d1b287df850a875",
        },
        {
          url: "/assets/logo djpb.png",
          revision: "93d4c9dda14a27ae6e3fccb9df9568f7",
        },
        {
          url: "/assets/logo jambi.png",
          revision: "0cdb52f79259d969bc77bb38555f3b11",
        },
        {
          url: "/assets/logo kepri.png",
          revision: "5bd82201a2c9de1564b458f0ed97b210",
        },
        {
          url: "/assets/logo kominfo.png",
          revision: "74c9cbdeb2c3d159dd259498a0c2e828",
        },
        {
          url: "/assets/logo lampung.png",
          revision: "e601b2b6d5bfa1955d8fa64014370d6f",
        },
        {
          url: "/assets/logo riau.png",
          revision: "1173809c133b5dc5261ef523743b546e",
        },
        {
          url: "/assets/logo sumbar.png",
          revision: "dc6b5742b7ee820068bfb85cad76fee8",
        },
        {
          url: "/assets/logo sumsel.png",
          revision: "dceedb48fdb602ac0ff08bcb221b0482",
        },
        {
          url: "/assets/logo sumut.png",
          revision: "9681a86dbbab825a119944ce944ae377",
        },
        {
          url: "/assets/logo.png",
          revision: "bab5c213716612bf3f0b1d4f0800750e",
        },
        {
          url: "/assets/screenshot_portrait.png",
          revision: "1ad02cca9286e1e9b81350ec2d3a1870",
        },
        {
          url: "/assets/screenshot_wide.png",
          revision: "e7f1b268d6783a4cbd79612889d5e178",
        },
        {
          url: "/assets/whatsapp-logo.png",
          revision: "cec412444ff64b686e977c043d26c700",
        },
        { url: "/data/ipm.csv", revision: "357010882a7fa725b869301258d60c48" },
        {
          url: "/data/penduduk-miskin.csv",
          revision: "2bdf77b0ec8855d59d447ef46f4d961a",
        },
        { url: "/data/tpak.csv", revision: "d6da17e5212f3c6b0f23bf538e756280" },
        { url: "/data/tpt.csv", revision: "64808fdffa459f601cd051cfe9747399" },
        { url: "/manifest.json", revision: "a591890d5f2566a280426ad303dbcb4f" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: a,
              event: s,
              state: i,
            }) =>
              a && "opaqueredirect" === a.type
                ? new Response(a.body, {
                    status: 200,
                    statusText: "OK",
                    headers: a.headers,
                  })
                : a,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const a = e.pathname;
        return !a.startsWith("/api/auth/") && !!a.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
