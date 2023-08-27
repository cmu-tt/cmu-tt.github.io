"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[518],{8518:function(e,t,s){s.r(t),s.d(t,{default:function(){return C}});var i=s(3396),o=s(7139);const a=e=>((0,i.dD)("data-v-54f04276"),e=e(),(0,i.Cn)(),e),l={class:"delete_task"},r={class:"modal_header"},n={class:"header_style modal_header_title"},d={class:"overlay_contents overlay_contents_text",ref:"contents"},c=a((()=>(0,i._)("br",null,null,-1))),h=a((()=>(0,i._)("br",null,null,-1))),_={class:"bottom_actions"},u=a((()=>(0,i._)("div",{class:"flex_spacer"},null,-1))),m=["disabled"];function f(e,t,s,a,f,p){return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("header",r,[(0,i._)("h2",n,"Confirm "+(0,o.zw)(f.type)+" delete",1)]),(0,i._)("div",d,[(0,i.Uk)(" Are you sure you want to delete the "+(0,o.zw)(f.type)+(0,o.zw)(f.title?` "${f.title}"`:"")+" you were editing? ",1),c,h,(0,i.Uk)(" This action is irreversible, and will permanently remove it from "),(0,i._)("span",{class:"class_name button_pointer_text",style:(0,o.j5)({"--color-class":p.class_obj.color,"--color-class-alt":p.class_obj.color+"2d"})},(0,o.zw)(`P${p.class_obj.period} - ${p.class_obj.name}`),5),(0,i.Uk)(". ")],512),(0,i._)("div",_,[f.ready?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"close_action",onClick:t[0]||(t[0]=(...e)=>p.edit_task&&p.edit_task(...e))},"Continue Editing")):((0,i.wg)(),(0,i.iD)("button",{key:1,class:"close_action",onClick:t[1]||(t[1]=t=>e.$emit("close"))},"Close")),u,(0,i._)("button",{class:(0,o.C_)(["continue_action",{loading_bg:f.loading}]),onClick:t[2]||(t[2]=(...e)=>p.delete_task&&p.delete_task(...e)),disabled:!f.ready}," Confirm ",10,m)])])}s(7658);var p=s(9529),k=s.n(p),y=s(8980),v=s(2745),b=s(1708),w={name:"DeleteTask",emits:["close"],mixins:[k()],data(){return{ready:!1,loading:!0,ref:this.$route?.params?.ref,type:this.$route?.params?.type||"task",title:this.$route?.query?.title}},computed:{store(){return(0,y.h)()},class_obj(){if(!this.ref)return{};let e=this.store?.classes,[t,s]=this.ref.split("/");t+="@mvla.net";let i=[t,s].join("/");return e&&t&&s&&i&&e.find((e=>e.id===i))||{}}},mounted(){this.$smoothReflow({el:this.$refs.contents,hideOverflow:!0,childTransitions:!0}),this.ref&&this.type?(this.ref=this.ref.split("~").join("/"),3!==this.ref.split("/").length?(new b.OO("Couldn't find that task",2e3),this.$emit("close")):(this.ready=!0,this.loading=!1)):(new b.OO("There was no task provided",2e3),this.$emit("close"))},methods:{delete_task(){this.loading=!0,this.store.delete_task(this.ref).then((()=>{new b.bF(`Removed ${this.type}`,3e3),this.$emit("close")})).catch((e=>{new b.PK(`Error removing ${this.type}`,3e3),(0,v.E)("⚠ Error removing task",e),this.loading=!1}))},edit_task(){this.$router.push({name:"edit",params:{ref:this.$route?.params?.ref}})}}},$=s(89);const g=(0,$.Z)(w,[["render",f],["__scopeId","data-v-54f04276"]]);var C=g}}]);
//# sourceMappingURL=518.422bb43b.js.map