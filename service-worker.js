if(!self.define){let i,l={};const n=(n,s)=>(n=new URL(n+".js",s).href,l[n]||new Promise((l=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=l,document.head.appendChild(i)}else i=n,importScripts(n),l()})).then((()=>{let i=l[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(s,e)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const o=i=>n(i,r),g={module:{uri:r},exports:u,require:o};l[r]=Promise.all(s.map((i=>g[i]||o(i)))).then((i=>(e(...i),u)))}}define(["./workbox-db5fc017"],(function(i){"use strict";i.setCacheNameDetails({prefix:"mvtime"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/TODO.md",revision:"6893edb3c422910821269ea32b8439ef"},{url:"/css/208.85e27b48.css",revision:null},{url:"/css/29.22821ac8.css",revision:null},{url:"/css/319.d5f2729e.css",revision:null},{url:"/css/384.417109b8.css",revision:null},{url:"/css/481.b901e163.css",revision:null},{url:"/css/574.550fea02.css",revision:null},{url:"/css/578.bb235d42.css",revision:null},{url:"/css/623.ff886aa2.css",revision:null},{url:"/css/766.63f5fde6.css",revision:null},{url:"/css/app.d530fafa.css",revision:null},{url:"/img/add.26c186da.svg",revision:null},{url:"/img/add.69c298e9.svg",revision:null},{url:"/img/arrow-left.f0f6e9ed.svg",revision:null},{url:"/img/arrow-right.b158c98b.svg",revision:null},{url:"/img/cal-icon-alt.3a7faeef.svg",revision:null},{url:"/img/cal-icon.c98af1ed.svg",revision:null},{url:"/img/create.f85db708.svg",revision:null},{url:"/img/dark.94dc3876.svg",revision:null},{url:"/img/error-icon.c5bc41dd.svg",revision:null},{url:"/img/error_dark.1da7557a.png",revision:null},{url:"/img/error_light.4ab08e0b.png",revision:null},{url:"/img/favicon/favicon-128.png",revision:"646d8f3b904f7941dedb546cd6fd99c8"},{url:"/img/favicon/favicon-256.png",revision:"d4605e66aff8199c21f36d79975f1e08"},{url:"/img/favicon/favicon-50.png",revision:"852254a3e938fbdb532581335d7f7846"},{url:"/img/favicon/favicon-64.png",revision:"cc2d23cc2a176e6a679f727fbfcb1bca"},{url:"/img/favicon/favicon.svg",revision:"e9496d6dc667d7d227066915fbd9b7aa"},{url:"/img/general/user-icon.png",revision:"27c4e474ced2e8b9c2bfdb606f1822c6"},{url:"/img/h0s0.5abb226d.png",revision:null},{url:"/img/h0s1.fccb8fd6.png",revision:null},{url:"/img/h0s2.5439373a.png",revision:null},{url:"/img/h0s3.2d6b852b.png",revision:null},{url:"/img/h0s4.f8aba1ec.png",revision:null},{url:"/img/h0s5.92dc9efc.png",revision:null},{url:"/img/h0s6.036667ff.png",revision:null},{url:"/img/h1s0.f1d6b76e.png",revision:null},{url:"/img/h1s1.d54ed4eb.png",revision:null},{url:"/img/h1s2.2dbe946a.png",revision:null},{url:"/img/h1s3.67f4e88b.png",revision:null},{url:"/img/h1s4.9055d7ae.png",revision:null},{url:"/img/h1s5.983b423a.png",revision:null},{url:"/img/h1s6.f9f33564.png",revision:null},{url:"/img/h2s0.edd1929e.png",revision:null},{url:"/img/h2s1.3ff4be9a.png",revision:null},{url:"/img/h2s2.ed03e12e.png",revision:null},{url:"/img/h2s3.9ee0c8c8.png",revision:null},{url:"/img/h2s4.9c47b3aa.png",revision:null},{url:"/img/h2s5.29c71018.png",revision:null},{url:"/img/h2s6.f670312a.png",revision:null},{url:"/img/info-locked-icon.0b9144cc.svg",revision:null},{url:"/img/info-unlocked-icon.1ea710d7.svg",revision:null},{url:"/img/info.f44f3ac0.svg",revision:null},{url:"/img/light.64a4668d.svg",revision:null},{url:"/img/load_dark.583902f6.gif",revision:null},{url:"/img/load_light.fa0c7d16.gif",revision:null},{url:"/img/logout.3e85d292.svg",revision:null},{url:"/img/menu-close-icon.421663a4.svg",revision:null},{url:"/img/menu-icon.59a84447.svg",revision:null},{url:"/img/popup-out.733b7d2b.svg",revision:null},{url:"/img/remove.dedbe003.svg",revision:null},{url:"/img/ss/login-narrow-light.png",revision:"d537401043d2a56b7bdd3ee81b22e54a"},{url:"/img/ss/login-narrow.png",revision:"695c86ab3026feb5d1faf6cf2b808207"},{url:"/img/ss/login-wide.png",revision:"500e07b9d307ce5d8cb00d4ac3a0e29f"},{url:"/img/ss/portal-narrow.png",revision:"08ccdd749cda0f451b3f55d24d24f130"},{url:"/img/ss/portal-wide-light.png",revision:"e979ae09b19ea7e7dbdc41f86e8a96e2"},{url:"/img/ss/portal-wide.png",revision:"9f8c2c8ec0ab558783a75aedc0ded5e0"},{url:"/img/ss/test-narrow-light.png",revision:"8aad57e267176f1fe2844d8355894bdc"},{url:"/img/ss/test-narrow.png",revision:"248235558a2e38cde9cd33f21a9ee72d"},{url:"/img/success-icon.53e866c5.svg",revision:null},{url:"/img/test-icon.d01e01a2.svg",revision:null},{url:"/img/unimplemented-icon.5a21c0ed.svg",revision:null},{url:"/img/warning-icon.5869cd08.svg",revision:null},{url:"/index.html",revision:"b6d2e209b39a0cdb0e7d9606f71f03a4"},{url:"/js/208.28ed78b3.js",revision:null},{url:"/js/29.89b33a66.js",revision:null},{url:"/js/319.083b06d1.js",revision:null},{url:"/js/384.906baff5.js",revision:null},{url:"/js/481.0d19c5dd.js",revision:null},{url:"/js/574.d1df394f.js",revision:null},{url:"/js/578.9cfb2b63.js",revision:null},{url:"/js/623.de34f513.js",revision:null},{url:"/js/75.130c6863.js",revision:null},{url:"/js/766.0fa4049e.js",revision:null},{url:"/js/86.f6fb4ce6.js",revision:null},{url:"/js/app.593a9610.js",revision:null},{url:"/js/chunk-vendors.e2d6d869.js",revision:null},{url:"/manifest.json",revision:"9e0b25e0b080efefea4c0064053ff343"},{url:"/og/hero-img.png",revision:"8a8ea4376c20640fc5cf1c41e1b59fbd"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
