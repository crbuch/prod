(()=>{"use strict";var e,o={605:(e,o,n)=>{var t=n(864);const r=document.querySelector("#userEmail"),i=document.querySelector("#userPassword"),l=document.querySelector("#btnChangePwd"),a=document.querySelector("#new_pwd"),s=document.querySelector("#new_pwd_rpt"),c=document.querySelector("#btnBack"),d=document.querySelector("#btnLogin"),u=(document.querySelector("#btnLogout"),document.getElementById("login")),p=document.getElementById("update-pwd"),w=document.querySelector("#divLoginError"),g=document.querySelector("#lblLoginErrorMessage"),y=document.querySelector("#divPwdError"),m=document.querySelector("#pwdErr"),h=e=>{w.style.display="block",e.code==t.kq.INVALID_PASSWORD?g.innerHTML="Wrong password":"success"==sessionStorage.changePwd?g.innerHTML=e:g.innerHTML=`Error: ${e}`};-1!==navigator.userAgent.indexOf("Mobile")||-1!==navigator.userAgent.indexOf("iPhone")||-1!==navigator.userAgent.indexOf("Android")||navigator.userAgent.indexOf("Windows Phone");const v=(0,n(977).ZF)({apiKey:"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",authDomain:"cmlproduction-1e86a.firebaseapp.com",projectId:"cmlproduction-1e86a",storageBucket:"cmlproduction-1e86a.appspot.com",messagingSenderId:"924402330611",appId:"1:924402330611:web:55155c0a5c5c6a7d4b8086"}),f=(0,t.v0)(v),S=async()=>{let e=r.value.replace(/\s/g,"");const o=i.value;"@cml.com"!=e.substring(e.length-8)&&(e=`${e}@cml.com`),((e,o)=>(0,t.e5)(f,e,o))(e,o).then((e=>{console.log("userCredential :>> ",e),(e=>{let o=window.innerWidth<768?31:0;localStorage.setItem("initTime",o),null==localStorage.getItem("initScale")&&localStorage.setItem("initScale","linear"),localStorage.setItem("uid",e.uid),localStorage.setItem("displayName",e.displayName),sessionStorage.setItem("region","ST"),sessionStorage.changePwd=!1})(e.user),"index.html"==window.location.pathname.split("/").pop()&&(window.location.href="./curves.html")})).catch((e=>{console.log("err :>> ",e),h(e)}))},b=async()=>{if(a.value!==s.value)return"Passwords do not match",y.style.display="block",void(m.innerHTML="Error: Passwords do not match");(e=>{const o=f.currentUser;return o?(0,t.gQ)(o,e):Promise.reject(new Error("No user is currently signed in."))})(a.value).then((()=>{sessionStorage.changePwd="success",window.location.href="./index.html"})).catch((e=>{console.log("err :>> ",e)}))};window.onload=(f.onAuthStateChanged((e=>{if(e)console.log("user mon :>> ",e),"index.html"==window.location.pathname.split("/").pop()&&(window.location.href="./curves.html");else{const e=window.location.pathname.split("/").pop();if(console.log("currPage :>> ",e),"index.html"!=e){window.location.replace("index.html");const e=window.history.state;window.history.replaceState(e,"",window.location.href),window.onpopstate=function(){window.history.replaceState(e,"",window.location.href)}}}})),y.style.display="none",m.innerHTML="",w.style.display="none",g.innerHTML="",void(()=>{const e=localStorage.uid;console.log("user :>> ",e);const o=sessionStorage.changePwd;"true"==o?(p.style.display="block",u.style.display="none"):"success"==o?(p.style.display="none",u.style.display="block",h("Please login back in with new password")):(p.style.display="none",u.style.display="block"),d.addEventListener("click",S),l.addEventListener("click",b),c.addEventListener("click",(()=>{window.location.href="./profile.html",sessionStorage.changePwd=!1})),u.addEventListener("keydown",(function(e){"Enter"===e.key&&(e.preventDefault(),d.click())})),p.addEventListener("keydown",(function(e){"Enter"==e.key&&(e.preventDefault(),l.click())}))})())}},n={};function t(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return o[e](i,i.exports,t),i.exports}t.m=o,e=[],t.O=(o,n,r,i)=>{if(!n){var l=1/0;for(d=0;d<e.length;d++){for(var[n,r,i]=e[d],a=!0,s=0;s<n.length;s++)(!1&i||l>=i)&&Object.keys(t.O).every((e=>t.O[e](n[s])))?n.splice(s--,1):(a=!1,i<l&&(l=i));if(a){e.splice(d--,1);var c=r();void 0!==c&&(o=c)}}return o}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,r,i]},t.d=(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={179:0};t.O.j=o=>0===e[o];var o=(o,n)=>{var r,i,[l,a,s]=n,c=0;if(l.some((o=>0!==e[o]))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(s)var d=s(t)}for(o&&o(n);c<l.length;c++)i=l[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},n=self.webpackChunkprod_1=self.webpackChunkprod_1||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))})();var r=t.O(void 0,[529,444,864],(()=>t(605)));r=t.O(r)})();