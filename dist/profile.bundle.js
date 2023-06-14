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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data__WEBPACK_IMPORTED_MODULE_4__]);\n_data__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_index__WEBPACK_IMPORTED_MODULE_2__.monitorAuthState)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_3__.monitorRegion)();\r\n\r\nconst fetchData = () => {\r\n    let data = localStorage.getItem(uid);//cache\r\n    if (data !== null && data !== \"null\") {\r\n        data = JSON.parse(data);\r\n        parseData(data);\r\n\r\n    } else {//get from fb\r\n        const deckRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, 'users/' + uid + '/deck');\r\n\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(deckRef, (snapshot) => {\r\n            const data = snapshot.val();\r\n\r\n            localStorage.setItem(uid, JSON.stringify(data));\r\n            if (data) parseData(data);\r\n\r\n        })\r\n    }\r\n}\r\nconst populateDropDown = (wells) => {\r\n    let menu = (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(\"#wellSelect\");\r\n    \r\n    wells.forEach(well => {\r\n        menu.append(\"option\")\r\n            .text(well)\r\n            .property(\"Value\", well);\r\n    });\r\n}\r\n\r\nconst parseData = (d) => {\r\n    const data = {}\r\n    Object.keys(d).forEach((key) => {\r\n        data[key.toLowerCase()] = d[key];\r\n    });\r\n    let res_wells = {};\r\n    let returns = {};\r\n    const wells = Object.keys(data).map(well => well.toLowerCase());\r\n\r\n    let well_list = Object.keys(d);\r\n    well_list.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));\r\n    well_list.unshift(\"All Wells\");\r\n    initWellList(well_list);\r\n    populateDropDown(well_list);\r\n\r\n    for (let [_, mnthDict] of Object.entries(_data__WEBPACK_IMPORTED_MODULE_4__.legacyEcon)) {\r\n        let recMnthReturn = 0;\r\n        let date;\r\n        for (let [_, wellDict] of Object.entries(mnthDict)) {\r\n            let well = wellDict[\"Well Name\"]\r\n            well = well.replace('#', '').toLowerCase();\r\n            date = wellDict[\"Date\"];\r\n            if (wells.includes(well)) {\r\n                const share = (data[well][\"ORRI\"] + data[well][\"WINRI\"]);\r\n                let wellMnthReturn = share * wellDict[\"Recent Month P&L\"];\r\n                recMnthReturn += wellMnthReturn;\r\n                if (!(well in res_wells)) res_wells[well] = [];\r\n                res_wells[well].push({ \"Well\": well, \"Date\": date, \"Recent Mnth Return\": wellMnthReturn, \"Share\": share })\r\n            }\r\n        }\r\n        returns[date] = recMnthReturn;\r\n    }\r\n    const dates_pl = format(returns);\r\n    plotRev(dates_pl[0], dates_pl[1]);\r\n\r\n    //mean payout\r\n    const payouts_num = Object.entries(_data__WEBPACK_IMPORTED_MODULE_4__.payout).map(\r\n        ([_, value]) => wells.includes(value[\"Well Name\"].replace(\"#\", \"\").toLowerCase()) ? value[\"% Payout\"] : null).filter(\r\n            el => el !== null);\r\n    document.getElementById('selected-well').textContent = \"All Wells\";\r\n    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin, curr) => runnin + curr).toFixed(2)}`;\r\n    document.getElementById('payout-title').textContent = \"% Mean Payout\";\r\n    document.getElementById('payout').textContent = `${(payouts_num.reduce((runnin, curr) => runnin + curr) * 100 / payouts_num.length).toFixed(0)}%`;\r\n\r\n    //store data\r\n    let shares = {}\r\n    for (let [well, wellObj] of Object.entries(res_wells)) {\r\n        let share = wellObj[0].Share;\r\n        shares[well] = share\r\n    }\r\n    localStorage.setItem('shares', JSON.stringify(shares));\r\n    localStorage.setItem('pl_data_wells', JSON.stringify(res_wells));\r\n    console.log('res_wells :>> ', res_wells);\r\n\r\n    let userProd = localStorage.userProd;\r\n    if (userProd == null) parseProd();\r\n    displayProd(\"All Wells\");\r\n}\r\n\r\nconst plotRev = (x, y, title=\"P&L (ST only)\") => {\r\n    const trace = (0,_layout__WEBPACK_IMPORTED_MODULE_5__.makeTrace)(x, y, 'P&L', \"lines+markers\", 'black',null);\r\n    const layout = (0,_layout__WEBPACK_IMPORTED_MODULE_5__.makeLayout)(title)\r\n    Plotly.newPlot(\"returnsCurve\", [trace], layout, _layout__WEBPACK_IMPORTED_MODULE_5__.config);\r\n}\r\n\r\nconst format = (obj) => {\r\n    const sortedArray = Object.entries(obj).sort((a, b) => {\r\n        const dateA = new Date(a[0]);\r\n        const dateB = new Date(b[0]);\r\n        return dateA - dateB;\r\n    });\r\n\r\n    const sortedObj = Object.fromEntries(sortedArray);\r\n    const dates = Object.entries(sortedObj).map(([key, _]) => key);\r\n    const pl = Object.entries(sortedObj).map(([_, value]) => value);\r\n\r\n    return [dates, pl]\r\n}\r\n\r\nconst initWellList = (wells) => {\r\n    let ulWellList = document.getElementById(\"well-list\");\r\n    for (let i = 0; i < wells.length; i++) {\r\n        let li = document.createElement(\"li\");\r\n        li.classList.add(\"nav-item\", \"active\");\r\n        li.style.cursor = \"pointer\";\r\n\r\n        let a = document.createElement(\"a\");\r\n        a.classList.add(\"nav-link\");\r\n\r\n        let span = document.createElement(\"span\");\r\n        span.classList.add(\"menu-title\");\r\n        span.textContent = wells[i];\r\n\r\n        a.appendChild(span);\r\n        li.appendChild(a);\r\n\r\n        li.onclick = function () {\r\n            displayWell(this.textContent);\r\n            displayProd(this.textContent);\r\n        };\r\n\r\n        ulWellList.appendChild(li);\r\n    }\r\n}\r\n\r\nconst displayWell = (selected) => {\r\n    let data = localStorage.getItem('pl_data_wells');\r\n    data = JSON.parse(data);\r\n    if (selected == \"All Wells\") {\r\n        data = localStorage.getItem(uid)\r\n        parseData(JSON.parse(data));\r\n        return;\r\n    }\r\n    let well_payout = Object.entries(_data__WEBPACK_IMPORTED_MODULE_4__.payout).filter(\r\n        val => val[1][\"Well Name\"].replace(\"#\",\"\").toLowerCase() == selected.toLowerCase()\r\n    );\r\n    if (well_payout.length == 0) {\r\n        plotRev([],[],`No economic data for ${selected}`);\r\n        document.getElementById('selected-well').textContent = selected;\r\n        document.getElementById('payout').textContent = `no data`;\r\n        document.getElementById('sum-pl').textContent = `no data`;\r\n        return;\r\n    };\r\n    well_payout = well_payout[0][1][\"% Payout\"]\r\n    data = data[selected.toLowerCase()];\r\n    let returns = {};\r\n\r\n    for (let idx in data) {\r\n        const mo = data[idx][\"Date\"];\r\n        returns[mo] = data[idx][\"Recent Mnth Return\"];\r\n    }\r\n\r\n    const dates_pl = format(returns);\r\n    plotRev(dates_pl[0], dates_pl[1]);\r\n\r\n    document.getElementById('selected-well').textContent = selected;\r\n    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin, curr) => runnin + curr).toFixed(2)}`\r\n    document.getElementById('payout-title').textContent = \"% Payout\";\r\n    document.getElementById('payout').textContent = `${(well_payout * 100).toFixed(0)}%`;\r\n}\r\n\r\nconst parseProd = () => {\r\n    debugger;\r\n    let shares = JSON.parse(localStorage.shares);\r\n    let wells = Object.keys(shares);\r\n    let selected_data = _data__WEBPACK_IMPORTED_MODULE_4__.moDataST.map(el => {\r\n        let well = el[0].replace(\"#\",\"\").toLowerCase();\r\n        if (wells.includes(well)){\r\n            let share = shares[well]\r\n            return [well,el[1]*share,el[2]*share,el[3]*share,el[6]];\r\n        }\r\n    }).filter(el => el !== undefined);\r\n    localStorage.setItem(\"userProd\",JSON.stringify(selected_data));\r\n}\r\n\r\nconst displayProd = (selected) => {\r\n    let data = JSON.parse(localStorage.userProd);//[[well,oil,gas,water,date],...]\r\n    console.log('data :>> ', data);\r\n    console.log('selected :>> ', selected);\r\n    if (selected !== \"All Wells\") data = data.filter(el => el[0] == selected.toLowerCase());\r\n    console.log('data :>> ', data);\r\n    const oil = data.map(el => el[1]);\r\n    const gas = data.map(el => el[2]);\r\n    const date = data.map(el => el[4]);\r\n    console.log('oil :>> ', oil);\r\n    console.log('date :>> ', date);\r\n\r\n    const traceOil = (0,_layout__WEBPACK_IMPORTED_MODULE_5__.makeTrace)(date,oil,\"Oil [Bbls]\",\"lines+markers\",\"green\",null)\r\n    const traceGas = (0,_layout__WEBPACK_IMPORTED_MODULE_5__.makeTrace)(date,gas,\"Gas [Cf]\",\"lines+markers\",\"red\",null)\r\n    const layout = (0,_layout__WEBPACK_IMPORTED_MODULE_5__.makeLayout)(\"Oil & Gas Production\");\r\n    Plotly.newPlot(\"prodCurve\", [traceOil,traceGas],layout);\r\n}\r\n//\\\\\r\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)()\r\nconst uid = localStorage.getItem('uid');\r\nconsole.log('uid :>> ', uid);\r\n\r\ndocument.getElementById(\"btnLogout\").addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_2__.logout);\r\n\r\nfetchData();\r\n\r\n(0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(\"#wellSelect\").on(\"change\", () => {\r\n    let selected = (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(\"#wellSelect\").node().value;\r\n    displayWell(selected);\r\n});\r\n\r\n//search\r\nconst searchInput = document.getElementById('searchInput');\r\nconst wellList = document.getElementById('well-list').getElementsByTagName('li');\r\n\r\nsearchInput.addEventListener('input', function () {\r\n    const searchTerm = searchInput.value.toLowerCase();\r\n\r\n    for (let i = 0; i < wellList.length; i++) {\r\n        const wellName = wellList[i].getElementsByTagName('span')[0].textContent.toLowerCase();\r\n\r\n        if (wellName.includes(searchTerm)) {\r\n            wellList[i].style.display = 'block';\r\n        } else {\r\n            wellList[i].style.display = 'none';\r\n        }\r\n    }\r\n});\r\n\r\n\r\ndocument.getElementById(\"init_scale\").addEventListener('click', () => {\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_6__.toggleInitScale)();\r\n})\r\n\r\ndocument.getElementById(\"init_time\").addEventListener('click', () => {\r\n    ;(0,_ui__WEBPACK_IMPORTED_MODULE_6__.toggleInitTime)();\r\n})\r\n\r\ndocument.getElementById(\"show_pwd_form_btn\").addEventListener('click', () => {\r\n    document.getElementById('change_pwd_form').style.display = \"block\";\r\n})\r\n\r\ndocument.getElementById(\"close_pwd_form\").addEventListener('click', () => {\r\n    document.getElementById('change_pwd_form').style.display = \"none\";\r\n})\r\n\r\ndocument.getElementById(\"change_pwd_btn\").addEventListener('click', (e) => {\r\n    let pwd = document.getElementById(\"new_pwd\").value;\r\n    let pwd_rpt = document.getElementById(\"new_pwd_rpt\").value;\r\n    if (pwd !== pwd_rpt) {\r\n        e.preventDefault();\r\n        document.getElementById('pwd_msg').textContent = \"Passwords do not match\";\r\n        document.getElementById('change_pwd_form').style.display = \"block\";\r\n        return;\r\n    }\r\n    (0,_index__WEBPACK_IMPORTED_MODULE_2__.changePwd)(pwd, pwd_rpt);\r\n})\r\n\r\nwindow.onload = function () {\r\n    const currTime = localStorage.getItem('initTime');\r\n    let time = \"30 Days\";\r\n    if (currTime == 0) time = \"Inception\";\r\n\r\n    document.getElementById(\"init_scale\").textContent = localStorage.getItem('initScale');\r\n    document.getElementById(\"init_time\").textContent = time;\r\n}();\r\n\r\nconsole.log('wdiv :>> ', document.getElementById(\"plotDiv\").clientWidth);\r\nconsole.log('wgraph :>> ', document.getElementById(\"returnsCurve\").clientWidth);\r\n//let pl_str = localStorage.getItem('pl');\r\n//let dates_str = localStorage.getItem('dates');\r\n//if (pl_str & dates_str){\r\n//    dates_str = dates_str.split(',');\r\n//    pl_str = pl_str.split(',');\r\n//    pl_str = pl_str.map(el => parseFloat(el));\r\n//    plotRev(pl_str,dates_str);\r\n//} else {\r\n//    fetchData();\r\n//}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBUztBQUNiLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2QtMS8uL3NyYy9qcy9wcm9maWxlLmpzP2IwZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9uaXRvclJlZ2lvbiB9IGZyb20gJy4vcmVnaW9uJ1xyXG5pbXBvcnQgeyBsb2dvdXQsIG1vbml0b3JBdXRoU3RhdGUsIGNoYW5nZVB3ZCB9IGZyb20gJy4vaW5kZXgnXHJcbmltcG9ydCB7IHJlZiwgZ2V0RGF0YWJhc2UsIG9uVmFsdWUgfSBmcm9tICdmaXJlYmFzZS9kYXRhYmFzZSc7XHJcbmltcG9ydCB7IGxlZ2FjeUVjb24sIHBheW91dCwgbW9EYXRhU1QgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgeyBtYWtlVHJhY2UsIG1ha2VMYXlvdXQsIGNvbmZpZyB9IGZyb20gJy4vbGF5b3V0JztcclxuaW1wb3J0IHsgdG9nZ2xlSW5pdFNjYWxlLCB0b2dnbGVJbml0VGltZSB9IGZyb20gJy4vdWknO1xyXG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tICdkMyc7XHJcblxyXG5tb25pdG9yQXV0aFN0YXRlKCk7XHJcbm1vbml0b3JSZWdpb24oKTtcclxuXHJcbmNvbnN0IGZldGNoRGF0YSA9ICgpID0+IHtcclxuICAgIGxldCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odWlkKTsvL2NhY2hlXHJcbiAgICBpZiAoZGF0YSAhPT0gbnVsbCAmJiBkYXRhICE9PSBcIm51bGxcIikge1xyXG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgIHBhcnNlRGF0YShkYXRhKTtcclxuXHJcbiAgICB9IGVsc2Ugey8vZ2V0IGZyb20gZmJcclxuICAgICAgICBjb25zdCBkZWNrUmVmID0gcmVmKGRiLCAndXNlcnMvJyArIHVpZCArICcvZGVjaycpO1xyXG5cclxuICAgICAgICBvblZhbHVlKGRlY2tSZWYsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gc25hcHNob3QudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh1aWQsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEpIHBhcnNlRGF0YShkYXRhKTtcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5jb25zdCBwb3B1bGF0ZURyb3BEb3duID0gKHdlbGxzKSA9PiB7XHJcbiAgICBsZXQgbWVudSA9IHNlbGVjdChcIiN3ZWxsU2VsZWN0XCIpO1xyXG4gICAgXHJcbiAgICB3ZWxscy5mb3JFYWNoKHdlbGwgPT4ge1xyXG4gICAgICAgIG1lbnUuYXBwZW5kKFwib3B0aW9uXCIpXHJcbiAgICAgICAgICAgIC50ZXh0KHdlbGwpXHJcbiAgICAgICAgICAgIC5wcm9wZXJ0eShcIlZhbHVlXCIsIHdlbGwpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHBhcnNlRGF0YSA9IChkKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge31cclxuICAgIE9iamVjdC5rZXlzKGQpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgIGRhdGFba2V5LnRvTG93ZXJDYXNlKCldID0gZFtrZXldO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgcmVzX3dlbGxzID0ge307XHJcbiAgICBsZXQgcmV0dXJucyA9IHt9O1xyXG4gICAgY29uc3Qgd2VsbHMgPSBPYmplY3Qua2V5cyhkYXRhKS5tYXAod2VsbCA9PiB3ZWxsLnRvTG93ZXJDYXNlKCkpO1xyXG5cclxuICAgIGxldCB3ZWxsX2xpc3QgPSBPYmplY3Qua2V5cyhkKTtcclxuICAgIHdlbGxfbGlzdC5zb3J0KChhLCBiKSA9PiBhLmxvY2FsZUNvbXBhcmUoYiwgdW5kZWZpbmVkLCB7IHNlbnNpdGl2aXR5OiAnYmFzZScgfSkpO1xyXG4gICAgd2VsbF9saXN0LnVuc2hpZnQoXCJBbGwgV2VsbHNcIik7XHJcbiAgICBpbml0V2VsbExpc3Qod2VsbF9saXN0KTtcclxuICAgIHBvcHVsYXRlRHJvcERvd24od2VsbF9saXN0KTtcclxuXHJcbiAgICBmb3IgKGxldCBbXywgbW50aERpY3RdIG9mIE9iamVjdC5lbnRyaWVzKGxlZ2FjeUVjb24pKSB7XHJcbiAgICAgICAgbGV0IHJlY01udGhSZXR1cm4gPSAwO1xyXG4gICAgICAgIGxldCBkYXRlO1xyXG4gICAgICAgIGZvciAobGV0IFtfLCB3ZWxsRGljdF0gb2YgT2JqZWN0LmVudHJpZXMobW50aERpY3QpKSB7XHJcbiAgICAgICAgICAgIGxldCB3ZWxsID0gd2VsbERpY3RbXCJXZWxsIE5hbWVcIl1cclxuICAgICAgICAgICAgd2VsbCA9IHdlbGwucmVwbGFjZSgnIycsICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBkYXRlID0gd2VsbERpY3RbXCJEYXRlXCJdO1xyXG4gICAgICAgICAgICBpZiAod2VsbHMuaW5jbHVkZXMod2VsbCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXJlID0gKGRhdGFbd2VsbF1bXCJPUlJJXCJdICsgZGF0YVt3ZWxsXVtcIldJTlJJXCJdKTtcclxuICAgICAgICAgICAgICAgIGxldCB3ZWxsTW50aFJldHVybiA9IHNoYXJlICogd2VsbERpY3RbXCJSZWNlbnQgTW9udGggUCZMXCJdO1xyXG4gICAgICAgICAgICAgICAgcmVjTW50aFJldHVybiArPSB3ZWxsTW50aFJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICghKHdlbGwgaW4gcmVzX3dlbGxzKSkgcmVzX3dlbGxzW3dlbGxdID0gW107XHJcbiAgICAgICAgICAgICAgICByZXNfd2VsbHNbd2VsbF0ucHVzaCh7IFwiV2VsbFwiOiB3ZWxsLCBcIkRhdGVcIjogZGF0ZSwgXCJSZWNlbnQgTW50aCBSZXR1cm5cIjogd2VsbE1udGhSZXR1cm4sIFwiU2hhcmVcIjogc2hhcmUgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm5zW2RhdGVdID0gcmVjTW50aFJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGVzX3BsID0gZm9ybWF0KHJldHVybnMpO1xyXG4gICAgcGxvdFJldihkYXRlc19wbFswXSwgZGF0ZXNfcGxbMV0pO1xyXG5cclxuICAgIC8vbWVhbiBwYXlvdXRcclxuICAgIGNvbnN0IHBheW91dHNfbnVtID0gT2JqZWN0LmVudHJpZXMocGF5b3V0KS5tYXAoXHJcbiAgICAgICAgKFtfLCB2YWx1ZV0pID0+IHdlbGxzLmluY2x1ZGVzKHZhbHVlW1wiV2VsbCBOYW1lXCJdLnJlcGxhY2UoXCIjXCIsIFwiXCIpLnRvTG93ZXJDYXNlKCkpID8gdmFsdWVbXCIlIFBheW91dFwiXSA6IG51bGwpLmZpbHRlcihcclxuICAgICAgICAgICAgZWwgPT4gZWwgIT09IG51bGwpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGVkLXdlbGwnKS50ZXh0Q29udGVudCA9IFwiQWxsIFdlbGxzXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VtLXBsJykudGV4dENvbnRlbnQgPSBgJCR7ZGF0ZXNfcGxbMV0ucmVkdWNlKChydW5uaW4sIGN1cnIpID0+IHJ1bm5pbiArIGN1cnIpLnRvRml4ZWQoMil9YDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXlvdXQtdGl0bGUnKS50ZXh0Q29udGVudCA9IFwiJSBNZWFuIFBheW91dFwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW91dCcpLnRleHRDb250ZW50ID0gYCR7KHBheW91dHNfbnVtLnJlZHVjZSgocnVubmluLCBjdXJyKSA9PiBydW5uaW4gKyBjdXJyKSAqIDEwMCAvIHBheW91dHNfbnVtLmxlbmd0aCkudG9GaXhlZCgwKX0lYDtcclxuXHJcbiAgICAvL3N0b3JlIGRhdGFcclxuICAgIGxldCBzaGFyZXMgPSB7fVxyXG4gICAgZm9yIChsZXQgW3dlbGwsIHdlbGxPYmpdIG9mIE9iamVjdC5lbnRyaWVzKHJlc193ZWxscykpIHtcclxuICAgICAgICBsZXQgc2hhcmUgPSB3ZWxsT2JqWzBdLlNoYXJlO1xyXG4gICAgICAgIHNoYXJlc1t3ZWxsXSA9IHNoYXJlXHJcbiAgICB9XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2hhcmVzJywgSlNPTi5zdHJpbmdpZnkoc2hhcmVzKSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxfZGF0YV93ZWxscycsIEpTT04uc3RyaW5naWZ5KHJlc193ZWxscykpO1xyXG4gICAgY29uc29sZS5sb2coJ3Jlc193ZWxscyA6Pj4gJywgcmVzX3dlbGxzKTtcclxuXHJcbiAgICBsZXQgdXNlclByb2QgPSBsb2NhbFN0b3JhZ2UudXNlclByb2Q7XHJcbiAgICBpZiAodXNlclByb2QgPT0gbnVsbCkgcGFyc2VQcm9kKCk7XHJcbiAgICBkaXNwbGF5UHJvZChcIkFsbCBXZWxsc1wiKTtcclxufVxyXG5cclxuY29uc3QgcGxvdFJldiA9ICh4LCB5LCB0aXRsZT1cIlAmTCAoU1Qgb25seSlcIikgPT4ge1xyXG4gICAgY29uc3QgdHJhY2UgPSBtYWtlVHJhY2UoeCwgeSwgJ1AmTCcsIFwibGluZXMrbWFya2Vyc1wiLCAnYmxhY2snLG51bGwpO1xyXG4gICAgY29uc3QgbGF5b3V0ID0gbWFrZUxheW91dCh0aXRsZSlcclxuICAgIFBsb3RseS5uZXdQbG90KFwicmV0dXJuc0N1cnZlXCIsIFt0cmFjZV0sIGxheW91dCwgY29uZmlnKTtcclxufVxyXG5cclxuY29uc3QgZm9ybWF0ID0gKG9iaikgPT4ge1xyXG4gICAgY29uc3Qgc29ydGVkQXJyYXkgPSBPYmplY3QuZW50cmllcyhvYmopLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGFbMF0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYlswXSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGVBIC0gZGF0ZUI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzb3J0ZWRPYmogPSBPYmplY3QuZnJvbUVudHJpZXMoc29ydGVkQXJyYXkpO1xyXG4gICAgY29uc3QgZGF0ZXMgPSBPYmplY3QuZW50cmllcyhzb3J0ZWRPYmopLm1hcCgoW2tleSwgX10pID0+IGtleSk7XHJcbiAgICBjb25zdCBwbCA9IE9iamVjdC5lbnRyaWVzKHNvcnRlZE9iaikubWFwKChbXywgdmFsdWVdKSA9PiB2YWx1ZSk7XHJcblxyXG4gICAgcmV0dXJuIFtkYXRlcywgcGxdXHJcbn1cclxuXHJcbmNvbnN0IGluaXRXZWxsTGlzdCA9ICh3ZWxscykgPT4ge1xyXG4gICAgbGV0IHVsV2VsbExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlbGwtbGlzdFwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2VsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIsIFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGxpLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG5cclxuICAgICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGEuY2xhc3NMaXN0LmFkZChcIm5hdi1saW5rXCIpO1xyXG5cclxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcIm1lbnUtdGl0bGVcIik7XHJcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHdlbGxzW2ldO1xyXG5cclxuICAgICAgICBhLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xyXG5cclxuICAgICAgICBsaS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBkaXNwbGF5V2VsbCh0aGlzLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgZGlzcGxheVByb2QodGhpcy50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdWxXZWxsTGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlXZWxsID0gKHNlbGVjdGVkKSA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwbF9kYXRhX3dlbGxzJyk7XHJcbiAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIGlmIChzZWxlY3RlZCA9PSBcIkFsbCBXZWxsc1wiKSB7XHJcbiAgICAgICAgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHVpZClcclxuICAgICAgICBwYXJzZURhdGEoSlNPTi5wYXJzZShkYXRhKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHdlbGxfcGF5b3V0ID0gT2JqZWN0LmVudHJpZXMocGF5b3V0KS5maWx0ZXIoXHJcbiAgICAgICAgdmFsID0+IHZhbFsxXVtcIldlbGwgTmFtZVwiXS5yZXBsYWNlKFwiI1wiLFwiXCIpLnRvTG93ZXJDYXNlKCkgPT0gc2VsZWN0ZWQudG9Mb3dlckNhc2UoKVxyXG4gICAgKTtcclxuICAgIGlmICh3ZWxsX3BheW91dC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHBsb3RSZXYoW10sW10sYE5vIGVjb25vbWljIGRhdGEgZm9yICR7c2VsZWN0ZWR9YCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGVkLXdlbGwnKS50ZXh0Q29udGVudCA9IHNlbGVjdGVkO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXlvdXQnKS50ZXh0Q29udGVudCA9IGBubyBkYXRhYDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VtLXBsJykudGV4dENvbnRlbnQgPSBgbm8gZGF0YWA7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICAgIHdlbGxfcGF5b3V0ID0gd2VsbF9wYXlvdXRbMF1bMV1bXCIlIFBheW91dFwiXVxyXG4gICAgZGF0YSA9IGRhdGFbc2VsZWN0ZWQudG9Mb3dlckNhc2UoKV07XHJcbiAgICBsZXQgcmV0dXJucyA9IHt9O1xyXG5cclxuICAgIGZvciAobGV0IGlkeCBpbiBkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgbW8gPSBkYXRhW2lkeF1bXCJEYXRlXCJdO1xyXG4gICAgICAgIHJldHVybnNbbW9dID0gZGF0YVtpZHhdW1wiUmVjZW50IE1udGggUmV0dXJuXCJdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGVzX3BsID0gZm9ybWF0KHJldHVybnMpO1xyXG4gICAgcGxvdFJldihkYXRlc19wbFswXSwgZGF0ZXNfcGxbMV0pO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZC13ZWxsJykudGV4dENvbnRlbnQgPSBzZWxlY3RlZDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW0tcGwnKS50ZXh0Q29udGVudCA9IGAkJHtkYXRlc19wbFsxXS5yZWR1Y2UoKHJ1bm5pbiwgY3VycikgPT4gcnVubmluICsgY3VycikudG9GaXhlZCgyKX1gXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5b3V0LXRpdGxlJykudGV4dENvbnRlbnQgPSBcIiUgUGF5b3V0XCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5b3V0JykudGV4dENvbnRlbnQgPSBgJHsod2VsbF9wYXlvdXQgKiAxMDApLnRvRml4ZWQoMCl9JWA7XHJcbn1cclxuXHJcbmNvbnN0IHBhcnNlUHJvZCA9ICgpID0+IHtcclxuICAgIGRlYnVnZ2VyO1xyXG4gICAgbGV0IHNoYXJlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNoYXJlcyk7XHJcbiAgICBsZXQgd2VsbHMgPSBPYmplY3Qua2V5cyhzaGFyZXMpO1xyXG4gICAgbGV0IHNlbGVjdGVkX2RhdGEgPSBtb0RhdGFTVC5tYXAoZWwgPT4ge1xyXG4gICAgICAgIGxldCB3ZWxsID0gZWxbMF0ucmVwbGFjZShcIiNcIixcIlwiKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmICh3ZWxscy5pbmNsdWRlcyh3ZWxsKSl7XHJcbiAgICAgICAgICAgIGxldCBzaGFyZSA9IHNoYXJlc1t3ZWxsXVxyXG4gICAgICAgICAgICByZXR1cm4gW3dlbGwsZWxbMV0qc2hhcmUsZWxbMl0qc2hhcmUsZWxbM10qc2hhcmUsZWxbNl1dO1xyXG4gICAgICAgIH1cclxuICAgIH0pLmZpbHRlcihlbCA9PiBlbCAhPT0gdW5kZWZpbmVkKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclByb2RcIixKU09OLnN0cmluZ2lmeShzZWxlY3RlZF9kYXRhKSk7XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlQcm9kID0gKHNlbGVjdGVkKSA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnVzZXJQcm9kKTsvL1tbd2VsbCxvaWwsZ2FzLHdhdGVyLGRhdGVdLC4uLl1cclxuICAgIGNvbnNvbGUubG9nKCdkYXRhIDo+PiAnLCBkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCA6Pj4gJywgc2VsZWN0ZWQpO1xyXG4gICAgaWYgKHNlbGVjdGVkICE9PSBcIkFsbCBXZWxsc1wiKSBkYXRhID0gZGF0YS5maWx0ZXIoZWwgPT4gZWxbMF0gPT0gc2VsZWN0ZWQudG9Mb3dlckNhc2UoKSk7XHJcbiAgICBjb25zb2xlLmxvZygnZGF0YSA6Pj4gJywgZGF0YSk7XHJcbiAgICBjb25zdCBvaWwgPSBkYXRhLm1hcChlbCA9PiBlbFsxXSk7XHJcbiAgICBjb25zdCBnYXMgPSBkYXRhLm1hcChlbCA9PiBlbFsyXSk7XHJcbiAgICBjb25zdCBkYXRlID0gZGF0YS5tYXAoZWwgPT4gZWxbNF0pO1xyXG4gICAgY29uc29sZS5sb2coJ29pbCA6Pj4gJywgb2lsKTtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRlIDo+PiAnLCBkYXRlKTtcclxuXHJcbiAgICBjb25zdCB0cmFjZU9pbCA9IG1ha2VUcmFjZShkYXRlLG9pbCxcIk9pbCBbQmJsc11cIixcImxpbmVzK21hcmtlcnNcIixcImdyZWVuXCIsbnVsbClcclxuICAgIGNvbnN0IHRyYWNlR2FzID0gbWFrZVRyYWNlKGRhdGUsZ2FzLFwiR2FzIFtDZl1cIixcImxpbmVzK21hcmtlcnNcIixcInJlZFwiLG51bGwpXHJcbiAgICBjb25zdCBsYXlvdXQgPSBtYWtlTGF5b3V0KFwiT2lsICYgR2FzIFByb2R1Y3Rpb25cIik7XHJcbiAgICBQbG90bHkubmV3UGxvdChcInByb2RDdXJ2ZVwiLCBbdHJhY2VPaWwsdHJhY2VHYXNdLGxheW91dCk7XHJcbn1cclxuLy9cXFxcXHJcbmNvbnN0IGRiID0gZ2V0RGF0YWJhc2UoKVxyXG5jb25zdCB1aWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndWlkJyk7XHJcbmNvbnNvbGUubG9nKCd1aWQgOj4+ICcsIHVpZCk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bkxvZ291dFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ291dCk7XHJcblxyXG5mZXRjaERhdGEoKTtcclxuXHJcbnNlbGVjdChcIiN3ZWxsU2VsZWN0XCIpLm9uKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgIGxldCBzZWxlY3RlZCA9IHNlbGVjdChcIiN3ZWxsU2VsZWN0XCIpLm5vZGUoKS52YWx1ZTtcclxuICAgIGRpc3BsYXlXZWxsKHNlbGVjdGVkKTtcclxufSk7XHJcblxyXG4vL3NlYXJjaFxyXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hJbnB1dCcpO1xyXG5jb25zdCB3ZWxsTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxsLWxpc3QnKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKTtcclxuXHJcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoVGVybSA9IHNlYXJjaElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWxsTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHdlbGxOYW1lID0gd2VsbExpc3RbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NwYW4nKVswXS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAod2VsbE5hbWUuaW5jbHVkZXMoc2VhcmNoVGVybSkpIHtcclxuICAgICAgICAgICAgd2VsbExpc3RbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2VsbExpc3RbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5pdF9zY2FsZVwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRvZ2dsZUluaXRTY2FsZSgpO1xyXG59KVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbml0X3RpbWVcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB0b2dnbGVJbml0VGltZSgpO1xyXG59KVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93X3B3ZF9mb3JtX2J0blwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2VfcHdkX2Zvcm0nKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59KVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZV9wd2RfZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2VfcHdkX2Zvcm0nKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn0pXHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYW5nZV9wd2RfYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGxldCBwd2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld19wd2RcIikudmFsdWU7XHJcbiAgICBsZXQgcHdkX3JwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3B3ZF9ycHRcIikudmFsdWU7XHJcbiAgICBpZiAocHdkICE9PSBwd2RfcnB0KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwd2RfbXNnJykudGV4dENvbnRlbnQgPSBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmdlX3B3ZF9mb3JtJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VQd2QocHdkLCBwd2RfcnB0KTtcclxufSlcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjdXJyVGltZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbml0VGltZScpO1xyXG4gICAgbGV0IHRpbWUgPSBcIjMwIERheXNcIjtcclxuICAgIGlmIChjdXJyVGltZSA9PSAwKSB0aW1lID0gXCJJbmNlcHRpb25cIjtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRfc2NhbGVcIikudGV4dENvbnRlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5pdFNjYWxlJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRfdGltZVwiKS50ZXh0Q29udGVudCA9IHRpbWU7XHJcbn0oKTtcclxuXHJcbmNvbnNvbGUubG9nKCd3ZGl2IDo+PiAnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsb3REaXZcIikuY2xpZW50V2lkdGgpO1xyXG5jb25zb2xlLmxvZygnd2dyYXBoIDo+PiAnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJldHVybnNDdXJ2ZVwiKS5jbGllbnRXaWR0aCk7XHJcbi8vbGV0IHBsX3N0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwbCcpO1xyXG4vL2xldCBkYXRlc19zdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0ZXMnKTtcclxuLy9pZiAocGxfc3RyICYgZGF0ZXNfc3RyKXtcclxuLy8gICAgZGF0ZXNfc3RyID0gZGF0ZXNfc3RyLnNwbGl0KCcsJyk7XHJcbi8vICAgIHBsX3N0ciA9IHBsX3N0ci5zcGxpdCgnLCcpO1xyXG4vLyAgICBwbF9zdHIgPSBwbF9zdHIubWFwKGVsID0+IHBhcnNlRmxvYXQoZWwpKTtcclxuLy8gICAgcGxvdFJldihwbF9zdHIsZGF0ZXNfc3RyKTtcclxuLy99IGVsc2Uge1xyXG4vLyAgICBmZXRjaERhdGEoKTtcclxuLy99Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/profile.js\n");

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