(()=>{"use strict";var e,t,o,n,r,a={353:(e,t,o)=>{o.d(t,{m_:()=>c});var n=o(977),r=o(864);const a=(0,n.ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),i=(0,r.v0)(a),c=()=>{i.onAuthStateChanged((e=>{if(e)console.log("user mon :>> ",e),"index.html"==window.location.pathname.split("/").pop()&&(window.location.href="./profile.html");else{const e=window.location.pathname.split("/").pop();if(console.log("currPage :>> ",e),"index.html"!=e){window.location.replace("index.html");const e=window.history.state;window.history.replaceState(e,"",window.location.href),window.onpopstate=function(){window.history.replaceState(e,"",window.location.href)}}}}))}},91:(e,t,o)=>{o.d(t,{Cu:()=>n});const n=(e,t,o,n,r)=>({width:1620,height:700,margin:{l:0,r:0,b:0,t:0},title:{text:"Drilling for "+r+", Dimmit County, TX",y:.98},legend:{x:.8,y:.8},scene:{aspectmode:"cube",xaxis:{title:"Easting",nticks:8,range:[e,t],gridcolor:"#8a8a8a",tickcolor:"#050505",backgroundcolor:"#ededed",showbackground:!0},yaxis:{title:"Northing",nticks:8,range:[e,t],gridcolor:"#8a8a8a",tickcolor:"#050505",backgroundcolor:"#f0f1f2",showbackground:!0},zaxis:{title:"TVD",nticks:5,range:[o,n],gridcolor:"#8a8a8a",tickcolor:"#050505",backgroundcolor:"#ededed",showbackground:!0}}})},448:(e,t,o)=>{o.d(t,{n:()=>n});const n=()=>{null!=sessionStorage.regionName&&null!=sessionStorage.regionName||(sessionStorage.setItem("regionName","South Texas"),sessionStorage.setItem("region","ST")),console.log('document.getElementById("currField") :>> ',document.getElementById("currField")),document.getElementById("currField").innerText=sessionStorage.getItem("regionName"),document.querySelectorAll(".dropdown-item").forEach((e=>{e.addEventListener("click",(function(){sessionStorage.setItem("region",this.id),document.getElementById("currField").innerText=this.innerText,sessionStorage.setItem("regionName",this.innerText),sessionStorage.removeItem("siteSelection"),location.reload()}))}))}},157:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var n=o(353),r=o(448),a=o(91),i=o(302);(0,n.m_)(),(0,r.n)();const c=await(0,i.AVB)("../data/datawbd/wells.json").then((e=>e)),l=await(0,i.AVB)("../data/datawbd/shows.json").then((e=>e));async function s(){let e=(0,i.Ys)("#wellselect").node().value;"default"==e&&(e="Aaron #1");let t=e.replace(/[#\s]/g,"");console.log("selectedOption :>> ",t);const o=c[e],n=o.map((e=>async function(e){console.log("file :>> ",e);const t=await(0,i.gyn)(`../data/datawbd/${e}`),[o,n,r]=t.reduce((([e,t,o],{TVD:n,Easting:r,Northing:a})=>[[...e,parseInt(n)],[...t,parseInt(a)],[...o,parseInt(r)]]),[[],[],[]]);return[o.map((e=>-e)),n,r]}(e))),r=await Promise.all(n);console.log("files :>> ",o);let s=[],u=[],d=[];console.log("data :>> ",r),r.forEach((e=>{s.push(e[0]),u.push(e[1]),d.push(e[2])}));const[f,p]=(0,i.Wem)(d.flat()),[h,m]=(0,i.Wem)(u.flat()),[g,w]=(0,i.Wem)(s.flat()),y=Math.min(f,h),v=Math.max(p,m),b=(0,a.Cu)(v+1e3,y-1e3,g-500,g+2e3,e),x=[],k=["#1d6acf","#eb7a10","#d61515","#7B3FA9","#6AE6EC"];for(let e=0;e<r.length;e++)x.push({opacity:.8,mode:"lines",name:0===e?"Orginal Hole":`Side Track ${e}`,line:{width:6,color:k[e]},type:"scatter3d",x:r[e][2],y:r[e][1],z:r[e][0]});const S=l[e];null!=S&&S.forEach((e=>{e.forEach(((t,o)=>{x.push({opacity:1===o||o===e.length-1?1:.4,mode:"lines",line:{width:6,color:1===o||o===e.length-1?"#36e35c":"#90f0a5"},type:"scatter3d",showlegend:!1,x:t[2],y:t[1],z:t[0]})}))})),Plotly.newPlot("graph",x,b)}async function u(){const e=await(0,i.AVB)("../data/datawbd/wells.json").then((e=>e));let t=(0,i.Ys)("#wellselect");Object.keys(e).forEach((e=>{t.append("option").text(e).property("Value",e)})),document.getElementById("wellselect").focus()}u(),(0,i.Ys)("#wellselect").on("change",(function(){s()})),window.onload=void s(),t()}catch(d){t(d)}}),1)},534:(e,t,o)=>{function n(e,t){let o,n;if(void 0===t)for(const t of e)null!=t&&(void 0===o?t>=t&&(o=n=t):(o>t&&(o=t),n<t&&(n=t)));else{let r=-1;for(let a of e)null!=(a=t(a,++r,e))&&(void 0===o?a>=a&&(o=n=a):(o>a&&(o=a),n<a&&(n=a)))}return[o,n]}o.d(t,{We:()=>n})},467:(e,t,o)=>{o.d(t,{gy:()=>m});var n={},r={};function a(e){return new Function("d","return {"+e.map((function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'})).join(",")+"}")}function i(e){var t=Object.create(null),o=[];return e.forEach((function(e){for(var n in e)n in t||o.push(t[n]=n)})),o}function c(e,t){var o=e+"",n=o.length;return n<t?new Array(t-n+1).join(0)+o:o}function l(e){var t=new RegExp('["'+e+"\n\r]"),o=e.charCodeAt(0);function l(e,t){var a,i=[],c=e.length,l=0,s=0,u=c<=0,d=!1;function f(){if(u)return r;if(d)return d=!1,n;var t,a,i=l;if(34===e.charCodeAt(i)){for(;l++<c&&34!==e.charCodeAt(l)||34===e.charCodeAt(++l););return(t=l)>=c?u=!0:10===(a=e.charCodeAt(l++))?d=!0:13===a&&(d=!0,10===e.charCodeAt(l)&&++l),e.slice(i+1,t-1).replace(/""/g,'"')}for(;l<c;){if(10===(a=e.charCodeAt(t=l++)))d=!0;else if(13===a)d=!0,10===e.charCodeAt(l)&&++l;else if(a!==o)continue;return e.slice(i,t)}return u=!0,e.slice(i,c)}for(10===e.charCodeAt(c-1)&&--c,13===e.charCodeAt(c-1)&&--c;(a=f())!==r;){for(var p=[];a!==n&&a!==r;)p.push(a),a=f();t&&null==(p=t(p,s++))||i.push(p)}return i}function s(t,o){return t.map((function(t){return o.map((function(e){return d(t[e])})).join(e)}))}function u(t){return t.map(d).join(e)}function d(e){return null==e?"":e instanceof Date?(r=(o=e).getUTCHours(),a=o.getUTCMinutes(),i=o.getUTCSeconds(),l=o.getUTCMilliseconds(),isNaN(o)?"Invalid Date":((n=o.getUTCFullYear())<0?"-"+c(-n,6):n>9999?"+"+c(n,6):c(n,4))+"-"+c(o.getUTCMonth()+1,2)+"-"+c(o.getUTCDate(),2)+(l?"T"+c(r,2)+":"+c(a,2)+":"+c(i,2)+"."+c(l,3)+"Z":i?"T"+c(r,2)+":"+c(a,2)+":"+c(i,2)+"Z":a||r?"T"+c(r,2)+":"+c(a,2)+"Z":"")):t.test(e+="")?'"'+e.replace(/"/g,'""')+'"':e;var o,n,r,a,i,l}return{parse:function(e,t){var o,n,r=l(e,(function(e,r){if(o)return o(e,r-1);n=e,o=t?function(e,t){var o=a(e);return function(n,r){return t(o(n),r,e)}}(e,t):a(e)}));return r.columns=n||[],r},parseRows:l,format:function(t,o){return null==o&&(o=i(t)),[o.map(d).join(e)].concat(s(t,o)).join("\n")},formatBody:function(e,t){return null==t&&(t=i(e)),s(e,t).join("\n")},formatRows:function(e){return e.map(u).join("\n")},formatRow:u,formatValue:d}}var s=l(","),u=s.parse,d=(s.parseRows,s.format,s.formatBody,s.formatRows,s.formatRow,s.formatValue,l("\t")),f=d.parse;function p(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);return e.text()}function h(e){return function(t,o,n){return 2===arguments.length&&"function"==typeof o&&(n=o,o=void 0),function(e,t){return fetch(e,t).then(p)}(t,o).then((function(t){return e(t,n)}))}}d.parseRows,d.format,d.formatBody,d.formatRows,d.formatRow,d.formatValue;var m=h(u);h(f)},302:(e,t,o)=>{o.d(t,{gyn:()=>r.gy,Wem:()=>n.We,AVB:()=>a.Z,Ys:()=>i.Ys});var n=o(534),r=(o(684),o(467)),a=o(950),i=o(997);o(286),o(964)},864:(e,t,o)=>{o.d(t,{v0:()=>n.v0});var n=o(924)}},i={};function c(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={exports:{}};return a[e](o,o.exports,c),o.exports}c.m=a,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(r,a,i)=>{var c;i&&((c=[]).d=-1);var l,s,u,d=new Set,f=r.exports,p=new Promise(((e,t)=>{u=t,s=e}));p[t]=f,p[e]=e=>(c&&e(c),d.forEach(e),p.catch((e=>{}))),r.exports=p,a((r=>{var a;l=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var a=[];a.d=0,r.then((e=>{i[t]=e,n(a)}),(e=>{i[o]=e,n(a)}));var i={};return i[e]=e=>e(a),i}}var c={};return c[e]=e=>{},c[t]=r,c})))(r);var i=()=>l.map((e=>{if(e[o])throw e[o];return e[t]})),s=new Promise((t=>{(a=()=>t(i)).r=0;var o=e=>e!==c&&!d.has(e)&&(d.add(e),e&&!e.d&&(a.r++,e.push(a)));l.map((t=>t[e](o)))}));return a.r?s:i()}),(e=>(e?u(p[o]=e):s(f),n(c)))),c&&c.d<0&&(c.d=0)},r=[],c.O=(e,t,o,n)=>{if(!t){var a=1/0;for(u=0;u<r.length;u++){for(var[t,o,n]=r[u],i=!0,l=0;l<t.length;l++)(!1&n||a>=n)&&Object.keys(c.O).every((e=>c.O[e](t[l])))?t.splice(l--,1):(i=!1,n<a&&(a=n));if(i){r.splice(u--,1);var s=o();void 0!==s&&(e=s)}}return e}n=n||0;for(var u=r.length;u>0&&r[u-1][2]>n;u--)r[u]=r[u-1];r[u]=[t,o,n]},c.d=(e,t)=>{for(var o in t)c.o(t,o)&&!c.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={923:0};c.O.j=t=>0===e[t];var t=(t,o)=>{var n,r,[a,i,l]=o,s=0;if(a.some((t=>0!==e[t]))){for(n in i)c.o(i,n)&&(c.m[n]=i[n]);if(l)var u=l(c)}for(t&&t(o);s<a.length;s++)r=a[s],c.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return c.O(u)},o=self.webpackChunkprod_1=self.webpackChunkprod_1||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var l=c.O(void 0,[883,529,444,924],(()=>c(157)));l=c.O(l)})();