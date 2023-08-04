"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[340],{8747:function(t,e,n){n.r(e),n.d(e,{default:function(){return q}});var o=n(3396);function s(t,e,n,s,a,i){const c=(0,o.up)("ModalFromPages");return(0,o.wg)(),(0,o.j4)(c,{pages:a.pages,onFinish:i.finish,onSkip:e[0]||(e[0]=e=>t.$emit("close")),ref:"survey_modal"},null,8,["pages","onFinish"])}var a=n(8980),i=n(4870),c=n(1708),l=n(8588);const r=t=>((0,o.dD)("data-v-6bc5ccc2"),t=t(),(0,o.Cn)(),t),d={class:"personal_prompt"},u=r((()=>(0,o._)("div",{class:"overlay_contents_text"}," If you're signed into an mvla.net account, you should have been signed out automatically ",-1))),_={class:"inputs_row"},h=["disabled"],m=r((()=>(0,o._)("div",{class:"overlay_contents_text"},"Please sign into your personal account to continue",-1)));function p(t,e,n,s,a,i){return(0,o.wg)(),(0,o.iD)("div",d,[u,(0,o._)("div",_,[(0,o._)("button",{class:"primary_styled styled_input",onClick:e[0]||(e[0]=(...t)=>i.sign_into_personal&&i.sign_into_personal(...t)),disabled:a.ready}," Login to Personal Account ",8,h)]),m])}var g={name:"SignIntoPersonalAccount",emits:["skip","update","status"],data(){return{ready:!1}},methods:{logout_if_org(){this.store?.user?.email?.includes("mvla.net")&&this.store.logout()},check_and_emit(){this.store?.linked_account_doc?.linked_to&&this.$route?.params?.code&&this.store.linked_account_doc.linked_to==this.$route.params.code?(new c.OO("These two accounts are already linked!",2e3),this.$emit("skip")):(this.ready=this.store.user?.email&&!this.store.user.email.includes("mvla.net"),this.$emit("status",!!this.ready))},sign_into_personal(){this.store.personal_account=!0,this.store.login_personal().then((()=>{this.logout_if_org(),this.check_and_emit()})).catch((()=>{this.check_and_emit()}))}},computed:{store(){return(0,a.h)()}},mounted(){this.logout_if_org(),this.check_and_emit()},watch:{store:{handler(){this.logout_if_org(),this.check_and_emit()},deep:!0}}},y=n(89);const v=(0,y.Z)(g,[["render",p],["__scopeId","data-v-6bc5ccc2"]]);var k=v,f=n(7139);const w=t=>((0,o.dD)("data-v-5f1c6736"),t=t(),(0,o.Cn)(),t),b={class:"account_linking"},x={key:0,alt:"Loading...",class:"loading_placeholder loading_icon"},L={key:1,class:"account_details"},P=w((()=>(0,o._)("div",{class:"overlay_contents_text"}," Please confirm that the details below match the account you're trying to link to. ",-1))),$={class:"spaced_contents"},C={class:"styled_obj"},O=w((()=>(0,o._)("span",{class:"styled_line__label"},"Name:",-1))),j=w((()=>(0,o._)("span",{class:"styled_line__separator"},null,-1))),A={class:"styled_line__value"},D={class:"styled_obj"},S=w((()=>(0,o._)("span",{class:"styled_line__label"},"Email:",-1))),I=w((()=>(0,o._)("span",{class:"styled_line__separator"},null,-1))),T={class:"styled_line__value"},F={class:"styled_obj"},Z=w((()=>(0,o._)("span",{class:"styled_line__label"},"Grade:",-1))),z=w((()=>(0,o._)("span",{class:"styled_line__separator"},null,-1))),M={class:"styled_line__value"},N=w((()=>(0,o._)("div",{class:"overlay_contents_text"},[(0,o.Uk)(" Once you've checked them, just press "),(0,o._)("span",{class:"button_pointer_text"},"Link"),(0,o.Uk)(" to finish connecting your accounts! ")],-1))),U={key:2,class:"overlay_contents_text"};function X(t,e,n,s,a,i){return(0,o.wg)(),(0,o.iD)("div",b,[a.loading?((0,o.wg)(),(0,o.iD)("img",x)):a.data?((0,o.wg)(),(0,o.iD)("div",L,[P,(0,o._)("div",$,[(0,o._)("div",C,[O,j,(0,o._)("span",A,(0,f.zw)(a.data.name||"Couldn't Load"),1)]),(0,o._)("div",D,[S,I,(0,o._)("span",T,(0,f.zw)(a.data.email||"Couldn't Load"),1)]),(0,o._)("div",F,[Z,z,(0,o._)("span",M,(0,f.zw)(i.gradeText(a.data.join_form&&a.data.join_form.grade)||"Couldn't Load"),1)])]),N])):((0,o.wg)(),(0,o.iD)("div",U," Something went wrong fetching the account details, please try again later. "))])}var Y={name:"LinkAccount",emits:["update","status"],props:{load:{type:Object,default:()=>({})}},data(){return{loading:!0,code:null,data:null}},computed:{store(){return(0,a.h)()}},methods:{gradeText(t){switch(t){case"9":return"Freshman";case"10":return"Sophomore";case"11":return"Junior";case"12":return"Senior";default:return"Teacher"}}},mounted(){this.code=this.$route.params.code,this.store.doc_from_uid(this.code).then((t=>{this.loading=!1,this.data=t,console.log(t)})).catch((t=>{this.loading=!1,new c.PK("Failed to link account",t,3e3)}))},watch:{loading(){this.$emit("status",!this.loading)}}};const E=(0,y.Z)(Y,[["render",X],["__scopeId","data-v-5f1c6736"]]);var G=E,J={name:"LinkModal",emits:["close"],components:{ModalFromPages:l.Z,SignIntoPersonalAccount:k,LinkAccount:G},data(){return{ready:!1,pages:[{title:"Link Personal Account",html:"<div class='overlay_contents_text'>Thank you for taking the time to link your account. This will allow you to access your account from any device.<br/><br/> You'll need to be signed into your personal account in order to continue, we'll guide you through that on the next page.</div>",submit_text:"Okay",is_notification:!0},{title:"Sign into Personal Account",content:(0,i.XI)(k),submit_text:"Continue"},{title:"Account Details",content:(0,i.XI)(G),submit_text:"Link"}]}},props:{code:{type:String,default:""}},computed:{store(){return(0,a.h)()}},mounted(){this.code?this.ready=!0:(new c.OO("No code provided!","You must provide a code to link your account."),this.$emit("close")),this.store.personal_account=!0,this.store?.linked_account_doc?.linked_to&&this.store.linked_account_doc.linked_to==this.code&&(this.$emit("close"),new c.OO("These two accounts are already linked!",2e3))},methods:{finish(){this.store.link_account_uid(this.code).then((()=>{this.$emit("close")}))}}};const K=(0,y.Z)(J,[["render",s]]);var q=K}}]);
//# sourceMappingURL=340.a1393344.js.map