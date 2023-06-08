"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4903:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

<<<<<<< Updated upstream
"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DrawerAppBar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/AppBar */ \"@mui/material/AppBar\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Divider */ \"@mui/material/Divider\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Drawer */ \"@mui/material/Drawer\");\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/List */ \"@mui/material/List\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListItem */ \"@mui/material/ListItem\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/ListItemButton */ \"@mui/material/ListItemButton\");\n/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ListItemText */ \"@mui/material/ListItemText\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"@mui/icons-material/Menu\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Toolbar */ \"@mui/material/Toolbar\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nextui-org/react */ \"@nextui-org/react\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Loader */ \"./components/Loader.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_20__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_17__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_17__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// interface Props {\n//   /**\n//    * Injected by the documentation to work in an iframe.\n//    * You won't need it on your project.\n//    */\n//   window?: () => Window;\n// }\nconst drawerWidth = 240;\n//const navItems = ['home', 'story', 'media', 'contact'];\nconst navLinks = [\n    {\n        id: \"1\",\n        name: \"Home\",\n        path: \"/\"\n    },\n    {\n        id: \"2\",\n        name: \"Story\",\n        path: \"/story\"\n    },\n    // {\n    //   name: \"Media\",\n    //   path: \"/media\",\n    // },\n    {\n        id: \"3\",\n        name: \"Contact\",\n        path: \"/contact\"\n    }, \n];\nfunction DrawerAppBar(props) {\n    const { window  } = props;\n    const [mobileOpen, setMobileOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const handleDrawerToggle = ()=>{\n        setMobileOpen((prevState)=>!prevState);\n    };\n    //const { asPath: currentPath } = useRouter();\n    const drawer = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n        onClick: handleDrawerToggle,\n        sx: {\n            textAlign: \"left\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n            sx: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                paddingLeft: \"1rem\",\n                paddingTop: \"1rem\"\n            },\n            children: navLinks.map((link, id)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_16___default()), {\n                    href: link.path,\n                    css: {\n                        marginBottom: \"1rem\"\n                    },\n                    children: link.name\n                }, link.id, false, {\n                    fileName: \"/Users/robertharris/Desktop/wsport2023v1/components/AppBar.js\",\n                    lineNumber: 66,\n                    columnNumber: 15\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/robertharris/Desktop/wsport2023v1/components/AppBar.js\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/robertharris/Desktop/wsport2023v1/components/AppBar.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n    const container = window !== undefined ? ()=>window().document.body : undefined;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_18__.useRouter)();\n    const currentRoute = router.pathname;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n        sx: {\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                fileName: \"/Users/robertharris/Desktop/wsport2023v1/components/AppBar.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default()), {\n                component: \"nav\",\n                sx: {\n                    minHeight: \"5rem\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_13___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            sx: {\n                                flexGrow: 1\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                variant: \"h6\",\n                                noWrap: true,\n                                component: \"a\",\n                                href: \"/\",\n                                sx: {\n                                    flexGrow: 1,\n                                    mr: 16,\n                                    display: {\n                                        xs: \"block\",\n                                        md: \"flex\"\n                                    },\n                                    fontWeight: 700,\n                                    letterSpacing: \".2rem\",\n                                    color: \"#fff\",\n                                    textDecoration: \"none\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_20___default()), {\n                                    loader: _components_Loader__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n                                    src: \"assets/wslogo7.png\",\n                                    width: 200,\n                                    height: 40,\n                                    alt: \"Logo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/robertharris/Desktop/wsport2023v1/components/AppBar.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/robertharris/Desktop/wsport2023v1/components/AppBar.js\",\n                                lineNumber: 85,\n                                columnNumber: 1\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/robertharris/Desktop/wsport2023v1/components/AppBar.js\",\n                            lineNumber: 84,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            color: \"inherit\",\n                            \"aria-label\": \"open drawer\",\n                            edge: \"start\",\n                            onClick: handleDrawerToggle,\n                            sx: {\n                                mr: 0,\n                                borderRadius: \"50%\",\n                                backgroundColor: \"#0469de\",\n                                display: {\n                                    xs: \"flex\",\n                                    sm: \"flex\",\n                                    md: \"none\",\n                                    horizontal: \"right\"\n                                }\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_12___default()), {}, void 0, false, {\n                                fileName: \"/Users/robertharris/Desktop/wsport2023v1/components/AppBar.js\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/robertharris/Desktop/wsport2023v1/components/AppBar.js\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                            variant: \"h6\",\n                            component: \"div\",\n                            sx: {\n                                flexGrow: 1,\n                                display: {\n                                    xs: \"none\",\n                                    sm: \"none\"\n                                }\n                            },\n                            children: \"worldshaker\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertharris/Desktop/wsport2023v1/components/AppBar.js\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            alignItems: \"center\",\n                            sx: {\n                                display: {\n                                    xs: \"none\",\n                                    sm: \"none\",\n                                    md: \"flex\",\n                                    xl: \"flex\",\n                                    lg: \"flex\"\n                                }\n                            },\n                            children: navLinks.map((link, id)=>{\n                                const selectedNavItem = \"Contact\";\n                                if (link.name != \"Contact\") {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_16___default()), {\n                                        href: link.path,\n                                        className: currentRoute === \"/\" ? \"nav.active\" : \"nonActive\",\n                                        children: link.name\n                                    }, link.id, false, {\n                                        fileName: \"/Users/robertharris/Desktop/wsport2023v1/components/AppBar.js\",\n                                        lineNumber: 133,\n                                        columnNumber: 19\n                                    }, this);\n                                } else {\n                                    // eslint-disable-next-line react/jsx-key\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_15__.Button, {\n                                        size: \"sm\",\n                                        className: \"contactButton\",\n                                        color: \"secondary\",\n                                        css: {\n                                            borderRadius: \"$xl\",\n                                            marginLeft: \"2rem\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_16___default()), {\n                                            href: link.path,\n                                            css: {\n                                                color: \"primaryLinkText\",\n                                                fontSize: \"$md\"\n                                            },\n                                            children: link.name\n                                        }, link.id, false, {\n                                            fileName: \"/Users/robertharris/Desktop/wsport2023v1/components/AppBar.js\",\n                                            lineNumber: 142,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/robertharris/Desktop/wsport2023v1/components/AppBar.js\",\n                                        lineNumber: 141,\n                                        columnNumber: 26\n                                    }, this);\n                                }\n                            // const Nav = () => {\n                            //   return (\n                            //     <nav>\n                            //       <ul>\n                            //         <li>{selectedNavItem === \"home\" ? navItems.home : null}</li>\n                            //         <li>{selectedNavItem === \"about\" ? navItems.about : null}</li>\n                            //         <li>{selectedNavItem === \"contact\" ? navItems.contact : null}</li>\n                            //       </ul>\n                            //     </nav>\n                            //   );\n                            // };\n                            // return(\n                            //     <Link key={index} href={link.path} className={currentRoute === \"/\" ? \"active\" : \"nonActive\"}>\n                            //       {link.name}\n                            //     </Link>\n                            // );\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/robertharris/Desktop/wsport2023v1/components/AppBar.js\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/robertharris/Desktop/wsport2023v1/components/AppBar.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/robertharris/Desktop/wsport2023v1/components/AppBar.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n                component: \"nav\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    anchor: \"right\",\n                    container: container,\n                    variant: \"temporary\",\n                    open: mobileOpen,\n                    onClose: handleDrawerToggle,\n                    ModalProps: {\n                        keepMounted: true\n                    },\n                    sx: {\n                        display: {\n                            xs: \"block\",\n                            sm: \"block\",\n                            md: \"none\",\n                            lg: \"none\",\n                            xl: \"none\"\n                        },\n                        \"& .MuiDrawer-paper\": {\n                            boxSizing: \"border-box\",\n                            width: drawerWidth\n                        }\n                    },\n                    children: drawer\n                }, void 0, false, {\n                    fileName: \"/Users/robertharris/Desktop/wsport2023v1/components/AppBar.js\",\n                    lineNumber: 179,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/robertharris/Desktop/wsport2023v1/components/AppBar.js\",\n                lineNumber: 178,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertharris/Desktop/wsport2023v1/components/AppBar.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTs7Ozs7d0JBQ0E7Ozs7O29CQUNMOzs7Ozs7WUFDRixDQUNOO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXJuZXh0djIvLi9jb21wb25lbnRzL0FwcEJhci5qcz9jZjRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbXVpL21hdGVyaWFsL0RpdmlkZXInO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbUJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtQnV0dG9uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IEJ1dHRvbiwgY3NzIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBteUxvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkZXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuLy8gaW50ZXJmYWNlIFByb3BzIHtcbi8vICAgLyoqXG4vLyAgICAqIEluamVjdGVkIGJ5IHRoZSBkb2N1bWVudGF0aW9uIHRvIHdvcmsgaW4gYW4gaWZyYW1lLlxuLy8gICAgKiBZb3Ugd29uJ3QgbmVlZCBpdCBvbiB5b3VyIHByb2plY3QuXG4vLyAgICAqL1xuLy8gICB3aW5kb3c/OiAoKSA9PiBXaW5kb3c7XG4vLyB9XG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xuLy9jb25zdCBuYXZJdGVtcyA9IFsnaG9tZScsICdzdG9yeScsICdtZWRpYScsICdjb250YWN0J107XG5jb25zdCBuYXZMaW5rcyA9IFtcbiAgeyBcbiAgICBpZDogXCIxXCIsXG4gICAgbmFtZTogXCJIb21lXCIsIFxuICAgcGF0aDogXCIvXCIgXG4gIH0sXG4gIHtcbiAgICBpZDogXCIyXCIsXG4gICAgbmFtZTogXCJTdG9yeVwiLFxuICAgIHBhdGg6IFwiL3N0b3J5XCIsXG4gIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiBcIk1lZGlhXCIsXG4gIC8vICAgcGF0aDogXCIvbWVkaWFcIixcbiAgLy8gfSxcbiAge1xuICAgIGlkOiBcIjNcIixcbiAgICBuYW1lOiBcIkNvbnRhY3RcIixcbiAgICBwYXRoOiBcIi9jb250YWN0XCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcmF3ZXJBcHBCYXIgKHByb3BzKSB7XG4gIGNvbnN0IHsgd2luZG93IH0gPSBwcm9wcztcbiAgY29uc3QgW21vYmlsZU9wZW4sIHNldE1vYmlsZU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZURyYXdlclRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRNb2JpbGVPcGVuKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICB9O1xuICAvL2NvbnN0IHsgYXNQYXRoOiBjdXJyZW50UGF0aCB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGRyYXdlciA9IChcbiAgICA8Qm94IG9uQ2xpY2s9e2hhbmRsZURyYXdlclRvZ2dsZX0gc3g9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCBwYWRkaW5nTGVmdDonMXJlbScsIHBhZGRpbmdUb3A6JzFyZW0nIH19PlxuICAgICAgICAgICAge25hdkxpbmtzLm1hcCgobGluaywgaWQpID0+IHtcbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgIDxMaW5rIGtleT17bGluay5pZH0gaHJlZj17bGluay5wYXRofSBjc3M9e3ttYXJnaW5Cb3R0b206JzFyZW0nfX0+XG4gICAgICAgICAgICAgICAge2xpbmsubmFtZX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IHdpbmRvdyAhPT0gdW5kZWZpbmVkID8gKCkgPT4gd2luZG93KCkuZG9jdW1lbnQuYm9keSA6IHVuZGVmaW5lZDtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGN1cnJlbnRSb3V0ZSA9IHJvdXRlci5wYXRobmFtZTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICA8QXBwQmFyIGNvbXBvbmVudD1cIm5hdlwiIHN4PXt7bWluSGVpZ2h0Oic1cmVtJ319PlxuICAgICAgICA8VG9vbGJhcj4gXG4gICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEsIH19PlxuPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXG4gICAgICAgICAgICBub1dyYXBcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgIG1yOiAxNixcbiAgICAgICAgICAgICAgZGlzcGxheTogeyB4czogJ2Jsb2NrJywgbWQ6ICdmbGV4JyB9LFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6ICcuMnJlbScsXG4gICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgbG9hZGVyPXtteUxvYWRlcn1cbiAgICAgICAgICBzcmM9XCJhc3NldHMvd3Nsb2dvNy5wbmdcIlxuICAgICAgICAgIHdpZHRoPXsyMDB9IGhlaWdodD17NDB9IFxuICAgICAgICAgIGFsdD1cIkxvZ29cIj5cblxuICAgICAgICAgIDwvSW1hZ2U+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgXG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxuICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlclRvZ2dsZX1cbiAgICAgICAgICAgIHN4PXt7IG1yOiAwLCAgYm9yZGVyUmFkaXVzOic1MCUnLCBiYWNrZ3JvdW5kQ29sb3I6JyMwNDY5ZGUnLFxuICAgICAgICAgICAgZGlzcGxheTogeyB4czonZmxleCcsIHNtOiAnZmxleCcsIG1kOiAnbm9uZScsIGhvcml6b250YWw6ICdyaWdodCcgfSwgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudUljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICBcbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSwgZGlzcGxheTogeyB4czogJ25vbmUnLCBzbTogJ25vbmUnIH0gfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB3b3JsZHNoYWtlclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8Qm94IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzeD17eyBkaXNwbGF5OiB7IHhzOiAnbm9uZScsIHNtOiAnbm9uZScsIG1kOidmbGV4JywgeGw6J2ZsZXgnLCBsZzonZmxleCcgfSB9fT5cbiAgICAgICAgICAgIHtuYXZMaW5rcy5tYXAoKGxpbmssIGlkKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTmF2SXRlbSA9IFwiQ29udGFjdFwiO1xuICAgICAgICAgICAgICBpZiAobGluay5uYW1lICE9IFwiQ29udGFjdFwiKXtcbiAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2xpbmsuaWR9IGhyZWY9e2xpbmsucGF0aH0gY2xhc3NOYW1lPXtjdXJyZW50Um91dGUgPT09IFwiL1wiID8gXCJuYXYuYWN0aXZlXCIgOiBcIm5vbkFjdGl2ZVwifT5cbiAgICAgICAgICAgICAgICAgICAge2xpbmsubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LWtleVxuICAgICAgICAgICAgICAgIHJldHVybiAoIDxCdXR0b24gc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwiY29udGFjdEJ1dHRvblwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgY3NzPXt7IGJvcmRlclJhZGl1czogXCIkeGxcIiwgbWFyZ2luTGVmdDonMnJlbScgfX0+XG4gICAgICAgICAgICA8TGluayBrZXk9e2xpbmsuaWR9IGhyZWY9e2xpbmsucGF0aH1cbiAgICAgICAgICAgICAgY3NzPXt7IGNvbG9yOiBcInByaW1hcnlMaW5rVGV4dFwiLCBmb250U2l6ZTogXCIkbWRcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAge2xpbmsubmFtZX0gXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9CdXR0b24+ICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gY29uc3QgTmF2ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAvLyAgIHJldHVybiAoXG4gICAgICAgICAgICAgIC8vICAgICA8bmF2PlxuICAgICAgICAgICAgICAvLyAgICAgICA8dWw+XG4gICAgICAgICAgICAgIC8vICAgICAgICAgPGxpPntzZWxlY3RlZE5hdkl0ZW0gPT09IFwiaG9tZVwiID8gbmF2SXRlbXMuaG9tZSA6IG51bGx9PC9saT5cbiAgICAgICAgICAgICAgLy8gICAgICAgICA8bGk+e3NlbGVjdGVkTmF2SXRlbSA9PT0gXCJhYm91dFwiID8gbmF2SXRlbXMuYWJvdXQgOiBudWxsfTwvbGk+XG4gICAgICAgICAgICAgIC8vICAgICAgICAgPGxpPntzZWxlY3RlZE5hdkl0ZW0gPT09IFwiY29udGFjdFwiID8gbmF2SXRlbXMuY29udGFjdCA6IG51bGx9PC9saT5cbiAgICAgICAgICAgICAgLy8gICAgICAgPC91bD5cbiAgICAgICAgICAgICAgLy8gICAgIDwvbmF2PlxuICAgICAgICAgICAgICAvLyAgICk7XG4gICAgICAgICAgICAgIC8vIH07XG4gICAgICAgICAgLy8gcmV0dXJuKFxuICAgICAgICAgIC8vICAgICA8TGluayBrZXk9e2luZGV4fSBocmVmPXtsaW5rLnBhdGh9IGNsYXNzTmFtZT17Y3VycmVudFJvdXRlID09PSBcIi9cIiA/IFwiYWN0aXZlXCIgOiBcIm5vbkFjdGl2ZVwifT5cbiAgICAgICAgICAvLyAgICAgICB7bGluay5uYW1lfVxuICAgICAgICAgIC8vICAgICA8L0xpbms+XG4gICAgXG4gICAgICAgICAgLy8gKTtcbiAgICAgICAgfSl9XG4gICAgICAgIHsvKiA8QnV0dG9uIHNpemU9XCJzbVwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgY3NzPXt7IGJvcmRlclJhZGl1czogXCIkeGxcIiB9fT5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9XCIvY29udGFjdFwiXG4gICAgICAgICAgICAgIGNzcz17eyBjb2xvcjogXCJwcmltYXJ5TGlua1RleHRcIiwgZm9udFNpemU6IFwiJG1kXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvQnV0dG9uPiAqL31cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgPC9BcHBCYXI+XG4gICAgICA8Qm94IGNvbXBvbmVudD1cIm5hdlwiID5cbiAgICAgICAgPERyYXdlclxuICAgICAgICBhbmNob3I9XCJyaWdodFwiXG4gICAgICAgICAgY29udGFpbmVyPXtjb250YWluZXJ9XG4gICAgICAgICAgdmFyaWFudD1cInRlbXBvcmFyeVwiXG4gICAgICAgICAgb3Blbj17bW9iaWxlT3Blbn1cbiAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XG4gICAgICAgICAgTW9kYWxQcm9wcz17e1xuICAgICAgICAgICAga2VlcE1vdW50ZWQ6IHRydWUsIC8vIEJldHRlciBvcGVuIHBlcmZvcm1hbmNlIG9uIG1vYmlsZS5cbiAgICAgICAgICB9fVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgZGlzcGxheTogeyB4czogJ2Jsb2NrJywgc206ICdibG9jaycsIG1kOidub25lJywgbGc6J25vbmUnLCB4bDonbm9uZScgIH0sXG4gICAgICAgICAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzogeyBib3hTaXppbmc6ICdib3JkZXItYm94Jywgd2lkdGg6IGRyYXdlcldpZHRoICB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7ZHJhd2VyfVxuICAgICAgICA8L0RyYXdlcj5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwcEJhciIsIkJveCIsIkNzc0Jhc2VsaW5lIiwiRGl2aWRlciIsIkRyYXdlciIsIkljb25CdXR0b24iLCJMaXN0IiwiTGlzdEl0ZW0iLCJMaXN0SXRlbUJ1dHRvbiIsIkxpc3RJdGVtVGV4dCIsIk1lbnVJY29uIiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJjc3MiLCJMaW5rIiwidHJhbnNmb3JtIiwidXNlUm91dGVyIiwibXlMb2FkZXIiLCJJbWFnZSIsImRyYXdlcldpZHRoIiwibmF2TGlua3MiLCJpZCIsIm5hbWUiLCJwYXRoIiwiRHJhd2VyQXBwQmFyIiwicHJvcHMiLCJ3aW5kb3ciLCJtb2JpbGVPcGVuIiwic2V0TW9iaWxlT3BlbiIsInVzZVN0YXRlIiwiaGFuZGxlRHJhd2VyVG9nZ2xlIiwicHJldlN0YXRlIiwiZHJhd2VyIiwib25DbGljayIsInN4IiwidGV4dEFsaWduIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJtYXAiLCJsaW5rIiwiaHJlZiIsIm1hcmdpbkJvdHRvbSIsImNvbnRhaW5lciIsInVuZGVmaW5lZCIsImRvY3VtZW50IiwiYm9keSIsInJvdXRlciIsImN1cnJlbnRSb3V0ZSIsInBhdGhuYW1lIiwiY29tcG9uZW50IiwibWluSGVpZ2h0IiwiZmxleEdyb3ciLCJ2YXJpYW50Iiwibm9XcmFwIiwibXIiLCJ4cyIsIm1kIiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwibG9hZGVyIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJhcmlhLWxhYmVsIiwiZWRnZSIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsInNtIiwiaG9yaXpvbnRhbCIsImFsaWduSXRlbXMiLCJ4bCIsImxnIiwic2VsZWN0ZWROYXZJdGVtIiwiY2xhc3NOYW1lIiwic2l6ZSIsIm1hcmdpbkxlZnQiLCJmb250U2l6ZSIsImFuY2hvciIsIm9wZW4iLCJvbkNsb3NlIiwiTW9kYWxQcm9wcyIsImtlZXBNb3VudGVkIiwiYm94U2l6aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AppBar.js\n");

/***/ }),

/***/ "./components/BottomAppBar.js":
/*!************************************!*\
  !*** ./components/BottomAppBar.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
=======
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DrawerAppBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3882);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7898);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4192);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(834);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1011);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8315);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1431);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6197);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6494);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_17__]);
framer_motion__WEBPACK_IMPORTED_MODULE_17__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





















// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }
const drawerWidth = 240;
//const navItems = ['home', 'story', 'media', 'contact'];
const navLinks = [
    {
        id: "1",
        name: "Home",
        path: "/"
    },
    {
        id: "2",
        name: "Story",
        path: "/story"
    },
    // {
    //   name: "Media",
    //   path: "/media",
    // },
    {
        id: "3",
        name: "Contact",
        path: "/contact"
    }, 
];
function DrawerAppBar(props) {
    const { window  } = props;
    const [mobileOpen, setMobileOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const handleDrawerToggle = ()=>{
        setMobileOpen((prevState)=>!prevState);
    };
    //const { asPath: currentPath } = useRouter();
    const drawer = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
        onClick: handleDrawerToggle,
        sx: {
            textAlign: "left"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
            sx: {
                display: "flex",
                flexDirection: "column",
                paddingLeft: "1rem",
                paddingTop: "1rem"
            },
            children: navLinks.map((link, id)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_16___default()), {
                    href: link.path,
                    css: {
                        marginBottom: "1rem"
                    },
                    children: link.name
                }, id);
            })
        })
    });
    const container = window !== undefined ? ()=>window().document.body : undefined;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_18__.useRouter)();
    const currentRoute = router.pathname;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
        sx: {
            display: "flex"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default()), {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default()), {
                component: "nav",
                sx: {
                    minHeight: "5rem"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_13___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sx: {
                                flexGrow: 1
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                                variant: "h6",
                                noWrap: true,
                                component: "a",
                                href: "/",
                                sx: {
                                    flexGrow: 1,
                                    mr: 16,
                                    display: {
                                        xs: "block",
                                        md: "flex"
                                    },
                                    fontWeight: 700,
                                    letterSpacing: ".2rem",
                                    color: "#fff",
                                    textDecoration: "none"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_20___default()), {
                                    loader: _components_Loader__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
                                    src: "assets/wslogo7.png",
                                    width: 200,
                                    height: 40,
                                    alt: "Logo"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default()), {
                            color: "inherit",
                            "aria-label": "open drawer",
                            edge: "start",
                            onClick: handleDrawerToggle,
                            sx: {
                                mr: 0,
                                borderRadius: "50%",
                                backgroundColor: "#0469de",
                                display: {
                                    xs: "flex",
                                    sm: "flex",
                                    md: "none",
                                    horizontal: "right"
                                }
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_12___default()), {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                            variant: "h6",
                            component: "div",
                            sx: {
                                flexGrow: 1,
                                display: {
                                    xs: "none",
                                    sm: "none"
                                }
                            },
                            children: "worldshaker"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                            alignItems: "center",
                            sx: {
                                display: {
                                    xs: "none",
                                    sm: "none",
                                    md: "flex",
                                    xl: "flex",
                                    lg: "flex"
                                }
                            },
                            children: navLinks.map((link, id)=>{
                                const selectedNavItem = "Contact";
                                if (link.name != "Contact") {
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_16___default()), {
                                        href: link.path,
                                        className: currentRoute === "/" ? "nav.active" : "nonActive",
                                        children: link.name
                                    }, id);
                                } else {
                                    // eslint-disable-next-line react/jsx-key
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_15__.Button, {
                                        size: "sm",
                                        className: "contactButton",
                                        color: "secondary",
                                        css: {
                                            borderRadius: "$xl",
                                            marginLeft: "2rem"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_16___default()), {
                                            href: link.path,
                                            css: {
                                                color: "primaryLinkText",
                                                fontSize: "$md"
                                            },
                                            children: link.name
                                        }, id)
                                    });
                                }
                            // const Nav = () => {
                            //   return (
                            //     <nav>
                            //       <ul>
                            //         <li>{selectedNavItem === "home" ? navItems.home : null}</li>
                            //         <li>{selectedNavItem === "about" ? navItems.about : null}</li>
                            //         <li>{selectedNavItem === "contact" ? navItems.contact : null}</li>
                            //       </ul>
                            //     </nav>
                            //   );
                            // };
                            // return(
                            //     <Link key={index} href={link.path} className={currentRoute === "/" ? "active" : "nonActive"}>
                            //       {link.name}
                            //     </Link>
                            // );
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                component: "nav",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6___default()), {
                    anchor: "right",
                    container: container,
                    variant: "temporary",
                    open: mobileOpen,
                    onClose: handleDrawerToggle,
                    ModalProps: {
                        keepMounted: true
                    },
                    sx: {
                        display: {
                            xs: "block",
                            sm: "block",
                            md: "none",
                            lg: "none",
                            xl: "none"
                        },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth
                        }
                    },
                    children: drawer
                })
            })
        ]
    });
};
>>>>>>> Stashed changes

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SimpleBottomNavigation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "@mui/material/BottomNavigation"
const BottomNavigation_namespaceObject = require("@mui/material/BottomNavigation");
;// CONCATENATED MODULE: external "@mui/material/BottomNavigationAction"
const BottomNavigationAction_namespaceObject = require("@mui/material/BottomNavigationAction");
;// CONCATENATED MODULE: external "@mui/icons-material/Restore"
const Restore_namespaceObject = require("@mui/icons-material/Restore");
;// CONCATENATED MODULE: external "@mui/icons-material/Favorite"
const Favorite_namespaceObject = require("@mui/icons-material/Favorite");
;// CONCATENATED MODULE: external "@mui/icons-material/LocationOn"
const LocationOn_namespaceObject = require("@mui/icons-material/LocationOn");
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./components/Loader.js
var Loader = __webpack_require__(6494);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/BottomAppBar.js











function SimpleBottomNavigation() {
    const [value, setValue] = external_react_.useState(0);
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        className: "footerBG",
        sx: {
            display: "flex",
            justifyContent: "center",
            borderTop: 1,
            borderTopColor: "#545252",
            paddingTop: "1rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            textAlign: "center"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            sx: {
                display: {
                    xs: "block",
                    sm: "block",
                    md: "block",
                    xl: "block",
                    lg: "block"
                }
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                variant: "subtitle",
                sx: {
                    fontSize: ".75rem",
                    color: "#fafafa"
                },
                children: "\xa9 2023 WorldShaker Interactive, Inc. All rights reserved."
            })
        })
    });
};


/***/ }),

/***/ 9506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_FooterNav)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
// EXTERNAL MODULE: external "@mui/icons-material/LinkedIn"
var LinkedIn_ = __webpack_require__(5939);
var LinkedIn_default = /*#__PURE__*/__webpack_require__.n(LinkedIn_);
;// CONCATENATED MODULE: external "@mui/icons-material/Facebook"
const Facebook_namespaceObject = require("@mui/icons-material/Facebook");
var Facebook_default = /*#__PURE__*/__webpack_require__.n(Facebook_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material"
const icons_material_namespaceObject = require("@mui/icons-material");
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/Loader.js
var Loader = __webpack_require__(6494);
;// CONCATENATED MODULE: ./components/FooterNav.js












const FooterNav = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
        className: "footerBG",
        color: "secondary",
        square: true,
        sx: {
            bottom: 0,
            left: 0,
            right: 0
        },
        elevation: 3,
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            component: "div",
            direction: "row",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                container: true,
                sx: {
                    maxWidth: "lg"
                },
                spacing: 2,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 12,
                        sm: 12,
                        md: 4,
                        lg: 4,
                        xl: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            flexGrow: "1",
                            component: "div",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        loader: Loader/* default */.Z,
                                        src: "assets/wslogo7.png",
                                        width: 176,
                                        height: 32,
                                        alt: "Logo"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    component: "ul",
                                    className: "mylistStyle",
                                    sx: {
                                        padding: "0 0",
                                        listStyle: "none"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        component: "li",
                                        mt: 1,
                                        display: "flex",
                                        sx: {
                                            padding: "0 0"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                href: "http://linkedin.com/in/robertsharris",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((LinkedIn_default()), {
                                                    fontSize: "large"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Facebook_default()), {
                                                    fontSize: "large"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_namespaceObject.Instagram, {
                                                    fontSize: "large"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 12,
                        sm: 12,
                        md: 8,
                        lg: 8,
                        xl: 8,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            component: "div",
                            display: "flex",
                            flexGrow: "1",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    component: "div",
                                    flexGrow: "1",
                                    sx: {
                                        paddingLeft: {
                                            sm: "0rem"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            h4: true,
                                            css: {
                                                color: "#fafafa"
                                            },
                                            children: "Company"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            component: "ul",
                                            className: "mylistStyle",
                                            sx: {
                                                padding: "0 0",
                                                listStyle: "none"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    component: "li",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                        href: "/story",
                                                        children: "Story"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    component: "li",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                        href: "/contact",
                                                        children: "Contact"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    component: "div",
                                    flexGrow: "1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            h4: true,
                                            css: {
                                                color: "#fafafa"
                                            },
                                            children: "Resources"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            component: "ul",
                                            className: "mylistStyle",
                                            sx: {
                                                padding: "0 0",
                                                listStyle: "none"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    component: "li",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                        href: "http://www.adobe.com",
                                                        children: "Adobe"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    component: "li",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                        href: "http://www.figma.com",
                                                        children: "OpenAI"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    component: "li",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                        href: "http://www.figma.com",
                                                        children: "ChatGPT"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    component: "li",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                        href: "http://www.figma.com",
                                                        children: "Figma"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    component: "li",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                        href: "https://www.framer.com/motion",
                                                        children: "Framer Motion"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    component: "li",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                        href: "https://m3.material.io",
                                                        children: "Material"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    component: "li",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                        href: "http://www.figma.com",
                                                        children: "Midjourney"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    component: "li",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                        href: "https://nextjs.org/",
                                                        children: "Next.js"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    component: "li",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                        href: "https://react.dev/",
                                                        children: "React"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    component: "div",
                                    flexGrow: "1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            h4: true,
                                            css: {
                                                color: "#fafafa"
                                            },
                                            children: "Partners"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            component: "ul",
                                            className: "mylistStyle",
                                            sx: {
                                                padding: "0 0",
                                                listStyle: "none"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    component: "li"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    component: "li",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                        href: "https://ionblade.com/",
                                                        children: "IONBLADE"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    component: "li",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                        href: "https://www.godaddy.com/",
                                                        children: "GoDaddy"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    component: "div",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            h4: true,
                                            css: {
                                                color: "#fafafa"
                                            },
                                            children: "Legal"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                            component: "ul",
                                            className: "mylistStyle",
                                            sx: {
                                                padding: "0 0",
                                                listStyle: "none"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    component: "li"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    component: "li",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                        href: "/",
                                                        children: "Terms"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                    component: "li",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                        href: "/",
                                                        children: "Privacy"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_FooterNav = (FooterNav);


/***/ }),

/***/ 5789:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4903);
/* harmony import */ var _FooterNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9506);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8549);
/* harmony import */ var _BottomAppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9863);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AppBar__WEBPACK_IMPORTED_MODULE_2__]);
_AppBar__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Layout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Meta__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Container, {
                maxWidth: "false",
                disableGutters: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AppBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        children: children
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FooterNav__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BottomAppBar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                        ]
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1921);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_theme_mytheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6459);
/* harmony import */ var _styles_theme_lightTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(679);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5789);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_9__]);
_components_Layout__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







//import createEmotionCache from '../utility/createEmotionCache';



// import '@nextcss/reset';

// let theme = createTheme();
// theme = responsiveFontSizes(lightTheme);
const clientSideEmotionCache = (0,_utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
function MyApp({ Component , emotionCache =clientSideEmotionCache , pageProps ,  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.CacheProvider, {
        value: emotionCache,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.NextUIProvider, {
            theme: _styles_theme_mytheme__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
                theme: _styles_theme_lightTheme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CssBaseline, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__);

const mytheme = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    type: "light",
    theme: {
        colors: {
            // brand colors
            primaryLight: "#6c5adc",
            primaryDark: "#322294",
            primaryLightHover: "$green300",
            primaryLightActive: "$green400",
            primaryLightContrast: "$green600",
            primaryLinkText: "#263238",
            primary: "#010203",
            primaryBorder: "$green500",
            primaryBorderHover: "$green600",
            primarySolidHover: "$green700",
            primarySolidContrast: "$white",
            primaryShadow: "$green500",
            secondary: "#0738F5",
            secondaryLight: "#d6f59a",
            secondaryDark: "#8eaa5a",
            gradient: "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
            //link: '#D95550',
            // you can also create your own color
            myColor: "#ff4ecd"
        },
        breakpoints: {
            xs: "650px",
            sm: "960px",
            md: "1280px",
            lg: "1400px",
            xl: "1920px"
        },
        shadows: {
            xs: "0 2px 8px 1px rgb(104 112 118 / 0.07), 0 1px 1px -1px rgb(104 112 118 / 0.04)",
            sm: "0 2px 8px 2px rgb(104 112 118 / 0.07), 0 2px 4px -1px rgb(104 112 118 / 0.04)",
            md: "0 12px 20px 6px rgb(104 112 118 / 0.08)",
            lg: "0 12px 34px 6px rgb(104 112 118 / 0.18)",
            xl: "0 25px 65px 0px rgb(104 112 118 / 0.35)"
        },
        // to use along with css dropShadow utility
        dropShadows: {
            xs: "drop-shadow(0 2px 4px rgb(104 112 118 / 0.07)) drop-shadow(0 1px 1px rgb(104 112 118 / 0.04))",
            sm: "drop-shadow(0 2px 8px rgb(104 112 118 / 0.07)) drop-shadow(0 2px 4px rgb(104 112 118 / 0.04))",
            md: "drop-shadow(0 4px 12px rgb(104 112 118 / 0.08)) drop-shadow(0 20px 8px rgb(104 112 118 / 0.04))",
            lg: "drop-shadow(0 12px 24px rgb(104 112 118 / 0.15)) drop-shadow(0 12px 14px rgb(104 112 118 / 0.1))",
            xl: "drop-shadow(0 25px 34px rgb(104 112 118 / 0.35))"
        },
        lineHeights: {
            xs: 1,
            /* 16px */ sm: 1.25,
            /* 20px */ base: 1.5,
            /* 24px */ md: 1.5,
            /* 24px */ lg: 1.5,
            /* 28px */ xl: 1.5,
            /* 28px */ "2xl": 2,
            /* 32px */ "3xl": 2.25,
            /* 36px */ "4xl": 2.5,
            /* 40px */ "5xl": 1,
            /* 16px */ "6xl": 1,
            /* 16px */ "7xl": 1,
            /* 16px */ "8xl": 1,
            /* 16px */ "9xl": 1 /* 16px */ 
        },
        letterSpacings: {
            tighter: "-0.05em",
            tight: "-0.025em",
            normal: "0",
            wide: "0.025em",
            wider: "0.05em",
            widest: "0.1em"
        },
        fontSizes: {
            xs: "0.75rem",
            /* 12px */ sm: "0.875rem",
            /* 14px */ base: "1rem",
            /* 16px */ md: "1rem",
            /* 16px */ lg: "1.125rem",
            /* 18px */ xl: "1.25rem",
            /* 20px */ "2xl": "1.5rem",
            /* 24px */ "3xl": "1.875rem",
            /* 30px */ "4xl": "2.25rem",
            /* 36px */ "5xl": "3rem",
            /* 48px */ "6xl": "3.75rem",
            /* 60px */ "7xl": "4.5rem",
            /* 72px */ "8xl": "6rem",
            /* 96px */ "9xl": "8rem"
        },
        radii: {
            xs: "7px",
            sm: "9px",
            md: "12px",
            base: "14px",
            lg: "14px",
            xl: "20px",
            "2xl": "24px",
            "3xl": "32px",
            squared: "33%",
            rounded: "50%",
            pill: "9999px"
        },
        borderWeights: {
            light: "1px",
            normal: "2px",
            bold: "3px",
            extrabold: "4px",
            black: "5px"
        },
        letterSpacings: {
            tighter: "-0.05em",
            tight: "-0.025em",
            normal: "0",
            wide: "0.025em",
            wider: "0.05em",
            widest: "0.1em"
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mytheme);


/***/ }),

/***/ 1921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ utility_createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./utility/createEmotionCache.js

const createEmotionCache = ()=>{
    return cache_default()({
        key: "css",
        prepend: true
    });
};
/* harmony default export */ const utility_createEmotionCache = (createEmotionCache);


/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 5939:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LinkedIn");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 4960:
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7898:
/***/ ((module) => {

module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 4192:
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 1011:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemButton");

/***/ }),

/***/ 8315:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 1431:
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 5574:
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 6735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9646:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,964,675,952,664,549,679,494], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();