"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[847],{3847:function(e,s,a){a.r(s),a.d(s,{default:function(){return T}});a(7658);var t=a(3396),i=a(7139),l=a(9242);const o={class:"addclass"},d={class:"modal_header"},r={class:"header_style modal_header_title"},c={class:"overlay_contents",ref:"contents"},n={class:"overlay_contents_text"},_={key:0},h={key:1},u={key:0,class:"inputs_row"},m=["disabled"],p=["value","disabled"],f={key:0},g={key:0,value:"",disabled:"",hidden:"",selected:""},y={key:1,value:"",disabled:"",hidden:"",selected:""},w={key:1,class:"inputs_row"},b={key:2,class:"overlay_contents_text"},j=["href"],v={key:3,class:"overlay_contents_text"},k=(0,t._)("br",null,null,-1),$=[k],C={class:"overlay_contents_text"},D={key:0},q=(0,t._)("span",{class:"button_pointer_text"},"Share",-1),x={key:1},z={class:"bottom_actions"},O=(0,t._)("div",{class:"flex_spacer"},null,-1),U=["disabled"];function P(e,s,a,k,P,A){return(0,t.wg)(),(0,t.iD)("main",o,[(0,t._)("header",d,[(0,t._)("h2",r,(0,i.zw)(A.is_join?"Join":"Add a")+" Class",1)]),(0,t._)("div",c,[(0,t._)("div",n,[A.is_join?((0,t.wg)(),(0,t.iD)("span",_,(0,i.zw)(A.store.loaded_email==P.teacher_email?"Loaded":"Loading")+" from your teacher's class "+(0,i.zw)(A.code?"code":"ref"),1)):((0,t.wg)(),(0,t.iD)("span",h,[(0,t.Uk)("Join a class with your teacher's details or "),(0,t._)("span",{class:"click-action button_pointer_text",onClick:s[0]||(s[0]=s=>e.$router.push({name:"codeenterclass",query:e.$route.query}))},"enter a class code")]))]),A.is_join?((0,t.wg)(),(0,t.iD)("div",w,[(0,t._)("div",{id:"code_ref",class:(0,i.C_)(["styled_input",{code:A.code,ref:e.$route.params.ref}]),type:"text",placeholder:"Join Code / Reference"},(0,i.zw)(A.code||e.$route.params.ref||""),3)])):((0,t.wg)(),(0,t.iD)("div",u,[(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>P.teacher_email=e),ref:"teacher_email",class:"styled_input",type:"text",placeholder:"Teacher's Email"},null,512),[[l.nr,P.teacher_email]]),(0,t.wy)((0,t._)("select",{"onUpdate:modelValue":s[2]||(s[2]=e=>P.class_id=e),class:(0,i.C_)(["styled_input",{loading_bg:A.loading&&P.teacher_email}]),disabled:!A.classes||!A.classes.length},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(A.classes,(e=>((0,t.wg)(),(0,t.iD)("option",{value:e.id,key:e.id,disabled:e.is_joined&&!P.adding},[e.is_joined&&!P.adding?((0,t.wg)(),(0,t.iD)("span",f,"[JOINED]")):(0,t.kq)("",!0),(0,t.Uk)(" P"+(0,i.zw)(e.period)+" - "+(0,i.zw)(e.name),1)],8,p)))),128)),P.teacher_email&&!A.classes?((0,t.wg)(),(0,t.iD)("option",g,(0,i.zw)(A.loading?"Loading...":"No classes found"),1)):((0,t.wg)(),(0,t.iD)("option",y,(0,i.zw)(P.teacher_email&&A.classes?"Select a Class":""),1))],10,m),[[l.bM,P.class_id]])])),A.class_obj?((0,t.wg)(),(0,t.iD)("div",b,[(0,t.Uk)((0,i.zw)(A.class_obj&&A.class_obj.is_joined&&!P.adding?"You've already joined":"You'll be joining")+" ",1),(0,t._)("a",{class:"class_name button_pointer_text",href:`/view/${A.cleaned_ref}`,onClick:s[3]||(s[3]=s=>{s.preventDefault(),e.$router.push({name:"viewclass",params:{ref:A.cleaned_ref},query:e.$route.query})}),style:(0,i.j5)({"--color-class":A.class_obj.color,"--color-class-alt":A.class_obj.color+"2d"})},(0,i.zw)(`P${A.class_obj.period} - ${A.class_obj.name}`),13,j)])):(0,t.kq)("",!0),A.class_obj?((0,t.wg)(),(0,t.iD)("div",v,$)):(0,t.kq)("",!0),(0,t._)("div",C,[A.is_join?((0,t.wg)(),(0,t.iD)("span",D,[(0,t.Uk)("If you're having trouble, ask your teacher to share their class code again using the "),q,(0,t.Uk)(" button on the class edit page ")])):((0,t.wg)(),(0,t.iD)("span",x,"Enter your teacher's email above to see their classes"))])],512),(0,t._)("div",z,[(0,t._)("button",{class:"close_action click_escape",onClick:s[4]||(s[4]=s=>e.$emit("close"))},"Close"),O,(0,t._)("button",{class:(0,i.C_)(["continue_action",{loading_bg:P.adding||A.is_join&&A.loading,alt_bg:!P.teacher_email||!P.class_id||A.class_obj&&A.class_obj.is_joined&&!P.adding}]),onClick:s[5]||(s[5]=(...e)=>A.add_class&&A.add_class(...e)),disabled:!P.teacher_email||!P.class_id||A.class_obj&&A.class_obj.is_joined&&!P.adding}," Add Class ",10,U)])])}var A=a(8980),I=a(2745),J=a(1708),L=a(9529),Y=a.n(L),E={name:"AddClassView",emits:["close"],mixins:[Y()],data(){return{teacher_email:"",class_id:"",adding:!1}},mounted(){this.$smoothReflow({el:this.$refs.contents,childTransitions:!0}),this.$refs.teacher_email&&this.$refs.teacher_email.focus(),this.use_ref(),!this.is_join&&this.store.loaded_email&&this.store.get_loaded_classes.some((e=>!e.is_joined))&&(this.teacher_email=this.store.loaded_email)},computed:{class_obj(){return this.classes&&this.classes.find((e=>e.id===this.class_id))||!1},cleaned_ref(){return this.store.path_to_ref(this.teacher_email,this.class_id)},loading(){return this.store.loaded_email!==this.teacher_email},classes(){return this.teacher_email?this.teacher_email===this.store.loaded_email?this.store.get_loaded_classes:(this.store.fetch_classes_by_email(this.teacher_email),null):null},store(){return(0,A.h)()},is_join(){return"refclass"==this.$route?.name||"codeclass"==this.$route?.name},code(){return this.$route?.params?.code&&this.$route.params?.code.toLowerCase()}},methods:{async add_class(){this.adding=!0,this.store.add_class(this.teacher_email,this.class_id,this.class_obj.name,this.class_obj.period).then((()=>(this.$emit("close"),Promise.resolve()))).catch((()=>(this.adding=!1,Promise.reject())))},async use_ref(){let e=this.$route.params?.ref;if(!e&&this.code)try{e=await this.store.ref_from_code(this.code)}catch(s){return new J.PK("Invalid join code",s,4e3),I.i2.log("🔥 "+s),void(this.$route?.query?.manual?this.$router.push({name:"codeenterclass",query:this.$route.query}):this.to_normal_add())}if(e&&this.is_join){I.i2.log("🔍 Attempting to use class join ref",e);let[s,a]=e.split("~");s+=this.store.ORG_DOMAIN,this.teacher_email=s,this.store.fetch_classes_by_email(s);while(this.store.loaded_email!==this.teacher_email)await new Promise((e=>setTimeout(e,100)));let t=this.store?.get_loaded_classes?.find((e=>e.id===a));t?(this.class_id=a,t.is_joined&&(new J.OO("You've already joined this class",3e3),I.i2.log("🔥 Already joined class",e))):(new J.OO("Couldn't find that class",3e3),I.i2.log("🔥 Unfound class for join ref",e),this.to_normal_add())}else this.is_join&&(new J.OO("Please provide a join code",3e3),this.to_normal_add())},to_normal_add(){this.$router.push({name:"addclass",query:this.$route.query})}}},N=a(89);const R=(0,N.Z)(E,[["render",P]]);var T=R}}]);
//# sourceMappingURL=847.484b408a.js.map