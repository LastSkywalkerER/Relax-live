/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdategloJS2"]("main",{

/***/ "./src/modules/carouselSlider.js":
/*!***************************************!*\
  !*** ./src/modules/carouselSlider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CarouselSlider = /*#__PURE__*/function () {\n  function CarouselSlider(_ref) {\n    var main = _ref.main,\n        wrap = _ref.wrap,\n        next = _ref.next,\n        prev = _ref.prev,\n        pagination = _ref.pagination,\n        _ref$overflow = _ref.overflow,\n        overflow = _ref$overflow === void 0 ? false : _ref$overflow,\n        _ref$hideOverflow = _ref.hideOverflow,\n        hideOverflow = _ref$hideOverflow === void 0 ? false : _ref$hideOverflow,\n        _ref$infinity = _ref.infinity,\n        infinity = _ref$infinity === void 0 ? false : _ref$infinity,\n        _ref$position = _ref.position,\n        position = _ref$position === void 0 ? 0 : _ref$position,\n        _ref$slidesToShow = _ref.slidesToShow,\n        slidesToShow = _ref$slidesToShow === void 0 ? 3 : _ref$slidesToShow,\n        _ref$slidesToHighligh = _ref.slidesToHighlight,\n        slidesToHighlight = _ref$slidesToHighligh === void 0 ? 0 : _ref$slidesToHighligh,\n        highlightSelector = _ref.highlightSelector,\n        responsive = _ref.responsive,\n        minBreakpoint = _ref.minBreakpoint,\n        maxBreakpoint = _ref.maxBreakpoint,\n        sliderInSlider = _ref.sliderInSlider,\n        description = _ref.description;\n\n    _classCallCheck(this, CarouselSlider);\n\n    try {\n      this.main = document.querySelector(main);\n      this.wrap = document.querySelector(wrap);\n      this.slides = _toConsumableArray(document.querySelector(wrap).children);\n    } catch (_unused) {\n      console.warn('CarouselSlider: optins \"main\" and \"wrap\" are required!');\n\n      this.init = function () {};\n\n      return;\n    }\n\n    this.next = next;\n    this.prev = prev;\n    this.pagination = pagination;\n    this.overflow = overflow;\n    this.hideOverflow = hideOverflow;\n    this.slidesToShow = slidesToShow;\n    this.slidesToHighlight = slidesToHighlight;\n    this.highlightSelector = highlightSelector;\n    this.options = {\n      position: position,\n      infinity: infinity,\n      widthSlide: Math.floor(100 / this.slidesToShow),\n      maxPosition: this.slides.length - this.slidesToShow\n    };\n    this.responsive = responsive;\n    this.maxBreakpoint = maxBreakpoint;\n    this.minBreakpoint = minBreakpoint;\n    this.createNewSliderInSlider = sliderInSlider;\n    this.description = description;\n    this.key = wrap.slice(1);\n\n    this.checkResponse = function () {};\n  }\n\n  _createClass(CarouselSlider, [{\n    key: \"init\",\n    value: function init() {\n      if (this.prev === true && this.next === true) {\n        this.addArrow();\n        this.controlSlider();\n      } else if (this.prev && this.next) {\n        this.next = document.querySelector(this.next);\n        this.prev = document.querySelector(this.prev);\n        this.controlSlider();\n      }\n\n      this.addGloClass();\n\n      if (this.checkWidthStyle()) {\n        this.addStyle();\n      }\n\n      if (this.responsive) {\n        this.responseInit();\n      }\n\n      if (this.options.infinity) {\n        this.addMoreSlides();\n      }\n\n      this.pagainationInit();\n\n      if (this.slidesToHighlight) {\n        this.highlightСurrent();\n      }\n\n      if (this.createNewSliderInSlider) {\n        this.createSliderInSlider('.' + this.slides[this.options.position].children[0].classList[0]);\n      }\n\n      if (this.description) {\n        this.descriptionInit();\n      }\n\n      this.disableAnimation();\n\n      if (this.checkWidthStyle()) {\n        this.setCurrentSlide();\n      }\n    }\n  }, {\n    key: \"descriptionInit\",\n    value: function descriptionInit() {\n      this.descriptionSlides = _toConsumableArray(document.querySelector(this.description.wrap).querySelectorAll(this.description.rows));\n      this.setCurrentDescriptionSlide();\n    }\n  }, {\n    key: \"setCurrentDescriptionSlide\",\n    value: function setCurrentDescriptionSlide() {\n      var _this = this;\n\n      var absolutePosition = this.getAbsolutePosition() - 1;\n      this.descriptionSlides.forEach(function (slide) {\n        if (!_this.description.active) {\n          slide.style.display = 'none';\n          slide.style.opacity = '0';\n        } else {\n          slide.classList.remove(_this.description.active.slice(1));\n        }\n      });\n      this.descriptionSlides.forEach(function (slide, index) {\n        if (index === absolutePosition) {\n          if (!_this.description.active) {\n            slide.style.display = 'block';\n            slide.style.opacity = '1';\n          } else {\n            slide.classList.add(_this.description.active.slice(1));\n          }\n        }\n      });\n    }\n  }, {\n    key: \"pagainationInit\",\n    value: function pagainationInit() {\n      var _this2 = this;\n\n      if (this.pagination) {\n        this.pagination.forEach(function (pagination) {\n          if (pagination.type === 'counter') {\n            _this2.paginationCurrent = document.querySelector(pagination.wrap).querySelector(pagination.current);\n            _this2.paginationTotal = document.querySelector(pagination.wrap).querySelector(pagination.total);\n            _this2.paginationCounter = pagination;\n\n            _this2.controlPaginationCounter();\n          }\n\n          if (pagination.type === 'button') {\n            _this2.butonsWrap = document.querySelector(pagination.wrap);\n            _this2.buttons = _toConsumableArray(_this2.butonsWrap.children);\n            _this2.paginationButton = pagination;\n\n            _this2.controlPaginationButton();\n          }\n        });\n      }\n    }\n  }, {\n    key: \"checkWidthStyle\",\n    value: function checkWidthStyle() {\n      if (this.maxBreakpoint && !this.minBreakpoint) {\n        if (document.documentElement.clientWidth <= this.maxBreakpoint) {\n          return true;\n        }\n      } else if (!this.maxBreakpoint && this.minBreakpoint) {\n        if (document.documentElement.clientWidth >= this.minBreakpoint) {\n          return true;\n        }\n      } else if (this.maxBreakpoint && this.minBreakpoint) {\n        if (document.documentElement.clientWidth >= this.minBreakpoint && document.documentElement.clientWidth <= this.maxBreakpoint) {\n          return true;\n        }\n      } else {\n        return true;\n      }\n\n      return false;\n    }\n  }, {\n    key: \"addMoreSlides\",\n    value: function addMoreSlides() {\n      this.clonedSlides = [];\n      this.clonedSlides.push(this.slides.map(function (element) {\n        return element.cloneNode(true);\n      }));\n      this.clonedSlides.push(this.slides);\n      this.clonedSlides.push(this.slides.map(function (element) {\n        return element.cloneNode(true);\n      }));\n      this.rerenderSlides();\n    }\n  }, {\n    key: \"rerenderSlides\",\n    value: function rerenderSlides() {\n      var _this3 = this;\n\n      this.options.position += this.slides.length;\n      this.moveSlides();\n      this.clonedSlides.forEach(function (slides) {\n        return slides.forEach(function (slide) {\n          return _this3.wrap.append(slide);\n        });\n      });\n    }\n  }, {\n    key: \"addGloClass\",\n    value: function addGloClass() {\n      this.main.classList.add(\"glo-slider-\".concat(this.key));\n      this.wrap.classList.add(\"glo-slider__wrap-\".concat(this.key));\n\n      var _iterator = _createForOfIteratorHelper(this.slides),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var item = _step.value;\n          item.classList.add(\"glo-slider__item-\".concat(this.key));\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"addStyle\",\n    value: function addStyle() {\n      this.style = document.getElementById(\"sliderCarousel-style-\".concat(this.key));\n\n      if (!this.style) {\n        this.style = document.createElement('style');\n        this.style.id = \"sliderCarousel-style-\".concat(this.key);\n      }\n\n      this.style.textContent = \"\\n    .glo-slider-\".concat(this.key, \" {\\n      \").concat(this.overflow ? '' : 'overflow-x: hidden !important', \";\\n      position: relative;\\n    }\\n    .glo-slider__wrap-\").concat(this.key, \" {\\n      display: flex !important;\\n      flex-wrap: nowrap !important;\\n      transition: transform 0.5s !important;\\n      will-change: transform !important;\\n      margin: 0 !important;\\n    }\\n\\n    .glo-slider__item-\").concat(this.key, \" {\\n      flex: 0 0 \").concat(this.options.widthSlide, \"% !important;\\n      margin: auto 0 !important;\\n      transition: 200ms;\\n    }\\n    \");\n      document.head.append(this.style);\n    }\n  }, {\n    key: \"disableAnimation\",\n    value: function disableAnimation() {\n      if (this.style) {\n        this.style.textContent = \"\\n    .glo-slider-\".concat(this.key, \" {\\n      \").concat(this.overflow ? '' : 'overflow-x: hidden !important', \";\\n      position: relative;\\n    }\\n    .glo-slider__wrap-\").concat(this.key, \" {\\n      display: flex !important;\\n      flex-wrap: nowrap !important;\\n      margin: 0 !important;\\n    }\\n\\n    .glo-slider__item-\").concat(this.key, \" {\\n      flex: 0 0 \").concat(this.options.widthSlide, \"% !important;\\n      margin: auto 0 !important;\\n    }\\n    \");\n        document.head.append(this.style);\n      }\n    }\n  }, {\n    key: \"controlSlider\",\n    value: function controlSlider() {\n      if (this.prev && this.next) {\n        this.prev.addEventListener('click', this.prevSlider.bind(this));\n        this.next.addEventListener('click', this.nextSlider.bind(this));\n        document.addEventListener('keydown', this.setSlideKeys.bind(this));\n      }\n    }\n  }, {\n    key: \"setSlideKeys\",\n    value: function setSlideKeys(event) {\n      if (event.key === 'ArrowRight') {\n        this.nextSlider();\n      }\n\n      if (event.key === 'ArrowLeft') {\n        this.prevSlider();\n      }\n    }\n  }, {\n    key: \"controlPagination\",\n    value: function controlPagination() {\n      if (this.paginationCounter) {\n        this.controlPaginationCounter();\n      }\n    }\n  }, {\n    key: \"getAbsolutePosition\",\n    value: function getAbsolutePosition() {\n      var absolutePosition = this.options.position + 1;\n\n      while (absolutePosition - this.slides.length > 0) {\n        absolutePosition -= this.slides.length;\n      }\n\n      return absolutePosition;\n    }\n  }, {\n    key: \"controlPaginationCounter\",\n    value: function controlPaginationCounter() {\n      var counter = this.getAbsolutePosition();\n      this.paginationCurrent.textContent = counter;\n      this.paginationTotal.textContent = this.slides.length;\n    }\n  }, {\n    key: \"controlPaginationButton\",\n    value: function controlPaginationButton() {\n      var _this4 = this;\n\n      this.butonsWrap.addEventListener('click', function (event) {\n        _this4.buttons.forEach(function (buton, index) {\n          buton.classList.remove(_this4.paginationButton.active.slice(1));\n\n          if (event.target === buton || buton.contains(event.target)) {\n            buton.classList.add(_this4.paginationButton.active.slice(1));\n            _this4.options.position = index;\n\n            _this4.setCurrentSlide();\n\n            if (_this4.createNewSliderInSlider) {\n              _this4.changeSliderInSlider('.' + _this4.slides[_this4.options.position].children[0].classList[0]);\n            }\n          }\n        });\n      });\n    }\n  }, {\n    key: \"createSliderInSlider\",\n    value: function createSliderInSlider(currentSlideSelector) {\n      this.sliderInSlider = this.createNewSliderInSlider({\n        nextSliderSelector: currentSlideSelector\n      });\n      this.sliderInSlider.init();\n    }\n  }, {\n    key: \"changeSliderInSlider\",\n    value: function changeSliderInSlider(currentSlideSelector) {\n      this.sliderInSlider[\"delete\"]();\n      this.sliderInSlider = this.createNewSliderInSlider({\n        nextSliderSelector: currentSlideSelector\n      });\n      this.sliderInSlider.init();\n    }\n  }, {\n    key: \"moveSlides\",\n    value: function moveSlides() {\n      this.wrap.style.transform = \"translateX(\".concat(-this.options.position * this.options.widthSlide, \"%)\");\n    }\n  }, {\n    key: \"setCurrentSlide\",\n    value: function setCurrentSlide() {\n      if (this.checkWidthStyle()) {\n        this.addStyle();\n      }\n\n      this.moveSlides();\n\n      if (this.hideOverflow) {\n        this.showSlides();\n      }\n\n      if (this.slidesToHighlight) {\n        this.highlightСurrent();\n      }\n\n      this.controlPagination();\n\n      if (this.prev && this.next) {\n        if (!this.options.infinity) {\n          if (this.options.position === 0) {\n            this.prev.style.visibility = 'hidden';\n            this.next.style.visibility = 'inherit';\n          } else if (this.options.position === this.options.maxPosition) {\n            this.prev.style.visibility = 'inherit';\n            this.next.style.visibility = 'hidden';\n          } else {\n            this.prev.style.visibility = 'inherit';\n            this.next.style.visibility = 'inherit';\n          }\n        }\n      }\n\n      if (this.description) {\n        this.setCurrentDescriptionSlide();\n      }\n    }\n  }, {\n    key: \"prevSlider\",\n    value: function prevSlider() {\n      var _this5 = this;\n\n      if (this.options.infinity && this.options.position < this.slides.length / 2) {\n        this.disableAnimation();\n        this.options.position += this.slides.length;\n        this.moveSlides();\n      }\n\n      if (this.options.infinity || this.options.position > 0) {\n        setTimeout(function () {\n          --_this5.options.position;\n\n          _this5.setCurrentSlide();\n        }, 5);\n      }\n    }\n  }, {\n    key: \"nextSlider\",\n    value: function nextSlider() {\n      var _this6 = this;\n\n      if (this.options.infinity && this.options.position > this.slides.length * 2.5 - 1) {\n        this.disableAnimation();\n        this.options.position -= this.slides.length;\n        this.moveSlides();\n      }\n\n      if (this.options.infinity || this.options.position < this.options.maxPosition) {\n        setTimeout(function () {\n          ++_this6.options.position;\n\n          _this6.setCurrentSlide();\n        }, 5);\n      }\n    }\n  }, {\n    key: \"showSlides\",\n    value: function showSlides() {\n      var beginSlideIndex = this.options.position,\n          endSlideIndex = this.options.position + this.slidesToShow;\n\n      if (beginSlideIndex === endSlideIndex) {\n        endSlideIndex++;\n      }\n\n      var slidesToShow = _toConsumableArray(this.wrap.children).slice(beginSlideIndex, endSlideIndex);\n\n      _toConsumableArray(this.wrap.children).forEach(function (slide) {\n        return slide.style.opacity = '0';\n      });\n\n      slidesToShow.forEach(function (slide) {\n        return slide.style.opacity = '';\n      });\n    }\n  }, {\n    key: \"highlight\\u0421urrent\",\n    value: function highlightСurrent() {\n      var _this7 = this;\n\n      var beginSlideIndex = this.options.position + Math.floor((this.slidesToShow - this.slidesToHighlight) / 2),\n          endSlideIndex = this.options.position + Math.floor(this.slidesToShow - this.slidesToHighlight / 2);\n\n      if (beginSlideIndex === endSlideIndex) {\n        endSlideIndex++;\n      }\n\n      var slidesToHighlight = _toConsumableArray(this.wrap.children).slice(beginSlideIndex, endSlideIndex);\n\n      _toConsumableArray(this.wrap.children).forEach(function (slide) {\n        if (!_this7.highlightSelector) {\n          slide.style.transform = '';\n          slide.style.opacity = '';\n\n          _toConsumableArray(slide.children).forEach(function (item) {\n            return item.style.zIndex = '';\n          });\n        } else {\n          slide.classList.remove(_this7.highlightSelector.slice(1));\n        }\n      });\n\n      if (this.hideOverflow) {\n        this.showSlides();\n      }\n\n      slidesToHighlight.forEach(function (slide) {\n        if (!_this7.highlightSelector) {\n          slide.style.transform = 'scale(1.2)';\n          slide.style.opacity = '1';\n\n          _toConsumableArray(slide.children).forEach(function (item) {\n            return item.style.zIndex = '99';\n          });\n        } else {\n          slide.classList.add(_this7.highlightSelector.slice(1));\n        }\n      });\n    }\n  }, {\n    key: \"stylizationArrows\",\n    value: function stylizationArrows() {\n      this.prev.classList.add('glo-slider__prev');\n      this.next.classList.add('glo-slider__next');\n      var style = document.getElementById(\"glo-slider-arrows\");\n\n      if (!style) {\n        style = document.createElement('style');\n        style.id = \"glo-slider-arrows\";\n        style.textContent = \"\\n      .glo-slider__prev,\\n      .glo-slider__next {\\n        position: absolute !important;\\n        top: 45% !important;\\n        transform: translateY(-50%) !important;\\n      }\\n\\n      .glo-slider__next {\\n        right: 0 !important;\\n        transform: translateX(-50%) !important;\\n      }\\n\\n      .glo-slider__prev {\\n        left: 0 !important;\\n        transform: translateX(50%) !important;\\n      }\\n    \";\n        document.head.append(style);\n      }\n    }\n  }, {\n    key: \"addArrow\",\n    value: function addArrow() {\n      this.prev = document.createElement('button');\n      this.next = document.createElement('button');\n      this.prev.className = 'glo-slider__prev';\n      this.next.className = 'glo-slider__next';\n      this.main.append(this.prev);\n      this.main.append(this.next);\n      var style = document.createElement('style');\n      style.textContent = \"\\n      .glo-slider__prev,\\n      .glo-slider__next {\\n        margin: 0 10px;\\n        border: 20px solid transparent;\\n        background: transparent;\\n        position: absolute;\\n        top: 50%;\\n        transform: translateY(50%);\\n      }\\n\\n      .glo-slider__next {\\n        border-left-color: #19b5fe;\\n        right: 0;\\n        transform: translateX(50%);\\n      }\\n\\n      .glo-slider__prev {\\n        border-right-color: #19b5fe;\\n        left: 0;\\n        transform: translateX(-50%);\\n      }\\n\\n      .glo-slider__prev:hover,\\n      .glo-slider__next:hover, \\n      .glo-slider__prev:focus,\\n      .glo-slider__next:focus {\\n        background: transparent;\\n        outline: none;\\n      }\\n    \";\n      document.head.append(style);\n    }\n  }, {\n    key: \"updateOptions\",\n    value: function updateOptions() {\n      this.options.widthSlide = Math.floor(100 / this.slidesToShow);\n      this.options.maxPosition = this.slides.length - this.slidesToShow;\n\n      if (this.checkWidthStyle()) {\n        this.addStyle();\n      }\n    }\n  }, {\n    key: \"responseInit\",\n    value: function responseInit() {\n      var _this8 = this;\n\n      var slidesToShowDefault = this.slidesToShow,\n          allResponse = this.responsive.map(function (item) {\n        return item.breackpoint;\n      }),\n          maxResponse = Math.max.apply(Math, _toConsumableArray(allResponse));\n\n      this.checkResponse = function () {\n        var widthWindow = document.documentElement.clientWidth;\n\n        if (widthWindow < maxResponse) {\n          for (var i = 0; i < allResponse.length; i++) {\n            if (widthWindow < allResponse[i]) {\n              _this8.slidesToShow = _this8.responsive[i].slidesToShow;\n\n              if (_this8.options.position < 0) {\n                _this8.options.position++;\n              }\n\n              _this8.updateOptions();\n            }\n          }\n        } else {\n          _this8.slidesToShow = slidesToShowDefault;\n\n          _this8.updateOptions();\n        }\n\n        _this8.setCurrentSlide();\n\n        if (_this8.checkWidthStyle()) {\n          _this8.addStyle();\n        } else {\n          if (_this8.style) {\n            _this8.clearStyle();\n          }\n        }\n      };\n\n      this.checkResponse();\n      window.addEventListener('resize', this.checkResponse.bind(this));\n    }\n  }, {\n    key: \"clearStyle\",\n    value: function clearStyle() {\n      this.style.remove();\n      this.options.position = 0;\n      this.moveSlides();\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete() {\n      var _this9 = this;\n\n      this.wrap.textContent = '';\n      this.slides.forEach(function (slide) {\n        return _this9.wrap.append(slide);\n      });\n\n      if (this.style) {\n        this.clearStyle();\n      }\n\n      if (this.prev && this.next) {\n        this.prev.removeEventListener('click', this.prevSlider.bind(this));\n        this.next.removeEventListener('click', this.nextSlider.bind(this));\n      }\n\n      document.removeEventListener('keydown', this.setSlideKeys.bind(this));\n      window.removeEventListener('resize', this.checkResponse.bind(this));\n    }\n  }]);\n\n  return CarouselSlider;\n}();\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselSlider);\n\n//# sourceURL=webpack://gloJS2/./src/modules/carouselSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b16ec567ec323b38c6a6")
/******/ })();
/******/ 
/******/ }
);