"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[992],{5992:function(t,e,s){s.r(e),s.d(e,{default:function(){return I}});var a=s(3396),l=s(7139),n=s(9242);const i=t=>((0,a.dD)("data-v-6bd4b808"),t=t(),(0,a.Cn)(),t),d={class:"create_task"},o={class:"modal_header"},_={class:"header_style modal_header_title"},c=["value"],k={class:"overlay_contents"},p={class:"overlay_contents_text"},r={key:0},h={key:1},u={class:"inputs_row"},y=["placeholder","disabled"],w=i((()=>(0,a._)("div",{class:"flex-break"},null,-1))),m=["placeholder"],v=i((()=>(0,a._)("div",{class:"flex-break"},null,-1))),b={class:"styled_input styled_links_box"},g={class:"styled_links_display"},x={key:0,class:"placeholder"},f={key:1,class:"styled_line_links"},D=["href"],z=i((()=>(0,a._)("hr",{class:"styled_links_separator"},null,-1))),C={class:"styled_links_add"},U=["disabled"],V={class:"overlay_contents_text"},A={class:"checkboxes"},L=["id","value"],$=["for"],j=["for"],K={class:"bottom_actions"},T=i((()=>(0,a._)("div",{class:"flex_spacer"},null,-1))),H=["disabled"];function O(t,e,s,i,O,P){return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("header",o,[(0,a._)("h2",_,[(0,a._)("span",null,"Add a"+(0,l.zw)(P.is_vowel(P.type_full[0])?"n":"")+" ",1),(0,a.wy)((0,a._)("select",{title:"Task type","onUpdate:modelValue":e[0]||(e[0]=t=>O.task.type=t),class:"type_dropdown styled_input styled_select",ref:"type"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.entries(O.types),(t=>((0,a.wg)(),(0,a.iD)("option",{class:"type_dropdown__option styled_select__option",value:t[0],key:t[0]},(0,l.zw)(t[1]),9,c)))),128))],512),[[n.bM,O.task.type]])])]),(0,a._)("div",k,[(0,a._)("div",p,[P.is_note?((0,a.wg)(),(0,a.iD)("span",r,"Add a new "+(0,l.zw)(O.task.type)+" to",1)):((0,a.wg)(),(0,a.iD)("span",h,"Schedule a new "+(0,l.zw)(O.task.type)+" for",1)),(0,a.Uk)(" your class"+(0,l.zw)(P.classes&&1==P.classes.length?"":"es"),1)]),(0,a._)("div",u,[P.is_note?(0,a.kq)("",!0):(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:0,"onUpdate:modelValue":e[1]||(e[1]=t=>O.task.name=t),class:"styled_input",type:"text",placeholder:P.type_full+" Name",disabled:P.is_note},null,8,y)),[[n.nr,O.task.name]]),(0,a.wy)((0,a._)("input",{type:"date",class:"styled_input input_task__date","onUpdate:modelValue":e[2]||(e[2]=t=>O.task.date=t),style:(0,l.j5)({maxWidth:P.is_note?"100%":null})},null,4),[[n.nr,O.task.date]]),w,(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":e[3]||(e[3]=t=>O.task.description=t),class:"styled_input styled_textarea task_description",type:"text",placeholder:P.type_full+(P.is_note?" Contents":" Description (Optional)")},"\r\n        ",8,m),[[n.nr,O.task.description]]),v,(0,a._)("div",b,[(0,a._)("div",g,[O.task.links&&O.task.links.length?((0,a.wg)(),(0,a.iD)("div",f,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(O.task.links,(t=>((0,a.wg)(),(0,a.iD)("a",{class:"styled_line_links__link",target:"_blank",href:t.path,key:t.path},(0,l.zw)(t.text),9,D)))),128))])):((0,a.wg)(),(0,a.iD)("span",x,(0,l.zw)(P.type_full)+" Links (Optional)",1))]),z,(0,a._)("div",C,[(0,a.wy)((0,a._)("input",{class:"styled_links_add__path",type:"url","onUpdate:modelValue":e[4]||(e[4]=t=>O.newlink.path=t),placeholder:"Link URL (http://example.com)"},null,512),[[n.nr,O.newlink.path]]),(0,a.wy)((0,a._)("input",{class:"styled_links_add__text",type:"text","onUpdate:modelValue":e[5]||(e[5]=t=>O.newlink.text=t),placeholder:"Link Text (what students see)"},null,512),[[n.nr,O.newlink.text]]),(0,a._)("button",{class:"styled_links_add__action",onClick:e[6]||(e[6]=(...t)=>P.add_newlink&&P.add_newlink(...t)),disabled:P.newlink_ready}," Add ",8,U)])])]),(0,a._)("div",V," Choose which classes this "+(0,l.zw)(O.task.type)+" will be added to ",1),(0,a._)("div",A,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(P.classes,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"checkbox",key:t.id},[(0,a.wy)((0,a._)("input",{type:"checkbox",id:t.id,value:t.id,"onUpdate:modelValue":e[7]||(e[7]=t=>O.task_classes=t)},null,8,L),[[n.e8,O.task_classes]]),t.period?((0,a.wg)(),(0,a.iD)("label",{key:0,for:t.id}," P"+(0,l.zw)(t.period)+" - "+(0,l.zw)(t.name),9,$)):((0,a.wg)(),(0,a.iD)("label",{key:1,for:t.id},(0,l.zw)(t.name),9,j))])))),128))])]),(0,a._)("div",K,[(0,a._)("button",{class:"close_action",onClick:e[8]||(e[8]=e=>t.$emit("close"))},"Close"),T,(0,a._)("button",{class:(0,l.C_)(["continue_action",{loading_bg:O.loading}]),onClick:e[9]||(e[9]=(...t)=>P.create_task&&P.create_task(...t)),disabled:!O.task.name&&!P.is_note||!O.task.date||!O.task_classes.length||P.is_note&&!O.task.description}," Add "+(0,l.zw)(O.task.type),11,H)])])}s(7658);var P=s(8980),W=s(2745),Y=s(1708),q={name:"CreateTaskView",emits:["close"],data(){return{task:{name:"",date:"",description:"",type:this.$route.params.tasktype?this.$route.params.tasktype:"task"},task_classes:[],newlink:{text:"",path:""},loading:!1,types:{note:"Note",task:"Assignment",test:"Test",project:"Project",quiz:"Quiz",exam:"Exam"}}},computed:{type_full(){return this.get_type(this.task.type)},newlink_ready(){return!this.newlink.path||!this.newlink.text||!this.newlink.path.startsWith("http")},class_name(){if(!this.classes)return null;let t=this.classes.find((t=>t.id===this.class_id));return t?t.name:null},store(){return(0,P.h)()},classes(){return this.store.classes},is_note(){return"note"===this.task.type}},methods:{get_type(t=this.task.type){return this.types[t]||t},is_vowel(t){return["a","e","i","o","u"].includes(t.toLowerCase())},add_newlink(){this.task.links||(this.task.links=[]),this.newlink.path=this.newlink.path.startsWith("http")?this.newlink.path:"https://"+this.newlink.path,this.task.links.push(this.newlink),this.newlink={text:"",path:""}},create_task(){this.loading=!0,this.store.create_task(this.task,this.task_classes).then((()=>{this.$emit("close")})).catch((t=>{this.loading=!1,(0,W.E)(`📃 Couldn't create ${this.task.type||"task"}:`,t),new Y.PK("Couldn't create task",t,2e3)}))}}},E=s(89);const N=(0,E.Z)(q,[["render",O],["__scopeId","data-v-6bd4b808"]]);var I=N}}]);
//# sourceMappingURL=992.c8569719.js.map