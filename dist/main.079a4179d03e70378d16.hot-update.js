/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdategloJS2"]("main",{

/***/ "./src/modules/openModal.js":
/*!**********************************!*\
  !*** ./src/modules/openModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar openModal = function openModal(_ref) {\n  var modalWrapSelector = _ref.modalWrapSelector,\n      modalWindowSelector = _ref.modalWindowSelector,\n      openButtonsSelector = _ref.openButtonsSelector,\n      closeButtonSelector = _ref.closeButtonSelector;\n  var modalWrap = document.querySelector(modalWrapSelector),\n      openButtons = document.querySelectorAll(openButtonsSelector),\n      modalWindow = document.querySelector(modalWindowSelector),\n      step = 10;\n\n  var openModal = function openModal() {\n    var scale = 0;\n    modalWrap.style.visibility = 'visible';\n    modalWindow.style.transform = \"scale(\".concat(scale / 100, \")\");\n\n    var openAnimation = function openAnimation() {\n      scale += step;\n      modalWindow.style.transform = \"scale(\".concat(scale / 100, \")\");\n\n      if (scale < 100) {\n        requestAnimationFrame(openAnimation);\n      }\n    };\n\n    openAnimation();\n    modalWrap.addEventListener('click', checkClose);\n  };\n\n  var closeModal = function closeModal() {\n    var scale = 100;\n    modalWindow.style.transform = \"scale(\".concat(scale / 100, \")\");\n\n    var closeAnimation = function closeAnimation() {\n      scale -= step;\n      modalWindow.style.transform = \"scale(\".concat(scale / 100, \")\");\n\n      if (scale >= 10) {\n        requestAnimationFrame(closeAnimation);\n      } else {\n        modalWrap.style.visibility = '';\n      }\n    };\n\n    closeAnimation();\n    modalWrap.removeEventListener('click', checkClose);\n  };\n\n  var checkClose = function checkClose(event) {\n    if (event.target.closest(closeButtonSelector) || !event.target.closest(modalWindowSelector)) {\n      closeModal();\n    }\n  };\n\n  openButtons.forEach(function (button) {\n    button.addEventListener('click', openModal);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openModal);\n\n//# sourceURL=webpack://gloJS2/./src/modules/openModal.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0b319a32a339895ca189")
/******/ })();
/******/ 
/******/ }
);