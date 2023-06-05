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

/***/ "./src/js/table.js":
/*!*************************!*\
  !*** ./src/js/table.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data__WEBPACK_IMPORTED_MODULE_3__]);\n_data__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n(0,_index__WEBPACK_IMPORTED_MODULE_1__.monitorAuthState)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_2__.monitorRegion)();\r\n\r\nlet region = sessionStorage.getItem('region');\r\nconst dropdownId = '#siteFilter';\r\n\r\n\r\nconst formatData = () => {\r\n  let tableData = _data__WEBPACK_IMPORTED_MODULE_3__.dataCumlET;\r\n  let payData;\r\n\r\n  if (region != \"et\") {\r\n    tableData = _data__WEBPACK_IMPORTED_MODULE_3__.dataCuml\r\n    payData = _data__WEBPACK_IMPORTED_MODULE_3__.payout\r\n\r\n    payData.forEach((pay) => {\r\n      tableData.forEach((well) => {\r\n        if (well[0] == pay[\"Well Name\"]) {\r\n          well.push(pay[\"% Payout\"]);\r\n        }\r\n      });\r\n    });\r\n  };\r\n  \r\n  //switch places of prodData[3] and prodData[4]\r\n  tableData.forEach((well) => {\r\n    let temp = well[4];\r\n    well[4] = well[5];\r\n    well[5] = temp;\r\n  });\r\n  tableData.forEach((well) => {\r\n    well[4] = 100 * well[4];\r\n    well[4] = Number(well[4]).toFixed(2);\r\n  });\r\n\r\n  //remove archived wells\r\n  return tableData.filter(val => (0,_data__WEBPACK_IMPORTED_MODULE_3__.activeWells)().has(val[0]));\r\n};\r\n\r\n\r\n//main\r\nconst tableData = formatData();\r\n\r\n//sort by pay: pos=4 by prod: pos=1\r\ndocument.getElementById('Payfilter').onclick = function(){\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.sortData)(tableData,4)\r\n};\r\n\r\ndocument.getElementById('Prodfilter').onclick = function(){\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.sortData)(tableData,1)\r\n};\r\n\r\n(0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).on(\"change\", () => {\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.buildTable)((0,_data__WEBPACK_IMPORTED_MODULE_3__.filterData)(tableData,dropdownId));\r\n});\r\n\r\n\r\ndocument.getElementById('clearFilter').onclick = function () {\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.buildTable)(tableData);\r\n};\r\n\r\nwindow.onload = function () {\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.buildTable)(tableData);\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.dropdown)(dropdownId);  \r\n}();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGFibGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEM7QUFDRjtBQUNnRTtBQUM1RTtBQUM1QjtBQUNBLHdEQUFnQjtBQUNoQixzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2Q0FBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkNBQVE7QUFDeEIsY0FBYyx5Q0FBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWlDLGtEQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtDQUFRO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrQ0FBUTtBQUNWO0FBQ0E7QUFDQSwwQ0FBTTtBQUNOLEVBQUUsaURBQVUsQ0FBQyxpREFBVTtBQUN2QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaURBQVU7QUFDWixFQUFFLCtDQUFRO0FBQ1YsQ0FBQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RhYmxlLmpzP2NmMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9uaXRvckF1dGhTdGF0ZSB9IGZyb20gJy4vaW5kZXgnXHJcbmltcG9ydCB7IG1vbml0b3JSZWdpb24gfSBmcm9tICcuL3JlZ2lvbidcclxuaW1wb3J0IHsgZGF0YUN1bWwsZGF0YUN1bWxFVCxwYXlvdXQsYWN0aXZlV2VsbHMsc29ydERhdGEsYnVpbGRUYWJsZSxkcm9wZG93bixmaWx0ZXJEYXRhIH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnZDMnO1xyXG5cclxubW9uaXRvckF1dGhTdGF0ZSgpO1xyXG5tb25pdG9yUmVnaW9uKCk7XHJcblxyXG5sZXQgcmVnaW9uID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmVnaW9uJyk7XHJcbmNvbnN0IGRyb3Bkb3duSWQgPSAnI3NpdGVGaWx0ZXInO1xyXG5cclxuXHJcbmNvbnN0IGZvcm1hdERhdGEgPSAoKSA9PiB7XHJcbiAgbGV0IHRhYmxlRGF0YSA9IGRhdGFDdW1sRVQ7XHJcbiAgbGV0IHBheURhdGE7XHJcblxyXG4gIGlmIChyZWdpb24gIT0gXCJldFwiKSB7XHJcbiAgICB0YWJsZURhdGEgPSBkYXRhQ3VtbFxyXG4gICAgcGF5RGF0YSA9IHBheW91dFxyXG5cclxuICAgIHBheURhdGEuZm9yRWFjaCgocGF5KSA9PiB7XHJcbiAgICAgIHRhYmxlRGF0YS5mb3JFYWNoKCh3ZWxsKSA9PiB7XHJcbiAgICAgICAgaWYgKHdlbGxbMF0gPT0gcGF5W1wiV2VsbCBOYW1lXCJdKSB7XHJcbiAgICAgICAgICB3ZWxsLnB1c2gocGF5W1wiJSBQYXlvdXRcIl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIFxyXG4gIC8vc3dpdGNoIHBsYWNlcyBvZiBwcm9kRGF0YVszXSBhbmQgcHJvZERhdGFbNF1cclxuICB0YWJsZURhdGEuZm9yRWFjaCgod2VsbCkgPT4ge1xyXG4gICAgbGV0IHRlbXAgPSB3ZWxsWzRdO1xyXG4gICAgd2VsbFs0XSA9IHdlbGxbNV07XHJcbiAgICB3ZWxsWzVdID0gdGVtcDtcclxuICB9KTtcclxuICB0YWJsZURhdGEuZm9yRWFjaCgod2VsbCkgPT4ge1xyXG4gICAgd2VsbFs0XSA9IDEwMCAqIHdlbGxbNF07XHJcbiAgICB3ZWxsWzRdID0gTnVtYmVyKHdlbGxbNF0pLnRvRml4ZWQoMik7XHJcbiAgfSk7XHJcblxyXG4gIC8vcmVtb3ZlIGFyY2hpdmVkIHdlbGxzXHJcbiAgcmV0dXJuIHRhYmxlRGF0YS5maWx0ZXIodmFsID0+IGFjdGl2ZVdlbGxzKCkuaGFzKHZhbFswXSkpO1xyXG59O1xyXG5cclxuXHJcbi8vbWFpblxyXG5jb25zdCB0YWJsZURhdGEgPSBmb3JtYXREYXRhKCk7XHJcblxyXG4vL3NvcnQgYnkgcGF5OiBwb3M9NCBieSBwcm9kOiBwb3M9MVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUGF5ZmlsdGVyJykub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgc29ydERhdGEodGFibGVEYXRhLDQpXHJcbn07XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUHJvZGZpbHRlcicpLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xyXG4gIHNvcnREYXRhKHRhYmxlRGF0YSwxKVxyXG59O1xyXG5cclxuc2VsZWN0KGRyb3Bkb3duSWQpLm9uKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICBidWlsZFRhYmxlKGZpbHRlckRhdGEodGFibGVEYXRhLGRyb3Bkb3duSWQpKTtcclxufSk7XHJcblxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyRmlsdGVyJykub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICBidWlsZFRhYmxlKHRhYmxlRGF0YSk7XHJcbn07XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIGJ1aWxkVGFibGUodGFibGVEYXRhKTtcclxuICBkcm9wZG93bihkcm9wZG93bklkKTsgIFxyXG59KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/table.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-d0574a","vendors-node_modules_d3_src_index_js","src_js_data_js-src_js_index_js-src_js_region_js"], () => (__webpack_require__("./src/js/table.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;