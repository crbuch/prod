/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/auth.js":
/*!************************!*\
  !*** ./src/js/auth.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   loginFb: () => (/* binding */ loginFb),\n/* harmony export */   logoutFb: () => (/* binding */ logoutFb),\n/* harmony export */   onAuthStateChangedFb: () => (/* binding */ onAuthStateChangedFb),\n/* harmony export */   updatePasswordFb: () => (/* binding */ updatePasswordFb)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\r\n\r\n\r\nconst firebaseConfig = {\r\n    apiKey: \"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU\",\r\n    authDomain: \"cmlproduction-1e86a.firebaseapp.com\",\r\n    projectId: \"cmlproduction-1e86a\",\r\n    storageBucket: \"cmlproduction-1e86a.appspot.com\",\r\n    messagingSenderId: \"924402330611\",\r\n    appId: \"1:924402330611:web:55155c0a5c5c6a7d4b8086\"\r\n};\r\n  \r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\n\r\n\r\nconst onAuthStateChangedFb = () => {\r\n    auth.onAuthStateChanged((user) => {\r\n        if (user) {\r\n            console.log('user mon :>> ', user);\r\n            const currPage = window.location.pathname.split(\"/\").pop();\r\n            if (currPage == 'index.html'){\r\n                window.location.href = './profile.html';\r\n            }\r\n        } else {\r\n            const currPage = window.location.pathname.split(\"/\").pop();\r\n            console.log('currPage :>> ', currPage);\r\n            if (currPage != 'index.html'){\r\n                window.location.replace('index.html');\r\n                const currentState = window.history.state;\r\n                window.history.replaceState(currentState, '', window.location.href);\r\n                window.onpopstate = function () {\r\n                window.history.replaceState(currentState, '', window.location.href);\r\n                };\r\n            }\r\n        }\r\n    });\r\n};\r\n\r\nconst up = () => {\r\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updateProfile)(auth.currentUser, {\r\n        displayName: ''\r\n      }).then(() => {\r\n        console.log('userCredential.user.displayName :>> ', auth.currentUser.displayName);\r\n      }).catch((error) => {\r\n        console.log('error :>> ', error);\r\n      });\r\n};\r\n\r\nconst loginFb = (email, password) => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth,email,password)\r\n};\r\n\r\nconst logoutFb = () => {\r\n    sessionStorage.removeItem('siteSelection')\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);\r\n};\r\n\r\nconst updatePasswordFb = (newPassword) => {\r\n    const user = auth.currentUser;\r\n    if (user) {\r\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updatePassword)(user,newPassword);\r\n    }\r\n    return Promise.reject(new Error('No user is currently signed in.'));\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://prod-1/./src/js/auth.js?");

/***/ }),

/***/ "./src/js/layout.js":
/*!**************************!*\
  !*** ./src/js/layout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   layoutWbd: () => (/* binding */ layoutWbd),\n/* harmony export */   makeLayout: () => (/* binding */ makeLayout),\n/* harmony export */   makeTrace: () => (/* binding */ makeTrace)\n/* harmony export */ });\nconst makeTrace = (x, y, name, type=\"lines\", color, text, visible=true, dash) => ({\r\n    x,\r\n    y,\r\n    text,\r\n    name,\r\n    visible,\r\n    line: {\r\n        color,\r\n        dash\r\n    },\r\n    mode: type\r\n});\r\n\r\nconst makeLayout = (title, type, tickvals, ytitle, xtitle) => ({\r\n    title,\r\n    height: null,\r\n    legend: {\r\n        bgcolor: 'rgba(0, 0, 0, 0)',\r\n        font: {\r\n            color: '#000000'\r\n        },\r\n        orientation: \"h\",\r\n            y: 1.1,\r\n            xanchor: window.innerWidth > 400 ? \"center\" : \"left\",\r\n            x: .5,\r\n    },\r\n    yaxis: {\r\n        title: ytitle,\r\n        type: type || \"linear\",\r\n        rangemode: \"tozero\",\r\n        autorange: true,\r\n        tickformat: \"f\",\r\n        tickvals,\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n    xaxis: {\r\n        title: xtitle,\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n});\r\n\r\nconst config = {\r\n    modeBarButtonsToRemove: [\r\n        \"sendDataToCloud\",\r\n        \"autoScale2d\",\r\n        \"hoverClosestCartesian\",\r\n        \"hoverCompareCartesian\",\r\n        \"lasso2d\",\r\n        \"zoomIn2d\",\r\n        \"zoomOut2d\",\r\n        \"toggleSpikelines\",\r\n    ],\r\n    displaylogo: false,\r\n    responsive: true,\r\n    displayModeBar: false,\r\n    responsiveConfig: [\r\n        {\r\n        // Mobile devices with width less than or equal to 768px\r\n        breakpoint: 768,\r\n        options: {\r\n            legend: { orientation: 'h', y: -0.2 }\r\n        }\r\n        },\r\n        {\r\n        // Desktop devices with width greater than 768px\r\n        breakpoint: 0,\r\n        options: {\r\n            legend: { orientation: 'v', y: 1 }\r\n        }\r\n        }\r\n    ]\r\n};\r\n\r\nconst layoutWbd = (max,min,minTVD,maxTVD,wellName) => ({\r\n    width: 1620,\r\n    height: 700,\r\n\r\n    margin: {\r\n        l: 0,\r\n        r: 0,\r\n        b: 0,\r\n        t: 0,\r\n    },\r\n\r\n    title: {\r\n        text: \"Drilling for \" + wellName + \", Dimmit County, TX\",\r\n        y: 0.98,\r\n    },\r\n\r\n    legend: {\r\n        x: 0.8,\r\n        y: 0.8,\r\n    },\r\n    scene: {\r\n        aspectmode: \"cube\",\r\n        xaxis: {\r\n            title: \"Easting\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n        yaxis: {\r\n            title: \"Northing\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#f0f1f2\",\r\n            showbackground: true,\r\n\r\n        },\r\n        zaxis: {\r\n            title: \"TVD\",\r\n            nticks: 5,\r\n            range: [minTVD, maxTVD],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n    },\r\n    \r\n});\n\n//# sourceURL=webpack://prod-1/./src/js/layout.js?");

/***/ }),

/***/ "./src/js/profile.js":
/*!***************************!*\
  !*** ./src/js/profile.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst mnthData = await (0,d3__WEBPACK_IMPORTED_MODULE_1__.json) (\"../data\\\\ST\\\\dataMonthlyST.json\").then(d => d);\r\nconst payout = await (0,d3__WEBPACK_IMPORTED_MODULE_1__.json)(\"../data/econ/payouts.json\").then(d => d);\r\nconst plData = await (0,d3__WEBPACK_IMPORTED_MODULE_1__.json)(\"../data\\\\econ/pldata.json\").then(d => d);\r\n\r\n(0,_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChangedFb)();\r\n$(document).ready(function () {\r\n    $(\"#header\").load(\"../src/pages/header.html\", () => {\r\n      console.log('loaded header');\r\n      (0,_region__WEBPACK_IMPORTED_MODULE_3__.monitorRegion)();\r\n    });\r\n  });\r\n\r\nconst fetchData = (db) => {\r\n    let data = localStorage.shares;\r\n    if (uid != localStorage.skey){\r\n        data = null;\r\n        localStorage.shares = null;\r\n    }\r\n    \r\n    if (data !== null && data !== \"null\" && data != undefined) {\r\n        data = JSON.parse(data);\r\n        parseData(data);\r\n    } else {//get from fb\r\n        const deckRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, 'users/' + uid + '/deck');\r\n\r\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(deckRef, (snapshot) => {\r\n            const data = snapshot.val();\r\n\r\n            localStorage.setItem(\"shares\", JSON.stringify(data));\r\n            localStorage.setItem(\"skey\",uid);\r\n            if (data) parseData(data);\r\n\r\n        })\r\n    }\r\n}\r\n\r\nconst populateDropDown = (wells) => {\r\n    let menu = (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(\"#wellSelect\");\r\n    \r\n    wells.forEach(well => {\r\n        menu.append(\"option\")\r\n            .text(well)\r\n            .property(\"Value\", well);\r\n    });\r\n}\r\n\r\nconst parseData = (d) => {\r\n    const data = {}\r\n    Object.keys(d).forEach((key) => {\r\n        data[key.toLowerCase()] = d[key];\r\n    });\r\n    const wells = Object.keys(data).map(well => well.toLowerCase());\r\n    let well_list = Object.keys(d);\r\n    well_list.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));\r\n    well_list.unshift(\"All Wells\");\r\n    populateDropDown(well_list);\r\n\r\n    let returns = {};\r\n    let well_returns = {};\r\n    for (let [well, mos] of Object.entries(plData)) {\r\n        for (let [mo, pl] of Object.entries(mos)) {\r\n            if (mo == \"Well Number\" || mo == \"Well Name\") continue;\r\n            well = well.replace('#', '').toLowerCase();\r\n                if (!(mo in returns)) returns[mo] = 0;\r\n                if (wells.includes(well)){\r\n                    const share = data[well];\r\n                    let wellMnthReturn = share * pl;\r\n\r\n                    if (!(well in well_returns)) well_returns[well] = [];\r\n                    well_returns[well].push({ \"Well\": well, \"Date\": mo, \"Recent Mnth Return\": wellMnthReturn, \"Share\": share })\r\n                    returns[mo] += wellMnthReturn\r\n                }\r\n        }\r\n    }\r\n    \r\n    const dates_pl = format(returns)\r\n    plotRev(dates_pl[0], dates_pl[1]);\r\n\r\n    //mean payout\r\n    const payouts_num = Object.entries(payout).map(\r\n        ([_, value]) => wells.includes(value[\"Well Name\"].replace(\"#\", \"\").toLowerCase()) ? value[\"% Payout\"] : null).filter(\r\n            el => el !== null);\r\n    const money = formatMoney(dates_pl[1].reduce((runnin, curr) => runnin + curr).toFixed(2));\r\n\r\n    document.getElementById('selected-well').textContent = \"All Wells\";\r\n    document.getElementById('sum-pl').textContent = `$${money}`;\r\n    document.getElementById('payout-title').textContent = \"% Mean Payout\";\r\n    document.getElementById('payout').textContent = `${(payouts_num.reduce((runnin, curr) => runnin + curr) * 100 / payouts_num.length).toFixed(0)}%`;\r\n\r\n    //store data\r\n    localStorage.setItem('pl_data_wells', JSON.stringify(well_returns));\r\n\r\n    //sort well list best to worst\r\n    const sortBy = sessionStorage.sortBy;\r\n    if (sortBy == undefined || sortBy == 'pl') rankPl(well_returns);\r\n    else alpSort(well_returns);\r\n    displayProd(\"All Wells\");\r\n}\r\n\r\nconst rankPl = (obj) => {\r\n    let res = {};\r\n    for (let [well, mos] of Object.entries(obj)) {\r\n        let sum = 0;\r\n        for (let [_, mo] of Object.entries(mos)) {\r\n            let pl = mo[\"Recent Mnth Return\"];\r\n            sum += mo[\"Recent Mnth Return\"];\r\n        } \r\n        res[well] = sum;\r\n    }\r\n    const arr = Object.entries(res);\r\n    arr.sort((a, b) => b[1] - a[1]);\r\n    const sortedObj = Object.fromEntries(arr);\r\n\r\n    let rankedWells = Object.keys(sortedObj);\r\n    rankedWells.unshift(\"All Wells\");\r\n    initWellList(rankedWells);\r\n}\r\n\r\nconst format = (obj) => {\r\n    // Convert keys to Date objects for comparison\r\n    const sortedKeys = Object.keys(obj)\r\n    .sort((key1, key2) => {\r\n    const [month1, year1] = key1.split(' ');\r\n    const [month2, year2] = key2.split(' ');\r\n    const date1 = new Date(`${month1} 01 ${year1}`);\r\n    const date2 = new Date(`${month2} 01 ${year2}`);\r\n    return date1 - date2;\r\n    });\r\n\r\n    // Create a new sorted dictionary\r\n    const sortedDict = {};\r\n    sortedKeys.forEach(key => {\r\n    sortedDict[key] = obj[key];\r\n    });\r\n\r\n    const dates = Object.entries(sortedDict).map(([key, _]) => key);\r\n    const pl = Object.entries(sortedDict).map(([_, value]) => value);\r\n\r\n    return [dates,pl]\r\n}\r\n\r\nconst formatMoney = (amount) => {\r\n    var parts = amount.toString().split(\".\");\r\n    parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\");\r\n    return parts.join(\".\");\r\n}\r\n\r\nconst initWellList = (wells) => {\r\n    let ulWellList = document.getElementById(\"well-list\");\r\n    ulWellList.innerHTML = '';\r\n    for (let i = 0; i < wells.length; i++) {\r\n        let li = document.createElement(\"li\");\r\n        li.classList.add(\"nav-item\", \"active\");\r\n        li.style.cursor = \"pointer\";\r\n\r\n        let a = document.createElement(\"a\");\r\n        a.classList.add(\"nav-link\");\r\n\r\n        let span = document.createElement(\"span\");\r\n        span.classList.add(\"menu-title\");\r\n        console.log('wells[i] :>> ', wells[i]);\r\n        span.textContent = capitalizeWords(wells[i]);\r\n\r\n        a.appendChild(span);\r\n        li.appendChild(a);\r\n\r\n        li.onclick = function () {\r\n            let info = displayWell(wells[i]);\r\n            displayProd(wells[i], info[0], info[1]);\r\n        };\r\n\r\n        ulWellList.appendChild(li);\r\n    }\r\n}\r\n\r\nconst displayWell = (selected) => {\r\n    let data = localStorage.getItem('pl_data_wells');\r\n    data = JSON.parse(data);\r\n    if (selected == \"All Wells\") {\r\n        data = localStorage.getItem(\"shares\")\r\n        parseData(JSON.parse(data));\r\n        return;\r\n    }\r\n\r\n    let payoutName = selected.toLowerCase();\r\n    if (Object.keys(mapPayout).includes(selected.toLowerCase())) payoutName = mapPayout[selected.toLowerCase()];\r\n\r\n    let well_payout = Object.entries(payout).filter(\r\n        val => val[1][\"Well Name\"].replace(\"#\",\"\").toLowerCase() == payoutName\r\n    );\r\n\r\n    if (well_payout.length == 0) document.getElementById('payout').textContent = `no data`;\r\n    else well_payout = well_payout[0][1][\"% Payout\"];\r\n    \r\n    data = data[selected.toLowerCase()];\r\n    let returns = {};\r\n\r\n    for (let idx in data) {\r\n        const mo = data[idx][\"Date\"];\r\n        const moReturn = data[idx][\"Recent Mnth Return\"];\r\n        if (moReturn !== 0) returns[mo] = moReturn;\r\n    }\r\n    console.log('returns :>> ', returns);\r\n    const dates_pl = format(returns);\r\n    selected = capitalizeWords(selected);\r\n    if (data === undefined){\r\n        document.getElementById('payout').textContent = \"no data\";\r\n        document.getElementById('sum-pl').textContent = \"no data\";\r\n        document.getElementById('selected-well').textContent = selected;\r\n        plotRev(dates_pl[0], dates_pl[1],`No Economic Data for ${selected}`);\r\n        return;\r\n    }\r\n\r\n    console.log('dates_pl :>> ', dates_pl);\r\n    console.log('dates_pl[0] :>> ', dates_pl[0]);\r\n\r\n    plotRev(dates_pl[0], dates_pl[1]);\r\n    const money = formatMoney(dates_pl[1].reduce((runnin, curr) => runnin + curr).toFixed(2));\r\n    document.getElementById('selected-well').textContent = selected;\r\n    document.getElementById('sum-pl').textContent = `$${money}`;\r\n    document.getElementById('payout-title').textContent = \"% Payout\";\r\n    document.getElementById('payout').textContent = `${(well_payout * 100).toFixed(0)}%`;\r\n\r\n    const strt = dates_pl[0][0].split(\" \");\r\n    return [`20${strt[1]}-${mapMo[strt[0]]}-01`, dates_pl[0]];//info to equalize dates array \r\n}\r\n\r\nconst displayProdAll = () => {\r\n    const edge = new Date(\"2016-01-01\");\r\n    const shares = JSON.parse(localStorage.shares);\r\n    let wells = Object.keys(shares);\r\n    let prodwells = [];\r\n    for (let i = 0; i < wells.length; i++){\r\n        let well = wells[i];\r\n        if (Object.keys(mapProd).includes(well)) well = mapProd[well];\r\n        prodwells.push(well);\r\n    }\r\n    let data = mnthData.filter(sub => prodwells.includes(sub[0].replace(\"#\",\"\").toLowerCase()));\r\n    \r\n    let oil = {};\r\n    let gas = {};\r\n    data = data.map((sub) => {\r\n        let date = new Date(sub[6]);\r\n        if (date > edge ){\r\n            let well = sub[0].replace(\"#\",\"\").toLowerCase();\r\n            if (Object.keys(mapShares).includes(well)) well = mapShares[well];\r\n\r\n            if (Object.keys(shares).includes(well)){\r\n                date = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });\r\n                if (!Object.keys(oil).includes(date)) oil[date] = 0;\r\n                if (!Object.keys(gas).includes(date)) gas[date] = 0;\r\n\r\n                \r\n                oil[date] += sub[1]*shares[well];\r\n                gas[date] += sub[2]*shares[well];\r\n            }\r\n            \r\n        }\r\n    })\r\n    const date_oil = format(oil);\r\n    const date_gas = format(gas);\r\n    date_oil[0].pop();\r\n    date_oil[1].pop();\r\n    date_gas[1].pop();\r\n    const dates = date_oil[0].map(el => {\r\n        return el.substring(0, 3) + \" \" + el.substring(6,8);\r\n    });\r\n\r\n    plotProd(dates,date_oil[1],date_gas[1]);\r\n}\r\n\r\nconst displayProd = (selected, strt, plDates) => {\r\n    const selectedMaster = selected.toLowerCase();\r\n    const edge = new Date(strt);\r\n    const shares = JSON.parse(localStorage.shares);\r\n    if (Object.keys(mapProd).includes(selectedMaster)) selected = mapProd[selectedMaster];\r\n\r\n    let data = mnthData;\r\n    if (selected !== \"All Wells\") data = data.filter(el => el[0].replace(\"#\",\"\").toLowerCase() == selected.toLowerCase());\r\n    if (selected == \"All Wells\"){\r\n        displayProdAll();\r\n        return;\r\n    }\r\n    data = data.map((el) => {\r\n        let date = new Date(el[6]);\r\n        if (date > edge){\r\n            const oil = el[1]*shares[selectedMaster];\r\n            const gas = el[2]*shares[selectedMaster];\r\n            date = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });\r\n            return [oil,gas,date];\r\n        }\r\n    }).filter((sub) => sub !== undefined).map((sub) => {\r\n        return sub.filter((el) => el !== undefined);\r\n    });\r\n\r\n    let title = \"Oil & Gas Production\";\r\n    if (data.length == 0) title = \"No Production Data for this Time Period\";\r\n    let oil = data.map((sub) => sub[0]);\r\n    let gas = data.map((sub) => sub[1]);\r\n    let date = data.map((sub) => sub[2]);\r\n    oil.pop();\r\n    gas.pop();\r\n    date.pop();\r\n\r\n    if (plDates.length !== date.length) {\r\n        const diff = Math.abs(plDates.length - date.length);\r\n        for (let i = diff; i > 0; i--){\r\n            date.unshift(plDates[i-1]);\r\n        }\r\n        oil.unshift(...Array(diff).fill(0));\r\n        gas.unshift(...Array(diff).fill(0));\r\n    }\r\n\r\n    plotProd(date,oil,gas,title);\r\n}\r\n\r\nconst plotProd = (date,oil,gas,title=\"Oil & Gas Production\") => {\r\n    date = date.map(el => el.length > 6 ? el.replace(\"20\", \"\") : el);\r\n    const traceOil = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(date,oil,\"Oil [Bbls]\",\"lines+markers\",\"green\",null)\r\n    const traceGas = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(date,gas,\"Gas [Cf]\",\"lines+markers\",\"red\",null)\r\n    const layout = {\r\n        title: title,\r\n        legend: {\r\n            orientation: \"h\",\r\n            y: 1.2,\r\n        },\r\n        xaxis: {\r\n            dtick: 2 \r\n          }\r\n    };\r\n    Plotly.newPlot(\"prodCurve\", [traceOil,traceGas],layout);\r\n}\r\n\r\nconst plotRev = (x, y, title=\"P&L (ST only)\") => {\r\n    const trace = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(x, y, 'P&L', \"lines+markers\", 'black',null);\r\n    const layout = {\r\n        title:title,\r\n        yaxis: {\r\n          tickformat: '$',\r\n          \r\n        },\r\n        xaxis: {\r\n            dtick: 2,\r\n        }\r\n        \r\n      };\r\n    Plotly.newPlot(\"returnsCurve\", [trace], layout, _layout__WEBPACK_IMPORTED_MODULE_4__.config);\r\n}\r\n\r\nfunction capitalizeWords(str) {\r\n    return str.replace(/^(.)|\\s+(.)/g, function(match) {\r\n      return match.toUpperCase();\r\n    });\r\n}\r\n\r\nconst alpSort = (wells) => {\r\n    wells = Object.keys(wells).sort();\r\n    wells.unshift('All Wells');\r\n    initWellList(wells);\r\n}\r\n\r\n//\\\\\r\nconst mapPayout = {\"cr 939h\":\"cr 939\",\"bruce weaver 2\": \"bruce weaver 2 re\"};\r\nconst mapProd = {\"bruce weaver 2\": \"bruce weaver 2 re\",\"burns ranch 2 1\": \"burns ranch 2\",\"cr 939h\":\"cr 939\", \"pfeiffer 2re\": \"pfeiffer 2\"};\r\nconst mapShares = {\"bruce weaver 2 re\": \"bruce weaver 2\",\"burns ranch 2\" : \"burns ranch 2 1\",\"cr 939\" : \"cr 939h\", \"pfeiffer 2\": \"pfeiffer 2re\"};\r\nconst mapMo = {\"Jan\": \"01\",\"Feb\": \"02\",\"Mar\": \"03\",\"Apr\": \"04\",\"May\": \"05\",\"Jun\": \"06\",\"Jul\": \"07\",\"Aug\": \"08\",\"Sep\": \"09\",\"Oct\": \"10\",\"Nov\": \"11\",\"Dec\": \"12\"};\r\n  \r\nconst uid = localStorage.getItem('uid');\r\nif (uid !== 'fh05lGDE7YSVyAu9eNP4bYRR9n42' & uid !== null) {\r\n    const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();\r\n    fetchData(db);\r\n}\r\n//search\r\nconst searchInput = document.getElementById('searchInput');\r\nconst wellList = document.getElementById('well-list').getElementsByTagName('li');\r\n\r\nsearchInput.addEventListener('input', function () {\r\n    const searchTerm = searchInput.value.toLowerCase();\r\n\r\n    for (let i = 0; i < wellList.length; i++) {\r\n        const wellName = wellList[i].getElementsByTagName('span')[0].textContent.toLowerCase();\r\n\r\n        if (wellName.includes(searchTerm)) {\r\n            wellList[i].style.display = 'block';\r\n        } else {\r\n            wellList[i].style.display = 'none';\r\n        }\r\n    }\r\n});\r\n\r\ndocument.getElementById(\"btnLogout\").addEventListener('click', _auth__WEBPACK_IMPORTED_MODULE_2__.logoutFb);\r\n\r\n(0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(\"#wellSelect\").on(\"change\", () => {\r\n    let selected = (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(\"#wellSelect\").node().value;\r\n    displayWell(selected);\r\n    displayProd(selected);\r\n});\r\n\r\ndocument.getElementById(\"init_scale\").addEventListener('click', () => {\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_5__.toggleInitScale)();\r\n})\r\n\r\ndocument.getElementById(\"init_time\").addEventListener('click', () => {\r\n    ;(0,_ui__WEBPACK_IMPORTED_MODULE_5__.toggleInitTime)();\r\n})\r\n\r\ndocument.getElementById(\"show_pwd_form_btn\").addEventListener('click', () => {\r\n    sessionStorage.changePwd = \"true\";\r\n    window.location.href = \"./index.html\";\r\n})\r\n\r\nconst sortBtn  = document.getElementById('sortBy');\r\nlet sortBy = sessionStorage.sortBy;\r\nsortBtn.innerHTML = `Sorted: ${sortBy == 'pl' || sortBy == undefined ? 'P&L ' : 'Alphabetically'}`\r\n\r\nsortBtn.addEventListener('click', () => {\r\n    let wells = JSON.parse(localStorage.pl_data_wells);\r\n    let sortBy = sessionStorage.sortBy == 'alp' ? 'pl' : 'alp';\r\n    sortBtn.innerHTML = `Sort: ${sortBy == 'alp' ? 'Alphabetically ' : 'P&L'}`\r\n    sessionStorage.sortBy = sortBy;\r\n\r\n    if (sortBy == 'alp') alpSort(wells);\r\n    else rankPl(wells);\r\n\r\n})\r\n\r\nwindow.onload = function () {\r\n    const currTime = localStorage.getItem('initTime');\r\n    let time = \"30 Days\";\r\n    if (currTime == 0) time = \"Inception\";\r\n\r\n    document.getElementById(\"init_scale\").textContent = localStorage.getItem('initScale');\r\n    document.getElementById(\"init_time\").textContent = time;\r\n}();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://prod-1/./src/js/profile.js?");

/***/ }),

/***/ "./src/js/region.js":
/*!**************************!*\
  !*** ./src/js/region.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   monitorRegion: () => (/* binding */ monitorRegion)\n/* harmony export */ });\nconst monitorRegion = () => {\r\n    if(sessionStorage.regionName == null || sessionStorage.regionName == undefined){\r\n        sessionStorage.setItem('regionName','South Texas')\r\n        sessionStorage.setItem('region','ST')\r\n    }\r\n    console.log('document.getElementById(\"currField\") :>> ', document.getElementById('currField'));\r\n    document.getElementById('currField').innerText = sessionStorage.getItem('regionName')\r\n    // Click event listeners\r\n    document.querySelectorAll('.dropdown-item').forEach(item => {\r\n        item.addEventListener('click', function() {\r\n            sessionStorage.setItem('region', this.id) // set 'region' to abbreviation\r\n            document.getElementById('currField').innerText = this.innerText; // \r\n            sessionStorage.setItem('regionName', this.innerText) // set 'regionName' to real \r\n            sessionStorage.removeItem(\"siteSelection\");\r\n            location.reload();\r\n        });\r\n    });\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://prod-1/./src/js/region.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   backBtn: () => (/* binding */ backBtn),\n/* harmony export */   btnChangePwd: () => (/* binding */ btnChangePwd),\n/* harmony export */   btnLogin: () => (/* binding */ btnLogin),\n/* harmony export */   btnLogout: () => (/* binding */ btnLogout),\n/* harmony export */   checkActive: () => (/* binding */ checkActive),\n/* harmony export */   divLoginError: () => (/* binding */ divLoginError),\n/* harmony export */   divPwdError: () => (/* binding */ divPwdError),\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   formUpdate: () => (/* binding */ formUpdate),\n/* harmony export */   hideLoginError: () => (/* binding */ hideLoginError),\n/* harmony export */   hidePwdErr: () => (/* binding */ hidePwdErr),\n/* harmony export */   lblLoginErrorMessage: () => (/* binding */ lblLoginErrorMessage),\n/* harmony export */   newPwd: () => (/* binding */ newPwd),\n/* harmony export */   newPwdRpt: () => (/* binding */ newPwdRpt),\n/* harmony export */   pwdErr: () => (/* binding */ pwdErr),\n/* harmony export */   setActive: () => (/* binding */ setActive),\n/* harmony export */   setActiveTime: () => (/* binding */ setActiveTime),\n/* harmony export */   setActiveView: () => (/* binding */ setActiveView),\n/* harmony export */   showApp: () => (/* binding */ showApp),\n/* harmony export */   showLoginError: () => (/* binding */ showLoginError),\n/* harmony export */   showLoginForm: () => (/* binding */ showLoginForm),\n/* harmony export */   showPwdErr: () => (/* binding */ showPwdErr),\n/* harmony export */   toggleInitScale: () => (/* binding */ toggleInitScale),\n/* harmony export */   toggleInitTime: () => (/* binding */ toggleInitTime),\n/* harmony export */   userName: () => (/* binding */ userName),\n/* harmony export */   userPassword: () => (/* binding */ userPassword)\n/* harmony export */ });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\r\n\r\nconst userName = document.querySelector('#userEmail');\r\nconst userPassword = document.querySelector('#userPassword');\r\n\r\nconst btnChangePwd = document.querySelector('#btnChangePwd');\r\nconst newPwd = document.querySelector('#new_pwd');\r\nconst newPwdRpt = document.querySelector('#new_pwd_rpt');\r\nconst backBtn = document.querySelector('#btnBack');\r\n\r\n\r\n\r\nconst btnLogin = document.querySelector('#btnLogin');\r\nconst btnLogout = document.querySelector('#btnLogout');\r\nconst form = document.getElementById('login');\r\nconst formUpdate = document.getElementById('update-pwd');\r\n\r\n\r\nconst divLoginError = document.querySelector('#divLoginError');\r\nconst lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage');\r\n\r\nconst divPwdError = document.querySelector('#divPwdError');\r\nconst pwdErr = document.querySelector('#pwdErr');\r\n\r\nconst showLoginForm = () => {\r\n  const currPage = window.location.pathname.split(\"/\").pop();\r\n  if (currPage != 'index.html'){\r\n    window.location.href = './index.html';\r\n    \r\n  }\r\n}\r\n\r\nconst showApp = () => {\r\n  const currPage = window.location.pathname.split(\"/\").pop();\r\n  if (currPage == 'index.html'){\r\n    window.location.href = './curves.html';\r\n  }\r\n}\r\n\r\nconst hideLoginError = () => {\r\n  divLoginError.style.display = 'none'\r\n  lblLoginErrorMessage.innerHTML = ''\r\n}\r\n\r\nconst showLoginError = (error) => {\r\n  divLoginError.style.display = 'block'    \r\n  if (error.code == firebase_auth__WEBPACK_IMPORTED_MODULE_0__.AuthErrorCodes.INVALID_PASSWORD) {\r\n    lblLoginErrorMessage.innerHTML = `Wrong password`\r\n  }\r\n  else if (sessionStorage.changePwd == \"success\") {\r\n    lblLoginErrorMessage.innerHTML = error;      \r\n  }else {\r\n    lblLoginErrorMessage.innerHTML = `Error: ${error}`;      \r\n\r\n  }\r\n}\r\n\r\nconst showPwdErr = (error) => {\r\n  divPwdError.style.display = 'block'    \r\n  pwdErr.innerHTML = `Error: ${error}`      \r\n}\r\n\r\nconst hidePwdErr = () => {\r\n  divPwdError.style.display = 'none';\r\n  pwdErr.innerHTML = '';\r\n}\r\n\r\nconst setActive = (view, time) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    el.classList.remove(\"active\");\r\n  });\r\n  document.getElementById(view).className += \"active\";\r\n  document.getElementById(time).className += \"active\";\r\n};\r\n\r\nconst setActiveTime = (time) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (el.id.includes(\"Days\")) {\r\n      el.classList.remove(\"active\");\r\n    }\r\n  });\r\n  document.getElementById(time).className += \"active\";\r\n};\r\n\r\nconst setActiveView = (view) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (!el.id.includes(\"Days\")) {\r\n      el.classList.remove(\"active\");\r\n    }\r\n  });\r\n  document.getElementById(view).className += \"active\";\r\n};\r\n\r\nconst toggleInitTime = () => {\r\n  const currInit = localStorage.getItem('initTime');\r\n  if (currInit == 0) {\r\n    $('#init_time').text('30 Days')\r\n    localStorage.setItem('initTime',31)\r\n  }else {\r\n    $('#init_time').text('Inception')\r\n    localStorage.setItem('initTime',0)\r\n  };\r\n};\r\n\r\nconst toggleInitScale = () => {\r\n  const currScale = localStorage.getItem('initScale');\r\n  if (currScale == 'linear') {\r\n    $('#init_scale').text('Logarithmic')\r\n    localStorage.setItem('initScale','logarithmic')\r\n  }else {\r\n    $('#init_scale').text('Linear')\r\n    localStorage.setItem('initScale','linear')\r\n  };\r\n};\r\n\r\nconst checkActive = (element) => {\r\n  let flag = false;\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (el.id == element) flag = true;\r\n  });\r\n  return flag;\r\n};\r\n\r\nvar bMobile =   // will be true if running on a mobile device\r\n  navigator.userAgent.indexOf( \"Mobile\" ) !== -1 || \r\n  navigator.userAgent.indexOf( \"iPhone\" ) !== -1 || \r\n  navigator.userAgent.indexOf( \"Android\" ) !== -1 || \r\n  navigator.userAgent.indexOf( \"Windows Phone\" ) !== -1 ;\n\n//# sourceURL=webpack://prod-1/./src/js/ui.js?");

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
/******/ 			if(queue && queue.d < 1) {
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
/******/ 			hasAwait && ((queue = []).d = -1);
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
/******/ 			queue && queue.d < 0 && (queue.d = 0);
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_d3_src_index_js","vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-17252e","vendors-node_modules_firebase_database_dist_esm_index_esm_js"], () => (__webpack_require__("./src/js/profile.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;