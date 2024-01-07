"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[207],{1207:function(t,e,a){a.r(e),a.d(e,{default:function(){return D}});a(7658);var s=a(3396),i=a(7139);const r=t=>((0,s.dD)("data-v-74a8fc86"),t=t(),(0,s.Cn)(),t),o={class:"entercode"},n=r((()=>(0,s._)("header",{class:"modal_header"},[(0,s._)("h2",{class:"header_style modal_header_title"},"View Statistics")],-1))),l={class:"overlay_contents",ref:"contents"},c=r((()=>(0,s._)("div",{class:"overlay_contents_text"}," The daily surveys you have completed are displayed below. ",-1))),d=r((()=>(0,s._)("br",null,null,-1))),u={class:"stats_view_controls_wrapper"},p={class:"stats_view_controls"},h=["onClick"],_=r((()=>(0,s._)("span",{class:"flex_spacer"},null,-1))),m=r((()=>(0,s._)("br",null,null,-1))),v={class:"overlay_contents_text"},y={class:"bottom_actions"},f=r((()=>(0,s._)("div",{class:"flex_spacer"},null,-1)));function g(t,e,a,r,g,b){const w=(0,s.up)("apexchart"),x=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("main",o,[n,(0,s._)("div",l,[c,d,(0,s._)("nav",u,[(0,s._)("div",p,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(g.filters,(t=>((0,s.wg)(),(0,s.iD)("button",{onClick:e=>{g.active.includes(t.filter)&&g.active.length>1?g.active.splice(g.active.indexOf(t.filter),1):g.active.push(t.filter)},class:(0,i.C_)(["stats_view_control__option",{active:g.active.includes(t.filter)&&g.is_ready}]),key:t.filter},(0,i.zw)(t.name),11,h)))),128))]),_,(0,s._)("button",{class:(0,i.C_)(["stats_view_control__toggle",{disabled:!g.is_ready}]),onClick:e[0]||(e[0]=t=>g.toolbar=!g.toolbar)},(0,i.zw)(g.toolbar?"Less":"More"),3)]),(0,s._)("div",{class:(0,i.C_)(["stats_view_container alt_bg",{loading_bg:!g.is_ready}])},[g.surveys.length?((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,i.C_)(["stats_view_wrapper",{toolbar:g.toolbar}])},[(0,s.Wm)(w,{class:"stats_view",type:"line",series:b.graphs,width:"100%",height:"100%",options:b.options},null,8,["series","options"])],2)):(0,s.kq)("",!0)],2),m,(0,s._)("div",v,[(0,s.Uk)(" We appreciate your contributions towards our research. If you have any questions, please "),(0,s.Wm)(x,{to:"/contact"},{default:(0,s.w5)((()=>[(0,s.Uk)("contact us")])),_:1}),(0,s.Uk)("! ")])],512),(0,s._)("div",y,[(0,s._)("button",{class:"close_action click_escape",onClick:e[1]||(e[1]=e=>t.$router.push({name:"settings",query:t.$route.query}))}," Back "),f,(0,s._)("button",{class:"continue_action click_ctrlenter",onClick:e[2]||(e[2]=e=>t.$emit("close"))},"Close")])])}var b=a(8980),w=a(1708),x=a(2745),k={name:"StatsModal",emits:["close"],data(){return{is_ready:!1,can_update:!0,toolbar:!1,min_delay:15e3,surveys:[],active:["mood","stress"],filters:[{name:"Mood",filter:"mood",data:{index:1,range:{from:1,to:3},scale(t){return 2.5*({positive:3,neutral:2,negative:1}[t.sentiment]-1)},label(t){return t.sentiment.charAt(0).toUpperCase()+t.sentiment.slice(1)}}},{name:"Stress",filter:"stress",data:{index:2,range:{from:1,to:5},scale(t){return(5*t.sentiment/100-1)*(5/4)},label(t){return 5*t.sentiment/100+"/5"}}},{name:"Work",filter:"upcoming",data:{index:4,range:{from:0,to:6},scale(t){return Math.min(t.num||t.tasks?.length||0,10)/2},label(t){return(t.num||t.tasks?.length||0)+" tasks"}}},{name:"Notes",filter:"additional",data:{index:3,range:{from:0,to:0},scale(t){return t.input?-.8:-1e3},label(t){return t.input?t.input.length>20?`"${t.input.slice(0,18)}...`:`"${t.input}"`:"None"}}}]}},computed:{store(){return(0,b.h)()},completed(){return this.store?.active_doc?.done_surveys||[]},graphs(){let t=this.filters.filter((t=>this.active.includes(t.filter))).map((t=>({name:t.name,data:this.surveys.map((e=>t.data.scale(e.data.responses[t.data.index].data))),labels:this.surveys.map((e=>t.data.label(e.data.responses[t.data.index].data)))})));return t},options(){let t=this,e=this.store.theme;return{xaxis:{type:"datetime",labels:{},tooltip:{enabled:!1},categories:t.surveys.map((t=>t.data.time))},yaxis:{labels:{show:!1},min:-.5,max:5.5,tickAmount:10,decimalsInFloat:0},legend:{show:!0,showForSingleSeries:!0},theme:{mode:e},chart:{background:"var(--color-overlay-input)",fontFamily:"inherit",toolbar:{show:t.toolbar},width:"100%",height:"100%"},grid:{show:!1},stroke:{curve:"straight",width:3},tooltip:{custom:function(e,a,s,i){return t.custom_tooltip(e,a,s,i)},enabled:!0,x:{format:"ddd MMM d"}}}}},methods:{custom_tooltip(t){let e=`<div class="apexcharts-tooltip-title" style="font-family: inherit; font-size: 12px;">${new Date(this.surveys[t.dataPointIndex].data.time).toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})}</div>`;for(let a in this.graphs){let s=this.graphs[a];e+=`<div class="apexcharts-tooltip-series-group apexcharts-active" style="order: 1; display: flex;">\n                <span class="apexcharts-tooltip-marker" style="background-color: ${t.w.globals.colors[a]}"></span>\n                <div class="apexcharts-tooltip-text" style="font-family: inherit; font-size: 12px;">\n                    <div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label">${s.name}: </span><span class="apexcharts-tooltip-text-y-value">${s.labels[t.dataPointIndex]}</span></div>\n                </div></div>`}return e+="</div>",e},try_update(){this.can_update?(this.update(!0),x.i2.log("Manualling refreshing survey data")):(new w.OO("Please wait before updating again",2e3),x.i2.warn("Blocked quick refresh of survey data "))},process(t){this.surveys=t.filter((t=>!t.error));try{this.surveys.forEach(((t,e)=>{t.data.index=e}))}catch{throw"Failed to map indices onto survey data"}this.is_ready=!0},update(t=!1){this.is_ready=!1,this.can_update=!1,this.last_update=Date.now(),this.surveys=[],this.store.get_cached_surveys(this.completed,t).then((t=>{this.process(t),setTimeout((()=>{this.can_update=!0}),this.min_delay)})).catch((t=>{new w.PK("Failed to get statistics",t,5e3),this.is_ready=!0,this.can_update=!0}))}},mounted(){this.update()}},C=a(89);const $=(0,C.Z)(k,[["render",g],["__scopeId","data-v-74a8fc86"]]);var D=$}}]);
//# sourceMappingURL=207.e4d10a4d.js.map