"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[747],{8747:function(e,s,t){t.r(s),t.d(s,{default:function(){return Y}});var a=t(3396),l=t(7139);const n=e=>((0,a.dD)("data-v-09b67d50"),e=e(),(0,a.Cn)(),e),i={class:"viewtask"},o={class:"modal_header",ref:"title"},r={class:"header_style modal_header_title"},_={ref:"contents",class:"overlay_contents"},d={key:0},c={class:"spaced_contents"},p={class:"styled_obj"},k=n((()=>(0,a._)("span",{class:"styled_line__label"},"Class:",-1))),h=n((()=>(0,a._)("span",{class:"styled_line__separator"},null,-1))),y={class:"styled_line__value"},u={key:0,class:"styled_obj"},m=n((()=>(0,a._)("span",{class:"styled_line__label"},"Name:",-1))),w=n((()=>(0,a._)("span",{class:"styled_line__separator"},null,-1))),v={class:"styled_line__value"},f={class:"styled_obj"},g=n((()=>(0,a._)("span",{class:"styled_line__label"},"Date:",-1))),b=n((()=>(0,a._)("span",{class:"styled_line__separator"},null,-1))),D={class:"styled_line__value"},O={class:"styled_obj"},$={class:"styled_line__label"},C=n((()=>(0,a._)("span",{class:"styled_line__separator"},null,-1))),j=["innerHTML"],T={key:1,class:"styled_obj links_obj"},z=n((()=>(0,a._)("span",{class:"styled_line__label"},"Links:",-1))),E=n((()=>(0,a._)("span",{class:"styled_line__separator"},null,-1))),x={class:"styled_line__value styled_line_links"},L=["href"],I=n((()=>(0,a._)("div",{class:"overlay_contents_text"}," Information is provided by teachers and volunteer students, and may not always be correct ",-1))),N={key:1,alt:"Loading Icon",class:"loading_icon"},R={class:"bottom_actions"},S=n((()=>(0,a._)("div",{class:"flex_spacer"},null,-1)));function q(e,s,t,n,q,H){return(0,a.wg)(),(0,a.iD)("main",i,[(0,a._)("header",o,[(0,a._)("h2",r," View "+(0,l.zw)(q.task&&q.task.type?q.task.type:"task")+" details ",1)],512),(0,a._)("div",_,[q.ready?((0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",c,[(0,a._)("div",p,[k,h,(0,a._)("span",y,(0,l.zw)(q.task.group||q.task.class_name),1)]),"note"!=q.task.type?((0,a.wg)(),(0,a.iD)("div",u,[m,w,(0,a._)("span",v,(0,l.zw)(q.task.name),1)])):(0,a.kq)("",!0),(0,a._)("div",f,[g,b,(0,a._)("span",D,(0,l.zw)(H.date),1)]),(0,a._)("div",O,[(0,a._)("span",$,(0,l.zw)("note"==q.task.type?"Contents":"Description")+":",1),C,(0,a._)("span",{class:"styled_line__value",innerHTML:q.task.description?q.task.description:"Not Provided"},null,8,j)]),q.task.links?((0,a.wg)(),(0,a.iD)("div",T,[z,E,(0,a._)("span",x,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(q.task.links,(e=>((0,a.wg)(),(0,a.iD)("a",{class:"styled_line_links__link",target:"_blank",key:e.path,href:`/to/${encodeURIComponent(e.path)}`},(0,l.zw)(e.text),9,L)))),128))])])):(0,a.kq)("",!0)]),I])):((0,a.wg)(),(0,a.iD)("img",N))],512),(0,a._)("div",R,[(0,a._)("button",{class:"share_action",onClick:s[0]||(s[0]=(...e)=>H.share_task&&H.share_task(...e))},"Share"),S,H.store.is_teacher&&H.store.user&&q.task&&q.task.ref.split("/")[0]==H.store.user.email.replace("@mvla.net","")?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"delete_action primary_styled",onClick:s[1]||(s[1]=(...e)=>H.edit_task&&H.edit_task(...e))}," Edit ")):(0,a.kq)("",!0),(0,a._)("button",{class:"continue_action",onClick:s[2]||(s[2]=s=>e.$emit("close"))},"Close")])])}t(7658);var H=t(1708),K=t(2745),P=t(8980),V=t(9529),M=t.n(V),U={name:"ViewTaskView",emits:["close"],mixins:[M()],data(){return{task:null,ready:!1}},computed:{store(){return(0,P.h)()},date(){let e=new Date(this.task?.date);if(!isNaN(e.getTime()))return e=new Date(e.getTime()+60*e.getTimezoneOffset()*1e3),new Date(e).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"})}},mounted(){this.$smoothReflow({el:this.$refs.contents,hideOverflow:!0,childTransitions:!0}),this.$smoothReflow({el:this.$refs.title,hideOverflow:!0}),this.get_task()},methods:{async share_task(){if(navigator.share){let e=new URL(window.location.href);e.host="mvtt.app",e.port="",e.protocol="https",navigator.share({title:this.task.name,text:this.task.description,url:e.href}).then((()=>new H.bF("Opened share dialog",1e3))).catch((e=>(0,K.E)("Error sharing",e)))}else navigator.clipboard?(navigator.clipboard.writeText(window.location.href),new H.OO("Sharing not supported, copied link to clipboard",2e3)):new H.PK("Sharing not supported",2e3)},edit_task(){this.$router.push({name:"edit",params:{ref:this.task.ref.split("/").join("~")}})},async get_task(){const e=this.$route.params.ref.split("~").join("/");e?e.split("/").length<3&&(new H.OO("Invalid task specified",1500),this.$emit("close")):(new H.OO("No task specified",1500),this.$emit("close")),this.store.task_from_ref(e).then((e=>{e?((0,K.E)("📃 Got task data from ref"),this.task=e,this.ready=!0):(new H.OO("Couldn't find that task",2e3),this.$emit("close"))})).catch((e=>{new H.PK("Error getting task",1500),(0,K.E)("⚠ Error getting task",e),this.$emit("close")}))}}},F=t(89);const G=(0,F.Z)(U,[["render",q],["__scopeId","data-v-09b67d50"]]);var Y=G}}]);
//# sourceMappingURL=747.d37b386d.js.map