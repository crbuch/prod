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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   loginFb: () => (/* binding */ loginFb),\n/* harmony export */   logoutFb: () => (/* binding */ logoutFb),\n/* harmony export */   onAuthStateChangedFb: () => (/* binding */ onAuthStateChangedFb),\n/* harmony export */   updatePasswordFb: () => (/* binding */ updatePasswordFb)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\r\n\r\n\r\nconst firebaseConfig = {\r\n    apiKey: \"AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU\",\r\n    authDomain: \"cmlproduction-1e86a.firebaseapp.com\",\r\n    projectId: \"cmlproduction-1e86a\",\r\n    storageBucket: \"cmlproduction-1e86a.appspot.com\",\r\n    messagingSenderId: \"924402330611\",\r\n    appId: \"1:924402330611:web:55155c0a5c5c6a7d4b8086\"\r\n};\r\n  \r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\n\r\n\r\nconst onAuthStateChangedFb = () => {\r\n    auth.onAuthStateChanged((user) => {\r\n        if (user) {\r\n            console.log('user mon :>> ', user);\r\n            //up();\r\n        } else {\r\n            console.log(\"none\");\r\n            window.location.replace('index.html');\r\n            const currentState = window.history.state;\r\n            window.history.replaceState(currentState, '', window.location.href);\r\n            window.onpopstate = function () {\r\n            window.history.replaceState(currentState, '', window.location.href);\r\n            };\r\n        }\r\n    });\r\n};\r\n\r\nconst up = () => {\r\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updateProfile)(auth.currentUser, {\r\n        displayName: ''\r\n      }).then(() => {\r\n        console.log('userCredential.user.displayName :>> ', auth.currentUser.displayName);\r\n      }).catch((error) => {\r\n        console.log('error :>> ', error);\r\n      });\r\n};\r\n\r\nconst loginFb = (email, password) => {\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth,email,password)\r\n};\r\n\r\nconst logoutFb = () => {\r\n    sessionStorage.removeItem('siteSelection')\r\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);\r\n};\r\n\r\nconst updatePasswordFb = (newPassword) => {\r\n    const user = auth.currentUser;\r\n    if (user) {\r\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updatePassword)(user,newPassword);\r\n    }\r\n    return Promise.reject(new Error('No user is currently signed in.'));\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://prod-1/./src/js/auth.js?");

/***/ }),

/***/ "./src/js/curves.js":
/*!**************************!*\
  !*** ./src/js/curves.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dataHandlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataHandlers */ \"./src/js/dataHandlers.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth */ \"./src/js/auth.js\");\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n/* harmony import */ var _load_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./load/loader */ \"./src/js/load/loader.js\");\n//import * as dh from './data'\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst displayEconomics = (data, selectedOption) => {\r\n  let wellRMPL = 0;\r\n  let wellYTDPL = 0;\r\n  let monthPnL = \"\";\r\n\r\n  data.forEach((ecoWell) => {\r\n    let w = ecoWell[\"Well Name\"].toLowerCase();\r\n    let s = selectedOption.toLowerCase()\r\n    if (w.includes(s)) {\r\n      wellRMPL = ecoWell[\"Recent Month P&L\"];\r\n      wellYTDPL = ecoWell[\"YTD P&L\"];\r\n      monthPnL = ecoWell[\"Date\"].slice(0, 3);\r\n    }\r\n  });\r\n  document.getElementById(\"pnl\").innerHTML = `P&L : $${wellRMPL.toFixed(0).toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\")} ${monthPnL}`;\r\n  document.getElementById(\"YTD\").innerHTML = `$${wellYTDPL.toFixed(0).toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\")} YTD`;\r\n  document.getElementById(\"pnl\").style.display = \"block\";\r\n  document.getElementById(\"YTD\").style.display = \"block\";\r\n\r\n};\r\n\r\nconst displayPayout = (data, selectedOption) => {\r\n  var payout100 = 0;\r\n  data.forEach((payoutWell) => {\r\n    if (payoutWell[\"Well Name\"].includes(selectedOption)) {\r\n      payout100 = payoutWell[\"% Payout\"] * 100;\r\n    }\r\n  });\r\n  document.getElementById(\"payout\").innerHTML =\r\n    \"Payout : \" + payout100.toFixed(0).toLocaleString(\"en-US\") + \"%\";\r\n  document.getElementById(\"payout\").style.display = \"block\";\r\n  //document.getElementById(\"payout100\").innerHTML = payout100.toFixed(0).toLocaleString(\"en-US\")+ \"%\";\r\n\r\n};\r\n\r\nconst displayPumpInfo = (data, selectedOption) => {\r\n  let wellInfo = data.find(i => i[\"Well Name\"] === selectedOption);\r\n  if (wellInfo !== undefined) {\r\n    if (\r\n      wellInfo[\"SPM\"] !== 0\r\n    ) {\r\n      //USED jQuery LIBRARY TO TOGGLE THE DISPLAY OF #pumpInfo\r\n      $(document).ready(function () {\r\n        $(\"#pumpInfo\").toggle();\r\n        document.getElementById(\"c\").innerHTML = `C: ${wellInfo[\"C\"]}`;\r\n        document.getElementById(\"SPM\").innerHTML = `SPM: ${wellInfo[\"SPM\"]}`;\r\n        document.getElementById(\"DHSL\").innerHTML = `DH SL: ${wellInfo[\"DH SL\"]}`;\r\n        document.getElementById(\"ideal\").innerHTML = `Ideal bfpd: ${wellInfo[\"Ideal bfpd\"]}`;\r\n        document.getElementById(\"pumpEff\").innerHTML = `Pump Eff: ${Math.round(wellInfo[\"Pump Eff\"] * 100)}`;\r\n        document.getElementById(\"pumpDepth\").innerHTML = `Pump Depth: ${wellInfo[\"Pump Depth\"]}`;\r\n        document.getElementById(\"GFLAP\").innerHTML = `GFLAP: ${wellInfo[\"GFLAP\"]}`;\r\n        document.getElementById(\"Inc\").innerHTML = `Inc: ${wellInfo[\"Inc\"]}`;\r\n      });\r\n    } else {\r\n      $(document).ready(function () {\r\n        $(\"#notPumpingInfo\").toggle();\r\n        $(\"#notPumping\").html(\"This well is not on rod pump\");\r\n      });\r\n    }\r\n  } else {\r\n    $(document).ready(function () {\r\n      $(\"#notPumpingInfo\").toggle();\r\n      $(\"#notPumping\").html(\"No pump data available\");\r\n    });\r\n  };\r\n};\r\n\r\nconst displayCumlData = (data, formations,selectedOption) => {\r\n  if (selectedOption == \"South Texas Total\") selectedOption = \"ST Total\";\r\n  if (selectedOption == \"East Texas Total\") selectedOption = \"ET Total\";\r\n  let selectedWell = {\r\n    cuml: 0,\r\n    gasCuml: 0,\r\n    waterCuml: 0,\r\n    formation: \"\"\r\n  };\r\n  data.forEach(well => {\r\n    if (selectedOption === well[0]) {\r\n      selectedWell.cuml = well[1];\r\n      selectedWell.gasCuml = well[3];\r\n      selectedWell.waterCuml = well[2];\r\n      selectedWell.formation = formations[selectedOption] || \"\";\r\n    }\r\n  });\r\n\r\n  const formationEl = document.getElementById(\"formation\");\r\n  const cumulativeDataEl = document.getElementById(\"cumlativeData\");\r\n\r\n  if (!selectedWell.formation) {\r\n    document.getElementById(\"filler4\").style.display = \"\";\r\n  }\r\n\r\n  formationEl.innerHTML = selectedWell.formation;\r\n  cumulativeDataEl.innerHTML = `Cumulative: ${selectedWell.cuml} MBO, ${selectedWell.gasCuml} MMCF, ${selectedWell.waterCuml} MBW`;\r\n\r\n};\r\n\r\nconst getSelectedOption = (data) => {\r\n  let selectedOption = null;\r\n  let menuNode = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"#siteSelection\").node().value;\r\n  \r\n  if (menuNode != \"default\") {\r\n    selectedOption = [menuNode];\r\n  } else if (sessionStorage.siteSelection != null) {\r\n    selectedOption = [sessionStorage.siteSelection];\r\n    (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"#siteSelection\").node().value = selectedOption;\r\n    sessionStorage.removeItem(\"siteSelection\");\r\n  } else selectedOption = [...data[0][0]];\r\n\r\n  selectedOption = selectedOption.join('');\r\n  sessionStorage.siteSelection = selectedOption;\r\n  return selectedOption;\r\n};\r\n\r\nasync function curve(timeFrame, data){\r\n  const selectedOption = getSelectedOption(data.prod);\r\n  document.getElementById('wellName').textContent = selectedOption\r\n  let region = sessionStorage.getItem(\"region\");\r\n  if (region == null) {\r\n    sessionStorage.setItem('region', 'ST')\r\n    region = 'ST'\r\n  };\r\n\r\n  [\"c\", \"SPM\", \"DHSL\", \"ideal\", \"pumpEff\", \"pumpDepth\", \"GFLAP\", \"Inc\", \"notPumping\"].forEach(id => {\r\n    document.getElementById(id).innerHTML = \"\";\r\n  });\r\n\r\n  [\"zoomEl\", \"individualTable\",\"pumpInfo\",\"notPumpingInfo\", \"pnl\", \"YTD\",\"payout\"].forEach(id => document.getElementById(id).style.display = 'none');\r\n\r\n  if (region == \"ST\" & selectedOption != \"South Texas Total\") {\r\n    if (currUid !== 'fh05lGDE7YSVyAu9eNP4bYRR9n42' & currUid !== null) {\r\n      displayEconomics(data.econ, selectedOption);\r\n      displayPayout(data.payout, selectedOption);\r\n    }\r\n    displayPumpInfo(data.pumpInfo, selectedOption);\r\n  };\r\n  displayCumlData(data.cuml,data.formation, selectedOption);\r\n\r\n  ['gasDeclineCurve', 'waterDeclineCurve', 'waterCutCurve', 'totalFluidCurve', 'combinationCurves'].forEach(id => {\r\n    document.getElementById(id).style.display = 'block';\r\n  });\r\n\r\n  let date365 = []; let oil365 = []; let percent = [];\r\n  let mask = selectedOption == \"South Texas Total\" & currUid !== \"fh05lGDE7YSVyAu9eNP4bYRR9n42\" \r\n  if (mask){\r\n    await __webpack_require__.e(/*! import() */ \"src_js_load_recprod_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./load\\recprod.js */ \"./src/js/load/recprod.js\")).then(module => {\r\n      const data = module.recYrProd\r\n      date365 = data.map(sub => sub[\"Date\"],[]).reverse();\r\n      oil365 = data.map(sub => sub[\"New Prod\"],[]).reverse();\r\n      percent = data.map(sub => sub[\"percent\"],[]).reverse();\r\n      document.getElementById('ratioRecProd').style.display = 'block';\r\n    })\r\n  }\r\n  \r\n  const site_data = data.prod.filter(site => site[0] === selectedOption);\r\n  let site_date = site_data.map(site => site[8]);\r\n  let site_oil = site_data.map(site => site[2]);\r\n  let site_gas = site_data.map(site => site[3]);\r\n  let site_water = site_data.map(site => site[4]);\r\n  let comments = site_data.map(site => site[7]);\r\n  let movingAverage = site_data.map(site => site[site.length-1]);\r\n  let water_cut = site_water.map((water, i) => (water / (water + site_oil[i])) * 100);\r\n  let total_fluid = site_data.map(site => site[9]);\r\n  if (timeFrame > 0) [site_date, site_oil, site_gas, site_water, comments, movingAverage, oil365, date365, percent] =\r\n  [site_date, site_oil, site_gas, site_water, comments, movingAverage, oil365, date365, percent].map(arr => arr.slice(0, timeFrame));\r\n  let trace365 = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.makeTrace)(\r\n    date365,\r\n    oil365,\r\n    \"Production from New Wells (365 Days)\",\r\n    null,\r\n    \"purple\",\r\n    null,\r\n    true\r\n  )\r\n\r\n  let traceOil = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.makeTrace)( \r\n    site_date,\r\n    site_oil,\r\n    \"Oil [BO]\",\r\n    null,\r\n    \"green\",\r\n    comments\r\n  );\r\n\r\n  const traceOilAvg = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.makeTrace)(\r\n    site_date,\r\n    movingAverage,\r\n    \"7 Day Avg\",\r\n    \"lines\",\r\n    null,\r\n    null,\r\n    null,\r\n    'dot'\r\n  );\r\n\r\n  let traceGas = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.makeTrace)(\r\n    site_date,\r\n    site_gas,\r\n    \"Gas [MCF]\",\r\n    \"line\",\r\n    \"red\"\r\n  );\r\n\r\n  let traceWater = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.makeTrace)(\r\n    site_date,\r\n    site_water,\r\n    \"Water [BW]\",\r\n    \"line\",\r\n    \"blue\",\r\n  );\r\n\r\n  const traceCut = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.makeTrace)(\r\n    site_date,\r\n    water_cut,\r\n    \"line\",\r\n    \"#25C4DC\"\r\n  );\r\n\r\n  let traceFluid = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.makeTrace)(\r\n    site_date,\r\n    total_fluid,\r\n    \"Total Fluid [BBLS]\",\r\n    \"line\",\r\n    \"black\"\r\n  );\r\n\r\n  let tracePercent = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.makeTrace)(\r\n    date365,\r\n    percent,\r\n    \"Percent Past Year Production\",\r\n    \"line\",\r\n    \"#224a04\"\r\n  );\r\n\r\n  const scale = (document.getElementById(\"logarithmic\").classList.contains(\"active\")) ? 'log' : 'linear';\r\n  const plotContainers = [\"gasDeclineCurve\", \"waterDeclineCurve\", 'totalFluidCurve', 'waterCutCurve', 'combinationCurves', 'ratioRecProd'];\r\n  let combination = [traceOil, traceOilAvg, traceGas, traceWater, traceFluid, trace365];\r\n  if (selectedOption !== \"South Texas Total\") {combination.pop(); document.getElementById('ratioRecProd').style.display = 'none';}\r\n\r\n  let traceArrays = [\r\n    [traceGas],\r\n    [traceWater],\r\n    [traceFluid],\r\n    [traceCut],\r\n    combination,\r\n    [tracePercent]\r\n  ];\r\n  if (selectedOption !== \"South Texas Total\") {traceArrays.pop(); plotContainers.pop();}\r\n\r\n  plotContainers.forEach((container, i) => {\r\n    traceArrays[i].forEach(trace => {\r\n      trace.visible = (i === 4 && trace.name !== \"Oil [BO]\") ? \"legendonly\" : trace.visible;\r\n    });\r\n\r\n    const layout = (0,_layout__WEBPACK_IMPORTED_MODULE_1__.makeLayout)(['Gas vs Time (MCFD)', 'Water vs Time (BWPD)', 'Total Fluid vs Time (BFPD)', 'Water Cut Percentage', 'Combined Production', 'Percent Production from New Wells (365 Days)'][i], scale, \r\n        (scale === 'log') ? [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 3000] : null);\r\n    Plotly.newPlot(container, traceArrays[i], layout, _layout__WEBPACK_IMPORTED_MODULE_1__.config);\r\n  });\r\n\r\n  const combo = document.getElementById('combinationCurves');\r\n  combo.on(\"plotly_relayout\", function (eventData) {\r\n    JSON.stringify(eventData);\r\n    const zoomEL = document.getElementById(\"zoomEl\");\r\n    zoomEL.innerHTML = '';\r\n    const p = document.createElement('p');\r\n    p.textContent = `Produced:`;\r\n    zoomEL.appendChild(p);\r\n\r\n\r\n    let { \"xaxis.range[0]\": xRangeStart, \"xaxis.range[1]\": xRangeEnd } = eventData;\r\n    if (!xRangeStart) { // if double-clicked\r\n      xRangeStart = site_date[site_date.length - 1];\r\n      xRangeEnd = site_date[0];\r\n    }\r\n    const xStart = xRangeStart.substring(0, 10);\r\n    const xEnd = xRangeEnd.substring(0, 10);\r\n    const startIdx = site_date.findIndex(value => value.includes(xStart));\r\n    const endIdx = site_date.findIndex(value => value.includes(xEnd));\r\n\r\n    if (startIdx === -1) { // zoomed where no data\r\n      return;\r\n    }\r\n    const visible_traces = JSON.parse(sessionStorage.getItem('visible_traces'));\r\n    const map = {'Gas [MCF]': site_gas, 'Oil [BO]': site_oil, 'Water [BW]': site_water, 'Total Fluid [BBLS]': total_fluid };\r\n    const nameMap = {'Gas [MCF]': 'Gas [MMCF]', 'Oil [BO]': 'Oil [MBO]', 'Water [BW]': 'Water [MBW]', 'Total Fluid [BBLS]': 'Total Fluid [MBBL]' };\r\n    console.log('total_fluid :>> ', total_fluid);\r\n    for (const[key,vals] of Object.entries(visible_traces)){\r\n      for (let val of vals){\r\n        if (!Object.keys(map).includes(val)) continue;\r\n        const data = map[val];\r\n        console.log('data :>> ', data);\r\n        const sum = (data.slice(endIdx, startIdx + 1).reduce((acc, cur) => acc + cur, 0)/1000).toFixed(1);\r\n\r\n        const p = document.createElement('p');\r\n        p.textContent = `${sum} ${nameMap[val]}`;\r\n        p.style.fontSize = '15px';\r\n        zoomEL.appendChild(p);\r\n      }\r\n    }\r\n    zoomEL.style.display = \"block\";\r\n    document.getElementById('siteSelection').focus();\r\n  });\r\n\r\n  combo.on('plotly_legendclick', function(data) {\r\n    const traceIdx = data.curveNumber;\r\n    const name = combination[traceIdx].name;\r\n    let currVisible = JSON.parse(sessionStorage.visible_traces) || {\"visible_traces\": []};\r\n\r\n    if (currVisible.visible.includes(name)){\r\n      currVisible.visible = currVisible.visible.filter(el => el !== name)\r\n    }else{\r\n      currVisible.visible.push(name);\r\n    }\r\n\r\n    sessionStorage.setItem('visible_traces', JSON.stringify(currVisible));\r\n  })\r\n\r\n  document.getElementById(\"siteSelection\").focus();\r\n  document.getElementById(\"filler4\").style.display = \"none\";\r\n};\r\n\r\nconst table = (coreData) => {\r\n  let data = coreData.map(row => [...row]);\r\n  const selectedOption = getSelectedOption(data);\r\n  let well = data.filter(i => i[0] == selectedOption);\r\n  well.forEach(w => {\r\n    w.shift();\r\n    for (let i = 0; i < 3; i++) w.pop();\r\n  });\r\n  _dataHandlers__WEBPACK_IMPORTED_MODULE_2__.buildTable(well);\r\n  document.getElementById('individualTable').style.display = 'inline-block';\r\n  ['gasDeclineCurve', 'waterDeclineCurve', 'waterCutCurve', 'totalFluidCurve', 'combinationCurves', 'ratioRecProd'].forEach(tag => {\r\n    document.getElementById(tag).style.display = 'none'\r\n  });\r\n\r\n  if (window.innerWidth <= 768){\r\n    const headerText = ['Date', 'O', 'G', 'W', 'TP', 'CP', 'Comments'];\r\n    [...['dateHeader', 'oilHeader', 'gasHeader', 'waterHeader', 'TPHeader', 'CPHeader', 'commentsHeader']].forEach((tag, index) => {\r\n      document.getElementById(tag).textContent = headerText[index]\r\n    });\r\n  }\r\n};\r\n\r\nconst switchActives = (event) => {\r\n  event.preventDefault();\r\n  const target = event.target;\r\n  const parent = document.getElementById(target.id).parentNode;\r\n  const children = parent.querySelectorAll(\"*\");\r\n  if ((0,_ui__WEBPACK_IMPORTED_MODULE_3__.checkActive)('table') === true & parent.id == 'timeframes') return;\r\n\r\n  children.forEach(child => {\r\n    child.classList.remove(\"active\");\r\n  });\r\n  \r\n  target.className += \"active\";\r\n  const activeTime = document.getElementById(\"timeframes\").querySelectorAll(\".active\")[0].id.substring(4);//gives the number from the active view id\r\n  curve(Number(activeTime) + 1, curveInfo);\r\n\r\n  function ddd () {\r\n    try{\r\n      document.getElementById(\"siteSelection\").blur();\r\n    }catch{\r\n    };\r\n  }\r\n  \r\n  if (window.innerWidth < 400) setTimeout(ddd,50);\r\n  document.getElementById('siteSelection').focus();\r\n};\r\n\r\n(0,_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChangedFb)();\r\nconst currUid = localStorage.getItem('uid');\r\nlet curveInfo;\r\ndocument.getElementById('siteSelection').focus();\r\n\r\n$(document).ready(function () {\r\n  $(\"#header\").load(\"../src/pages/header.html\", () => {\r\n    (0,_region__WEBPACK_IMPORTED_MODULE_5__.monitorRegion)();\r\n  });\r\n});\r\n\r\n['linear','logarithmic','DaysInception','Days30','Days365','Days180'].forEach(el => {\r\n  document.getElementById(el).addEventListener('click',switchActives);\r\n});\r\n\r\n(0,d3__WEBPACK_IMPORTED_MODULE_0__.select)('#siteSelection').on(\"change\", () => {\r\n  let activeTime = 'DaysInception';\r\n  if (localStorage.initTime == 31) activeTime = 'Days30';\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_3__.setActiveTime)(activeTime);\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_3__.setActiveView)(localStorage.getItem('initScale'));\r\n  sessionStorage.visible_traces = JSON.stringify({\"visible\":[\"Oil [BO]\"]});\r\n  curve(localStorage.initTime, curveInfo);\r\n});\r\n\r\ndocument.getElementById(\"table\").addEventListener('click', () => {\r\n  if ((0,_ui__WEBPACK_IMPORTED_MODULE_3__.checkActive)('table') === true) return;\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_3__.setActive)(\"table\", 'DaysInception');\r\n  table(curveInfo.prod);\r\n});\r\n\r\n//init page on load//\r\nwindow.onload = function () {\r\n  let activeTime = 'DaysInception';\r\n  if (localStorage.getItem('initTime') == 31) activeTime = 'Days30';\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_3__.setActiveTime)(activeTime);\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_3__.setActiveView)(localStorage.getItem('initScale'));\r\n  sessionStorage.visible_traces = JSON.stringify({\"visible\":[\"Oil [BO]\"]});\r\n  (0,_load_loader__WEBPACK_IMPORTED_MODULE_6__.lazyLoad)().then(data => {\r\n    curveInfo = data;\r\n    _dataHandlers__WEBPACK_IMPORTED_MODULE_2__.dropdown('#siteSelection',data.prod);\r\n    curve(localStorage.getItem('initTime'), data);\r\n  })\r\n}();\n\n//# sourceURL=webpack://prod-1/./src/js/curves.js?");

/***/ }),

/***/ "./src/js/dataHandlers.js":
/*!********************************!*\
  !*** ./src/js/dataHandlers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   activeWells: () => (/* binding */ activeWells),\n/* harmony export */   buildTable: () => (/* binding */ buildTable),\n/* harmony export */   dropdown: () => (/* binding */ dropdown),\n/* harmony export */   filterData: () => (/* binding */ filterData),\n/* harmony export */   sortData: () => (/* binding */ sortData)\n/* harmony export */ });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\r\n\r\n\r\nconst activeWells = (data) => {\r\n    const exitWell = data[0][0]\r\n    const wells = new Set();\r\n    \r\n    for (let i = 0; i < data.length; i++) {\r\n        const well = data[i][0];\r\n        if (well !== 'Cornett #1 Swd') wells.add(well);\r\n        if (well === exitWell & i !== 0) break;\r\n    };\r\n\r\n    return wells;\r\n};\r\n\r\n//Creates Dropdown//\r\nconst dropdown = (id,data) => {\r\n    let menu = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(id);\r\n    activeWells(data).forEach(well => {\r\n        if (well !== 'Mcwf #1') {\r\n            menu.append(\"option\")\r\n            .text(well)\r\n            .property(\"Value\", well);\r\n        }\r\n    });\r\n};\r\n\r\nconst buildTable = (allData) => {\r\n    console.log('allData')\r\n    console.log(allData)\r\n\r\n    const tbody = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"tbody\");\r\n    tbody.html(\"\");\r\n    allData.forEach((well) => {\r\n        let row = tbody.append(\"tr\");\r\n        Object.values(well).forEach((val) => {\r\n            let cell = row.append(\"td\");\r\n            cell.text(val);\r\n        });\r\n    });\r\n};\r\n\r\nconst filterData = (data, dropdownId) => {\r\n    let reqWell = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).property(\"value\");\r\n\r\n    if (reqWell) {\r\n        return data.filter((row) => row[0] == reqWell);\r\n    };\r\n    return data\r\n};\r\n\r\nconst sortData = (data, pos) => {\r\n    event.preventDefault();\r\n    let temp = [...data];\r\n    let sorted;\r\n    sorted = temp.sort((a, b) => {\r\n        const aVal = a[pos];\r\n        const bVal = b[pos];\r\n        return bVal - aVal;\r\n    });\r\n    buildTable(sorted);\r\n};\n\n//# sourceURL=webpack://prod-1/./src/js/dataHandlers.js?");

/***/ }),

/***/ "./src/js/layout.js":
/*!**************************!*\
  !*** ./src/js/layout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   layoutWbd: () => (/* binding */ layoutWbd),\n/* harmony export */   makeLayout: () => (/* binding */ makeLayout),\n/* harmony export */   makeTrace: () => (/* binding */ makeTrace)\n/* harmony export */ });\nconst makeTrace = (x, y, name, type=\"lines\", color, text, visible=true, dash) => ({\r\n    x,\r\n    y,\r\n    text,\r\n    name,\r\n    visible,\r\n    line: {\r\n        color,\r\n        dash\r\n    },\r\n    mode: type\r\n});\r\n\r\nconst makeLayout = (title, type, tickvals, ytitle, xtitle) => ({\r\n    title,\r\n    height: null,\r\n    legend: {\r\n        bgcolor: 'rgba(0, 0, 0, 0)',\r\n        font: {\r\n            color: '#000000'\r\n        },\r\n        orientation: \"h\",\r\n            y: 1.1,\r\n            xanchor: window.innerWidth > 400 ? \"center\" : \"left\",\r\n            x: .5,\r\n    },\r\n    yaxis: {\r\n        title: ytitle,\r\n        type: type || \"linear\",\r\n        rangemode: \"tozero\",\r\n        autorange: true,\r\n        tickformat: \"f\",\r\n        tickvals,\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n    xaxis: {\r\n        title: xtitle,\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n});\r\n\r\nconst config = {\r\n    modeBarButtonsToRemove: [\r\n        \"sendDataToCloud\",\r\n        \"autoScale2d\",\r\n        \"hoverClosestCartesian\",\r\n        \"hoverCompareCartesian\",\r\n        \"lasso2d\",\r\n        \"zoomIn2d\",\r\n        \"zoomOut2d\",\r\n        \"toggleSpikelines\",\r\n    ],\r\n    displaylogo: false,\r\n    responsive: true,\r\n    displayModeBar: false,\r\n    responsiveConfig: [\r\n        {\r\n        // Mobile devices with width less than or equal to 768px\r\n        breakpoint: 768,\r\n        options: {\r\n            legend: { orientation: 'h', y: -0.2 }\r\n        }\r\n        },\r\n        {\r\n        // Desktop devices with width greater than 768px\r\n        breakpoint: 0,\r\n        options: {\r\n            legend: { orientation: 'v', y: 1 }\r\n        }\r\n        }\r\n    ]\r\n};\r\n\r\nconst layoutWbd = (max,min,minTVD,maxTVD,wellName) => ({\r\n    width: 1620,\r\n    height: 700,\r\n\r\n    margin: {\r\n        l: 0,\r\n        r: 0,\r\n        b: 0,\r\n        t: 0,\r\n    },\r\n\r\n    title: {\r\n        text: \"Drilling for \" + wellName + \", Dimmit County, TX\",\r\n        y: 0.98,\r\n    },\r\n\r\n    legend: {\r\n        x: 0.8,\r\n        y: 0.8,\r\n    },\r\n    scene: {\r\n        aspectmode: \"cube\",\r\n        xaxis: {\r\n            title: \"Easting\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n        yaxis: {\r\n            title: \"Northing\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#f0f1f2\",\r\n            showbackground: true,\r\n\r\n        },\r\n        zaxis: {\r\n            title: \"TVD\",\r\n            nticks: 5,\r\n            range: [minTVD, maxTVD],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n    },\r\n    \r\n});\n\n//# sourceURL=webpack://prod-1/./src/js/layout.js?");

/***/ }),

/***/ "./src/js/load/loader.js":
/*!*******************************!*\
  !*** ./src/js/load/loader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lazyLoad: () => (/* binding */ lazyLoad)\n/* harmony export */ });\nfunction lazyLoad() {\r\n    let region = sessionStorage.region\r\n    let data = {\r\n      prod: null,\r\n      cuml: null,\r\n      mnth: null,\r\n      econ: null,\r\n      payout: null,\r\n      pumpInfo: null,\r\n      formation: null\r\n    };\r\n    let res;\r\n    console.log('region :>> ', region);\r\n    if (region == 'ST' || region == null){\r\n      res = __webpack_require__.e(/*! import() */ \"src_js_load_st_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./st */ \"./src/js/load/st.js\")).then(module => {\r\n        data.prod = module.dataST\r\n        data.cuml = module.dataCumlST\r\n        data.mnth = module.mnthDataST\r\n        data.econ = module.econ\r\n        data.payout = module.payout\r\n        data.pumpInfo = module.pump\r\n        data.formation = module.formations\r\n        return data\r\n      })\r\n    }else if (region == 'ET'){\r\n      res = __webpack_require__.e(/*! import() */ \"src_js_load_et_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./et */ \"./src/js/load/et.js\")).then(module => {\r\n        data.prod = module.dataET\r\n        data.cuml = module.dataCumlET\r\n        data.mnth = module.mnthDataET\r\n        data.formation  = module.formations\r\n        return data\r\n      })\r\n    }else if (region == 'NM'){\r\n      res = __webpack_require__.e(/*! import() */ \"src_js_load_nm_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./nm */ \"./src/js/load/nm.js\")).then(module => {\r\n        data.prod = module.dataNM\r\n        data.cuml = module.dataCumlNM\r\n        data.formation  = module.formations\r\n        return data\r\n      })\r\n    }else if (region == 'GC'){\r\n      res = __webpack_require__.e(/*! import() */ \"src_js_load_gc_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./gc */ \"./src/js/load/gc.js\")).then(module => {\r\n        data.prod = module.dataGC\r\n        data.cuml = module.dataCumlGC\r\n        data.formation  = module.formations\r\n        return data\r\n      })\r\n    } else if (region == 'WT'){\r\n      res = __webpack_require__.e(/*! import() */ \"src_js_load_wt_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./wt */ \"./src/js/load/wt.js\")).then(module => {\r\n        data.prod = module.dataWT\r\n        data.cuml = module.dataCumlWT\r\n        data.formation  = module.formations\r\n        return data\r\n      })\r\n    }\r\n    return res\r\n}\n\n//# sourceURL=webpack://prod-1/./src/js/load/loader.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   backBtn: () => (/* binding */ backBtn),\n/* harmony export */   btnChangePwd: () => (/* binding */ btnChangePwd),\n/* harmony export */   btnLogin: () => (/* binding */ btnLogin),\n/* harmony export */   btnLogout: () => (/* binding */ btnLogout),\n/* harmony export */   checkActive: () => (/* binding */ checkActive),\n/* harmony export */   divLoginError: () => (/* binding */ divLoginError),\n/* harmony export */   divPwdError: () => (/* binding */ divPwdError),\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   formUpdate: () => (/* binding */ formUpdate),\n/* harmony export */   hideLoginError: () => (/* binding */ hideLoginError),\n/* harmony export */   hidePwdErr: () => (/* binding */ hidePwdErr),\n/* harmony export */   lblLoginErrorMessage: () => (/* binding */ lblLoginErrorMessage),\n/* harmony export */   newPwd: () => (/* binding */ newPwd),\n/* harmony export */   newPwdRpt: () => (/* binding */ newPwdRpt),\n/* harmony export */   pwdErr: () => (/* binding */ pwdErr),\n/* harmony export */   setActive: () => (/* binding */ setActive),\n/* harmony export */   setActiveTime: () => (/* binding */ setActiveTime),\n/* harmony export */   setActiveView: () => (/* binding */ setActiveView),\n/* harmony export */   showApp: () => (/* binding */ showApp),\n/* harmony export */   showLoginError: () => (/* binding */ showLoginError),\n/* harmony export */   showLoginForm: () => (/* binding */ showLoginForm),\n/* harmony export */   showPwdErr: () => (/* binding */ showPwdErr),\n/* harmony export */   toggleInitScale: () => (/* binding */ toggleInitScale),\n/* harmony export */   toggleInitTime: () => (/* binding */ toggleInitTime),\n/* harmony export */   userName: () => (/* binding */ userName),\n/* harmony export */   userPassword: () => (/* binding */ userPassword)\n/* harmony export */ });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\r\n\r\nconst userName = document.querySelector('#userEmail');\r\nconst userPassword = document.querySelector('#userPassword');\r\n\r\nconst btnChangePwd = document.querySelector('#btnChangePwd');\r\nconst newPwd = document.querySelector('#new_pwd');\r\nconst newPwdRpt = document.querySelector('#new_pwd_rpt');\r\nconst backBtn = document.querySelector('#btnBack');\r\n\r\n\r\n\r\nconst btnLogin = document.querySelector('#btnLogin');\r\nconst btnLogout = document.querySelector('#btnLogout');\r\nconst form = document.getElementById('login');\r\nconst formUpdate = document.getElementById('update-pwd');\r\n\r\n\r\nconst divLoginError = document.querySelector('#divLoginError');\r\nconst lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage');\r\n\r\nconst divPwdError = document.querySelector('#divPwdError');\r\nconst pwdErr = document.querySelector('#pwdErr');\r\n\r\nconst showLoginForm = () => {\r\n  const currPage = window.location.pathname.split(\"/\").pop();\r\n  if (currPage != 'index.html'){\r\n    window.location.href = './index.html';\r\n    \r\n  }\r\n}\r\n\r\nconst showApp = () => {\r\n  const currPage = window.location.pathname.split(\"/\").pop();\r\n  if (currPage == 'index.html'){\r\n    window.location.href = './curves.html';\r\n  }\r\n  }\r\n\r\nconst hideLoginError = () => {\r\n  divLoginError.style.display = 'none'\r\n  lblLoginErrorMessage.innerHTML = ''\r\n}\r\n\r\nconst showLoginError = (error) => {\r\n  divLoginError.style.display = 'block'    \r\n  if (error.code == firebase_auth__WEBPACK_IMPORTED_MODULE_0__.AuthErrorCodes.INVALID_PASSWORD) {\r\n    lblLoginErrorMessage.innerHTML = `Wrong password`\r\n  }\r\n  else if (sessionStorage.changePwd == \"success\") {\r\n    lblLoginErrorMessage.innerHTML = error;      \r\n  }else {\r\n    lblLoginErrorMessage.innerHTML = `Error: ${error}`;      \r\n\r\n  }\r\n}\r\n\r\nconst showPwdErr = (error) => {\r\n  divPwdError.style.display = 'block'    \r\n  pwdErr.innerHTML = `Error: ${error}`      \r\n}\r\n\r\nconst hidePwdErr = () => {\r\n  divPwdError.style.display = 'none';\r\n  pwdErr.innerHTML = '';\r\n}\r\n\r\nconst setActive = (view, time) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    el.classList.remove(\"active\");\r\n  });\r\n  document.getElementById(view).className += \"active\";\r\n  document.getElementById(time).className += \"active\";\r\n};\r\n\r\nconst setActiveTime = (time) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (el.id.includes(\"Days\")) {\r\n      el.classList.remove(\"active\");\r\n    }\r\n  });\r\n  document.getElementById(time).className += \"active\";\r\n};\r\n\r\nconst setActiveView = (view) => {\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (!el.id.includes(\"Days\")) {\r\n      el.classList.remove(\"active\");\r\n    }\r\n  });\r\n  document.getElementById(view).className += \"active\";\r\n};\r\n\r\nconst toggleInitTime = () => {\r\n  const currInit = localStorage.getItem('initTime');\r\n  if (currInit == 0) {\r\n    $('#init_time').text('30 Days')\r\n    localStorage.setItem('initTime',31)\r\n  }else {\r\n    $('#init_time').text('Inception')\r\n    localStorage.setItem('initTime',0)\r\n  };\r\n};\r\n\r\nconst toggleInitScale = () => {\r\n  const currScale = localStorage.getItem('initScale');\r\n  if (currScale == 'linear') {\r\n    $('#init_scale').text('Logarithmic')\r\n    localStorage.setItem('initScale','logarithmic')\r\n  }else {\r\n    $('#init_scale').text('Linear')\r\n    localStorage.setItem('initScale','linear')\r\n  };\r\n};\r\n\r\nconst checkActive = (element) => {\r\n  let flag = false;\r\n  let elems = document.querySelectorAll(\".active\");\r\n  [].forEach.call(elems, (el) => {\r\n    if (el.id == element) flag = true;\r\n  });\r\n  return flag;\r\n};\r\n\r\nvar bMobile =   // will be true if running on a mobile device\r\n  navigator.userAgent.indexOf( \"Mobile\" ) !== -1 || \r\n  navigator.userAgent.indexOf( \"iPhone\" ) !== -1 || \r\n  navigator.userAgent.indexOf( \"Android\" ) !== -1 || \r\n  navigator.userAgent.indexOf( \"Windows Phone\" ) !== -1 ;\n\n//# sourceURL=webpack://prod-1/./src/js/ui.js?");

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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "prod-1:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 			"curves": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_d3_src_index_js","vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-17252e"], () => (__webpack_require__("./src/js/curves.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;