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

/***/ "./src/js/analyzeTable.js":
/*!********************************!*\
  !*** ./src/js/analyzeTable.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data__WEBPACK_IMPORTED_MODULE_2__]);\n_data__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n(0,_region__WEBPACK_IMPORTED_MODULE_1__.monitorRegion)();\r\n\r\nlet region = sessionStorage.getItem(\"region\");\r\n\r\nlet data = null;\r\nif (region == 'ST') data = _data__WEBPACK_IMPORTED_MODULE_2__.analyzeDataST;\r\n\r\nconst createAnalysis = (data) => {\r\n  const tbody = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"tbody\")\r\n\r\n  function buildTable(tableData) {\r\n    tbody.html(\"\"); //clear table\r\n    tableData.forEach((well) => {\r\n      let row = tbody.append(\"tr\");\r\n      // loop through each value to add a cell for each of it\r\n      Object.values(well).forEach((val,idx) => {\r\n        if (idx == 1){val = new Date(val).toISOString().split('T')[0];}\r\n        console.log(typeof(val), val,idx);\r\n        let cell = row.append(\"td\");\r\n        cell.text(val);\r\n      });\r\n    });\r\n  }; // closing forEach\r\n\r\n  //JQUERY TO ADD LINKS \r\n  $(document).ready(function () {\r\n    $(\"tr td:nth-child(1)\").each(function () { //ADD LINK TO THE FIRST CHILD OF EVERY TD, SO THE NAME OF THE WELL\r\n      //$(this).html('<a href=\"https://cmlexploration.github.io/STprod/curves.html\">' + $(this).text() + '</a>');\r\n      $(this).html('<a href=\"./curves.html\">' + $(this).text() + '</a>');\r\n      $(this).click(function () {\r\n        sessionStorage.setItem('siteSelection', $(this).text())\r\n      })\r\n    });\r\n  });\r\n  buildTable(data)\r\n};\r\n\r\ncreateAnalysis(data);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYW5hbHl6ZVRhYmxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFDWjtBQUNVO0FBQ3RDO0FBQ0Esc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnREFBYTtBQUN4QztBQUNBO0FBQ0EsZ0JBQWdCLDBDQUFNO0FBQ3RCO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvYW5hbHl6ZVRhYmxlLmpzPzEwNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9uaXRvclJlZ2lvbiB9IGZyb20gJy4vcmVnaW9uJ1xyXG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tICdkMyc7XHJcbmltcG9ydCB7YW5hbHl6ZURhdGFTVCB9IGZyb20gJy4vZGF0YSc7XHJcblxyXG5tb25pdG9yUmVnaW9uKCk7XHJcblxyXG5sZXQgcmVnaW9uID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInJlZ2lvblwiKTtcclxuXHJcbmxldCBkYXRhID0gbnVsbDtcclxuaWYgKHJlZ2lvbiA9PSAnU1QnKSBkYXRhID0gYW5hbHl6ZURhdGFTVDtcclxuXHJcbmNvbnN0IGNyZWF0ZUFuYWx5c2lzID0gKGRhdGEpID0+IHtcclxuICBjb25zdCB0Ym9keSA9IHNlbGVjdChcInRib2R5XCIpXHJcblxyXG4gIGZ1bmN0aW9uIGJ1aWxkVGFibGUodGFibGVEYXRhKSB7XHJcbiAgICB0Ym9keS5odG1sKFwiXCIpOyAvL2NsZWFyIHRhYmxlXHJcbiAgICB0YWJsZURhdGEuZm9yRWFjaCgod2VsbCkgPT4ge1xyXG4gICAgICBsZXQgcm93ID0gdGJvZHkuYXBwZW5kKFwidHJcIik7XHJcbiAgICAgIC8vIGxvb3AgdGhyb3VnaCBlYWNoIHZhbHVlIHRvIGFkZCBhIGNlbGwgZm9yIGVhY2ggb2YgaXRcclxuICAgICAgT2JqZWN0LnZhbHVlcyh3ZWxsKS5mb3JFYWNoKCh2YWwsaWR4KSA9PiB7XHJcbiAgICAgICAgaWYgKGlkeCA9PSAxKXt2YWwgPSBuZXcgRGF0ZSh2YWwpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTt9XHJcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mKHZhbCksIHZhbCxpZHgpO1xyXG4gICAgICAgIGxldCBjZWxsID0gcm93LmFwcGVuZChcInRkXCIpO1xyXG4gICAgICAgIGNlbGwudGV4dCh2YWwpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07IC8vIGNsb3NpbmcgZm9yRWFjaFxyXG5cclxuICAvL0pRVUVSWSBUTyBBREQgTElOS1MgXHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcInRyIHRkOm50aC1jaGlsZCgxKVwiKS5lYWNoKGZ1bmN0aW9uICgpIHsgLy9BREQgTElOSyBUTyBUSEUgRklSU1QgQ0hJTEQgT0YgRVZFUlkgVEQsIFNPIFRIRSBOQU1FIE9GIFRIRSBXRUxMXHJcbiAgICAgIC8vJCh0aGlzKS5odG1sKCc8YSBocmVmPVwiaHR0cHM6Ly9jbWxleHBsb3JhdGlvbi5naXRodWIuaW8vU1Rwcm9kL2N1cnZlcy5odG1sXCI+JyArICQodGhpcykudGV4dCgpICsgJzwvYT4nKTtcclxuICAgICAgJCh0aGlzKS5odG1sKCc8YSBocmVmPVwiLi9jdXJ2ZXMuaHRtbFwiPicgKyAkKHRoaXMpLnRleHQoKSArICc8L2E+Jyk7XHJcbiAgICAgICQodGhpcykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3NpdGVTZWxlY3Rpb24nLCAkKHRoaXMpLnRleHQoKSlcclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGJ1aWxkVGFibGUoZGF0YSlcclxufTtcclxuXHJcbmNyZWF0ZUFuYWx5c2lzKGRhdGEpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/analyzeTable.js\n");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   activeWells: () => (/* binding */ activeWells),\n/* harmony export */   analyzeDataET: () => (/* binding */ analyzeDataET),\n/* harmony export */   analyzeDataST: () => (/* binding */ analyzeDataST),\n/* harmony export */   buildTable: () => (/* binding */ buildTable),\n/* harmony export */   dataCumlET: () => (/* binding */ dataCumlET),\n/* harmony export */   dataCumlGC: () => (/* binding */ dataCumlGC),\n/* harmony export */   dataCumlNM: () => (/* binding */ dataCumlNM),\n/* harmony export */   dataCumlST: () => (/* binding */ dataCumlST),\n/* harmony export */   dataCumlWT: () => (/* binding */ dataCumlWT),\n/* harmony export */   dataET: () => (/* binding */ dataET),\n/* harmony export */   dataGC: () => (/* binding */ dataGC),\n/* harmony export */   dataNM: () => (/* binding */ dataNM),\n/* harmony export */   dataST: () => (/* binding */ dataST),\n/* harmony export */   dataWT: () => (/* binding */ dataWT),\n/* harmony export */   dropdown: () => (/* binding */ dropdown),\n/* harmony export */   econ: () => (/* binding */ econ),\n/* harmony export */   filterData: () => (/* binding */ filterData),\n/* harmony export */   formations: () => (/* binding */ formations),\n/* harmony export */   legacyEcon: () => (/* binding */ legacyEcon),\n/* harmony export */   moDataET: () => (/* binding */ moDataET),\n/* harmony export */   moDataST: () => (/* binding */ moDataST),\n/* harmony export */   newProd: () => (/* binding */ newProd),\n/* harmony export */   payout: () => (/* binding */ payout),\n/* harmony export */   pl23_22: () => (/* binding */ pl23_22),\n/* harmony export */   pump: () => (/* binding */ pump),\n/* harmony export */   sortData: () => (/* binding */ sortData)\n/* harmony export */ });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\nconst dataST = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ST/prodST.json\").then((data) => {\r\n    return data\r\n});\r\nconst dataCumlST = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ST/cumlProdST.json\").then((data) => {\r\n    return data\r\n});\r\nconst analyzeDataST = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ST/analyzeST.json\").then((data) => {\r\n    return data\r\n});\r\nconst moDataST = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ST/dataMonthlyST.json\").then((data) => {\r\n    return data\r\n});\r\nconst pump = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ST/pumpInfo.json\").then((data) => {\r\n    return data\r\n});\r\nconst newProd = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.csv)(\"../data\\\\ST/recYrProd.csv\").then((data) => {\r\n    return data\r\n});\r\n\r\n\r\nconst dataET = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ET/prodET.json\").then((data) => {\r\n    return data;\r\n});\r\nconst dataCumlET = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ET/cumlProdET.json\").then((data) => {\r\n    return data\r\n});\r\nconst moDataET = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ET/dataMonthlyET.json\").then((data) => {\r\n    return data\r\n});\r\nconst analyzeDataET = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ET/analyzeET.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst dataNM = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/NM/prodNM.json\").then((data) => {\r\n    return data;\r\n});\r\nconst dataCumlNM = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/NM/cumlProdNM.json\").then((data) => {\r\n    return data\r\n});\r\n\r\n\r\nconst dataGC = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/GC/prodGC.json\").then((data) => {\r\n    return data;\r\n});\r\nconst dataCumlGC = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/GC/cumlProdGC.json\").then((data) => {\r\n    return data\r\n});\r\n\r\n\r\nconst dataWT = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/WT/prodWT.json\").then((data) => {\r\n    return data;\r\n});\r\nconst dataCumlWT = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/WT/cumlProdWT.json\").then((data) => {\r\n    return data\r\n});\r\n\r\n\r\nconst econ = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/econ/economics.json\").then((data) => {\r\n    return data\r\n});\r\nconst payout = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/econ/payouts.json\").then((data) => {\r\n    return data\r\n});\r\nconst legacyEcon = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/econ/legacyEcon.json\").then((data) => {\r\n    return data\r\n});\r\nconst pl23_22 = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data\\\\econ/pldata.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst formations = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/misc/formations.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst activeWells = () => {\r\n    let region = sessionStorage.region\r\n    let data = dataST;\r\n    if (region == 'ET') data = dataET;\r\n    if (region == 'GC') data = dataGC;\r\n    if (region == 'WT') data = dataWT;\r\n    if (region == 'NM') data = dataNM;\r\n\r\n    const exitWell = data[0][0]\r\n    const wells = new Set();\r\n    \r\n    for (let i = 0; i < data.length; i++) {\r\n        const well = data[i][0];\r\n        wells.add(well);\r\n        if (well === exitWell & i !== 0) break;\r\n    };\r\n\r\n    return wells;\r\n};\r\n\r\n//Creates Dropdown//\r\nconst dropdown = (id) => {\r\n    let menu = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(id);\r\n    \r\n    activeWells().forEach(well => {\r\n        menu.append(\"option\")\r\n            .text(well)\r\n            .property(\"Value\", well);\r\n    });\r\n};\r\n\r\nconst buildTable = (allData) => {\r\n    console.log('allData')\r\n    console.log(allData)\r\n\r\n    const tbody = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"tbody\");\r\n    tbody.html(\"\");\r\n    allData.forEach((well) => {\r\n        let row = tbody.append(\"tr\");\r\n        Object.values(well).forEach((val) => {\r\n            let cell = row.append(\"td\");\r\n            cell.text(val);\r\n        });\r\n    });\r\n};\r\n\r\nconst filterData = (data, dropdownId) => {\r\n    let reqWell = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).property(\"value\");\r\n\r\n    if (reqWell) {\r\n        return data.filter((row) => row[0] == reqWell);\r\n    };\r\n    return data\r\n};\r\n\r\nconst sortData = (data, pos) => {\r\n    event.preventDefault();\r\n    let temp = [...data];\r\n    let sorted;\r\n    sorted = temp.sort((a, b) => {\r\n        const aVal = a[pos];\r\n        const bVal = b[pos];\r\n        return bVal - aVal;\r\n    });\r\n    buildTable(sorted);\r\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZGF0YS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3ZDO0FBQ08scUJBQXFCLHdDQUFJO0FBQ2hDO0FBQ0EsQ0FBQztBQUNNLHlCQUF5Qix3Q0FBSTtBQUNwQztBQUNBLENBQUM7QUFDTSw0QkFBNEIsd0NBQUk7QUFDdkM7QUFDQSxDQUFDO0FBQ00sdUJBQXVCLHdDQUFJO0FBQ2xDO0FBQ0EsQ0FBQztBQUNNLG1CQUFtQix3Q0FBSTtBQUM5QjtBQUNBLENBQUM7QUFDTSxzQkFBc0IsdUNBQUc7QUFDaEM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNPLHFCQUFxQix3Q0FBSTtBQUNoQztBQUNBLENBQUM7QUFDTSx5QkFBeUIsd0NBQUk7QUFDcEM7QUFDQSxDQUFDO0FBQ00sdUJBQXVCLHdDQUFJO0FBQ2xDO0FBQ0EsQ0FBQztBQUNNLDRCQUE0Qix3Q0FBSTtBQUN2QztBQUNBLENBQUM7QUFDRDtBQUNPLHFCQUFxQix3Q0FBSTtBQUNoQztBQUNBLENBQUM7QUFDTSx5QkFBeUIsd0NBQUk7QUFDcEM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNPLHFCQUFxQix3Q0FBSTtBQUNoQztBQUNBLENBQUM7QUFDTSx5QkFBeUIsd0NBQUk7QUFDcEM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNPLHFCQUFxQix3Q0FBSTtBQUNoQztBQUNBLENBQUM7QUFDTSx5QkFBeUIsd0NBQUk7QUFDcEM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNPLG1CQUFtQix3Q0FBSTtBQUM5QjtBQUNBLENBQUM7QUFDTSxxQkFBcUIsd0NBQUk7QUFDaEM7QUFDQSxDQUFDO0FBQ00seUJBQXlCLHdDQUFJO0FBQ3BDO0FBQ0EsQ0FBQztBQUNNLHNCQUFzQix3Q0FBSTtBQUNqQztBQUNBLENBQUM7QUFDRDtBQUNPLHlCQUF5Qix3Q0FBSTtBQUNwQztBQUNBLENBQUM7QUFDRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZUFBZSwwQ0FBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwwQ0FBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQLGtCQUFrQiwwQ0FBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZC0xLy4vc3JjL2pzL2RhdGEuanM/N2QyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3YsIGpzb24sIHNlbGVjdCB9IGZyb20gJ2QzJztcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhU1QgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9TVC9wcm9kU1QuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGRhdGFDdW1sU1QgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9TVC9jdW1sUHJvZFNULmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcbmV4cG9ydCBjb25zdCBhbmFseXplRGF0YVNUID0gYXdhaXQganNvbihcIi4uL2RhdGEvU1QvYW5hbHl6ZVNULmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcbmV4cG9ydCBjb25zdCBtb0RhdGFTVCA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL1NUL2RhdGFNb250aGx5U1QuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHB1bXAgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9TVC9wdW1wSW5mby5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbmV3UHJvZCA9IGF3YWl0IGNzdihcIi4uL2RhdGFcXFxcU1QvcmVjWXJQcm9kLmNzdlwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZGF0YUVUID0gYXdhaXQganNvbihcIi4uL2RhdGEvRVQvcHJvZEVULmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZGF0YUN1bWxFVCA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL0VUL2N1bWxQcm9kRVQuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59KTtcclxuZXhwb3J0IGNvbnN0IG1vRGF0YUVUID0gYXdhaXQganNvbihcIi4uL2RhdGEvRVQvZGF0YU1vbnRobHlFVC5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgYW5hbHl6ZURhdGFFVCA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL0VUL2FuYWx5emVFVC5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGFOTSA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL05NL3Byb2ROTS5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhO1xyXG59KTtcclxuZXhwb3J0IGNvbnN0IGRhdGFDdW1sTk0gPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9OTS9jdW1sUHJvZE5NLmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGFHQyA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL0dDL3Byb2RHQy5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhO1xyXG59KTtcclxuZXhwb3J0IGNvbnN0IGRhdGFDdW1sR0MgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9HQy9jdW1sUHJvZEdDLmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGFXVCA9IGF3YWl0IGpzb24oXCIuLi9kYXRhL1dUL3Byb2RXVC5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhO1xyXG59KTtcclxuZXhwb3J0IGNvbnN0IGRhdGFDdW1sV1QgPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9XVC9jdW1sUHJvZFdULmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGVjb24gPSBhd2FpdCBqc29uKFwiLi4vZGF0YS9lY29uL2Vjb25vbWljcy5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBkYXRhXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgcGF5b3V0ID0gYXdhaXQganNvbihcIi4uL2RhdGEvZWNvbi9wYXlvdXRzLmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcbmV4cG9ydCBjb25zdCBsZWdhY3lFY29uID0gYXdhaXQganNvbihcIi4uL2RhdGEvZWNvbi9sZWdhY3lFY29uLmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcbmV4cG9ydCBjb25zdCBwbDIzXzIyID0gYXdhaXQganNvbihcIi4uL2RhdGFcXFxcZWNvbi9wbGRhdGEuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRpb25zID0gYXdhaXQganNvbihcIi4uL2RhdGEvbWlzYy9mb3JtYXRpb25zLmpzb25cIikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aXZlV2VsbHMgPSAoKSA9PiB7XHJcbiAgICBsZXQgcmVnaW9uID0gc2Vzc2lvblN0b3JhZ2UucmVnaW9uXHJcbiAgICBsZXQgZGF0YSA9IGRhdGFTVDtcclxuICAgIGlmIChyZWdpb24gPT0gJ0VUJykgZGF0YSA9IGRhdGFFVDtcclxuICAgIGlmIChyZWdpb24gPT0gJ0dDJykgZGF0YSA9IGRhdGFHQztcclxuICAgIGlmIChyZWdpb24gPT0gJ1dUJykgZGF0YSA9IGRhdGFXVDtcclxuICAgIGlmIChyZWdpb24gPT0gJ05NJykgZGF0YSA9IGRhdGFOTTtcclxuXHJcbiAgICBjb25zdCBleGl0V2VsbCA9IGRhdGFbMF1bMF1cclxuICAgIGNvbnN0IHdlbGxzID0gbmV3IFNldCgpO1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB3ZWxsID0gZGF0YVtpXVswXTtcclxuICAgICAgICB3ZWxscy5hZGQod2VsbCk7XHJcbiAgICAgICAgaWYgKHdlbGwgPT09IGV4aXRXZWxsICYgaSAhPT0gMCkgYnJlYWs7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB3ZWxscztcclxufTtcclxuXHJcbi8vQ3JlYXRlcyBEcm9wZG93bi8vXHJcbmV4cG9ydCBjb25zdCBkcm9wZG93biA9IChpZCkgPT4ge1xyXG4gICAgbGV0IG1lbnUgPSBzZWxlY3QoaWQpO1xyXG4gICAgXHJcbiAgICBhY3RpdmVXZWxscygpLmZvckVhY2god2VsbCA9PiB7XHJcbiAgICAgICAgbWVudS5hcHBlbmQoXCJvcHRpb25cIilcclxuICAgICAgICAgICAgLnRleHQod2VsbClcclxuICAgICAgICAgICAgLnByb3BlcnR5KFwiVmFsdWVcIiwgd2VsbCk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBidWlsZFRhYmxlID0gKGFsbERhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdhbGxEYXRhJylcclxuICAgIGNvbnNvbGUubG9nKGFsbERhdGEpXHJcblxyXG4gICAgY29uc3QgdGJvZHkgPSBzZWxlY3QoXCJ0Ym9keVwiKTtcclxuICAgIHRib2R5Lmh0bWwoXCJcIik7XHJcbiAgICBhbGxEYXRhLmZvckVhY2goKHdlbGwpID0+IHtcclxuICAgICAgICBsZXQgcm93ID0gdGJvZHkuYXBwZW5kKFwidHJcIik7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh3ZWxsKS5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNlbGwgPSByb3cuYXBwZW5kKFwidGRcIik7XHJcbiAgICAgICAgICAgIGNlbGwudGV4dCh2YWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyRGF0YSA9IChkYXRhLCBkcm9wZG93bklkKSA9PiB7XHJcbiAgICBsZXQgcmVxV2VsbCA9IHNlbGVjdChkcm9wZG93bklkKS5wcm9wZXJ0eShcInZhbHVlXCIpO1xyXG5cclxuICAgIGlmIChyZXFXZWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEuZmlsdGVyKChyb3cpID0+IHJvd1swXSA9PSByZXFXZWxsKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZGF0YVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNvcnREYXRhID0gKGRhdGEsIHBvcykgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCB0ZW1wID0gWy4uLmRhdGFdO1xyXG4gICAgbGV0IHNvcnRlZDtcclxuICAgIHNvcnRlZCA9IHRlbXAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFWYWwgPSBhW3Bvc107XHJcbiAgICAgICAgY29uc3QgYlZhbCA9IGJbcG9zXTtcclxuICAgICAgICByZXR1cm4gYlZhbCAtIGFWYWw7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkVGFibGUoc29ydGVkKTtcclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/data.js\n");

/***/ }),

/***/ "./src/js/region.js":
/*!**************************!*\
  !*** ./src/js/region.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   monitorRegion: () => (/* binding */ monitorRegion)\n/* harmony export */ });\n$(document).ready(function () {\r\n    $(\"#header\").load(\"../src/pages/header.html\");\r\n});\r\n\r\n// When Region is clicked:\r\nfunction updateDropdownToggleText() {\r\n    sessionStorage.removeItem(\"siteSelection\"); // Remove well location\r\n    location.reload();\r\n};\r\nconst monitorRegion = () => {\r\n    if(sessionStorage.getItem('regionName')==null){\r\n        sessionStorage.setItem('regionName','South Texas')\r\n        sessionStorage.setItem('region','ST')\r\n    }\r\n\r\n    console.log(sessionStorage.getItem(\"region\"))\r\n    document.getElementById('currField').innerText = sessionStorage.getItem('regionName')\r\n    // Click event listeners\r\n    document.querySelectorAll('.dropdown-item').forEach(item => {\r\n        item.addEventListener('click', function() {\r\n            sessionStorage.setItem('region', this.id) // set 'region' to abbreviation\r\n            document.getElementById('currField').innerText = this.innerText; // \r\n            sessionStorage.setItem('regionName', this.innerText) // set 'regionName' to real \r\n            updateDropdownToggleText();\r\n        });\r\n    });\r\n};\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcmVnaW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2QtMS8uL3NyYy9qcy9yZWdpb24uanM/MzMzNyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI2hlYWRlclwiKS5sb2FkKFwiLi4vc3JjL3BhZ2VzL2hlYWRlci5odG1sXCIpO1xyXG59KTtcclxuXHJcbi8vIFdoZW4gUmVnaW9uIGlzIGNsaWNrZWQ6XHJcbmZ1bmN0aW9uIHVwZGF0ZURyb3Bkb3duVG9nZ2xlVGV4dCgpIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJzaXRlU2VsZWN0aW9uXCIpOyAvLyBSZW1vdmUgd2VsbCBsb2NhdGlvblxyXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBtb25pdG9yUmVnaW9uID0gKCkgPT4ge1xyXG4gICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmVnaW9uTmFtZScpPT1udWxsKXtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZWdpb25OYW1lJywnU291dGggVGV4YXMnKVxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JlZ2lvbicsJ1NUJylcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwicmVnaW9uXCIpKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJGaWVsZCcpLmlubmVyVGV4dCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JlZ2lvbk5hbWUnKVxyXG4gICAgLy8gQ2xpY2sgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24taXRlbScpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZWdpb24nLCB0aGlzLmlkKSAvLyBzZXQgJ3JlZ2lvbicgdG8gYWJicmV2aWF0aW9uXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyRmllbGQnKS5pbm5lclRleHQgPSB0aGlzLmlubmVyVGV4dDsgLy8gXHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JlZ2lvbk5hbWUnLCB0aGlzLmlubmVyVGV4dCkgLy8gc2V0ICdyZWdpb25OYW1lJyB0byByZWFsIFxyXG4gICAgICAgICAgICB1cGRhdGVEcm9wZG93blRvZ2dsZVRleHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/region.js\n");

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
/******/ 			"analyzeTable": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_d3_src_index_js"], () => (__webpack_require__("./src/js/analyzeTable.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;