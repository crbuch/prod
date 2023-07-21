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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   loginFb: () => (/* binding */ loginFb),\n/* harmony export */   logoutFb: () => (/* binding */ logoutFb),\n/* harmony export */   onAuthStateChangedFb: () => (/* binding */ onAuthStateChangedFb),\n/* harmony export */   updatePasswordFb: () => (/* binding */ updatePasswordFb)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\r\n\r\n\r\nconst firebaseConfig = {\r\n    apiKey: \"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU\",\r\n    authDomain: \"cmlproduction-1e86a.firebaseapp.com\",\r\n    projectId: \"cmlproduction-1e86a\",\r\n    storageBucket: \"cmlproduction-1e86a.appspot.com\",\r\n    messagingSenderId: \"924402330611\",\r\n    appId: \"1:924402330611:web:55155c0a5c5c6a7d4b8086\"\r\n};\r\n  \r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\n\r\n\r\nconst onAuthStateChangedFb = () => {\r\n    auth.onAuthStateChanged((user) => {\r\n        if (user) {\r\n            console.log('user mon :>> ', user);\r\n            //up();\r\n        } else {\r\n            console.log(\"none\");\r\n            window.location.replace('index.html');\r\n            const currentState = window.history.state;\r\n            window.history.replaceState(currentState, '', window.location.href);\r\n            window.onpopstate = function () {\r\n            window.history.replaceState(currentState, '', window.location.href);\r\n            };\r\n        }\r\n    });\r\n};\r\n\r\nconst up = () => {\r\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updateProfile)(auth.currentUser, {\r\n        displayName: ''\r\n      }).then(() => {\r\n        console.log('userCredential.user.displayName :>> ', auth.currentUser.displayName);\r\n      }).catch((error) => {\r\n        console.log('error :>> ', error);\r\n      });\r\n};\r\n\r\nconst loginFb = (email, password) => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth,email,password)\r\n};\r\n\r\nconst logoutFb = () => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);\r\n};\r\n\r\nconst updatePasswordFb = (newPassword) => {\r\n    const user = auth.currentUser;\r\n    if (user) {\r\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updatePassword)(user,newPassword);\r\n    }\r\n    return Promise.reject(new Error('No user is currently signed in.'));\r\n};\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDO0FBQ2tGO0FBQy9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBYTtBQUN6QixhQUFhLHNEQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBYTtBQUNqQjtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlFQUEwQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxXQUFXLHNEQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZEQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQzJFO0FBQzNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZC0xLy4vc3JjL2pzL2F1dGguanM/OTI5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkLCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbk91dCwgdXBkYXRlUGFzc3dvcmQsdXBkYXRlUHJvZmlsZSB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5QzN5T0tfUUw1UWJKYUt2anluWFh6T2JsNHVLc29KcFRVXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcImNtbHByb2R1Y3Rpb24tMWU4NmEuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwiY21scHJvZHVjdGlvbi0xZTg2YVwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJjbWxwcm9kdWN0aW9uLTFlODZhLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5MjQ0MDIzMzA2MTFcIixcclxuICAgIGFwcElkOiBcIjE6OTI0NDAyMzMwNjExOndlYjo1NTE1NWMwYTVjNWM2YTdkNGI4MDg2XCJcclxufTtcclxuICBcclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcblxyXG5cclxuY29uc3Qgb25BdXRoU3RhdGVDaGFuZ2VkRmIgPSAoKSA9PiB7XHJcbiAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyIG1vbiA6Pj4gJywgdXNlcik7XHJcbiAgICAgICAgICAgIC8vdXAoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vbmVcIik7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdpbmRleC5odG1sJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnN0YXRlO1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoY3VycmVudFN0YXRlLCAnJywgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICB3aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKGN1cnJlbnRTdGF0ZSwgJycsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHVwID0gKCkgPT4ge1xyXG4gICAgdXBkYXRlUHJvZmlsZShhdXRoLmN1cnJlbnRVc2VyLCB7XHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICcnXHJcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VyQ3JlZGVudGlhbC51c2VyLmRpc3BsYXlOYW1lIDo+PiAnLCBhdXRoLmN1cnJlbnRVc2VyLmRpc3BsYXlOYW1lKTtcclxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIDo+PiAnLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbG9naW5GYiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLGVtYWlsLHBhc3N3b3JkKVxyXG59O1xyXG5cclxuY29uc3QgbG9nb3V0RmIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc2lnbk91dChhdXRoKTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZVBhc3N3b3JkRmIgPSAobmV3UGFzc3dvcmQpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhdXRoLmN1cnJlbnRVc2VyO1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgICByZXR1cm4gdXBkYXRlUGFzc3dvcmQodXNlcixuZXdQYXNzd29yZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdObyB1c2VyIGlzIGN1cnJlbnRseSBzaWduZWQgaW4uJykpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgYXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkRmIsIGxvZ2luRmIsIGxvZ291dEZiLCB1cGRhdGVQYXNzd29yZEZiIH07XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/auth.js\n");

/***/ }),

/***/ "./src/js/layout.js":
/*!**************************!*\
  !*** ./src/js/layout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   layoutWbd: () => (/* binding */ layoutWbd),\n/* harmony export */   makeLayout: () => (/* binding */ makeLayout),\n/* harmony export */   makeTrace: () => (/* binding */ makeTrace)\n/* harmony export */ });\nconst makeTrace = (x, y, name, type=\"lines\", color, text, visible=true, dash) => ({\r\n    x,\r\n    y,\r\n    text,\r\n    name,\r\n    visible,\r\n    line: {\r\n        color,\r\n        dash\r\n    },\r\n    mode: type\r\n});\r\n\r\nconst makeLayout = (title, type, tickvals, ytitle, xtitle) => ({\r\n    title,\r\n    height: null,\r\n    legend: {\r\n        bgcolor: 'rgba(0, 0, 0, 0)',\r\n        font: {\r\n            color: '#000000'\r\n        },\r\n        orientation: \"h\",\r\n            y: 1.1,\r\n            xanchor: window.innerWidth > 400 ? \"center\" : \"left\",\r\n            x: .5,\r\n    },\r\n    yaxis: {\r\n        title: ytitle,\r\n        type: type || \"linear\",\r\n        rangemode: \"tozero\",\r\n        autorange: true,\r\n        tickformat: \"f\",\r\n        tickvals,\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n    xaxis: {\r\n        title: xtitle,\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n});\r\n\r\nconst config = {\r\n    modeBarButtonsToRemove: [\r\n        \"sendDataToCloud\",\r\n        \"autoScale2d\",\r\n        \"hoverClosestCartesian\",\r\n        \"hoverCompareCartesian\",\r\n        \"lasso2d\",\r\n        \"zoomIn2d\",\r\n        \"zoomOut2d\",\r\n        \"toggleSpikelines\",\r\n    ],\r\n    displaylogo: false,\r\n    responsive: true,\r\n    displayModeBar: false,\r\n    responsiveConfig: [\r\n        {\r\n        // Mobile devices with width less than or equal to 768px\r\n        breakpoint: 768,\r\n        options: {\r\n            legend: { orientation: 'h', y: -0.2 }\r\n        }\r\n        },\r\n        {\r\n        // Desktop devices with width greater than 768px\r\n        breakpoint: 0,\r\n        options: {\r\n            legend: { orientation: 'v', y: 1 }\r\n        }\r\n        }\r\n    ]\r\n};\r\n\r\nconst layoutWbd = (max,min,minTVD,maxTVD,wellName) => ({\r\n    width: 1620,\r\n    height: 700,\r\n\r\n    margin: {\r\n        l: 0,\r\n        r: 0,\r\n        b: 0,\r\n        t: 0,\r\n    },\r\n\r\n    title: {\r\n        text: \"Drilling for \" + wellName + \", Dimmit County, TX\",\r\n        y: 0.98,\r\n    },\r\n\r\n    legend: {\r\n        x: 0.8,\r\n        y: 0.8,\r\n    },\r\n    scene: {\r\n        aspectmode: \"cube\",\r\n        xaxis: {\r\n            title: \"Easting\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n        yaxis: {\r\n            title: \"Northing\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#f0f1f2\",\r\n            showbackground: true,\r\n\r\n        },\r\n        zaxis: {\r\n            title: \"TVD\",\r\n            nticks: 5,\r\n            range: [minTVD, maxTVD],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n    },\r\n    \r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvbGF5b3V0LmpzPzZmZWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG1ha2VUcmFjZSA9ICh4LCB5LCBuYW1lLCB0eXBlPVwibGluZXNcIiwgY29sb3IsIHRleHQsIHZpc2libGU9dHJ1ZSwgZGFzaCkgPT4gKHtcclxuICAgIHgsXHJcbiAgICB5LFxyXG4gICAgdGV4dCxcclxuICAgIG5hbWUsXHJcbiAgICB2aXNpYmxlLFxyXG4gICAgbGluZToge1xyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgICAgIGRhc2hcclxuICAgIH0sXHJcbiAgICBtb2RlOiB0eXBlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ha2VMYXlvdXQgPSAodGl0bGUsIHR5cGUsIHRpY2t2YWxzLCB5dGl0bGUsIHh0aXRsZSkgPT4gKHtcclxuICAgIHRpdGxlLFxyXG4gICAgaGVpZ2h0OiBudWxsLFxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgICAgYmdjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxyXG4gICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgY29sb3I6ICcjMDAwMDAwJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3JpZW50YXRpb246IFwiaFwiLFxyXG4gICAgICAgICAgICB5OiAxLjEsXHJcbiAgICAgICAgICAgIHhhbmNob3I6IHdpbmRvdy5pbm5lcldpZHRoID4gNDAwID8gXCJjZW50ZXJcIiA6IFwibGVmdFwiLFxyXG4gICAgICAgICAgICB4OiAuNSxcclxuICAgIH0sXHJcbiAgICB5YXhpczoge1xyXG4gICAgICAgIHRpdGxlOiB5dGl0bGUsXHJcbiAgICAgICAgdHlwZTogdHlwZSB8fCBcImxpbmVhclwiLFxyXG4gICAgICAgIHJhbmdlbW9kZTogXCJ0b3plcm9cIixcclxuICAgICAgICBhdXRvcmFuZ2U6IHRydWUsXHJcbiAgICAgICAgdGlja2Zvcm1hdDogXCJmXCIsXHJcbiAgICAgICAgdGlja3ZhbHMsXHJcbiAgICAgICAgZ3JpZGNvbG9yOiBcIiNkYmRiZGJcIixcclxuICAgIH0sXHJcbiAgICB4YXhpczoge1xyXG4gICAgICAgIHRpdGxlOiB4dGl0bGUsXHJcbiAgICAgICAgZ3JpZGNvbG9yOiBcIiNkYmRiZGJcIixcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIG1vZGVCYXJCdXR0b25zVG9SZW1vdmU6IFtcclxuICAgICAgICBcInNlbmREYXRhVG9DbG91ZFwiLFxyXG4gICAgICAgIFwiYXV0b1NjYWxlMmRcIixcclxuICAgICAgICBcImhvdmVyQ2xvc2VzdENhcnRlc2lhblwiLFxyXG4gICAgICAgIFwiaG92ZXJDb21wYXJlQ2FydGVzaWFuXCIsXHJcbiAgICAgICAgXCJsYXNzbzJkXCIsXHJcbiAgICAgICAgXCJ6b29tSW4yZFwiLFxyXG4gICAgICAgIFwiem9vbU91dDJkXCIsXHJcbiAgICAgICAgXCJ0b2dnbGVTcGlrZWxpbmVzXCIsXHJcbiAgICBdLFxyXG4gICAgZGlzcGxheWxvZ286IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIGRpc3BsYXlNb2RlQmFyOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmVDb25maWc6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgLy8gTW9iaWxlIGRldmljZXMgd2l0aCB3aWR0aCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gNzY4cHhcclxuICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBsZWdlbmQ6IHsgb3JpZW50YXRpb246ICdoJywgeTogLTAuMiB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIC8vIERlc2t0b3AgZGV2aWNlcyB3aXRoIHdpZHRoIGdyZWF0ZXIgdGhhbiA3NjhweFxyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDAsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBsZWdlbmQ6IHsgb3JpZW50YXRpb246ICd2JywgeTogMSB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsYXlvdXRXYmQgPSAobWF4LG1pbixtaW5UVkQsbWF4VFZELHdlbGxOYW1lKSA9PiAoe1xyXG4gICAgd2lkdGg6IDE2MjAsXHJcbiAgICBoZWlnaHQ6IDcwMCxcclxuXHJcbiAgICBtYXJnaW46IHtcclxuICAgICAgICBsOiAwLFxyXG4gICAgICAgIHI6IDAsXHJcbiAgICAgICAgYjogMCxcclxuICAgICAgICB0OiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHRleHQ6IFwiRHJpbGxpbmcgZm9yIFwiICsgd2VsbE5hbWUgKyBcIiwgRGltbWl0IENvdW50eSwgVFhcIixcclxuICAgICAgICB5OiAwLjk4LFxyXG4gICAgfSxcclxuXHJcbiAgICBsZWdlbmQ6IHtcclxuICAgICAgICB4OiAwLjgsXHJcbiAgICAgICAgeTogMC44LFxyXG4gICAgfSxcclxuICAgIHNjZW5lOiB7XHJcbiAgICAgICAgYXNwZWN0bW9kZTogXCJjdWJlXCIsXHJcbiAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiRWFzdGluZ1wiLFxyXG4gICAgICAgICAgICBudGlja3M6IDgsXHJcbiAgICAgICAgICAgIHJhbmdlOiBbbWF4LCBtaW5dLFxyXG4gICAgICAgICAgICBncmlkY29sb3I6IFwiIzhhOGE4YVwiLFxyXG4gICAgICAgICAgICB0aWNrY29sb3I6IFwiIzA1MDUwNVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kY29sb3I6IFwiI2VkZWRlZFwiLFxyXG4gICAgICAgICAgICBzaG93YmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk5vcnRoaW5nXCIsXHJcbiAgICAgICAgICAgIG50aWNrczogOCxcclxuICAgICAgICAgICAgcmFuZ2U6IFttYXgsIG1pbl0sXHJcbiAgICAgICAgICAgIGdyaWRjb2xvcjogXCIjOGE4YThhXCIsXHJcbiAgICAgICAgICAgIHRpY2tjb2xvcjogXCIjMDUwNTA1XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRjb2xvcjogXCIjZjBmMWYyXCIsXHJcbiAgICAgICAgICAgIHNob3diYWNrZ3JvdW5kOiB0cnVlLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHpheGlzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlRWRFwiLFxyXG4gICAgICAgICAgICBudGlja3M6IDUsXHJcbiAgICAgICAgICAgIHJhbmdlOiBbbWluVFZELCBtYXhUVkRdLFxyXG4gICAgICAgICAgICBncmlkY29sb3I6IFwiIzhhOGE4YVwiLFxyXG4gICAgICAgICAgICB0aWNrY29sb3I6IFwiIzA1MDUwNVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kY29sb3I6IFwiI2VkZWRlZFwiLFxyXG4gICAgICAgICAgICBzaG93YmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIFxyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/layout.js\n");

/***/ }),

/***/ "./src/js/region.js":
/*!**************************!*\
  !*** ./src/js/region.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   monitorRegion: () => (/* binding */ monitorRegion)\n/* harmony export */ });\n$(document).ready(function () {\r\n    $(\"#header\").load(\"../src/pages/header.html\", function () {\r\n        // monitorRegion();\r\n    });\r\n});\r\n\r\n// When Region is clicked:\r\nfunction updateDropdownToggleText() {\r\n    sessionStorage.removeItem(\"siteSelection\"); // Remove well location\r\n    location.reload();\r\n};\r\nconst monitorRegion = () => {\r\n    console.log(sessionStorage.getItem(\"region\"))\r\n    document.getElementById('currField').innerText = sessionStorage.getItem('regionName')\r\n    // Click event listeners\r\n    document.querySelectorAll('.dropdown-item').forEach(item => {\r\n        item.addEventListener('click', function() {\r\n            sessionStorage.setItem('region', this.id) // set 'region' to abbreviation\r\n            document.getElementById('currField').innerText = this.innerText; // \r\n            sessionStorage.setItem('regionName', this.innerText) // set 'regionName' to real \r\n            updateDropdownToggleText();\r\n        });\r\n    });\r\n};\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcmVnaW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZC0xLy4vc3JjL2pzL3JlZ2lvbi5qcz8zMzM3Il0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjaGVhZGVyXCIpLmxvYWQoXCIuLi9zcmMvcGFnZXMvaGVhZGVyLmh0bWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIG1vbml0b3JSZWdpb24oKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vIFdoZW4gUmVnaW9uIGlzIGNsaWNrZWQ6XHJcbmZ1bmN0aW9uIHVwZGF0ZURyb3Bkb3duVG9nZ2xlVGV4dCgpIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJzaXRlU2VsZWN0aW9uXCIpOyAvLyBSZW1vdmUgd2VsbCBsb2NhdGlvblxyXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBtb25pdG9yUmVnaW9uID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInJlZ2lvblwiKSlcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyRmllbGQnKS5pbm5lclRleHQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyZWdpb25OYW1lJylcclxuICAgIC8vIENsaWNrIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLWl0ZW0nKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncmVnaW9uJywgdGhpcy5pZCkgLy8gc2V0ICdyZWdpb24nIHRvIGFiYnJldmlhdGlvblxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VyckZpZWxkJykuaW5uZXJUZXh0ID0gdGhpcy5pbm5lclRleHQ7IC8vIFxyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZWdpb25OYW1lJywgdGhpcy5pbm5lclRleHQpIC8vIHNldCAncmVnaW9uTmFtZScgdG8gcmVhbCBcclxuICAgICAgICAgICAgdXBkYXRlRHJvcGRvd25Ub2dnbGVUZXh0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/region.js\n");

/***/ }),

/***/ "./src/js/wbd.js":
/*!***********************!*\
  !*** ./src/js/wbd.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChangedFb)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_2__.monitorRegion)();\r\n\r\nconst wbdData = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/datawbd/wells.json\").then((data) => {\r\n  return data\r\n});\r\n\r\nconst faultData = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/datawbd/shows.json\").then((data) => {\r\n  return data\r\n});\r\n\r\nasync function plot() {\r\n  const dropdownMenu = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"#wellselect\").node();\r\n  let wellName = dropdownMenu.value;\r\n  if (wellName == 'default') wellName = 'Aaron #1';\r\n\r\n  let selectedOption = wellName.replace(/[#\\s]/g, \"\");\r\n  console.log('selectedOption :>> ', selectedOption);\r\n\r\n  async function getData(file) {\r\n    console.log('file :>> ', file);\r\n    const data = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.csv)(`../data/datawbd/${file}`);\r\n    const [DataTVD, DataN, DataE] = data.reduce(([TVD, N, E], { TVD: tvd, Easting, Northing }) =>\r\n      [[...TVD, parseInt(tvd)],\r\n      [...N, parseInt(Northing)],\r\n      [...E, parseInt(Easting)]\r\n      ], [[], [], []]);\r\n    \r\n    return [DataTVD.map(el => -el), DataN, DataE];\r\n  };\r\n\r\n  const files = wbdData[wellName];\r\n  const dataPromises = files.map(file => getData(file));\r\n  const data = await Promise.all(dataPromises);\r\n  console.log('files :>> ', files);\r\n  let dataTvd = [];\r\n  let dataNorthing = [];\r\n  let dataEasting = [];\r\n  console.log('data :>> ', data);\r\n  data.forEach(bore => {\r\n    dataTvd.push(bore[0])\r\n    dataNorthing.push(bore[1])\r\n    dataEasting.push(bore[2])\r\n  });\r\n\r\n  const [minE, maxE] = (0,d3__WEBPACK_IMPORTED_MODULE_0__.extent)(dataEasting.flat());\r\n  const [minN, maxN] = (0,d3__WEBPACK_IMPORTED_MODULE_0__.extent)(dataNorthing.flat());\r\n  const [minTVD, _] = (0,d3__WEBPACK_IMPORTED_MODULE_0__.extent)(dataTvd.flat());\r\n\r\n  const min = Math.min(minE, minN);\r\n  const max = Math.max(maxE, maxN);\r\n\r\n  const layout = (0,_layout__WEBPACK_IMPORTED_MODULE_3__.layoutWbd)(max + 1000, min - 1000, minTVD - 500, minTVD + 2000, wellName);\r\n\r\n  const plotData = [];\r\n  const colors = ['#1d6acf', '#eb7a10', '#d61515', '#7B3FA9', '#6AE6EC'];\r\n\r\n  for (let i = 0; i < data.length; i++) {\r\n    plotData.push({\r\n      opacity: 0.8,\r\n      mode: \"lines\",\r\n      name: i === 0 ? \"Orginal Hole\" : `Side Track ${i}`,\r\n      line: {\r\n        width: 6,\r\n        color: colors[i],\r\n      },\r\n      type: \"scatter3d\",\r\n      x: data[i][2],\r\n      y: data[i][1],\r\n      z: data[i][0],\r\n    });\r\n  };\r\n\r\n  const faults = faultData[wellName]\r\n\r\n  if (faults != undefined) {\r\n    faults.forEach(fault => {\r\n      fault.forEach((line, idx) => {\r\n        plotData.push({\r\n          opacity: idx === 1 || idx === fault.length - 1 ? 1.0 : 0.4,\r\n          mode: \"lines\",\r\n          line: {\r\n            width: 6,\r\n            color: idx === 1 || idx === fault.length - 1 ? '#36e35c' : '#90f0a5'\r\n          },\r\n          type: \"scatter3d\",\r\n          showlegend: false,\r\n          x: line[2],\r\n          y: line[1],\r\n          z: line[0],\r\n        })\r\n      });\r\n    });\r\n  };\r\n\r\n  Plotly.newPlot(\"graph\", plotData, layout);\r\n};\r\n\r\nasync function dropdown() {\r\n  const wellsdict = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/datawbd/wells.json\").then((data) => {\r\n    return data\r\n  });\r\n  let menu = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"#wellselect\");\r\n  let wells = Object.keys(wellsdict)\r\n\r\n  wells.forEach(well => {\r\n    menu.append(\"option\")\r\n      .text(well)\r\n      .property(\"Value\", well);\r\n  });\r\n};\r\n\r\ndropdown();\r\n\r\n(0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"#wellselect\").on(\"change\", function () {\r\n  plot();\r\n});\r\n\r\n//init page on load//\r\nwindow.onload = function () {\r\n  plot();\r\n}();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvd2JkLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUNOO0FBQ0g7QUFDVTtBQUMvQztBQUNBLDJEQUFvQjtBQUNwQixzREFBYTtBQUNiO0FBQ0Esc0JBQXNCLHdDQUFJO0FBQzFCO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esd0JBQXdCLHdDQUFJO0FBQzVCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSx1QkFBdUIsMENBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1Q0FBRyxvQkFBb0IsS0FBSztBQUNuRCxnRUFBZ0UsNkJBQTZCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx1QkFBdUIsMENBQU07QUFDN0IsdUJBQXVCLDBDQUFNO0FBQzdCLHNCQUFzQiwwQ0FBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrREFBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0EscURBQXFELEVBQUU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsd0NBQUk7QUFDOUI7QUFDQSxHQUFHO0FBQ0gsYUFBYSwwQ0FBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBTTtBQUNOO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZC0xLy4vc3JjL2pzL3diZC5qcz9jMTY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9uQXV0aFN0YXRlQ2hhbmdlZEZiIH0gZnJvbSAnLi9hdXRoJztcclxuaW1wb3J0IHsgbW9uaXRvclJlZ2lvbiB9IGZyb20gJy4vcmVnaW9uJ1xyXG5pbXBvcnQgeyBsYXlvdXRXYmQgfSBmcm9tICcuL2xheW91dCc7XHJcbmltcG9ydCB7IGpzb24sIHNlbGVjdCwgY3N2LCBleHRlbnQgfSBmcm9tICdkMyc7XHJcblxyXG5vbkF1dGhTdGF0ZUNoYW5nZWRGYigpO1xyXG5tb25pdG9yUmVnaW9uKCk7XHJcblxyXG5jb25zdCB3YmREYXRhID0gYXdhaXQganNvbihcIi4uL2RhdGEvZGF0YXdiZC93ZWxscy5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICByZXR1cm4gZGF0YVxyXG59KTtcclxuXHJcbmNvbnN0IGZhdWx0RGF0YSA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL2RhdGF3YmQvc2hvd3MuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwbG90KCkge1xyXG4gIGNvbnN0IGRyb3Bkb3duTWVudSA9IHNlbGVjdChcIiN3ZWxsc2VsZWN0XCIpLm5vZGUoKTtcclxuICBsZXQgd2VsbE5hbWUgPSBkcm9wZG93bk1lbnUudmFsdWU7XHJcbiAgaWYgKHdlbGxOYW1lID09ICdkZWZhdWx0Jykgd2VsbE5hbWUgPSAnQWFyb24gIzEnO1xyXG5cclxuICBsZXQgc2VsZWN0ZWRPcHRpb24gPSB3ZWxsTmFtZS5yZXBsYWNlKC9bI1xcc10vZywgXCJcIik7XHJcbiAgY29uc29sZS5sb2coJ3NlbGVjdGVkT3B0aW9uIDo+PiAnLCBzZWxlY3RlZE9wdGlvbik7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoZmlsZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2ZpbGUgOj4+ICcsIGZpbGUpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNzdihgLi4vZGF0YS9kYXRhd2JkLyR7ZmlsZX1gKTtcclxuICAgIGNvbnN0IFtEYXRhVFZELCBEYXRhTiwgRGF0YUVdID0gZGF0YS5yZWR1Y2UoKFtUVkQsIE4sIEVdLCB7IFRWRDogdHZkLCBFYXN0aW5nLCBOb3J0aGluZyB9KSA9PlxyXG4gICAgICBbWy4uLlRWRCwgcGFyc2VJbnQodHZkKV0sXHJcbiAgICAgIFsuLi5OLCBwYXJzZUludChOb3J0aGluZyldLFxyXG4gICAgICBbLi4uRSwgcGFyc2VJbnQoRWFzdGluZyldXHJcbiAgICAgIF0sIFtbXSwgW10sIFtdXSk7XHJcbiAgICBcclxuICAgIHJldHVybiBbRGF0YVRWRC5tYXAoZWwgPT4gLWVsKSwgRGF0YU4sIERhdGFFXTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmaWxlcyA9IHdiZERhdGFbd2VsbE5hbWVdO1xyXG4gIGNvbnN0IGRhdGFQcm9taXNlcyA9IGZpbGVzLm1hcChmaWxlID0+IGdldERhdGEoZmlsZSkpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChkYXRhUHJvbWlzZXMpO1xyXG4gIGNvbnNvbGUubG9nKCdmaWxlcyA6Pj4gJywgZmlsZXMpO1xyXG4gIGxldCBkYXRhVHZkID0gW107XHJcbiAgbGV0IGRhdGFOb3J0aGluZyA9IFtdO1xyXG4gIGxldCBkYXRhRWFzdGluZyA9IFtdO1xyXG4gIGNvbnNvbGUubG9nKCdkYXRhIDo+PiAnLCBkYXRhKTtcclxuICBkYXRhLmZvckVhY2goYm9yZSA9PiB7XHJcbiAgICBkYXRhVHZkLnB1c2goYm9yZVswXSlcclxuICAgIGRhdGFOb3J0aGluZy5wdXNoKGJvcmVbMV0pXHJcbiAgICBkYXRhRWFzdGluZy5wdXNoKGJvcmVbMl0pXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFttaW5FLCBtYXhFXSA9IGV4dGVudChkYXRhRWFzdGluZy5mbGF0KCkpO1xyXG4gIGNvbnN0IFttaW5OLCBtYXhOXSA9IGV4dGVudChkYXRhTm9ydGhpbmcuZmxhdCgpKTtcclxuICBjb25zdCBbbWluVFZELCBfXSA9IGV4dGVudChkYXRhVHZkLmZsYXQoKSk7XHJcblxyXG4gIGNvbnN0IG1pbiA9IE1hdGgubWluKG1pbkUsIG1pbk4pO1xyXG4gIGNvbnN0IG1heCA9IE1hdGgubWF4KG1heEUsIG1heE4pO1xyXG5cclxuICBjb25zdCBsYXlvdXQgPSBsYXlvdXRXYmQobWF4ICsgMTAwMCwgbWluIC0gMTAwMCwgbWluVFZEIC0gNTAwLCBtaW5UVkQgKyAyMDAwLCB3ZWxsTmFtZSk7XHJcblxyXG4gIGNvbnN0IHBsb3REYXRhID0gW107XHJcbiAgY29uc3QgY29sb3JzID0gWycjMWQ2YWNmJywgJyNlYjdhMTAnLCAnI2Q2MTUxNScsICcjN0IzRkE5JywgJyM2QUU2RUMnXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBwbG90RGF0YS5wdXNoKHtcclxuICAgICAgb3BhY2l0eTogMC44LFxyXG4gICAgICBtb2RlOiBcImxpbmVzXCIsXHJcbiAgICAgIG5hbWU6IGkgPT09IDAgPyBcIk9yZ2luYWwgSG9sZVwiIDogYFNpZGUgVHJhY2sgJHtpfWAsXHJcbiAgICAgIGxpbmU6IHtcclxuICAgICAgICB3aWR0aDogNixcclxuICAgICAgICBjb2xvcjogY29sb3JzW2ldLFxyXG4gICAgICB9LFxyXG4gICAgICB0eXBlOiBcInNjYXR0ZXIzZFwiLFxyXG4gICAgICB4OiBkYXRhW2ldWzJdLFxyXG4gICAgICB5OiBkYXRhW2ldWzFdLFxyXG4gICAgICB6OiBkYXRhW2ldWzBdLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmF1bHRzID0gZmF1bHREYXRhW3dlbGxOYW1lXVxyXG5cclxuICBpZiAoZmF1bHRzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgZmF1bHRzLmZvckVhY2goZmF1bHQgPT4ge1xyXG4gICAgICBmYXVsdC5mb3JFYWNoKChsaW5lLCBpZHgpID0+IHtcclxuICAgICAgICBwbG90RGF0YS5wdXNoKHtcclxuICAgICAgICAgIG9wYWNpdHk6IGlkeCA9PT0gMSB8fCBpZHggPT09IGZhdWx0Lmxlbmd0aCAtIDEgPyAxLjAgOiAwLjQsXHJcbiAgICAgICAgICBtb2RlOiBcImxpbmVzXCIsXHJcbiAgICAgICAgICBsaW5lOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2LFxyXG4gICAgICAgICAgICBjb2xvcjogaWR4ID09PSAxIHx8IGlkeCA9PT0gZmF1bHQubGVuZ3RoIC0gMSA/ICcjMzZlMzVjJyA6ICcjOTBmMGE1J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHR5cGU6IFwic2NhdHRlcjNkXCIsXHJcbiAgICAgICAgICBzaG93bGVnZW5kOiBmYWxzZSxcclxuICAgICAgICAgIHg6IGxpbmVbMl0sXHJcbiAgICAgICAgICB5OiBsaW5lWzFdLFxyXG4gICAgICAgICAgejogbGluZVswXSxcclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIFBsb3RseS5uZXdQbG90KFwiZ3JhcGhcIiwgcGxvdERhdGEsIGxheW91dCk7XHJcbn07XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkcm9wZG93bigpIHtcclxuICBjb25zdCB3ZWxsc2RpY3QgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9kYXRhd2JkL3dlbGxzLmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9KTtcclxuICBsZXQgbWVudSA9IHNlbGVjdChcIiN3ZWxsc2VsZWN0XCIpO1xyXG4gIGxldCB3ZWxscyA9IE9iamVjdC5rZXlzKHdlbGxzZGljdClcclxuXHJcbiAgd2VsbHMuZm9yRWFjaCh3ZWxsID0+IHtcclxuICAgIG1lbnUuYXBwZW5kKFwib3B0aW9uXCIpXHJcbiAgICAgIC50ZXh0KHdlbGwpXHJcbiAgICAgIC5wcm9wZXJ0eShcIlZhbHVlXCIsIHdlbGwpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZHJvcGRvd24oKTtcclxuXHJcbnNlbGVjdChcIiN3ZWxsc2VsZWN0XCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICBwbG90KCk7XHJcbn0pO1xyXG5cclxuLy9pbml0IHBhZ2Ugb24gbG9hZC8vXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcGxvdCgpO1xyXG59KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/wbd.js\n");

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
/******/ 			if(queue && queue.d < 1) {
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
/******/ 			hasAwait && ((queue = []).d = -1);
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
/******/ 			queue && queue.d < 0 && (queue.d = 0);
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_d3_src_index_js","vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-17252e"], () => (__webpack_require__("./src/js/wbd.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;