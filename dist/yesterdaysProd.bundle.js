(()=>{"use strict";var e,t,o,n,a,r={353:(e,t,o)=>{o.d(t,{m_:()=>i});var n=o(977),a=o(864);const r=(0,n.ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),s=(0,a.v0)(r),i=()=>{s.onAuthStateChanged((e=>{if(e)console.log("user mon :>> ",e);else{console.log("none"),window.location.replace("index.html");const e=window.history.state;window.history.replaceState(e,"",window.location.href),window.onpopstate=function(){window.history.replaceState(e,"",window.location.href)}}}))}},199:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.d(t,{R0:()=>d,bQ:()=>e,cm:()=>l,j6:()=>i,jD:()=>r,sb:()=>c});var a=o(976);const e=await(0,a.AVB)("../data/allProductionData.json").then((e=>e)),r=(await(0,a.AVB)("../data/dataMonthlyST.json").then((e=>e)),await(0,a.AVB)("../data/allProductionDataET.json").then((e=>e))),s=(await(0,a.AVB)("../data/cumProd.json").then((e=>e)),await(0,a.AVB)("../data/cumProdET.json").then((e=>e)),await(0,a.AVB)("../data/analyze.json").then((e=>e)),await(0,a.AVB)("../data/analyzeET.json").then((e=>e)),await(0,a.AVB)("../data/formations.json").then((e=>e)),await(0,a.AVB)("../data/economics.json").then((e=>e)),await(0,a.AVB)("../data/payouts.json").then((e=>e)),await(0,a.AVB)("../data/pumpInfo.json").then((e=>e)),await(0,a.AVB)("../data/legacyEcon.json").then((e=>e)),await(0,a.AVB)("../data\\pldata.json").then((e=>e)),await(0,a.gyn)("../data\\newProd.csv").then((e=>e)),()=>{let t=r;"et"!==sessionStorage.getItem("region")&&(t=e);const o=t[0][0],n=new Set;for(let e=0;e<t.length;e++){const a=t[e][0];if(n.add(a),a===o&0!==e)break}return n}),i=e=>{let t=(0,a.Ys)(e);s().forEach((e=>{t.append("option").text(e).property("Value",e)}))},c=e=>{const t=(0,a.Ys)("tbody");t.html(""),e.forEach((e=>{let o=t.append("tr");Object.values(e).forEach((e=>{o.append("td").text(e)}))}))},l=(e,t)=>{let o=(0,a.Ys)(t).property("value");return o?e.filter((e=>e[0]==o)):e},d=(e,t)=>{let o;event.preventDefault(),o=[...e].sort(((e,o)=>{const n=e[t];return o[t]-n})),c(o)};n()}catch(e){n(e)}}),1)},448:(e,t,o)=>{o.d(t,{n:()=>a}),$(document).ready((function(){$("#header").load("../src/pages/header.html",(function(){}))}));const n=()=>{let e=sessionStorage.getItem("region");"st"==e||null==e?(console.log("switching to east"),sessionStorage.setItem("region","et")):sessionStorage.setItem("region","st"),sessionStorage.removeItem("siteSelection"),location.reload()},a=()=>{let e=sessionStorage.getItem("region");const t=document.querySelector("#fieldTitle"),o=document.querySelector("#toggleRegion");o.addEventListener("click",n);const a=$(window).width();console.log("currRegion :>> ",e),"st"==e||null==e?(o.innerHTML="East Texas",t.textContent="South Texas Field",a<768&&(t.textContent="CML EXP - South Texas")):(o.innerHTML="South Texas",t.textContent="East Texas Field",a<768&&(t.textContent="CML EXP - East Texas"))}},346:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var n=o(199),a=o(353),r=o(448),s=o(976),i=e([n]);n=(i.then?(await i)():i)[0],(0,a.m_)(),(0,r.n)();const c=e=>{const t=e[0][1];return e.filter((e=>e[1]===t)).map((([e,,t,o,n,a,,r])=>[e,t,o,n,a,r]))},l="#wellFilter";let d=sessionStorage.getItem("region"),u=n.jD;"et"!==d&&(u=n.bQ);const p=c(u);document.getElementById("Prodfilter").onclick=function(){n.R0(p,1)},document.getElementById("clearFilter").onclick=function(){n.sb(p)},(0,s.Ys)(l).on("change",(()=>{n.sb(n.cm(p,l))})),window.onload=(n.sb(p),void n.j6(l)),t()}catch(e){t(e)}}))},976:(e,t,o)=>{o.d(t,{AVB:()=>n.AV,Ys:()=>a.Ys,gyn:()=>n.gy}),o(684);var n=o(19),a=o(997);o(286),o(964)},864:(e,t,o)=>{o.d(t,{v0:()=>n.v0});var n=o(924)}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var o=s[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.m=r,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(a,r,s)=>{var i;s&&((i=[]).d=-1);var c,l,d,u=new Set,p=a.exports,h=new Promise(((e,t)=>{d=t,l=e}));h[t]=p,h[e]=e=>(i&&e(i),u.forEach(e),h.catch((e=>{}))),a.exports=h,r((a=>{var r;c=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var r=[];r.d=0,a.then((e=>{s[t]=e,n(r)}),(e=>{s[o]=e,n(r)}));var s={};return s[e]=e=>e(r),s}}var i={};return i[e]=e=>{},i[t]=a,i})))(a);var s=()=>c.map((e=>{if(e[o])throw e[o];return e[t]})),l=new Promise((t=>{(r=()=>t(s)).r=0;var o=e=>e!==i&&!u.has(e)&&(u.add(e),e&&!e.d&&(r.r++,e.push(r)));c.map((t=>t[e](o)))}));return r.r?l:s()}),(e=>(e?d(h[o]=e):l(p),n(i)))),i&&i.d<0&&(i.d=0)},a=[],i.O=(e,t,o,n)=>{if(!t){var r=1/0;for(d=0;d<a.length;d++){for(var[t,o,n]=a[d],s=!0,c=0;c<t.length;c++)(!1&n||r>=n)&&Object.keys(i.O).every((e=>i.O[e](t[c])))?t.splice(c--,1):(s=!1,n<r&&(r=n));if(s){a.splice(d--,1);var l=o();void 0!==l&&(e=l)}}return e}n=n||0;for(var d=a.length;d>0&&a[d-1][2]>n;d--)a[d]=a[d-1];a[d]=[t,o,n]},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={417:0};i.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[r,s,c]=o,l=0;if(r.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(c)var d=c(i)}for(t&&t(o);l<r.length;l++)a=r[l],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(d)},o=self.webpackChunkprod_1=self.webpackChunkprod_1||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var c=i.O(void 0,[355,529,444,924],(()=>i(346)));c=i.O(c)})();