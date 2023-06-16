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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   layoutWbd: () => (/* binding */ layoutWbd),\n/* harmony export */   makeLayout: () => (/* binding */ makeLayout),\n/* harmony export */   makeTrace: () => (/* binding */ makeTrace)\n/* harmony export */ });\nconst makeTrace = (x, y, name, type=\"lines\", color, text, visible=true) => ({\r\n    x,\r\n    y,\r\n    text,\r\n    name,\r\n    visible,\r\n    line: {\r\n        color,\r\n    },\r\n    mode: type\r\n});\r\n\r\nconst makeLayout = (title, type, tickvals) => ({\r\n    title,\r\n    yaxis: {\r\n        type: type || \"linear\",\r\n        rangemode: \"tozero\",\r\n        autorange: true,\r\n        tickformat: \"f\",\r\n        tickvals,\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n    xaxis: {\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n});\r\n\r\nconst config = {\r\n    modeBarButtonsToRemove: [\r\n        \"sendDataToCloud\",\r\n        \"autoScale2d\",\r\n        \"hoverClosestCartesian\",\r\n        \"hoverCompareCartesian\",\r\n        \"lasso2d\",\r\n        \"zoomIn2d\",\r\n        \"zoomOut2d\",\r\n        \"toggleSpikelines\",\r\n    ],\r\n    displaylogo: false,\r\n    responsive: true,\r\n};\r\n\r\nconst layoutWbd = (max,min,minTVD,wellName) => ({\r\n    width: 1620,\r\n    height: 700,\r\n\r\n    margin: {\r\n        l: 0,\r\n        r: 0,\r\n        b: 0,\r\n        t: 0,\r\n    },\r\n\r\n    title: {\r\n        text: \"Drilling for \" + wellName + \", Dimmit County, TX\",\r\n        y: 0.98,\r\n    },\r\n\r\n    legend: {\r\n        x: 0.8,\r\n        y: 0.8,\r\n    },\r\n    scene: {\r\n        aspectmode: \"cube\",\r\n        xaxis: {\r\n            title: \"Easting\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n        yaxis: {\r\n            title: \"Northing\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#f0f1f2\",\r\n            showbackground: true,\r\n\r\n        },\r\n        zaxis: {\r\n            title: \"TVD\",\r\n            nticks: 5,\r\n            range: [minTVD, -3000],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n    },\r\n    \r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kLTEvLi9zcmMvanMvbGF5b3V0LmpzPzZmZWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG1ha2VUcmFjZSA9ICh4LCB5LCBuYW1lLCB0eXBlPVwibGluZXNcIiwgY29sb3IsIHRleHQsIHZpc2libGU9dHJ1ZSkgPT4gKHtcclxuICAgIHgsXHJcbiAgICB5LFxyXG4gICAgdGV4dCxcclxuICAgIG5hbWUsXHJcbiAgICB2aXNpYmxlLFxyXG4gICAgbGluZToge1xyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgfSxcclxuICAgIG1vZGU6IHR5cGVcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZUxheW91dCA9ICh0aXRsZSwgdHlwZSwgdGlja3ZhbHMpID0+ICh7XHJcbiAgICB0aXRsZSxcclxuICAgIHlheGlzOiB7XHJcbiAgICAgICAgdHlwZTogdHlwZSB8fCBcImxpbmVhclwiLFxyXG4gICAgICAgIHJhbmdlbW9kZTogXCJ0b3plcm9cIixcclxuICAgICAgICBhdXRvcmFuZ2U6IHRydWUsXHJcbiAgICAgICAgdGlja2Zvcm1hdDogXCJmXCIsXHJcbiAgICAgICAgdGlja3ZhbHMsXHJcbiAgICAgICAgZ3JpZGNvbG9yOiBcIiNkYmRiZGJcIixcclxuICAgIH0sXHJcbiAgICB4YXhpczoge1xyXG4gICAgICAgIGdyaWRjb2xvcjogXCIjZGJkYmRiXCIsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBtb2RlQmFyQnV0dG9uc1RvUmVtb3ZlOiBbXHJcbiAgICAgICAgXCJzZW5kRGF0YVRvQ2xvdWRcIixcclxuICAgICAgICBcImF1dG9TY2FsZTJkXCIsXHJcbiAgICAgICAgXCJob3ZlckNsb3Nlc3RDYXJ0ZXNpYW5cIixcclxuICAgICAgICBcImhvdmVyQ29tcGFyZUNhcnRlc2lhblwiLFxyXG4gICAgICAgIFwibGFzc28yZFwiLFxyXG4gICAgICAgIFwiem9vbUluMmRcIixcclxuICAgICAgICBcInpvb21PdXQyZFwiLFxyXG4gICAgICAgIFwidG9nZ2xlU3Bpa2VsaW5lc1wiLFxyXG4gICAgXSxcclxuICAgIGRpc3BsYXlsb2dvOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGF5b3V0V2JkID0gKG1heCxtaW4sbWluVFZELHdlbGxOYW1lKSA9PiAoe1xyXG4gICAgd2lkdGg6IDE2MjAsXHJcbiAgICBoZWlnaHQ6IDcwMCxcclxuXHJcbiAgICBtYXJnaW46IHtcclxuICAgICAgICBsOiAwLFxyXG4gICAgICAgIHI6IDAsXHJcbiAgICAgICAgYjogMCxcclxuICAgICAgICB0OiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHRleHQ6IFwiRHJpbGxpbmcgZm9yIFwiICsgd2VsbE5hbWUgKyBcIiwgRGltbWl0IENvdW50eSwgVFhcIixcclxuICAgICAgICB5OiAwLjk4LFxyXG4gICAgfSxcclxuXHJcbiAgICBsZWdlbmQ6IHtcclxuICAgICAgICB4OiAwLjgsXHJcbiAgICAgICAgeTogMC44LFxyXG4gICAgfSxcclxuICAgIHNjZW5lOiB7XHJcbiAgICAgICAgYXNwZWN0bW9kZTogXCJjdWJlXCIsXHJcbiAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiRWFzdGluZ1wiLFxyXG4gICAgICAgICAgICBudGlja3M6IDgsXHJcbiAgICAgICAgICAgIHJhbmdlOiBbbWF4LCBtaW5dLFxyXG4gICAgICAgICAgICBncmlkY29sb3I6IFwiIzhhOGE4YVwiLFxyXG4gICAgICAgICAgICB0aWNrY29sb3I6IFwiIzA1MDUwNVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kY29sb3I6IFwiI2VkZWRlZFwiLFxyXG4gICAgICAgICAgICBzaG93YmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk5vcnRoaW5nXCIsXHJcbiAgICAgICAgICAgIG50aWNrczogOCxcclxuICAgICAgICAgICAgcmFuZ2U6IFttYXgsIG1pbl0sXHJcbiAgICAgICAgICAgIGdyaWRjb2xvcjogXCIjOGE4YThhXCIsXHJcbiAgICAgICAgICAgIHRpY2tjb2xvcjogXCIjMDUwNTA1XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRjb2xvcjogXCIjZjBmMWYyXCIsXHJcbiAgICAgICAgICAgIHNob3diYWNrZ3JvdW5kOiB0cnVlLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHpheGlzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlRWRFwiLFxyXG4gICAgICAgICAgICBudGlja3M6IDUsXHJcbiAgICAgICAgICAgIHJhbmdlOiBbbWluVFZELCAtMzAwMF0sXHJcbiAgICAgICAgICAgIGdyaWRjb2xvcjogXCIjOGE4YThhXCIsXHJcbiAgICAgICAgICAgIHRpY2tjb2xvcjogXCIjMDUwNTA1XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRjb2xvcjogXCIjZWRlZGVkXCIsXHJcbiAgICAgICAgICAgIHNob3diYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/layout.js\n");

/***/ }),

/***/ "./src/js/profile.js":
/*!***************************!*\
  !*** ./src/js/profile.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data__WEBPACK_IMPORTED_MODULE_4__]);\n_data__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_index__WEBPACK_IMPORTED_MODULE_2__.monitorAuthState)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_3__.monitorRegion)();\r\n\r\nconst fetchData = () => {\r\n    let data = localStorage.getItem(uid);//cache\r\n    if (data !== null && data !== \"null\") {\r\n        data = JSON.parse(data);\r\n        parseData(data);\r\n\r\n    } else {//get from fb\r\n        const deckRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, 'users/' + uid + '/deck');\r\n\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(deckRef, (snapshot) => {\r\n            const data = snapshot.val();\r\n\r\n            localStorage.setItem(uid, JSON.stringify(data));\r\n            if (data) parseData(data);\r\n\r\n        })\r\n    }\r\n}\r\nconst populateDropDown = (wells) => {\r\n    let menu = (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(\"#wellSelect\");\r\n    \r\n    wells.forEach(well => {\r\n        menu.append(\"option\")\r\n            .text(well)\r\n            .property(\"Value\", well);\r\n    });\r\n}\r\n\r\nconst parseData = (d) => {\r\n    const data = {}\r\n    Object.keys(d).forEach((key) => {\r\n        data[key.toLowerCase()] = d[key];\r\n    });\r\n    let res_wells = {};\r\n    let returns = {};\r\n    const wells = Object.keys(data).map(well => well.toLowerCase());\r\n\r\n    let well_list = Object.keys(d);\r\n    well_list.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));\r\n    well_list.unshift(\"All Wells\");\r\n    initWellList(well_list);\r\n    populateDropDown(well_list);\r\n\r\n    for (let [_, mnthDict] of Object.entries(_data__WEBPACK_IMPORTED_MODULE_4__.legacyEcon)) {\r\n        let recMnthReturn = 0;\r\n        let date;\r\n        for (let [_, wellDict] of Object.entries(mnthDict)) {\r\n            let well = wellDict[\"Well Name\"]\r\n            well = well.replace('#', '').toLowerCase();\r\n            date = wellDict[\"Date\"];\r\n            if (wells.includes(well)) {\r\n                const share = (data[well][\"ORRI\"] + data[well][\"WINRI\"]);\r\n                let wellMnthReturn = share * wellDict[\"Recent Month P&L\"];\r\n                recMnthReturn += wellMnthReturn;\r\n                if (!(well in res_wells)) res_wells[well] = [];\r\n                res_wells[well].push({ \"Well\": well, \"Date\": date, \"Recent Mnth Return\": wellMnthReturn, \"Share\": share })\r\n            }\r\n        }\r\n        returns[date] = recMnthReturn;\r\n    }\r\n    const dates_pl = format(returns);\r\n    plotRev(dates_pl[0], dates_pl[1]);\r\n\r\n    //mean payout\r\n    const payouts_num = Object.entries(_data__WEBPACK_IMPORTED_MODULE_4__.payout).map(\r\n        ([_, value]) => wells.includes(value[\"Well Name\"].replace(\"#\", \"\").toLowerCase()) ? value[\"% Payout\"] : null).filter(\r\n            el => el !== null);\r\n    document.getElementById('selected-well').textContent = \"All Wells\";\r\n    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin, curr) => runnin + curr).toFixed(2)}`;\r\n    document.getElementById('payout-title').textContent = \"% Mean Payout\";\r\n    document.getElementById('payout').textContent = `${(payouts_num.reduce((runnin, curr) => runnin + curr) * 100 / payouts_num.length).toFixed(0)}%`;\r\n\r\n    //store data\r\n    let shares = {}\r\n    for (let [well, wellObj] of Object.entries(res_wells)) {\r\n        let share = wellObj[0].Share;\r\n        shares[well] = share\r\n    }\r\n    localStorage.setItem('shares', JSON.stringify(shares));\r\n    localStorage.setItem('pl_data_wells', JSON.stringify(res_wells));\r\n    console.log('res_wells :>> ', res_wells);\r\n\r\n    let userProd = localStorage.userProd;\r\n    if (userProd == null) parseProd();\r\n    displayProd(\"All Wells\");\r\n}\r\n\r\nconst plotRev = (x, y, title=\"P&L (ST only)\") => {\r\n    const trace = (0,_layout__WEBPACK_IMPORTED_MODULE_5__.makeTrace)(x, y, 'P&L', \"lines+markers\", 'black',null);\r\n    const layout = (0,_layout__WEBPACK_IMPORTED_MODULE_5__.makeLayout)(title)\r\n    Plotly.newPlot(\"returnsCurve\", [trace], layout, _layout__WEBPACK_IMPORTED_MODULE_5__.config);\r\n}\r\n\r\nconst format = (obj) => {\r\n    const sortedArray = Object.entries(obj).sort((a, b) => {\r\n        const dateA = new Date(a[0]);\r\n        const dateB = new Date(b[0]);\r\n        return dateA - dateB;\r\n    });\r\n\r\n    const sortedObj = Object.fromEntries(sortedArray);\r\n    const dates = Object.entries(sortedObj).map(([key, _]) => key);\r\n    const pl = Object.entries(sortedObj).map(([_, value]) => value);\r\n\r\n    return [dates, pl]\r\n}\r\n\r\nconst initWellList = (wells) => {\r\n    let ulWellList = document.getElementById(\"well-list\");\r\n    for (let i = 0; i < wells.length; i++) {\r\n        let li = document.createElement(\"li\");\r\n        li.classList.add(\"nav-item\", \"active\");\r\n        li.style.cursor = \"pointer\";\r\n\r\n        let a = document.createElement(\"a\");\r\n        a.classList.add(\"nav-link\");\r\n\r\n        let span = document.createElement(\"span\");\r\n        span.classList.add(\"menu-title\");\r\n        span.textContent = wells[i];\r\n\r\n        a.appendChild(span);\r\n        li.appendChild(a);\r\n\r\n        li.onclick = function () {\r\n            displayWell(this.textContent);\r\n            displayProd(this.textContent);\r\n        };\r\n\r\n        ulWellList.appendChild(li);\r\n    }\r\n}\r\n\r\nconst displayWell = (selected) => {\r\n    let data = localStorage.getItem('pl_data_wells');\r\n    data = JSON.parse(data);\r\n    if (selected == \"All Wells\") {\r\n        data = localStorage.getItem(uid)\r\n        parseData(JSON.parse(data));\r\n        return;\r\n    }\r\n    let well_payout = Object.entries(_data__WEBPACK_IMPORTED_MODULE_4__.payout).filter(\r\n        val => val[1][\"Well Name\"].replace(\"#\",\"\").toLowerCase() == selected.toLowerCase()\r\n    );\r\n    if (well_payout.length == 0) {\r\n        plotRev([],[],`No economic data for ${selected}`);\r\n        document.getElementById('selected-well').textContent = selected;\r\n        document.getElementById('payout').textContent = `no data`;\r\n        document.getElementById('sum-pl').textContent = `no data`;\r\n        return;\r\n    };\r\n    well_payout = well_payout[0][1][\"% Payout\"]\r\n    data = data[selected.toLowerCase()];\r\n    let returns = {};\r\n\r\n    for (let idx in data) {\r\n        const mo = data[idx][\"Date\"];\r\n        returns[mo] = data[idx][\"Recent Mnth Return\"];\r\n    }\r\n\r\n    const dates_pl = format(returns);\r\n    console.log('dates_pl[0] :>> ', dates_pl[0]);\r\n    plotRev(dates_pl[0], dates_pl[1]);\r\n\r\n    document.getElementById('selected-well').textContent = selected;\r\n    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin, curr) => runnin + curr).toFixed(2)}`\r\n    document.getElementById('payout-title').textContent = \"% Payout\";\r\n    document.getElementById('payout').textContent = `${(well_payout * 100).toFixed(0)}%`;\r\n}\r\n\r\nconst parseProd = () => {\r\n    let shares = JSON.parse(localStorage.shares);\r\n    let wells = Object.keys(shares);\r\n    let selected_data = _data__WEBPACK_IMPORTED_MODULE_4__.moDataST.map(el => {\r\n        let well = el[0].replace(\"#\",\"\").toLowerCase();\r\n        if (wells.includes(well)){\r\n            let share = shares[well]\r\n            return [well,el[1]*share,el[2]*share,el[3]*share,el[6]];\r\n        }\r\n    }).filter(el => el !== undefined);\r\n    localStorage.setItem(\"userProd\",JSON.stringify(selected_data));\r\n}\r\n\r\nconst displayProd = (selected) => {\r\n    const edge = new Date(\"2021-12-01\");\r\n    let cnt = 0;\r\n    let data = JSON.parse(localStorage.userProd);//[[well,oil,gas,water,date],...]\r\n    if (selected !== \"All Wells\") data = data.filter(el => el[0] == selected.toLowerCase());\r\n\r\n    let date = data.map(el => el[4]).filter(el => {\r\n        let d = new Date(el)\r\n        if (d > edge){\r\n            return true;\r\n        }else{\r\n            cnt += 1\r\n            return false;\r\n        }\r\n    }).map(dateString => {\r\n        const dateObj = new Date(dateString);\r\n        const options = { year: 'numeric', month: 'long' };\r\n        return dateObj.toLocaleString('en-US', options);\r\n    });\r\n\r\n\r\n    let oil = data.map(el => el[1]).slice(0,cnt);\r\n    let gas = data.map(el => el[2]).slice(0,cnt);\r\n\r\n    date.pop();\r\n    oil.pop();\r\n    gas.pop();\r\n\r\n    const traceOil = (0,_layout__WEBPACK_IMPORTED_MODULE_5__.makeTrace)(date,oil,\"Oil [Bbls]\",\"lines+markers\",\"green\",null)\r\n    const traceGas = (0,_layout__WEBPACK_IMPORTED_MODULE_5__.makeTrace)(date,gas,\"Gas [Cf]\",\"lines+markers\",\"red\",null)\r\n    const layout = {\r\n        title: \"Oil & Gas Production\",\r\n        legend: {\r\n            orientation: \"h\",\r\n            y: 1.2,\r\n        },\r\n    };\r\n    Plotly.newPlot(\"prodCurve\", [traceOil,traceGas],layout);\r\n}\r\n\r\n//\\\\\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)()\r\nconst uid = localStorage.getItem('uid');\r\nconsole.log('uid :>> ', uid);\r\n\r\ndocument.getElementById(\"btnLogout\").addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_2__.logout);\r\n\r\nfetchData();\r\n\r\n(0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(\"#wellSelect\").on(\"change\", () => {\r\n    let selected = (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(\"#wellSelect\").node().value;\r\n    displayWell(selected);\r\n    displayProd(selected);\r\n});\r\n\r\n//search\r\nconst searchInput = document.getElementById('searchInput');\r\nconst wellList = document.getElementById('well-list').getElementsByTagName('li');\r\n\r\nsearchInput.addEventListener('input', function () {\r\n    const searchTerm = searchInput.value.toLowerCase();\r\n\r\n    for (let i = 0; i < wellList.length; i++) {\r\n        const wellName = wellList[i].getElementsByTagName('span')[0].textContent.toLowerCase();\r\n\r\n        if (wellName.includes(searchTerm)) {\r\n            wellList[i].style.display = 'block';\r\n        } else {\r\n            wellList[i].style.display = 'none';\r\n        }\r\n    }\r\n});\r\n\r\n\r\ndocument.getElementById(\"init_scale\").addEventListener('click', () => {\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_6__.toggleInitScale)();\r\n})\r\n\r\ndocument.getElementById(\"init_time\").addEventListener('click', () => {\r\n    ;(0,_ui__WEBPACK_IMPORTED_MODULE_6__.toggleInitTime)();\r\n})\r\n\r\ndocument.getElementById(\"show_pwd_form_btn\").addEventListener('click', () => {\r\n    document.getElementById('change_pwd_form').style.display = \"block\";\r\n})\r\n\r\ndocument.getElementById(\"close_pwd_form\").addEventListener('click', () => {\r\n    document.getElementById('change_pwd_form').style.display = \"none\";\r\n})\r\n\r\ndocument.getElementById(\"change_pwd_btn\").addEventListener('click', (e) => {\r\n    let pwd = document.getElementById(\"new_pwd\").value;\r\n    let pwd_rpt = document.getElementById(\"new_pwd_rpt\").value;\r\n    if (pwd !== pwd_rpt) {\r\n        e.preventDefault();\r\n        document.getElementById('pwd_msg').textContent = \"Passwords do not match\";\r\n        document.getElementById('change_pwd_form').style.display = \"block\";\r\n        return;\r\n    }\r\n    (0,_index__WEBPACK_IMPORTED_MODULE_2__.changePwd)(pwd, pwd_rpt);\r\n})\r\n\r\nwindow.onload = function () {\r\n    const currTime = localStorage.getItem('initTime');\r\n    let time = \"30 Days\";\r\n    if (currTime == 0) time = \"Inception\";\r\n\r\n    document.getElementById(\"init_scale\").textContent = localStorage.getItem('initScale');\r\n    document.getElementById(\"init_time\").textContent = time;\r\n}();\r\n\r\nconsole.log('wdiv :>> ', document.getElementById(\"plotDiv\").clientWidth);\r\nconsole.log('wgraph :>> ', document.getElementById(\"returnsCurve\").clientWidth);\r\n//let pl_str = localStorage.getItem('pl');\r\n//let dates_str = localStorage.getItem('dates');\r\n//if (pl_str & dates_str){\r\n//    dates_str = dates_str.split(',');\r\n//    pl_str = pl_str.split(',');\r\n//    pl_str = pl_str.map(el => parseFloat(el));\r\n//    plotRev(pl_str,dates_str);\r\n//} else {\r\n//    fetchData();\r\n//}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBZTtBQUNuQixDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksb0RBQWM7QUFDbEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFTO0FBQ2IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZC0xLy4vc3JjL2pzL3Byb2ZpbGUuanM/YjBlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb25pdG9yUmVnaW9uIH0gZnJvbSAnLi9yZWdpb24nXHJcbmltcG9ydCB7IGxvZ291dCwgbW9uaXRvckF1dGhTdGF0ZSwgY2hhbmdlUHdkIH0gZnJvbSAnLi9pbmRleCdcclxuaW1wb3J0IHsgcmVmLCBnZXREYXRhYmFzZSwgb25WYWx1ZSB9IGZyb20gJ2ZpcmViYXNlL2RhdGFiYXNlJztcclxuaW1wb3J0IHsgbGVnYWN5RWNvbiwgcGF5b3V0LCBtb0RhdGFTVCB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCB7IG1ha2VUcmFjZSwgbWFrZUxheW91dCwgY29uZmlnIH0gZnJvbSAnLi9sYXlvdXQnO1xyXG5pbXBvcnQgeyB0b2dnbGVJbml0U2NhbGUsIHRvZ2dsZUluaXRUaW1lIH0gZnJvbSAnLi91aSc7XHJcbmltcG9ydCB7IHNlbGVjdCB9IGZyb20gJ2QzJztcclxuXHJcbm1vbml0b3JBdXRoU3RhdGUoKTtcclxubW9uaXRvclJlZ2lvbigpO1xyXG5cclxuY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh1aWQpOy8vY2FjaGVcclxuICAgIGlmIChkYXRhICE9PSBudWxsICYmIGRhdGEgIT09IFwibnVsbFwiKSB7XHJcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgcGFyc2VEYXRhKGRhdGEpO1xyXG5cclxuICAgIH0gZWxzZSB7Ly9nZXQgZnJvbSBmYlxyXG4gICAgICAgIGNvbnN0IGRlY2tSZWYgPSByZWYoZGIsICd1c2Vycy8nICsgdWlkICsgJy9kZWNrJyk7XHJcblxyXG4gICAgICAgIG9uVmFsdWUoZGVja1JlZiwgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBzbmFwc2hvdC52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHVpZCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkgcGFyc2VEYXRhKGRhdGEpO1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IHBvcHVsYXRlRHJvcERvd24gPSAod2VsbHMpID0+IHtcclxuICAgIGxldCBtZW51ID0gc2VsZWN0KFwiI3dlbGxTZWxlY3RcIik7XHJcbiAgICBcclxuICAgIHdlbGxzLmZvckVhY2god2VsbCA9PiB7XHJcbiAgICAgICAgbWVudS5hcHBlbmQoXCJvcHRpb25cIilcclxuICAgICAgICAgICAgLnRleHQod2VsbClcclxuICAgICAgICAgICAgLnByb3BlcnR5KFwiVmFsdWVcIiwgd2VsbCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgcGFyc2VEYXRhID0gKGQpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7fVxyXG4gICAgT2JqZWN0LmtleXMoZCkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgZGF0YVtrZXkudG9Mb3dlckNhc2UoKV0gPSBkW2tleV07XHJcbiAgICB9KTtcclxuICAgIGxldCByZXNfd2VsbHMgPSB7fTtcclxuICAgIGxldCByZXR1cm5zID0ge307XHJcbiAgICBjb25zdCB3ZWxscyA9IE9iamVjdC5rZXlzKGRhdGEpLm1hcCh3ZWxsID0+IHdlbGwudG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gICAgbGV0IHdlbGxfbGlzdCA9IE9iamVjdC5rZXlzKGQpO1xyXG4gICAgd2VsbF9saXN0LnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiLCB1bmRlZmluZWQsIHsgc2Vuc2l0aXZpdHk6ICdiYXNlJyB9KSk7XHJcbiAgICB3ZWxsX2xpc3QudW5zaGlmdChcIkFsbCBXZWxsc1wiKTtcclxuICAgIGluaXRXZWxsTGlzdCh3ZWxsX2xpc3QpO1xyXG4gICAgcG9wdWxhdGVEcm9wRG93bih3ZWxsX2xpc3QpO1xyXG5cclxuICAgIGZvciAobGV0IFtfLCBtbnRoRGljdF0gb2YgT2JqZWN0LmVudHJpZXMobGVnYWN5RWNvbikpIHtcclxuICAgICAgICBsZXQgcmVjTW50aFJldHVybiA9IDA7XHJcbiAgICAgICAgbGV0IGRhdGU7XHJcbiAgICAgICAgZm9yIChsZXQgW18sIHdlbGxEaWN0XSBvZiBPYmplY3QuZW50cmllcyhtbnRoRGljdCkpIHtcclxuICAgICAgICAgICAgbGV0IHdlbGwgPSB3ZWxsRGljdFtcIldlbGwgTmFtZVwiXVxyXG4gICAgICAgICAgICB3ZWxsID0gd2VsbC5yZXBsYWNlKCcjJywgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGRhdGUgPSB3ZWxsRGljdFtcIkRhdGVcIl07XHJcbiAgICAgICAgICAgIGlmICh3ZWxscy5pbmNsdWRlcyh3ZWxsKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcmUgPSAoZGF0YVt3ZWxsXVtcIk9SUklcIl0gKyBkYXRhW3dlbGxdW1wiV0lOUklcIl0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IHdlbGxNbnRoUmV0dXJuID0gc2hhcmUgKiB3ZWxsRGljdFtcIlJlY2VudCBNb250aCBQJkxcIl07XHJcbiAgICAgICAgICAgICAgICByZWNNbnRoUmV0dXJuICs9IHdlbGxNbnRoUmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEod2VsbCBpbiByZXNfd2VsbHMpKSByZXNfd2VsbHNbd2VsbF0gPSBbXTtcclxuICAgICAgICAgICAgICAgIHJlc193ZWxsc1t3ZWxsXS5wdXNoKHsgXCJXZWxsXCI6IHdlbGwsIFwiRGF0ZVwiOiBkYXRlLCBcIlJlY2VudCBNbnRoIFJldHVyblwiOiB3ZWxsTW50aFJldHVybiwgXCJTaGFyZVwiOiBzaGFyZSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybnNbZGF0ZV0gPSByZWNNbnRoUmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0ZXNfcGwgPSBmb3JtYXQocmV0dXJucyk7XHJcbiAgICBwbG90UmV2KGRhdGVzX3BsWzBdLCBkYXRlc19wbFsxXSk7XHJcblxyXG4gICAgLy9tZWFuIHBheW91dFxyXG4gICAgY29uc3QgcGF5b3V0c19udW0gPSBPYmplY3QuZW50cmllcyhwYXlvdXQpLm1hcChcclxuICAgICAgICAoW18sIHZhbHVlXSkgPT4gd2VsbHMuaW5jbHVkZXModmFsdWVbXCJXZWxsIE5hbWVcIl0ucmVwbGFjZShcIiNcIiwgXCJcIikudG9Mb3dlckNhc2UoKSkgPyB2YWx1ZVtcIiUgUGF5b3V0XCJdIDogbnVsbCkuZmlsdGVyKFxyXG4gICAgICAgICAgICBlbCA9PiBlbCAhPT0gbnVsbCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0ZWQtd2VsbCcpLnRleHRDb250ZW50ID0gXCJBbGwgV2VsbHNcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW0tcGwnKS50ZXh0Q29udGVudCA9IGAkJHtkYXRlc19wbFsxXS5yZWR1Y2UoKHJ1bm5pbiwgY3VycikgPT4gcnVubmluICsgY3VycikudG9GaXhlZCgyKX1gO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW91dC10aXRsZScpLnRleHRDb250ZW50ID0gXCIlIE1lYW4gUGF5b3V0XCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5b3V0JykudGV4dENvbnRlbnQgPSBgJHsocGF5b3V0c19udW0ucmVkdWNlKChydW5uaW4sIGN1cnIpID0+IHJ1bm5pbiArIGN1cnIpICogMTAwIC8gcGF5b3V0c19udW0ubGVuZ3RoKS50b0ZpeGVkKDApfSVgO1xyXG5cclxuICAgIC8vc3RvcmUgZGF0YVxyXG4gICAgbGV0IHNoYXJlcyA9IHt9XHJcbiAgICBmb3IgKGxldCBbd2VsbCwgd2VsbE9ial0gb2YgT2JqZWN0LmVudHJpZXMocmVzX3dlbGxzKSkge1xyXG4gICAgICAgIGxldCBzaGFyZSA9IHdlbGxPYmpbMF0uU2hhcmU7XHJcbiAgICAgICAgc2hhcmVzW3dlbGxdID0gc2hhcmVcclxuICAgIH1cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzaGFyZXMnLCBKU09OLnN0cmluZ2lmeShzaGFyZXMpKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbF9kYXRhX3dlbGxzJywgSlNPTi5zdHJpbmdpZnkocmVzX3dlbGxzKSk7XHJcbiAgICBjb25zb2xlLmxvZygncmVzX3dlbGxzIDo+PiAnLCByZXNfd2VsbHMpO1xyXG5cclxuICAgIGxldCB1c2VyUHJvZCA9IGxvY2FsU3RvcmFnZS51c2VyUHJvZDtcclxuICAgIGlmICh1c2VyUHJvZCA9PSBudWxsKSBwYXJzZVByb2QoKTtcclxuICAgIGRpc3BsYXlQcm9kKFwiQWxsIFdlbGxzXCIpO1xyXG59XHJcblxyXG5jb25zdCBwbG90UmV2ID0gKHgsIHksIHRpdGxlPVwiUCZMIChTVCBvbmx5KVwiKSA9PiB7XHJcbiAgICBjb25zdCB0cmFjZSA9IG1ha2VUcmFjZSh4LCB5LCAnUCZMJywgXCJsaW5lcyttYXJrZXJzXCIsICdibGFjaycsbnVsbCk7XHJcbiAgICBjb25zdCBsYXlvdXQgPSBtYWtlTGF5b3V0KHRpdGxlKVxyXG4gICAgUGxvdGx5Lm5ld1Bsb3QoXCJyZXR1cm5zQ3VydmVcIiwgW3RyYWNlXSwgbGF5b3V0LCBjb25maWcpO1xyXG59XHJcblxyXG5jb25zdCBmb3JtYXQgPSAob2JqKSA9PiB7XHJcbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IE9iamVjdC5lbnRyaWVzKG9iaikuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGVBID0gbmV3IERhdGUoYVswXSk7XHJcbiAgICAgICAgY29uc3QgZGF0ZUIgPSBuZXcgRGF0ZShiWzBdKTtcclxuICAgICAgICByZXR1cm4gZGF0ZUEgLSBkYXRlQjtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNvcnRlZE9iaiA9IE9iamVjdC5mcm9tRW50cmllcyhzb3J0ZWRBcnJheSk7XHJcbiAgICBjb25zdCBkYXRlcyA9IE9iamVjdC5lbnRyaWVzKHNvcnRlZE9iaikubWFwKChba2V5LCBfXSkgPT4ga2V5KTtcclxuICAgIGNvbnN0IHBsID0gT2JqZWN0LmVudHJpZXMoc29ydGVkT2JqKS5tYXAoKFtfLCB2YWx1ZV0pID0+IHZhbHVlKTtcclxuXHJcbiAgICByZXR1cm4gW2RhdGVzLCBwbF1cclxufVxyXG5cclxuY29uc3QgaW5pdFdlbGxMaXN0ID0gKHdlbGxzKSA9PiB7XHJcbiAgICBsZXQgdWxXZWxsTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VsbC1saXN0XCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIiwgXCJhY3RpdmVcIik7XHJcbiAgICAgICAgbGkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcblxyXG4gICAgICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgYS5jbGFzc0xpc3QuYWRkKFwibmF2LWxpbmtcIik7XHJcblxyXG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwibWVudS10aXRsZVwiKTtcclxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gd2VsbHNbaV07XHJcblxyXG4gICAgICAgIGEuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XHJcblxyXG4gICAgICAgIGxpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlXZWxsKHRoaXMudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICBkaXNwbGF5UHJvZCh0aGlzLnRleHRDb250ZW50KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB1bFdlbGxMaXN0LmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZGlzcGxheVdlbGwgPSAoc2VsZWN0ZWQpID0+IHtcclxuICAgIGxldCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsX2RhdGFfd2VsbHMnKTtcclxuICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgaWYgKHNlbGVjdGVkID09IFwiQWxsIFdlbGxzXCIpIHtcclxuICAgICAgICBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odWlkKVxyXG4gICAgICAgIHBhcnNlRGF0YShKU09OLnBhcnNlKGRhdGEpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgd2VsbF9wYXlvdXQgPSBPYmplY3QuZW50cmllcyhwYXlvdXQpLmZpbHRlcihcclxuICAgICAgICB2YWwgPT4gdmFsWzFdW1wiV2VsbCBOYW1lXCJdLnJlcGxhY2UoXCIjXCIsXCJcIikudG9Mb3dlckNhc2UoKSA9PSBzZWxlY3RlZC50b0xvd2VyQ2FzZSgpXHJcbiAgICApO1xyXG4gICAgaWYgKHdlbGxfcGF5b3V0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgcGxvdFJldihbXSxbXSxgTm8gZWNvbm9taWMgZGF0YSBmb3IgJHtzZWxlY3RlZH1gKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0ZWQtd2VsbCcpLnRleHRDb250ZW50ID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW91dCcpLnRleHRDb250ZW50ID0gYG5vIGRhdGFgO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW0tcGwnKS50ZXh0Q29udGVudCA9IGBubyBkYXRhYDtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgd2VsbF9wYXlvdXQgPSB3ZWxsX3BheW91dFswXVsxXVtcIiUgUGF5b3V0XCJdXHJcbiAgICBkYXRhID0gZGF0YVtzZWxlY3RlZC50b0xvd2VyQ2FzZSgpXTtcclxuICAgIGxldCByZXR1cm5zID0ge307XHJcblxyXG4gICAgZm9yIChsZXQgaWR4IGluIGRhdGEpIHtcclxuICAgICAgICBjb25zdCBtbyA9IGRhdGFbaWR4XVtcIkRhdGVcIl07XHJcbiAgICAgICAgcmV0dXJuc1ttb10gPSBkYXRhW2lkeF1bXCJSZWNlbnQgTW50aCBSZXR1cm5cIl07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0ZXNfcGwgPSBmb3JtYXQocmV0dXJucyk7XHJcbiAgICBjb25zb2xlLmxvZygnZGF0ZXNfcGxbMF0gOj4+ICcsIGRhdGVzX3BsWzBdKTtcclxuICAgIHBsb3RSZXYoZGF0ZXNfcGxbMF0sIGRhdGVzX3BsWzFdKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0ZWQtd2VsbCcpLnRleHRDb250ZW50ID0gc2VsZWN0ZWQ7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VtLXBsJykudGV4dENvbnRlbnQgPSBgJCR7ZGF0ZXNfcGxbMV0ucmVkdWNlKChydW5uaW4sIGN1cnIpID0+IHJ1bm5pbiArIGN1cnIpLnRvRml4ZWQoMil9YFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW91dC10aXRsZScpLnRleHRDb250ZW50ID0gXCIlIFBheW91dFwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW91dCcpLnRleHRDb250ZW50ID0gYCR7KHdlbGxfcGF5b3V0ICogMTAwKS50b0ZpeGVkKDApfSVgO1xyXG59XHJcblxyXG5jb25zdCBwYXJzZVByb2QgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2hhcmVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2hhcmVzKTtcclxuICAgIGxldCB3ZWxscyA9IE9iamVjdC5rZXlzKHNoYXJlcyk7XHJcbiAgICBsZXQgc2VsZWN0ZWRfZGF0YSA9IG1vRGF0YVNULm1hcChlbCA9PiB7XHJcbiAgICAgICAgbGV0IHdlbGwgPSBlbFswXS5yZXBsYWNlKFwiI1wiLFwiXCIpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKHdlbGxzLmluY2x1ZGVzKHdlbGwpKXtcclxuICAgICAgICAgICAgbGV0IHNoYXJlID0gc2hhcmVzW3dlbGxdXHJcbiAgICAgICAgICAgIHJldHVybiBbd2VsbCxlbFsxXSpzaGFyZSxlbFsyXSpzaGFyZSxlbFszXSpzaGFyZSxlbFs2XV07XHJcbiAgICAgICAgfVxyXG4gICAgfSkuZmlsdGVyKGVsID0+IGVsICE9PSB1bmRlZmluZWQpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyUHJvZFwiLEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkX2RhdGEpKTtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheVByb2QgPSAoc2VsZWN0ZWQpID0+IHtcclxuICAgIGNvbnN0IGVkZ2UgPSBuZXcgRGF0ZShcIjIwMjEtMTItMDFcIik7XHJcbiAgICBsZXQgY250ID0gMDtcclxuICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudXNlclByb2QpOy8vW1t3ZWxsLG9pbCxnYXMsd2F0ZXIsZGF0ZV0sLi4uXVxyXG4gICAgaWYgKHNlbGVjdGVkICE9PSBcIkFsbCBXZWxsc1wiKSBkYXRhID0gZGF0YS5maWx0ZXIoZWwgPT4gZWxbMF0gPT0gc2VsZWN0ZWQudG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gICAgbGV0IGRhdGUgPSBkYXRhLm1hcChlbCA9PiBlbFs0XSkuZmlsdGVyKGVsID0+IHtcclxuICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKGVsKVxyXG4gICAgICAgIGlmIChkID4gZWRnZSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjbnQgKz0gMVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSkubWFwKGRhdGVTdHJpbmcgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGVPYmogPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0geyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycgfTtcclxuICAgICAgICByZXR1cm4gZGF0ZU9iai50b0xvY2FsZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBsZXQgb2lsID0gZGF0YS5tYXAoZWwgPT4gZWxbMV0pLnNsaWNlKDAsY250KTtcclxuICAgIGxldCBnYXMgPSBkYXRhLm1hcChlbCA9PiBlbFsyXSkuc2xpY2UoMCxjbnQpO1xyXG5cclxuICAgIGRhdGUucG9wKCk7XHJcbiAgICBvaWwucG9wKCk7XHJcbiAgICBnYXMucG9wKCk7XHJcblxyXG4gICAgY29uc3QgdHJhY2VPaWwgPSBtYWtlVHJhY2UoZGF0ZSxvaWwsXCJPaWwgW0JibHNdXCIsXCJsaW5lcyttYXJrZXJzXCIsXCJncmVlblwiLG51bGwpXHJcbiAgICBjb25zdCB0cmFjZUdhcyA9IG1ha2VUcmFjZShkYXRlLGdhcyxcIkdhcyBbQ2ZdXCIsXCJsaW5lcyttYXJrZXJzXCIsXCJyZWRcIixudWxsKVxyXG4gICAgY29uc3QgbGF5b3V0ID0ge1xyXG4gICAgICAgIHRpdGxlOiBcIk9pbCAmIEdhcyBQcm9kdWN0aW9uXCIsXHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhcIixcclxuICAgICAgICAgICAgeTogMS4yLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgUGxvdGx5Lm5ld1Bsb3QoXCJwcm9kQ3VydmVcIiwgW3RyYWNlT2lsLHRyYWNlR2FzXSxsYXlvdXQpO1xyXG59XHJcblxyXG4vL1xcXFxcclxuY29uc3QgZGIgPSBnZXREYXRhYmFzZSgpXHJcbmNvbnN0IHVpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1aWQnKTtcclxuY29uc29sZS5sb2coJ3VpZCA6Pj4gJywgdWlkKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuTG9nb3V0XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9nb3V0KTtcclxuXHJcbmZldGNoRGF0YSgpO1xyXG5cclxuc2VsZWN0KFwiI3dlbGxTZWxlY3RcIikub24oXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gc2VsZWN0KFwiI3dlbGxTZWxlY3RcIikubm9kZSgpLnZhbHVlO1xyXG4gICAgZGlzcGxheVdlbGwoc2VsZWN0ZWQpO1xyXG4gICAgZGlzcGxheVByb2Qoc2VsZWN0ZWQpO1xyXG59KTtcclxuXHJcbi8vc2VhcmNoXHJcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaElucHV0Jyk7XHJcbmNvbnN0IHdlbGxMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGwtbGlzdCcpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xyXG5cclxuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBzZWFyY2hUZXJtID0gc2VhcmNoSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlbGxMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgd2VsbE5hbWUgPSB3ZWxsTGlzdFtpXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3BhbicpWzBdLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGlmICh3ZWxsTmFtZS5pbmNsdWRlcyhzZWFyY2hUZXJtKSkge1xyXG4gICAgICAgICAgICB3ZWxsTGlzdFtpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3ZWxsTGlzdFtpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbml0X3NjYWxlXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgdG9nZ2xlSW5pdFNjYWxlKCk7XHJcbn0pXHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRfdGltZVwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRvZ2dsZUluaXRUaW1lKCk7XHJcbn0pXHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dfcHdkX2Zvcm1fYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYW5nZV9wd2RfZm9ybScpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbn0pXHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlX3B3ZF9mb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYW5nZV9wd2RfZm9ybScpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufSlcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhbmdlX3B3ZF9idG5cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgbGV0IHB3ZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3B3ZFwiKS52YWx1ZTtcclxuICAgIGxldCBwd2RfcnB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdfcHdkX3JwdFwiKS52YWx1ZTtcclxuICAgIGlmIChwd2QgIT09IHB3ZF9ycHQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B3ZF9tc2cnKS50ZXh0Q29udGVudCA9IFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2VfcHdkX2Zvcm0nKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNoYW5nZVB3ZChwd2QsIHB3ZF9ycHQpO1xyXG59KVxyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGN1cnJUaW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luaXRUaW1lJyk7XHJcbiAgICBsZXQgdGltZSA9IFwiMzAgRGF5c1wiO1xyXG4gICAgaWYgKGN1cnJUaW1lID09IDApIHRpbWUgPSBcIkluY2VwdGlvblwiO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5pdF9zY2FsZVwiKS50ZXh0Q29udGVudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbml0U2NhbGUnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5pdF90aW1lXCIpLnRleHRDb250ZW50ID0gdGltZTtcclxufSgpO1xyXG5cclxuY29uc29sZS5sb2coJ3dkaXYgOj4+ICcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxvdERpdlwiKS5jbGllbnRXaWR0aCk7XHJcbmNvbnNvbGUubG9nKCd3Z3JhcGggOj4+ICcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmV0dXJuc0N1cnZlXCIpLmNsaWVudFdpZHRoKTtcclxuLy9sZXQgcGxfc3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsJyk7XHJcbi8vbGV0IGRhdGVzX3N0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRlcycpO1xyXG4vL2lmIChwbF9zdHIgJiBkYXRlc19zdHIpe1xyXG4vLyAgICBkYXRlc19zdHIgPSBkYXRlc19zdHIuc3BsaXQoJywnKTtcclxuLy8gICAgcGxfc3RyID0gcGxfc3RyLnNwbGl0KCcsJyk7XHJcbi8vICAgIHBsX3N0ciA9IHBsX3N0ci5tYXAoZWwgPT4gcGFyc2VGbG9hdChlbCkpO1xyXG4vLyAgICBwbG90UmV2KHBsX3N0cixkYXRlc19zdHIpO1xyXG4vL30gZWxzZSB7XHJcbi8vICAgIGZldGNoRGF0YSgpO1xyXG4vL30iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/profile.js\n");

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