(()=>{"use strict";var e,t,o,a,n,r={353:(e,t,o)=>{o.d(t,{m_:()=>i});var a=o(977),n=o(864);const r=(0,a.ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),s=(0,n.v0)(r),i=()=>{s.onAuthStateChanged((e=>{if(e)console.log("user mon :>> ",e);else{console.log("none"),window.location.replace("index.html");const e=window.history.state;window.history.replaceState(e,"",window.location.href),window.onpopstate=function(){window.history.replaceState(e,"",window.location.href)}}}))}},199:(e,t,o)=>{o.a(e,(async(e,a)=>{try{o.d(t,{R0:()=>l,bQ:()=>e,cm:()=>d,j6:()=>i,jD:()=>r,sb:()=>c});var n=o(976);const e=await(0,n.AVB)("../data/allProductionDataST.json").then((e=>e)),r=await(0,n.AVB)("../data/allProductionDataET.json").then((e=>e)),s=(await(0,n.AVB)("../data/dataMonthlyST.json").then((e=>e)),await(0,n.AVB)("../data/dataMonthlyET.json").then((e=>e)),await(0,n.AVB)("../data/cumlProdST.json").then((e=>e)),await(0,n.AVB)("../data/cumlProdET.json").then((e=>e)),await(0,n.AVB)("../data/analyzeST.json").then((e=>e)),await(0,n.AVB)("../data/analyzeET.json").then((e=>e)),await(0,n.AVB)("../data/formations.json").then((e=>e)),await(0,n.AVB)("../data/economics.json").then((e=>e)),await(0,n.AVB)("../data/payouts.json").then((e=>e)),await(0,n.AVB)("../data/pumpInfo.json").then((e=>e)),await(0,n.AVB)("../data/legacyEcon.json").then((e=>e)),await(0,n.AVB)("../data\\pldata.json").then((e=>e)),await(0,n.gyn)("../data\\recYrProd.csv").then((e=>e)),()=>{let t=r;"et"!==sessionStorage.getItem("region")&&(t=e);const o=t[0][0],a=new Set;for(let e=0;e<t.length;e++){const n=t[e][0];if(a.add(n),n===o&0!==e)break}return a}),i=e=>{let t=(0,n.Ys)(e);s().forEach((e=>{t.append("option").text(e).property("Value",e)}))},c=e=>{const t=(0,n.Ys)("tbody");t.html(""),e.forEach((e=>{let o=t.append("tr");Object.values(e).forEach((e=>{o.append("td").text(e)}))}))},d=(e,t)=>{let o=(0,n.Ys)(t).property("value");return o?e.filter((e=>e[0]==o)):e},l=(e,t)=>{let o;event.preventDefault(),o=[...e].sort(((e,o)=>{const a=e[t];return o[t]-a})),c(o)};a()}catch(e){a(e)}}),1)},448:(e,t,o)=>{o.d(t,{n:()=>a}),$(document).ready((function(){$("#header").load("../src/pages/header.html")}));const a=()=>{null==sessionStorage.getItem("regionName")&&(sessionStorage.setItem("regionName","South Texas"),sessionStorage.setItem("region","st")),console.log(sessionStorage.getItem("region")),document.getElementById("currField").innerText=sessionStorage.getItem("regionName"),document.querySelectorAll(".dropdown-item").forEach((e=>{e.addEventListener("click",(function(){sessionStorage.setItem("region",this.id),document.getElementById("currField").innerText=this.innerText,sessionStorage.setItem("regionName",this.innerText),sessionStorage.removeItem("siteSelection"),location.reload()}))}))}},346:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var a=o(199),n=o(353),r=o(448),s=o(976),i=e([a]);a=(i.then?(await i)():i)[0],(0,n.m_)(),(0,r.n)();const c=e=>{const t=e[0][1];return e.filter((e=>e[1]===t)).map((([e,,t,o,a,n,,r])=>[e,t,o,a,n,r]))},d="#wellFilter";let l=sessionStorage.getItem("region"),p=a.jD;"et"!==l&&(p=a.bQ);const u=c(p);document.getElementById("Prodfilter").onclick=function(){a.R0(u,1)},document.getElementById("clearFilter").onclick=function(){a.sb(u)},(0,s.Ys)(d).on("change",(()=>{a.sb(a.cm(u,d))})),window.onload=(a.sb(u),void a.j6(d)),t()}catch(e){t(e)}}))},976:(e,t,o)=>{o.d(t,{AVB:()=>a.AV,Ys:()=>n.Ys,gyn:()=>a.gy}),o(684);var a=o(19),n=o(997);o(286),o(964)},864:(e,t,o)=>{o.d(t,{v0:()=>a.v0});var a=o(924)}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var o=s[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.m=r,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(n,r,s)=>{var i;s&&((i=[]).d=-1);var c,d,l,p=new Set,u=n.exports,h=new Promise(((e,t)=>{l=t,d=e}));h[t]=u,h[e]=e=>(i&&e(i),p.forEach(e),h.catch((e=>{}))),n.exports=h,r((n=>{var r;c=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var r=[];r.d=0,n.then((e=>{s[t]=e,a(r)}),(e=>{s[o]=e,a(r)}));var s={};return s[e]=e=>e(r),s}}var i={};return i[e]=e=>{},i[t]=n,i})))(n);var s=()=>c.map((e=>{if(e[o])throw e[o];return e[t]})),d=new Promise((t=>{(r=()=>t(s)).r=0;var o=e=>e!==i&&!p.has(e)&&(p.add(e),e&&!e.d&&(r.r++,e.push(r)));c.map((t=>t[e](o)))}));return r.r?d:s()}),(e=>(e?l(h[o]=e):d(u),a(i)))),i&&i.d<0&&(i.d=0)},n=[],i.O=(e,t,o,a)=>{if(!t){var r=1/0;for(l=0;l<n.length;l++){for(var[t,o,a]=n[l],s=!0,c=0;c<t.length;c++)(!1&a||r>=a)&&Object.keys(i.O).every((e=>i.O[e](t[c])))?t.splice(c--,1):(s=!1,a<r&&(r=a));if(s){n.splice(l--,1);var d=o();void 0!==d&&(e=d)}}return e}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[t,o,a]},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={417:0};i.O.j=t=>0===e[t];var t=(t,o)=>{var a,n,[r,s,c]=o,d=0;if(r.some((t=>0!==e[t]))){for(a in s)i.o(s,a)&&(i.m[a]=s[a]);if(c)var l=c(i)}for(t&&t(o);d<r.length;d++)n=r[d],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(l)},o=self.webpackChunkprod_1=self.webpackChunkprod_1||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var c=i.O(void 0,[355,529,444,924],(()=>i(346)));c=i.O(c)})();