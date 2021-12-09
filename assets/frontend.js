/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/frontend/alert.js":
/*!*******************************!*\
  !*** ./src/frontend/alert.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

__webpack_require__.r(__webpack_exports__);
const Modal = {
  modals: false,

  init() {
    let modals = document.querySelectorAll("a[data-modal]");
    this.modals = modals;

    if (modals) {
      for (let index = 0; index < modals.length; index++) {
        Modal.add(modals[index]);
      }

      return modals;
    }

    return false;
  },

  add: function (modal) {
    modal.addEventListener("click", this.openModal.bind(event, modal));
  },
  openModal: function (modal, event) {
    const modalWindow = document.getElementById(modal.dataset.modal);
    modalWindow.classList.add('modal--open');
    setTimeout(function () {
      modalWindow.classList.add('modal--animate-open');
    }, 10);
    modalWindow.addEventListener("click", Modal.closeModal.bind(event, modal));
    modalWindow.querySelector('.modal__close').addEventListener("click", Modal.closeModal.bind(event, modal));
  },
  closeModal: function (modal, event) {
    if (event.target !== event.currentTarget) return;
    const modalWindow = document.getElementById(modal.dataset.modal);
    modalWindow.classList.remove('modal--animate-open');
    setTimeout(function () {
      modalWindow.classList.remove('modal--open');
    }, 1000);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/frontend/progress.js":
/*!**********************************!*\
  !*** ./src/frontend/progress.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    window.addEventListener("scroll", this.update.bind(event, progressBar));
    window.addEventListener("resize", this.update.bind(event, progressBar));
    this.update(progressBar);
  },

  animate(progressBar, duration) {
    this.animating = true;
    const max = progressBar.dataset.max;
    let current = progressBar.dataset.current;
    if (max === current) return;
    const percentValue = current > max ? 100 : Math.round(current * 100 / max);
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
    let isLoaded = progressBar.classList.contains("progress--loaded");

    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      if (!isLoaded) {
        progressBar.style.width = "{{percent}}%";
        progressBar.classList.add("progress--loaded");
        Progress.animate(progressBar, 3000);
      }

      return;
    }

    progressBar.classList.remove("progress--loaded");
  }

};
/* harmony default export */ __webpack_exports__["default"] = (Progress);

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _frontend_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frontend/progress */ "./src/frontend/progress.js");
/* harmony import */ var _frontend_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frontend/modal */ "./src/frontend/modal.js");
/* harmony import */ var _frontend_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frontend/alert */ "./src/frontend/alert.js");



document.addEventListener("DOMContentLoaded", () => {
  _frontend_progress__WEBPACK_IMPORTED_MODULE_0__["default"].init('progress');
  _frontend_modal__WEBPACK_IMPORTED_MODULE_1__["default"].init();
  _frontend_alert__WEBPACK_IMPORTED_MODULE_2__["default"].init();
});
}();
/******/ })()
;
//# sourceMappingURL=frontend.js.map