(function(t){function s(s){for(var a,o,c=s[0],r=s[1],l=s[2],d=0,v=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&v.push(i[o][0]),i[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(s);while(v.length)v.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],a=!0,o=1;o<e.length;o++){var r=e[o];0!==i[r]&&(a=!1)}a&&(n.splice(s--,1),t=c(c.s=e[0]))}return t}var a={},i={app:0},n=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d22d746":"42393e96"}[t]+".js"}function c(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var s=[],e=i[t];if(0!==e)if(e)s.push(e[2]);else{var a=new Promise((function(s,a){e=i[t]=[s,a]}));s.push(e[2]=a);var n,r=document.createElement("script");r.charset="utf-8",r.timeout=120,c.nc&&r.setAttribute("nonce",c.nc),r.src=o(t);var l=new Error;n=function(s){r.onerror=r.onload=null,clearTimeout(d);var e=i[t];if(0!==e){if(e){var a=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,e[1](l)}i[t]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:r})}),12e4);r.onerror=r.onload=n,document.head.appendChild(r)}return Promise.all(s)},c.m=t,c.c=a,c.d=function(t,s,e){c.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,s){if(1&s&&(t=c(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)c.d(e,a,function(s){return t[s]}.bind(null,a));return e},c.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(s,"a",s),s},c.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},c.p="/",c.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=s,r=r.slice();for(var d=0;d<r.length;d++)s(r[d]);var u=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"034f":function(t,s,e){"use strict";var a=e("64a9"),i=e.n(a);i.a},"0aed":function(t,s,e){"use strict";var a=e("51b9"),i=e.n(a);i.a},1:function(t,s){},1603:function(t,s,e){"use strict";var a=e("4e54"),i=e.n(a);i.a},2:function(t,s){},"33da":function(t,s,e){},4369:function(t,s,e){},"4e54":function(t,s,e){},"51b9":function(t,s,e){},"51fa":function(t,s,e){t.exports=e.p+"img/retailpay_logo.b09e2e2e.png"},"56d7":function(t,s,e){"use strict";e.r(s);e("cadf"),e("551c"),e("f751"),e("097d");var a=e("2b0e"),i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("Nav")],1),e("router-view",{staticClass:"pt-more"})],1)},n=[],o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container-fluid nav-fixed"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"logo"},[a("div",{staticClass:"logo-cont"},[a("img",{staticClass:"main-nav-logo",class:t.windowWidth<=767?"mt-1":"mt-3",attrs:{src:e("51fa"),alt:"Retailpay"}})]),t.windowWidth<=767?a("div",{staticClass:"toggler"},[a("i",{staticClass:"fa fa-bars fa-2x",on:{click:function(s){t.sidenav=!0}}})]):t._e()])]),t.sidenavs.length>0?a("div",{staticClass:"col-md-9"},[t.windowWidth>767?a("div",{staticClass:"nav"},t._l(t.sidenavs,(function(s){return a("router-link",{key:s.id,staticClass:"link-item",attrs:{to:"#"}},[a("button",[t._v(" "+t._s(s.name)+" ")])])})),1):t._e(),t.sidenav?a("div",{staticClass:"container-fluid resp-nav-cont p-0 p-10  bg-dark text-white"},[a("div",{staticClass:"row row-c resp-nav-cont-top"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-4"},[a("i",{staticClass:"fa fa-times fa-2x",on:{click:function(s){t.sidenav=!1}}})])]),t._m(1)])]),a("div",{staticClass:"row bg-white"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"nav-r"},[a("router-link",{staticClass:"link-item-r",attrs:{to:"#"}},[a("button",{on:{click:function(s){t.sidenav=!1}}},[t._v("SUPPLIERS")])]),a("router-link",{staticClass:"link-item-r",attrs:{to:"#"}},[a("button",{on:{click:function(s){t.sidenav=!1}}},[t._v("RETAILERS")])]),a("router-link",{staticClass:"link-item-r",attrs:{to:"#"}},[a("button",{on:{click:function(s){t.sidenav=!1}}},[t._v("DISTRIBUTORS")])]),a("router-link",{staticClass:"link-item-r",attrs:{to:"#"}},[a("button",{on:{click:function(s){t.sidenav=!1}}},[t._v("ABOUT US")])]),a("router-link",{staticClass:"link-item-r",attrs:{to:"/"}},[a("button",{on:{click:function(s){t.sidenav=!1}}},[t._v("HELP CENTER")])]),a("router-link",{staticClass:"link-item-r",attrs:{to:"#"}},[a("button",{on:{click:function(s){t.sidenav=!1}}},[t._v(" "+t._s(t.windowWidth)+" ")])])],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 terms bg-white pb-5"},[a("hr"),a("div",[a("router-link",{staticStyle:{display:"inline-block"},attrs:{to:"#"}},[t._v("TERMS AND CONDITIONS")])],1)])])]):t._e()]):t._e()])])},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-8 logo-cont"},[a("img",{staticClass:"mt-1",attrs:{src:e("51fa"),alt:"Retailpay"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row pt-2 pb-2"},[e("div",{staticClass:"col-12"},[e("hr")])])}],r=e("bc3a"),l=e.n(r),d={rootUrl:"http://197.232.26.3:1337/"},u={data:function(){return{windowWidth:0,sidenav:!1,sidenavs:[]}},created:function(){var t=this;l.a.get("".concat(d.rootUrl,"/mainnavs")).then((function(s){t.sidenavs=s.data})).catch((function(t){return alert(t)}))},mounted:function(){this.$nextTick((function(){window.addEventListener("resize",this.getWindowWidth),this.getWindowWidth()}))},methods:{getWindowWidth:function(t){this.windowWidth=document.documentElement.clientWidth}},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)}},v=u,f=(e("1603"),e("2877")),p=Object(f["a"])(v,o,c,!1,null,"3b2c8661",null),m=p.exports,h={components:{Nav:m}},C=h,_=(e("034f"),Object(f["a"])(C,i,n,!1,null,null,null)),b=_.exports,w=e("8c4f"),g=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("Bunner",{attrs:{msg:t.msg}}),e("SingleForm"),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("HomeBundle")],1)])]),e("Footer")],1)},k=[],y=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid bunner mb-5 text-center"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",{staticClass:"text-center"},[t._v(" "+t._s(t.msg)+" ")])])]),t._m(0)])},x=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h2",{staticClass:"text-center"},[t._v("What are you looking for?")])])])}],j={props:["msg"]},E=j,O=(e("b2e2"),Object(f["a"])(E,y,x,!1,null,"2b0929c1",null)),W=O.exports,S=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid form-cont"},[e("div",{staticClass:"row"},[e("form",{staticClass:"form pt-1 pb-1 animated bounceIn"},[e("input",{attrs:{type:"text",placeholder:"Search the document",name:"search",id:"search"}}),e("button",{staticClass:"search-btn"},[e("i",{staticClass:"fa fa-search"})])])])])}],$={},R=$,T=(e("ad73"),Object(f["a"])(R,S,P,!1,null,"35c3bbba",null)),F=T.exports,N=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid footer"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 p-0"},[e("div",{staticClass:"overlay"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",[t._v(" Grow your business with RetailPay ")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 pt-2"},[e("h6",[t._v(" Together with you, we unlock new possibilities ")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"btn-cont"},[e("button",{staticClass:"btn get-started"},[t._v("Get Started")])])])])])])])])])}],B={},L=B,U=(e("a1ea"),Object(f["a"])(L,N,q,!1,null,"5dfded3a",null)),I=U.exports,D=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container mt-5 mb-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-sm-6"},[e("router-link",{staticClass:"router-link pt-4 pb-4",attrs:{to:"/retailer"}},[e("div",{staticClass:"container-fluid Supplier"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h2",[t._v("Retailer")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("p",{staticClass:"lead"},[t._v("\n                                With RetailPay, worrying about raising\n                                money to buy new stock will be a thing of\n                                the past. We enable retailers to stock\n                                goods on consignment from suppliers,\n                                with automatic reorders managed by our\n                            ")])])])])])],1),e("div",{staticClass:"col-md-6 col-sm-6"},[e("router-link",{staticClass:"router-link pt-4 pb-4",attrs:{to:"#"}},[e("div",{staticClass:"container-fluid Supplier"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h2",[t._v("Supplier")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("p",{staticClass:"lead"},[t._v("\n                                With RetailPay, worrying about raising\n                                money to buy new stock will be a thing of\n                                the past. We enable retailers to stock\n                                goods on consignment from suppliers,\n                                with automatic reorders managed by our\n                            ")])])])])])],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-sm-6"},[e("router-link",{staticClass:"router-link router-link-empty pt-4 pb-4",attrs:{to:"#"}},[e("div",{staticClass:"container-fluid distributor"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h2",[t._v("Distributor")])])])])])],1),e("div",{staticClass:"col-md-6 col-sm-6"},[e("router-link",{staticClass:"router-link router-link-empty pt-4 pb-4",attrs:{to:"#"}},[e("div",{staticClass:"container-fluid warehouse"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h2",[t._v("Warehouse")])])])])])],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-sm-6"},[e("router-link",{staticClass:"router-link router-link-empty pt-4 pb-4",attrs:{to:"#"}},[e("div",{staticClass:"container-fluid insurance"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h2",[t._v("Insurance")])])])])])],1),e("div",{staticClass:"col-md-6 col-sm-6"},[e("router-link",{staticClass:"router-link router-link-empty pt-4 pb-4",attrs:{to:"#"}},[e("div",{staticClass:"container-fluid vd"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h2",[t._v("Virtual Dispatch")])])])])])],1)]),t._m(0)])},H=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row pt-5"},[e("div",{staticClass:"col-md-8 pt-3 text-center"},[e("h5",{staticClass:"cf"},[t._v("Can’t find the answers you’re looking for? We’re here to help.")])]),e("div",{staticClass:"col-md-4  pt-3"},[e("button",{staticClass:"btn btn-custom"},[t._v("Contact RetailPay Support")])])])}],A={},M=A,Y=(e("f874"),Object(f["a"])(M,D,H,!1,null,"397d7741",null)),z=Y.exports,Q={name:"home",components:{Bunner:W,SingleForm:F,Footer:I,HomeBundle:z},data:function(){return{msg:"Welcome RetailPay Help center"}}},G=Q,J=Object(f["a"])(G,g,k,!1,null,null,null),V=J.exports,K=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"retailer"},[e("Bundler"),e("Footer")],1)},X=[],Z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("button",{staticClass:"arrow-cont arrow-cont-open",class:t.show_side_nav?"hide":"arrow-cont-open",attrs:{title:"Click For More"},on:{click:function(s){t.show_side_nav=!0}}},[e("i",{staticClass:"fa fa-arrow-right"})]),e("div",{staticClass:"col-md-3 p-0 side-nav-cont",class:t.show_side_nav?"side-nav-cont-show":"close-sidenav",attrs:{id:"side-nav-cont"}},[e("button",{staticClass:"arrow-cont arrow-cont-close",on:{click:function(s){t.show_side_nav=!1}}},[e("i",{staticClass:"fa fa-arrow-left"})]),0==t.page_object.sidenavs.length?e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"loader"},[e("img",{staticClass:"img-fluid",attrs:{src:t.loader_url,alt:""}})])])]),t._m(0)]):t._e(),t.page_object.sidenavs.length>0?e("ul",{staticClass:"list-group",class:t.show_side_nav?"animated slideInLeft":"not-important"},t._l(t.page_object.sidenavs,(function(s){return e("li",{key:s.id,staticClass:"list-group-item",on:{click:function(e){return t.updateCurrentObject(s)}}},[e("h6",{staticClass:"p-size"},[s.id==t.current_sidenav_id?e("div",{staticClass:"current-indicate"}):t._e(),t._v("\n                        "+t._s(s.name)+" \n                        "),s.subheadings.length>0?e("span",[e("i",{class:s.id==t.current_sidenav_id?"fa fa-angle-down":"fa fa-angle-right"})]):t._e()]),s.subheadings.length>0?e("ul",{staticClass:"list-group list-group-inner",class:s.id==t.current_sidenav_id?"open-it animated slideInDown":"close-it"},t._l(s.subheadings,(function(s){return e("li",{key:s.id,staticClass:"list-group-item inner-list-item"},[e("a",{attrs:{href:t.stripSpace(s.name)}},[t._v(" "+t._s(s.name)+" ")])])})),0):t._e()])})),0):t._e()]),e("div",{staticClass:"col-md-9 content-cont"},[e("div",{staticClass:"row"}),e("div",{staticClass:"row bundler-row p-0"},[e("div",{staticClass:"col-12"},[t.page_object.markdown_text.length<=0?e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"loader"},[e("img",{staticClass:"img-fluid",attrs:{src:t.loader_url,alt:""}})])])]),t._m(1)]):t._e(),t.page_object.markdown_text.length>0?e("HeaderPoints",{attrs:{section:t.page_object.section,markdown_text:t.page_object.markdown_text,sidenav:t.page_object.sidenav}}):t._e()],1)]),t.page_object.markdown_text.length>0?e("div",{staticClass:"row mb-2"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"helpfull pt-3 pb-3"},[e("div",{staticClass:"container-fluid"},[t._m(2),e("div",{staticClass:"row pt-4"},[e("div",{staticClass:"col-12 text-center"},[e("button",{staticClass:"btn yes",on:{click:function(s){return t.feedbackform(!0)}}},[t._v("Yes")]),e("button",{staticClass:"btn no",on:{click:function(s){return t.feedbackform(!1)}}},[t._v("No")])])]),t.showfeedbackform?e("FeedBackForm",{attrs:{selections:t.selections},on:{"success-submit":t.successSubmit}}):t._e(),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[t.submit_success?e("p",{staticClass:"success-submit lead py-4 text-center"},[t._v(" Thank You For Your Response. "),t.not_positive?e("span",[t._v(" We are Working On it.")]):t._e()]):t._e()])])])],1)])])]):t._e()])])])},tt=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("h6",[t._v("Please Wait. Loading Page Navigation....")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("h6",[t._v("Please Wait. Loading Page Data....")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("h3",[t._v("Was this page Helpful?")])])])}],st=(e("28a5"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid p-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 content-head pt-3 pb-3"},[e("strong",{staticClass:"strong"},[t._v("\n                Retailpay Help Center   /   "+t._s(t.section_text)+" /   "),e("span",[t._v(t._s(t.sidenav))])])])]),e("div",{staticClass:"row pb-5 pt-5 content-cont"},[e("div",{staticClass:"col-12 content",attrs:{id:"content"},domProps:{innerHTML:t._s(t.htmlContent)}})])])}),et=[],at=e("339e"),it=e.n(at),nt=(e("d485"),{data:function(){return{section_text:"Unknown",htmlContent:null,sidenav_text:null}},props:["markdown_text","sidenav","section"],methods:{update:function(){var t=new it.a.Converter,s=this.markdown_text;this.htmlContent=t.makeHtml(s)}},watch:{markdown_text:{immediate:!0,handler:function(){this.update()}},section:{immediate:!0,handler:function(t){this.section_text=t||"Unknown"}}}}),ot=nt,ct=(e("0aed"),Object(f["a"])(ot,st,et,!1,null,null,null)),rt=ct.exports,lt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row pt-5"},[e("div",{staticClass:"col-12 pb-4",class:t.selections?"pt-2":"pt-0"},[e("form",{staticClass:"form pb-2 animated fadeIn",class:t.selections?"pt-4":"pt-0"},[t.questions.length>0&&t.selections?e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},t._l(t.questions,(function(s){return e("div",{key:s.id,staticClass:"form-check my-2"},[e("input",{staticClass:"form-check-input",attrs:{name:"question_to_answer",type:"radio"},on:{click:function(e){return t.selectQ(s.question,s.reason)}}}),e("label",{staticClass:"form-check-label",attrs:{for:s.reason}},[t._v(" "+t._s(s.reason)+" ")])])})),0)])]):t._e(),e("input",{directives:[{name:"model",rawName:"v-model",value:t.feedback.answer,expression:"feedback.answer"}],staticClass:"form-control form-control-lg mt-2 mb-2",attrs:{type:"text",placeholder:t.selections?t.placeholder:"Tell Us What You Like About This Page"},domProps:{value:t.feedback.answer},on:{input:function(s){s.target.composing||t.$set(t.feedback,"answer",s.target.value)}}}),e("div",{staticClass:"btn-cont my-3"},[e("button",{staticClass:"btn btn-custom",attrs:{type:"button"},on:{click:t.submitData}},[t._v("Submit")])])])])])])},dt=[],ut={data:function(){return{feedback:{reason:null,question:this.placeholder,answer:"",general:null},placeholder:null,questions:[]}},props:["selections"],methods:{submitData:function(){var t=this,s=this.feedback;this.selections?(null==s.reason&&void 0==s.question&&""==s.answer?(s.answer="No Answer Provided",s.question="No Question selected",s.reason="Other"):null!=s.reason&&""==s.answer?s.answer="No Answer Provided":null==s.reason&&""!=s.answer&&(s.reason="Other"),s.general="No"):(delete s.question,delete s.reason,s.general="Yes"),l.a.post("".concat(d.rootUrl,"/feedbacks"),s).then((function(s){t.$emit("success-submit",t.selections)})).catch((function(t){alert(t)}))},selectQ:function(t,s){this.placeholder=t,this.feedback.reason=s,this.feedback.question=t}},created:function(){var t=this;this.$emit("which-form",this.selections),l.a.get("".concat(d.rootUrl,"/feedbackquestions")).then((function(s){t.questions=s.data})).catch((function(t){return alert(t)}))}},vt=ut,ft=(e("fc2c"),Object(f["a"])(vt,lt,dt,!1,null,"a22a8cce",null)),pt=ft.exports,mt={components:{HeaderPoints:rt,FeedBackForm:pt},data:function(){return{page_object:{section:null,sidenav:null,markdown_text:"",sidenavs:[]},current_sidenav_id:0,selections:!1,showfeedbackform:!1,submit_success:!1,not_positive:null,show_side_nav:!1,loader_url:"https://i.stack.imgur.com/Ndsyl.gif"}},methods:{updateCurrentObject:function(t){null!=t.pages?(this.page_object.markdown_text=t.pages.text,this.page_object.sidenav=t.pages.sidenav,this.page_object.section=t.pages.section,this.current_sidenav_id=t.id,this.show_side_nav=!1):(this.show_side_nav=!1,alert("No Content Avalable"))},stripSpace:function(t){var s=t.toLowerCase();return"#".concat(s.split(" ").join("").split("(").join("").split(")").join(""))},setCurrentId:function(t){alert(t)},feedbackform:function(t){t?(this.showfeedbackform=!this.showfeedbackform,this.submit_success=!1,this.selections=!1):(this.showfeedbackform=!this.showfeedbackform,this.submit_success=!1,this.selections=!0)},successSubmit:function(t){this.showfeedbackform=!1,this.submit_success=!0,this.not_positive=t}},created:function(){var t=this;l.a.get("".concat(d.rootUrl,"/sidenavs")).then((function(s){t.page_object.sidenavs=s.data;var e=t.page_object.sidenavs[0];t.updateCurrentObject(e)})).catch((function(t){return alert(t)}))}},ht=mt,Ct=(e("81ac"),Object(f["a"])(ht,Z,tt,!1,null,"328900bc",null)),_t=Ct.exports,bt={components:{Footer:I,Bundler:_t}},wt=bt,gt=Object(f["a"])(wt,K,X,!1,null,"0fa83bd1",null),kt=gt.exports,yt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 p-0"},[e("Bunner",{attrs:{msg:t.msg}})],1)]),e("div",{staticClass:"row p-0"},[e("div",{staticClass:"col-12"},[e("SingleForm")],1)]),e("div",{staticClass:"row pt-5 pb-5"},[e("div",{staticClass:"col-12 p-0"},[t.sidenavs.length>0?e("div",{staticClass:"sidenavs-cont"},t._l(t.sidenavs,(function(s){return e("div",{key:s.id,staticClass:"sidenav-item"},[e("router-link",{class:null==s.description?"no-desk":"item",attrs:{to:"#"}},[e("h2",[t._v(" "+t._s(s.name)+" ")]),null!=s.description?e("p",{staticClass:"lead"},[t._v(" "+t._s(s.description)+" ")]):t._e()])],1)})),0):t._e()])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 p-0"},[e("Footer")],1)])])},xt=[],jt={components:{Bunner:W,SingleForm:F,Footer:I},data:function(){return{msg:"Welcome Back Retailer",sidenavs:null}},created:function(){var t=this;l.a.get("".concat(d.rootUrl,"/sidenavs")).then((function(s){t.sidenavs=s.data})).catch((function(t){return alert(t)}))}},Et=jt,Ot=(e("a358"),Object(f["a"])(Et,yt,xt,!1,null,"47a7acb0",null)),Wt=Ot.exports;a["a"].use(w["a"]);var St=new w["a"]({routes:[{path:"/",name:"home",component:V},{path:"/retailer",name:"retailer",component:kt},{path:"/ataglance",name:"ataglance",component:Wt},{path:"/about",name:"about",component:function(){return e.e("chunk-2d22d746").then(e.bind(null,"f820"))}}]});a["a"].config.productionTip=!1,new a["a"]({router:St,render:function(t){return t(b)}}).$mount("#app")},"64a9":function(t,s,e){},"7b09":function(t,s,e){},"81ac":function(t,s,e){"use strict";var a=e("7b09"),i=e.n(a);i.a},"8c9f":function(t,s,e){},"9a38":function(t,s,e){},a1ea:function(t,s,e){"use strict";var a=e("4369"),i=e.n(a);i.a},a358:function(t,s,e){"use strict";var a=e("9a38"),i=e.n(a);i.a},a6ff:function(t,s,e){},ad73:function(t,s,e){"use strict";var a=e("33da"),i=e.n(a);i.a},b2e2:function(t,s,e){"use strict";var a=e("8c9f"),i=e.n(a);i.a},d030:function(t,s,e){},f874:function(t,s,e){"use strict";var a=e("d030"),i=e.n(a);i.a},fc2c:function(t,s,e){"use strict";var a=e("a6ff"),i=e.n(a);i.a}});
//# sourceMappingURL=app.bb432c0c.js.map