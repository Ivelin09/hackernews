"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[pid]",{

/***/ "./pages/blog/[pid].js":
/*!*****************************!*\
  !*** ./pages/blog/[pid].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_ivelin_hackernews_hackernews_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ivelin_hackernews_hackernews_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ivelin_hackernews_hackernews_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nvar replies = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_ivelin_hackernews_hackernews_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(comment, id) {\n        var response;\n        return _home_ivelin_hackernews_hackernews_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    console.log(\"qw\");\n                    _ctx.next = 3;\n                    return fetch(\"../api/replies/\".concat(id), {\n                        method: \"GET\"\n                    }).then(function(res) {\n                        return res.json();\n                    });\n                case 3:\n                    response = _ctx.sent;\n                    comment.subComment = response.message;\n                    console.log(response);\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function replies(comment, id) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar ReplyField = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_c = ReplyField;\nvar Comment = function(param) {\n    var blog = param.blog, comment = param.comment, idx = param.idx;\n    _s();\n    console.log(comment);\n    if (!comment) return;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), showReplies = ref[0], setReplies = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), showReplyField = ref1[0], setReplyField = ref1[1];\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_ivelin_hackernews_hackernews_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_ivelin_hackernews_hackernews_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return replies(comment, comment._id);\n                    case 2:\n                        setReplies(true);\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            paddingLeft: 10\n        },\n        className: \"author\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: comment.author\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: comment.description\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                onClick: handleSubmit,\n                style: {\n                    display: \"inline\"\n                },\n                children: \"View replies\"\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                onClick: function() {\n                    setReplyField(true);\n                },\n                style: {\n                    display: \"inline\",\n                    paddingLeft: \"1%\"\n                },\n                children: \" Reply \"\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            showReplyField && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ReplyField, {}, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 41,\n                columnNumber: 26\n            }, _this),\n            showReplies && comment.subComment && comment.subComment.map(function(curr, subIdx) {\n                console.log(\"HELP\", curr, comment);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Comment, {\n                    blog: blog,\n                    comment: curr,\n                    idx: subIdx\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                    lineNumber: 45,\n                    columnNumber: 20\n                }, _this);\n            })\n        ]\n    }, idx, true, {\n        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_s(Comment, \"HnGarLJhUC1Ra6niu0LfaSDT4EA=\");\n_c1 = Comment;\nvar Post = function(param) {\n    var blog = param.blog;\n    _s1();\n    var comment = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_ivelin_hackernews_hackernews_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return _home_ivelin_hackernews_hackernews_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(blog._id);\n                        _ctx.next = 3;\n                        return fetch(\"../api/comment\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                id: blog._id,\n                                description: comment.current.value\n                            })\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        console.log(comment.current.value);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                    href: \"/viewBlog.css\",\n                    rel: \"stylesheet\"\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: blog.title\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"description\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: blog.description\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"Comments\"\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                ref: comment,\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: handleSubmit,\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this),\n            blog.comments.map(function(comment, idx) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Comment, {\n                    blog: blog,\n                    comment: comment,\n                    idx: idx\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                    lineNumber: 85,\n                    columnNumber: 16\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, _this);\n};\n_s1(Post, \"zO30MhTsyTqjbJ8wDyAkCONu6fk=\");\n_c2 = Post;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ReplyField\");\n$RefreshReg$(_c1, \"Comment\");\n$RefreshReg$(_c2, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixrREFBSTswQkFDSCw0RUFBQ2tELE1BQUk7b0JBQUNDLElBQUksRUFBQyxlQUFlO29CQUFDQyxHQUFHLEVBQUMsWUFBWTs7Ozs7eUJBQUU7Ozs7O3FCQUN4QzswQkFDUCw4REFBQ2xCLElBQUU7MEJBQUVYLElBQUksQ0FBQzhCLEtBQUs7Ozs7O3FCQUFNOzBCQUNyQiw4REFBQ25DLEtBQUc7Z0JBQUNlLFNBQVMsRUFBQyxXQUFXOzBCQUN4Qiw0RUFBQ2YsS0FBRztvQkFBQ2UsU0FBUyxFQUFDLGFBQWE7OEJBQzFCLDRFQUFDRyxHQUFDO2tDQUFFYixJQUFJLENBQUNjLFdBQVc7Ozs7OzZCQUFLOzs7Ozt5QkFDckI7Ozs7O3FCQUNGOzBCQUNOLDhEQUFDRCxHQUFDOzBCQUFDLFVBQVE7Ozs7O3FCQUFJOzBCQUNmLDhEQUFDakIsVUFBUTtnQkFBQ21DLEdBQUcsRUFBRWpELE9BQU87Z0JBQUVlLElBQUksRUFBQyxNQUFNOzs7OztxQkFBRTswQkFDckMsOERBQUNDLFFBQU07Z0JBQUNpQixPQUFPLEVBQUVULFlBQVk7MEJBQUUsTUFBSTs7Ozs7cUJBQVM7WUFDM0NOLElBQUksQ0FBQ2dDLFFBQVEsQ0FBQ2YsR0FBRyxDQUFDLFNBQUNuQyxPQUFPLEVBQUVtQixHQUFHLEVBQUs7Z0JBQ25DLHFCQUFPLDhEQUFDRixPQUFPO29CQUFDQyxJQUFJLEVBQUVBLElBQUk7b0JBQUVsQixPQUFPLEVBQUVBLE9BQU87b0JBQUVtQixHQUFHLEVBQUVBLEdBQUc7Ozs7O3lCQUFHO2FBQzFELENBQUM7Ozs7OzthQUNFLENBQ1A7Q0FDRjtJQXJDS21CLElBQUk7QUFBSkEsTUFBQUEsSUFBSTs7QUE2RFYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bcGlkXS5qcz8zNjRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgcmVwbGllcyA9IGFzeW5jIChjb21tZW50LCBpZCkgPT4ge1xuICBjb25zb2xlLmxvZyhcInF3XCIpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAuLi9hcGkvcmVwbGllcy8ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdHRVQnXG4gIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgY29tbWVudC5zdWJDb21tZW50ID0gcmVzcG9uc2UubWVzc2FnZTtcbiAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xufVxuXG5jb25zdCBSZXBseUZpZWxkID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiLz4gXG4gICAgICAgIDxidXR0b24gPlNlbmQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBDb21tZW50ID0gKHtibG9nLCBjb21tZW50LCBpZHh9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGNvbW1lbnQpO1xuICBpZighY29tbWVudCkgcmV0dXJuO1xuICBjb25zdCBbc2hvd1JlcGxpZXMsIHNldFJlcGxpZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd1JlcGx5RmllbGQsIHNldFJlcGx5RmllbGRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHJlcGxpZXMoY29tbWVudCwgY29tbWVudC5faWQpOyBcbiAgICBzZXRSZXBsaWVzKHRydWUpO1xuICB9IFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9e2lkeH0gc3R5bGU9e3twYWRkaW5nTGVmdDogMTB9fWNsYXNzTmFtZT1cImF1dGhvclwiPlxuICAgICAgPGgxPntjb21tZW50LmF1dGhvcn08L2gxPiAgXG4gICAgICA8cD57Y29tbWVudC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8cCBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZSd9fSA+VmlldyByZXBsaWVzPC9wPlxuICAgICAgPHAgb25DbGljaz17KCkgPT4ge3NldFJlcGx5RmllbGQodHJ1ZSl9fSBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUnLCBwYWRkaW5nTGVmdDogJzElJ319PiBSZXBseSA8L3A+XG4gICAgICB7c2hvd1JlcGx5RmllbGQgJiYgPFJlcGx5RmllbGQvPn1cbiAgICAgIHtzaG93UmVwbGllcyAmJiBjb21tZW50LnN1YkNvbW1lbnQgJiYgXG4gICAgICAgICAgY29tbWVudC5zdWJDb21tZW50Lm1hcCgoY3Vyciwgc3ViSWR4KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSEVMUCcsIGN1cnIsIGNvbW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIDxDb21tZW50IGJsb2c9e2Jsb2d9IGNvbW1lbnQ9e2N1cnJ9IGlkeD17c3ViSWR4fS8+O1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBQb3N0ID0gKHsgYmxvZyB9KSA9PiB7XG5cbiAgY29uc3QgY29tbWVudCA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhibG9nLl9pZCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi4uL2FwaS9jb21tZW50XCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpZDogYmxvZy5faWQsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBjb21tZW50LmN1cnJlbnQudmFsdWVcbiAgICAgIH0pXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhjb21tZW50LmN1cnJlbnQudmFsdWUpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayBocmVmPVwiL3ZpZXdCbG9nLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDE+e2Jsb2cudGl0bGV9PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8cD57YmxvZy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8cD5Db21tZW50czwvcD5cbiAgICAgIDx0ZXh0YXJlYSByZWY9e2NvbW1lbnR9IHR5cGU9XCJ0ZXh0XCIvPiBcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fT5TZW5kPC9idXR0b24+XG4gICAgICB7YmxvZy5jb21tZW50cy5tYXAoKGNvbW1lbnQsIGlkeCkgPT4ge1xuICAgICAgICByZXR1cm4gPENvbW1lbnQgYmxvZz17YmxvZ30gY29tbWVudD17Y29tbWVudH0gaWR4PXtpZHh9Lz5cbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBpZCA9IGNvbnRleHQucXVlcnkuaWQ7XG4gIGNvbnNvbGUubG9nKGlkKTtcbiAgY29uc29sZS5sb2coXCJIRVJFRUVcIik7XG5cbiAgY29uc3QgcXVlcnkgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jb21tZW50cy8ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdHRVQnXG4gIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7IHJldHVybiByZXNwb25zZS5qc29uKCl9KTtcblxuICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShxdWVyeSwgbnVsbCwgMikpOyAgXG5cbiAgY29uc3QgYmxvZyA9IHF1ZXJ5Lm1lc3NhZ2U7XG5cbiAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoYmxvZy5jb21tZW50cywgbnVsbCwgMikpOyAgXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYmxvZ1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiSGVhZCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwicmVwbGllcyIsImNvbW1lbnQiLCJpZCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlcyIsImpzb24iLCJzdWJDb21tZW50IiwibWVzc2FnZSIsIlJlcGx5RmllbGQiLCJkaXYiLCJ0ZXh0YXJlYSIsInR5cGUiLCJidXR0b24iLCJDb21tZW50IiwiYmxvZyIsImlkeCIsInNob3dSZXBsaWVzIiwic2V0UmVwbGllcyIsInNob3dSZXBseUZpZWxkIiwic2V0UmVwbHlGaWVsZCIsImhhbmRsZVN1Ym1pdCIsIl9pZCIsInN0eWxlIiwicGFkZGluZ0xlZnQiLCJjbGFzc05hbWUiLCJoMSIsImF1dGhvciIsInAiLCJkZXNjcmlwdGlvbiIsIm9uQ2xpY2siLCJkaXNwbGF5IiwibWFwIiwiY3VyciIsInN1YklkeCIsIlBvc3QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjdXJyZW50IiwidmFsdWUiLCJsaW5rIiwiaHJlZiIsInJlbCIsInRpdGxlIiwicmVmIiwiY29tbWVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[pid].js\n"));

/***/ })

});