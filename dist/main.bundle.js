(()=>{"use strict";var e,o={605:(e,o,n)=>{var t=n(864);const r=document.querySelector("#userEmail"),s=document.querySelector("#userPassword"),i=document.querySelector("#btnChangePwd"),l=document.querySelector("#new_pwd"),a=document.querySelector("#new_pwd_rpt"),c=document.querySelector("#btnBack"),d=document.querySelector("#btnLogin"),u=(document.querySelector("#btnLogout"),document.getElementById("login")),p=document.getElementById("update-pwd"),g=document.querySelector("#divLoginError"),y=document.querySelector("#lblLoginErrorMessage"),m=document.querySelector("#divPwdError"),w=document.querySelector("#pwdErr"),h=e=>{g.style.display="block",e.code==t.kq.INVALID_PASSWORD?y.innerHTML="Wrong password":"success"==sessionStorage.changePwd?y.innerHTML=e:y.innerHTML=`Error: ${e}`};-1!==navigator.userAgent.indexOf("Mobile")||-1!==navigator.userAgent.indexOf("iPhone")||-1!==navigator.userAgent.indexOf("Android")||navigator.userAgent.indexOf("Windows Phone");const v=(0,n(977).ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),f=(0,t.v0)(v),b=async()=>{let e=r.value.replace(/\s/g,"");const o=s.value;"@cml.com"!=e.substring(e.length-8)&&(e=`${e}@cml.com`),((e,o)=>(0,t.e5)(f,e,o))(e,o).then((e=>{console.log("userCredential :>> ",e),(e=>{let o=window.innerWidth<768?31:0;localStorage.setItem("initTime",o),null==localStorage.getItem("initScale")&&localStorage.setItem("initScale","linear"),localStorage.setItem("uid",e.uid),localStorage.setItem("displayName",e.displayName),sessionStorage.setItem("region","ST"),sessionStorage.changePwd=!1})(e.user),"index.html"==window.location.pathname.split("/").pop()&&(window.location.href="./curves.html")})).catch((e=>{console.log("err :>> ",e),h(e)}))},S=async()=>{if(l.value!==a.value)return"Passwords do not match",m.style.display="block",void(w.innerHTML="Error: Passwords do not match");(e=>{const o=f.currentUser;return o?(0,t.gQ)(o,e):Promise.reject(new Error("No user is currently signed in."))})(l.value).then((()=>{sessionStorage.changePwd="success",window.location.href="./index.html"})).catch((e=>{console.log("err :>> ",e)}))};window.onload=(m.style.display="none",w.innerHTML="",g.style.display="none",y.innerHTML="",void(()=>{const e=localStorage.uid;console.log("user :>> ",e);const o=sessionStorage.changePwd;"true"==o?(p.style.display="block",u.style.display="none"):"success"==o?(p.style.display="none",u.style.display="block",h("Please login back in with new password")):(p.style.display="none",u.style.display="block"),d.addEventListener("click",b),i.addEventListener("click",S),c.addEventListener("click",(()=>{window.location.href="./profile.html",sessionStorage.changePwd=!1})),u.addEventListener("keydown",(function(e){"Enter"===e.key&&(e.preventDefault(),d.click())})),p.addEventListener("keydown",(function(e){"Enter"==e.key&&(e.preventDefault(),i.click())}))})())}},n={};function t(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={exports:{}};return o[e](s,s.exports,t),s.exports}t.m=o,e=[],t.O=(o,n,r,s)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,r,s]=e[d],l=!0,a=0;a<n.length;a++)(!1&s||i>=s)&&Object.keys(t.O).every((e=>t.O[e](n[a])))?n.splice(a--,1):(l=!1,s<i&&(i=s));if(l){e.splice(d--,1);var c=r();void 0!==c&&(o=c)}}return o}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,r,s]},t.d=(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={179:0};t.O.j=o=>0===e[o];var o=(o,n)=>{var r,s,[i,l,a]=n,c=0;if(i.some((o=>0!==e[o]))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(a)var d=a(t)}for(o&&o(n);c<i.length;c++)s=i[c],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(d)},n=self.webpackChunkprod_1=self.webpackChunkprod_1||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))})();var r=t.O(void 0,[529,444,864],(()=>t(605)));r=t.O(r)})();