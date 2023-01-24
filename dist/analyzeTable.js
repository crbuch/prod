/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/analyzeTable.js":
/*!*****************************!*\
  !*** ./src/analyzeTable.js ***!
  \*****************************/
/***/ (() => {

eval("let region = document.getElementById(\"region\").textContent;\nd3.json(\"../data/analyze\"+region+\".json\").then((data) => {\n  tableData = data;\n  tbody = d3.select(\"tbody\")\n\n  function buildTable(tableData) {\n    tbody.html(\"\"); //clear table\n    tableData.forEach((well) => {\n      let row = tbody.append(\"tr\");\n      // loop through each value to add a cell for each of it\n      Object.values(well).forEach((val) => {\n\n        let cell = row.append(\"td\");\n        cell.text(val);\n      });\n    });\n  }; // closing forEach\n\n  //JQUERY TO ADD LINKS \n  $(document).ready(function () {\n    $(\"tr td:nth-child(1)\").each(function () { //ADD LINK TO THE FIRST CHILD OF EVERY TD, SO THE NAME OF THE WELL\n      $(this).html('<a href=\"https://cmlexploration.github.io/STprod/curves.html\">' + $(this).text() + '</a>');\n      //$(this).html('<a href=\"http://127.0.0.1:5502/curves.html\">' + $(this).text() + '</a>');\n      $(this).click(function () {\n        sessionStorage.setItem('siteSelection', $(this).text())\n        \n      })\n    });\n  });\n\n\n\n  buildTable(tableData)\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYW5hbHl6ZVRhYmxlLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEtBQUs7O0FBRUw7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHOzs7O0FBSUg7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FuYWx5emVUYWJsZS5qcz80NTIyIl0sInNvdXJjZXNDb250ZW50IjpbImxldCByZWdpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ2lvblwiKS50ZXh0Q29udGVudDtcbmQzLmpzb24oXCIuLi9kYXRhL2FuYWx5emVcIityZWdpb24rXCIuanNvblwiKS50aGVuKChkYXRhKSA9PiB7XG4gIHRhYmxlRGF0YSA9IGRhdGE7XG4gIHRib2R5ID0gZDMuc2VsZWN0KFwidGJvZHlcIilcblxuICBmdW5jdGlvbiBidWlsZFRhYmxlKHRhYmxlRGF0YSkge1xuICAgIHRib2R5Lmh0bWwoXCJcIik7IC8vY2xlYXIgdGFibGVcbiAgICB0YWJsZURhdGEuZm9yRWFjaCgod2VsbCkgPT4ge1xuICAgICAgbGV0IHJvdyA9IHRib2R5LmFwcGVuZChcInRyXCIpO1xuICAgICAgLy8gbG9vcCB0aHJvdWdoIGVhY2ggdmFsdWUgdG8gYWRkIGEgY2VsbCBmb3IgZWFjaCBvZiBpdFxuICAgICAgT2JqZWN0LnZhbHVlcyh3ZWxsKS5mb3JFYWNoKCh2YWwpID0+IHtcblxuICAgICAgICBsZXQgY2VsbCA9IHJvdy5hcHBlbmQoXCJ0ZFwiKTtcbiAgICAgICAgY2VsbC50ZXh0KHZhbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTsgLy8gY2xvc2luZyBmb3JFYWNoXG5cbiAgLy9KUVVFUlkgVE8gQUREIExJTktTIFxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJChcInRyIHRkOm50aC1jaGlsZCgxKVwiKS5lYWNoKGZ1bmN0aW9uICgpIHsgLy9BREQgTElOSyBUTyBUSEUgRklSU1QgQ0hJTEQgT0YgRVZFUlkgVEQsIFNPIFRIRSBOQU1FIE9GIFRIRSBXRUxMXG4gICAgICAkKHRoaXMpLmh0bWwoJzxhIGhyZWY9XCJodHRwczovL2NtbGV4cGxvcmF0aW9uLmdpdGh1Yi5pby9TVHByb2QvY3VydmVzLmh0bWxcIj4nICsgJCh0aGlzKS50ZXh0KCkgKyAnPC9hPicpO1xuICAgICAgLy8kKHRoaXMpLmh0bWwoJzxhIGhyZWY9XCJodHRwOi8vMTI3LjAuMC4xOjU1MDIvY3VydmVzLmh0bWxcIj4nICsgJCh0aGlzKS50ZXh0KCkgKyAnPC9hPicpO1xuICAgICAgJCh0aGlzKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3NpdGVTZWxlY3Rpb24nLCAkKHRoaXMpLnRleHQoKSlcbiAgICAgICAgXG4gICAgICB9KVxuICAgIH0pO1xuICB9KTtcblxuXG5cbiAgYnVpbGRUYWJsZSh0YWJsZURhdGEpXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/analyzeTable.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/analyzeTable.js"]();
/******/ 	
/******/ })()
;