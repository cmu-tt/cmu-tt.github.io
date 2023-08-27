(function(){var e={2745:function(e,t,a){"use strict";function o(e){const t=e.match(/^([\P{L}\p{Extended_Pictographic}]|(?:[\uD800-\uDBFF][\uDC00-\uDFFF]))/u);return t?t[0]:null}function n(){if(0==arguments.length)return;let e=Array.from(arguments),t=["%cMVTT","background:#272727;color:#C9B092;padding:7px 12px;font-family:Lato,sans-serif;font-weight:bold;font-size:1.3em"];null!=o(e[0])&&(t[0]+=" %c"+o(e[0]),t[2]="background:#C9B092aa;background:#ffffffaa;color:#272727;padding:3px 5px;margin-left:5px;border-radius:5px;font-family:monospace !important;font-weight:bold;font-size:1.25em",e[0]=e[0].substring(2).trimStart());try{console.info(...t,...e)}catch(a){console.log(...t,...e)}}a.d(t,{E:function(){return n}})},7930:function(e,t,a){"use strict";a(7658);var o=a(9242),n=a(3396),i=a(1020);const s=["_theme"];function r(e,t,a,o,i,r){const c=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("main",{id:"themed_body",class:"parent",_theme:r.theme,onClick:t[0]||(t[0]=(...e)=>r.refreshTimeout&&r.refreshTimeout(...e)),onKeydown:t[1]||(t[1]=(...e)=>r.refreshTimeout&&r.refreshTimeout(...e)),onFocus:t[2]||(t[2]=(...e)=>r.refreshTimeout&&r.refreshTimeout(...e))},[(0,n.Wm)(c)],40,s)}var c=a(8980),l={name:"App",data(){return{platform:"",isElectron:!1}},computed:{pageTitle(){return document.title},store(){return(0,c.h)()},theme(){return this.store.get_theme}},mounted(){this.isElectron=navigator.userAgent.toLowerCase().indexOf(" electron/")>-1,this.isElectron&&(this.platform=this.$route.query.platform,!this.platform&&window.location.search&&(this.platform=window.location.search.split("=")[1]),console.log("Electron Platform: "+this.platform))},created(){const e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",t=window.localStorage.getItem("theme");this.isDarkMode="dark"===t||null===t&&"dark"===e},methods:{refreshTimeout(){this.store&&this.store.refresh_timeout()}}},u=a(89);const d=(0,u.Z)(l,[["render",r]]);var h=d,m=a(262),f=a(1708),_=a(2745),p=a(7387),g=a.n(p),v=a(5431);(0,v.z)("/service-worker.js",{ready(){(0,_.E)("🛠 App is being served from cache by a service worker. For more details, visit https://goo.gl/AFskqB")},registered(){(0,_.E)("🛠 Service worker has been registered.")},cached(){(0,_.E)("🛠 Content has been cached for offline use.")},updatefound(){(0,_.E)("🛠 New content is downloading.")},updated(){(0,_.E)("🛠 New content is available; please refresh."),window.localStorage.clear(),window.location.reload(!0)},offline(){(0,_.E)("🛠 No internet connection found. App is running in offline mode.")},error(e){(0,_.E)("🛑 Error during service worker registration:",e)}});var w=a(6112);const k=(0,i.WB)(),y=(0,o.ri)(h);y.use(m.Z),y.use(k),y.use(w.Z,{preLoad:2,attempt:1}),y.mount("#app"),(0,n.YP)(k.state,(e=>{window.localStorage.setItem("MVTT_app_state",JSON.stringify(e.main))}),{deep:!0}),window.addEventListener("storage",(e=>{"MVTT_teacher_mode"===e.key&&((0,_.E)("🏫 Detected teacher mode change, reloading"),window.location.reload())})),g()(document.body).on("click",".auth-action",(function(){const e=(0,c.h)();!e.user&&g()(this).hasClass("can-login")?e.login():g()(this).hasClass("can-logout")&&(g()(this).hasClass("doprompt")?new f.GI(["Log Out","Are you sure you want to log out?"],"default",1e4,a(4856),[["removePopup()","Cancel","secondary-action fullborder"],["removePopup()","Confirm","primary-action auth-action can-logout"]]):e.logout())})),g()(document.body).on("click",".gohome",(function(){m.Z.push("/")})),m.Z.afterEach((e=>{e.meta&&e.meta.page_title?document.title="MV Test Tracker | "+e.meta.page_title:document.title="MV Test Tracker";let t=e.meta?.theme_color?.light||"#f5c14b",a=e.meta?.theme_color?.dark||"#f5c14b";g()("meta.theme-color").attr("content",t),g()("meta.theme-color-dark").attr("content",a),(0,f.hC)();const o=document.documentElement.style;o.setProperty("--theme-color",t),o.setProperty("--theme-color-dark",a);let n=e.meta?.theme_color?.text_light||"#000000",i=e.meta?.theme_color?.text_dark||"#ffffff";o.setProperty("--theme-color-text",n),o.setProperty("--theme-color-text-dark",i),o.setProperty("--theme-color-hover",n+"33"),o.setProperty("--theme-color-hover-dark",i+"33")})),window.toast=f.gy,window.$=g(),m.Z.beforeEach((e=>{const t=(0,c.h)();return e.meta&&e.meta.requiresAuth&&t&&!t.user?(new f.FN("Please log in or join to access this page","default",1500,a(1121)),{path:"/",query:{redirect:e.fullPath}}):e.meta&&e.meta.requiresTeacher&&t.user&&!t.is_teacher?(new f.FN("You must be a teacher to access this page","default",1500,a(1121)),{path:"/portal"}):void 0})),window.toggle_teacher_mode=function(){"true"===window.localStorage.getItem("MVTT_teacher_mode")?window.localStorage.setItem("MVTT_teacher_mode","false"):window.localStorage.setItem("MVTT_teacher_mode","true"),window.location.reload()}},262:function(e,t,a){"use strict";a.d(t,{Z:function(){return Q}});var o=a(2483),n=a(3396);const i={class:"apphome hidescroll scrolloverflow"},s={class:"base fullheightcontent"};function r(e,t,a,o,r,c){const l=(0,n.up)("BaseNav"),u=(0,n.up)("router-view"),d=(0,n.up)("BaseFooter");return(0,n.wg)(),(0,n.iD)("main",i,[(0,n._)("main",s,[(0,n.Wm)(l),(0,n.Wm)(u,{class:"inner-base"})]),(0,n.Wm)(d)])}var c=a(7139);const l=e=>((0,n.dD)("data-v-254f2d7d"),e=e(),(0,n.Cn)(),e),u=l((()=>(0,n._)("h1",{class:"gohome hideoverflow"},"MV Test Tracker",-1))),d=["_theme"],h=l((()=>(0,n._)("div",{class:"theme_icon"},null,-1))),m=l((()=>(0,n._)("div",{class:"toggle_text"},"Switch Theme",-1))),f=[h,m],_=l((()=>(0,n._)("span",{class:"flex_spacer"},null,-1))),p={class:"base-pages-nav"},g=l((()=>(0,n._)("span",{class:"flex_spacer"},null,-1)));function v(e,t,a,o,i,s){const r=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("header",null,[u,(0,n._)("button",{_theme:s.store.get_theme,class:"theme_button",title:"Switch Theme",onClick:t[0]||(t[0]=(...e)=>s.store.toggle_theme&&s.store.toggle_theme(...e))},f,8,d),_,i.mobile&&!i.mobile_menu_open?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"nav-mobile-btn",onClick:t[1]||(t[1]=e=>i.mobile_menu_open=!i.mobile_menu_open)})):(0,n.kq)("",!0),!i.mobile||i.mobile_menu_open?((0,n.wg)(),(0,n.iD)("div",{key:1,class:(0,c.C_)(["nav-actions",{mobile:i.mobile}])},[i.mobile?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"nav-mobile-btn alt-btn",onClick:t[2]||(t[2]=e=>i.mobile_menu_open=!i.mobile_menu_open)})):(0,n.kq)("",!0),(0,n._)("nav",p,[(0,n.Wm)(r,{class:"click-action-inline",to:"/",onClick:s.closeMenu},{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1},8,["onClick"]),(0,n.Wm)(r,{class:"click-action-inline",to:"/about",onClick:s.closeMenu},{default:(0,n.w5)((()=>[(0,n.Uk)("About")])),_:1},8,["onClick"]),(0,n.Wm)(r,{class:"click-action-inline",to:"/contact",onClick:s.closeMenu},{default:(0,n.w5)((()=>[(0,n.Uk)("Contact")])),_:1},8,["onClick"])]),g,(0,n._)("button",{id:"nav-auth-btn",class:(0,c.C_)(["small-action-btn auth-action can-logout can-login click-action",{linked:s.store.personal_account&&s.store.user}])}," Log "+(0,c.zw)(s.logged_in?"Out":"In"),3)],2)):(0,n.kq)("",!0)])}var w=a(8980),k={name:"BaseNav",data(){return{mobile_menu_open:!1,mobile:window.innerWidth<=800}},methods:{resize(){this.mobile=window.innerWidth<=800,this.mobile||this.closeMenu()},closeMenu(){this.mobile_menu_open=!1}},mounted(){window.addEventListener("resize",this.resize)},unmounted(){window.removeEventListener("resize",this.resize)},computed:{store(){return(0,w.h)()},logged_in(){return!!this.store.user}}},y=a(89);const b=(0,y.Z)(k,[["render",v],["__scopeId","data-v-254f2d7d"]]);var T=b;const P=e=>((0,n.dD)("data-v-94e483ee"),e=e(),(0,n.Cn)(),e),E=P((()=>(0,n._)("p",null,[(0,n._)("span",null,"© 2022-2023 MVHS Test Tracker. "),(0,n._)("span",null,[(0,n.Uk)("Website by "),(0,n._)("a",{href:"https://svonk.me/"},"Sander Vonk")])],-1))),C=[E];function S(e,t,a,o,i,s){return(0,n.wg)(),(0,n.iD)("footer",null,C)}var O={name:"BaseFooter"};const A=(0,y.Z)(O,[["render",S],["__scopeId","data-v-94e483ee"]]);var j=A,x={name:"AppHome",components:{BaseNav:T,BaseFooter:j}};const q=(0,y.Z)(x,[["render",r]]);var N=q;const F=e=>((0,n.dD)("data-v-f34b6ee6"),e=e(),(0,n.Cn)(),e),I={class:"not-found"},M=F((()=>(0,n._)("h1",{class:"title_text err_text"},"404",-1))),D=F((()=>(0,n._)("h2",{class:"header_style err_text hideoverflow"},"Page Not Found",-1))),L=F((()=>(0,n._)("hr",{class:"err-break"},null,-1))),U=F((()=>(0,n._)("span",null," | ",-1))),J={key:1,class:"nostyle"},$=F((()=>(0,n._)("span",null," | ",-1))),Z=F((()=>(0,n._)("div",{class:"err-pad-bottom"},null,-1)));function R(e,t,a,o,i,s){const r=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",I,[M,D,L,(0,n._)("nav",null,[(0,n.Wm)(r,{class:"router-link click-action-inline",to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1}),U,s.logged_in?((0,n.wg)(),(0,n.j4)(r,{key:0,class:"router-link click-action-inline",to:"/portal"},{default:(0,n.w5)((()=>[(0,n.Uk)("Portal")])),_:1})):((0,n.wg)(),(0,n.iD)("span",J,[(0,n.Wm)(r,{class:"router-link click-action-inline",to:"/about"},{default:(0,n.w5)((()=>[(0,n.Uk)("About")])),_:1}),$,(0,n.Wm)(r,{class:"router-link click-action-inline",to:"/contact"},{default:(0,n.w5)((()=>[(0,n.Uk)("Contact")])),_:1})]))]),Z])}var V={name:"NotFound",computed:{store(){return(0,w.h)()},logged_in(){return this.store.user}}};const B=(0,y.Z)(V,[["render",R],["__scopeId","data-v-f34b6ee6"]]);var W=B;const K=(0,o.p7)({history:(0,o.PO)("/"),routes:[{path:"/",name:"home",component:N,meta:{page_title:"Home",theme_color:{light:"#ffffff",dark:"#16130e"},requiresAuth:!1},children:[{path:"",name:"home",component:()=>a.e(454).then(a.bind(a,454)),meta:{page_title:"Home",theme_color:{light:"#ffffff",dark:"#16130e"},requiresAuth:!1},children:[{path:"to/:path?",name:"redirect",component:()=>Promise.all([a.e(529),a.e(948)]).then(a.bind(a,9948)),meta:{page_title:"Redirecting...",theme_color:{light:"#ffffff",dark:"#16130e"},requiresAuth:!1}},{path:"join",name:"join",component:()=>a.e(758).then(a.bind(a,6758)),meta:{page_title:"Join the MVTT Beta",theme_color:{light:"#ffffff",dark:"#16130e"},requiresAuth:!1,block_close:!0,close_path:"/",blockStandardRedirect:!0}},{path:"link/:code?",name:"link",component:()=>Promise.all([a.e(529),a.e(86)]).then(a.bind(a,7086)),props:!0,meta:{page_title:"Link Personal Account",theme_color:{light:"#ffffff",dark:"#16130e"},close_path:"/",blockStandardRedirect:!0}}]},{path:"about",name:"about",component:()=>a.e(371).then(a.bind(a,7371)),meta:{page_title:"About",theme_color:{light:"#ffffff",dark:"#16130e"},requiresAuth:!1}},{path:"legal/privacy",name:"privacy",component:()=>a.e(524).then(a.bind(a,9524)),meta:{page_title:"Legal - Privacy Policy",theme_color:{light:"#ffffff",dark:"#16130e"},requiresAuth:!1}},{path:"legal/tos",name:"tos",component:()=>a.e(12).then(a.bind(a,6012)),meta:{page_title:"Legal - Terms of Service",theme_color:{light:"#ffffff",dark:"#16130e"},requiresAuth:!1}},{path:"download",name:"download",component:()=>a.e(504).then(a.bind(a,6504)),meta:{page_title:"Download [BETA]",theme_color:{light:"#ffffff",dark:"#16130e"},requiresAuth:!1}},{path:"roadmap",name:"roadmap",component:()=>a.e(676).then(a.bind(a,2676)),meta:{page_title:"Development Roadmap",theme_color:{light:"#ffffff",dark:"#16130e"},requiresAuth:!1}},{path:"contact",name:"contact",component:()=>a.e(481).then(a.bind(a,3245)),meta:{page_title:"Contact",theme_color:{light:"#ffffff",dark:"#16130e"},requiresAuth:!1}},{path:"/:pathMatch(.*)*",name:"404",component:W,meta:{page_title:"404",theme_color:{light:"#ffffff",dark:"#16130e"}}}]},{path:"/portal",name:"portal",component:()=>a.e(176).then(a.bind(a,5176)),meta:{page_title:"Portal",theme_color:{light:"#ffffff",dark:"#121212"},requiresAuth:!0},children:[{path:"/survey/daily",name:"daily",component:()=>Promise.all([a.e(529),a.e(923)]).then(a.bind(a,923)),meta:{page_title:"Daily Check-In",theme_color:{light:"#ffffff",dark:"#121212"},requiresAuth:!0,block_close:!0,blockStandardRedirect:!0,noSurvey:!0}},{path:"/settings",name:"settings",component:()=>a.e(503).then(a.bind(a,8503)),meta:{page_title:"Settings",theme_color:{light:"#ffffff",dark:"#121212"},requiresAuth:!0,noSurvey:!0}},{path:"/portal/onboarding",name:"onboarding",component:()=>a.e(7).then(a.bind(a,7)),meta:{page_title:"Onboarding",theme_color:{light:"#ffffff",dark:"#121212"},requiresAuth:!0,block_close:!0,noSurvey:!0}},{path:"/portal/add",name:"addclass",component:()=>a.e(750).then(a.bind(a,9750)),meta:{page_title:"Join a Class",theme_color:{light:"#ffffff",dark:"#121212"},requiresAuth:!0}},{path:"/portal/create",name:"createclass",component:()=>a.e(478).then(a.bind(a,2478)),meta:{page_title:"Teacher | Create Class",theme_color:{light:"#ffffff",dark:"#121212"},requiresAuth:!0,requiresTeacher:!0}},{path:"/portal/new/:tasktype",name:"newtask",component:()=>a.e(40).then(a.bind(a,2040)),meta:{page_title:"Teacher | Add Task",theme_color:{light:"#ffffff",dark:"#121212"},requiresAuth:!0,requiresTeacher:!0}},{path:"/portal/view/:ref?",name:"viewtask",component:()=>Promise.all([a.e(529),a.e(747)]).then(a.bind(a,8747)),meta:{page_title:"View Task",theme_color:{light:"#ffffff",dark:"#121212"},requiresAuth:!1,props:e=>({ref:e.params.ref})}},{path:"/portal/edit/:ref?",name:"edit",component:()=>Promise.all([a.e(529),a.e(414)]).then(a.bind(a,414)),meta:{page_title:"Edit Task",theme_color:{light:"#ffffff",dark:"#121212"},requiresAuth:!1,props:e=>({ref:e.params.ref})}}]},{path:"/app",redirect:"/portal",meta:{requiresAuth:!0}}],parseQuery:e=>a(5410).parse(e)});var Q=K},8980:function(e,t,a){"use strict";a.d(t,{h:function(){return j}});a(7658);var o=a(1020),n=a(2745),i=a(1708),s=a(4287),r=a(7795),c=a(6665),l=a(6781),u=a(262);const d={apiKey:"AIzaSyDGqqhApln4pxm4EynPCSkfwyK8aopjfCk",authDomain:"auth.mvtt.app",projectId:"mvtrack",storageBucket:"mvtrack.appspot.com",messagingSenderId:"1070634963357",appId:"1:1070634963357:web:2a4abc725fff24a5199f74",measurementId:"G-6LNX1KCR8E"},h=(0,r.ZF)(d),m=(0,c.v0)(h),f=(0,s.ad)(h);(0,l.IH)(h);let _;m.onAuthStateChanged((e=>{v(e)}));let p,g=!1;function v(e){const t=j();if(e){if(t.set_user(e),k(),!t.user)return;w(e.uid),p=b()}else t.clear()}function w(e){const t=j();_=(0,s.cf)((0,s.JU)(f,"users",e),{includeMetadataChanges:!0},(e=>{if(e.metadata.hasPendingWrites)return void(0,n.E)("⬥ Got snapshot from local changes");if((0,n.E)("⏷ Got snapshot from remote"),!e.exists())return void t.create_doc();let a=e.data();t.user&&t.user?.uid==a.id?t.account_doc=a:t.linked_account_doc=a,t.fetch_classes()}),(e=>{(0,n.E)("⚠ Error getting snapshot from remote",e)})),g=!0}function k(){clearTimeout(p),_&&(_(),(0,n.E)("⬥ Unsubscribed from remote changes"));let e=j();e.show_timeout(),g=!1}function y(e){const t=Math.floor(e/1e3/60),a=Math.floor(e/1e3%60);return(t||!a?`${t} minute${1!=t?"s":""}`:"")+(a?`${a} second${1!=a?"s":""}`:"")}function b(e=3e5){return setTimeout((()=>{(0,n.E)(`⬥ Page unused for ${y(e)}, removing onSnapshot listener`),k()}),e)}function T(e){const t=j();g||(w(t.personal_account?t.account_doc.linked_to:t.user.uid),u.Z.currentRoute.value&&u.Z.currentRoute.value.path.startsWith("/portal")&&((0,n.E)("⬥ Refreshing class data"),t.fetch_classes()),t.hide_timeout(),(0,n.E)("⬥ Resubscribed to remote changes")),clearTimeout(p),p=b(e)}const P=new c.hJ,E=navigator?.userAgent?.toLowerCase()?.indexOf(" electron/")>-1,C="@mvla.net";function S(e){return"mvla.net"==e.split("@")[1]}function O(){try{return window.self!==window.top}catch(e){return!0}}P.addScope("email"),P.addScope("profile"),m.useDeviceLanguage(),P.setCustomParameters({login_hint:"username"+C});let A=new Date;A=new Date(A.getTime()-60*A.getTimezoneOffset()*1e3),A=A.toISOString().split("T")[0];const j=(0,o.Q_)({id:"main",state:()=>{let e={};if(window.localStorage.getItem("MVTT_app_state")&&"undefined"!=window.localStorage.getItem("MVTT_app_state")&&"null"!=window.localStorage.getItem("MVTT_app_state"))try{return(0,n.E)("↻ Loading state from local storage"),e=JSON.parse(window.localStorage.getItem("MVTT_app_state")),e}catch(t){(0,n.E)("⟳ Error parsing local storage state",t)}return(0,n.E)("🔨 Setting up store from scratch"),{user:null,account_doc:null,linked_account_doc:null,classes:[],tasks:[],loaded_email:null,loaded_classes:null,teacher:{doc_ref:null,collection_ref:null},theme:null,personal_account:!1}},getters:{linked_accounts(){return this.user&&this.active_doc&&this.active_doc.linked||[]},non_recent_signin(){if(!this.user)return!1;let e=this.user?.metadata?.lastSignInTime;if(!e)return!1;e=new Date(e),(0,n.E)("⏲️ Last signed-in: "+e.toLocaleString());let t=(new Date).getTime()-e.getTime();return t>864e5},recently_joined(){if(!this.user)return!1;let e=this.user?.metadata?.creationTime;if(!e)return!1;e=new Date(e);let t=(new Date).getTime()-e.getTime();return t<432e5},is_teacher(){if(!this.user)return!1;if(1==this.active_doc?.teacher_mode||"true"==window?.localStorage?.MVTT_teacher_mode){if(1==this.active_doc?.teacher_mode||null==this.active_doc?.teacher_mode)return window.localStorage.setItem("MVTT_teacher_mode",!0),this.personal_account?((0,n.E)("🏫 Personal account, overriding local teacher mode"),!1):((0,n.E)("🏫 Teacher mode enabled locally"),!0);window.localStorage.setItem("MVTT_teacher_mode",!1),(0,n.E)("🏫 Teacher mode disabled locally to reflect remote changes")}let e=this.user.email,[t,a]=e.split("@");return"mvla.net"==a&&!/\d/.test(t)&&((0,n.E)("🏫 Teacher mode enabled for non-student district account"),!0)},done_daily_survey(){return!!this.active_doc&&(!!this.is_teacher||this.active_doc.done_surveys?.includes(A))},done_join_form(){return!!this.user&&!!this.active_doc?.join_form},account_ref(){return this.user?(0,s.JU)(f,"users",this.user.uid):null},linked_account_ref(){return this.user&&this.account_doc&&this.account_doc.linked_to?(0,s.JU)(f,"users",this.account_doc.linked_to):null},active_ref(){return this.personal_account?this.linked_account_ref:this.account_ref},active_doc(){return this.personal_account?this.linked_account_doc:this.account_doc},get_theme(){let e=this.theme||window.localStorage.getItem("theme"),t=this.account_doc?.theme,a=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";return t?(e!=t&&window.localStorage.setItem("theme",t),t||"light"):(e?a=e:window.localStorage.setItem("theme",a),this.account_doc&&(this.account_doc.theme=a,this.update_remote()),e||"light")}},actions:{async get_tasks(){try{if(!this.classes?.length)return Promise.resolve([]);let e=[],t=this.classes;for(let a=0;a<t.length;a++){let o=t[a].tasks;o=o||[];for(let n=0;n<o.length;n++){if(t[a].name=t[a].name?t[a].name:"Unnamed Class","string"==typeof o[n].date){o[n].date=o[n].date.split("T")[0];let[e,t,a]=o[n].date.split("-");o[n].date=`${t}-${a}-${e}`,o[n].date=new Date(o[n].date),o[n].date=isNaN(o[n].date)?null:o[n].date}o[n].color=t[a].color,e.push({...o[n],class_name:t[a].name})}}return this.tasks=e,Promise.resolve(e)}catch(e){return Promise.reject(e)}},clear(){this.user=null,this.account_doc=null,this.linked_account_doc=null,this.classes=[],this.tasks=[],this.loaded_email=null,this.loaded_classes=null,this.personal_account=!1,this.teacher={doc_ref:null,collection_ref:null},window.localStorage.removeItem("MVTT_app_state"),u.Z.currentRoute?.value?.meta?.requiresAuth&&u.Z.push("/")},set_active(e){e&&(this.personal_account?this.linked_account_doc=e:this.account_doc=e)},async doc_from_uid(e){try{if(!e)throw"No account uid provided";let t=await(0,s.QT)((0,s.JU)(f,"users",e));if(!t.exists())throw"Account doesn't exist or you haven't been added yet";let a=t.data();return Promise.resolve(a)}catch(t){return(0,n.E)("🔗 Couldn't get linking account's document",t),Promise.reject(t)}},async link_account_uid(e){if(e)if(this.personal_account)try{let t=await this.doc_from_uid(e);if(!t)throw"Account doesn't exist or you haven't been invited";this.account_doc.linked_to=e,await this.update_remote(),new i.bF(`Successfully linked to ${t.name}'s account!`,4e3)}catch(t){return new i.PK("Couldn't link account",t,2e3),Promise.reject(t)}else new i.OO("This account is a primary account and cannot be linked",3e3)},async invite_linked(e){if(!this.user||!this.active_doc)return;if(this.personal_account&&new i.OO("This account is already linked!",2e3),!e||S(e)||!e.includes("@"))return void new i.OO("Please enter a valid non-mvla email",2e3);if(this.linked_accounts.includes(e))return void new i.OO("That account is already linked",2e3);this.active_doc.linked||(this.personal_account?this.linked_account_doc.linked=[]:this.account_doc.linked=[]);let t=(0,s.hJ)(f,"mail");try{let a=await(0,s.ET)(t,{to:e,cc:this.user.email,from:`${this.active_doc.name} via MV Test Tracker <mail@mvtt.app>`,fromname:this.active_doc.name+" via MV Test Tracker",template:{name:"link_invite",data:{sender_name:this.active_doc.name.split(" ")[0],sender_uid:this.user.uid}}}),o=(0,s.JU)(t,a.id),r=await(0,s.QT)(o),c=1;while(!r.exists()||0==!!r.data()?.delivery?.attempts&&c<=3)await new Promise((e=>setTimeout(e,2e3*(2^c)))),r=await(0,s.QT)(o),c++;if(!r.data()?.delivery?.info?.accepted?.includes(e)||0==r.data()?.delivery?.attempts)throw(0,n.E)("📧 Email failed to send",r.data()),"Email failed to send";return this.personal_account?this.linked_account_doc.linked.push(e):this.account_doc.linked.push(e),await this.update_remote(),new i.bF(`We notified ${e}, you'll receive a copy of the email too!`,4e3),Promise.resolve()}catch(a){return new i.PK(`Couldn't invite "${e}"`,a,2e3),Promise.reject(a)}},async uninvite_linked(e){try{if(!this.user)return;if(this.active_doc.linked.includes(e)){let t=this.active_doc.linked.filter((t=>t!=e));this.personal_account?this.linked_account_doc.linked=t:this.account_doc.linked=t,await this.update_remote(),new i.bF(`Removed ${e} from your linked accounts`,2e3)}else new i.OO(`${e} is not linked to this account`,2e3);Promise.resolve()}catch(t){return new i.PK(`Couldn't unlink "${e}"`,t,2e3),Promise.reject(t)}},refresh_timeout(e){this.user&&T(e)},async login_promise(){return new Promise((e=>{let t=setInterval((()=>{this.user&&(clearInterval(t),e(this.user))}),100)}))},async save_join_form(e){try{if(!this.user||!this.active_doc)throw"No doc to save join form to";return this.personal_account?(this.linked_account_doc=this.linked_account_doc||{},this.linked_account_doc.join_form=e):(this.account_doc=this.account_doc||{},this.account_doc.join_form=e),await this.update_remote(),Promise.resolve()}catch(t){return Promise.reject(t)}},async save_daily_survey(e){try{this.user||await this.login_promise();let t=(0,s.JU)(f,"survey","daily",A,this.user.uid),a={time:(new Date).getTime(),responses:e};await(0,s.pl)(t,a);let o=this.active_doc?.done_surveys?this.active_doc.done_surveys:[];return o.push(A),this.personal_account?this.linked_account_doc.done_surveys=o:this.account_doc.done_surveys=o,await this.update_remote(),new i.bF("Saved daily survey",2e3),Promise.resolve()}catch(t){return new i.PK("Couldn't save daily survey",t,2e3),Promise.reject(t)}},async toggle_theme(){this.theme="light"==this.get_theme?"dark":"light",window.localStorage.setItem("theme",this.theme),this?.account_doc&&(this.account_doc.theme=this.theme,await this.update_remote()),new i.bF(`Switched to ${this.theme} theme`,2e3),this.get_theme},async remove_class_id_helper(e){let t=this.active_doc.classes.filter((t=>t!=e));this.personal_account?this.linked_account_doc.classes=t:this.account_doc.classes=t,await this.update_remote()},async remove_invalid(e){await this.remove_class_id_helper(e),new i.OO(`Removed non-existent class "${e}"`,2e3)},async remove_class(e){await this.remove_class_id_helper(e),(0,n.E)("🗑️ Removed class from user's doc: "+e),new i.bF("Removed class",2e3)},set_user(e){(0,s.QT)((0,s.JU)(f,"users",e.uid)).then((t=>{if(t.exists()?(this.account_doc=t.data(),this.personal_account=this.account_doc?.personal_account):(this.account_doc=null,this.linked_account_doc=null,this.personal_account=!1),!e.email||!S(e.email)&&!this.personal_account&&(!this.account_doc?.personal_account||!this.account_doc?.linked_to))return m.signOut(),new i.OO("Please use your MVLA email to log in, or use an account that has been linked",4e3),void this.clear();this.user=e,this.personal_account&&this.get_remote(),this.is_teacher&&((0,n.E)("🏫 Running in teacher mode"),this.teacher.doc_ref=(0,s.JU)(f,"classes",this.user.email),this.teacher.collection_ref=(0,s.hJ)(this.teacher.doc_ref,"classes")),u.Z.currentRoute?.value?.query?.redirect&&!u.Z.currentRoute?.value?.meta?.blockStandardRedirect&&u.Z.replace(u.Z.currentRoute?.value?.query?.redirect)})).catch((e=>{m.signOut(),new i.OO("Something went wrong loading your user data",2e3),(0,n.E)("🔥 Error loading user data: "+e)}))},async login(){new i.FN("Opening login popup...","default",1e3,a(1121)),await(E||O()?(0,c.F6)(m,P):(0,c.rh)(m,P)).then((()=>{if(this.user&&this.user.email&&S(this.user.email))return new i.FN("Logged in as "+this.user.displayName+"!","default",2e3,a(8311)),(0,n.E)("🔑 Logged in as "+this.user.displayName),v(this.user),u.Z.currentRoute?.value?.query?.redirect||u.Z.currentRoute?.value?.meta?.blockStandardRedirect||u.Z.push("/portal"),Promise.resolve()})).catch((e=>{let t=(0,i.YY)(e);return"auth/cancelled-popup-request"==e.code||"auth/popup-closed-by-user"==e.code||"auth/user-cancelled"==e.code?new i.OO(t,2e3):new i.PK("Couldn't log in",t,2e3),Promise.reject(t)}))},async login_personal(){new i.FN("Opening login popup...","default",1e3,a(1121));const e=new c.hJ;e.addScope("email"),e.addScope("profile"),await(E||O()?(0,c.F6)(m,e):(0,c.rh)(m,e)).then((()=>{if(this.user&&this.user.email&&!S(this.user.email))return new i.FN("Logged in as "+this.user.displayName+"!","default",2e3,a(8311)),(0,n.E)("🔑 Logged in as "+this.user.displayName),v(this.user),Promise.resolve()})).catch((e=>(new i.PK("Couldn't log in",e,2e3),Promise.reject(e))))},logout(){m.signOut(),this.clear(),new i.FN("Logged Out","default",1500,a(1121))},async get_remote(){let e=await(0,s.QT)(this.account_ref);e.exists()?this.set_active(e.data()):this.personal_account?((0,n.E)("🔗 Linked account doesn't exist, removing it and going home"),new i.OO("Linked account doesn't exist, removing it and going home",2e3),this.account_doc.linked_to=null,await this.update_wrapper_acc_doc(),this.linked_account_doc=null,u.Z.push("/")):(await this.create_doc(),await this.get_remote())},async update_remote(){await(0,s.pl)(this.active_ref,this.active_doc,{merge:!0}),(0,n.E)("⏶ Pushed changes to remote")},async update_wrapper_acc_doc(){await(0,s.pl)(this.account_ref,this.account_doc,{merge:!0})},async create_doc(){(0,n.E)("📄 User document doesn't exist, creating new one..."),new i.OO("User document doesn't exist, creating new one...",2e3),this.account_doc={name:this.user.displayName,email:this.user.email,classes:[],theme:this.get_theme},this.personal_account&&(this.account_doc={linked_to:null,personal_account:!0,name:this.user.displayName,email:this.user.email}),this.is_teacher?(await this.create_teacher_doc(),new i.bF("Created user & teacher documents; Let's get started",2e3)):(await this.update_remote(),new i.bF("Created user document; Let's get started",2e3),this.personal_account||u.Z.push({name:"onboarding",query:{redirect:"/settings?redirect=/portal"}}))},async create_teacher_doc(){let e=(0,s.JU)(f,"classes",this.active_doc.email||this.user.email);await(0,s.pl)(e,{name:this.active_doc.name||this.user.displayName,email:this.active_doc.email||this.user.email}),this.teacher={doc_ref:e,collection_ref:(0,s.hJ)(e,"classes")},u.Z.push("/portal/create")},async fetch_classes(){if((0,n.E)("📚 Fetching classes..."),!this.active_doc?.classes)return Promise.reject("Waiting for user document to load");let e=[...new Set(this.active_doc.classes)];e.length!=this.active_doc.classes.length&&(this.personal_account?this.linked_account_doc.classes=e:this.account_doc.classes=e,await this.update_remote(),new i.OO("Removed duplicate classes",2e3));let t=[];for(let a of this.active_doc.classes){let[e,o]=a.split("/");if(!e||!o){await this.remove_invalid(a);continue}let n=(0,s.JU)(f,"classes",e),i=await(0,s.QT)(n);if(!i.exists()){await this.remove_invalid(a);continue}let r=(0,s.hJ)(n,"classes");if(!r){await this.remove_invalid(a);continue}let c=(0,s.JU)(r,o),l=await(0,s.QT)(c);if(!l.exists()){await this.remove_invalid(a);continue}let u=l.data();u.id=a,u.ref=[e,o].join("/"),t.push(u)}await Promise.all(t.map((async e=>{let t=[],[a,o]=e.ref.split("/"),n=(0,s.JU)(f,"classes",a,"classes",o),i=(0,s.hJ)(n,"tasks"),r=await(0,s.PL)(i);r.forEach((e=>{let n=e.data();n.ref=[a,o,e.id].join("/"),t.push(n)})),e.tasks=t}))),t.sort(((e,t)=>e.period==t.period?e.name.localeCompare(t.name):e.period-t.period)),this.classes=t,this.get_tasks(),Promise.resolve()},async fetch_classes_by_email(e){if(this.loaded_email=null,!e||!S(e))return this.loaded_classes=null,void(this.loaded_email=e);let t=await(0,s.QT)((0,s.JU)(f,"classes",e));if(t.exists()){let t=[],a=(0,s.hJ)((0,s.JU)(f,"classes",e),"classes"),o=await(0,s.PL)((0,s.IO)(a));o.forEach((a=>{let o=a.data();o.id=a.id,o.name=(o.period?"P"+o.period+" - ":"")+o.name,this.active_doc?.classes.includes([e,a.id].join("/"))&&(o.is_joined=!0,o.name="[JOINED] "+o.name),t.push(o)})),t.sort(((e,t)=>e.period==t.period?e.name.localeCompare(t.name):e.period-t.period)),this.loaded_classes=t}else this.loaded_classes=null;this.loaded_email=e},async add_class(e,t,a,o){if(!this.active_doc?.classes)return;if(!t)return;let n=[e,t].join("/");return this.active_doc.classes.includes(n)?void 0:(this.personal_account?this.linked_account_doc.classes.push(n):this.account_doc.classes.push(n),await this.update_remote(),new i.bF(`Added "P${o} - ${a}" to your classes`,2e3),Promise.resolve())},async create_class(e){if((0,n.E)("🔨 Creating class",e),this.is_teacher){if(e.name&&e.period)try{if(!this.teacher.doc_ref||!this.teacher.collection_ref)return await this.create_teacher_doc(),void await this.create_class(e);let t=await(0,s.ET)(this.teacher.collection_ref,e);return new i.bF(`Created class "${e.name}"`,2e3),(0,n.E)("🏫 class_doc_ref",t),await this.add_class(this.active_doc.email||this.user.email,t.id,e.name,e.period),Promise.resolve()}catch(t){return new i.PK("Couldn't create class",(0,i.YY)(t),2e3),Promise.reject(t)}}else new i.PK("You need to be a teacher to create a class",2e3)},async create_task(e,t){try{if(!e.name&&"note"!=e?.type)return Promise.reject("No task name specified");if(!t||0==t.length)return Promise.reject("No classes selected");let a=(0,s.qs)(f),o=Array.from(this.classes);t.forEach((t=>{let n=t,[i,r]=t.split("/"),c=(0,s.hJ)(f,"classes",i,"classes",r,"tasks");e.class_id=n;let l=(0,s.JU)(c);a.set(l,e),o.forEach((t=>{t.id==n&&t.tasks.push({...e,ref:[i,r,l.id].join("/"),_proxy:!0})}))})),await a.commit(),this.classes=o,this.get_tasks();let n="note"==e.type?"":`"${e.name}"`;return new i.bF(`Added ${e.type||"task"} ${n} to ${t.length} class${1==t.length?"":"es"}`,2e3),Promise.resolve()}catch(a){return Promise.reject(a)}},async update_task(e,t){try{delete t.class_id,delete t.ref;let[a,o,i]=e.split("/");a+=C,await(0,s.r7)((0,s.JU)(f,"classes",a,"classes",o,"tasks",i),t),(0,n.E)("📝 Updated remote task");let r=this.classes;const c=r.findIndex((e=>e.id===[a,o].join("/"))),l=[a,o,i].join("/");if(-1!==c){const e=r[c].tasks.findIndex((e=>e.ref===l));-1!==e&&(r[c].tasks[e]={...t,ref:l,_proxy:!0},(0,n.E)("📝 Updated local task"))}return this.classes=[...r],this.get_tasks(),Promise.resolve()}catch(a){return Promise.reject(a)}},async delete_task(e){let[t,a,o]=e.split("/");t+=C;try{await(0,s.oe)((0,s.JU)(f,"classes",t,"classes",a,"tasks",o))}catch(i){return Promise.reject(i)}try{let e=this.classes;e.forEach((e=>{e.id==[t,a].join("/")&&(e.tasks=e.tasks.filter((e=>e.ref!=[t,a,o].join("/"))))})),this.classes=e,this.get_tasks()}catch(i){(0,n.E)("🔥 Error removing task from local",i)}return Promise.resolve()},async task_from_ref(e){try{let[t,a,o]=e.split("/");t+=C;let n=await(0,s.QT)((0,s.JU)(f,"classes",t,"classes",a)),i=n.data(),r=await(0,s.QT)((0,s.JU)(f,"classes",t,"classes",a,"tasks",o));if(!r.exists())return Promise.resolve(null);let c=r.data();return c.ref=e,c.class_name=i.name||"Unknown Class",Promise.resolve(c)}catch(t){return Promise.reject(t)}},show_timeout(){(0,n.E)("🕒 Showing timeout")},hide_timeout(){(0,n.E)("🕒 Hiding timeout")}}})},4654:function(){}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,i){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],i=e[u][2];for(var r=!0,c=0;c<o.length;c++)(!1&i||s>=i)&&Object.keys(a.O).every((function(e){return a.O[e](o[c])}))?o.splice(c--,1):(r=!1,i<s&&(s=i));if(r){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,n,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,o){return a.f[o](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{7:"3c192daf",12:"6a4dd3b6",40:"6593f5dd",86:"76e1a134",176:"34f901ac",371:"d81c8726",414:"9e918a1f",454:"10774efa",478:"d91a1366",481:"f1b206b6",503:"e7514344",504:"d02f5ffc",524:"44aa6c24",529:"7efec34f",676:"d6580bad",747:"d37b386d",750:"4dba7f7c",758:"5c4928b5",923:"b91175a4",948:"a04699e7"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+e+"."+{40:"2e6db1c8",86:"6aee79bf",176:"be1e5d6a",371:"6b00815e",414:"f7a0b79b",454:"86da711f",478:"878f223e",481:"b901e163",503:"a3759811",504:"1221cfec",676:"fe34aca6",747:"aa2556cf",758:"91c41901",923:"94abad1b",948:"2fa4a5c8"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="mvtime:";a.l=function(o,n,i,s){if(e[o])e[o].push(n);else{var r,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){r=d;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",t+i),r.src=o),e[o]=[n];var h=function(t,a){r.onerror=r.onload=null,clearTimeout(m);var n=e[o];if(delete e[o],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((function(e){return e(a)})),t)return t(a)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=h.bind(null,r.onerror),r.onload=h.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,a,o,n){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var s=function(a){if(i.onerror=i.onload=null,"load"===a.type)o();else{var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=r,i.parentNode&&i.parentNode.removeChild(i),n(c)}};return i.onerror=i.onload=s,i.href=t,a?a.parentNode.insertBefore(i,a.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var n=a[o],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===e||i===t))return n}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){n=s[o],i=n.getAttribute("data-href");if(i===e||i===t)return n}},o=function(o){return new Promise((function(n,i){var s=a.miniCssF(o),r=a.p+s;if(t(s,r))return n();e(o,r,null,n,i)}))},n={143:0};a.f.miniCss=function(e,t){var a={40:1,86:1,176:1,371:1,414:1,454:1,478:1,481:1,503:1,504:1,676:1,747:1,758:1,923:1,948:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=o(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}}(),function(){var e={143:0};a.f.j=function(t,o){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var i=new Promise((function(a,o){n=e[t]=[a,o]}));o.push(n[2]=i);var s=a.p+a.u(t),r=new Error,c=function(o){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;r.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",r.name="ChunkLoadError",r.type=i,r.request=s,n[1](r)}};a.l(s,c,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,i,s=o[0],r=o[1],c=o[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(c)var u=c(a)}for(t&&t(o);l<s.length;l++)i=s[l],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},o=self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(7930)}));o=a.O(o)})();
//# sourceMappingURL=app.ac00a2bc.js.map