(()=>{"use strict";var e,t,o,r,n,a,i,l={685:(e,t,o)=>{var r=o(302);const n=e=>{console.log("allData"),console.log(e);const t=(0,r.Ys)("tbody");t.html(""),e.forEach((e=>{let o=t.append("tr");Object.values(e).forEach((e=>{o.append("td").text(e)}))}))};var a=o(977),i=o(924);const l=(0,a.ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),c=(0,i.v0)(l);$(document).ready((function(){$("#header").load("../src/pages/header.html")}));const d=()=>{null==sessionStorage.getItem("regionName")&&(sessionStorage.setItem("regionName","South Texas"),sessionStorage.setItem("region","ST")),document.getElementById("currField").innerText=sessionStorage.getItem("regionName"),document.querySelectorAll(".dropdown-item").forEach((e=>{e.addEventListener("click",(function(){sessionStorage.setItem("region",this.id),document.getElementById("currField").innerText=this.innerText,sessionStorage.setItem("regionName",this.innerText),sessionStorage.removeItem("siteSelection"),location.reload()}))}))};let s;const u="#wellFilter";c.onAuthStateChanged((e=>{if(e)console.log("user mon :>> ",e);else{console.log("none"),window.location.replace("index.html");const e=window.history.state;window.history.replaceState(e,"",window.location.href),window.onpopstate=function(){window.history.replaceState(e,"",window.location.href)}}})),$(document).ready((function(){$("#header").load("../src/pages/header.html",(()=>{console.log("loaded header"),d()}))})),document.getElementById("Prodfilter").onclick=function(){((e,t)=>{let o;event.preventDefault(),o=[...e].sort(((e,t)=>{const o=e[1];return t[1]-o})),n(o)})(s)},document.getElementById("clearFilter").onclick=function(){n(s)},(0,r.Ys)(u).on("change",(()=>{n(((e,t)=>{let o=(0,r.Ys)(t).property("value");return o?e.filter((e=>e[0]==o)):e})(s,u))})),window.onload=void function(){let e,t=sessionStorage.region,r={prod:null,cuml:null,mnth:null,econ:null,payout:null,pumpInfo:null,formation:null};return console.log("region :>> ",t),"ST"==t||null==t?e=o.e(92).then(o.bind(o,92)).then((e=>(r.prod=e.dataST,r.cuml=e.dataCumlST,r.mnth=e.mnthDataST,r.econ=e.econ,r.payout=e.payout,r.pumpInfo=e.pump,r.formation=e.formations,r))):"ET"==t?e=o.e(657).then(o.bind(o,657)).then((e=>(r.prod=e.dataET,r.cuml=e.dataCumlET,r.mnth=e.mnthDataET,r.formation=e.formations,r))):"NM"==t?e=o.e(101).then(o.bind(o,101)).then((e=>(r.prod=e.dataNM,r.cuml=e.dataCumlNM,r))):"GC"==t?e=o.e(630).then(o.bind(o,630)).then((e=>(r.prod=e.dataGC,r.cuml=e.dataCumlGC,r))):"WT"==t&&(e=o.e(405).then(o.bind(o,405)).then((e=>(r.prod=e.dataWT,r.cuml=e.dataCumlWT,r)))),e}().then((e=>{e.prod=(e=>{const t=e[0][1];return e.filter((e=>e[1]===t)).map((([e,,t,o,r,n,,a])=>[e,t,o,r,n,a]))})(e.prod),s=e.prod,n(e.prod),((e,t)=>{let o=(0,r.Ys)(e);(e=>{const t=e[0][0],o=new Set;for(let r=0;r<e.length;r++){const n=e[r][0];if("Cornett #1 Swd"!==n&&o.add(n),n===t&0!==r)break}return o})(t).forEach((e=>{o.append("option").text(e).property("Value",e)}))})(u,e.prod)}))},302:(e,t,o)=>{o.d(t,{AVB:()=>r.Z,Ys:()=>n.Ys}),o(684);var r=o(950),n=o(997);o(286),o(964)}},c={};function d(e){var t=c[e];if(void 0!==t)return t.exports;var o=c[e]={exports:{}};return l[e](o,o.exports,d),o.exports}d.m=l,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},d.a=(n,a,i)=>{var l;i&&((l=[]).d=-1);var c,d,s,u=new Set,p=n.exports,m=new Promise(((e,t)=>{s=t,d=e}));m[t]=p,m[e]=e=>(l&&e(l),u.forEach(e),m.catch((e=>{}))),n.exports=m,a((n=>{var a;c=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var a=[];a.d=0,n.then((e=>{i[t]=e,r(a)}),(e=>{i[o]=e,r(a)}));var i={};return i[e]=e=>e(a),i}}var l={};return l[e]=e=>{},l[t]=n,l})))(n);var i=()=>c.map((e=>{if(e[o])throw e[o];return e[t]})),d=new Promise((t=>{(a=()=>t(i)).r=0;var o=e=>e!==l&&!u.has(e)&&(u.add(e),e&&!e.d&&(a.r++,e.push(a)));c.map((t=>t[e](o)))}));return a.r?d:i()}),(e=>(e?s(m[o]=e):d(p),r(l)))),l&&l.d<0&&(l.d=0)},n=[],d.O=(e,t,o,r)=>{if(!t){var a=1/0;for(s=0;s<n.length;s++){for(var[t,o,r]=n[s],i=!0,l=0;l<t.length;l++)(!1&r||a>=r)&&Object.keys(d.O).every((e=>d.O[e](t[l])))?t.splice(l--,1):(i=!1,r<a&&(a=r));if(i){n.splice(s--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var s=n.length;s>0&&n[s-1][2]>r;s--)n[s]=n[s-1];n[s]=[t,o,r]},d.d=(e,t)=>{for(var o in t)d.o(t,o)&&!d.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,o)=>(d.f[o](e,t),t)),[])),d.u=e=>e+".bundle.js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},i="prod-1:",d.l=(e,t,o,r)=>{if(a[e])a[e].push(t);else{var n,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var u=c[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==i+o){n=u;break}}n||(l=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,d.nc&&n.setAttribute("nonce",d.nc),n.setAttribute("data-webpack",i+o),n.src=e),a[e]=[t];var p=(t,o)=>{n.onerror=n.onload=null,clearTimeout(m);var r=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),r&&r.forEach((e=>e(o))),t)return t(o)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=p.bind(null,n.onerror),n.onload=p.bind(null,n.onload),l&&document.head.appendChild(n)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var t=d.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e})(),(()=>{var e={417:0};d.f.j=(t,o)=>{var r=d.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise(((o,n)=>r=e[t]=[o,n]));o.push(r[2]=n);var a=d.p+d.u(t),i=new Error;d.l(a,(o=>{if(d.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,r[1](i)}}),"chunk-"+t,t)}},d.O.j=t=>0===e[t];var t=(t,o)=>{var r,n,[a,i,l]=o,c=0;if(a.some((t=>0!==e[t]))){for(r in i)d.o(i,r)&&(d.m[r]=i[r]);if(l)var s=l(d)}for(t&&t(o);c<a.length;c++)n=a[c],d.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return d.O(s)},o=self.webpackChunkprod_1=self.webpackChunkprod_1||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var s=d.O(void 0,[883,529,444,924],(()=>d(685)));s=d.O(s)})();