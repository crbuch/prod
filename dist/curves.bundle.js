(()=>{"use strict";var e,t,o,n,a,l={353:(e,t,o)=>{o.d(t,{m_:()=>i});var n=o(977),a=o(864);const l=(0,n.ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),r=(0,a.v0)(l),i=()=>{r.onAuthStateChanged((e=>{if(e)console.log("user mon :>> ",e);else{console.log("none"),window.location.replace("index.html");const e=window.history.state;window.history.replaceState(e,"",window.location.href),window.onpopstate=function(){window.history.replaceState(e,"",window.location.href)}}}))}},141:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var n=o(199),a=o(353),l=o(448),r=o(976),i=o(91),c=o(914),s=e([n]);n=(s.then?(await s)():s)[0],(0,a.m_)(),(0,l.n)();const d=(e,t)=>{let o=0,n=0,a="";e.forEach((e=>{let l=e["Well Name"].toLowerCase(),r=t.toLowerCase();console.log("w :>> ",l),console.log("s :>> ",r),l.includes(r)&&(o=e["Recent Month P&L"],n=e["YTD P&L"],a=e.Date.slice(0,3))})),document.getElementById("pnl").innerHTML=`P&L : $${o.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${a}`,document.getElementById("YTD").innerHTML=`$${n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")} YTD`,document.getElementById("pnl").style.display="block",document.getElementById("YTD").style.display="block"},u=(e,t)=>{var o=0;e.forEach((e=>{e["Well Name"].includes(t)&&(o=100*e["% Payout"])})),document.getElementById("payout").innerHTML="Payout : "+o.toFixed(0).toLocaleString("en-US")+"%",document.getElementById("payout").style.display="block"},m=(e,t)=>{let o=e.find((e=>e["Well Name"]===t));void 0!==o?0!==o.SPM?$(document).ready((function(){$("#pumpInfo").toggle(),document.getElementById("c").innerHTML=`C: ${o.C}`,document.getElementById("SPM").innerHTML=`SPM: ${o.SPM}`,document.getElementById("DHSL").innerHTML=`DH SL: ${o["DH SL"]}`,document.getElementById("ideal").innerHTML=`Ideal bfpd: ${o["Ideal bfpd"]}`,document.getElementById("pumpEff").innerHTML=`Pump Eff: ${Math.round(100*o["Pump Eff"])}`,document.getElementById("pumpDepth").innerHTML=`Pump Depth: ${o["Pump Depth"]}`,document.getElementById("GFLAP").innerHTML=`GFLAP: ${o.GFLAP}`,document.getElementById("Inc").innerHTML=`Inc: ${o.Inc}`})):$(document).ready((function(){$("#notPumpingInfo").toggle(),$("#notPumping").html("This well is not pumping")})):$(document).ready((function(){$("#notPumpingInfo").toggle(),$("#notPumping").html("No pump data available")}))},p=(e,t)=>{"South Texas Total"==t&&(t="ST Total"),"East Texas Total"==t&&(t="ET Total");let o={cuml:0,gasCuml:0,waterCuml:0,formation:""};e.forEach((e=>{t===e[0]&&(o.cuml=e[1],o.gasCuml=e[3],o.waterCuml=e[2],o.formation=n.formations[t]||"")}));const a=document.getElementById("formation"),l=document.getElementById("cumlativeData");o.formation||(document.getElementById("filler4").style.display=""),a.innerHTML=o.formation,l.innerHTML=`Cumulative: ${o.cuml} MBO, ${o.gasCuml} MMCF, ${o.waterCuml} MBW`},g=e=>{let t=null,o=(0,r.Ys)("#siteSelection").node().value;return"default"!=o?t=[o]:null!=sessionStorage.getItem("siteSelection")?(t=[sessionStorage.getItem("siteSelection")],sessionStorage.removeItem("siteSelection")):t=[...e[0][0]],t=t.join(""),sessionStorage.siteSelection=t,t},y=()=>{const e=n.newProd;let t=e.map((e=>e["New Prod"]),[]).reverse();return{date:e.map((e=>e.Date),[]).reverse(),"new oil":t,percent:e.map((e=>e.percent),[]).reverse()}},f=(e,t)=>{const o=g(t.prodData);document.getElementById("wellName").textContent=o;let n=sessionStorage.getItem("region");null==n&&(sessionStorage.setItem("region","ST"),n="ST"),["c","SPM","DHSL","ideal","pumpEff","pumpDepth","GFLAP","Inc","notPumping"].forEach((e=>{document.getElementById(e).innerHTML=""})),["zoomEl","individualTable","pumpInfo","notPumpingInfo","pnl","YTD","payout"].forEach((e=>document.getElementById(e).style.display="none")),"ST"==n&"South Texas Total"!=o&&("fh05lGDE7YSVyAu9eNP4bYRR9n42"!==v&null!==v&&(d(t.economicsData,o),u(t.payoutData,o)),m(t.pumpData,o)),p(t.dataCuml,o),["gasDeclineCurve","waterDeclineCurve","waterCutCurve","totalFluidCurve","combinationCurves"].forEach((e=>{document.getElementById(e).style.display="block"}));let a=[],l=[],r=[],c="South Texas Total"==o&"fh05lGDE7YSVyAu9eNP4bYRR9n42"!==v;if(console.log("mask :>> ",c),c){console.log("gett");let e=y();a=e.date,l=e["new oil"],r=e.percent,document.getElementById("ratioRecProd").style.display="block"}const s=t.prodData.filter((e=>e[0]===o));let f=s.map((e=>e[8])),S=s.map((e=>e[2])),h=s.map((e=>e[3])),T=s.map((e=>e[4])),E=s.map((e=>e[7])),b=s.map((e=>e[e.length-1])),w=T.map(((e,t)=>e/(e+S[t])*100)),B=s.map((e=>e[9]||e[8]));e>0&&([f,S,h,T,E,b,l,a,r]=[f,S,h,T,E,b,l,a,r].map((t=>t.slice(0,e)))),console.log("site_data :>> ",s),console.log("data.prodData :>> ",t.prodData);let I=(0,i.Ho)(a,l,"Production from New Wells (365 Days)",null,"purple",null,!0),C=(0,i.Ho)(f,S,"Oil [BO]",null,"green",E);const P=(0,i.Ho)(f,b,"7 Day Avg","lines",null,null,null,"dot");let D=(0,i.Ho)(f,h,"Gas [MCF]","line","red"),x=(0,i.Ho)(f,T,"Water [BW]","line","blue");const L=(0,i.Ho)(f,w,"line","#25C4DC");let M=(0,i.Ho)(f,B,"Total Fluid [BBLS]","line","black"),A=(0,i.Ho)(a,r,"Percent Past Year Production","line","#224a04");const O=document.getElementById("logarithmic").classList.contains("active")?"log":"linear",N=["gasDeclineCurve","waterDeclineCurve","totalFluidCurve","waterCutCurve","combinationCurves","ratioRecProd"];let j=[C,P,D,x,M,I];"South Texas Total"!==o&&(j.pop(),document.getElementById("ratioRecProd").style.display="none");let H=[[D],[x],[M],[L],j,[A]];"South Texas Total"!==o&&(H.pop(),N.pop()),N.forEach(((e,t)=>{H[t].forEach((e=>{e.visible=4===t&&"Oil [BO]"!==e.name?"legendonly":e.visible}));const o=(0,i.wx)(["Gas vs Time (MCFD)","Water vs Time (BWPD)","Total Fluid vs Time (BFPD)","Water Cut Percentage","Combined Production","Percent Production from New Wells (365 Days)"][t],O,"log"===O?[1,2,5,10,20,50,100,200,500,1e3,2e3,3e3]:null);Plotly.newPlot(e,H[t],o,i.vc)}));const _=document.getElementById("combinationCurves");_.on("plotly_relayout",(function(e){JSON.stringify(e);const t=document.getElementById("zoomEl");t.innerHTML="";const o=document.createElement("p");o.textContent="Produced:",t.appendChild(o);let{"xaxis.range[0]":n,"xaxis.range[1]":a}=e;n||(n=f[f.length-1],a=f[0]);const l=n.substring(0,10),r=a.substring(0,10),i=f.findIndex((e=>e.includes(l))),c=f.findIndex((e=>e.includes(r)));if(-1===i)return;const s=JSON.parse(sessionStorage.getItem("visible_traces")),d={"Gas [MCF]":h,"Oil [BO]":S,"Water [BW]":T,"Total Fluid [BBLS]":B},u={"Gas [MCF]":"Gas [MMCF]","Oil [BO]":"Oil [MBO]","Water [BW]":"Water [MBW]","Total Fluid [BBLS]":"Total Fluid [MBBL]"};for(const[e,o]of Object.entries(s))for(let e of o){if(!Object.keys(d).includes(e))continue;const o=(d[e].slice(c,i+1).reduce(((e,t)=>e+t),0)/1e3).toFixed(1),n=document.createElement("p");n.textContent=`${o} ${u[e]}`,n.style.fontSize="15px",t.appendChild(n)}t.style.display="block"})),_.on("plotly_legendclick",(function(e){const t=e.curveNumber,o=j[t].name;let n=JSON.parse(sessionStorage.visible_traces)||{visible_traces:[]};n.visible.includes(o)?n.visible=n.visible.filter((e=>e!==o)):n.visible.push(o),sessionStorage.setItem("visible_traces",JSON.stringify(n))})),document.getElementById("siteSelection").focus(),document.getElementById("filler4").style.display="none"},S=e=>{let t=e.map((e=>[...e]));const o=g(t);let a=t.filter((e=>e[0]==o));if(a.forEach((e=>{e.shift();for(let t=0;t<3;t++)e.pop()})),console.log("well :>> ",a),n.buildTable(a),document.getElementById("individualTable").style.display="inline-block",["gasDeclineCurve","waterDeclineCurve","waterCutCurve","totalFluidCurve","combinationCurves","ratioRecProd"].forEach((e=>{document.getElementById(e).style.display="none"})),window.innerWidth<=768){const e=["Date","O","G","W","TP","CP","Comments"];["dateHeader","oilHeader","gasHeader","waterHeader","TPHeader","CPHeader","commentsHeader"].forEach(((t,o)=>{document.getElementById(t).textContent=e[o]}))}},h=e=>{e.preventDefault();const t=e.target,o=document.getElementById(t.id).parentNode;o.querySelectorAll("*").forEach((e=>{e.classList.remove("active")})),t.className+="active";const n=document.getElementById("timeframes").querySelectorAll(".active")[0].id.substring(4);f(Number(n)+1,w),window.innerWidth<400&&setTimeout((function(){try{document.getElementById("siteSelection").blur()}catch{}}),50),document.getElementById("siteSelection").focus(),"timeframes"==o.id&&(0,c.uG)(localStorage.getItem("initScale"))},v=localStorage.getItem("uid");let T=sessionStorage.getItem("region");console.log("currUid :>> ",v);let E=n[`data${T}`],b=n[`dataCuml${T}`];const w={prodData:E,dataCuml:b,economicsData:n.econ,payoutData:n.payout,pumpData:n.pump};["linear","logarithmic","DaysInception","Days30","Days365","Days180"].forEach((e=>{document.getElementById(e).addEventListener("click",h)}));const B="#siteSelection";n.dropdown(B),(0,r.Ys)(B).on("change",(()=>{let e="DaysInception";31==localStorage.initTime&&(e="Days30"),f(localStorage.initTime,w),(0,c.LB)(e),(0,c.uG)(localStorage.getItem("initScale"))})),document.getElementById("table").addEventListener("click",(()=>{!0!==(0,c.oN)("table")&&((0,c.Iv)("table","DaysInception"),S(E))}));let I={visible:["Oil [BO]"]};sessionStorage.setItem("visible_traces",JSON.stringify(I)),window.onload=function(){let e="DaysInception";31==localStorage.getItem("initTime")&&(e="Days30"),(0,c.LB)(e),(0,c.uG)(localStorage.getItem("initScale")),f(localStorage.getItem("initTime"),w)}(),t()}catch(e){t(e)}}))},199:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.r(t),o.d(t,{activeWells:()=>I,analyzeDataET:()=>p,analyzeDataST:()=>r,buildTable:()=>P,dataCumlET:()=>u,dataCumlGC:()=>S,dataCumlNM:()=>y,dataCumlST:()=>l,dataCumlWT:()=>v,dataET:()=>d,dataGC:()=>f,dataNM:()=>g,dataST:()=>e,dataWT:()=>h,dropdown:()=>C,econ:()=>T,filterData:()=>D,formations:()=>B,legacyEcon:()=>b,moDataET:()=>m,moDataST:()=>i,newProd:()=>s,payout:()=>E,pl23_22:()=>w,pump:()=>c,sortData:()=>x});var a=o(976);const e=await(0,a.AVB)("../data/ST/prodST.json").then((e=>e)),l=await(0,a.AVB)("../data/ST/cumlProdST.json").then((e=>e)),r=await(0,a.AVB)("../data/ST/analyzeST.json").then((e=>e)),i=await(0,a.AVB)("../data/ST/dataMonthlyST.json").then((e=>e)),c=await(0,a.AVB)("../data/ST/pumpInfo.json").then((e=>e)),s=await(0,a.gyn)("../data\\ST/recYrProd.csv").then((e=>e)),d=await(0,a.AVB)("../data/ET/prodET.json").then((e=>e)),u=await(0,a.AVB)("../data/ET/cumlProdET.json").then((e=>e)),m=await(0,a.AVB)("../data/ET/dataMonthlyET.json").then((e=>e)),p=await(0,a.AVB)("../data/ET/analyzeET.json").then((e=>e)),g=await(0,a.AVB)("../data/NM/prodNM.json").then((e=>e)),y=await(0,a.AVB)("../data/NM/cumlProdNM.json").then((e=>e)),f=await(0,a.AVB)("../data/GC/prodGC.json").then((e=>e)),S=await(0,a.AVB)("../data/GC/cumlProdGC.json").then((e=>e)),h=await(0,a.AVB)("../data/WT/prodWT.json").then((e=>e)),v=await(0,a.AVB)("../data/WT/cumlProdWT.json").then((e=>e)),T=await(0,a.AVB)("../data/econ/economics.json").then((e=>e)),E=await(0,a.AVB)("../data/econ/payouts.json").then((e=>e)),b=await(0,a.AVB)("../data/econ/legacyEcon.json").then((e=>e)),w=await(0,a.AVB)("../data\\econ/pldata.json").then((e=>e)),B=await(0,a.AVB)("../data/misc/formations.json").then((e=>e)),I=()=>{let t=sessionStorage.region,o=e;"ET"==t&&(o=d),"GC"==t&&(o=f),"WT"==t&&(o=h),"NM"==t&&(o=g);const n=o[0][0],a=new Set;for(let e=0;e<o.length;e++){const t=o[e][0];if("Cornett #1 Swd"!==t&&a.add(t),t===n&0!==e)break}return a},C=e=>{let t=(0,a.Ys)(e);I().forEach((e=>{t.append("option").text(e).property("Value",e)}))},P=e=>{console.log("allData"),console.log(e);const t=(0,a.Ys)("tbody");t.html(""),e.forEach((e=>{let o=t.append("tr");Object.values(e).forEach((e=>{o.append("td").text(e)}))}))},D=(e,t)=>{let o=(0,a.Ys)(t).property("value");return o?e.filter((e=>e[0]==o)):e},x=(e,t)=>{let o;event.preventDefault(),o=[...e].sort(((e,o)=>{const n=e[t];return o[t]-n})),P(o)};n()}catch(e){n(e)}}),1)},91:(e,t,o)=>{o.d(t,{Ho:()=>n,vc:()=>l,wx:()=>a});const n=(e,t,o,n="lines",a,l,r=!0,i)=>({x:e,y:t,text:l,name:o,visible:r,line:{color:a,dash:i},mode:n}),a=(e,t,o,n,a)=>({title:e,height:null,legend:{bgcolor:"rgba(0, 0, 0, 0)",font:{color:"#000000"},orientation:"h",y:1.1,xanchor:window.innerWidth>400?"center":"left",x:.5},yaxis:{title:n,type:t||"linear",rangemode:"tozero",autorange:!0,tickformat:"f",tickvals:o,gridcolor:"#dbdbdb"},xaxis:{title:a,gridcolor:"#dbdbdb"}}),l={modeBarButtonsToRemove:["sendDataToCloud","autoScale2d","hoverClosestCartesian","hoverCompareCartesian","lasso2d","zoomIn2d","zoomOut2d","toggleSpikelines"],displaylogo:!1,responsive:!0,displayModeBar:!1,responsiveConfig:[{breakpoint:768,options:{legend:{orientation:"h",y:-.2}}},{breakpoint:0,options:{legend:{orientation:"v",y:1}}}]}},448:(e,t,o)=>{o.d(t,{n:()=>n}),$(document).ready((function(){$("#header").load("../src/pages/header.html")}));const n=()=>{null==sessionStorage.getItem("regionName")&&(sessionStorage.setItem("regionName","South Texas"),sessionStorage.setItem("region","ST")),console.log(sessionStorage.getItem("region")),document.getElementById("currField").innerText=sessionStorage.getItem("regionName"),document.querySelectorAll(".dropdown-item").forEach((e=>{e.addEventListener("click",(function(){sessionStorage.setItem("region",this.id),document.getElementById("currField").innerText=this.innerText,sessionStorage.setItem("regionName",this.innerText),sessionStorage.removeItem("siteSelection"),location.reload()}))}))}},914:(e,t,o)=>{o.d(t,{Iv:()=>n,LB:()=>a,oN:()=>r,uG:()=>l}),o(864),document.querySelector("#userEmail"),document.querySelector("#userPassword"),document.querySelector("#btnChangePwd"),document.querySelector("#new_pwd"),document.querySelector("#new_pwd_rpt"),document.querySelector("#btnBack"),document.querySelector("#btnLogin"),document.querySelector("#btnLogout"),document.getElementById("login"),document.getElementById("update-pwd"),document.querySelector("#divLoginError"),document.querySelector("#lblLoginErrorMessage"),document.querySelector("#divPwdError"),document.querySelector("#pwdErr");const n=(e,t)=>{let o=document.querySelectorAll(".active");[].forEach.call(o,(e=>{e.classList.remove("active")})),document.getElementById(e).className+="active",document.getElementById(t).className+="active"},a=e=>{let t=document.querySelectorAll(".active");[].forEach.call(t,(e=>{e.id.includes("Days")&&e.classList.remove("active")})),document.getElementById(e).className+="active"},l=e=>{let t=document.querySelectorAll(".active");[].forEach.call(t,(e=>{e.id.includes("Days")||e.classList.remove("active")})),document.getElementById(e).className+="active"},r=e=>{let t=!1,o=document.querySelectorAll(".active");return[].forEach.call(o,(o=>{o.id==e&&(t=!0)})),t};-1!==navigator.userAgent.indexOf("Mobile")||-1!==navigator.userAgent.indexOf("iPhone")||-1!==navigator.userAgent.indexOf("Android")||navigator.userAgent.indexOf("Windows Phone")},976:(e,t,o)=>{o.d(t,{AVB:()=>n.AV,Ys:()=>a.Ys,gyn:()=>n.gy}),o(684);var n=o(19),a=o(997);o(286),o(964)},864:(e,t,o)=>{o.d(t,{v0:()=>n.v0});var n=o(924)}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return l[e](o,o.exports,i),o.exports}i.m=l,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(a,l,r)=>{var i;r&&((i=[]).d=-1);var c,s,d,u=new Set,m=a.exports,p=new Promise(((e,t)=>{d=t,s=e}));p[t]=m,p[e]=e=>(i&&e(i),u.forEach(e),p.catch((e=>{}))),a.exports=p,l((a=>{var l;c=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var l=[];l.d=0,a.then((e=>{r[t]=e,n(l)}),(e=>{r[o]=e,n(l)}));var r={};return r[e]=e=>e(l),r}}var i={};return i[e]=e=>{},i[t]=a,i})))(a);var r=()=>c.map((e=>{if(e[o])throw e[o];return e[t]})),s=new Promise((t=>{(l=()=>t(r)).r=0;var o=e=>e!==i&&!u.has(e)&&(u.add(e),e&&!e.d&&(l.r++,e.push(l)));c.map((t=>t[e](o)))}));return l.r?s:r()}),(e=>(e?d(p[o]=e):s(m),n(i)))),i&&i.d<0&&(i.d=0)},a=[],i.O=(e,t,o,n)=>{if(!t){var l=1/0;for(d=0;d<a.length;d++){for(var[t,o,n]=a[d],r=!0,c=0;c<t.length;c++)(!1&n||l>=n)&&Object.keys(i.O).every((e=>i.O[e](t[c])))?t.splice(c--,1):(r=!1,n<l&&(l=n));if(r){a.splice(d--,1);var s=o();void 0!==s&&(e=s)}}return e}n=n||0;for(var d=a.length;d>0&&a[d-1][2]>n;d--)a[d]=a[d-1];a[d]=[t,o,n]},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={716:0};i.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[l,r,c]=o,s=0;if(l.some((t=>0!==e[t]))){for(n in r)i.o(r,n)&&(i.m[n]=r[n]);if(c)var d=c(i)}for(t&&t(o);s<l.length;s++)a=l[s],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(d)},o=self.webpackChunkprod_1=self.webpackChunkprod_1||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var c=i.O(void 0,[355,529,444,924],(()=>i(141)));c=i.O(c)})();