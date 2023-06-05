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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data__WEBPACK_IMPORTED_MODULE_3__]);\n_data__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_index__WEBPACK_IMPORTED_MODULE_1__.monitorAuthState)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_2__.monitorRegion)();\r\n\r\nconst fetchData = () => {\r\n    let data = localStorage.getItem(uid);//cache\r\n\r\n    if (data){\r\n        data = JSON.parse(data);\r\n        parseData(data);\r\n\r\n    }else {//get from fb\r\n        const deckRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, 'users/' + uid + '/deck');\r\n\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(deckRef, (snapshot) => {\r\n            const data = snapshot.val();\r\n\r\n            localStorage.setItem(uid, JSON.stringify(data));\r\n            parseData(data);\r\n        })\r\n    }\r\n};\r\n\r\n\r\n\r\nconst parseData = (data) => {\r\n    console.log('data :>> ', data);\r\n    console.log('legacyEcon :>> ', _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon);\r\n    const wells = [];\r\n    let returns = {};\r\n    for (let key in data){\r\n        wells.push(key);\r\n    }\r\n    initWellList(wells);\r\n    let res = {};\r\n    for (let obj in _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon) {\r\n        let temp = {};\r\n        let recMoReturn = 0;\r\n        let date;\r\n        for (let idx in obj){\r\n            let well = _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon[obj][idx]['Well Name'];\r\n            date = _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon[obj][idx]['Date'];\r\n            well = well.replace('#','');\r\n            if (wells.includes(well)){\r\n                let fin = _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon[obj][idx];\r\n                fin.share = data[well][\"ORRI\"] + data[well][\"WINRI\"];\r\n                recMoReturn += fin[\"Recent Month P&L\"]*fin.share;\r\n                temp[well] = fin;\r\n            }\r\n        }\r\n        temp.recMoReturn = recMoReturn;\r\n        returns[date] = recMoReturn;\r\n        res[date] = temp;\r\n    }\r\n    console.log('res :>> ', res);\r\n    //graph\r\n    console.log('returns :>> ', returns);\r\n    \r\n    const sortedArray = Object.entries(returns).sort((a, b) => {\r\n        const dateA = new Date(a[0]);\r\n        const dateB = new Date(b[0]);\r\n        return dateA - dateB;\r\n    });\r\n      \r\n    const sortedObj = Object.fromEntries(sortedArray);\r\n    const dates = Object.entries(sortedObj).map(([key, _]) => key);\r\n    const pl = Object.entries(sortedObj).map(([_, value]) => value);\r\n\r\n    plotRev(dates,pl);\r\n    //localStorage.setItem('dates',dates);\r\n    //localStorage.setItem('pl',pl);\r\n\r\n};\r\n\r\nconst plotRev = (x,y) => {\r\n    const trace = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(x,y,'P&L',null,'black',null);\r\n    const layout = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeLayout)(\"P&L (ST only)\")\r\n    Plotly.newPlot(\"returnsCurve\", [trace], layout, _layout__WEBPACK_IMPORTED_MODULE_4__.config).then(() => {\r\n        document.getElementById(\"btnLogout\").style.display = \"block\";\r\n    });\r\n}\r\n\r\nconst initWellList = (wells) => {\r\n    let ulWellList = document.getElementById(\"well-list\");\r\n    for (let i = 0; i < wells.length; i++) {\r\n        // Create <li> element\r\n        var li = document.createElement(\"li\");\r\n        li.classList.add(\"nav-item\", \"active\");\r\n  \r\n        // Create <a> element\r\n        var a = document.createElement(\"a\");\r\n        a.classList.add(\"nav-link\");\r\n  \r\n        // Create <span> element\r\n        var span = document.createElement(\"span\");\r\n        span.classList.add(\"menu-title\");\r\n        span.textContent = wells[i];\r\n  \r\n        // Append <span> to <a>\r\n        a.appendChild(span);\r\n  \r\n        // Append <a> to <li>\r\n        li.appendChild(a);\r\n\r\n        li.onclick = function() {\r\n            // Handle click event here\r\n            console.log(\"Clicked on \" + this.textContent);\r\n          };\r\n\r\n        // Append <li> to <ul>\r\n        ulWellList.appendChild(li);\r\n      }\r\n}\r\n\r\n//\\\\\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)()\r\nconst uid = localStorage.getItem('uid');\r\nconsole.log('uid :>> ', uid);\r\n\r\ndocument.getElementById(\"btnLogout\").addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.logout);\r\n\r\nfetchData();\r\n\r\n//let pl_str = localStorage.getItem('pl');\r\n//let dates_str = localStorage.getItem('dates');\r\n//if (pl_str & dates_str){\r\n//    dates_str = dates_str.split(',');\r\n//    pl_str = pl_str.split(',');\r\n//    pl_str = pl_str.map(el => parseFloat(el));\r\n//    plotRev(pl_str,dates_str);\r\n//} else {\r\n//    fetchData();\r\n//}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDVTtBQUNVO0FBQ3hCO0FBQ3FCO0FBQ3pEO0FBQ0Esd0RBQWdCO0FBQ2hCLHNEQUFhO0FBQ2I7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxNQUFNO0FBQ1gsd0JBQXdCLHNEQUFHO0FBQzNCO0FBQ0EsUUFBUSwwREFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDZDQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDZDQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZDQUFVO0FBQ2pDLG1CQUFtQiw2Q0FBVTtBQUM3QjtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFTO0FBQzNCLG1CQUFtQixtREFBVTtBQUM3QixvREFBb0QsMkNBQU07QUFDMUQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOERBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsK0RBQStELDBDQUFNO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9wcm9maWxlLmpzP2IwZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9uaXRvclJlZ2lvbiB9IGZyb20gJy4vcmVnaW9uJ1xyXG5pbXBvcnQgeyBsb2dvdXQsIG1vbml0b3JBdXRoU3RhdGUgfSBmcm9tICcuL2luZGV4J1xyXG5pbXBvcnQgeyByZWYsZ2V0RGF0YWJhc2Usb25WYWx1ZSB9IGZyb20gJ2ZpcmViYXNlL2RhdGFiYXNlJztcclxuaW1wb3J0IHsgbGVnYWN5RWNvbiB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCB7IG1ha2VUcmFjZSwgbWFrZUxheW91dCwgY29uZmlnIH0gZnJvbSAnLi9sYXlvdXQnO1xyXG5cclxubW9uaXRvckF1dGhTdGF0ZSgpO1xyXG5tb25pdG9yUmVnaW9uKCk7XHJcblxyXG5jb25zdCBmZXRjaERhdGEgPSAoKSA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHVpZCk7Ly9jYWNoZVxyXG5cclxuICAgIGlmIChkYXRhKXtcclxuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICBwYXJzZURhdGEoZGF0YSk7XHJcblxyXG4gICAgfWVsc2Ugey8vZ2V0IGZyb20gZmJcclxuICAgICAgICBjb25zdCBkZWNrUmVmID0gcmVmKGRiLCAndXNlcnMvJyArIHVpZCArICcvZGVjaycpO1xyXG5cclxuICAgICAgICBvblZhbHVlKGRlY2tSZWYsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gc25hcHNob3QudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh1aWQsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgcGFyc2VEYXRhKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuXHJcbmNvbnN0IHBhcnNlRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZGF0YSA6Pj4gJywgZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZygnbGVnYWN5RWNvbiA6Pj4gJywgbGVnYWN5RWNvbik7XHJcbiAgICBjb25zdCB3ZWxscyA9IFtdO1xyXG4gICAgbGV0IHJldHVybnMgPSB7fTtcclxuICAgIGZvciAobGV0IGtleSBpbiBkYXRhKXtcclxuICAgICAgICB3ZWxscy5wdXNoKGtleSk7XHJcbiAgICB9XHJcbiAgICBpbml0V2VsbExpc3Qod2VsbHMpO1xyXG4gICAgbGV0IHJlcyA9IHt9O1xyXG4gICAgZm9yIChsZXQgb2JqIGluIGxlZ2FjeUVjb24pIHtcclxuICAgICAgICBsZXQgdGVtcCA9IHt9O1xyXG4gICAgICAgIGxldCByZWNNb1JldHVybiA9IDA7XHJcbiAgICAgICAgbGV0IGRhdGU7XHJcbiAgICAgICAgZm9yIChsZXQgaWR4IGluIG9iail7XHJcbiAgICAgICAgICAgIGxldCB3ZWxsID0gbGVnYWN5RWNvbltvYmpdW2lkeF1bJ1dlbGwgTmFtZSddO1xyXG4gICAgICAgICAgICBkYXRlID0gbGVnYWN5RWNvbltvYmpdW2lkeF1bJ0RhdGUnXTtcclxuICAgICAgICAgICAgd2VsbCA9IHdlbGwucmVwbGFjZSgnIycsJycpO1xyXG4gICAgICAgICAgICBpZiAod2VsbHMuaW5jbHVkZXMod2VsbCkpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpbiA9IGxlZ2FjeUVjb25bb2JqXVtpZHhdO1xyXG4gICAgICAgICAgICAgICAgZmluLnNoYXJlID0gZGF0YVt3ZWxsXVtcIk9SUklcIl0gKyBkYXRhW3dlbGxdW1wiV0lOUklcIl07XHJcbiAgICAgICAgICAgICAgICByZWNNb1JldHVybiArPSBmaW5bXCJSZWNlbnQgTW9udGggUCZMXCJdKmZpbi5zaGFyZTtcclxuICAgICAgICAgICAgICAgIHRlbXBbd2VsbF0gPSBmaW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGVtcC5yZWNNb1JldHVybiA9IHJlY01vUmV0dXJuO1xyXG4gICAgICAgIHJldHVybnNbZGF0ZV0gPSByZWNNb1JldHVybjtcclxuICAgICAgICByZXNbZGF0ZV0gPSB0ZW1wO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ3JlcyA6Pj4gJywgcmVzKTtcclxuICAgIC8vZ3JhcGhcclxuICAgIGNvbnNvbGUubG9nKCdyZXR1cm5zIDo+PiAnLCByZXR1cm5zKTtcclxuICAgIFxyXG4gICAgY29uc3Qgc29ydGVkQXJyYXkgPSBPYmplY3QuZW50cmllcyhyZXR1cm5zKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShhWzBdKTtcclxuICAgICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGJbMF0pO1xyXG4gICAgICAgIHJldHVybiBkYXRlQSAtIGRhdGVCO1xyXG4gICAgfSk7XHJcbiAgICAgIFxyXG4gICAgY29uc3Qgc29ydGVkT2JqID0gT2JqZWN0LmZyb21FbnRyaWVzKHNvcnRlZEFycmF5KTtcclxuICAgIGNvbnN0IGRhdGVzID0gT2JqZWN0LmVudHJpZXMoc29ydGVkT2JqKS5tYXAoKFtrZXksIF9dKSA9PiBrZXkpO1xyXG4gICAgY29uc3QgcGwgPSBPYmplY3QuZW50cmllcyhzb3J0ZWRPYmopLm1hcCgoW18sIHZhbHVlXSkgPT4gdmFsdWUpO1xyXG5cclxuICAgIHBsb3RSZXYoZGF0ZXMscGwpO1xyXG4gICAgLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0ZXMnLGRhdGVzKTtcclxuICAgIC8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsJyxwbCk7XHJcblxyXG59O1xyXG5cclxuY29uc3QgcGxvdFJldiA9ICh4LHkpID0+IHtcclxuICAgIGNvbnN0IHRyYWNlID0gbWFrZVRyYWNlKHgseSwnUCZMJyxudWxsLCdibGFjaycsbnVsbCk7XHJcbiAgICBjb25zdCBsYXlvdXQgPSBtYWtlTGF5b3V0KFwiUCZMIChTVCBvbmx5KVwiKVxyXG4gICAgUGxvdGx5Lm5ld1Bsb3QoXCJyZXR1cm5zQ3VydmVcIiwgW3RyYWNlXSwgbGF5b3V0LCBjb25maWcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuTG9nb3V0XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgaW5pdFdlbGxMaXN0ID0gKHdlbGxzKSA9PiB7XHJcbiAgICBsZXQgdWxXZWxsTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VsbC1saXN0XCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vIENyZWF0ZSA8bGk+IGVsZW1lbnRcclxuICAgICAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIsIFwiYWN0aXZlXCIpO1xyXG4gIFxyXG4gICAgICAgIC8vIENyZWF0ZSA8YT4gZWxlbWVudFxyXG4gICAgICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgYS5jbGFzc0xpc3QuYWRkKFwibmF2LWxpbmtcIik7XHJcbiAgXHJcbiAgICAgICAgLy8gQ3JlYXRlIDxzcGFuPiBlbGVtZW50XHJcbiAgICAgICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJtZW51LXRpdGxlXCIpO1xyXG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSB3ZWxsc1tpXTtcclxuICBcclxuICAgICAgICAvLyBBcHBlbmQgPHNwYW4+IHRvIDxhPlxyXG4gICAgICAgIGEuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgXHJcbiAgICAgICAgLy8gQXBwZW5kIDxhPiB0byA8bGk+XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XHJcblxyXG4gICAgICAgIGxpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gSGFuZGxlIGNsaWNrIGV2ZW50IGhlcmVcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDbGlja2VkIG9uIFwiICsgdGhpcy50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgPGxpPiB0byA8dWw+XHJcbiAgICAgICAgdWxXZWxsTGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgIH1cclxufVxyXG5cclxuLy9cXFxcXHJcbmNvbnN0IGRiID0gZ2V0RGF0YWJhc2UoKVxyXG5jb25zdCB1aWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndWlkJyk7XHJcbmNvbnNvbGUubG9nKCd1aWQgOj4+ICcsIHVpZCk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bkxvZ291dFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ291dCk7XHJcblxyXG5mZXRjaERhdGEoKTtcclxuXHJcbi8vbGV0IHBsX3N0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwbCcpO1xyXG4vL2xldCBkYXRlc19zdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0ZXMnKTtcclxuLy9pZiAocGxfc3RyICYgZGF0ZXNfc3RyKXtcclxuLy8gICAgZGF0ZXNfc3RyID0gZGF0ZXNfc3RyLnNwbGl0KCcsJyk7XHJcbi8vICAgIHBsX3N0ciA9IHBsX3N0ci5zcGxpdCgnLCcpO1xyXG4vLyAgICBwbF9zdHIgPSBwbF9zdHIubWFwKGVsID0+IHBhcnNlRmxvYXQoZWwpKTtcclxuLy8gICAgcGxvdFJldihwbF9zdHIsZGF0ZXNfc3RyKTtcclxuLy99IGVsc2Uge1xyXG4vLyAgICBmZXRjaERhdGEoKTtcclxuLy99Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/profile.js\n");

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