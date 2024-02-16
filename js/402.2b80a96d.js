"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[402],{1147:function(e,t,s){s.d(t,{Z:function(){return p}});var o=s(3396),i=s(7139);const n=e=>((0,o.dD)("data-v-521703de"),e=e(),(0,o.Cn)(),e),a=["disabled"],l=n((()=>(0,o._)("span",{class:"loading_bg"},null,-1))),c=[l],_=n((()=>(0,o._)("div",{class:"toggle_switch_knob"},null,-1)));function r(e,t,s,n,l,r){return(0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)(["toggle_switch",{toggle_switch__on:l.is_on,transition:!s.loads}]),disabled:s.disabled,onClick:t[0]||(t[0]=(...e)=>r.toggle&&r.toggle(...e))},[s.loads?((0,o.wg)(),(0,o.iD)("div",{key:0,class:(0,i.C_)(["toggle_switch__loading",{is_loading:l.loading}])},c,2)):(0,o.kq)("",!0),_],10,a)}var d={name:"ToggleBar",props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loads:{type:Boolean,default:!1}},emits:["update"],data(){return{is_on:this.value,loading:!1}},watch:{value(){this.is_on=this.value,this.loading=!1}},methods:{toggle(){this.disabled||(this.loads?this.loading=!0:this.is_on=!this.is_on,this.$emit("update",!this.is_on))}}},u=s(89);const h=(0,u.Z)(d,[["render",r],["__scopeId","data-v-521703de"]]);var p=h},1402:function(e,t,s){s.r(t),s.d(t,{default:function(){return oe}});s(7658);var o=s(3396),i=s(7139),n=s(9242);const a=e=>((0,o.dD)("data-v-cbb3dfde"),e=e(),(0,o.Cn)(),e),l={class:"settings"},c=a((()=>(0,o._)("header",{class:"modal_header"},[(0,o._)("h2",{class:"header_style modal_header_title"},"Account Preferences")],-1))),_={class:"overlay_contents"},r={key:0,class:"overlay_contents_section"},d={class:"overlay_contents_text"},u={key:0,class:"overlay_contents_text"},h=a((()=>(0,o._)("br",null,null,-1))),p={class:"inputs_row linked_accounts_row"},k={class:"styled_input styled_links_box"},m={class:"styled_links_display"},g={key:0,class:"placeholder"},v={key:1,class:"styled_line_links"},y=["onClick"],w=a((()=>(0,o._)("div",{class:"remove_icon"},null,-1))),b=[w],f={class:"styled_line_links__email"},U=a((()=>(0,o._)("hr",{class:"styled_links_separator"},null,-1))),D=["disabled"],C=["disabled"],x={key:1,class:"overlay_contents_text overlay_contents_section"},A={key:0},T={key:1},z={class:"overlay_contents_text overlay_contents_section"},$={class:"notes_priority_section"},N={class:"overlay_contents_text overlay_contents_section"},Y={class:"pause_popup_section"},B={class:"pause_popup_section__details overlay_contents_section_details"},E={class:"overlay_contents_text overlay_contents_section"},P=a((()=>(0,o._)("div",{class:"theme_icon icon"},null,-1))),q={class:"overlay_contents_text overlay_contents_section"},R=a((()=>(0,o._)("div",{class:"stats_icon themed_icon icon"},null,-1))),W={class:"overlay_contents_text overlay_contents_section"},S={class:"tutorial_redo_section"},V={class:"simplified_view_section"},F={key:0},H={key:1},M={class:"overlay_contents_text overlay_contents_section"},O=a((()=>(0,o._)("p",{class:"email_text"}," You can find controls for your email preferences below. You're opted into all important emails by default. ",-1))),I={class:"email_sections"},Z={class:"email_section__details overlay_contents_section_details"},K={class:"bottom_actions"},L=a((()=>(0,o._)("div",{class:"flex_spacer"},null,-1))),G=["disabled"];function j(e,t,s,a,w,j){const J=(0,o.up)("ToggleBar");return(0,o.wg)(),(0,o.iD)("div",l,[c,(0,o._)("div",_,[j.store.is_teacher?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",d," You can link a personal (non-"+(0,i.zw)(this.store.ORG_DOMAIN.substring(1))+") account to access "+(0,i.zw)(e.$env.VUE_APP_BRAND_SHORT_NAME)+" when not signed into your school account below! ",1),j.store.personal_account?((0,o.wg)(),(0,o.iD)("div",u,[h,(0,o.Uk)(" You're currently signed in using a personal account. You can unlink it, or link more emails, through your main account. ")])):(0,o.kq)("",!0),(0,o._)("div",p,[(0,o._)("div",k,[(0,o._)("div",m,[j.store.linked_accounts&&j.store.linked_accounts.length?((0,o.wg)(),(0,o.iD)("div",v,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(j.store.linked_accounts,(e=>((0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)(["styled_line_links__account",{active:j.store.personal_account&&j.store.user.email==e}]),key:e},[j.store.personal_account?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",{key:0,class:"styled_line_links__remove",onClick:t=>j.uninvite_linked(e),title:"Remove Account"},b,8,y)),(0,o._)("div",f,(0,i.zw)(e),1)],2)))),128))])):((0,o.wg)(),(0,o.iD)("span",g,"No linked accounts, add one below"))]),U,(0,o._)("div",{class:(0,i.C_)(["styled_links_add",{links_personal:j.store.personal_account}])},[(0,o.wy)((0,o._)("input",{class:"styled_links_add__text",type:"email",onInput:t[0]||(t[0]=(...e)=>j.fix_email&&j.fix_email(...e)),onUpdate:t[1]||(t[1]=(...e)=>j.fix_email&&j.fix_email(...e)),"onUpdate:modelValue":t[2]||(t[2]=e=>w.new_email=e),placeholder:"Personal Email",disabled:j.store.personal_account||w.loading},null,40,D),[[n.nr,w.new_email]]),(0,o._)("button",{class:"styled_links_add__action",onClick:t[3]||(t[3]=(...e)=>j.invite_linked&&j.invite_linked(...e)),disabled:!j.ready_to_link},(0,i.zw)(j.store.personal_account?"UNAVALIABLE":"Add"),9,C)],2)])])])),j.store.personal_account?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",x,[(0,o.Uk)(" Click "),(0,o._)("span",{class:"button_pointer_text click-action",onClick:t[4]||(t[4]=e=>{j.store.toggle_teacher(),w.changed=!0})}," here "),(0,o.Uk)("  to "+(0,i.zw)(j.store.is_teacher?"disable":"enable")+" teacher mode ",1),j.store.is_teacher?((0,o.wg)(),(0,o.iD)("span",A,"and return to the student view.")):((0,o.wg)(),(0,o.iD)("span",T,"to create, and manage your own classes and tasks. This may require setup by an admin if you do not have a teacher email."))])),(0,o._)("div",z,[(0,o._)("div",$,[(0,o.Wm)(J,{class:"click-action",value:j.prioritize_notes,onUpdate:j.update_notes_priority,loads:!0},null,8,["value","onUpdate"]),(0,o.Uk)("   "),(0,o._)("span",null,[(0,o.Uk)("Notes priority set to "),(0,o._)("b",null,(0,i.zw)(j.prioritize_notes?"high":"low"),1)])])]),(0,o._)("div",N,[(0,o._)("div",Y,[(0,o.Wm)(J,{class:"click-action",value:j.show_timeout,onUpdate:j.update_timeout_option,loads:!0},null,8,["value","onUpdate"]),(0,o.Uk)("   "),(0,o._)("span",null,[(0,o.Uk)("Session timeout popup "),(0,o._)("b",null,(0,i.zw)(j.show_timeout?"enabled":"disabled"),1)])]),(0,o._)("div",B," The popup helps conserve local and network resources. To have "+(0,i.zw)(e.$env.VUE_APP_BRAND_SHORT_NAME)+" open on the side without it getting in the way, you can toggle it above, though you may then have to reload to get the newest data ",1)]),(0,o._)("div",E,[(0,o.Uk)(" To change your theme, use the "),(0,o._)("span",{id:"theme_pointer_button",class:"button_pointer_text button_pointer_icon click-action",onClick:t[5]||(t[5]=e=>j.store.toggle_theme())},[P,(0,o.Uk)(" Switch Theme ")]),(0,o.Uk)(" button on the left sidebar or homepage ")]),(0,o._)("div",q,[(0,o.Uk)(" To see how you've been feeling, "),(0,o._)("span",{id:"stats_pointer_button",class:"button_pointer_text button_pointer_icon click-action",onClick:t[6]||(t[6]=t=>e.$router.push({name:"stats",query:e.$route.query}))},[R,(0,o.Uk)(" View your stats ")]),(0,o.Uk)(" and get an insight into your mental health and productivity ")]),(0,o._)("div",W,[(0,o._)("span",S,[(0,o.Uk)(" Feeling lost? Try "),(0,o._)("span",{class:"button_pointer_text click-action",onClick:t[7]||(t[7]=t=>{w.changed=!0,j.store.finish_tutorial(!1).then((()=>{e.$emit("close")}))})}," redoing the tutorial "),(0,o.Uk)(". We'll keep this updated as we add new features! ")]),(0,o._)("span",V,[(0,o.Uk)(" You can also "),(0,o._)("span",{class:"button_pointer_text click-action",onClick:t[8]||(t[8]=e=>{w.changed=!0,j.store.set_account_pref("simplified",!j.store.simplified)})},(0,i.zw)(j.store.simplified?"leave":"enter")+" simplified view ",1),(0,o.Uk)(" to "),j.store.simplified?((0,o.wg)(),(0,o.iD)("span",H,"get back the classic interface")):((0,o.wg)(),(0,o.iD)("span",F,"make "+(0,i.zw)(e.$env.VUE_APP_BRAND_SHORT_NAME)+" easier to use on slower devices",1)),(0,o.Uk)(". ")])]),(0,o._)("div",M,[O,(0,o._)("div",I,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(w.email_categories,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"email_section",key:e.sort_as},[(0,o.Wm)(J,{class:"click-action",value:!j.unsubed_from[e.sort_as],disabled:e.locked,onUpdate:t=>j.update_email_pref(e.key,e.description),loads:!0},null,8,["value","disabled","onUpdate"]),(0,o.Uk)("   "),(0,o._)("span",null,(0,i.zw)(e.label),1)])))),128))]),(0,o._)("div",Z," We'll try to send you as few emails as possible, but some notifications are essential to the operation of "+(0,i.zw)(e.$env.VUE_APP_BRAND_SHORT_NAME)+", such as those for account linkage and important account changes. Note that linked accounts may also inherit some of your email preferences from their student account. ",1)])]),(0,o._)("div",K,[j.store.personal_account?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:0,class:"back_action click_escape",onClick:t[9]||(t[9]=t=>e.$emit("close"))},(0,i.zw)(w.changed||w.loading?"Cancel":"Close"),1)),L,(0,o._)("button",{class:(0,i.C_)(["continue_action click_ctrlenter",{loading_bg:w.loading}]),disabled:!j.store.personal_account&&!w.changed&&!j.store.is_teacher,onClick:t[10]||(t[10]=t=>{j.store.personal_account||j.store.is_teacher?e.$emit("close"):j.save()})},(0,i.zw)(w.changed?"Finish":j.store.personal_account?"Close":j.store.is_teacher?"Done":"Finish"),11,G)])])}var J=s(8980),Q=s(1147),X=s(1708),ee={name:"SettingsModal",emits:["close"],components:{ToggleBar:Q.Z},data(){return{changed:!1,loading:!1,new_email:"",email_categories:[{key:"task-created",label:"Task creation notifications",description:"emails about newly created tasks",sort_as:"task-created"},{key:"task-updated",label:"Task update notifications",description:"emails about changed tasks",sort_as:"task-updated"},{key:"task-moved",label:"Task date change notifications",description:"emails when tasks are moved",sort_as:"task-moved"},{key:"task-archived",label:"Task deletion notifications",description:"emails about removed tasks",sort_as:"task-archived"},{key:"scheduled-weekly",label:"Weekly summary emails",description:"weekly summary emails",sort_as:"scheduled-weekly"},{key:null,label:"Essential emails (required)",description:"essential emails about your account",locked:!0,sort_as:"essential"}]}},computed:{store(){return(0,J.h)()},show_timeout(){return!this.store?.account_doc?.prefs?.hide_timeout},prioritize_notes(){return!this.store?.account_doc?.prefs?.derank_notes},ready_to_link(){return!this.loading&&this.new_email&&this.new_email.includes("@")&&this.new_email.split("@")[1].includes(".")},unsubed_from(){return this.email_categories.reduce(((e,t)=>(e[t.key]=this.store.account_doc?.prefs?.unsub_from?.[t.key]||!1,e)),{})}},methods:{update_timeout_option(e){if(this.store.account_doc){let t=!this.store.account_doc?.prefs?.hide_timeout;t!=e&&this.store.update_wrapper_with_merge({prefs:{...this.store.account_doc.prefs,hide_timeout:!e}}).then((()=>{this.changed=!0,new X.bF(e?"We'll show the popup when your session times out":"You won't see the timeout popup anymore",2e3)}))}},update_notes_priority(e){if(this.store.account_doc){let t=!this.store.account_doc?.prefs?.derank_notes;t!=e&&this.store.update_wrapper_with_merge({prefs:{...this.store.account_doc.prefs,derank_notes:!e}}).then((()=>{this.changed=!0,new X.bF(e?"We'll show notes above other items on your claendar":"You won't see notes above other items anymore",2e3)}))}},update_email_pref(e,t){if(this.store.account_doc){const s=this.store.account_doc?.prefs?.unsub_from||{},o=!s[e],i={...s,[e]:!s[e]};this.store.update_wrapper_with_merge({prefs:{...this.store.account_doc.prefs,unsub_from:i}}).then((()=>{this.changed=!0,new X.bF(o?`You'll no longer get ${t}`:`You'll now get ${t}`,2e3)})).catch((e=>{this.changed=!1,new X.PK(o?`We couldn't unsubscribe you from ${t}`:`We couldn't subscribe you to ${t}`,e,2e3)}))}},save(){this.loading||this.$emit("close")},invite_linked(){this.store.personal_account||(this.changed=!0,this.loading=!0,this.store.invite_linked(this.new_email).then((()=>{this.loading=!1,this.new_email=""})).catch((()=>{this.loading=!1,this.changed=!1})))},uninvite_linked(e){this.changed=!0,this.loading=!0,this.store.uninvite_linked(e).then((()=>{this.loading=!1})).catch((()=>{this.loading=!1,this.changed=!1}))},fix_email(){if(this.new_email.includes("@")){let[e,t]=this.new_email.split("@");e.includes("+")&&(e=e.split("+")[0],this.new_email=`${e}@${t}`)}}}},te=s(89);const se=(0,te.Z)(ee,[["render",j],["__scopeId","data-v-cbb3dfde"]]);var oe=se}}]);
//# sourceMappingURL=402.2b80a96d.js.map