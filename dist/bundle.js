(()=>{"use strict";const e=function(){var e=document.querySelector(".popup-menu"),t=e.childNodes[1],n=document.querySelector(".menu");t.style.visibility="hidden";var i=function(n){var r="."+t.classList[0];(!n.target.closest(r)||n.target.closest(".menu-link")||n.target.closest(".close-menu"))&&(e.style.visibility="hidden",t.style.visibility="hidden",t.style.transform="",e.removeEventListener("click",i))};n.addEventListener("click",(function(){e.style.visibility="visible",t.style.visibility="visible",t.style.transform="translate3D(0, 0, 0)",e.addEventListener("click",i)}))},t=function(){var e,t=null,n=0,i=function i(r,o){var s,a,l,c,d,p,u=document.documentElement.scrollTop;document.documentElement.scrollTop=u+n*(s=Math.min(r,o),0,a=Math.abs(Math.max(r,o)-Math.min(r,o))/2,l=e,(p=(0-((c=Math.max(r,o))*(l-0)+0*a-s*l)/(a-s))/(c*(c-s-a)+s*a))*(d=u)*d+((l-0)/(a-s)-p*(s+a))*d+((0*a-s*l)/(a-s)+p*s*a)+10),t!==u&&requestAnimationFrame((function(){i(r,o)})),t=u};document.addEventListener("click",(function(r){var o=r.target.closest("a");if(o&&(o=o.getAttribute("href"))&&"#"===o[0]&&"#close"!==o&&o.length>1){r.preventDefault();var s=document.querySelector(o).offsetTop,a=document.documentElement.scrollTop;t=null,e=Math.pow(Math.max(s,a)-Math.min(s,a),.6),n=s>=a?1:-1,i(a,s)}}))},n=function(e){var t=e.modalWrapSelector,n=e.modalWindowSelector,i=e.openButtonsSelector,r=e.closeButtonSelector,o=e.timer,s=document.querySelector(t),a=document.querySelectorAll(i),l=s.querySelector(n),c=function(){var e=0;s.style.visibility="visible",l.style.transform="scale(".concat(e/100,")"),function t(){e+=10,l.style.transform="scale(".concat(e/100,")"),e<100&&requestAnimationFrame(t)}(),s.addEventListener("click",p)},d=function(){var e=100;l.style.transform="scale(".concat(e/100,")"),function t(){e-=10,l.style.transform="scale(".concat(e/100,")"),e>=10?requestAnimationFrame(t):s.style.visibility=""}(),s.removeEventListener("click",p)},p=function(e){!e.target.closest(r)&&e.target.closest(n)||d()};i?a.forEach((function(e){e.addEventListener("click",c)})):(c(),setTimeout(d,1e3*o))};function i(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}const o=function(e){var t,n=e.errorMessage,r=e.successMesage,o=e.successPopup,s=e.formsSelector,a=e.validator,l=i(document.querySelectorAll(s)),c=document.createElement("div");l.forEach((function(e){a&&a(e),e.addEventListener("submit",(function(t){!function(e,t){e.preventDefault();var s=i(t.elements).filter((function(e){return"button"!==e.tagName.toLowerCase()&&"submit"!==e.type})),a=(i(t.elements).filter((function(e){if("submit"===e.type||"button"===e.tagName.toLowerCase())return!0}))[0],new Map);s.forEach((function(e){"checkbox"!==e.type&&a.set(e.name,e.value)}));var l={};a.forEach((function(e,t){l[t]=e})),s.forEach((function(e){"text"===e.type?e.value="":"checkbox"===e.type&&(e.checked=!1)})),c.classList.add("loading-wrap"),c.innerHTML="\n      <div class=\"sk-wave\">\n        <div class='sk-rect sk-rect-2'></div> \n        <div class='sk-rect sk-rect-3'></div> \n        <div class='sk-rect sk-rect-4'></div> \n        <div class='sk-rect sk-rect-1'></div> \n        <div class='sk-rect sk-rect-5'></div>\n      </div>\n      ",t.insertAdjacentElement("beforeend",c),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)})}(l).then((function(e){if(200!==e.status)throw new Error("Exception status ".concat(e.status));r?(c.textContent=r,setTimeout((function(){c.remove()}),3e3)):o&&(c.remove(),o())})).catch((function(e){c.textContent=n,console.error(e)}))}(t,e)}))})),(t=document.createElement("style")).textContent="\n  .loading-wrap::parent {\n    position: relative;\n  }\n\n  .loading-wrap {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: white;\n    border-radius: 25%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 250px;\n    height: 250px;\n    color: black;\n    padding: 20px;\n    box-shadow: 0 0 50px 1px gray;\n  }\n\n  .sk-wave {\n    width: 6em;\n    height: 4em;\n    margin: auto;\n    text-align: center;\n    font-size: 1em;\n  }\n\n  .sk-wave .sk-rect {\n    background-color: #ffb015;\n    height: 100%;\n    width: 0.5em;\n    display: inline-block;\n    animation: sk-wave-stretch-delay 1.2s infinite ease-in-out;\n  }\n\n  .sk-wave .sk-rect-1 {\n    animation-delay: -1.2s;\n  }\n\n  .sk-wave .sk-rect-2 {\n    animation-delay: -1.1s;\n  }\n\n  .sk-wave .sk-rect-3 {\n    animation-delay: -1s;\n  }\n\n  .sk-wave .sk-rect-4 {\n    animation-delay: -0.9s;\n  }\n\n  .sk-wave .sk-rect-5 {\n    animation-delay: -0.8s;\n  }\n\n  @keyframes sk-wave-stretch-delay {\n    0%,\n    40%,\n    100% {\n      transform: scaleY(0.4);\n    }\n\n    20% {\n      transform: scaleY(1);\n    }\n  }\n  ",document.head.append(t)};function s(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}const l=function(e){var t=e.iconsSelector,n=e.iconsInnerSelector,i=e.hintsSelector,r=e.mainWrapperSelector,o=s(document.querySelectorAll(t)),a=s(document.querySelectorAll(n)),l=s(document.querySelectorAll(i));o.forEach((function(e,t){e.addEventListener("mouseenter",(function(){!function(e){var t,n,o;(function(e){for(var t=e.offsetTop,n=e.offsetHeight;e.offsetParent;)t+=(e=e.offsetParent).offsetTop;return t>=window.pageYOffset&&t+n<=window.pageYOffset+window.innerHeight})(l[e])||(n=l[e],(o=document.createElement("style")).classList.add("down-hint-style"),o.textContent="\n      ".concat(i," {\n        z-index: 100;\n      }\n      ").concat(i,":before {\n        -webkit-transform: rotate(180deg) ;\n        transform: rotate(180deg) ; \n      }\n    "),document.head.append(o),n.closest(r)&&(n.closest(r).style.zIndex="99"),(t=l[e]).style.transform="translateY(100%)",t.style.bottom="-80px"),l[e].style.visibility="visible",l[e].style.opacity="1",a[e].style.opacity="1"}(t)})),e.addEventListener("mouseleave",(function(){!function(e){var t,n,i;l[e].style.visibility="",l[e].style.opacity="",(t=l[e]).style.transform="",t.style.bottom="",n=l[e],(i=document.querySelector(".down-hint-style"))&&i.remove(),n&&n.closest(r)&&(n.closest(r).style.zIndex=""),a[e].style.opacity=""}(t)}))}))};function c(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const h=function(){function e(t){var n=t.main,i=t.wrap,r=t.next,o=t.prev,s=t.pagination,a=t.overflow,l=void 0!==a&&a,d=t.hideOverflow,p=void 0!==d&&d,u=t.infinity,h=void 0!==u&&u,f=t.position,m=void 0===f?0:f,v=t.slidesToShow,y=void 0===v?3:v,w=t.slidesToHighlight,S=void 0===w?0:w,g=t.highlightSelector,b=t.responsive,k=t.minBreakpoint,_=t.maxBreakpoint,x=t.sliderInSlider,E=t.description;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);try{this.main=document.querySelector(n),this.wrap=document.querySelector(i),this.slides=c(document.querySelector(i).children)}catch(e){return console.warn('CarouselSlider: optins "main" and "wrap" are required!'),void(this.init=function(){})}this.next=r,this.prev=o,this.pagination=s,this.overflow=l,this.hideOverflow=p,this.slidesToShow=y,this.slidesToHighlight=S,this.highlightSelector=g,this.options={position:m,infinity:h,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=b,this.maxBreakpoint=_,this.minBreakpoint=k,this.createNewSliderInSlider=x,this.description=E,this.key=i.slice(1),this.checkResponse=function(){}}var t,n;return t=e,(n=[{key:"init",value:function(){!0===this.prev&&!0===this.next?(this.addArrow(),this.controlSlider()):this.prev&&this.next&&(this.next=document.querySelector(this.next),this.prev=document.querySelector(this.prev),this.controlSlider()),this.addGloClass(),this.checkWidthStyle()&&this.addStyle(),this.responsive&&this.responseInit(),this.options.infinity&&this.addMoreSlides(),this.pagainationInit(),this.slidesToHighlight&&this.highlightСurrent(),this.createNewSliderInSlider&&this.createSliderInSlider("."+this.slides[this.options.position].children[0].classList[0]),this.description&&this.descriptionInit(),this.disableAnimation(),this.checkWidthStyle()&&this.setCurrentSlide()}},{key:"descriptionInit",value:function(){this.descriptionSlides=c(document.querySelector(this.description.wrap).querySelectorAll(this.description.rows)),this.setCurrentDescriptionSlide()}},{key:"setCurrentDescriptionSlide",value:function(){var e=this,t=this.getAbsolutePosition()-1;this.descriptionSlides.forEach((function(t){e.description.active?t.classList.remove(e.description.active.slice(1)):(t.style.display="none",t.style.opacity="0")})),this.descriptionSlides.forEach((function(n,i){i===t&&(e.description.active?n.classList.add(e.description.active.slice(1)):(n.style.display="block",n.style.opacity="1"))}))}},{key:"pagainationInit",value:function(){var e=this;this.pagination&&this.pagination.forEach((function(t){"counter"===t.type&&(e.paginationCurrent=document.querySelector(t.wrap).querySelector(t.current),e.paginationTotal=document.querySelector(t.wrap).querySelector(t.total),e.paginationCounter=t,e.controlPaginationCounter()),"button"===t.type&&(e.butonsWrap=document.querySelector(t.wrap),e.buttons=c(e.butonsWrap.children),e.paginationButton=t,e.controlPaginationButton())}))}},{key:"checkWidthStyle",value:function(){if(this.maxBreakpoint&&!this.minBreakpoint){if(document.documentElement.clientWidth<=this.maxBreakpoint)return!0}else if(!this.maxBreakpoint&&this.minBreakpoint){if(document.documentElement.clientWidth>=this.minBreakpoint)return!0}else{if(!this.maxBreakpoint||!this.minBreakpoint)return!0;if(document.documentElement.clientWidth>=this.minBreakpoint&&document.documentElement.clientWidth<=this.maxBreakpoint)return!0}return!1}},{key:"addMoreSlides",value:function(){this.clonedSlides=[],this.clonedSlides.push(this.slides.map((function(e){return e.cloneNode(!0)}))),this.clonedSlides.push(this.slides),this.clonedSlides.push(this.slides.map((function(e){return e.cloneNode(!0)}))),this.rerenderSlides()}},{key:"rerenderSlides",value:function(){var e=this;this.options.position+=this.slides.length,this.moveSlides(),this.clonedSlides.forEach((function(t){return t.forEach((function(t){return e.wrap.append(t)}))}))}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider-".concat(this.key)),this.wrap.classList.add("glo-slider__wrap-".concat(this.key));var e,t=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=d(e))){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.add("glo-slider__item-".concat(this.key))}catch(e){t.e(e)}finally{t.f()}}},{key:"addStyle",value:function(){this.style=document.getElementById("sliderCarousel-style-".concat(this.key)),this.style||(this.style=document.createElement("style"),this.style.id="sliderCarousel-style-".concat(this.key)),this.style.textContent="\n    .glo-slider-".concat(this.key," {\n      ").concat(this.overflow?"":"overflow-x: hidden !important",";\n      position: relative;\n    }\n    .glo-slider__wrap-").concat(this.key," {\n      display: flex !important;\n      flex-wrap: nowrap !important;\n      transition: transform 0.5s !important;\n      will-change: transform !important;\n      \n    }\n\n    .glo-slider__item-").concat(this.key," {\n      flex: 0 0 ").concat(this.options.widthSlide,"% !important;\n      width: ").concat(this.options.widthSlide,"% !important;\n      margin: auto 0 !important;\n      transition: 200ms;\n    }\n    "),document.head.append(this.style)}},{key:"disableAnimation",value:function(){this.style&&(this.style.textContent="\n    .glo-slider-".concat(this.key," {\n      ").concat(this.overflow?"":"overflow-x: hidden !important",";\n      position: relative;\n    }\n    .glo-slider__wrap-").concat(this.key," {\n      display: flex !important;\n      flex-wrap: nowrap !important;\n      \n    }\n\n    .glo-slider__item-").concat(this.key," {\n      flex: 0 0 ").concat(this.options.widthSlide,"% !important;\n      margin: auto 0 !important;\n      width: ").concat(this.options.widthSlide,"% !important;\n    }\n    "),document.head.append(this.style))}},{key:"controlSlider",value:function(){this.prev&&this.next&&(this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this)),document.addEventListener("keydown",this.setSlideKeys.bind(this)))}},{key:"setSlideKeys",value:function(e){"ArrowRight"===e.key&&this.nextSlider(),"ArrowLeft"===e.key&&this.prevSlider()}},{key:"controlPagination",value:function(){this.paginationCounter&&this.controlPaginationCounter()}},{key:"getAbsolutePosition",value:function(){for(var e=this.options.position+1;e-this.slides.length>0;)e-=this.slides.length;return e}},{key:"controlPaginationCounter",value:function(){var e=this.getAbsolutePosition();this.paginationCurrent.textContent=e,this.paginationTotal.textContent=this.slides.length}},{key:"controlPaginationButton",value:function(){var e=this;this.butonsWrap.addEventListener("click",(function(t){e.buttons.forEach((function(n,i){n.classList.remove(e.paginationButton.active.slice(1)),(t.target===n||n.contains(t.target))&&(n.classList.add(e.paginationButton.active.slice(1)),e.options.position=i,e.setCurrentSlide(),e.createNewSliderInSlider&&e.changeSliderInSlider("."+e.slides[e.options.position].children[0].classList[0]))}))}))}},{key:"createSliderInSlider",value:function(e){this.sliderInSlider=this.createNewSliderInSlider({nextSliderSelector:e}),this.sliderInSlider.init()}},{key:"changeSliderInSlider",value:function(e){this.sliderInSlider.delete(),this.sliderInSlider=this.createNewSliderInSlider({nextSliderSelector:e}),this.sliderInSlider.init()}},{key:"moveSlides",value:function(){this.wrap.style.transform="translateX(".concat(-this.options.position*this.options.widthSlide,"%)")}},{key:"setCurrentSlide",value:function(){this.checkWidthStyle()&&this.addStyle(),this.moveSlides(),this.hideOverflow&&this.showSlides(),this.slidesToHighlight&&this.highlightСurrent(),this.controlPagination(),this.prev&&this.next&&(this.options.infinity||(0===this.options.position?(this.prev.style.visibility="hidden",this.next.style.visibility="inherit"):this.options.position===this.options.maxPosition?(this.prev.style.visibility="inherit",this.next.style.visibility="hidden"):(this.prev.style.visibility="inherit",this.next.style.visibility="inherit"))),this.description&&this.setCurrentDescriptionSlide()}},{key:"prevSlider",value:function(){var e=this;this.options.infinity&&this.options.position<this.slides.length/2&&(this.disableAnimation(),this.options.position+=this.slides.length,this.moveSlides()),(this.options.infinity||this.options.position>0)&&setTimeout((function(){--e.options.position,e.setCurrentSlide()}),5)}},{key:"nextSlider",value:function(){var e=this;this.options.infinity&&this.options.position>2.5*this.slides.length-1&&(this.disableAnimation(),this.options.position-=this.slides.length,this.moveSlides()),(this.options.infinity||this.options.position<this.options.maxPosition)&&setTimeout((function(){++e.options.position,e.setCurrentSlide()}),5)}},{key:"showSlides",value:function(){var e=this.options.position,t=this.options.position+this.slidesToShow;e===t&&t++;var n=c(this.wrap.children).slice(e,t);this.checkWidthStyle()&&c(this.wrap.children).forEach((function(e){return e.style.opacity="0"})),n.forEach((function(e){return e.style.opacity=""}))}},{key:"highlightСurrent",value:function(){var e=this,t=this.options.position+Math.floor((this.slidesToShow-this.slidesToHighlight)/2),n=this.options.position+Math.floor(this.slidesToShow-this.slidesToHighlight/2);t===n&&n++;var i=c(this.wrap.children).slice(t,n);c(this.wrap.children).forEach((function(t){e.highlightSelector?t.classList.remove(e.highlightSelector.slice(1)):(t.style.transform="",t.style.opacity="",c(t.children).forEach((function(e){return e.style.zIndex=""})))})),this.hideOverflow&&this.showSlides(),i.forEach((function(t){e.highlightSelector?t.classList.add(e.highlightSelector.slice(1)):(t.style.transform="scale(1.2)",t.style.opacity="1",c(t.children).forEach((function(e){return e.style.zIndex="99"})))}))}},{key:"stylizationArrows",value:function(){this.prev.classList.add("glo-slider__prev"),this.next.classList.add("glo-slider__next");var e=document.getElementById("glo-slider-arrows");e||((e=document.createElement("style")).id="glo-slider-arrows",e.textContent="\n      .glo-slider__prev,\n      .glo-slider__next {\n        position: absolute !important;\n        top: 45% !important;\n        transform: translateY(-50%) !important;\n      }\n\n      .glo-slider__next {\n        right: 0 !important;\n        transform: translateX(-50%) !important;\n      }\n\n      .glo-slider__prev {\n        left: 0 !important;\n        transform: translateX(50%) !important;\n      }\n    ",document.head.append(e))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.append(this.prev),this.main.append(this.next);var e=document.createElement("style");e.textContent="\n      .glo-slider__prev,\n      .glo-slider__next {\n        margin: 0 10px;\n        border: 20px solid transparent;\n        background: transparent;\n        position: absolute;\n        top: 50%;\n        transform: translateY(50%);\n      }\n\n      .glo-slider__next {\n        border-left-color: #19b5fe;\n        right: 0;\n        transform: translateX(50%);\n      }\n\n      .glo-slider__prev {\n        border-right-color: #19b5fe;\n        left: 0;\n        transform: translateX(-50%);\n      }\n\n      .glo-slider__prev:hover,\n      .glo-slider__next:hover, \n      .glo-slider__prev:focus,\n      .glo-slider__next:focus {\n        background: transparent;\n        outline: none;\n      }\n    ",document.head.append(e)}},{key:"updateOptions",value:function(){this.options.widthSlide=Math.floor(100/this.slidesToShow),this.options.maxPosition=this.slides.length-this.slidesToShow,this.checkWidthStyle()&&this.addStyle()}},{key:"responseInit",value:function(){var e=this,t=this.slidesToShow,n=this.responsive.map((function(e){return e.breackpoint})),i=Math.max.apply(Math,c(n));this.checkResponse=function(){var r=document.documentElement.clientWidth;if(r<i)for(var o=0;o<n.length;o++)r<n[o]&&(e.slidesToShow=e.responsive[o].slidesToShow,e.options.position<0&&e.options.position++,e.updateOptions());else e.slidesToShow=t,e.updateOptions();e.setCurrentSlide(),e.checkWidthStyle()?e.addStyle():e.style&&e.clearStyle()},this.checkResponse(),window.addEventListener("resize",this.checkResponse.bind(this))}},{key:"clearStyle",value:function(){this.style.remove(),this.options.position=0,this.moveSlides(),c(this.wrap.children).forEach((function(e){return e.style.opacity=""}))}},{key:"delete",value:function(){var e=this;this.wrap.textContent="",this.slides.forEach((function(t){return e.wrap.append(t)})),this.style&&this.clearStyle(),this.prev&&this.next&&(this.prev.removeEventListener("click",this.prevSlider.bind(this)),this.next.removeEventListener("click",this.nextSlider.bind(this))),document.removeEventListener("keydown",this.setSlideKeys.bind(this)),window.removeEventListener("resize",this.checkResponse.bind(this))}}])&&u(t.prototype,n),e}();function f(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const w=function(){function e(t){var n=t.checkBoxFieldSelector,i=t.cardsWrapperSelector,r=t.urlDatabase,o=t.cardSelector,s=t.nameCardSelector,a=t.titleSelector,l=t.dateSelector,c=t.searchKey;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.select=document.querySelector(n),this.cardsWrapper=document.querySelector(i),this.urlDataBase=r,this.cardSelector=o,this.nameCardSelector=s,this.title=document.querySelector(a),this.date=document.querySelector(l),this.searchKey=c,this.selectedKeys="",this.notFirstLoad=0}var t,n;return t=e,(n=[{key:"init",value:function(){var e=this;return this.listeners(),this.getData(this.urlDataBase,(function(t){e.renderCheckbox(e.getValues(t,e.searchKey))}))}},{key:"getData",value:function(e,t){var n=this;if(!localStorage.getItem("data")||!this.notFirstLoad)return fetch(e,{method:"GET",mode:"cors",cache:"no-cache",redirect:"follow",referrerPolicy:"no-referrer"}).then((function(e){return e.json()})).then((function(e){t(e),n.notFirstLoad=1,localStorage.setItem("data",JSON.stringify(e))}));t(JSON.parse(localStorage.getItem("data")))}},{key:"getValues",value:function(e,t){var n=this,i=new Set;return e.forEach((function(e){var r=n.projection(t,e)[t];"string"!=typeof r?r&&r.forEach((function(e){i.add(e)})):r&&(1===r.split(" ").length&&(r=r.slice(0,1).toUpperCase()+r.slice(1).toLowerCase()),i.add(r))})),i}},{key:"projection",value:function(e,t){return Object.keys(t).filter((function(t){return e.includes(t)})).reduce((function(e,n){return e[n]=t[n],e}),{})}},{key:"renderCheckbox",value:function(e){var t=this;this.select.textContent="";var n,i=0;e.forEach((function(e){var n=document.createElement("button");0===i&&(i=e,n.classList.add("active")),n.classList.add("button_o"),n.classList.add("popup-repair-types-nav__item"),n.innerHTML="\n        ".concat(e,"\n      "),t.select.append(n)})),this.buttons=function(e){if(Array.isArray(e))return v(e)}(n=this.select.querySelectorAll(".popup-repair-types-nav__item"))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this.initRender(i)}},{key:"renderCards",value:function(e){var t=this;this.cardsWrapper.textContent="",e.priceList.forEach((function(e){var n=document.createElement("tr");n.classList.add("mobile-row"),n.innerHTML='\n        <td class="repair-types-name">\n          '.concat(e.typeService,'\n        </td>\n        <td class="mobile-col-title tablet-hide desktop-hide">\n          Ед.измерения\n        </td>\n        <td class="mobile-col-title tablet-hide desktop-hide">\n          Цена за ед.\n        </td>\n        <td class="repair-types-value">').concat(e.units[0],"<sup>").concat(e.units[1],'</sup></td>\n        <td class="repair-types-value">').concat(e.cost," руб.</td>\n      "),t.cardsWrapper.append(n)}))}},{key:"reDrowWithFilter",value:function(e,t){var n=this;this.getData(this.urlDataBase,(function(i){var r={};i.forEach((function(i){i.date&&(n.date.innerHTML="".concat(i.date," <i><i></i></i>")),i[t]===e&&(r=i)})),r?n.renderCards(r):n.renderCards([{title:"Ничего не найдено"}])}))}},{key:"initRender",value:function(e){this.title.textContent=e,this.reDrowWithFilter(e,this.searchKey)}},{key:"listeners",value:function(){var e=this;this.select.addEventListener("click",(function(t){"button"===t.target.tagName.toLowerCase()&&(e.initRender(t.target.textContent.trim()),e.buttons.forEach((function(e){e.classList.remove("active"),e===t.target&&e.classList.add("active")})))}))}}])&&y(t.prototype,n),e}();function S(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function b(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const k=function(){function e(t){var n=t.form,i=t.selector,r=t.pattern,o=void 0===r?{}:r,s=t.method;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n?this.form=n:i&&(this.form=document.querySelector(i)),this.pattern=o,this.method=s,this.elementsForm=S(this.form.elements).filter((function(e){return"button"!==e.tagName.toLowerCase()&&"button"!==e.type})),this.submitBtn=S(this.form.querySelectorAll("button")).reduce((function(e,t){if("submit"===t.type)return t})),this.error=new Set,this.form.setAttribute("novalidate",""),this.submitBtn.setAttribute("disabled","")}var t,n;return t=e,(n=[{key:"init",value:function(){var e=this;this.applyStyle(),this.setPattern(),this.elementsForm.forEach((function(t){return t.addEventListener("input",e.checkIt.bind(e))})),this.form.addEventListener("submit",(function(t){e.elementsForm.forEach((function(t){return e.checkIt({target:t})})),t.preventDefault(),e.error.size&&e.submitBtn.setAttribute("disabled","")}))}},{key:"isValid",value:function(e){var t=this,n={notEmpty:function(e){return""!==e.value.trim()},pattern:function(e,t){return!n.notEmpty(e)||t.test(e.value)}};if("checkbox"===e.type)return!!e.checked;if(this.method){var i=this.method[e.name];if(i)return i.every((function(i){return n[i[0]](e,t.pattern[i[1]])}))}return!0}},{key:"checkIt",value:function(e){var t=this;this.elementsForm.forEach((function(e){t.isValid(e)?(t.showSuccess(e),t.error.delete(e),t.error.size||t.form.querySelector("button").removeAttribute("disabled","")):(t.showError(e),t.error.add(e),t.error.size&&t.form.querySelector("button").setAttribute("disabled",""))}))}},{key:"showError",value:function(e){if(e.classList.remove("success"),e.classList.add("error"),!e.nextElementSibling||!e.nextElementSibling.classList.contains("validator-error")){var t=document.createElement("div");t.textContent="Некорректные данные",t.classList.add("validator-error"),e.insertAdjacentElement("afterend",t)}}},{key:"showSuccess",value:function(e){e.classList.remove("error"),e.classList.add("success"),e.nextElementSibling&&e.nextElementSibling.classList.contains("validator-error")&&e.nextElementSibling.remove()}},{key:"applyStyle",value:function(){var e=document.createElement("style");e.textContent="\n      input.success {\n        border: 2 px solid green !important;\n        color: green !important;\n      }\n      input.error {\n        border: 2 px solid red !important;\n        color: red !important;\n      }\n      .validator-error {\n        color: red;\n        position: absolute;\n        top: 0;\n        transform: translateY(-75%);\n        padding: 10px;\n        background: white;\n        border-radius: 10px;\n\n      }\n    ",document.head.append(e)}},{key:"setPattern",value:function(){this.pattern.phone||(this.pattern.phone=/^\+7 \(\d\d\d\) \d\d\d-\d\d-\d\d$/),this.pattern.email||(this.pattern.email=/^\w+@\w+\.\w{2,}$/),this.pattern.name||(this.pattern.name=/^[а-я- ]{2,}$/i)}}])&&b(t.prototype,n),e}();document.addEventListener("DOMContentLoaded",(function(){var i,r,s,a,c,d,p,u,m;d=document.querySelector(".header-contacts__arrow"),p=document.querySelector(".header-contacts__phone-number-accord"),u=document.querySelector(".header-contacts__phone-number-wrap").clientHeight,m=0,d.addEventListener("click",(function(){m?m&&(p.style.transform="translateY(0px)",p.childNodes[1].style.opacity="0",d.style.transform="scaleY(1)",m=0):(p.style.transform="translateY(".concat(u,"px)"),p.childNodes[1].style.opacity="1",d.style.transform="scaleY(-1)",m=1)})),e(),t(),n({modalWrapSelector:".popup-privacy",modalWindowSelector:".popup-dialog-privacy",openButtonsSelector:".link-privacy",closeButtonSelector:".close"}),n({modalWrapSelector:".popup-repair-types",modalWindowSelector:".popup-dialog-repair-types",openButtonsSelector:"#full-price",closeButtonSelector:".close"}),i="+7 (___) ___-__-__",r=document.querySelectorAll('input[name="phone"]'),s=function(e){if(e.target.value){var t=i,n=i.indexOf("_");e.target.value=e.target.value.slice(i.indexOf("_")),e.target.value=e.target.value.replace(/[^\d]/g,""),e.target.value.split("").forEach((function(e){t=t.replace(/_/,(function(t,i){return n=i+1,e}))})),e.target.value=t,e.target.selectionStart=n,e.target.selectionEnd=n}},a=function(e){e.target.value||(e.target.value=i,e.target.selectionStart=i.indexOf("_"),e.target.selectionEnd=i.indexOf("_"))},c=function(e){e.target.value===i&&(e.target.value="")},r.forEach((function(e){e.addEventListener("input",s),e.addEventListener("focus",a),e.addEventListener("blur",c)})),o({errorMessage:"Что-то пошло не так...",successPopup:function(){n({modalWrapSelector:".popup-thank",modalWindowSelector:".popup-thank-bg",closeButtonSelector:".close",timer:3})},formsSelector:"form",validator:function(e){new k({form:e,method:{phone:[["notEmpty"],["pattern","phone"]],email:[["notEmpty"],["pattern","email"]],name:[["notEmpty"],["pattern","name"]]}}).init()}}),new h({main:".formula-slider-wrap",wrap:".formula-slider",prev:"#formula-arrow_left",next:"#formula-arrow_right",position:-1,slidesToShow:3,slidesToHighlight:1,overflow:!0,hideOverflow:!0,infinity:!0,responsive:[{breackpoint:768,slidesToShow:1}]}).init(),l({iconsSelector:".formula-item__icon",iconsInnerSelector:".formula-item__icon-inner",hintsSelector:".formula-item-popup",mainWrapperSelector:".row"}),new h({main:".repair-types-slider",wrap:".slider-wrapper",overflow:!0,slidesToShow:1,pagination:[{type:"button",wrap:".nav-list-repair",active:".active"}],sliderInSlider:function(e){var t=e.nextSliderSelector;return new h({main:".repair-types-slider",wrap:t,prev:"#repair-types-arrow_left",next:"#repair-types-arrow_right",overflow:!0,pagination:[{type:"counter",wrap:"#repair-counter",current:".slider-counter-content__current",total:".slider-counter-content__total"}],slidesToShow:1,infinity:!0})}}).init(),new h({main:".repair-types-nav",wrap:".nav-list-repair",prev:"#nav-arrow-repair-left_base",next:"#nav-arrow-repair-right_base",slidesToShow:3,responsive:[{breackpoint:768,slidesToShow:2},{breackpoint:575,slidesToShow:1}],maxBreakpoint:1024}).init(),new h({main:".portfolio-slider",wrap:".slider-wrapper__portfolio-slider",prev:"#portfolio-arrow_left",next:"#portfolio-arrow_right",slidesToShow:3,overflow:!0,responsive:[{breackpoint:1024,slidesToShow:2},{breackpoint:900,slidesToShow:1}],minBreakpoint:575}).init(),new h({main:".portfolio-slider-mobile",wrap:".slider-wrapper__portfolio-slider-mobile",prev:"#portfolio-arrow-mobile_left",next:"#portfolio-arrow-mobile_right",overflow:!0,pagination:[{type:"counter",wrap:"#portfolio-counter",current:".slider-counter-content__current",total:".slider-counter-content__total"}],slidesToShow:1,infinity:!0,maxBreakpoint:574}).init(),n({modalWrapSelector:".popup-portfolio",modalWindowSelector:".popup-dialog-portfolio",openButtonsSelector:".portfolio-slider__slide-frame",closeButtonSelector:".close"}),new h({main:".popup-portfolio-slider-wrap",wrap:".popup-portfolio-slider",prev:"#popup_portfolio_left",next:"#popup_portfolio_right",pagination:[{type:"counter",wrap:"#popup-portfolio-counter",current:".slider-counter-content__current",total:".slider-counter-content__total"}],description:{wrap:".popup-dialog-portfolio",rows:".popup-portfolio-text"},slidesToShow:1,infinity:!0}).init(),new h({main:".transparency-slider-wrap",wrap:".transparency-slider",prev:"#transparency-arrow_left",next:"#transparency-arrow_right",overflow:!0,hideOverflow:!0,slidesToShow:1,maxBreakpoint:1024}).init(),n({modalWrapSelector:".popup-transparency",modalWindowSelector:".popup-dialog-transparency",openButtonsSelector:".transparency-item__img",closeButtonSelector:".close"}),new h({main:".popup-transparency-slider",wrap:".slider-wrapper__popup-transparency-slider",prev:"#transparency_left",next:"#transparency_right",slidesToShow:1,overflow:!0,pagination:[{type:"counter",wrap:"#transparency-popup-counter",current:".slider-counter-content__current",total:".slider-counter-content__total"}]}).init(),new h({main:".problems-slider-wrap",wrap:".problems-slider",prev:"#problems-arrow_left",next:"#problems-arrow_right",slidesToShow:1,slidesToHighlight:1,highlightSelector:".active-item",overflow:!0,hideOverflow:!0}).init(),l({iconsSelector:".problems-item__icon",iconsInnerSelector:".problems-item__icon-inner",hintsSelector:".problems-item-popup",mainWrapperSelector:".row"}),new h({main:".designs-slider",wrap:".slider-wrapper__designs-slider",overflow:!0,slidesToShow:1,pagination:[{type:"button",wrap:"#designs-list",active:".active"}],description:{wrap:"#designs",rows:".preview-block",active:".visible"},sliderInSlider:function(e){var t=e.nextSliderSelector;return new h({main:".designs-slider",wrap:t,prev:"#design_left",next:"#design_right",overflow:!0,slidesToShow:1,pagination:[{type:"button",wrap:".preview-block.visible",active:".preview_active"},{type:"counter",wrap:"#designs-counter",current:".slider-counter-content__current",total:".slider-counter-content__total"}]})}}).init(),new h({main:".nav-designs",wrap:"#designs-list",prev:"#nav-arrow-designs_left",next:"#nav-arrow-designs_right",slidesToShow:3,responsive:[{breackpoint:768,slidesToShow:2},{breackpoint:575,slidesToShow:1}],maxBreakpoint:1024}).init(),n({modalWrapSelector:".popup-design",modalWindowSelector:".popup-dialog-design",openButtonsSelector:"#open-design-modal",closeButtonSelector:".close"}),new h({main:".popup-design-slider",wrap:".slider-wrapper__popup-design-slider",overflow:!0,slidesToShow:1,pagination:[{type:"button",wrap:"#nav-list-popup-designs",active:".active"}],description:{wrap:".popup-design-tab__item",rows:".popup-design-text",active:".visible-content-block"},sliderInSlider:function(e){var t=e.nextSliderSelector;return new h({main:".popup-design-slider",wrap:t,prev:"#popup_design_left",next:"#popup_design_right",overflow:!0,slidesToShow:1,pagination:[{type:"counter",wrap:"#popup-designs-counter",current:".slider-counter-content__current",total:".slider-counter-content__total"}]})}}).init(),n({modalWrapSelector:".popup-consultation",modalWindowSelector:".feedback-wrap",openButtonsSelector:".consult-button",closeButtonSelector:".close"}),new h({main:".reviews-slider",wrap:".slider-wrapper__reviews-slider",prev:"#reviews-arrow_left",next:"#reviews-arrow_right",slidesToShow:1,overflow:!0,hideOverflow:!0}).init(),new h({main:".scheme-slider",wrap:".slider-wrapper__scheme-slider",overflow:!0,slidesToShow:1,pagination:[{type:"button",wrap:"#scheme-list",active:".active"}],description:{wrap:".scheme-slider-wrap",rows:".scheme-description-block",active:".visible-content-block"}}).init(),new h({main:"#partners",wrap:".partners-slider",prev:"#partners-arrow_left",next:"#partners-arrow_right",infinity:!0,slidesToShow:3,responsive:[{breackpoint:768,slidesToShow:2},{breackpoint:575,slidesToShow:1}],overflow:!0,hideOverflow:!0}).init(),function(e){var t=e.wrapSelector,n=e.itemSelector,i=e.messageSelector,r=e.activeSelector,o=document.querySelector(t),s=f(o.querySelectorAll(n)),a=(f(o.querySelectorAll(i)),0),l=1,c=function(e){s[e].classList.remove(r.slice(1)),l=0},d=function(e){s[e].classList.add(r.slice(1)),l=1};o.addEventListener("click",(function(e){s.forEach((function(t,n){(t===e.target||t.contains(e.target))&&(console.log(l),a!==n?(c(a),d(n)):l?c(a):d(n),a=n)}))}))}({wrapSelector:".accordion",itemSelector:".title_block",messageSelector:".msg",activeSelector:".msg-active"}),new w({checkBoxFieldSelector:".nav-list-popup-repair",cardsWrapperSelector:".popup-repair-types-content-table__list>tbody",urlDatabase:"./db/db.json",titleSelector:"#switch-inner",dateSelector:".popup-repair-types-content__head-date",searchKey:"title"}).init().then((function(){new h({main:".nav-popup-repair-types",wrap:".nav-list-popup-repair",prev:"#nav-arrow-popup-repair_left",next:"#nav-arrow-popup-repair_right",slidesToShow:3,overflow:!0,hideOverflow:!0,responsive:[{breackpoint:768,slidesToShow:2},{breackpoint:575,slidesToShow:1}],maxBreakpoint:1024}).init()}))}))})();