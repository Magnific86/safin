"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/footer/index.js":
/*!************************************!*\
  !*** ./components/footer/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _utils_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/hooks/useWindowSize */ \"./utils/hooks/useWindowSize.js\");\n/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../accordion */ \"./components/accordion/index.js\");\n/* harmony import */ var _accordion_accordion_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../accordion/accordion-details */ \"./components/accordion/accordion-details.js\");\n/* harmony import */ var _accordion_accordion_summary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../accordion/accordion-summary */ \"./components/accordion/accordion-summary.js\");\n/* harmony import */ var _loader_category__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loader/category */ \"./components/loader/category.js\");\n/* harmony import */ var _UpFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../UpFooter */ \"./components/UpFooter.js\");\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Footer = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)(), tl = ref.t;\n    var settings = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.settings.data;\n    });\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), idList = ref1[0], setIdList = ref1[1];\n    var handleClick = function(key) {\n        var includes = idList.includes(key);\n        if (includes) {\n            setIdList(idList.filter(function(item) {\n                return item !== key;\n            }));\n        } else {\n            setIdList((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(idList).concat([\n                key\n            ]));\n        }\n    };\n    var windowSize = (0,_utils_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var accordion = [];\n    new Array(6).fill(\"Lorem ipsum\").forEach(function(el) {\n        return accordion.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accordion_accordion_details__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: settings[\"\"],\n                target: \"_blank\",\n                children: el\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this1));\n    });\n    var makeColumns = function(title, arrIn) {\n        var _this = _this1;\n        var newArrOut = [];\n        newArrOut.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"eachFooterCol\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"title\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"eachColList\",\n                    children: arrIn.map(function(el) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                target: \"_blank\",\n                                children: el\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, _this1));\n        return newArrOut;\n    };\n    var firstCol = makeColumns(\"Safin24\", [\n        new Array(6).fill(\"Lorem\")\n    ]);\n    var secondCol = makeColumns(\"About us\", [\n        new Array(4).fill(\"Lorem\")\n    ]);\n    var thirdCol = makeColumns(\"Social Media\", [\n        new Array(5).fill(\"Lorem\")\n    ]);\n    var fourCol = makeColumns(\"Lorem Ipsum\", [\n        new Array(4).fill(\"Lorem\")\n    ]);\n    var fifthCol = makeColumns(\"Help\", [\n        new Array(8).fill(\"Lorem\")\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UpFooter__WEBPACK_IMPORTED_MODULE_9__.UpFooter, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"footer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"content\",\n                        children: windowSize.width > 768 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"footerCols\",\n                            children: [\n                                firstCol,\n                                secondCol,\n                                thirdCol,\n                                fourCol,\n                                fifthCol\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accordion__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            id: \"\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accordion_accordion_summary__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    children: \"Lorem\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, _this),\n                                accordion\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        children: settings[\"footer_text\"]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Footer, \"4+TgaKtSITmKow1z1zUjKcth/mE=\", false, function() {\n    return [\n        react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        _utils_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXguanM/MGFkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSBcIi4uLy4uL3V0aWxzL2hvb2tzL3VzZVdpbmRvd1NpemVcIjtcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiLi4vYWNjb3JkaW9uXCI7XHJcbmltcG9ydCBBY2NvcmRpb25EZXRhaWxzIGZyb20gXCIuLi9hY2NvcmRpb24vYWNjb3JkaW9uLWRldGFpbHNcIjtcclxuaW1wb3J0IEFjY29yZGlvblN1bW1hcnkgZnJvbSBcIi4uL2FjY29yZGlvbi9hY2NvcmRpb24tc3VtbWFyeVwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlMb2FkZXIgZnJvbSBcIi4uL2xvYWRlci9jYXRlZ29yeVwiO1xyXG5pbXBvcnQgeyBVcEZvb3RlciB9IGZyb20gXCIuLi9VcEZvb3RlclwiO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdDogdGwgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNldHRpbmdzLmRhdGEpO1xyXG4gIGNvbnN0IFtpZExpc3QsIHNldElkTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoa2V5KSA9PiB7XHJcbiAgICBjb25zdCBpbmNsdWRlcyA9IGlkTGlzdC5pbmNsdWRlcyhrZXkpO1xyXG4gICAgaWYgKGluY2x1ZGVzKSB7XHJcbiAgICAgIHNldElkTGlzdChpZExpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBrZXkpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElkTGlzdChbLi4uaWRMaXN0LCBrZXldKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHdpbmRvd1NpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcblxyXG4gIGNvbnN0IGFjY29yZGlvbiA9IFtdO1xyXG5cclxuICBuZXcgQXJyYXkoNikuZmlsbChcIkxvcmVtIGlwc3VtXCIpLmZvckVhY2goKGVsKSA9PlxyXG4gICAgYWNjb3JkaW9uLnB1c2goXHJcbiAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgIDxhIGhyZWY9e3NldHRpbmdzW1wiXCJdfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgIHtlbH1cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cclxuICAgIClcclxuICApO1xyXG5cclxuICBjb25zdCBtYWtlQ29sdW1ucyA9ICh0aXRsZSwgYXJySW4pID0+IHtcclxuICAgIGNvbnN0IG5ld0Fyck91dCA9IFtdO1xyXG4gICAgbmV3QXJyT3V0LnB1c2goXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWFjaEZvb3RlckNvbFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJlYWNoQ29sTGlzdFwiPlxyXG4gICAgICAgICAge2FyckluLm1hcCgoZWwpID0+IChcclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIG5ld0Fyck91dDtcclxuICB9O1xyXG5cclxuICBjb25zdCBmaXJzdENvbCA9IG1ha2VDb2x1bW5zKFwiU2FmaW4yNFwiLCBbbmV3IEFycmF5KDYpLmZpbGwoXCJMb3JlbVwiKV0pO1xyXG4gIGNvbnN0IHNlY29uZENvbCA9IG1ha2VDb2x1bW5zKFwiQWJvdXQgdXNcIiwgW25ldyBBcnJheSg0KS5maWxsKFwiTG9yZW1cIildKTtcclxuICBjb25zdCB0aGlyZENvbCA9IG1ha2VDb2x1bW5zKFwiU29jaWFsIE1lZGlhXCIsIFtuZXcgQXJyYXkoNSkuZmlsbChcIkxvcmVtXCIpXSk7XHJcbiAgY29uc3QgZm91ckNvbCA9IG1ha2VDb2x1bW5zKFwiTG9yZW0gSXBzdW1cIiwgW25ldyBBcnJheSg0KS5maWxsKFwiTG9yZW1cIildKTtcclxuICBjb25zdCBmaWZ0aENvbCA9IG1ha2VDb2x1bW5zKFwiSGVscFwiLCBbbmV3IEFycmF5KDgpLmZpbGwoXCJMb3JlbVwiKV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFVwRm9vdGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICB7d2luZG93U2l6ZS53aWR0aCA+IDc2OCA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJDb2xzXCI+XHJcbiAgICAgICAgICAgICAge2ZpcnN0Q29sfVxyXG4gICAgICAgICAgICAgIHtzZWNvbmRDb2x9XHJcbiAgICAgICAgICAgICAge3RoaXJkQ29sfVxyXG4gICAgICAgICAgICAgIHtmb3VyQ29sfVxyXG4gICAgICAgICAgICAgIHtmaWZ0aENvbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uIGlkPXtcIlwifT5cclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeT5Mb3JlbTwvQWNjb3JkaW9uU3VtbWFyeT5cclxuICAgICAgICAgICAgICB7YWNjb3JkaW9ufVxyXG4gICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxmb290ZXI+e3NldHRpbmdzW1wiZm9vdGVyX3RleHRcIl19PC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZVRyYW5zbGF0aW9uIiwidXNlU2VsZWN0b3IiLCJ1c2VXaW5kb3dTaXplIiwiQWNjb3JkaW9uIiwiQWNjb3JkaW9uRGV0YWlscyIsIkFjY29yZGlvblN1bW1hcnkiLCJDYXRlZ29yeUxvYWRlciIsIlVwRm9vdGVyIiwiRm9vdGVyIiwidCIsInRsIiwic2V0dGluZ3MiLCJzdGF0ZSIsImRhdGEiLCJpZExpc3QiLCJzZXRJZExpc3QiLCJoYW5kbGVDbGljayIsImtleSIsImluY2x1ZGVzIiwiZmlsdGVyIiwiaXRlbSIsIndpbmRvd1NpemUiLCJhY2NvcmRpb24iLCJBcnJheSIsImZpbGwiLCJmb3JFYWNoIiwiZWwiLCJwdXNoIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJtYWtlQ29sdW1ucyIsInRpdGxlIiwiYXJySW4iLCJuZXdBcnJPdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInVsIiwibWFwIiwibGkiLCJmaXJzdENvbCIsInNlY29uZENvbCIsInRoaXJkQ29sIiwiZm91ckNvbCIsImZpZnRoQ29sIiwid2lkdGgiLCJpZCIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/footer/index.js\n"));

/***/ })

});