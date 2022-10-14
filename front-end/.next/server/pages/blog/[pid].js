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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst recurse = async (comment, idx)=>{\n    if (!comment.subComment) return;\n    const response = await fetch(\"../api/comment\", {\n        method: \"PATCH\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({})\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: comment.description\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Sub comment\"\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            recurse(comment.subComment)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\nconst Post = ({ blog  })=>{\n    const comment = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const handleSubmit = async ()=>{\n        const response = await fetch(\"../api/comment\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                blogId: blog._id,\n                description: comment.current.value\n            })\n        });\n        console.log(comment.current.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    href: \"/viewBlog.css\",\n                    rel: \"stylesheet\"\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: blog.title\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"description\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: blog.description\n                    }, void 0, false, {\n                        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Comments\"\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                ref: comment,\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSubmit,\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ivelin/hackernews/hackernews/front-end/pages/blog/[pid].js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\nasync function getServerSideProps(context) {\n    const id = context.query.id;\n    console.log(id);\n    console.log(\"HEREEE\");\n    const response = await fetch(\"http://localhost:3000/api/blog\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            blogId: id\n        })\n    }).then((res)=>res.json());\n    const comments = await fetch(`http://localhost:3000/api/comments/${id}`, {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    }).then((res)=>res.json());\n    console.log(comments);\n    const blog = response.message;\n    console.log(blog);\n    return {\n        props: {\n            blog\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1twaWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNYO0FBQ0U7QUFFL0IsTUFBTUcsT0FBTyxHQUFHLE9BQU9DLE9BQU8sRUFBRUMsR0FBRyxHQUFLO0lBQ3RDLElBQUcsQ0FBQ0QsT0FBTyxDQUFDRSxVQUFVLEVBQ3BCLE9BQU87SUFFUCxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFO1FBQzdDQyxNQUFNLEVBQUUsT0FBTztRQUNmQyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO1FBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUMsRUFBSSxDQUFDO0tBQzNCLENBQUM7SUFFSixxQkFDRSw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUNDLEdBQUM7MEJBQUVYLE9BQU8sQ0FBQ1ksV0FBVzs7Ozs7eUJBQUs7MEJBQzVCLDhEQUFDRCxHQUFDOzBCQUFDLGFBQVc7Ozs7O3lCQUFJO1lBQ2pCWixPQUFPLENBQUNDLE9BQU8sQ0FBQ0UsVUFBVSxDQUFDOzs7Ozs7aUJBQ3hCLENBQ1A7Q0FDRjtBQUVELE1BQU1XLElBQUksR0FBRyxDQUFDLEVBQUVDLElBQUksR0FBRSxHQUFLO0lBQ3pCLE1BQU1kLE9BQU8sR0FBR0YsNkNBQU0sRUFBRTtJQUV4QixNQUFNaUIsWUFBWSxHQUFHLFVBQVk7UUFDL0IsTUFBTVosUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtZQUM3Q0MsTUFBTSxFQUFFLE1BQU07WUFDZEMsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7WUFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztnQkFDbkJPLE1BQU0sRUFBRUYsSUFBSSxDQUFDRyxHQUFHO2dCQUNoQkwsV0FBVyxFQUFFWixPQUFPLENBQUNrQixPQUFPLENBQUNDLEtBQUs7YUFDbkMsQ0FBQztTQUNILENBQUM7UUFDRkMsT0FBTyxDQUFDQyxHQUFHLENBQUNyQixPQUFPLENBQUNrQixPQUFPLENBQUNDLEtBQUssQ0FBQyxDQUFDO0tBQ3BDO0lBQ0QscUJBQ0UsOERBQUNULEtBQUc7OzBCQUNGLDhEQUFDYixrREFBSTswQkFDSCw0RUFBQ3lCLE1BQUk7b0JBQUNDLElBQUksRUFBQyxlQUFlO29CQUFDQyxHQUFHLEVBQUMsWUFBWTs7Ozs7NkJBQUU7Ozs7O3lCQUN4QzswQkFDUCw4REFBQ0MsSUFBRTswQkFBRVgsSUFBSSxDQUFDWSxLQUFLOzs7Ozt5QkFBTTswQkFDckIsOERBQUNoQixLQUFHO2dCQUFDaUIsU0FBUyxFQUFDLFdBQVc7MEJBQ3hCLDRFQUFDakIsS0FBRztvQkFBQ2lCLFNBQVMsRUFBQyxhQUFhOzhCQUMxQiw0RUFBQ2hCLEdBQUM7a0NBQUVHLElBQUksQ0FBQ0YsV0FBVzs7Ozs7aUNBQUs7Ozs7OzZCQUNyQjs7Ozs7eUJBQ0Y7MEJBQ04sOERBQUNELEdBQUM7MEJBQUMsVUFBUTs7Ozs7eUJBQUk7MEJBQ2YsOERBQUNpQixVQUFRO2dCQUFDQyxHQUFHLEVBQUU3QixPQUFPO2dCQUFFOEIsSUFBSSxFQUFDLE1BQU07Ozs7O3lCQUFFOzBCQUNyQyw4REFBQ0MsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFakIsWUFBWTswQkFBRSxNQUFJOzs7Ozt5QkFBUzs7Ozs7O2lCQUV4QyxDQUNQO0NBQ0Y7QUFFTSxlQUFla0Isa0JBQWtCLENBQUNDLE9BQU8sRUFBRTtJQUNoRCxNQUFNQyxFQUFFLEdBQUdELE9BQU8sQ0FBQ0UsS0FBSyxDQUFDRCxFQUFFO0lBQzNCZixPQUFPLENBQUNDLEdBQUcsQ0FBQ2MsRUFBRSxDQUFDLENBQUM7SUFDaEJmLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXRCLE1BQU1sQixRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGdDQUFnQyxFQUFFO1FBQzdEQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO1FBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7WUFBQ08sTUFBTSxFQUFFbUIsRUFBRTtTQUFDLENBQUM7S0FDbkMsQ0FBQyxDQUFDRSxJQUFJLENBQUMsQ0FBQ0MsR0FBRyxHQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRSxDQUFDO0lBRTVCLE1BQU1DLFFBQVEsR0FBRyxNQUFNcEMsS0FBSyxDQUFDLENBQUMsbUNBQW1DLEVBQUUrQixFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQ3ZFOUIsTUFBTSxFQUFFLEtBQUs7UUFDYkMsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztLQUNGLENBQUMsQ0FBQytCLElBQUksQ0FBQyxDQUFDQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7SUFFNUJuQixPQUFPLENBQUNDLEdBQUcsQ0FBQ21CLFFBQVEsQ0FBQyxDQUFDO0lBRXRCLE1BQU0xQixJQUFJLEdBQUdYLFFBQVEsQ0FBQ3NDLE9BQU87SUFDN0JyQixPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsSUFBSSxDQUFDLENBQUM7SUFFbEIsT0FBTztRQUNMNEIsS0FBSyxFQUFFO1lBQ0w1QixJQUFJO1NBQ0w7S0FDRjtDQUNGO0FBRUQsaUVBQWVELElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9ibG9nL1twaWRdLmpzPzM2NGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgcmVjdXJzZSA9IGFzeW5jIChjb21tZW50LCBpZHgpID0+IHtcbiAgaWYoIWNvbW1lbnQuc3ViQ29tbWVudClcbiAgICByZXR1cm47XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiLi4vYXBpL2NvbW1lbnRcIiwge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyAgfSlcbiAgICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPntjb21tZW50LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxwPlN1YiBjb21tZW50PC9wPlxuICAgICAge3JlY3Vyc2UoY29tbWVudC5zdWJDb21tZW50KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBQb3N0ID0gKHsgYmxvZyB9KSA9PiB7XG4gIGNvbnN0IGNvbW1lbnQgPSB1c2VSZWYoKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi4uL2FwaS9jb21tZW50XCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBibG9nSWQ6IGJsb2cuX2lkLFxuICAgICAgICBkZXNjcmlwdGlvbjogY29tbWVudC5jdXJyZW50LnZhbHVlXG4gICAgICB9KVxuICAgIH0pXG4gICAgY29uc29sZS5sb2coY29tbWVudC5jdXJyZW50LnZhbHVlKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi92aWV3QmxvZy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxPntibG9nLnRpdGxlfTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgPHA+e2Jsb2cuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+Q29tbWVudHM8L3A+XG4gICAgICA8dGV4dGFyZWEgcmVmPXtjb21tZW50fSB0eXBlPVwidGV4dFwiLz4gXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+U2VuZDwvYnV0dG9uPlxuICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IGlkID0gY29udGV4dC5xdWVyeS5pZDtcbiAgY29uc29sZS5sb2coaWQpO1xuICBjb25zb2xlLmxvZyhcIkhFUkVFRVwiKTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ibG9nXCIsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2Jsb2dJZDogaWR9KVxuICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvY29tbWVudHMvJHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH1cbiAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICBjb25zb2xlLmxvZyhjb21tZW50cyk7XG5cbiAgY29uc3QgYmxvZyA9IHJlc3BvbnNlLm1lc3NhZ2U7XG4gIGNvbnNvbGUubG9nKGJsb2cpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGJsb2dcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkhlYWQiLCJ1c2VSZWYiLCJyZWN1cnNlIiwiY29tbWVudCIsImlkeCIsInN1YkNvbW1lbnQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGl2IiwicCIsImRlc2NyaXB0aW9uIiwiUG9zdCIsImJsb2ciLCJoYW5kbGVTdWJtaXQiLCJibG9nSWQiLCJfaWQiLCJjdXJyZW50IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibGluayIsImhyZWYiLCJyZWwiLCJoMSIsInRpdGxlIiwiY2xhc3NOYW1lIiwidGV4dGFyZWEiLCJyZWYiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJpZCIsInF1ZXJ5IiwidGhlbiIsInJlcyIsImpzb24iLCJjb21tZW50cyIsIm1lc3NhZ2UiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[pid].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[pid].js"));
module.exports = __webpack_exports__;

})();