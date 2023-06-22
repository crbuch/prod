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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   logout: () => (/* binding */ logout),\n/* harmony export */   monitorAuthState: () => (/* binding */ monitorAuthState)\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n// entry point \r\n\r\n\r\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU\",\r\n  authDomain: \"cmlproduction-1e86a.firebaseapp.com\",\r\n  projectId: \"cmlproduction-1e86a\",\r\n  storageBucket: \"cmlproduction-1e86a.appspot.com\",\r\n  messagingSenderId: \"924402330611\",\r\n  appId: \"1:924402330611:web:55155c0a5c5c6a7d4b8086\"\r\n};\r\n\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)();\r\n\r\nfunction writedb(name,data,uid){\r\n  const reference = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)(db,'users/' + uid);\r\n\r\n  (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.set)(reference, {\r\n    user: name,\r\n    deck: data,\r\n  })\r\n}\r\n\r\n\r\nconst monitorAuthState = async () => {\r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, user => {\r\n    if (user != null) {\r\n      localStorage.setItem('uid', user.uid);\r\n      localStorage.setItem('email', user.email);\r\n      console.log('user :>> ', user);\r\n      //showApp();\r\n    } else {\r\n      console.log('user :>> ', user);\r\n      (0,_ui__WEBPACK_IMPORTED_MODULE_3__.showLoginForm)();\r\n    }\r\n  }\r\n  );\r\n};\r\n\r\nconst login = async () => {\r\n  let cleanUid = _ui__WEBPACK_IMPORTED_MODULE_3__.userName.value.replace(/\\s/g,\"\");\r\n  const password = _ui__WEBPACK_IMPORTED_MODULE_3__.userPassword.value;\r\n\r\n  if (cleanUid.substring(cleanUid.length - 8) != '@cml.com'){\r\n    cleanUid = `${cleanUid}@cml.com`;\r\n  }\r\n  \r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth, cleanUid, password)\r\n    .then((userCredential) => {\r\n      initStorage(userCredential.user);\r\n      (0,_ui__WEBPACK_IMPORTED_MODULE_3__.showApp)();\r\n    })\r\n    .catch((error) => {\r\n      console.log('error :>> ', error);\r\n      (0,_ui__WEBPACK_IMPORTED_MODULE_3__.showLoginError)(error);\r\n    });\r\n};\r\n\r\nconst initStorage = (userCreds) => {\r\n  if (localStorage.getItem('initTime') == null) localStorage.setItem('initTime',0);\r\n  if (localStorage.getItem('initScale') == null) localStorage.setItem('initScale','linear');\r\n  localStorage.setItem('uid', userCreds.uid);\r\n  localStorage.setItem('email', userCreds.email);\r\n  sessionStorage.setItem('region', 'st');\r\n  sessionStorage.changePwd = false;\r\n};\r\n\r\nconst logout = async () => {\r\n  const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth).then(() => {\r\n    localStorage.removeItem('currUid')\r\n  }).catch((error) => {\r\n  });\r\n};\r\n\r\nconst changePwd = async () => {\r\n  if (_ui__WEBPACK_IMPORTED_MODULE_3__.newPwd.value !== _ui__WEBPACK_IMPORTED_MODULE_3__.newPwdRpt.value){\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_3__.showPwdErr)('Passwords do not match');\r\n    return;\r\n  }\r\n  const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\r\n  const user = auth.currentUser;\r\n\r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updatePassword)(user, _ui__WEBPACK_IMPORTED_MODULE_3__.newPwdRpt.value).then(() => {\r\n    console.log('s :>> ');\r\n    sessionStorage.changePwd = \"success\";\r\n    window.location.href = './index.html'\r\n  }).catch((error) => {\r\n    console.log('update pwd error :>> ', error);\r\n  });\r\n}\r\n\r\nconst init = () => {\r\n  const state = sessionStorage.changePwd;\r\n\r\n  if (state == \"true\"){\r\n    _ui__WEBPACK_IMPORTED_MODULE_3__.formUpdate.style.display = 'block';\r\n    _ui__WEBPACK_IMPORTED_MODULE_3__.form.style.display = 'none';\r\n  }else if (state == \"success\"){\r\n    _ui__WEBPACK_IMPORTED_MODULE_3__.formUpdate.style.display = 'none';\r\n    _ui__WEBPACK_IMPORTED_MODULE_3__.form.style.display = 'block';\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_3__.showLoginError)(\"Please login back in with new password\");\r\n  }else {\r\n    _ui__WEBPACK_IMPORTED_MODULE_3__.formUpdate.style.display = 'none';\r\n    _ui__WEBPACK_IMPORTED_MODULE_3__.form.style.display = 'block';\r\n  }\r\n\r\n  _ui__WEBPACK_IMPORTED_MODULE_3__.btnLogin.addEventListener('click', login);\r\n  _ui__WEBPACK_IMPORTED_MODULE_3__.btnChangePwd.addEventListener('click',changePwd);\r\n  _ui__WEBPACK_IMPORTED_MODULE_3__.backBtn.addEventListener('click', () => {\r\n    window.location.href = './profile.html';\r\n    sessionStorage.changePwd = false;\r\n  })\r\n  \r\n  _ui__WEBPACK_IMPORTED_MODULE_3__.form.addEventListener(\"keydown\", function(event) {\r\n    if (event.key === \"Enter\") {\r\n      event.preventDefault();\r\n      _ui__WEBPACK_IMPORTED_MODULE_3__.btnLogin.click();\r\n    }\r\n  });\r\n  \r\n  _ui__WEBPACK_IMPORTED_MODULE_3__.formUpdate.addEventListener(\"keydown\", function(event) {\r\n    if (event.key == \"Enter\") {\r\n      event.preventDefault();\r\n      _ui__WEBPACK_IMPORTED_MODULE_3__.btnChangePwd.click();\r\n      \r\n    }\r\n  })\r\n}\r\n\r\nconst currPage = window.location.pathname.split(\"/\").pop();\r\n\r\nif (currPage == 'index.html'){\r\n  monitorAuthState();\r\n\r\n  window.onload = function () {\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_3__.hidePwdErr)();\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_3__.hideLoginError)();\r\n    init();\r\n  }();\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFpQmE7QUFDYjtBQUM2QztBQUNvRTtBQUN6RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkRBQWE7QUFDekIsYUFBYSxzREFBTztBQUNwQixXQUFXLDhEQUFXO0FBQ3RCO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQUc7QUFDdkI7QUFDQSxFQUFFLHNEQUFHO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDTztBQUNQLEVBQUUsaUVBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNLGtEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5Q0FBUTtBQUN6QixtQkFBbUIsNkNBQVk7QUFDL0I7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQSxFQUFFLHlFQUEwQjtBQUM1QjtBQUNBO0FBQ0EsTUFBTSw0Q0FBTztBQUNiLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTSxtREFBYztBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZUFBZSxzREFBTztBQUN0QixFQUFFLHNEQUFPO0FBQ1Q7QUFDQSxHQUFHO0FBQ0gsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdUNBQU0sV0FBVywwQ0FBUztBQUNoQyxJQUFJLCtDQUFVO0FBQ2Q7QUFDQTtBQUNBLGVBQWUsc0RBQU87QUFDdEI7QUFDQTtBQUNBLEVBQUUsNkRBQWMsT0FBTywwQ0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyQ0FBVTtBQUNkLElBQUkscUNBQUk7QUFDUixHQUFHO0FBQ0gsSUFBSSwyQ0FBVTtBQUNkLElBQUkscUNBQUk7QUFDUixJQUFJLG1EQUFjO0FBQ2xCLEdBQUc7QUFDSCxJQUFJLDJDQUFVO0FBQ2QsSUFBSSxxQ0FBSTtBQUNSO0FBQ0E7QUFDQSxFQUFFLHlDQUFRO0FBQ1YsRUFBRSw2Q0FBWTtBQUNkLEVBQUUsd0NBQU87QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRSxxQ0FBSTtBQUNOO0FBQ0E7QUFDQSxNQUFNLHlDQUFRO0FBQ2Q7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFLDJDQUFVO0FBQ1o7QUFDQTtBQUNBLE1BQU0sNkNBQVk7QUFDbEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBVTtBQUNkLElBQUksbURBQWM7QUFDbEI7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2QtMS8uL3NyYy9qcy9pbmRleC5qcz83YmE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGVudHJ5IHBvaW50IFxyXG5pbXBvcnQge1xyXG4gIHVzZXJOYW1lLFxyXG4gIHVzZXJQYXNzd29yZCxcclxuICBidG5Mb2dpbixcclxuICBmb3JtLFxyXG4gIGZvcm1VcGRhdGUsXHJcbiAgbmV3UHdkLFxyXG4gIG5ld1B3ZFJwdCxcclxuICBidG5DaGFuZ2VQd2QsXHJcbiAgYmFja0J0bixcclxuICBzaG93TG9naW5FcnJvcixcclxuICBzaG93QXBwLFxyXG4gIHNob3dMb2dpbkZvcm0sXHJcbiAgaGlkZVB3ZEVycixcclxuICBoaWRlTG9naW5FcnJvcixcclxuICBzaG93UHdkRXJyXHJcbn0gZnJvbSAnLi91aSdcclxuXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQsIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLCBzaWduT3V0LCB1cGRhdGVQYXNzd29yZCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQge2dldERhdGFiYXNlLCByZWYsIHNldH0gZnJvbSAnZmlyZWJhc2UvZGF0YWJhc2UnO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUMzeU9LX1FMNVFiSmFLdmp5blhYek9ibDR1S3NvSnBUVVwiLFxyXG4gIGF1dGhEb21haW46IFwiY21scHJvZHVjdGlvbi0xZTg2YS5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwiY21scHJvZHVjdGlvbi0xZTg2YVwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiY21scHJvZHVjdGlvbi0xZTg2YS5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjkyNDQwMjMzMDYxMVwiLFxyXG4gIGFwcElkOiBcIjE6OTI0NDAyMzMwNjExOndlYjo1NTE1NWMwYTVjNWM2YTdkNGI4MDg2XCJcclxufTtcclxuXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG5jb25zdCBkYiA9IGdldERhdGFiYXNlKCk7XHJcblxyXG5mdW5jdGlvbiB3cml0ZWRiKG5hbWUsZGF0YSx1aWQpe1xyXG4gIGNvbnN0IHJlZmVyZW5jZSA9IHJlZihkYiwndXNlcnMvJyArIHVpZCk7XHJcblxyXG4gIHNldChyZWZlcmVuY2UsIHtcclxuICAgIHVzZXI6IG5hbWUsXHJcbiAgICBkZWNrOiBkYXRhLFxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbW9uaXRvckF1dGhTdGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgdXNlciA9PiB7XHJcbiAgICBpZiAodXNlciAhPSBudWxsKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1aWQnLCB1c2VyLnVpZCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICBjb25zb2xlLmxvZygndXNlciA6Pj4gJywgdXNlcik7XHJcbiAgICAgIC8vc2hvd0FwcCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ3VzZXIgOj4+ICcsIHVzZXIpO1xyXG4gICAgICBzaG93TG9naW5Gb3JtKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBsb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICBsZXQgY2xlYW5VaWQgPSB1c2VyTmFtZS52YWx1ZS5yZXBsYWNlKC9cXHMvZyxcIlwiKTtcclxuICBjb25zdCBwYXNzd29yZCA9IHVzZXJQYXNzd29yZC52YWx1ZTtcclxuXHJcbiAgaWYgKGNsZWFuVWlkLnN1YnN0cmluZyhjbGVhblVpZC5sZW5ndGggLSA4KSAhPSAnQGNtbC5jb20nKXtcclxuICAgIGNsZWFuVWlkID0gYCR7Y2xlYW5VaWR9QGNtbC5jb21gO1xyXG4gIH1cclxuICBcclxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBjbGVhblVpZCwgcGFzc3dvcmQpXHJcbiAgICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcclxuICAgICAgaW5pdFN0b3JhZ2UodXNlckNyZWRlbnRpYWwudXNlcik7XHJcbiAgICAgIHNob3dBcHAoKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciA6Pj4gJywgZXJyb3IpO1xyXG4gICAgICBzaG93TG9naW5FcnJvcihlcnJvcik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRTdG9yYWdlID0gKHVzZXJDcmVkcykgPT4ge1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5pdFRpbWUnKSA9PSBudWxsKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5pdFRpbWUnLDApO1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5pdFNjYWxlJykgPT0gbnVsbCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luaXRTY2FsZScsJ2xpbmVhcicpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1aWQnLCB1c2VyQ3JlZHMudWlkKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW1haWwnLCB1c2VyQ3JlZHMuZW1haWwpO1xyXG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JlZ2lvbicsICdzdCcpO1xyXG4gIHNlc3Npb25TdG9yYWdlLmNoYW5nZVB3ZCA9IGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gIHNpZ25PdXQoYXV0aCkudGhlbigoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VyclVpZCcpXHJcbiAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VQd2QgPSBhc3luYyAoKSA9PiB7XHJcbiAgaWYgKG5ld1B3ZC52YWx1ZSAhPT0gbmV3UHdkUnB0LnZhbHVlKXtcclxuICAgIHNob3dQd2RFcnIoJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2gnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcclxuXHJcbiAgdXBkYXRlUGFzc3dvcmQodXNlciwgbmV3UHdkUnB0LnZhbHVlKS50aGVuKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdzIDo+PiAnKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLmNoYW5nZVB3ZCA9IFwic3VjY2Vzc1wiO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi9pbmRleC5odG1sJ1xyXG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3VwZGF0ZSBwd2QgZXJyb3IgOj4+ICcsIGVycm9yKTtcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICBjb25zdCBzdGF0ZSA9IHNlc3Npb25TdG9yYWdlLmNoYW5nZVB3ZDtcclxuXHJcbiAgaWYgKHN0YXRlID09IFwidHJ1ZVwiKXtcclxuICAgIGZvcm1VcGRhdGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfWVsc2UgaWYgKHN0YXRlID09IFwic3VjY2Vzc1wiKXtcclxuICAgIGZvcm1VcGRhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBzaG93TG9naW5FcnJvcihcIlBsZWFzZSBsb2dpbiBiYWNrIGluIHdpdGggbmV3IHBhc3N3b3JkXCIpO1xyXG4gIH1lbHNlIHtcclxuICAgIGZvcm1VcGRhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICBidG5Mb2dpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ2luKTtcclxuICBidG5DaGFuZ2VQd2QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNoYW5nZVB3ZCk7XHJcbiAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vcHJvZmlsZS5odG1sJztcclxuICAgIHNlc3Npb25TdG9yYWdlLmNoYW5nZVB3ZCA9IGZhbHNlO1xyXG4gIH0pXHJcbiAgXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGJ0bkxvZ2luLmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgZm9ybVVwZGF0ZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PSBcIkVudGVyXCIpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgYnRuQ2hhbmdlUHdkLmNsaWNrKCk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGN1cnJQYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5wb3AoKTtcclxuXHJcbmlmIChjdXJyUGFnZSA9PSAnaW5kZXguaHRtbCcpe1xyXG4gIG1vbml0b3JBdXRoU3RhdGUoKTtcclxuXHJcbiAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGhpZGVQd2RFcnIoKTtcclxuICAgIGhpZGVMb2dpbkVycm9yKCk7XHJcbiAgICBpbml0KCk7XHJcbiAgfSgpO1xyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   backBtn: () => (/* binding */ backBtn),\n/* harmony export */   btnChangePwd: () => (/* binding */ btnChangePwd),\n/* harmony export */   btnLogin: () => (/* binding */ btnLogin),\n/* harmony export */   btnLogout: () => (/* binding */ btnLogout),\n/* harmony export */   checkActive: () => (/* binding */ checkActive),\n/* harmony export */   divLoginError: () => (/* binding */ divLoginError),\n/* harmony export */   divPwdError: () => (/* binding */ divPwdError),\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   formUpdate: () => (/* binding */ formUpdate),\n/* harmony export */   hideLoginError: () => (/* binding */ hideLoginError),\n/* harmony export */   hidePwdErr: () => (/* binding */ hidePwdErr),\n/* harmony export */   lblLoginErrorMessage: () => (/* binding */ lblLoginErrorMessage),\n/* harmony export */   newPwd: () => (/* binding */ newPwd),\n/* harmony export */   newPwdRpt: () => (/* binding */ newPwdRpt),\n/* harmony export */   pwdErr: () => (/* binding */ pwdErr),\n/* harmony export */   setActive: () => (/* binding */ setActive),\n/* harmony export */   setActiveTime: () => (/* binding */ setActiveTime),\n/* harmony export */   setActiveView: () => (/* binding */ setActiveView),\n/* harmony export */   showApp: () => (/* binding */ showApp),\n/* harmony export */   showLoginError: () => (/* binding */ showLoginError),\n/* harmony export */   showLoginForm: () => (/* binding */ showLoginForm),\n/* harmony export */   showPwdErr: () => (/* binding */ showPwdErr),\n/* harmony export */   toggleInitScale: () => (/* binding */ toggleInitScale),\n/* harmony export */   toggleInitTime: () => (/* binding */ toggleInitTime),\n/* harmony export */   userName: () => (/* binding */ userName),\n/* harmony export */   userPassword: () => (/* binding */ userPassword)\n/* harmony export */ });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\r\n\r\nconst userName = document.querySelector('#userEmail');\r\nconst userPassword = document.querySelector('#userPassword');\r\n\r\nconst btnChangePwd = document.querySelector('#btnChangePwd');\r\nconst newPwd = document.querySelector('#new_pwd');\r\nconst newPwdRpt = document.querySelector('#new_pwd_rpt');\r\nconst backBtn = document.querySelector('#btnBack');\r\n\r\n\r\n\r\nconst btnLogin = document.querySelector('#btnLogin');\r\nconst btnLogout = document.querySelector('#btnLogout');\r\nconst form = document.getElementById('login');\r\nconst formUpdate = document.getElementById('update-pwd');\r\n\r\n\r\nconst divLoginError = document.querySelector('#divLoginError');\r\nconst lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage');\r\n\r\nconst divPwdError = document.querySelector('#divPwdError');\r\nconst pwdErr = document.querySelector('#pwdErr');\r\n\r\nconst showLoginForm = () => {\r\n  const currPage = window.location.pathname.split(\"/\").pop();\r\n  let dev;\r\n  if (location.hostname === \"localhost\" || location.hostname === \"127.0.0.1\") dev = true;\r\n    \r\n  if (currPage != 'index.html'){\r\n    if (dev === true){\r\n      window.location.replace(\"http://127.0.0.1:5503/../dist/index.html\");\r\n      return;\r\n    }\r\n    window.location.replace(\"https://matthewplaisance.github.io/STprod/dist/index.html\");\r\n  }\r\n}\r\n\r\nconst showApp = () => {\r\n  const currPage = window.location.pathname.split(\"/\").pop();\r\n  let dev;\r\n  if (location.hostname === \"localhost\" || location.hostname === \"127.0.0.1\") dev = true;\r\n\r\n  if (currPage == 'index.html'){\r\n    if (dev === true){\r\n      window.location.replace(\"http://127.0.0.1:5503/../dist/curves.html\");\r\n      return;\r\n    }\r\n    window.location.replace(\"https://matthewplaisance.github.io/STprod/dist/curves.html\");\r\n  }\r\n  }\r\n\r\nconst hideLoginError = () => {\r\n  divLoginError.style.display = 'none'\r\n  lblLoginErrorMessage.innerHTML = ''\r\n}\r\n\r\nconst showLoginError = (error) => {\r\n  divLoginError.style.display = 'block'    \r\n  if (error.code == firebase_auth__WEBPACK_IMPORTED_MODULE_0__.AuthErrorCodes.INVALID_PASSWORD) {\r\n    lblLoginErrorMessage.innerHTML = `Wrong password`\r\n  }\r\n  else if (sessionStorage.changePwd == \"success\") {\r\n    lblLoginErrorMessage.innerHTML = error;      \r\n  }else {\r\n    lblLoginErrorMessage.innerHTML = `Error: ${error}`;      \r\n\r\n  }\r\n}\r\n\r\nconst showPwdErr = (error) => {\r\n  divPwdError.style.display = 'block'    \r\n  pwdErr.innerHTML = `Error: ${error}`      \r\n}\r\n\r\nconst hidePwdErr = () => {\r\n  divPwdError.style.display = 'none';\r\n  pwdErr.innerHTML = '';\r\n}\r\n\r\nconst setActive = (view, time) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    el.classList.remove(\"active\");\r\n  });\r\n  document.getElementById(view).className += \"active\";\r\n  document.getElementById(time).className += \"active\";\r\n};\r\n\r\nconst setActiveTime = (time) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (el.id.includes(\"Days\")) {\r\n      el.classList.remove(\"active\");\r\n    }\r\n  });\r\n  document.getElementById(time).className += \"active\";\r\n};\r\n\r\nconst setActiveView = (view) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (!el.id.includes(\"Days\")) {\r\n      el.classList.remove(\"active\");\r\n    }\r\n  });\r\n  document.getElementById(view).className += \"active\";\r\n};\r\n\r\nconst toggleInitTime = () => {\r\n  const currInit = localStorage.getItem('initTime');\r\n  if (currInit == 0) {\r\n    $('#init_time').text('30 Days')\r\n    localStorage.setItem('initTime',31)\r\n  }else {\r\n    $('#init_time').text('Inception')\r\n    localStorage.setItem('initTime',0)\r\n  };\r\n};\r\n\r\nconst toggleInitScale = () => {\r\n  const currScale = localStorage.getItem('initScale');\r\n  if (currScale == 'linear') {\r\n    $('#init_scale').text('Logarithmic')\r\n    localStorage.setItem('initScale','logarithmic')\r\n  }else {\r\n    $('#init_scale').text('Linear')\r\n    localStorage.setItem('initScale','linear')\r\n  };\r\n};\r\n\r\nconst checkActive = (element) => {\r\n  let flag = false;\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (el.id == element) flag = true;\r\n  });\r\n  return flag;\r\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdWkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQy9DO0FBQ087QUFDQTtBQUNQO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNQO0FBQ0E7QUFDTztBQUNBO0FBQ1A7QUFDTztBQUNBO0FBQ1A7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esb0JBQW9CLHlEQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILCtDQUErQyxNQUFNO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLCtCQUErQixNQUFNO0FBQ3JDO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2QtMS8uL3NyYy9qcy91aS5qcz9hYWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhFcnJvckNvZGVzIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlckVtYWlsJyk7XHJcbmV4cG9ydCBjb25zdCB1c2VyUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlclBhc3N3b3JkJyk7XHJcblxyXG5leHBvcnQgY29uc3QgYnRuQ2hhbmdlUHdkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bkNoYW5nZVB3ZCcpO1xyXG5leHBvcnQgY29uc3QgbmV3UHdkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld19wd2QnKTtcclxuZXhwb3J0IGNvbnN0IG5ld1B3ZFJwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdfcHdkX3JwdCcpO1xyXG5leHBvcnQgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5CYWNrJyk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBidG5Mb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5Mb2dpbicpO1xyXG5leHBvcnQgY29uc3QgYnRuTG9nb3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bkxvZ291dCcpO1xyXG5leHBvcnQgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbicpO1xyXG5leHBvcnQgY29uc3QgZm9ybVVwZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtcHdkJyk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRpdkxvZ2luRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGl2TG9naW5FcnJvcicpO1xyXG5leHBvcnQgY29uc3QgbGJsTG9naW5FcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGJsTG9naW5FcnJvck1lc3NhZ2UnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBkaXZQd2RFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXZQd2RFcnJvcicpO1xyXG5leHBvcnQgY29uc3QgcHdkRXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3B3ZEVycicpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgY3VyclBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLnBvcCgpO1xyXG4gIGxldCBkZXY7XHJcbiAgaWYgKGxvY2F0aW9uLmhvc3RuYW1lID09PSBcImxvY2FsaG9zdFwiIHx8IGxvY2F0aW9uLmhvc3RuYW1lID09PSBcIjEyNy4wLjAuMVwiKSBkZXYgPSB0cnVlO1xyXG4gICAgXHJcbiAgaWYgKGN1cnJQYWdlICE9ICdpbmRleC5odG1sJyl7XHJcbiAgICBpZiAoZGV2ID09PSB0cnVlKXtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCJodHRwOi8vMTI3LjAuMC4xOjU1MDMvLi4vZGlzdC9pbmRleC5odG1sXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcImh0dHBzOi8vbWF0dGhld3BsYWlzYW5jZS5naXRodWIuaW8vU1Rwcm9kL2Rpc3QvaW5kZXguaHRtbFwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaG93QXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJQYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5wb3AoKTtcclxuICBsZXQgZGV2O1xyXG4gIGlmIChsb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCJsb2NhbGhvc3RcIiB8fCBsb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCIxMjcuMC4wLjFcIikgZGV2ID0gdHJ1ZTtcclxuXHJcbiAgaWYgKGN1cnJQYWdlID09ICdpbmRleC5odG1sJyl7XHJcbiAgICBpZiAoZGV2ID09PSB0cnVlKXtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCJodHRwOi8vMTI3LjAuMC4xOjU1MDMvLi4vZGlzdC9jdXJ2ZXMuaHRtbFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCJodHRwczovL21hdHRoZXdwbGFpc2FuY2UuZ2l0aHViLmlvL1NUcHJvZC9kaXN0L2N1cnZlcy5odG1sXCIpO1xyXG4gIH1cclxuICB9XHJcblxyXG5leHBvcnQgY29uc3QgaGlkZUxvZ2luRXJyb3IgPSAoKSA9PiB7XHJcbiAgZGl2TG9naW5FcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgbGJsTG9naW5FcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gJydcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dMb2dpbkVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgZGl2TG9naW5FcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyAgICBcclxuICBpZiAoZXJyb3IuY29kZSA9PSBBdXRoRXJyb3JDb2Rlcy5JTlZBTElEX1BBU1NXT1JEKSB7XHJcbiAgICBsYmxMb2dpbkVycm9yTWVzc2FnZS5pbm5lckhUTUwgPSBgV3JvbmcgcGFzc3dvcmRgXHJcbiAgfVxyXG4gIGVsc2UgaWYgKHNlc3Npb25TdG9yYWdlLmNoYW5nZVB3ZCA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgbGJsTG9naW5FcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gZXJyb3I7ICAgICAgXHJcbiAgfWVsc2Uge1xyXG4gICAgbGJsTG9naW5FcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gYEVycm9yOiAke2Vycm9yfWA7ICAgICAgXHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dQd2RFcnIgPSAoZXJyb3IpID0+IHtcclxuICBkaXZQd2RFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyAgICBcclxuICBwd2RFcnIuaW5uZXJIVE1MID0gYEVycm9yOiAke2Vycm9yfWAgICAgICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhpZGVQd2RFcnIgPSAoKSA9PiB7XHJcbiAgZGl2UHdkRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBwd2RFcnIuaW5uZXJIVE1MID0gJyc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRBY3RpdmUgPSAodmlldywgdGltZSkgPT4ge1xyXG4gIGxldCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlXCIpO1xyXG4gIFtdLmZvckVhY2guY2FsbChlbGVtcywgKGVsKSA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZpZXcpLmNsYXNzTmFtZSArPSBcImFjdGl2ZVwiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRpbWUpLmNsYXNzTmFtZSArPSBcImFjdGl2ZVwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEFjdGl2ZVRpbWUgPSAodGltZSkgPT4ge1xyXG4gIGxldCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlXCIpO1xyXG4gIFtdLmZvckVhY2guY2FsbChlbGVtcywgKGVsKSA9PiB7XHJcbiAgICBpZiAoZWwuaWQuaW5jbHVkZXMoXCJEYXlzXCIpKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGltZSkuY2xhc3NOYW1lICs9IFwiYWN0aXZlXCI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0QWN0aXZlVmlldyA9ICh2aWV3KSA9PiB7XHJcbiAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmVcIik7XHJcbiAgW10uZm9yRWFjaC5jYWxsKGVsZW1zLCAoZWwpID0+IHtcclxuICAgIGlmICghZWwuaWQuaW5jbHVkZXMoXCJEYXlzXCIpKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmlldykuY2xhc3NOYW1lICs9IFwiYWN0aXZlXCI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdG9nZ2xlSW5pdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgY3VyckluaXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5pdFRpbWUnKTtcclxuICBpZiAoY3VyckluaXQgPT0gMCkge1xyXG4gICAgJCgnI2luaXRfdGltZScpLnRleHQoJzMwIERheXMnKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luaXRUaW1lJywzMSlcclxuICB9ZWxzZSB7XHJcbiAgICAkKCcjaW5pdF90aW1lJykudGV4dCgnSW5jZXB0aW9uJylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbml0VGltZScsMClcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZUluaXRTY2FsZSA9ICgpID0+IHtcclxuICBjb25zdCBjdXJyU2NhbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5pdFNjYWxlJyk7XHJcbiAgaWYgKGN1cnJTY2FsZSA9PSAnbGluZWFyJykge1xyXG4gICAgJCgnI2luaXRfc2NhbGUnKS50ZXh0KCdMb2dhcml0aG1pYycpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5pdFNjYWxlJywnbG9nYXJpdGhtaWMnKVxyXG4gIH1lbHNlIHtcclxuICAgICQoJyNpbml0X3NjYWxlJykudGV4dCgnTGluZWFyJylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbml0U2NhbGUnLCdsaW5lYXInKVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tBY3RpdmUgPSAoZWxlbWVudCkgPT4ge1xyXG4gIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmVcIik7XHJcbiAgW10uZm9yRWFjaC5jYWxsKGVsZW1zLCAoZWwpID0+IHtcclxuICAgIGlmIChlbC5pZCA9PSBlbGVtZW50KSBmbGFnID0gdHJ1ZTtcclxuICB9KTtcclxuICByZXR1cm4gZmxhZztcclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/ui.js\n");

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