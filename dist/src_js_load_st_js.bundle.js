"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkprod_1"] = self["webpackChunkprod_1"] || []).push([["src_js_load_st_js"],{

/***/ "./src/js/load/st.js":
/*!***************************!*\
  !*** ./src/js/load/st.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dataCumlST: () => (/* binding */ dataCumlST),\n/* harmony export */   dataST: () => (/* binding */ dataST),\n/* harmony export */   econ: () => (/* binding */ econ),\n/* harmony export */   formations: () => (/* binding */ formations),\n/* harmony export */   mnthDataST: () => (/* binding */ mnthDataST),\n/* harmony export */   payout: () => (/* binding */ payout),\n/* harmony export */   pump: () => (/* binding */ pump)\n/* harmony export */ });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\nconst dataST = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ST/prodST.json\").then((data) => {\r\n    return data\r\n});\r\nconst dataCumlST = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ST/cumlProdST.json\").then((data) => {\r\n    return data\r\n});\r\nconst mnthDataST = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ST/dataMonthlyST.json\").then((data) => {\r\n    return data\r\n});\r\nconst pump = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ST/pumpInfo.json\").then((data) => {\r\n    return data\r\n});\r\nconst econ = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/econ/economics.json\").then((data) => {\r\n    return data\r\n});\r\nconst payout = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/econ/payouts.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst formations = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/misc/formations.json\").then((data) => {\r\n    return data\r\n});\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://prod-1/./src/js/load/st.js?");

/***/ })

}]);