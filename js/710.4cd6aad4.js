"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[710],{2710:function(t,a,e){e.r(a),e.d(a,{default:function(){return x}});var i=e(3396),n=e(7139);const s=t=>((0,i.dD)("data-v-2ca7eea8"),t=t(),(0,i.Cn)(),t),c={class:"tutorial"},o={class:"overlay_contents nopad"},l={class:"tutorial_pages"},r=["onClick"],d=["alt","src"],u={class:"tutorial_page__name"},p=["poster"],_=["src","type"],v={class:"bottom_actions"},b=s((()=>(0,i._)("span",{class:"desktop_only_text"},"Tutorial",-1))),m=s((()=>(0,i._)("div",{class:"flex_spacer"},null,-1)));function g(t,a,s,g,k,h){return(0,i.wg)(),(0,i.iD)("main",c,[(0,i._)("div",o,[(0,i._)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(k.tabs,(t=>((0,i.wg)(),(0,i.iD)("div",{class:(0,n.C_)(["tutorial_page",{active:k.active_tab==t.index}]),key:t.name,onClick:a=>k.active_tab=t.index},[(0,i._)("img",{class:"tutorial_page__icon",alt:`Tutorial ${t.name} Tab`,src:t.icon},null,8,d),(0,i._)("span",u,(0,n.zw)(t.name),1)],10,r)))),128))]),(0,i._)("video",{class:"tutorial_player",autoplay:"",playsinline:"",nodownload:"",preload:"metadata",poster:k.tabs[k.active_tab].video.poster||e(6755)},[(0,i._)("source",{src:k.tabs[k.active_tab].video.src,type:k.tabs[k.active_tab].video.type||"video/mp4"},null,8,_)],8,p)]),(0,i._)("div",v,[(0,i._)("button",{class:"back_action",onClick:a[0]||(a[0]=a=>t.$emit("close"))},[(0,i.Uk)(" Skip "),b]),m,(0,i._)("button",{class:"continue_action click_ctrlenter",onClick:a[1]||(a[1]=a=>{k.active_tab<k.tabs.length-1?k.active_tab++:t.$emit("close")})},(0,n.zw)(k.active_tab<k.tabs.length-1?"See More":"Finish"),1)])])}var k={name:"TutorialModal",data(){return{active_tab:this.$route?.params?.tab||0,tabs:[{index:0,name:"View",teaches:"calendar",icon:e(6214),video:{src:null,poster:e(6755)}},{index:1,name:"Complete",teaches:"study, todo",icon:e(4393),video:{}},{index:2,name:"Track",teaches:"stats",icon:e(8848),video:{}},{index:3,name:"Connect",teaches:"linking",icon:e(5381),video:{}}]}},watch:{active_tab(){this.$router.replace({name:"tutorial",params:{tab:this.active_tab},query:this.$route.query})}}},h=e(89);const f=(0,h.Z)(k,[["render",g],["__scopeId","data-v-2ca7eea8"]]);var x=f},6214:function(t,a,e){t.exports=e.p+"img/calendar.29c5aade.svg"},5381:function(t,a,e){t.exports=e.p+"img/link.919c94c0.svg"},8848:function(t,a,e){t.exports=e.p+"img/stats.86df9b08.svg"},4393:function(t,a,e){t.exports=e.p+"img/study.17f9057c.svg"},6755:function(t,a,e){t.exports=e.p+"img/placeholder.89df75b0.png"}}]);
//# sourceMappingURL=710.4cd6aad4.js.map