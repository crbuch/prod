(()=>{"use strict";var e,t,o,n,a,r={199:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.d(t,{R0:()=>d,bQ:()=>e,cm:()=>i,j6:()=>l,jD:()=>r,sb:()=>c});var a=o(976);const e=await(0,a.AVB)("../data/allProductionData.json").then((e=>e)),r=(await(0,a.AVB)("../data/dataMonthlyST.json").then((e=>e)),await(0,a.AVB)("../data/allProductionDataET.json").then((e=>e))),s=(await(0,a.AVB)("../data/cumProd.json").then((e=>e)),await(0,a.AVB)("../data/cumProdET.json").then((e=>e)),await(0,a.AVB)("../data/analyze.json").then((e=>e)),await(0,a.AVB)("../data/analyzeET.json").then((e=>e)),await(0,a.AVB)("../data/formations.json").then((e=>e)),await(0,a.AVB)("../data/economics.json").then((e=>e)),await(0,a.AVB)("../data/payouts.json").then((e=>e)),await(0,a.AVB)("../data/pumpInfo.json").then((e=>e)),await(0,a.AVB)("../data/legacyEcon.json").then((e=>e)),await(0,a.AVB)("../data\\pldata.json").then((e=>e)),await(0,a.gyn)("../data\\newProd.csv").then((e=>e)),()=>{let t=r;"et"!==sessionStorage.getItem("region")&&(t=e);const o=t[0][0],n=new Set;for(let e=0;e<t.length;e++){const a=t[e][0];if(n.add(a),a===o&0!==e)break}return n}),l=e=>{let t=(0,a.Ys)(e);s().forEach((e=>{t.append("option").text(e).property("Value",e)}))},c=e=>{const t=(0,a.Ys)("tbody");t.html(""),e.forEach((e=>{let o=t.append("tr");Object.values(e).forEach((e=>{o.append("td").text(e)}))}))},i=(e,t)=>{let o=(0,a.Ys)(t).property("value");return o?e.filter((e=>e[0]==o)):e},d=(e,t)=>{let o;event.preventDefault(),o=[...e].sort(((e,o)=>{const n=e[t];return o[t]-n})),c(o)};n()}catch(e){n(e)}}),1)},971:(e,t,o)=>{o.d(t,{z:()=>i});var n=o(914),a=o(977),r=o(864),s=o(679);const l=(0,a.ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),c=(0,r.v0)(l);(0,s.N8)();const i=async()=>{(0,r.Aj)(c,(e=>{null!=e?(localStorage.setItem("uid",e.uid),localStorage.setItem("email",e.email),console.log("user :>> ",e)):(console.log("user :>> ",e),(0,n.L8)())}))},d=async()=>{let e=n.RX.value.replace(/\s/g,"");const t=n.ek.value;"@cml.com"!=e.substring(e.length-8)&&(e=`${e}@cml.com`),(0,r.e5)(c,e,t).then((e=>{u(e.user),(0,n.i1)()})).catch((e=>{console.log("error :>> ",e),(0,n.r7)(e)}))},u=e=>{null==localStorage.getItem("initTime")&&localStorage.setItem("initTime",0),null==localStorage.getItem("initScale")&&localStorage.setItem("initScale","linear"),localStorage.setItem("uid",e.uid),localStorage.setItem("email",e.email),sessionStorage.setItem("region","st"),sessionStorage.changePwd=!1},p=async()=>{if(n.Mu.value!==n.bh.value)return void(0,n.GK)("Passwords do not match");const e=(0,r.v0)().currentUser;(0,r.gQ)(e,n.bh.value).then((()=>{console.log("s :>> "),sessionStorage.changePwd="success",window.location.href="./index.html"})).catch((e=>{console.log("update pwd error :>> ",e)}))};"index.html"==window.location.pathname.split("/").pop()&&(i(),window.onload=((0,n.qb)(),(0,n.w)(),void(()=>{const e=sessionStorage.changePwd;"true"==e?(n._v.style.display="block",n.cr.style.display="none"):"success"==e?(n._v.style.display="none",n.cr.style.display="block",(0,n.r7)("Please login back in with new password")):(n._v.style.display="none",n.cr.style.display="block"),n.Df.addEventListener("click",d),n.t5.addEventListener("click",p),n.Xe.addEventListener("click",(()=>{window.location.href="./profile.html",sessionStorage.changePwd=!1})),n.cr.addEventListener("keydown",(function(e){"Enter"===e.key&&(e.preventDefault(),n.Df.click())})),n._v.addEventListener("keydown",(function(e){"Enter"==e.key&&(e.preventDefault(),n.t5.click())}))})()))},448:(e,t,o)=>{o.d(t,{n:()=>a}),$(document).ready((function(){$("#header").load("../src/pages/header.html",(function(){a()}))}));const n=()=>{let e=sessionStorage.getItem("region");"st"==e||null==e?(console.log("switching to east"),sessionStorage.setItem("region","et")):sessionStorage.setItem("region","st"),sessionStorage.removeItem("siteSelection"),location.reload()},a=()=>{let e=sessionStorage.getItem("region");const t=document.querySelector("#fieldTitle"),o=document.querySelector("#toggleRegion");o.addEventListener("click",n);const a=$(window).width();console.log("currRegion :>> ",e),"st"==e||null==e?(o.innerHTML="East Texas",t.textContent="South Texas Field",a<768&&(t.textContent="CML EXP - South Texas")):(o.innerHTML="South Texas",t.textContent="East Texas Field",a<768&&(t.textContent="CML EXP - East Texas"))}},914:(e,t,o)=>{o.d(t,{Df:()=>d,GK:()=>S,L8:()=>y,Mu:()=>l,RX:()=>a,Xe:()=>i,_v:()=>p,bh:()=>c,cr:()=>u,ek:()=>r,i1:()=>v,qb:()=>k,r7:()=>b,t5:()=>s,w:()=>f});var n=o(864);const a=document.querySelector("#userEmail"),r=document.querySelector("#userPassword"),s=document.querySelector("#btnChangePwd"),l=document.querySelector("#new_pwd"),c=document.querySelector("#new_pwd_rpt"),i=document.querySelector("#btnBack"),d=document.querySelector("#btnLogin"),u=(document.querySelector("#btnLogout"),document.getElementById("login")),p=document.getElementById("update-pwd"),m=document.querySelector("#divLoginError"),g=document.querySelector("#lblLoginErrorMessage"),h=document.querySelector("#divPwdError"),w=document.querySelector("#pwdErr"),y=()=>{"index.html"!=window.location.pathname.split("/").pop()&&(window.location.href="./index.html")},v=()=>{"index.html"==window.location.pathname.split("/").pop()&&(window.location.href="./curves.html")},f=()=>{m.style.display="none",g.innerHTML=""},b=e=>{m.style.display="block",e.code==n.kq.INVALID_PASSWORD?g.innerHTML="Wrong password":"success"==sessionStorage.changePwd?g.innerHTML=e:g.innerHTML=`Error: ${e}`},S=e=>{h.style.display="block",w.innerHTML=`Error: ${e}`},k=()=>{h.style.display="none",w.innerHTML=""}},346:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var n=o(199),a=o(971),r=o(448),s=o(976),l=e([n]);n=(l.then?(await l)():l)[0],(0,a.z)(),(0,r.n)();const c=e=>{const t=e[0][1];return e.filter((e=>e[1]===t)).map((([e,,t,o,n,a,,r])=>[e,t,o,n,a,r]))},i="#wellFilter";let d=sessionStorage.getItem("region"),u=n.jD;"et"!==d&&(u=n.bQ);const p=c(u);document.getElementById("Prodfilter").onclick=function(){n.R0(p,1)},document.getElementById("clearFilter").onclick=function(){n.sb(p)},(0,s.Ys)(i).on("change",(()=>{n.sb(n.cm(p,i))})),window.onload=(n.sb(p),void n.j6(i)),t()}catch(e){t(e)}}))},976:(e,t,o)=>{o.d(t,{AVB:()=>n.AV,Ys:()=>a.Ys,gyn:()=>n.gy}),o(684);var n=o(19),a=o(997);o(286),o(964)},864:(e,t,o)=>{o.d(t,{Aj:()=>n.Aj,e5:()=>n.e5,gQ:()=>n.gQ,kq:()=>n.kq,v0:()=>n.v0});var n=o(924)}},s={};function l(e){var t=s[e];if(void 0!==t)return t.exports;var o=s[e]={exports:{}};return r[e](o,o.exports,l),o.exports}l.m=r,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},l.a=(a,r,s)=>{var l;s&&((l=[]).d=-1);var c,i,d,u=new Set,p=a.exports,m=new Promise(((e,t)=>{d=t,i=e}));m[t]=p,m[e]=e=>(l&&e(l),u.forEach(e),m.catch((e=>{}))),a.exports=m,r((a=>{var r;c=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var r=[];r.d=0,a.then((e=>{s[t]=e,n(r)}),(e=>{s[o]=e,n(r)}));var s={};return s[e]=e=>e(r),s}}var l={};return l[e]=e=>{},l[t]=a,l})))(a);var s=()=>c.map((e=>{if(e[o])throw e[o];return e[t]})),i=new Promise((t=>{(r=()=>t(s)).r=0;var o=e=>e!==l&&!u.has(e)&&(u.add(e),e&&!e.d&&(r.r++,e.push(r)));c.map((t=>t[e](o)))}));return r.r?i:s()}),(e=>(e?d(m[o]=e):i(p),n(l)))),l&&l.d<0&&(l.d=0)},a=[],l.O=(e,t,o,n)=>{if(!t){var r=1/0;for(d=0;d<a.length;d++){for(var[t,o,n]=a[d],s=!0,c=0;c<t.length;c++)(!1&n||r>=n)&&Object.keys(l.O).every((e=>l.O[e](t[c])))?t.splice(c--,1):(s=!1,n<r&&(r=n));if(s){a.splice(d--,1);var i=o();void 0!==i&&(e=i)}}return e}n=n||0;for(var d=a.length;d>0&&a[d-1][2]>n;d--)a[d]=a[d-1];a[d]=[t,o,n]},l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={417:0,179:0};l.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[r,s,c]=o,i=0;if(r.some((t=>0!==e[t]))){for(n in s)l.o(s,n)&&(l.m[n]=s[n]);if(c)var d=c(l)}for(t&&t(o);i<r.length;i++)a=r[i],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(d)},o=self.webpackChunkprod_1=self.webpackChunkprod_1||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var c=l.O(void 0,[529,264,355],(()=>l(346)));c=l.O(c)})();