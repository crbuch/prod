(()=>{"use strict";var e,t,o,n,a,l={353:(e,t,o)=>{o.d(t,{m_:()=>r});var n=o(977),a=o(864);const l=(0,n.ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),i=(0,a.v0)(l),r=()=>{i.onAuthStateChanged((e=>{if(e)console.log("user mon :>> ",e);else{console.log("none"),window.location.replace("index.html");const e=window.history.state;window.history.replaceState(e,"",window.location.href),window.onpopstate=function(){window.history.replaceState(e,"",window.location.href)}}}))}},141:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var n=o(199),a=o(353),l=o(448),i=o(976),r=o(91),c=o(914),s=e([n]);n=(s.then?(await s)():s)[0],(0,a.m_)(),(0,l.n)();const d=(e,t)=>{let o=0,n=0,a="";e.forEach((e=>{e["Well Name"].includes(t)&&(o=e["Recent Month P&L"],n=e["YTD P&L"],a=e.Date.slice(0,3))})),document.getElementById("pnl").innerHTML=`P&L : $${o.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${a}`,document.getElementById("YTD").innerHTML=`$${n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")} YTD`},u=(e,t)=>{var o=0;e.forEach((e=>{e["Well Name"].includes(t)&&(o=100*e["% Payout"])})),document.getElementById("payout").innerHTML="Payout : "+o.toFixed(0).toLocaleString("en-US")+"%"},m=(e,t)=>{let o=e.find((e=>e["Well Name"]===t));void 0!==o?0!==o.SPM?$(document).ready((function(){$("#pumpInfo").toggle(),document.getElementById("c").innerHTML=`C: ${o.C}`,document.getElementById("SPM").innerHTML=`SPM: ${o.SPM}`,document.getElementById("DHSL").innerHTML=`DH SL: ${o["DH SL"]}`,document.getElementById("ideal").innerHTML=`Ideal bfpd: ${o["Ideal bfpd"]}`,document.getElementById("pumpEff").innerHTML=`Pump Eff: ${Math.round(100*o["Pump Eff"])}`,document.getElementById("pumpDepth").innerHTML=`Pump Depth: ${o["Pump Depth"]}`,document.getElementById("GFLAP").innerHTML=`GFLAP: ${o.GFLAP}`,document.getElementById("Inc").innerHTML=`Inc: ${o.Inc}`})):$(document).ready((function(){$("#notPumpingInfo").toggle(),$("#notPumping").html("This well is not pumping")})):$(document).ready((function(){$("#notPumpingInfo").toggle(),$("#notPumping").html("No pump data available")}))},g=(e,t)=>{"South Texas Total"==t&&(t="ST Total");let o={cuml:0,gasCuml:0,waterCuml:0,formation:""};e.forEach((e=>{t===e[0]&&(o.cuml=e[1],o.gasCuml=e[3],o.waterCuml=e[2],o.formation=e[4]||"")}));const n=document.getElementById("formation"),a=document.getElementById("cumlativeData");o.formation||(document.getElementById("filler4").style.display=""),n.innerHTML=o.formation,a.innerHTML=`Cumulative: ${o.cuml} MBO, ${o.gasCuml} MMCF, ${o.waterCuml} MBW`},p=e=>{let t=null,o=(0,i.Ys)("#siteSelection").node().value;return"default"!=o?t=[o]:null!=sessionStorage.getItem("siteSelection")?(t=[sessionStorage.getItem("siteSelection")],sessionStorage.removeItem("siteSelection")):t=[...e[0][0]],t=t.join(""),sessionStorage.siteSelection=t,t},y=()=>{const e=n.kg;let t=e.map((e=>e["New Prod"]),[]).reverse();return{date:e.map((e=>e.Date),[]).reverse(),"new oil":t,percent:e.map((e=>e.percent),[]).reverse()}},v=(e,t)=>{const o=p(t.prodData);let n=sessionStorage.getItem("region");null==n&&(sessionStorage.setItem("region","st"),n="st"),"et"!=n&&(d(t.economicsData,o),u(t.payoutData,o),m(t.pumpData,o),document.getElementById("pumpInfo").style.display="none",document.getElementById("notPumpingInfo").style.display="none",["c","SPM","DHSL","ideal","pumpEff","pumpDepth","GFLAP","Inc","notPumping"].forEach((e=>{document.getElementById(e).innerHTML=""}))),g(t.dataCuml,o),document.getElementById("zoomEl").style.visibility="hidden",document.getElementById("wellName").innerHTML=o,document.getElementById("individualTable").style.display="none",["gasDeclineCurve","waterDeclineCurve","waterCutCurve","totalFluidCurve","combinationCurves","moOilCurve"].forEach((e=>{document.getElementById(e).style.display="block"}));let a=y(),l=a.date,i=a["new oil"],c=a.percent;console.log("data :>> ",t);const s=t.prodData.filter((e=>e[0]===o));let v=s.map((e=>e[9])),f=s.map((e=>e[2])),h=s.map((e=>e[3])),S=s.map((e=>e[4])),b=s.map((e=>e[7])),w=s.map((e=>e[8])),E=S.map(((e,t)=>e/(e+f[t])*100)),I=s.map((e=>e[10]));e>0&&([v,f,h,S,b,w,i,l,c]=[v,f,h,S,b,w,i,l,c].map((t=>t.slice(0,e))));const B=t.MoProdData.filter((e=>e[0]===o));B.pop();let C=B.map((e=>e[6])),T=B.map((e=>e[1]));T.reduce(((e,t,o)=>0===o?e.concat(t):e.concat(t+e[o-1])),[]);let P=(0,r.Ho)(l,i,"Production from New Wells (365 Days)",null,"purple",null,!0),D=(0,r.Ho)(v,f,"Oil [BO]",null,"green",b);const L=(0,r.Ho)(v,w,"7 Day Avg","lines",null,null,null,"dot");let x=(0,r.Ho)(v,h,"Gas [MCF]","line","red"),M=(0,r.Ho)(v,S,"Water [BW]","line","blue");const O=(0,r.Ho)(v,E,"line","#25C4DC");let $=(0,r.Ho)(v,I,"Total Fluid [BBLS]","line","black"),H=(0,r.Ho)(C,T,"Monthly Oil [BO]","line","green"),j=(0,r.Ho)(l,c,"Percent Past Year Production","line","green");const k=document.getElementById("logarithmic").classList.contains("active")?"log":"linear",A=["gasDeclineCurve","waterDeclineCurve","totalFluidCurve","waterCutCurve","combinationCurves","moOilCurve","ratioRecProd"];let _=[D,L,x,M,$,P];"South Texas Total"!==o&&_.pop();let F=[[x],[M],[$],[O],_,[H],[j]];"South Texas Total"!==o&&(F.pop(),A.pop()),A.forEach(((e,t)=>{F[t].forEach((e=>{e.visible=4===t&&"Oil [BO]"!==e.name?"legendonly":e.visible}));const o=(0,r.wx)(["Gas vs Time (MCFD)","Water vs Time (BWPD)","Total Fluid vs Time (BFPD)","Water Cut Percentage","Combined Production","Monthly Oil vs Time (BOPM)","Percent Production from New Wells (365 Days)"][t],k,"log"===k?[1,2,5,10,20,50,100,200,500,1e3,2e3,3e3]:null);console.log("traceArrays[i] :>> ",F[t]),console.log("container :>> ",e),Plotly.newPlot(e,F[t],o,r.vc)}));const N=document.getElementById("combinationCurves");N.on("plotly_relayout",(function(e){JSON.stringify(e);const t=document.getElementById("zoomEl");t.innerHTML="";const o=document.createElement("p");o.textContent="Produced:",t.appendChild(o);let{"xaxis.range[0]":n,"xaxis.range[1]":a}=e;n||(n=v[v.length-1],a=v[0]);const l=n.substring(0,10),i=a.substring(0,10),r=v.findIndex((e=>e.includes(l))),c=v.findIndex((e=>e.includes(i)));if(-1===r)return;const s=JSON.parse(sessionStorage.getItem("visible_traces")),d={"Gas [MCF]":h,"Oil [BO]":f,"Water [BW]":S,"Total Fluid [BBLS]":I};for(const[e,o]of Object.entries(s))for(let e of o){const o=d[e];console.log(`sum ${e}:>> `,o.slice(c,r+1).reduce(((e,t)=>e+t),0)/1e3);const n=(o.slice(c,r+1).reduce(((e,t)=>e+t),0)/1e3).toFixed(1);let a=-5;"Total Fluid [MB]"==e&&(a=-4);const l=e.slice(a);let i=e.slice(0,a);"Total Fluid [MB]"==e&&(i=`${i} `);const s=document.createElement("p");s.textContent=`${i}: ${n} ${l}`,s.style.fontSize="15px",t.appendChild(s)}t.style.visibility="visible"})),N.on("plotly_legendclick",(function(e){const t=e.curveNumber,o=_[t].name;let n=JSON.parse(sessionStorage.visible_traces)||{visible_traces:[]};n.visible.includes(o)?n.visible=n.visible.filter((e=>e!==o)):n.visible.push(o),sessionStorage.setItem("visible_traces",JSON.stringify(n))})),document.getElementById("siteSelection").focus(),document.getElementById("filler4").style.display="none"},f=e=>{const t=e.map((e=>[...e])),o=p(t);let a=t.filter((e=>e[0]==o));console.log("well :>> ",a),a.forEach((e=>{e.shift();for(let t=0;t<3;t++)e.pop()})),console.log("well :>> ",a),n.sb(a),document.getElementById("individualTable").style.display="inline-block",["gasDeclineCurve","waterDeclineCurve","waterCutCurve","totalFluidCurve","combinationCurves","cumOilCurve","cumVSdailyProdCurve","cumVSmoProdCurve","moOilCurve"].forEach((e=>{document.getElementById(e).style.display="none"}))},h=e=>{e.preventDefault();const t=e.target;document.getElementById(t.id).parentNode.querySelectorAll("*").forEach((e=>{e.classList.remove("active")})),t.className+="active";const o=document.getElementById("timeframes").querySelectorAll(".active")[0].id.substring(4);v(Number(o)+1,B),window.innerWidth<400&&setTimeout((function(){try{document.getElementById("siteSelection").blur(),console.log("blurringg")}catch{}}),50),document.getElementById("siteSelection").focus()},S=localStorage.getItem("uid");let b=sessionStorage.getItem("region");console.log("currUid :>> ",S);let w=n.bQ,E=n.OJ,I=n.kL;"et"==b&&(w=n.jD,E=n.n1,I=n.$g);const B={prodData:w,dataCuml:E,economicsData:n.vY,payoutData:n.o8,pumpData:n.zY,MoProdData:I};["linear","logarithmic","DaysInception","Days30","Days365","Days180"].forEach((e=>{document.getElementById(e).addEventListener("click",h)}));const C="#siteSelection";n.j6(C),(0,i.Ys)(C).on("change",(()=>{let e="DaysInception";31==localStorage.initTime&&(e="Days30"),v(localStorage.initTime,B),(0,c.LB)(e)})),document.getElementById("table").addEventListener("click",(()=>{!0!==(0,c.oN)("table")&&((0,c.Iv)("table","DaysInception"),f(w))}));let T={visible:["Oil [BO]"]};sessionStorage.setItem("visible_traces",JSON.stringify(T)),window.onload=function(){let e="DaysInception";31==localStorage.getItem("initTime")&&(e="Days30"),(0,c.LB)(e),(0,c.uG)(localStorage.getItem("initScale")),v(localStorage.getItem("initTime"),B)}(),t()}catch(e){t(e)}}))},199:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.d(t,{$g:()=>r,OJ:()=>c,bQ:()=>e,j6:()=>y,jD:()=>l,kL:()=>i,kg:()=>g,n1:()=>s,o8:()=>u,sb:()=>v,vY:()=>d,zY:()=>m});var a=o(976);const e=await(0,a.AVB)("../data/allProductionData.json").then((e=>e)),l=await(0,a.AVB)("../data/allProductionDataET.json").then((e=>e)),i=await(0,a.AVB)("../data/dataMonthlyST.json").then((e=>e)),r=await(0,a.AVB)("../data/dataMonthlyET.json").then((e=>e)),c=await(0,a.AVB)("../data/cumProd.json").then((e=>e)),s=await(0,a.AVB)("../data/cumProdET.json").then((e=>e)),d=(await(0,a.AVB)("../data/analyze.json").then((e=>e)),await(0,a.AVB)("../data/analyzeET.json").then((e=>e)),await(0,a.AVB)("../data/formations.json").then((e=>e)),await(0,a.AVB)("../data/economics.json").then((e=>e))),u=await(0,a.AVB)("../data/payouts.json").then((e=>e)),m=await(0,a.AVB)("../data/pumpInfo.json").then((e=>e)),g=(await(0,a.AVB)("../data/legacyEcon.json").then((e=>e)),await(0,a.AVB)("../data\\pldata1.json").then((e=>e)),await(0,a.gyn)("../data\\recYrProd.csv").then((e=>e))),p=()=>{let t=l;"et"!==sessionStorage.getItem("region")&&(t=e);const o=t[0][0],n=new Set;for(let e=0;e<t.length;e++){const a=t[e][0];if(n.add(a),a===o&0!==e)break}return n},y=e=>{let t=(0,a.Ys)(e);p().forEach((e=>{t.append("option").text(e).property("Value",e)}))},v=e=>{const t=(0,a.Ys)("tbody");t.html(""),e.forEach((e=>{let o=t.append("tr");Object.values(e).forEach((e=>{o.append("td").text(e)}))}))};n()}catch(e){n(e)}}),1)},91:(e,t,o)=>{o.d(t,{Ho:()=>n,vc:()=>l,wx:()=>a});const n=(e,t,o,n="lines",a,l,i=!0,r)=>({x:e,y:t,text:l,name:o,visible:i,line:{color:a,dash:r},mode:n}),a=(e,t,o,n,a)=>({title:e,height:null,legend:{bgcolor:"rgba(0, 0, 0, 0)",font:{color:"#000000"},orientation:"h",y:1.1,xanchor:window.innerWidth>400?"center":"left",x:.5},yaxis:{title:n,type:t||"linear",rangemode:"tozero",autorange:!0,tickformat:"f",tickvals:o,gridcolor:"#dbdbdb"},xaxis:{title:a,gridcolor:"#dbdbdb"}}),l={modeBarButtonsToRemove:["sendDataToCloud","autoScale2d","hoverClosestCartesian","hoverCompareCartesian","lasso2d","zoomIn2d","zoomOut2d","toggleSpikelines"],displaylogo:!1,responsive:!0,displayModeBar:!1,responsiveConfig:[{breakpoint:768,options:{legend:{orientation:"h",y:-.2}}},{breakpoint:0,options:{legend:{orientation:"v",y:1}}}]}},448:(e,t,o)=>{o.d(t,{n:()=>a}),$(document).ready((function(){$("#header").load("../src/pages/header.html",(function(){}))}));const n=()=>{let e=sessionStorage.getItem("region");"st"==e||null==e?(console.log("switching to east"),sessionStorage.setItem("region","et")):sessionStorage.setItem("region","st"),sessionStorage.removeItem("siteSelection"),location.reload()},a=()=>{let e=sessionStorage.getItem("region");const t=document.querySelector("#fieldTitle"),o=document.querySelector("#toggleRegion");o.addEventListener("click",n);const a=$(window).width();console.log("currRegion :>> ",e),"st"==e||null==e?(o.innerHTML="East Texas",t.textContent="South Texas Field",a<768&&(t.textContent="CML EXP - South Texas")):(o.innerHTML="South Texas",t.textContent="East Texas Field",a<768&&(t.textContent="CML EXP - East Texas"))}},914:(e,t,o)=>{o.d(t,{Iv:()=>n,LB:()=>a,oN:()=>i,uG:()=>l}),o(864),document.querySelector("#userEmail"),document.querySelector("#userPassword"),document.querySelector("#btnChangePwd"),document.querySelector("#new_pwd"),document.querySelector("#new_pwd_rpt"),document.querySelector("#btnBack"),document.querySelector("#btnLogin"),document.querySelector("#btnLogout"),document.getElementById("login"),document.getElementById("update-pwd"),document.querySelector("#divLoginError"),document.querySelector("#lblLoginErrorMessage"),document.querySelector("#divPwdError"),document.querySelector("#pwdErr");const n=(e,t)=>{let o=document.querySelectorAll(".active");[].forEach.call(o,(e=>{e.classList.remove("active")})),document.getElementById(e).className+="active",document.getElementById(t).className+="active"},a=e=>{let t=document.querySelectorAll(".active");[].forEach.call(t,(e=>{e.id.includes("Days")&&e.classList.remove("active")})),document.getElementById(e).className+="active"},l=e=>{let t=document.querySelectorAll(".active");[].forEach.call(t,(e=>{e.id.includes("Days")||e.classList.remove("active")})),document.getElementById(e).className+="active"},i=e=>{let t=!1,o=document.querySelectorAll(".active");return[].forEach.call(o,(o=>{o.id==e&&(t=!0)})),t}},976:(e,t,o)=>{o.d(t,{AVB:()=>n.AV,Ys:()=>a.Ys,gyn:()=>n.gy}),o(684);var n=o(19),a=o(997);o(286),o(964)},864:(e,t,o)=>{o.d(t,{v0:()=>n.v0});var n=o(924)}},i={};function r(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={exports:{}};return l[e](o,o.exports,r),o.exports}r.m=l,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},r.a=(a,l,i)=>{var r;i&&((r=[]).d=1);var c,s,d,u=new Set,m=a.exports,g=new Promise(((e,t)=>{d=t,s=e}));g[t]=m,g[e]=e=>(r&&e(r),u.forEach(e),g.catch((e=>{}))),a.exports=g,l((a=>{var l;c=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var l=[];l.d=0,a.then((e=>{i[t]=e,n(l)}),(e=>{i[o]=e,n(l)}));var i={};return i[e]=e=>e(l),i}}var r={};return r[e]=e=>{},r[t]=a,r})))(a);var i=()=>c.map((e=>{if(e[o])throw e[o];return e[t]})),s=new Promise((t=>{(l=()=>t(i)).r=0;var o=e=>e!==r&&!u.has(e)&&(u.add(e),e&&!e.d&&(l.r++,e.push(l)));c.map((t=>t[e](o)))}));return l.r?s:i()}),(e=>(e?d(g[o]=e):s(m),n(r)))),r&&(r.d=0)},a=[],r.O=(e,t,o,n)=>{if(!t){var l=1/0;for(d=0;d<a.length;d++){for(var[t,o,n]=a[d],i=!0,c=0;c<t.length;c++)(!1&n||l>=n)&&Object.keys(r.O).every((e=>r.O[e](t[c])))?t.splice(c--,1):(i=!1,n<l&&(l=n));if(i){a.splice(d--,1);var s=o();void 0!==s&&(e=s)}}return e}n=n||0;for(var d=a.length;d>0&&a[d-1][2]>n;d--)a[d]=a[d-1];a[d]=[t,o,n]},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={716:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[l,i,c]=o,s=0;if(l.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var d=c(r)}for(t&&t(o);s<l.length;s++)a=l[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},o=self.webpackChunkprod_1=self.webpackChunkprod_1||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var c=r.O(void 0,[355,529,444,924],(()=>r(141)));c=r.O(c)})();