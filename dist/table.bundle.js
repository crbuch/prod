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

/***/ "./src/js/layout.js":
/*!**************************!*\
  !*** ./src/js/layout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   layoutWbd: () => (/* binding */ layoutWbd),\n/* harmony export */   makeLayout: () => (/* binding */ makeLayout),\n/* harmony export */   makeTrace: () => (/* binding */ makeTrace)\n/* harmony export */ });\nconst makeTrace = (x, y, name, type=\"lines\", color, text, visible=true, dash) => ({\r\n    x,\r\n    y,\r\n    text,\r\n    name,\r\n    visible,\r\n    line: {\r\n        color,\r\n        dash\r\n    },\r\n    mode: type\r\n});\r\n\r\nconst makeLayout = (title, type, tickvals) => ({\r\n    title,\r\n    yaxis: {\r\n        type: type || \"linear\",\r\n        rangemode: \"tozero\",\r\n        autorange: true,\r\n        tickformat: \"f\",\r\n        tickvals,\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n    xaxis: {\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n});\r\n\r\nconst config = {\r\n    modeBarButtonsToRemove: [\r\n        \"sendDataToCloud\",\r\n        \"autoScale2d\",\r\n        \"hoverClosestCartesian\",\r\n        \"hoverCompareCartesian\",\r\n        \"lasso2d\",\r\n        \"zoomIn2d\",\r\n        \"zoomOut2d\",\r\n        \"toggleSpikelines\",\r\n    ],\r\n    displaylogo: false,\r\n    responsive: true,\r\n};\r\n\r\nconst layoutWbd = (max,min,minTVD,maxTVD,wellName) => ({\r\n    width: 1620,\r\n    height: 700,\r\n\r\n    margin: {\r\n        l: 0,\r\n        r: 0,\r\n        b: 0,\r\n        t: 0,\r\n    },\r\n\r\n    title: {\r\n        text: \"Drilling for \" + wellName + \", Dimmit County, TX\",\r\n        y: 0.98,\r\n    },\r\n\r\n    legend: {\r\n        x: 0.8,\r\n        y: 0.8,\r\n    },\r\n    scene: {\r\n        aspectmode: \"cube\",\r\n        xaxis: {\r\n            title: \"Easting\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n        yaxis: {\r\n            title: \"Northing\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#f0f1f2\",\r\n            showbackground: true,\r\n\r\n        },\r\n        zaxis: {\r\n            title: \"TVD\",\r\n            nticks: 5,\r\n            range: [minTVD, maxTVD],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n    },\r\n    \r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2QtMS8uL3NyYy9qcy9sYXlvdXQuanM/NmZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbWFrZVRyYWNlID0gKHgsIHksIG5hbWUsIHR5cGU9XCJsaW5lc1wiLCBjb2xvciwgdGV4dCwgdmlzaWJsZT10cnVlLCBkYXNoKSA9PiAoe1xyXG4gICAgeCxcclxuICAgIHksXHJcbiAgICB0ZXh0LFxyXG4gICAgbmFtZSxcclxuICAgIHZpc2libGUsXHJcbiAgICBsaW5lOiB7XHJcbiAgICAgICAgY29sb3IsXHJcbiAgICAgICAgZGFzaFxyXG4gICAgfSxcclxuICAgIG1vZGU6IHR5cGVcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZUxheW91dCA9ICh0aXRsZSwgdHlwZSwgdGlja3ZhbHMpID0+ICh7XHJcbiAgICB0aXRsZSxcclxuICAgIHlheGlzOiB7XHJcbiAgICAgICAgdHlwZTogdHlwZSB8fCBcImxpbmVhclwiLFxyXG4gICAgICAgIHJhbmdlbW9kZTogXCJ0b3plcm9cIixcclxuICAgICAgICBhdXRvcmFuZ2U6IHRydWUsXHJcbiAgICAgICAgdGlja2Zvcm1hdDogXCJmXCIsXHJcbiAgICAgICAgdGlja3ZhbHMsXHJcbiAgICAgICAgZ3JpZGNvbG9yOiBcIiNkYmRiZGJcIixcclxuICAgIH0sXHJcbiAgICB4YXhpczoge1xyXG4gICAgICAgIGdyaWRjb2xvcjogXCIjZGJkYmRiXCIsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBtb2RlQmFyQnV0dG9uc1RvUmVtb3ZlOiBbXHJcbiAgICAgICAgXCJzZW5kRGF0YVRvQ2xvdWRcIixcclxuICAgICAgICBcImF1dG9TY2FsZTJkXCIsXHJcbiAgICAgICAgXCJob3ZlckNsb3Nlc3RDYXJ0ZXNpYW5cIixcclxuICAgICAgICBcImhvdmVyQ29tcGFyZUNhcnRlc2lhblwiLFxyXG4gICAgICAgIFwibGFzc28yZFwiLFxyXG4gICAgICAgIFwiem9vbUluMmRcIixcclxuICAgICAgICBcInpvb21PdXQyZFwiLFxyXG4gICAgICAgIFwidG9nZ2xlU3Bpa2VsaW5lc1wiLFxyXG4gICAgXSxcclxuICAgIGRpc3BsYXlsb2dvOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGF5b3V0V2JkID0gKG1heCxtaW4sbWluVFZELG1heFRWRCx3ZWxsTmFtZSkgPT4gKHtcclxuICAgIHdpZHRoOiAxNjIwLFxyXG4gICAgaGVpZ2h0OiA3MDAsXHJcblxyXG4gICAgbWFyZ2luOiB7XHJcbiAgICAgICAgbDogMCxcclxuICAgICAgICByOiAwLFxyXG4gICAgICAgIGI6IDAsXHJcbiAgICAgICAgdDogMCxcclxuICAgIH0sXHJcblxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICB0ZXh0OiBcIkRyaWxsaW5nIGZvciBcIiArIHdlbGxOYW1lICsgXCIsIERpbW1pdCBDb3VudHksIFRYXCIsXHJcbiAgICAgICAgeTogMC45OCxcclxuICAgIH0sXHJcblxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgICAgeDogMC44LFxyXG4gICAgICAgIHk6IDAuOCxcclxuICAgIH0sXHJcbiAgICBzY2VuZToge1xyXG4gICAgICAgIGFzcGVjdG1vZGU6IFwiY3ViZVwiLFxyXG4gICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkVhc3RpbmdcIixcclxuICAgICAgICAgICAgbnRpY2tzOiA4LFxyXG4gICAgICAgICAgICByYW5nZTogW21heCwgbWluXSxcclxuICAgICAgICAgICAgZ3JpZGNvbG9yOiBcIiM4YThhOGFcIixcclxuICAgICAgICAgICAgdGlja2NvbG9yOiBcIiMwNTA1MDVcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZGNvbG9yOiBcIiNlZGVkZWRcIixcclxuICAgICAgICAgICAgc2hvd2JhY2tncm91bmQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJOb3J0aGluZ1wiLFxyXG4gICAgICAgICAgICBudGlja3M6IDgsXHJcbiAgICAgICAgICAgIHJhbmdlOiBbbWF4LCBtaW5dLFxyXG4gICAgICAgICAgICBncmlkY29sb3I6IFwiIzhhOGE4YVwiLFxyXG4gICAgICAgICAgICB0aWNrY29sb3I6IFwiIzA1MDUwNVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kY29sb3I6IFwiI2YwZjFmMlwiLFxyXG4gICAgICAgICAgICBzaG93YmFja2dyb3VuZDogdHJ1ZSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB6YXhpczoge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJUVkRcIixcclxuICAgICAgICAgICAgbnRpY2tzOiA1LFxyXG4gICAgICAgICAgICByYW5nZTogW21pblRWRCwgbWF4VFZEXSxcclxuICAgICAgICAgICAgZ3JpZGNvbG9yOiBcIiM4YThhOGFcIixcclxuICAgICAgICAgICAgdGlja2NvbG9yOiBcIiMwNTA1MDVcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZGNvbG9yOiBcIiNlZGVkZWRcIixcclxuICAgICAgICAgICAgc2hvd2JhY2tncm91bmQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/layout.js\n");

/***/ }),

/***/ "./src/js/table.js":
/*!*************************!*\
  !*** ./src/js/table.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data__WEBPACK_IMPORTED_MODULE_3__]);\n_data__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_index__WEBPACK_IMPORTED_MODULE_1__.monitorAuthState)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_2__.monitorRegion)();\r\n\r\nlet region = sessionStorage.getItem('region');\r\nconst dropdownId = '#siteFilter';\r\n\r\nconst formatData = () => {\r\n  let tableData = _data__WEBPACK_IMPORTED_MODULE_3__.dataCumlET;\r\n  let payData;\r\n\r\n  if (region != \"et\") {\r\n    tableData = _data__WEBPACK_IMPORTED_MODULE_3__.dataCuml\r\n    payData = _data__WEBPACK_IMPORTED_MODULE_3__.payout\r\n\r\n    payData.forEach((pay) => {\r\n      tableData.forEach((well) => {\r\n        if (well[0] == pay[\"Well Name\"]) {\r\n          let rounded = Math.round(pay[\"% Payout\"]*100)\r\n          well.push(rounded);\r\n        }\r\n      });\r\n    });\r\n  };\r\n  \r\n  //switch places of prodData[3] and prodData[4]\r\n  tableData.forEach((well) => {\r\n    let temp = well[4];\r\n    well[4] = well[5];\r\n    well[5] = temp;\r\n  });\r\n  // tableData.forEach((well) => {\r\n  //   well[4] = Math.round(well[4]*100);\r\n  // });\r\n\r\n  //remove archived wells\r\n  return tableData.filter(val => (0,_data__WEBPACK_IMPORTED_MODULE_3__.activeWells)().has(val[0]));\r\n};\r\n\r\nconst displayPlot = (selected) => {\r\n  // Read Files, select wells with selected name\r\n  let dataMonthly = _data__WEBPACK_IMPORTED_MODULE_3__.moDataST.filter(el => el[0] == selected);\r\n  let dataDaily = _data__WEBPACK_IMPORTED_MODULE_3__.dataST.filter(el => el[0] == selected);\r\n  // Create arrays of desired columns\r\n  const oilMo = dataMonthly.map(el => el[1]);\r\n  const dateMo = dataMonthly.map(el => el[6]);\r\n  const dateDa = dataDaily.map(el => el[1]).reverse();\r\n  const cumlMoOil = oilMo.reduce((acc, val, idx) => (idx === 0 ? acc.concat(val) : acc.concat(val + acc[idx - 1])), []);\r\n  const oilDaily = dataDaily.map(el => el[2]).reverse();\r\n  const cumlDaOil = oilDaily.reduce((acc, val, idx) => (idx === 0 ? acc.concat(val) : acc.concat(val + acc[idx - 1])), []);\r\n  const formattedDateMo = dateMo.map(dateString => {\r\n    const date = new Date(dateString);\r\n    const options = { month: 'long', year: 'numeric' };\r\n    return date.toLocaleDateString('en-US', options);\r\n  });\r\n\r\n  // Create traces for graphs\r\n  const traceCumOil = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(\r\n    dateMo,\r\n    cumlMoOil,\r\n    \"Cuml Data\",\r\n    \"lines\",\r\n    \"green\"\r\n  );\r\n  const traceDailyProdVSCum = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(\r\n    cumlDaOil,\r\n    oilDaily,\r\n    \"hi\",\r\n    \"line\",\r\n    \"green\",\r\n    dateDa\r\n  );\r\n  const traceMoProdVSCum = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(\r\n    cumlMoOil,\r\n    oilMo,\r\n    \"hello\",\r\n    \"line\",\r\n    \"green\",\r\n    formattedDateMo\r\n  );\r\n\r\n  // Create Different Keys\r\n  const plotContainers = ['cumlOilCurve', 'dailyProdVsCumCurve', 'moProdVsCumCurve'];\r\n  // Traces to Use\r\n  let traceArrays = [\r\n    [traceCumOil],\r\n    [traceDailyProdVSCum],\r\n    [traceMoProdVSCum]\r\n  ];\r\n\r\n  // Loop and make the plots, contain keys found in plotContainers^^\r\n  plotContainers.forEach((container, i) => {\r\n    // SETS SCALE TO LOG FOR THE Y-AXIS IF (i == [index in plotContainers])\r\n    let scale = (i == 2) ? \"log\" : null;\r\n    // CREATES LAYOUT, INCLUDES TITLE, SCALE, AND TICK VALUES\r\n    const layout = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeLayout)(['Cumulative Oil vs Time', 'Cumulative Oil vs Daily Oil Production', 'Cumulative Oil vs Monthly Oil Production'][i], scale, \r\n                              (scale === 'log') ? [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 15000] : null);\r\n    Plotly.newPlot(container, traceArrays[i], layout);\r\n  });\r\n}\r\n\r\ndisplayPlot(\"Aaron #1\");\r\n//main\r\nconst tableData = formatData();\r\n\r\n//sort by pay: pos=4 by prod: pos=1\r\ndocument.getElementById('Payfilter').onclick = function(){\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.sortData)(tableData,4)\r\n};\r\n\r\ndocument.getElementById('Prodfilter').onclick = function(){\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.sortData)(tableData,1)\r\n};\r\n\r\n(0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).on(\"change\", () => {\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.buildTable)((0,_data__WEBPACK_IMPORTED_MODULE_3__.filterData)(tableData,dropdownId));\r\n  displayPlot((0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).node().value);\r\n});\r\n\r\n\r\ndocument.getElementById('clearFilter').onclick = function () {\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.buildTable)(tableData);\r\n};\r\n\r\nwindow.onload = function () {\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.buildTable)(tableData);\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.dropdown)(dropdownId);  \r\n}();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGFibGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBDO0FBQ0Y7QUFDZ0U7QUFDNUU7QUFDYztBQUNPO0FBQ2pEO0FBQ0Esd0RBQWdCO0FBQ2hCLHNEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2Q0FBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkNBQVE7QUFDeEIsY0FBYyx5Q0FBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsaUNBQWlDLGtEQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJDQUFRO0FBQzVCLGtCQUFrQix5Q0FBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQixrREFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0RBQVM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0RBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbURBQVU7QUFDN0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrQ0FBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0NBQVE7QUFDVjtBQUNBO0FBQ0EsMENBQU07QUFDTixFQUFFLGlEQUFVLENBQUMsaURBQVU7QUFDdkIsY0FBYywwQ0FBTTtBQUNwQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaURBQVU7QUFDWixFQUFFLCtDQUFRO0FBQ1YsQ0FBQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZC0xLy4vc3JjL2pzL3RhYmxlLmpzP2NmMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9uaXRvckF1dGhTdGF0ZSB9IGZyb20gJy4vaW5kZXgnXHJcbmltcG9ydCB7IG1vbml0b3JSZWdpb24gfSBmcm9tICcuL3JlZ2lvbidcclxuaW1wb3J0IHsgZGF0YUN1bWwsZGF0YUN1bWxFVCxwYXlvdXQsYWN0aXZlV2VsbHMsc29ydERhdGEsYnVpbGRUYWJsZSxkcm9wZG93bixmaWx0ZXJEYXRhIH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnZDMnO1xyXG5pbXBvcnQgeyBtb0RhdGFTVCwgZGF0YVNUIH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHsgbWFrZUxheW91dCwgbWFrZVRyYWNlIH0gZnJvbSAnLi9sYXlvdXQnO1xyXG5cclxubW9uaXRvckF1dGhTdGF0ZSgpO1xyXG5tb25pdG9yUmVnaW9uKCk7XHJcblxyXG5sZXQgcmVnaW9uID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmVnaW9uJyk7XHJcbmNvbnN0IGRyb3Bkb3duSWQgPSAnI3NpdGVGaWx0ZXInO1xyXG5cclxuY29uc3QgZm9ybWF0RGF0YSA9ICgpID0+IHtcclxuICBsZXQgdGFibGVEYXRhID0gZGF0YUN1bWxFVDtcclxuICBsZXQgcGF5RGF0YTtcclxuXHJcbiAgaWYgKHJlZ2lvbiAhPSBcImV0XCIpIHtcclxuICAgIHRhYmxlRGF0YSA9IGRhdGFDdW1sXHJcbiAgICBwYXlEYXRhID0gcGF5b3V0XHJcblxyXG4gICAgcGF5RGF0YS5mb3JFYWNoKChwYXkpID0+IHtcclxuICAgICAgdGFibGVEYXRhLmZvckVhY2goKHdlbGwpID0+IHtcclxuICAgICAgICBpZiAod2VsbFswXSA9PSBwYXlbXCJXZWxsIE5hbWVcIl0pIHtcclxuICAgICAgICAgIGxldCByb3VuZGVkID0gTWF0aC5yb3VuZChwYXlbXCIlIFBheW91dFwiXSoxMDApXHJcbiAgICAgICAgICB3ZWxsLnB1c2gocm91bmRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcbiAgLy9zd2l0Y2ggcGxhY2VzIG9mIHByb2REYXRhWzNdIGFuZCBwcm9kRGF0YVs0XVxyXG4gIHRhYmxlRGF0YS5mb3JFYWNoKCh3ZWxsKSA9PiB7XHJcbiAgICBsZXQgdGVtcCA9IHdlbGxbNF07XHJcbiAgICB3ZWxsWzRdID0gd2VsbFs1XTtcclxuICAgIHdlbGxbNV0gPSB0ZW1wO1xyXG4gIH0pO1xyXG4gIC8vIHRhYmxlRGF0YS5mb3JFYWNoKCh3ZWxsKSA9PiB7XHJcbiAgLy8gICB3ZWxsWzRdID0gTWF0aC5yb3VuZCh3ZWxsWzRdKjEwMCk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vcmVtb3ZlIGFyY2hpdmVkIHdlbGxzXHJcbiAgcmV0dXJuIHRhYmxlRGF0YS5maWx0ZXIodmFsID0+IGFjdGl2ZVdlbGxzKCkuaGFzKHZhbFswXSkpO1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheVBsb3QgPSAoc2VsZWN0ZWQpID0+IHtcclxuICAvLyBSZWFkIEZpbGVzLCBzZWxlY3Qgd2VsbHMgd2l0aCBzZWxlY3RlZCBuYW1lXHJcbiAgbGV0IGRhdGFNb250aGx5ID0gbW9EYXRhU1QuZmlsdGVyKGVsID0+IGVsWzBdID09IHNlbGVjdGVkKTtcclxuICBsZXQgZGF0YURhaWx5ID0gZGF0YVNULmZpbHRlcihlbCA9PiBlbFswXSA9PSBzZWxlY3RlZCk7XHJcbiAgLy8gQ3JlYXRlIGFycmF5cyBvZiBkZXNpcmVkIGNvbHVtbnNcclxuICBjb25zdCBvaWxNbyA9IGRhdGFNb250aGx5Lm1hcChlbCA9PiBlbFsxXSk7XHJcbiAgY29uc3QgZGF0ZU1vID0gZGF0YU1vbnRobHkubWFwKGVsID0+IGVsWzZdKTtcclxuICBjb25zdCBkYXRlRGEgPSBkYXRhRGFpbHkubWFwKGVsID0+IGVsWzFdKS5yZXZlcnNlKCk7XHJcbiAgY29uc3QgY3VtbE1vT2lsID0gb2lsTW8ucmVkdWNlKChhY2MsIHZhbCwgaWR4KSA9PiAoaWR4ID09PSAwID8gYWNjLmNvbmNhdCh2YWwpIDogYWNjLmNvbmNhdCh2YWwgKyBhY2NbaWR4IC0gMV0pKSwgW10pO1xyXG4gIGNvbnN0IG9pbERhaWx5ID0gZGF0YURhaWx5Lm1hcChlbCA9PiBlbFsyXSkucmV2ZXJzZSgpO1xyXG4gIGNvbnN0IGN1bWxEYU9pbCA9IG9pbERhaWx5LnJlZHVjZSgoYWNjLCB2YWwsIGlkeCkgPT4gKGlkeCA9PT0gMCA/IGFjYy5jb25jYXQodmFsKSA6IGFjYy5jb25jYXQodmFsICsgYWNjW2lkeCAtIDFdKSksIFtdKTtcclxuICBjb25zdCBmb3JtYXR0ZWREYXRlTW8gPSBkYXRlTW8ubWFwKGRhdGVTdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgbW9udGg6ICdsb25nJywgeWVhcjogJ251bWVyaWMnIH07XHJcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgb3B0aW9ucyk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIENyZWF0ZSB0cmFjZXMgZm9yIGdyYXBoc1xyXG4gIGNvbnN0IHRyYWNlQ3VtT2lsID0gbWFrZVRyYWNlKFxyXG4gICAgZGF0ZU1vLFxyXG4gICAgY3VtbE1vT2lsLFxyXG4gICAgXCJDdW1sIERhdGFcIixcclxuICAgIFwibGluZXNcIixcclxuICAgIFwiZ3JlZW5cIlxyXG4gICk7XHJcbiAgY29uc3QgdHJhY2VEYWlseVByb2RWU0N1bSA9IG1ha2VUcmFjZShcclxuICAgIGN1bWxEYU9pbCxcclxuICAgIG9pbERhaWx5LFxyXG4gICAgXCJoaVwiLFxyXG4gICAgXCJsaW5lXCIsXHJcbiAgICBcImdyZWVuXCIsXHJcbiAgICBkYXRlRGFcclxuICApO1xyXG4gIGNvbnN0IHRyYWNlTW9Qcm9kVlNDdW0gPSBtYWtlVHJhY2UoXHJcbiAgICBjdW1sTW9PaWwsXHJcbiAgICBvaWxNbyxcclxuICAgIFwiaGVsbG9cIixcclxuICAgIFwibGluZVwiLFxyXG4gICAgXCJncmVlblwiLFxyXG4gICAgZm9ybWF0dGVkRGF0ZU1vXHJcbiAgKTtcclxuXHJcbiAgLy8gQ3JlYXRlIERpZmZlcmVudCBLZXlzXHJcbiAgY29uc3QgcGxvdENvbnRhaW5lcnMgPSBbJ2N1bWxPaWxDdXJ2ZScsICdkYWlseVByb2RWc0N1bUN1cnZlJywgJ21vUHJvZFZzQ3VtQ3VydmUnXTtcclxuICAvLyBUcmFjZXMgdG8gVXNlXHJcbiAgbGV0IHRyYWNlQXJyYXlzID0gW1xyXG4gICAgW3RyYWNlQ3VtT2lsXSxcclxuICAgIFt0cmFjZURhaWx5UHJvZFZTQ3VtXSxcclxuICAgIFt0cmFjZU1vUHJvZFZTQ3VtXVxyXG4gIF07XHJcblxyXG4gIC8vIExvb3AgYW5kIG1ha2UgdGhlIHBsb3RzLCBjb250YWluIGtleXMgZm91bmQgaW4gcGxvdENvbnRhaW5lcnNeXlxyXG4gIHBsb3RDb250YWluZXJzLmZvckVhY2goKGNvbnRhaW5lciwgaSkgPT4ge1xyXG4gICAgLy8gU0VUUyBTQ0FMRSBUTyBMT0cgRk9SIFRIRSBZLUFYSVMgSUYgKGkgPT0gW2luZGV4IGluIHBsb3RDb250YWluZXJzXSlcclxuICAgIGxldCBzY2FsZSA9IChpID09IDIpID8gXCJsb2dcIiA6IG51bGw7XHJcbiAgICAvLyBDUkVBVEVTIExBWU9VVCwgSU5DTFVERVMgVElUTEUsIFNDQUxFLCBBTkQgVElDSyBWQUxVRVNcclxuICAgIGNvbnN0IGxheW91dCA9IG1ha2VMYXlvdXQoWydDdW11bGF0aXZlIE9pbCB2cyBUaW1lJywgJ0N1bXVsYXRpdmUgT2lsIHZzIERhaWx5IE9pbCBQcm9kdWN0aW9uJywgJ0N1bXVsYXRpdmUgT2lsIHZzIE1vbnRobHkgT2lsIFByb2R1Y3Rpb24nXVtpXSwgc2NhbGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2NhbGUgPT09ICdsb2cnKSA/IFsxLCA1LCAxMCwgNTAsIDEwMCwgNTAwLCAxMDAwLCA1MDAwLCAxMDAwMCwgMTUwMDBdIDogbnVsbCk7XHJcbiAgICBQbG90bHkubmV3UGxvdChjb250YWluZXIsIHRyYWNlQXJyYXlzW2ldLCBsYXlvdXQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5kaXNwbGF5UGxvdChcIkFhcm9uICMxXCIpO1xyXG4vL21haW5cclxuY29uc3QgdGFibGVEYXRhID0gZm9ybWF0RGF0YSgpO1xyXG5cclxuLy9zb3J0IGJ5IHBheTogcG9zPTQgYnkgcHJvZDogcG9zPTFcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1BheWZpbHRlcicpLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xyXG4gIHNvcnREYXRhKHRhYmxlRGF0YSw0KVxyXG59O1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Byb2RmaWx0ZXInKS5vbmNsaWNrID0gZnVuY3Rpb24oKXtcclxuICBzb3J0RGF0YSh0YWJsZURhdGEsMSlcclxufTtcclxuXHJcbnNlbGVjdChkcm9wZG93bklkKS5vbihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgYnVpbGRUYWJsZShmaWx0ZXJEYXRhKHRhYmxlRGF0YSxkcm9wZG93bklkKSk7XHJcbiAgZGlzcGxheVBsb3Qoc2VsZWN0KGRyb3Bkb3duSWQpLm5vZGUoKS52YWx1ZSk7XHJcbn0pO1xyXG5cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhckZpbHRlcicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgYnVpbGRUYWJsZSh0YWJsZURhdGEpO1xyXG59O1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICBidWlsZFRhYmxlKHRhYmxlRGF0YSk7XHJcbiAgZHJvcGRvd24oZHJvcGRvd25JZCk7ICBcclxufSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/table.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-d0574a","vendors-node_modules_d3_src_index_js","src_js_data_js-src_js_index_js-src_js_region_js"], () => (__webpack_require__("./src/js/table.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;