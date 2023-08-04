"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkprod_1"] = self["webpackChunkprod_1"] || []).push([["src_js_load_gc_js"],{

/***/ "./src/js/load/gc.js":
/*!***************************!*\
  !*** ./src/js/load/gc.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dataCumlGC: () => (/* binding */ dataCumlGC),\n/* harmony export */   dataGC: () => (/* binding */ dataGC),\n/* harmony export */   formations: () => (/* binding */ formations)\n/* harmony export */ });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\nconst dataGC = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/GC/prodGC.json\").then(d => d);\r\nconst dataCumlGC = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/GC/cumlProdGC.json\").then(d => d);\r\nconst formations = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/misc/formations.json\").then((data) => {\r\n    return data\r\n});\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://prod-1/./src/js/load/gc.js?");

/***/ })

}]);