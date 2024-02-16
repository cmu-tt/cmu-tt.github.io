"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[621],{1311:function(t,e,s){s.d(e,{l:function(){return l}});var i=s(2745),a=s(1020);const n="https://api.mvtt.app/",l=(0,a.Q_)({id:"magic",state:()=>({last:{},types:[{key:"note",name:"Note",list_as:"Add a Note",shortcuts:["n"]},{key:"task",name:"Assignment",list_as:"Schedule an Assignment",shortcuts:["a"]},{key:"test",name:"Test",list_as:"Schedule a Test",shortcuts:["t"]},{key:"project",name:"Project",list_as:"Schedule a Project",shortcuts:["p"]},{key:"quiz",name:"Quiz",list_as:"Schedule a Quiz",shortcuts:["q"]},{key:"exam",name:"Exam",list_as:"Schedule an Exam",shortcuts:["e"]}]}),getters:{},actions:{type_full(t){return this.types.find((e=>e.key===t))?.name||t},async text(t){if(t)return await this.rated_api_get("get/magic/link-text",{path:t})},async type(t){if(t)return await this.rated_api_get("get/magic/task-type",{task:t})},async api_get(t,e){if(e=e||{},!t)return;const s=new URL(n+t);Object.keys(e).forEach((t=>s.searchParams.append(t,e[t])));const a=Math.random().toString(36).substring(7);i.i2.log(`🛜 Running API fetch | <${a}>`),this.last[t]={time:Date.now(),hash:a};try{const t=await fetch(s.href,{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok)throw"Non-valid response";const e=await t.json();return i.i2.log(`🛜 API fetch success | <${a}>`),e.data}catch(l){return i.i2.error(`🛜 API fetch failed  | <${a}>`,l),null}},async rated_api_get(t){i.i2.log("🛜 API fetch requested");const e=Math.random().toString(36).substring(7),s=this.last[t]?.time,a=this.last[t]?.hash;if(Date.now()-s<2e3){if(i.i2.warn("🛜 API fetch rate limited"),await new Promise((t=>setTimeout(t,15e3))),this.last[t]?.time!==s||this.last[t]?.hash!==a)return void i.i2.warn("🛜 Outdated API fetch skipped");i.i2.log("🛜 API fetch rate limit lifted")}return await this.api_get(...arguments,e)}}})},7621:function(t,e,s){s.r(e),s.d(e,{default:function(){return J}});s(7658);var i=s(3396),a=s(7139),n=s(9242);const l=t=>((0,i.dD)("data-v-704d1534"),t=t(),(0,i.Cn)(),t),r={class:"edit_task"},o={class:"modal_header",ref:"title"},d={class:"header_style modal_header_title"},h={class:"overlay_contents",ref:"contents"},c={key:0},_={class:"overlay_contents_text change_text"},k=["href"],u={class:"inputs_row"},p=["placeholder","disabled"],y=l((()=>(0,i._)("div",{class:"flex-break"},null,-1))),w=["placeholder"],m=l((()=>(0,i._)("div",{class:"flex-break"},null,-1))),g={class:"styled_input styled_links_box"},f={class:"styled_links_display"},x={key:0,class:"placeholder"},v={key:1,class:"styled_line_links"},b=["onClick"],$=l((()=>(0,i._)("hr",{class:"styled_links_separator"},null,-1))),C={class:"magic_wrapper styled_links_add__sized"},O=["disabled"],D=["disabled"],P={key:1,alt:"Loading Icon",class:"loading_icon"},A={class:"bottom_actions"},S=l((()=>(0,i._)("div",{class:"flex_spacer"},null,-1))),j=["disabled"],z=["disabled"];function N(t,e,s,l,N,T){return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("header",o,[(0,i._)("h2",d,"Edit "+(0,a.zw)(N.task.type||"task")+" details",1)],512),(0,i._)("div",h,[N.ready?((0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",_,[(0,i.Uk)(" Change the details of your "+(0,a.zw)(N.task.type||"task")+(0,a.zw)(N.original.name?` "${N.original.name}"`:"")+" in ",1),(0,i._)("a",{class:"class_name button_pointer_text",href:`/view/${N.task._class.ref}`,onClick:e[0]||(e[0]=e=>{e.preventDefault(),t.$router.push({name:"viewclass",params:{ref:N.task._class.ref},query:t.$route.query})}),style:(0,a.j5)({"--color-class":T.class_obj.color,"--color-class-alt":T.class_obj.color+"2d"})},(0,a.zw)(T.store.class_text(T.class_obj)),13,k)]),(0,i._)("div",u,[T.is_note?(0,i.kq)("",!0):(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:0,"onUpdate:modelValue":e[1]||(e[1]=t=>N.task.name=t),class:"styled_input",type:"text",placeholder:T.type_full+" Name",disabled:T.is_note},null,8,p)),[[n.nr,N.task.name]]),(0,i.wy)((0,i._)("input",{type:"date",class:"styled_input input_task__date","onUpdate:modelValue":e[2]||(e[2]=t=>N.task.date=t),style:(0,a.j5)({maxWidth:T.is_note?"100%":null})},null,4),[[n.nr,N.task.date]]),y,(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":e[3]||(e[3]=t=>N.task.description=t),class:"styled_input styled_textarea task_description",type:"text",placeholder:T.type_full+(T.is_note?" Contents":" Description (Optional)")},"\n          ",8,w),[[n.nr,N.task.description]]),m,(0,i._)("div",g,[(0,i._)("div",f,[N.task.links&&N.task.links.length?((0,i.wg)(),(0,i.iD)("div",v,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(N.task.links,(t=>((0,i.wg)(),(0,i.iD)("a",{class:"styled_line_links__link styled_line_links__remove",target:"_blank",key:t.path,onClick:e=>T.remove_link(t)},(0,a.zw)(t.text),9,b)))),128))])):((0,i.wg)(),(0,i.iD)("span",x,(0,a.zw)(T.type_full)+" Links (Optional)",1))]),$,(0,i._)("div",{class:"styled_links_add",onKeydown:e[9]||(e[9]=t=>{"Enter"===t.key&&(t.preventDefault(),T.add_newlink())})},[(0,i.wy)((0,i._)("input",{class:"styled_links_add__path",type:"url","onUpdate:modelValue":e[4]||(e[4]=t=>N.newlink.path=t),onBlur:e[5]||(e[5]=(...t)=>T.fix_newlink_path&&T.fix_newlink_path(...t)),placeholder:"Link URL (http://example.com)"},null,544),[[n.nr,N.newlink.path]]),(0,i._)("div",C,[(0,i.wy)((0,i._)("input",{class:"styled_links_add__text",type:"text","onUpdate:modelValue":e[6]||(e[6]=t=>N.newlink.text=t),placeholder:"Link Text (what students see)"},null,512),[[n.nr,N.newlink.text]]),(0,i._)("div",{class:(0,a.C_)(["magic magic_in styled_magic alt_bg click-action",{magic_out:!T.path_ready,loading_bg:N.loading_text}]),disabled:!T.path_ready||N.loading_text,onClick:e[7]||(e[7]=(...t)=>T.magic_text&&T.magic_text(...t)),title:"Auto-generate link text"},null,10,O)]),(0,i._)("button",{class:"styled_links_add__action",onClick:e[8]||(e[8]=(...t)=>T.add_newlink&&T.add_newlink(...t)),disabled:T.newlink_not_ready}," Add ",8,D)],32)])])])):((0,i.wg)(),(0,i.iD)("img",P))],512),(0,i._)("div",A,[(0,i._)("button",{class:"close_action click_escape",onClick:e[10]||(e[10]=e=>t.$emit("close"))},"Cancel"),S,(0,i._)("button",{class:"archive_action primary_styled",onClick:e[11]||(e[11]=(...t)=>T.archive_task&&T.archive_task(...t)),disabled:!N.ready||N.loading}," Archive ",8,j),(0,i._)("button",{class:(0,a.C_)(["continue_action click_ctrlenter",{loading_bg:N.loading}]),onClick:e[12]||(e[12]=(...t)=>T.try_submit&&T.try_submit(...t)),disabled:T.not_submittable}," Save "+(0,a.zw)(N.task.type||"task"),11,z)])])}var T=s(8980),q=s(1311),U=s(2745),I=s(1708),E=s(9529),L=s.n(E),R={name:"EditTaskView",emits:["close"],mixins:[L()],data(){return{task:{},original:{},newlink:{text:"",path:""},ready:!1,loading:!0,loading_text:!1,loaded_text:!1}},mounted(){this.$smoothReflow({el:this.$refs.contents,childTransitions:!0}),this.$smoothReflow({el:this.$refs.title,hideOverflow:!0}),this.get_task()},computed:{not_submittable(){return!this.changed||!this.task.name&&!this.is_note||!this.task.date||this.is_note&&!this.task.description},type_full(){return this.magic?.type_full(this.task.type)||"Task"},newlink_not_ready(){return!this.newlink.path||!this.newlink.text||!this.newlink.path.startsWith("http")},class_obj(){let t=this.store?.classes;return t?t.find((t=>t.id===this.original.class_id))||{}:null},store(){return(0,T.h)()},magic(){return(0,q.l)()},is_note(){return"note"===this.task.type},changed(){return JSON.stringify(this.task)!==JSON.stringify(this.original)},date(){let t=(0,U.HU)(this.task?.date);if(!isNaN(t.getTime()))return t=new Date(t.getTime()+60*t.getTimezoneOffset()*1e3),new Date(t).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"})},path_ready(){return!this.loaded_text&&this.newlink.path&&this.newlink_not_ready&&this.newlink.path.startsWith("https://")}},watch:{"newlink.path"(t,e){t!=e&&(this.loaded_text=!1)},"newlink.text"(t,e){t!=e&&(this.loaded_text=!1)}},methods:{try_submit(){this.not_submittable?this.changed?new I.OO("Please fill out all required fields",1e3):new I.OO("No changes to submit",1e3):this.update_task()},add_newlink(){this.task.links||(this.task.links=[]),this.newlink.path=new URL(this.newlink.path).href,this.task.links.push(this.newlink),this.task.links=[...new Set(this.task.links)],this.newlink={text:"",path:""}},async update_task(){this.newlink_not_ready?(this.loading=!0,this.store.update_task(this.task.ref,this.task).then((()=>{this.$router.push({name:"viewtask",params:{ref:this.$route.params.ref},query:this.$route.query})})).catch((t=>{this.loading=!1,U.i2.error(`📃 Couldn't save changes to ${this.task.type||"task"}:`,t),new I.PK(`Couldn't edit ${this.task.type||"task"}`,t,2e3)}))):new I.OO("Don't forget to to click the 'Add' button to add your link!",2e3)},archive_task(){this.$router.push({name:"archive",params:{type:this.task.type,ref:this.$route.params.ref},query:{title:this.is_note?this.task.description:this.task.name,...this.$route.query}})},async get_task(){const t=this.$route.params.ref.split("~").join("/");t?t.split("/").length<3&&(new I.OO("Invalid task specified",1500),this.$emit("close")):(new I.OO("No task specified",1500),this.$emit("close")),this.store.task_from_ref(t).then((t=>{t?(this.task=t,this.original=JSON.parse(JSON.stringify(t)),this.ready=!0,this.loading=!1):(new I.OO("Couldn't find that task",2e3),U.i2.warn("⚠ Couldn't find task"),this.$emit("close"))})).catch((t=>{new I.PK("Error getting task",t,1500),U.i2.error("⚠ Error getting task",t),this.$emit("close")}))},remove_link(t){this.task.links=this.task.links.filter((e=>e.path!==t.path)),this.newlink=t},fix_newlink_path(){if(this.newlink.path&&this.newlink.path.includes("."))try{this.newlink.path=new URL(this.newlink.path).href}catch(t){this.newlink.path="https://"+this.newlink.path,this.fix_newlink_path()}},async magic_text(){this.path_ready&&!this.newlink.text&&(this.loading_text=!0,this.magic.text(this.newlink.path).then((t=>{t?(new I.bF(`Generated link text '${t}'`,1500),U.i2.log("🔗 Generated link text:",t),this.newlink.text=t):(new I.OO("Couldn't reasonably infer link text",2e3),U.i2.warn("📃 Couldn't generate link text")),this.loaded_text=!0,this.loading_text=!1})).catch((t=>{new I.PK("Couldn't generate link text",t,3e3),U.i2.error("⚠ Failed link text generation:",t),this.loaded_text=!1,this.loading_text=!1})))}}},V=s(89);const K=(0,V.Z)(R,[["render",N],["__scopeId","data-v-704d1534"]]);var J=K}}]);
//# sourceMappingURL=621.23247537.js.map