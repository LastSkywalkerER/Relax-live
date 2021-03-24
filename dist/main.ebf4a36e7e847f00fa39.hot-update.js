/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdategloJS2"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_openNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/openNumber */ \"./src/modules/openNumber.js\");\n/* harmony import */ var _modules_popupMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popupMenu */ \"./src/modules/popupMenu.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_openModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/openModal */ \"./src/modules/openModal.js\");\n/* harmony import */ var _modules_phoneMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/phoneMask */ \"./src/modules/phoneMask.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_formulaPopup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/formulaPopup */ \"./src/modules/formulaPopup.js\");\n/* harmony import */ var _modules_carouselSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/carouselSlider */ \"./src/modules/carouselSlider.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_openNumber__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_popupMenu__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_openModal__WEBPACK_IMPORTED_MODULE_3__.default)({\n  modalWrapSelector: '.popup-privacy',\n  modalWindowSelector: '.popup-dialog-privacy',\n  openButtonsSelector: '.link-privacy',\n  closeButtonSelector: '.close'\n});\n(0,_modules_openModal__WEBPACK_IMPORTED_MODULE_3__.default)({\n  modalWrapSelector: '.popup-repair-types',\n  modalWindowSelector: '.popup-dialog-repair-types',\n  openButtonsSelector: '#full-price',\n  closeButtonSelector: '.close'\n});\n(0,_modules_phoneMask__WEBPACK_IMPORTED_MODULE_4__.default)('+7 (___) ___-__-__');\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__.default)();\nvar carouselSliderFormula = new _modules_carouselSlider__WEBPACK_IMPORTED_MODULE_7__.default({\n  main: '.formula-slider-wrap',\n  wrap: '.formula-slider',\n  prev: '#formula-arrow_left',\n  next: '#formula-arrow_right',\n  position: -1,\n  slidesToShow: 3,\n  slidesToHighlight: 1,\n  overflow: true,\n  infinity: true,\n  responsive: [{\n    breackpoint: 768,\n    slidesToShow: 1\n  }]\n});\ncarouselSliderFormula.init();\n(0,_modules_formulaPopup__WEBPACK_IMPORTED_MODULE_6__.default)();\nvar carouselSliderRepairTypesTabs = new _modules_carouselSlider__WEBPACK_IMPORTED_MODULE_7__.default({\n  main: '.repair-types-slider',\n  wrap: '.slider-wrapper',\n  overflow: true,\n  slidesToShow: 1,\n  pagination: {\n    type: 'button',\n    wrap: '.nav-list-repair',\n    active: '.active'\n  }\n});\ncarouselSliderRepairTypesTabs.init();\nvar carouselSliderRepairTypes = new _modules_carouselSlider__WEBPACK_IMPORTED_MODULE_7__.default({\n  main: '.repair-types-slider',\n  wrap: '.types-repair1',\n  prev: '#repair-types-arrow_left',\n  next: '#repair-types-arrow_right',\n  overflow: true,\n  pagination: {\n    type: 'counter',\n    current: '.slider-counter-content__current',\n    total: '.slider-counter-content__total'\n  },\n  slidesToShow: 1,\n  infinity: true\n});\ncarouselSliderRepairTypes.init();\n\n//# sourceURL=webpack://gloJS2/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9e5b9a52bfb727cf496b")
/******/ })();
/******/ 
/******/ }
);