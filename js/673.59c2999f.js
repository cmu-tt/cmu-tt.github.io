(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[673],{1311:function(t,e,s){"use strict";s.d(e,{l:function(){return a}});var n=s(1020);const o=[[/https:\/\/[a-zA-Z0-9]+.instructure.com\/courses\/[0-9]+\/modules*./,"Canvas Course Modules"],[/https:\/\/[a-zA-Z0-9]+.instructure.com\/courses\/[0-9]+\/assignments\/[0-9]+/,"Canvas Assignment"],[/https:\/\/[a-zA-Z0-9]+.instructure.com\/courses\/[0-9]+/,"Canvas Course"],[/https:\/\/[a-zA-Z0-9]+.instructure.com\/courses/,"Canvas Home"],[/https:\/\/[a-zA-Z0-9]+.instructure.com/,"Canvas"],[/https:\/\/classroom.google.com\/c\/[a-zA-Z0-9]+\/a\/.+/,"Google Classroom Assignment"],[/https:\/\/classroom.google.com\/c\/[a-zA-Z0-9]+\/p\/.+/,"Google Classroom Post"],[/https:\/\/classroom.google.com\/c\/[a-zA-Z0-9]+/,"Google Classroom Class"],[/https:\/\/classroom.google.com\/h/,"Google Classroom Home"],[/https:\/\/classroom.google.com\/u\/[0-9]+/,"Google Classroom Home"],[/https:\/\/drive.google.com\/file\/d\/.+/,"Google Drive File"],[/https:\/\/drive.google.com\/drawings\/d\/.+/,"Google Drawing"],[/https:\/\/docs.google.com\/document\/d\/.+/,"Google Docs File"],[/https:\/\/docs.google.com\/spreadsheets\/d\/.+/,"Google Sheet"],[/https:\/\/[a-zA-Z0-9]+.lon-capa.net.*/,"LON-CAPA Portal"],[/https:\/\/lon-capa.net.*/,"LON-CAPA Portal"],[/https:\/\/[a-zA-Z0-9]+.loncapa.net.*/,"LON-CAPA Portal"],[/https:\/\/loncapa.net.*/,"LON-CAPA Portal"]];function i(t){if(t){t=t.toLowerCase();for(let e=0;e<o.length;e++)if(t.match(o[e][0]))return o[e][1]}}const a=(0,n.Q_)({id:"magic",state:()=>({types:{note:"Note",task:"Assignment",test:"Test",project:"Project",quiz:"Quiz",exam:"Exam"}}),getters:{},actions:{text(t){return i(t)||null},type(t){const e="note"==t.type,s=((e?t.description:t.name)||"").toLowerCase();return s.includes("summative")&&!s.includes("assignment")||s.includes("formative")||s.includes("unit")&&s.includes("test")?"test":s.includes("project")?"project":s.includes("quiz")?"quiz":s.includes("exam")||s.includes("midterm")||s.includes("final")?"exam":s.length>=100||!s&&t.description&&t.description.length>=60?"note":s.length>=10&&s.length<50&&e||s.includes("assignment")?"task":void 0}}})},4147:function(t,e,s){"use strict";s.d(e,{Z:function(){return h}});var n=s(3396);function o(t,e,s,o,i,a){const r=(0,n.up)("Modal");return(0,n.wg)(),(0,n.j4)(r,{ref:"modal",title:a.page.title,content:a.page.content,html:a.page.content?null:a.page.html,is_notification:a.page.is_notification,submit_text:a.page.submit_text,progress:{current:i.page_index+1,total:s.pages.length},show_progress:!0,can_continue:a.can_continue,continue_action:a.next_page,load:a.load_data,skippable:s.skippable,onOpen:a.switch_to,onUpdate:e[0]||(e[0]=t=>i.curr_data=t),onStatus:e[1]||(e[1]=t=>i.curr_done=t),onSkip:e[2]||(e[2]=e=>t.$emit("skip"))},null,8,["title","content","html","is_notification","submit_text","progress","can_continue","continue_action","load","skippable","onOpen"])}var i=s(4940),a=s(2745),r=s(9403);function c(){return"You haven't finished the task yet, and might lose progress. Are you sure you want to close the tab?"}var d={name:"ModalFromPages",emits:["finish","skip"],components:{Modal:i.Z},props:{pages:{type:Array,required:!0},skippable:{type:Boolean,default:!1,required:!1}},data(){return{page_index:0,responses:[],curr_data:null,curr_done:!1,page_start:Date.now(),shortcuts:[{key:"ArrowLeft",description:"Go to the previous modal page"},{key:"ArrowRight",description:"Go to the next modal page"}]}},computed:{load_data(){return this.set_done(),this.responses[this.page_index]?.data||{}},page(){return 0==this.pages.length?{title:"No pages provided",content:null,html:null,is_notification:!0,submit_text:"Oops!"}:this.pages[this.page_index]},can_continue(){return!this.page.content||this.page.is_notification||this.curr_done}},mounted(){window.addEventListener("keydown",this.arrow),(0,r.X)().register_all(this.shortcuts,"Modal")},beforeUnmount(){window.removeEventListener("keydown",this.arrow),(0,r.X)().remove_tag("Modal")},methods:{set_done(){this.curr_done=this.responses[this.page_index]?.done||!1},arrow(t){"ArrowLeft"==t.key?this.switch_to(this.page_index-1):"ArrowRight"==t.key&&this.switch_to(this.page_index+1)},switch_to(t){t<=this.page_index||Object.prototype.hasOwnProperty.call(this.responses,Math.max(t-1,0))?this.page_index=t:a.i2.log(`⏵ ModalFromPages: page index ${t} invalid`)},next_page(){this.responses[this.page_index]={data:this.curr_data,done:this.curr_done||!this.page.content||this.page.is_notification,time:{start:this.page_start,duration:Date.now()-this.page_start}},this.can_continue&&this.page_index<this.pages.length-1?(0==this.page_index&&(window.onbeforeunload=c),this.page_index++):this.can_continue&&this.$emit("finish",this.responses)}},watch:{page_index(){this.page_start=Date.now(),this.curr_data=this.load_data,this.set_done()}}},l=s(89);const u=(0,l.Z)(d,[["render",o]]);var h=u},9798:function(t,e,s){"use strict";s.d(e,{Z:function(){return k}});var n=s(3396),o=s(7139);const i=["title"],a=(0,n._)("div",{class:"task_card_icon_container"},[(0,n._)("div",{class:"task_card_icon_container__img"})],-1),r=[a],c={class:"task_card_details"},d={class:"task_card_details__title"},l={class:"task_card_details__extended"},u={class:"task_card_details__extended__date"},h={class:"task_card_details__extended__type"};function p(t,e,s,a,p,g){return(0,n.wg)(),(0,n.iD)("a",{class:"task_card",style:(0,o.j5)({"--color-calendar-task":s.task.color})},[(0,n._)("div",{class:"task_card_icon",title:s.task.class_name},r,8,i),(0,n._)("div",c,[(0,n._)("div",d,(0,o.zw)(s.task.name),1),(0,n._)("div",l,[(0,n._)("span",u,(0,o.zw)(s.task.date.toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"})),1),(0,n.Uk)("  |  "),(0,n._)("span",h,(0,o.zw)(g.type_full),1)])])],4)}var g=s(1311),A={name:"ExamCard",props:{task:{type:Object,required:!0}},computed:{type_full(){return(0,g.l)().types[this.task.type]}}},m=s(89);const y=(0,m.Z)(A,[["render",p]]);var k=y},8673:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return st}});var n=s(3396);function o(t,e,s,o,i,a){const r=(0,n.up)("ModalFromPages");return(0,n.wg)(),(0,n.j4)(r,{pages:t.pages,onFinish:a.saveResponses,ref:"survey_modal"},null,8,["pages","onFinish"])}var i=s(4147),a=s(7139);const r=t=>((0,n.dD)("data-v-1d2a7313"),t=t(),(0,n.Cn)(),t),c={class:"survey_sentiment survey_part"},d={class:"sentiments_container",ref:"sentiments_container"},l=["onClick"],u={class:"sentiment_option__img"},h={class:"overlay_contents_text sentiments_text"},p={key:0},g=r((()=>(0,n._)("strong",null,"Sorry to hear that!",-1))),A={key:1},m=r((()=>(0,n._)("strong",null,"Okay!",-1))),y={key:2},k=r((()=>(0,n._)("strong",null,"Great!",-1)));function x(t,e,o,i,r,x){const v=(0,n.Q2)("lazy");return(0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("div",d,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.sentiments,(t=>((0,n.wg)(),(0,n.iD)("div",{class:(0,a.C_)(["sentiment_option",{active:r.sentiment==t}]),key:t,onClick:e=>r.sentiment=t},[(0,n.wy)((0,n._)("img",u,null,512),[[v,s(8023)("./sentiment-"+t+".png")]])],10,l)))),128))],512),(0,n._)("div",h,["negative"==r.sentiment?((0,n.wg)(),(0,n.iD)("p",p,[g,(0,n.Uk)(" We hope you feel better soon. ")])):(0,n.kq)("",!0),"neutral"==r.sentiment?((0,n.wg)(),(0,n.iD)("p",A,[m,(0,n.Uk)(" We hope you have a good day.")])):(0,n.kq)("",!0),"positive"==r.sentiment?((0,n.wg)(),(0,n.iD)("p",y,[k,(0,n.Uk)(" Keep up the energy!")])):(0,n.kq)("",!0)])])}var v=s(9403),w={emits:["update","status"],props:{load:{type:Object,default:()=>({})}},data(){return{sentiment:this.load?.sentiment||"",sentiments:["negative","neutral","positive"]}},computed:{can_continue(){return""!=this.sentiment},getData(){return{sentiment:this.sentiment}},shortcuts(){return this.sentiments.map((t=>({key:String(this.sentiments.indexOf(t)+1),description:`Select ${t} sentiment`})))}},mounted(){window.addEventListener("keydown",this.check_key),(0,v.X)().register_all(this.shortcuts,"Survey Mood")},beforeUnmount(){window.removeEventListener("keydown",this.check_key),(0,v.X)().remove_tag("Survey Mood")},methods:{check_key(t){const e=Number(t.key);e&&e<=this.sentiments.length&&(t.preventDefault(),this.sentiment=this.sentiments[e-1],this.$refs.sentiments_container.children[e-1].focus(),t.stopPropagation())}},watch:{getData(){this.$emit("update",this.getData)},can_continue(){this.$emit("status",this.can_continue)}}},f=s(89);const E=(0,f.Z)(w,[["render",x],["__scopeId","data-v-1d2a7313"]]);var C=E;const U=t=>((0,n.dD)("data-v-6ff3e915"),t=t(),(0,n.Cn)(),t),b={class:"survey_outof5 survey_part"},B={class:"sentiments_container",ref:"sentiments_container"},I=["onClick"],F=U((()=>(0,n._)("div",{class:"overlay_contents_text sentiments_text"},"Where 1 is the least and 5 is the most",-1)));function P(t,e,s,o,i,r){return(0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("div",B,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.sentiments,(t=>((0,n.wg)(),(0,n.iD)("div",{class:(0,a.C_)(["sentiment_option",{active:i.sentiment==t}]),key:t,onClick:e=>i.sentiment=t},(0,a.zw)(t),11,I)))),128))],512),F])}var Q={emits:["update","status"],props:{load:{type:Object,default:()=>({})}},data(){return{sentiment:this.load?.sentiment?.05*this.load.sentiment:0,sentiments:[1,2,3,4,5]}},computed:{can_continue(){return 0!=this.sentiment},getData(){return{sentiment:100*this.sentiment/5}},shortcuts(){return this.sentiments.map((t=>({key:String(t),description:`Set sentiment to ${t}`})))}},mounted(){window.addEventListener("keydown",this.check_key),(0,v.X)().register_all(this.shortcuts,"Survey Stress")},beforeUnmount(){window.removeEventListener("keydown",this.check_key),(0,v.X)().remove_tag("Survey Stress")},methods:{check_key(t){const e=Number(t.key);this.sentiments.includes(e)&&(t.preventDefault(),this.sentiment=e,this.$refs.sentiments_container.children[e-1].focus(),t.stopPropagation())}},watch:{getData(){this.$emit("update",this.getData)},can_continue(){this.$emit("status",this.can_continue)}}};const R=(0,f.Z)(Q,[["render",P],["__scopeId","data-v-6ff3e915"]]);var S=R,J=s(9242);const O={class:"survey_long survey_part"};function D(t,e,s,o,i,a){return(0,n.wg)(),(0,n.iD)("div",O,[(0,n.wy)((0,n._)("textarea",{ref:"textarea",onKeydown:e[0]||(e[0]=(...t)=>a.check_key&&a.check_key(...t)),class:"survey_long__textarea styled_input styled_textarea styled_obj",placeholder:"Type your response here...","onUpdate:modelValue":e[1]||(e[1]=t=>i.response=t)},null,544),[[J.nr,i.response]])])}var Y={emits:["update","status"],props:{load:{type:Object,default:()=>({})}},data(){return{response:this.load?.input||""}},mounted(){this.$refs.textarea.focus()},methods:{check_key(t){if("Enter"==t.key&&t.shiftKey){t.preventDefault();const e=this.$refs.textarea.selectionStart,s=this.$refs.textarea.selectionEnd;this.response=this.response.substring(0,e)+"\n"+this.response.substring(s,this.response.length),t.stopPropagation()}else"ArrowRight"!=t.key&&"ArrowLeft"!=t.key||t.stopPropagation()}},computed:{can_continue(){return!0},getData(){return{input:this.response}}},watch:{getData(){this.$emit("update",this.getData)},can_continue(){this.$emit("status",this.can_continue)}}};const T=(0,f.Z)(Y,[["render",D],["__scopeId","data-v-4957edfe"]]);var G=T;const V=t=>((0,n.dD)("data-v-869ba942"),t=t(),(0,n.Cn)(),t),K={class:"survey_upcoming survey_part"},N={key:0,class:"tasks_container__empty"},Z=V((()=>(0,n._)("div",{class:"tasks_container__empty__text overlay_contents_text"},"No Upcoming Tasks!",-1))),z=[Z],L={key:1,class:"tasks_container"};function W(t,e,s,o,i,a){const r=(0,n.up)("ExamCard");return(0,n.wg)(),(0,n.iD)("div",K,[a.tasks&&a.tasks.length?((0,n.wg)(),(0,n.iD)("div",L,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.tasks,(t=>((0,n.wg)(),(0,n.j4)(r,{class:"tasks_container_task",task:t,key:t.name,href:`/view/${a.store.path_to_ref(t.ref)}`,target:"_blank",onClick:e[0]||(e[0]=t=>t.preventDefault())},null,8,["task","href"])))),128))])):((0,n.wg)(),(0,n.iD)("div",N,z))])}var M=s(9798),X=s(8980),_={name:"UpcomingTasks",emits:["update"],components:{ExamCard:M.Z},computed:{store(){return(0,X.h)()},tasks(){return this.store.upcoming_todo.slice(0,4)},getData(){return{tasks:this.store.upcoming_todo,num:this.store.upcoming_todo?.length||0}}},mounted(){this.$emit("update",this.getData)},watch:{getData(){this.$emit("update",this.getData)}}};const j=(0,f.Z)(_,[["render",W],["__scopeId","data-v-869ba942"]]);var q=j,H=s(4870),$=s(1708),tt={name:"DailySurvey",emits:["close"],components:{ModalFromPages:i.Z,SmileSentiment:C,ScaleSentiment:S,LongResponse:G,UpcomingPage:q},data:()=>({pages:[{title:"Daily Survey",html:"<p>Thank you for taking the time to complete these questions. Your input helps us make this tool more widely avaliable to students and staff!</p>\n                 <br />\n                 <p>For each question, please select the answer that best describes your situation.</p>",submit_text:"Okay"},{title:"How are you feeling today?",content:(0,H.XI)(C),submit_text:"Next"},{title:"How stressed are you?",content:(0,H.XI)(S),submit_text:"Next"},{title:"Anything else?",content:(0,H.XI)(G),submit_text:"Done",is_notification:!0},{title:"Preview what's next",content:(0,H.XI)(q),is_notification:!0},{title:"Thank you!",html:"<p>Thank you for your input, you shouldn't have to answer any other questions until tomorrow!</p>",submit_text:"Done"}]}),computed:{store(){return(0,X.h)()}},methods:{saveResponses(t){this.store.save_daily_survey(t),window.onbeforeunload=null,this.$emit("close")}},mounted(){this.store.done_daily_survey&&(window.onbeforeunload=null,this.$emit("close"),new $.OO("You already completed the daily survey today!",2e3))},watch:{store:{handler(){this.store.done_daily_survey&&(window.onbeforeunload=null,this.$emit("close"),this.done_tutorial&&new $.bF("Thanks for completing the survey!",2e3))},deep:!0}}};const et=(0,f.Z)(tt,[["render",o]]);var st=et},8023:function(t,e,s){var n={"./sentiment-negative.png":2544,"./sentiment-neutral.png":5953,"./sentiment-positive.png":969};function o(t){var e=i(t);return s(e)}function i(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=i,t.exports=o,o.id=8023},2544:function(t){"use strict";t.exports="data:image/png;base64,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"},5953:function(t){"use strict";t.exports="data:image/png;base64,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"},969:function(t){"use strict";t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=673.59c2999f.js.map