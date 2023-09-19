"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[794],{3028:function(e,a,t){t.d(a,{Z:function(){return k}});var s=t(3396),r=t(7139);const l=["title"],i=(0,s._)("div",{class:"task_card_icon_container"},[(0,s._)("div",{class:"task_card_icon_container__img"})],-1),n=[i],o={class:"task_card_details"},c={class:"task_card_details__title"},d={class:"task_card_details__extended"},_={class:"task_card_details__extended__date"},h={class:"task_card_details__extended__type"};function g(e,a,t,i,g,u){return(0,s.wg)(),(0,s.iD)("div",{class:"task_card",style:(0,r.j5)({"--color-calendar-task":t.task.color})},[(0,s._)("div",{class:"task_card_icon",title:t.task.class_name},n,8,l),(0,s._)("div",o,[(0,s._)("div",c,(0,r.zw)(t.task.name),1),(0,s._)("div",d,[(0,s._)("span",_,(0,r.zw)(t.task.date.toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"})),1),(0,s.Uk)("  |  "),(0,s._)("span",h,(0,r.zw)(u.type_full),1)])])],4)}var u={name:"ExamCard",props:{task:{type:Object,required:!0}},computed:{type_full(){return{note:"Note",task:"Assignment",test:"Test",project:"Project",quiz:"Quiz",exam:"Exam"}[this.task.type]}}},m=t(89);const p=(0,m.Z)(u,[["render",g]]);var k=p},7794:function(e,a,t){t.r(a),t.d(a,{default:function(){return Ca}});t(7658);var s=t(3396),r=t(7139);const l={class:"portal"},i={class:"portal_content__spaced"},n={class:"portal_info calendar_width"},o={class:"portal_info_title"},c={class:"portal_info_usertype"},d={class:"portal_info_date"},_={class:"portal_info_welcome"};function h(e,a,t,h,g,u){const m=(0,s.up)("LeftBar"),p=(0,s.up)("CalendarBlock"),k=(0,s.up)("RightBar"),f=(0,s.up)("router-view"),v=(0,s.up)("OverlayWrapper");return(0,s.wg)(),(0,s.iD)("main",l,[(0,s.Wm)(m,{ref:"LeftBar",onToggle_filtered_class:u.toggle_filtered_class,onClear_filters:a[0]||(a[0]=e=>g.filtered_classes=[]),onClose_right_bar:u.close_right_bar,filtered_classes:g.filtered_classes,onDragclass:a[1]||(a[1]=e=>{u.close_left_bar(),u.drag_class(e)}),onDrag:a[2]||(a[2]=a=>e.$refs.calendar.check_leave(a)),onDragend:a[3]||(a[3]=a=>e.$refs.calendar.drop_class(a)),onMounted:a[4]||(a[4]=a=>{g.loaded&&e.$refs.LeftBar.load()})},null,8,["onToggle_filtered_class","onClose_right_bar","filtered_classes"]),(0,s._)("div",{class:"portal_content",onClick:a[7]||(a[7]=e=>{u.close_right_bar(),u.close_left_bar()})},[(0,s._)("div",i,[(0,s._)("header",n,[(0,s._)("div",o,[(0,s._)("span",c,(0,r.zw)(u.store.is_teacher?"Teacher":"Student")+" Dashboard",1),(0,s._)("span",d,(0,r.zw)((new Date).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),1)]),(0,s._)("div",_,(0,r.zw)(u.store.recently_joined?"Welcome to MVTT":u.store.non_recent_signin?"Welcome Back":u.random_welcome)+" "+(0,r.zw)(u.name)+"! ",1)]),(0,s.Wm)(p,{filtered_classes:g.filtered_classes,onTaskclick:a[5]||(a[5]=e=>u.show_task(e)),ref:"calendar",dragging_class:g.dragging_class,onMounted:a[6]||(a[6]=a=>{g.loaded&&e.$refs.calendar.run_get_tasks()})},null,8,["filtered_classes","dragging_class"])])]),(0,s.Wm)(k,{ref:"RightBar",onClose_left_bar:u.close_left_bar,onMounted:a[8]||(a[8]=a=>{g.loaded&&e.$refs.RightBar.load()})},null,8,["onClose_left_bar"]),"portal"!==e.$route.name?((0,s.wg)(),(0,s.j4)(v,{key:0,onClose:a[10]||(a[10]=a=>u.close_path?e.$router.push(u.close_path):e.$router.push("/portal"))},{default:(0,s.w5)((e=>[(0,s.Wm)(f,{class:"router_center_view",onClose:e.close,onClear_filters:a[9]||(a[9]=e=>g.filtered_classes=[])},null,8,["onClose"])])),_:1})):(0,s.kq)("",!0)])}const g=e=>((0,s.dD)("data-v-53b8109e"),e=e(),(0,s.Cn)(),e),u={class:"sidebar_overflow"},m=g((()=>(0,s._)("div",{class:"branding-title gohome"},"MV Test Tracker",-1))),p=g((()=>(0,s._)("div",{class:"flex_spacer"},null,-1))),k=g((()=>(0,s._)("div",{class:"flex_spacer"},null,-1))),f=["_theme"],v=g((()=>(0,s._)("div",{class:"theme_icon"},null,-1))),y=g((()=>(0,s._)("div",{class:"toggle_text"},"Switch Theme",-1))),w=[v,y];function b(e,a,t,l,i,n){const o=(0,s.up)("ActionsPanel"),c=(0,s.up)("ClassList"),d=(0,s.up)("SidebarToggle");return(0,s.wg)(),(0,s.iD)("div",{class:(0,r.C_)(["left-bar portal_sidebar",{active:i.sidebar_open}]),onClick:a[2]||(a[2]=(...e)=>n.show_if_inactive&&n.show_if_inactive(...e))},[(0,s._)("div",u,[m,p,n.store&&n.store.is_teacher?((0,s.wg)(),(0,s.j4)(o,{key:0})):(0,s.kq)("",!0),(0,s.Wm)(c,(0,s.dG)(e.$attrs,{onDragclass:a[0]||(a[0]=a=>e.$emit("dragclass",a))}),null,16),k]),(0,s._)("button",{_theme:n.store.get_theme,class:"theme_button click-action",title:"Switch Theme",onClick:a[1]||(a[1]=(...e)=>n.store.toggle_theme&&n.store.toggle_theme(...e))},w,8,f),(0,s.Wm)(d,{class:"right",onClick:n.close_sidebar},null,8,["onClick"])],2)}const D=e=>((0,s.dD)("data-v-2e4cb15c"),e=e(),(0,s.Cn)(),e),C={class:"sidebar_toggle click-action",title:"Close Sidebar"},T=D((()=>(0,s._)("div",{class:"arrow-icon"},null,-1))),$=[T];function S(e,a,t,r,l,i){return(0,s.wg)(),(0,s.iD)("button",C,$)}var x={name:"SidebarToggle"},L=t(89);const M=(0,L.Z)(x,[["render",S],["__scopeId","data-v-2e4cb15c"]]);var j=M;const z=e=>((0,s.dD)("data-v-3e81e69f"),e=e(),(0,s.Cn)(),e),B={class:"class_list"},E=["title"],O=z((()=>(0,s._)("hr",{class:"class_list_hr"},null,-1))),W=["href","draggable","onDragstart","onDragend","onClick"],P=["_email","title","onClick"],I={key:0,class:"class_swatch__icon class_swatch_remove__icon"},N={key:1,class:"class_swatch__icon class_swatch_edit__icon"},Z={key:0,class:"class_name"},q={key:1,class:"class_name"},H=z((()=>(0,s._)("div",{class:"class_swatch"},[(0,s._)("div",{class:"class_swatch__add_icon"})],-1))),U=z((()=>(0,s._)("span",{class:"class_name"},"Join a Class",-1))),Y=[H,U];function R(e,a,t,l,i,n){return(0,s.wg)(),(0,s.iD)("div",B,[(0,s._)("div",{class:(0,r.C_)(["class_list__not_empty",{filtering:!!t.filtered_classes.length}])},[(0,s._)("h5",{onClick:a[0]||(a[0]=a=>e.$emit("clear_filters")),title:t.filtered_classes.length?"Click to clear filters":""}," Classes ",8,E),O,(0,s._)("div",{class:(0,r.C_)(["classes_container",{filtering:!!t.filtered_classes.length}])},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.classes,(a=>((0,s.wg)(),(0,s.iD)("a",{class:(0,r.C_)(["classes_container_class",{filter_active:t.filtered_classes.includes(a.id),classes_container_class__dragging:i.dragging&&i.dragging.ref==a.ref}]),ref_for:!0,ref:a.ref,href:"/view/"+n.clean_ref(a.ref),draggable:n.store.is_teacher&&a.email==this.store.user.email,onDragstart:t=>{e.$emit("dragclass",a),e.$emit("clear_filters"),i.dragging=a},onDragend:t=>{i.dragging=null,e.$emit("dragclass",{...a,_done:!0})},key:a.name,onClick:t=>{e.$emit("toggle_filtered_class",a.id),t.preventDefault()},style:(0,r.j5)({"--color-class":a.color,"--color-class-alt":a.color+"40"})},[(0,s._)("div",{class:"class_swatch",_email:a.email,title:n.store.is_teacher&&a.email==this.store.user.email?"Edit Class":"Leave Class",onClick:e=>{n.store.is_teacher&&a.email==this.store.user.email?n.edit_class(a):n.leave_class(a),e.preventDefault(),e.stopPropagation()}},[n.store.is_teacher&&a.email==this.store.user.email?((0,s.wg)(),(0,s.iD)("div",N)):((0,s.wg)(),(0,s.iD)("div",I))],8,P),a.period?((0,s.wg)(),(0,s.iD)("span",Z,"P"+(0,r.zw)(a.period)+" - "+(0,r.zw)(a.name),1)):((0,s.wg)(),(0,s.iD)("span",q,(0,r.zw)(a.name),1))],46,W)))),128)),(n.store.is_teacher,(0,s.wg)(),(0,s.iD)("div",{key:0,class:"classes_container_class classes_container_class__add_class",onClick:a[1]||(a[1]=a=>e.$router.push("/portal/add"))},Y))],2)],2)])}var A=t(8980),K={props:{filtered_classes:{type:Array,default:()=>[]}},name:"ClassList",data(){return{dragging:null}},computed:{store(){return(0,A.h)()},classes(){return this.store.classes.map((e=>({...e,email:e.id.split("/")[0]})))}},emits:["toggle_filtered_class","clear_filters","dragclass"],methods:{clean_ref(e){let[a,t]=e.split("/");return a=a.split("@")[0],[a,t].join("~")},leave_class(e){this.$router.push({name:"leave",params:{ref:this.clean_ref(e.id)}})},edit_class(e){this.$router.push({name:"editclass",params:{ref:this.clean_ref(e.id)}})}}};const F=(0,L.Z)(K,[["render",R],["__scopeId","data-v-3e81e69f"]]);var V=F;const X={class:"teacher_actions"},G=["disabled","title","onClick"],J=(0,s._)("div",{class:"teacher_action__icon icon__add"},null,-1),Q={class:"teacher_action__text"},ee=(0,s._)("div",{class:"teacher_action__icon icon__create"},null,-1),ae=(0,s._)("div",{class:"teacher_action__text"},"Create a Class",-1),te=[ee,ae];function se(e,a,t,l,i,n){return(0,s.wg)(),(0,s.iD)("div",X,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.task_types,(a=>((0,s.wg)(),(0,s.iD)("div",{disabled:!n.has_classes,title:n.has_classes?"":"Please create a class first",key:a[0],class:"teacher_action",onClick:t=>{n.has_classes?e.$router.push({name:"newtask",params:{tasktype:a[0]}}):n.warn_missing_class()}},[J,(0,s._)("div",Q,(0,r.zw)(a[1]),1)],8,G)))),128)),(0,s._)("div",{class:"teacher_action",onClick:a[0]||(a[0]=a=>e.$router.push("/portal/create"))},te)])}var re=t(1708),le={data(){return{task_types:[["note","Add a Note"],["task","Schedule a Task or Test"]]}},computed:{store(){return(0,A.h)()},has_classes(){return this.store?.active_doc?.classes?.length>0}},methods:{warn_missing_class(){new re.OO("Please create a class first",2e3)}}};const ie=(0,L.Z)(le,[["render",se]]);var ne=ie,oe={name:"LeftBar",components:{SidebarToggle:j,ClassList:V,ActionsPanel:ne},emits:["close_right_bar","set_class","mounted","dragclass"],data(){return{sidebar_open:!1}},computed:{store(){return(0,A.h)()}},mounted(){this.$emit("mounted"),window.addEventListener("resize",this.close_sidebar)},unmounted(){window.removeEventListener("resize",this.close_sidebar)},methods:{placeholderToast:re.gy,show_if_inactive(){this.sidebar_open||(this.sidebar_open=!0),this.$emit("close_right_bar")},close_sidebar(){this.sidebar_open&&setTimeout((()=>this.sidebar_open=!1),10)},set_class(e){this.$emit("set_class",e)},load(){this.loading=!1}}};const ce=(0,L.Z)(oe,[["render",b],["__scopeId","data-v-53b8109e"]]);var de=ce;const _e=e=>((0,s.dD)("data-v-938bfd64"),e=e(),(0,s.Cn)(),e),he={class:"sidebar_overflow"},ge=_e((()=>(0,s._)("div",{class:"auth-action can-logout doprompt"},"Log Out",-1))),ue=_e((()=>(0,s._)("div",{class:"flex_spacer"},null,-1))),me=_e((()=>(0,s._)("div",{class:"flex_spacer"},null,-1))),pe=_e((()=>(0,s._)("div",{class:"settings_icon"},null,-1))),ke=[pe];function fe(e,a,t,l,i,n){const o=(0,s.up)("UpcomingTests"),c=(0,s.up)("SidebarToggle");return(0,s.wg)(),(0,s.iD)("div",{class:(0,r.C_)(["right-bar portal_sidebar",{active:i.sidebar_open}]),onClick:a[1]||(a[1]=(...e)=>n.show_if_inactive&&n.show_if_inactive(...e))},[(0,s._)("div",he,[ge,ue,(0,s.Wm)(o,{loading:i.loading},null,8,["loading"]),me]),(0,s._)("button",{class:"settings_button click-action",title:"Settings",onClick:a[0]||(a[0]=a=>e.$router.push("/settings"))},ke),(0,s.Wm)(c,{onClick:n.close_sidebar},null,8,["onClick"])],2)}const ve=e=>((0,s.dD)("data-v-d3911c8e"),e=e(),(0,s.Cn)(),e),ye={class:"upcoming_tasks"},we={key:0,class:"upcoming_tasks__not_empty"},be=ve((()=>(0,s._)("h5",null,"Upcoming",-1))),De=ve((()=>(0,s._)("hr",{class:"upcoming_tasks_hr"},null,-1))),Ce={key:0,class:"tasks_container"},Te={key:1,class:"loading_tasks loading_icon",alt:"Loading..."},$e={key:1,class:"upcoming_tasks__empty"},Se=ve((()=>(0,s._)("h5",null,"No Upcoming Tasks!",-1))),xe=[Se];function Le(e,a,t,r,l,i){const n=(0,s.up)("ExamCard");return(0,s.wg)(),(0,s.iD)("div",ye,[i.tasks&&i.tasks.length||t.loading?((0,s.wg)(),(0,s.iD)("div",we,[be,De,i.tasks&&i.tasks.length?((0,s.wg)(),(0,s.iD)("div",Ce,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.tasks,(e=>((0,s.wg)(),(0,s.j4)(n,{class:"tasks_container_task",task:e,key:e.name,onClick:a=>i.show_task(e)},null,8,["task","onClick"])))),128))])):((0,s.wg)(),(0,s.iD)("img",Te))])):((0,s.wg)(),(0,s.iD)("div",$e,xe))])}var Me=t(3028),je={name:"UpcomingTasks",props:{loading:{type:Boolean,default:!1}},components:{ExamCard:Me.Z},computed:{store(){return(0,A.h)()},tasks(){if(!this.store.tasks)return[];let e=Date.now(),a=288e5;return this.store.tasks.filter((t=>"note"!=t.type&&(t?.date?.getTime?t.date.getTime():0)>=e-a)).sort(((e,a)=>e.date<a.date?-1:e.date>a.date?1:0)).slice(0,6)}},methods:{show_task(e){this.$router.push({name:"viewtask",params:{ref:e.ref.replace("@mvla.net","").split("/").join("~")}})}}};const ze=(0,L.Z)(je,[["render",Le],["__scopeId","data-v-d3911c8e"]]);var Be=ze,Ee={name:"RightBar",components:{SidebarToggle:j,UpcomingTests:Be},emits:["close_left_bar","mounted"],data(){return{sidebar_open:!1,loading:!0}},mounted(){this.$emit("mounted"),window.addEventListener("resize",this.close_sidebar)},unmounted(){window.removeEventListener("resize",this.close_sidebar)},methods:{show_if_inactive(){this.sidebar_open||(this.sidebar_open=!0),this.$emit("close_left_bar")},close_sidebar(){this.sidebar_open&&setTimeout((()=>this.sidebar_open=!1),10)},load(){this.loading=!1}}};const Oe=(0,L.Z)(Ee,[["render",fe],["__scopeId","data-v-938bfd64"]]);var We=Oe;const Pe=e=>((0,s.dD)("data-v-9e8f25aa"),e=e(),(0,s.Cn)(),e),Ie={class:"calendar_header"},Ne=["title"],Ze={class:"calendar_actions"},qe=Pe((()=>(0,s._)("div",{class:"action_icon arrow-icon left"},null,-1))),He=[qe],Ue=Pe((()=>(0,s._)("div",{class:"action_icon arrow-icon right"},null,-1))),Ye=[Ue],Re={class:"calendar_day__weekday_label__text"},Ae=["_date","onDragover"],Ke=["onClick"],Fe={class:"calendar_day_date__short"},Ve={class:"calendar_day_date__long",style:{display:"none"}},Xe={class:"calendar_day_tasks"},Ge=["is_note","title","draggable","onDragstart","href","onClick"],Je={key:0,class:"calendar_day_task_editable"},Qe={key:1},ea=Pe((()=>(0,s._)("span",{class:"calendar_day_task__swatch"},null,-1))),aa=Pe((()=>(0,s._)("span",{class:"calendar_day_task__note"}," NOTE ",-1))),ta=[ea,aa],sa={key:2},ra={key:0,class:"calendar__no_tasks",style:{display:"none"}};function la(e,a,t,l,i,n){const o=(0,s.up)("LoadingCover");return(0,s.wg)(),(0,s.iD)("main",{class:(0,r.C_)(["calendar",{calendar_fullpage:t.fullpage}]),onDrag:a[4]||(a[4]=(...e)=>n.check_leave&&n.check_leave(...e))},[i.is_ready?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(o,{key:0,class:"calendar_loading",covering:"Calendar Tasks"})),(0,s._)("div",Ie,[(0,s._)("div",{class:"calendar_date",title:"Currently viewing "+i.loaded_month.toLocaleDateString(void 0,{month:"long",year:"numeric"})},(0,r.zw)(i.loaded_month.toLocaleDateString("en-US",{month:"long",year:"numeric"})),9,Ne),(0,s._)("nav",Ze,[(0,s._)("button",{class:"calendar_action",onClick:a[0]||(a[0]=(...e)=>n.prev_month&&n.prev_month(...e)),title:"Previous month"},He),(0,s._)("button",{class:"calendar_action",onClick:a[1]||(a[1]=(...e)=>n.this_month&&n.this_month(...e)),title:"Current month"},[(0,s._)("div",{class:(0,r.C_)(["action_icon cal-icon",{alt:i.tasks.length}])},null,2)]),(0,s._)("button",{class:"calendar_action",onClick:a[2]||(a[2]=(...e)=>n.next_month&&n.next_month(...e)),title:"Next month"},Ye)])]),(0,s._)("div",{class:"calendar_days_container hidescroll",style:(0,r.j5)({"--color-dragging":i.drag.task&&i.drag.task.color||i.drag.class&&i.drag.class.color,"--color-dragging-alt":i.drag.task&&i.drag.task.color||i.drag.class&&i.drag.class.color?i.drag.task&&i.drag.task.color||(i.drag.class&&i.drag.class.color)+"80":null})},[(0,s._)("div",{class:(0,r.C_)(["calendar_days",{calendar_days__current:n.day_matches(i.loaded_month,new Date((new Date).setDate(1))),calendar_days__changed:i.is_changed}]),ref:"calendar_days"},[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],(e=>(0,s._)("div",{class:"calendar_day calendar_day__weekday_label",key:e},[(0,s._)("span",Re,(0,r.zw)(e),1)]))),64)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.days,(t=>((0,s.wg)(),(0,s.iD)("div",{class:(0,r.C_)(["calendar_day",{calendar_day__placeholder:t.is_placeholder,calendar_day__hastask:!!t.tasks&&t.tasks.length,calendar_day__today:t.is_today,calendar_day__past:t.is_past,calendar_day__drag_to:i.drag.to==t.date,calendar_day__drag_class_to:i.drag.to==t.date&&i.drag.class,calendar_day__drag_from:i.drag.from==t.date}]),_date:t.date.toISOString().split("T")[0],onDragover:e=>n.drag_over(t.date),key:t.date},[(0,s._)("div",{class:(0,r.C_)(["calendar_day_date",{"click-action":n.store.is_teacher}]),onClick:a=>{n.store.is_teacher&&e.$router.push({name:"newtask",query:{date:n.format_date(t.date)}})}},[(0,s._)("span",Fe,(0,r.zw)(new Date(t.date).getDate()),1),(0,s._)("span",Ve,(0,r.zw)(new Date(t.date).toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),1)],10,Ke),(0,s._)("div",Xe,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.tasks,(l=>((0,s.wg)(),(0,s.iD)("a",{class:(0,r.C_)(["calendar_day_task click-action",{calendar_day_task__dragging:i.drag.task==l,calendar_day_task__loading:i.drag.task==l&&i.drag.load}]),is_note:"note"===l.type,key:l.name,title:l.name,draggable:l&&n.store.is_teacher&&n.store.user&&l.ref.split("/")[0]==n.store.active_doc.email,onDragstart:e=>i.drag={task:l,from:t.date},onDragend:a[3]||(a[3]=(...e)=>n.drag_drop&&n.drag_drop(...e)),style:(0,r.j5)({"--color-calendar-task":l.color,"--color-calendar-task-alt":l.color+"40"}),href:"/view/"+n.get_link(l.ref),onClick:a=>{a.preventDefault(),e.$emit("taskclick",l)}},[l&&n.store.is_teacher&&n.store.user&&l.ref.split("/")[0]==n.store.active_doc.email?((0,s.wg)(),(0,s.iD)("div",Je,[(0,s._)("span",{class:(0,r.C_)(["task_icon task_edit__icon",{loading_bg:i.drag.load}])},null,2)])):(0,s.kq)("",!0),"note"===l.type?((0,s.wg)(),(0,s.iD)("span",Qe,ta)):((0,s.wg)(),(0,s.iD)("span",sa,(0,r.zw)(l.name),1))],46,Ge)))),128))])],42,Ae)))),128)),n.tasks_loaded_month?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",ra," Relax! No Tasks. "))],2)],4)],34)}const ia=e=>((0,s.dD)("data-v-5a6b564c"),e=e(),(0,s.Cn)(),e),na=["title"],oa=ia((()=>(0,s._)("div",{class:"loading_cover__overlay"},null,-1))),ca={class:"loading_cover__content"},da={class:"loading_cover__content__icon"},_a=(0,s.uE)('<defs data-v-5a6b564c><circle id="dot" r="3" data-v-5a6b564c></circle></defs><g fill="var(--color-loading-dot, #000)" data-v-5a6b564c><circle cx="33%" cy="50%" r="3" data-v-5a6b564c><animate attributeName="r" values="3;7;3" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" data-v-5a6b564c></animate><animate attributeName="opacity" values="0.2;1;0.2" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" data-v-5a6b564c></animate></circle><circle cx="50%" cy="50%" r="3" data-v-5a6b564c><animate attributeName="r" values="3;7;3" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" begin="0.2s" data-v-5a6b564c></animate><animate attributeName="opacity" values="0.2;1;0.2" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" begin="0.2s" data-v-5a6b564c></animate></circle><circle cx="67%" cy="50%" r="3" data-v-5a6b564c><animate attributeName="r" values="3;7;3" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" begin="0.4s" data-v-5a6b564c></animate><animate attributeName="opacity" values="0.2;1;0.2" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" begin="0.4s" data-v-5a6b564c></animate></circle></g>',2),ha=[_a];function ga(e,a,t,l,i,n){return(0,s.wg)(),(0,s.iD)("div",{class:"loading_cover",title:"Loading "+t.covering},[oa,(0,s._)("div",ca,[(0,s._)("div",da,[((0,s.wg)(),(0,s.iD)("svg",{viewBox:"0 0 100 20",style:(0,r.j5)({width:"calc(33% + 100px)",minWidth:"100px",maxWidth:"400px"})},ha,4))]),(0,s.WI)(e.$slots,"default",{},void 0,!0)])],8,na)}var ua={name:"LoadingCover",props:{covering:{type:String,default:"Content"}}};const ma=(0,L.Z)(ua,[["render",ga],["__scopeId","data-v-5a6b564c"]]);var pa=ma,ka=t(2745),fa={name:"CalendarBlock",components:{LoadingCover:pa},props:{filtered_classes:{Array:Array,default:()=>[]},dragging_class:{Object:Object,default:()=>null},fullpage:{Boolean:Boolean,default:!1}},emits:["taskclick","mounted"],data(){return{loaded_month:new Date((new Date).setDate(1)),is_ready:!1,tasks:[],is_changed:!1,drag:{}}},mounted(){(0,ka.E)("📅 Calendar mounted"),this.$emit("mounted"),this.tasks=this.store.tasks},methods:{check_leave(e){try{const a=this.$refs.calendar_days.getBoundingClientRect();this.drag.to&&(e.clientX||e.clientX)&&(e.clientX<a.left||e.clientX>a.right||e.clientY<a.top||e.clientY>a.bottom)&&(this.drag.to=null)}catch(a){(0,ka.E)("🔥 Couldn't check if mouse left calendar",a)}},drop_class(){this.drag?.class&&this.drag?.to&&((0,ka.E)("📅 Dropped class on calendar day"),this.$router.push({name:"newtask",query:{class:this.drag.class.id,date:new Date(this.drag.to.getTime()-60*this.drag.to.getTimezoneOffset()*1e3).toISOString().split("T")[0]}})),this.drag={}},drag_over(e){this.drag.to!=e&&(this.drag.class?this.drag.to=e:this.drag.to=this.drag.to!=this.drag.from?e:null)},drag_drop(){if(this.drag.to&&this.drag.from&&this.drag.to!=this.drag.from&&this.drag.task){let e=this.drag.to;this.drag.load=!0,this.drag.to=null,this.store.update_task(this.drag.task.ref,{...this.drag.task,date:new Date(e-60*e.getTimezoneOffset()*1e3).toISOString().split("T")[0]}).then((()=>{new re.bF(`Moved ${this.drag.task.type} ${this.drag.task.name?'"'+this.drag.task.name+'" ':""}to ${e.toLocaleDateString()}`,2e3),(0,ka.E)("📅 Moved task date"),this.drag={}})).catch((e=>{new re.PK("Couldn't update task",e,2e3),(0,ka.E)("🔥 Couldn't update task",e),this.drag={}}))}else this.drag={}},format_date(e){return e.toISOString().split("T")[0]||""},day_matches(e,a){return e.getDate()===a.getDate()&&e.getMonth()===a.getMonth()&&e.getFullYear()===a.getFullYear()},get_day_tasks(e){return this.tasks.filter((a=>{const t=new Date(a.date);return this.day_matches(t,e)&&(!this.filtered_classes.length||this.filtered_classes.includes(a.class_id))})).sort(((e,a)=>{if("note"==e.type&&"note"!=a.type)return-1}))},next_month(){this.is_changed=!0,this.loaded_month=new Date(this.loaded_month.setMonth(this.loaded_month.getMonth()+1))},this_month(){let e=new Date((new Date).setDate(1));this.day_matches(this.loaded_month,e)&&(this.is_changed=!this.is_changed),this.loaded_month=e},prev_month(){this.is_changed=!0,this.loaded_month=new Date(this.loaded_month.setMonth(this.loaded_month.getMonth()-1))},run_get_tasks(){this.tasks=this.store.tasks,this.is_ready=!0},get_link(e){let[a,t,s]=e.split("/");return a=a.split("@")[0],[a,t,s].join("~")}},computed:{tasks_loaded_month(){return this.tasks.some((e=>{new Date(e.date);return!0}))},store(){return(0,A.h)()},days(){const e=[],a=new Date((new Date).toISOString().split("T")[0]),t=this.loaded_month.getTime();function s(){return new Date(t)}const r=new Date(s().setDate(1)),l=new Date(s().setMonth(s().getMonth()+1,0));for(let i=r.getDay();i>0;i--){const t=new Date(s().setDate(-i));e.push({date:t,tasks:this.get_day_tasks(t),is_placeholder:!0,is_past:t.getTime()<a.getTime()})}for(let i=1;i<=l.getDate();i++){const t=new Date(s().setDate(i));e.push({date:t,tasks:this.get_day_tasks(t),is_today:this.day_matches(t,new Date),is_past:t.getTime()<a.getTime()})}for(let i=1;e.length<42;i++){const t=new Date(s().setDate(l.getDate()+i));e.push({date:t,tasks:this.get_day_tasks(t),is_placeholder:!0,is_past:t.getTime()<a.getTime()})}return e}},watch:{dragging_class(e,a){e?.ref!=a?.ref&&(this.drag={}),this.drag.class=this.dragging_class},"store.classes":{handler(e,a){e.length!=a.length&&this.is_ready&&((0,ka.E)("📦 Classes array length changed, calendar updating tasks"),this.store.fetch_classes().then((()=>{this.run_get_tasks()})).catch((e=>{(0,ka.E)("🔥 Couldn't fetch classes",e)})))},deep:!0},"store.tasks":{handler(){this.tasks=this.store.tasks},deep:!0}}};const va=(0,L.Z)(fa,[["render",la],["__scopeId","data-v-9e8f25aa"]]);var ya=va,wa=t(3917),ba={name:"AppPortal",components:{LeftBar:de,RightBar:We,CalendarBlock:ya,OverlayWrapper:wa.Z},data(){return{filtered_classes:[],welcomes:["Welcome","Hi","Hello","Hey","Howdy"],loaded:!1,dragging_class:null}},computed:{close_path(){return this.$route?.query?.redirect||this.$route?.meta?.close_path},name(){return this.store.user?.displayName?.split(" ")[0]||"User"},did_survey(){return this.store.done_daily_survey},random_welcome(){return this.welcomes[Math.floor(Math.random()*this.welcomes.length)]},store(){return(0,A.h)()}},methods:{drag_class(e){this.dragging_class=e},do_survey(){this.$router.replace({name:"daily",query:{redirect:this.$route.fullPath}}),new re.OO("Please complete the daily survey to use MVTT today!",3e3)},close_left_bar(){this.$refs.LeftBar.close_sidebar()},close_right_bar(){this.$refs.RightBar.close_sidebar()},show_task(e){this.$router.push({name:"viewtask",params:{ref:e.ref.replace("@mvla.net","").split("/").join("~")}})},toggle_filtered_class(e){this.filtered_classes.includes(e)?this.filtered_classes=this.filtered_classes.filter((a=>a!==e)):this.filtered_classes.push(e)},check_and_do_survey(){this?.store?.user&&!this?.did_survey&&!0!==this.$route?.meta?.noSurvey&&this.do_survey()},check_and_do_join(){this.store.done_join_form||(this.$router.push({name:"join",query:{redirect:this.$route.fullPath}}),new re.OO("Please fill out the join form to use MVTT!",3e3))}},mounted(){(0,ka.E)("🏗 Portal mounted"),this.check_and_do_join(),this.check_and_do_survey(),this.store.fetch_classes().then((()=>{this.$refs.calendar&&this.$refs.calendar.run_get_tasks(),this.$refs.RightBar.load(),this.$refs.LeftBar.load(),this.loaded=!0})).catch((e=>{(0,ka.E)("🔥 Couldn't fetch classes",e)}))},watch:{did_survey(){this.check_and_do_survey()},$time(){this.check_and_do_survey()},$route(){"portal"!=this.$route.name&&(this.close_right_bar(),this.close_left_bar()),this.check_and_do_survey()},store:{handler(){this.check_and_do_join()},deep:!0}}};const Da=(0,L.Z)(ba,[["render",h],["__scopeId","data-v-2e3f58e4"]]);var Ca=Da}}]);
//# sourceMappingURL=794.43b5b6b4.js.map