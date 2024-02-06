"use strict";
(() => {
var exports = {};
exports.id = 955;
exports.ids = [955];
exports.modules = {

/***/ 2950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./data/questions.js
const questions = [{
  id: 1,
  question: "Question here",
  answer: "This is the Answer"
}, {
  id: 2,
  question: "Another Question here",
  answer: "This is another  Answer"
}, {
  id: 3,
  question: " New Question here",
  answer: "This is a new Answer"
}];
;// CONCATENATED MODULE: ./src/pages/api/questions/index.js

function handler(req, res) {
  res.status(200).json(questions);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2950));
module.exports = __webpack_exports__;

})();