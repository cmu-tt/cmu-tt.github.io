"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[166],{8166:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var i=n(3396);function a(t,e,n,a,o,s){const h=(0,i.up)("Modal");return(0,i.wg)(),(0,i.j4)(h,{can_continue:!0,title:"Leaving MVTT",html:s.contents,continue_action:s.open,skippable:!0,skip_text:"Cancel",onSkip:e[0]||(e[0]=e=>t.$emit("close")),submit_text:"Continue"},null,8,["html","continue_action"])}var o=n(6763),s=n(1708),h=n(2745),p={name:"RedirectView",components:{Modal:o.Z},emits:["close"],data(){return{path:""}},mounted(){this.path=this.$route?.params?.path,this.path?this.path=this.path.startsWith("http")?this.path:`https://${this.path}`:(new s.OO("Missing redirect path"),this.$emit("close"));try{const t=new URL(this.path);"mvtt.app"==t.host&&(new s.bF("Redirecting to MVTT"),this.open())}catch{h.i2.log("Couldn not verify path domain is not MVTT")}},computed:{contents(){return this.path?`You are being redirected to <a href="${this.path}">${new URL(this.path).host}</a>\n            <br><br>\n           Content outside of MVTT is not vetted by our team, and may be harmful.`:"Missing redirect path"}},methods:{open(){this.$emit("close"),window.location.replace(this.path)}}},r=n(89);const c=(0,r.Z)(p,[["render",a]]);var u=c}}]);
//# sourceMappingURL=166.b47ce506.js.map