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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data__WEBPACK_IMPORTED_MODULE_3__]);\n_data__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_index__WEBPACK_IMPORTED_MODULE_1__.monitorAuthState)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_2__.monitorRegion)();\r\n\r\nconst fetchData = () => {\r\n    let data = localStorage.getItem(uid);//cache\r\n\r\n    if (data){\r\n        data = JSON.parse(data);\r\n        parseData(data);\r\n\r\n    }else {//get from fb\r\n        const deckRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, 'users/' + uid + '/deck');\r\n\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(deckRef, (snapshot) => {\r\n            const data = snapshot.val();\r\n\r\n            localStorage.setItem(uid, JSON.stringify(data));\r\n            parseData(data);\r\n        })\r\n    }\r\n};\r\n\r\n\r\nconst parseData = (data) => {\r\n    let res = {};\r\n    let res_wells = {};\r\n    const wells = Object.keys(data);\r\n    let returns = {};\r\n\r\n    for (let obj in _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon) {\r\n        let temp = {};\r\n        let recMoReturn = 0;\r\n        let date;\r\n        console.log('obj :>> ', obj);\r\n        for (let idx in obj){\r\n            let well = _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon[obj][idx]['Well Name'];\r\n            date = _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon[obj][idx]['Date'];\r\n            well = well.replace('#','');\r\n\r\n            if (wells.includes(well)){\r\n                let fin = _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon[obj][idx];\r\n                fin.share = data[well][\"ORRI\"] + data[well][\"WINRI\"];\r\n                recMoReturn += fin[\"Recent Month P&L\"]*fin.share;\r\n                temp[well] = fin;\r\n\r\n                if (!(well in res_wells)) res_wells[well] = [];\r\n                fin.recMoReturn = fin[\"Recent Month P&L\"]*fin.share;\r\n                res_wells[well].push(fin)\r\n\r\n                //dict by well\r\n                //res_wells[well] = temp;\r\n            }\r\n        }\r\n        temp.recMoReturn = recMoReturn;\r\n        returns[date] = recMoReturn;\r\n        res[date] = temp;\r\n    }\r\n    let well_list = Object.keys(res_wells);\r\n    well_list.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));\r\n    well_list.unshift(\"All Wells\")\r\n    initWellList(well_list);\r\n    localStorage.setItem('pl_data_wells',JSON.stringify(res_wells));\r\n    \r\n    \r\n    const dates_pl = format(returns);\r\n    plotRev(dates_pl[0],dates_pl[1]);\r\n\r\n    //mean payout\r\n    let payouts = {};\r\n    for (let idx in _data__WEBPACK_IMPORTED_MODULE_3__.payout) {\r\n        const well = _data__WEBPACK_IMPORTED_MODULE_3__.payout[idx][\"Well Name\"].replace('#',\"\");\r\n        if (well_list.includes(well)) {\r\n            payouts[well] = _data__WEBPACK_IMPORTED_MODULE_3__.payout[idx][\"% Payout\"];\r\n        }\r\n    }\r\n    console.log('payouts :>> ', payouts);\r\n    const payouts_num = Object.entries(payouts).map(([_, value]) => value);\r\n\r\n    document.getElementById('selected-well').textContent = \"All Wells\";\r\n    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin,curr) => runnin + curr).toFixed(2)}`;\r\n    document.getElementById('payout-title').textContent = \"% Mean Payout\";\r\n    document.getElementById('payout').textContent = `${(payouts_num.reduce((runnin,curr) => runnin + curr)*100/payouts_num.length).toFixed(0)}%`;\r\n\r\n    localStorage.setItem('payouts',JSON.stringify(payouts));\r\n    //localStorage.setItem('dates',dates);\r\n    //localStorage.setItem('pl',pl);\r\n    return res;\r\n};\r\n\r\nconst plotRev = (x,y) => {\r\n    const trace = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(x,y,'P&L',null,'black',null);\r\n    const layout = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeLayout)(\"P&L (ST only)\")\r\n    Plotly.newPlot(\"returnsCurve\", [trace], layout, _layout__WEBPACK_IMPORTED_MODULE_4__.config).then(() => {\r\n        document.getElementById(\"btnLogout\").style.display = \"block\";\r\n    });\r\n}\r\n\r\n\r\nconst format = (obj) => {\r\n    const sortedArray = Object.entries(obj).sort((a, b) => {\r\n        const dateA = new Date(a[0]);\r\n        const dateB = new Date(b[0]);\r\n        return dateA - dateB;\r\n    });\r\n\r\n    const sortedObj = Object.fromEntries(sortedArray);\r\n    const dates = Object.entries(sortedObj).map(([key, _]) => key);\r\n    const pl = Object.entries(sortedObj).map(([_, value]) => value);\r\n\r\n    return [dates, pl]\r\n}\r\n\r\nconst initWellList = (wells) => {\r\n    let ulWellList = document.getElementById(\"well-list\");\r\n    for (let i = 0; i < wells.length; i++) {\r\n        let li = document.createElement(\"li\");\r\n        li.classList.add(\"nav-item\", \"active\");\r\n  \r\n        let a = document.createElement(\"a\");\r\n        a.classList.add(\"nav-link\");\r\n  \r\n        let span = document.createElement(\"span\");\r\n        span.classList.add(\"menu-title\");\r\n        span.textContent = wells[i];\r\n  \r\n        a.appendChild(span);\r\n        li.appendChild(a);\r\n\r\n        li.onclick = function() {\r\n            console.log(\"Clicked: \" + this.textContent);\r\n            displayWell(this.textContent);\r\n          };\r\n\r\n        ulWellList.appendChild(li);\r\n    }\r\n}\r\n\r\nconst displayWell = (selected) => {\r\n    let data = localStorage.getItem('pl_data_wells');\r\n    let payouts = localStorage.getItem('payouts');\r\n    let well_payout = 0;\r\n    if (payouts){\r\n        payouts = JSON.parse(payouts);\r\n        well_payout = payouts[selected]; \r\n    }\r\n    //if (!data) data = fetchData();//check\r\n    data = JSON.parse(data);\r\n    if (selected == \"All Wells\") {\r\n        data = localStorage.getItem(uid)\r\n        parseData(JSON.parse(data));\r\n        return;\r\n    }\r\n    data = data[selected];\r\n    let returns = {};\r\n\r\n    for (let idx in data) {\r\n        const mo = data[idx][\"Date\"];\r\n        returns[mo] = data[idx][\"recMoReturn\"];\r\n    }\r\n    const dates_pl = format(returns);\r\n    plotRev(dates_pl[0],dates_pl[1]);\r\n\r\n    document.getElementById('selected-well').textContent = selected;\r\n    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin,curr) => runnin + curr).toFixed(2)}`\r\n\r\n\r\n    document.getElementById('payout-title').textContent = \"% Payout\";\r\n    document.getElementById('payout').textContent = `${(well_payout*100).toFixed(0)}%`;\r\n}\r\n\r\n//\\\\\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)()\r\nconst uid = localStorage.getItem('uid');\r\nconsole.log('uid :>> ', uid);\r\n\r\ndocument.getElementById(\"btnLogout\").addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.logout);\r\n\r\nfetchData();\r\n//search\r\nconst searchInput = document.getElementById('searchInput');\r\nconst wellList = document.getElementById('well-list').getElementsByTagName('li');\r\n\r\nsearchInput.addEventListener('input', function() {\r\n  const searchTerm = searchInput.value.toLowerCase();\r\n\r\n  for (let i = 0; i < wellList.length; i++) {\r\n    const wellName = wellList[i].getElementsByTagName('span')[0].textContent.toLowerCase();\r\n\r\n    if (wellName.includes(searchTerm)) {\r\n      wellList[i].style.display = 'block';\r\n    } else {\r\n      wellList[i].style.display = 'none';\r\n    }\r\n  }\r\n});\r\n\r\ndocument.getElementById(\"init_scale\").addEventListener('click', () => {\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_5__.toggleInitScale)();\r\n})\r\n\r\ndocument.getElementById(\"init_time\").addEventListener('click', () => {\r\n    ;(0,_ui__WEBPACK_IMPORTED_MODULE_5__.toggleInitTime)();\r\n})\r\n\r\n//let pl_str = localStorage.getItem('pl');\r\n//let dates_str = localStorage.getItem('dates');\r\n//if (pl_str & dates_str){\r\n//    dates_str = dates_str.split(',');\r\n//    pl_str = pl_str.split(',');\r\n//    pl_str = pl_str.map(el => parseFloat(el));\r\n//    plotRev(pl_str,dates_str);\r\n//} else {\r\n//    fetchData();\r\n//}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQ1U7QUFDVTtBQUNoQjtBQUNhO0FBQ0Y7QUFDdkQ7QUFDQSx3REFBZ0I7QUFDaEIsc0RBQWE7QUFDYjtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLE1BQU07QUFDWCx3QkFBd0Isc0RBQUc7QUFDM0I7QUFDQSxRQUFRLDBEQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkNBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2Q0FBVTtBQUNqQyxtQkFBbUIsNkNBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQscUJBQXFCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlDQUFNO0FBQzFCLHFCQUFxQix5Q0FBTTtBQUMzQjtBQUNBLDRCQUE0Qix5Q0FBTTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsOERBQThEO0FBQ3RIO0FBQ0EsdURBQXVELHVGQUF1RjtBQUM5STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFTO0FBQzNCLG1CQUFtQixtREFBVTtBQUM3QixvREFBb0QsMkNBQU07QUFDMUQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsOERBQThEO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCw2QkFBNkI7QUFDcEY7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4REFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsMENBQU07QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksb0RBQWU7QUFDbkIsQ0FBQztBQUNEO0FBQ0E7QUFDQSxJQUFJLG9EQUFjO0FBQ2xCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9wcm9maWxlLmpzP2IwZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9uaXRvclJlZ2lvbiB9IGZyb20gJy4vcmVnaW9uJ1xyXG5pbXBvcnQgeyBsb2dvdXQsIG1vbml0b3JBdXRoU3RhdGUgfSBmcm9tICcuL2luZGV4J1xyXG5pbXBvcnQgeyByZWYsZ2V0RGF0YWJhc2Usb25WYWx1ZSB9IGZyb20gJ2ZpcmViYXNlL2RhdGFiYXNlJztcclxuaW1wb3J0IHsgbGVnYWN5RWNvbiwgcGF5b3V0IH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHsgbWFrZVRyYWNlLCBtYWtlTGF5b3V0LCBjb25maWcgfSBmcm9tICcuL2xheW91dCc7XHJcbmltcG9ydCB7IHRvZ2dsZUluaXRTY2FsZSwgdG9nZ2xlSW5pdFRpbWUgfSBmcm9tICcuL3VpJztcclxuXHJcbm1vbml0b3JBdXRoU3RhdGUoKTtcclxubW9uaXRvclJlZ2lvbigpO1xyXG5cclxuY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh1aWQpOy8vY2FjaGVcclxuXHJcbiAgICBpZiAoZGF0YSl7XHJcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgcGFyc2VEYXRhKGRhdGEpO1xyXG5cclxuICAgIH1lbHNlIHsvL2dldCBmcm9tIGZiXHJcbiAgICAgICAgY29uc3QgZGVja1JlZiA9IHJlZihkYiwgJ3VzZXJzLycgKyB1aWQgKyAnL2RlY2snKTtcclxuXHJcbiAgICAgICAgb25WYWx1ZShkZWNrUmVmLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odWlkLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgIHBhcnNlRGF0YShkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmNvbnN0IHBhcnNlRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICBsZXQgcmVzID0ge307XHJcbiAgICBsZXQgcmVzX3dlbGxzID0ge307XHJcbiAgICBjb25zdCB3ZWxscyA9IE9iamVjdC5rZXlzKGRhdGEpO1xyXG4gICAgbGV0IHJldHVybnMgPSB7fTtcclxuXHJcbiAgICBmb3IgKGxldCBvYmogaW4gbGVnYWN5RWNvbikge1xyXG4gICAgICAgIGxldCB0ZW1wID0ge307XHJcbiAgICAgICAgbGV0IHJlY01vUmV0dXJuID0gMDtcclxuICAgICAgICBsZXQgZGF0ZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnb2JqIDo+PiAnLCBvYmopO1xyXG4gICAgICAgIGZvciAobGV0IGlkeCBpbiBvYmope1xyXG4gICAgICAgICAgICBsZXQgd2VsbCA9IGxlZ2FjeUVjb25bb2JqXVtpZHhdWydXZWxsIE5hbWUnXTtcclxuICAgICAgICAgICAgZGF0ZSA9IGxlZ2FjeUVjb25bb2JqXVtpZHhdWydEYXRlJ107XHJcbiAgICAgICAgICAgIHdlbGwgPSB3ZWxsLnJlcGxhY2UoJyMnLCcnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh3ZWxscy5pbmNsdWRlcyh3ZWxsKSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmluID0gbGVnYWN5RWNvbltvYmpdW2lkeF07XHJcbiAgICAgICAgICAgICAgICBmaW4uc2hhcmUgPSBkYXRhW3dlbGxdW1wiT1JSSVwiXSArIGRhdGFbd2VsbF1bXCJXSU5SSVwiXTtcclxuICAgICAgICAgICAgICAgIHJlY01vUmV0dXJuICs9IGZpbltcIlJlY2VudCBNb250aCBQJkxcIl0qZmluLnNoYXJlO1xyXG4gICAgICAgICAgICAgICAgdGVtcFt3ZWxsXSA9IGZpbjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoISh3ZWxsIGluIHJlc193ZWxscykpIHJlc193ZWxsc1t3ZWxsXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZmluLnJlY01vUmV0dXJuID0gZmluW1wiUmVjZW50IE1vbnRoIFAmTFwiXSpmaW4uc2hhcmU7XHJcbiAgICAgICAgICAgICAgICByZXNfd2VsbHNbd2VsbF0ucHVzaChmaW4pXHJcblxyXG4gICAgICAgICAgICAgICAgLy9kaWN0IGJ5IHdlbGxcclxuICAgICAgICAgICAgICAgIC8vcmVzX3dlbGxzW3dlbGxdID0gdGVtcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0ZW1wLnJlY01vUmV0dXJuID0gcmVjTW9SZXR1cm47XHJcbiAgICAgICAgcmV0dXJuc1tkYXRlXSA9IHJlY01vUmV0dXJuO1xyXG4gICAgICAgIHJlc1tkYXRlXSA9IHRlbXA7XHJcbiAgICB9XHJcbiAgICBsZXQgd2VsbF9saXN0ID0gT2JqZWN0LmtleXMocmVzX3dlbGxzKTtcclxuICAgIHdlbGxfbGlzdC5zb3J0KChhLCBiKSA9PiBhLmxvY2FsZUNvbXBhcmUoYiwgdW5kZWZpbmVkLCB7IHNlbnNpdGl2aXR5OiAnYmFzZScgfSkpO1xyXG4gICAgd2VsbF9saXN0LnVuc2hpZnQoXCJBbGwgV2VsbHNcIilcclxuICAgIGluaXRXZWxsTGlzdCh3ZWxsX2xpc3QpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsX2RhdGFfd2VsbHMnLEpTT04uc3RyaW5naWZ5KHJlc193ZWxscykpO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IGRhdGVzX3BsID0gZm9ybWF0KHJldHVybnMpO1xyXG4gICAgcGxvdFJldihkYXRlc19wbFswXSxkYXRlc19wbFsxXSk7XHJcblxyXG4gICAgLy9tZWFuIHBheW91dFxyXG4gICAgbGV0IHBheW91dHMgPSB7fTtcclxuICAgIGZvciAobGV0IGlkeCBpbiBwYXlvdXQpIHtcclxuICAgICAgICBjb25zdCB3ZWxsID0gcGF5b3V0W2lkeF1bXCJXZWxsIE5hbWVcIl0ucmVwbGFjZSgnIycsXCJcIik7XHJcbiAgICAgICAgaWYgKHdlbGxfbGlzdC5pbmNsdWRlcyh3ZWxsKSkge1xyXG4gICAgICAgICAgICBwYXlvdXRzW3dlbGxdID0gcGF5b3V0W2lkeF1bXCIlIFBheW91dFwiXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygncGF5b3V0cyA6Pj4gJywgcGF5b3V0cyk7XHJcbiAgICBjb25zdCBwYXlvdXRzX251bSA9IE9iamVjdC5lbnRyaWVzKHBheW91dHMpLm1hcCgoW18sIHZhbHVlXSkgPT4gdmFsdWUpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZC13ZWxsJykudGV4dENvbnRlbnQgPSBcIkFsbCBXZWxsc1wiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bS1wbCcpLnRleHRDb250ZW50ID0gYCQke2RhdGVzX3BsWzFdLnJlZHVjZSgocnVubmluLGN1cnIpID0+IHJ1bm5pbiArIGN1cnIpLnRvRml4ZWQoMil9YDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXlvdXQtdGl0bGUnKS50ZXh0Q29udGVudCA9IFwiJSBNZWFuIFBheW91dFwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW91dCcpLnRleHRDb250ZW50ID0gYCR7KHBheW91dHNfbnVtLnJlZHVjZSgocnVubmluLGN1cnIpID0+IHJ1bm5pbiArIGN1cnIpKjEwMC9wYXlvdXRzX251bS5sZW5ndGgpLnRvRml4ZWQoMCl9JWA7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BheW91dHMnLEpTT04uc3RyaW5naWZ5KHBheW91dHMpKTtcclxuICAgIC8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGVzJyxkYXRlcyk7XHJcbiAgICAvL2xvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbCcscGwpO1xyXG4gICAgcmV0dXJuIHJlcztcclxufTtcclxuXHJcbmNvbnN0IHBsb3RSZXYgPSAoeCx5KSA9PiB7XHJcbiAgICBjb25zdCB0cmFjZSA9IG1ha2VUcmFjZSh4LHksJ1AmTCcsbnVsbCwnYmxhY2snLG51bGwpO1xyXG4gICAgY29uc3QgbGF5b3V0ID0gbWFrZUxheW91dChcIlAmTCAoU1Qgb25seSlcIilcclxuICAgIFBsb3RseS5uZXdQbG90KFwicmV0dXJuc0N1cnZlXCIsIFt0cmFjZV0sIGxheW91dCwgY29uZmlnKS50aGVuKCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bkxvZ291dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBmb3JtYXQgPSAob2JqKSA9PiB7XHJcbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IE9iamVjdC5lbnRyaWVzKG9iaikuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGVBID0gbmV3IERhdGUoYVswXSk7XHJcbiAgICAgICAgY29uc3QgZGF0ZUIgPSBuZXcgRGF0ZShiWzBdKTtcclxuICAgICAgICByZXR1cm4gZGF0ZUEgLSBkYXRlQjtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNvcnRlZE9iaiA9IE9iamVjdC5mcm9tRW50cmllcyhzb3J0ZWRBcnJheSk7XHJcbiAgICBjb25zdCBkYXRlcyA9IE9iamVjdC5lbnRyaWVzKHNvcnRlZE9iaikubWFwKChba2V5LCBfXSkgPT4ga2V5KTtcclxuICAgIGNvbnN0IHBsID0gT2JqZWN0LmVudHJpZXMoc29ydGVkT2JqKS5tYXAoKFtfLCB2YWx1ZV0pID0+IHZhbHVlKTtcclxuXHJcbiAgICByZXR1cm4gW2RhdGVzLCBwbF1cclxufVxyXG5cclxuY29uc3QgaW5pdFdlbGxMaXN0ID0gKHdlbGxzKSA9PiB7XHJcbiAgICBsZXQgdWxXZWxsTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VsbC1saXN0XCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIiwgXCJhY3RpdmVcIik7XHJcbiAgXHJcbiAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBhLmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlua1wiKTtcclxuICBcclxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcIm1lbnUtdGl0bGVcIik7XHJcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHdlbGxzW2ldO1xyXG4gIFxyXG4gICAgICAgIGEuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XHJcblxyXG4gICAgICAgIGxpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDbGlja2VkOiBcIiArIHRoaXMudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICBkaXNwbGF5V2VsbCh0aGlzLnRleHRDb250ZW50KTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIHVsV2VsbExpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5V2VsbCA9IChzZWxlY3RlZCkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGxfZGF0YV93ZWxscycpO1xyXG4gICAgbGV0IHBheW91dHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGF5b3V0cycpO1xyXG4gICAgbGV0IHdlbGxfcGF5b3V0ID0gMDtcclxuICAgIGlmIChwYXlvdXRzKXtcclxuICAgICAgICBwYXlvdXRzID0gSlNPTi5wYXJzZShwYXlvdXRzKTtcclxuICAgICAgICB3ZWxsX3BheW91dCA9IHBheW91dHNbc2VsZWN0ZWRdOyBcclxuICAgIH1cclxuICAgIC8vaWYgKCFkYXRhKSBkYXRhID0gZmV0Y2hEYXRhKCk7Ly9jaGVja1xyXG4gICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICBpZiAoc2VsZWN0ZWQgPT0gXCJBbGwgV2VsbHNcIikge1xyXG4gICAgICAgIGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh1aWQpXHJcbiAgICAgICAgcGFyc2VEYXRhKEpTT04ucGFyc2UoZGF0YSkpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGRhdGEgPSBkYXRhW3NlbGVjdGVkXTtcclxuICAgIGxldCByZXR1cm5zID0ge307XHJcblxyXG4gICAgZm9yIChsZXQgaWR4IGluIGRhdGEpIHtcclxuICAgICAgICBjb25zdCBtbyA9IGRhdGFbaWR4XVtcIkRhdGVcIl07XHJcbiAgICAgICAgcmV0dXJuc1ttb10gPSBkYXRhW2lkeF1bXCJyZWNNb1JldHVyblwiXTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGVzX3BsID0gZm9ybWF0KHJldHVybnMpO1xyXG4gICAgcGxvdFJldihkYXRlc19wbFswXSxkYXRlc19wbFsxXSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGVkLXdlbGwnKS50ZXh0Q29udGVudCA9IHNlbGVjdGVkO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bS1wbCcpLnRleHRDb250ZW50ID0gYCQke2RhdGVzX3BsWzFdLnJlZHVjZSgocnVubmluLGN1cnIpID0+IHJ1bm5pbiArIGN1cnIpLnRvRml4ZWQoMil9YFxyXG5cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5b3V0LXRpdGxlJykudGV4dENvbnRlbnQgPSBcIiUgUGF5b3V0XCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5b3V0JykudGV4dENvbnRlbnQgPSBgJHsod2VsbF9wYXlvdXQqMTAwKS50b0ZpeGVkKDApfSVgO1xyXG59XHJcblxyXG4vL1xcXFxcclxuY29uc3QgZGIgPSBnZXREYXRhYmFzZSgpXHJcbmNvbnN0IHVpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1aWQnKTtcclxuY29uc29sZS5sb2coJ3VpZCA6Pj4gJywgdWlkKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuTG9nb3V0XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9nb3V0KTtcclxuXHJcbmZldGNoRGF0YSgpO1xyXG4vL3NlYXJjaFxyXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hJbnB1dCcpO1xyXG5jb25zdCB3ZWxsTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxsLWxpc3QnKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKTtcclxuXHJcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgY29uc3Qgc2VhcmNoVGVybSA9IHNlYXJjaElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2VsbExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IHdlbGxOYW1lID0gd2VsbExpc3RbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NwYW4nKVswXS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGlmICh3ZWxsTmFtZS5pbmNsdWRlcyhzZWFyY2hUZXJtKSkge1xyXG4gICAgICB3ZWxsTGlzdFtpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdlbGxMaXN0W2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5pdF9zY2FsZVwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRvZ2dsZUluaXRTY2FsZSgpO1xyXG59KVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbml0X3RpbWVcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB0b2dnbGVJbml0VGltZSgpO1xyXG59KVxyXG5cclxuLy9sZXQgcGxfc3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsJyk7XHJcbi8vbGV0IGRhdGVzX3N0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRlcycpO1xyXG4vL2lmIChwbF9zdHIgJiBkYXRlc19zdHIpe1xyXG4vLyAgICBkYXRlc19zdHIgPSBkYXRlc19zdHIuc3BsaXQoJywnKTtcclxuLy8gICAgcGxfc3RyID0gcGxfc3RyLnNwbGl0KCcsJyk7XHJcbi8vICAgIHBsX3N0ciA9IHBsX3N0ci5tYXAoZWwgPT4gcGFyc2VGbG9hdChlbCkpO1xyXG4vLyAgICBwbG90UmV2KHBsX3N0cixkYXRlc19zdHIpO1xyXG4vL30gZWxzZSB7XHJcbi8vICAgIGZldGNoRGF0YSgpO1xyXG4vL30iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/profile.js\n");

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