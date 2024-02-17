"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[620],{7072:function(t,e,n){n.d(e,{Z:function(){return _}});var s=n(3396);function o(t,e,n,o,a,i){const r=(0,s.up)("Modal");return(0,s.wg)(),(0,s.j4)(r,{ref:"modal",title:i.page.title,content:i.page.content,html:i.page.content?null:i.page.html,is_notification:i.page.is_notification,submit_text:i.page.submit_text,progress:{current:a.page_index+1,total:n.pages.length},show_progress:!0,can_continue:i.can_continue,continue_action:i.next_page,load:i.load_data,skippable:n.skippable,onOpen:i.switch_to,onUpdate:e[0]||(e[0]=t=>a.curr_data=t),onStatus:e[1]||(e[1]=t=>a.curr_done=t),onSkip:e[2]||(e[2]=e=>t.$emit("skip"))},null,8,["title","content","html","is_notification","submit_text","progress","can_continue","continue_action","load","skippable","onOpen"])}var a=n(4884),i=n(9403);function r(){return"You haven't finished the task yet, and might lose progress. Are you sure you want to close the tab?"}var c={name:"ModalFromPages",emits:["finish","skip"],components:{Modal:a.Z},props:{pages:{type:Array,required:!0},skippable:{type:Boolean,default:!1,required:!1}},data(){return{page_index:0,responses:[],curr_data:null,curr_done:!1,page_start:Date.now(),shortcuts:[{key:"ArrowLeft",description:"Go to the previous modal page"},{key:"ArrowRight",description:"Go to the next modal page"}]}},computed:{load_data(){return this.set_done(),this.responses[this.page_index]?.data||{}},page(){return 0==this.pages.length?{title:"No pages provided",content:null,html:null,is_notification:!0,submit_text:"Oops!"}:this.pages[this.page_index]},can_continue(){return!this.page.content||this.page.is_notification||this.curr_done}},mounted(){window.addEventListener("keydown",this.arrow),(0,i.X)().register_all(this.shortcuts,"Modal")},beforeUnmount(){window.removeEventListener("keydown",this.arrow),(0,i.X)().remove_tag("Modal")},methods:{set_done(){this.curr_done=this.responses[this.page_index]?.done||!1},arrow(t){"ArrowLeft"==t.key?this.switch_to(this.page_index-1):"ArrowRight"==t.key&&this.switch_to(this.page_index+1)},switch_to(t){t<=this.page_index||Object.prototype.hasOwnProperty.call(this.responses,Math.max(t-1,0))?this.page_index=t:this.$status.log(`⏵ ModalFromPages: page index ${t} invalid`)},next_page(){this.responses[this.page_index]={data:this.curr_data,done:this.curr_done||!this.page.content||this.page.is_notification,time:{start:this.page_start,duration:Date.now()-this.page_start}},this.can_continue&&this.page_index<this.pages.length-1?(0==this.page_index&&(window.onbeforeunload=r),this.page_index++):this.can_continue&&this.$emit("finish",this.responses)}},watch:{page_index(){this.page_start=Date.now(),this.curr_data=this.load_data,this.set_done()}}},d=n(89);const l=(0,d.Z)(c,[["render",o]]);var _=l},5620:function(t,e,n){n.r(e),n.d(e,{default:function(){return B}});var s=n(3396);function o(t,e,n,o,a,i){const r=(0,s.up)("ModalFromPages");return(0,s.wg)(),(0,s.j4)(r,{pages:a.pages,onFinish:i.finish,onSkip:e[0]||(e[0]=e=>t.$emit("close")),ref:"survey_modal"},null,8,["pages","onFinish"])}var a=n(8980),i=n(4870),r=n(1708),c=n(7072),d=n(7139);const l=t=>((0,s.dD)("data-v-bc2b4226"),t=t(),(0,s.Cn)(),t),_={class:"personal_prompt"},u={class:"overlay_contents_text"},h={class:"inputs_row"},p=["disabled"],g=l((()=>(0,s._)("div",{class:"overlay_contents_text"},"Please sign into your personal account to continue",-1)));function m(t,e,n,o,a,i){return(0,s.wg)(),(0,s.iD)("div",_,[(0,s._)("div",u," If you're signed into an "+(0,d.zw)(i.store.ORG_DOMAIN.substring(1))+" account, you should have been signed out automatically ",1),(0,s._)("div",h,[(0,s._)("button",{class:"primary_styled styled_input",onClick:e[0]||(e[0]=(...t)=>i.sign_into_personal&&i.sign_into_personal(...t)),disabled:a.ready}," Login to Personal Account ",8,p)]),g])}var y={name:"SignIntoPersonalAccount",emits:["skip","update","status"],data(){return{ready:!1}},methods:{logout_if_org(){this.store?.user?.email?.includes(this.store.ORG_DOMAIN)&&this.store.logout()},check_and_emit(){this.store?.linked_account_doc?.linked_to&&this.$route?.params?.code&&this.store.linked_account_doc.linked_to==this.$route.params.code?(new r.OO("These two accounts are already linked!",2e3),this.$emit("skip")):(this.ready=this.store.user?.email&&!this.store.user.email.includes(this.store.ORG_DOMAIN),this.$emit("status",!!this.ready))},sign_into_personal(){this.store.personal_account=!0,this.store.login_personal().then((()=>{this.logout_if_org(),this.check_and_emit()})).catch((()=>{this.check_and_emit()}))}},computed:{store(){return(0,a.h)()}},mounted(){this.logout_if_org(),this.check_and_emit()},watch:{store:{handler(){this.logout_if_org(),this.check_and_emit()},deep:!0}}},k=n(89);const v=(0,k.Z)(y,[["render",m],["__scopeId","data-v-bc2b4226"]]);var w=v;const f=t=>((0,s.dD)("data-v-1c042e43"),t=t(),(0,s.Cn)(),t),b={class:"account_linking"},x={key:0,alt:"Loading...",class:"loading_placeholder loading_icon"},O={key:1,class:"account_details"},A=f((()=>(0,s._)("div",{class:"overlay_contents_text"}," Please confirm that the details below match the account you're trying to link to. ",-1))),L={class:"spaced_contents"},D={class:"styled_obj"},$=f((()=>(0,s._)("span",{class:"styled_line__label"},"Name:",-1))),M=f((()=>(0,s._)("span",{class:"styled_line__separator"},null,-1))),P={class:"styled_line__value"},j={class:"styled_obj"},I=f((()=>(0,s._)("span",{class:"styled_line__label"},"Email:",-1))),S=f((()=>(0,s._)("span",{class:"styled_line__separator"},null,-1))),C={class:"styled_line__value"},F={class:"styled_obj"},T=f((()=>(0,s._)("span",{class:"styled_line__label"},"Grade:",-1))),Z=f((()=>(0,s._)("span",{class:"styled_line__separator"},null,-1))),G={class:"styled_line__value"},N=f((()=>(0,s._)("div",{class:"overlay_contents_text"},[(0,s.Uk)(" Once you've checked them, just press "),(0,s._)("span",{class:"button_pointer_text"},"Link"),(0,s.Uk)(" to finish connecting your accounts! ")],-1))),R={key:2,class:"overlay_contents_text"};function z(t,e,n,o,a,i){return(0,s.wg)(),(0,s.iD)("div",b,[a.loading?((0,s.wg)(),(0,s.iD)("img",x)):a.data?((0,s.wg)(),(0,s.iD)("div",O,[A,(0,s._)("div",L,[(0,s._)("div",D,[$,M,(0,s._)("span",P,(0,d.zw)(a.data.name||"Couldn't Load"),1)]),(0,s._)("div",j,[I,S,(0,s._)("span",C,(0,d.zw)(a.data.email||"Couldn't Load"),1)]),(0,s._)("div",F,[T,Z,(0,s._)("span",G,(0,d.zw)(i.gradeText(a.data.join_form&&a.data.join_form.grade)||"Couldn't Load"),1)])]),N])):((0,s.wg)(),(0,s.iD)("div",R," Something went wrong fetching the account details, please try again later. "))])}var U={name:"LinkAccount",emits:["update","status"],props:{load:{type:Object,default:()=>({})}},data(){return{loading:!0,code:null,data:null}},computed:{store(){return(0,a.h)()}},methods:{gradeText(t){switch(t){case"9":return"Freshman";case"10":return"Sophomore";case"11":return"Junior";case"12":return"Senior";default:return"Teacher"}}},mounted(){this.code=this.$route.params.code,this.store.doc_from_uid(this.code).then((t=>{this.loading=!1,this.data=t})).catch((t=>{this.loading=!1,new r.PK("Failed to link account",t,3e3)}))},watch:{loading(){this.$emit("status",!this.loading)}}};const X=(0,k.Z)(U,[["render",z],["__scopeId","data-v-1c042e43"]]);var E=X,Y={name:"LinkModal",emits:["close"],components:{ModalFromPages:c.Z,SignIntoPersonalAccount:w,LinkAccount:E},data(){return{ready:!1,pages:[{title:"Link Personal Account",html:"<div class='overlay_contents_text'>Thank you for taking the time to link your account. This will allow you to access your account from any device.<br/><br/> You'll need to be signed into your personal account in order to continue, we'll guide you through that on the next page.</div>",submit_text:"Okay",is_notification:!0},{title:"Sign into Personal Account",content:(0,i.XI)(w),submit_text:"Continue"},{title:"Account Details",content:(0,i.XI)(E),submit_text:"Link"}]}},props:{code:{type:String,default:""}},computed:{store(){return(0,a.h)()}},mounted(){this.code?this.ready=!0:(new r.OO("No code provided!","You must provide a code to link your account."),this.$emit("close")),this.store.personal_account=!0,this.store?.linked_account_doc?.linked_to&&this.store.linked_account_doc.linked_to==this.code&&(this.$emit("close"),new r.OO("These two accounts are already linked!",2e3))},methods:{finish(){this.store.link_account_uid(this.code).then((()=>{this.$emit("close")}))}}};const q=(0,k.Z)(Y,[["render",o]]);var B=q}}]);
//# sourceMappingURL=620.5618d55b.js.map