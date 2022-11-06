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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loginPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction loginPage() {\n    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const { 0: isSuccess , 1: setStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const data = {\n            username: event.target.username.value,\n            password: event.target.password.value\n        };\n        const response = await fetch(\"/api/login\", {\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            method: \"POST\",\n            body: JSON.stringify(data)\n        }).then((res)=>res.json());\n        console.log(response);\n        if (response.code != 200) setStatus(false);\n        else setStatus(true);\n        setMessage(response.message);\n        console.log(isSuccess);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"block\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"/register.css\"\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    message ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: isSuccess ? \"success\" : \"failure\",\n                        children: message\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n                        lineNumber: 37,\n                        columnNumber: 28\n                    }, this) : \"\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"first\",\n                        children: \"Username\"\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"username\",\n                        name: \"username\",\n                        variant: \"outlined\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"last\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"password\",\n                        name: \"password\",\n                        variant: \"outlined\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            className: \"btn\",\n                            type: \"submit\",\n                            variant: \"outlined\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n                            lineNumber: 45,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpblBhZ2UoKSB7XG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbaXNTdWNjZXNzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IGV2ZW50LnRhcmdldC51c2VybmFtZS52YWx1ZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBldmVudC50YXJnZXQucGFzc3dvcmQudmFsdWVcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ2luJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgaWYocmVzcG9uc2UuY29kZSAhPSAyMDApXG4gICAgICAgICAgICBzZXRTdGF0dXMoZmFsc2UpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZXRTdGF0dXModHJ1ZSk7XG4gICAgICAgIHNldE1lc3NhZ2UocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGlzU3VjY2Vzcyk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3JlZ2lzdGVyLmNzc1wiPjwvbGluaz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIHttZXNzYWdlID8gPHAgY2xhc3NOYW1lPXtpc1N1Y2Nlc3MgPyBcInN1Y2Nlc3NcIiA6IFwiZmFpbHVyZVwifT57bWVzc2FnZX08L3A+IDogXCJcIn1cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0XCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiB2YXJpYW50PVwib3V0bGluZWRcIiByZXF1aXJlZCAvPlxuICBcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3RcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHJlcXVpcmVkIC8+XG4gIFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwib3V0bGluZWRcIj5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxufSJdLCJuYW1lcyI6WyJCdXR0b24iLCJ1c2VTdGF0ZSIsIkhlYWQiLCJsb2dpblBhZ2UiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImlzU3VjY2VzcyIsInNldFN0YXR1cyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwidXNlcm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwicmVzcG9uc2UiLCJmZXRjaCIsImhlYWRlcnMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNvZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImZvcm0iLCJvblN1Ym1pdCIsInAiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJ2YXJpYW50IiwicmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();