(()=>{"use strict";var e,t,a,o,n,r={353:(e,t,a)=>{a.d(t,{m_:()=>l});var o=a(977),n=a(864);const r=(0,o.ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),i=(0,n.v0)(r),l=()=>{i.onAuthStateChanged((e=>{if(e)console.log("user mon :>> ",e);else{console.log("none"),window.location.replace("index.html");const e=window.history.state;window.history.replaceState(e,"",window.location.href),window.onpopstate=function(){window.history.replaceState(e,"",window.location.href)}}}))}},199:(e,t,a)=>{a.a(e,(async(e,o)=>{try{a.r(t),a.d(t,{activeWells:()=>B,analyzeDataET:()=>p,analyzeDataST:()=>i,buildTable:()=>O,dataCumlET:()=>u,dataCumlGC:()=>y,dataCumlNM:()=>f,dataCumlST:()=>r,dataCumlWT:()=>w,dataET:()=>d,dataGC:()=>g,dataNM:()=>h,dataST:()=>e,dataWT:()=>v,dropdown:()=>C,econ:()=>T,filterData:()=>x,formations:()=>j,legacyEcon:()=>b,moDataET:()=>m,moDataST:()=>l,newProd:()=>c,payout:()=>S,pl23_22:()=>E,pump:()=>s,sortData:()=>A});var n=a(976);const e=await(0,n.AVB)("../data/ST/prodST.json").then((e=>e)),r=await(0,n.AVB)("../data/ST/cumlProdST.json").then((e=>e)),i=await(0,n.AVB)("../data/ST/analyzeST.json").then((e=>e)),l=await(0,n.AVB)("../data/ST/dataMonthlyST.json").then((e=>e)),s=await(0,n.AVB)("../data/ST/pumpInfo.json").then((e=>e)),c=await(0,n.gyn)("../data\\ST/recYrProd.csv").then((e=>e)),d=await(0,n.AVB)("../data/ET/prodET.json").then((e=>e)),u=await(0,n.AVB)("../data/ET/cumlProdET.json").then((e=>e)),m=await(0,n.AVB)("../data/ET/dataMonthlyET.json").then((e=>e)),p=await(0,n.AVB)("../data/ET/analyzeET.json").then((e=>e)),h=await(0,n.AVB)("../data/NM/prodNM.json").then((e=>e)),f=await(0,n.AVB)("../data/NM/cumlProdNM.json").then((e=>e)),g=await(0,n.AVB)("../data/GC/prodGC.json").then((e=>e)),y=await(0,n.AVB)("../data/GC/cumlProdGC.json").then((e=>e)),v=await(0,n.AVB)("../data/WT/prodWT.json").then((e=>e)),w=await(0,n.AVB)("../data/WT/cumlProdWT.json").then((e=>e)),T=await(0,n.AVB)("../data/econ/economics.json").then((e=>e)),S=await(0,n.AVB)("../data/econ/payouts.json").then((e=>e)),b=await(0,n.AVB)("../data/econ/legacyEcon.json").then((e=>e)),E=await(0,n.AVB)("../data\\econ/pldata.json").then((e=>e)),j=await(0,n.AVB)("../data/misc/formations.json").then((e=>e)),B=()=>{let t=sessionStorage.region,a=e;"ET"==t&&(a=d),"GC"==t&&(a=g),"WT"==t&&(a=v),"NM"==t&&(a=h);const o=a[0][0],n=new Set;for(let e=0;e<a.length;e++){const t=a[e][0];if(n.add(t),t===o&0!==e)break}return n},C=e=>{let t=(0,n.Ys)(e);B().forEach((e=>{t.append("option").text(e).property("Value",e)}))},O=e=>{const t=(0,n.Ys)("tbody");t.html(""),e.forEach((e=>{let a=t.append("tr");Object.values(e).forEach((e=>{a.append("td").text(e)}))}))},x=(e,t)=>{let a=(0,n.Ys)(t).property("value");return a?e.filter((e=>e[0]==a)):e},A=(e,t)=>{let a;event.preventDefault(),a=[...e].sort(((e,a)=>{const o=e[t];return a[t]-o})),O(a)};o()}catch(e){o(e)}}),1)},91:(e,t,a)=>{a.d(t,{Ho:()=>o});const o=(e,t,a,o="lines",n,r,i=!0,l)=>({x:e,y:t,text:r,name:a,visible:i,line:{color:n,dash:l},mode:o})},448:(e,t,a)=>{a.d(t,{n:()=>o}),$(document).ready((function(){$("#header").load("../src/pages/header.html")}));const o=()=>{null==sessionStorage.getItem("regionName")&&(sessionStorage.setItem("regionName","South Texas"),sessionStorage.setItem("region","ST")),console.log(sessionStorage.getItem("region")),document.getElementById("currField").innerText=sessionStorage.getItem("regionName"),document.querySelectorAll(".dropdown-item").forEach((e=>{e.addEventListener("click",(function(){sessionStorage.setItem("region",this.id),document.getElementById("currField").innerText=this.innerText,sessionStorage.setItem("regionName",this.innerText),sessionStorage.removeItem("siteSelection"),location.reload()}))}))}},558:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var o=a(353),n=a(448),r=a(199),i=a(976),l=a(91),s=e([r]);r=(s.then?(await s)():s)[0],(0,o.m_)(),(0,n.n)();let c=sessionStorage.getItem("region");const d="#siteFilter";let u=r[`data${c}`],m=r[`moData${c}`],p=r[`dataCuml${c}`],h=r.payout;const f=()=>("ET"!=c?(h.forEach((e=>{p.forEach((t=>{if(t[0]==e["Well Name"]){let a=Math.round(100*e["% Payout"]);t.push(a)}}))})),p.forEach((e=>{e.push(r.formations[e[0]])}))):p.forEach((e=>{e.push(""),e.push(r.formations[e[0]])})),p.filter((e=>r.activeWells().has(e[0])))),g=e=>{let t=m.filter((t=>t[0]==e)),a=u.filter((t=>t[0]==e));const o=t.map((e=>e[1]));var n=t.map((e=>e[6]));const r=a.map((e=>e[1])).reverse(),i=a.map((e=>e[2])).reverse(),s=o.reduce(((e,t,a)=>0===a?e.concat(t):e.concat(t+e[a-1])),[]),c=i.reduce(((e,t,a)=>0===a?e.concat(t):e.concat(t+e[a-1])),[]);var d=n.map((e=>new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})));d=d.slice(1),n.pop();const p=(0,l.Ho)(n,s,"Cuml Data","lines","green");s.pop(),o.pop();const h=(0,l.Ho)(s,o,"monthly","line","green",d),f=(0,l.Ho)(c,i,"daily","line","green",r),g=(0,l.Ho)(n,o,"Monthly Oil [BO]","line","green");var y=Math.max(...o),v=Math.max(...i),w=Math.floor(Math.log10(y))+1,T=[null,w,Math.floor(Math.log10(v))+1,w],S="South Texas Total"==e||"East Texas Total"==e?2:1,b=[n,s,c,n];let E=[[p],[h],[f],[g]];["cumlOilCurve","moProdVsCumCurve","dailyProdVsCumCurve","moOilCurve"].forEach(((e,t)=>{let a=[1,2,3].includes(t)?"log":null,o="log"==a?[0,1,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1e3,2e3,3e3,4e3,5e3,6e3,7e3,8e3,9e3,1e4,2e4,3e4,4e4,5e4,6e4,7e4,8e4,9e4,1e5,2e5,3e5,4e5,5e5,6e5,7e5,8e5,9e5,1e6]:"auto",n="log"==a?[0,1,10,"","","","","","","","",100,"","","","","","","","",1e3,"","","","","","","","",1e4,"","","","","","","","",1e5,"","","","","","","","",1e6]:"auto";var r={title:["Time vs Cumulative Oil","Cumulative Oil vs Monthly Oil Production","Cumulative Oil vs Daily Oil Production","Monthly Oil vs Time (BOPM)"][t],xaxis:{range:[b[t][0],b[t][b[t].length-1]],showline:"log"==a,gridcolor:"darkgray"},yaxis:{range:"log"==a?[S,T[t]]:[0,s[s.length-1]+500],type:a,tickvals:o,ticktext:n,showline:!0,gridcolor:"darkgray"}};Plotly.newPlot(e,E[t],r)}))};p=f(),document.getElementById("Payfilter").onclick=function(){r.sortData(p,4)},document.getElementById("Prodfilter").onclick=function(){r.sortData(p,1)},(0,i.Ys)(d).on("change",(()=>{r.buildTable(r.filterData(p,d)),g((0,i.Ys)(d).node().value)})),document.getElementById("clearFilter").onclick=function(){r.buildTable(p)},window.onload=(r.buildTable(p),void r.dropdown(d)),t()}catch(e){t(e)}}))},976:(e,t,a)=>{a.d(t,{AVB:()=>o.AV,Ys:()=>n.Ys,gyn:()=>o.gy}),a(684);var o=a(19),n=a(997);a(286),a(964)},864:(e,t,a)=>{a.d(t,{v0:()=>o.v0});var o=a(924)}},i={};function l(e){var t=i[e];if(void 0!==t)return t.exports;var a=i[e]={exports:{}};return r[e](a,a.exports,l),a.exports}l.m=r,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",a="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},l.a=(n,r,i)=>{var l;i&&((l=[]).d=-1);var s,c,d,u=new Set,m=n.exports,p=new Promise(((e,t)=>{d=t,c=e}));p[t]=m,p[e]=e=>(l&&e(l),u.forEach(e),p.catch((e=>{}))),n.exports=p,r((n=>{var r;s=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var r=[];r.d=0,n.then((e=>{i[t]=e,o(r)}),(e=>{i[a]=e,o(r)}));var i={};return i[e]=e=>e(r),i}}var l={};return l[e]=e=>{},l[t]=n,l})))(n);var i=()=>s.map((e=>{if(e[a])throw e[a];return e[t]})),c=new Promise((t=>{(r=()=>t(i)).r=0;var a=e=>e!==l&&!u.has(e)&&(u.add(e),e&&!e.d&&(r.r++,e.push(r)));s.map((t=>t[e](a)))}));return r.r?c:i()}),(e=>(e?d(p[a]=e):c(m),o(l)))),l&&l.d<0&&(l.d=0)},n=[],l.O=(e,t,a,o)=>{if(!t){var r=1/0;for(d=0;d<n.length;d++){for(var[t,a,o]=n[d],i=!0,s=0;s<t.length;s++)(!1&o||r>=o)&&Object.keys(l.O).every((e=>l.O[e](t[s])))?t.splice(s--,1):(i=!1,o<r&&(r=o));if(i){n.splice(d--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=n.length;d>0&&n[d-1][2]>o;d--)n[d]=n[d-1];n[d]=[t,a,o]},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={986:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var o,n,[r,i,s]=a,c=0;if(r.some((t=>0!==e[t]))){for(o in i)l.o(i,o)&&(l.m[o]=i[o]);if(s)var d=s(l)}for(t&&t(a);c<r.length;c++)n=r[c],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(d)},a=self.webpackChunkprod_1=self.webpackChunkprod_1||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var s=l.O(void 0,[355,529,444,924],(()=>l(558)));s=l.O(s)})();