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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changePwd: () => (/* binding */ changePwd),\n/* harmony export */   logout: () => (/* binding */ logout),\n/* harmony export */   monitorAuthState: () => (/* binding */ monitorAuthState)\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n// entry point \r\n\r\n\r\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU\",\r\n  authDomain: \"cmlproduction-1e86a.firebaseapp.com\",\r\n  projectId: \"cmlproduction-1e86a\",\r\n  storageBucket: \"cmlproduction-1e86a.appspot.com\",\r\n  messagingSenderId: \"924402330611\",\r\n  appId: \"1:924402330611:web:55155c0a5c5c6a7d4b8086\"\r\n};\r\n\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)();\r\n\r\nfunction writedb(name,data,uid){\r\n  const reference = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)(db,'users/' + uid);\r\n\r\n  (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.set)(reference, {\r\n    user: name,\r\n    deck: data,\r\n  })\r\n}\r\n\r\n\r\nconst monitorAuthState = async () => {\r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, user => {\r\n    if (user != null) {\r\n      localStorage.setItem('uid', user.uid);\r\n      localStorage.setItem('email', user.email);\r\n      (0,_ui__WEBPACK_IMPORTED_MODULE_3__.showApp)();\r\n    } else {\r\n      (0,_ui__WEBPACK_IMPORTED_MODULE_3__.showLoginForm)();\r\n    }\r\n  }\r\n  );\r\n};\r\n\r\n\r\nconst login = async () => {\r\n  let cleanUid = _ui__WEBPACK_IMPORTED_MODULE_3__.userName.value.replace(/\\s/g,\"\");\r\n  const password = _ui__WEBPACK_IMPORTED_MODULE_3__.userPassword.value;\r\n\r\n  if (cleanUid.substring(cleanUid.length - 8) != '@cml.com'){\r\n    cleanUid = `${cleanUid}@cml.com`;\r\n  }\r\n  \r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth, cleanUid, password)\r\n    .then((userCredential) => {\r\n      initStorage(userCredential.user);\r\n      (0,_ui__WEBPACK_IMPORTED_MODULE_3__.showApp)();\r\n    })\r\n    .catch((error) => {\r\n      console.log('error :>> ', error);\r\n      (0,_ui__WEBPACK_IMPORTED_MODULE_3__.showLoginError)(error);\r\n    });\r\n};\r\n\r\nconst initStorage = (userCreds) => {\r\n  if (localStorage.getItem('initTime') == null) localStorage.setItem('initTime',0);\r\n  if (localStorage.getItem('initScale') == null) localStorage.setItem('initScale','linear');\r\n  localStorage.setItem('uid', userCreds.uid);\r\n  localStorage.setItem('email', userCreds.email);\r\n  sessionStorage.setItem('region', 'st');\r\n};\r\n\r\nconst logout = async () => {\r\n  const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth).then(() => {\r\n    localStorage.removeItem('currUid')\r\n  }).catch((error) => {\r\n  });\r\n};\r\n\r\nconst changePwd = async (pwd,pwd_rpt) => {\r\n  if (pwd !== pwd_rpt) return \"Passwords do not match\";\r\n\r\n  const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\r\n  const usr = auth.currentUser;\r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updatePassword)(usr,pwd).then(() => {\r\n    return true;\r\n  }).catch((err) => {\r\n    return err;\r\n  })\r\n}\r\n\r\n\r\nconst currPage = window.location.pathname.split(\"/\").pop();\r\n\r\nif (currPage == 'index.html' || currPage == 'index.html?'){\r\n  _ui__WEBPACK_IMPORTED_MODULE_3__.btnLogin.addEventListener('click', login);\r\n  \r\n  _ui__WEBPACK_IMPORTED_MODULE_3__.form.addEventListener(\"keydown\", function(event) {\r\n    if (event.key === \"Enter\") {\r\n      event.preventDefault();\r\n      _ui__WEBPACK_IMPORTED_MODULE_3__.btnLogin.click();\r\n    }\r\n  });\r\n\r\n  monitorAuthState();\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBU2E7QUFDYjtBQUM2QztBQUNvRTtBQUN6RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkRBQWE7QUFDekIsYUFBYSxzREFBTztBQUNwQixXQUFXLDhEQUFXO0FBQ3RCO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQUc7QUFDdkI7QUFDQSxFQUFFLHNEQUFHO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDTztBQUNQLEVBQUUsaUVBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNENBQU87QUFDYixNQUFNO0FBQ04sTUFBTSxrREFBYTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5Q0FBUTtBQUN6QixtQkFBbUIsNkNBQVk7QUFDL0I7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQSxFQUFFLHlFQUEwQjtBQUM1QjtBQUNBO0FBQ0EsTUFBTSw0Q0FBTztBQUNiLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTSxtREFBYztBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGVBQWUsc0RBQU87QUFDdEIsRUFBRSxzREFBTztBQUNUO0FBQ0EsR0FBRztBQUNILEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsZUFBZSxzREFBTztBQUN0QjtBQUNBLEVBQUUsNkRBQWM7QUFDaEI7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5Q0FBUTtBQUNWO0FBQ0EsRUFBRSxxQ0FBSTtBQUNOO0FBQ0E7QUFDQSxNQUFNLHlDQUFRO0FBQ2Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZC0xLy4vc3JjL2pzL2luZGV4LmpzPzdiYTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZW50cnkgcG9pbnQgXHJcbmltcG9ydCB7XHJcbiAgdXNlck5hbWUsXHJcbiAgdXNlclBhc3N3b3JkLFxyXG4gIGJ0bkxvZ2luLFxyXG4gIGZvcm0sXHJcbiAgc2hvd0xvZ2luRXJyb3IsXHJcbiAgc2hvd0FwcCxcclxuICBzaG93TG9naW5Gb3JtXHJcbn0gZnJvbSAnLi91aSdcclxuXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQsIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLCBzaWduT3V0LCB1cGRhdGVQYXNzd29yZCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQge2dldERhdGFiYXNlLCByZWYsIHNldH0gZnJvbSAnZmlyZWJhc2UvZGF0YWJhc2UnO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUMzeU9LX1FMNVFiSmFLdmp5blhYek9ibDR1S3NvSnBUVVwiLFxyXG4gIGF1dGhEb21haW46IFwiY21scHJvZHVjdGlvbi0xZTg2YS5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwiY21scHJvZHVjdGlvbi0xZTg2YVwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiY21scHJvZHVjdGlvbi0xZTg2YS5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjkyNDQwMjMzMDYxMVwiLFxyXG4gIGFwcElkOiBcIjE6OTI0NDAyMzMwNjExOndlYjo1NTE1NWMwYTVjNWM2YTdkNGI4MDg2XCJcclxufTtcclxuXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG5jb25zdCBkYiA9IGdldERhdGFiYXNlKCk7XHJcblxyXG5mdW5jdGlvbiB3cml0ZWRiKG5hbWUsZGF0YSx1aWQpe1xyXG4gIGNvbnN0IHJlZmVyZW5jZSA9IHJlZihkYiwndXNlcnMvJyArIHVpZCk7XHJcblxyXG4gIHNldChyZWZlcmVuY2UsIHtcclxuICAgIHVzZXI6IG5hbWUsXHJcbiAgICBkZWNrOiBkYXRhLFxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbW9uaXRvckF1dGhTdGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgdXNlciA9PiB7XHJcbiAgICBpZiAodXNlciAhPSBudWxsKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1aWQnLCB1c2VyLnVpZCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICBzaG93QXBwKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaG93TG9naW5Gb3JtKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgbG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IGNsZWFuVWlkID0gdXNlck5hbWUudmFsdWUucmVwbGFjZSgvXFxzL2csXCJcIik7XHJcbiAgY29uc3QgcGFzc3dvcmQgPSB1c2VyUGFzc3dvcmQudmFsdWU7XHJcblxyXG4gIGlmIChjbGVhblVpZC5zdWJzdHJpbmcoY2xlYW5VaWQubGVuZ3RoIC0gOCkgIT0gJ0BjbWwuY29tJyl7XHJcbiAgICBjbGVhblVpZCA9IGAke2NsZWFuVWlkfUBjbWwuY29tYDtcclxuICB9XHJcbiAgXHJcbiAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgY2xlYW5VaWQsIHBhc3N3b3JkKVxyXG4gICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XHJcbiAgICAgIGluaXRTdG9yYWdlKHVzZXJDcmVkZW50aWFsLnVzZXIpO1xyXG4gICAgICBzaG93QXBwKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgOj4+ICcsIGVycm9yKTtcclxuICAgICAgc2hvd0xvZ2luRXJyb3IoZXJyb3IpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBpbml0U3RvcmFnZSA9ICh1c2VyQ3JlZHMpID0+IHtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luaXRUaW1lJykgPT0gbnVsbCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luaXRUaW1lJywwKTtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luaXRTY2FsZScpID09IG51bGwpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbml0U2NhbGUnLCdsaW5lYXInKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndWlkJywgdXNlckNyZWRzLnVpZCk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgdXNlckNyZWRzLmVtYWlsKTtcclxuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZWdpb24nLCAnc3QnKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuICBzaWduT3V0KGF1dGgpLnRoZW4oKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJVaWQnKVxyXG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZVB3ZCA9IGFzeW5jIChwd2QscHdkX3JwdCkgPT4ge1xyXG4gIGlmIChwd2QgIT09IHB3ZF9ycHQpIHJldHVybiBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIjtcclxuXHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuICBjb25zdCB1c3IgPSBhdXRoLmN1cnJlbnRVc2VyO1xyXG4gIHVwZGF0ZVBhc3N3b3JkKHVzcixwd2QpLnRoZW4oKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgcmV0dXJuIGVycjtcclxuICB9KVxyXG59XHJcblxyXG5cclxuY29uc3QgY3VyclBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLnBvcCgpO1xyXG5cclxuaWYgKGN1cnJQYWdlID09ICdpbmRleC5odG1sJyB8fCBjdXJyUGFnZSA9PSAnaW5kZXguaHRtbD8nKXtcclxuICBidG5Mb2dpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ2luKTtcclxuICBcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgYnRuTG9naW4uY2xpY2soKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbW9uaXRvckF1dGhTdGF0ZSgpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/js/layout.js":
/*!**************************!*\
  !*** ./src/js/layout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   layoutWbd: () => (/* binding */ layoutWbd),\n/* harmony export */   makeLayout: () => (/* binding */ makeLayout),\n/* harmony export */   makeTrace: () => (/* binding */ makeTrace)\n/* harmony export */ });\nconst makeTrace = (x, y, name, type=\"lines\", color, text, visible=true) => ({\r\n    x,\r\n    y,\r\n    text,\r\n    name,\r\n    visible,\r\n    line: {\r\n        color,\r\n    },\r\n    mode: type\r\n});\r\n\r\nconst makeLayout = (title, type, tickvals) => ({\r\n    title,\r\n    yaxis: {\r\n        type: type || \"linear\",\r\n        rangemode: \"tozero\",\r\n        autorange: true,\r\n        tickformat: \"f\",\r\n        tickvals,\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n    xaxis: {\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n});\r\n\r\nconst config = {\r\n    modeBarButtonsToRemove: [\r\n        \"sendDataToCloud\",\r\n        \"autoScale2d\",\r\n        \"hoverClosestCartesian\",\r\n        \"hoverCompareCartesian\",\r\n        \"lasso2d\",\r\n        \"zoomIn2d\",\r\n        \"zoomOut2d\",\r\n        \"toggleSpikelines\",\r\n    ],\r\n    displaylogo: false,\r\n    responsive: true,\r\n};\r\n\r\nconst layoutWbd = (max,min,minTVD,wellName) => ({\r\n    width: 1620,\r\n    height: 700,\r\n\r\n    margin: {\r\n        l: 0,\r\n        r: 0,\r\n        b: 0,\r\n        t: 0,\r\n    },\r\n\r\n    title: {\r\n        text: \"Drilling for \" + wellName + \", Dimmit County, TX\",\r\n        y: 0.98,\r\n    },\r\n\r\n    legend: {\r\n        x: 0.8,\r\n        y: 0.8,\r\n    },\r\n    scene: {\r\n        aspectmode: \"cube\",\r\n        xaxis: {\r\n            title: \"Easting\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n        yaxis: {\r\n            title: \"Northing\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#f0f1f2\",\r\n            showbackground: true,\r\n\r\n        },\r\n        zaxis: {\r\n            title: \"TVD\",\r\n            nticks: 5,\r\n            range: [minTVD, -3000],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n    },\r\n    \r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvbGF5b3V0LmpzPzZmZWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG1ha2VUcmFjZSA9ICh4LCB5LCBuYW1lLCB0eXBlPVwibGluZXNcIiwgY29sb3IsIHRleHQsIHZpc2libGU9dHJ1ZSkgPT4gKHtcclxuICAgIHgsXHJcbiAgICB5LFxyXG4gICAgdGV4dCxcclxuICAgIG5hbWUsXHJcbiAgICB2aXNpYmxlLFxyXG4gICAgbGluZToge1xyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgfSxcclxuICAgIG1vZGU6IHR5cGVcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZUxheW91dCA9ICh0aXRsZSwgdHlwZSwgdGlja3ZhbHMpID0+ICh7XHJcbiAgICB0aXRsZSxcclxuICAgIHlheGlzOiB7XHJcbiAgICAgICAgdHlwZTogdHlwZSB8fCBcImxpbmVhclwiLFxyXG4gICAgICAgIHJhbmdlbW9kZTogXCJ0b3plcm9cIixcclxuICAgICAgICBhdXRvcmFuZ2U6IHRydWUsXHJcbiAgICAgICAgdGlja2Zvcm1hdDogXCJmXCIsXHJcbiAgICAgICAgdGlja3ZhbHMsXHJcbiAgICAgICAgZ3JpZGNvbG9yOiBcIiNkYmRiZGJcIixcclxuICAgIH0sXHJcbiAgICB4YXhpczoge1xyXG4gICAgICAgIGdyaWRjb2xvcjogXCIjZGJkYmRiXCIsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBtb2RlQmFyQnV0dG9uc1RvUmVtb3ZlOiBbXHJcbiAgICAgICAgXCJzZW5kRGF0YVRvQ2xvdWRcIixcclxuICAgICAgICBcImF1dG9TY2FsZTJkXCIsXHJcbiAgICAgICAgXCJob3ZlckNsb3Nlc3RDYXJ0ZXNpYW5cIixcclxuICAgICAgICBcImhvdmVyQ29tcGFyZUNhcnRlc2lhblwiLFxyXG4gICAgICAgIFwibGFzc28yZFwiLFxyXG4gICAgICAgIFwiem9vbUluMmRcIixcclxuICAgICAgICBcInpvb21PdXQyZFwiLFxyXG4gICAgICAgIFwidG9nZ2xlU3Bpa2VsaW5lc1wiLFxyXG4gICAgXSxcclxuICAgIGRpc3BsYXlsb2dvOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGF5b3V0V2JkID0gKG1heCxtaW4sbWluVFZELHdlbGxOYW1lKSA9PiAoe1xyXG4gICAgd2lkdGg6IDE2MjAsXHJcbiAgICBoZWlnaHQ6IDcwMCxcclxuXHJcbiAgICBtYXJnaW46IHtcclxuICAgICAgICBsOiAwLFxyXG4gICAgICAgIHI6IDAsXHJcbiAgICAgICAgYjogMCxcclxuICAgICAgICB0OiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHRleHQ6IFwiRHJpbGxpbmcgZm9yIFwiICsgd2VsbE5hbWUgKyBcIiwgRGltbWl0IENvdW50eSwgVFhcIixcclxuICAgICAgICB5OiAwLjk4LFxyXG4gICAgfSxcclxuXHJcbiAgICBsZWdlbmQ6IHtcclxuICAgICAgICB4OiAwLjgsXHJcbiAgICAgICAgeTogMC44LFxyXG4gICAgfSxcclxuICAgIHNjZW5lOiB7XHJcbiAgICAgICAgYXNwZWN0bW9kZTogXCJjdWJlXCIsXHJcbiAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiRWFzdGluZ1wiLFxyXG4gICAgICAgICAgICBudGlja3M6IDgsXHJcbiAgICAgICAgICAgIHJhbmdlOiBbbWF4LCBtaW5dLFxyXG4gICAgICAgICAgICBncmlkY29sb3I6IFwiIzhhOGE4YVwiLFxyXG4gICAgICAgICAgICB0aWNrY29sb3I6IFwiIzA1MDUwNVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kY29sb3I6IFwiI2VkZWRlZFwiLFxyXG4gICAgICAgICAgICBzaG93YmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk5vcnRoaW5nXCIsXHJcbiAgICAgICAgICAgIG50aWNrczogOCxcclxuICAgICAgICAgICAgcmFuZ2U6IFttYXgsIG1pbl0sXHJcbiAgICAgICAgICAgIGdyaWRjb2xvcjogXCIjOGE4YThhXCIsXHJcbiAgICAgICAgICAgIHRpY2tjb2xvcjogXCIjMDUwNTA1XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRjb2xvcjogXCIjZjBmMWYyXCIsXHJcbiAgICAgICAgICAgIHNob3diYWNrZ3JvdW5kOiB0cnVlLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHpheGlzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlRWRFwiLFxyXG4gICAgICAgICAgICBudGlja3M6IDUsXHJcbiAgICAgICAgICAgIHJhbmdlOiBbbWluVFZELCAtMzAwMF0sXHJcbiAgICAgICAgICAgIGdyaWRjb2xvcjogXCIjOGE4YThhXCIsXHJcbiAgICAgICAgICAgIHRpY2tjb2xvcjogXCIjMDUwNTA1XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRjb2xvcjogXCIjZWRlZGVkXCIsXHJcbiAgICAgICAgICAgIHNob3diYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/layout.js\n");

/***/ }),

/***/ "./src/js/region.js":
/*!**************************!*\
  !*** ./src/js/region.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   monitorRegion: () => (/* binding */ monitorRegion)\n/* harmony export */ });\n$(document).ready(function () {\r\n    $(\"#header\").load(\"../src/pages/header.html\", function () {\r\n        monitorRegion();\r\n    });\r\n});\r\n\r\nconst toggleRegion = () => {\r\n    let currRegion = sessionStorage.getItem(\"region\");\r\n    if (currRegion == \"st\" || currRegion == null) {\r\n        console.log(\"switching to east\");\r\n        sessionStorage.setItem(\"region\", \"et\");\r\n    } else {\r\n        sessionStorage.setItem(\"region\", \"st\");\r\n    }\r\n};\r\n\r\nconst monitorRegion = () => {\r\n    let currRegion = sessionStorage.getItem(\"region\");\r\n    const fieldTitle = document.querySelector('#fieldTitle');   \r\n    const regionBtn = document.querySelector(\"#toggleRegion\");\r\n    regionBtn.addEventListener('click', toggleRegion);\r\n    const width = $(window).width();\r\n    console.log('currRegion :>> ', currRegion);\r\n\r\n    if (currRegion == \"st\" || currRegion == null) {\r\n        regionBtn.innerHTML = \"East Texas\";\r\n        fieldTitle.textContent = \"South Texas Field\";\r\n        if (width < 768) {\r\n            fieldTitle.textContent = \"CML EXP - South Texas\"\r\n        };\r\n    } else {\r\n        regionBtn.innerHTML = \"South Texas\";\r\n        fieldTitle.textContent = \"East Texas Field\";\r\n        if (width < 768) {\r\n            fieldTitle.textContent = \"CML EXP - East Texas\"\r\n        };\r\n    };\r\n};\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcmVnaW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZC0xLy4vc3JjL2pzL3JlZ2lvbi5qcz8zMzM3Il0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjaGVhZGVyXCIpLmxvYWQoXCIuLi9zcmMvcGFnZXMvaGVhZGVyLmh0bWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1vbml0b3JSZWdpb24oKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmNvbnN0IHRvZ2dsZVJlZ2lvbiA9ICgpID0+IHtcclxuICAgIGxldCBjdXJyUmVnaW9uID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInJlZ2lvblwiKTtcclxuICAgIGlmIChjdXJyUmVnaW9uID09IFwic3RcIiB8fCBjdXJyUmVnaW9uID09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN3aXRjaGluZyB0byBlYXN0XCIpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJyZWdpb25cIiwgXCJldFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInJlZ2lvblwiLCBcInN0XCIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vbml0b3JSZWdpb24gPSAoKSA9PiB7XHJcbiAgICBsZXQgY3VyclJlZ2lvbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJyZWdpb25cIik7XHJcbiAgICBjb25zdCBmaWVsZFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpZWxkVGl0bGUnKTsgICBcclxuICAgIGNvbnN0IHJlZ2lvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlUmVnaW9uXCIpO1xyXG4gICAgcmVnaW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlUmVnaW9uKTtcclxuICAgIGNvbnN0IHdpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICBjb25zb2xlLmxvZygnY3VyclJlZ2lvbiA6Pj4gJywgY3VyclJlZ2lvbik7XHJcblxyXG4gICAgaWYgKGN1cnJSZWdpb24gPT0gXCJzdFwiIHx8IGN1cnJSZWdpb24gPT0gbnVsbCkge1xyXG4gICAgICAgIHJlZ2lvbkJ0bi5pbm5lckhUTUwgPSBcIkVhc3QgVGV4YXNcIjtcclxuICAgICAgICBmaWVsZFRpdGxlLnRleHRDb250ZW50ID0gXCJTb3V0aCBUZXhhcyBGaWVsZFwiO1xyXG4gICAgICAgIGlmICh3aWR0aCA8IDc2OCkge1xyXG4gICAgICAgICAgICBmaWVsZFRpdGxlLnRleHRDb250ZW50ID0gXCJDTUwgRVhQIC0gU291dGggVGV4YXNcIlxyXG4gICAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlZ2lvbkJ0bi5pbm5lckhUTUwgPSBcIlNvdXRoIFRleGFzXCI7XHJcbiAgICAgICAgZmllbGRUaXRsZS50ZXh0Q29udGVudCA9IFwiRWFzdCBUZXhhcyBGaWVsZFwiO1xyXG4gICAgICAgIGlmICh3aWR0aCA8IDc2OCkge1xyXG4gICAgICAgICAgICBmaWVsZFRpdGxlLnRleHRDb250ZW50ID0gXCJDTUwgRVhQIC0gRWFzdCBUZXhhc1wiXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/region.js\n");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btnLogin: () => (/* binding */ btnLogin),\n/* harmony export */   btnLogout: () => (/* binding */ btnLogout),\n/* harmony export */   checkActive: () => (/* binding */ checkActive),\n/* harmony export */   divLoginError: () => (/* binding */ divLoginError),\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   hideLoginError: () => (/* binding */ hideLoginError),\n/* harmony export */   lblLoginErrorMessage: () => (/* binding */ lblLoginErrorMessage),\n/* harmony export */   setActive: () => (/* binding */ setActive),\n/* harmony export */   setActiveTime: () => (/* binding */ setActiveTime),\n/* harmony export */   setActiveView: () => (/* binding */ setActiveView),\n/* harmony export */   showApp: () => (/* binding */ showApp),\n/* harmony export */   showLoginError: () => (/* binding */ showLoginError),\n/* harmony export */   showLoginForm: () => (/* binding */ showLoginForm),\n/* harmony export */   toggleInitScale: () => (/* binding */ toggleInitScale),\n/* harmony export */   toggleInitTime: () => (/* binding */ toggleInitTime),\n/* harmony export */   userName: () => (/* binding */ userName),\n/* harmony export */   userPassword: () => (/* binding */ userPassword)\n/* harmony export */ });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\r\n\r\nconst userName = document.querySelector('#userEmail');\r\nconst userPassword = document.querySelector('#userPassword');\r\n\r\nconst btnLogin = document.querySelector('#btnLogin');\r\nconst btnLogout = document.querySelector('#btnLogout');\r\nconst form = document.getElementById('login');\r\n\r\nconst divLoginError = document.querySelector('#divLoginError');\r\nconst lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage');\r\n\r\n\r\nconst showLoginForm = () => {\r\n  const currPage = window.location.pathname.split(\"/\").pop();\r\n  let dev;\r\n  if (location.hostname === \"localhost\" || location.hostname === \"127.0.0.1\") dev = true;\r\n    \r\n  if (currPage != 'index.html'){\r\n    if (dev === true){\r\n      window.location.replace(\"http://127.0.0.1:5503/../dist/index.html\");\r\n      return;\r\n    }\r\n    window.location.replace(\"https://matthewplaisance.github.io/STprod/dist/index.html\");\r\n  }\r\n}\r\n\r\nconst showApp = () => {\r\n  const currPage = window.location.pathname.split(\"/\").pop();\r\n  let dev;\r\n  if (location.hostname === \"localhost\" || location.hostname === \"127.0.0.1\") dev = true;\r\n\r\n  if (currPage == 'index.html'){\r\n    if (dev === true){\r\n      window.location.replace(\"http://127.0.0.1:5503/../dist/curves.html\");\r\n      return;\r\n    }\r\n    window.location.replace(\"https://matthewplaisance.github.io/STprod/dist/curves.html\");\r\n  }\r\n  }\r\n\r\nconst hideLoginError = () => {\r\n  divLoginError.style.display = 'none'\r\n  lblLoginErrorMessage.innerHTML = ''\r\n}\r\n\r\nconst showLoginError = (error) => {\r\n  divLoginError.style.display = 'block'    \r\n  if (error.code == firebase_auth__WEBPACK_IMPORTED_MODULE_0__.AuthErrorCodes.INVALID_PASSWORD) {\r\n    lblLoginErrorMessage.innerHTML = `Wrong password`\r\n  }\r\n  else {\r\n    lblLoginErrorMessage.innerHTML = `Error: ${error.message}`      \r\n  }\r\n}\r\n\r\nconst setActive = (view, time) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    el.classList.remove(\"active\");\r\n  });\r\n  document.getElementById(view).className += \"active\";\r\n  document.getElementById(time).className += \"active\";\r\n};\r\n\r\nconst setActiveTime = (time) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (el.id.includes(\"Days\")) {\r\n      el.classList.remove(\"active\");\r\n    }\r\n  });\r\n  document.getElementById(time).className += \"active\";\r\n};\r\n\r\nconst setActiveView = (view) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (!el.id.includes(\"Days\")) {\r\n      el.classList.remove(\"active\");\r\n    }\r\n  });\r\n  document.getElementById(view).className += \"active\";\r\n};\r\n\r\nconst toggleInitTime = () => {\r\n  const currInit = localStorage.getItem('initTime');\r\n  if (currInit == 0) {\r\n    $('#init_time').text('30 Days')\r\n    localStorage.setItem('initTime',31)\r\n  }else {\r\n    $('#init_time').text('Inception')\r\n    localStorage.setItem('initTime',0)\r\n  };\r\n};\r\n\r\nconst toggleInitScale = () => {\r\n  const currScale = localStorage.getItem('initScale');\r\n  if (currScale == 'linear') {\r\n    $('#init_scale').text('Logarithmic')\r\n    localStorage.setItem('initScale','logarithmic')\r\n  }else {\r\n    $('#init_scale').text('Linear')\r\n    localStorage.setItem('initScale','linear')\r\n  };\r\n};\r\n\r\nconst checkActive = (element) => {\r\n  let flag = false;\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (el.id == element) flag = true;\r\n  });\r\n  return flag;\r\n};\r\n\r\n\r\n\r\ntry{\r\n  hideLoginError();\r\n} catch {\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdWkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQy9DO0FBQ087QUFDQTtBQUNQO0FBQ087QUFDQTtBQUNBO0FBQ1A7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxvQkFBb0IseURBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGNBQWM7QUFDN0Q7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvdWkuanM/YWFmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoRXJyb3JDb2RlcyB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJFbWFpbCcpO1xyXG5leHBvcnQgY29uc3QgdXNlclBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJQYXNzd29yZCcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ0bkxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bkxvZ2luJyk7XHJcbmV4cG9ydCBjb25zdCBidG5Mb2dvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuTG9nb3V0Jyk7XHJcbmV4cG9ydCBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luJyk7XHJcblxyXG5leHBvcnQgY29uc3QgZGl2TG9naW5FcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXZMb2dpbkVycm9yJyk7XHJcbmV4cG9ydCBjb25zdCBsYmxMb2dpbkVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYmxMb2dpbkVycm9yTWVzc2FnZScpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzaG93TG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJQYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5wb3AoKTtcclxuICBsZXQgZGV2O1xyXG4gIGlmIChsb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCJsb2NhbGhvc3RcIiB8fCBsb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCIxMjcuMC4wLjFcIikgZGV2ID0gdHJ1ZTtcclxuICAgIFxyXG4gIGlmIChjdXJyUGFnZSAhPSAnaW5kZXguaHRtbCcpe1xyXG4gICAgaWYgKGRldiA9PT0gdHJ1ZSl7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiaHR0cDovLzEyNy4wLjAuMTo1NTAzLy4uL2Rpc3QvaW5kZXguaHRtbFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCJodHRwczovL21hdHRoZXdwbGFpc2FuY2UuZ2l0aHViLmlvL1NUcHJvZC9kaXN0L2luZGV4Lmh0bWxcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd0FwcCA9ICgpID0+IHtcclxuICBjb25zdCBjdXJyUGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikucG9wKCk7XHJcbiAgbGV0IGRldjtcclxuICBpZiAobG9jYXRpb24uaG9zdG5hbWUgPT09IFwibG9jYWxob3N0XCIgfHwgbG9jYXRpb24uaG9zdG5hbWUgPT09IFwiMTI3LjAuMC4xXCIpIGRldiA9IHRydWU7XHJcblxyXG4gIGlmIChjdXJyUGFnZSA9PSAnaW5kZXguaHRtbCcpe1xyXG4gICAgaWYgKGRldiA9PT0gdHJ1ZSl7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiaHR0cDovLzEyNy4wLjAuMTo1NTAzLy4uL2Rpc3QvY3VydmVzLmh0bWxcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiaHR0cHM6Ly9tYXR0aGV3cGxhaXNhbmNlLmdpdGh1Yi5pby9TVHByb2QvZGlzdC9jdXJ2ZXMuaHRtbFwiKTtcclxuICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGNvbnN0IGhpZGVMb2dpbkVycm9yID0gKCkgPT4ge1xyXG4gIGRpdkxvZ2luRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gIGxibExvZ2luRXJyb3JNZXNzYWdlLmlubmVySFRNTCA9ICcnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaG93TG9naW5FcnJvciA9IChlcnJvcikgPT4ge1xyXG4gIGRpdkxvZ2luRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jaycgICAgXHJcbiAgaWYgKGVycm9yLmNvZGUgPT0gQXV0aEVycm9yQ29kZXMuSU5WQUxJRF9QQVNTV09SRCkge1xyXG4gICAgbGJsTG9naW5FcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gYFdyb25nIHBhc3N3b3JkYFxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGxibExvZ2luRXJyb3JNZXNzYWdlLmlubmVySFRNTCA9IGBFcnJvcjogJHtlcnJvci5tZXNzYWdlfWAgICAgICBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRBY3RpdmUgPSAodmlldywgdGltZSkgPT4ge1xyXG4gIGxldCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlXCIpO1xyXG4gIFtdLmZvckVhY2guY2FsbChlbGVtcywgKGVsKSA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZpZXcpLmNsYXNzTmFtZSArPSBcImFjdGl2ZVwiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRpbWUpLmNsYXNzTmFtZSArPSBcImFjdGl2ZVwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEFjdGl2ZVRpbWUgPSAodGltZSkgPT4ge1xyXG4gIGxldCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlXCIpO1xyXG4gIFtdLmZvckVhY2guY2FsbChlbGVtcywgKGVsKSA9PiB7XHJcbiAgICBpZiAoZWwuaWQuaW5jbHVkZXMoXCJEYXlzXCIpKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGltZSkuY2xhc3NOYW1lICs9IFwiYWN0aXZlXCI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0QWN0aXZlVmlldyA9ICh2aWV3KSA9PiB7XHJcbiAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmVcIik7XHJcbiAgW10uZm9yRWFjaC5jYWxsKGVsZW1zLCAoZWwpID0+IHtcclxuICAgIGlmICghZWwuaWQuaW5jbHVkZXMoXCJEYXlzXCIpKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmlldykuY2xhc3NOYW1lICs9IFwiYWN0aXZlXCI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdG9nZ2xlSW5pdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgY3VyckluaXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5pdFRpbWUnKTtcclxuICBpZiAoY3VyckluaXQgPT0gMCkge1xyXG4gICAgJCgnI2luaXRfdGltZScpLnRleHQoJzMwIERheXMnKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luaXRUaW1lJywzMSlcclxuICB9ZWxzZSB7XHJcbiAgICAkKCcjaW5pdF90aW1lJykudGV4dCgnSW5jZXB0aW9uJylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbml0VGltZScsMClcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZUluaXRTY2FsZSA9ICgpID0+IHtcclxuICBjb25zdCBjdXJyU2NhbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5pdFNjYWxlJyk7XHJcbiAgaWYgKGN1cnJTY2FsZSA9PSAnbGluZWFyJykge1xyXG4gICAgJCgnI2luaXRfc2NhbGUnKS50ZXh0KCdMb2dhcml0aG1pYycpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5pdFNjYWxlJywnbG9nYXJpdGhtaWMnKVxyXG4gIH1lbHNlIHtcclxuICAgICQoJyNpbml0X3NjYWxlJykudGV4dCgnTGluZWFyJylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbml0U2NhbGUnLCdsaW5lYXInKVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tBY3RpdmUgPSAoZWxlbWVudCkgPT4ge1xyXG4gIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmVcIik7XHJcbiAgW10uZm9yRWFjaC5jYWxsKGVsZW1zLCAoZWwpID0+IHtcclxuICAgIGlmIChlbC5pZCA9PSBlbGVtZW50KSBmbGFnID0gdHJ1ZTtcclxuICB9KTtcclxuICByZXR1cm4gZmxhZztcclxufTtcclxuXHJcblxyXG5cclxudHJ5e1xyXG4gIGhpZGVMb2dpbkVycm9yKCk7XHJcbn0gY2F0Y2gge1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/ui.js\n");

/***/ }),

/***/ "./src/js/wbd.js":
/*!***********************!*\
  !*** ./src/js/wbd.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_index__WEBPACK_IMPORTED_MODULE_1__.monitorAuthState)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_2__.monitorRegion)();\r\n\r\nconst wbdData = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/datawbd/wells.json\").then((data) => {\r\n  return data\r\n});\r\n\r\nconst faultData = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/datawbd/shows.json\").then((data) => {\r\n  return data\r\n});\r\n\r\nasync function plot() {\r\n  const dropdownMenu = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"#wellselect\").node();\r\n  let wellName = dropdownMenu.value; \r\n  if (wellName == 'default') wellName = 'Aaron #1';\r\n\r\n  let selectedOption = wellName.replace(/[#\\s]/g, \"\");\r\n  console.log('selectedOption :>> ', selectedOption);\r\n\r\n  async function getData(file) {\r\n    console.log('file :>> ', file);\r\n    const data = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.csv)(`../data/datawbd/${file}`);\r\n    const [DataTVD, DataN, DataE] = data.reduce(([TVD, N, E], { TVD: tvd, Easting, Northing }) =>\r\n      [[...TVD, parseInt(tvd)],\r\n      [...N, parseInt(Northing)],\r\n      [...E, parseInt(Easting)]\r\n      ], [[], [], []]);\r\n\r\n    changesign(DataTVD);\r\n    return [DataTVD, DataN, DataE];\r\n  };\r\n\r\n  const files = wbdData[wellName]\r\n  const dataPromises = files.map(file => getData(file));\r\n  const data = await Promise.all(dataPromises);\r\n  console.log('files :>> ', files);\r\n  let dataTvd = [];\r\n  let dataNorthing = [];\r\n  let dataEasting = [];\r\n  console.log('data :>> ', data);\r\n  data.forEach(bore => {\r\n    dataTvd.push(bore[0])\r\n    dataNorthing.push(bore[1])\r\n    dataEasting.push(bore[2])\r\n  });\r\n\r\n  const [minE, maxE] = (0,d3__WEBPACK_IMPORTED_MODULE_0__.extent)(dataEasting.flat());\r\n  const [minN, maxN] = (0,d3__WEBPACK_IMPORTED_MODULE_0__.extent)(dataNorthing.flat());\r\n  const minTVD = Math.min(...dataTvd)\r\n\r\n  const min = Math.min(minE, minN);\r\n  const max = Math.max(maxE, maxN);\r\n\r\n  const layout = (0,_layout__WEBPACK_IMPORTED_MODULE_3__.layoutWbd)(max + 1000, min - 1000, minTVD - 500, wellName);\r\n\r\n  const plotData = [];\r\n  const colors = ['#1d6acf', '#eb7a10', '#d61515', '#7B3FA9', '#6AE6EC'];\r\n\r\n  for (let i = 0; i < data.length; i++) {\r\n    plotData.push({\r\n      opacity: 0.8,\r\n      mode: \"lines\",\r\n      name: i === 0 ? \"Orginal Hole\" : `Side Track ${i}`,\r\n      line: {\r\n        width: 6,\r\n        color: colors[i],\r\n      },\r\n      type: \"scatter3d\",\r\n      x: data[i][2],\r\n      y: data[i][1],\r\n      z: data[i][0],\r\n    });\r\n  };\r\n\r\n  const faults = faultData[wellName]\r\n\r\n  if (faults != undefined) {\r\n    faults.forEach(fault => {\r\n      fault.forEach((line, idx) => {\r\n        plotData.push({\r\n          opacity: idx === 1 || idx === fault.length - 1 ? 1.0 : 0.4,\r\n          mode: \"lines\",\r\n          line: {\r\n            width: 6,\r\n            color: idx === 1 || idx === fault.length - 1 ? '#36e35c' : '#90f0a5'\r\n          },\r\n          type: \"scatter3d\",\r\n          showlegend: false,\r\n          x: line[2],\r\n          y: line[1],\r\n          z: line[0],\r\n        })\r\n      });\r\n    });\r\n  };\r\n\r\n  Plotly.newPlot(\"graph\", plotData, layout);\r\n};\r\n\r\nasync function dropdown() {\r\n  const wellsdict = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/datawbd/wells.json\").then((data) => {\r\n    return data\r\n  });\r\n  let menu = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"#wellselect\");\r\n  let wells = Object.keys(wellsdict)\r\n\r\n  wells.forEach(well => {\r\n    menu.append(\"option\")\r\n      .text(well)\r\n      .property(\"Value\", well);\r\n  });\r\n};\r\n\r\nconst changesign = (x) => {\r\n  x.forEach((el, i) => {\r\n    x[i] *= -1;\r\n  });\r\n};\r\n\r\ndropdown();\r\n\r\n(0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"#wellselect\").on(\"change\", function () {\r\n  plot();\r\n});\r\n\r\n//init page on load//\r\nwindow.onload = function () {\r\n  plot();\r\n}();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvd2JkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQztBQUNGO0FBQ0g7QUFDVTtBQUMvQztBQUNBLHdEQUFnQjtBQUNoQixzREFBYTtBQUNiO0FBQ0Esc0JBQXNCLHdDQUFJO0FBQzFCO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esd0JBQXdCLHdDQUFJO0FBQzVCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSx1QkFBdUIsMENBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1Q0FBRyxvQkFBb0IsS0FBSztBQUNuRCxnRUFBZ0UsNkJBQTZCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHVCQUF1QiwwQ0FBTTtBQUM3Qix1QkFBdUIsMENBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrREFBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0EscURBQXFELEVBQUU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsd0NBQUk7QUFDOUI7QUFDQSxHQUFHO0FBQ0gsYUFBYSwwQ0FBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUFNO0FBQ047QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvd2JkLmpzP2MxNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9uaXRvckF1dGhTdGF0ZSB9IGZyb20gJy4vaW5kZXgnXHJcbmltcG9ydCB7IG1vbml0b3JSZWdpb24gfSBmcm9tICcuL3JlZ2lvbidcclxuaW1wb3J0IHsgbGF5b3V0V2JkIH0gZnJvbSAnLi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBqc29uLCBzZWxlY3QsIGNzdiwgZXh0ZW50IH0gZnJvbSAnZDMnO1xyXG5cclxubW9uaXRvckF1dGhTdGF0ZSgpO1xyXG5tb25pdG9yUmVnaW9uKCk7XHJcblxyXG5jb25zdCB3YmREYXRhID0gYXdhaXQganNvbihcIi4uL2RhdGEvZGF0YXdiZC93ZWxscy5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICByZXR1cm4gZGF0YVxyXG59KTtcclxuXHJcbmNvbnN0IGZhdWx0RGF0YSA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL2RhdGF3YmQvc2hvd3MuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwbG90KCkge1xyXG4gIGNvbnN0IGRyb3Bkb3duTWVudSA9IHNlbGVjdChcIiN3ZWxsc2VsZWN0XCIpLm5vZGUoKTtcclxuICBsZXQgd2VsbE5hbWUgPSBkcm9wZG93bk1lbnUudmFsdWU7IFxyXG4gIGlmICh3ZWxsTmFtZSA9PSAnZGVmYXVsdCcpIHdlbGxOYW1lID0gJ0Fhcm9uICMxJztcclxuXHJcbiAgbGV0IHNlbGVjdGVkT3B0aW9uID0gd2VsbE5hbWUucmVwbGFjZSgvWyNcXHNdL2csIFwiXCIpO1xyXG4gIGNvbnNvbGUubG9nKCdzZWxlY3RlZE9wdGlvbiA6Pj4gJywgc2VsZWN0ZWRPcHRpb24pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKGZpbGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdmaWxlIDo+PiAnLCBmaWxlKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjc3YoYC4uL2RhdGEvZGF0YXdiZC8ke2ZpbGV9YCk7XHJcbiAgICBjb25zdCBbRGF0YVRWRCwgRGF0YU4sIERhdGFFXSA9IGRhdGEucmVkdWNlKChbVFZELCBOLCBFXSwgeyBUVkQ6IHR2ZCwgRWFzdGluZywgTm9ydGhpbmcgfSkgPT5cclxuICAgICAgW1suLi5UVkQsIHBhcnNlSW50KHR2ZCldLFxyXG4gICAgICBbLi4uTiwgcGFyc2VJbnQoTm9ydGhpbmcpXSxcclxuICAgICAgWy4uLkUsIHBhcnNlSW50KEVhc3RpbmcpXVxyXG4gICAgICBdLCBbW10sIFtdLCBbXV0pO1xyXG5cclxuICAgIGNoYW5nZXNpZ24oRGF0YVRWRCk7XHJcbiAgICByZXR1cm4gW0RhdGFUVkQsIERhdGFOLCBEYXRhRV07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsZXMgPSB3YmREYXRhW3dlbGxOYW1lXVxyXG4gIGNvbnN0IGRhdGFQcm9taXNlcyA9IGZpbGVzLm1hcChmaWxlID0+IGdldERhdGEoZmlsZSkpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChkYXRhUHJvbWlzZXMpO1xyXG4gIGNvbnNvbGUubG9nKCdmaWxlcyA6Pj4gJywgZmlsZXMpO1xyXG4gIGxldCBkYXRhVHZkID0gW107XHJcbiAgbGV0IGRhdGFOb3J0aGluZyA9IFtdO1xyXG4gIGxldCBkYXRhRWFzdGluZyA9IFtdO1xyXG4gIGNvbnNvbGUubG9nKCdkYXRhIDo+PiAnLCBkYXRhKTtcclxuICBkYXRhLmZvckVhY2goYm9yZSA9PiB7XHJcbiAgICBkYXRhVHZkLnB1c2goYm9yZVswXSlcclxuICAgIGRhdGFOb3J0aGluZy5wdXNoKGJvcmVbMV0pXHJcbiAgICBkYXRhRWFzdGluZy5wdXNoKGJvcmVbMl0pXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFttaW5FLCBtYXhFXSA9IGV4dGVudChkYXRhRWFzdGluZy5mbGF0KCkpO1xyXG4gIGNvbnN0IFttaW5OLCBtYXhOXSA9IGV4dGVudChkYXRhTm9ydGhpbmcuZmxhdCgpKTtcclxuICBjb25zdCBtaW5UVkQgPSBNYXRoLm1pbiguLi5kYXRhVHZkKVxyXG5cclxuICBjb25zdCBtaW4gPSBNYXRoLm1pbihtaW5FLCBtaW5OKTtcclxuICBjb25zdCBtYXggPSBNYXRoLm1heChtYXhFLCBtYXhOKTtcclxuXHJcbiAgY29uc3QgbGF5b3V0ID0gbGF5b3V0V2JkKG1heCArIDEwMDAsIG1pbiAtIDEwMDAsIG1pblRWRCAtIDUwMCwgd2VsbE5hbWUpO1xyXG5cclxuICBjb25zdCBwbG90RGF0YSA9IFtdO1xyXG4gIGNvbnN0IGNvbG9ycyA9IFsnIzFkNmFjZicsICcjZWI3YTEwJywgJyNkNjE1MTUnLCAnIzdCM0ZBOScsICcjNkFFNkVDJ107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgcGxvdERhdGEucHVzaCh7XHJcbiAgICAgIG9wYWNpdHk6IDAuOCxcclxuICAgICAgbW9kZTogXCJsaW5lc1wiLFxyXG4gICAgICBuYW1lOiBpID09PSAwID8gXCJPcmdpbmFsIEhvbGVcIiA6IGBTaWRlIFRyYWNrICR7aX1gLFxyXG4gICAgICBsaW5lOiB7XHJcbiAgICAgICAgd2lkdGg6IDYsXHJcbiAgICAgICAgY29sb3I6IGNvbG9yc1tpXSxcclxuICAgICAgfSxcclxuICAgICAgdHlwZTogXCJzY2F0dGVyM2RcIixcclxuICAgICAgeDogZGF0YVtpXVsyXSxcclxuICAgICAgeTogZGF0YVtpXVsxXSxcclxuICAgICAgejogZGF0YVtpXVswXSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZhdWx0cyA9IGZhdWx0RGF0YVt3ZWxsTmFtZV1cclxuXHJcbiAgaWYgKGZhdWx0cyAhPSB1bmRlZmluZWQpIHtcclxuICAgIGZhdWx0cy5mb3JFYWNoKGZhdWx0ID0+IHtcclxuICAgICAgZmF1bHQuZm9yRWFjaCgobGluZSwgaWR4KSA9PiB7XHJcbiAgICAgICAgcGxvdERhdGEucHVzaCh7XHJcbiAgICAgICAgICBvcGFjaXR5OiBpZHggPT09IDEgfHwgaWR4ID09PSBmYXVsdC5sZW5ndGggLSAxID8gMS4wIDogMC40LFxyXG4gICAgICAgICAgbW9kZTogXCJsaW5lc1wiLFxyXG4gICAgICAgICAgbGluZToge1xyXG4gICAgICAgICAgICB3aWR0aDogNixcclxuICAgICAgICAgICAgY29sb3I6IGlkeCA9PT0gMSB8fCBpZHggPT09IGZhdWx0Lmxlbmd0aCAtIDEgPyAnIzM2ZTM1YycgOiAnIzkwZjBhNSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0eXBlOiBcInNjYXR0ZXIzZFwiLFxyXG4gICAgICAgICAgc2hvd2xlZ2VuZDogZmFsc2UsXHJcbiAgICAgICAgICB4OiBsaW5lWzJdLFxyXG4gICAgICAgICAgeTogbGluZVsxXSxcclxuICAgICAgICAgIHo6IGxpbmVbMF0sXHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBQbG90bHkubmV3UGxvdChcImdyYXBoXCIsIHBsb3REYXRhLCBsYXlvdXQpO1xyXG59O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZHJvcGRvd24oKSB7XHJcbiAgY29uc3Qgd2VsbHNkaWN0ID0gYXdhaXQganNvbihcIi4uL2RhdGEvZGF0YXdiZC93ZWxscy5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhXHJcbiAgfSk7XHJcbiAgbGV0IG1lbnUgPSBzZWxlY3QoXCIjd2VsbHNlbGVjdFwiKTtcclxuICBsZXQgd2VsbHMgPSBPYmplY3Qua2V5cyh3ZWxsc2RpY3QpXHJcblxyXG4gIHdlbGxzLmZvckVhY2god2VsbCA9PiB7XHJcbiAgICBtZW51LmFwcGVuZChcIm9wdGlvblwiKVxyXG4gICAgICAudGV4dCh3ZWxsKVxyXG4gICAgICAucHJvcGVydHkoXCJWYWx1ZVwiLCB3ZWxsKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNoYW5nZXNpZ24gPSAoeCkgPT4ge1xyXG4gIHguZm9yRWFjaCgoZWwsIGkpID0+IHtcclxuICAgIHhbaV0gKj0gLTE7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5kcm9wZG93bigpO1xyXG5cclxuc2VsZWN0KFwiI3dlbGxzZWxlY3RcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHBsb3QoKTtcclxufSk7XHJcblxyXG4vL2luaXQgcGFnZSBvbiBsb2FkLy9cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICBwbG90KCk7XHJcbn0oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/wbd.js\n");

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 			"wbd": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-d0574a","vendors-node_modules_d3_src_index_js"], () => (__webpack_require__("./src/js/wbd.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;