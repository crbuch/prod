(()=>{"use strict";var e,o,t,a,r,n={353:(e,o,t)=>{t.d(o,{m_:()=>l});var a=t(977),r=t(864);const n=(0,a.ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),c=(0,r.v0)(n),l=()=>{c.onAuthStateChanged((e=>{if(e)console.log("user mon :>> ",e);else{console.log("none"),window.location.replace("index.html");const e=window.history.state;window.history.replaceState(e,"",window.location.href),window.onpopstate=function(){window.history.replaceState(e,"",window.location.href)}}}))}},91:(e,o,t)=>{t.d(o,{Cu:()=>a});const a=(e,o,t,a,r)=>({width:1620,height:700,margin:{l:0,r:0,b:0,t:0},title:{text:"Drilling for "+r+", Dimmit County, TX",y:.98},legend:{x:.8,y:.8},scene:{aspectmode:"cube",xaxis:{title:"Easting",nticks:8,range:[e,o],gridcolor:"#8a8a8a",tickcolor:"#050505",backgroundcolor:"#ededed",showbackground:!0},yaxis:{title:"Northing",nticks:8,range:[e,o],gridcolor:"#8a8a8a",tickcolor:"#050505",backgroundcolor:"#f0f1f2",showbackground:!0},zaxis:{title:"TVD",nticks:5,range:[t,a],gridcolor:"#8a8a8a",tickcolor:"#050505",backgroundcolor:"#ededed",showbackground:!0}}})},157:(e,o,t)=>{t.a(e,(async(e,o)=>{try{var a=t(353),r=t(91),n=t(976);(0,a.m_)();const c=await(0,n.AVB)("../data/datawbd/wells.json").then((e=>e)),l=await(0,n.AVB)("../data/datawbd/shows.json").then((e=>e));async function i(){let e=(0,n.Ys)("#wellselect").node().value;"default"==e&&(e="Aaron #1");let o=e.replace(/[#\s]/g,"");console.log("selectedOption :>> ",o);const t=c[e],a=t.map((e=>async function(e){console.log("file :>> ",e);const o=await(0,n.gyn)(`../data/datawbd/${e}`),[t,a,r]=o.reduce((([e,o,t],{TVD:a,Easting:r,Northing:n})=>[[...e,parseInt(a)],[...o,parseInt(n)],[...t,parseInt(r)]]),[[],[],[]]);return[t.map((e=>-e)),a,r]}(e))),i=await Promise.all(a);console.log("files :>> ",t);let s=[],d=[],p=[];console.log("data :>> ",i),i.forEach((e=>{s.push(e[0]),d.push(e[1]),p.push(e[2])}));const[u,f]=(0,n.Wem)(p.flat()),[h,w]=(0,n.Wem)(d.flat()),[g,y]=(0,n.Wem)(s.flat()),b=Math.min(u,h),m=Math.max(f,w),v=(0,r.Cu)(m+1e3,b-1e3,g-500,g+2e3,e),k=[],_=["#1d6acf","#eb7a10","#d61515","#7B3FA9","#6AE6EC"];for(let e=0;e<i.length;e++)k.push({opacity:.8,mode:"lines",name:0===e?"Orginal Hole":`Side Track ${e}`,line:{width:6,color:_[e]},type:"scatter3d",x:i[e][2],y:i[e][1],z:i[e][0]});const x=l[e];null!=x&&x.forEach((e=>{e.forEach(((o,t)=>{k.push({opacity:1===t||t===e.length-1?1:.4,mode:"lines",line:{width:6,color:1===t||t===e.length-1?"#36e35c":"#90f0a5"},type:"scatter3d",showlegend:!1,x:o[2],y:o[1],z:o[0]})}))})),Plotly.newPlot("graph",k,v)}async function s(){const e=await(0,n.AVB)("../data/datawbd/wells.json").then((e=>e));let o=(0,n.Ys)("#wellselect");Object.keys(e).forEach((e=>{o.append("option").text(e).property("Value",e)}))}s(),(0,n.Ys)("#wellselect").on("change",(function(){i()})),window.onload=void i(),o()}catch(d){o(d)}}),1)},534:(e,o,t)=>{function a(e,o){let t,a;if(void 0===o)for(const o of e)null!=o&&(void 0===t?o>=o&&(t=a=o):(t>o&&(t=o),a<o&&(a=o)));else{let r=-1;for(let n of e)null!=(n=o(n,++r,e))&&(void 0===t?n>=n&&(t=a=n):(t>n&&(t=n),a<n&&(a=n)))}return[t,a]}t.d(o,{We:()=>a})},976:(e,o,t)=>{t.d(o,{AVB:()=>r.AV,Wem:()=>a.We,Ys:()=>n.Ys,gyn:()=>r.gy});var a=t(534),r=(t(684),t(19)),n=t(997);t(286),t(964)},864:(e,o,t)=>{t.d(o,{v0:()=>a.v0});var a=t(924)}},c={};function l(e){var o=c[e];if(void 0!==o)return o.exports;var t=c[e]={exports:{}};return n[e](t,t.exports,l),t.exports}l.m=n,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",o="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},l.a=(r,n,c)=>{var l;c&&((l=[]).d=-1);var i,s,d,p=new Set,u=r.exports,f=new Promise(((e,o)=>{d=o,s=e}));f[o]=u,f[e]=e=>(l&&e(l),p.forEach(e),f.catch((e=>{}))),r.exports=f,n((r=>{var n;i=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var n=[];n.d=0,r.then((e=>{c[o]=e,a(n)}),(e=>{c[t]=e,a(n)}));var c={};return c[e]=e=>e(n),c}}var l={};return l[e]=e=>{},l[o]=r,l})))(r);var c=()=>i.map((e=>{if(e[t])throw e[t];return e[o]})),s=new Promise((o=>{(n=()=>o(c)).r=0;var t=e=>e!==l&&!p.has(e)&&(p.add(e),e&&!e.d&&(n.r++,e.push(n)));i.map((o=>o[e](t)))}));return n.r?s:c()}),(e=>(e?d(f[t]=e):s(u),a(l)))),l&&l.d<0&&(l.d=0)},r=[],l.O=(e,o,t,a)=>{if(!o){var n=1/0;for(d=0;d<r.length;d++){for(var[o,t,a]=r[d],c=!0,i=0;i<o.length;i++)(!1&a||n>=a)&&Object.keys(l.O).every((e=>l.O[e](o[i])))?o.splice(i--,1):(c=!1,a<n&&(n=a));if(c){r.splice(d--,1);var s=t();void 0!==s&&(e=s)}}return e}a=a||0;for(var d=r.length;d>0&&r[d-1][2]>a;d--)r[d]=r[d-1];r[d]=[o,t,a]},l.d=(e,o)=>{for(var t in o)l.o(o,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={923:0};l.O.j=o=>0===e[o];var o=(o,t)=>{var a,r,[n,c,i]=t,s=0;if(n.some((o=>0!==e[o]))){for(a in c)l.o(c,a)&&(l.m[a]=c[a]);if(i)var d=i(l)}for(o&&o(t);s<n.length;s++)r=n[s],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(d)},t=self.webpackChunkprod_1=self.webpackChunkprod_1||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var i=l.O(void 0,[355,529,444,924],(()=>l(157)));i=l.O(i)})();