(()=>{"use strict";var e,t,a,o,n,r={353:(e,t,a)=>{a.d(t,{m_:()=>s});var o=a(977),n=a(864);const r=(0,o.ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),i=(0,n.v0)(r),s=()=>{i.onAuthStateChanged((e=>{if(e)console.log("user mon :>> ",e);else{console.log("none"),window.location.replace("index.html");const e=window.history.state;window.history.replaceState(e,"",window.location.href),window.onpopstate=function(){window.history.replaceState(e,"",window.location.href)}}}))}},199:(e,t,a)=>{a.a(e,(async(e,o)=>{try{a.r(t),a.d(t,{activeWells:()=>B,analyzeDataET:()=>m,analyzeDataST:()=>i,buildTable:()=>V,dataCumlET:()=>u,dataCumlGC:()=>y,dataCumlNM:()=>w,dataCumlST:()=>r,dataCumlWT:()=>T,dataET:()=>c,dataGC:()=>f,dataNM:()=>h,dataST:()=>e,dataWT:()=>g,dropdown:()=>A,econ:()=>b,filterData:()=>_,formations:()=>E,legacyEcon:()=>v,moDataET:()=>p,moDataST:()=>s,newProd:()=>l,payout:()=>S,pl23_22:()=>j,pump:()=>d,sortData:()=>I});var n=a(976);const e=await(0,n.AVB)("../data/ST/prodST.json").then((e=>e)),r=await(0,n.AVB)("../data/ST/cumlProdST.json").then((e=>e)),i=await(0,n.AVB)("../data/ST/analyzeST.json").then((e=>e)),s=await(0,n.AVB)("../data/ST/dataMonthlyST.json").then((e=>e)),d=await(0,n.AVB)("../data/ST/pumpInfo.json").then((e=>e)),l=await(0,n.gyn)("../data\\ST/recYrProd.csv").then((e=>e)),c=await(0,n.AVB)("../data/ET/prodET.json").then((e=>e)),u=await(0,n.AVB)("../data/ET/cumlProdET.json").then((e=>e)),p=await(0,n.AVB)("../data/ET/dataMonthlyET.json").then((e=>e)),m=await(0,n.AVB)("../data/ET/analyzeET.json").then((e=>e)),h=await(0,n.AVB)("../data/NM/prodNM.json").then((e=>e)),w=await(0,n.AVB)("../data/NM/cumlProdNM.json").then((e=>e)),f=await(0,n.AVB)("../data/GC/prodGC.json").then((e=>e)),y=await(0,n.AVB)("../data/GC/cumlProdGC.json").then((e=>e)),g=await(0,n.AVB)("../data/WT/prodWT.json").then((e=>e)),T=await(0,n.AVB)("../data/WT/cumlProdWT.json").then((e=>e)),b=await(0,n.AVB)("../data/econ/economics.json").then((e=>e)),S=await(0,n.AVB)("../data/econ/payouts.json").then((e=>e)),v=await(0,n.AVB)("../data/econ/legacyEcon.json").then((e=>e)),j=await(0,n.AVB)("../data\\econ/pldata.json").then((e=>e)),E=await(0,n.AVB)("../data/misc/formations.json").then((e=>e)),B=()=>{let t=sessionStorage.region,a=e;"ET"==t&&(a=c),"GC"==t&&(a=f),"WT"==t&&(a=g),"NM"==t&&(a=h);const o=a[0][0],n=new Set;for(let e=0;e<a.length;e++){const t=a[e][0];if("Cornett #1 Swd"!==t&&n.add(t),t===o&0!==e)break}return n},A=e=>{let t=(0,n.Ys)(e);B().forEach((e=>{t.append("option").text(e).property("Value",e)}))},V=e=>{console.log("allData"),console.log(e);const t=(0,n.Ys)("tbody");t.html(""),e.forEach((e=>{let a=t.append("tr");Object.values(e).forEach((e=>{a.append("td").text(e)}))}))},_=(e,t)=>{let a=(0,n.Ys)(t).property("value");return a?e.filter((e=>e[0]==a)):e},I=(e,t)=>{let a;event.preventDefault(),a=[...e].sort(((e,a)=>{const o=e[t];return a[t]-o})),V(a)};o()}catch(e){o(e)}}),1)},448:(e,t,a)=>{a.d(t,{n:()=>o}),$(document).ready((function(){$("#header").load("../src/pages/header.html")}));const o=()=>{null==sessionStorage.getItem("regionName")&&(sessionStorage.setItem("regionName","South Texas"),sessionStorage.setItem("region","ST")),console.log(sessionStorage.getItem("region")),document.getElementById("currField").innerText=sessionStorage.getItem("regionName"),document.querySelectorAll(".dropdown-item").forEach((e=>{e.addEventListener("click",(function(){sessionStorage.setItem("region",this.id),document.getElementById("currField").innerText=this.innerText,sessionStorage.setItem("regionName",this.innerText),sessionStorage.removeItem("siteSelection"),location.reload()}))}))}},346:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var o=a(199),n=a(353),r=a(448),i=a(976),s=e([o]);o=(s.then?(await s)():s)[0],(0,n.m_)(),(0,r.n)();const d=e=>{const t=e[0][1];return e.filter((e=>e[1]===t)).map((([e,,t,a,o,n,,r])=>[e,t,a,o,n,r]))},l="#wellFilter";let c=sessionStorage.getItem("region");const u=d(o[`data${c}`]);document.getElementById("Prodfilter").onclick=function(){o.sortData(u,1)},document.getElementById("clearFilter").onclick=function(){o.buildTable(u)},(0,i.Ys)(l).on("change",(()=>{o.buildTable(o.filterData(u,l))})),window.onload=(o.buildTable(u),void o.dropdown(l)),t()}catch(e){t(e)}}))},976:(e,t,a)=>{a.d(t,{AVB:()=>o.AV,Ys:()=>n.Ys,gyn:()=>o.gy}),a(684);var o=a(19),n=a(997);a(286),a(964)},864:(e,t,a)=>{a.d(t,{v0:()=>o.v0});var o=a(924)}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var a=i[e]={exports:{}};return r[e](a,a.exports,s),a.exports}s.m=r,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",a="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},s.a=(n,r,i)=>{var s;i&&((s=[]).d=-1);var d,l,c,u=new Set,p=n.exports,m=new Promise(((e,t)=>{c=t,l=e}));m[t]=p,m[e]=e=>(s&&e(s),u.forEach(e),m.catch((e=>{}))),n.exports=m,r((n=>{var r;d=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var r=[];r.d=0,n.then((e=>{i[t]=e,o(r)}),(e=>{i[a]=e,o(r)}));var i={};return i[e]=e=>e(r),i}}var s={};return s[e]=e=>{},s[t]=n,s})))(n);var i=()=>d.map((e=>{if(e[a])throw e[a];return e[t]})),l=new Promise((t=>{(r=()=>t(i)).r=0;var a=e=>e!==s&&!u.has(e)&&(u.add(e),e&&!e.d&&(r.r++,e.push(r)));d.map((t=>t[e](a)))}));return r.r?l:i()}),(e=>(e?c(m[a]=e):l(p),o(s)))),s&&s.d<0&&(s.d=0)},n=[],s.O=(e,t,a,o)=>{if(!t){var r=1/0;for(c=0;c<n.length;c++){for(var[t,a,o]=n[c],i=!0,d=0;d<t.length;d++)(!1&o||r>=o)&&Object.keys(s.O).every((e=>s.O[e](t[d])))?t.splice(d--,1):(i=!1,o<r&&(r=o));if(i){n.splice(c--,1);var l=a();void 0!==l&&(e=l)}}return e}o=o||0;for(var c=n.length;c>0&&n[c-1][2]>o;c--)n[c]=n[c-1];n[c]=[t,a,o]},s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={417:0};s.O.j=t=>0===e[t];var t=(t,a)=>{var o,n,[r,i,d]=a,l=0;if(r.some((t=>0!==e[t]))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(d)var c=d(s)}for(t&&t(a);l<r.length;l++)n=r[l],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(c)},a=self.webpackChunkprod_1=self.webpackChunkprod_1||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var d=s.O(void 0,[355,529,444,924],(()=>s(346)));d=s.O(d)})();