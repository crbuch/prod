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

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   activeWells: () => (/* binding */ activeWells),\n/* harmony export */   analyzeData: () => (/* binding */ analyzeData),\n/* harmony export */   analyzeDataET: () => (/* binding */ analyzeDataET),\n/* harmony export */   buildTable: () => (/* binding */ buildTable),\n/* harmony export */   dataCuml: () => (/* binding */ dataCuml),\n/* harmony export */   dataCumlET: () => (/* binding */ dataCumlET),\n/* harmony export */   dataET: () => (/* binding */ dataET),\n/* harmony export */   dataST: () => (/* binding */ dataST),\n/* harmony export */   dropdown: () => (/* binding */ dropdown),\n/* harmony export */   econ: () => (/* binding */ econ),\n/* harmony export */   filterData: () => (/* binding */ filterData),\n/* harmony export */   formations: () => (/* binding */ formations),\n/* harmony export */   legacyEcon: () => (/* binding */ legacyEcon),\n/* harmony export */   moDataST: () => (/* binding */ moDataST),\n/* harmony export */   newProd: () => (/* binding */ newProd),\n/* harmony export */   payout: () => (/* binding */ payout),\n/* harmony export */   pl23_22: () => (/* binding */ pl23_22),\n/* harmony export */   pump: () => (/* binding */ pump),\n/* harmony export */   sortData: () => (/* binding */ sortData)\n/* harmony export */ });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\nconst dataST = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/allProductionData.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst moDataST = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/dataMonthlyST.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst dataET = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/allProductionDataET.json\").then((data) => {\r\n    return data;\r\n});\r\n\r\nconst dataCuml = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/cumProd.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst dataCumlET = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/cumProdET.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst analyzeData = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/analyze.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst analyzeDataET = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/analyzeET.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst formations = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/formations.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst econ = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/economics.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst payout = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/payouts.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst pump = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/pumpInfo.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst legacyEcon = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/legacyEcon.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst pl23_22 = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data\\\\pldata1.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst newProd = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.csv)(\"../data\\\\newProd.csv\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst activeWells = () => {\r\n    let data = dataET;\r\n    if (sessionStorage.getItem('region') !== 'et') data = dataST;\r\n    const exitWell = data[0][0]\r\n    const wells = new Set();\r\n    \r\n    for (let i = 0; i < data.length; i++) {\r\n        const well = data[i][0];\r\n        wells.add(well);\r\n        if (well === exitWell & i !== 0) break;\r\n    };\r\n\r\n    return wells;\r\n};\r\n\r\n//Creates Dropdown//\r\nconst dropdown = (id) => {\r\n    let menu = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(id);\r\n    \r\n    activeWells().forEach(well => {\r\n        menu.append(\"option\")\r\n            .text(well)\r\n            .property(\"Value\", well);\r\n    });\r\n};\r\n\r\nconst buildTable = (allData) => {\r\n    const tbody = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"tbody\");\r\n    tbody.html(\"\");\r\n    allData.forEach((well) => {\r\n        let row = tbody.append(\"tr\");\r\n        Object.values(well).forEach((val) => {\r\n            let cell = row.append(\"td\");\r\n            cell.text(val);\r\n        });\r\n    });\r\n};\r\n\r\nconst filterData = (data, dropdownId) => {\r\n    let reqWell = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).property(\"value\");\r\n\r\n    if (reqWell) {\r\n        return data.filter((row) => row[0] == reqWell);\r\n    };\r\n    return data\r\n};\r\n\r\nconst sortData = (data, pos) => {\r\n    event.preventDefault();\r\n    let temp = [...data];\r\n    let sorted;\r\n    sorted = temp.sort((a, b) => {\r\n        const aVal = a[pos];\r\n        const bVal = b[pos];\r\n        return bVal - aVal;\r\n    });\r\n    buildTable(sorted);\r\n};\r\n\r\n\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZGF0YS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDdkM7QUFDTyxxQkFBcUIsd0NBQUk7QUFDaEM7QUFDQSxDQUFDO0FBQ0Q7QUFDTyx1QkFBdUIsd0NBQUk7QUFDbEM7QUFDQSxDQUFDO0FBQ0Q7QUFDTyxxQkFBcUIsd0NBQUk7QUFDaEM7QUFDQSxDQUFDO0FBQ0Q7QUFDTyx1QkFBdUIsd0NBQUk7QUFDbEM7QUFDQSxDQUFDO0FBQ0Q7QUFDTyx5QkFBeUIsd0NBQUk7QUFDcEM7QUFDQSxDQUFDO0FBQ0Q7QUFDTywwQkFBMEIsd0NBQUk7QUFDckM7QUFDQSxDQUFDO0FBQ0Q7QUFDTyw0QkFBNEIsd0NBQUk7QUFDdkM7QUFDQSxDQUFDO0FBQ0Q7QUFDTyx5QkFBeUIsd0NBQUk7QUFDcEM7QUFDQSxDQUFDO0FBQ0Q7QUFDTyxtQkFBbUIsd0NBQUk7QUFDOUI7QUFDQSxDQUFDO0FBQ0Q7QUFDTyxxQkFBcUIsd0NBQUk7QUFDaEM7QUFDQSxDQUFDO0FBQ0Q7QUFDTyxtQkFBbUIsd0NBQUk7QUFDOUI7QUFDQSxDQUFDO0FBQ0Q7QUFDTyx5QkFBeUIsd0NBQUk7QUFDcEM7QUFDQSxDQUFDO0FBQ0Q7QUFDTyxzQkFBc0Isd0NBQUk7QUFDakM7QUFDQSxDQUFDO0FBQ0Q7QUFDTyxzQkFBc0IsdUNBQUc7QUFDaEM7QUFDQSxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZUFBZSwwQ0FBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQLGtCQUFrQiwwQ0FBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQLGtCQUFrQiwwQ0FBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvZGF0YS5qcz83ZDI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzdiwganNvbiwgc2VsZWN0IH0gZnJvbSAnZDMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGFTVCA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL2FsbFByb2R1Y3Rpb25EYXRhLmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbW9EYXRhU1QgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9kYXRhTW9udGhseVNULmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGF0YUVUID0gYXdhaXQganNvbihcIi4uL2RhdGEvYWxsUHJvZHVjdGlvbkRhdGFFVC5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhQ3VtbCA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL2N1bVByb2QuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhQ3VtbEVUID0gYXdhaXQganNvbihcIi4uL2RhdGEvY3VtUHJvZEVULmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYW5hbHl6ZURhdGEgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9hbmFseXplLmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYW5hbHl6ZURhdGFFVCA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL2FuYWx5emVFVC5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdGlvbnMgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9mb3JtYXRpb25zLmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZWNvbiA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL2Vjb25vbWljcy5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBheW91dCA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL3BheW91dHMuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBwdW1wID0gYXdhaXQganNvbihcIi4uL2RhdGEvcHVtcEluZm8uanNvblwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsZWdhY3lFY29uID0gYXdhaXQganNvbihcIi4uL2RhdGEvbGVnYWN5RWNvbi5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBsMjNfMjIgPSBhd2FpdCBqc29uKFwiLi4vZGF0YVxcXFxwbGRhdGExLmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbmV3UHJvZCA9IGF3YWl0IGNzdihcIi4uL2RhdGFcXFxcbmV3UHJvZC5jc3ZcIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aXZlV2VsbHMgPSAoKSA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IGRhdGFFVDtcclxuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyZWdpb24nKSAhPT0gJ2V0JykgZGF0YSA9IGRhdGFTVDtcclxuICAgIGNvbnN0IGV4aXRXZWxsID0gZGF0YVswXVswXVxyXG4gICAgY29uc3Qgd2VsbHMgPSBuZXcgU2V0KCk7XHJcbiAgICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHdlbGwgPSBkYXRhW2ldWzBdO1xyXG4gICAgICAgIHdlbGxzLmFkZCh3ZWxsKTtcclxuICAgICAgICBpZiAod2VsbCA9PT0gZXhpdFdlbGwgJiBpICE9PSAwKSBicmVhaztcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHdlbGxzO1xyXG59O1xyXG5cclxuLy9DcmVhdGVzIERyb3Bkb3duLy9cclxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duID0gKGlkKSA9PiB7XHJcbiAgICBsZXQgbWVudSA9IHNlbGVjdChpZCk7XHJcbiAgICBcclxuICAgIGFjdGl2ZVdlbGxzKCkuZm9yRWFjaCh3ZWxsID0+IHtcclxuICAgICAgICBtZW51LmFwcGVuZChcIm9wdGlvblwiKVxyXG4gICAgICAgICAgICAudGV4dCh3ZWxsKVxyXG4gICAgICAgICAgICAucHJvcGVydHkoXCJWYWx1ZVwiLCB3ZWxsKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ1aWxkVGFibGUgPSAoYWxsRGF0YSkgPT4ge1xyXG4gICAgY29uc3QgdGJvZHkgPSBzZWxlY3QoXCJ0Ym9keVwiKTtcclxuICAgIHRib2R5Lmh0bWwoXCJcIik7XHJcbiAgICBhbGxEYXRhLmZvckVhY2goKHdlbGwpID0+IHtcclxuICAgICAgICBsZXQgcm93ID0gdGJvZHkuYXBwZW5kKFwidHJcIik7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh3ZWxsKS5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNlbGwgPSByb3cuYXBwZW5kKFwidGRcIik7XHJcbiAgICAgICAgICAgIGNlbGwudGV4dCh2YWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyRGF0YSA9IChkYXRhLCBkcm9wZG93bklkKSA9PiB7XHJcbiAgICBsZXQgcmVxV2VsbCA9IHNlbGVjdChkcm9wZG93bklkKS5wcm9wZXJ0eShcInZhbHVlXCIpO1xyXG5cclxuICAgIGlmIChyZXFXZWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEuZmlsdGVyKChyb3cpID0+IHJvd1swXSA9PSByZXFXZWxsKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZGF0YVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNvcnREYXRhID0gKGRhdGEsIHBvcykgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCB0ZW1wID0gWy4uLmRhdGFdO1xyXG4gICAgbGV0IHNvcnRlZDtcclxuICAgIHNvcnRlZCA9IHRlbXAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFWYWwgPSBhW3Bvc107XHJcbiAgICAgICAgY29uc3QgYlZhbCA9IGJbcG9zXTtcclxuICAgICAgICByZXR1cm4gYlZhbCAtIGFWYWw7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkVGFibGUoc29ydGVkKTtcclxufTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/data.js\n");

/***/ }),

/***/ "./src/js/layout.js":
/*!**************************!*\
  !*** ./src/js/layout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   layoutWbd: () => (/* binding */ layoutWbd),\n/* harmony export */   makeLayout: () => (/* binding */ makeLayout),\n/* harmony export */   makeTrace: () => (/* binding */ makeTrace)\n/* harmony export */ });\nconst makeTrace = (x, y, name, type=\"lines\", color, text, visible=true, dash) => ({\r\n    x,\r\n    y,\r\n    text,\r\n    name,\r\n    visible,\r\n    line: {\r\n        color,\r\n        dash\r\n    },\r\n    mode: type\r\n});\r\n\r\nconst makeLayout = (title, type, tickvals, ytitle, xtitle) => ({\r\n    title,\r\n    height: null,\r\n    legend: {\r\n        orientation: \"h\",\r\n            y: 1.1,\r\n            xanchor: \"center\",\r\n            x: .5,\r\n    },\r\n    yaxis: {\r\n        title: ytitle,\r\n        type: type || \"linear\",\r\n        rangemode: \"tozero\",\r\n        autorange: true,\r\n        tickformat: \"f\",\r\n        tickvals,\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n    xaxis: {\r\n        title: xtitle,\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n});\r\n\r\nconst config = {\r\n    modeBarButtonsToRemove: [\r\n        \"sendDataToCloud\",\r\n        \"autoScale2d\",\r\n        \"hoverClosestCartesian\",\r\n        \"hoverCompareCartesian\",\r\n        \"lasso2d\",\r\n        \"zoomIn2d\",\r\n        \"zoomOut2d\",\r\n        \"toggleSpikelines\",\r\n    ],\r\n    displaylogo: false,\r\n    responsive: true,\r\n    displayModeBar: false,\r\n    responsiveConfig: [\r\n        {\r\n        // Mobile devices with width less than or equal to 768px\r\n        breakpoint: 768,\r\n        options: {\r\n            legend: { orientation: 'h', y: -0.2 }\r\n        }\r\n        },\r\n        {\r\n        // Desktop devices with width greater than 768px\r\n        breakpoint: 0,\r\n        options: {\r\n            legend: { orientation: 'v', y: 1 }\r\n        }\r\n        }\r\n    ]\r\n};\r\n\r\nconst layoutWbd = (max,min,minTVD,maxTVD,wellName) => ({\r\n    width: 1620,\r\n    height: 700,\r\n\r\n    margin: {\r\n        l: 0,\r\n        r: 0,\r\n        b: 0,\r\n        t: 0,\r\n    },\r\n\r\n    title: {\r\n        text: \"Drilling for \" + wellName + \", Dimmit County, TX\",\r\n        y: 0.98,\r\n    },\r\n\r\n    legend: {\r\n        x: 0.8,\r\n        y: 0.8,\r\n    },\r\n    scene: {\r\n        aspectmode: \"cube\",\r\n        xaxis: {\r\n            title: \"Easting\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n        yaxis: {\r\n            title: \"Northing\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#f0f1f2\",\r\n            showbackground: true,\r\n\r\n        },\r\n        zaxis: {\r\n            title: \"TVD\",\r\n            nticks: 5,\r\n            range: [minTVD, maxTVD],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n    },\r\n    \r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2QtMS8uL3NyYy9qcy9sYXlvdXQuanM/NmZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbWFrZVRyYWNlID0gKHgsIHksIG5hbWUsIHR5cGU9XCJsaW5lc1wiLCBjb2xvciwgdGV4dCwgdmlzaWJsZT10cnVlLCBkYXNoKSA9PiAoe1xyXG4gICAgeCxcclxuICAgIHksXHJcbiAgICB0ZXh0LFxyXG4gICAgbmFtZSxcclxuICAgIHZpc2libGUsXHJcbiAgICBsaW5lOiB7XHJcbiAgICAgICAgY29sb3IsXHJcbiAgICAgICAgZGFzaFxyXG4gICAgfSxcclxuICAgIG1vZGU6IHR5cGVcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZUxheW91dCA9ICh0aXRsZSwgdHlwZSwgdGlja3ZhbHMsIHl0aXRsZSwgeHRpdGxlKSA9PiAoe1xyXG4gICAgdGl0bGUsXHJcbiAgICBoZWlnaHQ6IG51bGwsXHJcbiAgICBsZWdlbmQ6IHtcclxuICAgICAgICBvcmllbnRhdGlvbjogXCJoXCIsXHJcbiAgICAgICAgICAgIHk6IDEuMSxcclxuICAgICAgICAgICAgeGFuY2hvcjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgeDogLjUsXHJcbiAgICB9LFxyXG4gICAgeWF4aXM6IHtcclxuICAgICAgICB0aXRsZTogeXRpdGxlLFxyXG4gICAgICAgIHR5cGU6IHR5cGUgfHwgXCJsaW5lYXJcIixcclxuICAgICAgICByYW5nZW1vZGU6IFwidG96ZXJvXCIsXHJcbiAgICAgICAgYXV0b3JhbmdlOiB0cnVlLFxyXG4gICAgICAgIHRpY2tmb3JtYXQ6IFwiZlwiLFxyXG4gICAgICAgIHRpY2t2YWxzLFxyXG4gICAgICAgIGdyaWRjb2xvcjogXCIjZGJkYmRiXCIsXHJcbiAgICB9LFxyXG4gICAgeGF4aXM6IHtcclxuICAgICAgICB0aXRsZTogeHRpdGxlLFxyXG4gICAgICAgIGdyaWRjb2xvcjogXCIjZGJkYmRiXCIsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBtb2RlQmFyQnV0dG9uc1RvUmVtb3ZlOiBbXHJcbiAgICAgICAgXCJzZW5kRGF0YVRvQ2xvdWRcIixcclxuICAgICAgICBcImF1dG9TY2FsZTJkXCIsXHJcbiAgICAgICAgXCJob3ZlckNsb3Nlc3RDYXJ0ZXNpYW5cIixcclxuICAgICAgICBcImhvdmVyQ29tcGFyZUNhcnRlc2lhblwiLFxyXG4gICAgICAgIFwibGFzc28yZFwiLFxyXG4gICAgICAgIFwiem9vbUluMmRcIixcclxuICAgICAgICBcInpvb21PdXQyZFwiLFxyXG4gICAgICAgIFwidG9nZ2xlU3Bpa2VsaW5lc1wiLFxyXG4gICAgXSxcclxuICAgIGRpc3BsYXlsb2dvOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBkaXNwbGF5TW9kZUJhcjogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlQ29uZmlnOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgIC8vIE1vYmlsZSBkZXZpY2VzIHdpdGggd2lkdGggbGVzcyB0aGFuIG9yIGVxdWFsIHRvIDc2OHB4XHJcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgbGVnZW5kOiB7IG9yaWVudGF0aW9uOiAnaCcsIHk6IC0wLjIgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAvLyBEZXNrdG9wIGRldmljZXMgd2l0aCB3aWR0aCBncmVhdGVyIHRoYW4gNzY4cHhcclxuICAgICAgICBicmVha3BvaW50OiAwLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgbGVnZW5kOiB7IG9yaWVudGF0aW9uOiAndicsIHk6IDEgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGF5b3V0V2JkID0gKG1heCxtaW4sbWluVFZELG1heFRWRCx3ZWxsTmFtZSkgPT4gKHtcclxuICAgIHdpZHRoOiAxNjIwLFxyXG4gICAgaGVpZ2h0OiA3MDAsXHJcblxyXG4gICAgbWFyZ2luOiB7XHJcbiAgICAgICAgbDogMCxcclxuICAgICAgICByOiAwLFxyXG4gICAgICAgIGI6IDAsXHJcbiAgICAgICAgdDogMCxcclxuICAgIH0sXHJcblxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICB0ZXh0OiBcIkRyaWxsaW5nIGZvciBcIiArIHdlbGxOYW1lICsgXCIsIERpbW1pdCBDb3VudHksIFRYXCIsXHJcbiAgICAgICAgeTogMC45OCxcclxuICAgIH0sXHJcblxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgICAgeDogMC44LFxyXG4gICAgICAgIHk6IDAuOCxcclxuICAgIH0sXHJcbiAgICBzY2VuZToge1xyXG4gICAgICAgIGFzcGVjdG1vZGU6IFwiY3ViZVwiLFxyXG4gICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkVhc3RpbmdcIixcclxuICAgICAgICAgICAgbnRpY2tzOiA4LFxyXG4gICAgICAgICAgICByYW5nZTogW21heCwgbWluXSxcclxuICAgICAgICAgICAgZ3JpZGNvbG9yOiBcIiM4YThhOGFcIixcclxuICAgICAgICAgICAgdGlja2NvbG9yOiBcIiMwNTA1MDVcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZGNvbG9yOiBcIiNlZGVkZWRcIixcclxuICAgICAgICAgICAgc2hvd2JhY2tncm91bmQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJOb3J0aGluZ1wiLFxyXG4gICAgICAgICAgICBudGlja3M6IDgsXHJcbiAgICAgICAgICAgIHJhbmdlOiBbbWF4LCBtaW5dLFxyXG4gICAgICAgICAgICBncmlkY29sb3I6IFwiIzhhOGE4YVwiLFxyXG4gICAgICAgICAgICB0aWNrY29sb3I6IFwiIzA1MDUwNVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kY29sb3I6IFwiI2YwZjFmMlwiLFxyXG4gICAgICAgICAgICBzaG93YmFja2dyb3VuZDogdHJ1ZSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB6YXhpczoge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJUVkRcIixcclxuICAgICAgICAgICAgbnRpY2tzOiA1LFxyXG4gICAgICAgICAgICByYW5nZTogW21pblRWRCwgbWF4VFZEXSxcclxuICAgICAgICAgICAgZ3JpZGNvbG9yOiBcIiM4YThhOGFcIixcclxuICAgICAgICAgICAgdGlja2NvbG9yOiBcIiMwNTA1MDVcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZGNvbG9yOiBcIiNlZGVkZWRcIixcclxuICAgICAgICAgICAgc2hvd2JhY2tncm91bmQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/layout.js\n");

/***/ }),

/***/ "./src/js/region.js":
/*!**************************!*\
  !*** ./src/js/region.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   monitorRegion: () => (/* binding */ monitorRegion)\n/* harmony export */ });\n$(document).ready(function () {\r\n    $(\"#header\").load(\"../src/pages/header.html\", function () {\r\n        //monitorRegion();\r\n    });\r\n});\r\n\r\nconst toggleRegion = () => {\r\n    let currRegion = sessionStorage.getItem(\"region\");\r\n    if (currRegion == \"st\" || currRegion == null) {\r\n        console.log(\"switching to east\");\r\n        sessionStorage.setItem(\"region\", \"et\");\r\n    } else {\r\n        sessionStorage.setItem(\"region\", \"st\");\r\n    }\r\n    sessionStorage.removeItem(\"siteSelection\");\r\n    location.reload();\r\n};\r\n\r\nconst monitorRegion = () => {\r\n    let currRegion = sessionStorage.getItem(\"region\");\r\n    const fieldTitle = document.querySelector('#fieldTitle');   \r\n    const regionBtn = document.querySelector(\"#toggleRegion\");\r\n    regionBtn.addEventListener('click', toggleRegion);\r\n    const width = $(window).width();\r\n    console.log('currRegion :>> ', currRegion);\r\n\r\n    if (currRegion == \"st\" || currRegion == null) {\r\n        regionBtn.innerHTML = \"East Texas\";\r\n        fieldTitle.textContent = \"South Texas Field\";\r\n        if (width < 768) {\r\n            fieldTitle.textContent = \"CML EXP - South Texas\"\r\n        };\r\n    } else {\r\n        regionBtn.innerHTML = \"South Texas\";\r\n        fieldTitle.textContent = \"East Texas Field\";\r\n        if (width < 768) {\r\n            fieldTitle.textContent = \"CML EXP - East Texas\"\r\n        };\r\n    };\r\n};\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcmVnaW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2QtMS8uL3NyYy9qcy9yZWdpb24uanM/MzMzNyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI2hlYWRlclwiKS5sb2FkKFwiLi4vc3JjL3BhZ2VzL2hlYWRlci5odG1sXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL21vbml0b3JSZWdpb24oKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmNvbnN0IHRvZ2dsZVJlZ2lvbiA9ICgpID0+IHtcclxuICAgIGxldCBjdXJyUmVnaW9uID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInJlZ2lvblwiKTtcclxuICAgIGlmIChjdXJyUmVnaW9uID09IFwic3RcIiB8fCBjdXJyUmVnaW9uID09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN3aXRjaGluZyB0byBlYXN0XCIpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJyZWdpb25cIiwgXCJldFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInJlZ2lvblwiLCBcInN0XCIpO1xyXG4gICAgfVxyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInNpdGVTZWxlY3Rpb25cIik7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtb25pdG9yUmVnaW9uID0gKCkgPT4ge1xyXG4gICAgbGV0IGN1cnJSZWdpb24gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwicmVnaW9uXCIpO1xyXG4gICAgY29uc3QgZmllbGRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWVsZFRpdGxlJyk7ICAgXHJcbiAgICBjb25zdCByZWdpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZVJlZ2lvblwiKTtcclxuICAgIHJlZ2lvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVJlZ2lvbik7XHJcbiAgICBjb25zdCB3aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgY29uc29sZS5sb2coJ2N1cnJSZWdpb24gOj4+ICcsIGN1cnJSZWdpb24pO1xyXG5cclxuICAgIGlmIChjdXJyUmVnaW9uID09IFwic3RcIiB8fCBjdXJyUmVnaW9uID09IG51bGwpIHtcclxuICAgICAgICByZWdpb25CdG4uaW5uZXJIVE1MID0gXCJFYXN0IFRleGFzXCI7XHJcbiAgICAgICAgZmllbGRUaXRsZS50ZXh0Q29udGVudCA9IFwiU291dGggVGV4YXMgRmllbGRcIjtcclxuICAgICAgICBpZiAod2lkdGggPCA3NjgpIHtcclxuICAgICAgICAgICAgZmllbGRUaXRsZS50ZXh0Q29udGVudCA9IFwiQ01MIEVYUCAtIFNvdXRoIFRleGFzXCJcclxuICAgICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZWdpb25CdG4uaW5uZXJIVE1MID0gXCJTb3V0aCBUZXhhc1wiO1xyXG4gICAgICAgIGZpZWxkVGl0bGUudGV4dENvbnRlbnQgPSBcIkVhc3QgVGV4YXMgRmllbGRcIjtcclxuICAgICAgICBpZiAod2lkdGggPCA3NjgpIHtcclxuICAgICAgICAgICAgZmllbGRUaXRsZS50ZXh0Q29udGVudCA9IFwiQ01MIEVYUCAtIEVhc3QgVGV4YXNcIlxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/region.js\n");

/***/ }),

/***/ "./src/js/table.js":
/*!*************************!*\
  !*** ./src/js/table.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data__WEBPACK_IMPORTED_MODULE_3__]);\n_data__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChangedFb)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_2__.monitorRegion)();\r\n\r\nlet region = sessionStorage.getItem('region');\r\nconst dropdownId = '#siteFilter';\r\n\r\nconst formatData = () => {\r\n  let tableData = _data__WEBPACK_IMPORTED_MODULE_3__.dataCumlET;\r\n  let payData;\r\n\r\n  if (region != \"et\") {\r\n    tableData = _data__WEBPACK_IMPORTED_MODULE_3__.dataCuml\r\n    payData = _data__WEBPACK_IMPORTED_MODULE_3__.payout\r\n\r\n    payData.forEach((pay) => {\r\n      tableData.forEach((well) => {\r\n        if (well[0] == pay[\"Well Name\"]) {\r\n          let rounded = Math.round(pay[\"% Payout\"]*100)\r\n          well.push(rounded);\r\n        }\r\n      });\r\n    });\r\n  };\r\n  \r\n  //switch places of prodData[3] and prodData[4]\r\n  tableData.forEach((well) => {\r\n    let temp = well[4];\r\n    well[4] = well[5];\r\n    well[5] = temp;\r\n  });\r\n  // tableData.forEach((well) => {\r\n  //   well[4] = Math.round(well[4]*100);\r\n  // });\r\n\r\n  //remove archived wells\r\n  return tableData.filter(val => (0,_data__WEBPACK_IMPORTED_MODULE_3__.activeWells)().has(val[0]));\r\n};\r\n\r\nconst displayPlot = (selected) => {\r\n  // Read Files, select wells with selected name\r\n  let dataMonthly = _data__WEBPACK_IMPORTED_MODULE_3__.moDataST.filter(el => el[0] == selected);\r\n  let dataDaily = _data__WEBPACK_IMPORTED_MODULE_3__.dataST.filter(el => el[0] == selected);\r\n  // Create arrays of desired columns\r\n  const oilMo = dataMonthly.map(el => el[1]);\r\n  const dateMo = dataMonthly.map(el => el[6]);\r\n  const dateDa = dataDaily.map(el => el[1]).reverse();\r\n  const cumlMoOil = oilMo.reduce((acc, val, idx) => (idx === 0 ? acc.concat(val) : acc.concat(val + acc[idx - 1])), []);\r\n  const oilDaily = dataDaily.map(el => el[2]).reverse();\r\n  const cumlDaOil = oilDaily.reduce((acc, val, idx) => (idx === 0 ? acc.concat(val) : acc.concat(val + acc[idx - 1])), []);\r\n  const formattedDateMo = dateMo.map(dateString => {\r\n    const date = new Date(dateString);\r\n    const options = { month: 'long', year: 'numeric' };\r\n    return date.toLocaleDateString('en-US', options);\r\n  });\r\n\r\n  // Create traces for graphs\r\n  const traceCumOil = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(\r\n    dateMo,\r\n    cumlMoOil,\r\n    \"Cuml Data\",\r\n    \"lines\",\r\n    \"green\"\r\n  );\r\n  const traceDailyProdVSCum = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(\r\n    cumlDaOil,\r\n    oilDaily,\r\n    \"hi\",\r\n    \"line\",\r\n    \"green\",\r\n    dateDa\r\n  );\r\n  const traceMoProdVSCum = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(\r\n    cumlMoOil,\r\n    oilMo,\r\n    \"hello\",\r\n    \"line\",\r\n    \"green\",\r\n    formattedDateMo\r\n  );\r\n\r\n  // Create Different Keys\r\n  const plotContainers = ['cumlOilCurve', 'dailyProdVsCumCurve', 'moProdVsCumCurve'];\r\n  // Traces to Use\r\n  let traceArrays = [\r\n    [traceCumOil],\r\n    [traceDailyProdVSCum],\r\n    [traceMoProdVSCum]\r\n  ];\r\n\r\n  // Loop and make the plots, contain keys found in plotContainers^^\r\n  plotContainers.forEach((container, i) => {\r\n    // SETS SCALE TO LOG FOR THE Y-AXIS IF (i == [index in plotContainers])\r\n    let scale = [1, 2].includes(i) ? \"log\" : null;\r\n    let tickvals = scale == 'log' ? [1,10,100,1000,10000,100000] : 'auto'\r\n    // CREATES LAYOUT, INCLUDES TITLE, SCALE, AND TICK VALUES\r\n    var layout = {\r\n      title: ['Cumulative Oil vs Time', 'Cumulative Oil vs Daily Oil Production', 'Cumulative Oil vs Monthly Oil Production'][i],\r\n      xaxis: {\r\n        autorange: true,\r\n        showline: scale == 'log' ? true : false,\r\n        gridcolor: 'darkgray',\r\n      },\r\n      yaxis: {\r\n        autorange: true,\r\n        type: scale,\r\n        // tickvals: tickvals,\r\n        gridcolor: 'darkgray',\r\n      },\r\n    }\r\n      \r\n    Plotly.newPlot(container, traceArrays[i], layout);\r\n  });\r\n}\r\n\r\ndisplayPlot(\"Aaron #1\");\r\n//main\r\nconst tableData = formatData();\r\n\r\n//sort by pay: pos=4 by prod: pos=1\r\ndocument.getElementById('Payfilter').onclick = function(){\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.sortData)(tableData,4)\r\n};\r\n\r\ndocument.getElementById('Prodfilter').onclick = function(){\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.sortData)(tableData,1)\r\n};\r\n\r\n(0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).on(\"change\", () => {\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.buildTable)((0,_data__WEBPACK_IMPORTED_MODULE_3__.filterData)(tableData,dropdownId));\r\n  displayPlot((0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).node().value);\r\n});\r\n\r\n\r\ndocument.getElementById('clearFilter').onclick = function () {\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.buildTable)(tableData);\r\n};\r\n\r\nwindow.onload = function () {\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.buildTable)(tableData);\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.dropdown)(dropdownId);  \r\n}();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGFibGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThDO0FBQ047QUFDZ0U7QUFDNUU7QUFDYztBQUNPO0FBQ2pEO0FBQ0EsMkRBQW9CO0FBQ3BCLHNEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2Q0FBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkNBQVE7QUFDeEIsY0FBYyx5Q0FBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsaUNBQWlDLGtEQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJDQUFRO0FBQzVCLGtCQUFrQix5Q0FBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixrREFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0RBQVM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0RBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrQ0FBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0NBQVE7QUFDVjtBQUNBO0FBQ0EsMENBQU07QUFDTixFQUFFLGlEQUFVLENBQUMsaURBQVU7QUFDdkIsY0FBYywwQ0FBTTtBQUNwQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaURBQVU7QUFDWixFQUFFLCtDQUFRO0FBQ1YsQ0FBQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZC0xLy4vc3JjL2pzL3RhYmxlLmpzP2NmMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb25BdXRoU3RhdGVDaGFuZ2VkRmIgfSBmcm9tICcuL2F1dGgnO1xyXG5pbXBvcnQgeyBtb25pdG9yUmVnaW9uIH0gZnJvbSAnLi9yZWdpb24nXHJcbmltcG9ydCB7IGRhdGFDdW1sLGRhdGFDdW1sRVQscGF5b3V0LGFjdGl2ZVdlbGxzLHNvcnREYXRhLGJ1aWxkVGFibGUsZHJvcGRvd24sZmlsdGVyRGF0YSB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCB7IHNlbGVjdCB9IGZyb20gJ2QzJztcclxuaW1wb3J0IHsgbW9EYXRhU1QsIGRhdGFTVCB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCB7IG1ha2VMYXlvdXQsIG1ha2VUcmFjZSB9IGZyb20gJy4vbGF5b3V0JztcclxuXHJcbm9uQXV0aFN0YXRlQ2hhbmdlZEZiKCk7XHJcbm1vbml0b3JSZWdpb24oKTtcclxuXHJcbmxldCByZWdpb24gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyZWdpb24nKTtcclxuY29uc3QgZHJvcGRvd25JZCA9ICcjc2l0ZUZpbHRlcic7XHJcblxyXG5jb25zdCBmb3JtYXREYXRhID0gKCkgPT4ge1xyXG4gIGxldCB0YWJsZURhdGEgPSBkYXRhQ3VtbEVUO1xyXG4gIGxldCBwYXlEYXRhO1xyXG5cclxuICBpZiAocmVnaW9uICE9IFwiZXRcIikge1xyXG4gICAgdGFibGVEYXRhID0gZGF0YUN1bWxcclxuICAgIHBheURhdGEgPSBwYXlvdXRcclxuXHJcbiAgICBwYXlEYXRhLmZvckVhY2goKHBheSkgPT4ge1xyXG4gICAgICB0YWJsZURhdGEuZm9yRWFjaCgod2VsbCkgPT4ge1xyXG4gICAgICAgIGlmICh3ZWxsWzBdID09IHBheVtcIldlbGwgTmFtZVwiXSkge1xyXG4gICAgICAgICAgbGV0IHJvdW5kZWQgPSBNYXRoLnJvdW5kKHBheVtcIiUgUGF5b3V0XCJdKjEwMClcclxuICAgICAgICAgIHdlbGwucHVzaChyb3VuZGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBcclxuICAvL3N3aXRjaCBwbGFjZXMgb2YgcHJvZERhdGFbM10gYW5kIHByb2REYXRhWzRdXHJcbiAgdGFibGVEYXRhLmZvckVhY2goKHdlbGwpID0+IHtcclxuICAgIGxldCB0ZW1wID0gd2VsbFs0XTtcclxuICAgIHdlbGxbNF0gPSB3ZWxsWzVdO1xyXG4gICAgd2VsbFs1XSA9IHRlbXA7XHJcbiAgfSk7XHJcbiAgLy8gdGFibGVEYXRhLmZvckVhY2goKHdlbGwpID0+IHtcclxuICAvLyAgIHdlbGxbNF0gPSBNYXRoLnJvdW5kKHdlbGxbNF0qMTAwKTtcclxuICAvLyB9KTtcclxuXHJcbiAgLy9yZW1vdmUgYXJjaGl2ZWQgd2VsbHNcclxuICByZXR1cm4gdGFibGVEYXRhLmZpbHRlcih2YWwgPT4gYWN0aXZlV2VsbHMoKS5oYXModmFsWzBdKSk7XHJcbn07XHJcblxyXG5jb25zdCBkaXNwbGF5UGxvdCA9IChzZWxlY3RlZCkgPT4ge1xyXG4gIC8vIFJlYWQgRmlsZXMsIHNlbGVjdCB3ZWxscyB3aXRoIHNlbGVjdGVkIG5hbWVcclxuICBsZXQgZGF0YU1vbnRobHkgPSBtb0RhdGFTVC5maWx0ZXIoZWwgPT4gZWxbMF0gPT0gc2VsZWN0ZWQpO1xyXG4gIGxldCBkYXRhRGFpbHkgPSBkYXRhU1QuZmlsdGVyKGVsID0+IGVsWzBdID09IHNlbGVjdGVkKTtcclxuICAvLyBDcmVhdGUgYXJyYXlzIG9mIGRlc2lyZWQgY29sdW1uc1xyXG4gIGNvbnN0IG9pbE1vID0gZGF0YU1vbnRobHkubWFwKGVsID0+IGVsWzFdKTtcclxuICBjb25zdCBkYXRlTW8gPSBkYXRhTW9udGhseS5tYXAoZWwgPT4gZWxbNl0pO1xyXG4gIGNvbnN0IGRhdGVEYSA9IGRhdGFEYWlseS5tYXAoZWwgPT4gZWxbMV0pLnJldmVyc2UoKTtcclxuICBjb25zdCBjdW1sTW9PaWwgPSBvaWxNby5yZWR1Y2UoKGFjYywgdmFsLCBpZHgpID0+IChpZHggPT09IDAgPyBhY2MuY29uY2F0KHZhbCkgOiBhY2MuY29uY2F0KHZhbCArIGFjY1tpZHggLSAxXSkpLCBbXSk7XHJcbiAgY29uc3Qgb2lsRGFpbHkgPSBkYXRhRGFpbHkubWFwKGVsID0+IGVsWzJdKS5yZXZlcnNlKCk7XHJcbiAgY29uc3QgY3VtbERhT2lsID0gb2lsRGFpbHkucmVkdWNlKChhY2MsIHZhbCwgaWR4KSA9PiAoaWR4ID09PSAwID8gYWNjLmNvbmNhdCh2YWwpIDogYWNjLmNvbmNhdCh2YWwgKyBhY2NbaWR4IC0gMV0pKSwgW10pO1xyXG4gIGNvbnN0IGZvcm1hdHRlZERhdGVNbyA9IGRhdGVNby5tYXAoZGF0ZVN0cmluZyA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XHJcbiAgICBjb25zdCBvcHRpb25zID0geyBtb250aDogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycgfTtcclxuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKTtcclxuICB9KTtcclxuXHJcbiAgLy8gQ3JlYXRlIHRyYWNlcyBmb3IgZ3JhcGhzXHJcbiAgY29uc3QgdHJhY2VDdW1PaWwgPSBtYWtlVHJhY2UoXHJcbiAgICBkYXRlTW8sXHJcbiAgICBjdW1sTW9PaWwsXHJcbiAgICBcIkN1bWwgRGF0YVwiLFxyXG4gICAgXCJsaW5lc1wiLFxyXG4gICAgXCJncmVlblwiXHJcbiAgKTtcclxuICBjb25zdCB0cmFjZURhaWx5UHJvZFZTQ3VtID0gbWFrZVRyYWNlKFxyXG4gICAgY3VtbERhT2lsLFxyXG4gICAgb2lsRGFpbHksXHJcbiAgICBcImhpXCIsXHJcbiAgICBcImxpbmVcIixcclxuICAgIFwiZ3JlZW5cIixcclxuICAgIGRhdGVEYVxyXG4gICk7XHJcbiAgY29uc3QgdHJhY2VNb1Byb2RWU0N1bSA9IG1ha2VUcmFjZShcclxuICAgIGN1bWxNb09pbCxcclxuICAgIG9pbE1vLFxyXG4gICAgXCJoZWxsb1wiLFxyXG4gICAgXCJsaW5lXCIsXHJcbiAgICBcImdyZWVuXCIsXHJcbiAgICBmb3JtYXR0ZWREYXRlTW9cclxuICApO1xyXG5cclxuICAvLyBDcmVhdGUgRGlmZmVyZW50IEtleXNcclxuICBjb25zdCBwbG90Q29udGFpbmVycyA9IFsnY3VtbE9pbEN1cnZlJywgJ2RhaWx5UHJvZFZzQ3VtQ3VydmUnLCAnbW9Qcm9kVnNDdW1DdXJ2ZSddO1xyXG4gIC8vIFRyYWNlcyB0byBVc2VcclxuICBsZXQgdHJhY2VBcnJheXMgPSBbXHJcbiAgICBbdHJhY2VDdW1PaWxdLFxyXG4gICAgW3RyYWNlRGFpbHlQcm9kVlNDdW1dLFxyXG4gICAgW3RyYWNlTW9Qcm9kVlNDdW1dXHJcbiAgXTtcclxuXHJcbiAgLy8gTG9vcCBhbmQgbWFrZSB0aGUgcGxvdHMsIGNvbnRhaW4ga2V5cyBmb3VuZCBpbiBwbG90Q29udGFpbmVyc15eXHJcbiAgcGxvdENvbnRhaW5lcnMuZm9yRWFjaCgoY29udGFpbmVyLCBpKSA9PiB7XHJcbiAgICAvLyBTRVRTIFNDQUxFIFRPIExPRyBGT1IgVEhFIFktQVhJUyBJRiAoaSA9PSBbaW5kZXggaW4gcGxvdENvbnRhaW5lcnNdKVxyXG4gICAgbGV0IHNjYWxlID0gWzEsIDJdLmluY2x1ZGVzKGkpID8gXCJsb2dcIiA6IG51bGw7XHJcbiAgICBsZXQgdGlja3ZhbHMgPSBzY2FsZSA9PSAnbG9nJyA/IFsxLDEwLDEwMCwxMDAwLDEwMDAwLDEwMDAwMF0gOiAnYXV0bydcclxuICAgIC8vIENSRUFURVMgTEFZT1VULCBJTkNMVURFUyBUSVRMRSwgU0NBTEUsIEFORCBUSUNLIFZBTFVFU1xyXG4gICAgdmFyIGxheW91dCA9IHtcclxuICAgICAgdGl0bGU6IFsnQ3VtdWxhdGl2ZSBPaWwgdnMgVGltZScsICdDdW11bGF0aXZlIE9pbCB2cyBEYWlseSBPaWwgUHJvZHVjdGlvbicsICdDdW11bGF0aXZlIE9pbCB2cyBNb250aGx5IE9pbCBQcm9kdWN0aW9uJ11baV0sXHJcbiAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgYXV0b3JhbmdlOiB0cnVlLFxyXG4gICAgICAgIHNob3dsaW5lOiBzY2FsZSA9PSAnbG9nJyA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICBncmlkY29sb3I6ICdkYXJrZ3JheScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgYXV0b3JhbmdlOiB0cnVlLFxyXG4gICAgICAgIHR5cGU6IHNjYWxlLFxyXG4gICAgICAgIC8vIHRpY2t2YWxzOiB0aWNrdmFscyxcclxuICAgICAgICBncmlkY29sb3I6ICdkYXJrZ3JheScsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgUGxvdGx5Lm5ld1Bsb3QoY29udGFpbmVyLCB0cmFjZUFycmF5c1tpXSwgbGF5b3V0KTtcclxuICB9KTtcclxufVxyXG5cclxuZGlzcGxheVBsb3QoXCJBYXJvbiAjMVwiKTtcclxuLy9tYWluXHJcbmNvbnN0IHRhYmxlRGF0YSA9IGZvcm1hdERhdGEoKTtcclxuXHJcbi8vc29ydCBieSBwYXk6IHBvcz00IGJ5IHByb2Q6IHBvcz0xXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdQYXlmaWx0ZXInKS5vbmNsaWNrID0gZnVuY3Rpb24oKXtcclxuICBzb3J0RGF0YSh0YWJsZURhdGEsNClcclxufTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdQcm9kZmlsdGVyJykub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgc29ydERhdGEodGFibGVEYXRhLDEpXHJcbn07XHJcblxyXG5zZWxlY3QoZHJvcGRvd25JZCkub24oXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gIGJ1aWxkVGFibGUoZmlsdGVyRGF0YSh0YWJsZURhdGEsZHJvcGRvd25JZCkpO1xyXG4gIGRpc3BsYXlQbG90KHNlbGVjdChkcm9wZG93bklkKS5ub2RlKCkudmFsdWUpO1xyXG59KTtcclxuXHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXJGaWx0ZXInKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gIGJ1aWxkVGFibGUodGFibGVEYXRhKTtcclxufTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgYnVpbGRUYWJsZSh0YWJsZURhdGEpO1xyXG4gIGRyb3Bkb3duKGRyb3Bkb3duSWQpOyAgXHJcbn0oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/table.js\n");

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
/******/ 			"table": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_d3_src_index_js","vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-17252e"], () => (__webpack_require__("./src/js/table.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;