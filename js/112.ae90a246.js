"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[112],{8112:function(t,e,s){s.r(e),s.d(e,{default:function(){return q}});s(7658);var i=s(3396),a=s(7139),n=s(9242);const l=t=>((0,i.dD)("data-v-7ee41c59"),t=t(),(0,i.Cn)(),t),o={class:"modal_header",ref:"title"},r={class:"header_style modal_header_title"},d={class:"overlay_contents",ref:"contents"},h={key:0},_={class:"overlay_contents_text change_text"},k=["href"],c={class:"inputs_row"},p=["placeholder","disabled"],u=l((()=>(0,i._)("div",{class:"flex-break"},null,-1))),y=["placeholder"],w=l((()=>(0,i._)("div",{class:"flex-break"},null,-1))),m={class:"styled_input styled_links_box"},f={class:"styled_links_display"},g={key:0,class:"placeholder"},b={key:1,class:"styled_line_links"},v=["onClick"],x=l((()=>(0,i._)("hr",{class:"styled_links_separator"},null,-1))),$={class:"styled_links_add"},C=["disabled"],O={key:1,alt:"Loading Icon",class:"loading_icon"},D={class:"bottom_actions"},j=l((()=>(0,i._)("div",{class:"flex_spacer"},null,-1))),z=["disabled"],U=["disabled"];function L(t,e,s,l,L,N){return(0,i.wg)(),(0,i.iD)("div",{class:"edit_task",onKeypress:e[11]||(e[11]=(...t)=>N.submit_key&&N.submit_key(...t))},[(0,i._)("header",o,[(0,i._)("h2",r,"Edit "+(0,a.zw)(L.task.type||"task")+" details",1)],512),(0,i._)("div",d,[L.ready?((0,i.wg)(),(0,i.iD)("div",h,[(0,i._)("div",_,[(0,i.Uk)(" Change the details of your "+(0,a.zw)(L.task.type||"task")+(0,a.zw)(L.original.name?` "${L.original.name}"`:"")+" in ",1),(0,i._)("a",{class:"class_name button_pointer_text",href:`/view/${L.task._class.ref}`,onClick:e[0]||(e[0]=e=>{e.preventDefault(),t.$router.push("/portal"+e.target.getAttribute("href"))}),style:(0,a.j5)({"--color-class":N.class_obj.color,"--color-class-alt":N.class_obj.color+"2d"})},(0,a.zw)(`P${N.class_obj.period} - ${N.class_obj.name}`),13,k)]),(0,i._)("div",c,[N.is_note?(0,i.kq)("",!0):(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:0,"onUpdate:modelValue":e[1]||(e[1]=t=>L.task.name=t),class:"styled_input",type:"text",placeholder:N.type_full+" Name",disabled:N.is_note},null,8,p)),[[n.nr,L.task.name]]),(0,i.wy)((0,i._)("input",{type:"date",class:"styled_input input_task__date","onUpdate:modelValue":e[2]||(e[2]=t=>L.task.date=t),style:(0,a.j5)({maxWidth:N.is_note?"100%":null})},null,4),[[n.nr,L.task.date]]),u,(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":e[3]||(e[3]=t=>L.task.description=t),class:"styled_input styled_textarea task_description",type:"text",placeholder:N.type_full+(N.is_note?" Contents":" Description (Optional)")},"\r\n          ",8,y),[[n.nr,L.task.description]]),w,(0,i._)("div",m,[(0,i._)("div",f,[L.task.links&&L.task.links.length?((0,i.wg)(),(0,i.iD)("div",b,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(L.task.links,(t=>((0,i.wg)(),(0,i.iD)("a",{class:"styled_line_links__link styled_line_links__remove",target:"_blank",key:t.path,onClick:e=>N.remove_link(t)},(0,a.zw)(t.text),9,v)))),128))])):((0,i.wg)(),(0,i.iD)("span",g,(0,a.zw)(N.type_full)+" Links (Optional)",1))]),x,(0,i._)("div",$,[(0,i.wy)((0,i._)("input",{class:"styled_links_add__path",type:"url","onUpdate:modelValue":e[4]||(e[4]=t=>L.newlink.path=t),onBlur:e[5]||(e[5]=(...t)=>N.fix_newlink_path&&N.fix_newlink_path(...t)),placeholder:"Link URL (http://example.com)"},null,544),[[n.nr,L.newlink.path]]),(0,i.wy)((0,i._)("input",{class:"styled_links_add__text",type:"text","onUpdate:modelValue":e[6]||(e[6]=t=>L.newlink.text=t),placeholder:"Link Text (what students see)"},null,512),[[n.nr,L.newlink.text]]),(0,i._)("button",{class:"styled_links_add__action",onClick:e[7]||(e[7]=(...t)=>N.add_newlink&&N.add_newlink(...t)),disabled:N.newlink_not_ready}," Add ",8,C)])])])])):((0,i.wg)(),(0,i.iD)("img",O))],512),(0,i._)("div",D,[(0,i._)("button",{class:"close_action",onClick:e[8]||(e[8]=e=>t.$emit("close"))},"Cancel"),j,(0,i._)("button",{class:"archive_action primary_styled",onClick:e[9]||(e[9]=(...t)=>N.archive_task&&N.archive_task(...t)),disabled:!L.ready||L.loading}," Archive ",8,z),(0,i._)("button",{class:(0,a.C_)(["continue_action",{loading_bg:L.loading}]),onClick:e[10]||(e[10]=(...t)=>N.try_submit&&N.try_submit(...t)),disabled:N.not_submittable}," Save "+(0,a.zw)(L.task.type||"task"),11,U)])],32)}var N=s(8980),T=s(2745),E=s(1708),V=s(9529),A=s.n(V),K={name:"EditTaskView",emits:["close"],mixins:[A()],data(){return{task:{},original:{},newlink:{text:"",path:""},ready:!1,loading:!0,types:{note:"Note",task:"Assignment",test:"Test",project:"Project",quiz:"Quiz",exam:"Exam"}}},mounted(){this.$smoothReflow({el:this.$refs.contents,childTransitions:!0}),this.$smoothReflow({el:this.$refs.title,hideOverflow:!0}),this.get_task()},computed:{not_submittable(){return!this.changed||!this.task.name&&!this.is_note||!this.task.date||this.is_note&&!this.task.description},type_full(){return this.types[this.task.type]||this.task.type||"Task"},newlink_not_ready(){return!this.newlink.path||!this.newlink.text||!this.newlink.path.startsWith("http")},class_obj(){let t=this.store?.classes;return t?t.find((t=>t.id===this.original.class_id))||{}:null},store(){return(0,N.h)()},is_note(){return"note"===this.task.type},changed(){return JSON.stringify(this.task)!==JSON.stringify(this.original)},date(){let t=(0,T.HU)(this.task?.date);if(!isNaN(t.getTime()))return t=new Date(t.getTime()+60*t.getTimezoneOffset()*1e3),new Date(t).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"})}},methods:{submit_key(t){t.ctrlKey&&"Enter"===t.code&&(t.preventDefault(),this.try_submit())},try_submit(){this.not_submittable?this.changed?new E.OO("Please fill out all required fields",1e3):new E.OO("No changes to submit",1e3):this.update_task()},add_newlink(){this.task.links||(this.task.links=[]),this.newlink.path=new URL(this.newlink.path).href,this.task.links.push(this.newlink),this.newlink={text:"",path:""}},async update_task(){this.newlink_not_ready?(this.loading=!0,this.store.update_task(this.task.ref,this.task).then((()=>{this.$router.push({name:"viewtask",params:{ref:this.$route.params.ref}})})).catch((t=>{this.loading=!1,T.i2.error(`📃 Couldn't save changes to ${this.task.type||"task"}:`,t),new E.PK(`Couldn't edit ${this.task.type||"task"}`,t,2e3)}))):new E.OO("Don't forget to to click the 'Add' button to add your link!",2e3)},archive_task(){this.$router.push({name:"archive",params:{type:this.task.type,ref:this.$route.params.ref},query:{title:this.is_note?this.task.description:this.task.name}})},async get_task(){const t=this.$route.params.ref.split("~").join("/");t?t.split("/").length<3&&(new E.OO("Invalid task specified",1500),this.$emit("close")):(new E.OO("No task specified",1500),this.$emit("close")),this.store.task_from_ref(t).then((t=>{t?(this.task=t,this.original={...t},this.ready=!0,this.loading=!1):(new E.OO("Couldn't find that task",2e3),T.i2.warn("⚠ Couldn't find task"),this.$emit("close"))})).catch((t=>{new E.PK("Error getting task",t,1500),T.i2.error("⚠ Error getting task",t),this.$emit("close")}))},remove_link(t){this.task.links=this.task.links.filter((e=>e.path!==t.path)),this.newlink=t},fix_newlink_path(){if(this.newlink.path&&this.newlink.path.includes("."))try{this.newlink.path=new URL(this.newlink.path).href}catch(t){this.newlink.path="https://"+this.newlink.path,this.fix_newlink_path()}}}},P=s(89);const R=(0,P.Z)(K,[["render",L],["__scopeId","data-v-7ee41c59"]]);var q=R}}]);
//# sourceMappingURL=112.ae90a246.js.map