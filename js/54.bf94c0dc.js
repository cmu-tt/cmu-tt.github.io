"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[54],{1311:function(e,t,s){s.d(t,{l:function(){return l}});var a=s(2745),i=s(1020);const r="https://api.mvtt.app/",l=(0,i.Q_)({id:"magic",state:()=>({last:{},types:[{key:"note",name:"Note",list_as:"Add a Note",shortcuts:["n"]},{key:"task",name:"Assignment",list_as:"Schedule an Assignment",shortcuts:["a"]},{key:"test",name:"Test",list_as:"Schedule a Test",shortcuts:["t"]},{key:"project",name:"Project",list_as:"Schedule a Project",shortcuts:["p"]},{key:"quiz",name:"Quiz",list_as:"Schedule a Quiz",shortcuts:["q"]},{key:"exam",name:"Exam",list_as:"Schedule an Exam",shortcuts:["e"]}]}),getters:{},actions:{type_full(e){return this.types.find((t=>t.key===e))?.name||e},async text(e){if(e)return await this.rated_api_get("get/magic/link-text",{path:e})},async type(e){if(e)return await this.rated_api_get("get/magic/task-type",{task:e})},async api_get(e,t){if(t=t||{},!e)return;const s=new URL(r+e);Object.keys(t).forEach((e=>s.searchParams.append(e,t[e])));const i=Math.random().toString(36).substring(7);a.i2.log(`🛜 Running API fetch | <${i}>`),this.last[e]={time:Date.now(),hash:i};try{const e=await fetch(s.href,{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw"Non-valid response";const t=await e.json();return a.i2.log(`🛜 API fetch success | <${i}>`),t.data}catch(l){return a.i2.error(`🛜 API fetch failed  | <${i}>`,l),null}},async rated_api_get(e){a.i2.log("🛜 API fetch requested");const t=Math.random().toString(36).substring(7),s=this.last[e]?.time,i=this.last[e]?.hash;if(Date.now()-s<2e3){if(a.i2.warn("🛜 API fetch rate limited"),await new Promise((e=>setTimeout(e,15e3))),this.last[e]?.time!==s||this.last[e]?.hash!==i)return void a.i2.warn("🛜 Outdated API fetch skipped");a.i2.log("🛜 API fetch rate limit lifted")}return await this.api_get(...arguments,t)}}})},7108:function(e,t,s){s.d(t,{Z:function(){return f}});var a=s(3396),i=s(7139);const r=["title"],l=(0,a._)("div",{class:"task_card_icon_container"},[(0,a._)("div",{class:"task_card_icon_container__img"})],-1),o=[l],n={class:"task_card_details"},c={class:"task_card_details__title"},d={class:"task_card_details__extended"},_={class:"task_card_details__extended__date"},h={class:"task_card_details__extended__type"};function u(e,t,s,l,u,g){return(0,a.wg)(),(0,a.iD)("a",{class:"task_card",style:(0,i.j5)({"--color-calendar-task":s.task.color})},[(0,a._)("div",{class:"task_card_icon",title:s.task.class_name},o,8,r),(0,a._)("div",n,[(0,a._)("div",c,(0,i.zw)(s.task.name),1),(0,a._)("div",d,[(0,a._)("span",_,(0,i.zw)(s.task.date.toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"})),1),(0,a.Uk)("  |  "),(0,a._)("span",h,(0,i.zw)(g.type_full),1)])])],4)}var g=s(1311),p={name:"ExamCard",props:{task:{type:Object,required:!0}},computed:{type_full(){return(0,g.l)().type_full(this.task.type)}}},m=s(89);const k=(0,m.Z)(p,[["render",u]]);var f=k},8054:function(e,t,s){s.r(t),s.d(t,{default:function(){return Gt}});s(7658);var a=s(3396),i=s(7139);const r=["page"],l={class:"portal_content__spaced"},o={class:"portal_info calendar_width"},n={class:"portal_info_title"},c={class:"portal_info_usertype"},d={class:"portal_info_date"},_={class:"portal_info_welcome"},h={class:"portal_mobile_nav"},u=["id","onClick"],g=["src"];function p(e,t,s,p,m,k){const f=(0,a.up)("LeftBar"),y=(0,a.up)("StudyBlock"),w=(0,a.up)("CalendarBlock"),v=(0,a.up)("RightBar"),b=(0,a.up)("router-view"),C=(0,a.up)("OverlayWrapper");return(0,a.wg)(),(0,a.iD)("main",{class:"portal",page:m.page},[(0,a.Wm)(f,{ref:"LeftBar",class:(0,i.C_)({paged:"left"==m.page}),paged:"left"==m.page,onToggle_filtered_class:k.toggle_filtered_class,onClear_filters:t[0]||(t[0]=e=>m.filtered_classes=[]),onClose_right_bar:k.close_right_bar,filtered_classes:m.filtered_classes,onDragclass:t[1]||(t[1]=e=>{k.close_left_bar(),k.drag_class(e)}),onDrag:t[2]||(t[2]=t=>e.$refs.calendar.check_leave(t)),onDragend:t[3]||(t[3]=t=>e.$refs.calendar.drop_class(t)),onMounted:t[4]||(t[4]=t=>{m.loaded&&e.$refs.LeftBar.load()})},null,8,["class","paged","onToggle_filtered_class","onClose_right_bar","filtered_classes"]),(0,a._)("div",{class:"portal_content",onClick:t[9]||(t[9]=e=>{k.close_right_bar(),k.close_left_bar()})},[(0,a._)("div",l,[(0,a._)("header",o,[(0,a._)("div",n,[(0,a._)("span",c,(0,i.zw)(k.store.is_teacher?"Teacher":"Student")+" Dashboard",1),(0,a._)("span",d,(0,i.zw)((new Date).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),1)]),(0,a._)("div",_,(0,i.zw)(k.store.recently_joined?"Welcome to MVTT":k.store.non_recent_signin?"Welcome Back":k.random_welcome)+" "+(0,i.zw)(k.name)+"! ",1)]),m.is_study?((0,a.wg)(),(0,a.j4)(y,{key:0,filtered_classes:m.filtered_classes,onTaskclick:t[5]||(t[5]=e=>k.show_task(e)),ref:"study",onMounted:t[6]||(t[6]=t=>{m.loaded&&e.$refs.study.run_get_tasks()})},null,8,["filtered_classes"])):((0,a.wg)(),(0,a.j4)(w,{key:1,filtered_classes:m.filtered_classes,onTaskclick:t[7]||(t[7]=e=>k.show_task(e)),ref:"calendar",dragging_class:m.dragging_class,onMounted:t[8]||(t[8]=t=>{m.loaded&&e.$refs.calendar.run_get_tasks()})},null,8,["filtered_classes","dragging_class"]))])]),(0,a.Wm)(v,{ref:"RightBar",class:(0,i.C_)({paged:"right"==m.page}),paged:"right"==m.page,onClose_left_bar:k.close_left_bar,onMounted:t[10]||(t[10]=t=>{m.loaded&&e.$refs.RightBar.load()})},null,8,["class","paged","onClose_left_bar"]),(0,a._)("nav",h,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(["left","block","right"],(e=>(0,a._)("button",{class:(0,i.C_)(["portal_mobile_nav_page",{active:m.page==e}]),id:"portal_mobile__"+e,key:e,onClick:t=>m.page=e},[(0,a._)("span",{class:(0,i.C_)(["portal_mobile_nav_page__icon",{alt:m.page==e}]),src:`portal-${e}-icon`},null,10,g)],10,u))),64))]),["portal","study"].includes(e.$route.name)?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(C,{key:0,onClose:t[12]||(t[12]=t=>k.close_path?e.$router.push(k.close_path):e.$router.push({name:m.is_study?"study":"portal",query:{...e.$route.query,date:void 0}}))},{default:(0,a.w5)((e=>[(0,a.Wm)(b,{class:"router_center_view",onClose:e.close,onClear_filters:t[11]||(t[11]=e=>m.filtered_classes=[])},null,8,["onClose"])])),_:1}))],8,r)}const m=e=>((0,a.dD)("data-v-5b1969ec"),e=e(),(0,a.Cn)(),e),k={class:"sidebar_overflow"},f=m((()=>(0,a._)("div",{class:"branding-title gohome"},"MV Test Tracker",-1))),y=m((()=>(0,a._)("div",{class:"flex_spacer"},null,-1))),w=m((()=>(0,a._)("div",{class:"flex_spacer"},null,-1))),v=["_theme"],b=m((()=>(0,a._)("div",{class:"theme_icon"},null,-1))),C=m((()=>(0,a._)("div",{class:"toggle_text"},"Switch Theme",-1))),D=[b,C];function $(e,t,s,r,l,o){const n=(0,a.up)("ActionsPanel"),c=(0,a.up)("ClassList"),d=(0,a.up)("SidebarToggle");return(0,a.wg)(),(0,a.iD)("div",{class:(0,i.C_)(["left-bar portal_sidebar",{active:l.sidebar_open}]),onClick:t[2]||(t[2]=(...e)=>o.show_if_inactive&&o.show_if_inactive(...e))},[(0,a._)("div",k,[f,y,o.store&&o.store.is_teacher?((0,a.wg)(),(0,a.j4)(n,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(c,(0,a.dG)(e.$attrs,{onDragclass:t[0]||(t[0]=t=>e.$emit("dragclass",t))}),null,16),w]),(0,a._)("button",{_theme:o.store.get_theme,class:"theme_button click-action",title:"Switch Theme",onClick:t[1]||(t[1]=(...e)=>o.store.toggle_theme&&o.store.toggle_theme(...e))},D,8,v),(0,a.Wm)(d,{class:"right",onClick:o.close_sidebar},null,8,["onClick"])],2)}const A=e=>((0,a.dD)("data-v-2e4cb15c"),e=e(),(0,a.Cn)(),e),T={class:"sidebar_toggle click-action",title:"Close Sidebar"},S=A((()=>(0,a._)("div",{class:"arrow-icon"},null,-1))),q=[S];function x(e,t,s,i,r,l){return(0,a.wg)(),(0,a.iD)("button",T,q)}var j={name:"SidebarToggle"},L=s(89);const z=(0,L.Z)(j,[["render",x],["__scopeId","data-v-2e4cb15c"]]);var B=z;const M=e=>((0,a.dD)("data-v-1a3dbbbc"),e=e(),(0,a.Cn)(),e),P={class:"class_list"},E=["title"],I=M((()=>(0,a._)("hr",{class:"class_list_hr"},null,-1))),U=["href","draggable","onDragstart","onDragend","onClick"],W=["_email","title","onClick"],O={key:0,class:"class_swatch__icon class_swatch_remove__icon"},R={key:1,class:"class_swatch__icon class_swatch_edit__icon"},H={key:0,class:"class_name"},X={key:1,class:"class_name"},N=M((()=>(0,a._)("div",{class:"class_swatch"},[(0,a._)("div",{class:"class_swatch__add_icon"})],-1))),Z=M((()=>(0,a._)("span",{class:"class_name"},"Join a Class",-1))),K=[N,Z];function Y(e,t,s,r,l,o){return(0,a.wg)(),(0,a.iD)("div",P,[(0,a._)("div",{class:(0,i.C_)(["class_list__not_empty",{filtering:!!s.filtered_classes.length}])},[(0,a._)("h5",{onClick:t[0]||(t[0]=t=>e.$emit("clear_filters")),title:s.filtered_classes.length?"Click to clear filters":""}," Classes ",8,E),I,(0,a._)("div",{class:(0,i.C_)(["classes_container",{filtering:!!s.filtered_classes.length}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.classes,(t=>((0,a.wg)(),(0,a.iD)("a",{class:(0,i.C_)(["classes_container_class",{filter_active:s.filtered_classes.includes(t.id),classes_container_class__dragging:l.dragging&&l.dragging.ref==t.ref}]),ref_for:!0,ref:t.ref,href:"/view/"+o.clean_ref(t.ref),draggable:o.store.is_teacher&&t.email==this.store.user.email&&"study"!=e.$route.name,onDragstart:s=>{e.$emit("dragclass",t),e.$emit("clear_filters"),l.dragging=t},onDragend:s=>{l.dragging=null,e.$emit("dragclass",{...t,_done:!0})},key:t.name,onClick:s=>{e.$emit("toggle_filtered_class",t.id),s.preventDefault()},style:(0,i.j5)({"--color-class":t.color,"--color-class-alt":t.color+"40"})},[(0,a._)("div",{class:"class_swatch",_email:t.email,title:o.store.is_teacher&&t.email==this.store.user.email?"Edit Class":"Leave Class",onClick:e=>{o.store.is_teacher&&t.email==this.store.user.email?o.edit_class(t):o.leave_class(t),e.preventDefault(),e.stopPropagation()}},[o.store.is_teacher&&t.email==this.store.user.email?((0,a.wg)(),(0,a.iD)("div",R)):((0,a.wg)(),(0,a.iD)("div",O))],8,W),t.period?((0,a.wg)(),(0,a.iD)("span",H,"P"+(0,i.zw)(t.period)+" - "+(0,i.zw)(t.name),1)):((0,a.wg)(),(0,a.iD)("span",X,(0,i.zw)(t.name),1))],46,U)))),128)),(o.store.is_teacher,(0,a.wg)(),(0,a.iD)("div",{key:0,class:"classes_container_class classes_container_class__add_class",onClick:t[1]||(t[1]=t=>e.$router.push({name:"addclass",query:e.$route.query}))},K))],2)],2)])}var V=s(8980),Q={props:{filtered_classes:{type:Array,default:()=>[]}},name:"ClassList",data(){return{dragging:null}},computed:{store(){return(0,V.h)()},classes(){return this.store.classes.map((e=>({...e,email:e.id.split("/")[0]})))}},emits:["toggle_filtered_class","clear_filters","dragclass"],methods:{clean_ref(e){let[t,s]=e.split("/");return t=t.split("@")[0],[t,s].join("~")},leave_class(e){this.$router.push({name:"leave",params:{ref:this.clean_ref(e.id)},query:this.$route.query})},edit_class(e){this.$router.push({name:"editclass",params:{ref:this.clean_ref(e.id)},query:this.$route.query})}}};const J=(0,L.Z)(Q,[["render",Y],["__scopeId","data-v-1a3dbbbc"]]);var F=J;const G={class:"teacher_actions"},ee=["disabled","title","onClick"],te=(0,a._)("div",{class:"teacher_action__icon icon__add"},null,-1),se={class:"teacher_action__text"},ae=(0,a._)("div",{class:"teacher_action__icon icon__create"},null,-1),ie=(0,a._)("div",{class:"teacher_action__text"},"Create a Class",-1),re=[ae,ie];function le(e,t,s,r,l,o){return(0,a.wg)(),(0,a.iD)("div",G,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.selected_types,(t=>((0,a.wg)(),(0,a.iD)("div",{disabled:!o.has_classes,title:o.has_classes?`${t.list_as} (${t.shortcuts.map((e=>"+ and "+e)).join(", ")})`:"Please create a class first",key:t.key,class:"teacher_action",onClick:s=>{o.has_classes?e.$router.push({name:"newtask",params:{tasktype:t.key},query:this.$route.query}):o.warn_missing_class()}},[te,(0,a._)("div",se,(0,i.zw)(t.list_as),1)],8,ee)))),128)),(0,a._)("div",{class:"teacher_action",onClick:t[0]||(t[0]=t=>e.$router.push({name:"createclass",query:e.$route.query}))},re)])}var oe=s(1311),ne=s(1708),ce=s(9403),de={data(){return{plusDown:!1,equalDown:!1}},mounted(){window.addEventListener("keydown",this.keydown),window.addEventListener("keyup",this.keyup),(0,ce.X)().register_all(this.shortcuts,"Teacher")},beforeUnmount(){window.removeEventListener("keydown",this.keydown),window.removeEventListener("keyup",this.keyup),(0,ce.X)().remove_tag("Teacher")},computed:{selected_types(){return this.magic.types.slice(0,2)},task_types(){return this.magic.types.map((e=>[e.key,e.list_as,e.shortcuts]))},shortcuts(){return this.task_types.map((e=>({key:e[2].map((e=>"+ and "+e)).join(", "),description:e[1]})))},magic(){return(0,oe.l)()},store(){return(0,V.h)()},has_classes(){return this.store?.active_doc?.classes?.length>0}},methods:{keyup(e){"+"===e.key?this.plusDown=!1:"="===e.key&&(this.equalDown=!1)},keydown(e){const t=e.key.toLowerCase();if(["study","portal"].includes(this.$route.name))if("+"===t||"="===t)"+"===t?this.plusDown=!0:"="===t&&(this.equalDown=!0),e.preventDefault(),e.stopPropagation();else if((this.plusDown||this.equalDown)&&this.has_classes&&this.task_types.some((e=>e[2].includes(t)))){const s=this.task_types.find((e=>e[2].includes(t)));this.$router.push({name:"newtask",params:{tasktype:s[0]},query:this.$route.query}),e.preventDefault(),e.stopPropagation()}},warn_missing_class(){new ne.OO("Please create a class first",2e3)}}};const _e=(0,L.Z)(de,[["render",le]]);var he=_e,ue={name:"LeftBar",components:{SidebarToggle:B,ClassList:F,ActionsPanel:he},props:{paged:{type:Boolean,default:!1}},emits:["close_right_bar","set_class","mounted","dragclass"],data(){return{sidebar_open:!1}},computed:{store(){return(0,V.h)()}},mounted(){this.$emit("mounted"),window.addEventListener("resize",this.close_sidebar)},unmounted(){window.removeEventListener("resize",this.close_sidebar)},methods:{placeholderToast:ne.gy,show_if_inactive(){this.sidebar_open||(this.sidebar_open=!0),this.$emit("close_right_bar")},close_sidebar(){this.sidebar_open&&setTimeout((()=>this.sidebar_open=!1),10)},set_class(e){this.$emit("set_class",e)},load(){this.loading=!1}},watch:{paged(){this.paged&&(this.sidebar_open=!0)}}};const ge=(0,L.Z)(ue,[["render",$],["__scopeId","data-v-5b1969ec"]]);var pe=ge,me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJxSURBVHgB7ZmBcdsgFIb/9jqAR6ATNJ3AjJAN7A3iDdwNlE5ANvAIciewN6AbxBskvDOcCUHwQEjJXfTd/WeMEPpBD4QQsLDwtfmGdkijX/b3zmhlRVyM/ludjf4ZHfEJIIN/jJ6NXgqljZSRwAdAxh9RbnpIszZkh7oe59yRDSamZa8PqcMEUMj0wOTmnU64TQBNOAGzmXfq0Yg5wmaycNoCePlg7VCJwHVmaGVkb7T26qeHnWKcRzNe1XjgVM6RtmaHEMh3VHEoCYw37swL5vVyz5aiu6CAScw/ekZVYGqPfAiy0Whv/iljSiI/FljIAqNjzIemVoy6ZWj2B96zxjjcU9tBS+mhQXwJzstBy/Wjn/E9Uig1Y6QgMzRn//T02+gvru8BMZ68tEAeyShTtWyIhQ0Cc2G9+6CMYl4nS+lSOWae/od3cpswf8+8FmsgjzFP6d4e660oj+L7MGD+DmWd1qwBMfPaHnvw8jubr4P8GvOsBnAqTJknbZCnxjwrhDSjoi5hPtbAkHvUvZaewODAqMgfoCpRjo5J2xhhjfcVxp0OodnYg+xoL5Ti7KW3iXISb/eHXF4tZ04hiXxP+IaGQkEjPU5qtAaTXHxKr+xuJvMaBewzlalIeW0bTmn/DlG6xaaAQgFVK8OBelrtaAgU0mUqpN7eJM4XDc0rVLACb66myqUtL2y6Q53RodgXqGTX0EitNhhJy94sVbN90h7A3OZZywYuLWcTjno03tx1zBFOk2yv+2zRdsvRiWa8B8yEQLutR9frk4RMDoFrQ2ruSGzZUUzLz6xr3D6xCtzehYmLFS2Hj7h9al1YWBjJKxvgzZRLiW94AAAAAElFTkSuQmCC";const ke=e=>((0,a.dD)("data-v-25973996"),e=e(),(0,a.Cn)(),e),fe={class:"sidebar_overflow"},ye={class:"sidebar_first_block"},we={key:0,class:"linked_acc_icon"},ve=ke((()=>(0,a._)("img",{class:"linked_acc_icon__img",width:"24",height:"24",src:me,alt:"Linked Account"},null,-1))),be=[ve],Ce=ke((()=>(0,a._)("div",{class:"auth_logout auth-action can-logout doprompt"},"Log Out",-1))),De=ke((()=>(0,a._)("div",{class:"flex_spacer"},null,-1))),$e=ke((()=>(0,a._)("div",{class:"flex_spacer"},null,-1))),Ae=ke((()=>(0,a._)("div",{class:"settings_icon"},null,-1))),Te=[Ae];function Se(e,t,s,r,l,o){const n=(0,a.up)("UpcomingTasks"),c=(0,a.up)("SidebarToggle");return(0,a.wg)(),(0,a.iD)("div",{class:(0,i.C_)(["right-bar portal_sidebar",{active:l.sidebar_open}]),onClick:t[1]||(t[1]=(...e)=>o.show_if_inactive&&o.show_if_inactive(...e))},[(0,a._)("div",fe,[(0,a._)("div",ye,[o.store&&o.store.personal_account?((0,a.wg)(),(0,a.iD)("div",we,be)):(0,a.kq)("",!0),Ce]),De,(0,a.Wm)(n,{loading:l.loading},null,8,["loading"]),$e]),(0,a._)("button",{class:"settings_button click-action",title:"Settings",onClick:t[0]||(t[0]=t=>e.$router.push({name:"settings",query:e.$route.query}))},Te),(0,a.Wm)(c,{onClick:o.close_sidebar},null,8,["onClick"])],2)}var qe=s(9242);const xe=e=>((0,a.dD)("data-v-03b122e7"),e=e(),(0,a.Cn)(),e),je={class:"upcoming_tasks"},Le={key:0,class:"upcoming_tasks__not_empty"},ze=xe((()=>(0,a._)("hr",{class:"upcoming_tasks_hr"},null,-1))),Be={key:1,class:"loading_tasks loading_icon",alt:"Loading..."},Me={key:1,class:"upcoming_tasks__empty"},Pe=xe((()=>(0,a._)("h5",null,"No Upcoming Tasks!",-1))),Ee=[Pe];function Ie(e,t,s,i,r,l){const o=(0,a.up)("router-link"),n=(0,a.up)("ExamCard");return(0,a.wg)(),(0,a.iD)("div",je,[l.tasks&&l.tasks.length||s.loading?((0,a.wg)(),(0,a.iD)("div",Le,[(0,a._)("h5",null,[(0,a.Wm)(o,{to:{name:"study"},class:"upcoming_tasks__title"},{default:(0,a.w5)((()=>[(0,a.Uk)("Upcoming")])),_:1})]),ze,l.tasks&&l.tasks.length?((0,a.wg)(),(0,a.j4)(qe.W3,{key:0,class:"tasks_container",name:"upcoming-group",tag:"div"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.tasks,(e=>((0,a.wg)(),(0,a.j4)(n,{class:"tasks_container_task",task:e,key:e.ref,href:`/view/${l.store.path_to_ref(e.ref)}`,target:"_blank",onClick:t=>{t.preventDefault(),l.show_task(e)}},null,8,["task","href","onClick"])))),128))])),_:1})):((0,a.wg)(),(0,a.iD)("img",Be))])):((0,a.wg)(),(0,a.iD)("div",Me,Ee))])}var Ue=s(7108),We={name:"UpcomingTasks",props:{loading:{type:Boolean,default:!1}},components:{ExamCard:Ue.Z},computed:{store(){return(0,V.h)()},tasks(){return this.store.upcoming_todo.slice(0,6)}},methods:{show_task(e){this.$router.push({name:"viewtask",params:{ref:this.store.path_to_ref(e.ref)},query:this.$route.query})}}};const Oe=(0,L.Z)(We,[["render",Ie],["__scopeId","data-v-03b122e7"]]);var Re=Oe,He={name:"RightBar",components:{SidebarToggle:B,UpcomingTasks:Re},props:{paged:{type:Boolean,default:!1}},emits:["close_left_bar","mounted"],data(){return{sidebar_open:!1,loading:!0}},computed:{store(){return(0,V.h)()}},mounted(){this.$emit("mounted"),window.addEventListener("resize",this.close_sidebar)},unmounted(){window.removeEventListener("resize",this.close_sidebar)},methods:{show_if_inactive(){this.sidebar_open||(this.sidebar_open=!0),this.$emit("close_left_bar")},close_sidebar(){this.sidebar_open&&setTimeout((()=>this.sidebar_open=!1),10)},load(){this.loading=!1}},watch:{paged(){this.paged&&(this.sidebar_open=!0)}}};const Xe=(0,L.Z)(He,[["render",Se],["__scopeId","data-v-25973996"]]);var Ne=Xe;const Ze=e=>((0,a.dD)("data-v-0c283c08"),e=e(),(0,a.Cn)(),e),Ke={class:"study_header portal_main_block_header"},Ye={class:"portal_main_block_header__left"},Ve=Ze((()=>(0,a._)("div",{class:"study_name portal_main_block_title"},[(0,a.Uk)(" Upcoming"),(0,a._)("span",{class:"desktop_only_text"}," Assignments")],-1))),Qe={class:"portal_main_block_actions_wrapper"},Je={class:"portal_main_block_actions portal_main_block_actions_freeform"},Fe=["onClick","title"],Ge=["href"],et=Ze((()=>(0,a._)("hr",{class:"study_list__separator"},null,-1))),tt=["finished"],st=["for","title","onClick"],at=Ze((()=>(0,a._)("div",{class:"study_list_task_checkbox__fixed"},[(0,a._)("span",{class:"study_list_task_checkbox__dot"})],-1))),it=[at],rt=["for","onClick","href"],lt={class:"study_list_task__name__text"},ot={class:"study_list_task__date study_list_task__boxed"};function nt(e,t,s,r,l,o){const n=(0,a.up)("LoadingCover");return(0,a.wg)(),(0,a.iD)("main",{class:(0,i.C_)(["study portal_main_block",{study_fullpage:o.fullpage}])},[l.is_ready?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(n,{key:0,class:"study_loading",covering:"Study Tasks"})),(0,a._)("div",Ke,[(0,a._)("div",Ye,[(0,a._)("button",{class:"portal_main_block_action portal_main_block_action_alt fullpage_toggle_button",onClick:t[0]||(t[0]=(...e)=>o.toggle_fullscreen&&o.toggle_fullscreen(...e)),title:"Toggle fullscreen (f)"},[(0,a._)("div",{class:(0,i.C_)(["action_icon expand-icon",{alt:o.fullpage}])},null,2)]),Ve]),(0,a._)("div",Qe,[(0,a._)("nav",Je,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.lengths,(e=>((0,a.wg)(),(0,a.iD)("button",{class:(0,i.C_)(["portal_main_block_action portal_main_block_action_freeform portal_main_block_action__text",{active:l.days==e[0]}]),onClick:t=>l.days=e[0],title:`${e[2]} (${e[3]})`,key:e[0]},(0,i.zw)(e[1]),11,Fe)))),128))]),(0,a._)("button",{class:"portal_main_block_action portal_main_block_action_alt",title:"View Calendar (c)",onClick:t[1]||(t[1]=(...e)=>o.swap_to_calendar&&o.swap_to_calendar(...e))},[(0,a._)("div",{class:(0,i.C_)(["action_icon cal-icon",{alt:o.store.upcoming&&o.store.upcoming.length}])},null,2)])])]),(0,a.Wm)(qe.W3,{name:"study-group",class:(0,i.C_)(["study_list_group",{filtered:s.filtered_classes.length}]),tag:"div"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.arranged,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"study_list",key:t[0].class_id,style:(0,i.j5)({"--color-class":o.classes[t[0].class_id].color,"--color-class-alt":o.classes[t[0].class_id].color+"2d"})},[(0,a._)("a",{class:"study_list__name",href:"/view/"+o.store.path_to_ref(o.classes[t[0].class_id].ref)},(0,i.zw)(t[0].class_name),9,Ge),et,(0,a.Wm)(qe.W3,{class:"study_list_tasks",name:"study-list",tag:"div"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"study_list_task",key:t.ref,finished:o.is_finished(t.ref)},[(0,a._)("label",{for:t.ref,class:"study_list_task_checkbox",title:"Mark task as "+(o.is_finished(t.ref)?"unfinished":"finished"),onClick:e=>o.toggle_finished(t.ref)},it,8,st),(0,a._)("a",{class:"study_list_task__name study_list_task__boxed",for:t.ref,onClick:s=>{e.$emit("taskclick",t),s.preventDefault()},href:"/view/"+o.store.path_to_ref(t.ref)},[(0,a._)("span",lt,(0,i.zw)(o.prefixed_name(t)),1)],8,rt),(0,a._)("span",ot,(0,i.zw)(t.date&&t.date.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})||"Invalid Date"),1)],8,tt)))),128))])),_:2},1024)],4)))),128))])),_:1},8,["class"])],2)}const ct=e=>((0,a.dD)("data-v-523271bf"),e=e(),(0,a.Cn)(),e),dt=["title"],_t=ct((()=>(0,a._)("div",{class:"loading_cover__overlay"},null,-1))),ht={class:"loading_cover__content"},ut=ct((()=>(0,a._)("div",{class:"loading_cover__content__icon"},[(0,a._)("img",{class:"loading_icon"})],-1)));function gt(e,t,s,i,r,l){return(0,a.wg)(),(0,a.iD)("div",{class:"loading_cover",title:"Loading "+s.covering},[_t,(0,a._)("div",ht,[ut,(0,a.WI)(e.$slots,"default",{},void 0,!0)])],8,dt)}var pt={name:"LoadingCover",props:{covering:{type:String,default:"Content"}}};const mt=(0,L.Z)(pt,[["render",gt],["__scopeId","data-v-523271bf"]]);var kt=mt,ft=s(2745),yt={name:"StudyBlock",components:{LoadingCover:kt},props:{filtered_classes:{Array:Array,default:()=>[]}},emits:["taskclick","mounted"],data(){return{tasks:[],is_ready:!1,days:7,lengths:[[1,"Day","Tasks today","d"],[7,"Week","Tasks in the next week","w"],[31,"Month","Tasks in the next month","m"],[Number.MAX_SAFE_INTEGER,"All","All upcoming tasks","a"]],prefixes:{note:"",task:"Complete ",test:"Study for ",project:"Prepare ",quiz:"Study for ",exam:"Study for "}}},mounted(){ft.i2.log("👓 Study page mounted"),this.$emit("mounted"),this.tasks=this.store.tasks,window.addEventListener("keydown",this.handle_key),(0,ce.X)().register_all(this.shortcuts,"Study Portal")},beforeUnmount(){window.removeEventListener("keydown",this.handle_key),(0,ce.X)().remove_tag("Study Portal")},computed:{fullpage(){return JSON.parse(this.$route.query.calendar||"false")},shortcuts(){return[{key:"f",description:"Toggle fullscreen",top:!0},{key:"` or c",description:"Swap to calendar",top:!0},...this.lengths.map((e=>({key:e[3],description:`View ${e[1].toLowerCase()} tasks`})))]},store(){return(0,V.h)()},classes(){let e={};for(let t of this.store.classes)e[t.id]=t;return e},filtered_tasks(){let e=this.tasks?.filter((e=>!this.filtered_classes.length||this.filtered_classes.includes(e.class_id)));const t=Date.now(),s=576e5;return e=e.filter((e=>{const a=e?.date?.getTime?e.date.getTime():0;return"note"!=e.type&&a>=t-s&&a<=t+24*this.days*60*60*1e3})).sort(((e,t)=>e.date<t.date?-1:e.date>t.date?1:0)),e.sort(((e,t)=>{let s=this.store.finished_tasks.includes(e.ref),a=this.store.finished_tasks.includes(t.ref);return s&&!a?1:!s&&a?-1:0})),e},arranged(){let e=this.filtered_tasks,t={};for(let a of e)t[a.class_id]||(t[a.class_id]=[]),t[a.class_id].push(a);let s=[];for(let a in t)s.push(t[a]);return s.sort(((e,t)=>{let s=this.classes[e[0].class_id],a=this.classes[t[0].class_id];return s.period-a.period})),s}},methods:{toggle_fullscreen(){const e=!this.fullpage;let t={...this.$route.query};e?t.calendar=!0:delete t.calendar,this.$router.push({...this.$route,query:t})},handle_key(e){if(!(e.ctrlKey||e.metaKey||e.shiftKey||"study"!=this.$route.name))if("f"==e.key)this.toggle_fullscreen();else if("c"==e.key||"`"==e.key)this.swap_to_calendar();else{let t=this.lengths.find((t=>t[3]==e.key));t&&(this.days=t[0])}},prefixed_name(e){return this.prefixes[e.type]+e.name},swap_to_calendar(){this.$router.push({name:"portal",query:this.$route.query})},run_get_tasks(){this.tasks=this.store.tasks,this.is_ready=!0},is_finished(e){return this.store.finished_tasks.includes(e)},toggle_finished(e){this.store.set_finished(!this.is_finished(e),e).then((()=>{ft.i2.log("📦 Task completion status set")})).catch((e=>{ft.i2.error("🔥 Couldn't set task finished",e)}))}},watch:{"store.classes":{handler(e,t){e.length!=t.length&&this.is_ready&&(ft.i2.log("📦 Classes array length changed, calendar updating tasks"),this.store.fetch_classes().then((()=>{this.run_get_tasks()})).catch((e=>{ft.i2.error("🔥 Couldn't fetch classes",e)})))},deep:!0},"store.tasks":{handler(){this.tasks=this.store.tasks},deep:!0}}};const wt=(0,L.Z)(yt,[["render",nt],["__scopeId","data-v-0c283c08"]]);var vt=wt;const bt=e=>((0,a.dD)("data-v-3c264fc7"),e=e(),(0,a.Cn)(),e),Ct={class:"calendar_header portal_main_block_header"},Dt={class:"portal_main_block_header__left"},$t=["title"],At={class:"portal_main_block_actions_wrapper"},Tt={class:"portal_main_block_actions"},St=bt((()=>(0,a._)("div",{class:"action_icon arrow-icon left"},null,-1))),qt=[St],xt=bt((()=>(0,a._)("div",{class:"action_icon arrow-icon right"},null,-1))),jt=[xt],Lt={class:"calendar_day__weekday_label__text"},zt=["_date","onDragover"],Bt=["onClick"],Mt={class:"calendar_day_date__short"},Pt={class:"calendar_day_date__long",style:{display:"none"}},Et={class:"calendar_day_tasks"},It=["is_note","title","draggable","onDragstart","href","onClick"],Ut={key:0,class:"calendar_day_task_editable"},Wt={key:1},Ot=bt((()=>(0,a._)("span",{class:"calendar_day_task__swatch"},null,-1))),Rt=bt((()=>(0,a._)("span",{class:"calendar_day_task__note"}," NOTE ",-1))),Ht=[Ot,Rt],Xt={key:2},Nt={key:0,class:"calendar__no_tasks",style:{display:"none"}};function Zt(e,t,s,r,l,o){const n=(0,a.up)("LoadingCover");return(0,a.wg)(),(0,a.iD)("main",{class:(0,i.C_)(["calendar portal_main_block",{calendar_fullpage:o.fullpage}]),onDrag:t[6]||(t[6]=(...e)=>o.check_leave&&o.check_leave(...e)),onMousewheel:t[7]||(t[7]=(...e)=>o.page_flip&&o.page_flip(...e))},[l.is_ready?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(n,{key:0,class:"calendar_loading",covering:"Calendar Tasks"})),(0,a._)("div",Ct,[(0,a._)("div",Dt,[(0,a._)("button",{class:"portal_main_block_action portal_main_block_action_alt fullpage_toggle_button",onClick:t[0]||(t[0]=(...e)=>o.toggle_fullscreen&&o.toggle_fullscreen(...e)),title:"Toggle fullscreen (f)"},[(0,a._)("div",{class:(0,i.C_)(["action_icon expand-icon",{alt:o.fullpage}])},null,2)]),(0,a._)("div",{class:"calendar_date portal_main_block_title",title:"Currently viewing "+l.loaded_month.toLocaleDateString(void 0,{month:"long",year:"numeric"})},(0,i.zw)(l.loaded_month.toLocaleDateString("en-US",{month:"long",year:"numeric"})),9,$t)]),(0,a._)("div",At,[(0,a._)("nav",Tt,[(0,a._)("button",{class:"portal_main_block_action",onClick:t[1]||(t[1]=(...e)=>o.prev_month&&o.prev_month(...e)),title:"Previous month (Left)"},qt),(0,a._)("button",{class:"portal_main_block_action",onClick:t[2]||(t[2]=(...e)=>o.this_month&&o.this_month(...e)),title:"Current month (Home)"},[(0,a._)("div",{class:(0,i.C_)(["action_icon cal-icon",{alt:l.tasks&&l.tasks.length}])},null,2)]),(0,a._)("button",{class:"portal_main_block_action",onClick:t[3]||(t[3]=(...e)=>o.next_month&&o.next_month(...e)),title:"Next month (Right)"},jt)]),(o.store.is_teacher,(0,a.wg)(),(0,a.iD)("button",{key:0,class:"portal_main_block_action portal_main_block_action_alt",onClick:t[4]||(t[4]=(...e)=>o.swap_to_study&&o.swap_to_study(...e)),title:"View study portal (s)"},[(0,a._)("div",{class:(0,i.C_)(["action_icon todo-icon",{alt:o.store.upcoming_todo&&o.store.upcoming_todo.length}])},null,2)]))])]),(0,a._)("div",{class:"calendar_days_container hidescroll",style:(0,i.j5)({"--color-dragging":l.drag.task&&l.drag.task.color||l.drag.class&&l.drag.class.color,"--color-dragging-alt":l.drag.task&&l.drag.task.color||l.drag.class&&l.drag.class.color?(l.drag.task&&l.drag.task.color||l.drag.class&&l.drag.class.color)+"80":null})},[(0,a._)("div",{class:(0,i.C_)(["calendar_days",{calendar_days__current:o.day_matches(l.loaded_month,new Date((new Date).setDate(1))),calendar_days__changed:l.is_changed}]),ref:"calendar_days"},[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],(e=>(0,a._)("div",{class:"calendar_day calendar_day__weekday_label",key:e},[(0,a._)("span",Lt,(0,i.zw)(e),1)]))),64)),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.days,(s=>((0,a.wg)(),(0,a.iD)("div",{class:(0,i.C_)(["calendar_day",{calendar_day__placeholder:s.is_placeholder&&!o.store.simplified,calendar_day__hastask:!!s.tasks&&s.tasks.length,calendar_day__today:s.is_today,calendar_day__past:s.is_past,calendar_day__drag_to:l.drag.to==s.date,calendar_day__drag_class_to:l.drag.to==s.date&&l.drag.class,calendar_day__drag_from:l.drag.from==s.date}]),_date:s.date.toISOString().split("T")[0],onDragover:e=>o.drag_over(s.date),key:s.date},[(0,a._)("div",{class:(0,i.C_)(["calendar_day_date",{"click-action":o.store.is_teacher}]),onClick:t=>{o.store.is_teacher&&e.$router.push({name:"newtask",query:{date:o.format_date(s.date),...this.$route.query}})}},[(0,a._)("span",Mt,(0,i.zw)(s.date.getDate()),1),(0,a._)("span",Pt,(0,i.zw)(s.date.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),1)],10,Bt),(0,a._)("div",Et,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.tasks,(r=>((0,a.wg)(),(0,a.iD)("a",{class:(0,i.C_)(["calendar_day_task click-action",{calendar_day_task__dragging:l.drag.task==r,calendar_day_task__loading:l.drag.task==r&&l.drag.load}]),is_note:"note"===r.type,key:r.name,title:r.name,draggable:r&&o.store.is_teacher&&o.store.user&&r.ref.split("/")[0]==o.store.active_doc.email&&"study"!=e.$route.name,onDragstart:e=>l.drag={task:r,from:s.date},onDragend:t[5]||(t[5]=(...e)=>o.drag_drop&&o.drag_drop(...e)),style:(0,i.j5)({"--color-calendar-task":r.color,"--color-calendar-task-alt":r.color+"40"}),href:"/view/"+o.get_link(r.ref),onClick:t=>{t.preventDefault(),e.$emit("taskclick",r)}},[r&&o.store.is_teacher&&o.store.user&&r.ref.split("/")[0]==o.store.active_doc.email?((0,a.wg)(),(0,a.iD)("div",Ut,[(0,a._)("span",{class:(0,i.C_)(["task_icon task_edit__icon",{loading_bg:l.drag.load}])},null,2)])):(0,a.kq)("",!0),"note"===r.type?((0,a.wg)(),(0,a.iD)("span",Wt,Ht)):((0,a.wg)(),(0,a.iD)("span",Xt,(0,i.zw)(r.name),1))],46,It)))),128))])],42,zt)))),128)),o.tasks_loaded_month?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",Nt," Relax! No Tasks. "))],2)],4)],34)}var Kt={name:"CalendarBlock",components:{LoadingCover:kt},props:{filtered_classes:{Array:Array,default:()=>[]},dragging_class:{Object:Object,default:()=>null}},emits:["taskclick","mounted"],data(){return{wheel:{initial:!1,timeout:null},loaded_month:new Date((new Date).setDate(1)),is_ready:!1,tasks:[],is_changed:!1,drag:{},shortcuts:[{key:"f",description:"Toggle fullscreen"},{key:"` or s",description:"Swap to study portal",top:!0},{key:"ArrowLeft",description:"Previous month"},{key:"Shift + ArrowLeft",description:"Previous year"},{key:"ArrowRight",description:"Next month"},{key:"Shift + ArrowRight",description:"Next year"},{key:"Home",description:"Current month"}]}},mounted(){ft.i2.log("📅 Calendar mounted"),this.$emit("mounted"),this.tasks=this.store.tasks,window.addEventListener("keydown",this.handle_key),(0,ce.X)().register_all(this.shortcuts,"Calendar")},beforeUnmount(){window.removeEventListener("keydown",this.handle_key),(0,ce.X)().remove_tag("Calendar")},methods:{page_flip(e){if(0==e.button)return this.wheel.initial||(e.deltaX>0?this.next_month():e.deltaX<0&&this.prev_month(),this.wheel.initial=!0,this.timeout=setTimeout((()=>{this.wheel.initial=!1}),400)),e.deltaX?(e.preventDefault(),!1):void 0},toggle_fullscreen(){const e=!this.fullpage;let t={...this.$route.query};e?t.calendar=!0:delete t.calendar,this.$router.push({...this.$route,query:t})},handle_key(e){if(e.ctrlKey||e.metaKey||"portal"!=this.$route.name)return;if(!e.shiftKey){if("s"==e.key||"`"==e.key)return void this.swap_to_study();if("f"==e.key&&!e.ctrlKey&&!e.metaKey)return void this.toggle_fullscreen()}const t=e.shiftKey;let s=()=>{};if("ArrowLeft"==e.key)s=this.prev_month;else if("ArrowRight"==e.key)s=this.next_month;else if("Home"==e.key)return void this.this_month();for(let a=0;a<(t?12:1);a++)s()},swap_to_study(){this.$router.push({name:"study",query:this.$route.query})},check_leave(e){try{const t=this.$refs.calendar_days.getBoundingClientRect();this.drag.to&&(e.clientX||e.clientX)&&(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&(this.drag.to=null)}catch(t){ft.i2.error("🔥 Couldn't check if mouse left calendar",t)}},drop_class(){this.drag?.class&&this.drag?.to&&(ft.i2.log("📅 Dropped class on calendar day"),this.$router.push({name:"newtask",query:{class:this.drag.class.id,date:new Date(this.drag.to.getTime()-60*this.drag.to.getTimezoneOffset()*1e3).toISOString().split("T")[0],...this.$route.query}})),this.drag={}},drag_over(e){this.drag.to!=e&&(this.drag.class?this.drag.to=e:this.drag.to=this.drag.to!=this.drag.from?e:null)},drag_drop(){if(this.drag.to&&this.drag.from&&this.drag.to!=this.drag.from&&this.drag.task){let e=this.drag.to;this.drag.load=!0,this.drag.to=null,this.store.update_task(this.drag.task.ref,{...this.drag.task,date:new Date(e-60*e.getTimezoneOffset()*1e3).toISOString().split("T")[0]}).then((()=>{new ne.bF(`Moved ${this.drag.task.type} ${this.drag.task.name?'"'+this.drag.task.name+'" ':""}to ${e.toLocaleDateString()}`,2e3),ft.i2.log("📅 Moved task date"),this.drag={}})).catch((e=>{new ne.PK("Couldn't update task",e,2e3),ft.i2.error("🔥 Couldn't update task",e),this.drag={}}))}else this.drag={}},format_date(e){return e.toISOString().split("T")[0]||""},day_matches(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()},get_day_tasks(e){return this.tasks.filter((t=>{const s=(0,ft.HU)(t.date);return this.day_matches(s,e)&&(!this.filtered_classes.length||this.filtered_classes.includes(t.class_id))})).sort(((e,t)=>{if("note"==e.type&&"note"!=t.type)return-1}))},next_month(){this.is_changed=!0,this.loaded_month=new Date(this.loaded_month.setMonth(this.loaded_month.getMonth()+1))},this_month(){let e=new Date((new Date).setDate(1));this.day_matches(this.loaded_month,e)&&(this.is_changed=!this.is_changed),this.loaded_month=e},prev_month(){this.is_changed=!0,this.loaded_month=new Date(this.loaded_month.setMonth(this.loaded_month.getMonth()-1))},run_get_tasks(){this.tasks=this.store.tasks,this.is_ready=!0},get_link(e){let[t,s,a]=e.split("/");return t=t.split("@")[0],[t,s,a].join("~")}},computed:{fullpage(){return JSON.parse(this.$route.query.calendar||"false")},tasks_loaded_month(){return this.tasks.some((e=>{(0,ft.HU)(e.date);return!0}))},store(){return(0,V.h)()},days(){const e=[],t=(0,ft.HU)((new Date).toISOString().split("T")[0]),s=this.loaded_month.getTime();function a(){return new Date(s)}const i=new Date(a().setDate(1)),r=new Date(a().setMonth(a().getMonth()+1,0));for(let l=i.getDay();l>0;l--){const s=new Date(a().setDate(-l));e.push({date:s,tasks:this.get_day_tasks(s),is_placeholder:!0,is_past:s.getTime()<t.getTime()})}for(let l=1;l<=r.getDate();l++){const s=new Date(a().setDate(l));e.push({date:s,tasks:this.get_day_tasks(s),is_today:this.day_matches(s,new Date),is_past:s.getTime()<t.getTime()})}for(let l=1;e.length<42;l++){const s=new Date(a().setDate(r.getDate()+l));e.push({date:s,tasks:this.get_day_tasks(s),is_placeholder:!0,is_past:s.getTime()<t.getTime()})}return e}},watch:{dragging_class(e,t){e?.ref!=t?.ref&&(this.drag={}),this.drag.class=this.dragging_class},"store.classes":{handler(e,t){e.length!=t.length&&this.is_ready&&(ft.i2.log("📦 Classes array length changed, calendar updating tasks"),this.store.fetch_classes().then((()=>{this.run_get_tasks()})).catch((e=>{ft.i2.error("🔥 Couldn't fetch classes",e)})))},deep:!0},"store.tasks":{handler(){this.tasks=this.store.tasks},deep:!0}}};const Yt=(0,L.Z)(Kt,[["render",Zt],["__scopeId","data-v-3c264fc7"]]);var Vt=Yt,Qt=s(3917),Jt={name:"AppPortal",components:{LeftBar:pe,RightBar:Ne,StudyBlock:vt,CalendarBlock:Vt,OverlayWrapper:Qt.Z},data(){return{filtered_classes:[],welcomes:["Welcome","Hi","Hello","Hey","Howdy"],loaded:!1,dragging_class:null,is_study:"study"==this.$route.name,page:"block"}},computed:{width(){return window.innerWidth},close_path(){return this.$route?.query?.redirect||this.$route?.meta?.close_path},name(){return this.store.user?.displayName?.split(" ")[0]||"User"},did_survey(){return this.store.done_daily_survey},random_welcome(){return this.welcomes[Math.floor(Math.random()*this.welcomes.length)]},store(){return(0,V.h)()}},methods:{drag_class(e){this.dragging_class=e},do_survey(){this.$router.replace({name:"daily",query:{...this.$route.query,redirect:this.$route.fullPath}}),new ne.OO("Please complete the daily survey to use MVTT today!",3e3)},close_left_bar(){this.$refs.LeftBar?.close_sidebar()},close_right_bar(){this.$refs.RightBar?.close_sidebar()},show_task(e){this.$router.push({name:"viewtask",params:{ref:this.store.path_to_ref(e.ref)},query:this.$route.query})},toggle_filtered_class(e){this.filtered_classes.includes(e)?this.filtered_classes=this.filtered_classes.filter((t=>t!==e)):this.filtered_classes.push(e)},check_and_do_survey(){this?.store?.user&&!this?.did_survey&&!0!==this.$route?.meta?.noSurvey&&this.do_survey()},check_and_do_join(){this.store.done_join_form||(this.$router.push({name:"join",query:{...this.$route.query,redirect:this.$route.fullPath}}),new ne.OO("Please fill out the join form to use MVTT!",3e3))}},mounted(){ft.i2.log("🏗 Portal mounted"),this.check_and_do_join(),this.check_and_do_survey(),this.store.fetch_classes().then((()=>{this.$refs.study&&this.$refs.study.run_get_tasks(),this.$refs.calendar&&this.$refs.calendar.run_get_tasks(),this.$refs.RightBar.load(),this.$refs.LeftBar.load(),this.loaded=!0})).catch((e=>{ft.i2.error("🔥 Couldn't fetch classes",e)}))},watch:{width(e,t){t<=600&&e>600&&(this.page="block")},did_survey(){this.check_and_do_survey()},$time(){this.check_and_do_survey()},$route(){this.is_study||"study"!=this.$route.name?"portal"==this.$route.name&&(this.is_study=!1):this.is_study=!0,"portal"!=this.$route.name&&(this.close_right_bar(),this.close_left_bar()),this.check_and_do_survey()},store:{handler(){this.check_and_do_join()},deep:!0}}};const Ft=(0,L.Z)(Jt,[["render",p],["__scopeId","data-v-2b8087b8"]]);var Gt=Ft}}]);
//# sourceMappingURL=54.bf94c0dc.js.map