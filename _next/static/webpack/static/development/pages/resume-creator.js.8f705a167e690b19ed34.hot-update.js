webpackHotUpdate("static/development/pages/resume-creator.js",{

/***/ "./pages/resume-creator.js":
/*!*********************************!*\
  !*** ./pages/resume-creator.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _templates_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! _templates/page */ "./components/templates/page/index.js");
/* harmony import */ var _atoms_page_title__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! _atoms/page-title */ "./components/atoms/page-title/index.js");
/* harmony import */ var _atoms_container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! _atoms/container */ "./components/atoms/container/index.js");
/* harmony import */ var _molecules_form_section__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! _molecules/form-section */ "./components/molecules/form-section/index.js");
/* harmony import */ var _atoms_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! _atoms/input */ "./components/atoms/input/index.js");
/* harmony import */ var _atoms_text_area__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! _atoms/text-area */ "./components/atoms/text-area/index.js");
/* harmony import */ var _atoms_form_description__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! _atoms/form-description */ "./components/atoms/form-description/index.js");
/* harmony import */ var _organisms_employment_wizard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! _organisms/employment-wizard */ "./components/organisms/employment-wizard/index.js");
/* harmony import */ var _organisms_education_wizard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! _organisms/education-wizard */ "./components/organisms/education-wizard/index.js");
/* harmony import */ var _organisms_skill_wizard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! _organisms/skill-wizard */ "./components/organisms/skill-wizard/index.js");
/* harmony import */ var _organisms_link_wizard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! _organisms/link-wizard */ "./components/organisms/link-wizard/index.js");
/* harmony import */ var _atoms_add_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! _atoms/add-button */ "./components/atoms/add-button/index.js");
/* harmony import */ var _atoms_upload_photo_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! _atoms/upload-photo-field */ "./components/atoms/upload-photo-field/index.js");










var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/pages/resume-creator.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;















var ResumeCreator =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ResumeCreator, _Component);

  function ResumeCreator(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ResumeCreator);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ResumeCreator).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "COMMON_FIELDS", {
      startDate: '',
      endDate: '',
      description: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "WIZARD_DEFAULT_VALUES", {
      employments: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
        jobTitle: '',
        employer: ''
      }, _this.COMMON_FIELDS),
      educations: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
        school: '',
        degree: ''
      }, _this.COMMON_FIELDS),
      skills: {
        name: '',
        level: 1
      },
      links: {
        name: '',
        level: 1
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      firstName: '',
      lastName: '',
      photo: '',
      jobTitle: '',
      email: '',
      phone: '',
      address: '',
      professionalSummary: '',
      employments: [],
      educations: [],
      skills: [],
      links: []
    });

    _this.handleWizardAdd = _this.handleWizardAdd.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleWizardRemove = _this.handleWizardRemove.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleWizardChange = _this.handleWizardChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleInputChange = _this.handleInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handlePhotoLoad = _this.handlePhotoLoad.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ResumeCreator, [{
    key: "handleWizardToggle",
    value: function handleWizardToggle(collection, index) {
      this.setState(function (prevState) {
        return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, collection, prevState[collection].map(function (item, currentIndex) {
          if (index === currentIndex) {
            item.isOpen = !item.isOpen;
          }

          return item;
        }));
      });
    }
  }, {
    key: "handleWizardAdd",
    value: function handleWizardAdd(collection) {
      var _this2 = this;

      this.setState(function (prevState) {
        var items = prevState[collection].map(function (item) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, item, {
            isOpen: false
          });
        });
        return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, collection, [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(items), [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _this2.WIZARD_DEFAULT_VALUES[collection], {
          isOpen: true
        })]));
      });
    }
  }, {
    key: "handleWizardRemove",
    value: function handleWizardRemove(collection, index) {
      this.setState(function (prevState) {
        return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, collection, prevState[collection].filter(function (item, currentIndex) {
          return index !== currentIndex;
        }));
      });
    }
  }, {
    key: "handleWizardChange",
    value: function handleWizardChange(collection, index, name, value) {
      this.setState(function (prevState) {
        return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, collection, prevState[collection].map(function (item, currentIndex) {
          if (index === currentIndex) {
            item = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, item, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, name, value));
          }

          return item;
        }));
      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, event.target.name, event.target.value));
    }
  }, {
    key: "handlePhotoLoad",
    value: function handlePhotoLoad(base64) {
      this.setState({
        photo: base64
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          employments = _this$state.employments,
          educations = _this$state.educations,
          skills = _this$state.skills,
          links = _this$state.links,
          firstName = _this$state.firstName,
          lastName = _this$state.lastName,
          photo = _this$state.photo,
          jobTitle = _this$state.jobTitle,
          email = _this$state.email,
          phone = _this$state.phone,
          address = _this$state.address,
          professionalSummary = _this$state.professionalSummary;
      return __jsx(_templates_page__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Resume Creator",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx(_atoms_container__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx(_atoms_page_title__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Resume Creator"), __jsx(_molecules_form_section__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Personal Details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "firstName",
        name: "firstName",
        label: "First Name",
        value: firstName,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "lastName",
        name: "lastName",
        label: "Last Name",
        value: lastName,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), __jsx(_atoms_upload_photo_field__WEBPACK_IMPORTED_MODULE_23__["default"], {
        photoSrc: photo,
        onPhotoLoad: this.handlePhotoLoad,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "jobTitle",
        name: "jobTitle",
        label: "Job Title",
        value: jobTitle,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "email",
        name: "email",
        label: "Email",
        type: "email",
        value: email,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "phone",
        name: "phone",
        label: "Phone",
        type: "tel",
        value: phone,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "address",
        name: "address",
        label: "address",
        type: "Address",
        value: address,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      })), __jsx(_molecules_form_section__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Professional Summary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, __jsx(_atoms_text_area__WEBPACK_IMPORTED_MODULE_16__["default"], {
        id: "professionalSummary",
        name: "professionalSummary",
        label: "Include 2-3 clear sentences about your overall exerience",
        onChange: this.handleInputChange,
        value: professionalSummary,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      })), __jsx(_molecules_form_section__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Employment History",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, __jsx(_atoms_form_description__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "Include your last 10 years of relevant experience and dates in this section. List your most recent position first."), employments.map(function (_ref5, index) {
        var isOpen = _ref5.isOpen,
            hasFocus = _ref5.hasFocus,
            employment = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, ["isOpen", "hasFocus"]);

        return __jsx(_organisms_employment_wizard__WEBPACK_IMPORTED_MODULE_18__["default"], {
          key: index,
          isOpen: isOpen,
          employment: employment,
          onToggle: function onToggle() {
            return _this3.handleWizardToggle('employments', index);
          },
          onChange: function onChange(name, value) {
            return _this3.handleWizardChange('employments', index, name, value);
          },
          onRemove: function onRemove() {
            return _this3.handleWizardRemove('employments', index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        });
      }), __jsx(_atoms_add_button__WEBPACK_IMPORTED_MODULE_22__["default"], {
        onClick: function onClick() {
          return _this3.handleWizardAdd('employments');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, "Add employment")), __jsx(_molecules_form_section__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Education",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, __jsx(_atoms_form_description__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "If relevant, include your most recent educational achievements and the dates here"), educations.map(function (_ref6, index) {
        var isOpen = _ref6.isOpen,
            hasFocus = _ref6.hasFocus,
            education = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref6, ["isOpen", "hasFocus"]);

        return __jsx(_organisms_education_wizard__WEBPACK_IMPORTED_MODULE_19__["default"], {
          key: index,
          isOpen: isOpen,
          education: education,
          onToggle: function onToggle() {
            return _this3.handleWizardToggle('educations', index);
          },
          onChange: function onChange(name, value) {
            return _this3.handleWizardChange('educations', index, name, value);
          },
          onRemove: function onRemove() {
            return _this3.handleWizardRemove('educations', index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          },
          __self: this
        });
      }), __jsx(_atoms_add_button__WEBPACK_IMPORTED_MODULE_22__["default"], {
        onClick: function onClick() {
          return _this3.handleWizardAdd('educations');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "Add education")), __jsx(_molecules_form_section__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Skills",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, skills.map(function (_ref7, index) {
        var isOpen = _ref7.isOpen,
            hasFocus = _ref7.hasFocus,
            skill = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref7, ["isOpen", "hasFocus"]);

        return __jsx(_organisms_skill_wizard__WEBPACK_IMPORTED_MODULE_20__["default"], {
          key: index,
          isOpen: isOpen,
          skill: skill,
          onToggle: function onToggle() {
            return _this3.handleWizardToggle('skills', index);
          },
          onChange: function onChange(name, value) {
            return _this3.handleWizardChange('skills', index, name, value);
          },
          onRemove: function onRemove() {
            return _this3.handleWizardRemove('skills', index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        });
      }), __jsx(_atoms_add_button__WEBPACK_IMPORTED_MODULE_22__["default"], {
        onClick: function onClick() {
          return _this3.handleWizardAdd('skills');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "Add skill")), __jsx(_molecules_form_section__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Websites & Social Links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, __jsx(_atoms_form_description__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "You can add links to websites you want hiring managers to see! Perhaps It will be  a link to your portfolio, LinkedIn profile, or personal website"), links.map(function (_ref8, index) {
        var isOpen = _ref8.isOpen,
            hasFocus = _ref8.hasFocus,
            link = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref8, ["isOpen", "hasFocus"]);

        return __jsx(_organisms_link_wizard__WEBPACK_IMPORTED_MODULE_21__["default"], {
          key: index,
          isOpen: isOpen,
          link: link,
          onToggle: function onToggle() {
            return _this3.handleWizardToggle('links', index);
          },
          onChange: function onChange(name, value) {
            return _this3.handleWizardChange('links', index, name, value);
          },
          onRemove: function onRemove() {
            return _this3.handleWizardRemove('links', index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256
          },
          __self: this
        });
      }), __jsx(_atoms_add_button__WEBPACK_IMPORTED_MODULE_22__["default"], {
        onClick: function onClick() {
          return _this3.handleWizardAdd('links');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, "Add skill"))));
    }
  }]);

  return ResumeCreator;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ResumeCreator);

/***/ })

})
//# sourceMappingURL=resume-creator.js.8f705a167e690b19ed34.hot-update.js.map