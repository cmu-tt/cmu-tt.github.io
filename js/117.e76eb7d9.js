"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[117],{5117:function(e,s,t){t.r(s),t.d(s,{default:function(){return ee}});t(4114);var a=t(6768),n=t(4232);const l=e=>((0,a.Qi)("data-v-dff9ed10"),e=e(),(0,a.jt)(),e),i={class:"viewtask"},r={class:"modal_header",ref:"title"},o={class:"header_style modal_header_title"},c={ref:"contents",class:"overlay_contents"},_={key:0,ref:"text_contents"},d={class:"spaced_contents"},k={class:"styled_obj"},u=l((()=>(0,a.Lk)("span",{class:"styled_line__label"},"Class:",-1))),p=l((()=>(0,a.Lk)("span",{class:"styled_line__separator"},null,-1))),h={class:"styled_line__value"},y=["href"],m={key:0,class:"styled_obj"},v=l((()=>(0,a.Lk)("span",{class:"styled_line__label"},"Name:",-1))),f=l((()=>(0,a.Lk)("span",{class:"styled_line__separator"},null,-1))),L={class:"styled_line__value"},$={class:"styled_obj"},b=l((()=>(0,a.Lk)("span",{class:"styled_line__label"},"Date:",-1))),g=l((()=>(0,a.Lk)("span",{class:"styled_line__separator"},null,-1))),w={class:"styled_line__value"},C={key:1,class:"styled_obj"},E={class:"styled_line__label"},M=l((()=>(0,a.Lk)("span",{class:"styled_line__separator"},null,-1))),N=["innerHTML"],T={key:2,class:"styled_obj links_obj"},X=l((()=>(0,a.Lk)("span",{class:"styled_line__label"},"Links:",-1))),x=l((()=>(0,a.Lk)("span",{class:"styled_line__separator"},null,-1))),j={class:"styled_line__value styled_line_links"},D=["href"],Q={key:3,class:"styled_obj"},I=l((()=>(0,a.Lk)("span",{class:"styled_line__label"},"Your Notes:",-1))),Y=l((()=>(0,a.Lk)("span",{class:"styled_line__separator"},null,-1))),O=["innerHTML"],q=l((()=>(0,a.Lk)("div",{class:"overlay_contents_text"}," Information is provided by teachers and volunteer students, and may not always be correct ",-1))),A={key:1,ref:"loading_contents",alt:"Loading Icon",class:"loading_icon"},H={class:"bottom_actions"},R=l((()=>(0,a.Lk)("div",{class:"flex_spacer"},null,-1))),S=["disabled"];function V(e,s,t,l,V,P){return(0,a.uX)(),(0,a.CE)("main",i,[(0,a.Lk)("header",r,[(0,a.Lk)("h2",o," View "+(0,n.v_)(V.task&&V.task.type?V.task.type:"task")+" details ",1)],512),(0,a.Lk)("div",c,[V.ready?((0,a.uX)(),(0,a.CE)("div",_,[(0,a.Lk)("div",d,[(0,a.Lk)("div",k,[u,p,(0,a.Lk)("span",h,[(0,a.Lk)("a",{class:"class_name button_pointer_text",href:`/view/${V.task._class.ref}`,onClick:s[0]||(s[0]=s=>{s.preventDefault(),e.$router.push({name:"viewclass",params:{ref:V.task._class.ref},query:e.$route.query})}),style:(0,n.Tr)({"--color-class":V.task._class.color,"--color-class-alt":V.task._class.color+"2d"})},(0,n.v_)(V.task.group||V.task.class_name),13,y)])]),"note"!=V.task.type?((0,a.uX)(),(0,a.CE)("div",m,[v,f,(0,a.Lk)("span",L,(0,n.v_)(V.task.name),1)])):(0,a.Q3)("",!0),(0,a.Lk)("div",$,[b,g,(0,a.Lk)("span",w,(0,n.v_)(P.date),1)]),V.task.description||"note"==V.task.type?((0,a.uX)(),(0,a.CE)("div",C,[(0,a.Lk)("span",E,(0,n.v_)("note"==V.task.type?"Contents":"Description")+":",1),M,(0,a.Lk)("span",{class:"styled_line__value md md_contents",innerHTML:V.task.description?P.text:"Not Provided"},null,8,N)])):(0,a.Q3)("",!0),V.task.links&&V.task.links.length?((0,a.uX)(),(0,a.CE)("div",T,[X,x,(0,a.Lk)("span",j,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(V.task.links,(e=>((0,a.uX)(),(0,a.CE)("a",{class:"styled_line_links__link",target:"_blank",key:e.path,href:e.path},(0,n.v_)(e.text),9,D)))),128))])])):(0,a.Q3)("",!0),P.note&&"note"!=V.task.type?((0,a.uX)(),(0,a.CE)("div",Q,[I,Y,(0,a.Lk)("span",{class:"styled_line__value md md_contents",innerHTML:P.note||"None Yet"},null,8,O)])):(0,a.Q3)("",!0)]),q],512)):((0,a.uX)(),(0,a.CE)("img",A,null,512))],512),(0,a.Lk)("div",H,[(0,a.Lk)("button",{class:"close_action click_escape",onClick:s[1]||(s[1]=s=>e.$emit("close"))},"Close"),R,!e.$store.is_teacher&&e.$store.user&&V.task&&"note"!=V.task.type?((0,a.uX)(),(0,a.CE)("button",{key:0,class:"edit_action primary_styled",onClick:s[2]||(s[2]=(...e)=>P.notes_task&&P.notes_task(...e))}," Notes ")):(0,a.Q3)("",!0),e.$store.is_teacher&&e.$store.user&&V.task&&V.task.ref.split("/")[0]==e.$store.active_doc.email.replace(e.$store.ORG_DOMAIN,"")?((0,a.uX)(),(0,a.CE)("button",{key:1,class:"edit_action primary_styled",onClick:s[3]||(s[3]=(...e)=>P.edit_task&&P.edit_task(...e))}," Edit ")):(0,a.Q3)("",!0),(0,a.Lk)("button",{class:"share_action",onClick:s[4]||(s[4]=(...e)=>P.share_task&&P.share_task(...e)),disabled:!V.ready},"Share",8,S)])])}t(4603),t(7566),t(8721);var P=t(4186),K=t(6265),U=t(6471),z=t.n(U),B=t(5255),F=t.n(B);let G=new(F().Converter);var W={name:"ViewTaskView",emits:["close"],mixins:[z()],data(){return{task:null,ready:!1}},computed:{date(){let e=(0,K.kX)(this.task?.date);if(!isNaN(e.getTime()))return e=new Date(e.getTime()+60*e.getTimezoneOffset()*1e3),new Date(e).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"})},text(){return this.task.description&&G.makeHtml(this.task.description)||this.task.description},note(){if(!this.$store.user)return;const e=this.$route?.params?.ref;if(!this.task||!e)return;const s=this.$store.note_for(e);return s&&G.makeHtml(s)}},mounted(){this.$smoothReflow({el:this.$refs.contents,hideOverflow:!0,childTransitions:!0}),this.$smoothReflow({el:this.$refs.title,hideOverflow:!0}),this.get_task()},methods:{async share_task(){let e=new URL(`https://${this.$env.VUE_APP_BRAND_DOMAIN__VIEWTASK}/`+this.$route.params.ref);navigator.share?navigator.share({title:this.task.name,text:this.task.description,url:e.href}).then((()=>new P.rQ("Opened share dialog",1e3))).catch((e=>this.$status.error("Error sharing",e))):navigator.clipboard?(navigator.clipboard.writeText(e.href),new P.MY("Sharing not supported, copied link to clipboard",2e3)):new P.MY("Sharing and copying not supported, sorry",2e3)},edit_task(){this.$router.push({name:"edit",params:{ref:this.$route?.params?.ref},query:this.$route.query})},notes_task(){this.$router.push({name:"notes",params:{ref:this.$route?.params?.ref},query:this.$route.query})},async get_task(){if(!this.$route.params.ref)return new P.MY("No task specified",1500),void this.$emit("close");const e=this.$route.params.ref.split("~").join("/");return e?3!=e.split("/").length?(new P.MY("Invalid task specified",1500),void this.$emit("close")):void this.$store.task_from_ref(e).then((e=>{e?(this.task=e,this.ready=!0):(new P.MY("Couldn't find that task",2e3),this.$emit("close"))})).catch((e=>{new P.Qp("Error getting task",e,1500),this.$status.error("⚠ Error getting task",e),this.$emit("close")})):(new P.MY("No task specified",1500),void this.$emit("close"))}}},J=t(1241);const Z=(0,J.A)(W,[["render",V],["__scopeId","data-v-dff9ed10"]]);var ee=Z}}]);
//# sourceMappingURL=117.e76eb7d9.js.map