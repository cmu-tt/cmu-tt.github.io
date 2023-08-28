"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[935],{3935:function(e,s,a){a.r(s),a.d(s,{default:function(){return V}});var i=a(3396),t=a(7139),l=a(9242);const o={class:"addclass"},d={class:"modal_header"},c={class:"header_style modal_header_title"},n={class:"overlay_contents",ref:"contents"},r={class:"overlay_contents_text"},_={key:0},h={key:1},u={key:0,class:"inputs_row"},m=["disabled"],p=["value","disabled"],w={key:0},b={key:0,value:"",disabled:"",hidden:"",selected:""},f={key:1,value:"",disabled:"",hidden:"",selected:""},y={key:1,class:"inputs_row"},j={key:2,class:"overlay_contents_text"},g={key:3,class:"overlay_contents_text"},v=(0,i._)("br",null,null,-1),k=[v],$={class:"overlay_contents_text"},D={key:0},C=(0,i._)("span",{class:"button_pointer_text"},"Share",-1),x={key:1},z={class:"bottom_actions"},E=(0,i._)("div",{class:"flex_spacer"},null,-1),O=["disabled"];function P(e,s,a,v,P,U){return(0,i.wg)(),(0,i.iD)("main",o,[(0,i._)("header",d,[(0,i._)("h2",c,(0,t.zw)(U.is_join?"Join":"Add a")+" Class",1)]),(0,i._)("div",n,[(0,i._)("div",r,[U.is_join?((0,i.wg)(),(0,i.iD)("span",_,(0,t.zw)(U.store.loaded_email==P.teacher_email?"Loaded":"Loading")+" from your teacher's class code",1)):((0,i.wg)(),(0,i.iD)("span",h,"Join a new class"))]),U.is_join?((0,i.wg)(),(0,i.iD)("div",y,[(0,i._)("div",{id:"code_ref",class:(0,t.C_)(["styled_input",{code:e.$route.params.code,ref:e.$route.params.ref}]),type:"text",placeholder:"Join Code / Reference"},(0,t.zw)(e.$route.params.code||e.$route.params.ref||""),3)])):((0,i.wg)(),(0,i.iD)("div",u,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>P.teacher_email=e),ref:"teacher_email",class:"styled_input",type:"text",placeholder:"Teacher's Email"},null,512),[[l.nr,P.teacher_email]]),(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":s[1]||(s[1]=e=>P.class_id=e),class:(0,t.C_)(["styled_input",{loading_bg:U.loading&&P.teacher_email}]),disabled:!U.classes||!U.classes.length},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(U.classes,(e=>((0,i.wg)(),(0,i.iD)("option",{value:e.id,key:e.id,disabled:e.is_joined},[e.is_joined?((0,i.wg)(),(0,i.iD)("span",w,"[JOINED]")):(0,i.kq)("",!0),(0,i.Uk)(" P"+(0,t.zw)(e.period)+" - "+(0,t.zw)(e.name),1)],8,p)))),128)),P.teacher_email&&!U.classes?((0,i.wg)(),(0,i.iD)("option",b,(0,t.zw)(U.loading?"Loading...":"No classes found"),1)):((0,i.wg)(),(0,i.iD)("option",f,(0,t.zw)(P.teacher_email&&U.classes?"Select a Class":""),1))],10,m),[[l.bM,P.class_id]])])),U.class_obj?((0,i.wg)(),(0,i.iD)("div",j,[(0,i.Uk)((0,t.zw)(U.class_obj&&U.class_obj.is_joined?"You've already joined":"You'll be joining")+" ",1),(0,i._)("span",{class:"class_name button_pointer_text",style:(0,t.j5)({"--color-class":U.class_obj.color,"--color-class-alt":U.class_obj.color+"2d"})},(0,t.zw)(`P${U.class_obj.period} - ${U.class_obj.name}`),5)])):(0,i.kq)("",!0),U.class_obj?((0,i.wg)(),(0,i.iD)("div",g,k)):(0,i.kq)("",!0),(0,i._)("div",$,[U.is_join?((0,i.wg)(),(0,i.iD)("span",D,[(0,i.Uk)("If you're having trouble, ask your teacher to share their class code again using the "),C,(0,i.Uk)(" button on the class edit page ")])):((0,i.wg)(),(0,i.iD)("span",x,"Enter your teacher's email above to see their classes"))])],512),(0,i._)("div",z,[(0,i._)("button",{class:"close_action",onClick:s[2]||(s[2]=s=>e.$emit("close"))},"Close"),E,(0,i._)("button",{class:(0,t.C_)(["continue_action",{loading_bg:P.adding||U.is_join&&U.loading}]),onClick:s[3]||(s[3]=(...e)=>U.add_class&&U.add_class(...e)),disabled:!P.teacher_email||!P.class_id||U.class_obj&&U.class_obj.is_joined}," Add Class ",10,O)])])}a(7658);var U=a(8980),A=a(2745),J=a(1708),Y=a(9529),q=a.n(Y),I={name:"AddClassView",emits:["close"],mixins:[q()],data(){return{teacher_email:"",class_id:"",adding:!1}},mounted(){this.$smoothReflow({el:this.$refs.contents,childTransitions:!0}),this.$refs.teacher_email&&this.$refs.teacher_email.focus(),this.use_ref()},computed:{class_obj(){return this.classes&&this.classes.find((e=>e.id===this.class_id))||!1},loading(){return this.store.loaded_email!==this.teacher_email},classes(){return this.teacher_email?this.teacher_email===this.store.loaded_email?this.store.loaded_classes:(this.store.fetch_classes_by_email(this.teacher_email),null):null},store(){return(0,U.h)()},is_join(){return"joinclass"==this.$route?.name||"codeclass"==this.$route?.name}},methods:{async add_class(){this.adding=!0,this.store.add_class(this.teacher_email,this.class_id,this.class_obj.name,this.class_obj.period).then((()=>(this.$emit("close"),Promise.resolve()))).catch((()=>(this.adding=!1,Promise.reject())))},async use_ref(){let e=this.$route.params?.ref;if(!e&&this.$route.params?.code)try{e=await this.store.ref_from_code(this.$route.params?.code)}catch(s){return new J.PK("Invalid join code",s,4e3),(0,A.E)("🔥 "+s),void this.to_normal_add()}if(e&&this.is_join){(0,A.E)("🔍 Attempting to use class join ref",e);let[s,a]=e.split("~");s+="@mvla.net",this.teacher_email=s,this.store.fetch_classes_by_email(s);while(this.store.loaded_email!==this.teacher_email)await new Promise((e=>setTimeout(e,100)));let i=this.store.loaded_classes&&this.store.loaded_classes.find((e=>e.id===a));i?(this.class_id=a,i.is_joined&&(new J.OO("You've already joined this class",3e3),(0,A.E)("🔥 Already joined class",e))):(new J.OO("Couldn't find that class",3e3),(0,A.E)("🔥 Unfound class for join ref",e),this.to_normal_add())}else new J.OO("Please provide a join code",3e3),this.to_normal_add()},to_normal_add(){this.$router.push({name:"addclass"})}}},L=a(89);const T=(0,L.Z)(I,[["render",P]]);var V=T}}]);
//# sourceMappingURL=935.b8359fec.js.map