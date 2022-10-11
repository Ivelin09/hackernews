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
exports.id = "pages/blog/[pid]";
exports.ids = ["pages/blog/[pid]"];
exports.modules = {

/***/ "./pages/blog/[pid].js":
/*!*****************************!*\
  !*** ./pages/blog/[pid].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Post = ({ blog  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { pid , id  } = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    href: \"/friends.css\",\n                    rel: \"stylesheet\"\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: blog.title\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"description\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: blog.description\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\nasync function getServerSideProps(context) {\n    const id = context.query.id;\n    console.log(id);\n    const response = await fetch(\"http://localhost:3000/api/blog\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            blogId: id\n        })\n    }).then((res)=>res.json());\n    const blog = response.message;\n    return {\n        props: {\n            blog\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1twaWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDWDtBQUU3QixNQUFNRSxJQUFJLEdBQUcsQ0FBQyxFQUFFQyxJQUFJLEdBQUUsR0FBSztJQUN6QixNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQUFFSyxHQUFHLEdBQUVDLEVBQUUsR0FBQyxHQUFHRixNQUFNLENBQUNHLEtBQUs7SUFFL0IscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDUCxrREFBSTswQkFDSCw0RUFBQ1EsTUFBSTtvQkFBQ0MsSUFBSSxFQUFDLGNBQWM7b0JBQUNDLEdBQUcsRUFBQyxZQUFZOzs7Ozs2QkFBRTs7Ozs7eUJBQ3ZDOzBCQUNQLDhEQUFDQyxJQUFFOzBCQUFFVCxJQUFJLENBQUNVLEtBQUs7Ozs7O3lCQUFNOzBCQUNyQiw4REFBQ0wsS0FBRztnQkFBQ00sU0FBUyxFQUFDLGFBQWE7MEJBQzFCLDRFQUFDQyxHQUFDOzhCQUFFWixJQUFJLENBQUNhLFdBQVc7Ozs7OzZCQUFLOzs7Ozt5QkFDckI7Ozs7OztpQkFDRixDQUNQO0NBQ0Y7QUFFTSxlQUFlQyxrQkFBa0IsQ0FBQ0MsT0FBTyxFQUFFO0lBQ2hELE1BQU1aLEVBQUUsR0FBR1ksT0FBTyxDQUFDWCxLQUFLLENBQUNELEVBQUU7SUFDM0JhLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZCxFQUFFLENBQUMsQ0FBQztJQUVoQixNQUFNZSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGdDQUFnQyxFQUFFO1FBQzdEQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO1FBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7WUFBQ0MsTUFBTSxFQUFFdEIsRUFBRTtTQUFDLENBQUM7S0FDbkMsQ0FBQyxDQUFDdUIsSUFBSSxDQUFDLENBQUNDLEdBQUcsR0FBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUUsQ0FBQztJQUU1QixNQUFNNUIsSUFBSSxHQUFHa0IsUUFBUSxDQUFDVyxPQUFPO0lBRTdCLE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQ0w5QixJQUFJO1NBQ0w7S0FDRjtDQUNGO0FBRUQsaUVBQWVELElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9ibG9nL1twaWRdLmpzPzM2NGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3QgUG9zdCA9ICh7IGJsb2cgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IHBpZCwgaWR9ID0gcm91dGVyLnF1ZXJ5XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvZnJpZW5kcy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxPntibG9nLnRpdGxlfTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgIDxwPntibG9nLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBpZCA9IGNvbnRleHQucXVlcnkuaWQ7XG4gIGNvbnNvbGUubG9nKGlkKTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ibG9nXCIsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2Jsb2dJZDogaWR9KVxuICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIGNvbnN0IGJsb2cgPSByZXNwb25zZS5tZXNzYWdlO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGJsb2dcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkhlYWQiLCJQb3N0IiwiYmxvZyIsInJvdXRlciIsInBpZCIsImlkIiwicXVlcnkiLCJkaXYiLCJsaW5rIiwiaHJlZiIsInJlbCIsImgxIiwidGl0bGUiLCJjbGFzc05hbWUiLCJwIiwiZGVzY3JpcHRpb24iLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJibG9nSWQiLCJ0aGVuIiwicmVzIiwianNvbiIsIm1lc3NhZ2UiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[pid].js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[pid].js"));
module.exports = __webpack_exports__;

})();