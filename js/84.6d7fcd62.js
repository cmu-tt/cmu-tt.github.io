"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[84],{1084:function(e,s,t){t.r(s),t.d(s,{default:function(){return D}});t(7658);var a=t(3396),l=t(7139),d=t(9242);const n=e=>((0,a.dD)("data-v-f2500fb0"),e=e(),(0,a.Cn)(),e),i={class:"addtest"},c=n((()=>(0,a._)("header",{class:"modal_header"},[(0,a._)("h2",{class:"modal_header_title"},"Add a Test")],-1))),o={class:"overlay_contents"},r={class:"overlay_contents_text"},_={class:"inputs_row"},u=n((()=>(0,a._)("div",{class:"flex-break"},null,-1))),h=n((()=>(0,a._)("div",{class:"overlay_contents_text"},"Choose which classes this test will be added to",-1))),p={class:"checkboxes"},m=["id","value"],v=["for"],y={class:"bottom_actions"},f=n((()=>(0,a._)("div",{class:"flex-spacer"},null,-1))),b=["disabled"];function w(e,s,t,n,w,k){return(0,a.wg)(),(0,a.iD)("main",i,[c,(0,a._)("div",o,[(0,a._)("div",r," Schedule a new test for your class"+(0,l.zw)(k.classes&&1==k.classes.length?"":"es"),1),(0,a._)("div",_,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>w.test.name=e),class:"styled_input",type:"text",placeholder:"Test Name"},null,512),[[d.nr,w.test.name]]),(0,a.wy)((0,a._)("input",{type:"date",class:"styled_input input_test__date","onUpdate:modelValue":s[1]||(s[1]=e=>w.test.date=e)},null,512),[[d.nr,w.test.date]]),u,(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":s[2]||(s[2]=e=>w.test.description=e),class:"styled_input styled_textarea test_description",type:"text",placeholder:"Test Description (Optional)"},"\r\n        ",512),[[d.nr,w.test.description]])]),h,(0,a._)("div",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(k.classes,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"checkbox",key:e.id},[(0,a.wy)((0,a._)("input",{type:"checkbox",id:e.id,value:e.id,"onUpdate:modelValue":s[3]||(s[3]=e=>w.test_classes=e)},null,8,m),[[d.e8,w.test_classes]]),(0,a._)("label",{for:e.id},(0,l.zw)(e.name.replace("[JOINED] ","")),9,v)])))),128))])]),(0,a._)("div",y,[(0,a._)("button",{class:"close_action",onClick:s[4]||(s[4]=s=>e.$router.push("/portal"))},"Close"),f,(0,a._)("button",{class:"continue_action",onClick:s[5]||(s[5]=e=>k.store.add_test(w.test,w.test_classes)),disabled:!w.test.name||!w.test.date||!w.test_classes.length}," Add Test ",8,b)])])}var k=t(8980),x={name:"AddClassView",data(){return{test:{name:"",date:"",description:""},test_classes:[]}},computed:{class_name(){if(!this.classes)return null;let e=this.classes.find((e=>e.id===this.class_id));return e?e.name:null},loading(){return this.store.loaded_email!==this.teacher_email},classes(){return this?.store?.user?.email?this.store?.user?.email===this.store.loaded_email?this.store.loaded_classes:(this.store.get_classes_by_email(this.store?.user?.email),null):null},store(){return(0,k.h)()}}},C=t(89);const g=(0,C.Z)(x,[["render",w],["__scopeId","data-v-f2500fb0"]]);var D=g}}]);
//# sourceMappingURL=84.6d7fcd62.js.map