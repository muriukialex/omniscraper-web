/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkomniscraper_frontend"] = self["webpackChunkomniscraper_frontend"] || []).push([["main"],{

/***/ 6755:
/*!******************************!*\
  !*** ./src/axiosInstance.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"axiosInstance\": () => (/* binding */ axiosInstance)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ 9669);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar baseURL = \"\".concat(\"http://localhost:8000\", \"/api/\");\nvar axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: baseURL,\n  timeout: 5000,\n  headers: {\n    Authorization: localStorage.getItem(\"access_token\") ? \"JWT \".concat(localStorage.getItem(\"access_token\")) : null,\n    \"Content-Type\": \"application/json\",\n    accept: \"application/json\"\n  }\n});\naxiosInstance.interceptors.response.use(function (response) {\n  return response;\n}, function (error) {\n  var originalRequest = error.config;\n\n  if (localStorage.getItem(\"refresh_token\") && error.response.status === 401 && error.response.statusText === \"Unauthorized\") {\n    var refresh_token = localStorage.getItem(\"refresh_token\");\n    return axiosInstance.post(\"/token/refresh/\", {\n      refresh: refresh_token\n    }).then(function (response) {\n      localStorage.setItem(\"access_token\", response.data.access);\n      localStorage.setItem(\"refresh_token\", response.data.refresh);\n      axiosInstance.defaults.headers[\"Authorization\"] = \"JWT \" + response.data.access;\n      originalRequest.headers[\"Authorization\"] = \"JWT \" + response.data.access;\n      return axiosInstance(originalRequest);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }\n\n  return Promise.reject(_objectSpread({}, error));\n});\n\n//# sourceURL=webpack://omniscraper_frontend/./src/axiosInstance.js?");

/***/ }),

/***/ 624:
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ 6550);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ 9669);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ 7259);\n/* harmony import */ var _axiosInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../axiosInstance */ 6755);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ 5635);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ 3457);\n/* harmony import */ var _bit_mhnpd_react_loader_spinner_three_dots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bit/mhnpd.react-loader-spinner.three-dots */ 8905);\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! history */ 648);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Home = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors\"), __webpack_require__.e(\"src_components_Home_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Home */ 4830));\n});\nvar Login = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors\"), __webpack_require__.e(\"src_components_Login_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Login */ 351));\n});\nvar FilteredVideos = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors\"), __webpack_require__.e(\"src_components_FilteredVideos_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./FilteredVideos */ 7624));\n});\n\nvar Video = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors\"), __webpack_require__.e(\"src_components_Video_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Video */ 1219));\n});\n\n\n\n\nvar theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default)({\n  typography: {\n    fontFamily: [\"Montserrat\"].join(\",\")\n  },\n  palette: {\n    primary: {\n      main: \"#185adb\"\n    },\n    secondary: {\n      main: \"#cf0000\"\n    }\n  }\n});\nvar history = (0,history__WEBPACK_IMPORTED_MODULE_6__.createBrowserHistory)();\nhistory.listen(function (location) {\n  window.ga(\"send\", \"pageview\"), location.pathname;\n  console.log(\"Hello\");\n});\n\nvar App = /*#__PURE__*/function (_Component) {\n  _inherits(App, _Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      username: \"\",\n      password: \"\",\n      loggedIn: localStorage.getItem(\"access_token\") ? true : false,\n      loginLoading: false,\n      error: null,\n      clickedTag: parseInt(localStorage.getItem(\"clicked_tag\")) || null,\n      tagsLoading: false,\n      videoTags: [],\n      videosLoadingError: false,\n      loading: false,\n      offset: 0,\n      limit: 8,\n      videos: [],\n      hasMore: true\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"loadVideos\", function () {\n      _this.setState({\n        loading: true\n      }, function () {\n        var _this$state = _this.state,\n            offset = _this$state.offset,\n            limit = _this$state.limit;\n        var url = \"\".concat(\"http://localhost:8000\", \"/api/videos/?limit=\").concat(limit, \"&offset=\").concat(offset);\n        axios__WEBPACK_IMPORTED_MODULE_1___default().get(url).then(function (res) {\n          var newVideos = res.data.videos;\n          var hasMore = res.data.has_more;\n\n          _this.setState({\n            hasMore: hasMore,\n            loading: false,\n            videos: [].concat(_toConsumableArray(_this.state.videos), _toConsumableArray(newVideos)),\n            offset: offset + limit\n          });\n        })[\"catch\"](function (err) {\n          _this.setState({\n            videosLoadingError: err.message,\n            loading: false\n          });\n        });\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"loadTags\", function () {\n      _this.setState({\n        tagsLoading: true\n      }, function () {\n        var url = \"\".concat(\"http://localhost:8000\", \"/api/tags/\");\n        axios__WEBPACK_IMPORTED_MODULE_1___default().get(url).then(function (res) {\n          var newTags = res.data.tags;\n\n          _this.setState({\n            videoTags: newTags,\n            tagsLoading: false\n          });\n        })[\"catch\"](function (err) {\n          _this.setState({\n            tagsLoading: false\n          });\n        });\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleClickedTag\", function (tag) {\n      _this.setState({\n        clickedTag: tag\n      }, function () {\n        return localStorage.setItem(\"clicked_tag\", _this.state.clickedTag);\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleClearClickedTag\", function () {\n      localStorage.removeItem(\"clicked_tag\");\n\n      _this.setState({\n        clickedTag: null\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleChange\", function (e) {\n      _this.setState(_defineProperty({}, e.target.name, e.target.value));\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleLogin\", function (e) {\n      var _this$state2 = _this.state,\n          username = _this$state2.username,\n          password = _this$state2.password;\n      e.preventDefault();\n\n      _this.setState({\n        loginLoading: true\n      }, function () {\n        _axiosInstance__WEBPACK_IMPORTED_MODULE_3__.axiosInstance.post(\"token/obtain/\", {\n          username: username,\n          password: password\n        }).then(function (response) {\n          _axiosInstance__WEBPACK_IMPORTED_MODULE_3__.axiosInstance.defaults.headers.Authorization = \"JWT \" + response.data.access;\n          localStorage.setItem(\"access_token\", response.data.access);\n          localStorage.setItem(\"refresh_token\", response.data.refresh);\n\n          _this.setState({\n            loggedIn: true,\n            loginLoading: false,\n            username: \"\",\n            password: \"\"\n          });\n        })[\"catch\"](function (error) {\n          _this.setState({\n            loggedIn: false,\n            loginLoading: false\n          });\n        });\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleLogout\", function () {\n      _axiosInstance__WEBPACK_IMPORTED_MODULE_3__.axiosInstance.post(\"/blacklist/\", {\n        refresh_token: localStorage.getItem(\"refresh_token\")\n      }).then(function (response) {\n        localStorage.removeItem(\"access_token\");\n        localStorage.removeItem(\"refresh_token\");\n        _axiosInstance__WEBPACK_IMPORTED_MODULE_3__.axiosInstance.defaults.headers.Authorization = null;\n\n        _this.setState({\n          loggedIn: false\n        });\n      })[\"catch\"](function (e) {\n        console.log(e.statusText);\n\n        _this.setState({\n          loggedIn: false\n        });\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      window.ga(\"create\", \"UA-190601275-1\", \"auto\");\n      window.ga(\"send\", \"pageview\");\n      this.loadTags();\n      this.loadVideos();\n    } // componentDidUpdate(prevProps) {\n    //   const { location } = this.props;\n    //   if (location !== prevProps.location) {\n    //     window.ga(\"send\", \"pageview\"), location.pathname;\n    //     console.log(\"Hello\");\n    //   }\n    // }\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var handleChange = this.handleChange,\n          handleLogin = this.handleLogin,\n          handleLogout = this.handleLogout,\n          handleClickedTag = this.handleClickedTag,\n          handleClearClickedTag = this.handleClearClickedTag,\n          loadTags = this.loadTags,\n          loadVideos = this.loadVideos;\n      var _this$state3 = this.state,\n          username = _this$state3.username,\n          password = _this$state3.password,\n          error = _this$state3.error,\n          loggedIn = _this$state3.loggedIn,\n          loginLoading = _this$state3.loginLoading,\n          videoTags = _this$state3.videoTags,\n          clickedTag = _this$state3.clickedTag,\n          tagsLoading = _this$state3.tagsLoading,\n          videosLoadingError = _this$state3.videosLoadingError,\n          loading = _this$state3.loading,\n          hasMore = _this$state3.hasMore,\n          videos = _this$state3.videos;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {\n        theme: theme\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Router, {\n        history: history\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          style: {\n            height: \"100vh\",\n            display: \"grid\",\n            placeItems: \"center\"\n          }\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_bit_mhnpd_react_loader_spinner_three_dots__WEBPACK_IMPORTED_MODULE_4__.ThreeDots, {\n          color: \"#185adb\",\n          height: 50,\n          width: 50\n        }))\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Nav__WEBPACK_IMPORTED_MODULE_2__.default, {\n        loggedIn: loggedIn,\n        handleLogout: handleLogout,\n        handleClearClickedTag: handleClearClickedTag\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Switch, null, loggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Redirect, {\n        from: \"/login\",\n        to: \"/\"\n      }) : \"\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n        exact: true,\n        path: \"/\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Home, {\n        loggedIn: loggedIn,\n        videoTags: videoTags,\n        handleClickedTag: handleClickedTag,\n        clickedTag: clickedTag,\n        tagsLoading: tagsLoading,\n        loadTags: loadTags,\n        error: videosLoadingError,\n        loading: loading,\n        hasMore: hasMore,\n        videos: videos,\n        loadVideos: loadVideos\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n        path: \"/tags/:slug\",\n        children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FilteredVideos, {\n          videoTags: videoTags,\n          loggedIn: loggedIn,\n          handleClickedTag: handleClickedTag,\n          clickedTag: clickedTag,\n          tagsLoading: tagsLoading,\n          loadTags: loadTags\n        })\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n        path: \"/login\",\n        children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Login, {\n          username: username,\n          password: password,\n          loginLoading: loginLoading,\n          error: error,\n          handleChange: handleChange,\n          handleSubmit: handleLogin\n        })\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n        path: \"/:slug\",\n        children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Video, null)\n      }))))));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://omniscraper_frontend/./src/components/App.js?");

/***/ }),

/***/ 7259:
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* unused harmony export Nav */\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ 5258);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ 8358);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ 282);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ 2543);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ 3727);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\nvar styles = function styles(theme) {\n  return {\n    navLink: {\n      textDecoration: \"none\",\n      cursor: \"pointer\"\n    }\n  };\n};\n\nvar Nav = /*#__PURE__*/function (_Component) {\n  _inherits(Nav, _Component);\n\n  var _super = _createSuper(Nav);\n\n  function Nav() {\n    _classCallCheck(this, Nav);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Nav, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          loggedIn = _this$props.loggedIn,\n          handleLogout = _this$props.handleLogout,\n          classes = _this$props.classes,\n          handleClearClickedTag = _this$props.handleClearClickedTag;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        style: {\n          flexGrow: 1,\n          margin: 0\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__.default, {\n        position: \"fixed\",\n        style: {\n          backgroundColor: \"#1a1c20\"\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n        style: {\n          flexGrow: 1,\n          textTransform: \"uppercase\",\n          letterSpacing: \"0.1em\"\n        },\n        onClick: handleClearClickedTag\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n        to: \"/\",\n        style: {\n          color: \"white\",\n          textDecoration: \"none\",\n          cursor: \"pointer\"\n        }\n      }, \"Omniscraper\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, loggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, {\n        size: \"small\",\n        variant: \"contained\",\n        component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link,\n        to: \"/\",\n        className: classes.navLink,\n        onClick: handleLogout\n      }, \"Logout\"))))));\n    }\n  }]);\n\n  return Nav;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default)(styles)(Nav));\n\n//# sourceURL=webpack://omniscraper_frontend/./src/components/Nav.js?");

/***/ }),

/***/ 2352:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 3935);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ 624);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ 8548);\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__.default, null), document.getElementById(\"app\"));\n\nif (\"serviceWorker\" in navigator) {\n  window.addEventListener(\"load\", function () {\n    navigator.serviceWorker.register(\"./service-worker.js\").then(function (registration) {\n      console.log(\"SW registered: \", registration);\n    })[\"catch\"](function (err) {\n      console.log(\"SW ERROR: \", err);\n    });\n  });\n}\n\n//# sourceURL=webpack://omniscraper_frontend/./src/index.js?");

/***/ }),

/***/ 1424:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 3645);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\nhtml, body {\\r\\n    font-family: \\\"Montserrat\\\", sans-serif;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://omniscraper_frontend/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ 8548:
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3379);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ 1424);\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://omniscraper_frontend/./src/index.css?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(2352)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);