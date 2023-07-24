(()=>{"use strict";var e,t,o,n,a,l={353:(e,t,o)=>{o.d(t,{LS:()=>i,m_:()=>s});var n=o(977),a=o(864);const l=(0,n.ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),r=(0,a.v0)(l),s=()=>{r.onAuthStateChanged((e=>{if(e)console.log("user mon :>> ",e);else{console.log("none"),window.location.replace("index.html");const e=window.history.state;window.history.replaceState(e,"",window.location.href),window.onpopstate=function(){window.history.replaceState(e,"",window.location.href)}}}))},i=()=>(0,a.w7)(r)},199:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.d(t,{kL:()=>e,l7:()=>r,o8:()=>l});var a=o(976);await(0,a.AVB)("../data/allProductionDataST.json").then((e=>e)),await(0,a.AVB)("../data/allProductionDataET.json").then((e=>e));const e=await(0,a.AVB)("../data/dataMonthlyST.json").then((e=>e)),l=(await(0,a.AVB)("../data/dataMonthlyET.json").then((e=>e)),await(0,a.AVB)("../data/cumlProdST.json").then((e=>e)),await(0,a.AVB)("../data/cumlProdET.json").then((e=>e)),await(0,a.AVB)("../data/analyzeST.json").then((e=>e)),await(0,a.AVB)("../data/analyzeET.json").then((e=>e)),await(0,a.AVB)("../data/formations.json").then((e=>e)),await(0,a.AVB)("../data/economics.json").then((e=>e)),await(0,a.AVB)("../data/payouts.json").then((e=>e))),r=(await(0,a.AVB)("../data/pumpInfo.json").then((e=>e)),await(0,a.AVB)("../data/legacyEcon.json").then((e=>e)),await(0,a.AVB)("../data\\pldata.json").then((e=>e)));await(0,a.gyn)("../data\\recYrProd.csv").then((e=>e)),n()}catch(e){n(e)}}),1)},91:(e,t,o)=>{o.d(t,{Ho:()=>n,vc:()=>a});const n=(e,t,o,n="lines",a,l,r=!0,s)=>({x:e,y:t,text:l,name:o,visible:r,line:{color:a,dash:s},mode:n}),a={modeBarButtonsToRemove:["sendDataToCloud","autoScale2d","hoverClosestCartesian","hoverCompareCartesian","lasso2d","zoomIn2d","zoomOut2d","toggleSpikelines"],displaylogo:!1,responsive:!0,displayModeBar:!1,responsiveConfig:[{breakpoint:768,options:{legend:{orientation:"h",y:-.2}}},{breakpoint:0,options:{legend:{orientation:"v",y:1}}}]}},706:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var n=o(448),a=o(679),l=o(353),r=o(199),s=o(91),i=o(914),c=o(976),d=e([r]);r=(d.then?(await d)():d)[0],(0,l.m_)(),(0,n.n)();const u=()=>{let e=localStorage.shares;if(console.log("data :>> ",e),x!=localStorage.skey&&(e=null,localStorage.shares=null),null!==e&&"null"!==e&&null!=e)e=JSON.parse(e),p(e);else{const e=(0,a.iH)(L,"users/"+x+"/deck");(0,a.jM)(e,(e=>{const t=e.val();localStorage.setItem("shares",JSON.stringify(t)),localStorage.setItem("skey",x),t&&p(t)}))}},m=e=>{let t=(0,c.Ys)("#wellSelect");e.forEach((e=>{t.append("option").text(e).property("Value",e)}))},p=e=>{const t={};Object.keys(e).forEach((o=>{t[o.toLowerCase()]=e[o]}));const o=Object.keys(t).map((e=>e.toLowerCase()));let n=Object.keys(e);n.sort(((e,t)=>e.localeCompare(t,void 0,{sensitivity:"base"}))),n.unshift("All Wells"),m(n);let a={},l={},s=r.l7;console.log("pl23_22 :>> ",r.l7);for(let[e,n]of Object.entries(s))for(let[r,s]of Object.entries(n))if("Well Number"!=r&&"Well Name"!=r&&(e=e.replace("#","").toLowerCase(),r in a||(a[r]=0),o.includes(e))){const o=t[e];let n=o*s;e in l||(l[e]=[]),l[e].push({Well:e,Date:r,"Recent Mnth Return":n,Share:o}),a[r]+=n}const i=y(a);E(i[0],i[1]);const c=Object.entries(r.o8).map((([e,t])=>o.includes(t["Well Name"].replace("#","").toLowerCase())?t["% Payout"]:null)).filter((e=>null!==e)),d=h(i[1].reduce(((e,t)=>e+t)).toFixed(2));document.getElementById("selected-well").textContent="All Wells",document.getElementById("sum-pl").textContent=`$${d}`,document.getElementById("payout-title").textContent="% Mean Payout",document.getElementById("payout").textContent=`${(100*c.reduce(((e,t)=>e+t))/c.length).toFixed(0)}%`,localStorage.setItem("pl_data_wells",JSON.stringify(l));const u=sessionStorage.sortBy;null==u||"pl"==u?g(l):B(l),b("All Wells")},g=e=>{let t={};for(let[o,n]of Object.entries(e)){let e=0;for(let[t,o]of Object.entries(n))o["Recent Mnth Return"],e+=o["Recent Mnth Return"];t[o]=e}const o=Object.entries(t);o.sort(((e,t)=>t[1]-e[1]));const n=Object.fromEntries(o);let a=Object.keys(n);a.unshift("All Wells"),f(a)},y=e=>{const t=Object.keys(e).sort(((e,t)=>{const[o,n]=e.split(" "),[a,l]=t.split(" ");return new Date(`${o} 01 ${n}`)-new Date(`${a} 01 ${l}`)})),o={};return t.forEach((t=>{o[t]=e[t]})),[Object.entries(o).map((([e,t])=>e)),Object.entries(o).map((([e,t])=>t))]},h=e=>{var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")},f=e=>{let t=document.getElementById("well-list");t.innerHTML="";for(let o=0;o<e.length;o++){let n=document.createElement("li");n.classList.add("nav-item","active"),n.style.cursor="pointer";let a=document.createElement("a");a.classList.add("nav-link");let l=document.createElement("span");l.classList.add("menu-title"),l.textContent=I(e[o]),a.appendChild(l),n.appendChild(a),n.onclick=function(){let t=w(e[o]);b(e[o],t[0],t[1])},t.appendChild(n)}},w=e=>{let t=localStorage.getItem("pl_data_wells");if(t=JSON.parse(t),"All Wells"==e)return t=localStorage.getItem("shares"),void p(JSON.parse(t));let o=e.toLowerCase();Object.keys(k).includes(e.toLowerCase())&&(o=k[e.toLowerCase()]);let n=Object.entries(r.o8).filter((e=>e[1]["Well Name"].replace("#","").toLowerCase()==o));0==n.length?document.getElementById("payout").textContent="no data":n=n[0][1]["% Payout"],t=t[e.toLowerCase()];let a={};for(let e in t){const o=t[e].Date,n=t[e]["Recent Mnth Return"];0!==n&&(a[o]=n)}console.log("returns :>> ",a);const l=y(a);if(e=I(e),void 0===t)return document.getElementById("payout").textContent="no data",document.getElementById("sum-pl").textContent="no data",document.getElementById("selected-well").textContent=e,void E(l[0],l[1],`No Economic Data for ${e}`);console.log("dates_pl :>> ",l),console.log("dates_pl[0] :>> ",l[0]),E(l[0],l[1]);const s=h(l[1].reduce(((e,t)=>e+t)).toFixed(2));document.getElementById("selected-well").textContent=e,document.getElementById("sum-pl").textContent=`$${s}`,document.getElementById("payout-title").textContent="% Payout",document.getElementById("payout").textContent=`${(100*n).toFixed(0)}%`;const i=l[0][0].split(" ");return[`20${i[1]}-${j[i[0]]}-01`,l[0]]},S=()=>{const e=new Date("2016-01-01"),t=JSON.parse(localStorage.shares);let o=Object.keys(t),n=[];for(let e=0;e<o.length;e++){let t=o[e];Object.keys(C).includes(t)&&(t=C[t]),n.push(t)}let a=r.kL.filter((e=>n.includes(e[0].replace("#","").toLowerCase()))),l={},s={};a=a.map((o=>{let n=new Date(o[6]);if(n>e){let e=o[0].replace("#","").toLowerCase();Object.keys(O).includes(e)&&(e=O[e]),Object.keys(t).includes(e)&&(n=n.toLocaleDateString("en-US",{month:"short",year:"numeric"}),Object.keys(l).includes(n)||(l[n]=0),Object.keys(s).includes(n)||(s[n]=0),l[n]+=o[1]*t[e],s[n]+=o[2]*t[e])}}));const i=y(l),c=y(s);i[0].pop(),i[1].pop(),c[1].pop();const d=i[0].map((e=>e.substring(0,3)+" "+e.substring(6,8)));v(d,i[1],c[1])},b=(e,t,o)=>{const n=e.toLowerCase(),a=new Date(t),l=JSON.parse(localStorage.shares);Object.keys(C).includes(n)&&(e=C[n]);let s=r.kL;if("All Wells"!==e&&(s=s.filter((t=>t[0].replace("#","").toLowerCase()==e.toLowerCase()))),"All Wells"==e)return void S();s=s.map((e=>{let t=new Date(e[6]);if(t>a){const o=e[1]*l[n],a=e[2]*l[n];return t=t.toLocaleDateString("en-US",{month:"short",year:"numeric"}),[o,a,t]}})).filter((e=>void 0!==e)).map((e=>e.filter((e=>void 0!==e))));let i="Oil & Gas Production";0==s.length&&(i="No Production Data for this Time Period");let c=s.map((e=>e[0])),d=s.map((e=>e[1])),u=s.map((e=>e[2]));if(c.pop(),d.pop(),u.pop(),o.length!==u.length){const e=Math.abs(o.length-u.length);for(let t=e;t>0;t--)u.unshift(o[t-1]);c.unshift(...Array(e).fill(0)),d.unshift(...Array(e).fill(0))}v(u,c,d,i)},v=(e,t,o,n="Oil & Gas Production")=>{e=e.map((e=>e.length>6?e.replace("20",""):e));const a=(0,s.Ho)(e,t,"Oil [Bbls]","lines+markers","green",null),l=(0,s.Ho)(e,o,"Gas [Cf]","lines+markers","red",null),r={title:n,legend:{orientation:"h",y:1.2},xaxis:{dtick:2}};Plotly.newPlot("prodCurve",[a,l],r)},E=(e,t,o="P&L (ST only)")=>{const n=(0,s.Ho)(e,t,"P&L","lines+markers","black",null),a={title:o,yaxis:{tickformat:"$"},xaxis:{dtick:2}};Plotly.newPlot("returnsCurve",[n],a,s.vc)};function I(e){return e.replace(/^(.)|\s+(.)/g,(function(e){return e.toUpperCase()}))}const B=e=>{(e=Object.keys(e).sort()).unshift("All Wells"),f(e)},k={"cr 939h":"cr 939","bruce weaver 2":"bruce weaver 2 re"},C={"bruce weaver 2":"bruce weaver 2 re","burns ranch 2 1":"burns ranch 2","cr 939h":"cr 939","pfeiffer 2re":"pfeiffer 2"},O={"bruce weaver 2 re":"bruce weaver 2","burns ranch 2":"burns ranch 2 1","cr 939":"cr 939h","pfeiffer 2":"pfeiffer 2re"},j={Jan:"01",Feb:"02",Mar:"03",Apr:"04",May:"05",Jun:"06",Jul:"07",Aug:"08",Sep:"09",Oct:"10",Nov:"11",Dec:"12"},L=(0,a.N8)(),x=localStorage.getItem("uid");u();const _=document.getElementById("searchInput"),A=document.getElementById("well-list").getElementsByTagName("li");_.addEventListener("input",(function(){const e=_.value.toLowerCase();for(let t=0;t<A.length;t++)A[t].getElementsByTagName("span")[0].textContent.toLowerCase().includes(e)?A[t].style.display="block":A[t].style.display="none"})),document.getElementById("btnLogout").addEventListener("click",l.LS),(0,c.Ys)("#wellSelect").on("change",(()=>{let e=(0,c.Ys)("#wellSelect").node().value;w(e),b(e)})),document.getElementById("init_scale").addEventListener("click",(()=>{(0,i.by)()})),document.getElementById("init_time").addEventListener("click",(()=>{(0,i.eX)()})),document.getElementById("show_pwd_form_btn").addEventListener("click",(()=>{sessionStorage.changePwd="true",window.location.href="./index.html"}));const P=document.getElementById("sortBy");let T=sessionStorage.sortBy;P.innerHTML="Sorted: "+("pl"==T||null==T?"P&L ":"Alphabetically"),P.addEventListener("click",(()=>{let e=JSON.parse(localStorage.pl_data_wells),t="alp"==sessionStorage.sortBy?"pl":"alp";P.innerHTML="Sort: "+("alp"==t?"Alphabetically ":"P&L"),sessionStorage.sortBy=t,"alp"==t?B(e):g(e)})),window.onload=function(){let e="30 Days";0==localStorage.getItem("initTime")&&(e="Inception"),document.getElementById("init_scale").textContent=localStorage.getItem("initScale"),document.getElementById("init_time").textContent=e}(),t()}catch(N){t(N)}}))},448:(e,t,o)=>{o.d(t,{n:()=>n}),$(document).ready((function(){$("#header").load("../src/pages/header.html")}));const n=()=>{null==sessionStorage.getItem("regionName")&&(sessionStorage.setItem("regionName","South Texas"),sessionStorage.setItem("region","st")),console.log(sessionStorage.getItem("region")),document.getElementById("currField").innerText=sessionStorage.getItem("regionName"),document.querySelectorAll(".dropdown-item").forEach((e=>{e.addEventListener("click",(function(){sessionStorage.setItem("region",this.id),document.getElementById("currField").innerText=this.innerText,sessionStorage.setItem("regionName",this.innerText),sessionStorage.removeItem("siteSelection"),location.reload()}))}))}},914:(e,t,o)=>{o.d(t,{by:()=>a,eX:()=>n}),o(864),document.querySelector("#userEmail"),document.querySelector("#userPassword"),document.querySelector("#btnChangePwd"),document.querySelector("#new_pwd"),document.querySelector("#new_pwd_rpt"),document.querySelector("#btnBack"),document.querySelector("#btnLogin"),document.querySelector("#btnLogout"),document.getElementById("login"),document.getElementById("update-pwd"),document.querySelector("#divLoginError"),document.querySelector("#lblLoginErrorMessage"),document.querySelector("#divPwdError"),document.querySelector("#pwdErr");const n=()=>{0==localStorage.getItem("initTime")?($("#init_time").text("30 Days"),localStorage.setItem("initTime",31)):($("#init_time").text("Inception"),localStorage.setItem("initTime",0))},a=()=>{"linear"==localStorage.getItem("initScale")?($("#init_scale").text("Logarithmic"),localStorage.setItem("initScale","logarithmic")):($("#init_scale").text("Linear"),localStorage.setItem("initScale","linear"))}}},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return l[e](o,o.exports,s),o.exports}s.m=l,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},s.a=(a,l,r)=>{var s;r&&((s=[]).d=-1);var i,c,d,u=new Set,m=a.exports,p=new Promise(((e,t)=>{d=t,c=e}));p[t]=m,p[e]=e=>(s&&e(s),u.forEach(e),p.catch((e=>{}))),a.exports=p,l((a=>{var l;i=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var l=[];l.d=0,a.then((e=>{r[t]=e,n(l)}),(e=>{r[o]=e,n(l)}));var r={};return r[e]=e=>e(l),r}}var s={};return s[e]=e=>{},s[t]=a,s})))(a);var r=()=>i.map((e=>{if(e[o])throw e[o];return e[t]})),c=new Promise((t=>{(l=()=>t(r)).r=0;var o=e=>e!==s&&!u.has(e)&&(u.add(e),e&&!e.d&&(l.r++,e.push(l)));i.map((t=>t[e](o)))}));return l.r?c:r()}),(e=>(e?d(p[o]=e):c(m),n(s)))),s&&s.d<0&&(s.d=0)},a=[],s.O=(e,t,o,n)=>{if(!t){var l=1/0;for(d=0;d<a.length;d++){for(var[t,o,n]=a[d],r=!0,i=0;i<t.length;i++)(!1&n||l>=n)&&Object.keys(s.O).every((e=>s.O[e](t[i])))?t.splice(i--,1):(r=!1,n<l&&(l=n));if(r){a.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=a.length;d>0&&a[d-1][2]>n;d--)a[d]=a[d-1];a[d]=[t,o,n]},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={845:0};s.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[l,r,i]=o,c=0;if(l.some((t=>0!==e[t]))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(i)var d=i(s)}for(t&&t(o);c<l.length;c++)a=l[c],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(d)},o=self.webpackChunkprod_1=self.webpackChunkprod_1||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var i=s.O(void 0,[355,529,916],(()=>s(706)));i=s.O(i)})();