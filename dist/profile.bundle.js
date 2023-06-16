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

/***/ "./src/js/profile.js":
/*!***************************!*\
  !*** ./src/js/profile.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data__WEBPACK_IMPORTED_MODULE_4__]);\n_data__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_index__WEBPACK_IMPORTED_MODULE_2__.monitorAuthState)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_3__.monitorRegion)();\r\n\r\nconst fetchData = () => {\r\n    let data = localStorage.getItem(uid);//cache\r\n    if (data !== null && data !== \"null\") {\r\n        data = JSON.parse(data);\r\n        parseData(data);\r\n\r\n    } else {//get from fb\r\n        const deckRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, 'users/' + uid + '/deck');\r\n\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(deckRef, (snapshot) => {\r\n            const data = snapshot.val();\r\n\r\n            localStorage.setItem(uid, JSON.stringify(data));\r\n            if (data) parseData(data);\r\n\r\n        })\r\n    }\r\n}\r\nconst populateDropDown = (wells) => {\r\n    let menu = (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(\"#wellSelect\");\r\n    \r\n    wells.forEach(well => {\r\n        menu.append(\"option\")\r\n            .text(well)\r\n            .property(\"Value\", well);\r\n    });\r\n}\r\n\r\nconst parseData = (d) => {\r\n    const data = {}\r\n    Object.keys(d).forEach((key) => {\r\n        data[key.toLowerCase()] = d[key];\r\n    });\r\n    let res_wells = {};\r\n    let returns = {};\r\n    const wells = Object.keys(data).map(well => well.toLowerCase());\r\n\r\n    let well_list = Object.keys(d);\r\n    well_list.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));\r\n    well_list.unshift(\"All Wells\");\r\n    initWellList(well_list);\r\n    populateDropDown(well_list);\r\n\r\n    for (let [_, mnthDict] of Object.entries(_data__WEBPACK_IMPORTED_MODULE_4__.legacyEcon)) {\r\n        let recMnthReturn = 0;\r\n        let date;\r\n        for (let [_, wellDict] of Object.entries(mnthDict)) {\r\n            let well = wellDict[\"Well Name\"]\r\n            well = well.replace('#', '').toLowerCase();\r\n            date = wellDict[\"Date\"];\r\n            if (wells.includes(well)) {\r\n                const share = (data[well][\"ORRI\"] + data[well][\"WINRI\"]);\r\n                let wellMnthReturn = share * wellDict[\"Recent Month P&L\"];\r\n                recMnthReturn += wellMnthReturn;\r\n                if (!(well in res_wells)) res_wells[well] = [];\r\n                res_wells[well].push({ \"Well\": well, \"Date\": date, \"Recent Mnth Return\": wellMnthReturn, \"Share\": share })\r\n            }\r\n        }\r\n        returns[date] = recMnthReturn;\r\n    }\r\n    const dates_pl = format(returns);\r\n    plotRev(dates_pl[0], dates_pl[1]);\r\n\r\n    //mean payout\r\n    const payouts_num = Object.entries(_data__WEBPACK_IMPORTED_MODULE_4__.payout).map(\r\n        ([_, value]) => wells.includes(value[\"Well Name\"].replace(\"#\", \"\").toLowerCase()) ? value[\"% Payout\"] : null).filter(\r\n            el => el !== null);\r\n    document.getElementById('selected-well').textContent = \"All Wells\";\r\n    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin, curr) => runnin + curr).toFixed(2)}`;\r\n    document.getElementById('payout-title').textContent = \"% Mean Payout\";\r\n    document.getElementById('payout').textContent = `${(payouts_num.reduce((runnin, curr) => runnin + curr) * 100 / payouts_num.length).toFixed(0)}%`;\r\n\r\n    //store data\r\n    let shares = {}\r\n    for (let [well, wellObj] of Object.entries(res_wells)) {\r\n        let share = wellObj[0].Share;\r\n        shares[well] = share\r\n    }\r\n    localStorage.setItem('shares', JSON.stringify(shares));\r\n    localStorage.setItem('pl_data_wells', JSON.stringify(res_wells));\r\n    console.log('res_wells :>> ', res_wells);\r\n\r\n    let userProd = localStorage.userProd;\r\n    if (userProd == null) parseProd();\r\n    displayProd(\"All Wells\");\r\n}\r\n\r\nconst plotRev = (x, y, title=\"P&L (ST only)\") => {\r\n    const trace = (0,_layout__WEBPACK_IMPORTED_MODULE_5__.makeTrace)(x, y, 'P&L', \"lines+markers\", 'black',null);\r\n    const layout = (0,_layout__WEBPACK_IMPORTED_MODULE_5__.makeLayout)(title)\r\n    Plotly.newPlot(\"returnsCurve\", [trace], layout, _layout__WEBPACK_IMPORTED_MODULE_5__.config);\r\n}\r\n\r\nconst format = (obj) => {\r\n    const sortedArray = Object.entries(obj).sort((a, b) => {\r\n        const dateA = new Date(a[0]);\r\n        const dateB = new Date(b[0]);\r\n        return dateA - dateB;\r\n    });\r\n\r\n    const sortedObj = Object.fromEntries(sortedArray);\r\n    const dates = Object.entries(sortedObj).map(([key, _]) => key);\r\n    const pl = Object.entries(sortedObj).map(([_, value]) => value);\r\n\r\n    return [dates, pl]\r\n}\r\n\r\nconst initWellList = (wells) => {\r\n    let ulWellList = document.getElementById(\"well-list\");\r\n    for (let i = 0; i < wells.length; i++) {\r\n        let li = document.createElement(\"li\");\r\n        li.classList.add(\"nav-item\", \"active\");\r\n        li.style.cursor = \"pointer\";\r\n\r\n        let a = document.createElement(\"a\");\r\n        a.classList.add(\"nav-link\");\r\n\r\n        let span = document.createElement(\"span\");\r\n        span.classList.add(\"menu-title\");\r\n        span.textContent = wells[i];\r\n\r\n        a.appendChild(span);\r\n        li.appendChild(a);\r\n\r\n        li.onclick = function () {\r\n            displayWell(this.textContent);\r\n            displayProd(this.textContent);\r\n        };\r\n\r\n        ulWellList.appendChild(li);\r\n    }\r\n}\r\n\r\nconst displayWell = (selected) => {\r\n    let data = localStorage.getItem('pl_data_wells');\r\n    data = JSON.parse(data);\r\n    console.log('data :>> ', data);\r\n    if (selected == \"All Wells\") {\r\n        data = localStorage.getItem(uid)\r\n        parseData(JSON.parse(data));\r\n        return;\r\n    }\r\n    let well_payout = Object.entries(_data__WEBPACK_IMPORTED_MODULE_4__.payout).filter(\r\n        val => val[1][\"Well Name\"].replace(\"#\",\"\").toLowerCase() == selected.toLowerCase()\r\n    );\r\n    if (well_payout.length == 0) {\r\n        plotRev([],[],`No economic data for ${selected}`);\r\n        document.getElementById('selected-well').textContent = selected;\r\n        document.getElementById('payout').textContent = `no data`;\r\n        document.getElementById('sum-pl').textContent = `no data`;\r\n        return;\r\n    };\r\n    well_payout = well_payout[0][1][\"% Payout\"]\r\n    data = data[selected.toLowerCase()];\r\n    let returns = {};\r\n\r\n    for (let idx in data) {\r\n        const mo = data[idx][\"Date\"];\r\n        returns[mo] = data[idx][\"Recent Mnth Return\"];\r\n    }\r\n\r\n    const dates_pl = format(returns);\r\n    console.log('dates_pl[0] :>> ', dates_pl[0]);\r\n    plotRev(dates_pl[0], dates_pl[1]);\r\n\r\n    document.getElementById('selected-well').textContent = selected;\r\n    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin, curr) => runnin + curr).toFixed(2)}`\r\n    document.getElementById('payout-title').textContent = \"% Payout\";\r\n    document.getElementById('payout').textContent = `${(well_payout * 100).toFixed(0)}%`;\r\n}\r\n\r\nconst parseProd = () => {\r\n    let shares = JSON.parse(localStorage.shares);\r\n    let wells = Object.keys(shares);\r\n    let selected_data = _data__WEBPACK_IMPORTED_MODULE_4__.moDataST.map(el => {\r\n        let well = el[0].replace(\"#\",\"\").toLowerCase();\r\n        if (wells.includes(well)){\r\n            let share = shares[well]\r\n            return [well,el[1]*share,el[2]*share,el[3]*share,el[6]];\r\n        }\r\n    }).filter(el => el !== undefined);\r\n    localStorage.setItem(\"userProd\",JSON.stringify(selected_data));\r\n}\r\n\r\nconst displayProd = (selected) => {\r\n    const edge = new Date(\"2021-12-01\");\r\n    let cnt = 0;\r\n    let data = JSON.parse(localStorage.userProd);//[[well,oil,gas,water,date],...]\r\n    if (selected !== \"All Wells\") data = data.filter(el => el[0] == selected.toLowerCase());\r\n\r\n    let date = data.map(el => el[4]).filter(el => {\r\n        let d = new Date(el)\r\n        if (d > edge){\r\n            return true;\r\n        }else{\r\n            cnt += 1\r\n            return false;\r\n        }\r\n    }).map(dateString => {\r\n        const dateObj = new Date(dateString);\r\n        const options = { year: 'numeric', month: 'long' };\r\n        return dateObj.toLocaleString('en-US', options);\r\n    });\r\n\r\n\r\n    console.log('date :>> ', date);\r\n    console.log('cnt :>> ', cnt);\r\n    let oil = data.map(el => el[1]).slice(0,cnt);\r\n    let gas = data.map(el => el[2]).slice(0,cnt);\r\n    date.pop();\r\n    oil.pop();\r\n    gas.pop();\r\n    const traceOil = (0,_layout__WEBPACK_IMPORTED_MODULE_5__.makeTrace)(date,oil,\"Oil [Bbls]\",\"lines+markers\",\"green\",null)\r\n    const traceGas = (0,_layout__WEBPACK_IMPORTED_MODULE_5__.makeTrace)(date,gas,\"Gas [Cf]\",\"lines+markers\",\"red\",null)\r\n    const layout = {\r\n        title: \"Oil & Gas Production\",\r\n        legend: {\r\n            orientation: \"h\",\r\n            y: 1.2,\r\n        },\r\n    };\r\n    Plotly.newPlot(\"prodCurve\", [traceOil,traceGas],layout);\r\n}\r\n\r\n//\\\\\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)()\r\nconst uid = localStorage.getItem('uid');\r\nconsole.log('uid :>> ', uid);\r\n\r\ndocument.getElementById(\"btnLogout\").addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_2__.logout);\r\n\r\nfetchData();\r\n\r\n(0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(\"#wellSelect\").on(\"change\", () => {\r\n    let selected = (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(\"#wellSelect\").node().value;\r\n    displayWell(selected);\r\n    displayProd(selected);\r\n});\r\n\r\n//search\r\nconst searchInput = document.getElementById('searchInput');\r\nconst wellList = document.getElementById('well-list').getElementsByTagName('li');\r\n\r\nsearchInput.addEventListener('input', function () {\r\n    const searchTerm = searchInput.value.toLowerCase();\r\n\r\n    for (let i = 0; i < wellList.length; i++) {\r\n        const wellName = wellList[i].getElementsByTagName('span')[0].textContent.toLowerCase();\r\n\r\n        if (wellName.includes(searchTerm)) {\r\n            wellList[i].style.display = 'block';\r\n        } else {\r\n            wellList[i].style.display = 'none';\r\n        }\r\n    }\r\n});\r\n\r\n\r\ndocument.getElementById(\"init_scale\").addEventListener('click', () => {\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_6__.toggleInitScale)();\r\n})\r\n\r\ndocument.getElementById(\"init_time\").addEventListener('click', () => {\r\n    ;(0,_ui__WEBPACK_IMPORTED_MODULE_6__.toggleInitTime)();\r\n})\r\n\r\ndocument.getElementById(\"show_pwd_form_btn\").addEventListener('click', () => {\r\n    document.getElementById('change_pwd_form').style.display = \"block\";\r\n})\r\n\r\ndocument.getElementById(\"close_pwd_form\").addEventListener('click', () => {\r\n    document.getElementById('change_pwd_form').style.display = \"none\";\r\n})\r\n\r\ndocument.getElementById(\"change_pwd_btn\").addEventListener('click', (e) => {\r\n    let pwd = document.getElementById(\"new_pwd\").value;\r\n    let pwd_rpt = document.getElementById(\"new_pwd_rpt\").value;\r\n    if (pwd !== pwd_rpt) {\r\n        e.preventDefault();\r\n        document.getElementById('pwd_msg').textContent = \"Passwords do not match\";\r\n        document.getElementById('change_pwd_form').style.display = \"block\";\r\n        return;\r\n    }\r\n    (0,_index__WEBPACK_IMPORTED_MODULE_2__.changePwd)(pwd, pwd_rpt);\r\n})\r\n\r\nwindow.onload = function () {\r\n    const currTime = localStorage.getItem('initTime');\r\n    let time = \"30 Days\";\r\n    if (currTime == 0) time = \"Inception\";\r\n\r\n    document.getElementById(\"init_scale\").textContent = localStorage.getItem('initScale');\r\n    document.getElementById(\"init_time\").textContent = time;\r\n}();\r\n\r\nconsole.log('wdiv :>> ', document.getElementById(\"plotDiv\").clientWidth);\r\nconsole.log('wgraph :>> ', document.getElementById(\"returnsCurve\").clientWidth);\r\n//let pl_str = localStorage.getItem('pl');\r\n//let dates_str = localStorage.getItem('dates');\r\n//if (pl_str & dates_str){\r\n//    dates_str = dates_str.split(',');\r\n//    pl_str = pl_str.split(',');\r\n//    pl_str = pl_str.map(el => parseFloat(el));\r\n//    plotRev(pl_str,dates_str);\r\n//} else {\r\n//    fetchData();\r\n//}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFlO0FBQ25CLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSxvREFBYztBQUNsQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVM7QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvcHJvZmlsZS5qcz9iMGU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vbml0b3JSZWdpb24gfSBmcm9tICcuL3JlZ2lvbidcclxuaW1wb3J0IHsgbG9nb3V0LCBtb25pdG9yQXV0aFN0YXRlLCBjaGFuZ2VQd2QgfSBmcm9tICcuL2luZGV4J1xyXG5pbXBvcnQgeyByZWYsIGdldERhdGFiYXNlLCBvblZhbHVlIH0gZnJvbSAnZmlyZWJhc2UvZGF0YWJhc2UnO1xyXG5pbXBvcnQgeyBsZWdhY3lFY29uLCBwYXlvdXQsIG1vRGF0YVNUIH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHsgbWFrZVRyYWNlLCBtYWtlTGF5b3V0LCBjb25maWcgfSBmcm9tICcuL2xheW91dCc7XHJcbmltcG9ydCB7IHRvZ2dsZUluaXRTY2FsZSwgdG9nZ2xlSW5pdFRpbWUgfSBmcm9tICcuL3VpJztcclxuaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnZDMnO1xyXG5cclxubW9uaXRvckF1dGhTdGF0ZSgpO1xyXG5tb25pdG9yUmVnaW9uKCk7XHJcblxyXG5jb25zdCBmZXRjaERhdGEgPSAoKSA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHVpZCk7Ly9jYWNoZVxyXG4gICAgaWYgKGRhdGEgIT09IG51bGwgJiYgZGF0YSAhPT0gXCJudWxsXCIpIHtcclxuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICBwYXJzZURhdGEoZGF0YSk7XHJcblxyXG4gICAgfSBlbHNlIHsvL2dldCBmcm9tIGZiXHJcbiAgICAgICAgY29uc3QgZGVja1JlZiA9IHJlZihkYiwgJ3VzZXJzLycgKyB1aWQgKyAnL2RlY2snKTtcclxuXHJcbiAgICAgICAgb25WYWx1ZShkZWNrUmVmLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odWlkLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSBwYXJzZURhdGEoZGF0YSk7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuY29uc3QgcG9wdWxhdGVEcm9wRG93biA9ICh3ZWxscykgPT4ge1xyXG4gICAgbGV0IG1lbnUgPSBzZWxlY3QoXCIjd2VsbFNlbGVjdFwiKTtcclxuICAgIFxyXG4gICAgd2VsbHMuZm9yRWFjaCh3ZWxsID0+IHtcclxuICAgICAgICBtZW51LmFwcGVuZChcIm9wdGlvblwiKVxyXG4gICAgICAgICAgICAudGV4dCh3ZWxsKVxyXG4gICAgICAgICAgICAucHJvcGVydHkoXCJWYWx1ZVwiLCB3ZWxsKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBwYXJzZURhdGEgPSAoZCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHt9XHJcbiAgICBPYmplY3Qua2V5cyhkKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICBkYXRhW2tleS50b0xvd2VyQ2FzZSgpXSA9IGRba2V5XTtcclxuICAgIH0pO1xyXG4gICAgbGV0IHJlc193ZWxscyA9IHt9O1xyXG4gICAgbGV0IHJldHVybnMgPSB7fTtcclxuICAgIGNvbnN0IHdlbGxzID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKHdlbGwgPT4gd2VsbC50b0xvd2VyQ2FzZSgpKTtcclxuXHJcbiAgICBsZXQgd2VsbF9saXN0ID0gT2JqZWN0LmtleXMoZCk7XHJcbiAgICB3ZWxsX2xpc3Quc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIsIHVuZGVmaW5lZCwgeyBzZW5zaXRpdml0eTogJ2Jhc2UnIH0pKTtcclxuICAgIHdlbGxfbGlzdC51bnNoaWZ0KFwiQWxsIFdlbGxzXCIpO1xyXG4gICAgaW5pdFdlbGxMaXN0KHdlbGxfbGlzdCk7XHJcbiAgICBwb3B1bGF0ZURyb3BEb3duKHdlbGxfbGlzdCk7XHJcblxyXG4gICAgZm9yIChsZXQgW18sIG1udGhEaWN0XSBvZiBPYmplY3QuZW50cmllcyhsZWdhY3lFY29uKSkge1xyXG4gICAgICAgIGxldCByZWNNbnRoUmV0dXJuID0gMDtcclxuICAgICAgICBsZXQgZGF0ZTtcclxuICAgICAgICBmb3IgKGxldCBbXywgd2VsbERpY3RdIG9mIE9iamVjdC5lbnRyaWVzKG1udGhEaWN0KSkge1xyXG4gICAgICAgICAgICBsZXQgd2VsbCA9IHdlbGxEaWN0W1wiV2VsbCBOYW1lXCJdXHJcbiAgICAgICAgICAgIHdlbGwgPSB3ZWxsLnJlcGxhY2UoJyMnLCAnJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgZGF0ZSA9IHdlbGxEaWN0W1wiRGF0ZVwiXTtcclxuICAgICAgICAgICAgaWYgKHdlbGxzLmluY2x1ZGVzKHdlbGwpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFyZSA9IChkYXRhW3dlbGxdW1wiT1JSSVwiXSArIGRhdGFbd2VsbF1bXCJXSU5SSVwiXSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2VsbE1udGhSZXR1cm4gPSBzaGFyZSAqIHdlbGxEaWN0W1wiUmVjZW50IE1vbnRoIFAmTFwiXTtcclxuICAgICAgICAgICAgICAgIHJlY01udGhSZXR1cm4gKz0gd2VsbE1udGhSZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAoISh3ZWxsIGluIHJlc193ZWxscykpIHJlc193ZWxsc1t3ZWxsXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgcmVzX3dlbGxzW3dlbGxdLnB1c2goeyBcIldlbGxcIjogd2VsbCwgXCJEYXRlXCI6IGRhdGUsIFwiUmVjZW50IE1udGggUmV0dXJuXCI6IHdlbGxNbnRoUmV0dXJuLCBcIlNoYXJlXCI6IHNoYXJlIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuc1tkYXRlXSA9IHJlY01udGhSZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRlc19wbCA9IGZvcm1hdChyZXR1cm5zKTtcclxuICAgIHBsb3RSZXYoZGF0ZXNfcGxbMF0sIGRhdGVzX3BsWzFdKTtcclxuXHJcbiAgICAvL21lYW4gcGF5b3V0XHJcbiAgICBjb25zdCBwYXlvdXRzX251bSA9IE9iamVjdC5lbnRyaWVzKHBheW91dCkubWFwKFxyXG4gICAgICAgIChbXywgdmFsdWVdKSA9PiB3ZWxscy5pbmNsdWRlcyh2YWx1ZVtcIldlbGwgTmFtZVwiXS5yZXBsYWNlKFwiI1wiLCBcIlwiKS50b0xvd2VyQ2FzZSgpKSA/IHZhbHVlW1wiJSBQYXlvdXRcIl0gOiBudWxsKS5maWx0ZXIoXHJcbiAgICAgICAgICAgIGVsID0+IGVsICE9PSBudWxsKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZC13ZWxsJykudGV4dENvbnRlbnQgPSBcIkFsbCBXZWxsc1wiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bS1wbCcpLnRleHRDb250ZW50ID0gYCQke2RhdGVzX3BsWzFdLnJlZHVjZSgocnVubmluLCBjdXJyKSA9PiBydW5uaW4gKyBjdXJyKS50b0ZpeGVkKDIpfWA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5b3V0LXRpdGxlJykudGV4dENvbnRlbnQgPSBcIiUgTWVhbiBQYXlvdXRcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXlvdXQnKS50ZXh0Q29udGVudCA9IGAkeyhwYXlvdXRzX251bS5yZWR1Y2UoKHJ1bm5pbiwgY3VycikgPT4gcnVubmluICsgY3VycikgKiAxMDAgLyBwYXlvdXRzX251bS5sZW5ndGgpLnRvRml4ZWQoMCl9JWA7XHJcblxyXG4gICAgLy9zdG9yZSBkYXRhXHJcbiAgICBsZXQgc2hhcmVzID0ge31cclxuICAgIGZvciAobGV0IFt3ZWxsLCB3ZWxsT2JqXSBvZiBPYmplY3QuZW50cmllcyhyZXNfd2VsbHMpKSB7XHJcbiAgICAgICAgbGV0IHNoYXJlID0gd2VsbE9ialswXS5TaGFyZTtcclxuICAgICAgICBzaGFyZXNbd2VsbF0gPSBzaGFyZVxyXG4gICAgfVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NoYXJlcycsIEpTT04uc3RyaW5naWZ5KHNoYXJlcykpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BsX2RhdGFfd2VsbHMnLCBKU09OLnN0cmluZ2lmeShyZXNfd2VsbHMpKTtcclxuICAgIGNvbnNvbGUubG9nKCdyZXNfd2VsbHMgOj4+ICcsIHJlc193ZWxscyk7XHJcblxyXG4gICAgbGV0IHVzZXJQcm9kID0gbG9jYWxTdG9yYWdlLnVzZXJQcm9kO1xyXG4gICAgaWYgKHVzZXJQcm9kID09IG51bGwpIHBhcnNlUHJvZCgpO1xyXG4gICAgZGlzcGxheVByb2QoXCJBbGwgV2VsbHNcIik7XHJcbn1cclxuXHJcbmNvbnN0IHBsb3RSZXYgPSAoeCwgeSwgdGl0bGU9XCJQJkwgKFNUIG9ubHkpXCIpID0+IHtcclxuICAgIGNvbnN0IHRyYWNlID0gbWFrZVRyYWNlKHgsIHksICdQJkwnLCBcImxpbmVzK21hcmtlcnNcIiwgJ2JsYWNrJyxudWxsKTtcclxuICAgIGNvbnN0IGxheW91dCA9IG1ha2VMYXlvdXQodGl0bGUpXHJcbiAgICBQbG90bHkubmV3UGxvdChcInJldHVybnNDdXJ2ZVwiLCBbdHJhY2VdLCBsYXlvdXQsIGNvbmZpZyk7XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1hdCA9IChvYmopID0+IHtcclxuICAgIGNvbnN0IHNvcnRlZEFycmF5ID0gT2JqZWN0LmVudHJpZXMob2JqKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShhWzBdKTtcclxuICAgICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGJbMF0pO1xyXG4gICAgICAgIHJldHVybiBkYXRlQSAtIGRhdGVCO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc29ydGVkT2JqID0gT2JqZWN0LmZyb21FbnRyaWVzKHNvcnRlZEFycmF5KTtcclxuICAgIGNvbnN0IGRhdGVzID0gT2JqZWN0LmVudHJpZXMoc29ydGVkT2JqKS5tYXAoKFtrZXksIF9dKSA9PiBrZXkpO1xyXG4gICAgY29uc3QgcGwgPSBPYmplY3QuZW50cmllcyhzb3J0ZWRPYmopLm1hcCgoW18sIHZhbHVlXSkgPT4gdmFsdWUpO1xyXG5cclxuICAgIHJldHVybiBbZGF0ZXMsIHBsXVxyXG59XHJcblxyXG5jb25zdCBpbml0V2VsbExpc3QgPSAod2VsbHMpID0+IHtcclxuICAgIGxldCB1bFdlbGxMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWxsLWxpc3RcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJuYXYtaXRlbVwiLCBcImFjdGl2ZVwiKTtcclxuICAgICAgICBsaS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuXHJcbiAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBhLmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlua1wiKTtcclxuXHJcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJtZW51LXRpdGxlXCIpO1xyXG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSB3ZWxsc1tpXTtcclxuXHJcbiAgICAgICAgYS5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChhKTtcclxuXHJcbiAgICAgICAgbGkub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZGlzcGxheVdlbGwodGhpcy50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlQcm9kKHRoaXMudGV4dENvbnRlbnQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHVsV2VsbExpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5V2VsbCA9IChzZWxlY3RlZCkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGxfZGF0YV93ZWxscycpO1xyXG4gICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZygnZGF0YSA6Pj4gJywgZGF0YSk7XHJcbiAgICBpZiAoc2VsZWN0ZWQgPT0gXCJBbGwgV2VsbHNcIikge1xyXG4gICAgICAgIGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh1aWQpXHJcbiAgICAgICAgcGFyc2VEYXRhKEpTT04ucGFyc2UoZGF0YSkpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCB3ZWxsX3BheW91dCA9IE9iamVjdC5lbnRyaWVzKHBheW91dCkuZmlsdGVyKFxyXG4gICAgICAgIHZhbCA9PiB2YWxbMV1bXCJXZWxsIE5hbWVcIl0ucmVwbGFjZShcIiNcIixcIlwiKS50b0xvd2VyQ2FzZSgpID09IHNlbGVjdGVkLnRvTG93ZXJDYXNlKClcclxuICAgICk7XHJcbiAgICBpZiAod2VsbF9wYXlvdXQubGVuZ3RoID09IDApIHtcclxuICAgICAgICBwbG90UmV2KFtdLFtdLGBObyBlY29ub21pYyBkYXRhIGZvciAke3NlbGVjdGVkfWApO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZC13ZWxsJykudGV4dENvbnRlbnQgPSBzZWxlY3RlZDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5b3V0JykudGV4dENvbnRlbnQgPSBgbm8gZGF0YWA7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bS1wbCcpLnRleHRDb250ZW50ID0gYG5vIGRhdGFgO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICB3ZWxsX3BheW91dCA9IHdlbGxfcGF5b3V0WzBdWzFdW1wiJSBQYXlvdXRcIl1cclxuICAgIGRhdGEgPSBkYXRhW3NlbGVjdGVkLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgbGV0IHJldHVybnMgPSB7fTtcclxuXHJcbiAgICBmb3IgKGxldCBpZHggaW4gZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG1vID0gZGF0YVtpZHhdW1wiRGF0ZVwiXTtcclxuICAgICAgICByZXR1cm5zW21vXSA9IGRhdGFbaWR4XVtcIlJlY2VudCBNbnRoIFJldHVyblwiXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRlc19wbCA9IGZvcm1hdChyZXR1cm5zKTtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRlc19wbFswXSA6Pj4gJywgZGF0ZXNfcGxbMF0pO1xyXG4gICAgcGxvdFJldihkYXRlc19wbFswXSwgZGF0ZXNfcGxbMV0pO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZC13ZWxsJykudGV4dENvbnRlbnQgPSBzZWxlY3RlZDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW0tcGwnKS50ZXh0Q29udGVudCA9IGAkJHtkYXRlc19wbFsxXS5yZWR1Y2UoKHJ1bm5pbiwgY3VycikgPT4gcnVubmluICsgY3VycikudG9GaXhlZCgyKX1gXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5b3V0LXRpdGxlJykudGV4dENvbnRlbnQgPSBcIiUgUGF5b3V0XCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5b3V0JykudGV4dENvbnRlbnQgPSBgJHsod2VsbF9wYXlvdXQgKiAxMDApLnRvRml4ZWQoMCl9JWA7XHJcbn1cclxuXHJcbmNvbnN0IHBhcnNlUHJvZCA9ICgpID0+IHtcclxuICAgIGxldCBzaGFyZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zaGFyZXMpO1xyXG4gICAgbGV0IHdlbGxzID0gT2JqZWN0LmtleXMoc2hhcmVzKTtcclxuICAgIGxldCBzZWxlY3RlZF9kYXRhID0gbW9EYXRhU1QubWFwKGVsID0+IHtcclxuICAgICAgICBsZXQgd2VsbCA9IGVsWzBdLnJlcGxhY2UoXCIjXCIsXCJcIikudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAod2VsbHMuaW5jbHVkZXMod2VsbCkpe1xyXG4gICAgICAgICAgICBsZXQgc2hhcmUgPSBzaGFyZXNbd2VsbF1cclxuICAgICAgICAgICAgcmV0dXJuIFt3ZWxsLGVsWzFdKnNoYXJlLGVsWzJdKnNoYXJlLGVsWzNdKnNoYXJlLGVsWzZdXTtcclxuICAgICAgICB9XHJcbiAgICB9KS5maWx0ZXIoZWwgPT4gZWwgIT09IHVuZGVmaW5lZCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJQcm9kXCIsSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRfZGF0YSkpO1xyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5UHJvZCA9IChzZWxlY3RlZCkgPT4ge1xyXG4gICAgY29uc3QgZWRnZSA9IG5ldyBEYXRlKFwiMjAyMS0xMi0wMVwiKTtcclxuICAgIGxldCBjbnQgPSAwO1xyXG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS51c2VyUHJvZCk7Ly9bW3dlbGwsb2lsLGdhcyx3YXRlcixkYXRlXSwuLi5dXHJcbiAgICBpZiAoc2VsZWN0ZWQgIT09IFwiQWxsIFdlbGxzXCIpIGRhdGEgPSBkYXRhLmZpbHRlcihlbCA9PiBlbFswXSA9PSBzZWxlY3RlZC50b0xvd2VyQ2FzZSgpKTtcclxuXHJcbiAgICBsZXQgZGF0ZSA9IGRhdGEubWFwKGVsID0+IGVsWzRdKS5maWx0ZXIoZWwgPT4ge1xyXG4gICAgICAgIGxldCBkID0gbmV3IERhdGUoZWwpXHJcbiAgICAgICAgaWYgKGQgPiBlZGdlKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNudCArPSAxXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KS5tYXAoZGF0ZVN0cmluZyA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0ZU9iaiA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJyB9O1xyXG4gICAgICAgIHJldHVybiBkYXRlT2JqLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIG9wdGlvbnMpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdkYXRlIDo+PiAnLCBkYXRlKTtcclxuICAgIGNvbnNvbGUubG9nKCdjbnQgOj4+ICcsIGNudCk7XHJcbiAgICBsZXQgb2lsID0gZGF0YS5tYXAoZWwgPT4gZWxbMV0pLnNsaWNlKDAsY250KTtcclxuICAgIGxldCBnYXMgPSBkYXRhLm1hcChlbCA9PiBlbFsyXSkuc2xpY2UoMCxjbnQpO1xyXG4gICAgZGF0ZS5wb3AoKTtcclxuICAgIG9pbC5wb3AoKTtcclxuICAgIGdhcy5wb3AoKTtcclxuICAgIGNvbnN0IHRyYWNlT2lsID0gbWFrZVRyYWNlKGRhdGUsb2lsLFwiT2lsIFtCYmxzXVwiLFwibGluZXMrbWFya2Vyc1wiLFwiZ3JlZW5cIixudWxsKVxyXG4gICAgY29uc3QgdHJhY2VHYXMgPSBtYWtlVHJhY2UoZGF0ZSxnYXMsXCJHYXMgW0NmXVwiLFwibGluZXMrbWFya2Vyc1wiLFwicmVkXCIsbnVsbClcclxuICAgIGNvbnN0IGxheW91dCA9IHtcclxuICAgICAgICB0aXRsZTogXCJPaWwgJiBHYXMgUHJvZHVjdGlvblwiLFxyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJoXCIsXHJcbiAgICAgICAgICAgIHk6IDEuMixcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIFBsb3RseS5uZXdQbG90KFwicHJvZEN1cnZlXCIsIFt0cmFjZU9pbCx0cmFjZUdhc10sbGF5b3V0KTtcclxufVxyXG5cclxuLy9cXFxcXHJcbmNvbnN0IGRiID0gZ2V0RGF0YWJhc2UoKVxyXG5jb25zdCB1aWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndWlkJyk7XHJcbmNvbnNvbGUubG9nKCd1aWQgOj4+ICcsIHVpZCk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bkxvZ291dFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ291dCk7XHJcblxyXG5mZXRjaERhdGEoKTtcclxuXHJcbnNlbGVjdChcIiN3ZWxsU2VsZWN0XCIpLm9uKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgIGxldCBzZWxlY3RlZCA9IHNlbGVjdChcIiN3ZWxsU2VsZWN0XCIpLm5vZGUoKS52YWx1ZTtcclxuICAgIGRpc3BsYXlXZWxsKHNlbGVjdGVkKTtcclxuICAgIGRpc3BsYXlQcm9kKHNlbGVjdGVkKTtcclxufSk7XHJcblxyXG4vL3NlYXJjaFxyXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hJbnB1dCcpO1xyXG5jb25zdCB3ZWxsTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxsLWxpc3QnKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKTtcclxuXHJcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoVGVybSA9IHNlYXJjaElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWxsTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHdlbGxOYW1lID0gd2VsbExpc3RbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NwYW4nKVswXS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAod2VsbE5hbWUuaW5jbHVkZXMoc2VhcmNoVGVybSkpIHtcclxuICAgICAgICAgICAgd2VsbExpc3RbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2VsbExpc3RbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5pdF9zY2FsZVwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRvZ2dsZUluaXRTY2FsZSgpO1xyXG59KVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbml0X3RpbWVcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB0b2dnbGVJbml0VGltZSgpO1xyXG59KVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93X3B3ZF9mb3JtX2J0blwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2VfcHdkX2Zvcm0nKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59KVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZV9wd2RfZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2VfcHdkX2Zvcm0nKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn0pXHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYW5nZV9wd2RfYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGxldCBwd2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld19wd2RcIikudmFsdWU7XHJcbiAgICBsZXQgcHdkX3JwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3B3ZF9ycHRcIikudmFsdWU7XHJcbiAgICBpZiAocHdkICE9PSBwd2RfcnB0KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwd2RfbXNnJykudGV4dENvbnRlbnQgPSBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmdlX3B3ZF9mb3JtJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VQd2QocHdkLCBwd2RfcnB0KTtcclxufSlcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjdXJyVGltZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbml0VGltZScpO1xyXG4gICAgbGV0IHRpbWUgPSBcIjMwIERheXNcIjtcclxuICAgIGlmIChjdXJyVGltZSA9PSAwKSB0aW1lID0gXCJJbmNlcHRpb25cIjtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRfc2NhbGVcIikudGV4dENvbnRlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5pdFNjYWxlJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRfdGltZVwiKS50ZXh0Q29udGVudCA9IHRpbWU7XHJcbn0oKTtcclxuXHJcbmNvbnNvbGUubG9nKCd3ZGl2IDo+PiAnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsb3REaXZcIikuY2xpZW50V2lkdGgpO1xyXG5jb25zb2xlLmxvZygnd2dyYXBoIDo+PiAnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJldHVybnNDdXJ2ZVwiKS5jbGllbnRXaWR0aCk7XHJcbi8vbGV0IHBsX3N0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwbCcpO1xyXG4vL2xldCBkYXRlc19zdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0ZXMnKTtcclxuLy9pZiAocGxfc3RyICYgZGF0ZXNfc3RyKXtcclxuLy8gICAgZGF0ZXNfc3RyID0gZGF0ZXNfc3RyLnNwbGl0KCcsJyk7XHJcbi8vICAgIHBsX3N0ciA9IHBsX3N0ci5zcGxpdCgnLCcpO1xyXG4vLyAgICBwbF9zdHIgPSBwbF9zdHIubWFwKGVsID0+IHBhcnNlRmxvYXQoZWwpKTtcclxuLy8gICAgcGxvdFJldihwbF9zdHIsZGF0ZXNfc3RyKTtcclxuLy99IGVsc2Uge1xyXG4vLyAgICBmZXRjaERhdGEoKTtcclxuLy99Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/profile.js\n");

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