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
exports.id = "pages/privacy-policy";
exports.ids = ["pages/privacy-policy"];
exports.modules = {

/***/ "./pages/privacy-policy/index.js":
/*!***************************************!*\
  !*** ./pages/privacy-policy/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/axios */ \"./services/axios.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst PrivacyPolicy = ({ policyDetail  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"tab-pane\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"title\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: policyDetail?.translation?.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\pages\\\\privacy-policy\\\\index.js\",\n                        lineNumber: 9,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\pages\\\\privacy-policy\\\\index.js\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"termofuse\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"typography\",\n                        dangerouslySetInnerHTML: {\n                            __html: policyDetail?.translation?.description\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\pages\\\\privacy-policy\\\\index.js\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\pages\\\\privacy-policy\\\\index.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\pages\\\\privacy-policy\\\\index.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\nasync function getServerSideProps(ctx) {\n    const cookies = nookies__WEBPACK_IMPORTED_MODULE_3___default().get(ctx);\n    const language_id = cookies?.language_id;\n    const language_locale = cookies?.language_locale;\n    const policy = await _services_axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`/api/v1/rest/policy`, {\n        params: {\n            language_id,\n            lang: language_locale\n        }\n    });\n    let policyDetail = policy.data.data;\n    return {\n        props: {\n            policyDetail\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivacyPolicy);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcml2YWN5LXBvbGljeS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNzQjtBQUNsQjtBQUM5QixNQUFNRyxhQUFhLEdBQUcsQ0FBQyxFQUFFQyxZQUFZLEdBQUUsR0FBSztJQUMxQyxxQkFDRTtrQkFDRSw0RUFBQ0MsS0FBRztZQUFDQyxTQUFTLEVBQUMsVUFBVTs7OEJBQ3ZCLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsT0FBTzs4QkFDcEIsNEVBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxPQUFPO2tDQUFFRixZQUFZLEVBQUVHLFdBQVcsRUFBRUMsS0FBSzs7Ozs7aUNBQU87Ozs7OzZCQUMzRDs4QkFDTiw4REFBQ0gsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLFdBQVc7OEJBQ3hCLDRFQUFDRCxLQUFHO3dCQUNGQyxTQUFTLEVBQUMsWUFBWTt3QkFDdEJHLHVCQUF1QixFQUFFOzRCQUN2QkMsTUFBTSxFQUFFTixZQUFZLEVBQUVHLFdBQVcsRUFBRUksV0FBVzt5QkFDL0M7Ozs7O2lDQUNJOzs7Ozs2QkFDSDs7Ozs7O3FCQUNGO3FCQUNMLENBQ0g7Q0FDSDtBQUNNLGVBQWVDLGtCQUFrQixDQUFDQyxHQUFHLEVBQUU7SUFDNUMsTUFBTUMsT0FBTyxHQUFHWixrREFBVyxDQUFDVyxHQUFHLENBQUM7SUFDaEMsTUFBTUcsV0FBVyxHQUFHRixPQUFPLEVBQUVFLFdBQVc7SUFDeEMsTUFBTUMsZUFBZSxHQUFHSCxPQUFPLEVBQUVHLGVBQWU7SUFDaEQsTUFBTUMsTUFBTSxHQUFHLE1BQU1qQiwyREFBZ0IsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7UUFDM0RrQixNQUFNLEVBQUU7WUFBRUgsV0FBVztZQUFFSSxJQUFJLEVBQUVILGVBQWU7U0FBRTtLQUMvQyxDQUFDO0lBRUYsSUFBSWIsWUFBWSxHQUFHYyxNQUFNLENBQUNHLElBQUksQ0FBQ0EsSUFBSTtJQUNuQyxPQUFPO1FBQUVDLEtBQUssRUFBRTtZQUFFbEIsWUFBWTtTQUFFO0tBQUUsQ0FBQztDQUNwQztBQUNELGlFQUFlRCxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb3Nob3BzLy4vcGFnZXMvcHJpdmFjeS1wb2xpY3kvaW5kZXguanM/Y2Y2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvc1NlcnZpY2UgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F4aW9zXCI7XHJcbmltcG9ydCBub29raWVzIGZyb20gXCJub29raWVzXCI7XHJcbmNvbnN0IFByaXZhY3lQb2xpY3kgPSAoeyBwb2xpY3lEZXRhaWwgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPntwb2xpY3lEZXRhaWw/LnRyYW5zbGF0aW9uPy50aXRsZX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlcm1vZnVzZVwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0eXBvZ3JhcGh5XCJcclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICBfX2h0bWw6IHBvbGljeURldGFpbD8udHJhbnNsYXRpb24/LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XHJcbiAgY29uc3QgY29va2llcyA9IG5vb2tpZXMuZ2V0KGN0eCk7XHJcbiAgY29uc3QgbGFuZ3VhZ2VfaWQgPSBjb29raWVzPy5sYW5ndWFnZV9pZDtcclxuICBjb25zdCBsYW5ndWFnZV9sb2NhbGUgPSBjb29raWVzPy5sYW5ndWFnZV9sb2NhbGU7XHJcbiAgY29uc3QgcG9saWN5ID0gYXdhaXQgYXhpb3NTZXJ2aWNlLmdldChgL2FwaS92MS9yZXN0L3BvbGljeWAsIHtcclxuICAgIHBhcmFtczogeyBsYW5ndWFnZV9pZCwgbGFuZzogbGFuZ3VhZ2VfbG9jYWxlIH0sXHJcbiAgfSk7XHJcblxyXG4gIGxldCBwb2xpY3lEZXRhaWwgPSBwb2xpY3kuZGF0YS5kYXRhO1xyXG4gIHJldHVybiB7IHByb3BzOiB7IHBvbGljeURldGFpbCB9IH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJpdmFjeVBvbGljeTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3NTZXJ2aWNlIiwibm9va2llcyIsIlByaXZhY3lQb2xpY3kiLCJwb2xpY3lEZXRhaWwiLCJkaXYiLCJjbGFzc05hbWUiLCJ0cmFuc2xhdGlvbiIsInRpdGxlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJkZXNjcmlwdGlvbiIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsImNvb2tpZXMiLCJnZXQiLCJsYW5ndWFnZV9pZCIsImxhbmd1YWdlX2xvY2FsZSIsInBvbGljeSIsInBhcmFtcyIsImxhbmciLCJkYXRhIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/privacy-policy/index.js\n");

/***/ }),

/***/ "./services/axios.js":
/*!***************************!*\
  !*** ./services/axios.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst axiosService = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"https://api.goshops.org\",\n    headers: {\n        \"X-Custom-Header\": \"lEWGIQU\",\n        Accept: \"application/json; charset=utf-8\",\n        Authorization: `Bearer 27|2MAPUfBolv9JsCjSYzlnuww4y7Uhelm6a4HF1V8d`\n    },\n    timeout: 8000\n});\naxiosService.interceptors.request.use(function(config) {\n    const cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\n    const currency_id = cookies?.currency_id;\n    const language_id = cookies?.language_id;\n    const language_locale = cookies?.language_locale;\n    config.params = {\n        lang: language_locale,\n        language_id,\n        currency_id,\n        ...config.params\n    };\n    // Do something before request is sent\n    return config;\n}, function(error) {\n    // Do something with request error\n    return Promise.reject(error);\n});\n// Add a response interceptor\naxiosService.interceptors.response.use(function(response) {\n    // Any status code that lie within the range of 2xx cause this function to trigger\n    // Do something with response data\n    return response;\n}, function(error) {\n    // Any status codes that falls outside the range of 2xx cause this function to trigger\n    // Do something with response error\n    return Promise.reject(error);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosService);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9heGlvcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUNhO0FBRXZDLE1BQU1FLFlBQVksR0FBR0YsbURBQVksQ0FBQztJQUNoQ0ksT0FBTyxFQUFFQyx5QkFBbUI7SUFDNUJHLE9BQU8sRUFBRTtRQUNQLGlCQUFpQixFQUFFLFNBQVM7UUFDNUJDLE1BQU0sRUFBRSxpQ0FBaUM7UUFDekNDLGFBQWEsRUFBRSxDQUFDLGtEQUFrRCxDQUFDO0tBQ3BFO0lBQ0RDLE9BQU8sRUFBRSxJQUFJO0NBQ2QsQ0FBQztBQUVGVCxZQUFZLENBQUNVLFlBQVksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQ25DLFNBQVVDLE1BQU0sRUFBRTtJQUNoQixNQUFNQyxPQUFPLEdBQUdmLHFEQUFZLEVBQUU7SUFDOUIsTUFBTWdCLFdBQVcsR0FBR0QsT0FBTyxFQUFFQyxXQUFXO0lBQ3hDLE1BQU1DLFdBQVcsR0FBR0YsT0FBTyxFQUFFRSxXQUFXO0lBQ3hDLE1BQU1DLGVBQWUsR0FBR0gsT0FBTyxFQUFFRyxlQUFlO0lBRWhESixNQUFNLENBQUNLLE1BQU0sR0FBRztRQUNkQyxJQUFJLEVBQUVGLGVBQWU7UUFDckJELFdBQVc7UUFDWEQsV0FBVztRQUNYLEdBQUdGLE1BQU0sQ0FBQ0ssTUFBTTtLQUNqQixDQUFDO0lBQ0Ysc0NBQXNDO0lBQ3RDLE9BQU9MLE1BQU0sQ0FBQztDQUNmLEVBQ0QsU0FBVU8sS0FBSyxFQUFFO0lBQ2Ysa0NBQWtDO0lBQ2xDLE9BQU9DLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDRixLQUFLLENBQUMsQ0FBQztDQUM5QixDQUNGLENBQUM7QUFFRiw2QkFBNkI7QUFDN0JwQixZQUFZLENBQUNVLFlBQVksQ0FBQ2EsUUFBUSxDQUFDWCxHQUFHLENBQ3BDLFNBQVVXLFFBQVEsRUFBRTtJQUNsQixrRkFBa0Y7SUFDbEYsa0NBQWtDO0lBRWxDLE9BQU9BLFFBQVEsQ0FBQztDQUNqQixFQUNELFNBQVVILEtBQUssRUFBRTtJQUNmLHNGQUFzRjtJQUN0RixtQ0FBbUM7SUFDbkMsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLENBQUNGLEtBQUssQ0FBQyxDQUFDO0NBQzlCLENBQ0YsQ0FBQztBQUVGLGlFQUFlcEIsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29zaG9wcy8uL3NlcnZpY2VzL2F4aW9zLmpzP2UzMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5cclxuY29uc3QgYXhpb3NTZXJ2aWNlID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5BUElfVVJMLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiWC1DdXN0b20tSGVhZGVyXCI6IFwibEVXR0lRVVwiLFxyXG4gICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgMjd8Mk1BUFVmQm9sdjlKc0NqU1l6bG51d3c0eTdVaGVsbTZhNEhGMVY4ZGAsXHJcbiAgfSxcclxuICB0aW1lb3V0OiA4MDAwLFxyXG59KTtcclxuXHJcbmF4aW9zU2VydmljZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXHJcbiAgZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcygpO1xyXG4gICAgY29uc3QgY3VycmVuY3lfaWQgPSBjb29raWVzPy5jdXJyZW5jeV9pZDtcclxuICAgIGNvbnN0IGxhbmd1YWdlX2lkID0gY29va2llcz8ubGFuZ3VhZ2VfaWQ7XHJcbiAgICBjb25zdCBsYW5ndWFnZV9sb2NhbGUgPSBjb29raWVzPy5sYW5ndWFnZV9sb2NhbGU7XHJcblxyXG4gICAgY29uZmlnLnBhcmFtcyA9IHtcclxuICAgICAgbGFuZzogbGFuZ3VhZ2VfbG9jYWxlLFxyXG4gICAgICBsYW5ndWFnZV9pZCxcclxuICAgICAgY3VycmVuY3lfaWQsXHJcbiAgICAgIC4uLmNvbmZpZy5wYXJhbXMsXHJcbiAgICB9O1xyXG4gICAgLy8gRG8gc29tZXRoaW5nIGJlZm9yZSByZXF1ZXN0IGlzIHNlbnRcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfSxcclxuICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHJlcXVlc3QgZXJyb3JcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfVxyXG4pO1xyXG5cclxuLy8gQWRkIGEgcmVzcG9uc2UgaW50ZXJjZXB0b3JcclxuYXhpb3NTZXJ2aWNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAvLyBBbnkgc3RhdHVzIGNvZGUgdGhhdCBsaWUgd2l0aGluIHRoZSByYW5nZSBvZiAyeHggY2F1c2UgdGhpcyBmdW5jdGlvbiB0byB0cmlnZ2VyXHJcbiAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCByZXNwb25zZSBkYXRhXHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH0sXHJcbiAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAvLyBBbnkgc3RhdHVzIGNvZGVzIHRoYXQgZmFsbHMgb3V0c2lkZSB0aGUgcmFuZ2Ugb2YgMnh4IGNhdXNlIHRoaXMgZnVuY3Rpb24gdG8gdHJpZ2dlclxyXG4gICAgLy8gRG8gc29tZXRoaW5nIHdpdGggcmVzcG9uc2UgZXJyb3JcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXhpb3NTZXJ2aWNlO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJwYXJzZUNvb2tpZXMiLCJheGlvc1NlcnZpY2UiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIkFQSV9VUkwiLCJoZWFkZXJzIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsInRpbWVvdXQiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiY29va2llcyIsImN1cnJlbmN5X2lkIiwibGFuZ3VhZ2VfaWQiLCJsYW5ndWFnZV9sb2NhbGUiLCJwYXJhbXMiLCJsYW5nIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/axios.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("nookies");

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
var __webpack_exports__ = (__webpack_exec__("./pages/privacy-policy/index.js"));
module.exports = __webpack_exports__;

})();