"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Home() {\n    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const data = {\n            first: event.target.first.value,\n            last: event.target.last.value\n        };\n        console.log(JSON.stringify(data));\n        const response = await fetch(\"/api/register\", {\n            method: \"POST\",\n            body: JSON.stringify(data),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((res)=>res.json());\n        setMessage(response.message);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"block\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                message ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: message\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/Desktop/hackernews/front-end/pages/register.js\",\n                    lineNumber: 29,\n                    columnNumber: 26\n                }, this) : \"\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"first\",\n                    children: \"First Name\"\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/Desktop/hackernews/front-end/pages/register.js\",\n                    lineNumber: 30,\n                    columnNumber: 15\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"first\",\n                    name: \"first\",\n                    variant: \"outlined\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/Desktop/hackernews/front-end/pages/register.js\",\n                    lineNumber: 31,\n                    columnNumber: 15\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"last\",\n                    children: \"Last Name\"\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/Desktop/hackernews/front-end/pages/register.js\",\n                    lineNumber: 33,\n                    columnNumber: 15\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"last\",\n                    name: \"last\",\n                    variant: \"outlined\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/Desktop/hackernews/front-end/pages/register.js\",\n                    lineNumber: 34,\n                    columnNumber: 15\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        className: \"btn\",\n                        type: \"submit\",\n                        variant: \"outlined\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/Desktop/hackernews/front-end/pages/register.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/Desktop/hackernews/front-end/pages/register.js\",\n                    lineNumber: 36,\n                    columnNumber: 15\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ivelin/Desktop/hackernews/front-end/pages/register.js\",\n            lineNumber: 28,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ivelin/Desktop/hackernews/front-end/pages/register.js\",\n        lineNumber: 27,\n        columnNumber: 7\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBcUU7QUFDN0I7QUFFekIsU0FBU00sSUFBSSxHQUFHO0lBQzdCLE1BQU0sS0FBQ0MsT0FBTyxNQUFFQyxVQUFVLE1BQUlILCtDQUFRLEVBQUU7SUFDdEMsTUFBTUksWUFBWSxHQUFHLE9BQU9DLEtBQUssR0FBSztRQUNwQ0EsS0FBSyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixNQUFNQyxJQUFJLEdBQUc7WUFDWEMsS0FBSyxFQUFFSCxLQUFLLENBQUNJLE1BQU0sQ0FBQ0QsS0FBSyxDQUFDRSxLQUFLO1lBQy9CQyxJQUFJLEVBQUVOLEtBQUssQ0FBQ0ksTUFBTSxDQUFDRSxJQUFJLENBQUNELEtBQUs7U0FDOUI7UUFFREUsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUixJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRWxDLE1BQU1TLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsZUFBZSxFQUFFO1lBQzVDQyxNQUFNLEVBQUUsTUFBTTtZQUNkQyxJQUFJLEVBQUVMLElBQUksQ0FBQ0MsU0FBUyxDQUFDUixJQUFJLENBQUM7WUFDMUJhLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1NBQ0YsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsR0FBRyxHQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRSxDQUFDO1FBRTVCcEIsVUFBVSxDQUFDYSxRQUFRLENBQUNkLE9BQU8sQ0FBQyxDQUFDO0tBQzlCO0lBQ0QscUJBQ0UsOERBQUNzQixLQUFHO1FBQUNDLFNBQVMsRUFBQyxPQUFPO2tCQUNsQiw0RUFBQ0MsTUFBSTtZQUFDQyxRQUFRLEVBQUV2QixZQUFZOztnQkFDdkJGLE9BQU8saUJBQUcsOERBQUMwQixHQUFDOzhCQUFFMUIsT0FBTzs7Ozs7d0JBQUssR0FBRyxFQUFFOzhCQUNoQyw4REFBQzJCLE9BQUs7b0JBQUNDLE9BQU8sRUFBQyxPQUFPOzhCQUFDLFlBQVU7Ozs7O3dCQUFROzhCQUN6Qyw4REFBQ0MsT0FBSztvQkFBQ0MsSUFBSSxFQUFDLE1BQU07b0JBQUNDLEVBQUUsRUFBQyxPQUFPO29CQUFDQyxJQUFJLEVBQUMsT0FBTztvQkFBQ0MsT0FBTyxFQUFDLFVBQVU7b0JBQUNDLFFBQVE7Ozs7O3dCQUFHOzhCQUV6RSw4REFBQ1AsT0FBSztvQkFBQ0MsT0FBTyxFQUFDLE1BQU07OEJBQUMsV0FBUzs7Ozs7d0JBQVE7OEJBQ3ZDLDhEQUFDQyxPQUFLO29CQUFDQyxJQUFJLEVBQUMsTUFBTTtvQkFBQ0MsRUFBRSxFQUFDLE1BQU07b0JBQUNDLElBQUksRUFBQyxNQUFNO29CQUFDQyxPQUFPLEVBQUMsVUFBVTtvQkFBQ0MsUUFBUTs7Ozs7d0JBQUc7OEJBRXZFLDhEQUFDWixLQUFHOzhCQUNGLDRFQUFDN0IsaURBQU07d0JBQUM4QixTQUFTLEVBQUMsS0FBSzt3QkFBQ08sSUFBSSxFQUFDLFFBQVE7d0JBQUNHLE9BQU8sRUFBQyxVQUFVO2tDQUFDLFFBQU07Ozs7OzRCQUFTOzs7Ozt3QkFDcEU7Ozs7OztnQkFDSDs7Ozs7WUFFTCxDQUNQO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9yZWdpc3Rlci5qcz9hMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgVGV4dEZpZWxkLCBCb3gsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgZmlyc3Q6IGV2ZW50LnRhcmdldC5maXJzdC52YWx1ZSxcbiAgICAgICAgbGFzdDogZXZlbnQudGFyZ2V0Lmxhc3QudmFsdWVcbiAgICAgIH07XG5cbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvcmVnaXN0ZXJcIiwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9XG4gICAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gICAgICBzZXRNZXNzYWdlKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICB7bWVzc2FnZSA/IDxwPnttZXNzYWdlfTwvcD4gOiBcIlwifVxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0XCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZmlyc3RcIiBuYW1lPVwiZmlyc3RcIiB2YXJpYW50PVwib3V0bGluZWRcIiByZXF1aXJlZCAvPlxuXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdFwiPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibGFzdFwiIG5hbWU9XCJsYXN0XCIgdmFyaWFudD1cIm91dGxpbmVkXCIgcmVxdWlyZWQgLz5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJUZXh0RmllbGQiLCJCb3giLCJUaGVtZVByb3ZpZGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiZmlyc3QiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxhc3QiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwicCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsInZhcmlhbnQiLCJyZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/register.js"));
module.exports = __webpack_exports__;

})();