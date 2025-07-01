"use strict";
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6775);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);


const bgStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
};
const cardStyle = {
  background: "#fff",
  borderRadius: 24,
  boxShadow: "0 8px 32px rgba(60,60,120,0.12)",
  padding: 48,
  maxWidth: 420,
  width: "100%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};
const emojiStyle = {
  fontSize: 64,
  marginBottom: 16,
  animation: "bounce 1.2s infinite alternate"
};
const headingStyle = {
  fontSize: 36,
  fontWeight: 800,
  color: "#6366f1",
  margin: "0 0 12px 0"
};
const textStyle = {
  fontSize: 18,
  color: "#374151",
  marginBottom: 32
};
const homeBtn = {
  background: "#6366f1",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  padding: "12px 32px",
  fontSize: 18,
  fontWeight: 600,
  textDecoration: "none",
  boxShadow: "0 2px 8px rgba(60,60,120,0.10)",
  transition: "background 0.2s, color 0.2s",
  cursor: "pointer"
};
const NotFoundPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: bgStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    style: cardStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: emojiStyle,
    role: "img",
    "aria-label": "Lost"
  }, "\uD83D\uDE15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: headingStyle
  }, "404 - Not Found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: textStyle
  }, "Sorry, we couldn\u2019t find what you were looking for.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Let\u2019s get you back home!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    style: homeBtn
  }, "Go Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("style", null, `
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-16px); }
        }
      `));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Not found");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-tsx.js.map