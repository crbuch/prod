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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   logout: () => (/* binding */ logout),\n/* harmony export */   monitorAuthState: () => (/* binding */ monitorAuthState)\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n// entry point \r\n\r\n\r\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU\",\r\n  authDomain: \"cmlproduction-1e86a.firebaseapp.com\",\r\n  projectId: \"cmlproduction-1e86a\",\r\n  storageBucket: \"cmlproduction-1e86a.appspot.com\",\r\n  messagingSenderId: \"924402330611\",\r\n  appId: \"1:924402330611:web:55155c0a5c5c6a7d4b8086\"\r\n};\r\n\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)();\r\n\r\nfunction writedb(name,data,uid){\r\n  const reference = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)(db,'users/' + uid);\r\n\r\n  (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.set)(reference, {\r\n    user: name,\r\n    deck: data,\r\n  })\r\n}\r\n\r\n\r\nconst monitorAuthState = async () => {\r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, user => {\r\n    if (user != null) {\r\n      sessionStorage.setItem('currUid', user.uid)\r\n      \r\n      ;(0,_ui__WEBPACK_IMPORTED_MODULE_3__.showApp)();\r\n    } else {\r\n      (0,_ui__WEBPACK_IMPORTED_MODULE_3__.showLoginForm)();\r\n      console.log(\"monitor none\")\r\n    }\r\n  }\r\n  );\r\n};\r\nmonitorAuthState();\r\n\r\nconst login = async () => {\r\n  const email = `${userEmail.value}@cml.com`;\r\n  const password = _ui__WEBPACK_IMPORTED_MODULE_3__.userPassword.value;\r\n  \r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth, email, password)\r\n    .then((userCredential) => {\r\n      initStorage(userCredential.user.uid);\r\n    })\r\n    .catch((error) => {\r\n      (0,_ui__WEBPACK_IMPORTED_MODULE_3__.showLoginError)(error)\r\n    });\r\n};\r\n\r\nconst initStorage = (uid) => {\r\n  if (localStorage.getItem('initTime') == null) localStorage.setItem('initTime',0);\r\n  if (localStorage.getItem('initScale') == null) localStorage.setItem('initScale','linear');\r\n  sessionStorage.setItem('currUid', uid)\r\n  sessionStorage.setItem('region', 'st')\r\n};\r\n\r\nconst logout = async () => {\r\n  const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth).then(() => {\r\n    sessionStorage.removeItem('currUid')\r\n  }).catch((error) => {\r\n    console.log('error :>> ', error);\r\n  });\r\n};\r\n\r\ntry {\r\n  _ui__WEBPACK_IMPORTED_MODULE_3__.btnLogin.addEventListener('click', login)\r\n} catch {\r\n}\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFRYTtBQUNiO0FBQzZDO0FBQ29EO0FBQ3pDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBYTtBQUN6QixhQUFhLHNEQUFPO0FBQ3BCLFdBQVcsOERBQVc7QUFDdEI7QUFDQTtBQUNBLG9CQUFvQixzREFBRztBQUN2QjtBQUNBLEVBQUUsc0RBQUc7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsRUFBRSxpRUFBa0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2Q0FBTztBQUNiLE1BQU07QUFDTixNQUFNLGtEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DLG1CQUFtQiw2Q0FBWTtBQUMvQjtBQUNBLEVBQUUseUVBQTBCO0FBQzVCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxNQUFNLG1EQUFjO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGVBQWUsc0RBQU87QUFDdEIsRUFBRSxzREFBTztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUNBQVE7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlbnRyeSBwb2ludCBcclxuaW1wb3J0IHtcclxuICB1c2VyTmFtZSxcclxuICB1c2VyUGFzc3dvcmQsXHJcbiAgYnRuTG9naW4sXHJcbiAgc2hvd0xvZ2luRXJyb3IsXHJcbiAgc2hvd0FwcCxcclxuICBzaG93TG9naW5Gb3JtXHJcbn0gZnJvbSAnLi91aSdcclxuXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQsIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLCBzaWduT3V0IH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCB7Z2V0RGF0YWJhc2UsIHJlZiwgc2V0fSBmcm9tICdmaXJlYmFzZS9kYXRhYmFzZSc7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5QzN5T0tfUUw1UWJKYUt2anluWFh6T2JsNHVLc29KcFRVXCIsXHJcbiAgYXV0aERvbWFpbjogXCJjbWxwcm9kdWN0aW9uLTFlODZhLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJjbWxwcm9kdWN0aW9uLTFlODZhXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJjbWxwcm9kdWN0aW9uLTFlODZhLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiOTI0NDAyMzMwNjExXCIsXHJcbiAgYXBwSWQ6IFwiMTo5MjQ0MDIzMzA2MTE6d2ViOjU1MTU1YzBhNWM1YzZhN2Q0YjgwODZcIlxyXG59O1xyXG5cclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbmNvbnN0IGRiID0gZ2V0RGF0YWJhc2UoKTtcclxuXHJcbmZ1bmN0aW9uIHdyaXRlZGIobmFtZSxkYXRhLHVpZCl7XHJcbiAgY29uc3QgcmVmZXJlbmNlID0gcmVmKGRiLCd1c2Vycy8nICsgdWlkKTtcclxuXHJcbiAgc2V0KHJlZmVyZW5jZSwge1xyXG4gICAgdXNlcjogbmFtZSxcclxuICAgIGRlY2s6IGRhdGEsXHJcbiAgfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBtb25pdG9yQXV0aFN0YXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCB1c2VyID0+IHtcclxuICAgIGlmICh1c2VyICE9IG51bGwpIHtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY3VyclVpZCcsIHVzZXIudWlkKVxyXG4gICAgICBcclxuICAgICAgc2hvd0FwcCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd0xvZ2luRm9ybSgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1vbml0b3Igbm9uZVwiKVxyXG4gICAgfVxyXG4gIH1cclxuICApO1xyXG59O1xyXG5tb25pdG9yQXV0aFN0YXRlKCk7XHJcblxyXG5jb25zdCBsb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBlbWFpbCA9IGAke3VzZXJFbWFpbC52YWx1ZX1AY21sLmNvbWA7XHJcbiAgY29uc3QgcGFzc3dvcmQgPSB1c2VyUGFzc3dvcmQudmFsdWU7XHJcbiAgXHJcbiAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XHJcbiAgICAgIGluaXRTdG9yYWdlKHVzZXJDcmVkZW50aWFsLnVzZXIudWlkKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIHNob3dMb2dpbkVycm9yKGVycm9yKVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBpbml0U3RvcmFnZSA9ICh1aWQpID0+IHtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luaXRUaW1lJykgPT0gbnVsbCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luaXRUaW1lJywwKTtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luaXRTY2FsZScpID09IG51bGwpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbml0U2NhbGUnLCdsaW5lYXInKTtcclxuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjdXJyVWlkJywgdWlkKVxyXG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JlZ2lvbicsICdzdCcpXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgc2lnbk91dChhdXRoKS50aGVuKCgpID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJVaWQnKVxyXG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2Vycm9yIDo+PiAnLCBlcnJvcik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG50cnkge1xyXG4gIGJ0bkxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9naW4pXHJcbn0gY2F0Y2gge1xyXG59XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/js/layout.js":
/*!**************************!*\
  !*** ./src/js/layout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   layoutWbd: () => (/* binding */ layoutWbd),\n/* harmony export */   makeLayout: () => (/* binding */ makeLayout),\n/* harmony export */   makeTrace: () => (/* binding */ makeTrace)\n/* harmony export */ });\nconst makeTrace = (x, y, name, type, color, dash, text, visible) => ({\r\n    x,\r\n    y,\r\n    text,\r\n    name,\r\n    visible,\r\n    type: type || \"line\",\r\n    line: {\r\n        color,\r\n        dash,\r\n    },\r\n});\r\n\r\nconst makeLayout = (title, type, tickvals) => ({\r\n    title,\r\n    yaxis: {\r\n        type: type || \"linear\",\r\n        rangemode: \"tozero\",\r\n        autorange: true,\r\n        tickformat: \"f\",\r\n        tickvals,\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n    xaxis: {\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n});\r\n\r\nconst config = {\r\n    modeBarButtonsToRemove: [\r\n        \"sendDataToCloud\",\r\n        \"autoScale2d\",\r\n        \"hoverClosestCartesian\",\r\n        \"hoverCompareCartesian\",\r\n        \"lasso2d\",\r\n        \"zoomIn2d\",\r\n        \"zoomOut2d\",\r\n        \"toggleSpikelines\",\r\n    ],\r\n    displaylogo: false,\r\n    responsive: true,\r\n};\r\n\r\nconst layoutWbd = (max,min,minTVD,wellName) => ({\r\n    width: 1620,\r\n    height: 700,\r\n\r\n    margin: {\r\n        l: 0,\r\n        r: 0,\r\n        b: 0,\r\n        t: 0,\r\n    },\r\n\r\n    title: {\r\n        text: \"Drilling for \" + wellName + \", Dimmit County, TX\",\r\n        y: 0.98,\r\n    },\r\n\r\n    legend: {\r\n        x: 0.8,\r\n        y: 0.8,\r\n    },\r\n    scene: {\r\n        aspectmode: \"cube\",\r\n        xaxis: {\r\n            title: \"Easting\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n        yaxis: {\r\n            title: \"Northing\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#f0f1f2\",\r\n            showbackground: true,\r\n\r\n        },\r\n        zaxis: {\r\n            title: \"TVD\",\r\n            nticks: 5,\r\n            range: [minTVD, -3000],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n    },\r\n    \r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9sYXlvdXQuanM/NmZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbWFrZVRyYWNlID0gKHgsIHksIG5hbWUsIHR5cGUsIGNvbG9yLCBkYXNoLCB0ZXh0LCB2aXNpYmxlKSA9PiAoe1xyXG4gICAgeCxcclxuICAgIHksXHJcbiAgICB0ZXh0LFxyXG4gICAgbmFtZSxcclxuICAgIHZpc2libGUsXHJcbiAgICB0eXBlOiB0eXBlIHx8IFwibGluZVwiLFxyXG4gICAgbGluZToge1xyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgICAgIGRhc2gsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlTGF5b3V0ID0gKHRpdGxlLCB0eXBlLCB0aWNrdmFscykgPT4gKHtcclxuICAgIHRpdGxlLFxyXG4gICAgeWF4aXM6IHtcclxuICAgICAgICB0eXBlOiB0eXBlIHx8IFwibGluZWFyXCIsXHJcbiAgICAgICAgcmFuZ2Vtb2RlOiBcInRvemVyb1wiLFxyXG4gICAgICAgIGF1dG9yYW5nZTogdHJ1ZSxcclxuICAgICAgICB0aWNrZm9ybWF0OiBcImZcIixcclxuICAgICAgICB0aWNrdmFscyxcclxuICAgICAgICBncmlkY29sb3I6IFwiI2RiZGJkYlwiLFxyXG4gICAgfSxcclxuICAgIHhheGlzOiB7XHJcbiAgICAgICAgZ3JpZGNvbG9yOiBcIiNkYmRiZGJcIixcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIG1vZGVCYXJCdXR0b25zVG9SZW1vdmU6IFtcclxuICAgICAgICBcInNlbmREYXRhVG9DbG91ZFwiLFxyXG4gICAgICAgIFwiYXV0b1NjYWxlMmRcIixcclxuICAgICAgICBcImhvdmVyQ2xvc2VzdENhcnRlc2lhblwiLFxyXG4gICAgICAgIFwiaG92ZXJDb21wYXJlQ2FydGVzaWFuXCIsXHJcbiAgICAgICAgXCJsYXNzbzJkXCIsXHJcbiAgICAgICAgXCJ6b29tSW4yZFwiLFxyXG4gICAgICAgIFwiem9vbU91dDJkXCIsXHJcbiAgICAgICAgXCJ0b2dnbGVTcGlrZWxpbmVzXCIsXHJcbiAgICBdLFxyXG4gICAgZGlzcGxheWxvZ286IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsYXlvdXRXYmQgPSAobWF4LG1pbixtaW5UVkQsd2VsbE5hbWUpID0+ICh7XHJcbiAgICB3aWR0aDogMTYyMCxcclxuICAgIGhlaWdodDogNzAwLFxyXG5cclxuICAgIG1hcmdpbjoge1xyXG4gICAgICAgIGw6IDAsXHJcbiAgICAgICAgcjogMCxcclxuICAgICAgICBiOiAwLFxyXG4gICAgICAgIHQ6IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdGV4dDogXCJEcmlsbGluZyBmb3IgXCIgKyB3ZWxsTmFtZSArIFwiLCBEaW1taXQgQ291bnR5LCBUWFwiLFxyXG4gICAgICAgIHk6IDAuOTgsXHJcbiAgICB9LFxyXG5cclxuICAgIGxlZ2VuZDoge1xyXG4gICAgICAgIHg6IDAuOCxcclxuICAgICAgICB5OiAwLjgsXHJcbiAgICB9LFxyXG4gICAgc2NlbmU6IHtcclxuICAgICAgICBhc3BlY3Rtb2RlOiBcImN1YmVcIixcclxuICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJFYXN0aW5nXCIsXHJcbiAgICAgICAgICAgIG50aWNrczogOCxcclxuICAgICAgICAgICAgcmFuZ2U6IFttYXgsIG1pbl0sXHJcbiAgICAgICAgICAgIGdyaWRjb2xvcjogXCIjOGE4YThhXCIsXHJcbiAgICAgICAgICAgIHRpY2tjb2xvcjogXCIjMDUwNTA1XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRjb2xvcjogXCIjZWRlZGVkXCIsXHJcbiAgICAgICAgICAgIHNob3diYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiTm9ydGhpbmdcIixcclxuICAgICAgICAgICAgbnRpY2tzOiA4LFxyXG4gICAgICAgICAgICByYW5nZTogW21heCwgbWluXSxcclxuICAgICAgICAgICAgZ3JpZGNvbG9yOiBcIiM4YThhOGFcIixcclxuICAgICAgICAgICAgdGlja2NvbG9yOiBcIiMwNTA1MDVcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZGNvbG9yOiBcIiNmMGYxZjJcIixcclxuICAgICAgICAgICAgc2hvd2JhY2tncm91bmQ6IHRydWUsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgemF4aXM6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiVFZEXCIsXHJcbiAgICAgICAgICAgIG50aWNrczogNSxcclxuICAgICAgICAgICAgcmFuZ2U6IFttaW5UVkQsIC0zMDAwXSxcclxuICAgICAgICAgICAgZ3JpZGNvbG9yOiBcIiM4YThhOGFcIixcclxuICAgICAgICAgICAgdGlja2NvbG9yOiBcIiMwNTA1MDVcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZGNvbG9yOiBcIiNlZGVkZWRcIixcclxuICAgICAgICAgICAgc2hvd2JhY2tncm91bmQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/layout.js\n");

/***/ }),

/***/ "./src/js/region.js":
/*!**************************!*\
  !*** ./src/js/region.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   monitorRegion: () => (/* binding */ monitorRegion)\n/* harmony export */ });\nconst toggleRegion = () => {\r\n    let currRegion = sessionStorage.getItem(\"region\");\r\n    if (currRegion == \"st\" || currRegion == null) {\r\n        console.log(\"switching to east\");\r\n        sessionStorage.setItem(\"region\", \"et\");\r\n    } else {\r\n        sessionStorage.setItem(\"region\", \"st\");\r\n    }\r\n};\r\n\r\nconst monitorRegion = () => {\r\n    let currRegion = sessionStorage.getItem(\"region\");\r\n    const fieldTitle = document.querySelector('#fieldTitle');   \r\n    const regionBtn = document.querySelector(\"#switchRegion\");\r\n    regionBtn.addEventListener('click', toggleRegion);\r\n    const width = $(window).width();\r\n    console.log('currRegion :>> ', currRegion);\r\n\r\n    if (currRegion == \"st\" || currRegion == null) {\r\n        regionBtn.innerHTML = \"East Texas\";\r\n        fieldTitle.textContent = \"South Texas Field\";\r\n        if (width < 768) {\r\n            fieldTitle.textContent = \"CML EXP - South Texas\"\r\n        };\r\n    } else {\r\n        regionBtn.innerHTML = \"South Texas\";\r\n        fieldTitle.textContent = \"East Texas Field\";\r\n        if (width < 768) {\r\n            fieldTitle.textContent = \"CML EXP - East Texas\"\r\n        };\r\n    };\r\n};\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcmVnaW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVnaW9uLmpzPzMzMzciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdG9nZ2xlUmVnaW9uID0gKCkgPT4ge1xyXG4gICAgbGV0IGN1cnJSZWdpb24gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwicmVnaW9uXCIpO1xyXG4gICAgaWYgKGN1cnJSZWdpb24gPT0gXCJzdFwiIHx8IGN1cnJSZWdpb24gPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3dpdGNoaW5nIHRvIGVhc3RcIik7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInJlZ2lvblwiLCBcImV0XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwicmVnaW9uXCIsIFwic3RcIik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbW9uaXRvclJlZ2lvbiA9ICgpID0+IHtcclxuICAgIGxldCBjdXJyUmVnaW9uID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInJlZ2lvblwiKTtcclxuICAgIGNvbnN0IGZpZWxkVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmllbGRUaXRsZScpOyAgIFxyXG4gICAgY29uc3QgcmVnaW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzd2l0Y2hSZWdpb25cIik7XHJcbiAgICByZWdpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVSZWdpb24pO1xyXG4gICAgY29uc3Qgd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgIGNvbnNvbGUubG9nKCdjdXJyUmVnaW9uIDo+PiAnLCBjdXJyUmVnaW9uKTtcclxuXHJcbiAgICBpZiAoY3VyclJlZ2lvbiA9PSBcInN0XCIgfHwgY3VyclJlZ2lvbiA9PSBudWxsKSB7XHJcbiAgICAgICAgcmVnaW9uQnRuLmlubmVySFRNTCA9IFwiRWFzdCBUZXhhc1wiO1xyXG4gICAgICAgIGZpZWxkVGl0bGUudGV4dENvbnRlbnQgPSBcIlNvdXRoIFRleGFzIEZpZWxkXCI7XHJcbiAgICAgICAgaWYgKHdpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgICAgIGZpZWxkVGl0bGUudGV4dENvbnRlbnQgPSBcIkNNTCBFWFAgLSBTb3V0aCBUZXhhc1wiXHJcbiAgICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVnaW9uQnRuLmlubmVySFRNTCA9IFwiU291dGggVGV4YXNcIjtcclxuICAgICAgICBmaWVsZFRpdGxlLnRleHRDb250ZW50ID0gXCJFYXN0IFRleGFzIEZpZWxkXCI7XHJcbiAgICAgICAgaWYgKHdpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgICAgIGZpZWxkVGl0bGUudGV4dENvbnRlbnQgPSBcIkNNTCBFWFAgLSBFYXN0IFRleGFzXCJcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/region.js\n");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   activeFromStorage: () => (/* binding */ activeFromStorage),\n/* harmony export */   btnLogin: () => (/* binding */ btnLogin),\n/* harmony export */   btnLogout: () => (/* binding */ btnLogout),\n/* harmony export */   checkActive: () => (/* binding */ checkActive),\n/* harmony export */   divLoginError: () => (/* binding */ divLoginError),\n/* harmony export */   hideLoginError: () => (/* binding */ hideLoginError),\n/* harmony export */   lblLoginErrorMessage: () => (/* binding */ lblLoginErrorMessage),\n/* harmony export */   setActive: () => (/* binding */ setActive),\n/* harmony export */   setActiveTime: () => (/* binding */ setActiveTime),\n/* harmony export */   setActiveView: () => (/* binding */ setActiveView),\n/* harmony export */   showApp: () => (/* binding */ showApp),\n/* harmony export */   showLoginError: () => (/* binding */ showLoginError),\n/* harmony export */   showLoginForm: () => (/* binding */ showLoginForm),\n/* harmony export */   toggleInitScale: () => (/* binding */ toggleInitScale),\n/* harmony export */   toggleInitTime: () => (/* binding */ toggleInitTime),\n/* harmony export */   userName: () => (/* binding */ userName),\n/* harmony export */   userPassword: () => (/* binding */ userPassword)\n/* harmony export */ });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\r\n\r\nconst userName = document.querySelector('#userEmail')\r\nconst userPassword = document.querySelector('#userPassword')\r\n\r\nconst btnLogin = document.querySelector('#btnLogin')\r\nconst btnLogout = document.querySelector('#btnLogout')\r\n\r\nconst divLoginError = document.querySelector('#divLoginError')\r\nconst lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')\r\n\r\n\r\nconst showLoginForm = () => {\r\n  const currPage = window.location.pathname.split(\"/\").pop();\r\n  let dev;\r\n  if (location.hostname === \"localhost\" || location.hostname === \"127.0.0.1\") dev = true;\r\n    \r\n  if (currPage != 'index.html'){\r\n    if (dev === true){\r\n      window.location.replace(\"http://127.0.0.1:5503/../dist/index.html\");\r\n      return;\r\n    }\r\n    window.location.replace(\"https://matthewplaisance.github.io/STprod/dist/index.html\");\r\n  }\r\n}\r\n\r\nconst showApp = () => {\r\n  const currPage = window.location.pathname.split(\"/\").pop();\r\n  let dev;\r\n  if (location.hostname === \"localhost\" || location.hostname === \"127.0.0.1\") dev = true;\r\n\r\n  if (currPage == 'index.html'){\r\n    if (dev === true){\r\n      window.location.replace(\"http://127.0.0.1:5503/../dist/curves.html\");\r\n      return;\r\n    }\r\n    window.location.replace(\"https://matthewplaisance.github.io/STprod/dist/curves.html\");\r\n  }\r\n  }\r\n\r\nconst hideLoginError = () => {\r\n  divLoginError.style.display = 'none'\r\n  lblLoginErrorMessage.innerHTML = ''\r\n}\r\n\r\nconst showLoginError = (error) => {\r\n  divLoginError.style.display = 'block'    \r\n  if (error.code == firebase_auth__WEBPACK_IMPORTED_MODULE_0__.AuthErrorCodes.INVALID_PASSWORD) {\r\n    lblLoginErrorMessage.innerHTML = `Wrong password`\r\n  }\r\n  else {\r\n    lblLoginErrorMessage.innerHTML = `Error: ${error.message}`      \r\n  }\r\n}\r\n\r\nconst setActive = (view, time) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    el.classList.remove(\"active\");\r\n  });\r\n  document.getElementById(view).className += \"active\";\r\n  document.getElementById(time).className += \"active\";\r\n};\r\n\r\nconst setActiveTime = (time) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (el.id.includes(\"Days\")) {\r\n      el.classList.remove(\"active\");\r\n    }\r\n  });\r\n  document.getElementById(time).className += \"active\";\r\n};\r\n\r\nconst setActiveView = (view) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (!el.id.includes(\"Days\")) {\r\n      el.classList.remove(\"active\");\r\n    }\r\n  });\r\n  document.getElementById(view).className += \"active\";\r\n};\r\n\r\nconst toggleInitTime = () => {\r\n  const currInit = localStorage.getItem('initTime');\r\n  if (currInit == 0) {\r\n    $('#initTime').text('Init: 30 Days')\r\n    localStorage.setItem('initTime',31)\r\n  }else {\r\n    $('#initTime').text('Init: Inception')\r\n    localStorage.setItem('initTime',0)\r\n  };\r\n};\r\n\r\nconst toggleInitScale = () => {\r\n  const currScale = localStorage.getItem('initScale');\r\n  if (currScale == 'linear') {\r\n    $('#initScale').text('Init: Logarithmic')\r\n    localStorage.setItem('initScale','logarithmic')\r\n  }else {\r\n    $('#initScale').text('Init: Linear')\r\n    localStorage.setItem('initScale','linear')\r\n  };\r\n};\r\n\r\nconst activeFromStorage = () => {\r\n  const initTime = localStorage.getItem('initTime');\r\n  let activeTime = 'DaysInception';\r\n  if (initTime == 31) activeTime = 'Days30';\r\n  setActiveTime(activeTime);\r\n  return activeTime;\r\n};\r\n\r\nconst checkActive = (element) => {\r\n  let flag = false;\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (el.id == element) flag = true;\r\n  });\r\n  return flag;\r\n};\r\n\r\n\r\n\r\ntry{\r\n  hideLoginError();\r\n} catch {\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdWkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQy9DO0FBQ087QUFDQTtBQUNQO0FBQ087QUFDQTtBQUNQO0FBQ087QUFDQTtBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esb0JBQW9CLHlEQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxjQUFjO0FBQzdEO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy91aS5qcz9hYWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhFcnJvckNvZGVzIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlckVtYWlsJylcclxuZXhwb3J0IGNvbnN0IHVzZXJQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyUGFzc3dvcmQnKVxyXG5cclxuZXhwb3J0IGNvbnN0IGJ0bkxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bkxvZ2luJylcclxuZXhwb3J0IGNvbnN0IGJ0bkxvZ291dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5Mb2dvdXQnKVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpdkxvZ2luRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGl2TG9naW5FcnJvcicpXHJcbmV4cG9ydCBjb25zdCBsYmxMb2dpbkVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYmxMb2dpbkVycm9yTWVzc2FnZScpXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgY3VyclBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLnBvcCgpO1xyXG4gIGxldCBkZXY7XHJcbiAgaWYgKGxvY2F0aW9uLmhvc3RuYW1lID09PSBcImxvY2FsaG9zdFwiIHx8IGxvY2F0aW9uLmhvc3RuYW1lID09PSBcIjEyNy4wLjAuMVwiKSBkZXYgPSB0cnVlO1xyXG4gICAgXHJcbiAgaWYgKGN1cnJQYWdlICE9ICdpbmRleC5odG1sJyl7XHJcbiAgICBpZiAoZGV2ID09PSB0cnVlKXtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCJodHRwOi8vMTI3LjAuMC4xOjU1MDMvLi4vZGlzdC9pbmRleC5odG1sXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcImh0dHBzOi8vbWF0dGhld3BsYWlzYW5jZS5naXRodWIuaW8vU1Rwcm9kL2Rpc3QvaW5kZXguaHRtbFwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaG93QXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJQYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5wb3AoKTtcclxuICBsZXQgZGV2O1xyXG4gIGlmIChsb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCJsb2NhbGhvc3RcIiB8fCBsb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCIxMjcuMC4wLjFcIikgZGV2ID0gdHJ1ZTtcclxuXHJcbiAgaWYgKGN1cnJQYWdlID09ICdpbmRleC5odG1sJyl7XHJcbiAgICBpZiAoZGV2ID09PSB0cnVlKXtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCJodHRwOi8vMTI3LjAuMC4xOjU1MDMvLi4vZGlzdC9jdXJ2ZXMuaHRtbFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCJodHRwczovL21hdHRoZXdwbGFpc2FuY2UuZ2l0aHViLmlvL1NUcHJvZC9kaXN0L2N1cnZlcy5odG1sXCIpO1xyXG4gIH1cclxuICB9XHJcblxyXG5leHBvcnQgY29uc3QgaGlkZUxvZ2luRXJyb3IgPSAoKSA9PiB7XHJcbiAgZGl2TG9naW5FcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgbGJsTG9naW5FcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gJydcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dMb2dpbkVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgZGl2TG9naW5FcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyAgICBcclxuICBpZiAoZXJyb3IuY29kZSA9PSBBdXRoRXJyb3JDb2Rlcy5JTlZBTElEX1BBU1NXT1JEKSB7XHJcbiAgICBsYmxMb2dpbkVycm9yTWVzc2FnZS5pbm5lckhUTUwgPSBgV3JvbmcgcGFzc3dvcmRgXHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgbGJsTG9naW5FcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gYEVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YCAgICAgIFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldEFjdGl2ZSA9ICh2aWV3LCB0aW1lKSA9PiB7XHJcbiAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmVcIik7XHJcbiAgW10uZm9yRWFjaC5jYWxsKGVsZW1zLCAoZWwpID0+IHtcclxuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmlldykuY2xhc3NOYW1lICs9IFwiYWN0aXZlXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGltZSkuY2xhc3NOYW1lICs9IFwiYWN0aXZlXCI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0QWN0aXZlVGltZSA9ICh0aW1lKSA9PiB7XHJcbiAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmVcIik7XHJcbiAgW10uZm9yRWFjaC5jYWxsKGVsZW1zLCAoZWwpID0+IHtcclxuICAgIGlmIChlbC5pZC5pbmNsdWRlcyhcIkRheXNcIikpIHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aW1lKS5jbGFzc05hbWUgKz0gXCJhY3RpdmVcIjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRBY3RpdmVWaWV3ID0gKHZpZXcpID0+IHtcclxuICBsZXQgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjdGl2ZVwiKTtcclxuICBbXS5mb3JFYWNoLmNhbGwoZWxlbXMsIChlbCkgPT4ge1xyXG4gICAgaWYgKCFlbC5pZC5pbmNsdWRlcyhcIkRheXNcIikpIHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2aWV3KS5jbGFzc05hbWUgKz0gXCJhY3RpdmVcIjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVJbml0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCBjdXJySW5pdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbml0VGltZScpO1xyXG4gIGlmIChjdXJySW5pdCA9PSAwKSB7XHJcbiAgICAkKCcjaW5pdFRpbWUnKS50ZXh0KCdJbml0OiAzMCBEYXlzJylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbml0VGltZScsMzEpXHJcbiAgfWVsc2Uge1xyXG4gICAgJCgnI2luaXRUaW1lJykudGV4dCgnSW5pdDogSW5jZXB0aW9uJylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbml0VGltZScsMClcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZUluaXRTY2FsZSA9ICgpID0+IHtcclxuICBjb25zdCBjdXJyU2NhbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5pdFNjYWxlJyk7XHJcbiAgaWYgKGN1cnJTY2FsZSA9PSAnbGluZWFyJykge1xyXG4gICAgJCgnI2luaXRTY2FsZScpLnRleHQoJ0luaXQ6IExvZ2FyaXRobWljJylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbml0U2NhbGUnLCdsb2dhcml0aG1pYycpXHJcbiAgfWVsc2Uge1xyXG4gICAgJCgnI2luaXRTY2FsZScpLnRleHQoJ0luaXQ6IExpbmVhcicpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5pdFNjYWxlJywnbGluZWFyJylcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGl2ZUZyb21TdG9yYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGluaXRUaW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luaXRUaW1lJyk7XHJcbiAgbGV0IGFjdGl2ZVRpbWUgPSAnRGF5c0luY2VwdGlvbic7XHJcbiAgaWYgKGluaXRUaW1lID09IDMxKSBhY3RpdmVUaW1lID0gJ0RheXMzMCc7XHJcbiAgc2V0QWN0aXZlVGltZShhY3RpdmVUaW1lKTtcclxuICByZXR1cm4gYWN0aXZlVGltZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0FjdGl2ZSA9IChlbGVtZW50KSA9PiB7XHJcbiAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICBsZXQgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjdGl2ZVwiKTtcclxuICBbXS5mb3JFYWNoLmNhbGwoZWxlbXMsIChlbCkgPT4ge1xyXG4gICAgaWYgKGVsLmlkID09IGVsZW1lbnQpIGZsYWcgPSB0cnVlO1xyXG4gIH0pO1xyXG4gIHJldHVybiBmbGFnO1xyXG59O1xyXG5cclxuXHJcblxyXG50cnl7XHJcbiAgaGlkZUxvZ2luRXJyb3IoKTtcclxufSBjYXRjaCB7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/ui.js\n");

/***/ }),

/***/ "./src/js/wbd.js":
/*!***********************!*\
  !*** ./src/js/wbd.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_index__WEBPACK_IMPORTED_MODULE_1__.monitorAuthState)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_2__.monitorRegion)();\r\n\r\nconst wbdData = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/datawbd/wells.json\").then((data) => {\r\n  return data\r\n});\r\n\r\nconst faultData = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/datawbd/shows.json\").then((data) => {\r\n  return data\r\n});\r\n\r\nasync function plot() {\r\n  const dropdownMenu = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"#wellselect\").node();\r\n  let wellName = dropdownMenu.value; \r\n  if (wellName == 'default') wellName = 'Aaron #1';\r\n\r\n  let selectedOption = wellName.replace(/[#\\s]/g, \"\");\r\n  console.log('selectedOption :>> ', selectedOption);\r\n\r\n  async function getData(file) {\r\n    const data = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.csv)(`../data/datawbd/${file}`);\r\n    const [DataTVD, DataN, DataE] = data.reduce(([TVD, N, E], { TVD: tvd, Easting, Northing }) =>\r\n      [[...TVD, parseInt(tvd)],\r\n      [...N, parseInt(Northing)],\r\n      [...E, parseInt(Easting)]\r\n      ], [[], [], []]);\r\n\r\n    changesign(DataTVD);\r\n    return [DataTVD, DataN, DataE];\r\n  };\r\n\r\n  const files = wbdData[wellName]\r\n  const dataPromises = files.map(file => getData(file));\r\n  const data = await Promise.all(dataPromises);\r\n\r\n  let dataTvd = [];\r\n  let dataNorthing = [];\r\n  let dataEasting = [];\r\n\r\n  data.forEach(bore => {\r\n    dataTvd.push(bore[0])\r\n    dataNorthing.push(bore[1])\r\n    dataEasting.push(bore[2])\r\n  });\r\n\r\n  const [minE, maxE] = (0,d3__WEBPACK_IMPORTED_MODULE_0__.extent)(dataEasting.flat());\r\n  const [minN, maxN] = (0,d3__WEBPACK_IMPORTED_MODULE_0__.extent)(dataNorthing.flat());\r\n  const minTVD = Math.min(...dataTvd)\r\n\r\n  const min = Math.min(minE, minN);\r\n  const max = Math.max(maxE, maxN);\r\n\r\n  const layout = (0,_layout__WEBPACK_IMPORTED_MODULE_3__.layoutWbd)(max + 1000, min - 1000, minTVD - 500, wellName);\r\n\r\n  const plotData = [];\r\n  const colors = ['#1d6acf', '#eb7a10', '#d61515', 'red', '#345223'];\r\n\r\n  for (let i = 0; i < data.length; i++) {\r\n    plotData.push({\r\n      opacity: 0.8,\r\n      mode: \"lines\",\r\n      name: i === 0 ? \"Orginal Hole\" : `Side Track ${i}`,\r\n      line: {\r\n        width: 6,\r\n        color: colors[i],\r\n      },\r\n      type: \"scatter3d\",\r\n      x: data[i][2],\r\n      y: data[i][1],\r\n      z: data[i][0],\r\n    });\r\n  };\r\n\r\n  const faults = faultData[wellName]\r\n\r\n  if (faults != undefined) {\r\n    faults.forEach(fault => {\r\n      fault.forEach((line, idx) => {\r\n        plotData.push({\r\n          opacity: idx === 1 || idx === fault.length - 1 ? 1.0 : 0.4,\r\n          mode: \"lines\",\r\n          line: {\r\n            width: 6,\r\n            color: idx === 1 || idx === fault.length - 1 ? '#36e35c' : '#90f0a5'\r\n          },\r\n          type: \"scatter3d\",\r\n          showlegend: false,\r\n          x: line[2],\r\n          y: line[1],\r\n          z: line[0],\r\n        })\r\n      });\r\n    });\r\n  };\r\n\r\n  Plotly.newPlot(\"graph\", plotData, layout);\r\n};\r\n\r\nasync function dropdown() {\r\n  const wellsdict = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/datawbd/wells.json\").then((data) => {\r\n    return data\r\n  });\r\n  let menu = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"#wellselect\");\r\n  let wells = Object.keys(wellsdict)\r\n\r\n  wells.forEach(well => {\r\n    menu.append(\"option\")\r\n      .text(well)\r\n      .property(\"Value\", well);\r\n  });\r\n};\r\n\r\nconst changesign = (x) => {\r\n  x.forEach((el, i) => {\r\n    x[i] *= -1;\r\n  });\r\n};\r\n\r\ndropdown();\r\n\r\n(0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"#wellselect\").on(\"change\", function () {\r\n  plot();\r\n});\r\n\r\n//init page on load//\r\nwindow.onload = function () {\r\n  plot();\r\n}();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvd2JkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQztBQUNGO0FBQ0g7QUFDVTtBQUMvQztBQUNBLHdEQUFnQjtBQUNoQixzREFBYTtBQUNiO0FBQ0Esc0JBQXNCLHdDQUFJO0FBQzFCO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esd0JBQXdCLHdDQUFJO0FBQzVCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSx1QkFBdUIsMENBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUNBQUcsb0JBQW9CLEtBQUs7QUFDbkQsZ0VBQWdFLDZCQUE2QjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx1QkFBdUIsMENBQU07QUFDN0IsdUJBQXVCLDBDQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0RBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxFQUFFO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdDQUFJO0FBQzlCO0FBQ0EsR0FBRztBQUNILGFBQWEsMENBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBTTtBQUNOO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3diZC5qcz9jMTY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vbml0b3JBdXRoU3RhdGUgfSBmcm9tICcuL2luZGV4J1xyXG5pbXBvcnQgeyBtb25pdG9yUmVnaW9uIH0gZnJvbSAnLi9yZWdpb24nXHJcbmltcG9ydCB7IGxheW91dFdiZCB9IGZyb20gJy4vbGF5b3V0JztcclxuaW1wb3J0IHsganNvbiwgc2VsZWN0LCBjc3YsIGV4dGVudCB9IGZyb20gJ2QzJztcclxuXHJcbm1vbml0b3JBdXRoU3RhdGUoKTtcclxubW9uaXRvclJlZ2lvbigpO1xyXG5cclxuY29uc3Qgd2JkRGF0YSA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL2RhdGF3YmQvd2VsbHMuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5jb25zdCBmYXVsdERhdGEgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9kYXRhd2JkL3Nob3dzLmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBkYXRhXHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcGxvdCgpIHtcclxuICBjb25zdCBkcm9wZG93bk1lbnUgPSBzZWxlY3QoXCIjd2VsbHNlbGVjdFwiKS5ub2RlKCk7XHJcbiAgbGV0IHdlbGxOYW1lID0gZHJvcGRvd25NZW51LnZhbHVlOyBcclxuICBpZiAod2VsbE5hbWUgPT0gJ2RlZmF1bHQnKSB3ZWxsTmFtZSA9ICdBYXJvbiAjMSc7XHJcblxyXG4gIGxldCBzZWxlY3RlZE9wdGlvbiA9IHdlbGxOYW1lLnJlcGxhY2UoL1sjXFxzXS9nLCBcIlwiKTtcclxuICBjb25zb2xlLmxvZygnc2VsZWN0ZWRPcHRpb24gOj4+ICcsIHNlbGVjdGVkT3B0aW9uKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShmaWxlKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY3N2KGAuLi9kYXRhL2RhdGF3YmQvJHtmaWxlfWApO1xyXG4gICAgY29uc3QgW0RhdGFUVkQsIERhdGFOLCBEYXRhRV0gPSBkYXRhLnJlZHVjZSgoW1RWRCwgTiwgRV0sIHsgVFZEOiB0dmQsIEVhc3RpbmcsIE5vcnRoaW5nIH0pID0+XHJcbiAgICAgIFtbLi4uVFZELCBwYXJzZUludCh0dmQpXSxcclxuICAgICAgWy4uLk4sIHBhcnNlSW50KE5vcnRoaW5nKV0sXHJcbiAgICAgIFsuLi5FLCBwYXJzZUludChFYXN0aW5nKV1cclxuICAgICAgXSwgW1tdLCBbXSwgW11dKTtcclxuXHJcbiAgICBjaGFuZ2VzaWduKERhdGFUVkQpO1xyXG4gICAgcmV0dXJuIFtEYXRhVFZELCBEYXRhTiwgRGF0YUVdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbGVzID0gd2JkRGF0YVt3ZWxsTmFtZV1cclxuICBjb25zdCBkYXRhUHJvbWlzZXMgPSBmaWxlcy5tYXAoZmlsZSA9PiBnZXREYXRhKGZpbGUpKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoZGF0YVByb21pc2VzKTtcclxuXHJcbiAgbGV0IGRhdGFUdmQgPSBbXTtcclxuICBsZXQgZGF0YU5vcnRoaW5nID0gW107XHJcbiAgbGV0IGRhdGFFYXN0aW5nID0gW107XHJcblxyXG4gIGRhdGEuZm9yRWFjaChib3JlID0+IHtcclxuICAgIGRhdGFUdmQucHVzaChib3JlWzBdKVxyXG4gICAgZGF0YU5vcnRoaW5nLnB1c2goYm9yZVsxXSlcclxuICAgIGRhdGFFYXN0aW5nLnB1c2goYm9yZVsyXSlcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW21pbkUsIG1heEVdID0gZXh0ZW50KGRhdGFFYXN0aW5nLmZsYXQoKSk7XHJcbiAgY29uc3QgW21pbk4sIG1heE5dID0gZXh0ZW50KGRhdGFOb3J0aGluZy5mbGF0KCkpO1xyXG4gIGNvbnN0IG1pblRWRCA9IE1hdGgubWluKC4uLmRhdGFUdmQpXHJcblxyXG4gIGNvbnN0IG1pbiA9IE1hdGgubWluKG1pbkUsIG1pbk4pO1xyXG4gIGNvbnN0IG1heCA9IE1hdGgubWF4KG1heEUsIG1heE4pO1xyXG5cclxuICBjb25zdCBsYXlvdXQgPSBsYXlvdXRXYmQobWF4ICsgMTAwMCwgbWluIC0gMTAwMCwgbWluVFZEIC0gNTAwLCB3ZWxsTmFtZSk7XHJcblxyXG4gIGNvbnN0IHBsb3REYXRhID0gW107XHJcbiAgY29uc3QgY29sb3JzID0gWycjMWQ2YWNmJywgJyNlYjdhMTAnLCAnI2Q2MTUxNScsICdyZWQnLCAnIzM0NTIyMyddO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgIHBsb3REYXRhLnB1c2goe1xyXG4gICAgICBvcGFjaXR5OiAwLjgsXHJcbiAgICAgIG1vZGU6IFwibGluZXNcIixcclxuICAgICAgbmFtZTogaSA9PT0gMCA/IFwiT3JnaW5hbCBIb2xlXCIgOiBgU2lkZSBUcmFjayAke2l9YCxcclxuICAgICAgbGluZToge1xyXG4gICAgICAgIHdpZHRoOiA2LFxyXG4gICAgICAgIGNvbG9yOiBjb2xvcnNbaV0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHR5cGU6IFwic2NhdHRlcjNkXCIsXHJcbiAgICAgIHg6IGRhdGFbaV1bMl0sXHJcbiAgICAgIHk6IGRhdGFbaV1bMV0sXHJcbiAgICAgIHo6IGRhdGFbaV1bMF0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmYXVsdHMgPSBmYXVsdERhdGFbd2VsbE5hbWVdXHJcblxyXG4gIGlmIChmYXVsdHMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICBmYXVsdHMuZm9yRWFjaChmYXVsdCA9PiB7XHJcbiAgICAgIGZhdWx0LmZvckVhY2goKGxpbmUsIGlkeCkgPT4ge1xyXG4gICAgICAgIHBsb3REYXRhLnB1c2goe1xyXG4gICAgICAgICAgb3BhY2l0eTogaWR4ID09PSAxIHx8IGlkeCA9PT0gZmF1bHQubGVuZ3RoIC0gMSA/IDEuMCA6IDAuNCxcclxuICAgICAgICAgIG1vZGU6IFwibGluZXNcIixcclxuICAgICAgICAgIGxpbmU6IHtcclxuICAgICAgICAgICAgd2lkdGg6IDYsXHJcbiAgICAgICAgICAgIGNvbG9yOiBpZHggPT09IDEgfHwgaWR4ID09PSBmYXVsdC5sZW5ndGggLSAxID8gJyMzNmUzNWMnIDogJyM5MGYwYTUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdHlwZTogXCJzY2F0dGVyM2RcIixcclxuICAgICAgICAgIHNob3dsZWdlbmQ6IGZhbHNlLFxyXG4gICAgICAgICAgeDogbGluZVsyXSxcclxuICAgICAgICAgIHk6IGxpbmVbMV0sXHJcbiAgICAgICAgICB6OiBsaW5lWzBdLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgUGxvdGx5Lm5ld1Bsb3QoXCJncmFwaFwiLCBwbG90RGF0YSwgbGF5b3V0KTtcclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRyb3Bkb3duKCkge1xyXG4gIGNvbnN0IHdlbGxzZGljdCA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL2RhdGF3YmQvd2VsbHMuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH0pO1xyXG4gIGxldCBtZW51ID0gc2VsZWN0KFwiI3dlbGxzZWxlY3RcIik7XHJcbiAgbGV0IHdlbGxzID0gT2JqZWN0LmtleXMod2VsbHNkaWN0KVxyXG5cclxuICB3ZWxscy5mb3JFYWNoKHdlbGwgPT4ge1xyXG4gICAgbWVudS5hcHBlbmQoXCJvcHRpb25cIilcclxuICAgICAgLnRleHQod2VsbClcclxuICAgICAgLnByb3BlcnR5KFwiVmFsdWVcIiwgd2VsbCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VzaWduID0gKHgpID0+IHtcclxuICB4LmZvckVhY2goKGVsLCBpKSA9PiB7XHJcbiAgICB4W2ldICo9IC0xO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZHJvcGRvd24oKTtcclxuXHJcbnNlbGVjdChcIiN3ZWxsc2VsZWN0XCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICBwbG90KCk7XHJcbn0pO1xyXG5cclxuLy9pbml0IHBhZ2Ugb24gbG9hZC8vXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcGxvdCgpO1xyXG59KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/wbd.js\n");

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
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
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