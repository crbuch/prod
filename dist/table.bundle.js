(()=>{"use strict";var e,t,o,r,n,a,l,i={611:(e,t,o)=>{var r=o(977),n=o(924);const a=(0,r.ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),l=(0,n.v0)(a);$(document).ready((function(){$("#header").load("../src/pages/header.html")}));const i=()=>{null==sessionStorage.getItem("regionName")&&(sessionStorage.setItem("regionName","South Texas"),sessionStorage.setItem("region","ST")),document.getElementById("currField").innerText=sessionStorage.getItem("regionName"),document.querySelectorAll(".dropdown-item").forEach((e=>{e.addEventListener("click",(function(){sessionStorage.setItem("region",this.id),document.getElementById("currField").innerText=this.innerText,sessionStorage.setItem("regionName",this.innerText),sessionStorage.removeItem("siteSelection"),location.reload()}))}))};var c=o(976);const u=e=>{const t=e[0][0],o=new Set;for(let r=0;r<e.length;r++){const n=e[r][0];if("Cornett #1 Swd"!==n&&o.add(n),n===t&0!==r)break}return o},s=e=>{console.log("allData"),console.log(e);const t=(0,c.Ys)("tbody");t.html(""),e.forEach((e=>{let o=t.append("tr");Object.values(e).forEach((e=>{o.append("td").text(e)}))}))},d=(e,t)=>{let o;event.preventDefault(),o=[...e].sort(((e,o)=>{const r=e[t];return o[t]-r})),s(o)},m=(e,t,o,r="lines",n,a,l=!0,i)=>({x:e,y:t,text:a,name:o,visible:l,line:{color:n,dash:i},mode:r});l.onAuthStateChanged((e=>{if(e)console.log("user mon :>> ",e);else{console.log("none"),window.location.replace("index.html");const e=window.history.state;window.history.replaceState(e,"",window.location.href),window.onpopstate=function(){window.history.replaceState(e,"",window.location.href)}}}));const p="#siteFilter";let h;$(document).ready((function(){$("#header").load("../src/pages/header.html",(()=>{console.log("loaded header"),i()}))})),document.getElementById("Payfilter").onclick=function(){d(h.cuml,4)},document.getElementById("Prodfilter").onclick=function(){d(h.cuml,1)},(0,c.Ys)(p).on("change",(()=>{s(((e,t)=>{let o=(0,c.Ys)(t).property("value");return o?e.filter((e=>e[0]==o)):e})(h.cuml,p)),((e,t)=>{let o=t.mnth.filter((t=>t[0]==e)),r=t.prod.filter((t=>t[0]==e));const n=o.map((e=>e[1]));var a=o.map((e=>e[6]));const l=r.map((e=>e[1])).reverse(),i=r.map((e=>e[2])).reverse(),c=n.reduce(((e,t,o)=>0===o?e.concat(t):e.concat(t+e[o-1])),[]),u=i.reduce(((e,t,o)=>0===o?e.concat(t):e.concat(t+e[o-1])),[]);var s=a.map((e=>new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})));s=s.slice(1),a.pop();const d=m(a,c,"Cuml Data","lines","green");c.pop(),n.pop();const p=m(c,n,"monthly","line","green",s),h=m(u,i,"daily","line","green",l),f=m(a,n,"Monthly Oil [BO]","line","green");var g=Math.max(...n),v=Math.max(...i),y=Math.floor(Math.log10(g))+1,b=[null,y,Math.floor(Math.log10(v))+1,y],w="South Texas Total"==e||"East Texas Total"==e?2:1,S=[a,c,u,a];let T=[[d],[p],[h],[f]];["cumlOilCurve","moProdVsCumCurve","dailyProdVsCumCurve","moOilCurve"].forEach(((e,t)=>{let o=[1,2,3].includes(t)?"log":null,r="log"==o?[0,1,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1e3,2e3,3e3,4e3,5e3,6e3,7e3,8e3,9e3,1e4,2e4,3e4,4e4,5e4,6e4,7e4,8e4,9e4,1e5,2e5,3e5,4e5,5e5,6e5,7e5,8e5,9e5,1e6]:"auto",n="log"==o?[0,1,10,"","","","","","","","",100,"","","","","","","","",1e3,"","","","","","","","",1e4,"","","","","","","","",1e5,"","","","","","","","",1e6]:"auto";var a={title:["Time vs Cumulative Oil","Cumulative Oil vs Monthly Oil Production","Cumulative Oil vs Daily Oil Production","Monthly Oil vs Time (BOPM)"][t],xaxis:{range:[S[t][0],S[t][S[t].length-1]],showline:"log"==o,gridcolor:"darkgray"},yaxis:{range:"log"==o?[w,b[t]]:[0,c[c.length-1]+500],type:o,tickvals:r,ticktext:n,showline:!0,gridcolor:"darkgray"}};Plotly.newPlot(e,T[t],a)}))})((0,c.Ys)(p).node().value,h)})),document.getElementById("clearFilter").onclick=function(){s(h.cuml)},window.onload=void function(){let e,t=sessionStorage.region,r={prod:null,cuml:null,mnth:null,econ:null,payout:null,pumpInfo:null,recYrProd:null,formation:null};return console.log("region :>> ",t),"ST"==t||null==t?e=o.e(92).then(o.bind(o,92)).then((e=>(r.prod=e.dataST,r.cuml=e.dataCumlST,r.mnth=e.mnthDataST,r.econ=e.econ,r.payout=e.payout,r.pumpInfo=e.pump,r.recYrProd=e.recYrProd,r.formation=e.formations,r))):"ET"==t?e=o.e(657).then(o.bind(o,657)).then((e=>(r.prod=e.dataET,r.cuml=e.dataCumlET,r.mnth=e.mnthDataET,r.formation=e.formations,r))):"NM"==t?e=o.e(101).then(o.bind(o,101)).then((e=>(r.prod=e.dataNM,r.cuml=e.dataCumlNM,r))):"GC"==t?e=o.e(630).then(o.bind(o,630)).then((e=>(r.prod=e.dataGC,r.cuml=e.dataCumlGC,r))):"WT"==t&&(e=o.e(405).then(o.bind(o,405)).then((e=>(r.prod=e.dataWT,r.cuml=e.dataCumlWT,r)))),e}().then((e=>{e=(e=>{if(null!=e.payout)e.payout.forEach((t=>{e.cuml.forEach((e=>{if(e[0]==t["Well Name"]){let o=Math.round(100*t["% Payout"]);e.push(o)}}))})),e.cuml.forEach((t=>{t.push(e.formation[t[0]])}));else if(null!=e.formation)e.cuml.forEach((t=>{t.push(""),t.push(e.formation[t[0]])}));else{const e=document.querySelector(".thead-dark tr");e.removeChild(e.children[4]),e.removeChild(e.children[4])}const t=u(e.prod);return e.cuml=e.cuml.filter((e=>t.has(e[0]))),e})(e),h=e,s(e.cuml),((e,t)=>{let o=(0,c.Ys)(e);u(t).forEach((e=>{o.append("option").text(e).property("Value",e)}))})(p,e.prod)}))},976:(e,t,o)=>{o.d(t,{AVB:()=>r.AV,Ys:()=>n.Ys,gyn:()=>r.gy}),o(684);var r=o(12),n=o(997);o(286),o(964)}},c={};function u(e){var t=c[e];if(void 0!==t)return t.exports;var o=c[e]={exports:{}};return i[e](o,o.exports,u),o.exports}u.m=i,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},u.a=(n,a,l)=>{var i;l&&((i=[]).d=-1);var c,u,s,d=new Set,m=n.exports,p=new Promise(((e,t)=>{s=t,u=e}));p[t]=m,p[e]=e=>(i&&e(i),d.forEach(e),p.catch((e=>{}))),n.exports=p,a((n=>{var a;c=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var a=[];a.d=0,n.then((e=>{l[t]=e,r(a)}),(e=>{l[o]=e,r(a)}));var l={};return l[e]=e=>e(a),l}}var i={};return i[e]=e=>{},i[t]=n,i})))(n);var l=()=>c.map((e=>{if(e[o])throw e[o];return e[t]})),u=new Promise((t=>{(a=()=>t(l)).r=0;var o=e=>e!==i&&!d.has(e)&&(d.add(e),e&&!e.d&&(a.r++,e.push(a)));c.map((t=>t[e](o)))}));return a.r?u:l()}),(e=>(e?s(p[o]=e):u(m),r(i)))),i&&i.d<0&&(i.d=0)},n=[],u.O=(e,t,o,r)=>{if(!t){var a=1/0;for(s=0;s<n.length;s++){for(var[t,o,r]=n[s],l=!0,i=0;i<t.length;i++)(!1&r||a>=r)&&Object.keys(u.O).every((e=>u.O[e](t[i])))?t.splice(i--,1):(l=!1,r<a&&(a=r));if(l){n.splice(s--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var s=n.length;s>0&&n[s-1][2]>r;s--)n[s]=n[s-1];n[s]=[t,o,r]},u.d=(e,t)=>{for(var o in t)u.o(t,o)&&!u.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((t,o)=>(u.f[o](e,t),t)),[])),u.u=e=>e+".bundle.js",u.miniCssF=e=>{},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},l="prod-1:",u.l=(e,t,o,r)=>{if(a[e])a[e].push(t);else{var n,i;if(void 0!==o)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==l+o){n=d;break}}n||(i=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,u.nc&&n.setAttribute("nonce",u.nc),n.setAttribute("data-webpack",l+o),n.src=e),a[e]=[t];var m=(t,o)=>{n.onerror=n.onload=null,clearTimeout(p);var r=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),r&&r.forEach((e=>e(o))),t)return t(o)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=m.bind(null,n.onerror),n.onload=m.bind(null,n.onload),i&&document.head.appendChild(n)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;u.g.importScripts&&(e=u.g.location+"");var t=u.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e})(),(()=>{var e={986:0};u.f.j=(t,o)=>{var r=u.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise(((o,n)=>r=e[t]=[o,n]));o.push(r[2]=n);var a=u.p+u.u(t),l=new Error;u.l(a,(o=>{if(u.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}}),"chunk-"+t,t)}},u.O.j=t=>0===e[t];var t=(t,o)=>{var r,n,[a,l,i]=o,c=0;if(a.some((t=>0!==e[t]))){for(r in l)u.o(l,r)&&(u.m[r]=l[r]);if(i)var s=i(u)}for(t&&t(o);c<a.length;c++)n=a[c],u.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return u.O(s)},o=self.webpackChunkprod_1=self.webpackChunkprod_1||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var s=u.O(void 0,[883,529,444,927],(()=>u(611)));s=u.O(s)})();