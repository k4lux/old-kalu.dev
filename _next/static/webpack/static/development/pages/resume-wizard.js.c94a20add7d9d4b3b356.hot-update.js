webpackHotUpdate("static/development/pages/resume-wizard.js",{

/***/ "./components/molecules/employment-wizard/index.js":
/*!*********************************************************!*\
  !*** ./components/molecules/employment-wizard/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atoms_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _atoms/input */ "./components/atoms/input/index.js");
/* harmony import */ var _atoms_text_area__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! _atoms/text-area */ "./components/atoms/text-area/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./components/molecules/employment-wizard/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/components/molecules/employment-wizard/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var EmploymentWizard = function EmploymentWizard(_ref) {
  var isOpen = _ref.isOpen,
      employment = _ref.employment,
      onChange = _ref.onChange,
      onToggle = _ref.onToggle;
  var wizardRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
  var wizardHeight;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    wizardHeight = wizardRef.current.scrollHeight;
  });
  return __jsx("div", {
    ref: wizardRef,
    style: {
      height: isOpen ? "".concat(wizardHeight, "px") : "77px"
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_css__WEBPACK_IMPORTED_MODULE_6___default.a.wizard, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_css__WEBPACK_IMPORTED_MODULE_6___default.a.open, isOpen)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("button", {
    onClick: onToggle,
    className: _styles_css__WEBPACK_IMPORTED_MODULE_6___default.a.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_6___default.a.titleGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, employment.jobTitle, " at ", employment.employer), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_6___default.a.periodDate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, employment.startDate, " - ", employment.endDate)), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_6___default.a.arrowIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("path", {
    d: "M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })))), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_6___default.a.form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "jobTitle",
    name: "jobTitle",
    label: "Job Title",
    value: employment.jobTitle,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "employer",
    name: "employer",
    label: "Employer",
    value: employment.employer,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "city",
    name: "city",
    label: "City",
    value: employment.city,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_6___default.a.periodDateGrid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "startDate",
    name: "startDate",
    label: "Start Date",
    value: employment.startDate,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "endDate",
    name: "endDate",
    label: "End Date",
    value: employment.endDate,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), __jsx(_atoms_text_area__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "description",
    name: "description",
    label: "Description",
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, employment.description)));
};

EmploymentWizard.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  employment: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    jobTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    employer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    city: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    startDate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    endDate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.description
  }),
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
EmploymentWizard.defaultProps = {
  isOpen: false,
  employment: {
    jobTitle: 'Frontend Develoer',
    employer: 'Cheesecake Labs',
    city: 'Florianópolis',
    startDate: 'Oct, 2018',
    endDate: 'Oct, 2019',
    description: ''
  },
  onChange: function onChange() {},
  onToggle: function onToggle() {}
};
/* harmony default export */ __webpack_exports__["default"] = (EmploymentWizard);

/***/ })

})
//# sourceMappingURL=resume-wizard.js.c94a20add7d9d4b3b356.hot-update.js.map