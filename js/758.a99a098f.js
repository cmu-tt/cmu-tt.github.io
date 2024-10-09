"use strict";(self["webpackChunkmvtime"]=self["webpackChunkmvtime"]||[]).push([[758],{9758:function(A,e,a){a.r(e),a.d(e,{default:function(){return O}});a(4114);var s=a(6768),n=a(4232),t=a(334);const i=A=>((0,s.Qi)("data-v-76844863"),A=A(),(0,s.jt)(),A),o={class:"admin"},l={class:"admin_menus"},r={class:"admin_sidebar"},g=i((()=>(0,s.Lk)("span",{class:"admin_sidebar__tophaze"},null,-1))),c={class:"admin_sidebar_scrollable admin_section"},d={class:"admin_sidebar_header"},p={class:"branding-title gohome"},u={class:"admin_sidebar_items"},m=["title","onClick","href","disabled"],h={class:"admin_sidebar_item__text"},k=i((()=>(0,s.Lk)("span",{class:"flex_spacer"},null,-1))),v=["title","onClick"],w=i((()=>(0,s.Lk)("span",{class:"admin_sidebar_item__outlink__icon themed_icon"},null,-1))),C=[w],B=i((()=>(0,s.Lk)("span",{class:"admin_sidebar__bottomhaze"},null,-1))),b={class:"sidebar_last_block auth-action can-logout doprompt"},f={key:0,class:"linked_acc_icon"},E=i((()=>(0,s.Lk)("img",{class:"linked_acc_icon__img",width:"24",height:"24",src:t,alt:"Linked Account"},null,-1))),Q=[E],y=["title"],R=["src"],U=i((()=>(0,s.Lk)("div",{class:"auth_logout can_logout"},"Log Out",-1))),L={class:"admin_info"},I=i((()=>(0,s.Lk)("span",{class:"admin_info__tophaze"},null,-1))),D={class:"admin_info_scrollable admin_section"},S=i((()=>(0,s.Lk)("br",null,null,-1))),V=i((()=>(0,s.Lk)("br",null,null,-1))),N=i((()=>(0,s.Lk)("br",null,null,-1))),M=i((()=>(0,s.Lk)("br",null,null,-1))),X=i((()=>(0,s.Lk)("span",{class:"admin_info__bottomhaze"},null,-1))),j={class:"admin_main_wrapper"};function x(A,e,a,t,i,w){const E=(0,s.g2)("router-link"),x=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("main",o,[(0,s.Lk)("div",l,[(0,s.Lk)("div",r,[g,(0,s.Lk)("div",c,[(0,s.Lk)("div",d,[(0,s.Lk)("div",p,[(0,s.eW)((0,n.v_)(A.$env.VUE_APP_BRAND_NAME_SHORT)+" ",1),(0,s.Lk)("span",{class:"branding-admin",onClick:e[0]||(e[0]=e=>{A.$router.push({name:"portal",query:{...A.$route.query,search:void 0,action:void 0}}),e.stopPropagation()})},"Admin Panel")])]),(0,s.Lk)("div",u,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.pages,((A,e)=>((0,s.uX)(),(0,s.CE)("a",{style:(0,n.Tr)({animationDelay:.05*(e+1)+"s"}),class:(0,n.C4)(["admin_sidebar_item admin_in",{active:w.active===A.short}]),title:`View ${A.title} info and options`,onClick:e=>{w.active===A.short&&i.key++,w.open_page(A.short),e.preventDefault()},href:`/portal/admin/${A.short}`,key:A.short,disabled:A.disabled},[(0,s.Lk)("div",{class:"admin_sidebar_item__icon themed_icon",style:(0,n.Tr)({backgroundImage:`url(${A.img.png})`})},null,4),(0,s.Lk)("span",h,(0,n.v_)(A.name),1),k,(0,s.Lk)("button",{class:"admin_sidebar_item__outlink click-action",title:`Open ${A.title} in a new tab`,onClick:e=>{w.open_outlink(A.short),e.preventDefault(),e.stopPropagation()}},C,8,v)],14,m)))),128))])]),B,(0,s.Lk)("div",b,[A.$store&&A.$store.personal_account?((0,s.uX)(),(0,s.CE)("div",f,Q)):A.$store&&A.$store.user&&w.user_pfp?((0,s.uX)(),(0,s.CE)("div",{key:1,class:"active_acc_icon",title:`Logged in as ${A.$store.user.displayName} (${this.$store.user.email})`},[(0,s.Lk)("img",{class:"active_acc_icon__img",width:"26",height:"26",src:w.user_pfp,referrerpolicy:"no-referrer",alt:"Account Profile Image"},null,8,R)],8,y)):(0,s.Q3)("",!0),U])]),(0,s.Lk)("div",L,[I,(0,s.Lk)("div",D,[(0,s.Lk)("span",null,[(0,s.eW)(" The admin panel is still in beta, so some features may not be available yet. "),S,V,(0,s.eW)(" We're working hard to bring you the best experience possible, so please "),(0,s.bF)(E,{to:{name:"contact"}},{default:(0,s.k6)((()=>[(0,s.eW)("contact us")])),_:1}),(0,s.eW)(" if you have any feedback or suggestions. "),N,M,(0,s.eW)(" You can see what we're working on by checking out the "),(0,s.bF)(E,{to:{name:"roadmap"}},{default:(0,s.k6)((()=>[(0,s.eW)("roadmap")])),_:1}),(0,s.eW)("! ")])]),X])]),(0,s.Lk)("div",j,[((0,s.uX)(),(0,s.Wv)(x,{class:"admin_main",key:i.key}))])])}var J=a(4186),_={name:"AdminPortal",data(){return{key:0,pages:[{name:"Logs & Debugging",short:"logs",title:"log and debug",img:{png:a(3115),svg:a(9239)}},{name:"District & .env",short:"opts",title:"customization",img:{png:a(336),svg:a(5959)}},{name:"Users & Teachers",short:"usrs",title:"user",img:{png:a(8731),svg:a(3311)}},{name:"Messages & Alerts",short:"msgs",title:"alerts and messaging",img:{png:a(2836),svg:a(4192)}},{name:"Usage & Analytics",short:"usge",title:"usage and analytics",img:{png:a(3898),svg:a(3686)},disabled:!0}]}},computed:{active(){return this.$route.name.replace("admin_","")||"logs"},page(){return this.pages.find((A=>A.short===this.active))},user_pfp(){return this.$store&&this.$store.user&&this.$store.user.photoURL?this.$store.user.photoURL.replace("s96-c","s26-c"):null},shortcuts(){return[]}},methods:{keydown(A){},open_outlink(A){window.open(`/portal/admin/${A}`,"_blank")},open_page(A){this.$router.push({name:"admin_"+A,query:{...this.$route.query,search:void 0,action:void 0}})}},watch:{page(A){if(A.disabled)return this.open_page("logs"),void new J.MY("Sorry, that page is not available yet",2500);this.$router.push({name:"admin_"+this.active,query:{...this.$route.query,search:void 0,action:void 0}})}},mounted(){window.addEventListener("keydown",this.keydown),this.$shortcuts.register_all(this.shortcuts,"Admin"),this.page.disabled&&(this.open_page("logs"),new J.MY("Sorry, that page is not available yet",2500))},beforeUnmount(){window.removeEventListener("keydown",this.keydown),this.$shortcuts.remove_tag("Admin")}},Y=a(1241);const T=(0,Y.A)(_,[["render",x],["__scopeId","data-v-76844863"]]);var O=T},9239:function(A,e,a){A.exports=a.p+"img/logs.55fed9e0.svg"},4192:function(A,e,a){A.exports=a.p+"img/msgs.da138225.svg"},5959:function(A,e,a){A.exports=a.p+"img/opts.46be32b4.svg"},3686:function(A,e,a){A.exports=a.p+"img/usge.bfcc16bb.svg"},3311:function(A,e,a){A.exports=a.p+"img/usrs.10f2561f.svg"},3115:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAESSURBVHgB7ZfNDYJQDID7OJFwwQ3YQEfADXQCr3CSDYwTiBfCzRFcgQ1kBJxAvBESwL7oibTKhcZDv6QhafNC0/f6B6AoijIrhlJGURTg54ISggwVyjrP82pscJgDB5BzzhKgJJSBdNAY44M8S0pJOjgMwxmEwaCQ/zTcgc87DEGGgnp/iqJMgM3iJEn8tm2Dvu9nr4mu65ZpmtaUjW11WAtvggW7chxnm2VZOTZwneQk3E3sTe0pA9dJniDPglKSDnZdl8J7whABA2LfHzksfE2SpmlWMDMYjNrzvIpLEkVRfvD3AyvpYBzHG6xNV5DFbnXFWMltdTuQZ/pWh9G7gzwPSslFULTVIQXKERRFUeR5Ad1pVwtqalUTAAAAAElFTkSuQmCC"},2836:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN5SURBVHgB7Vi9UhsxEJbPDUNFmdLp6IACWo4uHdClCxQMPw2mTIX9BDiN7RkXQJcO6NJZdCk8g3mDyxPElccubOfbRJfZ25PO92MoGL4ZzVm61erzarXaPaXe8cZRUjlRrVZXhsPhged5a6VSaX06nVbwXKF3s9lsgPEAPwP8fsBTt9vtQOVAZoInJyc+HpdofpZ5IH8Pst9AVGeal1YQxCp4XGclFlvwH9GLtBYtpxE6Pj4+x+M7lK+q4liFnoPNzc1xr9f7OU94rgVhOdrOmuO1Rns0zyC0CvnnaDQiv1wvl8tfYLF1x/wa5tRVXoIJ5DRaPa0/zfHbRJJOgrSt2IoGHzOns95qtRq2OWdnZ38t1Ww2+7b3p6enVVj1Mjzt/0mUShcunVaCdCBA5kkoCiaTyX6n0+k75nBrO61ydHRE236HnxVGcID1NmwHx7MpgfAVJ0eWSyIXkmILVl1CpIN0kU6mn9a6tsnHCJK/YIG9iBC2dQ65CMyCKokk6RTDvvHVZIIgdy6GtMs/isDo1GL4UspFCBrf2xMyiWGgIGJWpBDFB6QFfd4B2X7WqykLjG7Nx8bj8QHvRwhie3cjLz3vVr08HnkHRlnjfWnBihBOfTAKQKvompFbJ0KQUibeX1paeg2CAe9g1yqRPu/ICN9oNAYqJ3DguiYDSoQMzjJEeWpB4IHXgOLpE11vqgC8pEXSWCAE3adyPlmDbiWypgwfIeQ4XXtOgiZN56iolMBW3UD5hooHX4Ivw0cISst4H+cgUC6C+LfPUrHKAPIntB2HNa3+TDkj72PuL+UiCGF5ardVDtA1Rtak9N4MaUSEe5ssJbRiKCIXSbdMJvxbTNh5qdvEJAddMfyRn+yIBU1Y0WJC7AJfIKTuBxl2bGEmdoEXDRU2mELMF8OxrMmVUXf5ZDr6aDuuVD4rKKtGxOjyi4H8Fb67L2VdgfpQZrw4QHdhzVGUHKX8MmOnWtkmb62LUa8Otra2xvj5iQ2Tws9p61kbTCFG8fIDH4c1v8L3ftjmzCs7a8p+SLRaXNlJemquuWkK95pynGRYggqgW1igT5lPmFyYK5LatiHlO9QnkktFkOCqZ/NiXn3NkenjEQheWWqWrNBoh2k/HuX6/AaS57I0TQGtMvhtiNwfMI2fEdldyoJtHzCpZMD48/Ly8k2R5Pcdbxp/AOnyxqQYsBYTAAAAAElFTkSuQmCC"},336:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALfSURBVHgB7Vg7chpBFHxL8QuhSCDy2imBrRMIcwKVD2BjJXwCgTmABBzAZjOKAK9jEp1AwhdwYR/A2oiEorxEfAJwj1nKgJjPrpBQsF31aiR4zPTOzOueHSIfPo4LjTygUqnEJpNJTtM0ezQamd1uV5oXiUSuDcOwySVcEywUCrnlcvkZg8adjyxEA0S/bhJFXgZNB/FSlHcwgs6Al4i3ezvStOvFYvGdzRb+/YDIcLqyENlkMnlXq9XoIARB7grNFXncEhzUp9Np3TTNpSgpQGo4NLl/fcZiMWmSKsGjwSf4UEgJlkqlN/RIQJHoskoOkgSQjguSF0gP8RPRR+jQyddoM5AcYRUg72I8HlfZn7wc7sDMBWaz2SU6+cT9sab18X0Vmna7OxOQJp11gyiTGHX0YaZSKWvfbO4lmM/nyxicSUucBOTC4XAW9vWHBADRGq0EXrQKFnFc5t4eLBaLPzB4U0SOdYinfhePx4XkGFqtVg2NIUnTEZ1EInGLPa9xCbJlwcAqRcGeVsmqGKLRKFtG6cMAGez5rcLxKjO9dDqtnNxsNu1AINAjD/BC0AqFQpbq7K2BGfxFgmrl4cmEGkvn+izI4Jog0zbID7kFlvgFeThwuCaIpYphsIzbJcaDnZIHbBGEJFi0cgUZ3g8GA1eHXRV1YNo6n88tYRWDZBbNR8SdoK+c6iwyR6LV0Z/7QCBvg1w1GAyedDqdrULi/sixqhxxXIAd7ZlY77O5TXLYrzfIOyE+DLxQ1XmOJF0mEP1CK0/lwcRsGsPhsL+2KUYMJ5UyiFUkBwYT1X3ebrfdHxY2COpofstynWVaS4lOangle3lSfWlakAeJkAEWGIDLHOSl6WjwCT4UqgQb5MHoJajbttye3biBjuaG/t+17KKH+MasEO0pKvpMkNcQ6acngmuwyyNaiffmpdD57oC7eWu3eLTLo004QnzGZgtSYYqu1ZzbMGmeDx/PFX8BVXRIuSjmqs4AAAAASUVORK5CYII="},3898:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJSSURBVHgB7VjLccIwEF0bZoAb6UDpIHSAOwgVBA7MAJeQCkIqCLnwGQ4hFSQdhFSQdIBL4AgHIG+JzBhhGcsET8j4zWhWs9LTPmv1A6IUKVKcNyxKCPV6/SqTybyiKjRdXMuyOv1+/8XvtCkhQNwj6cWRbOuqzsQERsF6vS6qvsQELpfLOxiXDJHYGvTQaDQEzDtp0j0YDHY0ZSlGACzmW64jJU8Y0DXhhokLglGKvQAQ1ubCdek7iTgjgZoAG1+73S7G4DIe6DcEsgCkVXeGicVioRUZwn3B8uig7cvncymOQBaAlF7p2rlNJ1LDZXFVya3ATGDfYB2Vf3AXIz3PMNUdkvzqgMBjBK4d4uK2KFFE2HHE5XI5h4uSHkZVckK5ZAArRNw9TEdxuyiOd7RwSufz+Sftr68JSlnHlbxilCPKiivO11fQ4eNjy5X9p+zM5/MX3W53FsLbT7GJOIb0OaS/xlSu8Bowi9qN5yEbV1yz2XzEJrlGtYa2CbgsUp3JQK4JbF/AG1UcBMxwyVeCAkhxAoV5m5nkvsw5xI0lEAN2VHGr1coZjUZfUQfjvtipJZRKoVC4NOHqkPUJ4hN/22Dbdm04HBoHkDPmbYYZHYntDELc5r0mU1TDYfqGIGWk/poMAV4VZgr7TkdiO4P48jHM2BdE0M/LhVqtVqnX65nMZllaQUci7CYRXgVrMfS1ckr8qd8kQUgFHovzFYiLPPSl6/N9qA2+9+IsxrjRBMpXxiW/OIKuK/gruMpK8njaAc5Q/ofAwW3imI6bIkWK/4Zv0s9FZaPsK60AAAAASUVORK5CYII="},8731:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM0SURBVHgB7VjNldowEB5M3gNupII4FbCpAFNBNhWwnIBT6ACoIHCD07IVJKlgvRWEVBClA27AAdhvdmU/4x9pZNjbfu/pWbZH0qeRNDMaondchgqVxGAw8I/H463neS28BqfTqVmpVJr8D/UNvitU1eFweEL912KxUFQCzgRB7A6PLpNyaEYgvwbxOYiunNpJBUEswOMexafLoFCmUqJWgqPRqLnf78eY/YiuCPQ3azQa09lstjHJGQnyPsPS/ERnNyQb9GWwaC8KoFA6pv3pkYEcHo82cprUtF6vf1wuly8F759RepqACT6PocfKRa4GeVl3u90fsuw33vi1Wq1TtEzSFTD1k6tB3nNkPwzKRI7BS8cyTMDUEU9gu92O8/5lNKjNyD3Z0ZOeRG0BHgWivB/D5Ic8DY7JDuViz/SgSiCaUcwZQa09n+xQ5I4ngYyvOcQ4I4i98p1kUPR26CZfYoJ84hzsnUguhU9CuSBpdmKC7PhJCGj6hk2RVF4PGEjl0f9thmC1Wm2TA4rMQgG6DrK8Qq2ontyDPjkAsxwNh0PrwNrETMgNQVRJLrFPjsBMVyBQqMl+v8+HTmL/zpD05R/yPjpiok1DiEn+RXC6QV8t1O/K9snBb4bghfBRApAL+AXkmhdM+AwxQY5KHDtljf0uCuejk4t+vyZPpQSQ32QI6o8Sgope/XBoEtKkV1w0WXZjAQmAiauonjzFElekKMeh28BkUTqohhJ5KOs/pQmC9VrQtlf2dha1j6JuE0AwjOoxQd5Llnahq+bS4Mlh8LlNDpOIuXjJxmRegge6DlamnyC3Tq6S50BC0RVg2yJpDXupxisDkYCugHS8l0ImEM6LqHsFjccmtyYBuz4s4Q+DyDT9IfdWByIzPIqC15AcT7PQDnJaJJMcyHV1uONOcLNrFwSmAco/DBrS654N88jqqyt7EEkeR/GYeT8KMwvRxZ0EYZh2k0k76pM8fFNkyC5YUx8kJFkGOuP1rVTqg8ENofovqFqNawnM+VJvNTskhDYPkoyDDYoEwUaEUglMvp6WuNmFKA9vlsBMI0oBg2wbfpzrfjIFrMO3KMounQJ+x6V4BsJ5iDtojP7eAAAAAElFTkSuQmCC"},334:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJxSURBVHgB7ZmBcdsgFIb/9jqAR6ATNJ3AjJAN7A3iDdwNlE5ANvAIciewN6AbxBskvDOcCUHwQEjJXfTd/WeMEPpBD4QQsLDwtfmGdkijX/b3zmhlRVyM/ludjf4ZHfEJIIN/jJ6NXgqljZSRwAdAxh9RbnpIszZkh7oe59yRDSamZa8PqcMEUMj0wOTmnU64TQBNOAGzmXfq0Yg5wmaycNoCePlg7VCJwHVmaGVkb7T26qeHnWKcRzNe1XjgVM6RtmaHEMh3VHEoCYw37swL5vVyz5aiu6CAScw/ekZVYGqPfAiy0Whv/iljSiI/FljIAqNjzIemVoy6ZWj2B96zxjjcU9tBS+mhQXwJzstBy/Wjn/E9Uig1Y6QgMzRn//T02+gvru8BMZ68tEAeyShTtWyIhQ0Cc2G9+6CMYl4nS+lSOWae/od3cpswf8+8FmsgjzFP6d4e660oj+L7MGD+DmWd1qwBMfPaHnvw8jubr4P8GvOsBnAqTJknbZCnxjwrhDSjoi5hPtbAkHvUvZaewODAqMgfoCpRjo5J2xhhjfcVxp0OodnYg+xoL5Ti7KW3iXISb/eHXF4tZ04hiXxP+IaGQkEjPU5qtAaTXHxKr+xuJvMaBewzlalIeW0bTmn/DlG6xaaAQgFVK8OBelrtaAgU0mUqpN7eJM4XDc0rVLACb66myqUtL2y6Q53RodgXqGTX0EitNhhJy94sVbN90h7A3OZZywYuLWcTjno03tx1zBFOk2yv+2zRdsvRiWa8B8yEQLutR9frk4RMDoFrQ2ruSGzZUUzLz6xr3D6xCtzehYmLFS2Hj7h9al1YWBjJKxvgzZRLiW94AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=758.a99a098f.js.map