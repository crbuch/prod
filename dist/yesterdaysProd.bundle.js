(()=>{"use strict";var t,e,o,a,n,r={353:(t,e,o)=>{o.d(e,{m_:()=>i});var a=o(977),n=o(864);const r=(0,a.ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),s=(0,n.v0)(r),i=()=>{s.onAuthStateChanged((t=>{if(t)console.log("user mon :>> ",t);else{console.log("none"),window.location.replace("index.html");const t=window.history.state;window.history.replaceState(t,"",window.location.href),window.onpopstate=function(){window.history.replaceState(t,"",window.location.href)}}}))}},199:(t,e,o)=>{o.a(t,(async(t,a)=>{try{o.d(e,{R0:()=>d,bQ:()=>t,cm:()=>l,j6:()=>i,jD:()=>r,sb:()=>c});var n=o(976);const t=await(0,n.AVB)("../data/allProductionData.json").then((t=>t)),r=await(0,n.AVB)("../data/allProductionDataET.json").then((t=>t)),s=(await(0,n.AVB)("../data/dataMonthlyST.json").then((t=>t)),await(0,n.AVB)("../data/dataMonthlyET.json").then((t=>t)),await(0,n.AVB)("../data/cumProd.json").then((t=>t)),await(0,n.AVB)("../data/cumProdET.json").then((t=>t)),await(0,n.AVB)("../data/analyzeST.json").then((t=>t)),await(0,n.AVB)("../data/analyzeET.json").then((t=>t)),await(0,n.AVB)("../data/formations.json").then((t=>t)),await(0,n.AVB)("../data/economics.json").then((t=>t)),await(0,n.AVB)("../data/payouts.json").then((t=>t)),await(0,n.AVB)("../data/pumpInfo.json").then((t=>t)),await(0,n.AVB)("../data/legacyEcon.json").then((t=>t)),await(0,n.AVB)("../data\\pldata.json").then((t=>t)),await(0,n.gyn)("../data\\recYrProd.csv").then((t=>t)),()=>{let e=r;"et"!==sessionStorage.getItem("region")&&(e=t);const o=e[0][0],a=new Set;for(let t=0;t<e.length;t++){const n=e[t][0];if(a.add(n),n===o&0!==t)break}return a}),i=t=>{let e=(0,n.Ys)(t);s().forEach((t=>{e.append("option").text(t).property("Value",t)}))},c=t=>{const e=(0,n.Ys)("tbody");e.html(""),t.forEach((t=>{let o=e.append("tr");Object.values(t).forEach((t=>{o.append("td").text(t)}))}))},l=(t,e)=>{let o=(0,n.Ys)(e).property("value");return o?t.filter((t=>t[0]==o)):t},d=(t,e)=>{let o;event.preventDefault(),o=[...t].sort(((t,o)=>{const a=t[e];return o[e]-a})),c(o)};a()}catch(t){a(t)}}),1)},448:(t,e,o)=>{o.d(e,{n:()=>n}),$(document).ready((function(){$("#header").load("../src/pages/header.html",(function(){}))}));const a=()=>{let t=sessionStorage.getItem("region");"st"==t||null==t?(console.log("switching to east"),sessionStorage.setItem("region","et")):sessionStorage.setItem("region","st"),sessionStorage.removeItem("siteSelection"),location.reload()},n=()=>{let t=sessionStorage.getItem("region");const e=document.querySelector("#fieldTitle"),o=document.querySelector("#toggleRegion");o.addEventListener("click",a);const n=$(window).width();console.log("currRegion :>> ",t),"st"==t||null==t?(o.innerHTML="East Texas",e.textContent="South Texas Field",n<768&&(e.textContent="CML EXP - South Texas")):(o.innerHTML="South Texas",e.textContent="East Texas Field",n<768&&(e.textContent="CML EXP - East Texas"))}},346:(t,e,o)=>{o.a(t,(async(t,e)=>{try{var a=o(199),n=o(353),r=o(448),s=o(976),i=t([a]);a=(i.then?(await i)():i)[0],(0,n.m_)(),(0,r.n)();const c=t=>{const e=t[0][1];return t.filter((t=>t[1]===e)).map((([t,,e,o,a,n,,r])=>[t,e,o,a,n,r]))},l="#wellFilter";let d=sessionStorage.getItem("region"),u=a.jD;"et"!==d&&(u=a.bQ);const p=c(u);document.getElementById("Prodfilter").onclick=function(){a.R0(p,1)},document.getElementById("clearFilter").onclick=function(){a.sb(p)},(0,s.Ys)(l).on("change",(()=>{a.sb(a.cm(p,l))})),window.onload=(a.sb(p),void a.j6(l)),e()}catch(t){e(t)}}))},976:(t,e,o)=>{o.d(e,{AVB:()=>a.AV,Ys:()=>n.Ys,gyn:()=>a.gy}),o(684);var a=o(19),n=o(997);o(286),o(964)},864:(t,e,o)=>{o.d(e,{v0:()=>a.v0});var a=o(924)}},s={};function i(t){var e=s[t];if(void 0!==e)return e.exports;var o=s[t]={exports:{}};return r[t](o,o.exports,i),o.exports}i.m=r,t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=t=>{t&&!t.d&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},i.a=(n,r,s)=>{var i;s&&((i=[]).d=1);var c,l,d,u=new Set,p=n.exports,h=new Promise(((t,e)=>{d=e,l=t}));h[e]=p,h[t]=t=>(i&&t(i),u.forEach(t),h.catch((t=>{}))),n.exports=h,r((n=>{var r;c=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[t])return n;if(n.then){var r=[];r.d=0,n.then((t=>{s[e]=t,a(r)}),(t=>{s[o]=t,a(r)}));var s={};return s[t]=t=>t(r),s}}var i={};return i[t]=t=>{},i[e]=n,i})))(n);var s=()=>c.map((t=>{if(t[o])throw t[o];return t[e]})),l=new Promise((e=>{(r=()=>e(s)).r=0;var o=t=>t!==i&&!u.has(t)&&(u.add(t),t&&!t.d&&(r.r++,t.push(r)));c.map((e=>e[t](o)))}));return r.r?l:s()}),(t=>(t?d(h[o]=t):l(p),a(i)))),i&&(i.d=0)},n=[],i.O=(t,e,o,a)=>{if(!e){var r=1/0;for(d=0;d<n.length;d++){for(var[e,o,a]=n[d],s=!0,c=0;c<e.length;c++)(!1&a||r>=a)&&Object.keys(i.O).every((t=>i.O[t](e[c])))?e.splice(c--,1):(s=!1,a<r&&(r=a));if(s){n.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=n.length;d>0&&n[d-1][2]>a;d--)n[d]=n[d-1];n[d]=[e,o,a]},i.d=(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={417:0};i.O.j=e=>0===t[e];var e=(e,o)=>{var a,n,[r,s,c]=o,l=0;if(r.some((e=>0!==t[e]))){for(a in s)i.o(s,a)&&(i.m[a]=s[a]);if(c)var d=c(i)}for(e&&e(o);l<r.length;l++)n=r[l],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(d)},o=self.webpackChunkprod_1=self.webpackChunkprod_1||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var c=i.O(void 0,[355,529,924,444],(()=>i(346)));c=i.O(c)})();