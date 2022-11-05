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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home() {\n    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const data = {\n            username: event.target.username.value,\n            password: event.target.password.value\n        };\n        const response = fetch(\"/api/register\", {\n            method: \"POST\",\n            body: JSON.stringify(data),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        setMessage(response.message);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"block\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"/register.css\"\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                lineNumber: 28,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    message ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"message\",\n                        children: message\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                        lineNumber: 32,\n                        columnNumber: 26\n                    }, this) : \"\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"first\",\n                        children: \"Username\"\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                        lineNumber: 33,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"username\",\n                        name: \"username\",\n                        variant: \"outlined\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                        lineNumber: 34,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"last\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                        lineNumber: 36,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"password\",\n                        name: \"password\",\n                        variant: \"outlined\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                        lineNumber: 37,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            className: \"btn\",\n                            type: \"submit\",\n                            variant: \"outlined\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                            lineNumber: 40,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                        lineNumber: 39,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n        lineNumber: 27,\n        columnNumber: 7\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFzQztBQUNFO0FBQ1g7QUFFZCxTQUFTSSxJQUFJLEdBQUc7SUFDN0IsTUFBTSxLQUFDQyxPQUFPLE1BQUVDLFVBQVUsTUFBSUosK0NBQVEsRUFBRTtJQUN0QyxNQUFNSyxZQUFZLEdBQUcsT0FBT0MsS0FBSyxHQUFLO1FBQ3BDQSxLQUFLLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLE1BQU1DLElBQUksR0FBRztZQUNYQyxRQUFRLEVBQUVILEtBQUssQ0FBQ0ksTUFBTSxDQUFDRCxRQUFRLENBQUNFLEtBQUs7WUFDckNDLFFBQVEsRUFBRU4sS0FBSyxDQUFDSSxNQUFNLENBQUNFLFFBQVEsQ0FBQ0QsS0FBSztTQUN0QztRQUVELE1BQU1FLFFBQVEsR0FBR0MsS0FBSyxDQUFDLGVBQWUsRUFBRTtZQUN0Q0MsTUFBTSxFQUFFLE1BQU07WUFDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1YsSUFBSSxDQUFDO1lBQzFCVyxPQUFPLEVBQUU7Z0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjthQUNuQztTQUNGLENBQUM7UUFFRmYsVUFBVSxDQUFDUyxRQUFRLENBQUNWLE9BQU8sQ0FBQyxDQUFDO0tBRTlCO0lBQ0QscUJBQ0UsOERBQUNpQixLQUFHO1FBQUNDLFNBQVMsRUFBQyxPQUFPOzswQkFDbEIsOERBQUNwQixrREFBSTswQkFDSCw0RUFBQ3FCLE1BQUk7b0JBQUNDLEdBQUcsRUFBQyxZQUFZO29CQUFDQyxJQUFJLEVBQUMsZUFBZTs7Ozs7d0JBQVE7Ozs7O29CQUM5QzswQkFDUCw4REFBQ0MsTUFBSTtnQkFBQ0MsUUFBUSxFQUFFckIsWUFBWTs7b0JBQ3ZCRixPQUFPLGlCQUFHLDhEQUFDd0IsR0FBQzt3QkFBQ04sU0FBUyxFQUFDLFNBQVM7a0NBQUVsQixPQUFPOzs7Ozs0QkFBSyxHQUFHLEVBQUU7a0NBQ3BELDhEQUFDeUIsT0FBSzt3QkFBQ0MsT0FBTyxFQUFDLE9BQU87a0NBQUMsVUFBUTs7Ozs7NEJBQVE7a0NBQ3ZDLDhEQUFDQyxPQUFLO3dCQUFDQyxJQUFJLEVBQUMsTUFBTTt3QkFBQ0MsRUFBRSxFQUFDLFVBQVU7d0JBQUNDLElBQUksRUFBQyxVQUFVO3dCQUFDQyxPQUFPLEVBQUMsVUFBVTt3QkFBQ0MsUUFBUTs7Ozs7NEJBQUc7a0NBRS9FLDhEQUFDUCxPQUFLO3dCQUFDQyxPQUFPLEVBQUMsTUFBTTtrQ0FBQyxVQUFROzs7Ozs0QkFBUTtrQ0FDdEMsOERBQUNDLE9BQUs7d0JBQUNDLElBQUksRUFBQyxNQUFNO3dCQUFDQyxFQUFFLEVBQUMsVUFBVTt3QkFBQ0MsSUFBSSxFQUFDLFVBQVU7d0JBQUNDLE9BQU8sRUFBQyxVQUFVO3dCQUFDQyxRQUFROzs7Ozs0QkFBRztrQ0FFL0UsOERBQUNmLEtBQUc7a0NBQ0YsNEVBQUN0QixpREFBTTs0QkFBQ3VCLFNBQVMsRUFBQyxLQUFLOzRCQUFDVSxJQUFJLEVBQUMsUUFBUTs0QkFBQ0csT0FBTyxFQUFDLFVBQVU7c0NBQUMsUUFBTTs7Ozs7Z0NBQVM7Ozs7OzRCQUNwRTs7Ozs7O29CQUNIOzs7Ozs7WUFFTCxDQUNQO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9yZWdpc3Rlci5qcz9hMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdXNlcm5hbWU6IGV2ZW50LnRhcmdldC51c2VybmFtZS52YWx1ZSxcbiAgICAgICAgcGFzc3dvcmQ6IGV2ZW50LnRhcmdldC5wYXNzd29yZC52YWx1ZVxuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaChcIi9hcGkvcmVnaXN0ZXJcIiwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc2V0TWVzc2FnZShyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgIFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvcmVnaXN0ZXIuY3NzXCI+PC9saW5rPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAge21lc3NhZ2UgPyA8cCBjbGFzc05hbWU9XCJtZXNzYWdlXCI+e21lc3NhZ2V9PC9wPiA6IFwiXCJ9XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3RcIj5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiB2YXJpYW50PVwib3V0bGluZWRcIiByZXF1aXJlZCAvPlxuXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHJlcXVpcmVkIC8+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwib3V0bGluZWRcIj5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuXG4gICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJIb21lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInVzZXJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImZvcm0iLCJvblN1Ym1pdCIsInAiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJ2YXJpYW50IiwicmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/register.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/register.js"));
module.exports = __webpack_exports__;

})();