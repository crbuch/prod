(()=>{"use strict";var t,e,a,o,n,r={826:(t,e,a)=>{a.a(t,(async(t,e)=>{try{var o=a(448),n=a(199),r=a(976),s=t([n]);n=(s.then?(await s)():s)[0],(0,o.n)();let i=n.DS;"et"==sessionStorage.getItem("region")&&(i=n.bS);const c=t=>{const e=(0,r.Ys)("tbody");var a;$(document).ready((function(){$("tr td:nth-child(1)").each((function(){$(this).html('<a href="http://127.0.0.1:5503/dist/curves.html">'+$(this).text()+"</a>"),$(this).click((function(){sessionStorage.setItem("siteSelection",$(this).text())}))}))})),a=t,e.html(""),a.forEach((t=>{let a=e.append("tr");Object.values(t).forEach((t=>{a.append("td").text(t)}))}))};c(i),e()}catch(t){e(t)}}))},199:(t,e,a)=>{a.a(t,(async(t,o)=>{try{a.d(e,{DS:()=>t,bS:()=>r});var n=a(976);await(0,n.AVB)("../data/allProductionData.json").then((t=>t)),await(0,n.AVB)("../data/dataMonthlyST.json").then((t=>t)),await(0,n.AVB)("../data/allProductionDataET.json").then((t=>t)),await(0,n.AVB)("../data/cumProd.json").then((t=>t)),await(0,n.AVB)("../data/cumProdET.json").then((t=>t));const t=await(0,n.AVB)("../data/analyze.json").then((t=>t)),r=await(0,n.AVB)("../data/analyzeET.json").then((t=>t));await(0,n.AVB)("../data/formations.json").then((t=>t)),await(0,n.AVB)("../data/economics.json").then((t=>t)),await(0,n.AVB)("../data/payouts.json").then((t=>t)),await(0,n.AVB)("../data/pumpInfo.json").then((t=>t)),await(0,n.AVB)("../data/legacyEcon.json").then((t=>t)),await(0,n.AVB)("../data\\pldata1.json").then((t=>t)),await(0,n.gyn)("../data\\recYrProd.csv").then((t=>t)),o()}catch(t){o(t)}}),1)},448:(t,e,a)=>{a.d(e,{n:()=>n}),$(document).ready((function(){$("#header").load("../src/pages/header.html",(function(){}))}));const o=()=>{let t=sessionStorage.getItem("region");"st"==t||null==t?(console.log("switching to east"),sessionStorage.setItem("region","et")):sessionStorage.setItem("region","st"),sessionStorage.removeItem("siteSelection"),location.reload()},n=()=>{let t=sessionStorage.getItem("region");const e=document.querySelector("#fieldTitle"),a=document.querySelector("#toggleRegion");a.addEventListener("click",o);const n=$(window).width();console.log("currRegion :>> ",t),"st"==t||null==t?(a.innerHTML="East Texas",e.textContent="South Texas Field",n<768&&(e.textContent="CML EXP - South Texas")):(a.innerHTML="South Texas",e.textContent="East Texas Field",n<768&&(e.textContent="CML EXP - East Texas"))}},976:(t,e,a)=>{a.d(e,{AVB:()=>o.AV,Ys:()=>n.Ys,gyn:()=>o.gy}),a(684);var o=a(19),n=a(997);a(286),a(964)}},s={};function i(t){var e=s[t];if(void 0!==e)return e.exports;var a=s[t]={exports:{}};return r[t](a,a.exports,i),a.exports}i.m=r,t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",a="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=t=>{t&&t.d<1&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},i.a=(n,r,s)=>{var i;s&&((i=[]).d=-1);var c,d,l,h=new Set,u=n.exports,p=new Promise(((t,e)=>{l=e,d=t}));p[e]=u,p[t]=t=>(i&&t(i),h.forEach(t),p.catch((t=>{}))),n.exports=p,r((n=>{var r;c=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[t])return n;if(n.then){var r=[];r.d=0,n.then((t=>{s[e]=t,o(r)}),(t=>{s[a]=t,o(r)}));var s={};return s[t]=t=>t(r),s}}var i={};return i[t]=t=>{},i[e]=n,i})))(n);var s=()=>c.map((t=>{if(t[a])throw t[a];return t[e]})),d=new Promise((e=>{(r=()=>e(s)).r=0;var a=t=>t!==i&&!h.has(t)&&(h.add(t),t&&!t.d&&(r.r++,t.push(r)));c.map((e=>e[t](a)))}));return r.r?d:s()}),(t=>(t?l(p[a]=t):d(u),o(i)))),i&&i.d<0&&(i.d=0)},n=[],i.O=(t,e,a,o)=>{if(!e){var r=1/0;for(l=0;l<n.length;l++){for(var[e,a,o]=n[l],s=!0,c=0;c<e.length;c++)(!1&o||r>=o)&&Object.keys(i.O).every((t=>i.O[t](e[c])))?e.splice(c--,1):(s=!1,o<r&&(r=o));if(s){n.splice(l--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[e,a,o]},i.d=(t,e)=>{for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={730:0};i.O.j=e=>0===t[e];var e=(e,a)=>{var o,n,[r,s,c]=a,d=0;if(r.some((e=>0!==t[e]))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(c)var l=c(i)}for(e&&e(a);d<r.length;d++)n=r[d],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(l)},a=self.webpackChunkprod_1=self.webpackChunkprod_1||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))})();var c=i.O(void 0,[355],(()=>i(826)));c=i.O(c)})();