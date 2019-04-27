webpackHotUpdate("static/development/pages/generate.js",{

/***/ "./pages/generate.js":
/*!***************************!*\
  !*** ./pages/generate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mocker; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shopify/polaris/styles.css */ "./node_modules/@shopify/polaris/styles.css");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash/fp */ "./node_modules/lodash/fp.js");
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash_fp__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_22__);















var _jsxFileName = "/home/kudobuzzhq/Desktop/CODES/mockery-server/pages/generate.js";






var AppProviderDynamic = next_dynamic__WEBPACK_IMPORTED_MODULE_18___default()(function () {
  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_12___default.a.resolve(__webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js").AppProvider);
}, {});

var DynamicAceEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_18___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/aceEditor */ "./components/aceEditor.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/aceEditor */ "./components/aceEditor.js")];
    },
    modules: ['../components/aceEditor']
  }
});


var options = [{
  label: 'POST',
  value: 'post'
}, {
  label: 'GET',
  value: 'get'
}, {
  label: 'PUT',
  value: 'put'
}];



var Mocker =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(Mocker, _React$Component);

  function Mocker() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Mocker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Mocker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "state", {
      body: '{}',
      endpoint: '',
      method: 'get',
      status: 200,
      output: "\n  {\n   endpoint:  http://localhost:5000,\n   method: get,\n   statusCode: 200,\n    body: {}\n  }\n  "
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleChange",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(newValue) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.setState({
                  method: newValue
                });

              case 2:
                _this.changeRender();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "changeRender", function () {
      var output = "\n  {\n    endpoint:  http://localhost:5000/".concat(_this.state.endpoint, ",\n    method: ").concat(_this.state.method, ",\n    statusCode: ").concat(_this.state.status, " ,\n    body: ").concat(_this.state.body, "\n   }\n  ");

      _this.setState({
        output: output
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "saveRequest",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
      var _this$state, output, rest, loader, body;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$state = _this.state, output = _this$state.output, rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$state, ["output"]);
              console.log(rest);
              loader = antd__WEBPACK_IMPORTED_MODULE_20__["message"].loading("saving request");
              body = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, rest);
              _context2.prev = 4;
              _context2.next = 7;
              return fetch("/requests", {
                method: "POST",
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(rest),
                headers: {
                  'Content-Type': 'application/json',
                  "X-MOCKERY-TOKEN": Object(nookies__WEBPACK_IMPORTED_MODULE_21__["parseCookies"])(null).__token
                }
              }).then(function (res) {
                return res.json();
              });

            case 7:
              setTimeout(loader);
              antd__WEBPACK_IMPORTED_MODULE_20__["message"].success("request saved successfully");
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](4);
              setTimeout(loader);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 11]]);
    })));

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Mocker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(AppProviderDynamic, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_19__["Page"], {
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_20__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_20__["Col"], {
        lg: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_19__["Card"], {
        sectioned: true,
        title: "Add new mock endpoint",
        primaryFooterAction: {
          content: 'Add request',
          disabled: !this.state.body || !this.state.endpoint || !this.state.method || !this.state.status,
          onAction: function onAction() {
            return _this2.saveRequest();
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_19__["TextField"], {
        label: "Endpoint",
        type: "text",
        value: this.state.endpoint,
        prefix: "http://localhost:5000/",
        onChange:
        /*#__PURE__*/
        function () {
          var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(text) {
            var hText;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    hText = text.split(' ').join('-').toLowerCase();
                    _context3.next = 3;
                    return _this2.setState({
                      endpoint: hText
                    });

                  case 3:
                    _this2.changeRender();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function (_x2) {
            return _ref3.apply(this, arguments);
          };
        }(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
        style: {
          marginTop: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_19__["Select"], {
        label: "Date range",
        options: options,
        onChange: this.handleChange,
        value: this.state.method,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
        style: {
          marginTop: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_19__["TextField"], {
        label: "StatusCode",
        type: "number",
        value: this.state.status,
        onChange:
        /*#__PURE__*/
        function () {
          var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4(text) {
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return _this2.setState({
                      status: text
                    });

                  case 2:
                    _this2.changeRender();

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          return function (_x3) {
            return _ref4.apply(this, arguments);
          };
        }(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
        style: {
          marginTop: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }), "Request body", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(DynamicAceEditor, {
        onChange:
        /*#__PURE__*/
        function () {
          var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5(newValue) {
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return _this2.setState({
                      body: newValue
                    });

                  case 2:
                    _this2.changeRender();

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));

          return function (_x4) {
            return _ref5.apply(this, arguments);
          };
        }(),
        value: this.state.body,
        lan: "javascript",
        theme: "github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_20__["Col"], {
        lg: 11,
        offset: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_19__["Card"], {
        sectioned: true,
        title: "Try request",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(DynamicAceEditor, {
        lan: "markdown",
        height: "30vh",
        disabled: true,
        value: this.state.output,
        theme: "github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_19__["Card"], {
        sectioned: true,
        title: "Render output",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(DynamicAceEditor, {
        lan: "markdown",
        height: "40vh",
        disabled: true,
        value: this.state.output,
        theme: "github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee6(ctx) {
        var cookie;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                cookie = Object(nookies__WEBPACK_IMPORTED_MODULE_21__["parseCookies"])(ctx);

                if (cookie.__token) {
                  _context6.next = 5;
                  break;
                }

                if (true) {
                  _context6.next = 4;
                  break;
                }

                return _context6.abrupt("return", ctx.res.redirect("/users"));

              case 4:
                return _context6.abrupt("return", next_router__WEBPACK_IMPORTED_MODULE_22___default.a.push("/users"));

              case 5:
                return _context6.abrupt("return", {});

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getInitialProps(_x5) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Mocker;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);



/***/ })

})
//# sourceMappingURL=generate.js.84ceeb99b706644fb2a0.hot-update.js.map