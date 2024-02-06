"use strict";
exports.id = 645;
exports.ids = [645];
exports.modules = {

/***/ 1645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Scripts_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(670);
/* harmony import */ var _styles_Scripts_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Scripts_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
// CustomModal.js






const CustomModal = ({
  isOpen,
  onRequestClose,
  contentLabel,
  title,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {
    isOpen: isOpen,
    onRequestClose: onRequestClose,
    contentLabel: contentLabel,
    className: (_styles_Scripts_module_css__WEBPACK_IMPORTED_MODULE_3___default().modal),
    style: {
      overlay: {
        backgroundColor: "rgba(0,0,0,0.5)"
      }
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
      children: title
    }), children, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
      className: (_styles_Scripts_module_css__WEBPACK_IMPORTED_MODULE_3___default().modal_btn),
      onClick: onRequestClose,
      children: "Close"
    })]
  }) // <Modal
  //   isOpen={isOpen}
  //   onRequestClose={onRequestClose}
  //   contentLabel={contentLabel}
  //   style={{
  //     Modal: {
  //       backgroundColor: "#002b4d",
  //     },
  //     overlay: {
  //       backgroundColor: "rgba(0, 0, 0, 0.5)",
  //     },
  //     content: {
  //       width: "50%",
  //       top: "50%",
  //       left: "50%",
  //       transform: "translate(-50%, -50%)",
  //       backgroundColor: "#002b4d",
  //       border: "none",
  //       textAlign: "center",
  //     },
  //   }}
  // >
  //   <h2>{title}</h2>
  //   {children}
  //   <button className={styles.modal_btn} onClick={onRequestClose}>
  //     Close
  //   </button>
  // </Modal>
  ;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomModal);

/***/ })

};
;