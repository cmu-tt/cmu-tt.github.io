"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[706],{7706:function(e,s,a){a.r(s),a.d(s,{default:function(){return X}});var t=a(6768),i=a(4232);const n=e=>((0,t.Qi)("data-v-6c50948d"),e=e(),(0,t.jt)(),e),c=["page"],g={key:0,class:"msg_choose"},o=["onClick"],_={key:1,class:"msg_page_wrapper"},p={key:0,class:"msg_page_info admin_in",style:{animationDelay:"0.1s"}},m=n((()=>(0,t.Lk)("div",{class:"msg_page__back__icon themed_icon"},null,-1))),l=[m],r={class:"msg_page_info__text"},u=n((()=>(0,t.Lk)("hr",{class:"msg_page_wrapper__separator admin_in",style:{animationDelay:3*.05+"s"}},null,-1))),d={class:"msg_page_container admin_in",style:{animationDelay:"0.2s"}},v={key:0,class:"msg_page msg__view"},h={key:1,class:"msg_page msg__send"},k={key:2,class:"msg_page msg__templates"};function y(e,s,a,n,m,y){return(0,t.uX)(),(0,t.CE)("div",{class:"messagesalerts",page:m.page},["choose"==m.page?((0,t.uX)(),(0,t.CE)("div",g,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(m.choices,((e,s,a)=>((0,t.uX)(),(0,t.CE)("div",{class:(0,i.C4)(`msg_choose_page msg_choose__${s} admin_in`),key:s,onClick:e=>m.page=s,style:(0,i.Tr)({animationDelay:.05*(a+2)+"s"})},(0,i.v_)(e.name),15,o)))),128))])):((0,t.uX)(),(0,t.CE)("div",_,["choose"!=m.page?((0,t.uX)(),(0,t.CE)("div",p,[(0,t.Lk)("button",{class:"msg_page__back",onClick:s[0]||(s[0]=e=>m.page="choose")},l),(0,t.Lk)("div",r,(0,i.v_)(m.choices[m.page].active),1)])):(0,t.Q3)("",!0),u,(0,t.Lk)("div",d,["view"==m.page?((0,t.uX)(),(0,t.CE)("div",v)):"send"==m.page?((0,t.uX)(),(0,t.CE)("div",h)):"templates"==m.page?((0,t.uX)(),(0,t.CE)("div",k)):(0,t.Q3)("",!0)])]))],8,c)}a(4114);var C={name:"MessagesAlerts",data(){return{page:"choose",choices:{view:{name:"View Sent",active:"Sent Messages"},send:{name:"Send New",active:"Create Message"},templates:{name:"Templates",active:"Message Templates"}}}},mounted(){this.$route?.query?.action&&(this.page=this.$route.query.action)},watch:{page(){this.$router.push({query:{...this.$route.query,action:"choose"==this.page?void 0:this.page}})}}},w=a(1241);const E=(0,w.A)(C,[["render",y],["__scopeId","data-v-6c50948d"]]);var X=E}}]);
//# sourceMappingURL=706.889c2fed.js.map