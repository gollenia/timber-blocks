/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
  update(progressBar, event = false) {
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

/***/ "./src/frontend/scroll.js":
/*!********************************!*\
  !*** ./src/frontend/scroll.js ***!
  \********************************/
/***/ (function() {

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('ctx-animate-start');
      return;
    }
    entry.target.classList.remove('ctx-animate-start');
  });
});
const animatedElements = document.querySelectorAll('.ctx-animate-on-scroll, .ctx-animate-li-on-scroll li');
animatedElements.forEach(element => {
  observer.observe(element);
});

/***/ }),

/***/ "./src/frontend/animation.scss":
/*!*************************************!*\
  !*** ./src/frontend/animation.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/* harmony import */ var _frontend_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frontend/modal */ "./src/frontend/modal.js");
/* harmony import */ var _frontend_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frontend/progress */ "./src/frontend/progress.js");
/* harmony import */ var _frontend_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frontend/scroll.js */ "./src/frontend/scroll.js");
/* harmony import */ var _frontend_scroll_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_frontend_scroll_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _frontend_animation_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frontend/animation.scss */ "./src/frontend/animation.scss");




document.addEventListener('DOMContentLoaded', () => {
  _frontend_progress__WEBPACK_IMPORTED_MODULE_1__["default"].init('progress');
  (0,_frontend_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=frontend.js.map