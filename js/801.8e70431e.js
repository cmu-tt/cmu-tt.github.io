"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[801],{3801:function(e,s,t){t.r(s),t.d(s,{default:function(){return Ae}});t(4114);var a=t(6768),i=t(4232),n=t(334);const r=e=>((0,a.Qi)("data-v-6111502e"),e=e(),(0,a.jt)(),e),o={class:"admin"},c={class:"admin_sidebar"},l={class:"admin_sidebar_scrollable admin_section"},d={class:"admin_sidebar_header"},u={class:"branding-title gohome"},A={class:"admin_sidebar_items"},h=["title","onClick","href"],g={class:"admin_sidebar_item__text"},m=["title","onClick"],v=r((()=>(0,a.Lk)("span",{class:"admin_sidebar_item__outlink__icon themed_icon"},null,-1))),p=[v],_={class:"sidebar_last_block auth-action can-logout doprompt"},k={key:0,class:"linked_acc_icon"},w=r((()=>(0,a.Lk)("img",{class:"linked_acc_icon__img",width:"24",height:"24",src:n,alt:"Linked Account"},null,-1))),L=[w],b=["title"],y=["src"],f=r((()=>(0,a.Lk)("div",{class:"auth_logout can_logout"},"Log Out",-1))),C={class:"admin_main_wrapper"};function E(e,s,t,n,r,v){return(0,a.uX)(),(0,a.CE)("main",o,[(0,a.Lk)("div",c,[(0,a.Lk)("div",l,[(0,a.Lk)("div",d,[(0,a.Lk)("div",u,[(0,a.eW)((0,i.v_)(e.$env.VUE_APP_BRAND_SHORT_NAME)+" ",1),(0,a.Lk)("span",{class:"branding-admin",onClick:s[0]||(s[0]=s=>{e.$router.push({name:"portal"}),s.stopPropagation()})},"Admin Panel")])]),(0,a.Lk)("div",A,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.pages,(e=>((0,a.uX)(),(0,a.CE)("a",{class:(0,i.C4)(["admin_sidebar_item",{active:r.active===e.short}]),title:`View ${e.title} info and options`,onClick:s=>{r.active=e.short,s.preventDefault()},href:`?page=${e.short}`,key:e.short},[(0,a.Lk)("span",g,(0,i.v_)(e.name),1),(0,a.Lk)("button",{class:"admin_sidebar_item__outlink click-action",title:`Open ${e.title} in a new tab`,onClick:s=>{v.open_outlink(e.short),s.preventDefault(),s.stopPropagation()}},p,8,m)],10,h)))),128))])]),(0,a.Lk)("div",_,[e.$store&&e.$store.personal_account?((0,a.uX)(),(0,a.CE)("div",k,L)):e.$store&&e.$store.user&&v.user_pfp?((0,a.uX)(),(0,a.CE)("div",{key:1,class:"active_acc_icon",title:`Logged in as ${e.$store.user.displayName} (${this.$store.user.email})`},[(0,a.Lk)("img",{class:"active_acc_icon__img",width:"26",height:"26",src:v.user_pfp,referrerpolicy:"no-referrer",alt:"Account Profile Image"},null,8,y)],8,b)):(0,a.Q3)("",!0),f])]),(0,a.Lk)("div",C,[((0,a.uX)(),(0,a.Wv)((0,a.$y)(v.page.src),{class:"admin_main"}))])])}var j=t(144);const X={class:"userteacher"},U=(0,a.Lk)("div",{class:"placeholder"},"Users & Teachers",-1),$=[U];function D(e,s,t,i,n,r){return(0,a.uX)(),(0,a.CE)("div",X,$)}var R={},B=t(1241);const I=(0,B.A)(R,[["render",D]]);var q=I;const M={class:"logdebug"},x=(0,a.Lk)("div",{class:"placeholder"},"Logs & Debugging",-1),z=[x];function J(e,s,t,i,n,r){return(0,a.uX)(),(0,a.CE)("div",M,z)}var N={};const T=(0,B.A)(N,[["render",J]]);var Q=T;const P={class:"districtenv"},S=(0,a.Lk)("div",{class:"placeholder"},"District & .env",-1),V=[S];function W(e,s,t,i,n,r){return(0,a.uX)(),(0,a.CE)("div",P,V)}var Z={};const H=(0,B.A)(Z,[["render",W]]);var O=H;const G={class:"messagesalerts"},Y=(0,a.Lk)("div",{class:"placeholder"},"Messages & Alerts",-1),F=[Y];function K(e,s,t,i,n,r){return(0,a.uX)(),(0,a.CE)("div",G,F)}var ee={};const se=(0,B.A)(ee,[["render",K]]);var te=se;const ae={class:"usageanalyticss"},ie=(0,a.Lk)("div",{class:"placeholder"},"Usage & Analytics",-1),ne=[ie];function re(e,s,t,i,n,r){return(0,a.uX)(),(0,a.CE)("div",ae,ne)}var oe={};const ce=(0,B.A)(oe,[["render",re]]);var le=ce,de={name:"AdminPortal",components:{UserTeacher:q,LogDebug:Q,DistrictEnv:O,MessagesAlerts:te,UsageAnalytics:le},data(){return{active:"usrs",pages:[{name:"Users & Teachers",short:"usrs",title:"user",src:(0,j.IJ)(q)},{name:"Logs & Debugging",short:"logs",title:"log and debug",src:(0,j.IJ)(Q)},{name:"District & .env",short:"opts",title:"customization",src:(0,j.IJ)(O)},{name:"Messages & Alerts",short:"msgs",title:"alerts and messaging",src:(0,j.IJ)(te)},{name:"Usage & Analytics",short:"usge",title:"usage and analytics",src:(0,j.IJ)(le)}]}},computed:{page(){return this.pages.find((e=>e.short===this.active))},user_pfp(){return this.$store&&this.$store.user&&this.$store.user.photoURL?this.$store.user.photoURL.replace("s96-c","s26-c"):null}},methods:{keydown(e){},open_outlink(e){window.open(`?page=${e}`,"_blank")}},watch:{page(){this.$router.push({query:{page:this.active}})},"$route.query.page"(e){this.pages.some((s=>s.short===e))&&(this.active=e)}},mounted(){this.$route.query.page&&this.pages.some((e=>e.short===this.$route.query.page))?this.active=this.$route.query.page:this.$router.replace({query:{page:this.active}}),window.addEventListener("keydown",this.keydown)},beforeUnmount(){window.removeEventListener("keydown",this.keydown)}};const ue=(0,B.A)(de,[["render",E],["__scopeId","data-v-6111502e"]]);var Ae=ue},334:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJxSURBVHgB7ZmBcdsgFIb/9jqAR6ATNJ3AjJAN7A3iDdwNlE5ANvAIciewN6AbxBskvDOcCUHwQEjJXfTd/WeMEPpBD4QQsLDwtfmGdkijX/b3zmhlRVyM/ludjf4ZHfEJIIN/jJ6NXgqljZSRwAdAxh9RbnpIszZkh7oe59yRDSamZa8PqcMEUMj0wOTmnU64TQBNOAGzmXfq0Yg5wmaycNoCePlg7VCJwHVmaGVkb7T26qeHnWKcRzNe1XjgVM6RtmaHEMh3VHEoCYw37swL5vVyz5aiu6CAScw/ekZVYGqPfAiy0Whv/iljSiI/FljIAqNjzIemVoy6ZWj2B96zxjjcU9tBS+mhQXwJzstBy/Wjn/E9Uig1Y6QgMzRn//T02+gvru8BMZ68tEAeyShTtWyIhQ0Cc2G9+6CMYl4nS+lSOWae/od3cpswf8+8FmsgjzFP6d4e660oj+L7MGD+DmWd1qwBMfPaHnvw8jubr4P8GvOsBnAqTJknbZCnxjwrhDSjoi5hPtbAkHvUvZaewODAqMgfoCpRjo5J2xhhjfcVxp0OodnYg+xoL5Ti7KW3iXISb/eHXF4tZ04hiXxP+IaGQkEjPU5qtAaTXHxKr+xuJvMaBewzlalIeW0bTmn/DlG6xaaAQgFVK8OBelrtaAgU0mUqpN7eJM4XDc0rVLACb66myqUtL2y6Q53RodgXqGTX0EitNhhJy94sVbN90h7A3OZZywYuLWcTjno03tx1zBFOk2yv+2zRdsvRiWa8B8yEQLutR9frk4RMDoFrQ2ruSGzZUUzLz6xr3D6xCtzehYmLFS2Hj7h9al1YWBjJKxvgzZRLiW94AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=801.8e70431e.js.map