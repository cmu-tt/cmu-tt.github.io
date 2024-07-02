"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[25],{2025:function(e,t,s){s.r(t),s.d(t,{default:function(){return S}});var a=s(6768),l=s(5130),i=s(4232);const n=e=>((0,a.Qi)("data-v-046cfcc9"),e=e(),(0,a.jt)(),e),o={class:"logdebug"},c={class:"docs_wrapper"},d={key:0,class:"docs_nav admin_in"},h=["disabled"],r=["title"],u=["disabled"],g={class:"docs_nav__loaded"},_={key:0},p={key:1},m=["disabled"],v={key:1,class:"docs"},k=["onClick"],b=["title"],y={key:0,class:"doc_title"},f=["href","onClick"],C={class:"doc_title__email_user"},$={class:"doc_title__email_domain"},w={class:"doc_title__ref"},L={class:"doc_title__time"},x={key:1,class:"doc_details"},E={class:"doc_details_table"},X=n((()=>(0,a.Lk)("th",null,"Email:",-1))),D=n((()=>(0,a.Lk)("th",null,"User:",-1))),M=n((()=>(0,a.Lk)("th",null,"Date:",-1))),q=n((()=>(0,a.Lk)("th",null,"Ref:",-1))),N=["onClick"],z={key:2,class:"docs_placeholder docs_placeholder__empty"},G={key:3,class:"docs_placeholder docs_placeholder__loading"},P=n((()=>(0,a.Lk)("i",null,"Loading logs",-1))),Q=[P];function A(e,t,s,n,P,A){return(0,a.uX)(),(0,a.CE)("div",o,[(0,a.Lk)("div",c,[P.pages.length?((0,a.uX)(),(0,a.CE)("nav",d,[(0,a.Lk)("button",{class:"docs_nav_button prev",onClick:t[0]||(t[0]=(...e)=>A.prev&&A.prev(...e)),disabled:!(A.total.length||P.pages.length)||!P.page_index,title:"Previous Page"},null,8,h),(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>P.search=e),class:"docs_nav_search",placeholder:"Search Log Reference, User ID, or Email",enterkeyhint:"search",onKeydown:t[2]||(t[2]=(0,l.jR)(((...e)=>A.submit&&A.submit(...e)),["enter"]))},null,544),[[l.Jo,P.search]]),A.manual&&P.loaded&&P.loaded==P.search?((0,a.uX)(),(0,a.CE)("button",{key:0,class:(0,i.C4)(["docs_nav_button clear",{click_escape:null==P.active}]),onClick:t[3]||(t[3]=(...e)=>A.clear&&A.clear(...e)),title:`Clear query '${this.loaded}'`},null,10,r)):P.search?((0,a.uX)(),(0,a.CE)("button",{key:1,class:(0,i.C4)(["docs_nav_button search",{click_ctrlenter:null==P.active&&!(P.search.length<10&&!P.search.includes("@")||P.search.length>100)}]),disabled:P.search.length<10&&!P.search.includes("@")||P.search.length>100,onClick:t[4]||(t[4]=(...e)=>A.submit&&A.submit(...e)),title:"Submit query (10+ characters or user email)"},null,10,u)):(0,a.Q3)("",!0),(0,a.Lk)("div",g,[A.manual?((0,a.uX)(),(0,a.CE)("span",_,(0,i.v_)(P.manual_page.length)+" Result"+(0,i.v_)(1==P.manual_page.length?"":"s"),1)):((0,a.uX)(),(0,a.CE)("span",p,(0,i.v_)(A.total.length+(A.more&&P.pages.length&&P.pages[P.pages.length-1].length&&P.pages[P.pages.length-1].length==P.page_size?"+":""))+" Result"+(0,i.v_)(1==A.total.length?"":"s"),1))]),A.manual&&P.search?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("button",{key:2,class:"docs_nav_button next",onClick:t[5]||(t[5]=(...e)=>A.next&&A.next(...e)),disabled:!(A.total.length||P.pages.length)||!A.more,title:"Next Page"},null,8,m))])):(0,a.Q3)("",!0),P.pages.length&&A.total.length?((0,a.uX)(),(0,a.CE)("div",v,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(A.page,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{class:(0,i.C4)(["doc admin_in",{active:P.active==e.id}]),key:e.id,style:(0,i.Tr)({animationDelay:.03*(t+2)+"s"})},[(0,a.Lk)("button",{class:(0,i.C4)(["doc_details__toggle",{click_escape:P.active==e.id}]),onClick:t=>P.active=P.active==e.id?null:e.id,title:"Close details pane"},[(0,a.Lk)("div",{class:"doc_details__toggle__icon themed_icon",title:`${P.active==e.id?"Collapse":"Expand"} log ${e.id}`},null,8,b)],10,k),P.active!=e.id?((0,a.uX)(),(0,a.CE)("div",y,[(0,a.Lk)("a",{class:"doc_title__email",href:`./logs?search=${e.data().email}`,onClick:t=>{P.search&&P.loaded==P.search||(P.search=e.data().email,A.submit()),t.preventDefault()}},[(0,a.Lk)("span",C,(0,i.v_)(e.data().email.split("@")[0]),1),(0,a.Lk)("span",$,"@"+(0,i.v_)(e.data().email.split("@")[1]),1)],8,f),(0,a.Lk)("span",w,(0,i.v_)(e.id),1),(0,a.Lk)("span",L,(0,i.v_)(e.data().date.toDate().getTime()),1)])):((0,a.uX)(),(0,a.CE)("div",x,[(0,a.Lk)("table",E,[(0,a.Lk)("tr",null,[X,(0,a.Lk)("td",null,(0,i.v_)(e.data().email),1)]),(0,a.Lk)("tr",null,[D,(0,a.Lk)("td",null,(0,i.v_)(e.data().user),1)]),(0,a.Lk)("tr",null,[M,(0,a.Lk)("td",null,(0,i.v_)(e.data().date.toDate()),1)]),(0,a.Lk)("tr",null,[q,(0,a.Lk)("td",null,(0,i.v_)(e.id),1)])]),(0,a.Lk)("button",{class:"doc_save click_ctrlenter",onClick:t=>A.downloadLogData(e.data().stream.json,e.data().date.toDate(),`cloud-${e.data().email}-${e.data().user}`)}," Download ",8,N)]))],6)))),128))])):!A.total.length&&P.pages.length?((0,a.uX)(),(0,a.CE)("div",z," No logs to display ")):((0,a.uX)(),(0,a.CE)("div",G,Q))])])}s(4114);var F=s(9675),I=s(5537),J=s(6265),R=s(4186),U={data(){return{active:null,page_index:0,page_size:10,pages:[],search:"",loaded:"",manual_page:[]}},computed:{page(){return this.manual?this.manual_page:this.pages[this.page_index]},total(){return this.pages.flat(1)},more(){return!this.page||this.page.length===this.page_size&&(this.page_index==this.pages.length-1||this.pages[this.page_index+1]?.length)},shortcuts(){return[{key:"Enter",description:"Submit search"},{key:"Ctrl + Enter",description:"Download active log",top:!0},{key:"Escape",description:"Collapse active log, clear search",top:!0}]},manual(){return this.loaded&&this.manual_page.length}},async mounted(){this.$shortcuts.register_all(this.shortcuts,"Admin - Logs & Debugging"),this.$route.query.search&&(this.search=this.$route.query.search,this.submit()),await this.init()},beforeUnmount(){this.$shortcuts.remove_tag("Admin - Logs & Debugging")},methods:{async init(){const e=(0,F.P)((0,F.rJ)(I.db,"logs"),(0,F.My)("date_inversed"),(0,F.AB)(this.page_size)),t=await(0,F.GG)(e);this.pages=[[...t.docs]],this.$status.log(`📜 Loaded first ${this.page_size} documents`)},downloadLogData:J.Fi,prev(){this.page_index>0&&this.page_index--},async next(){if(this.page_index<this.pages.length-1&&this.pages[this.page_index+1].length)this.page_index++;else if(this.page.length&&this.page.length===this.page_size){const e=(0,F.P)((0,F.rJ)(I.db,"logs"),(0,F.My)("date_inversed"),(0,F.HM)(this.page[this.page.length-1]),(0,F.AB)(this.page_size)),t=await(0,F.GG)(e);this.pages[this.page_index+1]=[...t.docs],this.$status.log(`📜 Loaded next ${t.docs.length} of ${this.page_size} documents`),this.next()}else this.$status.log(`📜 No more documents to load (${this.total.length} loaded)`)},clear(){this.search="",this.loaded="",this.manual_page=[],this.$router.push({query:{...this.$route.query,search:void 0}})},async submit(){if(this.search.includes("@")){const e=await(0,F.GG)((0,F.P)((0,F.rJ)(I.db,"logs"),(0,F._M)("email","==",this.search),(0,F.My)("date_inversed")));e.docs.length?(this.manual_page=[...e.docs],new R.rQ(`Found ${e.docs.length} log${1==e.docs.length?"":"s"} with email ${this.search}`,3500)):(this.$status.warn(`🔍 No logs found with email <${this.search}>`),new R.MY("No logs found with that email address",3500),this.clear())}else if(this.search.length>=10){const e=await(0,F.x7)((0,F.H9)(I.db,"logs",this.search));if(e.exists())this.manual_page=[e],new R.rQ(`Found log with reference ${this.search}`,3500);else{this.$status.warn(`🔍 No logs found with reference <${this.search}>, searching for matching user`),new R.MY("No logs found with that reference, checking for matching users",3500);const e=await(0,F.GG)((0,F.P)((0,F.rJ)(I.db,"logs"),(0,F._M)("user","==",this.search),(0,F.My)("date_inversed")));e.docs.length?(this.manual_page=[...e.docs],new R.rQ(`Found ${e.docs.length} log${1==e.docs.length?"":"s"} with user ${this.search}`,3500)):(this.$status.warn(`🔍 No logs found with user <${this.search}>`),new R.MY("No logs found with that user id or reference",3500),this.clear())}}else this.$status.warn("🔍 Invalid search query for logs"),new R.MY("Invalid search query for logs, must be 10+ characters or email",3500);this.loaded=this.search,this.$router.push({query:{...this.$route.query,search:this.search}})}}},Y=s(1241);const j=(0,Y.A)(U,[["render",A],["__scopeId","data-v-046cfcc9"]]);var S=j}}]);
//# sourceMappingURL=25.43bb6633.js.map