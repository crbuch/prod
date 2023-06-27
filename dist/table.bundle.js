(()=>{"use strict";var e,t,o,a,n,r={353:(e,t,o)=>{o.d(t,{m_:()=>s});var a=o(977),n=o(864);const r=(0,a.ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),i=(0,n.v0)(r),s=()=>{i.onAuthStateChanged((e=>{if(e)console.log("user mon :>> ",e);else{console.log("none"),window.location.replace("index.html");const e=window.history.state;window.history.replaceState(e,"",window.location.href),window.onpopstate=function(){window.history.replaceState(e,"",window.location.href)}}}))}},199:(e,t,o)=>{o.a(e,(async(e,a)=>{try{o.d(t,{OJ:()=>s,R0:()=>m,bQ:()=>e,cm:()=>p,j6:()=>u,jw:()=>d,kL:()=>r,n1:()=>l,o8:()=>c,sb:()=>h});var n=o(976);const e=await(0,n.AVB)("../data/allProductionData.json").then((e=>e)),r=await(0,n.AVB)("../data/dataMonthlyST.json").then((e=>e)),i=await(0,n.AVB)("../data/allProductionDataET.json").then((e=>e)),s=await(0,n.AVB)("../data/cumProd.json").then((e=>e)),l=await(0,n.AVB)("../data/cumProdET.json").then((e=>e)),c=(await(0,n.AVB)("../data/analyze.json").then((e=>e)),await(0,n.AVB)("../data/analyzeET.json").then((e=>e)),await(0,n.AVB)("../data/formations.json").then((e=>e)),await(0,n.AVB)("../data/economics.json").then((e=>e)),await(0,n.AVB)("../data/payouts.json").then((e=>e))),d=(await(0,n.AVB)("../data/pumpInfo.json").then((e=>e)),await(0,n.AVB)("../data/legacyEcon.json").then((e=>e)),await(0,n.AVB)("../data\\pldata.json").then((e=>e)),await(0,n.gyn)("../data\\newProd.csv").then((e=>e)),()=>{let t=i;"et"!==sessionStorage.getItem("region")&&(t=e);const o=t[0][0],a=new Set;for(let e=0;e<t.length;e++){const n=t[e][0];if(a.add(n),n===o&0!==e)break}return a}),u=e=>{let t=(0,n.Ys)(e);d().forEach((e=>{t.append("option").text(e).property("Value",e)}))},h=e=>{const t=(0,n.Ys)("tbody");t.html(""),e.forEach((e=>{let o=t.append("tr");Object.values(e).forEach((e=>{o.append("td").text(e)}))}))},p=(e,t)=>{let o=(0,n.Ys)(t).property("value");return o?e.filter((e=>e[0]==o)):e},m=(e,t)=>{let o;event.preventDefault(),o=[...e].sort(((e,o)=>{const a=e[t];return o[t]-a})),h(o)};a()}catch(e){a(e)}}),1)},91:(e,t,o)=>{o.d(t,{Ho:()=>a});const a=(e,t,o,a="lines",n,r,i=!0,s)=>({x:e,y:t,text:r,name:o,visible:i,line:{color:n,dash:s},mode:a})},448:(e,t,o)=>{o.d(t,{n:()=>n}),$(document).ready((function(){$("#header").load("../src/pages/header.html",(function(){}))}));const a=()=>{let e=sessionStorage.getItem("region");"st"==e||null==e?(console.log("switching to east"),sessionStorage.setItem("region","et")):sessionStorage.setItem("region","st"),sessionStorage.removeItem("siteSelection"),location.reload()},n=()=>{let e=sessionStorage.getItem("region");const t=document.querySelector("#fieldTitle"),o=document.querySelector("#toggleRegion");o.addEventListener("click",a);const n=$(window).width();console.log("currRegion :>> ",e),"st"==e||null==e?(o.innerHTML="East Texas",t.textContent="South Texas Field",n<768&&(t.textContent="CML EXP - South Texas")):(o.innerHTML="South Texas",t.textContent="East Texas Field",n<768&&(t.textContent="CML EXP - East Texas"))}},558:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var a=o(353),n=o(448),r=o(199),i=o(976),s=o(91),l=e([r]);r=(l.then?(await l)():l)[0],(0,a.m_)(),(0,n.n)();let c=sessionStorage.getItem("region");const d="#siteFilter",u=()=>{let e,t=r.n1;return"et"!=c&&(t=r.OJ,e=r.o8,e.forEach((e=>{t.forEach((t=>{if(t[0]==e["Well Name"]){let o=Math.round(100*e["% Payout"]);t.push(o)}}))}))),t.forEach((e=>{let t=e[4];e[4]=e[5],e[5]=t})),t.filter((e=>(0,r.jw)().has(e[0])))},h=e=>{let t=r.kL.filter((t=>t[0]==e)),o=r.bQ.filter((t=>t[0]==e));const a=t.map((e=>e[1])),n=t.map((e=>e[6])),i=o.map((e=>e[1])).reverse(),l=a.reduce(((e,t,o)=>0===o?e.concat(t):e.concat(t+e[o-1])),[]),c=o.map((e=>e[2])).reverse(),d=c.reduce(((e,t,o)=>0===o?e.concat(t):e.concat(t+e[o-1])),[]),u=n.map((e=>new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})));let h=[[(0,s.Ho)(n,l,"Cuml Data","lines","green")],[(0,s.Ho)(d,c,"hi","line","green",i)],[(0,s.Ho)(l,a,"hello","line","green",u)]];["cumlOilCurve","dailyProdVsCumCurve","moProdVsCumCurve"].forEach(((e,t)=>{let o=[1,2].includes(t)?"log":null;var a={title:["Cumulative Oil vs Time","Cumulative Oil vs Daily Oil Production","Cumulative Oil vs Monthly Oil Production"][t],xaxis:{autorange:!0,showline:"log"==o,gridcolor:"darkgray"},yaxis:{autorange:!0,type:o,gridcolor:"darkgray"}};Plotly.newPlot(e,h[t],a)}))};h("Aaron #1");const p=u();document.getElementById("Payfilter").onclick=function(){(0,r.R0)(p,4)},document.getElementById("Prodfilter").onclick=function(){(0,r.R0)(p,1)},(0,i.Ys)(d).on("change",(()=>{(0,r.sb)((0,r.cm)(p,d)),h((0,i.Ys)(d).node().value)})),document.getElementById("clearFilter").onclick=function(){(0,r.sb)(p)},window.onload=((0,r.sb)(p),void(0,r.j6)(d)),t()}catch(e){t(e)}}))},976:(e,t,o)=>{o.d(t,{AVB:()=>a.AV,Ys:()=>n.Ys,gyn:()=>a.gy}),o(684);var a=o(19),n=o(997);o(286),o(964)},864:(e,t,o)=>{o.d(t,{v0:()=>a.v0});var a=o(924)}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={exports:{}};return r[e](o,o.exports,s),o.exports}s.m=r,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},s.a=(n,r,i)=>{var s;i&&((s=[]).d=-1);var l,c,d,u=new Set,h=n.exports,p=new Promise(((e,t)=>{d=t,c=e}));p[t]=h,p[e]=e=>(s&&e(s),u.forEach(e),p.catch((e=>{}))),n.exports=p,r((n=>{var r;l=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var r=[];r.d=0,n.then((e=>{i[t]=e,a(r)}),(e=>{i[o]=e,a(r)}));var i={};return i[e]=e=>e(r),i}}var s={};return s[e]=e=>{},s[t]=n,s})))(n);var i=()=>l.map((e=>{if(e[o])throw e[o];return e[t]})),c=new Promise((t=>{(r=()=>t(i)).r=0;var o=e=>e!==s&&!u.has(e)&&(u.add(e),e&&!e.d&&(r.r++,e.push(r)));l.map((t=>t[e](o)))}));return r.r?c:i()}),(e=>(e?d(p[o]=e):c(h),a(s)))),s&&s.d<0&&(s.d=0)},n=[],s.O=(e,t,o,a)=>{if(!t){var r=1/0;for(d=0;d<n.length;d++){for(var[t,o,a]=n[d],i=!0,l=0;l<t.length;l++)(!1&a||r>=a)&&Object.keys(s.O).every((e=>s.O[e](t[l])))?t.splice(l--,1):(i=!1,a<r&&(r=a));if(i){n.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var d=n.length;d>0&&n[d-1][2]>a;d--)n[d]=n[d-1];n[d]=[t,o,a]},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={986:0};s.O.j=t=>0===e[t];var t=(t,o)=>{var a,n,[r,i,l]=o,c=0;if(r.some((t=>0!==e[t]))){for(a in i)s.o(i,a)&&(s.m[a]=i[a]);if(l)var d=l(s)}for(t&&t(o);c<r.length;c++)n=r[c],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(d)},o=self.webpackChunkprod_1=self.webpackChunkprod_1||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var l=s.O(void 0,[355,529,444,924],(()=>s(558)));l=s.O(l)})();