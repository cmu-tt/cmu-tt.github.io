"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[840],{3840:function(e,t,s){s.r(t),s.d(t,{default:function(){return j}});s(7658);var r=s(3396),i=s(7139);const a=e=>((0,r.dD)("data-v-e689702e"),e=e(),(0,r.Cn)(),e),o={class:"archive_task"},l={class:"modal_header"},n={class:"header_style modal_header_title"},c={class:"overlay_contents overlay_contents_text",ref:"contents"},h=a((()=>(0,r._)("br",null,null,-1))),u=a((()=>(0,r._)("br",null,null,-1))),d=["href"],_={class:"bottom_actions"},f=a((()=>(0,r._)("div",{class:"flex_spacer"},null,-1))),m=["disabled"];function v(e,t,s,a,v,p){return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("header",l,[(0,r._)("h2",n,"Confirm "+(0,i.zw)(v.type)+" archive",1)]),(0,r._)("div",c,[(0,r.Uk)(" Are you sure you want to archive the "+(0,i.zw)(v.type)+(0,i.zw)(v.title?` "${v.title}"`:"")+" you were editing? ",1),h,u,(0,r.Uk)(" This action is currently irreversible, and will permanently remove it from "),(0,r._)("a",{class:"class_name button_pointer_text",href:`/view/${p.class_obj.ref}`,onClick:t[0]||(t[0]=t=>{t.preventDefault(),e.$router.push({name:"viewclass",params:{ref:p.class_obj.ref},query:e.$route.query})}),style:(0,i.j5)({"--color-class":p.class_obj.color,"--color-class-alt":p.class_obj.color+"2d"})},(0,i.zw)(`P${p.class_obj.period} - ${p.class_obj.name}`),13,d),(0,r.Uk)(". ")],512),(0,r._)("div",_,[v.ready?((0,r.wg)(),(0,r.iD)("button",{key:0,class:"close_action click_escape",onClick:t[1]||(t[1]=(...e)=>p.edit_task&&p.edit_task(...e))}," Continue Editing ")):((0,r.wg)(),(0,r.iD)("button",{key:1,class:"close_action click_escape",onClick:t[2]||(t[2]=t=>e.$emit("close"))},"Close")),f,(0,r._)("button",{class:(0,i.C_)(["continue_action",{loading_bg:v.loading}]),onClick:t[3]||(t[3]=(...e)=>p.archive_task&&p.archive_task(...e)),disabled:!v.ready}," Confirm ",10,m)])])}var p=s(9529),y=s.n(p),k=s(8980),$=s(2745),b=s(1708),w={name:"ArchiveTask",emits:["close"],mixins:[y()],data(){return{ready:!1,loading:!0,ref:this.$route?.params?.ref,type:this.$route?.params?.type||"task",title:this.$route?.query?.title}},computed:{store(){return(0,k.h)()},class_obj(){if(!this.ref)return{};let e=this.store?.classes,[t,s]=this.ref.split("/"),r=t+this.store.ORG_DOMAIN,i=[r,s].join("/");if(!e||!r||!s||!i)return{};let a=e.find((e=>e.id===i))||{};return a&&(a.ref=[t,s].join("~")),a}},mounted(){this.$smoothReflow({el:this.$refs.contents,hideOverflow:!0,childTransitions:!0}),this.$router.replace({...this.$route,query:{...this.$route.query,title:void 0}}),this.ref&&this.type?(this.ref=this.ref.split("~").join("/"),3!==this.ref.split("/").length?(new b.OO("Couldn't find that task",2e3),this.$emit("close")):(this.ready=!0,this.loading=!1)):(new b.OO("There was no task provided",2e3),this.$emit("close"))},methods:{archive_task(){this.loading=!0,this.store.archive_task(this.ref).then((()=>{new b.bF(`Archived ${this.type}`,3e3),this.$emit("close")})).catch((e=>{new b.PK(`Error removing ${this.type}`,e,3e3),$.i2.error("⚠ Error removing task",e),this.loading=!1}))},edit_task(){this.$router.push({name:"edit",params:{ref:this.$route?.params?.ref},query:this.$route.query})}}},g=s(89);const C=(0,g.Z)(w,[["render",v],["__scopeId","data-v-e689702e"]]);var j=C}}]);
//# sourceMappingURL=840.8d694172.js.map