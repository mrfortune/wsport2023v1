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
exports.id = "pages/Contact";
exports.ids = ["pages/Contact"];
exports.modules = {

/***/ "./pages/Contact.js":
/*!**************************!*\
  !*** ./pages/Contact.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Paper */ \"@mui/material/Paper\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Mailto({ email , subject , body , ...props }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: `mailto:${email}?subject=${subject || \"\"}&body=${body || \"\"}`,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/robertharris/Desktop/myportfolio/pages/Contact.js\",\n        lineNumber: 9,\n        columnNumber: 4\n    }, this);\n}\nconst Contact = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        maxWidth: \"md\",\n        sx: {\n            minHeight: \"50vh\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            mt: 15,\n            mb: 15,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                    variant: \"h1\",\n                    children: \"Contact Us\"\n                }, void 0, false, {\n                    fileName: \"/Users/robertharris/Desktop/myportfolio/pages/Contact.js\",\n                    lineNumber: 20,\n                    columnNumber: 3\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    container: true,\n                    spacing: 2,\n                    sx: {\n                        display: \"flex\",\n                        textAlign: \"center\",\n                        justifyItems: \"center\",\n                        alignItems: \"center\",\n                        height: \"200px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        item: true,\n                        xs: 12,\n                        sm: 12,\n                        md: 12,\n                        lg: 12,\n                        sx: {},\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                variant: \"h4\",\n                                children: \"183 Sterling Street, Brooklyn, NY 11225\"\n                            }, void 0, false, {\n                                fileName: \"/Users/robertharris/Desktop/myportfolio/pages/Contact.js\",\n                                lineNumber: 26,\n                                columnNumber: 3\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                variant: \"h4\",\n                                sx: {\n                                    textDecoration: \"none\",\n                                    color: \"purple\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Mailto, {\n                                    email: \"rharris@worldshaker.com\",\n                                    subject: \"Seeking more info\",\n                                    body: \"Hi, Robert,\",\n                                    children: \"Send me an email to get more info, or just to say, hi!.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/robertharris/Desktop/myportfolio/pages/Contact.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 74\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/robertharris/Desktop/myportfolio/pages/Contact.js\",\n                                lineNumber: 29,\n                                columnNumber: 2\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                variant: \"h4\",\n                                children: \"Give me a call: 646.620.4438\"\n                            }, void 0, false, {\n                                fileName: \"/Users/robertharris/Desktop/myportfolio/pages/Contact.js\",\n                                lineNumber: 33,\n                                columnNumber: 3\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/robertharris/Desktop/myportfolio/pages/Contact.js\",\n                        lineNumber: 24,\n                        columnNumber: 3\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robertharris/Desktop/myportfolio/pages/Contact.js\",\n                    lineNumber: 23,\n                    columnNumber: 2\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robertharris/Desktop/myportfolio/pages/Contact.js\",\n            lineNumber: 19,\n            columnNumber: 2\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/robertharris/Desktop/myportfolio/pages/Contact.js\",\n        lineNumber: 17,\n        columnNumber: 1\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db250YWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUN5QjtBQUNDO0FBQ2pCO0FBQ0Y7QUFFdEMsU0FBU1EsTUFBTSxDQUFDLEVBQUVDLEtBQUssR0FBRUMsT0FBTyxHQUFFQyxJQUFJLEdBQUUsR0FBR0MsS0FBSyxFQUFFLEVBQUU7SUFDbkQscUJBQ0UsOERBQUNDLEdBQUM7UUFBQ0MsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFTCxLQUFLLENBQUMsU0FBUyxFQUFFQyxPQUFPLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2tCQUN0RUMsS0FBSyxDQUFDRyxRQUFROzs7OztZQUNWLENBQ0o7Q0FDQTtBQUVILE1BQU1DLE9BQU8sR0FBRyxJQUFNO0lBQ25CLHFCQUNILDhEQUFDWixvREFBUztRQUFDYSxRQUFRLEVBQUMsSUFBSTtRQUFDQyxFQUFFLEVBQUU7WUFBQ0MsU0FBUyxFQUFDLE1BQU07U0FBRTtrQkFFL0MsNEVBQUNoQiw4Q0FBRztZQUFDaUIsRUFBRSxFQUFFLEVBQUU7WUFBRUMsRUFBRSxFQUFFLEVBQUU7OzhCQUNsQiw4REFBQ2hCLHFEQUFVO29CQUFDaUIsT0FBTyxFQUFDLElBQUk7OEJBQUMsWUFFMUI7Ozs7OzZCQUFhOzhCQUNiLDhEQUFDZiwyREFBSTtvQkFBQ2dCLFNBQVM7b0JBQUNDLE9BQU8sRUFBRSxDQUFDO29CQUFFTixFQUFFLEVBQUU7d0JBQUNPLE9BQU8sRUFBQyxNQUFNO3dCQUFFQyxTQUFTLEVBQUMsUUFBUTt3QkFBRUMsWUFBWSxFQUFDLFFBQVE7d0JBQUVDLFVBQVUsRUFBQyxRQUFRO3dCQUFFQyxNQUFNLEVBQUMsT0FBTztxQkFBQzs4QkFDL0gsNEVBQUN0QiwyREFBSTt3QkFBQ3VCLElBQUk7d0JBQUNDLEVBQUUsRUFBRSxFQUFFO3dCQUFFQyxFQUFFLEVBQUUsRUFBRTt3QkFBRUMsRUFBRSxFQUFFLEVBQUU7d0JBQUVDLEVBQUUsRUFBRSxFQUFFO3dCQUFFaEIsRUFBRSxFQUFFLEVBQUU7OzBDQUVqRCw4REFBQ2IscURBQVU7Z0NBQUNpQixPQUFPLEVBQUMsSUFBSTswQ0FBQyx5Q0FFekI7Ozs7O3lDQUFhOzBDQUNkLDhEQUFDakIscURBQVU7Z0NBQUVpQixPQUFPLEVBQUMsSUFBSTtnQ0FBQ0osRUFBRSxFQUFFO29DQUFFaUIsY0FBYyxFQUFDLE1BQU07b0NBQUVDLEtBQUssRUFBQyxRQUFRO2lDQUFDOzBDQUFFLDRFQUFDNUIsTUFBTTtvQ0FBQ0MsS0FBSyxFQUFDLHlCQUF5QjtvQ0FBQ0MsT0FBTyxFQUFDLG1CQUFtQjtvQ0FBQ0MsSUFBSSxFQUFDLGFBQWE7OENBQUMseURBRTlKOzs7Ozs2Q0FBUzs7Ozs7eUNBQ0k7MENBQ2IsOERBQUNOLHFEQUFVO2dDQUFDaUIsT0FBTyxFQUFDLElBQUk7MENBQUMsOEJBRXpCOzs7Ozt5Q0FBYTs7Ozs7O2lDQUNQOzs7Ozs2QkFFQTs7Ozs7O3FCQUlDOzs7OztpQkFDRyxDQUNSO0NBQ0Q7QUFDSCxpRUFBZU4sT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL215cG9ydGZvbGlvLy4vcGFnZXMvQ29udGFjdC5qcz80YmI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3R5bGVkLCB1c2VUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmltcG9ydCB7Qm94LCBDb250YWluZXIsIFR5cG9ncmFwaHl9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcblxuZnVuY3Rpb24gTWFpbHRvKHsgZW1haWwsIHN1YmplY3QsIGJvZHksIC4uLnByb3BzIH0pIHtcblx0cmV0dXJuIChcblx0ICA8YSBocmVmPXtgbWFpbHRvOiR7ZW1haWx9P3N1YmplY3Q9JHtzdWJqZWN0IHx8IFwiXCJ9JmJvZHk9JHtib2R5IHx8IFwiXCJ9YH0+XG5cdFx0e3Byb3BzLmNoaWxkcmVufVxuXHQgIDwvYT5cblx0KTtcbiAgfVxuICBcbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XG5cdCAgcmV0dXJuKFx0XG48Q29udGFpbmVyIG1heFdpZHRoPSdtZCcgc3g9e3ttaW5IZWlnaHQ6JzUwdmgnLH19Plx0ICBcblxuXHQ8Qm94IG10PXsxNX0gbWI9ezE1fT5cblx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIj5cbkNvbnRhY3QgVXNcblx0PC9UeXBvZ3JhcGh5PlxuXHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3g9e3tkaXNwbGF5OidmbGV4JywgdGV4dEFsaWduOidjZW50ZXInLCBqdXN0aWZ5SXRlbXM6J2NlbnRlcicsIGFsaWduSXRlbXM6J2NlbnRlcicsIGhlaWdodDonMjAwcHgnfX0+XG5cdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IHN4PXt7fX0+XG5cblx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5cbjE4MyBTdGVybGluZyBTdHJlZXQsIEJyb29rbHluLCBOWSAxMTIyNVxuXHRcdDwvVHlwb2dyYXBoeT5cblx0PFR5cG9ncmFwaHkgIHZhcmlhbnQ9XCJoNFwiIHN4PXt7IHRleHREZWNvcmF0aW9uOidub25lJywgY29sb3I6J3B1cnBsZSd9fT48TWFpbHRvIGVtYWlsPVwicmhhcnJpc0B3b3JsZHNoYWtlci5jb21cIiBzdWJqZWN0PVwiU2Vla2luZyBtb3JlIGluZm9cIiBib2R5PVwiSGksIFJvYmVydCxcIj5cbiAgICBTZW5kIG1lIGFuIGVtYWlsIHRvIGdldCBtb3JlIGluZm8sIG9yIGp1c3QgdG8gc2F5LCBoaSEuXG4gIDwvTWFpbHRvPlxuICA8L1R5cG9ncmFwaHk+XG4gIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPkdpdmUgbWUgYSBjYWxsOiA2NDYuNjIwLjQ0MzhcblxuICA8L1R5cG9ncmFwaHk+XG5cdDwvR3JpZD5cblx0XG5cdDwvR3JpZD5cblx0XG5cdFxuXHRcblx0ICA8L0JveD4gXG48L0NvbnRhaW5lcj5cblx0ICApXG4gIH1cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsInVzZVRoZW1lIiwiQm94IiwiQ29udGFpbmVyIiwiVHlwb2dyYXBoeSIsIlBhcGVyIiwiR3JpZCIsIk1haWx0byIsImVtYWlsIiwic3ViamVjdCIsImJvZHkiLCJwcm9wcyIsImEiLCJocmVmIiwiY2hpbGRyZW4iLCJDb250YWN0IiwibWF4V2lkdGgiLCJzeCIsIm1pbkhlaWdodCIsIm10IiwibWIiLCJ2YXJpYW50IiwiY29udGFpbmVyIiwic3BhY2luZyIsImRpc3BsYXkiLCJ0ZXh0QWxpZ24iLCJqdXN0aWZ5SXRlbXMiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiaXRlbSIsInhzIiwic20iLCJtZCIsImxnIiwidGV4dERlY29yYXRpb24iLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Contact.js\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/Grid":
/*!*************************************!*\
  !*** external "@mui/material/Grid" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ "@mui/material/Paper":
/*!**************************************!*\
  !*** external "@mui/material/Paper" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

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
var __webpack_exports__ = (__webpack_exec__("./pages/Contact.js"));
module.exports = __webpack_exports__;

})();