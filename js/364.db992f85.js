"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[364],{7364:function(e,s,a){a.r(s),a.d(s,{default:function(){return C}});a(7658);var l=a(3396),t=a(9242),i=a(7139);const c={class:"addclass"},d=(0,l._)("header",{class:"modal_header"},[(0,l._)("h2",{class:"modal_header_title"},"Add a Class")],-1),n={class:"overlay_contents"},o=(0,l._)("div",{class:"overlay_contents_text"},"Join a new class",-1),r={class:"inputs_row"},_=["value","disabled"],u={key:0,value:"",disabled:"",hidden:"",selected:""},h={key:1,value:"",disabled:"",hidden:"",selected:""},m=(0,l._)("div",{class:"overlay_contents_text"},"Enter your teacher's email above to see their classes",-1),v={class:"bottom_actions"},p=(0,l._)("div",{class:"flex-spacer"},null,-1),w=["disabled"];function b(e,s,a,b,y,f){return(0,l.wg)(),(0,l.iD)("main",c,[d,(0,l._)("div",n,[o,(0,l._)("div",r,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>y.teacher_email=e),class:"styled_input",type:"text",placeholder:"Teacher's Email"},null,512),[[t.nr,y.teacher_email]]),(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":s[1]||(s[1]=e=>y.class_id=e),class:"styled_input"},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(f.classes,(e=>((0,l.wg)(),(0,l.iD)("option",{value:e.id,key:e.id,disabled:e.is_joined},(0,i.zw)(e.name),9,_)))),128)),y.teacher_email&&!f.classes?((0,l.wg)(),(0,l.iD)("option",u,(0,i.zw)(f.loading?"Loading...":"No classes found"),1)):((0,l.wg)(),(0,l.iD)("option",h,(0,i.zw)(y.teacher_email&&f.classes?"Select a Class":""),1))],512),[[t.bM,y.class_id]])]),m]),(0,l._)("div",v,[(0,l._)("button",{class:"close_action",onClick:s[2]||(s[2]=s=>e.$router.push("/portal"))},"Close"),p,(0,l._)("button",{class:"continue_action",onClick:s[3]||(s[3]=e=>f.store.add_class(y.teacher_email,y.class_id,f.class_name)),disabled:!y.teacher_email||!y.class_id}," Add Class ",8,w)])])}var y=a(8980),f={name:"AddClassView",data(){return{teacher_email:"",class_id:""}},computed:{class_name(){if(!this.classes)return null;let e=this.classes.find((e=>e.id===this.class_id));return e?e.name:null},loading(){return this.store.loaded_email!==this.teacher_email},classes(){return this.teacher_email?this.teacher_email===this.store.loaded_email?this.store.loaded_classes:(this.store.get_classes_by_email(this.teacher_email),null):null},store(){return(0,y.h)()}}},g=a(89);const k=(0,g.Z)(f,[["render",b]]);var C=k}}]);
//# sourceMappingURL=364.db992f85.js.map