exports.ids = [0];
exports.modules = {

/***/ "./components/aceEditor.js":
/*!*********************************!*\
  !*** ./components/aceEditor.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! brace */ "brace");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var brace_mode_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! brace/mode/javascript */ "brace/mode/javascript");
/* harmony import */ var brace_mode_javascript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(brace_mode_javascript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var brace_mode_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! brace/mode/markdown */ "brace/mode/markdown");
/* harmony import */ var brace_mode_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brace_mode_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var brace_ext_language_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! brace/ext/language_tools */ "brace/ext/language_tools");
/* harmony import */ var brace_ext_language_tools__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(brace_ext_language_tools__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var brace_theme_github__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! brace/theme/github */ "brace/theme/github");
/* harmony import */ var brace_theme_github__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(brace_theme_github__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-ace */ "react-ace");
/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_ace__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/home/kudobuzzhq/Desktop/CODES/mockery-server/components/aceEditor.js";








var textEditor = function textEditor(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_ace__WEBPACK_IMPORTED_MODULE_6___default.a, {
    readOnly: props.disabled || false,
    mode: props.lan,
    theme: props.theme,
    onChange: props.onChange,
    value: props.value,
    name: "Request_Body",
    editorProps: {
      $blockScrolling: true
    },
    fontSize: 18,
    height: props.height || '40vh',
    width: "100%",
    setOptions: {
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      enableSnippets: false,
      showLineNumbers: true,
      tabSize: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (textEditor);

/***/ })

};;
//# sourceMappingURL=0.js.map