(()=>{"use strict";var e,t,n,o,r,a,i,l={578:(e,t,n)=>{var o=n(302);var r=n(977),a=n(924);const i=(0,r.ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),l=(0,a.v0)(i),c=()=>{null!=sessionStorage.regionName&&null!=sessionStorage.regionName||(sessionStorage.setItem("regionName","South Texas"),sessionStorage.setItem("region","ST")),console.log('document.getElementById("currField") :>> ',document.getElementById("currField")),document.getElementById("currField").innerText=sessionStorage.getItem("regionName"),document.querySelectorAll(".dropdown-item").forEach((e=>{e.addEventListener("click",(function(){sessionStorage.setItem("region",this.id),document.getElementById("currField").innerText=this.innerText,sessionStorage.setItem("regionName",this.innerText),sessionStorage.removeItem("siteSelection"),location.reload()}))}))},s=(e,t,n,o="lines",r,a,i=!0,l)=>({x:e,y:t,text:a,name:n,visible:i,line:{color:r,dash:l},mode:o}),u={modeBarButtonsToRemove:["sendDataToCloud","autoScale2d","hoverClosestCartesian","hoverCompareCartesian","lasso2d","zoomIn2d","zoomOut2d","toggleSpikelines"],displaylogo:!1,responsive:!0,displayModeBar:!1,responsiveConfig:[{breakpoint:768,options:{legend:{orientation:"h",y:-.2}}},{breakpoint:0,options:{legend:{orientation:"v",y:1}}}]},d=(document.querySelector("#userEmail"),document.querySelector("#userPassword"),document.querySelector("#btnChangePwd"),document.querySelector("#new_pwd"),document.querySelector("#new_pwd_rpt"),document.querySelector("#btnBack"),document.querySelector("#btnLogin"),document.querySelector("#btnLogout"),document.getElementById("login"),document.getElementById("update-pwd"),document.querySelector("#divLoginError"),document.querySelector("#lblLoginErrorMessage"),document.querySelector("#divPwdError"),document.querySelector("#pwdErr"),e=>{let t=document.querySelectorAll(".active");[].forEach.call(t,(e=>{e.id.includes("Days")&&e.classList.remove("active")})),document.getElementById(e).className+="active"}),m=e=>{let t=document.querySelectorAll(".active");[].forEach.call(t,(e=>{e.id.includes("Days")||e.classList.remove("active")})),document.getElementById(e).className+="active"},p=e=>{let t=!1,n=document.querySelectorAll(".active");return[].forEach.call(n,(n=>{n.id==e&&(t=!0)})),t};-1!==navigator.userAgent.indexOf("Mobile")||-1!==navigator.userAgent.indexOf("iPhone")||-1!==navigator.userAgent.indexOf("Android")||navigator.userAgent.indexOf("Windows Phone");const f=e=>{let t=null,n=(0,o.Ys)("#siteSelection").node().value;return"default"!=n?t=[n]:null!=sessionStorage.siteSelection?(t=[sessionStorage.siteSelection],(0,o.Ys)("#siteSelection").node().value=t,sessionStorage.removeItem("siteSelection")):t=[...e[0][0]],t=t.join(""),sessionStorage.siteSelection=t,t};async function g(e,t){const o=f(t.prod),r=t.prod.filter((e=>e[0]===o));let a=r.map((e=>e[9]));document.getElementById("wellName").textContent=o;let i=sessionStorage.getItem("region");null==i&&(sessionStorage.setItem("region","ST"),i="ST"),["c","SPM","DHSL","ideal","pumpEff","pumpDepth","GFLAP","Inc","notPumping"].forEach((e=>{document.getElementById(e).innerHTML=""})),["zoomEl","individualTable","pumpInfo","notPumpingInfo","pnl","YTD","payout"].forEach((e=>document.getElementById(e).style.display="none")),"ST"==i&"South Texas Total"!=o&&("fh05lGDE7YSVyAu9eNP4bYRR9n42"!==h&null!==h&&(((e,t)=>{let n=0,o=0,r="";e.forEach((e=>{let a=e["Well Name"].toLowerCase(),i=t.toLowerCase();a.includes(i)&&(n=e["Recent Month P&L"],o=e["YTD P&L"],r=e.Date.slice(0,3))})),S.innerHTML=`P&L : $${n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${r}`,w.innerHTML=`$${o.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")} YTD`,S.style.display="block",w.style.display="block"})(t.econ,o),((e,t)=>{let n=e.filter((e=>e["Well Name"]==t))[0],o=n?100*n["% Payout"]:0;T.innerHTML="Payout : "+o.toFixed(0).toLocaleString("en-US")+"%",T.style.display="block"})(t.payout,o)),((e,t,n)=>{let o=e.find((e=>e["Well Name"]===n));void 0!==o?0!==o.SPM?$(document).ready((function(){$("#pumpInfo").toggle();let e=t[0];0==t[0]&0==t[2]&&(e=t[1]),document.getElementById("c").innerHTML=`C: ${o.C}`,document.getElementById("SPM").innerHTML=`SPM: ${o.SPM}`,document.getElementById("DHSL").innerHTML=`DH SL: ${o["DH SL"]}`,document.getElementById("ideal").innerHTML=`Ideal bfpd: ${o["Ideal bfpd"]}`,document.getElementById("pumpEff").innerHTML=`Pump Eff: ${Math.round(e/o["Ideal bfpd"]*100)}`,document.getElementById("pumpDepth").innerHTML=`Pump Depth: ${o["Pump Depth"]}`,document.getElementById("GFLAP").innerHTML=`GFLAP: ${o.GFLAP}`,document.getElementById("Inc").innerHTML=`Inc: ${o.Inc}`})):$(document).ready((function(){$("#notPumpingInfo").toggle(),$("#notPumping").html("This well is not on rod pump")})):$(document).ready((function(){$("#notPumpingInfo").toggle(),$("#notPumping").html("No pump data available")}))})(t.pumpInfo,[...a],o)),((e,t,n)=>{"South Texas Total"==n&&(n="ST Total"),"East Texas Total"==n&&(n="ET Total"),"West Texas Total"==n&&(n="WT Total"),"Gulf Coast Total"==n&&(n="GC Total"),"New Mexico Total"==n&&(n="NM Total");const o=e.filter((e=>e[0]===n))[0],r=o[1],a=o[2],i=o[3],l=t[n]||"";l||(document.getElementById("filler4").style.display=""),E.innerHTML=l,C.innerHTML=`Cumulative: ${r} MBO, ${i} MMCF, ${a} MBW`})(t.cuml,t.formation,o),["gasDeclineCurve","waterDeclineCurve","waterCutCurve","totalFluidCurve","combinationCurves"].forEach((e=>{document.getElementById(e).style.display="block"}));let l=[],c=[],d=[];"South Texas Total"==o&"fh05lGDE7YSVyAu9eNP4bYRR9n42"!==h&&await n.e(456).then(n.bind(n,456)).then((e=>{const t=e.recYrProd;l=t.map((e=>e.Date),[]).reverse(),c=t.map((e=>e["New Prod"]),[]).reverse(),d=t.map((e=>e.percent),[]).reverse(),document.getElementById("ratioRecProd").style.display="block"}));let m=r.map((e=>e[8])),p=r.map((e=>e[2])),g=r.map((e=>e[3])),y=r.map((e=>e[4])),v=r.map((e=>e[7])),I=r.map((e=>e[e.length-1])),B=y.map(((e,t)=>e/(e+p[t])*100));e>0&&([m,p,g,y,v,I,c,l,d]=[m,p,g,y,v,I,c,l,d].map((t=>t.slice(0,e))));let P=s(l,c,"Production from New Wells (365 Days)",null,"purple",null,!0),x=s(m,p,"Oil [BO]",null,"green",v);const D=s(m,I,"7 Day Avg","lines",null,null,null,"dot");let M=s(m,g,"Gas [MCF]","line","red"),L=s(m,y,"Water [BW]","line","blue");const O=s(m,B,"line","#25C4DC");let k=s(m,a,"Total Fluid [BBLS]","line","black"),N=s(l,d,"Percent Past Year Production","line","#224a04");const A=document.getElementById("logarithmic").classList.contains("active")?"log":"linear",W=["gasDeclineCurve","waterDeclineCurve","totalFluidCurve","waterCutCurve","combinationCurves","ratioRecProd"];let F=[x,D,{...M},{...L},{...k},P];"South Texas Total"!==o&&(F.pop(),document.getElementById("ratioRecProd").style.display="none");let _=[[M],[L],[k],[O],F,[N]];"South Texas Total"!==o&&(_.pop(),W.pop()),W.forEach(((e,t)=>{_[t].forEach((e=>{e.visible=4===t&&"Oil [BO]"!==e.name?"legendonly":e.visible}));const n=(o=A,r="log"===A?[1,2,5,10,20,50,100,200,500,1e3,2e3,3e3]:null,{title:["Gas vs Time (MCFD)","Water vs Time (BWPD)","Total Fluid vs Time (BFPD)","Water Cut Percentage","Combined Production","Percent Production from New Wells (365 Days)"][t],height:null,legend:{bgcolor:"rgba(0, 0, 0, 0)",font:{color:"#000000"},orientation:"h",y:1.1,xanchor:window.innerWidth>400?"center":"left",x:.5},yaxis:{title:undefined,type:o||"linear",rangemode:"tozero",autorange:!0,tickformat:"f",tickvals:r,gridcolor:"#dbdbdb"},xaxis:{title:undefined,gridcolor:"#dbdbdb"}});var o,r;Plotly.newPlot(e,_[t],n,u)}));const j=document.getElementById("combinationCurves");j.on("plotly_relayout",(function(e){JSON.stringify(e);const t=document.getElementById("zoomEl");t.innerHTML="";const n=document.createElement("p");n.textContent="Produced:",t.appendChild(n);let{"xaxis.range[0]":o,"xaxis.range[1]":r}=e;o||(o=m[m.length-1],r=m[0]);const i=o.substring(0,10),l=r.substring(0,10),c=m.findIndex((e=>e.includes(i))),s=m.findIndex((e=>e.includes(l)));if(-1===c)return;const u=JSON.parse(sessionStorage.getItem("visible_traces")),d={"Gas [MCF]":g,"Oil [BO]":p,"Water [BW]":y,"Total Fluid [BBLS]":a},f={"Gas [MCF]":"Gas [MMCF]","Oil [BO]":"Oil [MBO]","Water [BW]":"Water [MBW]","Total Fluid [BBLS]":"Total Fluid [MBBL]"};for(const[e,n]of Object.entries(u))for(let e of n){if(!Object.keys(d).includes(e))continue;const n=(d[e].slice(s,c+1).reduce(((e,t)=>e+t),0)/1e3).toFixed(1),o=document.createElement("p");o.textContent=`${n} ${f[e]}`,o.style.fontSize="15px",t.appendChild(o)}t.style.display="block",window.innerWidth>400&&b.focus()})),j.on("plotly_legendclick",(function(e){const t=e.curveNumber,n=F[t].name;let o=JSON.parse(sessionStorage.visible_traces)||{visible_traces:[]};o.visible.includes(n)?o.visible=o.visible.filter((e=>e!==n)):o.visible.push(n),sessionStorage.setItem("visible_traces",JSON.stringify(o))})),window.innerWidth>400&&b.focus(),document.getElementById("filler4").style.display="none"}const y=e=>{e.preventDefault();const t=e.target,n=document.getElementById(t.id).parentNode,o=n.querySelectorAll("*");if(!0===p("table")&"timeframes"==n.id)return;o.forEach((e=>{e.classList.remove("active")})),t.className+="active";const r=document.getElementById("timeframes").querySelectorAll(".active")[0].id.substring(4);g(Number(r)+1,v),window.innerWidth<400&&setTimeout((function(){try{b.blur()}catch{}}),50),b.focus()};l.onAuthStateChanged((e=>{if(e)console.log("user mon :>> ",e);else{console.log("none"),window.location.replace("index.html");const e=window.history.state;window.history.replaceState(e,"",window.location.href),window.onpopstate=function(){window.history.replaceState(e,"",window.location.href)}}}));const h=localStorage.getItem("uid");let v;const b=document.getElementById("siteSelection"),S=document.getElementById("pnl"),w=document.getElementById("YTD"),T=document.getElementById("payout"),E=document.getElementById("formation"),C=document.getElementById("cumlativeData");$(document).ready((function(){$("#header").load("../src/pages/header.html",(()=>{c(),document.getElementById("wbd_link").style.display="block"}))})),["linear","logarithmic","DaysInception","Days30","Days365","Days180"].forEach((e=>{document.getElementById(e).addEventListener("click",y)})),$(b).on("change",(()=>{let e="DaysInception";31==localStorage.initTime&&(e="Days30"),d(e),m(localStorage.getItem("initScale")),sessionStorage.visible_traces=JSON.stringify({visible:["Oil [BO]"]}),g(localStorage.initTime,v)})),document.getElementById("table").addEventListener("click",(()=>{!0!==p("table")&&(((e,t)=>{let n=document.querySelectorAll(".active");[].forEach.call(n,(e=>{e.classList.remove("active")})),document.getElementById("table").className+="active",document.getElementById("DaysInception").className+="active"})(),(e=>{let t=e.map((e=>[...e]));const n=f(t);let r=t.filter((e=>e[0]==n));if(r.forEach((e=>{e.shift();for(let t=0;t<3;t++)e.pop()})),(e=>{console.log("allData"),console.log(e);const t=(0,o.Ys)("tbody");t.html(""),e.forEach((e=>{let n=t.append("tr");Object.values(e).forEach((e=>{n.append("td").text(e)}))}))})(r),document.getElementById("individualTable").style.display="inline-block",["gasDeclineCurve","waterDeclineCurve","waterCutCurve","totalFluidCurve","combinationCurves","ratioRecProd"].forEach((e=>{document.getElementById(e).style.display="none"})),window.innerWidth<=768){const e=["Date","O","G","W","TP","CP","Comments"];["dateHeader","oilHeader","gasHeader","waterHeader","TPHeader","CPHeader","commentsHeader"].forEach(((t,n)=>{document.getElementById(t).textContent=e[n]}))}})(v.prod))})),window.onload=function(){let e="DaysInception";31==localStorage.getItem("initTime")&&(e="Days30"),d(e),m(localStorage.getItem("initScale")),sessionStorage.visible_traces=JSON.stringify({visible:["Oil [BO]"]}),function(){let e,t=sessionStorage.region,o={prod:null,cuml:null,mnth:null,econ:null,payout:null,pumpInfo:null,formation:null};return console.log("region :>> ",t),"ST"==t||null==t?e=n.e(92).then(n.bind(n,92)).then((e=>(o.prod=e.dataST,o.cuml=e.dataCumlST,o.mnth=e.mnthDataST,o.econ=e.econ,o.payout=e.payout,o.pumpInfo=e.pump,o.formation=e.formations,o))):"ET"==t?e=n.e(657).then(n.bind(n,657)).then((e=>(o.prod=e.dataET,o.cuml=e.dataCumlET,o.mnth=e.mnthDataET,o.formation=e.formations,o))):"NM"==t?e=n.e(101).then(n.bind(n,101)).then((e=>(o.prod=e.dataNM,o.cuml=e.dataCumlNM,o.formation=e.formations,o))):"GC"==t?e=n.e(630).then(n.bind(n,630)).then((e=>(o.prod=e.dataGC,o.cuml=e.dataCumlGC,o.formation=e.formations,o))):"WT"==t&&(e=n.e(405).then(n.bind(n,405)).then((e=>(o.prod=e.dataWT,o.cuml=e.dataCumlWT,o.formation=e.formations,o)))),e}().then((e=>{v=e,((e,t)=>{let n=(0,o.Ys)(e);(e=>{const t=e[0][0],n=new Set;for(let o=0;o<e.length;o++){const r=e[o][0];if("Cornett #1 Swd"!==r&&n.add(r),r===t&0!==o)break}return n})(t).forEach((e=>{"Mcwf #1"!==e&&n.append("option").text(e).property("Value",e)}))})("#siteSelection",e.prod),g(localStorage.getItem("initTime"),e),window.innerWidth>400&&b.focus(),function(e){let t=b.options,n=[];for(let o=1;o<t.length;o++)n.push(t[o].Value),null==e.filter((e=>e["Well Name"]==t[o].Value))[0]&&console.log("well :>> ",t[o].Value)}(e.payout)})),window.innerWidth>400&&b.focus()}(),$(document).on("click",(function(e){window.innerWidth>400&&b.focus()}))},467:(e,t,n)=>{n.d(t,{gy:()=>g});var o={},r={};function a(e){return new Function("d","return {"+e.map((function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'})).join(",")+"}")}function i(e){var t=Object.create(null),n=[];return e.forEach((function(e){for(var o in e)o in t||n.push(t[o]=o)})),n}function l(e,t){var n=e+"",o=n.length;return o<t?new Array(t-o+1).join(0)+n:n}function c(e){var t=new RegExp('["'+e+"\n\r]"),n=e.charCodeAt(0);function c(e,t){var a,i=[],l=e.length,c=0,s=0,u=l<=0,d=!1;function m(){if(u)return r;if(d)return d=!1,o;var t,a,i=c;if(34===e.charCodeAt(i)){for(;c++<l&&34!==e.charCodeAt(c)||34===e.charCodeAt(++c););return(t=c)>=l?u=!0:10===(a=e.charCodeAt(c++))?d=!0:13===a&&(d=!0,10===e.charCodeAt(c)&&++c),e.slice(i+1,t-1).replace(/""/g,'"')}for(;c<l;){if(10===(a=e.charCodeAt(t=c++)))d=!0;else if(13===a)d=!0,10===e.charCodeAt(c)&&++c;else if(a!==n)continue;return e.slice(i,t)}return u=!0,e.slice(i,l)}for(10===e.charCodeAt(l-1)&&--l,13===e.charCodeAt(l-1)&&--l;(a=m())!==r;){for(var p=[];a!==o&&a!==r;)p.push(a),a=m();t&&null==(p=t(p,s++))||i.push(p)}return i}function s(t,n){return t.map((function(t){return n.map((function(e){return d(t[e])})).join(e)}))}function u(t){return t.map(d).join(e)}function d(e){return null==e?"":e instanceof Date?(r=(n=e).getUTCHours(),a=n.getUTCMinutes(),i=n.getUTCSeconds(),c=n.getUTCMilliseconds(),isNaN(n)?"Invalid Date":((o=n.getUTCFullYear())<0?"-"+l(-o,6):o>9999?"+"+l(o,6):l(o,4))+"-"+l(n.getUTCMonth()+1,2)+"-"+l(n.getUTCDate(),2)+(c?"T"+l(r,2)+":"+l(a,2)+":"+l(i,2)+"."+l(c,3)+"Z":i?"T"+l(r,2)+":"+l(a,2)+":"+l(i,2)+"Z":a||r?"T"+l(r,2)+":"+l(a,2)+"Z":"")):t.test(e+="")?'"'+e.replace(/"/g,'""')+'"':e;var n,o,r,a,i,c}return{parse:function(e,t){var n,o,r=c(e,(function(e,r){if(n)return n(e,r-1);o=e,n=t?function(e,t){var n=a(e);return function(o,r){return t(n(o),r,e)}}(e,t):a(e)}));return r.columns=o||[],r},parseRows:c,format:function(t,n){return null==n&&(n=i(t)),[n.map(d).join(e)].concat(s(t,n)).join("\n")},formatBody:function(e,t){return null==t&&(t=i(e)),s(e,t).join("\n")},formatRows:function(e){return e.map(u).join("\n")},formatRow:u,formatValue:d}}var s=c(","),u=s.parse,d=(s.parseRows,s.format,s.formatBody,s.formatRows,s.formatRow,s.formatValue,c("\t")),m=d.parse;function p(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);return e.text()}function f(e){return function(t,n,o){return 2===arguments.length&&"function"==typeof n&&(o=n,n=void 0),function(e,t){return fetch(e,t).then(p)}(t,n).then((function(t){return e(t,o)}))}}d.parseRows,d.format,d.formatBody,d.formatRows,d.formatRow,d.formatValue;var g=f(u);f(m)},302:(e,t,n)=>{n.d(t,{gyn:()=>o.gy,AVB:()=>r.Z,Ys:()=>a.Ys}),n(684);var o=n(467),r=n(950),a=n(997);n(286),n(964)}},c={};function s(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={exports:{}};return l[e](n,n.exports,s),n.exports}s.m=l,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},s.a=(r,a,i)=>{var l;i&&((l=[]).d=-1);var c,s,u,d=new Set,m=r.exports,p=new Promise(((e,t)=>{u=t,s=e}));p[t]=m,p[e]=e=>(l&&e(l),d.forEach(e),p.catch((e=>{}))),r.exports=p,a((r=>{var a;c=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var a=[];a.d=0,r.then((e=>{i[t]=e,o(a)}),(e=>{i[n]=e,o(a)}));var i={};return i[e]=e=>e(a),i}}var l={};return l[e]=e=>{},l[t]=r,l})))(r);var i=()=>c.map((e=>{if(e[n])throw e[n];return e[t]})),s=new Promise((t=>{(a=()=>t(i)).r=0;var n=e=>e!==l&&!d.has(e)&&(d.add(e),e&&!e.d&&(a.r++,e.push(a)));c.map((t=>t[e](n)))}));return a.r?s:i()}),(e=>(e?u(p[n]=e):s(m),o(l)))),l&&l.d<0&&(l.d=0)},r=[],s.O=(e,t,n,o)=>{if(!t){var a=1/0;for(u=0;u<r.length;u++){for(var[t,n,o]=r[u],i=!0,l=0;l<t.length;l++)(!1&o||a>=o)&&Object.keys(s.O).every((e=>s.O[e](t[l])))?t.splice(l--,1):(i=!1,o<a&&(a=o));if(i){r.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=r.length;u>0&&r[u-1][2]>o;u--)r[u]=r[u-1];r[u]=[t,n,o]},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,n)=>(s.f[n](e,t),t)),[])),s.u=e=>e+".bundle.js",s.miniCssF=e=>{},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},i="prod-1:",s.l=(e,t,n,o)=>{if(a[e])a[e].push(t);else{var r,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==i+n){r=d;break}}r||(l=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.setAttribute("data-webpack",i+n),r.src=e),a[e]=[t];var m=(t,n)=>{r.onerror=r.onload=null,clearTimeout(p);var o=a[e];if(delete a[e],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),l&&document.head.appendChild(r)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!e;)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={716:0};s.f.j=(t,n)=>{var o=s.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise(((n,r)=>o=e[t]=[n,r]));n.push(o[2]=r);var a=s.p+s.u(t),i=new Error;s.l(a,(n=>{if(s.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,o[1](i)}}),"chunk-"+t,t)}},s.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,[a,i,l]=n,c=0;if(a.some((t=>0!==e[t]))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(l)var u=l(s)}for(t&&t(n);c<a.length;c++)r=a[c],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(u)},n=self.webpackChunkprod_1=self.webpackChunkprod_1||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var u=s.O(void 0,[883,529,444,924],(()=>s(578)));u=s.O(u)})();