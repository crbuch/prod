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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data__WEBPACK_IMPORTED_MODULE_4__]);\n_data__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_index__WEBPACK_IMPORTED_MODULE_2__.monitorAuthState)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_3__.monitorRegion)();\r\n\r\nconst fetchData = () => {\r\n    let data = localStorage.getItem(uid);//cache\r\n    if (data !== null && data !== \"null\") {\r\n        data = JSON.parse(data);\r\n        parseData(data);\r\n\r\n    } else {//get from fb\r\n        const deckRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, 'users/' + uid + '/deck');\r\n\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(deckRef, (snapshot) => {\r\n            const data = snapshot.val();\r\n\r\n            localStorage.setItem(uid, JSON.stringify(data));\r\n            if (data) parseData(data);\r\n        })\r\n    }\r\n}\r\nconst populateDropDown = (wells) => {\r\n    let menu = (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(\"#wellSelect\");\r\n    \r\n    wells.forEach(well => {\r\n        menu.append(\"option\")\r\n            .text(well)\r\n            .property(\"Value\", well);\r\n    });\r\n}\r\n\r\nconst parseData = (d) => {\r\n    const data = {}\r\n    Object.keys(d).forEach((key) => {\r\n        data[key.toLowerCase()] = d[key];\r\n    });\r\n    let res_wells = {};\r\n    let returns = {};\r\n    const wells = Object.keys(data).map(well => well.toLowerCase());\r\n\r\n    let well_list = Object.keys(d);\r\n    well_list.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));\r\n    well_list.unshift(\"All Wells\");\r\n    initWellList(well_list);\r\n    populateDropDown(well_list);\r\n\r\n    for (let [_, mnthDict] of Object.entries(_data__WEBPACK_IMPORTED_MODULE_4__.legacyEcon)) {\r\n        let recMnthReturn = 0;\r\n        let date;\r\n        for (let [_, wellDict] of Object.entries(mnthDict)) {\r\n            let well = wellDict[\"Well Name\"]\r\n            well = well.replace('#', '').toLowerCase();\r\n            date = wellDict[\"Date\"];\r\n            if (wells.includes(well)) {\r\n                let wellMnthReturn = (data[well][\"ORRI\"] + data[well][\"WINRI\"]) * wellDict[\"Recent Month P&L\"];\r\n                recMnthReturn += wellMnthReturn;\r\n                if (!(well in res_wells)) res_wells[well] = [];\r\n                res_wells[well].push({ \"Well\": well, \"Date\": date, \"Recent Mnth Return\": wellMnthReturn })\r\n            }\r\n        }\r\n        returns[date] = recMnthReturn;\r\n    }\r\n    const dates_pl = format(returns);\r\n    plotRev(dates_pl[0], dates_pl[1]);\r\n\r\n    localStorage.setItem('pl_data_wells', JSON.stringify(res_wells));\r\n\r\n    //mean payout\r\n    const payouts_num = Object.entries(_data__WEBPACK_IMPORTED_MODULE_4__.payout).map(\r\n        ([_, value]) => wells.includes(value[\"Well Name\"].replace(\"#\", \"\").toLowerCase()) ? value[\"% Payout\"] : null).filter(\r\n            el => el !== null);\r\n    document.getElementById('selected-well').textContent = \"All Wells\";\r\n    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin, curr) => runnin + curr).toFixed(2)}`;\r\n    document.getElementById('payout-title').textContent = \"% Mean Payout\";\r\n    document.getElementById('payout').textContent = `${(payouts_num.reduce((runnin, curr) => runnin + curr) * 100 / payouts_num.length).toFixed(0)}%`;\r\n}\r\n\r\nconst plotRev = (x, y, title=\"P&L (ST only)\") => {\r\n    const trace = (0,_layout__WEBPACK_IMPORTED_MODULE_5__.makeTrace)(x, y, 'P&L', null, 'black', null);\r\n    const layout = (0,_layout__WEBPACK_IMPORTED_MODULE_5__.makeLayout)(title)\r\n    Plotly.newPlot(\"returnsCurve\", [trace], layout, _layout__WEBPACK_IMPORTED_MODULE_5__.config).then(() => {\r\n        document.getElementById(\"btnLogout\").style.display = \"block\";\r\n    });\r\n}\r\n\r\nconst format = (obj) => {\r\n    const sortedArray = Object.entries(obj).sort((a, b) => {\r\n        const dateA = new Date(a[0]);\r\n        const dateB = new Date(b[0]);\r\n        return dateA - dateB;\r\n    });\r\n\r\n    const sortedObj = Object.fromEntries(sortedArray);\r\n    const dates = Object.entries(sortedObj).map(([key, _]) => key);\r\n    const pl = Object.entries(sortedObj).map(([_, value]) => value);\r\n\r\n    return [dates, pl]\r\n}\r\n\r\nconst initWellList = (wells) => {\r\n    let ulWellList = document.getElementById(\"well-list\");\r\n    for (let i = 0; i < wells.length; i++) {\r\n        let li = document.createElement(\"li\");\r\n        li.classList.add(\"nav-item\", \"active\");\r\n        li.style.cursor = \"pointer\";\r\n\r\n        let a = document.createElement(\"a\");\r\n        a.classList.add(\"nav-link\");\r\n\r\n        let span = document.createElement(\"span\");\r\n        span.classList.add(\"menu-title\");\r\n        span.textContent = wells[i];\r\n\r\n        a.appendChild(span);\r\n        li.appendChild(a);\r\n\r\n        li.onclick = function () {\r\n            displayWell(this.textContent);\r\n        };\r\n\r\n        ulWellList.appendChild(li);\r\n    }\r\n}\r\n\r\nconst displayWell = (selected) => {\r\n    let data = localStorage.getItem('pl_data_wells');\r\n    data = JSON.parse(data);\r\n    if (selected == \"All Wells\") {\r\n        data = localStorage.getItem(uid)\r\n        parseData(JSON.parse(data));\r\n        return;\r\n    }\r\n    let well_payout = Object.entries(_data__WEBPACK_IMPORTED_MODULE_4__.payout).filter(\r\n        val => val[1][\"Well Name\"].replace(\"#\",\"\").toLowerCase() == selected.toLowerCase()\r\n    );\r\n    if (well_payout.length == 0) {\r\n        plotRev([],[],`No economic data for ${selected}`);\r\n        document.getElementById('selected-well').textContent = selected;\r\n        document.getElementById('payout').textContent = `no data`;\r\n        document.getElementById('sum-pl').textContent = `no data`;\r\n        return;\r\n    };\r\n    well_payout = well_payout[0][1][\"% Payout\"]\r\n    data = data[selected.toLowerCase()];\r\n    let returns = {};\r\n\r\n    for (let idx in data) {\r\n        const mo = data[idx][\"Date\"];\r\n        returns[mo] = data[idx][\"Recent Mnth Return\"];\r\n    }\r\n\r\n    const dates_pl = format(returns);\r\n    plotRev(dates_pl[0], dates_pl[1]);\r\n\r\n    document.getElementById('selected-well').textContent = selected;\r\n    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin, curr) => runnin + curr).toFixed(2)}`\r\n    document.getElementById('payout-title').textContent = \"% Payout\";\r\n    document.getElementById('payout').textContent = `${(well_payout * 100).toFixed(0)}%`;\r\n}\r\n\r\n//\\\\\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)()\r\nconst uid = localStorage.getItem('uid');\r\nconsole.log('uid :>> ', uid);\r\n\r\ndocument.getElementById(\"btnLogout\").addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_2__.logout);\r\n\r\nfetchData();\r\n\r\n(0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(\"#wellSelect\").on(\"change\", () => {\r\n    let selected = (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(\"#wellSelect\").node().value;\r\n    displayWell(selected);\r\n});\r\n\r\n//search\r\nconst searchInput = document.getElementById('searchInput');\r\nconst wellList = document.getElementById('well-list').getElementsByTagName('li');\r\n\r\nsearchInput.addEventListener('input', function () {\r\n    const searchTerm = searchInput.value.toLowerCase();\r\n\r\n    for (let i = 0; i < wellList.length; i++) {\r\n        const wellName = wellList[i].getElementsByTagName('span')[0].textContent.toLowerCase();\r\n\r\n        if (wellName.includes(searchTerm)) {\r\n            wellList[i].style.display = 'block';\r\n        } else {\r\n            wellList[i].style.display = 'none';\r\n        }\r\n    }\r\n});\r\n\r\n\r\ndocument.getElementById(\"init_scale\").addEventListener('click', () => {\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_6__.toggleInitScale)();\r\n})\r\n\r\ndocument.getElementById(\"init_time\").addEventListener('click', () => {\r\n    ;(0,_ui__WEBPACK_IMPORTED_MODULE_6__.toggleInitTime)();\r\n})\r\n\r\ndocument.getElementById(\"show_pwd_form_btn\").addEventListener('click', () => {\r\n    document.getElementById('change_pwd_form').style.display = \"block\";\r\n})\r\n\r\ndocument.getElementById(\"close_pwd_form\").addEventListener('click', () => {\r\n    document.getElementById('change_pwd_form').style.display = \"none\";\r\n})\r\n\r\ndocument.getElementById(\"change_pwd_btn\").addEventListener('click', (e) => {\r\n    let pwd = document.getElementById(\"new_pwd\").value;\r\n    let pwd_rpt = document.getElementById(\"new_pwd_rpt\").value;\r\n    if (pwd !== pwd_rpt) {\r\n        e.preventDefault();\r\n        document.getElementById('pwd_msg').textContent = \"Passwords do not match\";\r\n        document.getElementById('change_pwd_form').style.display = \"block\";\r\n        return;\r\n    }\r\n    (0,_index__WEBPACK_IMPORTED_MODULE_2__.changePwd)(pwd, pwd_rpt);\r\n})\r\n\r\nwindow.onload = function () {\r\n    const currTime = localStorage.getItem('initTime');\r\n    let time = \"30 Days\";\r\n    if (currTime == 0) time = \"Inception\";\r\n\r\n    document.getElementById(\"init_scale\").textContent = localStorage.getItem('initScale');\r\n    document.getElementById(\"init_time\").textContent = time;\r\n}();\r\n\r\nlet plotContainer = document.getElementById(\"plotDiv\")\r\nlet returnsCurve = document.getElementById(\"returnsCurve\")\r\n\r\nlet wdiv = plotContainer.clientWidth\r\nlet wgraph = returnsCurve.clientWidth\r\nconsole.log('wdiv :>> ', wdiv);\r\nconsole.log('wgraph :>> ', wgraph);\r\n//let pl_str = localStorage.getItem('pl');\r\n//let dates_str = localStorage.getItem('dates');\r\n//if (pl_str & dates_str){\r\n//    dates_str = dates_str.split(',');\r\n//    pl_str = pl_str.split(',');\r\n//    pl_str = pl_str.map(el => parseFloat(el));\r\n//    plotRev(pl_str,dates_str);\r\n//} else {\r\n//    fetchData();\r\n//}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUNxQjtBQUNDO0FBQ2xCO0FBQ2E7QUFDRjtBQUMzQjtBQUM1QjtBQUNBLHdEQUFnQjtBQUNoQixzREFBYTtBQUNiO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLE1BQU07QUFDWix3QkFBd0Isc0RBQUc7QUFDM0I7QUFDQSxRQUFRLDBEQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwQ0FBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELHFCQUFxQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyw2Q0FBVTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxrRUFBa0U7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMseUNBQU07QUFDN0M7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELCtEQUErRDtBQUN2SDtBQUNBLHVEQUF1RCw0RkFBNEY7QUFDbko7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFTO0FBQzNCLG1CQUFtQixtREFBVTtBQUM3QixvREFBb0QsMkNBQU07QUFDMUQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx5Q0FBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsU0FBUztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsK0RBQStEO0FBQ3ZIO0FBQ0EsdURBQXVELCtCQUErQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhEQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCwwQ0FBTTtBQUNyRTtBQUNBO0FBQ0E7QUFDQSwwQ0FBTTtBQUNOLG1CQUFtQiwwQ0FBTTtBQUN6QjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBZTtBQUNuQixDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksb0RBQWM7QUFDbEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFTO0FBQ2IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2QtMS8uL3NyYy9qcy9wcm9maWxlLmpzP2IwZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9uaXRvclJlZ2lvbiB9IGZyb20gJy4vcmVnaW9uJ1xyXG5pbXBvcnQgeyBsb2dvdXQsIG1vbml0b3JBdXRoU3RhdGUsIGNoYW5nZVB3ZCB9IGZyb20gJy4vaW5kZXgnXHJcbmltcG9ydCB7IHJlZiwgZ2V0RGF0YWJhc2UsIG9uVmFsdWUgfSBmcm9tICdmaXJlYmFzZS9kYXRhYmFzZSc7XHJcbmltcG9ydCB7IGxlZ2FjeUVjb24sIHBheW91dCB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCB7IG1ha2VUcmFjZSwgbWFrZUxheW91dCwgY29uZmlnIH0gZnJvbSAnLi9sYXlvdXQnO1xyXG5pbXBvcnQgeyB0b2dnbGVJbml0U2NhbGUsIHRvZ2dsZUluaXRUaW1lIH0gZnJvbSAnLi91aSc7XHJcbmltcG9ydCB7IHNlbGVjdCB9IGZyb20gJ2QzJztcclxuXHJcbm1vbml0b3JBdXRoU3RhdGUoKTtcclxubW9uaXRvclJlZ2lvbigpO1xyXG5cclxuY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh1aWQpOy8vY2FjaGVcclxuICAgIGlmIChkYXRhICE9PSBudWxsICYmIGRhdGEgIT09IFwibnVsbFwiKSB7XHJcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgcGFyc2VEYXRhKGRhdGEpO1xyXG5cclxuICAgIH0gZWxzZSB7Ly9nZXQgZnJvbSBmYlxyXG4gICAgICAgIGNvbnN0IGRlY2tSZWYgPSByZWYoZGIsICd1c2Vycy8nICsgdWlkICsgJy9kZWNrJyk7XHJcblxyXG4gICAgICAgIG9uVmFsdWUoZGVja1JlZiwgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBzbmFwc2hvdC52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHVpZCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkgcGFyc2VEYXRhKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuY29uc3QgcG9wdWxhdGVEcm9wRG93biA9ICh3ZWxscykgPT4ge1xyXG4gICAgbGV0IG1lbnUgPSBzZWxlY3QoXCIjd2VsbFNlbGVjdFwiKTtcclxuICAgIFxyXG4gICAgd2VsbHMuZm9yRWFjaCh3ZWxsID0+IHtcclxuICAgICAgICBtZW51LmFwcGVuZChcIm9wdGlvblwiKVxyXG4gICAgICAgICAgICAudGV4dCh3ZWxsKVxyXG4gICAgICAgICAgICAucHJvcGVydHkoXCJWYWx1ZVwiLCB3ZWxsKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBwYXJzZURhdGEgPSAoZCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHt9XHJcbiAgICBPYmplY3Qua2V5cyhkKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICBkYXRhW2tleS50b0xvd2VyQ2FzZSgpXSA9IGRba2V5XTtcclxuICAgIH0pO1xyXG4gICAgbGV0IHJlc193ZWxscyA9IHt9O1xyXG4gICAgbGV0IHJldHVybnMgPSB7fTtcclxuICAgIGNvbnN0IHdlbGxzID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKHdlbGwgPT4gd2VsbC50b0xvd2VyQ2FzZSgpKTtcclxuXHJcbiAgICBsZXQgd2VsbF9saXN0ID0gT2JqZWN0LmtleXMoZCk7XHJcbiAgICB3ZWxsX2xpc3Quc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIsIHVuZGVmaW5lZCwgeyBzZW5zaXRpdml0eTogJ2Jhc2UnIH0pKTtcclxuICAgIHdlbGxfbGlzdC51bnNoaWZ0KFwiQWxsIFdlbGxzXCIpO1xyXG4gICAgaW5pdFdlbGxMaXN0KHdlbGxfbGlzdCk7XHJcbiAgICBwb3B1bGF0ZURyb3BEb3duKHdlbGxfbGlzdCk7XHJcblxyXG4gICAgZm9yIChsZXQgW18sIG1udGhEaWN0XSBvZiBPYmplY3QuZW50cmllcyhsZWdhY3lFY29uKSkge1xyXG4gICAgICAgIGxldCByZWNNbnRoUmV0dXJuID0gMDtcclxuICAgICAgICBsZXQgZGF0ZTtcclxuICAgICAgICBmb3IgKGxldCBbXywgd2VsbERpY3RdIG9mIE9iamVjdC5lbnRyaWVzKG1udGhEaWN0KSkge1xyXG4gICAgICAgICAgICBsZXQgd2VsbCA9IHdlbGxEaWN0W1wiV2VsbCBOYW1lXCJdXHJcbiAgICAgICAgICAgIHdlbGwgPSB3ZWxsLnJlcGxhY2UoJyMnLCAnJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgZGF0ZSA9IHdlbGxEaWN0W1wiRGF0ZVwiXTtcclxuICAgICAgICAgICAgaWYgKHdlbGxzLmluY2x1ZGVzKHdlbGwpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2VsbE1udGhSZXR1cm4gPSAoZGF0YVt3ZWxsXVtcIk9SUklcIl0gKyBkYXRhW3dlbGxdW1wiV0lOUklcIl0pICogd2VsbERpY3RbXCJSZWNlbnQgTW9udGggUCZMXCJdO1xyXG4gICAgICAgICAgICAgICAgcmVjTW50aFJldHVybiArPSB3ZWxsTW50aFJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICghKHdlbGwgaW4gcmVzX3dlbGxzKSkgcmVzX3dlbGxzW3dlbGxdID0gW107XHJcbiAgICAgICAgICAgICAgICByZXNfd2VsbHNbd2VsbF0ucHVzaCh7IFwiV2VsbFwiOiB3ZWxsLCBcIkRhdGVcIjogZGF0ZSwgXCJSZWNlbnQgTW50aCBSZXR1cm5cIjogd2VsbE1udGhSZXR1cm4gfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm5zW2RhdGVdID0gcmVjTW50aFJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGVzX3BsID0gZm9ybWF0KHJldHVybnMpO1xyXG4gICAgcGxvdFJldihkYXRlc19wbFswXSwgZGF0ZXNfcGxbMV0pO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbF9kYXRhX3dlbGxzJywgSlNPTi5zdHJpbmdpZnkocmVzX3dlbGxzKSk7XHJcblxyXG4gICAgLy9tZWFuIHBheW91dFxyXG4gICAgY29uc3QgcGF5b3V0c19udW0gPSBPYmplY3QuZW50cmllcyhwYXlvdXQpLm1hcChcclxuICAgICAgICAoW18sIHZhbHVlXSkgPT4gd2VsbHMuaW5jbHVkZXModmFsdWVbXCJXZWxsIE5hbWVcIl0ucmVwbGFjZShcIiNcIiwgXCJcIikudG9Mb3dlckNhc2UoKSkgPyB2YWx1ZVtcIiUgUGF5b3V0XCJdIDogbnVsbCkuZmlsdGVyKFxyXG4gICAgICAgICAgICBlbCA9PiBlbCAhPT0gbnVsbCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0ZWQtd2VsbCcpLnRleHRDb250ZW50ID0gXCJBbGwgV2VsbHNcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW0tcGwnKS50ZXh0Q29udGVudCA9IGAkJHtkYXRlc19wbFsxXS5yZWR1Y2UoKHJ1bm5pbiwgY3VycikgPT4gcnVubmluICsgY3VycikudG9GaXhlZCgyKX1gO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW91dC10aXRsZScpLnRleHRDb250ZW50ID0gXCIlIE1lYW4gUGF5b3V0XCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5b3V0JykudGV4dENvbnRlbnQgPSBgJHsocGF5b3V0c19udW0ucmVkdWNlKChydW5uaW4sIGN1cnIpID0+IHJ1bm5pbiArIGN1cnIpICogMTAwIC8gcGF5b3V0c19udW0ubGVuZ3RoKS50b0ZpeGVkKDApfSVgO1xyXG59XHJcblxyXG5jb25zdCBwbG90UmV2ID0gKHgsIHksIHRpdGxlPVwiUCZMIChTVCBvbmx5KVwiKSA9PiB7XHJcbiAgICBjb25zdCB0cmFjZSA9IG1ha2VUcmFjZSh4LCB5LCAnUCZMJywgbnVsbCwgJ2JsYWNrJywgbnVsbCk7XHJcbiAgICBjb25zdCBsYXlvdXQgPSBtYWtlTGF5b3V0KHRpdGxlKVxyXG4gICAgUGxvdGx5Lm5ld1Bsb3QoXCJyZXR1cm5zQ3VydmVcIiwgW3RyYWNlXSwgbGF5b3V0LCBjb25maWcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuTG9nb3V0XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgZm9ybWF0ID0gKG9iaikgPT4ge1xyXG4gICAgY29uc3Qgc29ydGVkQXJyYXkgPSBPYmplY3QuZW50cmllcyhvYmopLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGFbMF0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYlswXSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGVBIC0gZGF0ZUI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzb3J0ZWRPYmogPSBPYmplY3QuZnJvbUVudHJpZXMoc29ydGVkQXJyYXkpO1xyXG4gICAgY29uc3QgZGF0ZXMgPSBPYmplY3QuZW50cmllcyhzb3J0ZWRPYmopLm1hcCgoW2tleSwgX10pID0+IGtleSk7XHJcbiAgICBjb25zdCBwbCA9IE9iamVjdC5lbnRyaWVzKHNvcnRlZE9iaikubWFwKChbXywgdmFsdWVdKSA9PiB2YWx1ZSk7XHJcblxyXG4gICAgcmV0dXJuIFtkYXRlcywgcGxdXHJcbn1cclxuXHJcbmNvbnN0IGluaXRXZWxsTGlzdCA9ICh3ZWxscykgPT4ge1xyXG4gICAgbGV0IHVsV2VsbExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlbGwtbGlzdFwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2VsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIsIFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGxpLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG5cclxuICAgICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGEuY2xhc3NMaXN0LmFkZChcIm5hdi1saW5rXCIpO1xyXG5cclxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcIm1lbnUtdGl0bGVcIik7XHJcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHdlbGxzW2ldO1xyXG5cclxuICAgICAgICBhLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xyXG5cclxuICAgICAgICBsaS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBkaXNwbGF5V2VsbCh0aGlzLnRleHRDb250ZW50KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB1bFdlbGxMaXN0LmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZGlzcGxheVdlbGwgPSAoc2VsZWN0ZWQpID0+IHtcclxuICAgIGxldCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsX2RhdGFfd2VsbHMnKTtcclxuICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgaWYgKHNlbGVjdGVkID09IFwiQWxsIFdlbGxzXCIpIHtcclxuICAgICAgICBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odWlkKVxyXG4gICAgICAgIHBhcnNlRGF0YShKU09OLnBhcnNlKGRhdGEpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgd2VsbF9wYXlvdXQgPSBPYmplY3QuZW50cmllcyhwYXlvdXQpLmZpbHRlcihcclxuICAgICAgICB2YWwgPT4gdmFsWzFdW1wiV2VsbCBOYW1lXCJdLnJlcGxhY2UoXCIjXCIsXCJcIikudG9Mb3dlckNhc2UoKSA9PSBzZWxlY3RlZC50b0xvd2VyQ2FzZSgpXHJcbiAgICApO1xyXG4gICAgaWYgKHdlbGxfcGF5b3V0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgcGxvdFJldihbXSxbXSxgTm8gZWNvbm9taWMgZGF0YSBmb3IgJHtzZWxlY3RlZH1gKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0ZWQtd2VsbCcpLnRleHRDb250ZW50ID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW91dCcpLnRleHRDb250ZW50ID0gYG5vIGRhdGFgO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW0tcGwnKS50ZXh0Q29udGVudCA9IGBubyBkYXRhYDtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgd2VsbF9wYXlvdXQgPSB3ZWxsX3BheW91dFswXVsxXVtcIiUgUGF5b3V0XCJdXHJcbiAgICBkYXRhID0gZGF0YVtzZWxlY3RlZC50b0xvd2VyQ2FzZSgpXTtcclxuICAgIGxldCByZXR1cm5zID0ge307XHJcblxyXG4gICAgZm9yIChsZXQgaWR4IGluIGRhdGEpIHtcclxuICAgICAgICBjb25zdCBtbyA9IGRhdGFbaWR4XVtcIkRhdGVcIl07XHJcbiAgICAgICAgcmV0dXJuc1ttb10gPSBkYXRhW2lkeF1bXCJSZWNlbnQgTW50aCBSZXR1cm5cIl07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0ZXNfcGwgPSBmb3JtYXQocmV0dXJucyk7XHJcbiAgICBwbG90UmV2KGRhdGVzX3BsWzBdLCBkYXRlc19wbFsxXSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGVkLXdlbGwnKS50ZXh0Q29udGVudCA9IHNlbGVjdGVkO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bS1wbCcpLnRleHRDb250ZW50ID0gYCQke2RhdGVzX3BsWzFdLnJlZHVjZSgocnVubmluLCBjdXJyKSA9PiBydW5uaW4gKyBjdXJyKS50b0ZpeGVkKDIpfWBcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXlvdXQtdGl0bGUnKS50ZXh0Q29udGVudCA9IFwiJSBQYXlvdXRcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXlvdXQnKS50ZXh0Q29udGVudCA9IGAkeyh3ZWxsX3BheW91dCAqIDEwMCkudG9GaXhlZCgwKX0lYDtcclxufVxyXG5cclxuLy9cXFxcXHJcbmNvbnN0IGRiID0gZ2V0RGF0YWJhc2UoKVxyXG5jb25zdCB1aWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndWlkJyk7XHJcbmNvbnNvbGUubG9nKCd1aWQgOj4+ICcsIHVpZCk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bkxvZ291dFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ291dCk7XHJcblxyXG5mZXRjaERhdGEoKTtcclxuXHJcbnNlbGVjdChcIiN3ZWxsU2VsZWN0XCIpLm9uKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgIGxldCBzZWxlY3RlZCA9IHNlbGVjdChcIiN3ZWxsU2VsZWN0XCIpLm5vZGUoKS52YWx1ZTtcclxuICAgIGRpc3BsYXlXZWxsKHNlbGVjdGVkKTtcclxufSk7XHJcblxyXG4vL3NlYXJjaFxyXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hJbnB1dCcpO1xyXG5jb25zdCB3ZWxsTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxsLWxpc3QnKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKTtcclxuXHJcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoVGVybSA9IHNlYXJjaElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWxsTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHdlbGxOYW1lID0gd2VsbExpc3RbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NwYW4nKVswXS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAod2VsbE5hbWUuaW5jbHVkZXMoc2VhcmNoVGVybSkpIHtcclxuICAgICAgICAgICAgd2VsbExpc3RbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2VsbExpc3RbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5pdF9zY2FsZVwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRvZ2dsZUluaXRTY2FsZSgpO1xyXG59KVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbml0X3RpbWVcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB0b2dnbGVJbml0VGltZSgpO1xyXG59KVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93X3B3ZF9mb3JtX2J0blwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2VfcHdkX2Zvcm0nKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59KVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZV9wd2RfZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2VfcHdkX2Zvcm0nKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn0pXHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYW5nZV9wd2RfYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGxldCBwd2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld19wd2RcIikudmFsdWU7XHJcbiAgICBsZXQgcHdkX3JwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3B3ZF9ycHRcIikudmFsdWU7XHJcbiAgICBpZiAocHdkICE9PSBwd2RfcnB0KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwd2RfbXNnJykudGV4dENvbnRlbnQgPSBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmdlX3B3ZF9mb3JtJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VQd2QocHdkLCBwd2RfcnB0KTtcclxufSlcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjdXJyVGltZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbml0VGltZScpO1xyXG4gICAgbGV0IHRpbWUgPSBcIjMwIERheXNcIjtcclxuICAgIGlmIChjdXJyVGltZSA9PSAwKSB0aW1lID0gXCJJbmNlcHRpb25cIjtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRfc2NhbGVcIikudGV4dENvbnRlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5pdFNjYWxlJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRfdGltZVwiKS50ZXh0Q29udGVudCA9IHRpbWU7XHJcbn0oKTtcclxuXHJcbmxldCBwbG90Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbG90RGl2XCIpXHJcbmxldCByZXR1cm5zQ3VydmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJldHVybnNDdXJ2ZVwiKVxyXG5cclxubGV0IHdkaXYgPSBwbG90Q29udGFpbmVyLmNsaWVudFdpZHRoXHJcbmxldCB3Z3JhcGggPSByZXR1cm5zQ3VydmUuY2xpZW50V2lkdGhcclxuY29uc29sZS5sb2coJ3dkaXYgOj4+ICcsIHdkaXYpO1xyXG5jb25zb2xlLmxvZygnd2dyYXBoIDo+PiAnLCB3Z3JhcGgpO1xyXG4vL2xldCBwbF9zdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGwnKTtcclxuLy9sZXQgZGF0ZXNfc3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGVzJyk7XHJcbi8vaWYgKHBsX3N0ciAmIGRhdGVzX3N0cil7XHJcbi8vICAgIGRhdGVzX3N0ciA9IGRhdGVzX3N0ci5zcGxpdCgnLCcpO1xyXG4vLyAgICBwbF9zdHIgPSBwbF9zdHIuc3BsaXQoJywnKTtcclxuLy8gICAgcGxfc3RyID0gcGxfc3RyLm1hcChlbCA9PiBwYXJzZUZsb2F0KGVsKSk7XHJcbi8vICAgIHBsb3RSZXYocGxfc3RyLGRhdGVzX3N0cik7XHJcbi8vfSBlbHNlIHtcclxuLy8gICAgZmV0Y2hEYXRhKCk7XHJcbi8vfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/profile.js\n");

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