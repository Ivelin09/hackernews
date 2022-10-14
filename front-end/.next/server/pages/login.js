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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loginPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction loginPage() {\n    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const { 0: isSuccess , 1: setStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const data = {\n            username: event.target.username.value,\n            password: event.target.password.value\n        };\n        const response = await fetch(\"/api/login\", {\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            method: \"POST\",\n            body: JSON.stringify(data)\n        }).then((res)=>res.json());\n        console.log(response);\n        if (response.code != 200) setStatus(false);\n        else setStatus(true);\n        setMessage(response.message);\n        console.log(isSuccess);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"block\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                message ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: isSuccess ? \"success\" : \"failure\",\n                    children: message\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n                    lineNumber: 33,\n                    columnNumber: 28\n                }, this) : \"\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"first\",\n                    children: \"Username\"\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"username\",\n                    name: \"username\",\n                    variant: \"outlined\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"last\",\n                    children: \"Password\"\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"password\",\n                    name: \"password\",\n                    variant: \"outlined\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        className: \"btn\",\n                        type: \"submit\",\n                        variant: \"outlined\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n                        lineNumber: 41,\n                        columnNumber: 19\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/login.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBc0M7QUFDTjtBQUVqQixTQUFTRSxTQUFTLEdBQUc7SUFDaEMsTUFBTSxLQUFDQyxPQUFPLE1BQUVDLFVBQVUsTUFBSUgsK0NBQVEsRUFBRTtJQUN4QyxNQUFNLEtBQUNJLFNBQVMsTUFBRUMsU0FBUyxNQUFJTCwrQ0FBUSxFQUFFO0lBQ3pDLE1BQU1NLFlBQVksR0FBRyxPQUFPQyxLQUFLLEdBQUs7UUFDbENBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFFdkIsTUFBTUMsSUFBSSxHQUFHO1lBQ1RDLFFBQVEsRUFBRUgsS0FBSyxDQUFDSSxNQUFNLENBQUNELFFBQVEsQ0FBQ0UsS0FBSztZQUNyQ0MsUUFBUSxFQUFFTixLQUFLLENBQUNJLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDRCxLQUFLO1NBQ3hDO1FBRUQsTUFBTUUsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxZQUFZLEVBQUU7WUFDdkNDLE9BQU8sRUFBRTtnQkFDTCxjQUFjLEVBQUUsa0JBQWtCO2FBQ3JDO1lBQ0RDLE1BQU0sRUFBRSxNQUFNO1lBQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNYLElBQUksQ0FBQztTQUM3QixDQUFDLENBQUNZLElBQUksQ0FBQyxDQUFDQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7UUFDNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxRQUFRLENBQUMsQ0FBQztRQUN0QixJQUFHQSxRQUFRLENBQUNZLElBQUksSUFBSSxHQUFHLEVBQ25CckIsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBRWpCQSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEJGLFVBQVUsQ0FBQ1csUUFBUSxDQUFDWixPQUFPLENBQUMsQ0FBQztRQUM3QnNCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDckIsU0FBUyxDQUFDLENBQUM7S0FDMUI7SUFDRCxxQkFDSSw4REFBQ3VCLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLE9BQU87a0JBQ2xCLDRFQUFDQyxNQUFJO1lBQUNDLFFBQVEsRUFBRXhCLFlBQVk7O2dCQUN2QkosT0FBTyxpQkFBRyw4REFBQzZCLEdBQUM7b0JBQUNILFNBQVMsRUFBRXhCLFNBQVMsR0FBRyxTQUFTLEdBQUcsU0FBUzs4QkFBR0YsT0FBTzs7Ozs7d0JBQUssR0FBRyxFQUFFOzhCQUM5RSw4REFBQzhCLE9BQUs7b0JBQUNDLE9BQU8sRUFBQyxPQUFPOzhCQUFDLFVBQVE7Ozs7O3dCQUFROzhCQUN2Qyw4REFBQ0MsT0FBSztvQkFBQ0MsSUFBSSxFQUFDLE1BQU07b0JBQUNDLEVBQUUsRUFBQyxVQUFVO29CQUFDQyxJQUFJLEVBQUMsVUFBVTtvQkFBQ0MsT0FBTyxFQUFDLFVBQVU7b0JBQUNDLFFBQVE7Ozs7O3dCQUFHOzhCQUUvRSw4REFBQ1AsT0FBSztvQkFBQ0MsT0FBTyxFQUFDLE1BQU07OEJBQUMsVUFBUTs7Ozs7d0JBQVE7OEJBQ3RDLDhEQUFDQyxPQUFLO29CQUFDQyxJQUFJLEVBQUMsTUFBTTtvQkFBQ0MsRUFBRSxFQUFDLFVBQVU7b0JBQUNDLElBQUksRUFBQyxVQUFVO29CQUFDQyxPQUFPLEVBQUMsVUFBVTtvQkFBQ0MsUUFBUTs7Ozs7d0JBQUc7OEJBRS9FLDhEQUFDWixLQUFHOzhCQUNGLDRFQUFDNUIsaURBQU07d0JBQUM2QixTQUFTLEVBQUMsS0FBSzt3QkFBQ08sSUFBSSxFQUFDLFFBQVE7d0JBQUNHLE9BQU8sRUFBQyxVQUFVO2tDQUFDLFFBQU07Ozs7OzRCQUFTOzs7Ozt3QkFDcEU7Ozs7OztnQkFDSDs7Ozs7WUFFTCxDQUNQO0NBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpblBhZ2UoKSB7XG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbaXNTdWNjZXNzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IGV2ZW50LnRhcmdldC51c2VybmFtZS52YWx1ZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBldmVudC50YXJnZXQucGFzc3dvcmQudmFsdWVcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ2luJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBpZihyZXNwb25zZS5jb2RlICE9IDIwMClcbiAgICAgICAgICAgIHNldFN0YXR1cyhmYWxzZSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHNldFN0YXR1cyh0cnVlKTtcbiAgICAgICAgc2V0TWVzc2FnZShyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgY29uc29sZS5sb2coaXNTdWNjZXNzKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAge21lc3NhZ2UgPyA8cCBjbGFzc05hbWU9e2lzU3VjY2VzcyA/IFwic3VjY2Vzc1wiIDogXCJmYWlsdXJlXCJ9PnttZXNzYWdlfTwvcD4gOiBcIlwifVxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3RcIj5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHJlcXVpcmVkIC8+XG4gIFxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgcmVxdWlyZWQgLz5cbiAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICBcbiAgICAgICAgPC9kaXY+XG4gICAgICApXG59Il0sIm5hbWVzIjpbIkJ1dHRvbiIsInVzZVN0YXRlIiwibG9naW5QYWdlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJpc1N1Y2Nlc3MiLCJzZXRTdGF0dXMiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInVzZXJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJoZWFkZXJzIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwicCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsInZhcmlhbnQiLCJyZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();