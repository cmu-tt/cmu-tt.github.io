if(!self.define){let i,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=s,document.head.appendChild(i)}else i=n,importScripts(n),s()})).then((()=>{let i=s[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(l,e)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const o=i=>n(i,r),u={module:{uri:r},exports:c,require:o};s[r]=Promise.all(l.map((i=>u[i]||o(i)))).then((i=>(e(...i),c)))}}define(["./workbox-db5fc017"],(function(i){"use strict";i.setCacheNameDetails({prefix:"mvtime"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/css/1.31b0fa46.css",revision:null},{url:"/css/284.e668e7c4.css",revision:null},{url:"/css/29.22821ac8.css",revision:null},{url:"/css/400.84bb0208.css",revision:null},{url:"/css/739.761d8fc9.css",revision:null},{url:"/css/84.0b071797.css",revision:null},{url:"/css/app.cdbaeedd.css",revision:null},{url:"/img/add.6b7bc49a.svg",revision:null},{url:"/img/add.bc78ad35.svg",revision:null},{url:"/img/arrow-left.00e04cc2.svg",revision:null},{url:"/img/arrow-right.becd4aa3.svg",revision:null},{url:"/img/cal-icon-alt.2b775a5c.svg",revision:null},{url:"/img/cal-icon.e18a9802.svg",revision:null},{url:"/img/create.4ae5f24c.svg",revision:null},{url:"/img/error-icon.c5bc41dd.svg",revision:null},{url:"/img/favicon/favicon-128.png",revision:"646d8f3b904f7941dedb546cd6fd99c8"},{url:"/img/favicon/favicon-256.png",revision:"d4605e66aff8199c21f36d79975f1e08"},{url:"/img/favicon/favicon-50.png",revision:"852254a3e938fbdb532581335d7f7846"},{url:"/img/favicon/favicon-64.png",revision:"cc2d23cc2a176e6a679f727fbfcb1bca"},{url:"/img/favicon/favicon.svg",revision:"17220d3a589391ff62f8e5af532f741f"},{url:"/img/general/user-icon.png",revision:"27c4e474ced2e8b9c2bfdb606f1822c6"},{url:"/img/info-locked-icon.0b9144cc.svg",revision:null},{url:"/img/info-unlocked-icon.1ea710d7.svg",revision:null},{url:"/img/info.85ea1ffb.svg",revision:null},{url:"/img/logout.0caa2302.svg",revision:null},{url:"/img/menu-close-icon.4ca319e8.svg",revision:null},{url:"/img/menu-icon.d96775d8.svg",revision:null},{url:"/img/popup-out.733b7d2b.svg",revision:null},{url:"/img/remove.3efba5d3.svg",revision:null},{url:"/img/settings.f35a5efd.svg",revision:null},{url:"/img/success-icon.53e866c5.svg",revision:null},{url:"/img/test-icon.303ca54d.svg",revision:null},{url:"/img/unimplemented-icon.5a21c0ed.svg",revision:null},{url:"/img/warning-icon.5869cd08.svg",revision:null},{url:"/index.html",revision:"6d0a0caf50809b7442afa9a1a5748789"},{url:"/js/1.cf9494c3.js",revision:null},{url:"/js/277.04cafac2.js",revision:null},{url:"/js/284.1ed6ef84.js",revision:null},{url:"/js/29.d3dd9da7.js",revision:null},{url:"/js/364.06a572e1.js",revision:null},{url:"/js/400.38bff73c.js",revision:null},{url:"/js/739.7d423701.js",revision:null},{url:"/js/84.6d7fcd62.js",revision:null},{url:"/js/app.4d845b16.js",revision:null},{url:"/js/chunk-vendors.1219dda2.js",revision:null},{url:"/manifest.json",revision:"c7217bd494964f5f3cab4c043433b240"},{url:"/og/hero-img.png",revision:"8a8ea4376c20640fc5cf1c41e1b59fbd"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
