(()=>{"use strict";var e,t,o,a,n,r={353:(e,t,o)=>{o.d(t,{m_:()=>l});var a=o(977),n=o(864);const r=(0,a.ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),i=(0,n.v0)(r),l=()=>{i.onAuthStateChanged((e=>{if(e)console.log("user mon :>> ",e);else{console.log("none"),window.location.replace("index.html");const e=window.history.state;window.history.replaceState(e,"",window.location.href),window.onpopstate=function(){window.history.replaceState(e,"",window.location.href)}}}))}},199:(e,t,o)=>{o.a(e,(async(e,a)=>{try{o.d(t,{$g:()=>l,OJ:()=>s,R0:()=>f,bQ:()=>e,cm:()=>g,j6:()=>p,jD:()=>r,jw:()=>h,kL:()=>i,n1:()=>c,o8:()=>u,sb:()=>m,wL:()=>d});var n=o(976);const e=await(0,n.AVB)("../data/allProductionData.json").then((e=>e)),r=await(0,n.AVB)("../data/allProductionDataET.json").then((e=>e)),i=await(0,n.AVB)("../data/dataMonthlyST.json").then((e=>e)),l=await(0,n.AVB)("../data/dataMonthlyET.json").then((e=>e)),s=await(0,n.AVB)("../data/cumProd.json").then((e=>e)),c=await(0,n.AVB)("../data/cumProdET.json").then((e=>e)),d=(await(0,n.AVB)("../data/analyzeST.json").then((e=>e)),await(0,n.AVB)("../data/analyzeET.json").then((e=>e)),await(0,n.AVB)("../data/formations.json").then((e=>e))),u=(await(0,n.AVB)("../data/economics.json").then((e=>e)),await(0,n.AVB)("../data/payouts.json").then((e=>e))),h=(await(0,n.AVB)("../data/pumpInfo.json").then((e=>e)),await(0,n.AVB)("../data/legacyEcon.json").then((e=>e)),await(0,n.AVB)("../data\\pldata.json").then((e=>e)),await(0,n.gyn)("../data\\recYrProd.csv").then((e=>e)),()=>{let t=r;"et"!==sessionStorage.getItem("region")&&(t=e);const o=t[0][0],a=new Set;for(let e=0;e<t.length;e++){const n=t[e][0];if(a.add(n),n===o&0!==e)break}return a}),p=e=>{let t=(0,n.Ys)(e);h().forEach((e=>{t.append("option").text(e).property("Value",e)}))},m=e=>{const t=(0,n.Ys)("tbody");t.html(""),e.forEach((e=>{let o=t.append("tr");Object.values(e).forEach((e=>{o.append("td").text(e)}))}))},g=(e,t)=>{let o=(0,n.Ys)(t).property("value");return o?e.filter((e=>e[0]==o)):e},f=(e,t)=>{let o;event.preventDefault(),o=[...e].sort(((e,o)=>{const a=e[t];return o[t]-a})),m(o)};a()}catch(e){a(e)}}),1)},91:(e,t,o)=>{o.d(t,{Ho:()=>a});const a=(e,t,o,a="lines",n,r,i=!0,l)=>({x:e,y:t,text:r,name:o,visible:i,line:{color:n,dash:l},mode:a})},448:(e,t,o)=>{o.d(t,{n:()=>n}),$(document).ready((function(){$("#header").load("../src/pages/header.html",(function(){}))}));const a=()=>{let e=sessionStorage.getItem("region");"st"==e||null==e?(console.log("switching to east"),sessionStorage.setItem("region","et")):sessionStorage.setItem("region","st"),sessionStorage.removeItem("siteSelection"),location.reload()},n=()=>{let e=sessionStorage.getItem("region");const t=document.querySelector("#fieldTitle"),o=document.querySelector("#toggleRegion");o.addEventListener("click",a);const n=$(window).width();console.log("currRegion :>> ",e),"st"==e||null==e?(o.innerHTML="East Texas",t.textContent="South Texas Field",n<768&&(t.textContent="CML EXP - South Texas")):(o.innerHTML="South Texas",t.textContent="East Texas Field",n<768&&(t.textContent="CML EXP - East Texas"))}},558:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var a=o(353),n=o(448),r=o(199),i=o(976),l=o(91),s=e([r]);r=(s.then?(await s)():s)[0],(0,a.m_)(),(0,n.n)();let c=sessionStorage.getItem("region");const d="#siteFilter",u=()=>{let e,t=r.n1;return"et"!=c?(t=r.OJ,e=r.o8,e.forEach((e=>{t.forEach((t=>{if(t[0]==e["Well Name"]){let o=Math.round(100*e["% Payout"]);t.push(o)}}))})),t.forEach((e=>{e.push(r.wL[e[0]])}))):t.forEach((e=>{e.push(""),e.push(r.wL[e[0]])})),t.filter((e=>(0,r.jw)().has(e[0])))},h=e=>{let t="et"==c?r.$g:r.kL,o="et"==c?r.jD:r.bQ,a=t.filter((t=>t[0]==e)),n=o.filter((t=>t[0]==e));const i=a.map((e=>e[1]));var s=a.map((e=>e[6]));const d=n.map((e=>e[1])).reverse(),u=n.map((e=>e[2])).reverse(),h=i.reduce(((e,t,o)=>0===o?e.concat(t):e.concat(t+e[o-1])),[]),p=u.reduce(((e,t,o)=>0===o?e.concat(t):e.concat(t+e[o-1])),[]);var m=s.map((e=>new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})));m=m.slice(1),s.pop();const g=(0,l.Ho)(s,h,"Cuml Data","lines","green");h.pop(),i.pop();const f=(0,l.Ho)(h,i,"monthly","line","green",m),w=(0,l.Ho)(p,u,"daily","line","green",d),y=(0,l.Ho)(s,i,"Monthly Oil [BO]","line","green");var v=Math.max(...i),b=Math.max(...u),x=Math.floor(Math.log10(v))+1,S=[null,x,Math.floor(Math.log10(b))+1,x],j="South Texas Total"==e||"East Texas Total"==e?2:1,E=[s,h,p,s];let O=[[g],[f],[w],[y]];["cumlOilCurve","moProdVsCumCurve","dailyProdVsCumCurve","moOilCurve"].forEach(((e,t)=>{let o=[1,2,3].includes(t)?"log":null,a="log"==o?[0,1,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1e3,2e3,3e3,4e3,5e3,6e3,7e3,8e3,9e3,1e4,2e4,3e4,4e4,5e4,6e4,7e4,8e4,9e4,1e5,2e5,3e5,4e5,5e5,6e5,7e5,8e5,9e5,1e6]:"auto",n="log"==o?[0,1,10,"","","","","","","","",100,"","","","","","","","",1e3,"","","","","","","","",1e4,"","","","","","","","",1e5,"","","","","","","","",1e6]:"auto";var r={title:["Time vs Cumulative Oil","Cumulative Oil vs Monthly Oil Production","Cumulative Oil vs Daily Oil Production","Monthly Oil vs Time (BOPM)"][t],xaxis:{range:[E[t][0],E[t][E[t].length-1]],showline:"log"==o,gridcolor:"darkgray"},yaxis:{range:"log"==o?[j,S[t]]:[0,h[h.length-1]+500],type:o,tickvals:a,ticktext:n,showline:!0,gridcolor:"darkgray"}};Plotly.newPlot(e,O[t],r)}))},p=u();document.getElementById("Payfilter").onclick=function(){(0,r.R0)(p,4)},document.getElementById("Prodfilter").onclick=function(){(0,r.R0)(p,1)},(0,i.Ys)(d).on("change",(()=>{(0,r.sb)((0,r.cm)(p,d)),h((0,i.Ys)(d).node().value)})),document.getElementById("clearFilter").onclick=function(){(0,r.sb)(p)},window.onload=((0,r.sb)(p),void(0,r.j6)(d)),t()}catch(e){t(e)}}))},976:(e,t,o)=>{o.d(t,{AVB:()=>a.AV,Ys:()=>n.Ys,gyn:()=>a.gy}),o(684);var a=o(19),n=o(997);o(286),o(964)},864:(e,t,o)=>{o.d(t,{v0:()=>a.v0});var a=o(924)}},i={};function l(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={exports:{}};return r[e](o,o.exports,l),o.exports}l.m=r,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},l.a=(n,r,i)=>{var l;i&&((l=[]).d=-1);var s,c,d,u=new Set,h=n.exports,p=new Promise(((e,t)=>{d=t,c=e}));p[t]=h,p[e]=e=>(l&&e(l),u.forEach(e),p.catch((e=>{}))),n.exports=p,r((n=>{var r;s=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var r=[];r.d=0,n.then((e=>{i[t]=e,a(r)}),(e=>{i[o]=e,a(r)}));var i={};return i[e]=e=>e(r),i}}var l={};return l[e]=e=>{},l[t]=n,l})))(n);var i=()=>s.map((e=>{if(e[o])throw e[o];return e[t]})),c=new Promise((t=>{(r=()=>t(i)).r=0;var o=e=>e!==l&&!u.has(e)&&(u.add(e),e&&!e.d&&(r.r++,e.push(r)));s.map((t=>t[e](o)))}));return r.r?c:i()}),(e=>(e?d(p[o]=e):c(h),a(l)))),l&&l.d<0&&(l.d=0)},n=[],l.O=(e,t,o,a)=>{if(!t){var r=1/0;for(d=0;d<n.length;d++){for(var[t,o,a]=n[d],i=!0,s=0;s<t.length;s++)(!1&a||r>=a)&&Object.keys(l.O).every((e=>l.O[e](t[s])))?t.splice(s--,1):(i=!1,a<r&&(r=a));if(i){n.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var d=n.length;d>0&&n[d-1][2]>a;d--)n[d]=n[d-1];n[d]=[t,o,a]},l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={986:0};l.O.j=t=>0===e[t];var t=(t,o)=>{var a,n,[r,i,s]=o,c=0;if(r.some((t=>0!==e[t]))){for(a in i)l.o(i,a)&&(l.m[a]=i[a]);if(s)var d=s(l)}for(t&&t(o);c<r.length;c++)n=r[c],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(d)},o=self.webpackChunkprod_1=self.webpackChunkprod_1||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var s=l.O(void 0,[355,529,924,444],(()=>l(558)));s=l.O(s)})();