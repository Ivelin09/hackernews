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
exports.id = "pages/api/[...catchAll]";
exports.ids = ["pages/api/[...catchAll]"];
exports.modules = {

/***/ "cookies":
/*!**************************!*\
  !*** external "cookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("http-proxy-middleware");

/***/ }),

/***/ "(api)/./pages/api/[...catchAll].js":
/*!************************************!*\
  !*** ./pages/api/[...catchAll].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-proxy-middleware */ \"http-proxy-middleware\");\n/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookies */ \"cookies\");\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst apiProxy = (0,http_proxy_middleware__WEBPACK_IMPORTED_MODULE_0__.createProxyMiddleware)({\n    target: \"http://localhost:8000\",\n    changeOrigin: true,\n    pathRewrite: {\n        [`^/api`]: \"\"\n    },\n    secure: false,\n    onProxyReq: async (proxyReq, req)=>{\n        const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_1___default())(req);\n        const accessToken = cookies.get(\"authorization\");\n        console.log(\"token\", accessToken);\n        if (accessToken) {\n            proxyReq.setHeader(\"Authorization\", `Bearer ${accessToken}`);\n        }\n    }\n});\nconst runMiddleware = (req, res, fn)=>new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\nconst handle = async (req, res)=>runMiddleware(req, res, apiProxy);\nconst config = {\n    api: {\n        externalResolver: true,\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handle);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvWy4uLmNhdGNoQWxsXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEQ7QUFDaEM7QUFFOUIsTUFBTUUsUUFBUSxHQUFHRiw0RUFBcUIsQ0FBQztJQUNyQ0csTUFBTSxFQUFFLHVCQUF1QjtJQUMvQkMsWUFBWSxFQUFFLElBQUk7SUFDbEJDLFdBQVcsRUFBRTtRQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUU7S0FBRTtJQUM5QkMsTUFBTSxFQUFFLEtBQUs7SUFDYkMsVUFBVSxFQUFFLE9BQU9DLFFBQVEsRUFBRUMsR0FBRyxHQUFLO1FBQ25DLE1BQU1DLE9BQU8sR0FBRyxJQUFJVCxnREFBTyxDQUFDUSxHQUFHLENBQUM7UUFDaEMsTUFBTUUsV0FBVyxHQUFHRCxPQUFPLENBQUNFLEdBQUcsQ0FBQyxlQUFlLENBQUM7UUFFaERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBRUgsV0FBVyxDQUFDLENBQUM7UUFFbEMsSUFBSUEsV0FBVyxFQUFFO1lBQ2ZILFFBQVEsQ0FBQ08sU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRUosV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlEO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsTUFBTUssYUFBYSxHQUFHLENBQUNQLEdBQUcsRUFBRVEsR0FBRyxFQUFFQyxFQUFFLEdBQ2pDLElBQUlDLE9BQU8sQ0FBQyxDQUFDQyxPQUFPLEVBQUVDLE1BQU0sR0FBSztRQUMvQkgsRUFBRSxDQUFDVCxHQUFHLEVBQUVRLEdBQUcsRUFBRSxDQUFDSyxNQUFNLEdBQUs7WUFDdkIsSUFBSUEsTUFBTSxZQUFZQyxLQUFLLEVBQUU7Z0JBQzNCLE9BQU9GLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUM7YUFDdkI7WUFFRCxPQUFPRixPQUFPLENBQUNFLE1BQU0sQ0FBQyxDQUFDO1NBQ3hCLENBQUMsQ0FBQztLQUNKLENBQUM7QUFFSixNQUFNRSxNQUFNLEdBQUcsT0FBT2YsR0FBRyxFQUFFUSxHQUFHLEdBQUtELGFBQWEsQ0FBQ1AsR0FBRyxFQUFFUSxHQUFHLEVBQUVmLFFBQVEsQ0FBQztBQUU3RCxNQUFNdUIsTUFBTSxHQUFHO0lBQ3BCQyxHQUFHLEVBQUU7UUFDSEMsZ0JBQWdCLEVBQUUsSUFBSTtRQUN0QkMsVUFBVSxFQUFFLEtBQUs7S0FDbEI7Q0FDRixDQUFDO0FBRUYsaUVBQWVKLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3BhZ2VzL2FwaS9bLi4uY2F0Y2hBbGxdLmpzPzExMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUHJveHlNaWRkbGV3YXJlIH0gZnJvbSBcImh0dHAtcHJveHktbWlkZGxld2FyZVwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnY29va2llcyc7XG5cbmNvbnN0IGFwaVByb3h5ID0gY3JlYXRlUHJveHlNaWRkbGV3YXJlKHtcbiAgdGFyZ2V0OiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiLFxuICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gIHBhdGhSZXdyaXRlOiB7IFtgXi9hcGlgXTogXCJcIiB9LFxuICBzZWN1cmU6IGZhbHNlLFxuICBvblByb3h5UmVxOiBhc3luYyAocHJveHlSZXEsIHJlcSkgPT4ge1xuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcyhyZXEpOyBcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGNvb2tpZXMuZ2V0KFwiYXV0aG9yaXphdGlvblwiKTtcblxuICAgIGNvbnNvbGUubG9nKFwidG9rZW5cIiwgYWNjZXNzVG9rZW4pO1xuICAgIFxuICAgIGlmIChhY2Nlc3NUb2tlbikge1xuICAgICAgcHJveHlSZXEuc2V0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCk7XG4gICAgfVxuICB9LFxufSk7XG5cbmNvbnN0IHJ1bk1pZGRsZXdhcmUgPSAocmVxLCByZXMsIGZuKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZm4ocmVxLCByZXMsIChyZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdCk7XG4gICAgfSk7XG4gIH0pO1xuXG5jb25zdCBoYW5kbGUgPSBhc3luYyAocmVxLCByZXMpID0+IHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGFwaVByb3h5KTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgZXh0ZXJuYWxSZXNvbHZlcjogdHJ1ZSxcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVQcm94eU1pZGRsZXdhcmUiLCJDb29raWVzIiwiYXBpUHJveHkiLCJ0YXJnZXQiLCJjaGFuZ2VPcmlnaW4iLCJwYXRoUmV3cml0ZSIsInNlY3VyZSIsIm9uUHJveHlSZXEiLCJwcm94eVJlcSIsInJlcSIsImNvb2tpZXMiLCJhY2Nlc3NUb2tlbiIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJzZXRIZWFkZXIiLCJydW5NaWRkbGV3YXJlIiwicmVzIiwiZm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwiaGFuZGxlIiwiY29uZmlnIiwiYXBpIiwiZXh0ZXJuYWxSZXNvbHZlciIsImJvZHlQYXJzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/[...catchAll].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/[...catchAll].js"));
module.exports = __webpack_exports__;

})();