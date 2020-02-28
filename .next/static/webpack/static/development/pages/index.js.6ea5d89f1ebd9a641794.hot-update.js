webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_formBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/formBox */ "./components/formBox.tsx");
var _jsxFileName = "/Users/amoswelike/projects/olympia_v2/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // import { Formik, Field, ErrorMessage, FormikProps } from "formik";





 // import logo from "../static/ologo.jpeg";

var InnerForm = function InnerForm(props) {
  var handleSubmit = props.handleSubmit,
      title = props.title;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_components_formBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
    controlId: "formBasicEmail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Email addresss"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
    type: "email",
    placeholder: "Enter email" // onChange={handleChange}
    // onBlur={handleBlur}
    // value={values.email}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
    controlId: "formBasicPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
    type: "password",
    placeholder: "Password" // onChange={handleChange}
    // onBlur={handleBlur}
    // value={values.password} 
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "outline-secondary",
    type: "submit" //     disabled={
    //     isSubmitting ||
    //     !!(errors.email && touched.email) ||
    //     !!(errors.password && touched.password)
    // }
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Submit"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Register")))), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, title));
};

var App = Object(formik__WEBPACK_IMPORTED_MODULE_1__["withFormik"])({
  mapPropsToValues: function mapPropsToValues(props) {
    return {
      email: props.initialEmail || "",
      password: props.initialPassword || ""
    };
  },
  validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email("Email not valid").required("Email is required"),
    password: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required("Password is required")
  }),
  handleSubmit: function handleSubmit(_ref) // { props, setSubmitting, setErrors }
  {
    var email = _ref.email,
        password = _ref.password;
    console.log(email, password);
  }
})(InnerForm);
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.6ea5d89f1ebd9a641794.hot-update.js.map