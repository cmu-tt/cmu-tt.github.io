"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[165],{1057:function(l,e,i){i.r(e);var t='<h1 id="general-purpose--goal">General Purpose / Goal</h1> <ul> <li>Crowdsource data from students<ul> <li>lower teacher inclusion / necessary involvement</li> </ul> </li> <li>Create a generally sleek product<ul> <li>we&#39;re not trying to win any design contests, but we want people to want to use it</li> </ul> </li> <li>Help student health<ul> <li>study resources from data, better planning</li> </ul> </li> <li>Collect student wellness data<ul> <li>will allow us to show its usefulness</li> <li>what led us to start MVTT in the first place, advocating for student health</li> </ul> </li> </ul> <h1 id="changes">Changes</h1> <h2 id="working-on-now--planned-soon-sander">Working on Now / Planned Soon (Sander)</h2> <ul> <li>Studying<ul> <li>system for studying/working on tasks</li> <li><del>track task completion based on id</del><ul> <li>track by hash for updated versions, perhaps preference for specificity</li> </ul> </li> <li><del>ability to mark tasks as done</del></li> <li><del>notes on tasks</del></li> </ul> </li> <li>Admin / Contact<ul> <li>Add/implement analytics</li> <li>Send messages from w/i the app using mail system<ul> <li>user will receive a copy</li> </ul> </li> <li>District portal</li> <li>Admin portal<ul> <li>create portal based on /portal but with panel in place of calendar</li> <li>ability to fix errors that might impede usability for students</li> <li>ability to view student surveys in bulk - form-type</li> <li>force reload student sessions to update / quickfix</li> <li>add more protections to teacher mode</li> </ul> </li> </ul> </li> <li>Student involvement<ul> <li>way for students to access teacher features for their peers / as a proxy for the teacher</li> <li>student self &quot;classes&quot; for things specific to them to keep track of, all in one place</li> </ul> </li> <li>Tasks<ul> <li><strong>auto-suggested link names based on domain</strong></li> <li>auto-suggested task types based on title</li> <li>allow / encourage links to other classes / through selector</li> <li>allowed outlink domains set by district?</li> <li><del>fixes on edit page</del></li> <li><del><strong>process only changed tasks server-side / cancel runs on double changes</strong></del></li> <li><del><strong>store proxy in class doc - load from there for efficiency / read &amp; write count</strong></del></li> <li><del>disallow finish when link still in-progress</del></li> <li><del>drag tasks on calendar to change date</del></li> </ul> </li> <li>Surveys<ul> <li><del>make a way for users to see their own responses over time</del><ul> <li>include major assignments in this timeline</li> </ul> </li> <li>weekly / major surveys</li> <li><del>show upcoming tasks at end of daily surveys</del></li> <li><del>daily surveys</del></li> </ul> </li> <li>Classes<ul> <li><strong>add from pre-set list</strong><ul> <li>setup from json / claim pre-set class feature (cloud?)</li> </ul> </li> <li>display join code to class</li> <li><del>class view page</del></li> <li><del>make classes editable</del></li> <li><del>join from code</del></li> </ul> </li> <li>Onboarding<ul> <li>large modal type for intro - better video support<ul> <li>fill screen on small devices</li> </ul> </li> <li><del>ui tutorial</del></li> <li><del>better logout prompt</del></li> <li><del>add first class</del></li> <li><del>join modal</del></li> </ul> </li> <li>Emails<ul> <li>exclude tasks marked as finished from weekly summary emails</li> <li>setup cloud functions to send <strong>daily</strong>(?) emails</li> <li><del>setup cloud functions to send task change/create/archive emails</del></li> <li><del>setup cloud functions to send weekly emails</del></li> <li><del>link personal account email</del></li> <li><del>email template</del></li> <li><del>setup email server</del></li> <li><del>send from firebase doc</del></li> </ul> </li> <li>Accounts<ul> <li>fix linking feature??</li> <li><del>create email prefs screen</del></li> <li><del>finish personal account connection</del></li> <li><del>create prefs screen</del></li> <li><del>allow connected personal / non-school email</del><ul> <li><del>settings from portal / email links</del></li> </ul> </li> </ul> </li> <li><del>Mobile Interface</del><ul> <li><del>pages on mobile instead of sidebars</del></li> </ul> </li> <li><del>Non-User-Facing</del><ul> <li><del>cleanup code / write docs</del> <del>Tasks / Calendar Objects</del></li> <li><del>note type / generic info w/o color</del></li> <li><del>regular assignment / generic task type</del></li> <li><del>id tasks for easier load/share</del></li> <li><del>view task by task id</del></li> <li><del>less cluttered scheduling options (use dropdown)</del></li> <li><del>convert /task to /view/{type}/{info}</del></li> <li><del>add editing functionality</del></li> <li><del>confirm task delete</del></li> </ul> </li> <li><del>Modal features</del><ul> <li><del>fix overflow on very small screens</del></li> <li><del>redirect modal / outlink interceptor</del></li> </ul> </li> </ul> <h2 id="specific-milestones--tasks">Specific milestones / tasks</h2> <h3 id="sander">Sander</h3> <ul> <li>Create onboarding<ul> <li>setup from pre-defined classes, add your own</li> <li><del>where to find everything</del></li> <li><del>join form -&gt; add classes</del></li> </ul> </li> <li>Create studying / prep pages<ul> <li>really use the data/info that we have, let them create study schedules for themselves</li> <li><del>see upcoming assignments and mark them as done</del></li> <li>automatic / algorithm-driven suggestions?</li> </ul> </li> <li>Create survey / check-in modal<ul> <li>add graphics / illustrations (on weekly at least)</li> <li>time-based variations<ul> <li>on mondays, more in-depth, before first use</li> <li><del>during the week, short non-intrusive</del></li> </ul> </li> </ul> </li> <li><del>Better prefs</del><ul> <li><del>add email prefs</del></li> <li><del>save theme under prefs, rather than its own key</del></li> <li><del>add the option to trust another email / oauth account with access to your account</del><ul> <li><del>good for phones and such, save to prefs of the acc, then check either request oauth is student, or request oauth is in student prefs.trusted</del></li> </ul> </li> </ul> </li> <li><del>Make art assets</del><ul> <li><del>implement animations</del><ul> <li><del>loading imgs</del></li> </ul> </li> <li><del>implement transitions</del><ul> <li><del>for modals</del></li> </ul> </li> <li><del>Create promotional materials</del><ul> <li><del>update og:img</del></li> <li><del>create public/img/promo imgs</del></li> </ul> </li> <li><del>Create contact page</del><ul> <li><del>fun lighthearted art stuff</del></li> </ul> </li> </ul> </li> </ul> <h3 id="aarush">Aarush</h3> <ul> <li>Create backend<ul> <li>Algorithms<ul> <li>Class Spread: N/A</li> </ul> </li> <li>Send out emails to students thru firebase?</li> </ul> </li> <li>a cleaner system to integrate classes<ul> <li>Structure teacher add/drop class json update algorithm</li> </ul> </li> <li><del>Create data for static classes</del></li> </ul> ';e["default"]=t},5165:function(l,e,i){i.r(e),i.d(e,{default:function(){return v}});var t=i(3396);const s=l=>((0,t.dD)("data-v-69a9169c"),l=l(),(0,t.Cn)(),l),a={class:"todo center-1000"},d={class:"todo_header"},o=s((()=>(0,t._)("h2",{class:"header_style"},"Feature Roadmap",-1))),n=s((()=>(0,t._)("br",null,null,-1))),r={class:"secondary_home_text"},u=s((()=>(0,t._)("hr",null,null,-1))),c={class:"todo_body md mono"},m=["innerHTML"],p={key:1,class:"todo_placeholder"},h=s((()=>(0,t._)("img",{alt:"Loading...",class:"loading_icon"},null,-1))),f=[h];function g(l,e,i,s,h,g){const k=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("main",a,[(0,t._)("div",d,[o,n,(0,t._)("h3",r,[(0,t.Uk)(" Here's a peek at our planned features. We're always open to suggestions, just "),(0,t.Wm)(k,{class:"click-action",to:"/contact"},{default:(0,t.w5)((()=>[(0,t.Uk)("shoot us a message")])),_:1}),(0,t.Uk)("! ")])]),u,(0,t._)("div",c,[h.renderedTodo?((0,t.wg)(),(0,t.iD)("div",{key:0,innerHTML:h.renderedTodo},null,8,m)):((0,t.wg)(),(0,t.iD)("div",p,f))])])}var k={data(){return{renderedTodo:""}},computed:{todoMarkdown(){try{return i(1057)}catch(l){return null}}},mounted(){this.renderedTodo=this.todoMarkdown?.default}},y=i(89);const w=(0,y.Z)(k,[["render",g],["__scopeId","data-v-69a9169c"]]);var v=w}}]);
//# sourceMappingURL=165.36d0ae17.js.map