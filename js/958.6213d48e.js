"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[958],{3096:function(e,s,t){t.d(s,{Z:function(){return k}});var a=t(3396),i=t(7139);const l=["title"],r=(0,a._)("div",{class:"task_card_icon_container"},[(0,a._)("div",{class:"task_card_icon_container__img"})],-1),o=[r],n={class:"task_card_details"},d={class:"task_card_details__title"},_={class:"task_card_details__extended"},c={class:"task_card_details__extended__date"},h={class:"task_card_details__extended__type"};function g(e,s,t,r,g,u){return(0,a.wg)(),(0,a.iD)("a",{class:"task_card",style:(0,i.j5)({"--color-calendar-task":t.task.color})},[(0,a._)("div",{class:"task_card_icon",title:t.task.class_name},o,8,l),(0,a._)("div",n,[(0,a._)("div",d,(0,i.zw)(t.task.name),1),(0,a._)("div",_,[(0,a._)("span",c,(0,i.zw)(t.task.date.toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"})),1),(0,a.Uk)("  |  "),(0,a._)("span",h,(0,i.zw)(u.type_full),1)])])],4)}var u={name:"ExamCard",props:{task:{type:Object,required:!0}},computed:{type_full(){return{note:"Note",task:"Assignment",test:"Test",project:"Project",quiz:"Quiz",exam:"Exam"}[this.task.type]}}},m=t(89);const p=(0,m.Z)(u,[["render",g]]);var k=p},1958:function(e,s,t){t.r(s),t.d(s,{default:function(){return Qs}});t(7658);var a=t(3396),i=t(7139);const l=["page"],r={class:"portal_content__spaced"},o={class:"portal_info calendar_width"},n={class:"portal_info_title"},d={class:"portal_info_usertype"},_={class:"portal_info_date"},c={class:"portal_info_welcome"},h={class:"portal_mobile_nav"},g=["id","onClick"],u=["src"];function m(e,s,t,m,p,k){const f=(0,a.up)("LeftBar"),y=(0,a.up)("StudyBlock"),v=(0,a.up)("CalendarBlock"),w=(0,a.up)("RightBar"),b=(0,a.up)("router-view"),C=(0,a.up)("OverlayWrapper");return(0,a.wg)(),(0,a.iD)("main",{class:"portal",page:p.page},[(0,a.Wm)(f,{ref:"LeftBar",class:(0,i.C_)({paged:"left"==p.page}),paged:"left"==p.page,onToggle_filtered_class:k.toggle_filtered_class,onClear_filters:s[0]||(s[0]=e=>p.filtered_classes=[]),onClose_right_bar:k.close_right_bar,filtered_classes:p.filtered_classes,onDragclass:s[1]||(s[1]=e=>{k.close_left_bar(),k.drag_class(e)}),onDrag:s[2]||(s[2]=s=>e.$refs.calendar.check_leave(s)),onDragend:s[3]||(s[3]=s=>e.$refs.calendar.drop_class(s)),onMounted:s[4]||(s[4]=s=>{p.loaded&&e.$refs.LeftBar.load()})},null,8,["class","paged","onToggle_filtered_class","onClose_right_bar","filtered_classes"]),(0,a._)("div",{class:"portal_content",onClick:s[9]||(s[9]=e=>{k.close_right_bar(),k.close_left_bar()})},[(0,a._)("div",r,[(0,a._)("header",o,[(0,a._)("div",n,[(0,a._)("span",d,(0,i.zw)(k.store.is_teacher?"Teacher":"Student")+" Dashboard",1),(0,a._)("span",_,(0,i.zw)((new Date).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),1)]),(0,a._)("div",c,(0,i.zw)(k.store.recently_joined?"Welcome to MVTT":k.store.non_recent_signin?"Welcome Back":k.random_welcome)+" "+(0,i.zw)(k.name)+"! ",1)]),p.is_study?((0,a.wg)(),(0,a.j4)(y,{key:0,filtered_classes:p.filtered_classes,onTaskclick:s[5]||(s[5]=e=>k.show_task(e)),ref:"study",onMounted:s[6]||(s[6]=s=>{p.loaded&&e.$refs.study.run_get_tasks()})},null,8,["filtered_classes"])):((0,a.wg)(),(0,a.j4)(v,{key:1,filtered_classes:p.filtered_classes,onTaskclick:s[7]||(s[7]=e=>k.show_task(e)),ref:"calendar",dragging_class:p.dragging_class,onMounted:s[8]||(s[8]=s=>{p.loaded&&e.$refs.calendar.run_get_tasks()})},null,8,["filtered_classes","dragging_class"]))])]),(0,a.Wm)(w,{ref:"RightBar",class:(0,i.C_)({paged:"right"==p.page}),paged:"right"==p.page,onClose_left_bar:k.close_left_bar,onMounted:s[10]||(s[10]=s=>{p.loaded&&e.$refs.RightBar.load()})},null,8,["class","paged","onClose_left_bar"]),(0,a._)("nav",h,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(["left","block","right"],(e=>(0,a._)("button",{class:(0,i.C_)(["portal_mobile_nav_page",{active:p.page==e}]),id:"portal_mobile__"+e,key:e,onClick:s=>p.page=e},[(0,a._)("span",{class:(0,i.C_)(["portal_mobile_nav_page__icon",{alt:p.page==e}]),src:`portal-${e}-icon`},null,10,u)],10,g))),64))]),["portal","study"].includes(e.$route.name)?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(C,{key:0,onClose:s[12]||(s[12]=s=>k.close_path?e.$router.push(k.close_path):e.$router.push({name:p.is_study?"study":"portal"}))},{default:(0,a.w5)((e=>[(0,a.Wm)(b,{class:"router_center_view",onClose:e.close,onClear_filters:s[11]||(s[11]=e=>p.filtered_classes=[])},null,8,["onClose"])])),_:1}))],8,l)}const p=e=>((0,a.dD)("data-v-5b1969ec"),e=e(),(0,a.Cn)(),e),k={class:"sidebar_overflow"},f=p((()=>(0,a._)("div",{class:"branding-title gohome"},"MV Test Tracker",-1))),y=p((()=>(0,a._)("div",{class:"flex_spacer"},null,-1))),v=p((()=>(0,a._)("div",{class:"flex_spacer"},null,-1))),w=["_theme"],b=p((()=>(0,a._)("div",{class:"theme_icon"},null,-1))),C=p((()=>(0,a._)("div",{class:"toggle_text"},"Switch Theme",-1))),D=[b,C];function A(e,s,t,l,r,o){const n=(0,a.up)("ActionsPanel"),d=(0,a.up)("ClassList"),_=(0,a.up)("SidebarToggle");return(0,a.wg)(),(0,a.iD)("div",{class:(0,i.C_)(["left-bar portal_sidebar",{active:r.sidebar_open}]),onClick:s[2]||(s[2]=(...e)=>o.show_if_inactive&&o.show_if_inactive(...e))},[(0,a._)("div",k,[f,y,o.store&&o.store.is_teacher?((0,a.wg)(),(0,a.j4)(n,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(d,(0,a.dG)(e.$attrs,{onDragclass:s[0]||(s[0]=s=>e.$emit("dragclass",s))}),null,16),v]),(0,a._)("button",{_theme:o.store.get_theme,class:"theme_button click-action",title:"Switch Theme",onClick:s[1]||(s[1]=(...e)=>o.store.toggle_theme&&o.store.toggle_theme(...e))},D,8,w),(0,a.Wm)(_,{class:"right",onClick:o.close_sidebar},null,8,["onClick"])],2)}const $=e=>((0,a.dD)("data-v-2e4cb15c"),e=e(),(0,a.Cn)(),e),T={class:"sidebar_toggle click-action",title:"Close Sidebar"},S=$((()=>(0,a._)("div",{class:"arrow-icon"},null,-1))),j=[S];function x(e,s,t,i,l,r){return(0,a.wg)(),(0,a.iD)("button",T,j)}var L={name:"SidebarToggle"},B=t(89);const z=(0,B.Z)(L,[["render",x],["__scopeId","data-v-2e4cb15c"]]);var M=z;const W=e=>((0,a.dD)("data-v-41a6db24"),e=e(),(0,a.Cn)(),e),U={class:"class_list"},E=["title"],H=W((()=>(0,a._)("hr",{class:"class_list_hr"},null,-1))),I=["href","draggable","onDragstart","onDragend","onClick"],O=["_email","title","onClick"],R={key:0,class:"class_swatch__icon class_swatch_remove__icon"},q={key:1,class:"class_swatch__icon class_swatch_edit__icon"},Z={key:0,class:"class_name"},P={key:1,class:"class_name"},Y=W((()=>(0,a._)("div",{class:"class_swatch"},[(0,a._)("div",{class:"class_swatch__add_icon"})],-1))),N=W((()=>(0,a._)("span",{class:"class_name"},"Join a Class",-1))),X=[Y,N];function V(e,s,t,l,r,o){return(0,a.wg)(),(0,a.iD)("div",U,[(0,a._)("div",{class:(0,i.C_)(["class_list__not_empty",{filtering:!!t.filtered_classes.length}])},[(0,a._)("h5",{onClick:s[0]||(s[0]=s=>e.$emit("clear_filters")),title:t.filtered_classes.length?"Click to clear filters":""}," Classes ",8,E),H,(0,a._)("div",{class:(0,i.C_)(["classes_container",{filtering:!!t.filtered_classes.length}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.classes,(s=>((0,a.wg)(),(0,a.iD)("a",{class:(0,i.C_)(["classes_container_class",{filter_active:t.filtered_classes.includes(s.id),classes_container_class__dragging:r.dragging&&r.dragging.ref==s.ref}]),ref_for:!0,ref:s.ref,href:"/view/"+o.clean_ref(s.ref),draggable:o.store.is_teacher&&s.email==this.store.user.email&&"study"!=e.$route.name,onDragstart:t=>{e.$emit("dragclass",s),e.$emit("clear_filters"),r.dragging=s},onDragend:t=>{r.dragging=null,e.$emit("dragclass",{...s,_done:!0})},key:s.name,onClick:t=>{e.$emit("toggle_filtered_class",s.id),t.preventDefault()},style:(0,i.j5)({"--color-class":s.color,"--color-class-alt":s.color+"40"})},[(0,a._)("div",{class:"class_swatch",_email:s.email,title:o.store.is_teacher&&s.email==this.store.user.email?"Edit Class":"Leave Class",onClick:e=>{o.store.is_teacher&&s.email==this.store.user.email?o.edit_class(s):o.leave_class(s),e.preventDefault(),e.stopPropagation()}},[o.store.is_teacher&&s.email==this.store.user.email?((0,a.wg)(),(0,a.iD)("div",q)):((0,a.wg)(),(0,a.iD)("div",R))],8,O),s.period?((0,a.wg)(),(0,a.iD)("span",Z,"P"+(0,i.zw)(s.period)+" - "+(0,i.zw)(s.name),1)):((0,a.wg)(),(0,a.iD)("span",P,(0,i.zw)(s.name),1))],46,I)))),128)),(o.store.is_teacher,(0,a.wg)(),(0,a.iD)("div",{key:0,class:"classes_container_class classes_container_class__add_class",onClick:s[1]||(s[1]=s=>e.$router.push("/portal/add"))},X))],2)],2)])}var K=t(8980),Q={props:{filtered_classes:{type:Array,default:()=>[]}},name:"ClassList",data(){return{dragging:null}},computed:{store(){return(0,K.h)()},classes(){return this.store.classes.map((e=>({...e,email:e.id.split("/")[0]})))}},emits:["toggle_filtered_class","clear_filters","dragclass"],methods:{clean_ref(e){let[s,t]=e.split("/");return s=s.split("@")[0],[s,t].join("~")},leave_class(e){this.$router.push({name:"leave",params:{ref:this.clean_ref(e.id)}})},edit_class(e){this.$router.push({name:"editclass",params:{ref:this.clean_ref(e.id)}})}}};const F=(0,B.Z)(Q,[["render",V],["__scopeId","data-v-41a6db24"]]);var J=F;const G={class:"teacher_actions"},ee=["disabled","title","onClick"],se=(0,a._)("div",{class:"teacher_action__icon icon__add"},null,-1),te={class:"teacher_action__text"},ae=(0,a._)("div",{class:"teacher_action__icon icon__create"},null,-1),ie=(0,a._)("div",{class:"teacher_action__text"},"Create a Class",-1),le=[ae,ie];function re(e,s,t,l,r,o){return(0,a.wg)(),(0,a.iD)("div",G,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.task_types,(s=>((0,a.wg)(),(0,a.iD)("div",{disabled:!o.has_classes,title:o.has_classes?`${s[1]} (${s[2]})`:"Please create a class first",key:s[0],class:"teacher_action",onClick:t=>{o.has_classes?e.$router.push({name:"newtask",params:{tasktype:s[0]}}):o.warn_missing_class()}},[se,(0,a._)("div",te,(0,i.zw)(s[1]),1)],8,ee)))),128)),(0,a._)("div",{class:"teacher_action",onClick:s[0]||(s[0]=s=>e.$router.push("/portal/create"))},le)])}var oe=t(1708),ne={data(){return{task_types:[["note","Add a Note","n"],["task","Schedule a Task or Test","t"]]}},mounted(){window.addEventListener("keydown",this.keydown)},beforeUnmount(){window.removeEventListener("keydown",this.keydown)},computed:{store(){return(0,K.h)()},has_classes(){return this.store?.active_doc?.classes?.length>0}},methods:{keydown(e){if(["study","portal"].includes(this.$route.name)&&this.task_types.map((e=>e[2])).includes(e.key)&&this.has_classes){const s=this.task_types.find((s=>s[2]==e.key));this.$router.push({name:"newtask",params:{tasktype:s[0]}}),e.preventDefault(),e.stopPropagation()}},warn_missing_class(){new oe.OO("Please create a class first",2e3)}}};const de=(0,B.Z)(ne,[["render",re]]);var _e=de,ce={name:"LeftBar",components:{SidebarToggle:M,ClassList:J,ActionsPanel:_e},props:{paged:{type:Boolean,default:!1}},emits:["close_right_bar","set_class","mounted","dragclass"],data(){return{sidebar_open:!1}},computed:{store(){return(0,K.h)()}},mounted(){this.$emit("mounted"),window.addEventListener("resize",this.close_sidebar)},unmounted(){window.removeEventListener("resize",this.close_sidebar)},methods:{placeholderToast:oe.gy,show_if_inactive(){this.sidebar_open||(this.sidebar_open=!0),this.$emit("close_right_bar")},close_sidebar(){this.sidebar_open&&setTimeout((()=>this.sidebar_open=!1),10)},set_class(e){this.$emit("set_class",e)},load(){this.loading=!1}},watch:{paged(){this.paged&&(this.sidebar_open=!0)}}};const he=(0,B.Z)(ce,[["render",A],["__scopeId","data-v-5b1969ec"]]);var ge=he,ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJxSURBVHgB7ZmBcdsgFIb/9jqAR6ATNJ3AjJAN7A3iDdwNlE5ANvAIciewN6AbxBskvDOcCUHwQEjJXfTd/WeMEPpBD4QQsLDwtfmGdkijX/b3zmhlRVyM/ludjf4ZHfEJIIN/jJ6NXgqljZSRwAdAxh9RbnpIszZkh7oe59yRDSamZa8PqcMEUMj0wOTmnU64TQBNOAGzmXfq0Yg5wmaycNoCePlg7VCJwHVmaGVkb7T26qeHnWKcRzNe1XjgVM6RtmaHEMh3VHEoCYw37swL5vVyz5aiu6CAScw/ekZVYGqPfAiy0Whv/iljSiI/FljIAqNjzIemVoy6ZWj2B96zxjjcU9tBS+mhQXwJzstBy/Wjn/E9Uig1Y6QgMzRn//T02+gvru8BMZ68tEAeyShTtWyIhQ0Cc2G9+6CMYl4nS+lSOWae/od3cpswf8+8FmsgjzFP6d4e660oj+L7MGD+DmWd1qwBMfPaHnvw8jubr4P8GvOsBnAqTJknbZCnxjwrhDSjoi5hPtbAkHvUvZaewODAqMgfoCpRjo5J2xhhjfcVxp0OodnYg+xoL5Ti7KW3iXISb/eHXF4tZ04hiXxP+IaGQkEjPU5qtAaTXHxKr+xuJvMaBewzlalIeW0bTmn/DlG6xaaAQgFVK8OBelrtaAgU0mUqpN7eJM4XDc0rVLACb66myqUtL2y6Q53RodgXqGTX0EitNhhJy94sVbN90h7A3OZZywYuLWcTjno03tx1zBFOk2yv+2zRdsvRiWa8B8yEQLutR9frk4RMDoFrQ2ruSGzZUUzLz6xr3D6xCtzehYmLFS2Hj7h9al1YWBjJKxvgzZRLiW94AAAAAElFTkSuQmCC";const me=e=>((0,a.dD)("data-v-16a4cedd"),e=e(),(0,a.Cn)(),e),pe={class:"sidebar_overflow"},ke={class:"sidebar_first_block"},fe={key:0,class:"linked_acc_icon"},ye=me((()=>(0,a._)("img",{class:"linked_acc_icon__img",width:"24",height:"24",src:ue,alt:"Linked Account"},null,-1))),ve=[ye],we=me((()=>(0,a._)("div",{class:"auth_logout auth-action can-logout doprompt"},"Log Out",-1))),be=me((()=>(0,a._)("div",{class:"flex_spacer"},null,-1))),Ce=me((()=>(0,a._)("div",{class:"flex_spacer"},null,-1))),De=me((()=>(0,a._)("div",{class:"settings_icon"},null,-1))),Ae=[De];function $e(e,s,t,l,r,o){const n=(0,a.up)("UpcomingTasks"),d=(0,a.up)("SidebarToggle");return(0,a.wg)(),(0,a.iD)("div",{class:(0,i.C_)(["right-bar portal_sidebar",{active:r.sidebar_open}]),onClick:s[1]||(s[1]=(...e)=>o.show_if_inactive&&o.show_if_inactive(...e))},[(0,a._)("div",pe,[(0,a._)("div",ke,[o.store&&o.store.personal_account?((0,a.wg)(),(0,a.iD)("div",fe,ve)):(0,a.kq)("",!0),we]),be,(0,a.Wm)(n,{loading:r.loading},null,8,["loading"]),Ce]),(0,a._)("button",{class:"settings_button click-action",title:"Settings",onClick:s[0]||(s[0]=s=>e.$router.push("/settings"))},Ae),(0,a.Wm)(d,{onClick:o.close_sidebar},null,8,["onClick"])],2)}var Te=t(9242);const Se=e=>((0,a.dD)("data-v-9114ac74"),e=e(),(0,a.Cn)(),e),je={class:"upcoming_tasks"},xe={key:0,class:"upcoming_tasks__not_empty"},Le=Se((()=>(0,a._)("hr",{class:"upcoming_tasks_hr"},null,-1))),Be={key:1,class:"loading_tasks loading_icon",alt:"Loading..."},ze={key:1,class:"upcoming_tasks__empty"},Me=Se((()=>(0,a._)("h5",null,"No Upcoming Tasks!",-1))),We=[Me];function Ue(e,s,t,i,l,r){const o=(0,a.up)("router-link"),n=(0,a.up)("ExamCard");return(0,a.wg)(),(0,a.iD)("div",je,[r.tasks&&r.tasks.length||t.loading?((0,a.wg)(),(0,a.iD)("div",xe,[(0,a._)("h5",null,[(0,a.Wm)(o,{to:{name:"study"},class:"upcoming_tasks__title"},{default:(0,a.w5)((()=>[(0,a.Uk)("Upcoming")])),_:1})]),Le,r.tasks&&r.tasks.length?((0,a.wg)(),(0,a.j4)(Te.W3,{key:0,class:"tasks_container",name:"upcoming-group",tag:"div"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.tasks,(e=>((0,a.wg)(),(0,a.j4)(n,{class:"tasks_container_task",task:e,key:e.ref,href:`/view/${r.store.path_to_ref(e.ref)}`,target:"_blank",onClick:s=>{s.preventDefault(),r.show_task(e)}},null,8,["task","href","onClick"])))),128))])),_:1})):((0,a.wg)(),(0,a.iD)("img",Be))])):((0,a.wg)(),(0,a.iD)("div",ze,We))])}var Ee=t(3096),He={name:"UpcomingTasks",props:{loading:{type:Boolean,default:!1}},components:{ExamCard:Ee.Z},computed:{store(){return(0,K.h)()},tasks(){return this.store.upcoming_todo.slice(0,6)}},methods:{show_task(e){this.$router.push({name:"viewtask",params:{ref:this.store.path_to_ref(e.ref)}})}}};const Ie=(0,B.Z)(He,[["render",Ue],["__scopeId","data-v-9114ac74"]]);var Oe=Ie,Re={name:"RightBar",components:{SidebarToggle:M,UpcomingTasks:Oe},props:{paged:{type:Boolean,default:!1}},emits:["close_left_bar","mounted"],data(){return{sidebar_open:!1,loading:!0}},computed:{store(){return(0,K.h)()}},mounted(){this.$emit("mounted"),window.addEventListener("resize",this.close_sidebar)},unmounted(){window.removeEventListener("resize",this.close_sidebar)},methods:{show_if_inactive(){this.sidebar_open||(this.sidebar_open=!0),this.$emit("close_left_bar")},close_sidebar(){this.sidebar_open&&setTimeout((()=>this.sidebar_open=!1),10)},load(){this.loading=!1}},watch:{paged(){this.paged&&(this.sidebar_open=!0)}}};const qe=(0,B.Z)(Re,[["render",$e],["__scopeId","data-v-16a4cedd"]]);var Ze=qe;const Pe=e=>((0,a.dD)("data-v-4a115db8"),e=e(),(0,a.Cn)(),e),Ye={class:"study portal_main_block"},Ne={class:"study_header portal_main_block_header"},Xe=Pe((()=>(0,a._)("div",{class:"study_name portal_main_block_title"},[(0,a.Uk)(" Upcoming"),(0,a._)("span",{class:"desktop_only_text"}," Assignments")],-1))),Ve={class:"portal_main_block_actions_wrapper"},Ke={class:"portal_main_block_actions portal_main_block_actions_freeform"},Qe=["onClick","title"],Fe=["href"],Je=Pe((()=>(0,a._)("hr",{class:"study_list__separator"},null,-1))),Ge=["finished"],es=["for","title","onClick"],ss=Pe((()=>(0,a._)("div",{class:"study_list_task_checkbox__fixed"},[(0,a._)("span",{class:"study_list_task_checkbox__dot"})],-1))),ts=[ss],as=["for","onClick","href"],is={class:"study_list_task__name__text"},ls={class:"study_list_task__date study_list_task__boxed"};function rs(e,s,t,l,r,o){const n=(0,a.up)("LoadingCover");return(0,a.wg)(),(0,a.iD)("main",Ye,[r.is_ready?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(n,{key:0,class:"study_loading",covering:"Study Tasks"})),(0,a._)("div",Ne,[Xe,(0,a._)("div",Ve,[(0,a._)("nav",Ke,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.lengths,(e=>((0,a.wg)(),(0,a.iD)("button",{class:(0,i.C_)(["portal_main_block_action portal_main_block_action_freeform portal_main_block_action__text",{active:r.days==e[0]}]),onClick:s=>r.days=e[0],title:`${e[2]} (${e[3]})`,key:e[0]},(0,i.zw)(e[1]),11,Qe)))),128))]),(0,a._)("button",{class:"portal_main_block_action portal_main_block_action_alt",title:"View Calendar (c)",onClick:s[0]||(s[0]=(...e)=>o.swap_to_calendar&&o.swap_to_calendar(...e))},[(0,a._)("div",{class:(0,i.C_)(["action_icon cal-icon",{alt:o.store.upcoming&&o.store.upcoming.length}])},null,2)])])]),(0,a.Wm)(Te.W3,{name:"study-group",class:(0,i.C_)(["study_list_group",{filtered:t.filtered_classes.length}]),tag:"div"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.arranged,(s=>((0,a.wg)(),(0,a.iD)("div",{class:"study_list",key:s[0].class_id,style:(0,i.j5)({"--color-class":o.classes[s[0].class_id].color,"--color-class-alt":o.classes[s[0].class_id].color+"2d"})},[(0,a._)("a",{class:"study_list__name",href:"/view/"+o.store.path_to_ref(o.classes[s[0].class_id].ref)},(0,i.zw)(s[0].class_name),9,Fe),Je,(0,a.Wm)(Te.W3,{class:"study_list_tasks",name:"study-list",tag:"div"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s,(s=>((0,a.wg)(),(0,a.iD)("div",{class:"study_list_task",key:s.ref,finished:o.is_finished(s.ref)},[(0,a._)("label",{for:s.ref,class:"study_list_task_checkbox",title:"Mark task as "+(o.is_finished(s.ref)?"unfinished":"finished"),onClick:e=>o.toggle_finished(s.ref)},ts,8,es),(0,a._)("a",{class:"study_list_task__name study_list_task__boxed",for:s.ref,onClick:t=>{e.$emit("taskclick",s),t.preventDefault()},href:"/view/"+o.store.path_to_ref(s.ref)},[(0,a._)("span",is,(0,i.zw)(o.prefixed_name(s)),1)],8,as),(0,a._)("span",ls,(0,i.zw)(s.date&&s.date.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})||"Invalid Date"),1)],8,Ge)))),128))])),_:2},1024)],4)))),128))])),_:1},8,["class"])])}const os=e=>((0,a.dD)("data-v-91a2fdc8"),e=e(),(0,a.Cn)(),e),ns=["title"],ds=os((()=>(0,a._)("div",{class:"loading_cover__overlay"},null,-1))),_s={class:"loading_cover__content"},cs=os((()=>(0,a._)("div",{class:"loading_cover__content__icon"},[(0,a._)("img",{class:"loading_icon"})],-1)));function hs(e,s,t,i,l,r){return(0,a.wg)(),(0,a.iD)("div",{class:"loading_cover",title:"Loading "+t.covering},[ds,(0,a._)("div",_s,[cs,(0,a.WI)(e.$slots,"default",{},void 0,!0)])],8,ns)}var gs={name:"LoadingCover",props:{covering:{type:String,default:"Content"}}};const us=(0,B.Z)(gs,[["render",hs],["__scopeId","data-v-91a2fdc8"]]);var ms=us,ps=t(2745),ks={name:"StudyBlock",components:{LoadingCover:ms},props:{filtered_classes:{Array:Array,default:()=>[]}},emits:["taskclick","mounted"],data(){return{tasks:[],is_ready:!1,days:7,lengths:[[1,"Day","Tasks today","d"],[7,"Week","Tasks in the next week","w"],[31,"Month","Tasks in the next month","m"],[Number.MAX_SAFE_INTEGER,"All","All upcoming tasks","a"]],prefixes:{note:"",task:"Complete ",test:"Study for ",project:"Prepare ",quiz:"Study for ",exam:"Study for "}}},mounted(){ps.i2.log("👓 Study page mounted"),this.$emit("mounted"),this.tasks=this.store.tasks,window.addEventListener("keydown",this.handle_key)},beforeUnmount(){window.removeEventListener("keydown",this.handle_key)},computed:{store(){return(0,K.h)()},classes(){let e={};for(let s of this.store.classes)e[s.id]=s;return e},filtered_tasks(){let e=this.tasks?.filter((e=>!this.filtered_classes.length||this.filtered_classes.includes(e.class_id)));const s=Date.now(),t=576e5;return e=e.filter((e=>{const a=e?.date?.getTime?e.date.getTime():0;return"note"!=e.type&&a>=s-t&&a<=s+24*this.days*60*60*1e3})).sort(((e,s)=>e.date<s.date?-1:e.date>s.date?1:0)),e.sort(((e,s)=>{let t=this.store.finished_tasks.includes(e.ref),a=this.store.finished_tasks.includes(s.ref);return t&&!a?1:!t&&a?-1:0})),e},arranged(){let e=this.filtered_tasks,s={};for(let a of e)s[a.class_id]||(s[a.class_id]=[]),s[a.class_id].push(a);let t=[];for(let a in s)t.push(s[a]);return t.sort(((e,s)=>{let t=this.classes[e[0].class_id],a=this.classes[s[0].class_id];return t.period-a.period})),t}},methods:{handle_key(e){if(!e.ctrlKey&&"study"==this.$route.name)if("c"==e.key)this.swap_to_calendar();else{let s=this.lengths.find((s=>s[3]==e.key));s&&(this.days=s[0])}},prefixed_name(e){return this.prefixes[e.type]+e.name},swap_to_calendar(){this.$router.push({name:"portal"})},run_get_tasks(){this.tasks=this.store.tasks,this.is_ready=!0},is_finished(e){return this.store.finished_tasks.includes(e)},toggle_finished(e){this.store.set_finished(!this.is_finished(e),e).then((()=>{ps.i2.log("📦 Task completion status set")})).catch((e=>{ps.i2.error("🔥 Couldn't set task finished",e)}))}},watch:{"store.classes":{handler(e,s){e.length!=s.length&&this.is_ready&&(ps.i2.log("📦 Classes array length changed, calendar updating tasks"),this.store.fetch_classes().then((()=>{this.run_get_tasks()})).catch((e=>{ps.i2.error("🔥 Couldn't fetch classes",e)})))},deep:!0},"store.tasks":{handler(){this.tasks=this.store.tasks},deep:!0}}};const fs=(0,B.Z)(ks,[["render",rs],["__scopeId","data-v-4a115db8"]]);var ys=fs;const vs=e=>((0,a.dD)("data-v-ffe3c6da"),e=e(),(0,a.Cn)(),e),ws={class:"calendar_header portal_main_block_header"},bs=["title"],Cs={class:"portal_main_block_actions_wrapper"},Ds={class:"portal_main_block_actions"},As=vs((()=>(0,a._)("div",{class:"action_icon arrow-icon left"},null,-1))),$s=[As],Ts=vs((()=>(0,a._)("div",{class:"action_icon arrow-icon right"},null,-1))),Ss=[Ts],js={class:"calendar_day__weekday_label__text"},xs=["_date","onDragover"],Ls=["onClick"],Bs={class:"calendar_day_date__short"},zs={class:"calendar_day_date__long",style:{display:"none"}},Ms={class:"calendar_day_tasks"},Ws=["is_note","title","draggable","onDragstart","href","onClick"],Us={key:0,class:"calendar_day_task_editable"},Es={key:1},Hs=vs((()=>(0,a._)("span",{class:"calendar_day_task__swatch"},null,-1))),Is=vs((()=>(0,a._)("span",{class:"calendar_day_task__note"}," NOTE ",-1))),Os=[Hs,Is],Rs={key:2},qs={key:0,class:"calendar__no_tasks",style:{display:"none"}};function Zs(e,s,t,l,r,o){const n=(0,a.up)("LoadingCover");return(0,a.wg)(),(0,a.iD)("main",{class:(0,i.C_)(["calendar portal_main_block",{calendar_fullpage:t.fullpage}]),onDrag:s[5]||(s[5]=(...e)=>o.check_leave&&o.check_leave(...e))},[r.is_ready?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(n,{key:0,class:"calendar_loading",covering:"Calendar Tasks"})),(0,a._)("div",ws,[(0,a._)("div",{class:"calendar_date portal_main_block_title",title:"Currently viewing "+r.loaded_month.toLocaleDateString(void 0,{month:"long",year:"numeric"})},(0,i.zw)(r.loaded_month.toLocaleDateString("en-US",{month:"long",year:"numeric"})),9,bs),(0,a._)("div",Cs,[(0,a._)("nav",Ds,[(0,a._)("button",{class:"portal_main_block_action",onClick:s[0]||(s[0]=(...e)=>o.prev_month&&o.prev_month(...e)),title:"Previous month (Left)"},$s),(0,a._)("button",{class:"portal_main_block_action",onClick:s[1]||(s[1]=(...e)=>o.this_month&&o.this_month(...e)),title:"Current month (Home)"},[(0,a._)("div",{class:(0,i.C_)(["action_icon cal-icon",{alt:r.tasks&&r.tasks.length}])},null,2)]),(0,a._)("button",{class:"portal_main_block_action",onClick:s[2]||(s[2]=(...e)=>o.next_month&&o.next_month(...e)),title:"Next month (Right)"},Ss)]),(o.store.is_teacher,(0,a.wg)(),(0,a.iD)("button",{key:0,class:"portal_main_block_action portal_main_block_action_alt",onClick:s[3]||(s[3]=(...e)=>o.swap_to_study&&o.swap_to_study(...e)),title:"View study portal (s)"},[(0,a._)("div",{class:(0,i.C_)(["action_icon todo-icon",{alt:o.store.upcoming_todo&&o.store.upcoming_todo.length}])},null,2)]))])]),(0,a._)("div",{class:"calendar_days_container hidescroll",style:(0,i.j5)({"--color-dragging":r.drag.task&&r.drag.task.color||r.drag.class&&r.drag.class.color,"--color-dragging-alt":r.drag.task&&r.drag.task.color||r.drag.class&&r.drag.class.color?(r.drag.task&&r.drag.task.color||r.drag.class&&r.drag.class.color)+"80":null})},[(0,a._)("div",{class:(0,i.C_)(["calendar_days",{calendar_days__current:o.day_matches(r.loaded_month,new Date((new Date).setDate(1))),calendar_days__changed:r.is_changed}]),ref:"calendar_days"},[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],(e=>(0,a._)("div",{class:"calendar_day calendar_day__weekday_label",key:e},[(0,a._)("span",js,(0,i.zw)(e),1)]))),64)),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.days,(t=>((0,a.wg)(),(0,a.iD)("div",{class:(0,i.C_)(["calendar_day",{calendar_day__placeholder:t.is_placeholder&&!o.store.simplified,calendar_day__hastask:!!t.tasks&&t.tasks.length,calendar_day__today:t.is_today,calendar_day__past:t.is_past,calendar_day__drag_to:r.drag.to==t.date,calendar_day__drag_class_to:r.drag.to==t.date&&r.drag.class,calendar_day__drag_from:r.drag.from==t.date}]),_date:t.date.toISOString().split("T")[0],onDragover:e=>o.drag_over(t.date),key:t.date},[(0,a._)("div",{class:(0,i.C_)(["calendar_day_date",{"click-action":o.store.is_teacher}]),onClick:s=>{o.store.is_teacher&&e.$router.push({name:"newtask",query:{date:o.format_date(t.date)}})}},[(0,a._)("span",Bs,(0,i.zw)(t.date.getDate()),1),(0,a._)("span",zs,(0,i.zw)(t.date.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),1)],10,Ls),(0,a._)("div",Ms,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.tasks,(l=>((0,a.wg)(),(0,a.iD)("a",{class:(0,i.C_)(["calendar_day_task click-action",{calendar_day_task__dragging:r.drag.task==l,calendar_day_task__loading:r.drag.task==l&&r.drag.load}]),is_note:"note"===l.type,key:l.name,title:l.name,draggable:l&&o.store.is_teacher&&o.store.user&&l.ref.split("/")[0]==o.store.active_doc.email&&"study"!=e.$route.name,onDragstart:e=>r.drag={task:l,from:t.date},onDragend:s[4]||(s[4]=(...e)=>o.drag_drop&&o.drag_drop(...e)),style:(0,i.j5)({"--color-calendar-task":l.color,"--color-calendar-task-alt":l.color+"40"}),href:"/view/"+o.get_link(l.ref),onClick:s=>{s.preventDefault(),e.$emit("taskclick",l)}},[l&&o.store.is_teacher&&o.store.user&&l.ref.split("/")[0]==o.store.active_doc.email?((0,a.wg)(),(0,a.iD)("div",Us,[(0,a._)("span",{class:(0,i.C_)(["task_icon task_edit__icon",{loading_bg:r.drag.load}])},null,2)])):(0,a.kq)("",!0),"note"===l.type?((0,a.wg)(),(0,a.iD)("span",Es,Os)):((0,a.wg)(),(0,a.iD)("span",Rs,(0,i.zw)(l.name),1))],46,Ws)))),128))])],42,xs)))),128)),o.tasks_loaded_month?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",qs," Relax! No Tasks. "))],2)],4)],34)}var Ps={name:"CalendarBlock",components:{LoadingCover:ms},props:{filtered_classes:{Array:Array,default:()=>[]},dragging_class:{Object:Object,default:()=>null},fullpage:{Boolean:Boolean,default:!1}},emits:["taskclick","mounted"],data(){return{loaded_month:new Date((new Date).setDate(1)),is_ready:!1,tasks:[],is_changed:!1,drag:{}}},mounted(){ps.i2.log("📅 Calendar mounted"),this.$emit("mounted"),this.tasks=this.store.tasks,window.addEventListener("keydown",this.handle_key)},beforeUnmount(){window.removeEventListener("keydown",this.handle_key)},methods:{handle_key(e){if(!e.ctrlKey&&"portal"==this.$route.name)if("s"==e.key)this.swap_to_study();else{const s=e.shiftKey;let t=()=>{};if("ArrowLeft"==e.key)t=this.prev_month;else if("ArrowRight"==e.key)t=this.next_month;else if("Home"==e.key)return void this.this_month();for(let e=0;e<(s?12:1);e++)t()}},swap_to_study(){this.$router.push({name:"study"})},check_leave(e){try{const s=this.$refs.calendar_days.getBoundingClientRect();this.drag.to&&(e.clientX||e.clientX)&&(e.clientX<s.left||e.clientX>s.right||e.clientY<s.top||e.clientY>s.bottom)&&(this.drag.to=null)}catch(s){ps.i2.error("🔥 Couldn't check if mouse left calendar",s)}},drop_class(){this.drag?.class&&this.drag?.to&&(ps.i2.log("📅 Dropped class on calendar day"),this.$router.push({name:"newtask",query:{class:this.drag.class.id,date:new Date(this.drag.to.getTime()-60*this.drag.to.getTimezoneOffset()*1e3).toISOString().split("T")[0]}})),this.drag={}},drag_over(e){this.drag.to!=e&&(this.drag.class?this.drag.to=e:this.drag.to=this.drag.to!=this.drag.from?e:null)},drag_drop(){if(this.drag.to&&this.drag.from&&this.drag.to!=this.drag.from&&this.drag.task){let e=this.drag.to;this.drag.load=!0,this.drag.to=null,this.store.update_task(this.drag.task.ref,{...this.drag.task,date:new Date(e-60*e.getTimezoneOffset()*1e3).toISOString().split("T")[0]}).then((()=>{new oe.bF(`Moved ${this.drag.task.type} ${this.drag.task.name?'"'+this.drag.task.name+'" ':""}to ${e.toLocaleDateString()}`,2e3),ps.i2.log("📅 Moved task date"),this.drag={}})).catch((e=>{new oe.PK("Couldn't update task",e,2e3),ps.i2.error("🔥 Couldn't update task",e),this.drag={}}))}else this.drag={}},format_date(e){return e.toISOString().split("T")[0]||""},day_matches(e,s){return e.getDate()===s.getDate()&&e.getMonth()===s.getMonth()&&e.getFullYear()===s.getFullYear()},get_day_tasks(e){return this.tasks.filter((s=>{const t=(0,ps.HU)(s.date);return this.day_matches(t,e)&&(!this.filtered_classes.length||this.filtered_classes.includes(s.class_id))})).sort(((e,s)=>{if("note"==e.type&&"note"!=s.type)return-1}))},next_month(){this.is_changed=!0,this.loaded_month=new Date(this.loaded_month.setMonth(this.loaded_month.getMonth()+1))},this_month(){let e=new Date((new Date).setDate(1));this.day_matches(this.loaded_month,e)&&(this.is_changed=!this.is_changed),this.loaded_month=e},prev_month(){this.is_changed=!0,this.loaded_month=new Date(this.loaded_month.setMonth(this.loaded_month.getMonth()-1))},run_get_tasks(){this.tasks=this.store.tasks,this.is_ready=!0},get_link(e){let[s,t,a]=e.split("/");return s=s.split("@")[0],[s,t,a].join("~")}},computed:{tasks_loaded_month(){return this.tasks.some((e=>{(0,ps.HU)(e.date);return!0}))},store(){return(0,K.h)()},days(){const e=[],s=(0,ps.HU)((new Date).toISOString().split("T")[0]),t=this.loaded_month.getTime();function a(){return new Date(t)}const i=new Date(a().setDate(1)),l=new Date(a().setMonth(a().getMonth()+1,0));for(let r=i.getDay();r>0;r--){const t=new Date(a().setDate(-r));e.push({date:t,tasks:this.get_day_tasks(t),is_placeholder:!0,is_past:t.getTime()<s.getTime()})}for(let r=1;r<=l.getDate();r++){const t=new Date(a().setDate(r));e.push({date:t,tasks:this.get_day_tasks(t),is_today:this.day_matches(t,new Date),is_past:t.getTime()<s.getTime()})}for(let r=1;e.length<42;r++){const t=new Date(a().setDate(l.getDate()+r));e.push({date:t,tasks:this.get_day_tasks(t),is_placeholder:!0,is_past:t.getTime()<s.getTime()})}return e}},watch:{dragging_class(e,s){e?.ref!=s?.ref&&(this.drag={}),this.drag.class=this.dragging_class},"store.classes":{handler(e,s){e.length!=s.length&&this.is_ready&&(ps.i2.log("📦 Classes array length changed, calendar updating tasks"),this.store.fetch_classes().then((()=>{this.run_get_tasks()})).catch((e=>{ps.i2.error("🔥 Couldn't fetch classes",e)})))},deep:!0},"store.tasks":{handler(){this.tasks=this.store.tasks},deep:!0}}};const Ys=(0,B.Z)(Ps,[["render",Zs],["__scopeId","data-v-ffe3c6da"]]);var Ns=Ys,Xs=t(3917),Vs={name:"AppPortal",components:{LeftBar:ge,RightBar:Ze,StudyBlock:ys,CalendarBlock:Ns,OverlayWrapper:Xs.Z},data(){return{filtered_classes:[],welcomes:["Welcome","Hi","Hello","Hey","Howdy"],loaded:!1,dragging_class:null,is_study:"study"==this.$route.name,page:"block"}},computed:{width(){return window.innerWidth},close_path(){return this.$route?.query?.redirect||this.$route?.meta?.close_path},name(){return this.store.user?.displayName?.split(" ")[0]||"User"},did_survey(){return this.store.done_daily_survey},random_welcome(){return this.welcomes[Math.floor(Math.random()*this.welcomes.length)]},store(){return(0,K.h)()}},methods:{drag_class(e){this.dragging_class=e},do_survey(){this.$router.replace({name:"daily",query:{redirect:this.$route.fullPath}}),new oe.OO("Please complete the daily survey to use MVTT today!",3e3)},close_left_bar(){this.$refs.LeftBar?.close_sidebar()},close_right_bar(){this.$refs.RightBar?.close_sidebar()},show_task(e){this.$router.push({name:"viewtask",params:{ref:this.store.path_to_ref(e.ref)}})},toggle_filtered_class(e){this.filtered_classes.includes(e)?this.filtered_classes=this.filtered_classes.filter((s=>s!==e)):this.filtered_classes.push(e)},check_and_do_survey(){this?.store?.user&&!this?.did_survey&&!0!==this.$route?.meta?.noSurvey&&this.do_survey()},check_and_do_join(){this.store.done_join_form||(this.$router.push({name:"join",query:{redirect:this.$route.fullPath}}),new oe.OO("Please fill out the join form to use MVTT!",3e3))}},mounted(){ps.i2.log("🏗 Portal mounted"),this.check_and_do_join(),this.check_and_do_survey(),this.store.fetch_classes().then((()=>{this.$refs.study&&this.$refs.study.run_get_tasks(),this.$refs.calendar&&this.$refs.calendar.run_get_tasks(),this.$refs.RightBar.load(),this.$refs.LeftBar.load(),this.loaded=!0})).catch((e=>{ps.i2.error("🔥 Couldn't fetch classes",e)}))},watch:{width(e,s){s<=600&&e>600&&(this.page="block")},did_survey(){this.check_and_do_survey()},$time(){this.check_and_do_survey()},$route(){this.is_study||"study"!=this.$route.name?"portal"==this.$route.name&&(this.is_study=!1):this.is_study=!0,"portal"!=this.$route.name&&(this.close_right_bar(),this.close_left_bar()),this.check_and_do_survey()},store:{handler(){this.check_and_do_join()},deep:!0}}};const Ks=(0,B.Z)(Vs,[["render",m],["__scopeId","data-v-2af53f76"]]);var Qs=Ks}}]);
//# sourceMappingURL=958.6213d48e.js.map