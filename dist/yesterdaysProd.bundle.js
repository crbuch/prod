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

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   activeWells: () => (/* binding */ activeWells),\n/* harmony export */   analyzeData: () => (/* binding */ analyzeData),\n/* harmony export */   analyzeDataET: () => (/* binding */ analyzeDataET),\n/* harmony export */   buildTable: () => (/* binding */ buildTable),\n/* harmony export */   dataCuml: () => (/* binding */ dataCuml),\n/* harmony export */   dataCumlET: () => (/* binding */ dataCumlET),\n/* harmony export */   dataET: () => (/* binding */ dataET),\n/* harmony export */   dataST: () => (/* binding */ dataST),\n/* harmony export */   dropdown: () => (/* binding */ dropdown),\n/* harmony export */   econ: () => (/* binding */ econ),\n/* harmony export */   filterData: () => (/* binding */ filterData),\n/* harmony export */   formations: () => (/* binding */ formations),\n/* harmony export */   legacyEcon: () => (/* binding */ legacyEcon),\n/* harmony export */   moDataET: () => (/* binding */ moDataET),\n/* harmony export */   moDataST: () => (/* binding */ moDataST),\n/* harmony export */   newProd: () => (/* binding */ newProd),\n/* harmony export */   payout: () => (/* binding */ payout),\n/* harmony export */   pl23_22: () => (/* binding */ pl23_22),\n/* harmony export */   pump: () => (/* binding */ pump),\n/* harmony export */   sortData: () => (/* binding */ sortData)\n/* harmony export */ });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\nconst dataST = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/allProductionData.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst dataET = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/allProductionDataET.json\").then((data) => {\r\n    return data;\r\n});\r\n\r\nconst moDataST = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/dataMonthlyST.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst moDataET = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/dataMonthlyET.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst dataCuml = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/cumProd.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst dataCumlET = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/cumProdET.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst analyzeData = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/analyze.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst analyzeDataET = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/analyzeET.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst formations = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/formations.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst econ = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/economics.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst payout = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/payouts.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst pump = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/pumpInfo.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst legacyEcon = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/legacyEcon.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst pl23_22 = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data\\\\pldata.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst newProd = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.csv)(\"../data\\\\recYrProd.csv\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst activeWells = () => {\r\n    let data = dataET;\r\n    if (sessionStorage.getItem('region') !== 'et') data = dataST;\r\n    const exitWell = data[0][0]\r\n    const wells = new Set();\r\n    \r\n    for (let i = 0; i < data.length; i++) {\r\n        const well = data[i][0];\r\n        wells.add(well);\r\n        if (well === exitWell & i !== 0) break;\r\n    };\r\n\r\n    return wells;\r\n};\r\n\r\n//Creates Dropdown//\r\nconst dropdown = (id) => {\r\n    let menu = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(id);\r\n    \r\n    activeWells().forEach(well => {\r\n        menu.append(\"option\")\r\n            .text(well)\r\n            .property(\"Value\", well);\r\n    });\r\n};\r\n\r\nconst buildTable = (allData) => {\r\n    const tbody = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"tbody\");\r\n    tbody.html(\"\");\r\n    allData.forEach((well) => {\r\n        let row = tbody.append(\"tr\");\r\n        Object.values(well).forEach((val) => {\r\n            let cell = row.append(\"td\");\r\n            cell.text(val);\r\n        });\r\n    });\r\n};\r\n\r\nconst filterData = (data, dropdownId) => {\r\n    let reqWell = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).property(\"value\");\r\n\r\n    if (reqWell) {\r\n        return data.filter((row) => row[0] == reqWell);\r\n    };\r\n    return data\r\n};\r\n\r\nconst sortData = (data, pos) => {\r\n    event.preventDefault();\r\n    let temp = [...data];\r\n    let sorted;\r\n    sorted = temp.sort((a, b) => {\r\n        const aVal = a[pos];\r\n        const bVal = b[pos];\r\n        return bVal - aVal;\r\n    });\r\n    buildTable(sorted);\r\n};\r\n\r\n\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZGF0YS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3ZDO0FBQ08scUJBQXFCLHdDQUFJO0FBQ2hDO0FBQ0EsQ0FBQztBQUNEO0FBQ08scUJBQXFCLHdDQUFJO0FBQ2hDO0FBQ0EsQ0FBQztBQUNEO0FBQ08sdUJBQXVCLHdDQUFJO0FBQ2xDO0FBQ0EsQ0FBQztBQUNEO0FBQ08sdUJBQXVCLHdDQUFJO0FBQ2xDO0FBQ0EsQ0FBQztBQUNEO0FBQ08sdUJBQXVCLHdDQUFJO0FBQ2xDO0FBQ0EsQ0FBQztBQUNEO0FBQ08seUJBQXlCLHdDQUFJO0FBQ3BDO0FBQ0EsQ0FBQztBQUNEO0FBQ08sMEJBQTBCLHdDQUFJO0FBQ3JDO0FBQ0EsQ0FBQztBQUNEO0FBQ08sNEJBQTRCLHdDQUFJO0FBQ3ZDO0FBQ0EsQ0FBQztBQUNEO0FBQ08seUJBQXlCLHdDQUFJO0FBQ3BDO0FBQ0EsQ0FBQztBQUNEO0FBQ08sbUJBQW1CLHdDQUFJO0FBQzlCO0FBQ0EsQ0FBQztBQUNEO0FBQ08scUJBQXFCLHdDQUFJO0FBQ2hDO0FBQ0EsQ0FBQztBQUNEO0FBQ08sbUJBQW1CLHdDQUFJO0FBQzlCO0FBQ0EsQ0FBQztBQUNEO0FBQ08seUJBQXlCLHdDQUFJO0FBQ3BDO0FBQ0EsQ0FBQztBQUNEO0FBQ08sc0JBQXNCLHdDQUFJO0FBQ2pDO0FBQ0EsQ0FBQztBQUNEO0FBQ08sc0JBQXNCLHVDQUFHO0FBQ2hDO0FBQ0EsQ0FBQztBQUNEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGVBQWUsMENBQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUCxrQkFBa0IsMENBQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUCxrQkFBa0IsMENBQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZC0xLy4vc3JjL2pzL2RhdGEuanM/N2QyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3YsIGpzb24sIHNlbGVjdCB9IGZyb20gJ2QzJztcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhU1QgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9hbGxQcm9kdWN0aW9uRGF0YS5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGFFVCA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL2FsbFByb2R1Y3Rpb25EYXRhRVQuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbW9EYXRhU1QgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9kYXRhTW9udGhseVNULmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbW9EYXRhRVQgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9kYXRhTW9udGhseUVULmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGF0YUN1bWwgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9jdW1Qcm9kLmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGF0YUN1bWxFVCA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL2N1bVByb2RFVC5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFuYWx5emVEYXRhID0gYXdhaXQganNvbihcIi4uL2RhdGEvYW5hbHl6ZS5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFuYWx5emVEYXRhRVQgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9hbmFseXplRVQuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRpb25zID0gYXdhaXQganNvbihcIi4uL2RhdGEvZm9ybWF0aW9ucy5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVjb24gPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9lY29ub21pY3MuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBwYXlvdXQgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9wYXlvdXRzLmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcHVtcCA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL3B1bXBJbmZvLmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbGVnYWN5RWNvbiA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL2xlZ2FjeUVjb24uanNvblwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBwbDIzXzIyID0gYXdhaXQganNvbihcIi4uL2RhdGFcXFxccGxkYXRhLmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbmV3UHJvZCA9IGF3YWl0IGNzdihcIi4uL2RhdGFcXFxccmVjWXJQcm9kLmNzdlwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3RpdmVXZWxscyA9ICgpID0+IHtcclxuICAgIGxldCBkYXRhID0gZGF0YUVUO1xyXG4gICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JlZ2lvbicpICE9PSAnZXQnKSBkYXRhID0gZGF0YVNUO1xyXG4gICAgY29uc3QgZXhpdFdlbGwgPSBkYXRhWzBdWzBdXHJcbiAgICBjb25zdCB3ZWxscyA9IG5ldyBTZXQoKTtcclxuICAgIFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgd2VsbCA9IGRhdGFbaV1bMF07XHJcbiAgICAgICAgd2VsbHMuYWRkKHdlbGwpO1xyXG4gICAgICAgIGlmICh3ZWxsID09PSBleGl0V2VsbCAmIGkgIT09IDApIGJyZWFrO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gd2VsbHM7XHJcbn07XHJcblxyXG4vL0NyZWF0ZXMgRHJvcGRvd24vL1xyXG5leHBvcnQgY29uc3QgZHJvcGRvd24gPSAoaWQpID0+IHtcclxuICAgIGxldCBtZW51ID0gc2VsZWN0KGlkKTtcclxuICAgIFxyXG4gICAgYWN0aXZlV2VsbHMoKS5mb3JFYWNoKHdlbGwgPT4ge1xyXG4gICAgICAgIG1lbnUuYXBwZW5kKFwib3B0aW9uXCIpXHJcbiAgICAgICAgICAgIC50ZXh0KHdlbGwpXHJcbiAgICAgICAgICAgIC5wcm9wZXJ0eShcIlZhbHVlXCIsIHdlbGwpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYnVpbGRUYWJsZSA9IChhbGxEYXRhKSA9PiB7XHJcbiAgICBjb25zdCB0Ym9keSA9IHNlbGVjdChcInRib2R5XCIpO1xyXG4gICAgdGJvZHkuaHRtbChcIlwiKTtcclxuICAgIGFsbERhdGEuZm9yRWFjaCgod2VsbCkgPT4ge1xyXG4gICAgICAgIGxldCByb3cgPSB0Ym9keS5hcHBlbmQoXCJ0clwiKTtcclxuICAgICAgICBPYmplY3QudmFsdWVzKHdlbGwpLmZvckVhY2goKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5hcHBlbmQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgY2VsbC50ZXh0KHZhbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJEYXRhID0gKGRhdGEsIGRyb3Bkb3duSWQpID0+IHtcclxuICAgIGxldCByZXFXZWxsID0gc2VsZWN0KGRyb3Bkb3duSWQpLnByb3BlcnR5KFwidmFsdWVcIik7XHJcblxyXG4gICAgaWYgKHJlcVdlbGwpIHtcclxuICAgICAgICByZXR1cm4gZGF0YS5maWx0ZXIoKHJvdykgPT4gcm93WzBdID09IHJlcVdlbGwpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBkYXRhXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc29ydERhdGEgPSAoZGF0YSwgcG9zKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHRlbXAgPSBbLi4uZGF0YV07XHJcbiAgICBsZXQgc29ydGVkO1xyXG4gICAgc29ydGVkID0gdGVtcC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYVZhbCA9IGFbcG9zXTtcclxuICAgICAgICBjb25zdCBiVmFsID0gYltwb3NdO1xyXG4gICAgICAgIHJldHVybiBiVmFsIC0gYVZhbDtcclxuICAgIH0pO1xyXG4gICAgYnVpbGRUYWJsZShzb3J0ZWQpO1xyXG59O1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/data.js\n");

/***/ }),

/***/ "./src/js/region.js":
/*!**************************!*\
  !*** ./src/js/region.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   monitorRegion: () => (/* binding */ monitorRegion)\n/* harmony export */ });\n$(document).ready(function () {\r\n    $(\"#header\").load(\"../src/pages/header.html\", function () {\r\n        //monitorRegion();\r\n    });\r\n});\r\n\r\nconst toggleRegion = () => {\r\n    let currRegion = sessionStorage.getItem(\"region\");\r\n    if (currRegion == \"st\" || currRegion == null) {\r\n        console.log(\"switching to east\");\r\n        sessionStorage.setItem(\"region\", \"et\");\r\n    } else {\r\n        sessionStorage.setItem(\"region\", \"st\");\r\n    }\r\n    sessionStorage.removeItem(\"siteSelection\");\r\n    location.reload();\r\n};\r\n\r\nconst monitorRegion = () => {\r\n    let currRegion = sessionStorage.getItem(\"region\");\r\n    const fieldTitle = document.querySelector('#fieldTitle');   \r\n    const regionBtn = document.querySelector(\"#toggleRegion\");\r\n    regionBtn.addEventListener('click', toggleRegion);\r\n    const width = $(window).width();\r\n    console.log('currRegion :>> ', currRegion);\r\n\r\n    if (currRegion == \"st\" || currRegion == null) {\r\n        regionBtn.innerHTML = \"East Texas\";\r\n        fieldTitle.textContent = \"South Texas Field\";\r\n        if (width < 768) {\r\n            fieldTitle.textContent = \"CML EXP - South Texas\"\r\n        };\r\n    } else {\r\n        regionBtn.innerHTML = \"South Texas\";\r\n        fieldTitle.textContent = \"East Texas Field\";\r\n        if (width < 768) {\r\n            fieldTitle.textContent = \"CML EXP - East Texas\"\r\n        };\r\n    };\r\n};\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcmVnaW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2QtMS8uL3NyYy9qcy9yZWdpb24uanM/MzMzNyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI2hlYWRlclwiKS5sb2FkKFwiLi4vc3JjL3BhZ2VzL2hlYWRlci5odG1sXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL21vbml0b3JSZWdpb24oKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmNvbnN0IHRvZ2dsZVJlZ2lvbiA9ICgpID0+IHtcclxuICAgIGxldCBjdXJyUmVnaW9uID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInJlZ2lvblwiKTtcclxuICAgIGlmIChjdXJyUmVnaW9uID09IFwic3RcIiB8fCBjdXJyUmVnaW9uID09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN3aXRjaGluZyB0byBlYXN0XCIpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJyZWdpb25cIiwgXCJldFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInJlZ2lvblwiLCBcInN0XCIpO1xyXG4gICAgfVxyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInNpdGVTZWxlY3Rpb25cIik7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtb25pdG9yUmVnaW9uID0gKCkgPT4ge1xyXG4gICAgbGV0IGN1cnJSZWdpb24gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwicmVnaW9uXCIpO1xyXG4gICAgY29uc3QgZmllbGRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWVsZFRpdGxlJyk7ICAgXHJcbiAgICBjb25zdCByZWdpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZVJlZ2lvblwiKTtcclxuICAgIHJlZ2lvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVJlZ2lvbik7XHJcbiAgICBjb25zdCB3aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgY29uc29sZS5sb2coJ2N1cnJSZWdpb24gOj4+ICcsIGN1cnJSZWdpb24pO1xyXG5cclxuICAgIGlmIChjdXJyUmVnaW9uID09IFwic3RcIiB8fCBjdXJyUmVnaW9uID09IG51bGwpIHtcclxuICAgICAgICByZWdpb25CdG4uaW5uZXJIVE1MID0gXCJFYXN0IFRleGFzXCI7XHJcbiAgICAgICAgZmllbGRUaXRsZS50ZXh0Q29udGVudCA9IFwiU291dGggVGV4YXMgRmllbGRcIjtcclxuICAgICAgICBpZiAod2lkdGggPCA3NjgpIHtcclxuICAgICAgICAgICAgZmllbGRUaXRsZS50ZXh0Q29udGVudCA9IFwiQ01MIEVYUCAtIFNvdXRoIFRleGFzXCJcclxuICAgICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZWdpb25CdG4uaW5uZXJIVE1MID0gXCJTb3V0aCBUZXhhc1wiO1xyXG4gICAgICAgIGZpZWxkVGl0bGUudGV4dENvbnRlbnQgPSBcIkVhc3QgVGV4YXMgRmllbGRcIjtcclxuICAgICAgICBpZiAod2lkdGggPCA3NjgpIHtcclxuICAgICAgICAgICAgZmllbGRUaXRsZS50ZXh0Q29udGVudCA9IFwiQ01MIEVYUCAtIEVhc3QgVGV4YXNcIlxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/region.js\n");

/***/ }),

/***/ "./src/js/yesterdaysProd.js":
/*!**********************************!*\
  !*** ./src/js/yesterdaysProd.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data__WEBPACK_IMPORTED_MODULE_3__]);\n_data__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n(0,_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChangedFb)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_2__.monitorRegion)();\r\n\r\nconst formatData = (data) => {\r\n    const yesterdayDate = data[0][1];\r\n    const filteredData = data.filter(row => row[1] === yesterdayDate);\r\n    const tableData = filteredData.map(([well, , oil, gas, water, tp, , comms]) =>\r\n        [well, oil, gas, water, tp, comms]\r\n    );\r\n\r\n    return tableData;\r\n};\r\n\r\n//main\r\nconst dropdownId = '#wellFilter'\r\nlet region = sessionStorage.getItem('region');\r\nlet data = _data__WEBPACK_IMPORTED_MODULE_3__.dataET;\r\nif (region !== 'et') data = _data__WEBPACK_IMPORTED_MODULE_3__.dataST;\r\n\r\nconst tableData = formatData(data);\r\n\r\n\r\ndocument.getElementById('Prodfilter').onclick = function () {\r\n    _data__WEBPACK_IMPORTED_MODULE_3__.sortData(tableData, 1);\r\n};\r\n\r\ndocument.getElementById('clearFilter').onclick = function () {\r\n    _data__WEBPACK_IMPORTED_MODULE_3__.buildTable(tableData);\r\n};\r\n\r\n(0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).on(\"change\", () => {\r\n    _data__WEBPACK_IMPORTED_MODULE_3__.buildTable(_data__WEBPACK_IMPORTED_MODULE_3__.filterData(tableData, dropdownId));\r\n});\r\n\r\nwindow.onload = function () {\r\n    _data__WEBPACK_IMPORTED_MODULE_3__.buildTable(tableData);\r\n    _data__WEBPACK_IMPORTED_MODULE_3__.dropdown(dropdownId);\r\n}();\r\n\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMveWVzdGVyZGF5c1Byb2QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEI7QUFDa0I7QUFDTjtBQUNaO0FBQzVCO0FBQ0EsMkRBQW9CO0FBQ3BCLHNEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcseUNBQVM7QUFDcEIsNEJBQTRCLHlDQUFTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJDQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2Q0FBYTtBQUNqQjtBQUNBO0FBQ0EsMENBQU07QUFDTixJQUFJLDZDQUFhLENBQUMsNkNBQWE7QUFDL0IsQ0FBQztBQUNEO0FBQ0E7QUFDQSxJQUFJLDZDQUFhO0FBQ2pCLElBQUksMkNBQVc7QUFDZixDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMveWVzdGVyZGF5c1Byb2QuanM/ZGZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkaCBmcm9tICcuL2RhdGEnXHJcbmltcG9ydCB7IG9uQXV0aFN0YXRlQ2hhbmdlZEZiIH0gZnJvbSAnLi9hdXRoJztcclxuaW1wb3J0IHsgbW9uaXRvclJlZ2lvbiB9IGZyb20gJy4vcmVnaW9uJ1xyXG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tICdkMyc7XHJcblxyXG5vbkF1dGhTdGF0ZUNoYW5nZWRGYigpO1xyXG5tb25pdG9yUmVnaW9uKCk7XHJcblxyXG5jb25zdCBmb3JtYXREYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IHllc3RlcmRheURhdGUgPSBkYXRhWzBdWzFdO1xyXG4gICAgY29uc3QgZmlsdGVyZWREYXRhID0gZGF0YS5maWx0ZXIocm93ID0+IHJvd1sxXSA9PT0geWVzdGVyZGF5RGF0ZSk7XHJcbiAgICBjb25zdCB0YWJsZURhdGEgPSBmaWx0ZXJlZERhdGEubWFwKChbd2VsbCwgLCBvaWwsIGdhcywgd2F0ZXIsIHRwLCAsIGNvbW1zXSkgPT5cclxuICAgICAgICBbd2VsbCwgb2lsLCBnYXMsIHdhdGVyLCB0cCwgY29tbXNdXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB0YWJsZURhdGE7XHJcbn07XHJcblxyXG4vL21haW5cclxuY29uc3QgZHJvcGRvd25JZCA9ICcjd2VsbEZpbHRlcidcclxubGV0IHJlZ2lvbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JlZ2lvbicpO1xyXG5sZXQgZGF0YSA9IGRoLmRhdGFFVDtcclxuaWYgKHJlZ2lvbiAhPT0gJ2V0JykgZGF0YSA9IGRoLmRhdGFTVDtcclxuXHJcbmNvbnN0IHRhYmxlRGF0YSA9IGZvcm1hdERhdGEoZGF0YSk7XHJcblxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Byb2RmaWx0ZXInKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZGguc29ydERhdGEodGFibGVEYXRhLCAxKTtcclxufTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhckZpbHRlcicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBkaC5idWlsZFRhYmxlKHRhYmxlRGF0YSk7XHJcbn07XHJcblxyXG5zZWxlY3QoZHJvcGRvd25JZCkub24oXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgZGguYnVpbGRUYWJsZShkaC5maWx0ZXJEYXRhKHRhYmxlRGF0YSwgZHJvcGRvd25JZCkpO1xyXG59KTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBkaC5idWlsZFRhYmxlKHRhYmxlRGF0YSk7XHJcbiAgICBkaC5kcm9wZG93bihkcm9wZG93bklkKTtcclxufSgpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/yesterdaysProd.js\n");

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
/******/ 			"yesterdaysProd": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_d3_src_index_js","vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-17252e"], () => (__webpack_require__("./src/js/yesterdaysProd.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;