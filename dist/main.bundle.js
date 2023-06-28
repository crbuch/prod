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

/***/ "./src/js/auth.js":
/*!************************!*\
  !*** ./src/js/auth.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   loginFb: () => (/* binding */ loginFb),\n/* harmony export */   logoutFb: () => (/* binding */ logoutFb),\n/* harmony export */   onAuthStateChangedFb: () => (/* binding */ onAuthStateChangedFb),\n/* harmony export */   updatePasswordFb: () => (/* binding */ updatePasswordFb)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\r\n\r\n\r\nconst firebaseConfig = {\r\n    apiKey: \"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU\",\r\n    authDomain: \"cmlproduction-1e86a.firebaseapp.com\",\r\n    projectId: \"cmlproduction-1e86a\",\r\n    storageBucket: \"cmlproduction-1e86a.appspot.com\",\r\n    messagingSenderId: \"924402330611\",\r\n    appId: \"1:924402330611:web:55155c0a5c5c6a7d4b8086\"\r\n};\r\n  \r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\n\r\n\r\nconst onAuthStateChangedFb = () => {\r\n    auth.onAuthStateChanged((user) => {\r\n        if (user) {\r\n            console.log('user mon :>> ', user);\r\n        } else {\r\n            console.log(\"none\");\r\n            window.location.replace('index.html');\r\n            const currentState = window.history.state;\r\n            window.history.replaceState(currentState, '', window.location.href);\r\n            window.onpopstate = function () {\r\n            window.history.replaceState(currentState, '', window.location.href);\r\n            };\r\n        }\r\n    });\r\n};\r\n\r\nconst loginFb = (email, password) => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth,email,password)\r\n};\r\n\r\nconst logoutFb = () => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);\r\n};\r\n\r\nconst updatePasswordFb = (newPassword) => {\r\n    const user = auth.currentUser;\r\n    if (user) {\r\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updatePassword)(user,newPassword);\r\n    }\r\n    return Promise.reject(new Error('No user is currently signed in.'));\r\n};\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDO0FBQ29FO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBYTtBQUN6QixhQUFhLHNEQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFdBQVcseUVBQTBCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0RBQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNkRBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDMkU7QUFDM0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvYXV0aC5qcz85MjkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQsIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLCBzaWduT3V0LCB1cGRhdGVQYXNzd29yZCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5QzN5T0tfUUw1UWJKYUt2anluWFh6T2JsNHVLc29KcFRVXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcImNtbHByb2R1Y3Rpb24tMWU4NmEuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwiY21scHJvZHVjdGlvbi0xZTg2YVwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJjbWxwcm9kdWN0aW9uLTFlODZhLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5MjQ0MDIzMzA2MTFcIixcclxuICAgIGFwcElkOiBcIjE6OTI0NDAyMzMwNjExOndlYjo1NTE1NWMwYTVjNWM2YTdkNGI4MDg2XCJcclxufTtcclxuICBcclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcblxyXG5cclxuY29uc3Qgb25BdXRoU3RhdGVDaGFuZ2VkRmIgPSAoKSA9PiB7XHJcbiAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyIG1vbiA6Pj4gJywgdXNlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub25lXCIpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnaW5kZXguaHRtbCcpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5zdGF0ZTtcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKGN1cnJlbnRTdGF0ZSwgJycsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShjdXJyZW50U3RhdGUsICcnLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBsb2dpbkZiID0gKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsZW1haWwscGFzc3dvcmQpXHJcbn07XHJcblxyXG5jb25zdCBsb2dvdXRGYiA9ICgpID0+IHtcclxuICAgIHJldHVybiBzaWduT3V0KGF1dGgpO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlUGFzc3dvcmRGYiA9IChuZXdQYXNzd29yZCkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVQYXNzd29yZCh1c2VyLG5ld1Bhc3N3b3JkKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ05vIHVzZXIgaXMgY3VycmVudGx5IHNpZ25lZCBpbi4nKSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBhdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWRGYiwgbG9naW5GYiwgbG9nb3V0RmIsIHVwZGF0ZVBhc3N3b3JkRmIgfTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/auth.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n// entry point \r\n\r\n\r\n\r\n\r\nconst initStorage = (userCreds) => {\r\n  console.log(\"in store\");\r\n  if (localStorage.getItem('initTime') == null) localStorage.setItem('initTime',0);\r\n  if (localStorage.getItem('initScale') == null) localStorage.setItem('initScale','linear');\r\n  localStorage.setItem('uid', userCreds.uid);\r\n  localStorage.setItem('email', userCreds.email);\r\n  sessionStorage.setItem('region', 'st');\r\n  sessionStorage.changePwd = false;\r\n  debugger;\r\n};\r\n\r\nconst login = async () => {\r\n  let cleanUid = _ui__WEBPACK_IMPORTED_MODULE_0__.userName.value.replace(/\\s/g,\"\");\r\n  const password = _ui__WEBPACK_IMPORTED_MODULE_0__.userPassword.value;\r\n\r\n  if (cleanUid.substring(cleanUid.length - 8) != '@cml.com'){\r\n    cleanUid = `${cleanUid}@cml.com`;\r\n  }\r\n\r\n  (0,_auth__WEBPACK_IMPORTED_MODULE_1__.loginFb)(cleanUid,password).then((userCredential) => {\r\n    console.log('userCredential :>> ', userCredential);\r\n    initStorage(userCredential.user);\r\n    debugger;\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.showApp)();\r\n  }).catch((err) => {\r\n    console.log('err :>> ', err);\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.showLoginError)(err);\r\n  })\r\n};\r\n\r\nconst changePwd = async () => {\r\n  if (_ui__WEBPACK_IMPORTED_MODULE_0__.newPwd.value !== _ui__WEBPACK_IMPORTED_MODULE_0__.newPwdRpt.value){\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.showPwdErr)('Passwords do not match');\r\n    return;\r\n  }\r\n  (0,_auth__WEBPACK_IMPORTED_MODULE_1__.updatePasswordFb)(_ui__WEBPACK_IMPORTED_MODULE_0__.newPwd.value).then(() => {\r\n    sessionStorage.changePwd = \"success\";\r\n    window.location.href = './index.html'\r\n  }).catch((err) => {\r\n    console.log('err :>> ', err);\r\n  });\r\n};\r\n\r\nconst init = () => {\r\n  const state = sessionStorage.changePwd;\r\n\r\n  if (state == \"true\"){\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.formUpdate.style.display = 'block';\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.form.style.display = 'none';\r\n  }else if (state == \"success\"){\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.formUpdate.style.display = 'none';\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.form.style.display = 'block';\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.showLoginError)(\"Please login back in with new password\");\r\n  }else {\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.formUpdate.style.display = 'none';\r\n    _ui__WEBPACK_IMPORTED_MODULE_0__.form.style.display = 'block';\r\n  }\r\n\r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.btnLogin.addEventListener('click', login);\r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.btnChangePwd.addEventListener('click',changePwd);\r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.backBtn.addEventListener('click', () => {\r\n    window.location.href = './profile.html';\r\n    sessionStorage.changePwd = false;\r\n  })\r\n  \r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.form.addEventListener(\"keydown\", function(event) {\r\n    if (event.key === \"Enter\") {\r\n      event.preventDefault();\r\n      _ui__WEBPACK_IMPORTED_MODULE_0__.btnLogin.click();\r\n    }\r\n  });\r\n  \r\n  _ui__WEBPACK_IMPORTED_MODULE_0__.formUpdate.addEventListener(\"keydown\", function(event) {\r\n    if (event.key == \"Enter\") {\r\n      event.preventDefault();\r\n      _ui__WEBPACK_IMPORTED_MODULE_0__.btnChangePwd.click();\r\n      \r\n    }\r\n  })\r\n};\r\n\r\nwindow.onload = function () {\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.hidePwdErr)();\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.hideLoginError)();\r\n  init();\r\n}();\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFpQmE7QUFDYjtBQUNtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5Q0FBUTtBQUN6QixtQkFBbUIsNkNBQVk7QUFDL0I7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQSxFQUFFLDhDQUFPO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0Q0FBTztBQUNYLEdBQUc7QUFDSDtBQUNBLElBQUksbURBQWM7QUFDbEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdUNBQU0sV0FBVywwQ0FBUztBQUNoQyxJQUFJLCtDQUFVO0FBQ2Q7QUFDQTtBQUNBLEVBQUUsdURBQWdCLENBQUMsdUNBQU07QUFDekI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJDQUFVO0FBQ2QsSUFBSSxxQ0FBSTtBQUNSLEdBQUc7QUFDSCxJQUFJLDJDQUFVO0FBQ2QsSUFBSSxxQ0FBSTtBQUNSLElBQUksbURBQWM7QUFDbEIsR0FBRztBQUNILElBQUksMkNBQVU7QUFDZCxJQUFJLHFDQUFJO0FBQ1I7QUFDQTtBQUNBLEVBQUUseUNBQVE7QUFDVixFQUFFLDZDQUFZO0FBQ2QsRUFBRSx3Q0FBTztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFLHFDQUFJO0FBQ047QUFDQTtBQUNBLE1BQU0seUNBQVE7QUFDZDtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsMkNBQVU7QUFDWjtBQUNBO0FBQ0EsTUFBTSw2Q0FBWTtBQUNsQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0NBQVU7QUFDWixFQUFFLG1EQUFjO0FBQ2hCO0FBQ0EsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZC0xLy4vc3JjL2pzL2luZGV4LmpzPzdiYTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZW50cnkgcG9pbnQgXHJcbmltcG9ydCB7XHJcbiAgdXNlck5hbWUsXHJcbiAgdXNlclBhc3N3b3JkLFxyXG4gIGJ0bkxvZ2luLFxyXG4gIGZvcm0sXHJcbiAgZm9ybVVwZGF0ZSxcclxuICBuZXdQd2QsXHJcbiAgbmV3UHdkUnB0LFxyXG4gIGJ0bkNoYW5nZVB3ZCxcclxuICBiYWNrQnRuLFxyXG4gIHNob3dMb2dpbkVycm9yLFxyXG4gIHNob3dBcHAsXHJcbiAgc2hvd0xvZ2luRm9ybSxcclxuICBoaWRlUHdkRXJyLFxyXG4gIGhpZGVMb2dpbkVycm9yLFxyXG4gIHNob3dQd2RFcnJcclxufSBmcm9tICcuL3VpJ1xyXG5cclxuaW1wb3J0IHsgbG9naW5GYiwgdXBkYXRlUGFzc3dvcmRGYiB9IGZyb20gJy4vYXV0aCc7XHJcblxyXG5jb25zdCBpbml0U3RvcmFnZSA9ICh1c2VyQ3JlZHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhcImluIHN0b3JlXCIpO1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5pdFRpbWUnKSA9PSBudWxsKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5pdFRpbWUnLDApO1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5pdFNjYWxlJykgPT0gbnVsbCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luaXRTY2FsZScsJ2xpbmVhcicpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1aWQnLCB1c2VyQ3JlZHMudWlkKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW1haWwnLCB1c2VyQ3JlZHMuZW1haWwpO1xyXG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JlZ2lvbicsICdzdCcpO1xyXG4gIHNlc3Npb25TdG9yYWdlLmNoYW5nZVB3ZCA9IGZhbHNlO1xyXG4gIGRlYnVnZ2VyO1xyXG59O1xyXG5cclxuY29uc3QgbG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IGNsZWFuVWlkID0gdXNlck5hbWUudmFsdWUucmVwbGFjZSgvXFxzL2csXCJcIik7XHJcbiAgY29uc3QgcGFzc3dvcmQgPSB1c2VyUGFzc3dvcmQudmFsdWU7XHJcblxyXG4gIGlmIChjbGVhblVpZC5zdWJzdHJpbmcoY2xlYW5VaWQubGVuZ3RoIC0gOCkgIT0gJ0BjbWwuY29tJyl7XHJcbiAgICBjbGVhblVpZCA9IGAke2NsZWFuVWlkfUBjbWwuY29tYDtcclxuICB9XHJcblxyXG4gIGxvZ2luRmIoY2xlYW5VaWQscGFzc3dvcmQpLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygndXNlckNyZWRlbnRpYWwgOj4+ICcsIHVzZXJDcmVkZW50aWFsKTtcclxuICAgIGluaXRTdG9yYWdlKHVzZXJDcmVkZW50aWFsLnVzZXIpO1xyXG4gICAgZGVidWdnZXI7XHJcbiAgICBzaG93QXBwKCk7XHJcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2VyciA6Pj4gJywgZXJyKTtcclxuICAgIHNob3dMb2dpbkVycm9yKGVycik7XHJcbiAgfSlcclxufTtcclxuXHJcbmNvbnN0IGNoYW5nZVB3ZCA9IGFzeW5jICgpID0+IHtcclxuICBpZiAobmV3UHdkLnZhbHVlICE9PSBuZXdQd2RScHQudmFsdWUpe1xyXG4gICAgc2hvd1B3ZEVycignUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCcpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB1cGRhdGVQYXNzd29yZEZiKG5ld1B3ZC52YWx1ZSkudGhlbigoKSA9PiB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5jaGFuZ2VQd2QgPSBcInN1Y2Nlc3NcIjtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vaW5kZXguaHRtbCdcclxuICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZXJyIDo+PiAnLCBlcnIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICBjb25zdCBzdGF0ZSA9IHNlc3Npb25TdG9yYWdlLmNoYW5nZVB3ZDtcclxuXHJcbiAgaWYgKHN0YXRlID09IFwidHJ1ZVwiKXtcclxuICAgIGZvcm1VcGRhdGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfWVsc2UgaWYgKHN0YXRlID09IFwic3VjY2Vzc1wiKXtcclxuICAgIGZvcm1VcGRhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBzaG93TG9naW5FcnJvcihcIlBsZWFzZSBsb2dpbiBiYWNrIGluIHdpdGggbmV3IHBhc3N3b3JkXCIpO1xyXG4gIH1lbHNlIHtcclxuICAgIGZvcm1VcGRhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICBidG5Mb2dpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ2luKTtcclxuICBidG5DaGFuZ2VQd2QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNoYW5nZVB3ZCk7XHJcbiAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vcHJvZmlsZS5odG1sJztcclxuICAgIHNlc3Npb25TdG9yYWdlLmNoYW5nZVB3ZCA9IGZhbHNlO1xyXG4gIH0pXHJcbiAgXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGJ0bkxvZ2luLmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgZm9ybVVwZGF0ZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PSBcIkVudGVyXCIpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgYnRuQ2hhbmdlUHdkLmNsaWNrKCk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH0pXHJcbn07XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIGhpZGVQd2RFcnIoKTtcclxuICBoaWRlTG9naW5FcnJvcigpO1xyXG4gIGluaXQoKTtcclxufSgpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   backBtn: () => (/* binding */ backBtn),\n/* harmony export */   btnChangePwd: () => (/* binding */ btnChangePwd),\n/* harmony export */   btnLogin: () => (/* binding */ btnLogin),\n/* harmony export */   btnLogout: () => (/* binding */ btnLogout),\n/* harmony export */   checkActive: () => (/* binding */ checkActive),\n/* harmony export */   divLoginError: () => (/* binding */ divLoginError),\n/* harmony export */   divPwdError: () => (/* binding */ divPwdError),\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   formUpdate: () => (/* binding */ formUpdate),\n/* harmony export */   hideLoginError: () => (/* binding */ hideLoginError),\n/* harmony export */   hidePwdErr: () => (/* binding */ hidePwdErr),\n/* harmony export */   lblLoginErrorMessage: () => (/* binding */ lblLoginErrorMessage),\n/* harmony export */   newPwd: () => (/* binding */ newPwd),\n/* harmony export */   newPwdRpt: () => (/* binding */ newPwdRpt),\n/* harmony export */   pwdErr: () => (/* binding */ pwdErr),\n/* harmony export */   setActive: () => (/* binding */ setActive),\n/* harmony export */   setActiveTime: () => (/* binding */ setActiveTime),\n/* harmony export */   setActiveView: () => (/* binding */ setActiveView),\n/* harmony export */   showApp: () => (/* binding */ showApp),\n/* harmony export */   showLoginError: () => (/* binding */ showLoginError),\n/* harmony export */   showLoginForm: () => (/* binding */ showLoginForm),\n/* harmony export */   showPwdErr: () => (/* binding */ showPwdErr),\n/* harmony export */   toggleInitScale: () => (/* binding */ toggleInitScale),\n/* harmony export */   toggleInitTime: () => (/* binding */ toggleInitTime),\n/* harmony export */   userName: () => (/* binding */ userName),\n/* harmony export */   userPassword: () => (/* binding */ userPassword)\n/* harmony export */ });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\r\n\r\nconst userName = document.querySelector('#userEmail');\r\nconst userPassword = document.querySelector('#userPassword');\r\n\r\nconst btnChangePwd = document.querySelector('#btnChangePwd');\r\nconst newPwd = document.querySelector('#new_pwd');\r\nconst newPwdRpt = document.querySelector('#new_pwd_rpt');\r\nconst backBtn = document.querySelector('#btnBack');\r\n\r\n\r\n\r\nconst btnLogin = document.querySelector('#btnLogin');\r\nconst btnLogout = document.querySelector('#btnLogout');\r\nconst form = document.getElementById('login');\r\nconst formUpdate = document.getElementById('update-pwd');\r\n\r\n\r\nconst divLoginError = document.querySelector('#divLoginError');\r\nconst lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage');\r\n\r\nconst divPwdError = document.querySelector('#divPwdError');\r\nconst pwdErr = document.querySelector('#pwdErr');\r\n\r\nconst showLoginForm = () => {\r\n  const currPage = window.location.pathname.split(\"/\").pop();\r\n  let dev;\r\n    \r\n  if (currPage != 'index.html'){\r\n    window.location.href = './index.html';\r\n    \r\n  }\r\n}\r\n\r\nconst showApp = () => {\r\n  const currPage = window.location.pathname.split(\"/\").pop();\r\n  let dev;\r\n\r\n  if (currPage == 'index.html'){\r\n    window.location.href = './curves.html';\r\n  }\r\n  }\r\n\r\nconst hideLoginError = () => {\r\n  divLoginError.style.display = 'none'\r\n  lblLoginErrorMessage.innerHTML = ''\r\n}\r\n\r\nconst showLoginError = (error) => {\r\n  divLoginError.style.display = 'block'    \r\n  if (error.code == firebase_auth__WEBPACK_IMPORTED_MODULE_0__.AuthErrorCodes.INVALID_PASSWORD) {\r\n    lblLoginErrorMessage.innerHTML = `Wrong password`\r\n  }\r\n  else if (sessionStorage.changePwd == \"success\") {\r\n    lblLoginErrorMessage.innerHTML = error;      \r\n  }else {\r\n    lblLoginErrorMessage.innerHTML = `Error: ${error}`;      \r\n\r\n  }\r\n}\r\n\r\nconst showPwdErr = (error) => {\r\n  divPwdError.style.display = 'block'    \r\n  pwdErr.innerHTML = `Error: ${error}`      \r\n}\r\n\r\nconst hidePwdErr = () => {\r\n  divPwdError.style.display = 'none';\r\n  pwdErr.innerHTML = '';\r\n}\r\n\r\nconst setActive = (view, time) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    el.classList.remove(\"active\");\r\n  });\r\n  document.getElementById(view).className += \"active\";\r\n  document.getElementById(time).className += \"active\";\r\n};\r\n\r\nconst setActiveTime = (time) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (el.id.includes(\"Days\")) {\r\n      el.classList.remove(\"active\");\r\n    }\r\n  });\r\n  document.getElementById(time).className += \"active\";\r\n};\r\n\r\nconst setActiveView = (view) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (!el.id.includes(\"Days\")) {\r\n      el.classList.remove(\"active\");\r\n    }\r\n  });\r\n  document.getElementById(view).className += \"active\";\r\n};\r\n\r\nconst toggleInitTime = () => {\r\n  const currInit = localStorage.getItem('initTime');\r\n  if (currInit == 0) {\r\n    $('#init_time').text('30 Days')\r\n    localStorage.setItem('initTime',31)\r\n  }else {\r\n    $('#init_time').text('Inception')\r\n    localStorage.setItem('initTime',0)\r\n  };\r\n};\r\n\r\nconst toggleInitScale = () => {\r\n  const currScale = localStorage.getItem('initScale');\r\n  if (currScale == 'linear') {\r\n    $('#init_scale').text('Logarithmic')\r\n    localStorage.setItem('initScale','logarithmic')\r\n  }else {\r\n    $('#init_scale').text('Linear')\r\n    localStorage.setItem('initScale','linear')\r\n  };\r\n};\r\n\r\nconst checkActive = (element) => {\r\n  let flag = false;\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (el.id == element) flag = true;\r\n  });\r\n  return flag;\r\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdWkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQy9DO0FBQ087QUFDQTtBQUNQO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNQO0FBQ0E7QUFDTztBQUNBO0FBQ1A7QUFDTztBQUNBO0FBQ1A7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esb0JBQW9CLHlEQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILCtDQUErQyxNQUFNO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLCtCQUErQixNQUFNO0FBQ3JDO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2QtMS8uL3NyYy9qcy91aS5qcz9hYWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhFcnJvckNvZGVzIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlckVtYWlsJyk7XHJcbmV4cG9ydCBjb25zdCB1c2VyUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlclBhc3N3b3JkJyk7XHJcblxyXG5leHBvcnQgY29uc3QgYnRuQ2hhbmdlUHdkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bkNoYW5nZVB3ZCcpO1xyXG5leHBvcnQgY29uc3QgbmV3UHdkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld19wd2QnKTtcclxuZXhwb3J0IGNvbnN0IG5ld1B3ZFJwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdfcHdkX3JwdCcpO1xyXG5leHBvcnQgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5CYWNrJyk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBidG5Mb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5Mb2dpbicpO1xyXG5leHBvcnQgY29uc3QgYnRuTG9nb3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bkxvZ291dCcpO1xyXG5leHBvcnQgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbicpO1xyXG5leHBvcnQgY29uc3QgZm9ybVVwZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtcHdkJyk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRpdkxvZ2luRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGl2TG9naW5FcnJvcicpO1xyXG5leHBvcnQgY29uc3QgbGJsTG9naW5FcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGJsTG9naW5FcnJvck1lc3NhZ2UnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBkaXZQd2RFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXZQd2RFcnJvcicpO1xyXG5leHBvcnQgY29uc3QgcHdkRXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3B3ZEVycicpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgY3VyclBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLnBvcCgpO1xyXG4gIGxldCBkZXY7XHJcbiAgICBcclxuICBpZiAoY3VyclBhZ2UgIT0gJ2luZGV4Lmh0bWwnKXtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vaW5kZXguaHRtbCc7XHJcbiAgICBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaG93QXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJQYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5wb3AoKTtcclxuICBsZXQgZGV2O1xyXG5cclxuICBpZiAoY3VyclBhZ2UgPT0gJ2luZGV4Lmh0bWwnKXtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vY3VydmVzLmh0bWwnO1xyXG4gIH1cclxuICB9XHJcblxyXG5leHBvcnQgY29uc3QgaGlkZUxvZ2luRXJyb3IgPSAoKSA9PiB7XHJcbiAgZGl2TG9naW5FcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgbGJsTG9naW5FcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gJydcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dMb2dpbkVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgZGl2TG9naW5FcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyAgICBcclxuICBpZiAoZXJyb3IuY29kZSA9PSBBdXRoRXJyb3JDb2Rlcy5JTlZBTElEX1BBU1NXT1JEKSB7XHJcbiAgICBsYmxMb2dpbkVycm9yTWVzc2FnZS5pbm5lckhUTUwgPSBgV3JvbmcgcGFzc3dvcmRgXHJcbiAgfVxyXG4gIGVsc2UgaWYgKHNlc3Npb25TdG9yYWdlLmNoYW5nZVB3ZCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgbGJsTG9naW5FcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gZXJyb3I7ICAgICAgXHJcbiAgfWVsc2Uge1xyXG4gICAgbGJsTG9naW5FcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gYEVycm9yOiAke2Vycm9yfWA7ICAgICAgXHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dQd2RFcnIgPSAoZXJyb3IpID0+IHtcclxuICBkaXZQd2RFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyAgICBcclxuICBwd2RFcnIuaW5uZXJIVE1MID0gYEVycm9yOiAke2Vycm9yfWAgICAgICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhpZGVQd2RFcnIgPSAoKSA9PiB7XHJcbiAgZGl2UHdkRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBwd2RFcnIuaW5uZXJIVE1MID0gJyc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRBY3RpdmUgPSAodmlldywgdGltZSkgPT4ge1xyXG4gIGxldCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlXCIpO1xyXG4gIFtdLmZvckVhY2guY2FsbChlbGVtcywgKGVsKSA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZpZXcpLmNsYXNzTmFtZSArPSBcImFjdGl2ZVwiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRpbWUpLmNsYXNzTmFtZSArPSBcImFjdGl2ZVwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEFjdGl2ZVRpbWUgPSAodGltZSkgPT4ge1xyXG4gIGxldCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlXCIpO1xyXG4gIFtdLmZvckVhY2guY2FsbChlbGVtcywgKGVsKSA9PiB7XHJcbiAgICBpZiAoZWwuaWQuaW5jbHVkZXMoXCJEYXlzXCIpKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGltZSkuY2xhc3NOYW1lICs9IFwiYWN0aXZlXCI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0QWN0aXZlVmlldyA9ICh2aWV3KSA9PiB7XHJcbiAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmVcIik7XHJcbiAgW10uZm9yRWFjaC5jYWxsKGVsZW1zLCAoZWwpID0+IHtcclxuICAgIGlmICghZWwuaWQuaW5jbHVkZXMoXCJEYXlzXCIpKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmlldykuY2xhc3NOYW1lICs9IFwiYWN0aXZlXCI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdG9nZ2xlSW5pdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgY3VyckluaXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5pdFRpbWUnKTtcclxuICBpZiAoY3VyckluaXQgPT0gMCkge1xyXG4gICAgJCgnI2luaXRfdGltZScpLnRleHQoJzMwIERheXMnKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luaXRUaW1lJywzMSlcclxuICB9ZWxzZSB7XHJcbiAgICAkKCcjaW5pdF90aW1lJykudGV4dCgnSW5jZXB0aW9uJylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbml0VGltZScsMClcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZUluaXRTY2FsZSA9ICgpID0+IHtcclxuICBjb25zdCBjdXJyU2NhbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5pdFNjYWxlJyk7XHJcbiAgaWYgKGN1cnJTY2FsZSA9PSAnbGluZWFyJykge1xyXG4gICAgJCgnI2luaXRfc2NhbGUnKS50ZXh0KCdMb2dhcml0aG1pYycpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5pdFNjYWxlJywnbG9nYXJpdGhtaWMnKVxyXG4gIH1lbHNlIHtcclxuICAgICQoJyNpbml0X3NjYWxlJykudGV4dCgnTGluZWFyJylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbml0U2NhbGUnLCdsaW5lYXInKVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tBY3RpdmUgPSAoZWxlbWVudCkgPT4ge1xyXG4gIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmVcIik7XHJcbiAgW10uZm9yRWFjaC5jYWxsKGVsZW1zLCAoZWwpID0+IHtcclxuICAgIGlmIChlbC5pZCA9PSBlbGVtZW50KSBmbGFnID0gdHJ1ZTtcclxuICB9KTtcclxuICByZXR1cm4gZmxhZztcclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/ui.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-17252e"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;