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

/***/ "./src/js/curves.js":
/*!**************************!*\
  !*** ./src/js/curves.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region */ \"./src/js/region.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data__WEBPACK_IMPORTED_MODULE_3__]);\n_data__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_index__WEBPACK_IMPORTED_MODULE_1__.monitorAuthState)();\r\n(0,_region__WEBPACK_IMPORTED_MODULE_2__.monitorRegion)();\r\n\r\nconst displayEconomics = (data, selectedOption) => {\r\n  let wellRMPL = 0;\r\n  let wellYTDPL = 0;\r\n  let monthPnL = \"\";\r\n\r\n  data.forEach((ecoWell) => {\r\n    if (ecoWell[\"Well Name\"].includes(selectedOption)) {\r\n      wellRMPL = ecoWell[\"Recent Month P&L\"];\r\n      wellYTDPL = ecoWell[\"YTD P&L\"];\r\n      monthPnL = ecoWell[\"Date\"].slice(0, 3);\r\n    }\r\n  });\r\n  document.getElementById(\"pnl\").innerHTML = `P&L : $${wellRMPL.toFixed(0).toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\")} ${monthPnL}`;\r\n  document.getElementById(\"YTD\").innerHTML = `$${wellYTDPL.toFixed(0).toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\")} YTD`;\r\n};\r\n\r\nconst displayPayout = (data, selectedOption) => {\r\n  var payout100 = 0;\r\n  data.forEach((payoutWell) => {\r\n    if (payoutWell[\"Well Name\"].includes(selectedOption)) {\r\n      payout100 = payoutWell[\"% Payout\"] * 100;\r\n    }\r\n  });\r\n  document.getElementById(\"payout\").innerHTML =\r\n    \"Payout : \" + payout100.toFixed(0).toLocaleString(\"en-US\") + \"%\";\r\n  //document.getElementById(\"payout100\").innerHTML = payout100.toFixed(0).toLocaleString(\"en-US\")+ \"%\";\r\n\r\n};\r\n\r\nconst displayPumpInfo = (data, selectedOption) => {\r\n  let wellInfo = data.find(i => i[\"Well Name\"] === selectedOption);\r\n  if (wellInfo !== undefined) {\r\n    if (\r\n      wellInfo[\"SPM\"] !== 0\r\n    ) {\r\n      //USED jQuery LIBRARY TO TOGGLE THE DISPLAY OF #pumpInfo\r\n      $(document).ready(function () {\r\n        $(\"#pumpInfo\").toggle();\r\n        document.getElementById(\"c\").innerHTML = `C: ${wellInfo[\"C\"]}`;\r\n        document.getElementById(\"SPM\").innerHTML = `SPM: ${wellInfo[\"SPM\"]}`;\r\n        document.getElementById(\"DHSL\").innerHTML = `DH SL: ${wellInfo[\"DH SL\"]}`;\r\n        document.getElementById(\"ideal\").innerHTML = `Ideal bfpd: ${wellInfo[\"Ideal bfpd\"]}`;\r\n        document.getElementById(\"pumpEff\").innerHTML = `Pump Eff: ${Math.round(wellInfo[\"Pump Eff\"] * 100)}`;\r\n        document.getElementById(\"pumpDepth\").innerHTML = `Pump Depth: ${wellInfo[\"Pump Depth\"]}`;\r\n        document.getElementById(\"GFLAP\").innerHTML = `GFLAP: ${wellInfo[\"GFLAP\"]}`;\r\n        document.getElementById(\"Inc\").innerHTML = `Inc: ${wellInfo[\"Inc\"]}`;\r\n      });\r\n    } else {\r\n      $(document).ready(function () {\r\n        $(\"#notPumpingInfo\").toggle();\r\n        $(\"#notPumping\").html(\"This well is not pumping\");\r\n      });\r\n    }\r\n  } else {\r\n    $(document).ready(function () {\r\n      $(\"#notPumpingInfo\").toggle();\r\n      $(\"#notPumping\").html(\"No pump data available\");\r\n    });\r\n  };\r\n};\r\n\r\nconst displayCumlData = (data, selectedOption) => {\r\n  let selectedWell = {\r\n    cuml: 0,\r\n    gasCuml: 0,\r\n    waterCuml: 0,\r\n    formation: \"\"\r\n  };\r\n\r\n  data.forEach(well => {\r\n    if (selectedOption === well[0]) {\r\n      selectedWell.cuml = well[1];\r\n      selectedWell.gasCuml = well[3];\r\n      selectedWell.waterCuml = well[2];\r\n      selectedWell.formation = well[4];\r\n    }\r\n  });\r\n\r\n  const formationEl = document.getElementById(\"formation\");\r\n  const cumulativeDataEl = document.getElementById(\"cumlativeData\");\r\n\r\n  if (!selectedWell.formation) {\r\n    document.getElementById(\"filler4\").style.display = \"\";\r\n  }\r\n\r\n  formationEl.innerHTML = selectedWell.formation;\r\n  cumulativeDataEl.innerHTML = `Cumulative: ${selectedWell.cuml} MBO, ${selectedWell.gasCuml} MMCF, ${selectedWell.waterCuml} MBW`;\r\n\r\n};\r\n\r\nconst getSelectedOption = (data) => {\r\n  let selectedOption = null;\r\n  let menuNode = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(\"#siteSelection\").node().value;\r\n  \r\n  if (menuNode != \"default\") {\r\n    selectedOption = [menuNode];\r\n  } else if (sessionStorage.getItem(\"siteSelection\") != null) {\r\n    selectedOption = [sessionStorage.getItem(\"siteSelection\")];\r\n    sessionStorage.removeItem(\"siteSelection\");\r\n  } else selectedOption = [...data[0][0]];\r\n\r\n  selectedOption = selectedOption.join('');\r\n  sessionStorage.siteSelection = selectedOption;\r\n  return selectedOption;\r\n};\r\nconst fetchNewProd = () => {\r\n  const data = _data__WEBPACK_IMPORTED_MODULE_3__.newProd;\r\n  let oil = data.map(sub => sub[\"New Prod\"],[]).reverse();\r\n  let date = data.map(sub => sub[\"Date\"],[]).reverse();\r\n\r\n  return {\"date\": date, \"new oil\": oil};\r\n}\r\nconst curve = (timeFrame, data) => {\r\n  const selectedOption = getSelectedOption(data.prodData);\r\n\r\n  let region = sessionStorage.getItem(\"region\");\r\n  if (region == null) {\r\n    sessionStorage.setItem('region', 'st')\r\n    region = 'st'\r\n  };\r\n\r\n  if (region != \"et\") {\r\n    displayEconomics(data.economicsData, selectedOption);\r\n    displayPayout(data.payoutData, selectedOption);\r\n    displayPumpInfo(data.pumpData, selectedOption);\r\n\r\n    // Hide previous pumping info\r\n    document.getElementById(\"pumpInfo\").style.display = \"none\";\r\n    document.getElementById(\"notPumpingInfo\").style.display = \"none\";\r\n\r\n    // Clear pump info text for next selection\r\n    [\"c\", \"SPM\", \"DHSL\", \"ideal\", \"pumpEff\", \"pumpDepth\", \"GFLAP\", \"Inc\", \"notPumping\"].forEach(id => {\r\n      document.getElementById(id).innerHTML = \"\";\r\n    });\r\n  };\r\n  displayCumlData(data.dataCuml, selectedOption);\r\n\r\n  document.getElementById(\"zoomEl\").style.visibility = \"hidden\"; //dont display old zoom data if switching b/t wells/timeframes\r\n  document.getElementById(\"wellName\").innerHTML = selectedOption;\r\n  document.getElementById(\"individualTable\").style.display = \"none\";\r\n\r\n  [/*'oilDeclineCurve',*/ 'gasDeclineCurve', 'waterDeclineCurve', 'waterCutCurve', 'totalFluidCurve', 'combinationCurves', 'moOilCurve'].forEach(id => {\r\n    document.getElementById(id).style.display = 'block';\r\n  });\r\n  let data365 = fetchNewProd();\r\n  let date365 = data365[\"date\"];\r\n  let oil365 = data365[\"new oil\"];\r\n\r\n  const site_data = data.prodData.filter(site => site[0] === selectedOption);\r\n  let site_date = site_data.map(site => site[9]);\r\n  let site_oil = site_data.map(site => site[2]);\r\n  let site_gas = site_data.map(site => site[3]);\r\n  let site_water = site_data.map(site => site[4]);\r\n  let comments = site_data.map(site => site[7]);\r\n  let movingAverage = site_data.map(site => site[8]);\r\n  let water_cut = site_water.map((water, i) => (water / (water + site_oil[i])) * 100);\r\n  let total_fluid = site_oil.map((oil, index) => oil + site_water[index]);\r\n  \r\n  if (timeFrame > 0) [site_date, site_oil, site_gas, site_water, comments, movingAverage,oil365,date365] =\r\n  [site_date, site_oil, site_gas, site_water, comments, movingAverage,oil365,date365].map(arr => arr.slice(0, timeFrame));\r\n  // READING MONTHLY DATA (+ Drops most recent month)\r\n  const mo_site_data = data.MoProdDataST.filter(site => site[0] === selectedOption);\r\n  mo_site_data.pop();\r\n  let site_date_mo = mo_site_data.map(site => site[6]);\r\n  let site_oil_mo = mo_site_data.map(site => site[1]);\r\n  const cumlMoOil = site_oil_mo.reduce((acc, val, idx) => (idx === 0 ? acc.concat(val) : acc.concat(val + acc[idx - 1])), []);\r\n  \r\n  let trace365 = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(\r\n    date365,\r\n    oil365,\r\n    \"Production from New Wells (365 Days)\",\r\n    null,\r\n    \"purple\",\r\n    null,\r\n    true\r\n  )\r\n\r\n  let traceOil = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)( \r\n    site_date,\r\n    site_oil,\r\n    \"Oil [BO]\",\r\n    null,\r\n    \"green\",\r\n    comments\r\n  );\r\n\r\n  const traceOilAvg = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(\r\n    site_date,\r\n    movingAverage,\r\n    \"7 Day Avg\",\r\n    \"lines\",\r\n    null,\r\n    null,\r\n    null,\r\n    'dot'\r\n  );\r\n\r\n  let traceGas = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(\r\n    site_date,\r\n    site_gas,\r\n    \"Gas [MCF]\",\r\n    \"line\",\r\n    \"red\"\r\n  );\r\n\r\n  let traceWater = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(\r\n    site_date,\r\n    site_water,\r\n    \"Water [BW]\",\r\n    \"line\",\r\n    \"blue\",\r\n  );\r\n\r\n  const traceCut = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(\r\n    site_date,\r\n    water_cut,\r\n    // \"Water [Mbw]\",\r\n    \"line\",\r\n    \"#25C4DC\"\r\n  );\r\n\r\n  let traceFluid = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(\r\n    site_date,\r\n    total_fluid,\r\n    \"Total Fluid [BBLS]\",\r\n    \"line\",\r\n    \"black\"\r\n  );\r\n\r\n  let traceMoOil = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeTrace)(\r\n    site_date_mo,\r\n    site_oil_mo,\r\n    \"Monthly Oil [BO]\",\r\n    \"line\",\r\n    \"green\"\r\n  );\r\n\r\n  const scale = (document.getElementById(\"logarithmic\").classList.contains(\"active\")) ? 'log' : 'linear';\r\n  const plotContainers = [/*\"oilDeclineCurve\", */\"gasDeclineCurve\", \"waterDeclineCurve\", 'totalFluidCurve', 'waterCutCurve', 'combinationCurves', 'moOilCurve'];\r\n  let combination = [traceOil, traceOilAvg, traceGas, traceWater, traceFluid, trace365];\r\n  if (selectedOption !== \"South Texas Total\") combination.pop();\r\n\r\n  let traceArrays = [\r\n    // [traceOil, traceOilAvg],\r\n    [traceGas],\r\n    [traceWater],\r\n    [traceFluid],\r\n    [traceCut],\r\n    combination,\r\n    [traceMoOil]\r\n  ];\r\n\r\n  plotContainers.forEach((container, i) => {\r\n    traceArrays[i].forEach(trace => {\r\n      trace.visible = (i === 4 && trace.name !== \"Oil [BO]\") ? \"legendonly\" : trace.visible;\r\n    });\r\n\r\n    const layout = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.makeLayout)([/*'Oil vs Time (BOPD)', */'Gas vs Time (MCFD)', 'Water vs Time (BWPD)', 'Total Fluid vs Time (BFPD)', 'Water Cut Percentage', 'Combined Production', 'Monthly Oil vs Time (BOPM)'][i], scale, \r\n                              (scale === 'log') ? [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 3000] : null);\r\n    Plotly.newPlot(container, traceArrays[i], layout, _layout__WEBPACK_IMPORTED_MODULE_4__.config);\r\n  });\r\n\r\n  const combo = document.getElementById('combinationCurves');\r\n  combo.on(\"plotly_relayout\", function (eventData) {\r\n    JSON.stringify(eventData);\r\n    const zoomEL = document.getElementById(\"zoomEl\");\r\n    zoomEL.innerHTML = '';\r\n    const p = document.createElement('p');\r\n    p.textContent = `Produced:`;\r\n    zoomEL.appendChild(p);\r\n\r\n    let { \"xaxis.range[0]\": xRangeStart, \"xaxis.range[1]\": xRangeEnd } = eventData;\r\n    if (!xRangeStart) { // if double-clicked\r\n      xRangeStart = site_date[site_date.length - 1];\r\n      xRangeEnd = site_date[0];\r\n    }\r\n    const xStart = xRangeStart.substring(0, 10);\r\n    const xEnd = xRangeEnd.substring(0, 10);\r\n\r\n    const startIdx = site_date.indexOf(`${xStart}T00:00:00.000Z`);\r\n    const endIdx = site_date.indexOf(`${xEnd}T00:00:00.000Z`);\r\n\r\n    if (startIdx === -1) { // zoomed where no data\r\n      return;\r\n    }\r\n    const visible_traces = JSON.parse(sessionStorage.getItem('visible_traces'));\r\n    const map = {'Gas [MCF]': site_gas, 'Oil [BO]': site_oil, 'Water [BW]': site_water, 'Total Fluid [BBLS]': total_fluid };\r\n\r\n    for (const[key,vals] of Object.entries(visible_traces)){\r\n      for (let val of vals){\r\n        const data = map[val];\r\n        console.log(`sum ${val}:>> `, (data.slice(endIdx, startIdx + 1).reduce((acc, cur) => acc + cur, 0)/1000));\r\n        const sum = (data.slice(endIdx, startIdx + 1).reduce((acc, cur) => acc + cur, 0)/1000).toFixed(1);\r\n\r\n        let chop = -5;\r\n        if (val == 'Total Fluid [MB]') chop = -4; \r\n        const unit = val.slice(chop);\r\n        let name = val.slice(0, chop);\r\n        if (val == 'Total Fluid [MB]') name = `${name} `; \r\n\r\n        const p = document.createElement('p');\r\n        p.textContent = `${name}: ${sum} ${unit}`;\r\n        p.style.fontSize = '15px';\r\n        zoomEL.appendChild(p);\r\n      }\r\n    }\r\n    zoomEL.style.visibility = \"visible\";\r\n  });\r\n\r\n  combo.on('plotly_legendclick', function(data) {\r\n    const traceIdx = data.curveNumber;\r\n    const name = combination[traceIdx].name;\r\n    let currVisible = JSON.parse(sessionStorage.visible_traces) || {\"visible_traces\": []};\r\n\r\n    if (currVisible.visible.includes(name)){\r\n      currVisible.visible = currVisible.visible.filter(el => el !== name)\r\n    }else{\r\n      currVisible.visible.push(name);\r\n    }\r\n\r\n    sessionStorage.setItem('visible_traces', JSON.stringify(currVisible));\r\n  })\r\n\r\n  document.getElementById(\"siteSelection\").focus();\r\n  document.getElementById(\"filler4\").style.display = \"none\";\r\n};\r\n\r\nconst table = (coreData) => {\r\n  const data = coreData.map(el => ([...el]))\r\n  const selectedOption = getSelectedOption(data);\r\n  const well = data.filter(i => i[0] == selectedOption);\r\n\r\n  well.forEach(w => {\r\n    w.shift();\r\n    for (let i = 0; i < 2; i++) w.pop();\r\n  });\r\n  _data__WEBPACK_IMPORTED_MODULE_3__.buildTable(well);\r\n\r\n  document.getElementById('individualTable').style.display = 'inline-block';\r\n  [/*'oilDeclineCurve,'*/ 'gasDeclineCurve', 'waterDeclineCurve', 'waterCutCurve', 'totalFluidCurve', 'combinationCurves', 'cumOilCurve', 'cumVSdailyProdCurve', 'cumVSmoProdCurve','moOilCurve'].forEach(tag => {\r\n    document.getElementById(tag).style.display = 'none'\r\n  });\r\n};\r\n\r\nconst switchActives = (event) => {\r\n  event.preventDefault();\r\n  \r\n  const target = event.target;\r\n  const parent = document.getElementById(target.id).parentNode;\r\n  const children = parent.querySelectorAll(\"*\");\r\n  \r\n  children.forEach(child => {\r\n    child.classList.remove(\"active\");\r\n  });\r\n  \r\n  target.className += \"active\";\r\n  const activeTime = document.getElementById(\"timeframes\").querySelectorAll(\".active\")[0].id.substring(4);//gives the number from the active view id\r\n  console.log('activeTime :>> ', activeTime);\r\n  curve(Number(activeTime) + 1, curveInfo);\r\n\r\n  function ddd () {\r\n    console.log(\"in ddd\");\r\n    try{\r\n      console.log(\"closing\");\r\n      document.getElementById(\"siteSelection\").blur();\r\n      console.log(\"closed..\");\r\n    }catch{\r\n      console.log(\"e\");\r\n    };\r\n  }\r\n  setTimeout(ddd,100);\r\n};\r\n\r\n\r\n\r\n\r\n//Main//\r\nconst currUid = localStorage.getItem('uid');\r\nlet region = sessionStorage.getItem('region');\r\nconsole.log('currUid :>> ', currUid);\r\n\r\nlet prodData = _data__WEBPACK_IMPORTED_MODULE_3__.dataST;\r\nlet cumlData = _data__WEBPACK_IMPORTED_MODULE_3__.dataCuml;\r\nlet MoProdDataST = _data__WEBPACK_IMPORTED_MODULE_3__.moDataST;\r\n\r\nif (region == \"et\") {\r\n  prodData = _data__WEBPACK_IMPORTED_MODULE_3__.dataET\r\n  cumlData = _data__WEBPACK_IMPORTED_MODULE_3__.dataCumlET\r\n};\r\n\r\nconst curveInfo = {\r\n  prodData: prodData,\r\n  dataCuml: cumlData,\r\n  economicsData: _data__WEBPACK_IMPORTED_MODULE_3__.econ,\r\n  payoutData: _data__WEBPACK_IMPORTED_MODULE_3__.payout,\r\n  pumpData: _data__WEBPACK_IMPORTED_MODULE_3__.pump,\r\n  MoProdDataST: MoProdDataST\r\n};\r\n\r\n['linear','logarithmic','DaysInception','Days30','Days365','Days180'].forEach(el => {\r\n  document.getElementById(el).addEventListener('click',switchActives);\r\n});\r\n\r\nconst dropdownId = '#siteSelection';\r\n_data__WEBPACK_IMPORTED_MODULE_3__.dropdown(dropdownId);\r\n\r\n(0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(dropdownId).on(\"change\", () => {\r\n  curve(localStorage.getItem('initTime'), curveInfo);\r\n});\r\n\r\n\r\ndocument.getElementById(\"table\").addEventListener('click', () => {\r\n  if ((0,_ui__WEBPACK_IMPORTED_MODULE_5__.checkActive)('table') === true) return;\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_5__.setActive)(\"table\", 'DaysInception');\r\n  table(prodData);\r\n});\r\n\r\n//store currently visible plots in sessionstorage to access in relayout event; init to only oil(page load)\r\nlet currVisible = {\"visible\":[\"Oil [BO]\"]};\r\nsessionStorage.setItem(\"visible_traces\",JSON.stringify(currVisible));\r\n\r\n//init page on load//\r\nwindow.onload = function () {\r\n  let activeTime = 'DaysInception';\r\n  if (localStorage.getItem('initTime') == 31) activeTime = 'Days30';\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_5__.setActiveTime)(activeTime);\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_5__.setActiveView)(localStorage.getItem('initScale'));\r\n  curve(localStorage.getItem('initTime'), curveInfo);\r\n}();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://prod-1/./src/js/curves.js?");

/***/ }),

/***/ "./src/js/layout.js":
/*!**************************!*\
  !*** ./src/js/layout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   layoutWbd: () => (/* binding */ layoutWbd),\n/* harmony export */   makeLayout: () => (/* binding */ makeLayout),\n/* harmony export */   makeTrace: () => (/* binding */ makeTrace)\n/* harmony export */ });\nconst makeTrace = (x, y, name, type=\"lines\", color, text, visible=true, dash) => ({\r\n    x,\r\n    y,\r\n    text,\r\n    name,\r\n    visible,\r\n    line: {\r\n        color,\r\n        dash\r\n    },\r\n    mode: type\r\n});\r\n\r\nconst makeLayout = (title, type, tickvals, ytitle, xtitle) => ({\r\n    title,\r\n    height: null,\r\n    legend: {\r\n        orientation: \"h\",\r\n            y: 1.1,\r\n            xanchor: \"center\",\r\n            x: .5,\r\n    },\r\n    yaxis: {\r\n        title: ytitle,\r\n        type: type || \"linear\",\r\n        rangemode: \"tozero\",\r\n        autorange: true,\r\n        tickformat: \"f\",\r\n        tickvals,\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n    xaxis: {\r\n        title: xtitle,\r\n        gridcolor: \"#dbdbdb\",\r\n    },\r\n});\r\n\r\nconst config = {\r\n    modeBarButtonsToRemove: [\r\n        \"sendDataToCloud\",\r\n        \"autoScale2d\",\r\n        \"hoverClosestCartesian\",\r\n        \"hoverCompareCartesian\",\r\n        \"lasso2d\",\r\n        \"zoomIn2d\",\r\n        \"zoomOut2d\",\r\n        \"toggleSpikelines\",\r\n    ],\r\n    displaylogo: false,\r\n    responsive: true,\r\n};\r\n\r\nconst layoutWbd = (max,min,minTVD,maxTVD,wellName) => ({\r\n    width: 1620,\r\n    height: 700,\r\n\r\n    margin: {\r\n        l: 0,\r\n        r: 0,\r\n        b: 0,\r\n        t: 0,\r\n    },\r\n\r\n    title: {\r\n        text: \"Drilling for \" + wellName + \", Dimmit County, TX\",\r\n        y: 0.98,\r\n    },\r\n\r\n    legend: {\r\n        x: 0.8,\r\n        y: 0.8,\r\n    },\r\n    scene: {\r\n        aspectmode: \"cube\",\r\n        xaxis: {\r\n            title: \"Easting\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n        yaxis: {\r\n            title: \"Northing\",\r\n            nticks: 8,\r\n            range: [max, min],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#f0f1f2\",\r\n            showbackground: true,\r\n\r\n        },\r\n        zaxis: {\r\n            title: \"TVD\",\r\n            nticks: 5,\r\n            range: [minTVD, maxTVD],\r\n            gridcolor: \"#8a8a8a\",\r\n            tickcolor: \"#050505\",\r\n            backgroundcolor: \"#ededed\",\r\n            showbackground: true,\r\n        },\r\n    },\r\n    \r\n});\n\n//# sourceURL=webpack://prod-1/./src/js/layout.js?");

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
/******/ 			"curves": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_firebase_app_dist_esm_index_esm_js-node_modules_firebase_auth_dist_esm_i-d0574a","vendors-node_modules_d3_src_index_js","src_js_data_js-src_js_index_js-src_js_region_js"], () => (__webpack_require__("./src/js/curves.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;