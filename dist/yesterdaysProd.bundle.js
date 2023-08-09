/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   loginFb: () => (/* binding */ loginFb),\n/* harmony export */   logoutFb: () => (/* binding */ logoutFb),\n/* harmony export */   onAuthStateChangedFb: () => (/* binding */ onAuthStateChangedFb),\n/* harmony export */   updatePasswordFb: () => (/* binding */ updatePasswordFb)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\r\n\r\n\r\nconst firebaseConfig = {\r\n    apiKey: \"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU\",\r\n    authDomain: \"cmlproduction-1e86a.firebaseapp.com\",\r\n    projectId: \"cmlproduction-1e86a\",\r\n    storageBucket: \"cmlproduction-1e86a.appspot.com\",\r\n    messagingSenderId: \"924402330611\",\r\n    appId: \"1:924402330611:web:55155c0a5c5c6a7d4b8086\"\r\n};\r\n  \r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\n\r\n\r\nconst onAuthStateChangedFb = () => {\r\n    auth.onAuthStateChanged((user) => {\r\n        if (user) {\r\n            console.log('user mon :>> ', user);\r\n            //up();\r\n        } else {\r\n            console.log(\"none\");\r\n            window.location.replace('index.html');\r\n            const currentState = window.history.state;\r\n            window.history.replaceState(currentState, '', window.location.href);\r\n            window.onpopstate = function () {\r\n            window.history.replaceState(currentState, '', window.location.href);\r\n            };\r\n        }\r\n    });\r\n};\r\n\r\nconst up = () => {\r\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updateProfile)(auth.currentUser, {\r\n        displayName: ''\r\n      }).then(() => {\r\n        console.log('userCredential.user.displayName :>> ', auth.currentUser.displayName);\r\n      }).catch((error) => {\r\n        console.log('error :>> ', error);\r\n      });\r\n};\r\n\r\nconst loginFb = (email, password) => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth,email,password)\r\n};\r\n\r\nconst logoutFb = () => {\r\n    sessionStorage.removeItem('siteSelection')\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);\r\n};\r\n\r\nconst updatePasswordFb = (newPassword) => {\r\n    const user = auth.currentUser;\r\n    if (user) {\r\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updatePassword)(user,newPassword);\r\n    }\r\n    return Promise.reject(new Error('No user is currently signed in.'));\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://prod-1/./src/js/auth.js?");

/***/ }),

/***/ "./src/js/dataHandlers.js":
/*!********************************!*\
  !*** ./src/js/dataHandlers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   activeWells: () => (/* binding */ activeWells),\n/* harmony export */   buildTable: () => (/* binding */ buildTable),\n/* harmony export */   dropdown: () => (/* binding */ dropdown),\n/* harmony export */   filterData: () => (/* binding */ filterData),\n/* harmony export */   sortData: () => (/* binding */ sortData)\n/* harmony export */ });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\n\r\nconst activeWells = (data) => {\r\n    const exitWell = data[0][0]\r\n    const wells = new Set();\r\n    \r\n    for (let i = 0; i < data.length; i++) {\r\n        const well = data[i][0];\r\n        if (well !== 'Cornett #1 Swd') wells.add(well);\r\n        if (well === exitWell & i !== 0) break;\r\n    };\r\n\r\n    return wells;\r\n};\r\n\r\n//Creates Dropdown//\r\nconst dropdown = (id,data) => {\r\n    let menu = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(id);\r\n    activeWells(data).forEach(well => {\r\n        if (well !== 'Mcwf #1') {\r\n            menu.append(\"option\")\r\n            .text(well)\r\n            .property(\"Value\", well);\r\n        }\r\n    });\r\n};\r\n\r\nconst buildTable = (allData) => {\r\n    console.log('allData')\r\n    console.log(allData)\r\n\r\n    const tbody = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"tbody\");\r\n    tbody.html(\"\");\r\n    allData.forEach((well) => {\r\n        let row = tbody.append(\"tr\");\r\n        Object.values(well).forEach((val) => {\r\n            let cell = row.append(\"td\");\r\n            cell.text(val);\r\n        });\r\n    });\r\n};\r\n\r\nconst filterData = (data, dropdownId) => {\r\n    let reqWell = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).property(\"value\");\r\n\r\n    if (reqWell) {\r\n        return data.filter((row) => row[0] == reqWell);\r\n    };\r\n    return data\r\n};\r\n\r\nconst sortData = (data, pos) => {\r\n    event.preventDefault();\r\n    let temp = [...data];\r\n    let sorted;\r\n    sorted = temp.sort((a, b) => {\r\n        const aVal = a[pos];\r\n        const bVal = b[pos];\r\n        return bVal - aVal;\r\n    });\r\n    buildTable(sorted);\r\n};\n\n//# sourceURL=webpack://prod-1/./src/js/dataHandlers.js?");

/***/ }),

/***/ "./src/js/load/loader.js":
/*!*******************************!*\
  !*** ./src/js/load/loader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lazyLoad: () => (/* binding */ lazyLoad)\n/* harmony export */ });\nfunction lazyLoad() {\r\n    let region = sessionStorage.region\r\n    let data = {\r\n      prod: null,\r\n      cuml: null,\r\n      mnth: null,\r\n      econ: null,\r\n      payout: null,\r\n      pumpInfo: null,\r\n      formation: null\r\n    };\r\n    let res;\r\n    console.log('region :>> ', region);\r\n    if (region == 'ST' || region == null){\r\n      res = __webpack_require__.e(/*! import() */ \"src_js_load_st_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./st */ \"./src/js/load/st.js\")).then(module => {\r\n        data.prod = module.dataST\r\n        data.cuml = module.dataCumlST\r\n        data.mnth = module.mnthDataST\r\n        data.econ = module.econ\r\n        data.payout = module.payout\r\n        data.pumpInfo = module.pump\r\n        data.formation = module.formations\r\n        return data\r\n      })\r\n    }else if (region == 'ET'){\r\n      res = __webpack_require__.e(/*! import() */ \"src_js_load_et_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./et */ \"./src/js/load/et.js\")).then(module => {\r\n        data.prod = module.dataET\r\n        data.cuml = module.dataCumlET\r\n        data.mnth = module.mnthDataET\r\n        data.formation  = module.formations\r\n        return data\r\n      })\r\n    }else if (region == 'NM'){\r\n      res = __webpack_require__.e(/*! import() */ \"src_js_load_nm_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./nm */ \"./src/js/load/nm.js\")).then(module => {\r\n        data.prod = module.dataNM\r\n        data.cuml = module.dataCumlNM\r\n        data.formation  = module.formations\r\n        return data\r\n      })\r\n    }else if (region == 'GC'){\r\n      res = __webpack_require__.e(/*! import() */ \"src_js_load_gc_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./gc */ \"./src/js/load/gc.js\")).then(module => {\r\n        data.prod = module.dataGC\r\n        data.cuml = module.dataCumlGC\r\n        data.formation  = module.formations\r\n        return data\r\n      })\r\n    } else if (region == 'WT'){\r\n      res = __webpack_require__.e(/*! import() */ \"src_js_load_wt_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./wt */ \"./src/js/load/wt.js\")).then(module => {\r\n        data.prod = module.dataWT\r\n        data.cuml = module.dataCumlWT\r\n        data.formation  = module.formations\r\n        return data\r\n      })\r\n    }\r\n    return res\r\n}\n\n//# sourceURL=webpack://prod-1/./src/js/load/loader.js?");

/***/ }),

/***/ "./src/js/region.js":
/*!**************************!*\
  !*** ./src/js/region.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   monitorRegion: () => (/* binding */ monitorRegion)\n/* harmony export */ });\nconst monitorRegion = () => {\r\n    if(sessionStorage.regionName == null || sessionStorage.regionName == undefined){\r\n        sessionStorage.setItem('regionName','South Texas')\r\n        sessionStorage.setItem('region','ST')\r\n    }\r\n    console.log('document.getElementById(\"currField\") :>> ', document.getElementById('currField'));\r\n    document.getElementById('currField').innerText = sessionStorage.getItem('regionName')\r\n    // Click event listeners\r\n    document.querySelectorAll('.dropdown-item').forEach(item => {\r\n        item.addEventListener('click', function() {\r\n            sessionStorage.setItem('region', this.id) // set 'region' to abbreviation\r\n            document.getElementById('currField').innerText = this.innerText; // \r\n            sessionStorage.setItem('regionName', this.innerText) // set 'regionName' to real \r\n            sessionStorage.removeItem(\"siteSelection\");\r\n            location.reload();\r\n        });\r\n    });\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://prod-1/./src/js/region.js?");

/***/ }),

/***/ "./src/js/yesterdaysProd.js":
/*!**********************************!*\
  !*** ./src/js/yesterdaysProd.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dataHandlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataHandlers */ \"./src/js/dataHandlers.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n/* harmony import */ var _load_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./load/loader */ \"./src/js/load/loader.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst formatData = (data) => {\r\n    const yesterdayDate = data[0][1];\r\n    const filteredData = data.filter(row => row[1] === yesterdayDate);\r\n    const tableData = filteredData.map(([well, , oil, gas, water, tp, , comms]) =>\r\n        [well, oil, gas, water, tp, comms]\r\n    );\r\n\r\n    return tableData;\r\n};\r\n\r\nlet pageData;\r\nconst dropdownId = '#wellFilter'\r\n;(0,_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChangedFb)();\r\n$(document).ready(function () {\r\n  $(\"#header\").load(\"../src/pages/header.html\", () => {\r\n    console.log('loaded header');\r\n    (0,_region__WEBPACK_IMPORTED_MODULE_2__.monitorRegion)();\r\n  });\r\n});\r\n\r\ndocument.getElementById('Prodfilter').onclick = function () {\r\n    _dataHandlers__WEBPACK_IMPORTED_MODULE_3__.sortData(pageData, 1);\r\n};\r\n\r\ndocument.getElementById('clearFilter').onclick = function () {\r\n    _dataHandlers__WEBPACK_IMPORTED_MODULE_3__.buildTable(pageData);\r\n};\r\n\r\n(0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).on(\"change\", () => {\r\n    _dataHandlers__WEBPACK_IMPORTED_MODULE_3__.buildTable(_dataHandlers__WEBPACK_IMPORTED_MODULE_3__.filterData(pageData, dropdownId));\r\n});\r\n\r\nwindow.onload = function () {\r\n    (0,_load_loader__WEBPACK_IMPORTED_MODULE_4__.lazyLoad)().then(data => {\r\n        data.prod = formatData(data.prod)\r\n        pageData = data.prod\r\n        _dataHandlers__WEBPACK_IMPORTED_MODULE_3__.buildTable(data.prod);\r\n        _dataHandlers__WEBPACK_IMPORTED_MODULE_3__.dropdown(dropdownId,data.prod);\r\n    })\r\n}();\n\n//# sourceURL=webpack://prod-1/./src/js/yesterdaysProd.js?");

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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "prod-1:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
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