(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[595],{9595:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return T}});var n=o(3396),s=o(9242),a=o(7139);const r=e=>((0,n.dD)("data-v-79a60576"),e=e(),(0,n.Cn)(),e),i={class:"onboardng",ref:"modal",id:"join_modal"},l={class:"overlay_contents_wrapper nopad"},c={class:"modal_art_part contrast_small_dark"},u={key:0,class:"overlay_contents overlay_contents__page overlay_more_pad_horizontal pad_overlay"},d=r((()=>(0,n._)("h2",{class:"header_style modal_header_title overlay_title"},"Join the MVTT Beta",-1))),p={class:"overlay_inputs inputs_column"},_=(0,n.uE)('<option class="placeholder_text" value="" hidden disabled selected data-v-79a60576>Grade Level</option><option value="9" data-v-79a60576>9th</option><option value="10" data-v-79a60576>10th</option><option value="11" data-v-79a60576>11th</option><option value="12" data-v-79a60576>12th</option><option value="teacher" data-v-79a60576>Teacher</option>',6),m=[_],h={key:1,class:"overlay_contents pad_overlay overlay_contents__page img_container__page"},g=r((()=>(0,n._)("img",{class:"auth_load_icon loading_icon",alt:"Loading Icon"},null,-1))),f=[g],v={class:"bottom_actions"},y=r((()=>(0,n._)("div",{class:"flex_spacer"},null,-1))),w=["disabled"],b={class:"desktop_only_text"};function k(e,t,o,r,_,g){const k=(0,n.Q2)("lazy");return(0,n.wg)(),(0,n.iD)("main",i,[(0,n._)("div",l,[(0,n.wy)((0,n._)("img",c,null,512),[[k,g.source]]),"form"==_.page?((0,n.wg)(),(0,n.iD)("div",u,[d,(0,n._)("div",p,[(0,n.wy)((0,n._)("input",{class:"styled_input styled_obj",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>_.form.name=e),placeholder:"Your Name"},null,512),[[s.nr,_.form.name]]),(0,n.wy)((0,n._)("select",{class:"styled_input styled_obj","onUpdate:modelValue":t[1]||(t[1]=e=>_.form.grade=e)},m,512),[[s.bM,_.form.grade]]),(0,n.wy)((0,n._)("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>_.form.usage=e),class:"styled_input styled_textarea styled_obj",type:"text",placeholder:"How will you use MVTT (optional)"},null,512),[[s.nr,_.form.usage]])])])):((0,n.wg)(),(0,n.iD)("div",h,f))]),(0,n._)("div",v,["form"==_.page?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"close_action",onClick:t[3]||(t[3]=t=>e.$emit("close"))},(0,a.zw)("form"==_.page&&""==_.form.name&&""==_.form.grade?"Close":"Cancel"),1)):(0,n.kq)("",!0),y,(0,n._)("button",{class:"continue_action",disabled:!g.contents_ready,onClick:t[4]||(t[4]=(...e)=>g.action&&g.action(...e))},[(0,n.Uk)((0,a.zw)(g.continue_text[0]),1),(0,n._)("span",b,(0,a.zw)(g.continue_text[1]),1)],8,w)])],512)}o(7658);var x=o(8980),j=o(1708),C=o(2745),O={emits:["close"],data(){return{page:"form",form:{name:"",grade:"",usage:""}}},computed:{contents_ready(){return"form"==this.page&&(this.form.name.length>=2&&""!=this.form.grade)},continue_text(){return"form"==this.page?this.store?.user?["Save"]:["Continue"," to Sign-Up"]:this.store?.user?["Saving...",""]:["Authenticating","..."]},store(){return(0,x.h)()},source(){try{return o(2255)(`./${this.combo}.png`)}catch(e){return"err"}},combo(){let e=window.localStorage.getItem("home_art"),t=e?e.split("s")[1][0]:null;return"ls"+t}},mounted(){this.store.done_join_form&&(this.$emit("close"),new j.OO("You've already joined!",2e3)),this.store?.user&&(this.form.name=this.store.user?.displayName||"")},methods:{action(){"form"==this.page&&(this.$route?.query?.redirect||this.$router.replace({name:"join",query:{redirect:"/portal"}}),this.page="auth",C.i2.log("📝 Saving join form:",this.form),this.store?.user?(this.store.save_join_form(this.form),this.check_store_and_close()):(C.i2.log("🔑 Triggering auth"),this.store.login().then((()=>{this.store.save_join_form(this.form),this.check_store_and_close()})).catch((e=>{C.i2.error("💾 Error logging in:",e),new j.OO("Couldn't complete authentication; "+e,2e3),this.page="form"}))))},check_store_and_close(){this.store.done_join_form&&this.$emit("close")}},watch:{"store.done_join_form":{handler(){this.check_store_and_close()},deep:!0},"store.user":{handler(){this.store?.user||this.$router.push({name:"home",query:{redirect:this.$route.query?.redirect}})},deep:!0}}},$=o(89);const D=(0,$.Z)(O,[["render",k],["__scopeId","data-v-79a60576"]]);var T=D},2255:function(e,t,o){var n={"./ls0.png":8159,"./ls1.png":75,"./ls2.png":9891,"./ls3.png":3312,"./ls4.png":2610,"./ls5.png":7408,"./ls6.png":4636};function s(e){var t=a(e);return o(t)}function a(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=a,e.exports=s,s.id=2255},8159:function(e,t,o){"use strict";e.exports=o.p+"img/ls0.de217599.png"},75:function(e,t,o){"use strict";e.exports=o.p+"img/ls1.68919c83.png"},9891:function(e,t,o){"use strict";e.exports=o.p+"img/ls2.ea41213d.png"},3312:function(e,t,o){"use strict";e.exports=o.p+"img/ls3.eaac83e7.png"},2610:function(e,t,o){"use strict";e.exports=o.p+"img/ls4.bd2bf00c.png"},7408:function(e,t,o){"use strict";e.exports=o.p+"img/ls5.65e9e65f.png"},4636:function(e,t,o){"use strict";e.exports=o.p+"img/ls6.ba3ed9f9.png"}}]);
//# sourceMappingURL=595.498469d0.js.map