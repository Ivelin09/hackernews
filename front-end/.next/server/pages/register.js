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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home() {\n    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const data = {\n            username: event.target.username.value,\n            password: event.target.password.value\n        };\n        const response = await fetch(\"/api/register\", {\n            method: \"POST\",\n            body: JSON.stringify(data),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            credentials: \"include\"\n        }).then((res)=>res.json());\n        setMessage(response.message);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"block\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"/register.css\"\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                lineNumber: 28,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    message ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"message\",\n                        children: message\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                        lineNumber: 32,\n                        columnNumber: 26\n                    }, this) : \"\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"first\",\n                        children: \"Username\"\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                        lineNumber: 33,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"username\",\n                        name: \"username\",\n                        variant: \"outlined\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                        lineNumber: 34,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"last\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                        lineNumber: 36,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"password\",\n                        name: \"password\",\n                        variant: \"outlined\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                        lineNumber: 37,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            className: \"btn\",\n                            type: \"submit\",\n                            variant: \"outlined\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                            lineNumber: 40,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                        lineNumber: 39,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/register.js\",\n        lineNumber: 27,\n        columnNumber: 7\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFzQztBQUNFO0FBQ1g7QUFFZCxTQUFTSSxJQUFJLEdBQUc7SUFDN0IsTUFBTSxLQUFDQyxPQUFPLE1BQUVDLFVBQVUsTUFBSUosK0NBQVEsRUFBRTtJQUN0QyxNQUFNSyxZQUFZLEdBQUcsT0FBT0MsS0FBSyxHQUFLO1FBQ3BDQSxLQUFLLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLE1BQU1DLElBQUksR0FBRztZQUNYQyxRQUFRLEVBQUVILEtBQUssQ0FBQ0ksTUFBTSxDQUFDRCxRQUFRLENBQUNFLEtBQUs7WUFDckNDLFFBQVEsRUFBRU4sS0FBSyxDQUFDSSxNQUFNLENBQUNFLFFBQVEsQ0FBQ0QsS0FBSztTQUN0QztRQUVELE1BQU1FLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsZUFBZSxFQUFFO1lBQzVDQyxNQUFNLEVBQUUsTUFBTTtZQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDVixJQUFJLENBQUM7WUFDMUJXLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0RDLFdBQVcsRUFBRSxTQUFTO1NBQ3ZCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLEdBQUcsR0FBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUUsQ0FBQztRQUU1Qm5CLFVBQVUsQ0FBQ1MsUUFBUSxDQUFDVixPQUFPLENBQUMsQ0FBQztLQUM5QjtJQUNELHFCQUNFLDhEQUFDcUIsS0FBRztRQUFDQyxTQUFTLEVBQUMsT0FBTzs7MEJBQ2xCLDhEQUFDeEIsa0RBQUk7MEJBQ0gsNEVBQUN5QixNQUFJO29CQUFDQyxHQUFHLEVBQUMsWUFBWTtvQkFBQ0MsSUFBSSxFQUFDLGVBQWU7Ozs7O3dCQUFROzs7OztvQkFDOUM7MEJBQ1AsOERBQUNDLE1BQUk7Z0JBQUNDLFFBQVEsRUFBRXpCLFlBQVk7O29CQUN2QkYsT0FBTyxpQkFBRyw4REFBQzRCLEdBQUM7d0JBQUNOLFNBQVMsRUFBQyxTQUFTO2tDQUFFdEIsT0FBTzs7Ozs7NEJBQUssR0FBRyxFQUFFO2tDQUNwRCw4REFBQzZCLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxPQUFPO2tDQUFDLFVBQVE7Ozs7OzRCQUFRO2tDQUN2Qyw4REFBQ0MsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE1BQU07d0JBQUNDLEVBQUUsRUFBQyxVQUFVO3dCQUFDQyxJQUFJLEVBQUMsVUFBVTt3QkFBQ0MsT0FBTyxFQUFDLFVBQVU7d0JBQUNDLFFBQVE7Ozs7OzRCQUFHO2tDQUUvRSw4REFBQ1AsT0FBSzt3QkFBQ0MsT0FBTyxFQUFDLE1BQU07a0NBQUMsVUFBUTs7Ozs7NEJBQVE7a0NBQ3RDLDhEQUFDQyxPQUFLO3dCQUFDQyxJQUFJLEVBQUMsTUFBTTt3QkFBQ0MsRUFBRSxFQUFDLFVBQVU7d0JBQUNDLElBQUksRUFBQyxVQUFVO3dCQUFDQyxPQUFPLEVBQUMsVUFBVTt3QkFBQ0MsUUFBUTs7Ozs7NEJBQUc7a0NBRS9FLDhEQUFDZixLQUFHO2tDQUNGLDRFQUFDMUIsaURBQU07NEJBQUMyQixTQUFTLEVBQUMsS0FBSzs0QkFBQ1UsSUFBSSxFQUFDLFFBQVE7NEJBQUNHLE9BQU8sRUFBQyxVQUFVO3NDQUFDLFFBQU07Ozs7O2dDQUFTOzs7Ozs0QkFDcEU7Ozs7OztvQkFDSDs7Ozs7O1lBRUwsQ0FDUDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vcGFnZXMvcmVnaXN0ZXIuanM/YTA5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHVzZXJuYW1lOiBldmVudC50YXJnZXQudXNlcm5hbWUudmFsdWUsXG4gICAgICAgIHBhc3N3b3JkOiBldmVudC50YXJnZXQucGFzc3dvcmQudmFsdWVcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3JlZ2lzdGVyXCIsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICAgICAgc2V0TWVzc2FnZShyZXNwb25zZS5tZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3JlZ2lzdGVyLmNzc1wiPjwvbGluaz5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgIHttZXNzYWdlID8gPHAgY2xhc3NOYW1lPVwibWVzc2FnZVwiPnttZXNzYWdlfTwvcD4gOiBcIlwifVxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0XCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgcmVxdWlyZWQgLz5cblxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3RcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YXJpYW50PVwib3V0bGluZWRcIiByZXF1aXJlZCAvPlxuXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cIm91dGxpbmVkXCI+U3VibWl0PC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiSG9tZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJ1c2VybmFtZSIsInRhcmdldCIsInZhbHVlIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwianNvbiIsImRpdiIsImNsYXNzTmFtZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiZm9ybSIsIm9uU3VibWl0IiwicCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsInZhcmlhbnQiLCJyZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.js\n");

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