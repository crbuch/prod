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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   loginFb: () => (/* binding */ loginFb),\n/* harmony export */   logoutFb: () => (/* binding */ logoutFb),\n/* harmony export */   onAuthStateChangedFb: () => (/* binding */ onAuthStateChangedFb),\n/* harmony export */   updatePasswordFb: () => (/* binding */ updatePasswordFb)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\r\n\r\n\r\nconst firebaseConfig = {\r\n    apiKey: \"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU\",\r\n    authDomain: \"cmlproduction-1e86a.firebaseapp.com\",\r\n    projectId: \"cmlproduction-1e86a\",\r\n    storageBucket: \"cmlproduction-1e86a.appspot.com\",\r\n    messagingSenderId: \"924402330611\",\r\n    appId: \"1:924402330611:web:55155c0a5c5c6a7d4b8086\"\r\n};\r\n  \r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\n\r\n\r\nconst onAuthStateChangedFb = () => {\r\n    auth.onAuthStateChanged((user) => {\r\n        if (user) {\r\n            console.log('user mon :>> ', user);\r\n            //up();\r\n        } else {\r\n            console.log(\"none\");\r\n            window.location.replace('index.html');\r\n            const currentState = window.history.state;\r\n            window.history.replaceState(currentState, '', window.location.href);\r\n            window.onpopstate = function () {\r\n            window.history.replaceState(currentState, '', window.location.href);\r\n            };\r\n        }\r\n    });\r\n};\r\n\r\nconst up = () => {\r\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updateProfile)(auth.currentUser, {\r\n        displayName: ''\r\n      }).then(() => {\r\n        console.log('userCredential.user.displayName :>> ', auth.currentUser.displayName);\r\n      }).catch((error) => {\r\n        console.log('error :>> ', error);\r\n      });\r\n};\r\n\r\nconst loginFb = (email, password) => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth,email,password)\r\n};\r\n\r\nconst logoutFb = () => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);\r\n};\r\n\r\nconst updatePasswordFb = (newPassword) => {\r\n    const user = auth.currentUser;\r\n    if (user) {\r\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updatePassword)(user,newPassword);\r\n    }\r\n    return Promise.reject(new Error('No user is currently signed in.'));\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://prod-1/./src/js/auth.js?");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   activeWells: () => (/* binding */ activeWells),\n/* harmony export */   analyzeDataET: () => (/* binding */ analyzeDataET),\n/* harmony export */   analyzeDataST: () => (/* binding */ analyzeDataST),\n/* harmony export */   buildTable: () => (/* binding */ buildTable),\n/* harmony export */   dataCumlET: () => (/* binding */ dataCumlET),\n/* harmony export */   dataCumlGC: () => (/* binding */ dataCumlGC),\n/* harmony export */   dataCumlNM: () => (/* binding */ dataCumlNM),\n/* harmony export */   dataCumlST: () => (/* binding */ dataCumlST),\n/* harmony export */   dataCumlWT: () => (/* binding */ dataCumlWT),\n/* harmony export */   dataET: () => (/* binding */ dataET),\n/* harmony export */   dataGC: () => (/* binding */ dataGC),\n/* harmony export */   dataNM: () => (/* binding */ dataNM),\n/* harmony export */   dataST: () => (/* binding */ dataST),\n/* harmony export */   dataWT: () => (/* binding */ dataWT),\n/* harmony export */   dropdown: () => (/* binding */ dropdown),\n/* harmony export */   econ: () => (/* binding */ econ),\n/* harmony export */   filterData: () => (/* binding */ filterData),\n/* harmony export */   formations: () => (/* binding */ formations),\n/* harmony export */   legacyEcon: () => (/* binding */ legacyEcon),\n/* harmony export */   moDataET: () => (/* binding */ moDataET),\n/* harmony export */   moDataST: () => (/* binding */ moDataST),\n/* harmony export */   newProd: () => (/* binding */ newProd),\n/* harmony export */   payout: () => (/* binding */ payout),\n/* harmony export */   pl23_22: () => (/* binding */ pl23_22),\n/* harmony export */   pump: () => (/* binding */ pump),\n/* harmony export */   sortData: () => (/* binding */ sortData)\n/* harmony export */ });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\nconst dataST = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ST/prodST.json\").then((data) => {\r\n    return data\r\n});\r\nconst dataCumlST = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ST/cumlProdST.json\").then((data) => {\r\n    return data\r\n});\r\nconst analyzeDataST = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ST/analyzeST.json\").then((data) => {\r\n    return data\r\n});\r\nconst moDataST = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ST/dataMonthlyST.json\").then((data) => {\r\n    return data\r\n});\r\nconst pump = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ST/pumpInfo.json\").then((data) => {\r\n    return data\r\n});\r\nconst newProd = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.csv)(\"../data\\\\ST/recYrProd.csv\").then((data) => {\r\n    return data\r\n});\r\n\r\n\r\nconst dataET = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ET/prodET.json\").then((data) => {\r\n    return data;\r\n});\r\nconst dataCumlET = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ET/cumlProdET.json\").then((data) => {\r\n    return data\r\n});\r\nconst moDataET = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ET/dataMonthlyET.json\").then((data) => {\r\n    return data\r\n});\r\nconst analyzeDataET = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/ET/analyzeET.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst dataNM = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/NM/prodNM.json\").then((data) => {\r\n    return data;\r\n});\r\nconst dataCumlNM = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/NM/cumlProdNM.json\").then((data) => {\r\n    return data\r\n});\r\n\r\n\r\nconst dataGC = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/GC/prodGC.json\").then((data) => {\r\n    return data;\r\n});\r\nconst dataCumlGC = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/GC/cumlProdGC.json\").then((data) => {\r\n    return data\r\n});\r\n\r\n\r\nconst dataWT = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/WT/prodWT.json\").then((data) => {\r\n    return data;\r\n});\r\nconst dataCumlWT = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/WT/cumlProdWT.json\").then((data) => {\r\n    return data\r\n});\r\n\r\n\r\nconst econ = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/econ/economics.json\").then((data) => {\r\n    return data\r\n});\r\nconst payout = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/econ/payouts.json\").then((data) => {\r\n    return data\r\n});\r\nconst legacyEcon = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/econ/legacyEcon.json\").then((data) => {\r\n    return data\r\n});\r\nconst pl23_22 = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data\\\\econ/pldata.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst formations = await (0,d3__WEBPACK_IMPORTED_MODULE_0__.json)(\"../data/misc/formations.json\").then((data) => {\r\n    return data\r\n});\r\n\r\nconst activeWells = () => {\r\n    let region = sessionStorage.region\r\n    let data = dataST;\r\n    if (region == 'ET') data = dataET;\r\n    if (region == 'GC') data = dataGC;\r\n    if (region == 'WT') data = dataWT;\r\n    if (region == 'NM') data = dataNM;\r\n\r\n    const exitWell = data[0][0]\r\n    const wells = new Set();\r\n    \r\n    for (let i = 0; i < data.length; i++) {\r\n        const well = data[i][0];\r\n        if (well !== 'Cornett #1 Swd') wells.add(well);\r\n        if (well === exitWell & i !== 0) break;\r\n    };\r\n\r\n    return wells;\r\n};\r\n\r\n//Creates Dropdown//\r\nconst dropdown = (id) => {\r\n    let menu = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(id);\r\n    \r\n    activeWells().forEach(well => {\r\n        menu.append(\"option\")\r\n            .text(well)\r\n            .property(\"Value\", well);\r\n    });\r\n};\r\n\r\nconst buildTable = (allData) => {\r\n    console.log('allData')\r\n    console.log(allData)\r\n\r\n    const tbody = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"tbody\");\r\n    tbody.html(\"\");\r\n    allData.forEach((well) => {\r\n        let row = tbody.append(\"tr\");\r\n        Object.values(well).forEach((val) => {\r\n            let cell = row.append(\"td\");\r\n            cell.text(val);\r\n        });\r\n    });\r\n};\r\n\r\nconst filterData = (data, dropdownId) => {\r\n    let reqWell = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).property(\"value\");\r\n\r\n    if (reqWell) {\r\n        return data.filter((row) => row[0] == reqWell);\r\n    };\r\n    return data\r\n};\r\n\r\nconst sortData = (data, pos) => {\r\n    event.preventDefault();\r\n    let temp = [...data];\r\n    let sorted;\r\n    sorted = temp.sort((a, b) => {\r\n        const aVal = a[pos];\r\n        const bVal = b[pos];\r\n        return bVal - aVal;\r\n    });\r\n    buildTable(sorted);\r\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://prod-1/./src/js/data.js?");

/***/ }),

/***/ "./src/js/layout.js":
/*!**************************!*\
  !*** ./src/js/layout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   layoutWbd: () => (/* binding */ layoutWbd),\n/* harmony export */   makeLayout: () => (/* binding */ makeLayout),\n/* harmony export */   makeTrace: () => (/* binding */ makeTrace)\n/* harmony export */ });\nconst makeTrace = (x, y, name, type=\"lines\", color, text, visible=true, dash) => ({\r\n    x,\r\n    y,\r\n    text,\r\n    name,\r\n    visible,\r\n    line: {\r\n        color,\r\n        dash\r\n    },\r\n    mode: type\r\n});\r\n\r\nconst makeLayout = (title, type, tickvals, ytitle, xtitle) => ({\r\n    title,\r\n    height: null,\r\n    legend: {\r\n        bgcolor: 'rgba(0, 0, 0, 0)',\r\n        font: {\r\n            color: '#000000'\r\n        },\r\n        orientation: \"h\",\r\n            y: 1.1,\r\n            xanchor: window.innerWidth > 400 ? \"center\" : \"left\",\r\n            x: .5,\r\n    },\r\n    yaxis: {\r\n        title: ytitle,\r\n        type: type || \"linear\",\r\n        rangemode: \"tozero\",\r\n        autorange: true,\r\n        tickformat: \"f\",\r\n        tickvals,\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n    xaxis: {\r\n        title: xtitle,\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n});\r\n\r\nconst config = {\r\n    modeBarButtonsToRemove: [\r\n        \"sendDataToCloud\",\r\n        \"autoScale2d\",\r\n        \"hoverClosestCartesian\",\r\n        \"hoverCompareCartesian\",\r\n        \"lasso2d\",\r\n        \"zoomIn2d\",\r\n        \"zoomOut2d\",\r\n        \"toggleSpikelines\",\r\n    ],\r\n    displaylogo: false,\r\n    responsive: true,\r\n    displayModeBar: false,\r\n    responsiveConfig: [\r\n        {\r\n        // Mobile devices with width less than or equal to 768px\r\n        breakpoint: 768,\r\n        options: {\r\n            legend: { orientation: 'h', y: -0.2 }\r\n        }\r\n        },\r\n        {\r\n        // Desktop devices with width greater than 768px\r\n        breakpoint: 0,\r\n        options: {\r\n            legend: { orientation: 'v', y: 1 }\r\n        }\r\n        }\r\n    ]\r\n};\r\n\r\nconst layoutWbd = (max,min,minTVD,maxTVD,wellName) => ({\r\n    width: 1620,\r\n    height: 700,\r\n\r\n    margin: {\r\n        l: 0,\r\n        r: 0,\r\n        b: 0,\r\n        t: 0,\r\n    },\r\n\r\n    title: {\r\n        text: \"Drilling for \" + wellName + \", Dimmit County, TX\",\r\n        y: 0.98,\r\n    },\r\n\r\n    legend: {\r\n        x: 0.8,\r\n        y: 0.8,\r\n    },\r\n    scene: {\r\n        aspectmode: \"cube\",\r\n        xaxis: {\r\n            title: \"Easting\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n        yaxis: {\r\n            title: \"Northing\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#f0f1f2\",\r\n            showbackground: true,\r\n\r\n        },\r\n        zaxis: {\r\n            title: \"TVD\",\r\n            nticks: 5,\r\n            range: [minTVD, maxTVD],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n    },\r\n    \r\n});\n\n//# sourceURL=webpack://prod-1/./src/js/layout.js?");

/***/ }),

/***/ "./src/js/region.js":
/*!**************************!*\
  !*** ./src/js/region.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   monitorRegion: () => (/* binding */ monitorRegion)\n/* harmony export */ });\n$(document).ready(function () {\r\n    $(\"#header\").load(\"../src/pages/header.html\");\r\n});\r\n\r\n// When Region is clicked:\r\nfunction updateDropdownToggleText() {\r\n    sessionStorage.removeItem(\"siteSelection\"); // Remove well location\r\n    location.reload();\r\n};\r\nconst monitorRegion = () => {\r\n    if(sessionStorage.getItem('regionName')==null){\r\n        sessionStorage.setItem('regionName','South Texas')\r\n        sessionStorage.setItem('region','ST')\r\n    }\r\n\r\n    console.log(sessionStorage.getItem(\"region\"))\r\n    document.getElementById('currField').innerText = sessionStorage.getItem('regionName')\r\n    // Click event listeners\r\n    document.querySelectorAll('.dropdown-item').forEach(item => {\r\n        item.addEventListener('click', function() {\r\n            sessionStorage.setItem('region', this.id) // set 'region' to abbreviation\r\n            document.getElementById('currField').innerText = this.innerText; // \r\n            sessionStorage.setItem('regionName', this.innerText) // set 'regionName' to real \r\n            updateDropdownToggleText();\r\n        });\r\n    });\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://prod-1/./src/js/region.js?");

/***/ }),

/***/ "./src/js/table.js":
/*!*************************!*\
  !*** ./src/js/table.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data__WEBPACK_IMPORTED_MODULE_3__]);\n_data__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChangedFb)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_2__.monitorRegion)();\r\n\r\n// Check which region in, set data to region\r\nlet region = sessionStorage.getItem('region');\r\nconst dropdownId = '#siteFilter'; // Check which site\r\n\r\nlet data = _data__WEBPACK_IMPORTED_MODULE_3__[`data${region}`];\r\nlet moData = _data__WEBPACK_IMPORTED_MODULE_3__[`moData${region}`];\r\nlet tableData = _data__WEBPACK_IMPORTED_MODULE_3__[`dataCuml${region}`];\r\nlet payData = _data__WEBPACK_IMPORTED_MODULE_3__.payout;\r\n\r\n// console.log(\"tableData\")\r\n// console.log(tableData)\r\n\r\nconst formatData = () => {\r\n  if (region == \"ST\") {\r\n    payData.forEach((pay) => {\r\n      tableData.forEach((well) => {\r\n        if (well[0] == pay[\"Well Name\"]) {\r\n          let rounded = Math.round(pay[\"% Payout\"]*100)\r\n          well.push(rounded)\r\n        }\r\n      })\r\n    })\r\n    tableData.forEach(well => {\r\n      well.push(_data__WEBPACK_IMPORTED_MODULE_3__.formations[well[0]])\r\n    })\r\n  }\r\n\r\n  else {\r\n    tableData.forEach(well => {\r\n      well.push('')\r\n      well.push(_data__WEBPACK_IMPORTED_MODULE_3__.formations[well[0]])\r\n    });\r\n  }\r\n  \r\n  //remove archived wells\r\n  return tableData.filter(val => _data__WEBPACK_IMPORTED_MODULE_3__.activeWells().has(val[0]));\r\n};\r\n\r\nconst displayPlot = (selected) => {  \r\n  // Read Files, select wells with selected name\r\n  let dataMonthly = moData.filter(el => el[0] == selected);\r\n  let dataDaily = data.filter(el => el[0] == selected);\r\n\r\n  const oilMo = dataMonthly.map(el => el[1]);\r\n  var dateMo = dataMonthly.map(el => el[6]);\r\n  const dateDa = dataDaily.map(el => el[1]).reverse();\r\n  const oilDaily = dataDaily.map(el => el[2]).reverse();\r\n  const cumlMoOil = oilMo.reduce((acc, val, idx) => (idx === 0 ? acc.concat(val) : acc.concat(val + acc[idx - 1])), []);\r\n  const cumlDaOil = oilDaily.reduce((acc, val, idx) => (idx === 0 ? acc.concat(val) : acc.concat(val + acc[idx - 1])), []);\r\n\r\n  var formattedDateMo = dateMo.map(dateString => {\r\n    const date = new Date(dateString);\r\n    const options = { month: 'long', year: 'numeric' };\r\n    return date.toLocaleDateString('en-US', options);\r\n  });\r\n  formattedDateMo = formattedDateMo.slice(1); // Slice because array starts from one month prior\r\n  dateMo.pop() // Take off most recent month\r\n\r\n  // Create traces for graphs\r\n  const traceCumOil = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(\r\n    dateMo,\r\n    cumlMoOil,\r\n    \"Cuml Data\",\r\n    \"lines\",\r\n    \"green\"\r\n  );\r\n  cumlMoOil.pop() // Take off most recent month\r\n  oilMo.pop() // Take off most recent month\r\n  const traceMoProdVSCum = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(\r\n    cumlMoOil,\r\n    oilMo,\r\n    \"monthly\",\r\n    \"line\",\r\n    \"green\",\r\n    formattedDateMo\r\n  );\r\n  const traceDailyProdVSCum = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(\r\n    cumlDaOil,\r\n    oilDaily,\r\n    \"daily\",\r\n    \"line\",\r\n    \"green\",\r\n    dateDa\r\n  );\r\n  const traceMoOil = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(\r\n    dateMo,\r\n    oilMo,\r\n    \"Monthly Oil [BO]\",\r\n    \"line\",\r\n    \"green\"\r\n  );\r\n\r\n  // Determine the amount of cycles to show for log graphs\r\n  var maxOilMo = Math.max(...oilMo)\r\n  var maxOilDaily = Math.max(...oilDaily)\r\n  var numDigits_mo = Math.floor(Math.log10(maxOilMo))+1;\r\n  var numDigits_da = Math.floor(Math.log10(maxOilDaily))+1;\r\n  var cycle = [null, numDigits_mo, numDigits_da, numDigits_mo] // # of cycles to show, null for non-log graph\r\n\r\n  var min = (selected=='South Texas Total' || selected=='East Texas Total') ? 2 : 1 // Minimum for graph, only '2' for South Texas Total\r\n\r\n  var x_arrays = [dateMo, cumlMoOil, cumlDaOil, dateMo] // array of arrays being used on x-axis, used to get start & stop of graphs\r\n\r\n  // Create Different Keys\r\n  const plotContainers = ['cumlOilCurve', 'moProdVsCumCurve', 'dailyProdVsCumCurve', 'moOilCurve'];\r\n  // Traces to Use\r\n  let traceArrays = [\r\n    [traceCumOil],\r\n    [traceMoProdVSCum],\r\n    [traceDailyProdVSCum],\r\n    [traceMoOil]\r\n  ];\r\n  // Loop and make the plots, contain keys found in plotContainers^^\r\n  plotContainers.forEach((container, i) => {\r\n    let scale = [1, 2, 3].includes(i) ? \"log\" : null; // SETS SCALE TO LOG FOR THE Y-AXIS IF (i == [index in plotContainers])\r\n\r\n    // Manual scale for semi-log plot\r\n    let tickvals = scale == 'log' ? [0,1,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,20000,30000,40000,50000,60000,70000,80000,90000,100000,200000,300000,400000,500000,600000,700000,800000,900000,1000000] : 'auto'\r\n    let ticktext = scale == 'log' ? [0,1,10,'','','','','','','','',100,'','','','','','','','',1000,'','','','','','','','',10000,'','','','','','','','',100000,'','','','','','','','',1000000]: 'auto'\r\n    \r\n    // Plotly Layout\r\n    var layout = {\r\n      title: ['Time vs Cumulative Oil',  'Cumulative Oil vs Monthly Oil Production', 'Cumulative Oil vs Daily Oil Production', 'Monthly Oil vs Time (BOPM)'][i],\r\n      xaxis: {\r\n        range: [x_arrays[i][0],x_arrays[i][x_arrays[i].length-1]], // for each plot, range is first index to last index of array that is being used\r\n        showline: scale == 'log' ? true : false,\r\n        gridcolor: 'darkgray',\r\n      },\r\n      yaxis: {\r\n        range: scale == 'log' ? [min,cycle[i]] : [0,cumlMoOil[cumlMoOil.length-1]+500], // if log - 1st case, if not log - 2nd case\r\n        type: scale,\r\n        tickvals: tickvals,\r\n        ticktext: ticktext,\r\n        showline: true,\r\n        gridcolor: 'darkgray',\r\n      },\r\n    }\r\n    Plotly.newPlot(container, traceArrays[i], layout); // Create plot\r\n  });\r\n}\r\n\r\n\r\n//main\r\ntableData = formatData();\r\n\r\nconsole.log(\"formatData\")\r\nconsole.log(tableData)\r\n\r\n// Don't display payout or formation if != ST and != ET\r\nif(sessionStorage.region != 'ST' && sessionStorage.region != 'ET'){\r\n  tableData = tableData.map((array) => array.slice(0, array.length-2)); // changes tableData\r\n  console.log(tableData)\r\n  // Remove headers in html\r\n  let tableHeader = document.querySelector('.thead-dark tr')\r\n  tableHeader.removeChild(tableHeader.children[4])\r\n  tableHeader.removeChild(tableHeader.children[4])\r\n};\r\n\r\n//sort by pay: pos=4 by prod: pos=1\r\ndocument.getElementById('Payfilter').onclick = function(){\r\n  _data__WEBPACK_IMPORTED_MODULE_3__.sortData(tableData,4)\r\n};\r\n\r\ndocument.getElementById('Prodfilter').onclick = function(){\r\n  _data__WEBPACK_IMPORTED_MODULE_3__.sortData(tableData,1)\r\n};\r\n\r\n(0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).on(\"change\", () => {\r\n  _data__WEBPACK_IMPORTED_MODULE_3__.buildTable(_data__WEBPACK_IMPORTED_MODULE_3__.filterData(tableData,dropdownId));\r\n  displayPlot((0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).node().value);\r\n});\r\n\r\ndocument.getElementById('clearFilter').onclick = function () {\r\n  _data__WEBPACK_IMPORTED_MODULE_3__.buildTable(tableData);\r\n};\r\n\r\nwindow.onload = function () {\r\n  _data__WEBPACK_IMPORTED_MODULE_3__.buildTable(tableData);\r\n  _data__WEBPACK_IMPORTED_MODULE_3__.dropdown(dropdownId);  \r\n}();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://prod-1/./src/js/table.js?");

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
/******/ 			"table": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_d3_src_index_js","vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-17252e"], () => (__webpack_require__("./src/js/table.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;