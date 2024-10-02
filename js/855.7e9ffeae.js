"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[855],{5766:function(l,e,i){i.r(e);var t='<h1 id="general-purpose--goal">General Purpose / Goal</h1> <ul> <li>Crowdsource data from students<ul> <li>lower teacher inclusion / necessary involvement</li> </ul> </li> <li>Create a generally sleek product<ul> <li>we&#39;re not trying to win any design contests, but we want people to want to use it</li> </ul> </li> <li>Help student health<ul> <li>study resources from data, better planning</li> </ul> </li> <li>Collect student wellness data<ul> <li>will allow us to show its usefulness</li> <li>what led us to start this project in the first place, advocating for student health</li> </ul> </li> </ul> <h1 id="changes">Changes</h1> <h2 id="priorities">Priorities</h2> <ul> <li><strong>Migrate to TypeScript</strong><ul> <li>migrate .vue components</li> <li><del>migrate .js main files and logging</del></li> <li><del>migrate router, stores</del></li> </ul> </li> <li><strong>Adding pre-set classes</strong><ul> <li>teachers dont have to join</li> <li>students able to add tasks to their classes / teachers can invite students to edit their classes</li> <li>sync from that huge json file</li> </ul> </li> <li><strong>Tutorial Videos</strong></li> <li><strong>Daily emails / EoD updates</strong><ul> <li>reminders the day before tests/exams</li> <li><del>better email prefs</del></li> </ul> </li> <li><strong>AI/ML/Just &quot;seems like magic&quot; features, can be hardcoded</strong><ul> <li>automatic session plans &amp; time management alerts</li> <li><del>through API</del></li> <li><del>things like automatic link names, task typing</del></li> </ul> </li> <li>Schedule Builder</li> </ul> <h2 id="working-on-now--planned-soon-sander">Working on Now / Planned Soon (Sander)</h2> <ul> <li><p>Classes</p> <ul> <li><strong>add from pre-set list</strong><ul> <li>setup from json / claim pre-set class feature (cloud?)</li> </ul> </li> <li>view students in class for teacher/current students<ul> <li>backend listener to use &amp; keep updated class documents with students array?</li> </ul> </li> <li>more unique/protected join codes, invite/accepted-only?</li> <li>display join code to class</li> <li><del>class view page</del></li> <li><del>make classes editable</del></li> <li><del>join from code</del></li> </ul> </li> <li><p>Task Creation</p> <ul> <li><del>better keyboard shortcuts (+ and t,p,e,q=quiz, etc)</del></li> <li><del>shortcuts on <code>position:fixed</code> layouts, fullscreen</del><ul> <li><del>migrate to new system that puts it outside of the sidebar element</del></li> </ul> </li> <li>class selection popup on creation hotkey</li> </ul> </li> <li><p>Studying</p> <ul> <li>save sessions and review them later</li> <li><del>system for studying/working on tasks</del></li> <li><del>track task completion based on id</del><ul> <li>track by hash for updated versions, perhaps preference for specificity</li> </ul> </li> <li><del>ability to mark tasks as done</del></li> <li><del>notes on tasks</del></li> <li><del>sort as classes/dates in study view</del></li> </ul> </li> <li><p>Admin / Contact</p> <ul> <li><strong>Add/implement analytics</strong><ul> <li><del>implement log saving and viewing</del></li> </ul> </li> <li>Send messages from w/i the app using mail system<ul> <li>user will receive a copy</li> </ul> </li> <li>District portal</li> <li>Admin portal<ul> <li><strong>view mail and send messages</strong></li> <li>add more protections to teacher mode</li> <li>ability to fix errors that might impede usability for students</li> <li>ability to view student surveys in bulk - form-type</li> <li>force reload student sessions to update / quickfix</li> <li><del>create panel based on /portal but with info in place of calendar</del></li> <li><del>view and download student logs</del></li> <li><del>view user and teacher info</del></li> <li><del>view .env details and optioning</del></li> </ul> </li> </ul> </li> <li><p>Student involvement</p> <ul> <li>way for students to access teacher features for their peers / as a proxy for the teacher</li> <li>student self &quot;classes&quot; for things specific to them to keep track of, all in one place</li> </ul> </li> <li><p>Tasks</p> <ul> <li>AI/ML/Maybe just hardcoded features<ul> <li>recurring assignments in a date range<ul> <li>based on prompt</li> <li>with custom numbering</li> <li>select / exclude by date range</li> </ul> </li> <li><del><strong>auto-suggested link names based on domain</strong></del></li> <li><del>auto-suggested task types based on title</del></li> <li>automatic / algorithm-driven study suggestions?</li> </ul> </li> <li>Links<ul> <li>allow / encourage links to other classes / through selector</li> <li>allowed outlink domains set by district?</li> </ul> </li> <li>Create studying / prep pages<ul> <li>really use the data/info that we have, let them create study schedules for themselves</li> <li><del>see upcoming assignments and mark them as done</del></li> </ul> </li> <li><del>fixes on edit page</del></li> <li><del>process only changed tasks server-side / cancel runs on double changes</del></li> <li><del>store proxy in class doc - load from there for efficiency / read &amp; write count</del></li> <li><del>disallow finish when link still in-progress</del></li> <li><del>drag tasks on calendar to change date</del></li> </ul> </li> <li><p>Surveys</p> <ul> <li>Create survey / check-in modal<ul> <li>time-based variations<ul> <li>on mondays, more in-depth, before first use</li> </ul> </li> <li><del>add graphics / illustrations (on weekly at least)</del><ul> <li><del>during the week, short non-intrusive</del></li> </ul> </li> </ul> </li> <li><del>make a way for users to see their own responses over time</del><ul> <li>include major assignments in this timeline</li> </ul> </li> <li>weekly / major surveys</li> <li><del>show upcoming tasks at end of daily surveys</del></li> <li><del>daily surveys</del></li> </ul> </li> <li><p>Onboarding</p> <ul> <li><strong>setup from pre-defined classes</strong>, add your own<ul> <li><strong>create tutorial videos</strong><ul> <li>View calendar</li> <li>Complete tasks on study page</li> <li>Link accounts</li> <li>View stats</li> </ul> </li> </ul> </li> <li><del>add keyboard shortcuts page on (/ or ?)</del></li> <li><del>large modal type for intro</del></li> <li><del>tutorial modal set up</del></li> <li><del>where to find everything</del><ul> <li><del>ui tutorial</del></li> </ul> </li> <li><del>better logout prompt</del></li> <li><del>add first class</del></li> <li><del>join modal</del></li> </ul> </li> <li><p>Emails</p> <ul> <li>setup cloud functions to send <strong>daily</strong>(?) emails</li> <li><del>exclude tasks marked as finished from weekly summary emails</del></li> <li><del>setup cloud functions to send task change/create/archive emails</del></li> <li><del>setup cloud functions to send weekly emails</del></li> <li><del>link personal account email</del></li> <li><del>email template</del></li> <li><del>setup email server</del></li> <li><del>send from firebase doc</del></li> </ul> </li> <li><p>Accounts/ Customization</p> <ul> <li>fix linking feature??</li> <li><del>Better prefs</del><ul> <li><del>add email prefs</del></li> <li><del>save theme under prefs, rather than its own key</del></li> <li><del>add the option to trust another email / oauth account with access to your account</del><ul> <li><del>good for phones and such, save to prefs of the acc, then check either request oauth is student, or request oauth is in student prefs.trusted</del></li> </ul> </li> </ul> </li> <li><del>Make art assets</del><ul> <li><del>implement animations</del><ul> <li><del>loading imgs</del></li> </ul> </li> <li><del>implement transitions</del><ul> <li><del>for modals</del></li> </ul> </li> <li><del>Create promotional materials</del><ul> <li><del>update og:img</del></li> <li><del>create public/img/promo imgs</del></li> </ul> </li> <li><del>Create contact page</del><ul> <li><del>fun lighthearted art stuff</del></li> </ul> </li> </ul> </li> <li><del>create email prefs screen</del></li> <li><del>finish personal account connection</del></li> <li><del>create prefs screen</del></li> <li><del>allow connected personal / non-school email</del><ul> <li><del>settings from portal / email links</del></li> </ul> </li> </ul> </li> <li><p><del>Mobile Interface</del></p> <ul> <li><del>pages on mobile instead of sidebars</del></li> </ul> </li> <li><p><del>Non-User-Facing</del></p> <ul> <li><del>cleanup code / write docs</del> <del>Tasks / Calendar Objects</del></li> <li><del>note type / generic info w/o color</del></li> <li><del>regular assignment / generic task type</del></li> <li><del>id tasks for easier load/share</del></li> <li><del>view task by task id</del></li> <li><del>less cluttered scheduling options (use dropdown)</del></li> <li><del>convert /task to /view/{type}/{info}</del></li> <li><del>add editing functionality</del></li> <li><del>confirm task delete</del></li> </ul> </li> <li><p><del>Modal features</del></p> <ul> <li><del>fix overflow on very small screens</del></li> <li><del>redirect modal / outlink interceptor</del></li> </ul> </li> </ul> <h2 id="specific-milestones--tasks-aarush">Specific milestones / tasks (Aarush)</h2> <ul> <li>Create backend<ul> <li>Algorithms<ul> <li>Class Spread: N/A</li> </ul> </li> <li>Send out emails to students thru firebase?</li> </ul> </li> <li>a cleaner system to integrate classes<ul> <li>Structure teacher add/drop class json update algorithm</li> </ul> </li> <li><del>Create data for static classes</del></li> </ul> ';e["default"]=t},4027:function(l,e,i){i.d(e,{A:function(){return g}});var t=i(6768),s=i(4232);const d=l=>((0,t.Qi)("data-v-521703de"),l=l(),(0,t.jt)(),l),a=["disabled"],o=d((()=>(0,t.Lk)("span",{class:"loading_bg"},null,-1))),n=[o],r=d((()=>(0,t.Lk)("div",{class:"toggle_switch_knob"},null,-1)));function u(l,e,i,d,o,u){return(0,t.uX)(),(0,t.CE)("div",{class:(0,s.C4)(["toggle_switch",{toggle_switch__on:o.is_on,transition:!i.loads}]),disabled:i.disabled,onClick:e[0]||(e[0]=(...l)=>u.toggle&&u.toggle(...l))},[i.loads?((0,t.uX)(),(0,t.CE)("div",{key:0,class:(0,s.C4)(["toggle_switch__loading",{is_loading:o.loading}])},n,2)):(0,t.Q3)("",!0),r],10,a)}var c={name:"ToggleBar",props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loads:{type:Boolean,default:!1}},emits:["update"],data(){return{is_on:this.value,loading:!1}},watch:{value(){this.is_on=this.value,this.loading=!1}},methods:{toggle(){this.disabled||(this.loads?this.loading=!0:this.is_on=!this.is_on,this.$emit("update",!this.is_on))}}},p=i(1241);const m=(0,p.A)(c,[["render",u],["__scopeId","data-v-521703de"]]);var g=m},5855:function(l,e,i){i.r(e),i.d(e,{default:function(){return L}});var t=i(6768),s=i(4232);const d=l=>((0,t.Qi)("data-v-4369201d"),l=l(),(0,t.jt)(),l),a={class:"todo_header"},o=d((()=>(0,t.Lk)("h2",{class:"header_style"},"Feature Roadmap",-1))),n=d((()=>(0,t.Lk)("br",null,null,-1))),r={class:"secondary_home_text"},u=d((()=>(0,t.Lk)("br",null,null,-1))),c={key:0,class:"toggle_line"},p=d((()=>(0,t.Lk)("span",null,"Show completed items",-1))),m=d((()=>(0,t.Lk)("hr",null,null,-1))),g={class:"todo_body md mono"},h=["innerHTML"],f={key:1,class:"todo_placeholder"},k=d((()=>(0,t.Lk)("img",{alt:"Loading...",class:"loading_icon"},null,-1))),y=[k];function w(l,e,i,d,k,w){const v=(0,t.g2)("router-link"),b=(0,t.g2)("ToggleBar");return(0,t.uX)(),(0,t.CE)("main",{class:(0,s.C4)(["todo center-1000",{show_completed:k.showCompleted}])},[(0,t.Lk)("div",a,[o,n,(0,t.Lk)("h3",r,[(0,t.eW)(" Here's a peek at our planned features. We're always open to suggestions, just "),(0,t.bF)(v,{class:"click-action",to:"/contact"},{default:(0,t.k6)((()=>[(0,t.eW)("shoot us a message")])),_:1}),(0,t.eW)("! ")]),u,k.renderedTodo?((0,t.uX)(),(0,t.CE)("div",c,[(0,t.bF)(b,{class:"click-action",value:k.showCompleted,onUpdate:e[0]||(e[0]=l=>k.showCompleted=!k.showCompleted),loads:!1},null,8,["value"]),(0,t.eW)("  "),p])):(0,t.Q3)("",!0)]),m,(0,t.Lk)("div",g,[k.renderedTodo?((0,t.uX)(),(0,t.CE)("div",{key:0,innerHTML:k.renderedTodo},null,8,h)):((0,t.uX)(),(0,t.CE)("div",f,y))])],2)}var v=i(4027),b={name:"TodoView",components:{ToggleBar:v.A},data(){return{renderedTodo:"",showCompleted:!1}},computed:{todoMarkdown(){try{return i(5766)}catch(l){return null}}},mounted(){this.renderedTodo=this.todoMarkdown?.default}},C=i(1241);const _=(0,C.A)(b,[["render",w],["__scopeId","data-v-4369201d"]]);var L=_}}]);
//# sourceMappingURL=855.7e9ffeae.js.map