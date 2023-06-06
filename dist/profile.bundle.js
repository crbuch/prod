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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   layoutWbd: () => (/* binding */ layoutWbd),\n/* harmony export */   makeLayout: () => (/* binding */ makeLayout),\n/* harmony export */   makeTrace: () => (/* binding */ makeTrace)\n/* harmony export */ });\nconst makeTrace = (x, y, name, type, color, dash, text, visible) => ({\r\n    x,\r\n    y,\r\n    text,\r\n    name,\r\n    visible,\r\n    type: type || \"line\",\r\n    line: {\r\n        color,\r\n        dash,\r\n    },\r\n});\r\n\r\nconst makeLayout = (title, type, tickvals) => ({\r\n    title,\r\n    yaxis: {\r\n        type: type || \"linear\",\r\n        rangemode: \"tozero\",\r\n        autorange: true,\r\n        tickformat: \"f\",\r\n        tickvals,\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n    xaxis: {\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n});\r\n\r\nconst config = {\r\n    modeBarButtonsToRemove: [\r\n        \"sendDataToCloud\",\r\n        \"autoScale2d\",\r\n        \"hoverClosestCartesian\",\r\n        \"hoverCompareCartesian\",\r\n        \"lasso2d\",\r\n        \"zoomIn2d\",\r\n        \"zoomOut2d\",\r\n        \"toggleSpikelines\",\r\n    ],\r\n    displaylogo: false,\r\n    responsive: true,\r\n};\r\n\r\nconst layoutWbd = (max,min,minTVD,wellName) => ({\r\n    width: 1620,\r\n    height: 700,\r\n\r\n    margin: {\r\n        l: 0,\r\n        r: 0,\r\n        b: 0,\r\n        t: 0,\r\n    },\r\n\r\n    title: {\r\n        text: \"Drilling for \" + wellName + \", Dimmit County, TX\",\r\n        y: 0.98,\r\n    },\r\n\r\n    legend: {\r\n        x: 0.8,\r\n        y: 0.8,\r\n    },\r\n    scene: {\r\n        aspectmode: \"cube\",\r\n        xaxis: {\r\n            title: \"Easting\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n        yaxis: {\r\n            title: \"Northing\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#f0f1f2\",\r\n            showbackground: true,\r\n\r\n        },\r\n        zaxis: {\r\n            title: \"TVD\",\r\n            nticks: 5,\r\n            range: [minTVD, -3000],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n    },\r\n    \r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2QtMS8uL3NyYy9qcy9sYXlvdXQuanM/NmZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbWFrZVRyYWNlID0gKHgsIHksIG5hbWUsIHR5cGUsIGNvbG9yLCBkYXNoLCB0ZXh0LCB2aXNpYmxlKSA9PiAoe1xyXG4gICAgeCxcclxuICAgIHksXHJcbiAgICB0ZXh0LFxyXG4gICAgbmFtZSxcclxuICAgIHZpc2libGUsXHJcbiAgICB0eXBlOiB0eXBlIHx8IFwibGluZVwiLFxyXG4gICAgbGluZToge1xyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgICAgIGRhc2gsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlTGF5b3V0ID0gKHRpdGxlLCB0eXBlLCB0aWNrdmFscykgPT4gKHtcclxuICAgIHRpdGxlLFxyXG4gICAgeWF4aXM6IHtcclxuICAgICAgICB0eXBlOiB0eXBlIHx8IFwibGluZWFyXCIsXHJcbiAgICAgICAgcmFuZ2Vtb2RlOiBcInRvemVyb1wiLFxyXG4gICAgICAgIGF1dG9yYW5nZTogdHJ1ZSxcclxuICAgICAgICB0aWNrZm9ybWF0OiBcImZcIixcclxuICAgICAgICB0aWNrdmFscyxcclxuICAgICAgICBncmlkY29sb3I6IFwiI2RiZGJkYlwiLFxyXG4gICAgfSxcclxuICAgIHhheGlzOiB7XHJcbiAgICAgICAgZ3JpZGNvbG9yOiBcIiNkYmRiZGJcIixcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIG1vZGVCYXJCdXR0b25zVG9SZW1vdmU6IFtcclxuICAgICAgICBcInNlbmREYXRhVG9DbG91ZFwiLFxyXG4gICAgICAgIFwiYXV0b1NjYWxlMmRcIixcclxuICAgICAgICBcImhvdmVyQ2xvc2VzdENhcnRlc2lhblwiLFxyXG4gICAgICAgIFwiaG92ZXJDb21wYXJlQ2FydGVzaWFuXCIsXHJcbiAgICAgICAgXCJsYXNzbzJkXCIsXHJcbiAgICAgICAgXCJ6b29tSW4yZFwiLFxyXG4gICAgICAgIFwiem9vbU91dDJkXCIsXHJcbiAgICAgICAgXCJ0b2dnbGVTcGlrZWxpbmVzXCIsXHJcbiAgICBdLFxyXG4gICAgZGlzcGxheWxvZ286IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsYXlvdXRXYmQgPSAobWF4LG1pbixtaW5UVkQsd2VsbE5hbWUpID0+ICh7XHJcbiAgICB3aWR0aDogMTYyMCxcclxuICAgIGhlaWdodDogNzAwLFxyXG5cclxuICAgIG1hcmdpbjoge1xyXG4gICAgICAgIGw6IDAsXHJcbiAgICAgICAgcjogMCxcclxuICAgICAgICBiOiAwLFxyXG4gICAgICAgIHQ6IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdGV4dDogXCJEcmlsbGluZyBmb3IgXCIgKyB3ZWxsTmFtZSArIFwiLCBEaW1taXQgQ291bnR5LCBUWFwiLFxyXG4gICAgICAgIHk6IDAuOTgsXHJcbiAgICB9LFxyXG5cclxuICAgIGxlZ2VuZDoge1xyXG4gICAgICAgIHg6IDAuOCxcclxuICAgICAgICB5OiAwLjgsXHJcbiAgICB9LFxyXG4gICAgc2NlbmU6IHtcclxuICAgICAgICBhc3BlY3Rtb2RlOiBcImN1YmVcIixcclxuICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJFYXN0aW5nXCIsXHJcbiAgICAgICAgICAgIG50aWNrczogOCxcclxuICAgICAgICAgICAgcmFuZ2U6IFttYXgsIG1pbl0sXHJcbiAgICAgICAgICAgIGdyaWRjb2xvcjogXCIjOGE4YThhXCIsXHJcbiAgICAgICAgICAgIHRpY2tjb2xvcjogXCIjMDUwNTA1XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRjb2xvcjogXCIjZWRlZGVkXCIsXHJcbiAgICAgICAgICAgIHNob3diYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiTm9ydGhpbmdcIixcclxuICAgICAgICAgICAgbnRpY2tzOiA4LFxyXG4gICAgICAgICAgICByYW5nZTogW21heCwgbWluXSxcclxuICAgICAgICAgICAgZ3JpZGNvbG9yOiBcIiM4YThhOGFcIixcclxuICAgICAgICAgICAgdGlja2NvbG9yOiBcIiMwNTA1MDVcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZGNvbG9yOiBcIiNmMGYxZjJcIixcclxuICAgICAgICAgICAgc2hvd2JhY2tncm91bmQ6IHRydWUsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgemF4aXM6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiVFZEXCIsXHJcbiAgICAgICAgICAgIG50aWNrczogNSxcclxuICAgICAgICAgICAgcmFuZ2U6IFttaW5UVkQsIC0zMDAwXSxcclxuICAgICAgICAgICAgZ3JpZGNvbG9yOiBcIiM4YThhOGFcIixcclxuICAgICAgICAgICAgdGlja2NvbG9yOiBcIiMwNTA1MDVcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZGNvbG9yOiBcIiNlZGVkZWRcIixcclxuICAgICAgICAgICAgc2hvd2JhY2tncm91bmQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/layout.js\n");

/***/ }),

/***/ "./src/js/profile.js":
/*!***************************!*\
  !*** ./src/js/profile.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data__WEBPACK_IMPORTED_MODULE_3__]);\n_data__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_index__WEBPACK_IMPORTED_MODULE_1__.monitorAuthState)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_2__.monitorRegion)();\r\n\r\nconst fetchData = () => {\r\n    let data = localStorage.getItem(uid);//cache\r\n\r\n    if (data){\r\n        data = JSON.parse(data);\r\n        parseData(data);\r\n\r\n    }else {//get from fb\r\n        const deckRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, 'users/' + uid + '/deck');\r\n\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(deckRef, (snapshot) => {\r\n            const data = snapshot.val();\r\n\r\n            localStorage.setItem(uid, JSON.stringify(data));\r\n            parseData(data);\r\n        })\r\n    }\r\n};\r\n\r\n\r\nconst parseData = (data) => {\r\n    let res = {};\r\n    let res_wells = {};\r\n    const wells = Object.keys(data);\r\n    let returns = {};\r\n\r\n    for (let obj in _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon) {\r\n        let temp = {};\r\n        let recMoReturn = 0;\r\n        let date;\r\n        console.log('obj :>> ', obj);\r\n        for (let idx in obj){\r\n            let well = _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon[obj][idx]['Well Name'];\r\n            date = _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon[obj][idx]['Date'];\r\n            well = well.replace('#','');\r\n\r\n            if (wells.includes(well)){\r\n                let fin = _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon[obj][idx];\r\n                fin.share = data[well][\"ORRI\"] + data[well][\"WINRI\"];\r\n                recMoReturn += fin[\"Recent Month P&L\"]*fin.share;\r\n                temp[well] = fin;\r\n\r\n                if (!(well in res_wells)) res_wells[well] = [];\r\n                fin.recMoReturn = fin[\"Recent Month P&L\"]*fin.share;\r\n                res_wells[well].push(fin)\r\n\r\n                //dict by well\r\n                //res_wells[well] = temp;\r\n            }\r\n        }\r\n        temp.recMoReturn = recMoReturn;\r\n        returns[date] = recMoReturn;\r\n        res[date] = temp;\r\n    }\r\n    let well_list = Object.keys(res_wells);\r\n    well_list.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));\r\n    well_list.unshift(\"All Wells\")\r\n    initWellList(well_list);\r\n    localStorage.setItem('pl_data_wells',JSON.stringify(res_wells));\r\n    \r\n    \r\n    const dates_pl = format(returns);\r\n    plotRev(dates_pl[0],dates_pl[1]);\r\n\r\n    //mean payout\r\n    let payouts = {};\r\n    for (let idx in _data__WEBPACK_IMPORTED_MODULE_3__.payout) {\r\n        const well = _data__WEBPACK_IMPORTED_MODULE_3__.payout[idx][\"Well Name\"].replace('#',\"\");\r\n        if (well_list.includes(well)) {\r\n            payouts[well] = _data__WEBPACK_IMPORTED_MODULE_3__.payout[idx][\"% Payout\"];\r\n        }\r\n    }\r\n    console.log('payouts :>> ', payouts);\r\n    const payouts_num = Object.entries(payouts).map(([_, value]) => value);\r\n\r\n    document.getElementById('selected-well').textContent = \"All Wells\";\r\n    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin,curr) => runnin + curr).toFixed(2)}`;\r\n    document.getElementById('payout-title').textContent = \"% Mean Payout\";\r\n    document.getElementById('payout').textContent = `${(payouts_num.reduce((runnin,curr) => runnin + curr)*100/payouts_num.length).toFixed(0)}%`;\r\n\r\n    localStorage.setItem('payouts',JSON.stringify(payouts));\r\n    //localStorage.setItem('dates',dates);\r\n    //localStorage.setItem('pl',pl);\r\n    return res;\r\n};\r\n\r\nconst plotRev = (x,y) => {\r\n    const trace = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(x,y,'P&L',null,'black',null);\r\n    const layout = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeLayout)(\"P&L (ST only)\")\r\n    Plotly.newPlot(\"returnsCurve\", [trace], layout, _layout__WEBPACK_IMPORTED_MODULE_4__.config).then(() => {\r\n        document.getElementById(\"btnLogout\").style.display = \"block\";\r\n    });\r\n}\r\n\r\n\r\nconst format = (obj) => {\r\n    const sortedArray = Object.entries(obj).sort((a, b) => {\r\n        const dateA = new Date(a[0]);\r\n        const dateB = new Date(b[0]);\r\n        return dateA - dateB;\r\n    });\r\n\r\n    const sortedObj = Object.fromEntries(sortedArray);\r\n    const dates = Object.entries(sortedObj).map(([key, _]) => key);\r\n    const pl = Object.entries(sortedObj).map(([_, value]) => value);\r\n\r\n    return [dates, pl]\r\n}\r\n\r\nconst initWellList = (wells) => {\r\n    let ulWellList = document.getElementById(\"well-list\");\r\n    for (let i = 0; i < wells.length; i++) {\r\n        let li = document.createElement(\"li\");\r\n        li.classList.add(\"nav-item\", \"active\");\r\n  \r\n        let a = document.createElement(\"a\");\r\n        a.classList.add(\"nav-link\");\r\n  \r\n        let span = document.createElement(\"span\");\r\n        span.classList.add(\"menu-title\");\r\n        span.textContent = wells[i];\r\n  \r\n        a.appendChild(span);\r\n        li.appendChild(a);\r\n\r\n        li.onclick = function() {\r\n            console.log(\"Clicked: \" + this.textContent);\r\n            displayWell(this.textContent);\r\n          };\r\n\r\n        ulWellList.appendChild(li);\r\n    }\r\n}\r\n\r\nconst displayWell = (selected) => {\r\n    let data = localStorage.getItem('pl_data_wells');\r\n    let payouts = localStorage.getItem('payouts');\r\n    let well_payout = 0;\r\n    if (payouts){\r\n        payouts = JSON.parse(payouts);\r\n        well_payout = payouts[selected]; \r\n    }\r\n    //if (!data) data = fetchData();//check\r\n    data = JSON.parse(data);\r\n    if (selected == \"All Wells\") {\r\n        data = localStorage.getItem(uid)\r\n        parseData(JSON.parse(data));\r\n        return;\r\n    }\r\n    data = data[selected];\r\n    let returns = {};\r\n\r\n    for (let idx in data) {\r\n        const mo = data[idx][\"Date\"];\r\n        returns[mo] = data[idx][\"recMoReturn\"];\r\n    }\r\n    const dates_pl = format(returns);\r\n    plotRev(dates_pl[0],dates_pl[1]);\r\n\r\n    document.getElementById('selected-well').textContent = selected;\r\n    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin,curr) => runnin + curr).toFixed(2)}`\r\n\r\n\r\n    document.getElementById('payout-title').textContent = \"% Payout\";\r\n    document.getElementById('payout').textContent = `${(well_payout*100).toFixed(0)}%`;\r\n}\r\n\r\n//\\\\\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)()\r\nconst uid = localStorage.getItem('uid');\r\nconsole.log('uid :>> ', uid);\r\n\r\ndocument.getElementById(\"btnLogout\").addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.logout);\r\n\r\nfetchData();\r\n//search\r\nconst searchInput = document.getElementById('searchInput');\r\nconst wellList = document.getElementById('well-list').getElementsByTagName('li');\r\n\r\nsearchInput.addEventListener('input', function() {\r\n  const searchTerm = searchInput.value.toLowerCase();\r\n\r\n  for (let i = 0; i < wellList.length; i++) {\r\n    const wellName = wellList[i].getElementsByTagName('span')[0].textContent.toLowerCase();\r\n\r\n    if (wellName.includes(searchTerm)) {\r\n      wellList[i].style.display = 'block';\r\n    } else {\r\n      wellList[i].style.display = 'none';\r\n    }\r\n  }\r\n});\r\n\r\n\r\n//let pl_str = localStorage.getItem('pl');\r\n//let dates_str = localStorage.getItem('dates');\r\n//if (pl_str & dates_str){\r\n//    dates_str = dates_str.split(',');\r\n//    pl_str = pl_str.split(',');\r\n//    pl_str = pl_str.map(el => parseFloat(el));\r\n//    plotRev(pl_str,dates_str);\r\n//} else {\r\n//    fetchData();\r\n//}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDVTtBQUNVO0FBQ2hCO0FBQ2E7QUFDekQ7QUFDQSx3REFBZ0I7QUFDaEIsc0RBQWE7QUFDYjtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLE1BQU07QUFDWCx3QkFBd0Isc0RBQUc7QUFDM0I7QUFDQSxRQUFRLDBEQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkNBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2Q0FBVTtBQUNqQyxtQkFBbUIsNkNBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQscUJBQXFCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlDQUFNO0FBQzFCLHFCQUFxQix5Q0FBTTtBQUMzQjtBQUNBLDRCQUE0Qix5Q0FBTTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsOERBQThEO0FBQ3RIO0FBQ0EsdURBQXVELHVGQUF1RjtBQUM5STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFTO0FBQzNCLG1CQUFtQixtREFBVTtBQUM3QixvREFBb0QsMkNBQU07QUFDMUQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsOERBQThEO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCw2QkFBNkI7QUFDcEY7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4REFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsMENBQU07QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9wcm9maWxlLmpzP2IwZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9uaXRvclJlZ2lvbiB9IGZyb20gJy4vcmVnaW9uJ1xyXG5pbXBvcnQgeyBsb2dvdXQsIG1vbml0b3JBdXRoU3RhdGUgfSBmcm9tICcuL2luZGV4J1xyXG5pbXBvcnQgeyByZWYsZ2V0RGF0YWJhc2Usb25WYWx1ZSB9IGZyb20gJ2ZpcmViYXNlL2RhdGFiYXNlJztcclxuaW1wb3J0IHsgbGVnYWN5RWNvbiwgcGF5b3V0IH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHsgbWFrZVRyYWNlLCBtYWtlTGF5b3V0LCBjb25maWcgfSBmcm9tICcuL2xheW91dCc7XHJcblxyXG5tb25pdG9yQXV0aFN0YXRlKCk7XHJcbm1vbml0b3JSZWdpb24oKTtcclxuXHJcbmNvbnN0IGZldGNoRGF0YSA9ICgpID0+IHtcclxuICAgIGxldCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odWlkKTsvL2NhY2hlXHJcblxyXG4gICAgaWYgKGRhdGEpe1xyXG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgIHBhcnNlRGF0YShkYXRhKTtcclxuXHJcbiAgICB9ZWxzZSB7Ly9nZXQgZnJvbSBmYlxyXG4gICAgICAgIGNvbnN0IGRlY2tSZWYgPSByZWYoZGIsICd1c2Vycy8nICsgdWlkICsgJy9kZWNrJyk7XHJcblxyXG4gICAgICAgIG9uVmFsdWUoZGVja1JlZiwgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBzbmFwc2hvdC52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHVpZCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICBwYXJzZURhdGEoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5jb25zdCBwYXJzZURhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgbGV0IHJlcyA9IHt9O1xyXG4gICAgbGV0IHJlc193ZWxscyA9IHt9O1xyXG4gICAgY29uc3Qgd2VsbHMgPSBPYmplY3Qua2V5cyhkYXRhKTtcclxuICAgIGxldCByZXR1cm5zID0ge307XHJcblxyXG4gICAgZm9yIChsZXQgb2JqIGluIGxlZ2FjeUVjb24pIHtcclxuICAgICAgICBsZXQgdGVtcCA9IHt9O1xyXG4gICAgICAgIGxldCByZWNNb1JldHVybiA9IDA7XHJcbiAgICAgICAgbGV0IGRhdGU7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29iaiA6Pj4gJywgb2JqKTtcclxuICAgICAgICBmb3IgKGxldCBpZHggaW4gb2JqKXtcclxuICAgICAgICAgICAgbGV0IHdlbGwgPSBsZWdhY3lFY29uW29ial1baWR4XVsnV2VsbCBOYW1lJ107XHJcbiAgICAgICAgICAgIGRhdGUgPSBsZWdhY3lFY29uW29ial1baWR4XVsnRGF0ZSddO1xyXG4gICAgICAgICAgICB3ZWxsID0gd2VsbC5yZXBsYWNlKCcjJywnJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAod2VsbHMuaW5jbHVkZXMod2VsbCkpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpbiA9IGxlZ2FjeUVjb25bb2JqXVtpZHhdO1xyXG4gICAgICAgICAgICAgICAgZmluLnNoYXJlID0gZGF0YVt3ZWxsXVtcIk9SUklcIl0gKyBkYXRhW3dlbGxdW1wiV0lOUklcIl07XHJcbiAgICAgICAgICAgICAgICByZWNNb1JldHVybiArPSBmaW5bXCJSZWNlbnQgTW9udGggUCZMXCJdKmZpbi5zaGFyZTtcclxuICAgICAgICAgICAgICAgIHRlbXBbd2VsbF0gPSBmaW47XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEod2VsbCBpbiByZXNfd2VsbHMpKSByZXNfd2VsbHNbd2VsbF0gPSBbXTtcclxuICAgICAgICAgICAgICAgIGZpbi5yZWNNb1JldHVybiA9IGZpbltcIlJlY2VudCBNb250aCBQJkxcIl0qZmluLnNoYXJlO1xyXG4gICAgICAgICAgICAgICAgcmVzX3dlbGxzW3dlbGxdLnB1c2goZmluKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vZGljdCBieSB3ZWxsXHJcbiAgICAgICAgICAgICAgICAvL3Jlc193ZWxsc1t3ZWxsXSA9IHRlbXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGVtcC5yZWNNb1JldHVybiA9IHJlY01vUmV0dXJuO1xyXG4gICAgICAgIHJldHVybnNbZGF0ZV0gPSByZWNNb1JldHVybjtcclxuICAgICAgICByZXNbZGF0ZV0gPSB0ZW1wO1xyXG4gICAgfVxyXG4gICAgbGV0IHdlbGxfbGlzdCA9IE9iamVjdC5rZXlzKHJlc193ZWxscyk7XHJcbiAgICB3ZWxsX2xpc3Quc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIsIHVuZGVmaW5lZCwgeyBzZW5zaXRpdml0eTogJ2Jhc2UnIH0pKTtcclxuICAgIHdlbGxfbGlzdC51bnNoaWZ0KFwiQWxsIFdlbGxzXCIpXHJcbiAgICBpbml0V2VsbExpc3Qod2VsbF9saXN0KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbF9kYXRhX3dlbGxzJyxKU09OLnN0cmluZ2lmeShyZXNfd2VsbHMpKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBkYXRlc19wbCA9IGZvcm1hdChyZXR1cm5zKTtcclxuICAgIHBsb3RSZXYoZGF0ZXNfcGxbMF0sZGF0ZXNfcGxbMV0pO1xyXG5cclxuICAgIC8vbWVhbiBwYXlvdXRcclxuICAgIGxldCBwYXlvdXRzID0ge307XHJcbiAgICBmb3IgKGxldCBpZHggaW4gcGF5b3V0KSB7XHJcbiAgICAgICAgY29uc3Qgd2VsbCA9IHBheW91dFtpZHhdW1wiV2VsbCBOYW1lXCJdLnJlcGxhY2UoJyMnLFwiXCIpO1xyXG4gICAgICAgIGlmICh3ZWxsX2xpc3QuaW5jbHVkZXMod2VsbCkpIHtcclxuICAgICAgICAgICAgcGF5b3V0c1t3ZWxsXSA9IHBheW91dFtpZHhdW1wiJSBQYXlvdXRcIl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ3BheW91dHMgOj4+ICcsIHBheW91dHMpO1xyXG4gICAgY29uc3QgcGF5b3V0c19udW0gPSBPYmplY3QuZW50cmllcyhwYXlvdXRzKS5tYXAoKFtfLCB2YWx1ZV0pID0+IHZhbHVlKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0ZWQtd2VsbCcpLnRleHRDb250ZW50ID0gXCJBbGwgV2VsbHNcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW0tcGwnKS50ZXh0Q29udGVudCA9IGAkJHtkYXRlc19wbFsxXS5yZWR1Y2UoKHJ1bm5pbixjdXJyKSA9PiBydW5uaW4gKyBjdXJyKS50b0ZpeGVkKDIpfWA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5b3V0LXRpdGxlJykudGV4dENvbnRlbnQgPSBcIiUgTWVhbiBQYXlvdXRcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXlvdXQnKS50ZXh0Q29udGVudCA9IGAkeyhwYXlvdXRzX251bS5yZWR1Y2UoKHJ1bm5pbixjdXJyKSA9PiBydW5uaW4gKyBjdXJyKSoxMDAvcGF5b3V0c19udW0ubGVuZ3RoKS50b0ZpeGVkKDApfSVgO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXlvdXRzJyxKU09OLnN0cmluZ2lmeShwYXlvdXRzKSk7XHJcbiAgICAvL2xvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXRlcycsZGF0ZXMpO1xyXG4gICAgLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGwnLHBsKTtcclxuICAgIHJldHVybiByZXM7XHJcbn07XHJcblxyXG5jb25zdCBwbG90UmV2ID0gKHgseSkgPT4ge1xyXG4gICAgY29uc3QgdHJhY2UgPSBtYWtlVHJhY2UoeCx5LCdQJkwnLG51bGwsJ2JsYWNrJyxudWxsKTtcclxuICAgIGNvbnN0IGxheW91dCA9IG1ha2VMYXlvdXQoXCJQJkwgKFNUIG9ubHkpXCIpXHJcbiAgICBQbG90bHkubmV3UGxvdChcInJldHVybnNDdXJ2ZVwiLCBbdHJhY2VdLCBsYXlvdXQsIGNvbmZpZykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5Mb2dvdXRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuY29uc3QgZm9ybWF0ID0gKG9iaikgPT4ge1xyXG4gICAgY29uc3Qgc29ydGVkQXJyYXkgPSBPYmplY3QuZW50cmllcyhvYmopLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGFbMF0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYlswXSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGVBIC0gZGF0ZUI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzb3J0ZWRPYmogPSBPYmplY3QuZnJvbUVudHJpZXMoc29ydGVkQXJyYXkpO1xyXG4gICAgY29uc3QgZGF0ZXMgPSBPYmplY3QuZW50cmllcyhzb3J0ZWRPYmopLm1hcCgoW2tleSwgX10pID0+IGtleSk7XHJcbiAgICBjb25zdCBwbCA9IE9iamVjdC5lbnRyaWVzKHNvcnRlZE9iaikubWFwKChbXywgdmFsdWVdKSA9PiB2YWx1ZSk7XHJcblxyXG4gICAgcmV0dXJuIFtkYXRlcywgcGxdXHJcbn1cclxuXHJcbmNvbnN0IGluaXRXZWxsTGlzdCA9ICh3ZWxscykgPT4ge1xyXG4gICAgbGV0IHVsV2VsbExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlbGwtbGlzdFwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2VsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIsIFwiYWN0aXZlXCIpO1xyXG4gIFxyXG4gICAgICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgYS5jbGFzc0xpc3QuYWRkKFwibmF2LWxpbmtcIik7XHJcbiAgXHJcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJtZW51LXRpdGxlXCIpO1xyXG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSB3ZWxsc1tpXTtcclxuICBcclxuICAgICAgICBhLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xyXG5cclxuICAgICAgICBsaS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpY2tlZDogXCIgKyB0aGlzLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgZGlzcGxheVdlbGwodGhpcy50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB1bFdlbGxMaXN0LmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZGlzcGxheVdlbGwgPSAoc2VsZWN0ZWQpID0+IHtcclxuICAgIGxldCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsX2RhdGFfd2VsbHMnKTtcclxuICAgIGxldCBwYXlvdXRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BheW91dHMnKTtcclxuICAgIGxldCB3ZWxsX3BheW91dCA9IDA7XHJcbiAgICBpZiAocGF5b3V0cyl7XHJcbiAgICAgICAgcGF5b3V0cyA9IEpTT04ucGFyc2UocGF5b3V0cyk7XHJcbiAgICAgICAgd2VsbF9wYXlvdXQgPSBwYXlvdXRzW3NlbGVjdGVkXTsgXHJcbiAgICB9XHJcbiAgICAvL2lmICghZGF0YSkgZGF0YSA9IGZldGNoRGF0YSgpOy8vY2hlY2tcclxuICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgaWYgKHNlbGVjdGVkID09IFwiQWxsIFdlbGxzXCIpIHtcclxuICAgICAgICBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odWlkKVxyXG4gICAgICAgIHBhcnNlRGF0YShKU09OLnBhcnNlKGRhdGEpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkYXRhID0gZGF0YVtzZWxlY3RlZF07XHJcbiAgICBsZXQgcmV0dXJucyA9IHt9O1xyXG5cclxuICAgIGZvciAobGV0IGlkeCBpbiBkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgbW8gPSBkYXRhW2lkeF1bXCJEYXRlXCJdO1xyXG4gICAgICAgIHJldHVybnNbbW9dID0gZGF0YVtpZHhdW1wicmVjTW9SZXR1cm5cIl07XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRlc19wbCA9IGZvcm1hdChyZXR1cm5zKTtcclxuICAgIHBsb3RSZXYoZGF0ZXNfcGxbMF0sZGF0ZXNfcGxbMV0pO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZC13ZWxsJykudGV4dENvbnRlbnQgPSBzZWxlY3RlZDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW0tcGwnKS50ZXh0Q29udGVudCA9IGAkJHtkYXRlc19wbFsxXS5yZWR1Y2UoKHJ1bm5pbixjdXJyKSA9PiBydW5uaW4gKyBjdXJyKS50b0ZpeGVkKDIpfWBcclxuXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW91dC10aXRsZScpLnRleHRDb250ZW50ID0gXCIlIFBheW91dFwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW91dCcpLnRleHRDb250ZW50ID0gYCR7KHdlbGxfcGF5b3V0KjEwMCkudG9GaXhlZCgwKX0lYDtcclxufVxyXG5cclxuLy9cXFxcXHJcbmNvbnN0IGRiID0gZ2V0RGF0YWJhc2UoKVxyXG5jb25zdCB1aWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndWlkJyk7XHJcbmNvbnNvbGUubG9nKCd1aWQgOj4+ICcsIHVpZCk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bkxvZ291dFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ291dCk7XHJcblxyXG5mZXRjaERhdGEoKTtcclxuLy9zZWFyY2hcclxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoSW5wdXQnKTtcclxuY29uc3Qgd2VsbExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsbC1saXN0JykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJyk7XHJcblxyXG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IHNlYXJjaFRlcm0gPSBzZWFyY2hJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHdlbGxMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCB3ZWxsTmFtZSA9IHdlbGxMaXN0W2ldLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzcGFuJylbMF0udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBpZiAod2VsbE5hbWUuaW5jbHVkZXMoc2VhcmNoVGVybSkpIHtcclxuICAgICAgd2VsbExpc3RbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3ZWxsTGlzdFtpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuLy9sZXQgcGxfc3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsJyk7XHJcbi8vbGV0IGRhdGVzX3N0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRlcycpO1xyXG4vL2lmIChwbF9zdHIgJiBkYXRlc19zdHIpe1xyXG4vLyAgICBkYXRlc19zdHIgPSBkYXRlc19zdHIuc3BsaXQoJywnKTtcclxuLy8gICAgcGxfc3RyID0gcGxfc3RyLnNwbGl0KCcsJyk7XHJcbi8vICAgIHBsX3N0ciA9IHBsX3N0ci5tYXAoZWwgPT4gcGFyc2VGbG9hdChlbCkpO1xyXG4vLyAgICBwbG90UmV2KHBsX3N0cixkYXRlc19zdHIpO1xyXG4vL30gZWxzZSB7XHJcbi8vICAgIGZldGNoRGF0YSgpO1xyXG4vL30iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/profile.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-d0574a","vendors-node_modules_d3_src_index_js","src_js_data_js-src_js_index_js-src_js_region_js"], () => (__webpack_require__("./src/js/profile.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;