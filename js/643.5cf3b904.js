"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[643],{643:function(s,e,a){a.r(e),a.d(e,{default:function(){return F}});var t=a(3396),l=a(7139);const n=s=>((0,t.dD)("data-v-706664a0"),s=s(),(0,t.Cn)(),s),i={class:"viewtask"},_={class:"modal_header"},r={class:"header_style modal_header_title"},o={class:"overlay_contents"},c={class:"spaced_contents"},d={class:"styled_obj"},p=n((()=>(0,t._)("span",{class:"styled_line__label"},"Class:",-1))),k=n((()=>(0,t._)("span",{class:"styled_line__separator"},null,-1))),u={class:"styled_line__value"},y={class:"styled_obj"},h=n((()=>(0,t._)("span",{class:"styled_line__label"},"Name:",-1))),v=n((()=>(0,t._)("span",{class:"styled_line__separator"},null,-1))),w={class:"styled_line__value"},b={class:"styled_obj"},m=n((()=>(0,t._)("span",{class:"styled_line__label"},"Date:",-1))),g=n((()=>(0,t._)("span",{class:"styled_line__separator"},null,-1))),f={class:"styled_line__value"},D={class:"styled_obj"},C=n((()=>(0,t._)("span",{class:"styled_line__label"},"Description:",-1))),j=n((()=>(0,t._)("span",{class:"styled_line__separator"},null,-1))),x=["innerHTML"],O={key:0,class:"styled_obj links_obj"},z=n((()=>(0,t._)("span",{class:"styled_line__label"},"Links:",-1))),S=n((()=>(0,t._)("span",{class:"styled_line__separator"},null,-1))),L={class:"styled_line__value styled_line_links"},N=["href"],T=n((()=>(0,t._)("div",{class:"overlay_contents_text"}," Information is provided by teachers and volunteer students, and may not always be correct ",-1))),q={class:"bottom_actions"},H=n((()=>(0,t._)("div",{class:"flex_spacer"},null,-1)));function V(s,e,a,n,V,$){return(0,t.wg)(),(0,t.iD)("main",i,[(0,t._)("header",_,[(0,t._)("h2",r," View "+(0,l.zw)($.task.type?$.task.type:"task")+" details ",1)]),(0,t._)("div",o,[(0,t._)("div",c,[(0,t._)("div",d,[p,k,(0,t._)("span",u,(0,l.zw)($.task.group||$.task.class_name),1)]),(0,t._)("div",y,[h,v,(0,t._)("span",w,(0,l.zw)($.task.name),1)]),(0,t._)("div",b,[m,g,(0,t._)("span",f,(0,l.zw)(new Date($.task.date).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"})),1)]),(0,t._)("div",D,[C,j,(0,t._)("span",{class:"styled_line__value",innerHTML:$.task.description?$.task.description:"Not Provided"},null,8,x)]),$.task.links?((0,t.wg)(),(0,t.iD)("div",O,[z,S,(0,t._)("span",L,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)($.task.links,(s=>((0,t.wg)(),(0,t.iD)("a",{class:"styled_line_links__link",target:"_blank",key:s.path,href:s.path},(0,l.zw)(s.text),9,N)))),128))])])):(0,t.kq)("",!0)]),T]),(0,t._)("div",q,[(0,t._)("button",{class:"share_action",onClick:e[0]||(e[0]=(...s)=>$.share_task&&$.share_task(...s))},"Share"),H,$.store.is_teacher&&$.store.user&&$.task.class_id.split("/")[0]==$.store.user.email?((0,t.wg)(),(0,t.iD)("button",{key:0,class:"delete_action primary_styled",onClick:e[1]||(e[1]=s=>$.store.delete_task($.task))}," Delete ")):(0,t.kq)("",!0),(0,t._)("button",{class:"continue_action",onClick:e[2]||(e[2]=e=>s.$emit("close"))},"Close")])])}var $=a(1708),E=a(2745),I=a(8980),K={name:"ViewTaskView",emits:["close"],computed:{task(){let s=this.$route?.query?.task;return s=s?JSON.parse(s):{},s.links=s?.links?s.links.filter((s=>s.text&&s.path)):null,s},store(){return(0,I.h)()}},created(){this.task||(new $.OO("No task specified",1e3),this.$emit("close"))},methods:{async share_task(){navigator.share?navigator.share({title:this.task.name,text:this.task.description,url:window.location.href}).then((()=>new $.bF("Opened share dialog",1e3))).catch((s=>(0,E.E)("Error sharing",s))):navigator.clipboard?(navigator.clipboard.writeText(window.location.href),new $.OO("Sharing not supported, copied link to clipboard",2e3)):new $.PK("Sharing not supported",2e3)}}},M=a(89);const P=(0,M.Z)(K,[["render",V],["__scopeId","data-v-706664a0"]]);var F=P}}]);
//# sourceMappingURL=643.5cf3b904.js.map