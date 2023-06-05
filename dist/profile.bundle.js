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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   layoutWbd: () => (/* binding */ layoutWbd),\n/* harmony export */   makeLayout: () => (/* binding */ makeLayout),\n/* harmony export */   makeTrace: () => (/* binding */ makeTrace)\n/* harmony export */ });\nconst makeTrace = (x, y, name, type, color, dash, text, visible) => ({\r\n    x,\r\n    y,\r\n    text,\r\n    name,\r\n    visible,\r\n    type: type || \"line\",\r\n    line: {\r\n        color,\r\n        dash,\r\n    },\r\n});\r\n\r\nconst makeLayout = (title, type, tickvals) => ({\r\n    title,\r\n    yaxis: {\r\n        type: type || \"linear\",\r\n        rangemode: \"tozero\",\r\n        autorange: true,\r\n        tickformat: \"f\",\r\n        tickvals,\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n    xaxis: {\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n});\r\n\r\nconst config = {\r\n    modeBarButtonsToRemove: [\r\n        \"sendDataToCloud\",\r\n        \"autoScale2d\",\r\n        \"hoverClosestCartesian\",\r\n        \"hoverCompareCartesian\",\r\n        \"lasso2d\",\r\n        \"zoomIn2d\",\r\n        \"zoomOut2d\",\r\n        \"toggleSpikelines\",\r\n    ],\r\n    displaylogo: false,\r\n    responsive: true,\r\n};\r\n\r\nconst layoutWbd = (max,min,minTVD,wellName) => ({\r\n    width: 1620,\r\n    height: 700,\r\n\r\n    margin: {\r\n        l: 0,\r\n        r: 0,\r\n        b: 0,\r\n        t: 0,\r\n    },\r\n\r\n    title: {\r\n        text: \"Drilling for \" + wellName + \", Dimmit County, TX\",\r\n        y: 0.98,\r\n    },\r\n\r\n    legend: {\r\n        x: 0.8,\r\n        y: 0.8,\r\n    },\r\n    scene: {\r\n        aspectmode: \"cube\",\r\n        xaxis: {\r\n            title: \"Easting\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n        yaxis: {\r\n            title: \"Northing\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#f0f1f2\",\r\n            showbackground: true,\r\n\r\n        },\r\n        zaxis: {\r\n            title: \"TVD\",\r\n            nticks: 5,\r\n            range: [minTVD, -3000],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n    },\r\n    \r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9sYXlvdXQuanM/NmZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbWFrZVRyYWNlID0gKHgsIHksIG5hbWUsIHR5cGUsIGNvbG9yLCBkYXNoLCB0ZXh0LCB2aXNpYmxlKSA9PiAoe1xyXG4gICAgeCxcclxuICAgIHksXHJcbiAgICB0ZXh0LFxyXG4gICAgbmFtZSxcclxuICAgIHZpc2libGUsXHJcbiAgICB0eXBlOiB0eXBlIHx8IFwibGluZVwiLFxyXG4gICAgbGluZToge1xyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgICAgIGRhc2gsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlTGF5b3V0ID0gKHRpdGxlLCB0eXBlLCB0aWNrdmFscykgPT4gKHtcclxuICAgIHRpdGxlLFxyXG4gICAgeWF4aXM6IHtcclxuICAgICAgICB0eXBlOiB0eXBlIHx8IFwibGluZWFyXCIsXHJcbiAgICAgICAgcmFuZ2Vtb2RlOiBcInRvemVyb1wiLFxyXG4gICAgICAgIGF1dG9yYW5nZTogdHJ1ZSxcclxuICAgICAgICB0aWNrZm9ybWF0OiBcImZcIixcclxuICAgICAgICB0aWNrdmFscyxcclxuICAgICAgICBncmlkY29sb3I6IFwiI2RiZGJkYlwiLFxyXG4gICAgfSxcclxuICAgIHhheGlzOiB7XHJcbiAgICAgICAgZ3JpZGNvbG9yOiBcIiNkYmRiZGJcIixcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIG1vZGVCYXJCdXR0b25zVG9SZW1vdmU6IFtcclxuICAgICAgICBcInNlbmREYXRhVG9DbG91ZFwiLFxyXG4gICAgICAgIFwiYXV0b1NjYWxlMmRcIixcclxuICAgICAgICBcImhvdmVyQ2xvc2VzdENhcnRlc2lhblwiLFxyXG4gICAgICAgIFwiaG92ZXJDb21wYXJlQ2FydGVzaWFuXCIsXHJcbiAgICAgICAgXCJsYXNzbzJkXCIsXHJcbiAgICAgICAgXCJ6b29tSW4yZFwiLFxyXG4gICAgICAgIFwiem9vbU91dDJkXCIsXHJcbiAgICAgICAgXCJ0b2dnbGVTcGlrZWxpbmVzXCIsXHJcbiAgICBdLFxyXG4gICAgZGlzcGxheWxvZ286IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsYXlvdXRXYmQgPSAobWF4LG1pbixtaW5UVkQsd2VsbE5hbWUpID0+ICh7XHJcbiAgICB3aWR0aDogMTYyMCxcclxuICAgIGhlaWdodDogNzAwLFxyXG5cclxuICAgIG1hcmdpbjoge1xyXG4gICAgICAgIGw6IDAsXHJcbiAgICAgICAgcjogMCxcclxuICAgICAgICBiOiAwLFxyXG4gICAgICAgIHQ6IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdGV4dDogXCJEcmlsbGluZyBmb3IgXCIgKyB3ZWxsTmFtZSArIFwiLCBEaW1taXQgQ291bnR5LCBUWFwiLFxyXG4gICAgICAgIHk6IDAuOTgsXHJcbiAgICB9LFxyXG5cclxuICAgIGxlZ2VuZDoge1xyXG4gICAgICAgIHg6IDAuOCxcclxuICAgICAgICB5OiAwLjgsXHJcbiAgICB9LFxyXG4gICAgc2NlbmU6IHtcclxuICAgICAgICBhc3BlY3Rtb2RlOiBcImN1YmVcIixcclxuICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJFYXN0aW5nXCIsXHJcbiAgICAgICAgICAgIG50aWNrczogOCxcclxuICAgICAgICAgICAgcmFuZ2U6IFttYXgsIG1pbl0sXHJcbiAgICAgICAgICAgIGdyaWRjb2xvcjogXCIjOGE4YThhXCIsXHJcbiAgICAgICAgICAgIHRpY2tjb2xvcjogXCIjMDUwNTA1XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRjb2xvcjogXCIjZWRlZGVkXCIsXHJcbiAgICAgICAgICAgIHNob3diYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiTm9ydGhpbmdcIixcclxuICAgICAgICAgICAgbnRpY2tzOiA4LFxyXG4gICAgICAgICAgICByYW5nZTogW21heCwgbWluXSxcclxuICAgICAgICAgICAgZ3JpZGNvbG9yOiBcIiM4YThhOGFcIixcclxuICAgICAgICAgICAgdGlja2NvbG9yOiBcIiMwNTA1MDVcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZGNvbG9yOiBcIiNmMGYxZjJcIixcclxuICAgICAgICAgICAgc2hvd2JhY2tncm91bmQ6IHRydWUsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgemF4aXM6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiVFZEXCIsXHJcbiAgICAgICAgICAgIG50aWNrczogNSxcclxuICAgICAgICAgICAgcmFuZ2U6IFttaW5UVkQsIC0zMDAwXSxcclxuICAgICAgICAgICAgZ3JpZGNvbG9yOiBcIiM4YThhOGFcIixcclxuICAgICAgICAgICAgdGlja2NvbG9yOiBcIiMwNTA1MDVcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZGNvbG9yOiBcIiNlZGVkZWRcIixcclxuICAgICAgICAgICAgc2hvd2JhY2tncm91bmQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/layout.js\n");

/***/ }),

/***/ "./src/js/profile.js":
/*!***************************!*\
  !*** ./src/js/profile.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data__WEBPACK_IMPORTED_MODULE_3__]);\n_data__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_index__WEBPACK_IMPORTED_MODULE_1__.monitorAuthState)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_2__.monitorRegion)();\r\n\r\nconst fetchData = () => {\r\n    const deckRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, 'users/' + uid + '/deck');\r\n\r\n    (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(deckRef, (snapshot) => {\r\n        const data = snapshot.val();\r\n\r\n        localStorage.setItem(uid, JSON.stringify(data))\r\n        parseData(data);\r\n    })\r\n};\r\n\r\n\r\n\r\nconst parseData = (data) => {\r\n    console.log('data :>> ', data);\r\n    console.log('legacyEcon :>> ', _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon);\r\n    const wells = [];\r\n    let returns = {};\r\n    for (let key in data){\r\n        wells.push(key);\r\n    }\r\n    let res = {};\r\n    for (let obj in _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon) {\r\n        let temp = {};\r\n        let recMoReturn = 0;\r\n        let date;\r\n        for (let idx in obj){\r\n            let well = _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon[obj][idx]['Well Name'];\r\n            date = _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon[obj][idx]['Date'];\r\n            well = well.replace('#','');\r\n            if (wells.includes(well)){\r\n                let fin = _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon[obj][idx];\r\n                fin.share = data[well][\"ORRI\"] + data[well][\"WINRI\"];\r\n                recMoReturn += fin[\"Recent Month P&L\"]*fin.share;\r\n                temp[well] = fin;\r\n            }\r\n        }\r\n        temp.recMoReturn = recMoReturn;\r\n        returns[date] = recMoReturn;\r\n        res[date] = temp;\r\n    }\r\n    console.log('res :>> ', res);\r\n    //graph\r\n    console.log('returns :>> ', returns);\r\n    \r\n    const sortedArray = Object.entries(returns).sort((a, b) => {\r\n        const dateA = new Date(a[0]);\r\n        const dateB = new Date(b[0]);\r\n        return dateA - dateB;\r\n    });\r\n      \r\n    const sortedObj = Object.fromEntries(sortedArray);\r\n    const dates = Object.entries(sortedObj).map(([key, _]) => key);\r\n    const pl = Object.entries(sortedObj).map(([_, value]) => value);\r\n    console.log('dates :>> ', dates);\r\n    console.log('pl :>> ', pl);\r\n\r\n    plotRev(dates,pl);\r\n    localStorage.setItem('dates',dates);\r\n    localStorage.setItem('pl',pl);\r\n\r\n};\r\n\r\nconst plotRev = (x,y) => {\r\n    const trace = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(x,y,'P&L',null,'black',null);\r\n    const layout = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeLayout)(\"P&L\")\r\n    Plotly.newPlot(\"returnsCurve\", [trace], layout, _layout__WEBPACK_IMPORTED_MODULE_4__.config).then(() => {\r\n        document.getElementById(\"btnLogout\").style.display = \"block\";\r\n    });\r\n}\r\n\r\n//\\\\\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)()\r\nconst uid = localStorage.getItem('uid');\r\nconsole.log('uid :>> ', uid);\r\n\r\ndocument.getElementById(\"btnLogout\").addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.logout);\r\n\r\nlet pl_str = localStorage.getItem('pl');\r\nlet dates_str = localStorage.getItem('dates');\r\n\r\nconsole.log('pl_str :>> ', pl_str);\r\nconsole.log('dates_str :>> ', dates_str);\r\n\r\n\r\n\r\nif (pl_str & dates_str){\r\n    dates_str = dates_str.split(',');\r\n    pl_str = pl_str.split(',');\r\n    pl_str = pl_str.map(el => parseFloat(el));\r\n    plotRev(pl_str,dates_str);\r\n} else {\r\n    fetchData();\r\n}\r\n\r\nfor (let i = 0; i < localStorage.length; i++) {\r\n    const key = localStorage.key(i);\r\n    const value = localStorage.getItem(key);\r\n    console.log(key + \": \" + value);\r\n  }\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDVTtBQUNVO0FBQ3hCO0FBQ3FCO0FBQ3pEO0FBQ0Esd0RBQWdCO0FBQ2hCLHNEQUFhO0FBQ2I7QUFDQTtBQUNBLG9CQUFvQixzREFBRztBQUN2QjtBQUNBLElBQUksMERBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNkNBQVU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDZDQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZDQUFVO0FBQ2pDLG1CQUFtQiw2Q0FBVTtBQUM3QjtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrREFBUztBQUMzQixtQkFBbUIsbURBQVU7QUFDN0Isb0RBQW9ELDJDQUFNO0FBQzFEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOERBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsK0RBQStELDBDQUFNO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Byb2ZpbGUuanM/YjBlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb25pdG9yUmVnaW9uIH0gZnJvbSAnLi9yZWdpb24nXHJcbmltcG9ydCB7IGxvZ291dCwgbW9uaXRvckF1dGhTdGF0ZSB9IGZyb20gJy4vaW5kZXgnXHJcbmltcG9ydCB7IHJlZixnZXREYXRhYmFzZSxvblZhbHVlIH0gZnJvbSAnZmlyZWJhc2UvZGF0YWJhc2UnO1xyXG5pbXBvcnQgeyBsZWdhY3lFY29uIH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHsgbWFrZVRyYWNlLCBtYWtlTGF5b3V0LCBjb25maWcgfSBmcm9tICcuL2xheW91dCc7XHJcblxyXG5tb25pdG9yQXV0aFN0YXRlKCk7XHJcbm1vbml0b3JSZWdpb24oKTtcclxuXHJcbmNvbnN0IGZldGNoRGF0YSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRlY2tSZWYgPSByZWYoZGIsICd1c2Vycy8nICsgdWlkICsgJy9kZWNrJyk7XHJcblxyXG4gICAgb25WYWx1ZShkZWNrUmVmLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gc25hcHNob3QudmFsKCk7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHVpZCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgICAgcGFyc2VEYXRhKGRhdGEpO1xyXG4gICAgfSlcclxufTtcclxuXHJcblxyXG5cclxuY29uc3QgcGFyc2VEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhIDo+PiAnLCBkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKCdsZWdhY3lFY29uIDo+PiAnLCBsZWdhY3lFY29uKTtcclxuICAgIGNvbnN0IHdlbGxzID0gW107XHJcbiAgICBsZXQgcmV0dXJucyA9IHt9O1xyXG4gICAgZm9yIChsZXQga2V5IGluIGRhdGEpe1xyXG4gICAgICAgIHdlbGxzLnB1c2goa2V5KTtcclxuICAgIH1cclxuICAgIGxldCByZXMgPSB7fTtcclxuICAgIGZvciAobGV0IG9iaiBpbiBsZWdhY3lFY29uKSB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSB7fTtcclxuICAgICAgICBsZXQgcmVjTW9SZXR1cm4gPSAwO1xyXG4gICAgICAgIGxldCBkYXRlO1xyXG4gICAgICAgIGZvciAobGV0IGlkeCBpbiBvYmope1xyXG4gICAgICAgICAgICBsZXQgd2VsbCA9IGxlZ2FjeUVjb25bb2JqXVtpZHhdWydXZWxsIE5hbWUnXTtcclxuICAgICAgICAgICAgZGF0ZSA9IGxlZ2FjeUVjb25bb2JqXVtpZHhdWydEYXRlJ107XHJcbiAgICAgICAgICAgIHdlbGwgPSB3ZWxsLnJlcGxhY2UoJyMnLCcnKTtcclxuICAgICAgICAgICAgaWYgKHdlbGxzLmluY2x1ZGVzKHdlbGwpKXtcclxuICAgICAgICAgICAgICAgIGxldCBmaW4gPSBsZWdhY3lFY29uW29ial1baWR4XTtcclxuICAgICAgICAgICAgICAgIGZpbi5zaGFyZSA9IGRhdGFbd2VsbF1bXCJPUlJJXCJdICsgZGF0YVt3ZWxsXVtcIldJTlJJXCJdO1xyXG4gICAgICAgICAgICAgICAgcmVjTW9SZXR1cm4gKz0gZmluW1wiUmVjZW50IE1vbnRoIFAmTFwiXSpmaW4uc2hhcmU7XHJcbiAgICAgICAgICAgICAgICB0ZW1wW3dlbGxdID0gZmluO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRlbXAucmVjTW9SZXR1cm4gPSByZWNNb1JldHVybjtcclxuICAgICAgICByZXR1cm5zW2RhdGVdID0gcmVjTW9SZXR1cm47XHJcbiAgICAgICAgcmVzW2RhdGVdID0gdGVtcDtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdyZXMgOj4+ICcsIHJlcyk7XHJcbiAgICAvL2dyYXBoXHJcbiAgICBjb25zb2xlLmxvZygncmV0dXJucyA6Pj4gJywgcmV0dXJucyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHNvcnRlZEFycmF5ID0gT2JqZWN0LmVudHJpZXMocmV0dXJucykuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGVBID0gbmV3IERhdGUoYVswXSk7XHJcbiAgICAgICAgY29uc3QgZGF0ZUIgPSBuZXcgRGF0ZShiWzBdKTtcclxuICAgICAgICByZXR1cm4gZGF0ZUEgLSBkYXRlQjtcclxuICAgIH0pO1xyXG4gICAgICBcclxuICAgIGNvbnN0IHNvcnRlZE9iaiA9IE9iamVjdC5mcm9tRW50cmllcyhzb3J0ZWRBcnJheSk7XHJcbiAgICBjb25zdCBkYXRlcyA9IE9iamVjdC5lbnRyaWVzKHNvcnRlZE9iaikubWFwKChba2V5LCBfXSkgPT4ga2V5KTtcclxuICAgIGNvbnN0IHBsID0gT2JqZWN0LmVudHJpZXMoc29ydGVkT2JqKS5tYXAoKFtfLCB2YWx1ZV0pID0+IHZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRlcyA6Pj4gJywgZGF0ZXMpO1xyXG4gICAgY29uc29sZS5sb2coJ3BsIDo+PiAnLCBwbCk7XHJcblxyXG4gICAgcGxvdFJldihkYXRlcyxwbCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0ZXMnLGRhdGVzKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbCcscGwpO1xyXG5cclxufTtcclxuXHJcbmNvbnN0IHBsb3RSZXYgPSAoeCx5KSA9PiB7XHJcbiAgICBjb25zdCB0cmFjZSA9IG1ha2VUcmFjZSh4LHksJ1AmTCcsbnVsbCwnYmxhY2snLG51bGwpO1xyXG4gICAgY29uc3QgbGF5b3V0ID0gbWFrZUxheW91dChcIlAmTFwiKVxyXG4gICAgUGxvdGx5Lm5ld1Bsb3QoXCJyZXR1cm5zQ3VydmVcIiwgW3RyYWNlXSwgbGF5b3V0LCBjb25maWcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuTG9nb3V0XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy9cXFxcXHJcbmNvbnN0IGRiID0gZ2V0RGF0YWJhc2UoKVxyXG5jb25zdCB1aWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndWlkJyk7XHJcbmNvbnNvbGUubG9nKCd1aWQgOj4+ICcsIHVpZCk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bkxvZ291dFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ291dCk7XHJcblxyXG5sZXQgcGxfc3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsJyk7XHJcbmxldCBkYXRlc19zdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0ZXMnKTtcclxuXHJcbmNvbnNvbGUubG9nKCdwbF9zdHIgOj4+ICcsIHBsX3N0cik7XHJcbmNvbnNvbGUubG9nKCdkYXRlc19zdHIgOj4+ICcsIGRhdGVzX3N0cik7XHJcblxyXG5cclxuXHJcbmlmIChwbF9zdHIgJiBkYXRlc19zdHIpe1xyXG4gICAgZGF0ZXNfc3RyID0gZGF0ZXNfc3RyLnNwbGl0KCcsJyk7XHJcbiAgICBwbF9zdHIgPSBwbF9zdHIuc3BsaXQoJywnKTtcclxuICAgIHBsX3N0ciA9IHBsX3N0ci5tYXAoZWwgPT4gcGFyc2VGbG9hdChlbCkpO1xyXG4gICAgcGxvdFJldihwbF9zdHIsZGF0ZXNfc3RyKTtcclxufSBlbHNlIHtcclxuICAgIGZldGNoRGF0YSgpO1xyXG59XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcclxuICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgIGNvbnNvbGUubG9nKGtleSArIFwiOiBcIiArIHZhbHVlKTtcclxuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/profile.js\n");

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
/******/ 			"profile": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-d0574a","vendors-node_modules_d3_src_index_js","src_js_data_js-src_js_index_js-src_js_region_js"], () => (__webpack_require__("./src/js/profile.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;