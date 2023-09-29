/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/frontend/alert.js":
/*!*******************************!*\
  !*** ./src/frontend/alert.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Alert = {
  alerts: false,
  init() {
    let alerts = document.querySelectorAll("div.alert--dismissable");
    this.alerts = alerts;
    if (alerts) {
      for (let index = 0; index < alerts.length; index++) {
        Alert.add(alerts[index]);
      }
      return alerts;
    }
    return false;
  },
  add: function (alert) {
    alert.querySelector('.alert__close').addEventListener("click", Alert.close.bind(event, alert));
  },
  close: function (alert, event) {
    alert.classList.add('alert--hidden');
    setTimeout(function () {
      alert.classList.add('alert--disabled');
    }, 500);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

/***/ "./src/frontend/modal.js":
/*!*******************************!*\
  !*** ./src/frontend/modal.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Modal = () => {
  window.addEventListener('DOMContentLoaded', () => {
    let modalLinks = document.querySelectorAll('button[data-modal]');
    if (!modalLinks) return;
    for (const modalLink of modalLinks) {
      modalLink.addEventListener('click', event => {
        const modalWindow = document.getElementById(modalLink.dataset.modal);
        modalWindow.classList.add('modal--open');
        modalWindow.addEventListener('click', ev => {
          if (ev.target !== ev.currentTarget && !ev.target.classList.contains('modal__close')) return;
          const modalWindow = document.getElementById(modalLink.dataset.modal);
          modalWindow.classList.remove('modal--open');
        });
      });
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/frontend/progress.js":
/*!**********************************!*\
  !*** ./src/frontend/progress.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Progress = {
  progressBars: false,
  init(className) {
    let progressBars = document.getElementsByClassName(className);
    this.progressBars = progressBars;
    if (progressBars) {
      for (let index = 0; index < progressBars.length; index++) {
        this.add(progressBars[index]);
      }
      return progressBars;
    }
    return false;
  },
  add(progressBar) {
    window.addEventListener('scroll', this.update.bind(event, progressBar));
    window.addEventListener('resize', this.update.bind(event, progressBar));
    this.update(progressBar);
  },
  animate(progressBar, duration) {
    if (this.animating) return;
    this.animating = true;
    const max = progressBar.dataset.max;
    let current = progressBar.dataset.current;
    if (max === current) return;
    const percentValue = current < max ? 100 : Math.round(current * 100 / max);
    const barValue = percentValue > 100 ? 100 : percentValue;
    let steps = duration / 1000 * 50;
    let step = 0;
    let currentValueLabel = progressBar.getElementsByClassName('progress__number-injection')[0];
    let indicator = progressBar.getElementsByClassName('progress__indicator')[0];
    let percentLabel = progressBar.getElementsByClassName('progress__label')[0];
    let timer = setInterval(function () {
      step++;
      let factor = Math.sqrt(1 - Math.pow(step / steps - 1, 2));
      let countValue = new Intl.NumberFormat('de-DE', {
        style: 'decimal'
      }).format(Math.round(current * factor));
      currentValueLabel.innerHTML = countValue;
      indicator.style.width = `${barValue * factor}%`;
      percentLabel.innerHTML = `${Math.round(percentValue * factor)}%`;
      if (step == steps) {
        clearInterval(timer);
      }
    }, 20);
  },
  update(progressBar) {
    let event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let position = progressBar.getBoundingClientRect();
    let isLoaded = progressBar.classList.contains('progress--loaded');
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      if (!isLoaded) {
        progressBar.style.width = '{{percent}}%';
        progressBar.classList.add('progress--loaded');
        Progress.animate(progressBar, 3000);
      }
      return;
    }
    progressBar.classList.remove('progress--loaded');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Progress);

/***/ }),

/***/ "./node_modules/ukiyojs/dist/ukiyo.umd.min.js":
/*!****************************************************!*\
  !*** ./node_modules/ukiyojs/dist/ukiyo.umd.min.js ***!
  \****************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=function(t){return Array.prototype.slice.call(t)},e=function(){var t=window.navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),i=!!t.match(/WebKit/i);return e&&i&&!t.match(/CriOS/i)},i={scale:1.5,speed:1.5,wrapperClass:null,willChange:!1,externalRAF:!1},n=function(t,e){var n=this;if(this.element=t,this.wrapper=document.createElement("div"),this.options=Object.assign({},i,e),this.updateOptions(),this.vh=document.documentElement.clientHeight,this.isVisible=!1,this.damp=this.calcDamp(document.documentElement.clientWidth),this.elementTagName=this.element.tagName.toLowerCase(),"img"===this.elementTagName){var o=this.element.getAttribute("src");if(!o)return;(async function(t){var e=new Image;return e.src=t,await e.decode(),e})(o).then((function(){n.createParallax()}))}else this.createParallax()};n.prototype.createParallax=function(){this.setStyle(!0),this.wrapElement(),e()||this.createObserver()},n.prototype.updateOptions=function(){var t=this.element.getAttribute("data-u-scale"),e=this.element.getAttribute("data-u-speed"),i=this.element.getAttribute("data-u-willchange");null!==t&&(this.options.scale=Number(t)),null!==e&&(this.options.speed=Number(e)),null!==i&&(this.options.willChange=!0)},n.prototype.setStyle=function(t){void 0===t&&(t=!1);var e=this.element.clientHeight,i=this.element.clientWidth,n=window.getComputedStyle(this.element),o="absolute"===n.position,s=this.wrapper.style,r=this.element.style;this.overflow=Math.floor(10*(e-e*this.options.scale))/10,o&&"0px"!==n.marginRight&&"0px"!==n.marginLeft&&n.marginLeft===n.marginRight&&(s.margin="auto"),"0px"===n.marginTop&&"0px"===n.marginBottom||(s.marginTop=n.marginTop,s.marginBottom=n.marginBottom,r.marginTop="0",r.marginBottom="0"),"auto"!==n.inset&&(s.top=n.top,s.right=n.right,s.bottom=n.bottom,s.left=n.left,r.top="0",r.right="0",r.bottom="0",r.left="0"),"none"!==n.transform&&(s.transform=n.transform),"auto"!==n.zIndex&&(s.zIndex=n.zIndex),s.position=o?"absolute":"relative","auto"!==n.gridArea&&"auto / auto / auto / auto"!==n.gridArea&&(s.gridArea=n.gridArea,r.gridArea="auto"),t&&(s.width="100%",s.overflow="hidden",r.display="block",r.overflow="hidden",r.backfaceVisibility="hidden","0px"!==n.padding&&(r.padding="0"),"img"===this.elementTagName?r.objectFit="cover":"video"!==this.elementTagName&&(r.backgroundPosition="center")),"0px"!==n.borderRadius&&(s.borderRadius=n.borderRadius,s.isolation||(s.isolation="isolate"),"0px"!==n.marginLeft&&(s.marginLeft=n.marginLeft,r.marginLeft="0"),"0px"!==n.marginRight&&(s.marginRight=n.marginRight,r.marginRight="0"),s.width=i+"px"),o&&(s.width=i+"px",r.width="100%"),"none"!==n.maxHeight&&(s.maxHeight=n.maxHeight,r.maxHeight="none"),"0px"!==n.minHeight&&(s.minHeight=n.minHeight,r.minHeight="none"),r.width=i+"px",s.setProperty("height",e+"px","important"),r.setProperty("height",e*this.options.scale+"px","important"),this.wrapperHeight=e},n.prototype.wrapElement=function(){var t=this.element.getAttribute("data-u-wrapper-class")||this.options.wrapperClass;t&&this.wrapper.classList.add(t);var e=this.element.closest("picture");if(null!==e)null!==e.parentNode&&e.parentNode.insertBefore(this.wrapper,e),this.wrapper.appendChild(e);else{var i=this.element.parentNode;null!==i&&i.insertBefore(this.wrapper,this.element),this.wrapper.appendChild(this.element)}},n.prototype.checkVisible=function(){var t=this.wrapper.getBoundingClientRect();0<t.bottom&&t.top<this.vh?this.onEnter():this.onLeave()},n.prototype.createObserver=function(){this.observer=new IntersectionObserver(this.handleIntersect.bind(this),{root:null,rootMargin:"0px",threshold:0}),this.observer.observe(this.wrapper)},n.prototype.handleIntersect=function(t){t[0].isIntersecting?this.onEnter():this.onLeave()},n.prototype.onEnter=function(){var t=this.element.style;this.options.willChange&&"transform"!==t.willChange&&(t.willChange="transform"),this.isVisible=!0},n.prototype.onLeave=function(){var t=this.element.style;this.options.willChange&&"transform"===t.willChange&&(t.willChange=""),this.isVisible=!1},n.prototype.calcTranslateValue=function(){var t=window.pageYOffset;t<0&&(t=0);var e=this.wrapper.getBoundingClientRect().top+t,i=(t+this.vh-e)/((this.vh+this.wrapperHeight)/100),n=Math.min(100,Math.max(0,i))/100,o=(this.overflow*this.options.speed-this.overflow)/2,s=this.overflow*(1-n)*this.options.speed*this.damp-o;return Number(s.toFixed(4))},n.prototype.calcDamp=function(t){var e=this.options.scale,i=this.options.speed;if((i>=1.4||e>=1.4)&&t<=1e3){e<1&&(e=1),i<1&&(i=1);var n=1.2-(1-(t/1e3+(3-(e+i)))),o=Math.max(.5,Math.min(1,n));return Math.floor(100*o)/100}return 1},n.prototype.transformParallax=function(){this.element.style.transform="translate3d(0 , "+this.calcTranslateValue()+"px , 0)"},n.prototype.animate=function(){e()&&this.checkVisible(),window.pageYOffset<0||this.isVisible&&this.transformParallax()},n.prototype.reset=function(){this.damp=this.calcDamp(window.innerWidth);var t=this.wrapper.style,e=this.element.style;this.vh=document.documentElement.clientHeight,t.width="",t.position="",t.height="100%",e.width="","img"===this.elementTagName&&"absolute"===t.position&&(t.height="100%"),""===t.gridArea?e.height="":e.height="100%","0px"!==t.margin&&(t.margin="",e.margin=""),"auto"!==t.inset&&(t.top="",t.right="",t.bottom="",t.left="",e.top="",e.right="",e.bottom="",e.left=""),"none"!==t.transform&&(t.transform="",e.transform=""),"auto"!==t.zIndex&&(t.zIndex=""),"0px"!==t.borderRadius&&(t.borderRadius="",t.isolation=""),this.setStyle(),this.transformParallax()},n.prototype.destroy=function(){var t;this.observer&&this.observer.disconnect(),this.wrapper.removeAttribute("style"),this.element.removeAttribute("style"),(t=this.wrapper).replaceWith.apply(t,this.wrapper.childNodes)};var o=function(e,i){if(this.elements=[],!e)throw new Error("Argument 'elements' is null.");var n,o;(this.elements=function(e){return Array.isArray(e)?e:"string"==typeof e?t(document.querySelectorAll(e)):e instanceof HTMLElement?[e]:e instanceof NodeList||e instanceof HTMLCollection?t(e):[e]}(e),this.options=i,this.instances=[],this.externalRAF=!(!this.options||!this.options.externalRAF)&&this.options.externalRAF,this.onResizeEvent=this.resize.bind(this),this.isInit=!1,n="undefined"!=typeof Promise&&-1!==Promise.toString().indexOf("[native code]"),o="undefined"!=typeof Element&&Element.prototype.closest,n&&o&&"IntersectionObserver"in window)&&this.init()};return o.prototype.init=function(){var t=this;this.isInit||(this.instances=this.elements.map((function(e){return new n(e,t.options)})),this.externalRAF||this.animate(),this.addEventListeners(),this.isInit=!0)},o.prototype.animate=function(){this.instances.forEach((function(t){t.animate()})),this.externalRAF||(this.requestId=window.requestAnimationFrame(this.animate.bind(this)))},o.prototype.cancel=function(){this.requestId&&window.cancelAnimationFrame(this.requestId)},o.prototype.reset=function(){this.instances.forEach((function(t){t.reset()}))},o.prototype.resize=function(){clearTimeout(this.timer),this.timer=window.setTimeout(this.reset.bind(this),500),this.reset.bind(this)},o.prototype.addEventListeners=function(){navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)?window.addEventListener("orientationchange",this.onResizeEvent):window.addEventListener("resize",this.onResizeEvent)},o.prototype.destroy=function(){this.cancel(),window.removeEventListener("resize",this.onResizeEvent),window.removeEventListener("orientationchange",this.onResizeEvent),this.instances.forEach((function(t){t.destroy()})),this.isInit=!1},o}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ukiyojs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ukiyojs */ "./node_modules/ukiyojs/dist/ukiyo.umd.min.js");
/* harmony import */ var ukiyojs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ukiyojs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frontend/alert */ "./src/frontend/alert.js");
/* harmony import */ var _frontend_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frontend/modal */ "./src/frontend/modal.js");
/* harmony import */ var _frontend_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frontend/progress */ "./src/frontend/progress.js");




document.addEventListener('DOMContentLoaded', () => {
  _frontend_progress__WEBPACK_IMPORTED_MODULE_3__["default"].init('progress');
  (0,_frontend_modal__WEBPACK_IMPORTED_MODULE_2__["default"])();
  _frontend_alert__WEBPACK_IMPORTED_MODULE_1__["default"].init();
});
const images = document.querySelectorAll('.has-parallax');
new (ukiyojs__WEBPACK_IMPORTED_MODULE_0___default())(images);
}();
/******/ })()
;
//# sourceMappingURL=frontend.js.map