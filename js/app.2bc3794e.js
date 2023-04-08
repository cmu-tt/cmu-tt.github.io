(function(){var e={952:function(e,t,a){"use strict";a(7658);var o=a(9242),n=a(1020),r=a(3396);const s=["_theme"];function i(e,t,a,o,n,i){const l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("main",{id:"themed_body",class:"parent",_theme:i.theme},[(0,r.Wm)(l)],8,s)}var l=a(8980),c={name:"App",components:{},data(){return{platform:"",isElectron:!1}},computed:{pageTitle(){return document.title},store(){return(0,l.h)()},theme(){return this.store.theme}},mounted(){this.isElectron=navigator.userAgent.toLowerCase().indexOf(" electron/")>-1,this.isElectron&&(this.platform=this.$route.query.platform,!this.platform&&window.location.search&&(this.platform=window.location.search.split("=")[1]),console.log("Electron Platform: "+this.platform))},created(){const e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",t=localStorage.getItem("theme");this.isDarkMode="dark"===t||null===t&&"dark"===e}},u=a(89);const d=(0,u.Z)(c,[["render",i]]);var h=d,m=a(9218),f=a(1708),p=a(7387),g=a.n(p),_=a(5431);(0,_.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const v=(0,n.WB)(),w=(0,o.ri)(h);w.use(m.Z),w.use(v),w.mount("#app"),g()(document.body).on("click",".auth-action",(function(){const e=(0,l.h)();!e.user&&g()(this).hasClass("can-login")?e.login():g()(this).hasClass("can-logout")&&(g()(this).hasClass("doprompt")?new f.GI(["Log Out","Are you sure you want to log out?"],"default",1e4,a(4856),[["removePopup()","Cancel","secondary-action fullborder"],["removePopup()","Confirm","primary-action auth-action can-logout"]]):e.logout())})),g()(document.body).on("click",".gohome",(function(){m.Z.push("/")})),m.Z.afterEach((e=>{e.meta&&e.meta.page_title?document.title="MV Test Tracker | "+e.meta.page_title:document.title="MV Test Tracker";let t=e.meta?.theme_color?.light||"#f5c14b",a=e.meta?.theme_color?.dark||"#f5c14b";g()("meta.theme-color").attr("content",t),g()("meta.theme-color-dark").attr("content",a),(0,f.hC)();const o=document.documentElement.style;o.setProperty("--theme-color",t),o.setProperty("--theme-color-dark",a);let n=e.meta?.theme_color?.text_light||"#000000",r=e.meta?.theme_color?.text_dark||"#ffffff";o.setProperty("--theme-color-text",n),o.setProperty("--theme-color-text-dark",r),o.setProperty("--theme-color-hover",n+"33"),o.setProperty("--theme-color-hover-dark",r+"33")})),window.toast=f.gy,window.$=g(),m.Z.beforeEach((e=>{const t=(0,l.h)();return e.meta&&e.meta.requiresAuth&&t&&!t.user?(new f.FN("Please log in to access this page","default",1500,a(1121)),{path:"/",query:{redirect:e.fullPath}}):e.meta&&e.meta.requiresTeacher&&t.user&&!t.is_teacher?(new f.FN("You must be a teacher to access this page","default",1500,a(1121)),{path:"/portal"}):void 0}))},9218:function(e,t,a){"use strict";a.d(t,{Z:function(){return $}});var o=a(2483),n=a(3396);const r={class:"apphome hidescroll scrolloverflow"},s={class:"base fullheightcontent"};function i(e,t,a,o,i,l){const c=(0,n.up)("BaseNav"),u=(0,n.up)("router-view"),d=(0,n.up)("BaseFooter");return(0,n.wg)(),(0,n.iD)("main",r,[(0,n._)("main",s,[(0,n.Wm)(c),(0,n.Wm)(u,{class:"inner-base"})]),(0,n.Wm)(d)])}var l=a(7139);const c=e=>((0,n.dD)("data-v-2159cd36"),e=e(),(0,n.Cn)(),e),u=c((()=>(0,n._)("h1",{class:"gohome hideoverflow"},"MV Test Tracker",-1))),d=c((()=>(0,n._)("span",{class:"flex-spacer"},null,-1))),h={class:"base-pages-nav"},m=c((()=>(0,n._)("span",{class:"flex-spacer"},null,-1))),f={id:"nav-auth-btn",class:"small-action-btn auth-action can-logout can-login click-action"};function p(e,t,a,o,r,s){const i=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("header",null,[u,d,r.mobile&&!r.mobile_menu_open?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"nav-mobile-btn",onClick:t[0]||(t[0]=e=>r.mobile_menu_open=!r.mobile_menu_open)})):(0,n.kq)("",!0),!r.mobile||r.mobile_menu_open?((0,n.wg)(),(0,n.iD)("div",{key:1,class:(0,l.C_)(["nav-actions",{mobile:r.mobile}])},[r.mobile?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"nav-mobile-btn alt-btn",onClick:t[1]||(t[1]=e=>r.mobile_menu_open=!r.mobile_menu_open)})):(0,n.kq)("",!0),(0,n._)("nav",h,[(0,n.Wm)(i,{class:"click-action-inline",to:"/",onClick:s.closeMenu},{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1},8,["onClick"]),(0,n.Wm)(i,{class:"click-action-inline",to:"/about",onClick:s.closeMenu},{default:(0,n.w5)((()=>[(0,n.Uk)("About")])),_:1},8,["onClick"]),(0,n.Wm)(i,{class:"click-action-inline",to:"/contact",onClick:s.closeMenu},{default:(0,n.w5)((()=>[(0,n.Uk)("Contact")])),_:1},8,["onClick"])]),m,(0,n._)("button",f," Log "+(0,l.zw)(s.logged_in?"Out":"In"),1)],2)):(0,n.kq)("",!0)])}var g=a(8980),_={name:"BaseNav",data(){return{mobile_menu_open:!1,mobile:window.innerWidth<=800}},methods:{resize(){this.mobile=window.innerWidth<=800,this.mobile||this.closeMenu()},closeMenu(){this.mobile_menu_open=!1}},mounted(){window.addEventListener("resize",this.resize)},unmounted(){window.removeEventListener("resize",this.resize)},computed:{store(){return(0,g.h)()},logged_in(){return!!this.store.user}}},v=a(89);const w=(0,v.Z)(_,[["render",p],["__scopeId","data-v-2159cd36"]]);var b=w;const k=e=>((0,n.dD)("data-v-94e483ee"),e=e(),(0,n.Cn)(),e),y=k((()=>(0,n._)("p",null,[(0,n._)("span",null,"© 2022-2023 MVHS Test Tracker. "),(0,n._)("span",null,[(0,n.Uk)("Website by "),(0,n._)("a",{href:"https://svonk.me/"},"Sander Vonk")])],-1))),C=[y];function A(e,t,a,o,r,s){return(0,n.wg)(),(0,n.iD)("footer",null,C)}var T={name:"BaseFooter"};const O=(0,v.Z)(T,[["render",A],["__scopeId","data-v-94e483ee"]]);var P=O,q={name:"AppHome",components:{BaseNav:b,BaseFooter:P}};const N=(0,v.Z)(q,[["render",i]]);var E=N;const S=e=>((0,n.dD)("data-v-22159f4a"),e=e(),(0,n.Cn)(),e),F={class:"not-found"},Z=S((()=>(0,n._)("h1",null,"404",-1))),x=S((()=>(0,n._)("h2",{class:"hideoverflow"},"Page Not Found",-1))),D=S((()=>(0,n._)("hr",{class:"err-break"},null,-1))),M=S((()=>(0,n._)("span",null," | ",-1))),U={key:1,class:"nostyle"},L=S((()=>(0,n._)("span",null," | ",-1))),j=S((()=>(0,n._)("div",{class:"err-pad-bottom"},null,-1)));function I(e,t,a,o,r,s){const i=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",F,[Z,x,D,(0,n._)("nav",null,[(0,n.Wm)(i,{class:"router-link click-action-inline",to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1}),M,s.logged_in?((0,n.wg)(),(0,n.j4)(i,{key:0,class:"router-link click-action-inline",to:"/portal"},{default:(0,n.w5)((()=>[(0,n.Uk)("Portal")])),_:1})):((0,n.wg)(),(0,n.iD)("span",U,[(0,n.Wm)(i,{class:"router-link click-action-inline",to:"/about"},{default:(0,n.w5)((()=>[(0,n.Uk)("About")])),_:1}),L,(0,n.Wm)(i,{class:"router-link click-action-inline",to:"/contact"},{default:(0,n.w5)((()=>[(0,n.Uk)("Contact")])),_:1})]))]),j])}var J={name:"NotFound",computed:{store(){return(0,g.h)()},logged_in(){return this.store.user}}};const W=(0,v.Z)(J,[["render",I],["__scopeId","data-v-22159f4a"]]);var B=W;const R=(0,o.p7)({history:(0,o.PO)("/"),routes:[{path:"/",name:"home",component:E,meta:{page_title:"Home",theme_color:{light:"#ffffff",dark:"#16130e"},requiresAuth:!1},children:[{path:"",name:"home",component:()=>a.e(400).then(a.bind(a,400)),meta:{page_title:"Home",theme_color:{light:"#ffffff",dark:"#16130e"},requiresAuth:!1}},{path:"about",name:"about",component:()=>a.e(29).then(a.bind(a,4029)),meta:{page_title:"About",theme_color:{light:"#ffffff",dark:"#16130e"},requiresAuth:!1}},{path:"download",name:"download",component:()=>a.e(208).then(a.bind(a,208)),meta:{page_title:"Download [BETA]",theme_color:{light:"#ffffff",dark:"#16130e"},requiresAuth:!1}},{path:"/:pathMatch(.*)*",name:"404",component:B,meta:{page_title:"404",theme_color:{light:"#ffffff",dark:"#16130e"}}}]},{path:"/portal",name:"portal",component:()=>a.e(820).then(a.bind(a,6820)),meta:{page_title:"Portal",theme_color:{light:"#ffffff",dark:"#121212"},requiresAuth:!0},children:[{path:"/portal/onboarding",name:"onboarding",component:()=>a.e(277).then(a.bind(a,4277)),meta:{page_title:"Onboarding",theme_color:{light:"#ffffff",dark:"#121212"},requiresAuth:!0}},{path:"/portal/add",name:"addclass",component:()=>a.e(364).then(a.bind(a,7364)),meta:{page_title:"Join a Class",theme_color:{light:"#ffffff",dark:"#121212"},requiresAuth:!0}},{path:"/portal/create",name:"createclass",component:()=>a.e(663).then(a.bind(a,3663)),meta:{page_title:"Teacher | Create Class",theme_color:{light:"#ffffff",dark:"#121212"},requiresAuth:!0,requiresTeacher:!0}},{path:"/portal/new/:tasktype",name:"newtask",component:()=>a.e(447).then(a.bind(a,5447)),meta:{page_title:"Teacher | Add Task",theme_color:{light:"#ffffff",dark:"#121212"},requiresAuth:!0,requiresTeacher:!0}},{path:"/portal/task",name:"task",component:()=>a.e(517).then(a.bind(a,517)),meta:{page_title:"View Test",theme_color:{light:"#ffffff",dark:"#121212"},requiresAuth:!1,props:e=>({task:e.query.task})}}]},{path:"/app",redirect:"/portal",meta:{requiresAuth:!0}}],parseQuery:e=>a(5410).parse(e)});var $=R},8980:function(e,t,a){"use strict";a.d(t,{h:function(){return g}});a(7658);var o=a(1020),n=a(1708),r=a(36),s=a(7795),i=a(7851),l=a(4466);const c={apiKey:"AIzaSyDGqqhApln4pxm4EynPCSkfwyK8aopjfCk",authDomain:"mvtrack.firebaseapp.com",projectId:"mvtrack",storageBucket:"mvtrack.appspot.com",messagingSenderId:"1070634963357",appId:"1:1070634963357:web:2a4abc725fff24a5199f74",measurementId:"G-6LNX1KCR8E"},u=(0,s.ZF)(c),d=(0,i.v0)(u),h=(0,r.ad)(u);(0,l.IH)(u);d.onAuthStateChanged((e=>{const t=g();e?(t.set_user(e),(0,r.cf)((0,r.JU)(h,"users",e.uid),{includeMetadataChanges:!0},(e=>{e.metadata.hasPendingWrites?console.warn("local data updated"):(console.warn("remote data updated"),e.exists()?(t.doc=e.data(),t.get_classes()):t.create_doc())}))):t.clear()}));var m=a(9218);const f=new i.hJ;function p(e){return"mvla.net"==e.split("@")[1]}f.addScope("email"),f.addScope("profile"),d.useDeviceLanguage(),f.setCustomParameters({login_hint:"username@mvla.net",hd:"mvla.net"});const g=(0,o.Q_)({id:"main",state:()=>({user:null,doc:null,classes:[],loaded_email:null,loaded_classes:null,teacher:{doc_ref:null,collection_ref:null}}),getters:{theme(){let e=localStorage.getItem("theme"),t=this.doc?.theme,a=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";return t?(e!=t&&localStorage.setItem("theme",t),t):(e?a=e:localStorage.setItem("theme",a),this.doc&&(this.doc.theme=a,this.update_remote()),e||"light")},userdoc_ref(){return this.user?(0,r.JU)(h,"users",this.user.uid):null},get_tasks(){let e=[],t=this.classes;if(!t?.length)return[];for(let a=0;a<t.length;a++){let o=t[a].tests;o=o||[];for(let n=0;n<o.length;n++){if(t[a].name=t[a].name?t[a].name:"Unnamed Class","string"==typeof o[n].date){let[e,t,a]=o[n].date.split("-");o[n].date=`${t}-${a}-${e}`,o[n].date=new Date(o[n].date),o[n].date=isNaN(o[n].date)?null:o[n].date}o[n].color=t[a].color,e.push({...o[n],class_name:t[a].name})}}return e},is_teacher(){if(!this.user)return!1;if(window?.MVTT_teacher_mode||localStorage&&localStorage.MVTT_teacher_mode)return console.warn("Teacher mode enabled (localStorage or window MVTT_teacher_mode value is true)\nFOR TESTING ONLY, does not enable nessesary server permission"),!0;if(this.doc&&this.doc.teacher_mode)return!0;let e=this.user.email,[t,a]=e.split("@");return"mvla.net"==a&&!/\d/.test(t)}},actions:{async toggle_theme(){this.doc.theme="light"==this.theme?"dark":"light",await this.update_remote(),new n.bF(`Switched to ${this.doc.theme} theme`,2e3)},async get_classes(){if(this.doc.classes){let e=[...new Set(this.doc.classes)];e.length!=this.doc.classes.length&&(this.doc.classes=e,await this.update_remote(),new n.OO("Removed duplicate classes",2e3))}if(!this.doc)return[];let e=[];for(let t of this.doc.classes){let[a,o]=t.split("/");if(!a||!o){await this.remove_invalid(t);continue}let n=(0,r.JU)(h,"classes",a),s=await(0,r.QT)(n);if(!s.exists()){await this.remove_invalid(t);continue}let i=(0,r.hJ)(n,"classes");if(!i){await this.remove_invalid(t);continue}let l=(0,r.JU)(i,o),c=await(0,r.QT)(l);if(!c.exists()){await this.remove_invalid(t);continue}let u=c.data();u.id=t,e.push(u)}this.classes=e},async remove_invalid(e){this.doc.classes=this.doc.classes.filter((t=>t!=e)),await this.update_remote(),new n.OO("Removed non-existent class with id "+e,2e3)},async remove_class(e){this.doc.classes=this.doc.classes.filter((t=>t!=e)),await this.update_remote(),console.warn("Removed class from user's doc: "+e),new n.bF("Removed class",2e3)},set_user(e){if(!e.email||!p(e.email))return d.signOut(),new n.OO("Please use your MVLA email to log in",2e3),void this.clear();this.user=e,this.is_teacher&&(console.warn("teacher mode"),this.teacher.doc_ref=(0,r.JU)(h,"classes",this.user.email),this.teacher.collection_ref=(0,r.hJ)(this.teacher.doc_ref,"classes")),m.Z.currentRoute?.value?.query?.redirect&&m.Z.push(m.Z.currentRoute?.value?.query?.redirect)},clear(){this.user=null,this.doc=null,this.classes=[],this.loaded_email=null,this.loaded_classes=null,this.teacher={doc_ref:null,collection_ref:null},m.Z.currentRoute?.value?.meta?.requiresAuth&&m.Z.push("/")},async login(){new n.FN("Opening login popup...","default",1e3,a(1121));let e=navigator?.userAgent?.toLowerCase()?.indexOf(" electron/")>-1;await(e?(0,i.F6)(d,f):(0,i.rh)(d,f)).then((()=>{this.user&&this.user.email&&p(this.user.email)&&(new n.FN("Logged in as "+this.user.displayName+"!","default",2e3,a(8311)),m.Z.currentRoute.value&&m.Z.currentRoute.value.query&&m.Z.currentRoute.value.query.redirect||m.Z.push("/portal"))})).catch((e=>{"auth/cancelled-popup-request"==e.code||"auth/popup-closed-by-user"==e.code?new n.OO((0,n.YY)(e),2e3):new n.PK("Couldn't log in",(0,n.YY)(e),2e3)}))},logout(){d.signOut(),new n.FN("Logged Out","default",1500,a(1121))},async get_remote(){let e=await(0,r.QT)(this.userdoc_ref);e.exists()?this.doc=e.data():(await this.create_doc(),await this.get_remote())},async create_doc(){new n.OO("User document doesn't exist, creating new one...",2e3),this.doc={name:this.user.displayName,email:this.user.email,classes:[]},this.is_teacher?(await this.create_teacher_doc(),new n.bF("Created user & teacher documents; Let's get started",2e3)):(await this.update_remote(),new n.bF("Created user document; Let's get started",2e3),m.Z.push("/portal/onboarding"))},async create_teacher_doc(){let e=(0,r.JU)(h,"classes",this.user.email);await(0,r.pl)(e,{name:this.user.displayName,email:this.user.email}),this.teacher={doc_ref:e,collection_ref:(0,r.hJ)(e,"classes")},m.Z.push("/portal/create")},async update_remote(){await(0,r.pl)(this.userdoc_ref,this.doc,{merge:!0})},async get_classes_by_email(e){if(this.loaded_email=null,!e||!p(e))return this.loaded_classes=null,void(this.loaded_email=e);let t=await(0,r.QT)((0,r.JU)(h,"classes",e));if(t.exists()){let t=[],a=(0,r.hJ)((0,r.JU)(h,"classes",e),"classes"),o=await(0,r.PL)((0,r.IO)(a));o.forEach((a=>{let o=a.data();o.id=a.id,this.doc.classes.includes([e,a.id].join("/"))&&(o.name="[JOINED] "+(o.period?"P"+o.period+" - ":"")+o.name,o.is_joined=!0),t.push(o)})),this.loaded_classes=t}else this.loaded_classes=null;this.loaded_email=e},async add_class(e,t,a,o){this.doc&&t&&(this.doc.classes.includes(t)||(this.doc.classes.push([e,t].join("/")),await this.update_remote(),new n.bF(`Added "P${o} - ${a}" to your classes`,2e3),m.Z.push("/portal")))},async create_class(e){if(console.warn("create_class",e),this.is_teacher){if(e.name&&e.period)try{if(!this.teacher.doc_ref||!this.teacher.collection_ref)return await this.create_teacher_doc(),void await this.create_class(e);let t=await(0,r.ET)(this.teacher.collection_ref,e);new n.bF(`Created class "${e.name}"`,2e3),console.log("class_doc_ref",t),await this.add_class(this.user.email,t.id,e.name,e.period)}catch(t){console.error(t),new n.PK("Couldn't create class",(0,n.YY)(t),2e3)}}else new n.PK("You need to be a teacher to create a class",2e3)},async add_task(e,t){if(!e.name)return void new n.PK("Please enter a test name",2e3);if(!t||0==t.length)return void new n.PK("Please select at least one class",2e3);let a=(0,r.qs)(h),o=(0,r.hJ)(h,"classes"),s=(0,r.JU)(o,this.user.email),i=(0,r.hJ)(s,"classes");t.forEach((t=>{t=t.split("/")[t.split("/").length-1];let o=(0,r.JU)(i,t);a.update(o,{tests:(0,r.vr)(e)})})),await a.commit(),await this.get_classes(),new n.bF(`Added test "${e.name}" to ${t.length} class${1==t.length?"":"es"}`,2e3),m.Z.push("/portal")}}})},4654:function(){}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,r){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],r=e[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](o[l])}))?o.splice(l--,1):(i=!1,r<s&&(s=r));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,n,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,o){return a.f[o](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{29:"d3dd9da7",208:"e4d55caa",277:"04cafac2",364:"06a572e1",400:"38bff73c",447:"ed3bcb33",517:"1455ddf7",663:"26bcef7f",820:"5072eb36"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+e+"."+{29:"22821ac8",208:"85e27b48",400:"84bb0208",447:"9433fef5",517:"a6c8e7fd",663:"380250fb",820:"6da4e5c5"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="mvtime:";a.l=function(o,n,r,s){if(e[o])e[o].push(n);else{var i,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+r),i.src=o),e[o]=[n];var h=function(t,a){i.onerror=i.onload=null,clearTimeout(m);var n=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(a)})),t)return t(a)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,a,o,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=function(a){if(r.onerror=r.onload=null,"load"===a.type)o();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,r.parentNode.removeChild(r),n(l)}};return r.onerror=r.onload=s,r.href=t,a?a.parentNode.insertBefore(r,a.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var n=a[o],r=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(r===e||r===t))return n}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){n=s[o],r=n.getAttribute("data-href");if(r===e||r===t)return n}},o=function(o){return new Promise((function(n,r){var s=a.miniCssF(o),i=a.p+s;if(t(s,i))return n();e(o,i,null,n,r)}))},n={143:0};a.f.miniCss=function(e,t){var a={29:1,208:1,400:1,447:1,517:1,663:1,820:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=o(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}}(),function(){var e={143:0};a.f.j=function(t,o){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var r=new Promise((function(a,o){n=e[t]=[a,o]}));o.push(n[2]=r);var s=a.p+a.u(t),i=new Error,l=function(o){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var r=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",i.name="ChunkLoadError",i.type=r,i.request=s,n[1](i)}};a.l(s,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,r,s=o[0],i=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var u=l(a)}for(t&&t(o);c<s.length;c++)r=s[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},o=self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(952)}));o=a.O(o)})();
//# sourceMappingURL=app.2bc3794e.js.map