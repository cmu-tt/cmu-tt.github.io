"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[453],{1311:function(t,e,s){s.d(e,{l:function(){return l}});var i=s(1020);const a=[[/https:\/\/[a-zA-Z0-9]+.instructure.com\/courses\/[0-9]+\/modules*./,"Canvas Course Modules"],[/https:\/\/[a-zA-Z0-9]+.instructure.com\/courses\/[0-9]+\/assignments\/[0-9]+/,"Canvas Assignment"],[/https:\/\/[a-zA-Z0-9]+.instructure.com\/courses\/[0-9]+/,"Canvas Course"],[/https:\/\/[a-zA-Z0-9]+.instructure.com\/courses/,"Canvas Home"],[/https:\/\/[a-zA-Z0-9]+.instructure.com/,"Canvas"],[/https:\/\/classroom.google.com\/c\/[a-zA-Z0-9]+\/a\/.+/,"Google Classroom Assignment"],[/https:\/\/classroom.google.com\/c\/[a-zA-Z0-9]+\/p\/.+/,"Google Classroom Post"],[/https:\/\/classroom.google.com\/c\/[a-zA-Z0-9]+/,"Google Classroom Class"],[/https:\/\/classroom.google.com\/h/,"Google Classroom Home"],[/https:\/\/classroom.google.com\/u\/[0-9]+/,"Google Classroom Home"],[/https:\/\/drive.google.com\/file\/d\/.+/,"Google Drive File"],[/https:\/\/drive.google.com\/drawings\/d\/.+/,"Google Drawing"],[/https:\/\/docs.google.com\/document\/d\/.+/,"Google Docs File"],[/https:\/\/docs.google.com\/spreadsheets\/d\/.+/,"Google Sheet"],[/https:\/\/[a-zA-Z0-9]+.lon-capa.net.*/,"LON-CAPA Portal"],[/https:\/\/lon-capa.net.*/,"LON-CAPA Portal"],[/https:\/\/[a-zA-Z0-9]+.loncapa.net.*/,"LON-CAPA Portal"],[/https:\/\/loncapa.net.*/,"LON-CAPA Portal"]];function n(t){if(t){t=t.toLowerCase();for(let e=0;e<a.length;e++)if(t.match(a[e][0]))return a[e][1]}}const l=(0,i.Q_)({id:"magic",state:()=>({types:{note:"Note",task:"Assignment",test:"Test",project:"Project",quiz:"Quiz",exam:"Exam"}}),getters:{},actions:{text(t){return n(t)||null},type(t){const e="note"==t.type,s=((e?t.description:t.name)||"").toLowerCase();return s.includes("summative")&&!s.includes("assignment")||s.includes("formative")||s.includes("unit")&&s.includes("test")?"test":s.includes("project")?"project":s.includes("quiz")?"quiz":s.includes("exam")||s.includes("midterm")||s.includes("final")?"exam":s.length>=100||!s&&t.description&&t.description.length>=60?"note":s.length>=10&&s.length<50&&e||s.includes("assignment")?"task":void 0}}})},3453:function(t,e,s){s.r(e),s.d(e,{default:function(){return R}});s(7658);var i=s(3396),a=s(7139),n=s(9242);const l=t=>((0,i.dD)("data-v-07258716"),t=t(),(0,i.Cn)(),t),o={class:"edit_task"},r={class:"modal_header",ref:"title"},c={class:"header_style modal_header_title"},d={class:"overlay_contents",ref:"contents"},h={key:0},k={class:"overlay_contents_text change_text"},_=["href"],u={class:"inputs_row"},p=["placeholder","disabled"],m=l((()=>(0,i._)("div",{class:"flex-break"},null,-1))),g=["placeholder"],w=l((()=>(0,i._)("div",{class:"flex-break"},null,-1))),y={class:"styled_input styled_links_box"},f={class:"styled_links_display"},v={key:0,class:"placeholder"},x={key:1,class:"styled_line_links"},C=["onClick"],b=l((()=>(0,i._)("hr",{class:"styled_links_separator"},null,-1))),A={class:"styled_links_add"},O={class:"styled_links_add__sized magic_wrapper"},$=["disabled"],z={key:1,alt:"Loading Icon",class:"loading_icon"},D={class:"bottom_actions"},L=l((()=>(0,i._)("div",{class:"flex_spacer"},null,-1))),N=["disabled"],P=["disabled"];function j(t,e,s,l,j,q){return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("header",r,[(0,i._)("h2",c,"Edit "+(0,a.zw)(j.task.type||"task")+" details",1)],512),(0,i._)("div",d,[j.ready?((0,i.wg)(),(0,i.iD)("div",h,[(0,i._)("div",k,[(0,i.Uk)(" Change the details of your "+(0,a.zw)(j.task.type||"task")+(0,a.zw)(j.original.name?` "${j.original.name}"`:"")+" in ",1),(0,i._)("a",{class:"class_name button_pointer_text",href:`/view/${j.task._class.ref}`,onClick:e[0]||(e[0]=e=>{e.preventDefault(),t.$router.push({name:"viewclass",params:{ref:j.task._class.ref},query:t.$route.query})}),style:(0,a.j5)({"--color-class":q.class_obj.color,"--color-class-alt":q.class_obj.color+"2d"})},(0,a.zw)(`P${q.class_obj.period} - ${q.class_obj.name}`),13,_)]),(0,i._)("div",u,[q.is_note?(0,i.kq)("",!0):(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:0,"onUpdate:modelValue":e[1]||(e[1]=t=>j.task.name=t),class:"styled_input",type:"text",placeholder:q.type_full+" Name",disabled:q.is_note},null,8,p)),[[n.nr,j.task.name]]),(0,i.wy)((0,i._)("input",{type:"date",class:"styled_input input_task__date","onUpdate:modelValue":e[2]||(e[2]=t=>j.task.date=t),style:(0,a.j5)({maxWidth:q.is_note?"100%":null})},null,4),[[n.nr,j.task.date]]),m,(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":e[3]||(e[3]=t=>j.task.description=t),class:"styled_input styled_textarea task_description",type:"text",placeholder:q.type_full+(q.is_note?" Contents":" Description (Optional)")},"\r\n          ",8,g),[[n.nr,j.task.description]]),w,(0,i._)("div",y,[(0,i._)("div",f,[j.task.links&&j.task.links.length?((0,i.wg)(),(0,i.iD)("div",x,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(j.task.links,(t=>((0,i.wg)(),(0,i.iD)("a",{class:"styled_line_links__link styled_line_links__remove",target:"_blank",key:t.path,onClick:e=>q.remove_link(t)},(0,a.zw)(t.text),9,C)))),128))])):((0,i.wg)(),(0,i.iD)("span",v,(0,a.zw)(q.type_full)+" Links (Optional)",1))]),b,(0,i._)("div",A,[(0,i.wy)((0,i._)("input",{class:"styled_links_add__path",type:"url","onUpdate:modelValue":e[4]||(e[4]=t=>j.newlink.path=t),onBlur:e[5]||(e[5]=(...t)=>q.fix_newlink_path&&q.fix_newlink_path(...t)),placeholder:"Link URL (http://example.com)"},null,544),[[n.nr,j.newlink.path]]),(0,i._)("div",O,[(0,i.wy)((0,i._)("input",{class:"styled_links_add__text",type:"text","onUpdate:modelValue":e[6]||(e[6]=t=>j.newlink.text=t),placeholder:"Link Text (what students see)"},null,512),[[n.nr,j.newlink.text]]),j.newlink.path&&q.magic.text(j.newlink.path)&&q.magic.text(j.newlink.path)!=j.newlink.text?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"styled_magic click-action",onClick:e[7]||(e[7]=t=>j.newlink.text=q.magic.text(j.newlink.path)),title:"Auto-generate link text"})):(0,i.kq)("",!0)]),(0,i._)("button",{class:"styled_links_add__action",onClick:e[8]||(e[8]=(...t)=>q.add_newlink&&q.add_newlink(...t)),disabled:q.newlink_not_ready}," Add ",8,$)])])])])):((0,i.wg)(),(0,i.iD)("img",z))],512),(0,i._)("div",D,[(0,i._)("button",{class:"close_action click_escape",onClick:e[9]||(e[9]=e=>t.$emit("close"))},"Cancel"),L,(0,i._)("button",{class:"archive_action primary_styled",onClick:e[10]||(e[10]=(...t)=>q.archive_task&&q.archive_task(...t)),disabled:!j.ready||j.loading}," Archive ",8,N),(0,i._)("button",{class:(0,a.C_)(["continue_action click_ctrlenter",{loading_bg:j.loading}]),onClick:e[11]||(e[11]=(...t)=>q.try_submit&&q.try_submit(...t)),disabled:q.not_submittable}," Save "+(0,a.zw)(j.task.type||"task"),11,P)])])}var q=s(8980),Z=s(1311),U=s(2745),G=s(1708),S=s(9529),T=s.n(S),V={name:"EditTaskView",emits:["close"],mixins:[T()],data(){return{task:{},original:{},newlink:{text:"",path:""},ready:!1,loading:!0}},mounted(){this.$smoothReflow({el:this.$refs.contents,childTransitions:!0}),this.$smoothReflow({el:this.$refs.title,hideOverflow:!0}),this.get_task()},computed:{not_submittable(){return!this.changed||!this.task.name&&!this.is_note||!this.task.date||this.is_note&&!this.task.description},type_full(){return this.magic[this.task.type]||this.task.type||"Task"},newlink_not_ready(){return!this.newlink.path||!this.newlink.text||!this.newlink.path.startsWith("http")},class_obj(){let t=this.store?.classes;return t?t.find((t=>t.id===this.original.class_id))||{}:null},store(){return(0,q.h)()},magic(){return(0,Z.l)()},is_note(){return"note"===this.task.type},changed(){return JSON.stringify(this.task)!==JSON.stringify(this.original)},date(){let t=(0,U.HU)(this.task?.date);if(!isNaN(t.getTime()))return t=new Date(t.getTime()+60*t.getTimezoneOffset()*1e3),new Date(t).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"})}},methods:{try_submit(){this.not_submittable?this.changed?new G.OO("Please fill out all required fields",1e3):new G.OO("No changes to submit",1e3):this.update_task()},add_newlink(){this.task.links||(this.task.links=[]),this.newlink.path=new URL(this.newlink.path).href,this.task.links.push(this.newlink),this.task.links=[...new Set(this.task.links)],this.newlink={text:"",path:""}},async update_task(){this.newlink_not_ready?(this.loading=!0,this.store.update_task(this.task.ref,this.task).then((()=>{this.$router.push({name:"viewtask",params:{ref:this.$route.params.ref},query:this.$route.query})})).catch((t=>{this.loading=!1,U.i2.error(`📃 Couldn't save changes to ${this.task.type||"task"}:`,t),new G.PK(`Couldn't edit ${this.task.type||"task"}`,t,2e3)}))):new G.OO("Don't forget to to click the 'Add' button to add your link!",2e3)},archive_task(){this.$router.push({name:"archive",params:{type:this.task.type,ref:this.$route.params.ref},query:{title:this.is_note?this.task.description:this.task.name,...this.$route.query}})},async get_task(){const t=this.$route.params.ref.split("~").join("/");t?t.split("/").length<3&&(new G.OO("Invalid task specified",1500),this.$emit("close")):(new G.OO("No task specified",1500),this.$emit("close")),this.store.task_from_ref(t).then((t=>{t?(this.task=t,this.original=JSON.parse(JSON.stringify(t)),this.ready=!0,this.loading=!1):(new G.OO("Couldn't find that task",2e3),U.i2.warn("⚠ Couldn't find task"),this.$emit("close"))})).catch((t=>{new G.PK("Error getting task",t,1500),U.i2.error("⚠ Error getting task",t),this.$emit("close")}))},remove_link(t){this.task.links=this.task.links.filter((e=>e.path!==t.path)),this.newlink=t},fix_newlink_path(){if(this.newlink.path&&this.newlink.path.includes("."))try{this.newlink.path=new URL(this.newlink.path).href}catch(t){this.newlink.path="https://"+this.newlink.path,this.fix_newlink_path()}}}},E=s(89);const H=(0,E.Z)(V,[["render",j],["__scopeId","data-v-07258716"]]);var R=H}}]);
//# sourceMappingURL=453.c6ab3078.js.map