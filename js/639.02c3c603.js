"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[639],{1639:function(e,t,a){a.r(t),a.d(t,{default:function(){return pt}});a(7658);var s=a(3396),n=a(7139);const o={class:"portal"},i={class:"portal_content__spaced"},l={class:"portal_info"},c={class:"portal_info_title"},r={class:"portal_info_usertype"},_={class:"portal_info_date"},d={class:"portal_info_welcome"},h={key:0,class:"overlay_center_view"};function m(e,t,a,m,u,p){const g=(0,s.up)("LeftBar"),k=(0,s.up)("CalendarBlock"),v=(0,s.up)("RightBar"),w=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("main",o,[(0,s.Wm)(g,{ref:"LeftBar",onClose_right_bar:p.close_right_bar},null,8,["onClose_right_bar"]),(0,s._)("div",{class:"portal_content",onClick:t[1]||(t[1]=e=>{p.close_right_bar(),p.close_left_bar()})},[(0,s._)("div",i,[(0,s._)("header",l,[(0,s._)("div",c,[(0,s._)("span",r,(0,n.zw)(p.store.is_teacher?"Teacher":"Student")+" Dashboard",1),(0,s._)("span",_,(0,n.zw)((new Date).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),1)]),(0,s._)("div",d,"Welcome Back "+(0,n.zw)(p.name),1)]),(0,s.Wm)(k,{onTaskclick:t[0]||(t[0]=e=>p.show_task(e))})])]),(0,s.Wm)(v,{ref:"RightBar",onClose_left_bar:p.close_left_bar},null,8,["onClose_left_bar"]),"portal"!==e.$route.name?((0,s.wg)(),(0,s.iD)("div",h,[(0,s._)("div",{class:"overlay_close",onClick:t[2]||(t[2]=t=>e.$router.push("/portal"))}),(0,s.Wm)(w,{class:"router_center_view"})])):(0,s.kq)("",!0)])}const u=e=>((0,s.dD)("data-v-2655fe56"),e=e(),(0,s.Cn)(),e),p={class:"sidebar_overflow"},g=u((()=>(0,s._)("div",{class:"branding-title gohome"},"MV Test Tracker",-1))),k=u((()=>(0,s._)("div",{class:"flex-spacer"},null,-1))),v=u((()=>(0,s._)("div",{class:"flex-spacer"},null,-1))),w=["_theme"],b=u((()=>(0,s._)("div",{class:"theme_icon"},null,-1))),f=u((()=>(0,s._)("div",{class:"toggle_text"},"Switch Theme",-1))),y=[b,f];function D(e,t,a,o,i,l){const c=(0,s.up)("ActionsPanel"),r=(0,s.up)("ClassList"),_=(0,s.up)("SidebarToggle");return(0,s.wg)(),(0,s.iD)("div",{class:(0,n.C_)(["left-bar portal_sidebar",{active:i.sidebar_open}]),onClick:t[1]||(t[1]=(...e)=>l.show_if_inactive&&l.show_if_inactive(...e))},[(0,s._)("div",p,[g,k,l.store&&l.store.is_teacher?((0,s.wg)(),(0,s.j4)(c,{key:0})):(0,s.kq)("",!0),(0,s.Wm)(r),v]),(0,s._)("button",{_theme:l.store.theme,class:"theme_button click-action",title:"Switch Theme",onClick:t[0]||(t[0]=(...e)=>l.store.toggle_theme&&l.store.toggle_theme(...e))},y,8,w),(0,s.Wm)(_,{class:"right",onClick:l.close_sidebar},null,8,["onClick"])],2)}const C=e=>((0,s.dD)("data-v-2e4cb15c"),e=e(),(0,s.Cn)(),e),S={class:"sidebar_toggle click-action",title:"Close Sidebar"},T=C((()=>(0,s._)("div",{class:"arrow-icon"},null,-1))),L=[T];function x(e,t,a,n,o,i){return(0,s.wg)(),(0,s.iD)("button",S,L)}var z={name:"SidebarToggle"},B=a(89);const M=(0,B.Z)(z,[["render",x],["__scopeId","data-v-2e4cb15c"]]);var $=M;const U=e=>((0,s.dD)("data-v-aff862be"),e=e(),(0,s.Cn)(),e),j={class:"class_list"},W={class:"class_list__not_empty"},Y=U((()=>(0,s._)("h5",null,"Classes",-1))),Z=U((()=>(0,s._)("hr",{class:"class_list_hr"},null,-1))),q={class:"classes_container"},E=["onClick"],I=U((()=>(0,s._)("div",{class:"class_swatch__icon"},null,-1))),N=[I],R={class:"class_name"},A=U((()=>(0,s._)("div",{class:"class_swatch"},[(0,s._)("div",{class:"class_swatch__add_icon"})],-1))),P=U((()=>(0,s._)("span",{class:"class_name"},"Join a Class",-1))),H=[A,P];function K(e,t,a,o,i,l){return(0,s.wg)(),(0,s.iD)("div",j,[(0,s._)("div",W,[Y,Z,(0,s._)("div",q,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.classes,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"classes_container_class",key:e.name},[(0,s._)("div",{class:"class_swatch",style:(0,n.j5)({"--color-class":e.color}),title:"Remove Class",onClick:t=>l.store.remove_class(e.id)},N,12,E),(0,s._)("span",R,(0,n.zw)(e.name),1)])))),128)),l.store.is_teacher?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",{key:0,class:"classes_container_class classes_container_class__add_class",onClick:t[0]||(t[0]=t=>e.$router.push("/portal/add"))},H))])])])}var F=a(8980),O={name:"ClassList",computed:{store(){return(0,F.h)()},classes(){return this.store.classes}}};const J=(0,B.Z)(O,[["render",K],["__scopeId","data-v-aff862be"]]);var V=J;const G={class:"teacher_actions"},Q=["onClick"],X=(0,s._)("div",{class:"teacher_action__icon icon__add"},null,-1),ee={class:"teacher_action__text"},te=(0,s._)("div",{class:"teacher_action__icon icon__create"},null,-1),ae=(0,s._)("div",{class:"teacher_action__text"},"Create a Class",-1),se=[te,ae];function ne(e,t,a,o,i,l){return(0,s.wg)(),(0,s.iD)("div",G,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.test_types,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t[0],class:"teacher_action",onClick:a=>e.$router.push({name:"newtask",params:{tasktype:t[0]}})},[X,(0,s._)("div",ee,"Schedule a "+(0,n.zw)(t[1]),1)],8,Q)))),128)),(0,s._)("div",{class:"teacher_action",onClick:t[0]||(t[0]=t=>e.$router.push("/portal/create"))},se)])}var oe={data(){return{test_types:[["socratic","Socratic Seminar"],["test","Test"],["summative","Summative Assignment"],["midterm","Midterm"],["project","Project"]]}}};const ie=(0,B.Z)(oe,[["render",ne]]);var le=ie,ce=a(1708),re={name:"LeftBar",components:{SidebarToggle:$,ClassList:V,ActionsPanel:le},emits:["close_right_bar"],data(){return{sidebar_open:!1}},computed:{store(){return(0,F.h)()}},mounted(){window.addEventListener("resize",this.close_sidebar)},unmounted(){window.removeEventListener("resize",this.close_sidebar)},methods:{placeholderToast:ce.gy,show_if_inactive(){this.sidebar_open||(this.sidebar_open=!0),this.$emit("close_right_bar")},close_sidebar(){this.sidebar_open&&setTimeout((()=>this.sidebar_open=!1),10)}}};const _e=(0,B.Z)(re,[["render",D],["__scopeId","data-v-2655fe56"]]);var de=_e;const he=e=>((0,s.dD)("data-v-39180bc3"),e=e(),(0,s.Cn)(),e),me={class:"sidebar_overflow"},ue=he((()=>(0,s._)("div",{class:"auth-action can-logout doprompt"},"Log Out",-1))),pe=he((()=>(0,s._)("div",{class:"flex-spacer"},null,-1))),ge=he((()=>(0,s._)("div",{class:"flex-spacer"},null,-1))),ke=he((()=>(0,s._)("div",{class:"info_icon"},null,-1))),ve=[ke];function we(e,t,a,o,i,l){const c=(0,s.up)("UpcomingTests"),r=(0,s.up)("SidebarToggle");return(0,s.wg)(),(0,s.iD)("div",{class:(0,n.C_)(["right-bar portal_sidebar",{active:i.sidebar_open}]),onClick:t[1]||(t[1]=(...e)=>l.show_if_inactive&&l.show_if_inactive(...e))},[(0,s._)("div",me,[ue,pe,(0,s.Wm)(c),ge]),(0,s._)("button",{class:"info_button click-action",title:"About MV Test Tracker",onClick:t[0]||(t[0]=t=>e.$router.push("/about"))},ve),(0,s.Wm)(r,{onClick:l.close_sidebar},null,8,["onClick"])],2)}const be=e=>((0,s.dD)("data-v-274db7e8"),e=e(),(0,s.Cn)(),e),fe={class:"upcoming_tasks"},ye={key:0,class:"upcoming_tasks__not_empty"},De=be((()=>(0,s._)("h5",null,"Upcoming Tasks",-1))),Ce=be((()=>(0,s._)("hr",{class:"upcoming_tasks_hr"},null,-1))),Se={class:"tasks_container"},Te={key:1,class:"upcoming_tasks__empty"},Le=be((()=>(0,s._)("h5",null,"No Upcoming Tasks!",-1))),xe=[Le];function ze(e,t,a,n,o,i){const l=(0,s.up)("ExamCard");return(0,s.wg)(),(0,s.iD)("div",fe,[i.tasks&&i.tasks.length?((0,s.wg)(),(0,s.iD)("div",ye,[De,Ce,(0,s._)("div",Se,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.tasks,(e=>((0,s.wg)(),(0,s.j4)(l,{class:"tasks_container_task",task:e,key:e.name,onClick:t=>i.show_task(e)},null,8,["task","onClick"])))),128))])])):((0,s.wg)(),(0,s.iD)("div",Te,xe))])}const Be=(0,s._)("div",{class:"task_card_icon"},[(0,s._)("div",{class:"task_card_icon_container"},[(0,s._)("div",{class:"task_card_icon_container__img"})])],-1),Me={class:"task_card_details"},$e={class:"task_card_details__title"},Ue={class:"task_card_details__extended"},je={class:"task_card_details__extended__date"},We={class:"task_card_details__extended__type"};function Ye(e,t,a,o,i,l){return(0,s.wg)(),(0,s.iD)("div",{class:"task_card",style:(0,n.j5)({"--color-calendar-task":a.task.color})},[Be,(0,s._)("div",Me,[(0,s._)("div",$e,(0,n.zw)(a.task.name),1),(0,s._)("div",Ue,[(0,s._)("span",je,(0,n.zw)(a.task.date.toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"})),1),(0,s.Uk)("  |  "),(0,s._)("span",We,(0,n.zw)(l.type_full),1)])])],4)}var Ze={name:"ExamCard",props:{task:{type:Object,required:!0}},computed:{type_full(){return{socratic:"Socratic Seminar",test:"Test",summative:"Summative Assignment",midterm:"Midterm",project:"Project",task:"Task"}[this.task.type]}}};const qe=(0,B.Z)(Ze,[["render",Ye]]);var Ee=qe,Ie={name:"UpcomingTasks",components:{ExamCard:Ee},computed:{store(){return(0,F.h)()},tasks(){return this.store.get_tasks.filter((e=>e.date?.getTime()-Date.now()>864e5&&!e.is_assignment)).sort(((e,t)=>e.date<t.date?-1:e.date>t.date?1:0)).slice(0,4)},assignments(){return this.store.get_tasks.filter((e=>e.date?.getTime()-Date.now()>864e5&&e.is_assignment)).sort(((e,t)=>e.date<t.date?-1:e.date>t.date?1:0)).slice(0,4)}},methods:{show_task(e){let t=JSON.stringify({name:e.name,group:e.class_name,date:e.date.toLocaleDateString("en-US").replace("/","-"),description:e.description,links:e.links});this.$router.push({name:e.is_assignment?"assignment":"task",query:{task:t}})}}};const Ne=(0,B.Z)(Ie,[["render",ze],["__scopeId","data-v-274db7e8"]]);var Re=Ne,Ae={name:"RightBar",components:{SidebarToggle:$,UpcomingTests:Re},emits:["close_left_bar"],data(){return{sidebar_open:!1}},mounted(){window.addEventListener("resize",this.close_sidebar)},unmounted(){window.removeEventListener("resize",this.close_sidebar)},methods:{show_if_inactive(){this.sidebar_open||(this.sidebar_open=!0),this.$emit("close_left_bar")},close_sidebar(){this.sidebar_open&&setTimeout((()=>this.sidebar_open=!1),10)}}};const Pe=(0,B.Z)(Ae,[["render",we],["__scopeId","data-v-39180bc3"]]);var He=Pe;const Ke=e=>((0,s.dD)("data-v-1f78f152"),e=e(),(0,s.Cn)(),e),Fe={class:"calendar"},Oe={class:"calendar_header"},Je=["title"],Ve={class:"calendar_actions"},Ge=Ke((()=>(0,s._)("div",{class:"action_icon arrow-icon left"},null,-1))),Qe=[Ge],Xe=Ke((()=>(0,s._)("div",{class:"action_icon arrow-icon right"},null,-1))),et=[Xe],tt={class:"calendar_days_container"},at={class:"calendar_days"},st={class:"calendar_day_date"},nt={class:"calendar_day_date__short"},ot={class:"calendar_day_date__long",style:{display:"none"}},it={class:"calendar_day_tasks"},lt=["title","onClick"],ct={key:0,class:"calendar__no_tasks",style:{display:"none"}};function rt(e,t,a,o,i,l){return(0,s.wg)(),(0,s.iD)("main",Fe,[(0,s._)("div",Oe,[(0,s._)("div",{class:"calendar_date",title:"Currently viewing "+i.loaded_month.toLocaleDateString(void 0,{month:"long",year:"numeric"})},(0,n.zw)(i.loaded_month.toLocaleDateString("en-US",{month:"long",year:"numeric"})),9,Je),(0,s._)("nav",Ve,[(0,s._)("button",{class:"calendar_action",onClick:t[0]||(t[0]=(...e)=>l.prev_month&&l.prev_month(...e)),title:"Previous month"},Qe),(0,s._)("button",{class:"calendar_action",onClick:t[1]||(t[1]=(...e)=>l.this_month&&l.this_month(...e)),title:"Current month"},[(0,s._)("div",{class:(0,n.C_)(["action_icon cal-icon",{alt:l.tasks.length}])},null,2)]),(0,s._)("button",{class:"calendar_action",onClick:t[2]||(t[2]=(...e)=>l.next_month&&l.next_month(...e)),title:"Next month"},et)])]),(0,s._)("div",tt,[(0,s._)("div",at,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.days,(t=>((0,s.wg)(),(0,s.iD)("div",{class:(0,n.C_)(["calendar_day",{calendar_day__placeholder:t.is_placeholder,calendar_day__hastask:!!t.tasks&&t.tasks.length,calendar_day__today:t.is_today}]),key:t.date},[(0,s._)("div",st,[(0,s._)("span",nt,(0,n.zw)(new Date(t.date).getDate()),1),(0,s._)("span",ot,(0,n.zw)(new Date(t.date).toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),1)]),(0,s._)("div",it,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.tasks,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"calendar_day_task",key:t.name,title:t.classes_class,style:(0,n.j5)({"--color-calendar-task":t.color}),onClick:a=>e.$emit("taskclick",t)},[(0,s._)("span",null,(0,n.zw)(t.name),1)],12,lt)))),128))])],2)))),128)),l.tasks_loaded_month?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",ct," Relax! No Tasks. "))])])])}var _t={name:"CalendarBlock",emits:["taskclick"],data(){return{loaded_month:new Date((new Date).setDate(1))}},methods:{day_matches(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()},get_day_tasks(e){return this.tasks.filter((t=>{const a=new Date(t.date);return this.day_matches(a,e)}))},next_month(){this.loaded_month=new Date(this.loaded_month.setMonth(this.loaded_month.getMonth()+1))},this_month(){this.loaded_month=new Date((new Date).setDate(1))},prev_month(){this.loaded_month=new Date(this.loaded_month.setMonth(this.loaded_month.getMonth()-1))}},computed:{tasks_loaded_month(){return this.tasks.some((e=>{const t=new Date(e.date);return t.getMonth()===this.loaded_month.getMonth()&&t.getFullYear()===this.loaded_month.getFullYear()}))},tasks(){const e=(0,F.h)();return e.get_tasks},days(){const e=[],t=this.loaded_month.getTime();function a(){return new Date(t)}const s=new Date(a().setDate(1)),n=new Date(a().setMonth(a().getMonth()+1,0));for(let o=s.getDay();o>0;o--)e.push({date:new Date(a().setDate(-o)),is_placeholder:!0});for(let o=1;o<=n.getDate();o++){const t=new Date(a().setDate(o));e.push({date:t,tasks:this.get_day_tasks(t),is_today:this.day_matches(t,new Date)})}for(let o=1;e.length<42;o++)e.push({date:a().setDate(n.getDate()+o),is_placeholder:!0});return e}}};const dt=(0,B.Z)(_t,[["render",rt],["__scopeId","data-v-1f78f152"]]);var ht=dt,mt={name:"AppPortal",components:{LeftBar:de,RightBar:He,CalendarBlock:ht},computed:{store(){return(0,F.h)()},name(){let e=this.store;return e.user&&e.user.displayName?e.user.displayName.split(" ")[0]:"User"}},methods:{close_left_bar(){this.$refs.LeftBar.close_sidebar()},close_right_bar(){this.$refs.RightBar.close_sidebar()},placeholderToast:ce.gy,show_task(e){let t=JSON.stringify({name:e.name,group:e.class_name,date:e.date.toLocaleDateString("en-US").replace("/","-"),description:e.description,links:e.links});this.$router.push({name:"task",query:{task:t}})}}};const ut=(0,B.Z)(mt,[["render",m],["__scopeId","data-v-c60e0000"]]);var pt=ut}}]);
//# sourceMappingURL=639.02c3c603.js.map