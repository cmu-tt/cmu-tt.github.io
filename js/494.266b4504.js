"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[494],{4494:function(e,s,a){a.r(s),a.d(s,{default:function(){return U}});a(7658);var t=a(3396),i=a(7139),r=a(9242);const l=e=>((0,t.dD)("data-v-cfb0b6ce"),e=e(),(0,t.Cn)(),e),o={class:"createclass"},n=l((()=>(0,t._)("header",{class:"modal_header"},[(0,t._)("h2",{class:"header_style modal_header_title"},"Edit class details")],-1))),c={class:"overlay_contents",ref:"contents"},d={key:0},h={class:"overlay_contents_text"},_=["href"],u={class:"inputs_row"},p={class:"class_period_container styled_obj"},g={class:"color_input_container styled_input",title:"Class Theme Color"},m={key:1,alt:"Loading Icon",class:"loading_icon"},f={class:"bottom_actions"},y=["disabled"],b=l((()=>(0,t._)("div",{class:"flex_spacer"},null,-1))),v=["disabled"],w=["disabled"];function C(e,s,a,l,C,$){return(0,t.wg)(),(0,t.iD)("main",o,[n,(0,t._)("div",c,[C.ready?((0,t.wg)(),(0,t.iD)("div",d,[(0,t._)("div",h,[(0,t.Uk)(" You're editing "),(0,t._)("a",{class:"class_name button_pointer_text",href:`/view/${e.$route.params.ref}`,onClick:s[0]||(s[0]=s=>{s.preventDefault(),e.$router.push({name:"viewclass",params:{ref:e.$route.params.ref},query:e.$route.query})}),style:(0,i.j5)({"--color-class":C.original.color,"--color-class-alt":C.original.color+"2d"})},(0,i.zw)($.store.class_text(C.original)),13,_)]),(0,t._)("div",u,[(0,t._)("div",p,[(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>C.class_obj.period=e),class:"styled_input class_period",type:"number",min:"1",max:"8",step:"1",placeholder:"#"},null,512),[[r.nr,C.class_obj.period]])]),(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":s[2]||(s[2]=e=>C.class_obj.name=e),class:"styled_input class_name",type:"text",placeholder:"Name"},null,512),[[r.nr,C.class_obj.name]]),(0,t._)("div",g,[(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":s[3]||(s[3]=e=>C.class_obj.color=e),class:"color_input",type:"color",placeholder:"Class Color"},null,512),[[r.nr,C.class_obj.color]])])])])):((0,t.wg)(),(0,t.iD)("img",m))],512),(0,t._)("div",f,[(0,t._)("button",{class:(0,i.C_)(["alt_action",{loading_bg:C.loading_share&&C.ready,click_escape:!C.ready}]),onClick:s[4]||(s[4]=s=>{C.ready?$.share_class():e.$emit("close")}),disabled:C.ready&&C.loading_share||!$.is_owned},(0,i.zw)(C.ready?"Share":"Close"),11,y),b,(0,t._)("button",{class:"leave_action primary_styled",onClick:s[5]||(s[5]=(...e)=>$.leave_class&&$.leave_class(...e)),disabled:!C.ready}," Leave ",8,v),(0,t._)("button",{class:(0,i.C_)(["continue_action click_ctrlenter",{loading_bg:C.loading}]),onClick:s[6]||(s[6]=(...e)=>$.update_class&&$.update_class(...e)),disabled:!C.ready||!$.changed||!C.class_obj.name}," Save ",10,w)])])}var $=a(8980),j=a(9529),O=a.n(j),k=a(1708),x=a(2745),S={name:"EditClassView",emits:["close"],mixins:[O()],data(){return{class_obj:{},original:{},loading:!1,ready:!1,ref:this.$route?.params?.ref,loading_share:!1}},computed:{store(){return(0,$.h)()},changed(){return JSON.stringify(this.class_obj)!=JSON.stringify(this.original)},is_owned(){return this.store.user.email.split("@")[0]==this.ref.split("/")[0]}},mounted(){if(this.$smoothReflow({el:this.$refs.contents,childTransitions:!0}),!this.ref||2!=this.ref.split("~").length)return new k.OO("Invalid class provided"),void this.$emit("close");this.ref=this.ref.split("~").join("/"),this.get_class(),this.is_owned||(this.$emit("close"),new k.OO("You are not the teacher of this class",2e3))},methods:{update_class(){this.loading=!0,this.store.update_class(this.ref,this.class_obj).then((()=>{this.$emit("close")})).catch((e=>{new k.OO("Something went wrong updating the class",2500),x.i2.error("🔥Couldn't update class",this.ref,e),this.loading=!1}))},get_class(){this.ready=!1,this.store.class_from_ref(this.ref).then((e=>{this.class_obj=e,this.original={...e},this.ready=!0})).catch((e=>{new k.OO("Couldn't find that class",2e3),x.i2.error("🔥Couldn't find class for edit",this.ref,e),this.$emit("close")}))},leave_class(){this.$router.push({name:"leave",params:{ref:this.$route?.params?.ref},query:this.$route.query})},async share_class(){this.loading_share=!0,this.store.code_from_ref(this.ref).then((e=>{let s=new URL("https://add.mvtt.app/"+e);navigator.share?navigator.share({title:this.store.class_text(this.class_obj),text:"Join my class on MVTT!",url:s.href}).then((()=>new k.bF("Opened share dialog",1e3))).catch((e=>x.i2.error("🔥 Error sharing",e))):navigator.clipboard?(navigator.clipboard.writeText(s.href),new k.OO("Sharing not supported, copied link to clipboard",2e3)):new k.OO("Sharing and copying not supported, sorry",2e3),this.loading_share=!1})).catch((e=>{new k.PK("Something went wrong getting the code",e?.message||e,2e3),x.i2.error("🔥 Couldn't get code",this.ref,e),this.loading_share=!1}))}}},D=a(89);const T=(0,D.Z)(S,[["render",C],["__scopeId","data-v-cfb0b6ce"]]);var U=T}}]);
//# sourceMappingURL=494.266b4504.js.map