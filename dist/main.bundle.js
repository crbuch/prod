(()=>{"use strict";var e,o={605:(e,o,t)=>{var n=t(864);const r=document.querySelector("#userEmail"),c=document.querySelector("#userPassword"),l=document.querySelector("#btnChangePwd"),s=document.querySelector("#new_pwd"),i=document.querySelector("#new_pwd_rpt"),a=document.querySelector("#btnBack"),d=document.querySelector("#btnLogin"),u=(document.querySelector("#btnLogout"),document.getElementById("login")),p=document.getElementById("update-pwd"),y=document.querySelector("#divLoginError"),m=document.querySelector("#lblLoginErrorMessage"),g=document.querySelector("#divPwdError"),w=document.querySelector("#pwdErr"),h=e=>{y.style.display="block",e.code==n.kq.INVALID_PASSWORD?m.innerHTML="Wrong password":"success"==sessionStorage.changePwd?m.innerHTML=e:m.innerHTML=`Error: ${e}`},v=(0,t(977).ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),f=(0,n.v0)(v),b=async()=>{let e=r.value.replace(/\s/g,"");const o=c.value;"@cml.com"!=e.substring(e.length-8)&&(e=`${e}@cml.com`),((e,o)=>(0,n.e5)(f,e,o))(e,o).then((e=>{console.log("userCredential :>> ",e),(e=>{let o=window.innerWidth<768?31:0;localStorage.setItem("initTime",o),null==localStorage.getItem("initScale")&&localStorage.setItem("initScale","linear"),localStorage.setItem("uid",e.uid),localStorage.setItem("displayName",e.displayName),sessionStorage.setItem("region","ST"),sessionStorage.changePwd=!1})(e.user),"index.html"==window.location.pathname.split("/").pop()&&(window.location.href="./curves.html")})).catch((e=>{console.log("err :>> ",e),h(e)}))},S=async()=>{if(s.value!==i.value)return"Passwords do not match",g.style.display="block",void(w.innerHTML="Error: Passwords do not match");(e=>{const o=f.currentUser;return o?(0,n.gQ)(o,e):Promise.reject(new Error("No user is currently signed in."))})(s.value).then((()=>{sessionStorage.changePwd="success",window.location.href="./index.html"})).catch((e=>{console.log("err :>> ",e)}))};window.onload=(g.style.display="none",w.innerHTML="",y.style.display="none",m.innerHTML="",void(()=>{const e=sessionStorage.changePwd;"true"==e?(p.style.display="block",u.style.display="none"):"success"==e?(p.style.display="none",u.style.display="block",h("Please login back in with new password")):(p.style.display="none",u.style.display="block"),d.addEventListener("click",b),l.addEventListener("click",S),a.addEventListener("click",(()=>{window.location.href="./profile.html",sessionStorage.changePwd=!1})),u.addEventListener("keydown",(function(e){"Enter"===e.key&&(e.preventDefault(),d.click())})),p.addEventListener("keydown",(function(e){"Enter"==e.key&&(e.preventDefault(),l.click())}))})())}},t={};function n(e){var r=t[e];if(void 0!==r)return r.exports;var c=t[e]={exports:{}};return o[e](c,c.exports,n),c.exports}n.m=o,e=[],n.O=(o,t,r,c)=>{if(!t){var l=1/0;for(d=0;d<e.length;d++){for(var[t,r,c]=e[d],s=!0,i=0;i<t.length;i++)(!1&c||l>=c)&&Object.keys(n.O).every((e=>n.O[e](t[i])))?t.splice(i--,1):(s=!1,c<l&&(l=c));if(s){e.splice(d--,1);var a=r();void 0!==a&&(o=a)}}return o}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[t,r,c]},n.d=(e,o)=>{for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={179:0};n.O.j=o=>0===e[o];var o=(o,t)=>{var r,c,[l,s,i]=t,a=0;if(l.some((o=>0!==e[o]))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(i)var d=i(n)}for(o&&o(t);a<l.length;a++)c=l[a],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(d)},t=self.webpackChunkprod_1=self.webpackChunkprod_1||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var r=n.O(void 0,[529,444,864],(()=>n(605)));r=n.O(r)})();