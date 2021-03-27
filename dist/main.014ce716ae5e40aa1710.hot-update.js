/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdategloJS2"]("main",{

/***/ "./src/modules/validator.js":
/*!**********************************!*\
  !*** ./src/modules/validator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-disable eol-last */\n\n/* eslint-disable max-len */\n// получаем форму, её элементы, кнопку\nvar Validator = /*#__PURE__*/function () {\n  function Validator(_ref) {\n    var form = _ref.form,\n        selector = _ref.selector,\n        _ref$pattern = _ref.pattern,\n        pattern = _ref$pattern === void 0 ? {} : _ref$pattern,\n        method = _ref.method,\n        defaultButtonClass = _ref.defaultButtonClass;\n\n    _classCallCheck(this, Validator);\n\n    if (form) {\n      this.form = form;\n    } else if (selector) {\n      this.form = document.querySelector(selector);\n    }\n\n    this.pattern = pattern;\n    this.method = method;\n    this.elementsForm = _toConsumableArray(this.form.elements).filter(function (item) {\n      return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';\n    });\n    this.submitBtn = _toConsumableArray(this.form.querySelectorAll('button')).reduce(function (accumulator, currentValue) {\n      if (currentValue.type === 'submit') {\n        return currentValue;\n      }\n    });\n    this.error = new Set();\n    this.form.setAttribute('novalidate', '');\n    this.hideButton = document.createElement('div');\n    this.buttonWrap = document.createElement('div');\n    this.buttonWrap.classList.add('validator-disabled');\n    this.buttonClass = this.submitBtn.classList[this.submitBtn.classList.length - 1] === defaultButtonClass.slice(1) ? 0 : this.submitBtn.classList[this.submitBtn.classList.length - 1];\n    this.stateDisabled = 0;\n  } // применяем стили, создаём паттерны при необходимости, блокируем кнопку, вешаем прослушку с валидностью введённых данных\n\n\n  _createClass(Validator, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      if (this.buttonClass) {\n        this.buttonWrap.classList.add(this.buttonClass);\n      }\n\n      this.applyStyle();\n      this.setPattern();\n      this.disableButton();\n      this.elementsForm.forEach(function (elem) {\n        return elem.addEventListener('input', function (event) {\n          _this.checkIt(event);\n        });\n      });\n      this.form.addEventListener('click', function (event) {\n        if (event.target === _this.hideButton) {\n          _this.checkIt();\n        } else {\n          _this.elementsForm.forEach(function (target) {\n            _this.showSuccess(target);\n          });\n        }\n      });\n      this.form.addEventListener('submit', function (e) {\n        _this.disableButton();\n      });\n    } // проверка соответсвия патерну или нажатого чекбокса\n\n  }, {\n    key: \"isValid\",\n    value: function isValid(elem) {\n      var _this2 = this;\n\n      var validatorMethod = {\n        notEmpty: function notEmpty(elem) {\n          if (elem.value.trim() === '') {\n            return false;\n          }\n\n          return true;\n        },\n        pattern: function pattern(elem, _pattern) {\n          return validatorMethod.notEmpty(elem) ? _pattern.test(elem.value) : true;\n        }\n      };\n\n      if (elem.type === 'checkbox') {\n        if (elem.checked) {\n          return true;\n        } else {\n          return false;\n        }\n      }\n\n      if (this.method) {\n        var method = this.method[elem.name];\n\n        if (method) {\n          return method.every(function (item) {\n            return validatorMethod[item[0]](elem, _this2.pattern[item[1]]);\n          });\n        }\n      }\n\n      return true;\n    } // отключаем кнопку и перекрываем её дивом, чтоб проверять клик по кнопке\n\n  }, {\n    key: \"disableButton\",\n    value: function disableButton() {\n      if (!this.stateDisabled) {\n        this.submitBtn.setAttribute('disabled', '');\n        this.submitBtn.classList.add('disabled');\n\n        if (this.buttonClass) {\n          this.submitBtn.classList.remove(this.buttonClass);\n        }\n\n        this.submitBtn.insertAdjacentElement('afterend', this.buttonWrap);\n        this.buttonWrap.append(this.submitBtn);\n        this.buttonWrap.append(this.hideButton);\n        this.stateDisabled = 1;\n      }\n    } // разблокируем кнопку\n\n  }, {\n    key: \"enableButton\",\n    value: function enableButton() {\n      if (this.stateDisabled) {\n        this.submitBtn.removeAttribute('disabled', '');\n        this.submitBtn.classList.remove('disabled');\n\n        if (this.buttonClass) {\n          this.submitBtn.classList.add(this.buttonClass);\n        }\n\n        this.buttonWrap.insertAdjacentElement('afterend', this.submitBtn);\n        this.hideButton.remove();\n        this.buttonWrap.remove();\n        this.stateDisabled = 0;\n      }\n    } // проверка валидности элементов формы и вывод соответсвующих сообщений\n\n  }, {\n    key: \"checkIt\",\n    value: function checkIt(event) {\n      var _this3 = this;\n\n      this.elementsForm.forEach(function (target) {\n        if (_this3.isValid(target)) {\n          if (event && event.target.tagName.toLowerCase() !== 'input') {\n            _this3.showSuccess(target);\n          } else if (!event) {\n            _this3.showSuccess(target);\n          }\n\n          _this3.error[\"delete\"](target);\n\n          if (!_this3.error.size) {\n            _this3.enableButton();\n          }\n        } else {\n          if (event && event.target.tagName.toLowerCase() !== 'input') {\n            _this3.showError(target);\n          } else if (!event) {\n            _this3.showError(target);\n          }\n\n          _this3.error.add(target);\n\n          if (_this3.error.size) {\n            _this3.disableButton();\n          }\n        }\n      });\n    } // отображение сообщения напротив ошибочного поля\n\n  }, {\n    key: \"showError\",\n    value: function showError(elem) {\n      elem.classList.remove('success');\n      elem.classList.add('error');\n\n      if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {\n        return;\n      }\n\n      var errorDiv = document.createElement('div');\n      errorDiv.textContent = 'Некорректные данные';\n      errorDiv.classList.add('validator-error');\n      elem.insertAdjacentElement('afterend', errorDiv);\n    } // снятие ошибки и подсветка верного поля\n\n  }, {\n    key: \"showSuccess\",\n    value: function showSuccess(elem) {\n      elem.classList.remove('error');\n      elem.classList.add('success');\n\n      if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {\n        elem.nextElementSibling.remove();\n      }\n    } // применение стилей\n\n  }, {\n    key: \"applyStyle\",\n    value: function applyStyle() {\n      var style = document.createElement('style');\n      style.textContent = \"\\n      input.success {\\n        border: 2 px solid #7ce319 !important;\\n        color: #7ce319 !important;\\n      }\\n      input.error {\\n        border: 2 px solid #E32636 !important;\\n        color: #E32636 !important;\\n      }\\n      .validator-error {\\n        color: #E32636;\\n        position: absolute;\\n        top: 0;\\n        transform: translateY(-75%);\\n        padding: 10px;\\n        background: white;\\n        border-radius: 10px;\\n\\n      }\\n      .validator-disabled {\\n        position: relative;\\n      }\\n      \\n      .validator-disabled > div {\\n        position: absolute;\\n        top: 0;\\n        left: 0;\\n        height: 100%;\\n        width: 100%;\\n      }\\n    \";\n      document.head.append(style);\n    } // установка паттернов валидации полей\n\n  }, {\n    key: \"setPattern\",\n    value: function setPattern() {\n      if (!this.pattern.phone) {\n        this.pattern.phone = /^\\+7 \\(\\d\\d\\d\\) \\d\\d\\d-\\d\\d-\\d\\d$/;\n      }\n\n      if (!this.pattern.email) {\n        this.pattern.email = /^\\w+@\\w+\\.\\w{2,}$/;\n      }\n\n      if (!this.pattern.name) {\n        this.pattern.name = /^[а-я- ]{2,}$/i;\n      }\n    }\n  }]);\n\n  return Validator;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Validator);\n\n//# sourceURL=webpack://gloJS2/./src/modules/validator.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("20d15c4eafa8152e765c")
/******/ })();
/******/ 
/******/ }
);