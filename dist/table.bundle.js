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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   layoutWbd: () => (/* binding */ layoutWbd),\n/* harmony export */   makeLayout: () => (/* binding */ makeLayout),\n/* harmony export */   makeTrace: () => (/* binding */ makeTrace)\n/* harmony export */ });\nconst makeTrace = (x, y, name, type=\"lines\", color, text, visible=true) => ({\r\n    x,\r\n    y,\r\n    text,\r\n    name,\r\n    visible,\r\n    line: {\r\n        color,\r\n    },\r\n    mode: type\r\n});\r\n\r\nconst makeLayout = (title, type, tickvals) => ({\r\n    title,\r\n    yaxis: {\r\n        type: type || \"linear\",\r\n        rangemode: \"tozero\",\r\n        autorange: true,\r\n        tickformat: \"f\",\r\n        tickvals,\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n    xaxis: {\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n});\r\n\r\nconst config = {\r\n    modeBarButtonsToRemove: [\r\n        \"sendDataToCloud\",\r\n        \"autoScale2d\",\r\n        \"hoverClosestCartesian\",\r\n        \"hoverCompareCartesian\",\r\n        \"lasso2d\",\r\n        \"zoomIn2d\",\r\n        \"zoomOut2d\",\r\n        \"toggleSpikelines\",\r\n    ],\r\n    displaylogo: false,\r\n    responsive: true,\r\n};\r\n\r\nconst layoutWbd = (max,min,minTVD,wellName) => ({\r\n    width: 1620,\r\n    height: 700,\r\n\r\n    margin: {\r\n        l: 0,\r\n        r: 0,\r\n        b: 0,\r\n        t: 0,\r\n    },\r\n\r\n    title: {\r\n        text: \"Drilling for \" + wellName + \", Dimmit County, TX\",\r\n        y: 0.98,\r\n    },\r\n\r\n    legend: {\r\n        x: 0.8,\r\n        y: 0.8,\r\n    },\r\n    scene: {\r\n        aspectmode: \"cube\",\r\n        xaxis: {\r\n            title: \"Easting\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n        yaxis: {\r\n            title: \"Northing\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#f0f1f2\",\r\n            showbackground: true,\r\n\r\n        },\r\n        zaxis: {\r\n            title: \"TVD\",\r\n            nticks: 5,\r\n            range: [minTVD, -3000],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n    },\r\n    \r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvbGF5b3V0LmpzPzZmZWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG1ha2VUcmFjZSA9ICh4LCB5LCBuYW1lLCB0eXBlPVwibGluZXNcIiwgY29sb3IsIHRleHQsIHZpc2libGU9dHJ1ZSkgPT4gKHtcclxuICAgIHgsXHJcbiAgICB5LFxyXG4gICAgdGV4dCxcclxuICAgIG5hbWUsXHJcbiAgICB2aXNpYmxlLFxyXG4gICAgbGluZToge1xyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgfSxcclxuICAgIG1vZGU6IHR5cGVcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZUxheW91dCA9ICh0aXRsZSwgdHlwZSwgdGlja3ZhbHMpID0+ICh7XHJcbiAgICB0aXRsZSxcclxuICAgIHlheGlzOiB7XHJcbiAgICAgICAgdHlwZTogdHlwZSB8fCBcImxpbmVhclwiLFxyXG4gICAgICAgIHJhbmdlbW9kZTogXCJ0b3plcm9cIixcclxuICAgICAgICBhdXRvcmFuZ2U6IHRydWUsXHJcbiAgICAgICAgdGlja2Zvcm1hdDogXCJmXCIsXHJcbiAgICAgICAgdGlja3ZhbHMsXHJcbiAgICAgICAgZ3JpZGNvbG9yOiBcIiNkYmRiZGJcIixcclxuICAgIH0sXHJcbiAgICB4YXhpczoge1xyXG4gICAgICAgIGdyaWRjb2xvcjogXCIjZGJkYmRiXCIsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBtb2RlQmFyQnV0dG9uc1RvUmVtb3ZlOiBbXHJcbiAgICAgICAgXCJzZW5kRGF0YVRvQ2xvdWRcIixcclxuICAgICAgICBcImF1dG9TY2FsZTJkXCIsXHJcbiAgICAgICAgXCJob3ZlckNsb3Nlc3RDYXJ0ZXNpYW5cIixcclxuICAgICAgICBcImhvdmVyQ29tcGFyZUNhcnRlc2lhblwiLFxyXG4gICAgICAgIFwibGFzc28yZFwiLFxyXG4gICAgICAgIFwiem9vbUluMmRcIixcclxuICAgICAgICBcInpvb21PdXQyZFwiLFxyXG4gICAgICAgIFwidG9nZ2xlU3Bpa2VsaW5lc1wiLFxyXG4gICAgXSxcclxuICAgIGRpc3BsYXlsb2dvOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGF5b3V0V2JkID0gKG1heCxtaW4sbWluVFZELHdlbGxOYW1lKSA9PiAoe1xyXG4gICAgd2lkdGg6IDE2MjAsXHJcbiAgICBoZWlnaHQ6IDcwMCxcclxuXHJcbiAgICBtYXJnaW46IHtcclxuICAgICAgICBsOiAwLFxyXG4gICAgICAgIHI6IDAsXHJcbiAgICAgICAgYjogMCxcclxuICAgICAgICB0OiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHRleHQ6IFwiRHJpbGxpbmcgZm9yIFwiICsgd2VsbE5hbWUgKyBcIiwgRGltbWl0IENvdW50eSwgVFhcIixcclxuICAgICAgICB5OiAwLjk4LFxyXG4gICAgfSxcclxuXHJcbiAgICBsZWdlbmQ6IHtcclxuICAgICAgICB4OiAwLjgsXHJcbiAgICAgICAgeTogMC44LFxyXG4gICAgfSxcclxuICAgIHNjZW5lOiB7XHJcbiAgICAgICAgYXNwZWN0bW9kZTogXCJjdWJlXCIsXHJcbiAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiRWFzdGluZ1wiLFxyXG4gICAgICAgICAgICBudGlja3M6IDgsXHJcbiAgICAgICAgICAgIHJhbmdlOiBbbWF4LCBtaW5dLFxyXG4gICAgICAgICAgICBncmlkY29sb3I6IFwiIzhhOGE4YVwiLFxyXG4gICAgICAgICAgICB0aWNrY29sb3I6IFwiIzA1MDUwNVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kY29sb3I6IFwiI2VkZWRlZFwiLFxyXG4gICAgICAgICAgICBzaG93YmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk5vcnRoaW5nXCIsXHJcbiAgICAgICAgICAgIG50aWNrczogOCxcclxuICAgICAgICAgICAgcmFuZ2U6IFttYXgsIG1pbl0sXHJcbiAgICAgICAgICAgIGdyaWRjb2xvcjogXCIjOGE4YThhXCIsXHJcbiAgICAgICAgICAgIHRpY2tjb2xvcjogXCIjMDUwNTA1XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRjb2xvcjogXCIjZjBmMWYyXCIsXHJcbiAgICAgICAgICAgIHNob3diYWNrZ3JvdW5kOiB0cnVlLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHpheGlzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlRWRFwiLFxyXG4gICAgICAgICAgICBudGlja3M6IDUsXHJcbiAgICAgICAgICAgIHJhbmdlOiBbbWluVFZELCAtMzAwMF0sXHJcbiAgICAgICAgICAgIGdyaWRjb2xvcjogXCIjOGE4YThhXCIsXHJcbiAgICAgICAgICAgIHRpY2tjb2xvcjogXCIjMDUwNTA1XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRjb2xvcjogXCIjZWRlZGVkXCIsXHJcbiAgICAgICAgICAgIHNob3diYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/layout.js\n");

/***/ }),

/***/ "./src/js/table.js":
/*!*************************!*\
  !*** ./src/js/table.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data__WEBPACK_IMPORTED_MODULE_3__]);\n_data__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_index__WEBPACK_IMPORTED_MODULE_1__.monitorAuthState)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_2__.monitorRegion)();\r\n\r\nlet region = sessionStorage.getItem('region');\r\nconst dropdownId = '#siteFilter';\r\n\r\n\r\nconst formatData = () => {\r\n  let tableData = _data__WEBPACK_IMPORTED_MODULE_3__.dataCumlET;\r\n  let payData;\r\n\r\n  if (region != \"et\") {\r\n    tableData = _data__WEBPACK_IMPORTED_MODULE_3__.dataCuml\r\n    payData = _data__WEBPACK_IMPORTED_MODULE_3__.payout\r\n\r\n    payData.forEach((pay) => {\r\n      tableData.forEach((well) => {\r\n        if (well[0] == pay[\"Well Name\"]) {\r\n          well.push(pay[\"% Payout\"]);\r\n        }\r\n      });\r\n    });\r\n  };\r\n  \r\n  //switch places of prodData[3] and prodData[4]\r\n  tableData.forEach((well) => {\r\n    let temp = well[4];\r\n    well[4] = well[5];\r\n    well[5] = temp;\r\n  });\r\n  tableData.forEach((well) => {\r\n    well[4] = 100 * well[4];\r\n    well[4] = Number(well[4]).toFixed(2);\r\n  });\r\n\r\n  //remove archived wells\r\n  return tableData.filter(val => (0,_data__WEBPACK_IMPORTED_MODULE_3__.activeWells)().has(val[0]));\r\n};\r\n\r\nconst displayPlot = (selected) => {\r\n  let data = _data__WEBPACK_IMPORTED_MODULE_3__.moDataST.filter(el => el[0] == selected);\r\n  const oil = data.map(el => el[1]);\r\n  const date = data.map(el => el[6]);\r\n  const cumlMoOil = oil.reduce((acc, val, idx) => (idx === 0 ? acc.concat(val) : acc.concat(val + acc[idx - 1])), []);\r\n\r\n  const trace = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(date,cumlMoOil,\"Cuml Data\",\"lines\",\"green\",null);\r\n  const layout = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeLayout)(\"Cumlative Oil vs Time\");\r\n  Plotly.newPlot('cumlOil',[trace],layout);\r\n}\r\n\r\ndisplayPlot(\"Aaron #1\");\r\n//main\r\nconst tableData = formatData();\r\n\r\n//sort by pay: pos=4 by prod: pos=1\r\ndocument.getElementById('Payfilter').onclick = function(){\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.sortData)(tableData,4)\r\n};\r\n\r\ndocument.getElementById('Prodfilter').onclick = function(){\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.sortData)(tableData,1)\r\n};\r\n\r\n(0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).on(\"change\", () => {\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.buildTable)((0,_data__WEBPACK_IMPORTED_MODULE_3__.filterData)(tableData,dropdownId));\r\n  displayPlot((0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).node().value);\r\n});\r\n\r\n\r\ndocument.getElementById('clearFilter').onclick = function () {\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.buildTable)(tableData);\r\n};\r\n\r\nwindow.onload = function () {\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.buildTable)(tableData);\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_3__.dropdown)(dropdownId);  \r\n}();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGFibGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBDO0FBQ0Y7QUFDZ0U7QUFDNUU7QUFDTTtBQUNlO0FBQ2pEO0FBQ0Esd0RBQWdCO0FBQ2hCLHNEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZDQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyQ0FBUTtBQUN4QixjQUFjLHlDQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBaUMsa0RBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsYUFBYSwyQ0FBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrREFBUztBQUN6QixpQkFBaUIsbURBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrQ0FBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0NBQVE7QUFDVjtBQUNBO0FBQ0EsMENBQU07QUFDTixFQUFFLGlEQUFVLENBQUMsaURBQVU7QUFDdkIsY0FBYywwQ0FBTTtBQUNwQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaURBQVU7QUFDWixFQUFFLCtDQUFRO0FBQ1YsQ0FBQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZC0xLy4vc3JjL2pzL3RhYmxlLmpzP2NmMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9uaXRvckF1dGhTdGF0ZSB9IGZyb20gJy4vaW5kZXgnXHJcbmltcG9ydCB7IG1vbml0b3JSZWdpb24gfSBmcm9tICcuL3JlZ2lvbidcclxuaW1wb3J0IHsgZGF0YUN1bWwsZGF0YUN1bWxFVCxwYXlvdXQsYWN0aXZlV2VsbHMsc29ydERhdGEsYnVpbGRUYWJsZSxkcm9wZG93bixmaWx0ZXJEYXRhIH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnZDMnO1xyXG5pbXBvcnQgeyBtb0RhdGFTVCB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCB7IG1ha2VMYXlvdXQsIG1ha2VUcmFjZSB9IGZyb20gJy4vbGF5b3V0JztcclxuXHJcbm1vbml0b3JBdXRoU3RhdGUoKTtcclxubW9uaXRvclJlZ2lvbigpO1xyXG5cclxubGV0IHJlZ2lvbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JlZ2lvbicpO1xyXG5jb25zdCBkcm9wZG93bklkID0gJyNzaXRlRmlsdGVyJztcclxuXHJcblxyXG5jb25zdCBmb3JtYXREYXRhID0gKCkgPT4ge1xyXG4gIGxldCB0YWJsZURhdGEgPSBkYXRhQ3VtbEVUO1xyXG4gIGxldCBwYXlEYXRhO1xyXG5cclxuICBpZiAocmVnaW9uICE9IFwiZXRcIikge1xyXG4gICAgdGFibGVEYXRhID0gZGF0YUN1bWxcclxuICAgIHBheURhdGEgPSBwYXlvdXRcclxuXHJcbiAgICBwYXlEYXRhLmZvckVhY2goKHBheSkgPT4ge1xyXG4gICAgICB0YWJsZURhdGEuZm9yRWFjaCgod2VsbCkgPT4ge1xyXG4gICAgICAgIGlmICh3ZWxsWzBdID09IHBheVtcIldlbGwgTmFtZVwiXSkge1xyXG4gICAgICAgICAgd2VsbC5wdXNoKHBheVtcIiUgUGF5b3V0XCJdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBcclxuICAvL3N3aXRjaCBwbGFjZXMgb2YgcHJvZERhdGFbM10gYW5kIHByb2REYXRhWzRdXHJcbiAgdGFibGVEYXRhLmZvckVhY2goKHdlbGwpID0+IHtcclxuICAgIGxldCB0ZW1wID0gd2VsbFs0XTtcclxuICAgIHdlbGxbNF0gPSB3ZWxsWzVdO1xyXG4gICAgd2VsbFs1XSA9IHRlbXA7XHJcbiAgfSk7XHJcbiAgdGFibGVEYXRhLmZvckVhY2goKHdlbGwpID0+IHtcclxuICAgIHdlbGxbNF0gPSAxMDAgKiB3ZWxsWzRdO1xyXG4gICAgd2VsbFs0XSA9IE51bWJlcih3ZWxsWzRdKS50b0ZpeGVkKDIpO1xyXG4gIH0pO1xyXG5cclxuICAvL3JlbW92ZSBhcmNoaXZlZCB3ZWxsc1xyXG4gIHJldHVybiB0YWJsZURhdGEuZmlsdGVyKHZhbCA9PiBhY3RpdmVXZWxscygpLmhhcyh2YWxbMF0pKTtcclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlQbG90ID0gKHNlbGVjdGVkKSA9PiB7XHJcbiAgbGV0IGRhdGEgPSBtb0RhdGFTVC5maWx0ZXIoZWwgPT4gZWxbMF0gPT0gc2VsZWN0ZWQpO1xyXG4gIGNvbnN0IG9pbCA9IGRhdGEubWFwKGVsID0+IGVsWzFdKTtcclxuICBjb25zdCBkYXRlID0gZGF0YS5tYXAoZWwgPT4gZWxbNl0pO1xyXG4gIGNvbnN0IGN1bWxNb09pbCA9IG9pbC5yZWR1Y2UoKGFjYywgdmFsLCBpZHgpID0+IChpZHggPT09IDAgPyBhY2MuY29uY2F0KHZhbCkgOiBhY2MuY29uY2F0KHZhbCArIGFjY1tpZHggLSAxXSkpLCBbXSk7XHJcblxyXG4gIGNvbnN0IHRyYWNlID0gbWFrZVRyYWNlKGRhdGUsY3VtbE1vT2lsLFwiQ3VtbCBEYXRhXCIsXCJsaW5lc1wiLFwiZ3JlZW5cIixudWxsKTtcclxuICBjb25zdCBsYXlvdXQgPSBtYWtlTGF5b3V0KFwiQ3VtbGF0aXZlIE9pbCB2cyBUaW1lXCIpO1xyXG4gIFBsb3RseS5uZXdQbG90KCdjdW1sT2lsJyxbdHJhY2VdLGxheW91dCk7XHJcbn1cclxuXHJcbmRpc3BsYXlQbG90KFwiQWFyb24gIzFcIik7XHJcbi8vbWFpblxyXG5jb25zdCB0YWJsZURhdGEgPSBmb3JtYXREYXRhKCk7XHJcblxyXG4vL3NvcnQgYnkgcGF5OiBwb3M9NCBieSBwcm9kOiBwb3M9MVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUGF5ZmlsdGVyJykub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgc29ydERhdGEodGFibGVEYXRhLDQpXHJcbn07XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUHJvZGZpbHRlcicpLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xyXG4gIHNvcnREYXRhKHRhYmxlRGF0YSwxKVxyXG59O1xyXG5cclxuc2VsZWN0KGRyb3Bkb3duSWQpLm9uKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICBidWlsZFRhYmxlKGZpbHRlckRhdGEodGFibGVEYXRhLGRyb3Bkb3duSWQpKTtcclxuICBkaXNwbGF5UGxvdChzZWxlY3QoZHJvcGRvd25JZCkubm9kZSgpLnZhbHVlKTtcclxufSk7XHJcblxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyRmlsdGVyJykub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICBidWlsZFRhYmxlKHRhYmxlRGF0YSk7XHJcbn07XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIGJ1aWxkVGFibGUodGFibGVEYXRhKTtcclxuICBkcm9wZG93bihkcm9wZG93bklkKTsgIFxyXG59KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/table.js\n");

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