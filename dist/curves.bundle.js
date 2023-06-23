(()=>{"use strict";var e,t,o,n,l,a={141:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var n=o(199),l=o(448),a=o(971),i=o(302),r=o(91),c=o(914),s=e([n]);n=(s.then?(await s)():s)[0],(0,a.z)(),(0,l.n)();const d=(e,t)=>{let o=0,n=0,l="";e.forEach((e=>{e["Well Name"].includes(t)&&(o=e["Recent Month P&L"],n=e["YTD P&L"],l=e.Date.slice(0,3))})),document.getElementById("pnl").innerHTML=`P&L : $${o.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${l}`,document.getElementById("YTD").innerHTML=`$${n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")} YTD`},u=(e,t)=>{var o=0;e.forEach((e=>{e["Well Name"].includes(t)&&(o=100*e["% Payout"])})),document.getElementById("payout").innerHTML="Payout : "+o.toFixed(0).toLocaleString("en-US")+"%"},m=(e,t)=>{let o=e.find((e=>e["Well Name"]===t));void 0!==o?0!==o.SPM?$(document).ready((function(){$("#pumpInfo").toggle(),document.getElementById("c").innerHTML=`C: ${o.C}`,document.getElementById("SPM").innerHTML=`SPM: ${o.SPM}`,document.getElementById("DHSL").innerHTML=`DH SL: ${o["DH SL"]}`,document.getElementById("ideal").innerHTML=`Ideal bfpd: ${o["Ideal bfpd"]}`,document.getElementById("pumpEff").innerHTML=`Pump Eff: ${Math.round(100*o["Pump Eff"])}`,document.getElementById("pumpDepth").innerHTML=`Pump Depth: ${o["Pump Depth"]}`,document.getElementById("GFLAP").innerHTML=`GFLAP: ${o.GFLAP}`,document.getElementById("Inc").innerHTML=`Inc: ${o.Inc}`})):$(document).ready((function(){$("#notPumpingInfo").toggle(),$("#notPumping").html("This well is not pumping")})):$(document).ready((function(){$("#notPumpingInfo").toggle(),$("#notPumping").html("No pump data available")}))},g=(e,t)=>{let o={cuml:0,gasCuml:0,waterCuml:0,formation:""};e.forEach((e=>{t===e[0]&&(o.cuml=e[1],o.gasCuml=e[3],o.waterCuml=e[2],o.formation=e[4])}));const n=document.getElementById("formation"),l=document.getElementById("cumlativeData");o.formation||(document.getElementById("filler4").style.display=""),n.innerHTML=o.formation,l.innerHTML=`Cumulative: ${o.cuml} MBO, ${o.gasCuml} MMCF, ${o.waterCuml} MBW`},p=e=>{let t=null,o=(0,i.Ys)("#siteSelection").node().value;return"default"!=o?t=[o]:null!=sessionStorage.getItem("siteSelection")?(t=[sessionStorage.getItem("siteSelection")],sessionStorage.removeItem("siteSelection")):t=[...e[0][0]],t=t.join(""),sessionStorage.siteSelection=t,t},y=(e,t)=>{const o=p(t.prodData);let n=sessionStorage.getItem("region");null==n&&(sessionStorage.setItem("region","st"),n="st"),"et"!=n&&(d(t.economicsData,o),u(t.payoutData,o),m(t.pumpData,o),document.getElementById("pumpInfo").style.display="none",document.getElementById("notPumpingInfo").style.display="none",["c","SPM","DHSL","ideal","pumpEff","pumpDepth","GFLAP","Inc","notPumping"].forEach((e=>{document.getElementById(e).innerHTML=""}))),g(t.dataCuml,o),document.getElementById("zoomEl").style.visibility="hidden",document.getElementById("wellName").innerHTML=o,document.getElementById("individualTable").style.display="none",["gasDeclineCurve","waterDeclineCurve","waterCutCurve","totalFluidCurve","combinationCurves","moOilCurve"].forEach((e=>{document.getElementById(e).style.display="block"}));const l=t.prodData.filter((e=>e[0]===o));let a=l.map((e=>e[9])),i=l.map((e=>e[2])),c=l.map((e=>e[3])),s=l.map((e=>e[4])),y=l.map((e=>e[7])),v=l.map((e=>e[8])),h=s.map(((e,t)=>e/(e+i[t])*100)),f=i.map(((e,t)=>e+s[t]));e>0&&([a,i,c,s,y,v]=[a,i,c,s,y,v].map((t=>t.slice(0,e))));const S=t.MoProdDataST.filter((e=>e[0]===o));S.pop();let b=S.map((e=>e[6])),E=S.map((e=>e[1]));E.reduce(((e,t,o)=>0===o?e.concat(t):e.concat(t+e[o-1])),[]);let w=(0,r.Ho)(a,i,"Oil [BO]",null,"green",y);const I=(0,r.Ho)(a,v,"7 Day Avg","lines",null,null,null,"dot");let B=(0,r.Ho)(a,c,"Gas [MCF]","line","red"),L=(0,r.Ho)(a,s,"Water [BW]","line","blue");const T=(0,r.Ho)(a,h,"line","#25C4DC");let C=(0,r.Ho)(a,f,"Total Fluid [BBLS]","line","black"),D=(0,r.Ho)(b,E,"Monthly Oil [BO]","line","green");const P=document.getElementById("logarithmic").classList.contains("active")?"log":"linear",M=[w,I,B,L,C];let k=[[B],[L],[C],[T],M,[D]];["gasDeclineCurve","waterDeclineCurve","totalFluidCurve","waterCutCurve","combinationCurves","moOilCurve"].forEach(((e,t)=>{k[t].forEach((e=>{e.visible=4===t&&"Oil [BO]"!==e.name?"legendonly":e.visible}));const o=(0,r.wx)(["Gas vs Time (MCFD)","Water vs Time (BWPD)","Total Fluid vs Time (BFPD)","Water Cut Percentage","Combined Production","Monthly Oil vs Time (BOPM)"][t],P,"log"===P?[1,2,5,10,20,50,100,200,500,1e3,2e3,3e3]:null);Plotly.newPlot(e,k[t],o,r.vc)}));const x=document.getElementById("combinationCurves");x.on("plotly_relayout",(function(e){JSON.stringify(e);const t=document.getElementById("zoomEl");t.innerHTML="";const o=document.createElement("p");o.textContent="Produced:",t.appendChild(o);let{"xaxis.range[0]":n,"xaxis.range[1]":l}=e;n||(n=a[a.length-1],l=a[0]);const r=n.substring(0,10),d=l.substring(0,10),u=a.indexOf(`${r}T00:00:00.000Z`),m=a.indexOf(`${d}T00:00:00.000Z`);if(-1===u)return;const g=JSON.parse(sessionStorage.getItem("visible_traces")),p={"Gas [MCF]":c,"Oil [BO]":i,"Water [BW]":s,"Total Fluid [BBLS]":f};for(const[e,o]of Object.entries(g))for(let e of o){const o=p[e];console.log(`sum ${e}:>> `,o.slice(m,u+1).reduce(((e,t)=>e+t),0)/1e3);const n=(o.slice(m,u+1).reduce(((e,t)=>e+t),0)/1e3).toFixed(1);let l=-5;"Total Fluid [MB]"==e&&(l=-4);const a=e.slice(l);let i=e.slice(0,l);"Total Fluid [MB]"==e&&(i=`${i} `);const r=document.createElement("p");r.textContent=`${i}: ${n} ${a}`,r.style.fontSize="15px",t.appendChild(r)}t.style.visibility="visible"})),x.on("plotly_legendclick",(function(e){const t=e.curveNumber,o=M[t].name;let n=JSON.parse(sessionStorage.visible_traces)||{visible_traces:[]};n.visible.includes(o)?n.visible=n.visible.filter((e=>e!==o)):n.visible.push(o),sessionStorage.setItem("visible_traces",JSON.stringify(n))})),document.getElementById("siteSelection").focus(),document.getElementById("filler4").style.display="none"},v=e=>{const t=e.map((e=>[...e])),o=p(t),l=t.filter((e=>e[0]==o));l.forEach((e=>{e.shift();for(let t=0;t<2;t++)e.pop()})),n.sb(l),document.getElementById("individualTable").style.display="inline-block",["gasDeclineCurve","waterDeclineCurve","waterCutCurve","totalFluidCurve","combinationCurves","cumOilCurve","cumVSdailyProdCurve","cumVSmoProdCurve","moOilCurve"].forEach((e=>{document.getElementById(e).style.display="none"}))},h=e=>{e.preventDefault();const t=e.target;document.getElementById(t.id).parentNode.querySelectorAll("*").forEach((e=>{e.classList.remove("active")})),t.className+="active";const o=document.getElementById("timeframes").querySelectorAll(".active")[0].id.substring(4);console.log("activeTime :>> ",o),y(Number(o)+1,I),setTimeout((function(){console.log("in ddd");try{console.log("closing"),document.getElementById("siteSelection").blur(),console.log("closed..")}catch{console.log("e")}}),100)},f=localStorage.getItem("uid");let S=sessionStorage.getItem("region");console.log("currUid :>> ",f);let b=n.bQ,E=n.OJ,w=n.kL;"et"==S&&(b=n.jD,E=n.n1);const I={prodData:b,dataCuml:E,economicsData:n.vY,payoutData:n.o8,pumpData:n.zY,MoProdDataST:w};["linear","logarithmic","DaysInception","Days30","Days365","Days180"].forEach((e=>{document.getElementById(e).addEventListener("click",h)}));const B="#siteSelection";n.j6(B),(0,i.Ys)(B).on("change",(()=>{y(localStorage.getItem("initTime"),I)})),document.getElementById(B).addEventListener("click",(()=>{console.log("hit dd")})),document.getElementById("table").addEventListener("click",(()=>{!0!==(0,c.oN)("table")&&((0,c.Iv)("table","DaysInception"),v(b))}));let L={visible:["Oil [BO]"]};sessionStorage.setItem("visible_traces",JSON.stringify(L)),window.onload=function(){let e="DaysInception";31==localStorage.getItem("initTime")&&(e="Days30"),(0,c.LB)(e),(0,c.uG)(localStorage.getItem("initScale")),y(localStorage.getItem("initTime"),I)}(),t()}catch(e){t(e)}}))},199:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.d(t,{OJ:()=>r,bQ:()=>e,j6:()=>g,jD:()=>i,kL:()=>a,n1:()=>c,o8:()=>d,sb:()=>p,vY:()=>s,zY:()=>u});var l=o(302);const e=await(0,l.AVB)("../data/allProductionData.json").then((e=>e)),a=await(0,l.AVB)("../data/dataMonthlyST.json").then((e=>e)),i=await(0,l.AVB)("../data/allProductionDataET.json").then((e=>e)),r=await(0,l.AVB)("../data/cumProd.json").then((e=>e)),c=await(0,l.AVB)("../data/cumProdET.json").then((e=>e)),s=(await(0,l.AVB)("../data/analyze.json").then((e=>e)),await(0,l.AVB)("../data/analyzeET.json").then((e=>e)),await(0,l.AVB)("../data/formations.json").then((e=>e)),await(0,l.AVB)("../data/economics.json").then((e=>e))),d=await(0,l.AVB)("../data/payouts.json").then((e=>e)),u=await(0,l.AVB)("../data/pumpInfo.json").then((e=>e)),m=(await(0,l.AVB)("../data/legacyEcon.json").then((e=>e)),await(0,l.AVB)("../data\\pldata.json").then((e=>e)),()=>{let t=i;"et"!==sessionStorage.getItem("region")&&(t=e);const o=t[0][0],n=new Set;for(let e=0;e<t.length;e++){const l=t[e][0];if(n.add(l),l===o&0!==e)break}return n}),g=e=>{let t=(0,l.Ys)(e);m().forEach((e=>{t.append("option").text(e).property("Value",e)}))},p=e=>{const t=(0,l.Ys)("tbody");t.html(""),e.forEach((e=>{let o=t.append("tr");Object.values(e).forEach((e=>{o.append("td").text(e)}))}))};n()}catch(e){n(e)}}),1)},971:(e,t,o)=>{o.d(t,{z:()=>s});var n=o(914),l=o(977),a=o(864),i=o(679);const r=(0,l.ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),c=(0,a.v0)(r);(0,i.N8)();const s=async()=>{(0,a.Aj)(c,(e=>{null!=e?(localStorage.setItem("uid",e.uid),localStorage.setItem("email",e.email),console.log("user :>> ",e)):(console.log("user :>> ",e),(0,n.L8)())}))},d=async()=>{let e=n.RX.value.replace(/\s/g,"");const t=n.ek.value;"@cml.com"!=e.substring(e.length-8)&&(e=`${e}@cml.com`),(0,a.e5)(c,e,t).then((e=>{u(e.user),(0,n.i1)()})).catch((e=>{console.log("error :>> ",e),(0,n.r7)(e)}))},u=e=>{null==localStorage.getItem("initTime")&&localStorage.setItem("initTime",0),null==localStorage.getItem("initScale")&&localStorage.setItem("initScale","linear"),localStorage.setItem("uid",e.uid),localStorage.setItem("email",e.email),sessionStorage.setItem("region","st"),sessionStorage.changePwd=!1},m=async()=>{if(n.Mu.value!==n.bh.value)return void(0,n.GK)("Passwords do not match");const e=(0,a.v0)().currentUser;(0,a.gQ)(e,n.bh.value).then((()=>{console.log("s :>> "),sessionStorage.changePwd="success",window.location.href="./index.html"})).catch((e=>{console.log("update pwd error :>> ",e)}))};"index.html"==window.location.pathname.split("/").pop()&&(s(),window.onload=((0,n.qb)(),(0,n.w)(),void(()=>{const e=sessionStorage.changePwd;"true"==e?(n._v.style.display="block",n.cr.style.display="none"):"success"==e?(n._v.style.display="none",n.cr.style.display="block",(0,n.r7)("Please login back in with new password")):(n._v.style.display="none",n.cr.style.display="block"),n.Df.addEventListener("click",d),n.t5.addEventListener("click",m),n.Xe.addEventListener("click",(()=>{window.location.href="./profile.html",sessionStorage.changePwd=!1})),n.cr.addEventListener("keydown",(function(e){"Enter"===e.key&&(e.preventDefault(),n.Df.click())})),n._v.addEventListener("keydown",(function(e){"Enter"==e.key&&(e.preventDefault(),n.t5.click())}))})()))},91:(e,t,o)=>{o.d(t,{Ho:()=>n,vc:()=>a,wx:()=>l});const n=(e,t,o,n="lines",l,a,i=!0,r)=>({x:e,y:t,text:a,name:o,visible:i,line:{color:l,dash:r},mode:n}),l=(e,t,o,n,l)=>({title:e,height:null,legend:{orientation:"h",y:1.1,xanchor:"center",x:.5},yaxis:{title:n,type:t||"linear",rangemode:"tozero",autorange:!0,tickformat:"f",tickvals:o,gridcolor:"#dbdbdb"},xaxis:{title:l,gridcolor:"#dbdbdb"}}),a={modeBarButtonsToRemove:["sendDataToCloud","autoScale2d","hoverClosestCartesian","hoverCompareCartesian","lasso2d","zoomIn2d","zoomOut2d","toggleSpikelines"],displaylogo:!1,responsive:!0}},448:(e,t,o)=>{o.d(t,{n:()=>l}),$(document).ready((function(){$("#header").load("../src/pages/header.html",(function(){l()}))}));const n=()=>{let e=sessionStorage.getItem("region");"st"==e||null==e?(console.log("switching to east"),sessionStorage.setItem("region","et")):sessionStorage.setItem("region","st"),sessionStorage.removeItem("siteSelection"),location.reload()},l=()=>{let e=sessionStorage.getItem("region");const t=document.querySelector("#fieldTitle"),o=document.querySelector("#toggleRegion");o.addEventListener("click",n);const l=$(window).width();console.log("currRegion :>> ",e),"st"==e||null==e?(o.innerHTML="East Texas",t.textContent="South Texas Field",l<768&&(t.textContent="CML EXP - South Texas")):(o.innerHTML="South Texas",t.textContent="East Texas Field",l<768&&(t.textContent="CML EXP - East Texas"))}},914:(e,t,o)=>{o.d(t,{Df:()=>d,GK:()=>E,Iv:()=>I,L8:()=>h,LB:()=>B,Mu:()=>r,RX:()=>l,Xe:()=>s,_v:()=>m,bh:()=>c,cr:()=>u,ek:()=>a,i1:()=>f,oN:()=>T,qb:()=>w,r7:()=>b,t5:()=>i,uG:()=>L,w:()=>S});var n=o(864);const l=document.querySelector("#userEmail"),a=document.querySelector("#userPassword"),i=document.querySelector("#btnChangePwd"),r=document.querySelector("#new_pwd"),c=document.querySelector("#new_pwd_rpt"),s=document.querySelector("#btnBack"),d=document.querySelector("#btnLogin"),u=(document.querySelector("#btnLogout"),document.getElementById("login")),m=document.getElementById("update-pwd"),g=document.querySelector("#divLoginError"),p=document.querySelector("#lblLoginErrorMessage"),y=document.querySelector("#divPwdError"),v=document.querySelector("#pwdErr"),h=()=>{"index.html"!=window.location.pathname.split("/").pop()&&(window.location.href="./index.html")},f=()=>{"index.html"==window.location.pathname.split("/").pop()&&(window.location.href="./curves.html")},S=()=>{g.style.display="none",p.innerHTML=""},b=e=>{g.style.display="block",e.code==n.kq.INVALID_PASSWORD?p.innerHTML="Wrong password":"success"==sessionStorage.changePwd?p.innerHTML=e:p.innerHTML=`Error: ${e}`},E=e=>{y.style.display="block",v.innerHTML=`Error: ${e}`},w=()=>{y.style.display="none",v.innerHTML=""},I=(e,t)=>{let o=document.querySelectorAll(".active");[].forEach.call(o,(e=>{e.classList.remove("active")})),document.getElementById(e).className+="active",document.getElementById(t).className+="active"},B=e=>{let t=document.querySelectorAll(".active");[].forEach.call(t,(e=>{e.id.includes("Days")&&e.classList.remove("active")})),document.getElementById(e).className+="active"},L=e=>{let t=document.querySelectorAll(".active");[].forEach.call(t,(e=>{e.id.includes("Days")||e.classList.remove("active")})),document.getElementById(e).className+="active"},T=e=>{let t=!1,o=document.querySelectorAll(".active");return[].forEach.call(o,(o=>{o.id==e&&(t=!0)})),t}},302:(e,t,o)=>{o.d(t,{AVB:()=>n.Z,Ys:()=>l.Ys}),o(684);var n=o(950),l=o(997);o(286),o(964)},864:(e,t,o)=>{o.d(t,{Aj:()=>n.Aj,e5:()=>n.e5,gQ:()=>n.gQ,kq:()=>n.kq,v0:()=>n.v0});var n=o(924)}},i={};function r(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={exports:{}};return a[e](o,o.exports,r),o.exports}r.m=a,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},r.a=(l,a,i)=>{var r;i&&((r=[]).d=1);var c,s,d,u=new Set,m=l.exports,g=new Promise(((e,t)=>{d=t,s=e}));g[t]=m,g[e]=e=>(r&&e(r),u.forEach(e),g.catch((e=>{}))),l.exports=g,a((l=>{var a;c=(l=>l.map((l=>{if(null!==l&&"object"==typeof l){if(l[e])return l;if(l.then){var a=[];a.d=0,l.then((e=>{i[t]=e,n(a)}),(e=>{i[o]=e,n(a)}));var i={};return i[e]=e=>e(a),i}}var r={};return r[e]=e=>{},r[t]=l,r})))(l);var i=()=>c.map((e=>{if(e[o])throw e[o];return e[t]})),s=new Promise((t=>{(a=()=>t(i)).r=0;var o=e=>e!==r&&!u.has(e)&&(u.add(e),e&&!e.d&&(a.r++,e.push(a)));c.map((t=>t[e](o)))}));return a.r?s:i()}),(e=>(e?d(g[o]=e):s(m),n(r)))),r&&(r.d=0)},l=[],r.O=(e,t,o,n)=>{if(!t){var a=1/0;for(d=0;d<l.length;d++){for(var[t,o,n]=l[d],i=!0,c=0;c<t.length;c++)(!1&n||a>=n)&&Object.keys(r.O).every((e=>r.O[e](t[c])))?t.splice(c--,1):(i=!1,n<a&&(a=n));if(i){l.splice(d--,1);var s=o();void 0!==s&&(e=s)}}return e}n=n||0;for(var d=l.length;d>0&&l[d-1][2]>n;d--)l[d]=l[d-1];l[d]=[t,o,n]},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={716:0,179:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,l,[a,i,c]=o,s=0;if(a.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var d=c(r)}for(t&&t(o);s<a.length;s++)l=a[s],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(d)},o=self.webpackChunkprod_1=self.webpackChunkprod_1||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var c=r.O(void 0,[529,264,883],(()=>r(141)));c=r.O(c)})();