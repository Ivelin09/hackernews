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
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
exports.modules = {

/***/ "@mui/utils/getDisplayName":
/*!********************************************!*\
  !*** external "@mui/utils/getDisplayName" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/getDisplayName");

/***/ }),

/***/ "cookies":
/*!**************************!*\
  !*** external "cookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ "(api)/./auth/authHandler.js":
/*!*****************************!*\
  !*** ./auth/authHandler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ authHandler)\n/* harmony export */ });\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookies */ \"cookies\");\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function authHandler(endpoint, req, res) {\n    console.log(\"http://localhost:8000\");\n    const response = await fetch(\"http://localhost:8000\" + endpoint, {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        credentials: \"include\",\n        body: JSON.stringify(req.body)\n    }).then((res)=>res.json());\n    console.log(\"token\", response.message);\n    const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_0___default())(req, res);\n    cookies.set(\"authorization\", response.token, {\n        httpOnly: true,\n        sameSite: \"lax\",\n        maxAge: 1000 * 60 * 60 * 24\n    });\n    res.status(200).json(response);\n    return response;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hdXRoL2F1dGhIYW5kbGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QjtBQUVmLGVBQWVDLFdBQVcsQ0FBQ0MsUUFBUSxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMxREMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLHVCQUFvQixDQUFDLENBQUM7SUFDbEMsTUFBTUcsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0osdUJBQW9CLEdBQUdMLFFBQVEsRUFBRTtRQUMxRFUsTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1lBQ0wsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztRQUNIQyxXQUFXLEVBQUUsU0FBUztRQUN0QkMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ2QsR0FBRyxDQUFDWSxJQUFJLENBQUM7S0FDakMsQ0FBQyxDQUFDRyxJQUFJLENBQUMsQ0FBQ2QsR0FBRyxHQUFLQSxHQUFHLENBQUNlLElBQUksRUFBRSxDQUFDO0lBRTVCZCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLEVBQUVJLFFBQVEsQ0FBQ1UsT0FBTyxDQUFDLENBQUM7SUFFdkMsTUFBTUMsT0FBTyxHQUFHLElBQUlyQixnREFBTyxDQUFDRyxHQUFHLEVBQUVDLEdBQUcsQ0FBQztJQUNyQ2lCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsRUFBRVosUUFBUSxDQUFDYSxLQUFLLEVBQUU7UUFDekNDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFFBQVEsRUFBRSxLQUFLO1FBQ2ZDLE1BQU0sRUFBRSxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFO0tBQ3hCLENBQUMsQ0FBQztJQUNIdEIsR0FBRyxDQUFDdUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDUixJQUFJLENBQUNULFFBQVEsQ0FBQyxDQUFDO0lBRS9CLE9BQU9BLFFBQVEsQ0FBQztDQUNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL2F1dGgvYXV0aEhhbmRsZXIuanM/YTc0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29va2llcyBmcm9tIFwiY29va2llc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhdXRoSGFuZGxlcihlbmRwb2ludCwgcmVxLCByZXMpIHtcbiAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5CQUNLX0VORCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5CQUNLX0VORCArIGVuZHBvaW50LCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgfSxcbiAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxLmJvZHkpXG4gICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICAgIGNvbnNvbGUubG9nKFwidG9rZW5cIiwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgXG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKHJlcSwgcmVzKTtcbiAgICBjb29raWVzLnNldChcImF1dGhvcml6YXRpb25cIiwgcmVzcG9uc2UudG9rZW4sIHtcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgICAgICBtYXhBZ2U6IDEwMDAqNjAqNjAqMjRcbiAgICB9KTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG59Il0sIm5hbWVzIjpbIkNvb2tpZXMiLCJhdXRoSGFuZGxlciIsImVuZHBvaW50IiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJCQUNLX0VORCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJqc29uIiwibWVzc2FnZSIsImNvb2tpZXMiLCJzZXQiLCJ0b2tlbiIsImh0dHBPbmx5Iiwic2FtZVNpdGUiLCJtYXhBZ2UiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./auth/authHandler.js\n");

/***/ }),

/***/ "(api)/./pages/api/register.js":
/*!*******************************!*\
  !*** ./pages/api/register.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_utils_getDisplayName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/utils/getDisplayName */ \"@mui/utils/getDisplayName\");\n/* harmony import */ var _mui_utils_getDisplayName__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_utils_getDisplayName__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_authHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/authHandler */ \"(api)/./auth/authHandler.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>(0,_auth_authHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/register\", req, res));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0RDtBQUNaO0FBRWhELGlFQUFlLENBQUNFLEdBQUcsRUFBRUMsR0FBRyxHQUFLRiw2REFBVyxDQUFDLFdBQVcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3BhZ2VzL2FwaS9yZWdpc3Rlci5qcz8xNzQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEZ1bmN0aW9uTmFtZSB9IGZyb20gJ0BtdWkvdXRpbHMvZ2V0RGlzcGxheU5hbWUnO1xuaW1wb3J0IGF1dGhIYW5kbGVyIGZyb20gJy4uLy4uL2F1dGgvYXV0aEhhbmRsZXInXG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4gYXV0aEhhbmRsZXIoXCIvcmVnaXN0ZXJcIiwgcmVxLCByZXMpOyJdLCJuYW1lcyI6WyJnZXRGdW5jdGlvbk5hbWUiLCJhdXRoSGFuZGxlciIsInJlcSIsInJlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/register.js"));
module.exports = __webpack_exports__;

})();