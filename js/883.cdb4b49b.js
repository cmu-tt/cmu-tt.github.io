"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[883],{6883:function(e,s,a){a.r(s),a.d(s,{default:function(){return $}});var t=a(6768),l=a(4232),i=a(5130);const d={class:"onboarding"},c=(0,t.Lk)("header",{class:"modal_header"},[(0,t.Lk)("h2",{class:"header_style modal_header_title"},"Welcome to MVTime")],-1),n={class:"overlay_contents"},o={class:"overlay_contents_text"},r={class:"inputs_row"},_=["disabled"],h=["value","disabled"],u={key:0},m={key:0,value:"",disabled:"",hidden:"",selected:""},k={key:1,value:"",disabled:"",hidden:"",selected:""},p=(0,t.Lk)("div",{class:"overlay_contents_text"},[(0,t.eW)(" You can add more classes later from the "),(0,t.Lk)("span",{class:"button_pointer_text"},"Join a Class"),(0,t.eW)(" button on the left sidebar ")],-1),b={class:"bottom_actions"},v=(0,t.Lk)("div",{class:"flex_spacer"},null,-1),f=["disabled"];function y(e,s,a,y,L,C){return(0,t.uX)(),(0,t.CE)("div",d,[c,(0,t.Lk)("div",n,[(0,t.Lk)("div",o,(0,l.v_)(C.name)+" Let's get you set up with your first class",1),(0,t.Lk)("div",r,[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>L.teacher_email=e),ref:"teacher_email",class:"styled_input",type:"text",placeholder:"Teacher's Email",enterkeyhint:"next",onKeydown:s[1]||(s[1]=(0,i.jR)((s=>e.$refs.class_id.focus()),["enter"]))},null,544),[[i.Jo,L.teacher_email]]),(0,t.bo)((0,t.Lk)("select",{"onUpdate:modelValue":s[2]||(s[2]=e=>L.class_id=e),class:(0,l.C4)(["styled_input",{loading_bg:C.loading&&L.teacher_email}]),disabled:!C.classes||!C.classes.length},[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(C.classes,(s=>((0,t.uX)(),(0,t.CE)("option",{value:s.id,key:s.id,disabled:s.is_joined},[s.is_joined?((0,t.uX)(),(0,t.CE)("span",u,"[JOINED]")):(0,t.Q3)("",!0),(0,t.eW)(" "+(0,l.v_)(e.$store.class_text(s)),1)],8,h)))),128)),L.teacher_email&&!C.classes?((0,t.uX)(),(0,t.CE)("option",m,(0,l.v_)(C.loading?"Loading...":"No classes found"),1)):((0,t.uX)(),(0,t.CE)("option",k,(0,l.v_)(L.teacher_email&&C.classes?"Select a Class":"-----"),1))],10,_),[[i.u1,L.class_id]])]),p]),(0,t.Lk)("div",b,[(0,t.Lk)("button",{class:"back_action click_escape",onClick:s[3]||(s[3]=s=>e.$emit("close"))},"Skip"),v,(0,t.Lk)("button",{class:"continue_action click_ctrlenter",onClick:s[4]||(s[4]=(...e)=>C.add_class&&C.add_class(...e)),disabled:!L.teacher_email||!L.class_id}," Add Class ",8,f)])])}var L={name:"OnboardingView",emits:["close"],data(){return{teacher_email:"",class_id:"",adding:!1}},computed:{class_obj(){return this.classes?this.classes.find((e=>e.id===this.class_id))||{}:null},loading(){return this.$store.loaded_email!==this.teacher_email},classes(){return this.teacher_email?this.teacher_email===this.$store.loaded_email?this.$store.loaded_classes:(this.$store.fetch_classes_by_email(this.teacher_email),null):null},name(){return this.$store.user&&this.$store.user.displayName?"Hi "+this.$store.user.displayName.split(" ")[0]+", ":""}},mounted(){this.$refs.teacher_email.focus()},methods:{add_class(){this.adding=!0,this.$store.add_class(this.teacher_email,this.class_id,this.class_obj.name,this.class_obj.period).then((()=>{this.$emit("close")})).catch((()=>{this.adding=!1}))}}},C=a(1241);const g=(0,C.A)(L,[["render",y]]);var $=g}}]);
//# sourceMappingURL=883.cdb4b49b.js.map