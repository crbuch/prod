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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   loginFb: () => (/* binding */ loginFb),\n/* harmony export */   logoutFb: () => (/* binding */ logoutFb),\n/* harmony export */   onAuthStateChangedFb: () => (/* binding */ onAuthStateChangedFb),\n/* harmony export */   updatePasswordFb: () => (/* binding */ updatePasswordFb)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\r\n\r\n\r\nconst firebaseConfig = {\r\n    apiKey: \"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU\",\r\n    authDomain: \"cmlproduction-1e86a.firebaseapp.com\",\r\n    projectId: \"cmlproduction-1e86a\",\r\n    storageBucket: \"cmlproduction-1e86a.appspot.com\",\r\n    messagingSenderId: \"924402330611\",\r\n    appId: \"1:924402330611:web:55155c0a5c5c6a7d4b8086\"\r\n};\r\n  \r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\n\r\n\r\nconst onAuthStateChangedFb = () => {\r\n    auth.onAuthStateChanged((user) => {\r\n        if (user) {\r\n            console.log('user mon :>> ', user);\r\n            //up();\r\n        } else {\r\n            console.log(\"none\");\r\n            window.location.replace('index.html');\r\n            const currentState = window.history.state;\r\n            window.history.replaceState(currentState, '', window.location.href);\r\n            window.onpopstate = function () {\r\n            window.history.replaceState(currentState, '', window.location.href);\r\n            };\r\n        }\r\n    });\r\n};\r\n\r\nconst up = () => {\r\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updateProfile)(auth.currentUser, {\r\n        displayName: ''\r\n      }).then(() => {\r\n        console.log('userCredential.user.displayName :>> ', auth.currentUser.displayName);\r\n      }).catch((error) => {\r\n        console.log('error :>> ', error);\r\n      });\r\n};\r\n\r\nconst loginFb = (email, password) => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth,email,password)\r\n};\r\n\r\nconst logoutFb = () => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);\r\n};\r\n\r\nconst updatePasswordFb = (newPassword) => {\r\n    const user = auth.currentUser;\r\n    if (user) {\r\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updatePassword)(user,newPassword);\r\n    }\r\n    return Promise.reject(new Error('No user is currently signed in.'));\r\n};\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDO0FBQ21GO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBYTtBQUN6QixhQUFhLHNEQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBYTtBQUNqQjtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlFQUEwQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxXQUFXLHNEQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZEQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQzJFO0FBQzNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZC0xLy4vc3JjL2pzL2F1dGguanM/OTI5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkLCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbk91dCwgdXBkYXRlUGFzc3dvcmQsIHVwZGF0ZVByb2ZpbGUgfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUMzeU9LX1FMNVFiSmFLdmp5blhYek9ibDR1S3NvSnBUVVwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJjbWxwcm9kdWN0aW9uLTFlODZhLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcImNtbHByb2R1Y3Rpb24tMWU4NmFcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiY21scHJvZHVjdGlvbi0xZTg2YS5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiOTI0NDAyMzMwNjExXCIsXHJcbiAgICBhcHBJZDogXCIxOjkyNDQwMjMzMDYxMTp3ZWI6NTUxNTVjMGE1YzVjNmE3ZDRiODA4NlwiXHJcbn07XHJcbiAgXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG5cclxuXHJcbmNvbnN0IG9uQXV0aFN0YXRlQ2hhbmdlZEZiID0gKCkgPT4ge1xyXG4gICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNlciBtb24gOj4+ICcsIHVzZXIpO1xyXG4gICAgICAgICAgICAvL3VwKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub25lXCIpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnaW5kZXguaHRtbCcpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5zdGF0ZTtcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKGN1cnJlbnRTdGF0ZSwgJycsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShjdXJyZW50U3RhdGUsICcnLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB1cCA9ICgpID0+IHtcclxuICAgIHVwZGF0ZVByb2ZpbGUoYXV0aC5jdXJyZW50VXNlciwge1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnJ1xyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygndXNlckNyZWRlbnRpYWwudXNlci5kaXNwbGF5TmFtZSA6Pj4gJywgYXV0aC5jdXJyZW50VXNlci5kaXNwbGF5TmFtZSk7XHJcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciA6Pj4gJywgZXJyb3IpO1xyXG4gICAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGxvZ2luRmIgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCxlbWFpbCxwYXNzd29yZClcclxufTtcclxuXHJcbmNvbnN0IGxvZ291dEZiID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHNpZ25PdXQoYXV0aCk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVQYXNzd29yZEZiID0gKG5ld1Bhc3N3b3JkKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZVBhc3N3b3JkKHVzZXIsbmV3UGFzc3dvcmQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignTm8gdXNlciBpcyBjdXJyZW50bHkgc2lnbmVkIGluLicpKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGF1dGgsIG9uQXV0aFN0YXRlQ2hhbmdlZEZiLCBsb2dpbkZiLCBsb2dvdXRGYiwgdXBkYXRlUGFzc3dvcmRGYiB9O1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/auth.js\n");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   activeWells: () => (/* binding */ activeWells),\n/* harmony export */   analyzeDataET: () => (/* binding */ analyzeDataET),\n/* harmony export */   analyzeDataST: () => (/* binding */ analyzeDataST),\n/* harmony export */   buildTable: () => (/* binding */ buildTable),\n/* harmony export */   dataCumlET: () => (/* binding */ dataCumlET),\n/* harmony export */   dataCumlST: () => (/* binding */ dataCumlST),\n/* harmony export */   dataET: () => (/* binding */ dataET),\n/* harmony export */   dataST: () => (/* binding */ dataST),\n/* harmony export */   dropdown: () => (/* binding */ dropdown),\n/* harmony export */   econ: () => (/* binding */ econ),\n/* harmony export */   filterData: () => (/* binding */ filterData),\n/* harmony export */   formations: () => (/* binding */ formations),\n/* harmony export */   legacyEcon: () => (/* binding */ legacyEcon),\n/* harmony export */   moDataET: () => (/* binding */ moDataET),\n/* harmony export */   moDataST: () => (/* binding */ moDataST),\n/* harmony export */   newProd: () => (/* binding */ newProd),\n/* harmony export */   payout: () => (/* binding */ payout),\n/* harmony export */   pl23_22: () => (/* binding */ pl23_22),\n/* harmony export */   pump: () => (/* binding */ pump),\n/* harmony export */   sortData: () => (/* binding */ sortData)\n/* harmony export */ });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\nconst dataST = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/allProductionDataST.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst dataET = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/allProductionDataET.json\").then((data) => {\r\n    return data;\r\n});\r\n\r\nconst moDataST = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/dataMonthlyST.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst moDataET = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/dataMonthlyET.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst dataCumlST = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/cumlProdST.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst dataCumlET = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/cumlProdET.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst analyzeDataST = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/analyzeST.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst analyzeDataET = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/analyzeET.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst formations = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/formations.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst econ = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/economics.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst payout = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/payouts.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst pump = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/pumpInfo.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst legacyEcon = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/legacyEcon.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst pl23_22 = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data\\\\pldata.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst newProd = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.csv)(\"../data\\\\recYrProd.csv\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst activeWells = () => {\r\n    let data = dataET;\r\n    if (sessionStorage.getItem('region') !== 'et') data = dataST;\r\n    const exitWell = data[0][0]\r\n    const wells = new Set();\r\n    \r\n    for (let i = 0; i < data.length; i++) {\r\n        const well = data[i][0];\r\n        wells.add(well);\r\n        if (well === exitWell & i !== 0) break;\r\n    };\r\n\r\n    return wells;\r\n};\r\n\r\n//Creates Dropdown//\r\nconst dropdown = (id) => {\r\n    let menu = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(id);\r\n    \r\n    activeWells().forEach(well => {\r\n        menu.append(\"option\")\r\n            .text(well)\r\n            .property(\"Value\", well);\r\n    });\r\n};\r\n\r\nconst buildTable = (allData) => {\r\n    const tbody = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"tbody\");\r\n    tbody.html(\"\");\r\n    allData.forEach((well) => {\r\n        let row = tbody.append(\"tr\");\r\n        Object.values(well).forEach((val) => {\r\n            let cell = row.append(\"td\");\r\n            cell.text(val);\r\n        });\r\n    });\r\n};\r\n\r\nconst filterData = (data, dropdownId) => {\r\n    let reqWell = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).property(\"value\");\r\n\r\n    if (reqWell) {\r\n        return data.filter((row) => row[0] == reqWell);\r\n    };\r\n    return data\r\n};\r\n\r\nconst sortData = (data, pos) => {\r\n    event.preventDefault();\r\n    let temp = [...data];\r\n    let sorted;\r\n    sorted = temp.sort((a, b) => {\r\n        const aVal = a[pos];\r\n        const bVal = b[pos];\r\n        return bVal - aVal;\r\n    });\r\n    buildTable(sorted);\r\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZGF0YS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3ZDO0FBQ08scUJBQXFCLHdDQUFJO0FBQ2hDO0FBQ0EsQ0FBQztBQUNEO0FBQ08scUJBQXFCLHdDQUFJO0FBQ2hDO0FBQ0EsQ0FBQztBQUNEO0FBQ08sdUJBQXVCLHdDQUFJO0FBQ2xDO0FBQ0EsQ0FBQztBQUNEO0FBQ08sdUJBQXVCLHdDQUFJO0FBQ2xDO0FBQ0EsQ0FBQztBQUNEO0FBQ08seUJBQXlCLHdDQUFJO0FBQ3BDO0FBQ0EsQ0FBQztBQUNEO0FBQ08seUJBQXlCLHdDQUFJO0FBQ3BDO0FBQ0EsQ0FBQztBQUNEO0FBQ08sNEJBQTRCLHdDQUFJO0FBQ3ZDO0FBQ0EsQ0FBQztBQUNEO0FBQ08sNEJBQTRCLHdDQUFJO0FBQ3ZDO0FBQ0EsQ0FBQztBQUNEO0FBQ08seUJBQXlCLHdDQUFJO0FBQ3BDO0FBQ0EsQ0FBQztBQUNEO0FBQ08sbUJBQW1CLHdDQUFJO0FBQzlCO0FBQ0EsQ0FBQztBQUNEO0FBQ08scUJBQXFCLHdDQUFJO0FBQ2hDO0FBQ0EsQ0FBQztBQUNEO0FBQ08sbUJBQW1CLHdDQUFJO0FBQzlCO0FBQ0EsQ0FBQztBQUNEO0FBQ08seUJBQXlCLHdDQUFJO0FBQ3BDO0FBQ0EsQ0FBQztBQUNEO0FBQ08sc0JBQXNCLHdDQUFJO0FBQ2pDO0FBQ0EsQ0FBQztBQUNEO0FBQ08sc0JBQXNCLHVDQUFHO0FBQ2hDO0FBQ0EsQ0FBQztBQUNEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGVBQWUsMENBQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUCxrQkFBa0IsMENBQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUCxrQkFBa0IsMENBQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2QtMS8uL3NyYy9qcy9kYXRhLmpzPzdkMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3N2LCBqc29uLCBzZWxlY3QgfSBmcm9tICdkMyc7XHJcblxyXG5leHBvcnQgY29uc3QgZGF0YVNUID0gYXdhaXQganNvbihcIi4uL2RhdGEvYWxsUHJvZHVjdGlvbkRhdGFTVC5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGFFVCA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL2FsbFByb2R1Y3Rpb25EYXRhRVQuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbW9EYXRhU1QgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9kYXRhTW9udGhseVNULmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbW9EYXRhRVQgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9kYXRhTW9udGhseUVULmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGF0YUN1bWxTVCA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL2N1bWxQcm9kU1QuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhQ3VtbEVUID0gYXdhaXQganNvbihcIi4uL2RhdGEvY3VtbFByb2RFVC5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFuYWx5emVEYXRhU1QgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9hbmFseXplU1QuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhbmFseXplRGF0YUVUID0gYXdhaXQganNvbihcIi4uL2RhdGEvYW5hbHl6ZUVULmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0aW9ucyA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL2Zvcm1hdGlvbnMuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBlY29uID0gYXdhaXQganNvbihcIi4uL2RhdGEvZWNvbm9taWNzLmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcGF5b3V0ID0gYXdhaXQganNvbihcIi4uL2RhdGEvcGF5b3V0cy5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHB1bXAgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9wdW1wSW5mby5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxlZ2FjeUVjb24gPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9sZWdhY3lFY29uLmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcGwyM18yMiA9IGF3YWl0IGpzb24oXCIuLi9kYXRhXFxcXHBsZGF0YS5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5ld1Byb2QgPSBhd2FpdCBjc3YoXCIuLi9kYXRhXFxcXHJlY1lyUHJvZC5jc3ZcIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aXZlV2VsbHMgPSAoKSA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IGRhdGFFVDtcclxuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyZWdpb24nKSAhPT0gJ2V0JykgZGF0YSA9IGRhdGFTVDtcclxuICAgIGNvbnN0IGV4aXRXZWxsID0gZGF0YVswXVswXVxyXG4gICAgY29uc3Qgd2VsbHMgPSBuZXcgU2V0KCk7XHJcbiAgICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHdlbGwgPSBkYXRhW2ldWzBdO1xyXG4gICAgICAgIHdlbGxzLmFkZCh3ZWxsKTtcclxuICAgICAgICBpZiAod2VsbCA9PT0gZXhpdFdlbGwgJiBpICE9PSAwKSBicmVhaztcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHdlbGxzO1xyXG59O1xyXG5cclxuLy9DcmVhdGVzIERyb3Bkb3duLy9cclxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duID0gKGlkKSA9PiB7XHJcbiAgICBsZXQgbWVudSA9IHNlbGVjdChpZCk7XHJcbiAgICBcclxuICAgIGFjdGl2ZVdlbGxzKCkuZm9yRWFjaCh3ZWxsID0+IHtcclxuICAgICAgICBtZW51LmFwcGVuZChcIm9wdGlvblwiKVxyXG4gICAgICAgICAgICAudGV4dCh3ZWxsKVxyXG4gICAgICAgICAgICAucHJvcGVydHkoXCJWYWx1ZVwiLCB3ZWxsKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ1aWxkVGFibGUgPSAoYWxsRGF0YSkgPT4ge1xyXG4gICAgY29uc3QgdGJvZHkgPSBzZWxlY3QoXCJ0Ym9keVwiKTtcclxuICAgIHRib2R5Lmh0bWwoXCJcIik7XHJcbiAgICBhbGxEYXRhLmZvckVhY2goKHdlbGwpID0+IHtcclxuICAgICAgICBsZXQgcm93ID0gdGJvZHkuYXBwZW5kKFwidHJcIik7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh3ZWxsKS5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNlbGwgPSByb3cuYXBwZW5kKFwidGRcIik7XHJcbiAgICAgICAgICAgIGNlbGwudGV4dCh2YWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyRGF0YSA9IChkYXRhLCBkcm9wZG93bklkKSA9PiB7XHJcbiAgICBsZXQgcmVxV2VsbCA9IHNlbGVjdChkcm9wZG93bklkKS5wcm9wZXJ0eShcInZhbHVlXCIpO1xyXG5cclxuICAgIGlmIChyZXFXZWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEuZmlsdGVyKChyb3cpID0+IHJvd1swXSA9PSByZXFXZWxsKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZGF0YVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNvcnREYXRhID0gKGRhdGEsIHBvcykgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCB0ZW1wID0gWy4uLmRhdGFdO1xyXG4gICAgbGV0IHNvcnRlZDtcclxuICAgIHNvcnRlZCA9IHRlbXAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFWYWwgPSBhW3Bvc107XHJcbiAgICAgICAgY29uc3QgYlZhbCA9IGJbcG9zXTtcclxuICAgICAgICByZXR1cm4gYlZhbCAtIGFWYWw7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkVGFibGUoc29ydGVkKTtcclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/data.js\n");

/***/ }),

/***/ "./src/js/region.js":
/*!**************************!*\
  !*** ./src/js/region.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   monitorRegion: () => (/* binding */ monitorRegion)\n/* harmony export */ });\n$(document).ready(function () {\r\n    $(\"#header\").load(\"../src/pages/header.html\");\r\n});\r\n\r\n// When Region is clicked:\r\nfunction updateDropdownToggleText() {\r\n    sessionStorage.removeItem(\"siteSelection\"); // Remove well location\r\n    location.reload();\r\n};\r\nconst monitorRegion = () => {\r\n    if(sessionStorage.getItem('regionName')==null){\r\n        sessionStorage.setItem('regionName','South Texas')\r\n        sessionStorage.setItem('region','ST')\r\n    }\r\n\r\n    console.log(sessionStorage.getItem(\"region\"))\r\n    document.getElementById('currField').innerText = sessionStorage.getItem('regionName')\r\n    // Click event listeners\r\n    document.querySelectorAll('.dropdown-item').forEach(item => {\r\n        item.addEventListener('click', function() {\r\n            sessionStorage.setItem('region', this.id) // set 'region' to abbreviation\r\n            document.getElementById('currField').innerText = this.innerText; // \r\n            sessionStorage.setItem('regionName', this.innerText) // set 'regionName' to real \r\n            updateDropdownToggleText();\r\n        });\r\n    });\r\n};\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcmVnaW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2QtMS8uL3NyYy9qcy9yZWdpb24uanM/MzMzNyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI2hlYWRlclwiKS5sb2FkKFwiLi4vc3JjL3BhZ2VzL2hlYWRlci5odG1sXCIpO1xyXG59KTtcclxuXHJcbi8vIFdoZW4gUmVnaW9uIGlzIGNsaWNrZWQ6XHJcbmZ1bmN0aW9uIHVwZGF0ZURyb3Bkb3duVG9nZ2xlVGV4dCgpIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJzaXRlU2VsZWN0aW9uXCIpOyAvLyBSZW1vdmUgd2VsbCBsb2NhdGlvblxyXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBtb25pdG9yUmVnaW9uID0gKCkgPT4ge1xyXG4gICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmVnaW9uTmFtZScpPT1udWxsKXtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZWdpb25OYW1lJywnU291dGggVGV4YXMnKVxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JlZ2lvbicsJ1NUJylcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwicmVnaW9uXCIpKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJGaWVsZCcpLmlubmVyVGV4dCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JlZ2lvbk5hbWUnKVxyXG4gICAgLy8gQ2xpY2sgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24taXRlbScpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZWdpb24nLCB0aGlzLmlkKSAvLyBzZXQgJ3JlZ2lvbicgdG8gYWJicmV2aWF0aW9uXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyRmllbGQnKS5pbm5lclRleHQgPSB0aGlzLmlubmVyVGV4dDsgLy8gXHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JlZ2lvbk5hbWUnLCB0aGlzLmlubmVyVGV4dCkgLy8gc2V0ICdyZWdpb25OYW1lJyB0byByZWFsIFxyXG4gICAgICAgICAgICB1cGRhdGVEcm9wZG93blRvZ2dsZVRleHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/region.js\n");

/***/ }),

/***/ "./src/js/yesterdaysProd.js":
/*!**********************************!*\
  !*** ./src/js/yesterdaysProd.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data__WEBPACK_IMPORTED_MODULE_3__]);\n_data__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n(0,_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChangedFb)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_2__.monitorRegion)();\r\n\r\nconst formatData = (data) => {\r\n    const yesterdayDate = data[0][1];\r\n    const filteredData = data.filter(row => row[1] === yesterdayDate);\r\n    const tableData = filteredData.map(([well, , oil, gas, water, tp, , comms]) =>\r\n        [well, oil, gas, water, tp, comms]\r\n    );\r\n\r\n    return tableData;\r\n};\r\n\r\n//main\r\nconst dropdownId = '#wellFilter'\r\nlet region = sessionStorage.getItem('region');\r\nlet data = _data__WEBPACK_IMPORTED_MODULE_3__[`data${region}`];\r\n\r\nconst tableData = formatData(data);\r\n\r\ndocument.getElementById('Prodfilter').onclick = function () {\r\n    _data__WEBPACK_IMPORTED_MODULE_3__.sortData(tableData, 1);\r\n};\r\n\r\ndocument.getElementById('clearFilter').onclick = function () {\r\n    _data__WEBPACK_IMPORTED_MODULE_3__.buildTable(tableData);\r\n};\r\n\r\n(0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).on(\"change\", () => {\r\n    _data__WEBPACK_IMPORTED_MODULE_3__.buildTable(_data__WEBPACK_IMPORTED_MODULE_3__.filterData(tableData, dropdownId));\r\n});\r\n\r\nwindow.onload = function () {\r\n    _data__WEBPACK_IMPORTED_MODULE_3__.buildTable(tableData);\r\n    _data__WEBPACK_IMPORTED_MODULE_3__.dropdown(dropdownId);\r\n}();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMveWVzdGVyZGF5c1Byb2QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEI7QUFDa0I7QUFDTjtBQUNaO0FBQzVCO0FBQ0EsMkRBQW9CO0FBQ3BCLHNEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0NBQUUsUUFBUSxPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyQ0FBVztBQUNmO0FBQ0E7QUFDQTtBQUNBLElBQUksNkNBQWE7QUFDakI7QUFDQTtBQUNBLDBDQUFNO0FBQ04sSUFBSSw2Q0FBYSxDQUFDLDZDQUFhO0FBQy9CLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSw2Q0FBYTtBQUNqQixJQUFJLDJDQUFXO0FBQ2YsQ0FBQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZC0xLy4vc3JjL2pzL3llc3RlcmRheXNQcm9kLmpzP2RmZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZGggZnJvbSAnLi9kYXRhJ1xyXG5pbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWRGYiB9IGZyb20gJy4vYXV0aCc7XHJcbmltcG9ydCB7IG1vbml0b3JSZWdpb24gfSBmcm9tICcuL3JlZ2lvbidcclxuaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnZDMnO1xyXG5cclxub25BdXRoU3RhdGVDaGFuZ2VkRmIoKTtcclxubW9uaXRvclJlZ2lvbigpO1xyXG5cclxuY29uc3QgZm9ybWF0RGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zdCB5ZXN0ZXJkYXlEYXRlID0gZGF0YVswXVsxXTtcclxuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZmlsdGVyKHJvdyA9PiByb3dbMV0gPT09IHllc3RlcmRheURhdGUpO1xyXG4gICAgY29uc3QgdGFibGVEYXRhID0gZmlsdGVyZWREYXRhLm1hcCgoW3dlbGwsICwgb2lsLCBnYXMsIHdhdGVyLCB0cCwgLCBjb21tc10pID0+XHJcbiAgICAgICAgW3dlbGwsIG9pbCwgZ2FzLCB3YXRlciwgdHAsIGNvbW1zXVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gdGFibGVEYXRhO1xyXG59O1xyXG5cclxuLy9tYWluXHJcbmNvbnN0IGRyb3Bkb3duSWQgPSAnI3dlbGxGaWx0ZXInXHJcbmxldCByZWdpb24gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyZWdpb24nKTtcclxubGV0IGRhdGEgPSBkaFtgZGF0YSR7cmVnaW9ufWBdO1xyXG5cclxuY29uc3QgdGFibGVEYXRhID0gZm9ybWF0RGF0YShkYXRhKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdQcm9kZmlsdGVyJykub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGRoLnNvcnREYXRhKHRhYmxlRGF0YSwgMSk7XHJcbn07XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXJGaWx0ZXInKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZGguYnVpbGRUYWJsZSh0YWJsZURhdGEpO1xyXG59O1xyXG5cclxuc2VsZWN0KGRyb3Bkb3duSWQpLm9uKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgIGRoLmJ1aWxkVGFibGUoZGguZmlsdGVyRGF0YSh0YWJsZURhdGEsIGRyb3Bkb3duSWQpKTtcclxufSk7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZGguYnVpbGRUYWJsZSh0YWJsZURhdGEpO1xyXG4gICAgZGguZHJvcGRvd24oZHJvcGRvd25JZCk7XHJcbn0oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/yesterdaysProd.js\n");

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