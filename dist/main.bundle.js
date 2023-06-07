/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changePwd: () => (/* binding */ changePwd),\n/* harmony export */   logout: () => (/* binding */ logout),\n/* harmony export */   monitorAuthState: () => (/* binding */ monitorAuthState)\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n// entry point \r\n\r\n\r\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU\",\r\n  authDomain: \"cmlproduction-1e86a.firebaseapp.com\",\r\n  projectId: \"cmlproduction-1e86a\",\r\n  storageBucket: \"cmlproduction-1e86a.appspot.com\",\r\n  messagingSenderId: \"924402330611\",\r\n  appId: \"1:924402330611:web:55155c0a5c5c6a7d4b8086\"\r\n};\r\n\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)();\r\n\r\nfunction writedb(name,data,uid){\r\n  const reference = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)(db,'users/' + uid);\r\n\r\n  (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.set)(reference, {\r\n    user: name,\r\n    deck: data,\r\n  })\r\n}\r\n\r\n\r\nconst monitorAuthState = async () => {\r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, user => {\r\n    if (user != null) {\r\n      localStorage.setItem('uid', user.uid);\r\n      localStorage.setItem('email', user.email);\r\n      (0,_ui__WEBPACK_IMPORTED_MODULE_3__.showApp)();\r\n    } else {\r\n      debugger;\r\n      (0,_ui__WEBPACK_IMPORTED_MODULE_3__.showLoginForm)();\r\n    }\r\n  }\r\n  );\r\n};\r\n\r\n\r\nconst login = async () => {\r\n  let cleanUid = _ui__WEBPACK_IMPORTED_MODULE_3__.userName.value.replace(/\\s/g,\"\");\r\n  const password = _ui__WEBPACK_IMPORTED_MODULE_3__.userPassword.value;\r\n\r\n  if (cleanUid.substring(cleanUid.length - 8) != '@cml.com'){\r\n    cleanUid = `${cleanUid}@cml.com`;\r\n  }\r\n  \r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth, cleanUid, password)\r\n    .then((userCredential) => {\r\n      initStorage(userCredential.user);\r\n      (0,_ui__WEBPACK_IMPORTED_MODULE_3__.showApp)();\r\n    })\r\n    .catch((error) => {\r\n      console.log('error :>> ', error);\r\n      (0,_ui__WEBPACK_IMPORTED_MODULE_3__.showLoginError)(error);\r\n    });\r\n};\r\n\r\nconst initStorage = (userCreds) => {\r\n  if (localStorage.getItem('initTime') == null) localStorage.setItem('initTime',0);\r\n  if (localStorage.getItem('initScale') == null) localStorage.setItem('initScale','linear');\r\n  localStorage.setItem('uid', userCreds.uid);\r\n  localStorage.setItem('email', userCreds.email);\r\n  sessionStorage.setItem('region', 'st');\r\n};\r\n\r\nconst logout = async () => {\r\n  const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth).then(() => {\r\n    localStorage.removeItem('currUid')\r\n  }).catch((error) => {\r\n  });\r\n};\r\n\r\nconst changePwd = async (pwd,pwd_rpt) => {\r\n  if (pwd !== pwd_rpt) return \"Passwords do not match\";\r\n\r\n  const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\r\n  const usr = auth.currentUser;\r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updatePassword)(usr,pwd).then(() => {\r\n    return true;\r\n  }).catch((err) => {\r\n    return err;\r\n  })\r\n  debugger;\r\n}\r\n\r\n\r\nconst currPage = window.location.pathname.split(\"/\").pop();\r\n\r\nif (currPage == 'index.html' || currPage == 'index.html?'){\r\n  _ui__WEBPACK_IMPORTED_MODULE_3__.btnLogin.addEventListener('click', login);\r\n  \r\n  _ui__WEBPACK_IMPORTED_MODULE_3__.form.addEventListener(\"keydown\", function(event) {\r\n    if (event.key === \"Enter\") {\r\n      event.preventDefault();\r\n      _ui__WEBPACK_IMPORTED_MODULE_3__.btnLogin.click();\r\n    }\r\n  });\r\n\r\n  monitorAuthState();\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBU2E7QUFDYjtBQUM2QztBQUNvRTtBQUN6RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkRBQWE7QUFDekIsYUFBYSxzREFBTztBQUNwQixXQUFXLDhEQUFXO0FBQ3RCO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQUc7QUFDdkI7QUFDQSxFQUFFLHNEQUFHO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDTztBQUNQLEVBQUUsaUVBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNENBQU87QUFDYixNQUFNO0FBQ047QUFDQSxNQUFNLGtEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlDQUFRO0FBQ3pCLG1CQUFtQiw2Q0FBWTtBQUMvQjtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBLEVBQUUseUVBQTBCO0FBQzVCO0FBQ0E7QUFDQSxNQUFNLDRDQUFPO0FBQ2IsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNLG1EQUFjO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZUFBZSxzREFBTztBQUN0QixFQUFFLHNEQUFPO0FBQ1Q7QUFDQSxHQUFHO0FBQ0gsR0FBRztBQUNIO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxlQUFlLHNEQUFPO0FBQ3RCO0FBQ0EsRUFBRSw2REFBYztBQUNoQjtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUNBQVE7QUFDVjtBQUNBLEVBQUUscUNBQUk7QUFDTjtBQUNBO0FBQ0EsTUFBTSx5Q0FBUTtBQUNkO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2QtMS8uL3NyYy9qcy9pbmRleC5qcz83YmE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGVudHJ5IHBvaW50IFxyXG5pbXBvcnQge1xyXG4gIHVzZXJOYW1lLFxyXG4gIHVzZXJQYXNzd29yZCxcclxuICBidG5Mb2dpbixcclxuICBmb3JtLFxyXG4gIHNob3dMb2dpbkVycm9yLFxyXG4gIHNob3dBcHAsXHJcbiAgc2hvd0xvZ2luRm9ybVxyXG59IGZyb20gJy4vdWknXHJcblxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkLCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbk91dCwgdXBkYXRlUGFzc3dvcmQgfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0IHtnZXREYXRhYmFzZSwgcmVmLCBzZXR9IGZyb20gJ2ZpcmViYXNlL2RhdGFiYXNlJztcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lDM3lPS19RTDVRYkphS3ZqeW5YWHpPYmw0dUtzb0pwVFVcIixcclxuICBhdXRoRG9tYWluOiBcImNtbHByb2R1Y3Rpb24tMWU4NmEuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcImNtbHByb2R1Y3Rpb24tMWU4NmFcIixcclxuICBzdG9yYWdlQnVja2V0OiBcImNtbHByb2R1Y3Rpb24tMWU4NmEuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5MjQ0MDIzMzA2MTFcIixcclxuICBhcHBJZDogXCIxOjkyNDQwMjMzMDYxMTp3ZWI6NTUxNTVjMGE1YzVjNmE3ZDRiODA4NlwiXHJcbn07XHJcblxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcclxuY29uc3QgZGIgPSBnZXREYXRhYmFzZSgpO1xyXG5cclxuZnVuY3Rpb24gd3JpdGVkYihuYW1lLGRhdGEsdWlkKXtcclxuICBjb25zdCByZWZlcmVuY2UgPSByZWYoZGIsJ3VzZXJzLycgKyB1aWQpO1xyXG5cclxuICBzZXQocmVmZXJlbmNlLCB7XHJcbiAgICB1c2VyOiBuYW1lLFxyXG4gICAgZGVjazogZGF0YSxcclxuICB9KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IG1vbml0b3JBdXRoU3RhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIHVzZXIgPT4ge1xyXG4gICAgaWYgKHVzZXIgIT0gbnVsbCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndWlkJywgdXNlci51aWQpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW1haWwnLCB1c2VyLmVtYWlsKTtcclxuICAgICAgc2hvd0FwcCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVidWdnZXI7XHJcbiAgICAgIHNob3dMb2dpbkZvcm0oKTtcclxuICAgIH1cclxuICB9XHJcbiAgKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBsb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICBsZXQgY2xlYW5VaWQgPSB1c2VyTmFtZS52YWx1ZS5yZXBsYWNlKC9cXHMvZyxcIlwiKTtcclxuICBjb25zdCBwYXNzd29yZCA9IHVzZXJQYXNzd29yZC52YWx1ZTtcclxuXHJcbiAgaWYgKGNsZWFuVWlkLnN1YnN0cmluZyhjbGVhblVpZC5sZW5ndGggLSA4KSAhPSAnQGNtbC5jb20nKXtcclxuICAgIGNsZWFuVWlkID0gYCR7Y2xlYW5VaWR9QGNtbC5jb21gO1xyXG4gIH1cclxuICBcclxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBjbGVhblVpZCwgcGFzc3dvcmQpXHJcbiAgICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcclxuICAgICAgaW5pdFN0b3JhZ2UodXNlckNyZWRlbnRpYWwudXNlcik7XHJcbiAgICAgIHNob3dBcHAoKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciA6Pj4gJywgZXJyb3IpO1xyXG4gICAgICBzaG93TG9naW5FcnJvcihlcnJvcik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRTdG9yYWdlID0gKHVzZXJDcmVkcykgPT4ge1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5pdFRpbWUnKSA9PSBudWxsKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5pdFRpbWUnLDApO1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5pdFNjYWxlJykgPT0gbnVsbCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luaXRTY2FsZScsJ2xpbmVhcicpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1aWQnLCB1c2VyQ3JlZHMudWlkKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW1haWwnLCB1c2VyQ3JlZHMuZW1haWwpO1xyXG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JlZ2lvbicsICdzdCcpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gIHNpZ25PdXQoYXV0aCkudGhlbigoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VyclVpZCcpXHJcbiAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlUHdkID0gYXN5bmMgKHB3ZCxwd2RfcnB0KSA9PiB7XHJcbiAgaWYgKHB3ZCAhPT0gcHdkX3JwdCkgcmV0dXJuIFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiO1xyXG5cclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gIGNvbnN0IHVzciA9IGF1dGguY3VycmVudFVzZXI7XHJcbiAgdXBkYXRlUGFzc3dvcmQodXNyLHB3ZCkudGhlbigoKSA9PiB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICByZXR1cm4gZXJyO1xyXG4gIH0pXHJcbiAgZGVidWdnZXI7XHJcbn1cclxuXHJcblxyXG5jb25zdCBjdXJyUGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikucG9wKCk7XHJcblxyXG5pZiAoY3VyclBhZ2UgPT0gJ2luZGV4Lmh0bWwnIHx8IGN1cnJQYWdlID09ICdpbmRleC5odG1sPycpe1xyXG4gIGJ0bkxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9naW4pO1xyXG4gIFxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBidG5Mb2dpbi5jbGljaygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBtb25pdG9yQXV0aFN0YXRlKCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btnLogin: () => (/* binding */ btnLogin),\n/* harmony export */   btnLogout: () => (/* binding */ btnLogout),\n/* harmony export */   checkActive: () => (/* binding */ checkActive),\n/* harmony export */   divLoginError: () => (/* binding */ divLoginError),\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   hideLoginError: () => (/* binding */ hideLoginError),\n/* harmony export */   lblLoginErrorMessage: () => (/* binding */ lblLoginErrorMessage),\n/* harmony export */   setActive: () => (/* binding */ setActive),\n/* harmony export */   setActiveTime: () => (/* binding */ setActiveTime),\n/* harmony export */   setActiveView: () => (/* binding */ setActiveView),\n/* harmony export */   showApp: () => (/* binding */ showApp),\n/* harmony export */   showLoginError: () => (/* binding */ showLoginError),\n/* harmony export */   showLoginForm: () => (/* binding */ showLoginForm),\n/* harmony export */   toggleInitScale: () => (/* binding */ toggleInitScale),\n/* harmony export */   toggleInitTime: () => (/* binding */ toggleInitTime),\n/* harmony export */   userName: () => (/* binding */ userName),\n/* harmony export */   userPassword: () => (/* binding */ userPassword)\n/* harmony export */ });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\r\n\r\nconst userName = document.querySelector('#userEmail');\r\nconst userPassword = document.querySelector('#userPassword');\r\n\r\nconst btnLogin = document.querySelector('#btnLogin');\r\nconst btnLogout = document.querySelector('#btnLogout');\r\nconst form = document.getElementById('login');\r\n\r\nconst divLoginError = document.querySelector('#divLoginError');\r\nconst lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage');\r\n\r\n\r\nconst showLoginForm = () => {\r\n  const currPage = window.location.pathname.split(\"/\").pop();\r\n  let dev;\r\n  if (location.hostname === \"localhost\" || location.hostname === \"127.0.0.1\") dev = true;\r\n    \r\n  if (currPage != 'index.html'){\r\n    if (dev === true){\r\n      window.location.replace(\"http://127.0.0.1:5503/../dist/index.html\");\r\n      return;\r\n    }\r\n    window.location.replace(\"https://matthewplaisance.github.io/STprod/dist/index.html\");\r\n  }\r\n}\r\n\r\nconst showApp = () => {\r\n  const currPage = window.location.pathname.split(\"/\").pop();\r\n  let dev;\r\n  if (location.hostname === \"localhost\" || location.hostname === \"127.0.0.1\") dev = true;\r\n\r\n  if (currPage == 'index.html'){\r\n    if (dev === true){\r\n      window.location.replace(\"http://127.0.0.1:5503/../dist/curves.html\");\r\n      return;\r\n    }\r\n    window.location.replace(\"https://matthewplaisance.github.io/STprod/dist/curves.html\");\r\n  }\r\n  }\r\n\r\nconst hideLoginError = () => {\r\n  divLoginError.style.display = 'none'\r\n  lblLoginErrorMessage.innerHTML = ''\r\n}\r\n\r\nconst showLoginError = (error) => {\r\n  divLoginError.style.display = 'block'    \r\n  if (error.code == firebase_auth__WEBPACK_IMPORTED_MODULE_0__.AuthErrorCodes.INVALID_PASSWORD) {\r\n    lblLoginErrorMessage.innerHTML = `Wrong password`\r\n  }\r\n  else {\r\n    lblLoginErrorMessage.innerHTML = `Error: ${error.message}`      \r\n  }\r\n}\r\n\r\nconst setActive = (view, time) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    el.classList.remove(\"active\");\r\n  });\r\n  document.getElementById(view).className += \"active\";\r\n  document.getElementById(time).className += \"active\";\r\n};\r\n\r\nconst setActiveTime = (time) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (el.id.includes(\"Days\")) {\r\n      el.classList.remove(\"active\");\r\n    }\r\n  });\r\n  document.getElementById(time).className += \"active\";\r\n};\r\n\r\nconst setActiveView = (view) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (!el.id.includes(\"Days\")) {\r\n      el.classList.remove(\"active\");\r\n    }\r\n  });\r\n  document.getElementById(view).className += \"active\";\r\n};\r\n\r\nconst toggleInitTime = () => {\r\n  const currInit = localStorage.getItem('initTime');\r\n  if (currInit == 0) {\r\n    $('#init_time').text('30 Days')\r\n    localStorage.setItem('initTime',31)\r\n  }else {\r\n    $('#init_time').text('Inception')\r\n    localStorage.setItem('initTime',0)\r\n  };\r\n};\r\n\r\nconst toggleInitScale = () => {\r\n  const currScale = localStorage.getItem('initScale');\r\n  if (currScale == 'linear') {\r\n    $('#init_scale').text('Logarithmic')\r\n    localStorage.setItem('initScale','logarithmic')\r\n  }else {\r\n    $('#init_scale').text('Linear')\r\n    localStorage.setItem('initScale','linear')\r\n  };\r\n};\r\n\r\nconst checkActive = (element) => {\r\n  let flag = false;\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (el.id == element) flag = true;\r\n  });\r\n  return flag;\r\n};\r\n\r\n\r\n\r\ntry{\r\n  hideLoginError();\r\n} catch {\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdWkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQy9DO0FBQ087QUFDQTtBQUNQO0FBQ087QUFDQTtBQUNBO0FBQ1A7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxvQkFBb0IseURBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGNBQWM7QUFDN0Q7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvdWkuanM/YWFmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoRXJyb3JDb2RlcyB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJFbWFpbCcpO1xyXG5leHBvcnQgY29uc3QgdXNlclBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJQYXNzd29yZCcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ0bkxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bkxvZ2luJyk7XHJcbmV4cG9ydCBjb25zdCBidG5Mb2dvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuTG9nb3V0Jyk7XHJcbmV4cG9ydCBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luJyk7XHJcblxyXG5leHBvcnQgY29uc3QgZGl2TG9naW5FcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXZMb2dpbkVycm9yJyk7XHJcbmV4cG9ydCBjb25zdCBsYmxMb2dpbkVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYmxMb2dpbkVycm9yTWVzc2FnZScpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzaG93TG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJQYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5wb3AoKTtcclxuICBsZXQgZGV2O1xyXG4gIGlmIChsb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCJsb2NhbGhvc3RcIiB8fCBsb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCIxMjcuMC4wLjFcIikgZGV2ID0gdHJ1ZTtcclxuICAgIFxyXG4gIGlmIChjdXJyUGFnZSAhPSAnaW5kZXguaHRtbCcpe1xyXG4gICAgaWYgKGRldiA9PT0gdHJ1ZSl7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiaHR0cDovLzEyNy4wLjAuMTo1NTAzLy4uL2Rpc3QvaW5kZXguaHRtbFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCJodHRwczovL21hdHRoZXdwbGFpc2FuY2UuZ2l0aHViLmlvL1NUcHJvZC9kaXN0L2luZGV4Lmh0bWxcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd0FwcCA9ICgpID0+IHtcclxuICBjb25zdCBjdXJyUGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikucG9wKCk7XHJcbiAgbGV0IGRldjtcclxuICBpZiAobG9jYXRpb24uaG9zdG5hbWUgPT09IFwibG9jYWxob3N0XCIgfHwgbG9jYXRpb24uaG9zdG5hbWUgPT09IFwiMTI3LjAuMC4xXCIpIGRldiA9IHRydWU7XHJcblxyXG4gIGlmIChjdXJyUGFnZSA9PSAnaW5kZXguaHRtbCcpe1xyXG4gICAgaWYgKGRldiA9PT0gdHJ1ZSl7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiaHR0cDovLzEyNy4wLjAuMTo1NTAzLy4uL2Rpc3QvY3VydmVzLmh0bWxcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiaHR0cHM6Ly9tYXR0aGV3cGxhaXNhbmNlLmdpdGh1Yi5pby9TVHByb2QvZGlzdC9jdXJ2ZXMuaHRtbFwiKTtcclxuICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGNvbnN0IGhpZGVMb2dpbkVycm9yID0gKCkgPT4ge1xyXG4gIGRpdkxvZ2luRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gIGxibExvZ2luRXJyb3JNZXNzYWdlLmlubmVySFRNTCA9ICcnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaG93TG9naW5FcnJvciA9IChlcnJvcikgPT4ge1xyXG4gIGRpdkxvZ2luRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jaycgICAgXHJcbiAgaWYgKGVycm9yLmNvZGUgPT0gQXV0aEVycm9yQ29kZXMuSU5WQUxJRF9QQVNTV09SRCkge1xyXG4gICAgbGJsTG9naW5FcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gYFdyb25nIHBhc3N3b3JkYFxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGxibExvZ2luRXJyb3JNZXNzYWdlLmlubmVySFRNTCA9IGBFcnJvcjogJHtlcnJvci5tZXNzYWdlfWAgICAgICBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRBY3RpdmUgPSAodmlldywgdGltZSkgPT4ge1xyXG4gIGxldCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlXCIpO1xyXG4gIFtdLmZvckVhY2guY2FsbChlbGVtcywgKGVsKSA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZpZXcpLmNsYXNzTmFtZSArPSBcImFjdGl2ZVwiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRpbWUpLmNsYXNzTmFtZSArPSBcImFjdGl2ZVwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEFjdGl2ZVRpbWUgPSAodGltZSkgPT4ge1xyXG4gIGxldCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlXCIpO1xyXG4gIFtdLmZvckVhY2guY2FsbChlbGVtcywgKGVsKSA9PiB7XHJcbiAgICBpZiAoZWwuaWQuaW5jbHVkZXMoXCJEYXlzXCIpKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGltZSkuY2xhc3NOYW1lICs9IFwiYWN0aXZlXCI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0QWN0aXZlVmlldyA9ICh2aWV3KSA9PiB7XHJcbiAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmVcIik7XHJcbiAgW10uZm9yRWFjaC5jYWxsKGVsZW1zLCAoZWwpID0+IHtcclxuICAgIGlmICghZWwuaWQuaW5jbHVkZXMoXCJEYXlzXCIpKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmlldykuY2xhc3NOYW1lICs9IFwiYWN0aXZlXCI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdG9nZ2xlSW5pdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgY3VyckluaXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5pdFRpbWUnKTtcclxuICBpZiAoY3VyckluaXQgPT0gMCkge1xyXG4gICAgJCgnI2luaXRfdGltZScpLnRleHQoJzMwIERheXMnKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luaXRUaW1lJywzMSlcclxuICB9ZWxzZSB7XHJcbiAgICAkKCcjaW5pdF90aW1lJykudGV4dCgnSW5jZXB0aW9uJylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbml0VGltZScsMClcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZUluaXRTY2FsZSA9ICgpID0+IHtcclxuICBjb25zdCBjdXJyU2NhbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5pdFNjYWxlJyk7XHJcbiAgaWYgKGN1cnJTY2FsZSA9PSAnbGluZWFyJykge1xyXG4gICAgJCgnI2luaXRfc2NhbGUnKS50ZXh0KCdMb2dhcml0aG1pYycpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5pdFNjYWxlJywnbG9nYXJpdGhtaWMnKVxyXG4gIH1lbHNlIHtcclxuICAgICQoJyNpbml0X3NjYWxlJykudGV4dCgnTGluZWFyJylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbml0U2NhbGUnLCdsaW5lYXInKVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tBY3RpdmUgPSAoZWxlbWVudCkgPT4ge1xyXG4gIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmVcIik7XHJcbiAgW10uZm9yRWFjaC5jYWxsKGVsZW1zLCAoZWwpID0+IHtcclxuICAgIGlmIChlbC5pZCA9PSBlbGVtZW50KSBmbGFnID0gdHJ1ZTtcclxuICB9KTtcclxuICByZXR1cm4gZmxhZztcclxufTtcclxuXHJcblxyXG5cclxudHJ5e1xyXG4gIGhpZGVMb2dpbkVycm9yKCk7XHJcbn0gY2F0Y2gge1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/ui.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkprod_1"] = self["webpackChunkprod_1"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-d0574a"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;