"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[778],{1311:function(t,e,s){s.d(e,{l:function(){return o}});var a=s(2745),i=s(1020);const n="https://api.mvtt.app/",o=(0,i.Q_)({id:"magic",state:()=>({last:{},types:{note:"Note",task:"Assignment",test:"Test",project:"Project",quiz:"Quiz",exam:"Exam"}}),getters:{},actions:{async text(t){if(t)return await this.rated_api_get("get/magic/link-text",{path:t})},async type(t){if(t)return await this.rated_api_get("get/magic/task-type",{task:t})},async api_get(t,e){if(e=e||{},!t)return;const s=new URL(n+t);Object.keys(e).forEach((t=>s.searchParams.append(t,e[t])));const i=Math.random().toString(36).substring(7);a.i2.log(`🛜 Running API fetch | <${i}>`),this.last[t]={time:Date.now(),hash:i};try{const t=await fetch(s.href,{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok)throw"Non-valid response";const e=await t.json();return a.i2.log(`🛜 API fetch success | <${i}>`),e.data}catch(o){return a.i2.error(`🛜 API fetch failed  | <${i}>`,o),null}},async rated_api_get(t){a.i2.log("🛜 API fetch requested");const e=Math.random().toString(36).substring(7),s=this.last[t]?.time,i=this.last[t]?.hash;if(Date.now()-s<2e3){if(a.i2.warn("🛜 API fetch rate limited"),await new Promise((t=>setTimeout(t,15e3))),this.last[t]?.time!==s||this.last[t]?.hash!==i)return void a.i2.warn("🛜 Outdated API fetch skipped");a.i2.log("🛜 API fetch rate limit lifted")}return await this.api_get(...arguments,e)}}})},778:function(t,e,s){s.r(e),s.d(e,{default:function(){return j}});s(7658);var a=s(3396),i=s(7139),n=s(9242);const o=t=>((0,a.dD)("data-v-6d70a090"),t=t(),(0,a.Cn)(),t),r={class:"edit_task"},l={class:"modal_header",ref:"title"},c={class:"header_style modal_header_title"},d={class:"overlay_contents",ref:"contents"},h={key:0},_={class:"overlay_contents_text change_text"},u=["href"],p={class:"inputs_row"},k=["placeholder"],m={key:1,alt:"Loading Icon",class:"loading_icon"},g={class:"bottom_actions"},f=["disabled"],y=o((()=>(0,a._)("div",{class:"flex_spacer"},null,-1))),w=["disabled"];function b(t,e,s,o,b,v){return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("header",l,[(0,a._)("h2",c,(0,i.zw)(b.original_note?"Update":"Add")+" "+(0,i.zw)(b.task.type||"task")+" notes ",1)],512),(0,a._)("div",d,[b.ready?((0,a.wg)(),(0,a.iD)("div",h,[(0,a._)("div",_,[(0,a.Uk)(' Save your notes for "'+(0,i.zw)(b.task.name)+'" in ',1),(0,a._)("a",{class:"class_name button_pointer_text",href:`/view/${b.task._class.ref}`,onClick:e[0]||(e[0]=e=>{e.preventDefault(),t.$router.push({name:"viewclass",params:{ref:b.task._class.ref},query:t.$route.query})}),style:(0,i.j5)({"--color-class":b.task._class.color,"--color-class-alt":b.task._class.color+"2d"})},(0,i.zw)(v.store.class_text(t.class_obj)),13,u)]),(0,a._)("div",p,[(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>b.note=t),class:"styled_input styled_textarea task_note",type:"text",placeholder:"Your "+v.type_full+" Notes (Optional)"},"\n          ",8,k),[[n.nr,b.note]])])])):((0,a.wg)(),(0,a.iD)("img",m))],512),(0,a._)("div",g,[b.ready?((0,a.wg)(),(0,a.iD)("button",{key:0,class:(0,i.C_)(["back_action click_escape",{loading_bg:b.loading}]),disabled:b.loading,onClick:e[2]||(e[2]=(...t)=>v.back&&v.back(...t))}," View ",10,f)):((0,a.wg)(),(0,a.iD)("button",{key:1,class:"close_action click_escape",onClick:e[3]||(e[3]=e=>t.$emit("close"))},"Close")),y,(0,a._)("button",{class:(0,i.C_)(["continue_action click_ctrlenter",{loading_bg:b.loading}]),onClick:e[4]||(e[4]=(...t)=>v.try_submit&&v.try_submit(...t)),disabled:v.not_submittable},(0,i.zw)(b.original_note?"Update":"Add"),11,w)])])}var v=s(8980),$=s(1311),C=s(2745),x=s(1708),O=s(9529),P=s.n(O),A={name:"EditTaskView",emits:["close"],mixins:[P()],data(){return{task:{},original_note:"",note:"",ready:!1,loading:!0}},mounted(){this.$smoothReflow({el:this.$refs.contents,childTransitions:!0}),this.$smoothReflow({el:this.$refs.title,hideOverflow:!0}),this.get_task()},computed:{not_submittable(){return!this.changed},type_full(){return(0,$.l)()?.types[this.task.type]||this.task.type||"Task"},store(){return(0,v.h)()},changed(){return this.original_note!==this.note}},methods:{try_submit(){this.not_submittable?new x.OO("No changes to save",1e3):this.update_note()},back(){this.$router.push({name:"viewtask",params:{ref:this.$route.params.ref},query:this.$route.query})},async update_note(){this.loading=!0,this.store.set_note(this.note,this.$route.params.ref).then((()=>{new x.bF(`${this.original_note?this.note?"Updated":"Removed":"Added"} ${this.task.type||"task"} notes for ${this.task.name}`,2e3),this.back()})).catch((t=>{this.loading=!1,C.i2.error(`📃 Couldn't edit ${this.task.type||"task"} notes:`,t),new x.PK(`Couldn't edit ${this.task.type||"task"} notes`,t,2e3)}))},async get_task(){const t=this.$route.params.ref.split("~").join("/");t?t.split("/").length<3&&(new x.OO("Invalid task specified",1500),this.$emit("close")):(new x.OO("No task specified",1500),this.$emit("close")),this.store.task_from_ref(t).then((t=>{t?(this.task=t,this.original={...t},this.ready=!0,this.loading=!1):(new x.OO("Couldn't find that task",2e3),C.i2.warn("⚠ Couldn't find task"),this.$emit("close"));const e=this.store.note_for(this.$route.params.ref);e&&(this.note=e,this.original_note=e)})).catch((t=>{new x.PK("Error getting task",t,1500),C.i2.error("⚠ Error getting task",t),this.$emit("close")}))}}},I=s(89);const D=(0,I.Z)(A,[["render",b],["__scopeId","data-v-6d70a090"]]);var j=D}}]);
//# sourceMappingURL=778.2a830ae7.js.map