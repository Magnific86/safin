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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _utils_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/hooks/useWindowSize */ \"./utils/hooks/useWindowSize.js\");\n/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../accordion */ \"./components/accordion/index.js\");\n/* harmony import */ var _accordion_accordion_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../accordion/accordion-details */ \"./components/accordion/accordion-details.js\");\n/* harmony import */ var _accordion_accordion_summary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../accordion/accordion-summary */ \"./components/accordion/accordion-summary.js\");\n/* harmony import */ var _loader_category__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loader/category */ \"./components/loader/category.js\");\n/* harmony import */ var _UpFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../UpFooter */ \"./components/UpFooter.js\");\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Footer = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)(), tl = ref.t;\n    var settings = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.settings.data;\n    });\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), idList = ref1[0], setIdList = ref1[1];\n    var handleClick = function(key) {\n        var includes = idList.includes(key);\n        if (includes) {\n            setIdList(idList.filter(function(item) {\n                return item !== key;\n            }));\n        } else {\n            setIdList((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(idList).concat([\n                key\n            ]));\n        }\n    };\n    var windowSize = (0,_utils_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var accordion = [];\n    new Array(6).fill(\"Lorem ipsum\").forEach(function(el) {\n        return accordion.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accordion_accordion_details__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: settings[\"\"],\n                target: \"_blank\",\n                children: el\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this1));\n    });\n    var makeColumns = function(title, arrIn) {\n        var _this = _this1;\n        var newArrOut = [];\n        newArrOut.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"eachFooterCol\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"title\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: \"flex\",\n                        flexDirection: \"column\",\n                        background: \"redd\"\n                    },\n                    children: arrIn.map(function(el) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/\",\n                            target: \"_blank\",\n                            children: el\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, _this1));\n        return newArrOut;\n    };\n    var firstCol = makeColumns(\"Safin24\", [\n        new Array(6).fill(\"Lorem\")\n    ]);\n    var secondCol = makeColumns(\"About us\", [\n        new Array(4).fill(\"Lorem\")\n    ]);\n    var thirdCol = makeColumns(\"Social Media\", [\n        new Array(5).fill(\"Lorem\")\n    ]);\n    var fourCol = makeColumns(\"Lorem Ipsum\", [\n        new Array(4).fill(\"Lorem\")\n    ]);\n    var fifthCol = makeColumns(\"Help\", [\n        new Array(8).fill(\"Lorem\")\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UpFooter__WEBPACK_IMPORTED_MODULE_9__.UpFooter, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"footer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"content\",\n                        children: windowSize.width > 768 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"footerCols\",\n                            children: [\n                                firstCol,\n                                secondCol,\n                                thirdCol,\n                                fourCol,\n                                fifthCol\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accordion__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            id: \"\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accordion_accordion_summary__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    children: \"Lorem\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, _this),\n                                accordion\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        children: settings[\"footer_text\"]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\web_multi_shop\\\\components\\\\footer\\\\index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Footer, \"4+TgaKtSITmKow1z1zUjKcth/mE=\", false, function() {\n    return [\n        react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        _utils_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Zvb3Rlci9pbmRleC5qcz8wYWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tIFwiLi4vLi4vdXRpbHMvaG9va3MvdXNlV2luZG93U2l6ZVwiO1xyXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gXCIuLi9hY2NvcmRpb25cIjtcclxuaW1wb3J0IEFjY29yZGlvbkRldGFpbHMgZnJvbSBcIi4uL2FjY29yZGlvbi9hY2NvcmRpb24tZGV0YWlsc1wiO1xyXG5pbXBvcnQgQWNjb3JkaW9uU3VtbWFyeSBmcm9tIFwiLi4vYWNjb3JkaW9uL2FjY29yZGlvbi1zdW1tYXJ5XCI7XHJcbmltcG9ydCBDYXRlZ29yeUxvYWRlciBmcm9tIFwiLi4vbG9hZGVyL2NhdGVnb3J5XCI7XHJcbmltcG9ydCB7IFVwRm9vdGVyIH0gZnJvbSBcIi4uL1VwRm9vdGVyXCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyB0OiB0bCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICBjb25zdCBzZXR0aW5ncyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2V0dGluZ3MuZGF0YSk7XHJcbiAgY29uc3QgW2lkTGlzdCwgc2V0SWRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IChrZXkpID0+IHtcclxuICAgIGNvbnN0IGluY2x1ZGVzID0gaWRMaXN0LmluY2x1ZGVzKGtleSk7XHJcbiAgICBpZiAoaW5jbHVkZXMpIHtcclxuICAgICAgc2V0SWRMaXN0KGlkTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGtleSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SWRMaXN0KFsuLi5pZExpc3QsIGtleV0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgd2luZG93U2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuXHJcbiAgY29uc3QgYWNjb3JkaW9uID0gW107XHJcblxyXG4gIG5ldyBBcnJheSg2KS5maWxsKFwiTG9yZW0gaXBzdW1cIikuZm9yRWFjaCgoZWwpID0+XHJcbiAgICBhY2NvcmRpb24ucHVzaChcclxuICAgICAgPEFjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgPGEgaHJlZj17c2V0dGluZ3NbXCJcIl19IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAge2VsfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG1ha2VDb2x1bW5zID0gKHRpdGxlLCBhcnJJbikgPT4ge1xyXG4gICAgY29uc3QgbmV3QXJyT3V0ID0gW107XHJcbiAgICBuZXdBcnJPdXQucHVzaChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlYWNoRm9vdGVyQ29sXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGJhY2tncm91bmQ6ICdyZWRkJ319PlxyXG4gICAgICAgICAge2FyckluLm1hcCgoZWwpID0+IChcclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAge2VsfVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgICByZXR1cm4gbmV3QXJyT3V0O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpcnN0Q29sID0gbWFrZUNvbHVtbnMoXCJTYWZpbjI0XCIsIFtuZXcgQXJyYXkoNikuZmlsbChcIkxvcmVtXCIpXSk7XHJcbiAgY29uc3Qgc2Vjb25kQ29sID0gbWFrZUNvbHVtbnMoXCJBYm91dCB1c1wiLCBbbmV3IEFycmF5KDQpLmZpbGwoXCJMb3JlbVwiKV0pO1xyXG4gIGNvbnN0IHRoaXJkQ29sID0gbWFrZUNvbHVtbnMoXCJTb2NpYWwgTWVkaWFcIiwgW25ldyBBcnJheSg1KS5maWxsKFwiTG9yZW1cIildKTtcclxuICBjb25zdCBmb3VyQ29sID0gbWFrZUNvbHVtbnMoXCJMb3JlbSBJcHN1bVwiLCBbbmV3IEFycmF5KDQpLmZpbGwoXCJMb3JlbVwiKV0pO1xyXG4gIGNvbnN0IGZpZnRoQ29sID0gbWFrZUNvbHVtbnMoXCJIZWxwXCIsIFtuZXcgQXJyYXkoOCkuZmlsbChcIkxvcmVtXCIpXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VXBGb290ZXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgIHt3aW5kb3dTaXplLndpZHRoID4gNzY4ID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlckNvbHNcIj5cclxuICAgICAgICAgICAgICB7Zmlyc3RDb2x9XHJcbiAgICAgICAgICAgICAge3NlY29uZENvbH1cclxuICAgICAgICAgICAgICB7dGhpcmRDb2x9XHJcbiAgICAgICAgICAgICAge2ZvdXJDb2x9XHJcbiAgICAgICAgICAgICAge2ZpZnRoQ29sfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxBY2NvcmRpb24gaWQ9e1wiXCJ9PlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5PkxvcmVtPC9BY2NvcmRpb25TdW1tYXJ5PlxyXG4gICAgICAgICAgICAgIHthY2NvcmRpb259XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGZvb3Rlcj57c2V0dGluZ3NbXCJmb290ZXJfdGV4dFwiXX08L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VTZWxlY3RvciIsInVzZVdpbmRvd1NpemUiLCJBY2NvcmRpb24iLCJBY2NvcmRpb25EZXRhaWxzIiwiQWNjb3JkaW9uU3VtbWFyeSIsIkNhdGVnb3J5TG9hZGVyIiwiVXBGb290ZXIiLCJGb290ZXIiLCJ0IiwidGwiLCJzZXR0aW5ncyIsInN0YXRlIiwiZGF0YSIsImlkTGlzdCIsInNldElkTGlzdCIsImhhbmRsZUNsaWNrIiwia2V5IiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJpdGVtIiwid2luZG93U2l6ZSIsImFjY29yZGlvbiIsIkFycmF5IiwiZmlsbCIsImZvckVhY2giLCJlbCIsInB1c2giLCJhIiwiaHJlZiIsInRhcmdldCIsIm1ha2VDb2x1bW5zIiwidGl0bGUiLCJhcnJJbiIsIm5ld0Fyck91dCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImJhY2tncm91bmQiLCJtYXAiLCJmaXJzdENvbCIsInNlY29uZENvbCIsInRoaXJkQ29sIiwiZm91ckNvbCIsImZpZnRoQ29sIiwid2lkdGgiLCJpZCIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/footer/index.js\n"));

/***/ })

});