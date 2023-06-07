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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data__WEBPACK_IMPORTED_MODULE_3__]);\n_data__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_index__WEBPACK_IMPORTED_MODULE_1__.monitorAuthState)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_2__.monitorRegion)();\r\n\r\nconst fetchData = () => {\r\n    let data = localStorage.getItem(uid);//cache\r\n\r\n    if (data){\r\n        data = JSON.parse(data);\r\n        parseData(data);\r\n\r\n    }else {//get from fb\r\n        const deckRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, 'users/' + uid + '/deck');\r\n\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(deckRef, (snapshot) => {\r\n            const data = snapshot.val();\r\n\r\n            localStorage.setItem(uid, JSON.stringify(data));\r\n            parseData(data);\r\n        })\r\n    }\r\n};\r\n\r\n\r\nconst parseData = (data) => {\r\n    let res = {};\r\n    let res_wells = {};\r\n    const wells = Object.keys(data);\r\n    let returns = {};\r\n\r\n    for (let obj in _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon) {\r\n        let temp = {};\r\n        let recMoReturn = 0;\r\n        let date;\r\n        console.log('obj :>> ', obj);\r\n        for (let idx in obj){\r\n            let well = _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon[obj][idx]['Well Name'];\r\n            date = _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon[obj][idx]['Date'];\r\n            well = well.replace('#','');\r\n\r\n            if (wells.includes(well)){\r\n                let fin = _data__WEBPACK_IMPORTED_MODULE_3__.legacyEcon[obj][idx];\r\n                fin.share = data[well][\"ORRI\"] + data[well][\"WINRI\"];\r\n                recMoReturn += fin[\"Recent Month P&L\"]*fin.share;\r\n                temp[well] = fin;\r\n\r\n                if (!(well in res_wells)) res_wells[well] = [];\r\n                fin.recMoReturn = fin[\"Recent Month P&L\"]*fin.share;\r\n                res_wells[well].push(fin)\r\n\r\n                //dict by well\r\n                //res_wells[well] = temp;\r\n            }\r\n        }\r\n        temp.recMoReturn = recMoReturn;\r\n        returns[date] = recMoReturn;\r\n        res[date] = temp;\r\n    }\r\n    let well_list = Object.keys(res_wells);\r\n    well_list.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));\r\n    well_list.unshift(\"All Wells\")\r\n    initWellList(well_list);\r\n    localStorage.setItem('pl_data_wells',JSON.stringify(res_wells));\r\n    \r\n    \r\n    const dates_pl = format(returns);\r\n    plotRev(dates_pl[0],dates_pl[1]);\r\n\r\n    //mean payout\r\n    let payouts = {};\r\n    for (let idx in _data__WEBPACK_IMPORTED_MODULE_3__.payout) {\r\n        const well = _data__WEBPACK_IMPORTED_MODULE_3__.payout[idx][\"Well Name\"].replace('#',\"\");\r\n        if (well_list.includes(well)) {\r\n            payouts[well] = _data__WEBPACK_IMPORTED_MODULE_3__.payout[idx][\"% Payout\"];\r\n        }\r\n    }\r\n    console.log('payouts :>> ', payouts);\r\n    const payouts_num = Object.entries(payouts).map(([_, value]) => value);\r\n\r\n    document.getElementById('selected-well').textContent = \"All Wells\";\r\n    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin,curr) => runnin + curr).toFixed(2)}`;\r\n    document.getElementById('payout-title').textContent = \"% Mean Payout\";\r\n    document.getElementById('payout').textContent = `${(payouts_num.reduce((runnin,curr) => runnin + curr)*100/payouts_num.length).toFixed(0)}%`;\r\n\r\n    localStorage.setItem('payouts',JSON.stringify(payouts));\r\n    //localStorage.setItem('dates',dates);\r\n    //localStorage.setItem('pl',pl);\r\n    return res;\r\n};\r\n\r\nconst plotRev = (x,y) => {\r\n    const trace = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(x,y,'P&L',null,'black',null);\r\n    const layout = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeLayout)(\"P&L (ST only)\")\r\n    Plotly.newPlot(\"returnsCurve\", [trace], layout, _layout__WEBPACK_IMPORTED_MODULE_4__.config).then(() => {\r\n        document.getElementById(\"btnLogout\").style.display = \"block\";\r\n    });\r\n}\r\n\r\n\r\nconst format = (obj) => {\r\n    const sortedArray = Object.entries(obj).sort((a, b) => {\r\n        const dateA = new Date(a[0]);\r\n        const dateB = new Date(b[0]);\r\n        return dateA - dateB;\r\n    });\r\n\r\n    const sortedObj = Object.fromEntries(sortedArray);\r\n    const dates = Object.entries(sortedObj).map(([key, _]) => key);\r\n    const pl = Object.entries(sortedObj).map(([_, value]) => value);\r\n\r\n    return [dates, pl]\r\n}\r\n\r\nconst initWellList = (wells) => {\r\n    let ulWellList = document.getElementById(\"well-list\");\r\n    for (let i = 0; i < wells.length; i++) {\r\n        let li = document.createElement(\"li\");\r\n        li.classList.add(\"nav-item\", \"active\");\r\n        li.style.cursor = \"pointer\";\r\n  \r\n        let a = document.createElement(\"a\");\r\n        a.classList.add(\"nav-link\");\r\n  \r\n        let span = document.createElement(\"span\");\r\n        span.classList.add(\"menu-title\");\r\n        span.textContent = wells[i];\r\n  \r\n        a.appendChild(span);\r\n        li.appendChild(a);\r\n\r\n        li.onclick = function() {\r\n            console.log(\"Clicked: \" + this.textContent);\r\n            displayWell(this.textContent);\r\n          };\r\n\r\n        ulWellList.appendChild(li);\r\n    }\r\n}\r\n\r\nconst displayWell = (selected) => {\r\n    let data = localStorage.getItem('pl_data_wells');\r\n    let payouts = localStorage.getItem('payouts');\r\n    let well_payout = 0;\r\n    if (payouts){\r\n        payouts = JSON.parse(payouts);\r\n        well_payout = payouts[selected]; \r\n    }\r\n    //if (!data) data = fetchData();//check\r\n    data = JSON.parse(data);\r\n    if (selected == \"All Wells\") {\r\n        data = localStorage.getItem(uid)\r\n        parseData(JSON.parse(data));\r\n        return;\r\n    }\r\n    data = data[selected];\r\n    let returns = {};\r\n\r\n    for (let idx in data) {\r\n        const mo = data[idx][\"Date\"];\r\n        returns[mo] = data[idx][\"recMoReturn\"];\r\n    }\r\n    const dates_pl = format(returns);\r\n    plotRev(dates_pl[0],dates_pl[1]);\r\n\r\n    document.getElementById('selected-well').textContent = selected;\r\n    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin,curr) => runnin + curr).toFixed(2)}`\r\n\r\n\r\n    document.getElementById('payout-title').textContent = \"% Payout\";\r\n    document.getElementById('payout').textContent = `${(well_payout*100).toFixed(0)}%`;\r\n}\r\n\r\n//\\\\\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)()\r\nconst uid = localStorage.getItem('uid');\r\nconsole.log('uid :>> ', uid);\r\n\r\ndocument.getElementById(\"btnLogout\").addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.logout);\r\n\r\nfetchData();\r\n//search\r\nconst searchInput = document.getElementById('searchInput');\r\nconst wellList = document.getElementById('well-list').getElementsByTagName('li');\r\n\r\nsearchInput.addEventListener('input', function() {\r\n  const searchTerm = searchInput.value.toLowerCase();\r\n\r\n  for (let i = 0; i < wellList.length; i++) {\r\n    const wellName = wellList[i].getElementsByTagName('span')[0].textContent.toLowerCase();\r\n\r\n    if (wellName.includes(searchTerm)) {\r\n      wellList[i].style.display = 'block';\r\n    } else {\r\n      wellList[i].style.display = 'none';\r\n    }\r\n  }\r\n});\r\n\r\n\r\ndocument.getElementById(\"init_scale\").addEventListener('click', () => {\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_5__.toggleInitScale)();\r\n})\r\n\r\ndocument.getElementById(\"init_time\").addEventListener('click', () => {\r\n    ;(0,_ui__WEBPACK_IMPORTED_MODULE_5__.toggleInitTime)();\r\n})\r\n\r\ndocument.getElementById(\"show_pwd_form_btn\").addEventListener('click', () => {\r\n    debugger;\r\n    document.getElementById('change_pwd_form').style.display = \"block\";\r\n})\r\n\r\ndocument.getElementById(\"close_pwd_form\").addEventListener('click', () => {\r\n    document.getElementById('change_pwd_form').style.display = \"none\";\r\n})\r\n\r\ndocument.getElementById(\"change_pwd_btn\").addEventListener('click', () => {\r\n    let pwd = document.getElementById(\"new_pwd\").value;\r\n    let pwd_rpt = document.getElementById(\"new_pwd_rpt\").value;\r\n    const res = (0,_index__WEBPACK_IMPORTED_MODULE_1__.changePwd)(pwd,pwd_rpt);\r\n})\r\n\r\nwindow.onload = function () {\r\n    const currTime = localStorage.getItem('initTime');\r\n    let time = \"30 Days\";\r\n    if (currTime == 0) time = \"Inception\";\r\n\r\n    document.getElementById(\"init_scale\").textContent = localStorage.getItem('initScale');\r\n    document.getElementById(\"init_time\").textContent = time;\r\n}();\r\n\r\n//let pl_str = localStorage.getItem('pl');\r\n//let dates_str = localStorage.getItem('dates');\r\n//if (pl_str & dates_str){\r\n//    dates_str = dates_str.split(',');\r\n//    pl_str = pl_str.split(',');\r\n//    pl_str = pl_str.map(el => parseFloat(el));\r\n//    plotRev(pl_str,dates_str);\r\n//} else {\r\n//    fetchData();\r\n//}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9uaXRvclJlZ2lvbiB9IGZyb20gJy4vcmVnaW9uJ1xyXG5pbXBvcnQgeyBsb2dvdXQsIG1vbml0b3JBdXRoU3RhdGUsIGNoYW5nZVB3ZCB9IGZyb20gJy4vaW5kZXgnXHJcbmltcG9ydCB7IHJlZixnZXREYXRhYmFzZSxvblZhbHVlIH0gZnJvbSAnZmlyZWJhc2UvZGF0YWJhc2UnO1xyXG5pbXBvcnQgeyBsZWdhY3lFY29uLCBwYXlvdXQgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgeyBtYWtlVHJhY2UsIG1ha2VMYXlvdXQsIGNvbmZpZyB9IGZyb20gJy4vbGF5b3V0JztcclxuaW1wb3J0IHsgdG9nZ2xlSW5pdFNjYWxlLCB0b2dnbGVJbml0VGltZSB9IGZyb20gJy4vdWknO1xyXG5cclxubW9uaXRvckF1dGhTdGF0ZSgpO1xyXG5tb25pdG9yUmVnaW9uKCk7XHJcblxyXG5jb25zdCBmZXRjaERhdGEgPSAoKSA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHVpZCk7Ly9jYWNoZVxyXG5cclxuICAgIGlmIChkYXRhKXtcclxuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICBwYXJzZURhdGEoZGF0YSk7XHJcblxyXG4gICAgfWVsc2Ugey8vZ2V0IGZyb20gZmJcclxuICAgICAgICBjb25zdCBkZWNrUmVmID0gcmVmKGRiLCAndXNlcnMvJyArIHVpZCArICcvZGVjaycpO1xyXG5cclxuICAgICAgICBvblZhbHVlKGRlY2tSZWYsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gc25hcHNob3QudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh1aWQsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgcGFyc2VEYXRhKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuY29uc3QgcGFyc2VEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGxldCByZXMgPSB7fTtcclxuICAgIGxldCByZXNfd2VsbHMgPSB7fTtcclxuICAgIGNvbnN0IHdlbGxzID0gT2JqZWN0LmtleXMoZGF0YSk7XHJcbiAgICBsZXQgcmV0dXJucyA9IHt9O1xyXG5cclxuICAgIGZvciAobGV0IG9iaiBpbiBsZWdhY3lFY29uKSB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSB7fTtcclxuICAgICAgICBsZXQgcmVjTW9SZXR1cm4gPSAwO1xyXG4gICAgICAgIGxldCBkYXRlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvYmogOj4+ICcsIG9iaik7XHJcbiAgICAgICAgZm9yIChsZXQgaWR4IGluIG9iail7XHJcbiAgICAgICAgICAgIGxldCB3ZWxsID0gbGVnYWN5RWNvbltvYmpdW2lkeF1bJ1dlbGwgTmFtZSddO1xyXG4gICAgICAgICAgICBkYXRlID0gbGVnYWN5RWNvbltvYmpdW2lkeF1bJ0RhdGUnXTtcclxuICAgICAgICAgICAgd2VsbCA9IHdlbGwucmVwbGFjZSgnIycsJycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHdlbGxzLmluY2x1ZGVzKHdlbGwpKXtcclxuICAgICAgICAgICAgICAgIGxldCBmaW4gPSBsZWdhY3lFY29uW29ial1baWR4XTtcclxuICAgICAgICAgICAgICAgIGZpbi5zaGFyZSA9IGRhdGFbd2VsbF1bXCJPUlJJXCJdICsgZGF0YVt3ZWxsXVtcIldJTlJJXCJdO1xyXG4gICAgICAgICAgICAgICAgcmVjTW9SZXR1cm4gKz0gZmluW1wiUmVjZW50IE1vbnRoIFAmTFwiXSpmaW4uc2hhcmU7XHJcbiAgICAgICAgICAgICAgICB0ZW1wW3dlbGxdID0gZmluO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghKHdlbGwgaW4gcmVzX3dlbGxzKSkgcmVzX3dlbGxzW3dlbGxdID0gW107XHJcbiAgICAgICAgICAgICAgICBmaW4ucmVjTW9SZXR1cm4gPSBmaW5bXCJSZWNlbnQgTW9udGggUCZMXCJdKmZpbi5zaGFyZTtcclxuICAgICAgICAgICAgICAgIHJlc193ZWxsc1t3ZWxsXS5wdXNoKGZpbilcclxuXHJcbiAgICAgICAgICAgICAgICAvL2RpY3QgYnkgd2VsbFxyXG4gICAgICAgICAgICAgICAgLy9yZXNfd2VsbHNbd2VsbF0gPSB0ZW1wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRlbXAucmVjTW9SZXR1cm4gPSByZWNNb1JldHVybjtcclxuICAgICAgICByZXR1cm5zW2RhdGVdID0gcmVjTW9SZXR1cm47XHJcbiAgICAgICAgcmVzW2RhdGVdID0gdGVtcDtcclxuICAgIH1cclxuICAgIGxldCB3ZWxsX2xpc3QgPSBPYmplY3Qua2V5cyhyZXNfd2VsbHMpO1xyXG4gICAgd2VsbF9saXN0LnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiLCB1bmRlZmluZWQsIHsgc2Vuc2l0aXZpdHk6ICdiYXNlJyB9KSk7XHJcbiAgICB3ZWxsX2xpc3QudW5zaGlmdChcIkFsbCBXZWxsc1wiKVxyXG4gICAgaW5pdFdlbGxMaXN0KHdlbGxfbGlzdCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxfZGF0YV93ZWxscycsSlNPTi5zdHJpbmdpZnkocmVzX3dlbGxzKSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgZGF0ZXNfcGwgPSBmb3JtYXQocmV0dXJucyk7XHJcbiAgICBwbG90UmV2KGRhdGVzX3BsWzBdLGRhdGVzX3BsWzFdKTtcclxuXHJcbiAgICAvL21lYW4gcGF5b3V0XHJcbiAgICBsZXQgcGF5b3V0cyA9IHt9O1xyXG4gICAgZm9yIChsZXQgaWR4IGluIHBheW91dCkge1xyXG4gICAgICAgIGNvbnN0IHdlbGwgPSBwYXlvdXRbaWR4XVtcIldlbGwgTmFtZVwiXS5yZXBsYWNlKCcjJyxcIlwiKTtcclxuICAgICAgICBpZiAod2VsbF9saXN0LmluY2x1ZGVzKHdlbGwpKSB7XHJcbiAgICAgICAgICAgIHBheW91dHNbd2VsbF0gPSBwYXlvdXRbaWR4XVtcIiUgUGF5b3V0XCJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdwYXlvdXRzIDo+PiAnLCBwYXlvdXRzKTtcclxuICAgIGNvbnN0IHBheW91dHNfbnVtID0gT2JqZWN0LmVudHJpZXMocGF5b3V0cykubWFwKChbXywgdmFsdWVdKSA9PiB2YWx1ZSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGVkLXdlbGwnKS50ZXh0Q29udGVudCA9IFwiQWxsIFdlbGxzXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VtLXBsJykudGV4dENvbnRlbnQgPSBgJCR7ZGF0ZXNfcGxbMV0ucmVkdWNlKChydW5uaW4sY3VycikgPT4gcnVubmluICsgY3VycikudG9GaXhlZCgyKX1gO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW91dC10aXRsZScpLnRleHRDb250ZW50ID0gXCIlIE1lYW4gUGF5b3V0XCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5b3V0JykudGV4dENvbnRlbnQgPSBgJHsocGF5b3V0c19udW0ucmVkdWNlKChydW5uaW4sY3VycikgPT4gcnVubmluICsgY3VycikqMTAwL3BheW91dHNfbnVtLmxlbmd0aCkudG9GaXhlZCgwKX0lYDtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGF5b3V0cycsSlNPTi5zdHJpbmdpZnkocGF5b3V0cykpO1xyXG4gICAgLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0ZXMnLGRhdGVzKTtcclxuICAgIC8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsJyxwbCk7XHJcbiAgICByZXR1cm4gcmVzO1xyXG59O1xyXG5cclxuY29uc3QgcGxvdFJldiA9ICh4LHkpID0+IHtcclxuICAgIGNvbnN0IHRyYWNlID0gbWFrZVRyYWNlKHgseSwnUCZMJyxudWxsLCdibGFjaycsbnVsbCk7XHJcbiAgICBjb25zdCBsYXlvdXQgPSBtYWtlTGF5b3V0KFwiUCZMIChTVCBvbmx5KVwiKVxyXG4gICAgUGxvdGx5Lm5ld1Bsb3QoXCJyZXR1cm5zQ3VydmVcIiwgW3RyYWNlXSwgbGF5b3V0LCBjb25maWcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuTG9nb3V0XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGZvcm1hdCA9IChvYmopID0+IHtcclxuICAgIGNvbnN0IHNvcnRlZEFycmF5ID0gT2JqZWN0LmVudHJpZXMob2JqKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShhWzBdKTtcclxuICAgICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGJbMF0pO1xyXG4gICAgICAgIHJldHVybiBkYXRlQSAtIGRhdGVCO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc29ydGVkT2JqID0gT2JqZWN0LmZyb21FbnRyaWVzKHNvcnRlZEFycmF5KTtcclxuICAgIGNvbnN0IGRhdGVzID0gT2JqZWN0LmVudHJpZXMoc29ydGVkT2JqKS5tYXAoKFtrZXksIF9dKSA9PiBrZXkpO1xyXG4gICAgY29uc3QgcGwgPSBPYmplY3QuZW50cmllcyhzb3J0ZWRPYmopLm1hcCgoW18sIHZhbHVlXSkgPT4gdmFsdWUpO1xyXG5cclxuICAgIHJldHVybiBbZGF0ZXMsIHBsXVxyXG59XHJcblxyXG5jb25zdCBpbml0V2VsbExpc3QgPSAod2VsbHMpID0+IHtcclxuICAgIGxldCB1bFdlbGxMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWxsLWxpc3RcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJuYXYtaXRlbVwiLCBcImFjdGl2ZVwiKTtcclxuICAgICAgICBsaS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICBcclxuICAgICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGEuY2xhc3NMaXN0LmFkZChcIm5hdi1saW5rXCIpO1xyXG4gIFxyXG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwibWVudS10aXRsZVwiKTtcclxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gd2VsbHNbaV07XHJcbiAgXHJcbiAgICAgICAgYS5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChhKTtcclxuXHJcbiAgICAgICAgbGkub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNsaWNrZWQ6IFwiICsgdGhpcy50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlXZWxsKHRoaXMudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdWxXZWxsTGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlXZWxsID0gKHNlbGVjdGVkKSA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwbF9kYXRhX3dlbGxzJyk7XHJcbiAgICBsZXQgcGF5b3V0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwYXlvdXRzJyk7XHJcbiAgICBsZXQgd2VsbF9wYXlvdXQgPSAwO1xyXG4gICAgaWYgKHBheW91dHMpe1xyXG4gICAgICAgIHBheW91dHMgPSBKU09OLnBhcnNlKHBheW91dHMpO1xyXG4gICAgICAgIHdlbGxfcGF5b3V0ID0gcGF5b3V0c1tzZWxlY3RlZF07IFxyXG4gICAgfVxyXG4gICAgLy9pZiAoIWRhdGEpIGRhdGEgPSBmZXRjaERhdGEoKTsvL2NoZWNrXHJcbiAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIGlmIChzZWxlY3RlZCA9PSBcIkFsbCBXZWxsc1wiKSB7XHJcbiAgICAgICAgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHVpZClcclxuICAgICAgICBwYXJzZURhdGEoSlNPTi5wYXJzZShkYXRhKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IGRhdGFbc2VsZWN0ZWRdO1xyXG4gICAgbGV0IHJldHVybnMgPSB7fTtcclxuXHJcbiAgICBmb3IgKGxldCBpZHggaW4gZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG1vID0gZGF0YVtpZHhdW1wiRGF0ZVwiXTtcclxuICAgICAgICByZXR1cm5zW21vXSA9IGRhdGFbaWR4XVtcInJlY01vUmV0dXJuXCJdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0ZXNfcGwgPSBmb3JtYXQocmV0dXJucyk7XHJcbiAgICBwbG90UmV2KGRhdGVzX3BsWzBdLGRhdGVzX3BsWzFdKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0ZWQtd2VsbCcpLnRleHRDb250ZW50ID0gc2VsZWN0ZWQ7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VtLXBsJykudGV4dENvbnRlbnQgPSBgJCR7ZGF0ZXNfcGxbMV0ucmVkdWNlKChydW5uaW4sY3VycikgPT4gcnVubmluICsgY3VycikudG9GaXhlZCgyKX1gXHJcblxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXlvdXQtdGl0bGUnKS50ZXh0Q29udGVudCA9IFwiJSBQYXlvdXRcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXlvdXQnKS50ZXh0Q29udGVudCA9IGAkeyh3ZWxsX3BheW91dCoxMDApLnRvRml4ZWQoMCl9JWA7XHJcbn1cclxuXHJcbi8vXFxcXFxyXG5jb25zdCBkYiA9IGdldERhdGFiYXNlKClcclxuY29uc3QgdWlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VpZCcpO1xyXG5jb25zb2xlLmxvZygndWlkIDo+PiAnLCB1aWQpO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5Mb2dvdXRcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2dvdXQpO1xyXG5cclxuZmV0Y2hEYXRhKCk7XHJcbi8vc2VhcmNoXHJcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaElucHV0Jyk7XHJcbmNvbnN0IHdlbGxMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGwtbGlzdCcpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xyXG5cclxuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICBjb25zdCBzZWFyY2hUZXJtID0gc2VhcmNoSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWxsTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qgd2VsbE5hbWUgPSB3ZWxsTGlzdFtpXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3BhbicpWzBdLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgaWYgKHdlbGxOYW1lLmluY2x1ZGVzKHNlYXJjaFRlcm0pKSB7XHJcbiAgICAgIHdlbGxMaXN0W2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2VsbExpc3RbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5pdF9zY2FsZVwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRvZ2dsZUluaXRTY2FsZSgpO1xyXG59KVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbml0X3RpbWVcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB0b2dnbGVJbml0VGltZSgpO1xyXG59KVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93X3B3ZF9mb3JtX2J0blwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRlYnVnZ2VyO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYW5nZV9wd2RfZm9ybScpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbn0pXHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlX3B3ZF9mb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYW5nZV9wd2RfZm9ybScpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufSlcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhbmdlX3B3ZF9idG5cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsZXQgcHdkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdfcHdkXCIpLnZhbHVlO1xyXG4gICAgbGV0IHB3ZF9ycHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld19wd2RfcnB0XCIpLnZhbHVlO1xyXG4gICAgY29uc3QgcmVzID0gY2hhbmdlUHdkKHB3ZCxwd2RfcnB0KTtcclxufSlcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjdXJyVGltZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbml0VGltZScpO1xyXG4gICAgbGV0IHRpbWUgPSBcIjMwIERheXNcIjtcclxuICAgIGlmIChjdXJyVGltZSA9PSAwKSB0aW1lID0gXCJJbmNlcHRpb25cIjtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRfc2NhbGVcIikudGV4dENvbnRlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5pdFNjYWxlJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRfdGltZVwiKS50ZXh0Q29udGVudCA9IHRpbWU7XHJcbn0oKTtcclxuXHJcbi8vbGV0IHBsX3N0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwbCcpO1xyXG4vL2xldCBkYXRlc19zdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0ZXMnKTtcclxuLy9pZiAocGxfc3RyICYgZGF0ZXNfc3RyKXtcclxuLy8gICAgZGF0ZXNfc3RyID0gZGF0ZXNfc3RyLnNwbGl0KCcsJyk7XHJcbi8vICAgIHBsX3N0ciA9IHBsX3N0ci5zcGxpdCgnLCcpO1xyXG4vLyAgICBwbF9zdHIgPSBwbF9zdHIubWFwKGVsID0+IHBhcnNlRmxvYXQoZWwpKTtcclxuLy8gICAgcGxvdFJldihwbF9zdHIsZGF0ZXNfc3RyKTtcclxuLy99IGVsc2Uge1xyXG4vLyAgICBmZXRjaERhdGEoKTtcclxuLy99Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/profile.js\n");

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