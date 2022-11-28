/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/buttons/button-group/edit.js":
/*!*************************************************!*\
  !*** ./src/blocks/buttons/button-group/edit.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar */ "./src/blocks/buttons/button-group/toolbar.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




function Edit(_ref) {
  let {
    ...props
  } = _ref;
  const {
    attributes: {
      textAlignment
    }
  } = props;
  const ALLOWED_BLOCKS = ['ctx-blocks/button', 'ctx-blocks/button-spacer', 'events-manager/booking'];
  const classes = ["ctx:buttons", `ctx:buttons__${textAlignment}`].filter(Boolean).join(" ");
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useInnerBlocksProps)({
    className: classes
  }, {
    template: [['ctx-blocks/button']],
    allowedBlocks: ALLOWED_BLOCKS,
    orientation: 'horizontal'
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_toolbar__WEBPACK_IMPORTED_MODULE_1__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "ctx:control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Button Group", "events")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps)));
}

/***/ }),

/***/ "./src/blocks/buttons/button-group/icon.js":
/*!*************************************************!*\
  !*** ./src/blocks/buttons/button-group/icon.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"
})));

/***/ }),

/***/ "./src/blocks/buttons/button-group/index.js":
/*!**************************************************!*\
  !*** ./src/blocks/buttons/button-group/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/buttons/button-group/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/blocks/buttons/button-group/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/buttons/button-group/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/buttons/button-group/editor.scss");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);

/**
 * Internal dependencies
 */





/**
  * Wordpress dependencies
  */


const {
  name,
  title
} = _block_json__WEBPACK_IMPORTED_MODULE_3__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(title, 'ctx-blocks'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.Content, null);
  }
};


/***/ }),

/***/ "./src/blocks/buttons/button-group/toolbar.js":
/*!****************************************************!*\
  !*** ./src/blocks/buttons/button-group/toolbar.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const Toolbar = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    textAlignment
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.AlignmentToolbar, {
    value: textAlignment,
    onChange: event => setAttributes({
      textAlignment: event
    })
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "./src/blocks/buttons/button-spacer/edit.js":
/*!**************************************************!*\
  !*** ./src/blocks/buttons/button-spacer/edit.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



function Edit(_ref) {
  let {
    ...props
  } = _ref;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'ctx-button-spacer'
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps);
}

/***/ }),

/***/ "./src/blocks/buttons/button-spacer/icon.js":
/*!**************************************************!*\
  !*** ./src/blocks/buttons/button-spacer/icon.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18 9v4H6V9H4v6h16V9h-2z"
})));

/***/ }),

/***/ "./src/blocks/buttons/button-spacer/index.js":
/*!***************************************************!*\
  !*** ./src/blocks/buttons/button-spacer/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/buttons/button-spacer/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/blocks/buttons/button-spacer/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/buttons/button-spacer/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/buttons/button-spacer/editor.scss");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);

/**
 * Internal dependencies
 */





/**
  * Wordpress dependencies
  */


const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_3__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(description, 'ctx-blocks'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.Content, null);
  }
};


/***/ }),

/***/ "./src/blocks/buttons/button/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/buttons/button/edit.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ButtonEdit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var colord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! colord */ "./node_modules/colord/index.mjs");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector */ "./src/blocks/buttons/button/inspector.js");

/**
 * Wordpress dependencies
 */





/**
 * Internal dependencies
 */

function ButtonEdit(_ref) {
  let {
    ...props
  } = _ref;
  const {
    attributes: {
      title,
      size,
      isLink,
      modalTitle,
      modalFull,
      hasModal,
      outline,
      icon,
      iconRight
    },
    setAttributes,
    buttonColor,
    className
  } = props;
  const TEMPLATE = [['core/heading', {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading or Greeting', 'ctx-blocks')
  }], ['core/paragraph']];
  const [showModal, setShowModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const buttonClasses = [className || false, "ctx-button", iconRight ? "reverse" : false, size || false, outline ? "btn-outline" : false].filter(Boolean).join(" ");
  const modalClasses = [modalFull ? "full" : false, "ctx-modal"].filter(Boolean).join(" ");
  const textColor = buttonColor.color == undefined || (0,colord__WEBPACK_IMPORTED_MODULE_4__.colord)(buttonColor.color).isLight() ? "#000000" : "#ffffff";
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: "ctx-button-block"
  });
  const style = {
    background: !outline && !isLink ? buttonColor.color : 'transparent',
    boxShadow: outline ? "inset 0px 0px 0px 2px " + buttonColor.color : 'none',
    color: isLink || outline ? buttonColor.color : textColor
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_3__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: style,
    className: buttonClasses,
    onClick: () => {
      setShowModal(true);
    }
  }, icon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: "material-icons"
  }, icon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    value: title,
    onChange: value => setAttributes({
      title: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button title', 'ctx-blocks'),
    allowedFormats: ['core/bold', 'core/italic']
  })), hasModal && showModal && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "backdrop",
    onClick: () => {
      setShowModal(false);
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: modalClasses,
    onClick: event => {
      event.stopPropagation();
      event.preventDefault();
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-modal-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    value: modalTitle,
    onChange: value => setAttributes({
      modalTitle: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Modal title", "ctx-blocks")
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-modal-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    template: TEMPLATE
  })))));
}

/***/ }),

/***/ "./src/blocks/buttons/button/icon.js":
/*!*******************************************!*\
  !*** ./src/blocks/buttons/button/icon.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"
})));

/***/ }),

/***/ "./src/blocks/buttons/button/index.js":
/*!********************************************!*\
  !*** ./src/blocks/buttons/button/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/buttons/button/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/blocks/buttons/button/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/buttons/button/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/buttons/button/editor.scss");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);

/**
 * Internal dependencies
 */





/**
  * Wordpress dependencies
  */



const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_3__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(description, 'ctx-blocks'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.withColors)({
    buttonColor: 'buttonColor'
  })(_edit__WEBPACK_IMPORTED_MODULE_1__["default"]),
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.Content, null);
  }
};


/***/ }),

/***/ "./src/blocks/buttons/button/inspector.js":
/*!************************************************!*\
  !*** ./src/blocks/buttons/button/inspector.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */




/**
 * Inspector controls
 */
const Inspector = props => {
  const {
    attributes: {
      fullWidth,
      url,
      size,
      hasModal,
      modalFull,
      icon,
      iconOnly,
      iconRight,
      isLink,
      outline
    },
    setAttributes,
    buttonColor,
    setButtonColor
  } = props;
  const setAction = action => {
    const value = action == "modal" ? true : false;
    setAttributes({
      hasModal: value
    });
  };
  const currentAction = () => {
    return hasModal ? "modal" : "link";
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Appearance', 'ctx-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Size', 'ctx-blocks'),
    value: size,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Normal', 'ctx-blocks'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Small', 'ctx-blocks'),
      value: 'small'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Large', 'ctx-blocks'),
      value: 'large'
    }],
    onChange: event => {
      setAttributes({
        size: event
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Outline-Button", 'ctx-blocks'),
    checked: outline,
    onChange: value => setAttributes({
      outline: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Link only", 'ctx-blocks'),
    checked: isLink,
    onChange: value => setAttributes({
      isLink: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Full width", 'ctx-blocks'),
    checked: fullWidth,
    onChange: value => setAttributes({
      fullWidth: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon', 'ctx-blocks'),
    value: icon,
    onChange: value => {
      setAttributes({
        icon: value
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show icon on the right", 'ctx-blocks'),
    checked: iconRight,
    onChange: value => setAttributes({
      iconRight: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hide button text and show icon only", 'ctx-blocks'),
    checked: iconOnly,
    onChange: value => setAttributes({
      iconOnly: value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Behaviour', 'ctx-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Action', 'ctx-blocks'),
    value: currentAction(),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link', 'ctx-blocks'),
      value: 'link'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Modal', 'ctx-blocks'),
      value: 'modal'
    }],
    onChange: event => {
      setAction(event);
    }
  }), !hasModal && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add a URL or a link", 'ctx-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.URLInput, {
    value: url,
    onChange: (url, post) => setAttributes({
      url,
      text: post && post.title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click here', 'ctx-blocks')
    })
  })), hasModal && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Full screen size", 'ctx-blocks'),
    checked: modalFull,
    onChange: value => setAttributes({
      modalFull: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color Settings', 'ctx-blocks'),
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set a background color for the button', 'ctx-blocks'),
      onChange: setButtonColor,
      value: buttonColor.color,
      disableCustomColors: true
    }]
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/card/cardImage.js":
/*!**************************************!*\
  !*** ./src/blocks/card/cardImage.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const CardImage = _ref => {
  var _image$sizes;
  let {
    image,
    failMessage
  } = _ref;
  if (!image) return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
  if (image.subtype == 'svg+xml') return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: image.url
  });
  if (!(image !== null && image !== void 0 && (_image$sizes = image.sizes) !== null && _image$sizes !== void 0 && _image$sizes.large)) return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, failMessage);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: image.sizes.large.url
  });
};
/* harmony default export */ __webpack_exports__["default"] = (CardImage);

/***/ }),

/***/ "./src/blocks/card/edit.js":
/*!*********************************!*\
  !*** ./src/blocks/card/edit.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CardEdit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/card/inspector.js");
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar */ "./src/blocks/card/toolbar.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var colord__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! colord */ "./node_modules/colord/index.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _cardImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cardImage */ "./src/blocks/card/cardImage.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons */ "./src/blocks/card/icons.js");









function CardEdit(_ref) {
  let {
    ...props
  } = _ref;
  const {
    attributes: {
      imagePosition,
      textAlign,
      isFirst,
      isLast,
      label,
      badge,
      hover,
      image,
      url
    },
    backgroundColor,
    secondaryColor
  } = props;
  const allowedBlocks = ['core/spacer', 'core/separator', 'core/paragraph', 'core/shortcode', 'core/heading', 'core/list', 'ctx-blocks/button-group', 'ctx-blocks/button', 'ctx-blocks/image', 'ctx-blocks/nav', 'ctx-blocks/posts', 'ctx-blocks/grid-row', 'ctx-blocks/description-list', 'ctx-blocks/accordion-collection', 'ctx-blocks/progress', 'events-manager/details', 'events-manager/booking'];
  const template = [['core/heading', {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Title', 'ctx-blocks'),
    className: 'card__title',
    level: 2
  }], ['core/heading', {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Subtitle', 'ctx-blocks'),
    className: 'card__subtitle',
    level: 4
  }], ['core/paragraph', {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Your content goes here...', 'ctx-blocks'),
    className: 'card__text'
  }]];
  const style = {
    background: backgroundColor.color,
    color: (0,colord__WEBPACK_IMPORTED_MODULE_8__.colord)(backgroundColor.color).isDark() ? "#ffffff" : "#000000"
  };
  const secondaryStyle = {
    background: secondaryColor.color,
    color: (0,colord__WEBPACK_IMPORTED_MODULE_8__.colord)(secondaryColor.color).isDark() ? "#ffffff" : "#000000"
  };
  const innerBlockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useInnerBlocksProps)({}, {
    allowedBlocks,
    template
  });
  const classes = ["ctx:card", isFirst ? "ctx:card__first" : false, isLast ? "ctx:card__last" : false, hover ? "ctx:card__hover" : false, `ctx:card--${textAlign}`, `ctx:card__image--${imagePosition}`].filter(Boolean).join(" ");
  console.log(_icons__WEBPACK_IMPORTED_MODULE_7__["default"]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:control__label ctx:card__label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Card', 'ctx-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:control__icons"
  }, url != '' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Icon, {
    className: "ctx:control__icon",
    icon: _icons__WEBPACK_IMPORTED_MODULE_7__["default"] === null || _icons__WEBPACK_IMPORTED_MODULE_7__["default"] === void 0 ? void 0 : _icons__WEBPACK_IMPORTED_MODULE_7__["default"].url,
    size: 18
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: style,
    className: classes
  }, badge != "" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", {
    className: "ctx:card__badge",
    style: secondaryStyle
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, badge)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_cardImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    image: image,
    failMessage: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image is too small. Please upload a larger version')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:card__content"
  }, label != '' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    style: secondaryStyle
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlockProps)))));
}

/***/ }),

/***/ "./src/blocks/card/icons.js":
/*!**********************************!*\
  !*** ./src/blocks/card/icons.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


let icons = [];
icons.card = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/SVG",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}));
icons.topimage = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 64 64",
  xmlns: "http://www.w3.org/2000/SVG",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinecap: "square",
  strokeLinejoin: "round",
  strokeMiterlimit: 1.5
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "#898989",
  d: "M15.512 26.113h34.371v32.809H15.512z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "#fff",
  d: "M15.512 3.627h34.371v22.486H15.512z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M49.883 3.627H15.512v22.486h34.371V3.627zm-1 1v20.486H16.512V4.627h32.371z",
  fill: "#898989"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M25.64 17.094l7.001 6.417H18.636l7.003-6.417z",
  fill: "#898989"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M37.022 12.575l9.736 10.936H27.285l9.737-10.936z",
  fill: "#898989"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.031 30.019H39.84M20.031 36.163h22.598M20.031 42.518h18.19",
  fill: "none",
  stroke: "#fff"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M46.256 52.464a.795.795 0 00-.795-.795h-9.625a.795.795 0 00-.795.795v1.59c0 .439.356.795.795.795h9.625a.795.795 0 00.795-.795v-1.59z",
  fill: "#fff"
}));
icons.bottomimage = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 64 64",
  xmlns: "http://www.w3.org/2000/SVG",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinecap: "square",
  strokeLinejoin: "round",
  strokeMiterlimit: 1.5
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "#898989",
  d: "M15.456 4.817h34.371v32.81h-34.37z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "#fff",
  d: "M15.512 37.627h34.371v22.486H15.512z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M49.883 37.627H15.512v22.486h34.371V37.627zm-1 1v20.486H16.512V38.627h32.371z",
  fill: "#898989"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M25.64 51.094l7.001 6.417H18.636l7.003-6.417z",
  fill: "#898989"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M37.022 46.575l9.736 10.936H27.285l9.737-10.936z",
  fill: "#898989"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19.975 8.723h19.81M19.975 14.867h22.598M19.975 21.222h18.19",
  fill: "none",
  stroke: "#fff"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M46.2 31.168a.795.795 0 00-.795-.795H35.78a.795.795 0 00-.795.795v1.59c0 .44.356.795.795.795h9.625a.795.795 0 00.795-.795v-1.59z",
  fill: "#fff"
})));
icons.leftimage = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 64 64",
  xmlns: "http://www.w3.org/2000/SVG",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinecap: "square",
  strokeLinejoin: "round",
  strokeMiterlimit: 1.5
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "#898989",
  d: "M30.28 15.595h29.852v32.81H30.28z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "#fff",
  d: "M3.493 15.596H30.28v32.808H3.493z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M30.28 15.596H3.493v32.808H30.28V15.596zm-1 1v30.809H4.493v-30.81H29.28z",
  fill: "#898989"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11.255 41.234l5.587 4.777H5.667l5.588-4.777z",
  fill: "#898989"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.337 37.87l7.769 8.14H12.568l7.77-8.14z",
  fill: "#898989"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M33.907 22.483h19.809M33.907 28.627h22.598M33.907 34.982h18.19",
  fill: "none",
  stroke: "#fff"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M56.505 41.946a.795.795 0 00-.795-.795h-9.625a.795.795 0 00-.795.795v1.59c0 .44.356.795.795.795h9.625a.795.795 0 00.795-.795v-1.59z",
  fill: "#fff"
})));
icons.rightimage = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 64 64",
  xmlns: "http://www.w3.org/2000/SVG",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinecap: "square",
  strokeLinejoin: "round",
  strokeMiterlimit: 1.5
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "#898989",
  d: "M4.28 15.595h29.852v32.81H4.28z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "#fff",
  d: "M34.132 15.596H60.92v32.808H34.132z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M60.92 15.596H34.131v32.808H60.92V15.596zm-1 1v30.809H35.131v-30.81h24.787z",
  fill: "#898989"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M41.894 41.234l5.587 4.777H36.306l5.588-4.777z",
  fill: "#898989"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M50.976 37.87l7.769 8.14H43.207l7.77-8.14z",
  fill: "#898989"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7.907 22.483h19.809M7.907 28.627h22.598M7.907 34.982h18.19",
  fill: "none",
  stroke: "#fff"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M30.505 41.946a.795.795 0 00-.795-.795h-9.625a.795.795 0 00-.795.795v1.59c0 .44.356.795.795.795h9.625a.795.795 0 00.795-.795v-1.59z",
  fill: "#fff"
})));
icons.url = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/SVG",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/blocks/card/index.js":
/*!**********************************!*\
  !*** ./src/blocks/card/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/card/edit.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ "./src/blocks/card/icons.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/card/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/card/editor.scss");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);

/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */


const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_3__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(description, 'ctx-blocks'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_2__["default"].card,
  edit: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.withColors)({
    backgroundColor: 'backgroundColor',
    secondaryColor: 'secondaryColor'
  })(_edit__WEBPACK_IMPORTED_MODULE_1__["default"]),
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.Content, null);
  }
};


/***/ }),

/***/ "./src/blocks/card/inspector.js":
/*!**************************************!*\
  !*** ./src/blocks/card/inspector.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons.js */ "./src/blocks/card/icons.js");








const Inspector = props => {
  const {
    attributes: {
      image,
      imagePosition,
      hover,
      transparent,
      url,
      label,
      shadow,
      badge,
      isFirst,
      isLast,
      actions
    },
    setAttributes,
    backgroundColor,
    setBackgroundColor,
    secondaryColor,
    setSecondaryColor
  } = props;
  const isSVG = image != null ? image.subtype == "svg+xml" : false;
  const imageUrl = image == null ? false : !(0,lodash__WEBPACK_IMPORTED_MODULE_4__.has)(image, 'sizes.medium') || isSVG ? image.url : image.sizes.medium.url;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Appearance', 'ctx-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shadow', 'ctx-blocks'),
    checked: shadow,
    onChange: value => {
      setAttributes({
        shadow: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Transparent", 'ctx-blocks'),
    checked: transparent,
    onChange: value => {
      setAttributes({
        transparent: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Label', 'ctx-blocks'),
    value: label,
    onChange: value => {
      setAttributes({
        label: value
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Adds a floating label for e.g. a category', 'ctx-blocks')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Badge', 'ctx-blocks'),
    value: badge,
    onChange: value => {
      setAttributes({
        badge: value
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Draw attention to this card or add a counter with a badge in the edge', 'ctx-blocks')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color settings', 'ctx-blocks'),
    initialOpen: false,
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background color', 'ctx-blocks'),
      onChange: setBackgroundColor,
      value: backgroundColor.color,
      disableCustomColors: true
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Secondary color', 'ctx-blocks'),
      onChange: setSecondaryColor,
      value: secondaryColor.color,
      disableCustomColors: true
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image', 'ctx-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      image: media
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image', 'ctx-blocks'),
    value: image,
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "editor-post-featured-image ctx-image-select"
      }, !image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        type: "button",
        className: "components-button editor-post-featured-image__toggle",
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose image', 'ctx-blocks')), image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: "",
        src: imageUrl,
        onClick: open,
        alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No image loaded", 'ctx-blocks')
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        type: "button",
        isSecondary: true,
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Replace image", 'ctx-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        type: "button",
        isDestructive: true,
        onClick: () => setAttributes({
          image: null
        })
      }, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove image", 'ctx-blocks')))));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "components-base-control__label",
    htmlFor: "inspector-range-control-4"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image position", 'ctx-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "imagePositionSelector"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => setAttributes({
      imagePosition: "top"
    }),
    className: imagePosition == "top" ? "active" : ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    size: "64",
    className: "icon",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_5__["default"].topimage
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("top", 'ctx-blocks'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => setAttributes({
      imagePosition: "bottom"
    }),
    className: imagePosition == "bottom" ? "active" : ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    size: "64",
    className: "icon",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_5__["default"].bottomimage
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("bottom", 'ctx-blocks'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => setAttributes({
      imagePosition: "left"
    }),
    className: imagePosition == "left" ? "active" : ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    size: "64",
    className: "icon",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_5__["default"].leftimage
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("left", 'ctx-blocks'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => setAttributes({
      imagePosition: "right"
    }),
    className: imagePosition == "right" ? "active" : ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    size: "64",
    className: "icon",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_5__["default"].rightimage
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("right", 'ctx-blocks'))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Behaviour", 'ctx-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Highlight on mouse over', 'ctx-blocks'),
    checked: hover,
    onChange: value => {
      setAttributes({
        hover: value
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link', 'ctx-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.URLInput, {
    value: url,
    onChange: (url, post) => setAttributes({
      url,
      text: post && post.title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click here...', 'ctx-blocks')
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Layout settings", 'ctx-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Is first element", 'ctx-blocks'),
    checked: isFirst,
    onChange: value => {
      setAttributes({
        isFirst: value
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Is last element", 'ctx-blocks'),
    checked: isLast,
    onChange: value => {
      setAttributes({
        isLast: value
      });
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/card/toolbar.js":
/*!************************************!*\
  !*** ./src/blocks/card/toolbar.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const Toolbar = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    textAlign
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.AlignmentToolbar, {
    value: textAlign,
    onChange: event => setAttributes({
      textAlign: event
    })
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "./src/blocks/conditional/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/conditional/edit.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ edit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector */ "./src/blocks/conditional/inspector.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);


/**
 * Internal dependencies
 */

/**
 * Wordpress dependencies
 */


function edit(_ref) {
  let {
    ...props
  } = _ref;
  const {
    clientId
  } = props;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)();
  const template = [['ctx-blocks/section']];
  const allowedBlocks = ['ctx-blocks/section'];
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useInnerBlocksProps)(blockProps);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "ctx:conditional"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_2__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, innerBlocksProps, {
    className: "ctx:base__container"
  })));
}

/***/ }),

/***/ "./src/blocks/conditional/icon.js":
/*!****************************************!*\
  !*** ./src/blocks/conditional/icon.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
})));

/***/ }),

/***/ "./src/blocks/conditional/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/conditional/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/conditional/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/blocks/conditional/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/conditional/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/conditional/editor.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */

const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_2__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(description, 'ctx-blocks'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: () => {
    return null;
  }
};


/***/ }),

/***/ "./src/blocks/conditional/inspector.js":
/*!*********************************************!*\
  !*** ./src/blocks/conditional/inspector.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/**
 * Wordpress Dependencies
 */



const Inspector = props => {
  const {
    attributes: {
      fromDate,
      toDate
    },
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Date', 'ctx-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show only...", "ctx-events")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    value: fromDate,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("From", "ctx-events"),
    onChange: newDate => setAttributes({
      fromDate: newDate
    }),
    is12Hour: false,
    type: "date"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("To", "ctx-events"),
    value: toDate,
    onChange: newDate => setAttributes({
      toDate: newDate
    }),
    is12Hour: false,
    type: "date"
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/description/description-item/edit.js":
/*!*********************************************************!*\
  !*** ./src/blocks/description/description-item/edit.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/description/description-item/inspector.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_utils_relurl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/utils/relurl */ "./src/common/utils/relurl.js");

/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */



function Edit(_ref) {
  let {
    ...props
  } = _ref;
  const {
    attributes: {
      text,
      contentType,
      image,
      icon,
      roundImage,
      title,
      url,
      urlIcon
    },
    setAttributes,
    className
  } = props;
  const classes = [className, "ctx-description--" + contentType, "ctx-description__item"].filter(Boolean).join(" ");
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: classes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "ctx-description__icon"
  }, image && image.subtype != "svg+xml" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: roundImage ? "round" : "",
    src: image.sizes.thumbnail.url
  }), image && image.subtype === "svg+xml" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: image.url,
    width: "3rem",
    height: "3rem"
  }), !image && icon !== "" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "material-icons"
  }, icon)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-description__content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "b",
    value: title,
    onChange: value => setAttributes({
      title: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Title", 'ctx-blocks')
  }), contentType !== "date" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "p",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Text", 'ctx-blocks'),
    value: text,
    onChange: value => setAttributes({
      text: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Description", 'ctx-blocks')
  }), contentType === "date" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, text)), url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "ctx-description__action"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: "material-icons"
  }, urlIcon)))));
}

/***/ }),

/***/ "./src/blocks/description/description-item/icon.js":
/*!*********************************************************!*\
  !*** ./src/blocks/description/description-item/icon.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/blocks/description/description-item/index.js":
/*!**********************************************************!*\
  !*** ./src/blocks/description/description-item/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/description/description-item/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/blocks/description/description-item/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/description/description-item/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/description/description-item/editor.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */

const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_2__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(description, 'ctx-blocks'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: () => {
    return null;
  }
};


/***/ }),

/***/ "./src/blocks/description/description-item/inspector.js":
/*!**************************************************************!*\
  !*** ./src/blocks/description/description-item/inspector.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




const Inspector = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    contentType,
    text,
    image,
    roundImage,
    url,
    urlIcon,
    icon
  } = attributes;
  const onUpdateDate = dateTime => {
    setAttributes({
      text: moment(dateTime).format('YYYY-MM-DD HH:mm')
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Data', 'ctx-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Type of content', 'ctx-blocks'),
    value: contentType // e.g: value = [ 'a', 'c' ]
    ,
    onChange: value => {
      setAttributes({
        contentType: value,
        text: "",
        icon: value
      });
    },
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Other", 'ctx-blocks')
    }, {
      value: 'today',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Date", 'ctx-blocks')
    }, {
      value: 'schedule',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Time", 'ctx-blocks')
    }, {
      value: 'place',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Place", 'ctx-blocks')
    }, {
      value: 'person',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Person", 'ctx-blocks')
    }]
  }), contentType === "today" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "ctx-date-select"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.DatePicker, {
    currentDate: text,
    onChange: val => onUpdateDate(val),
    is12Hour: false
  })), contentType === "schedule" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "ctx-date-select"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TimePicker, {
    currentDate: text,
    onChange: val => onUpdateDate(val),
    is12Hour: false
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Behaviour', 'ctx-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Link", 'ctx-blocks'),
    value: url,
    onChange: value => setAttributes({
      url: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon for Link", 'ctx-blocks'),
    value: urlIcon,
    onChange: value => setAttributes({
      urlIcon: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image", 'ctx-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      image: media
    }),
    label: "Bild",
    value: image,
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "editor-post-featured-image ctx-image-select"
      }, !image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        type: "button",
        className: "components-button editor-post-featured-image__toggle",
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose image', 'ctx-blocks')), image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: "",
        src: image.url,
        onClick: open,
        alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No image loaded", 'ctx-blocks')
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        type: "button",
        className: "components-button is-button is-default is-large",
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Replace image", 'ctx-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        type: "button",
        className: "components-button is-link is-destructive",
        onClick: () => setAttributes({
          image: null
        })
      }, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove image", 'ctx-blocks'))));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Rounded", 'ctx-blocks'),
    checked: roundImage,
    onChange: value => setAttributes({
      roundImage: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon", 'ctx-blocks'),
    value: icon,
    onChange: value => setAttributes({
      icon: value
    })
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/description/description-list/edit.js":
/*!*********************************************************!*\
  !*** ./src/blocks/description/description-list/edit.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/description/description-list/inspector.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);

/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */


function Edit(_ref) {
  let {
    ...props
  } = _ref;
  const allowedBlocks = ['ctx-blocks/description-item'];
  const {
    attributes: {
      dividers
    },
    className
  } = props;
  const classes = ['ctx:description__wrapper', className, dividers ? "ctx-description--divider" : false].filter(Boolean).join(" ");
  const template = [['ctx-blocks/description-item']];
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: classes
  });
  const innerBlockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useInnerBlocksProps)({}, {
    allowedBlocks,
    template,
    templateLock: false
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:description"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:control__label ctx:description__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description List', 'ctx-blocks'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlockProps)));
}

/***/ }),

/***/ "./src/blocks/description/description-list/icon.js":
/*!*********************************************************!*\
  !*** ./src/blocks/description/description-list/icon.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/blocks/description/description-list/index.js":
/*!**********************************************************!*\
  !*** ./src/blocks/description/description-list/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/description/description-list/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/blocks/description/description-list/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/description/description-list/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/description/description-list/editor.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);

/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */


const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_3__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(description, 'ctx-blocks'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InnerBlocks.Content, null);
  }
};


/***/ }),

/***/ "./src/blocks/description/description-list/inspector.js":
/*!**************************************************************!*\
  !*** ./src/blocks/description/description-list/inspector.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




const Inspector = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    dividers
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Appearance', 'ctx-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lines as separators", 'ctx-blocks'),
    checked: dividers,
    onChange: event => setAttributes({
      dividers: event
    })
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/footer/icon.js":
/*!***********************************!*\
  !*** ./src/blocks/footer/icon.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M6 17h12v-3H6Zm-2 3q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h16V6H4v12Zm0 0V6v12Z"
})));

/***/ }),

/***/ "./src/blocks/footer/index.js":
/*!************************************!*\
  !*** ./src/blocks/footer/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/footer/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/footer/edit.tsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/footer/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/blocks/footer/icon.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);

/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */


const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_1__,
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(description, 'ctx-blocks'),
  edit: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.withColors)({
    backgroundColor: 'backgroundColor'
  })(_edit__WEBPACK_IMPORTED_MODULE_2__["default"]),
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.Content, null);
  }
};


/***/ }),

/***/ "./src/blocks/grid/grid-column/edit.js":
/*!*********************************************!*\
  !*** ./src/blocks/grid/grid-column/edit.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GridColumnEdit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/grid/grid-column/inspector.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




function GridColumnEdit(_ref) {
  let {
    ...props
  } = _ref;
  const {
    attributes: {
      widthLarge
    }
  } = props;
  const TEMPLATE = [['core/paragraph', {}]];
  const size = widthLarge == 0 ? "Auto" : widthLarge;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: `ctx:column ctx:column--${widthLarge}`
  });
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useInnerBlocksProps)({
    className: 'ctx:column__wrapper'
  }, {
    template: TEMPLATE
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:column__label ctx:control__label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Column (width: ', 'ctx-blocks') + size + ')')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps)));
}

/***/ }),

/***/ "./src/blocks/grid/grid-column/icons.js":
/*!**********************************************!*\
  !*** ./src/blocks/grid/grid-column/icons.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


let icons = [];
icons.column = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/SVG",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}));
icons.zoom = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/SVG",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15,3l2.3,2.3l-2.89,2.87l1.42,1.42L18.7,6.7L21,9V3H15z M3,9l2.3-2.3l2.87,2.89l1.42-1.42L6.7,5.3L9,3H3V9z M9,21 l-2.3-2.3l2.89-2.87l-1.42-1.42L5.3,17.3L3,15v6H9z M21,15l-2.3,2.3l-2.87-2.89l-1.42,1.42l2.89,2.87L15,21h6V15z"
})))));
icons.collapse = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/SVG",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  fill: "none",
  height: "24",
  width: "24",
  x: "0"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M9.01,14H2v2h7.01v3L13,15l-3.99-4V14z M14.99,13v-3H22V8h-7.01V5L11,9L14.99,13z"
})))));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/blocks/grid/grid-column/index.js":
/*!**********************************************!*\
  !*** ./src/blocks/grid/grid-column/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/grid/grid-column/edit.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ "./src/blocks/grid/grid-column/icons.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/grid/grid-column/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/grid/grid-column/editor.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);

/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */


const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_3__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(description, 'ctx-blocks'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_2__["default"].column,
  getEditWrapperProps(props) {
    return {
      'data-width': props.widthLarge || false
    };
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InnerBlocks.Content, null);
  }
};


/***/ }),

/***/ "./src/blocks/grid/grid-column/inspector.js":
/*!**************************************************!*\
  !*** ./src/blocks/grid/grid-column/inspector.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */




/**
 * Inspector controls
 */
const Inspector = props => {
  const {
    attributes: {
      widthSmall,
      widthLarge,
      widthMedium,
      mobilePosition
    },
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mobile appearance", 'ctx-blocks'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("How should the column behave on small devices?"),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Column span on mobile devices", 'ctx-blocks'),
    max: 3,
    min: 0,
    onChange: event => {
      setAttributes({
        widthSmall: event
      });
    },
    value: widthSmall
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Columns span on tablets and small displays", 'ctx-blocks'),
    max: 12,
    min: 0,
    onChange: event => {
      setAttributes({
        widthMedium: event
      });
    },
    value: widthMedium
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Column span on Desktops", 'ctx-blocks'),
    max: 12,
    min: 0,
    onChange: event => {
      setAttributes({
        widthLarge: event
      });
    },
    value: widthLarge
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Position on mobile devices', 'ctx-blocks'),
    value: mobilePosition,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('In place', 'ctx-blocks'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Start', 'ctx-blocks'),
      value: 'first'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('End', 'ctx-blocks'),
      value: 'last'
    }],
    onChange: event => {
      setAttributes({
        mobilePosition: event
      });
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/grid/grid-row/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/grid/grid-row/edit.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GridRowEdit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/grid/grid-row/inspector.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons.js */ "./src/blocks/grid/grid-row/icons.js");

/**
 * Internal dependencies
 */


/**
 * Wordpress dependencies
 */




const ALLOWED_BLOCKS = ['ctx-blocks/grid-column'];
function GridRowEdit(_ref) {
  let {
    ...props
  } = _ref;
  const {
    attributes: {
      equalizer,
      divider,
      childrenWidthLarge
    }
  } = props;
  const TEMPLATE = [['ctx-blocks/grid-column'], ['ctx-blocks/grid-column']];
  const classes = ['ctx:row__columns', `ctx:row__columns--${childrenWidthLarge}`, equalizer ? `ctx:row--equalize` : false, divider ? `ctx:row--separator` : false].filter(Boolean).join(" ");
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useInnerBlocksProps)({
    className: classes
  }, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    orientation: "horizontal"
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: 'ctx:row'
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:control__label ctx:row__label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Row (columns: ', 'ctx-blocks') + childrenWidthLarge + ')'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:row__icons"
  }, equalizer && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
    className: "ctx:row__icon",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_5__["default"].equalizer,
    size: 19
  }), divider && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
    className: "ctx:row__icon",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_5__["default"].divider,
    size: 19
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps)));
}

/***/ }),

/***/ "./src/blocks/grid/grid-row/icons.js":
/*!*******************************************!*\
  !*** ./src/blocks/grid/grid-row/icons.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


let icons = {};
icons.row = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z"
}));
icons.parallax = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/SVG",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}));
icons.masnory = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/SVG",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
}));
icons.equalizer = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/SVG",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}));
icons.divider = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/SVG",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M3 9h2V7H3v2zm0-4h2V3H3v2zm4 16h2v-2H7v2zm0-8h2v-2H7v2zm-4 0h2v-2H3v2zm0 8h2v-2H3v2zm0-4h2v-2H3v2zM7 5h2V3H7v2zm12 12h2v-2h-2v2zm-8 4h2V3h-2v18zm8 0h2v-2h-2v2zm0-8h2v-2h-2v2zm0-10v2h2V3h-2zm0 6h2V7h-2v2zm-4-4h2V3h-2v2zm0 16h2v-2h-2v2zm0-8h2v-2h-2v2z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/blocks/grid/grid-row/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/grid/grid-row/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/grid/grid-row/edit.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ "./src/blocks/grid/grid-row/icons.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/grid/grid-row/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/grid/grid-row/editor.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);






/**
 * Wordpress dependencies
 */


const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_3__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(description, 'ctx-blocks'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_2__["default"].row,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InnerBlocks.Content, null);
  }
};


/***/ }),

/***/ "./src/blocks/grid/grid-row/inspector.js":
/*!***********************************************!*\
  !*** ./src/blocks/grid/grid-row/inspector.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */




/**
 * Inspector controls
 */
const Inspector = props => {
  const {
    attributes: {
      equalizer,
      divider,
      childrenWidthLarge,
      childrenWidthSmall,
      childrenWidthMedium
    },
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Appearance", 'ctx-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Columns on mobile devices", 'ctx-blocks'),
    max: 3,
    min: 1,
    onChange: value => {
      setAttributes({
        childrenWidthSmall: value
      });
    },
    value: childrenWidthSmall
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Columns on tablets and medium screens", 'ctx-blocks'),
    max: 6,
    min: 1,
    onChange: value => {
      setAttributes({
        childrenWidthMedium: value
      });
    },
    value: childrenWidthMedium
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Columns on desktops", 'ctx-blocks'),
    max: 6,
    min: 1,
    onChange: value => {
      setAttributes({
        childrenWidthLarge: value
      });
    },
    value: childrenWidthLarge
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Make all columns same height", 'ctx-blocks'),
    checked: equalizer,
    onChange: value => {
      setAttributes({
        equalizer: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Separate columns with borders", 'ctx-blocks'),
    checked: divider,
    onChange: value => {
      setAttributes({
        divider: value
      });
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/header/header-content/edit.js":
/*!**************************************************!*\
  !*** ./src/blocks/header/header-content/edit.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Wordpress dependencies
 */

function Edit(_ref) {
  let {
    ...props
  } = _ref;
  const {
    clientId
  } = props;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  const allowedBlocks = ['core/post-title', 'core/pararaph', 'core/heading', 'ctx-blocks/image', 'ctx-blocks/grid-column', 'ctx-blocks/button-group', 'ctx-blocks/button'];
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(blockProps, {
    allowedBlocks,
    templateLock: false,
    renderAppender: false
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, innerBlocksProps, {
    className: "ctx:header-content"
  }));
}

/***/ }),

/***/ "./src/blocks/header/header-content/icon.js":
/*!**************************************************!*\
  !*** ./src/blocks/header/header-content/icon.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"
})));

/***/ }),

/***/ "./src/blocks/header/header-content/index.js":
/*!***************************************************!*\
  !*** ./src/blocks/header/header-content/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/header/header-content/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/header/header-content/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/header/header-content/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/blocks/header/header-content/icon.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);

/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */


const {
  name,
  description,
  title
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_1__,
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(title, "ctx-blocks"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(description, 'ctx-blocks'),
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.Content, null);
  }
};


/***/ }),

/***/ "./src/blocks/image/edit.js":
/*!**********************************!*\
  !*** ./src/blocks/image/edit.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/image/inspector.js");
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar */ "./src/blocks/image/toolbar.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






function Edit(_ref) {
  let {
    ...props
  } = _ref;
  const {
    setAttributes,
    attributes: {
      image,
      alignment,
      width,
      roundCorners,
      round,
      border,
      shadow,
      flip,
      caption
    },
    className
  } = props;
  const imageClasses = [className, flip ? 'ctx:image--flip' : false, border ? 'ctx:image--border' : false, roundCorners && !round ? 'ctx:image--rounded' : false, shadow ? 'ctx:image--shadow' : false, round ? 'ctx:image--circle' : false].filter(Boolean).join(' ');
  const Image = () => {
    if (!image) return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    if (image.subtype == 'svg+xml') return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      width: `${width}%`,
      src: image.url
    }));
    if (!image.sizes) return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: imageClasses,
      src: image.url
    });
    if (image.sizes.large) return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: imageClasses,
      width: `${width}%`,
      src: image.sizes.large.url
    }));
    if (image.sizes.medium) return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ctx:image__warning"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
      icon: "warning"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('The image may be too small', 'ctx-blocks')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: imageClasses,
      width: `${width}%`,
      src: image.sizes.medium.url
    }));
    if (image.sizes.thumbnail) return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ctx:image__warning ctx:image__warning--fatal"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
      icon: "warning"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('The image is too small', 'ctx-blocks')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: imageClasses,
      width: `${width}%`,
      src: image.sizes.thumbnail.url
    }));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: 'ctx:image ctx:image--' + alignment
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    onSelect: media => setAttributes({
      image: media
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Image', 'ctx-blocks'),
    value: image,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "components-placeholder block-editor-media-placeholder is-medium"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "components-placeholder__label"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        class: "block-editor-block-icon"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "m19 5v14h-14v-14h14m0-2h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2z"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "m14.14 11.86l-3 3.87-2.14-2.59-3 3.86h12l-3.86-5.14z"
      }))), "Bild"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "components-placeholder__instructions"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select image from library', 'ctx-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        type: "button",
        className: "components-button is-primary",
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Media library', 'ctx-blocks'))), image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Toolbar, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarItem, {
        onClick: open,
        as: _wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Replace', 'ctx-blocks')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Image, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
        tagName: "div",
        value: caption,
        className: "ctx:image__caption",
        onChange: value => setAttributes({
          caption: value
        }),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Image caption', 'ctx-blocks')
      })));
    }
  }))));
}

/***/ }),

/***/ "./src/blocks/image/icon.js":
/*!**********************************!*\
  !*** ./src/blocks/image/icon.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
})));

/***/ }),

/***/ "./src/blocks/image/index.js":
/*!***********************************!*\
  !*** ./src/blocks/image/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/image/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/blocks/image/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/image/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/image/editor.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */

const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_2__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(description, 'ctx-blocks'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: () => {
    return null;
  }
};


/***/ }),

/***/ "./src/blocks/image/inspector.js":
/*!***************************************!*\
  !*** ./src/blocks/image/inspector.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */




/**
 * Inspector controls
 */
const Inspector = props => {
  const {
    attributes: {
      hasLightbox,
      round,
      border,
      width,
      shadow,
      flip,
      roundCorners,
      url,
      image
    },
    setAttributes
  } = props;
  const isSVG = image && image.subtype == 'svg+xml';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Design', 'ctx-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Width in percent', 'ctx-blocks'),
    value: width,
    onChange: value => setAttributes({
      width: value
    }),
    min: 0,
    max: 100,
    step: 10
  }), isSVG && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ctx:image__inspector-warning"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings not available for SVG images', 'ctx-blocks'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Circular image', 'ctx-blocks'),
    checked: round,
    onChange: event => {
      setAttributes({
        round: event
      });
    },
    disabled: isSVG
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Round corners', 'ctx-blocks'),
    checked: roundCorners,
    onChange: event => {
      setAttributes({
        roundCorners: event
      });
    },
    disabled: round || isSVG
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border', 'ctx-blocks'),
    checked: border,
    onChange: event => {
      setAttributes({
        border: event
      });
    },
    disabled: isSVG
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shadow', 'ctx-blocks'),
    checked: shadow,
    onChange: event => {
      setAttributes({
        shadow: event
      });
    },
    disabled: isSVG
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flip', 'ctx-blocks'),
    checked: flip,
    onChange: event => {
      setAttributes({
        flip: event
      });
    },
    disabled: isSVG
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Behaviour', 'ctx-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Action', 'ctx-blocks'),
    value: hasLightbox ? 'modal' : 'link',
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link', 'ctx-blocks'),
      value: 'link'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lightbox', 'ctx-blocks'),
      value: 'modal'
    }],
    onChange: event => {
      setAttributes({
        hasLightbox: event == "modal"
      });
    }
  }), !hasLightbox && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add a URL or a link", 'ctx-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.URLInput, {
    value: url,
    onChange: (url, post) => setAttributes({
      url,
      text: post && post.title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click here', 'ctx-blocks')
    })
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/image/toolbar.js":
/*!*************************************!*\
  !*** ./src/blocks/image/toolbar.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const CustomToolbar = props => {
  const {
    attributes: {
      alignment
    },
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.AlignmentToolbar, {
    value: alignment,
    onChange: event => setAttributes({
      alignment: event
    })
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (CustomToolbar);

/***/ }),

/***/ "./src/blocks/nav/edit.js":
/*!********************************!*\
  !*** ./src/blocks/nav/edit.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector */ "./src/blocks/nav/inspector.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);


/**
 * Internal dependencies
 */


/**
 * Wordpress dependencies
 */





function Edit(props) {
  const {
    attributes: {
      showIcons,
      showActive,
      parentPage,
      parentCategory,
      dataType,
      limit,
      orderBy,
      order
    }
  } = props;
  const pages = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getEntityRecords
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
    let query = {
      per_page: limit,
      order: order,
      orderby: orderBy
    };
    query.parent = parentPage != 0 ? parentPage : undefined;
    query.categories = parentCategory != 0 ? [parentCategory] : undefined;
    const pages = getEntityRecords('postType', 'page', query);
    return pages ? pages : [];
  }, [parentPage, limit, parentCategory, order, orderBy]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_2__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    allPages: pages
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
    className: "ctx:control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Navigation", "ctx-blocks")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("ul", null, pages != [] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, pages.map((page, index) => {
    const liClass = page.id == wp.data.select("core/editor").getCurrentPostId() ? " active" : "";
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
      className: "nav-item" + liClass,
      key: index
    }, showIcons && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Icon, {
      icon: "arrow-right-alt2"
    }), page.title.raw);
  }), " "))));
}

/***/ }),

/***/ "./src/blocks/nav/icon.js":
/*!********************************!*\
  !*** ./src/blocks/nav/icon.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "black",
  width: "18px",
  height: "18px"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"
})));

/***/ }),

/***/ "./src/blocks/nav/index.js":
/*!*********************************!*\
  !*** ./src/blocks/nav/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/nav/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/blocks/nav/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/nav/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/nav/editor.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */

const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_2__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(description, 'ctx-blocks'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save() {
    return null;
  }
};


/***/ }),

/***/ "./src/blocks/nav/inspector.js":
/*!*************************************!*\
  !*** ./src/blocks/nav/inspector.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__);

/**
 * Wordpress Dependencies
 */








function Inspector(props, allPages) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    showIcons,
    showActive,
    parentPage,
    parentCategory,
    dataType,
    limit,
    orderBy,
    order
  } = attributes;
  let pageListOptions = [{
    value: 0,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a parent page', "ctx-blocks")
  }];
  if (allPages.length > 0) {
    allPages.forEach(post => {
      pageListOptions.push({
        value: post.id,
        label: post.title.rendered
      });
    });
  }
  const categoryList = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
    const {
      getEntityRecords
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__.store);
    const query = {};
    let result = getEntityRecords('taxonomy', 'category', query);
    const categoryListOptions = [{
      value: 0,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a category', "ctx-blocks")
    }];
    if (result == null) {
      result = [];
    }
    if (result.length > 0) {
      result.forEach(category => {
        categoryListOptions.push({
          value: category.id,
          label: category.name
        });
      });
    }
    return categoryListOptions;
  }, [dataType]);
  const pageList = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
    const {
      getEntityRecords
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__.store);
    let pages = getEntityRecords('postType', 'page', {
      per_page: 100
    });
    if (pages == null) {
      pages = [];
    }
    const pageListOptions = [{
      value: 0,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a parent page', "ctx-blocks")
    }];
    if (pages.length > 0) {
      pages.forEach(post => {
        pageListOptions.push({
          value: post.id,
          label: post.title.rendered
        });
      });
    }
    return pageListOptions;
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Data', 'ctx-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Parent page', "ctx-blocks"),
    value: dataType,
    onChange: value => setAttributes({
      dataType: value
    }),
    options: [{
      value: "pages",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pages", 'ctx-blocks')
    }, {
      value: "posts",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Posts", 'ctx-blocks')
    }, {
      value: "categories",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Categories", 'ctx-blocks')
    }]
  }), dataType === "pages" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Parent page', "ctx-blocks"),
    value: parentPage,
    onChange: value => setAttributes({
      parentPage: parseInt(value)
    }),
    options: pageList
  }), dataType === "posts" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Category (including it\'s children)', "ctx-blocks"),
    value: parentCategory,
    onChange: value => setAttributes({
      parentCategory: parseInt(value)
    }),
    options: categoryList
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Order by', "ctx-blocks"),
    value: orderBy,
    onChange: value => setAttributes({
      orderBy: value
    }),
    options: [{
      value: "date",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Date", 'ctx-blocks')
    }, {
      value: "title",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title", 'ctx-blocks')
    }, {
      value: "id",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("ID", 'ctx-blocks')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Order', "ctx-blocks"),
    value: order,
    onChange: value => setAttributes({
      order: value
    }),
    options: [{
      value: "desc",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Descending", 'ctx-blocks')
    }, {
      value: "asc",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ascending", 'ctx-blocks')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Limit", 'ctx-blocks'),
    max: 50,
    min: 1,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("How meny items should be displayed?", 'ctx-blocks'),
    onChange: value => {
      setAttributes({
        limit: value
      });
    },
    value: limit
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Appearance', 'ctx-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Icons", 'ctx-blocks'),
    checked: showIcons,
    onChange: value => setAttributes({
      showIcons: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Highlight currently loaded menu item", 'ctx-blocks'),
    checked: showActive,
    onChange: value => setAttributes({
      showActive: value
    })
  }))));
}
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/posts/edit.js":
/*!**********************************!*\
  !*** ./src/blocks/posts/edit.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons.js */ "./src/blocks/posts/icons.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);

/**
 * Internal dependencies
 */






/**
 * Wordpress dependencies
 */



function Edit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    limit,
    columnsSmall,
    columnsMedium,
    columnsLarge,
    showImages,
    dropShadow,
    imageSize,
    style,
    hover,
    showTag,
    showCategory,
    textAlignment,
    showDate,
    roundImages,
    excerptLength,
    category,
    order,
    orderBy
  } = attributes;
  const {
    categoryList
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.useSelect)(select => {
    const {
      getEntityRecords
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store);
    const query = {
      hide_empty: true
    };
    return {
      categoryList: getEntityRecords('taxonomy', 'category', query)
    };
  }, []);
  const postList = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.useSelect)(select => {
    const {
      getEntityRecords,
      getMedia
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store);
    const categories = category == "" ? [] : [category];
    const query = {
      categories: categories,
      per_page: limit,
      order,
      orderby: orderBy
    };
    const posts = getEntityRecords('postType', 'post', query);
    if (!Array.isArray(posts)) {
      return posts;
    }
    return posts.map(post => {
      if (!post.featured_media) return post;
      const image = getMedia(post.featured_media);
      let url = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.get)(image, ['media_details', 'sizes', 'medium', 'source_url'], null);
      if (!url) {
        url = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.get)(image, 'source_url', null);
      }
      const featuredImageInfo = {
        url,
        // eslint-disable-next-line camelcase
        alt: image === null || image === void 0 ? void 0 : image.alt_text
      };
      return {
        ...post,
        featuredImageInfo
      };
    });
  }, [category, limit, order, orderBy]);
  const getCategoriesList = () => {
    if (!(categoryList !== null && categoryList !== void 0 && categoryList.length)) {
      return [];
    }
    return categoryList;
  };
  const getPosts = () => {
    if (!(postList !== null && postList !== void 0 && postList.length)) {
      return [];
    }
    return postList;
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: ["columns-" + columnsLarge, showImages ? "hasImage" : false, dropShadow ? "shadow" : false, "style-" + style, "text-" + textAlignment, roundImages ? "round-images" : false].filter(Boolean).join(" ")
  });
  const inspectorControls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Data', 'ctx-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.QueryControls, {
    order: order,
    orderBy: orderBy,
    categoriesList: getCategoriesList(),
    selectedCategoryId: category,
    numberOfItems: limit,
    onOrderChange: value => setAttributes({
      order: value
    }),
    onOrderByChange: value => setAttributes({
      orderBy: value
    }),
    onCategoryChange: value => setAttributes({
      category: value
    }),
    onNumberOfItemsChange: value => setAttributes({
      limit: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Appearance', 'ctx-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Columns on small screens", 'ctx-blocks'),
    max: 6,
    min: 1,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("ex. Smartphones", 'ctx-blocks'),
    onChange: value => {
      setAttributes({
        columnsSmall: value
      });
    },
    value: columnsSmall
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Columns on medium screens", 'ctx-blocks'),
    max: 6,
    min: 1,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Tablets and smaller screens", 'ctx-blocks'),
    onChange: value => {
      setAttributes({
        columnsMedium: value
      });
    },
    value: columnsMedium
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Columns on large screens", 'ctx-blocks'),
    max: 6,
    min: 1,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Desktop screens", 'ctx-blocks'),
    onChange: value => {
      setAttributes({
        columnsLarge: value
      });
    },
    value: columnsLarge
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Posts', 'ctx-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Drop shadow", 'ctx-blocks'),
    checked: dropShadow,
    onChange: value => setAttributes({
      dropShadow: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Hover effect", 'ctx-blocks'),
    checked: hover,
    onChange: value => setAttributes({
      hover: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Show post images", 'ctx-blocks'),
    checked: showImages,
    onChange: value => setAttributes({
      showImages: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "components-base-control__label",
    htmlFor: "inspector-range-control-4"
  }, "Stil"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "styleSelector"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      style: "list"
    }),
    className: style == "list" ? "active" : ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    size: "64",
    className: "icon",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_4__["default"].list
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Liste")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      style: "cards"
    }),
    className: style == "cards" ? "active" : ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    size: "64",
    className: "icon",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_4__["default"].cards
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Karten")))), showImages && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Round images", 'ctx-blocks'),
    checked: roundImages,
    onChange: value => setAttributes({
      roundImages: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Show date", 'ctx-blocks'),
    checked: showDate,
    onChange: value => setAttributes({
      showDate: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Show Tag", 'ctx-blocks'),
    checked: showTag,
    onChange: value => setAttributes({
      showTag: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Show Category", 'ctx-blocks'),
    checked: showCategory,
    onChange: value => setAttributes({
      showCategory: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Image size", 'ctx-blocks'),
    max: 100,
    min: 0,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Percent of width", 'ctx-blocks'),
    onChange: value => {
      setAttributes({
        imageSize: value
      });
    },
    value: imageSize
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Length of preview text", 'ctx-blocks'),
    max: 200,
    min: 0,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Number of words", 'ctx-blocks'),
    onChange: value => {
      setAttributes({
        excerptLength: value
      });
    },
    value: excerptLength
  })));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, inspectorControls, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.AlignmentToolbar, {
    value: textAlignment,
    onChange: event => setAttributes({
      textAlignment: event
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, getPosts().map((post, index) => {
    var _post$featuredImageIn;
    // unfortunatedly the excerpt sometimes comes only prerendered, which diusturbs trimming to excerpt length
    let excerpt = post.excerpt.raw == "" ? post.excerpt.rendered : post.excerpt.raw;
    if (post.excerpt.raw == "") {
      const excerptElement = document.createElement('div');
      excerptElement.innerHTML = excerpt;
      excerpt = excerptElement.textContent || excerptElement.innerText || '';
    }
    const postExcerpt = excerptLength < excerpt.trim().split(' ').length ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, excerpt.trim().split(' ', excerptLength).join(' '), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('…'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: post.link,
      rel: "noopener noreferrer"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Read more'))) : excerpt;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "post-card",
      key: index
    }, showImages && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: post === null || post === void 0 ? void 0 : (_post$featuredImageIn = post.featuredImageInfo) === null || _post$featuredImageIn === void 0 ? void 0 : _post$featuredImageIn.url
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, post.title.rendered), showDate && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_3__.format)("j. F Y", post.date)), style == "cards" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, postExcerpt)));
  })));
}

/***/ }),

/***/ "./src/blocks/posts/icons.js":
/*!***********************************!*\
  !*** ./src/blocks/posts/icons.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


let icons = [];
icons.posts = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  enableBackground: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z"
})))));
icons.list = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fillRule: "evenodd",
  strokeLinejoin: "round",
  strokeMiterlimit: "2",
  clipRule: "evenodd",
  viewBox: "0 0 32 32"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M30 24v2H10v-2h20zm0-10v2H10v-2h20zm0-10v2H10V4h20z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "4.773",
  cy: "7",
  r: "3"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "4.773",
  cy: "7",
  r: "3",
  transform: "translate(0 10)"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "4.773",
  cy: "7",
  r: "3",
  transform: "translate(0 20)"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#919191",
  d: "M10 7H26.472V10H10z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#919191",
  d: "M10 7H26.472V10H10z",
  transform: "translate(0 10)"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#919191",
  d: "M10 7H26.472V10H10z",
  transform: "translate(0 20)"
}));
icons.cards = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fillRule: "evenodd",
  strokeLinejoin: "round",
  strokeMiterlimit: "2",
  clipRule: "evenodd",
  viewBox: "0 0 32 32"
}, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#E5E5E5",
  d: "M2.274 1.794H10.702000000000002V16.772H2.274z",
  transform: "matrix(1.52569 0 0 1.59368 -1.304 1.206)"
}), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10 24H30V26H10z",
  transform: "matrix(.4577 0 0 .96245 -.566 -6.375)"
}), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "4.773",
  cy: "7",
  r: "3",
  transform: "translate(1.306 -.773) scale(1.52569)"
}), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#919191",
  d: "M10 7H26.472V10H10z",
  transform: "matrix(.55574 0 0 1.52569 -1.546 10.482)"
}), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#E5E5E5",
  d: "M2.274 1.794H10.702000000000002V16.772H2.274z",
  transform: "matrix(1.52569 0 0 1.59368 13.507 1.206)"
}), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10 24H30V26H10z",
  transform: "matrix(.4577 0 0 .96245 14.245 -6.375)"
}), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "4.773",
  cy: "7",
  r: "3",
  transform: "translate(16.117 -.773) scale(1.52569)"
}), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#919191",
  d: "M10 7H26.472V10H10z",
  transform: "matrix(.55574 0 0 1.52569 13.265 10.482)"
}), " ");
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/blocks/posts/index.js":
/*!***********************************!*\
  !*** ./src/blocks/posts/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/posts/edit.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/blocks/posts/icons.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/posts/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/posts/editor.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */

const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_2__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(description, 'ctx-blocks'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__["default"].posts,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save() {
    return null;
  }
};


/***/ }),

/***/ "./src/blocks/progress/edit.js":
/*!*************************************!*\
  !*** ./src/blocks/progress/edit.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/progress/inspector.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




function Edit(_ref) {
  let {
    ...props
  } = _ref;
  const {
    attributes: {
      maxValue,
      currentValue,
      showValues,
      unit,
      prefixedUnit,
      thousandSeparators,
      decimalPlaces,
      currentDescription,
      maxDescription
    },
    colorBar,
    colorBackground,
    setAttributes
  } = props;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: "ctx-progress"
  });
  const replaceDecimalDot = value => {
    return decimalPlaces ? value.replace(/.([^.]*)$/, '\,$1') : value;
  };
  const percent = () => {
    return parseInt(currentValue) > parseInt(maxValue) ? 100 : currentValue * 100 / maxValue;
  };
  const fullPercent = Math.round(currentValue * 100 / maxValue);
  const textColor = props.colorUtils.getMostReadableColor(colorBar.color);
  let currentValueString = parseInt(currentValue).toFixed(decimalPlaces);
  let maxValueString = parseInt(maxValue).toFixed(decimalPlaces);
  if (thousandSeparators) {
    currentValueString = String(currentValueString).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1.');
    maxValueString = String(maxValueString).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1.');
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "description"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      color: colorBar.color
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "cur-value-description",
    value: currentDescription,
    onChange: value => setAttributes({
      currentDescription: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Current value description...", 'ctx-blocks')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cur-value"
  }, unit != "" && prefixedUnit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, unit), " ", decimalPlaces > 0 ? replaceDecimalDot(currentValueString) : currentValueString, " ", unit != "" && !prefixedUnit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, unit))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      color: colorBackground.color,
      textAlign: "right"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "max-value-description",
    value: maxDescription,
    onChange: value => setAttributes({
      maxDescription: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Max value description...", 'ctx-blocks')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "max-value"
  }, unit != "" && prefixedUnit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, unit), " ", decimalPlaces > 0 ? replaceDecimalDot(maxValueString) : maxValueString, " ", unit != "" && !prefixedUnit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, unit)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "outer",
    style: {
      backgroundColor: colorBackground.color
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: `${percent()}%`,
      backgroundColor: colorBar.color
    },
    className: "inner"
  }, showValues && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      color: textColor
    },
    className: "value"
  }, fullPercent, "%"))));
}

/***/ }),

/***/ "./src/blocks/progress/icon.js":
/*!*************************************!*\
  !*** ./src/blocks/progress/icon.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  viewBox: "0 0 24 24",
  height: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M 17,7 H 7 c -2.76,0 -5,2.24 -5,5 0,2.76 2.24,5 5,5 h 10 c 2.76,0 5,-2.24 5,-5 0,-2.76 -2.24,-5 -5,-5 z m -4,8 H 7 C 5.34,15 4,13.66 4,12 4,10.34 5.34,9 7,9 h 6 c 1.66,0 3,1.34 3,3 0,1.66 -1.34,3 -3,3 z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "none",
  d: "M0 0h24v24H0z"
})));

/***/ }),

/***/ "./src/blocks/progress/index.js":
/*!**************************************!*\
  !*** ./src/blocks/progress/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/progress/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/blocks/progress/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/progress/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/progress/editor.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */


const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_2__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(description, 'ctx-blocks'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.withColors)({
    colorBar: 'colorBar',
    colorBackground: 'colorBackground'
  })(_edit__WEBPACK_IMPORTED_MODULE_0__["default"]),
  save: () => {
    return null;
  }
};


/***/ }),

/***/ "./src/blocks/progress/inspector.js":
/*!******************************************!*\
  !*** ./src/blocks/progress/inspector.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */




/**
 * Inspector controls
 */
const Inspector = props => {
  const {
    attributes: {
      title,
      maxValue,
      currentValue,
      showValues,
      unit,
      prefixedUnit,
      thousandSeparators,
      decimalPlaces
    },
    setAttributes,
    setColorBar,
    colorBar,
    setColorBackground,
    colorBackground
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Colors", "ctx-blocks"),
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color for low values', 'ctx-blocks'),
      onChange: setColorBar,
      value: colorBar.color,
      disableCustomColors: true
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color for medium values', 'ctx-blocks'),
      onChange: setColorBackground,
      value: colorBackground.color,
      disableCustomColors: true
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Values", "ctx-blocks"),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Max value", 'ctx-blocks'),
    value: maxValue,
    onChange: event => setAttributes({
      maxValue: event
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Current value", 'ctx-blocks'),
    value: currentValue,
    onChange: event => setAttributes({
      currentValue: event
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Labels", "ctx-blocks"),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Values", "ctx-blocks"),
    checked: showValues,
    onChange: event => setAttributes({
      showValues: event
    })
  })), showValues && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Separate Thousands", "ctx-blocks"),
    checked: thousandSeparators,
    onChange: event => setAttributes({
      thousandSeparators: event
    }),
    hidden: !showValues
  })), showValues && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Decimal places", "ctx-blocks"),
    value: decimalPlaces,
    onChange: event => {
      setAttributes({
        decimalPlaces: event
      });
    },
    min: 0,
    max: 4,
    hidden: !showValues
  })), showValues && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Unit", 'ctx-blocks'),
    value: unit,
    onChange: event => setAttributes({
      unit: event
    }),
    hidden: !showValues
  })), (showValues || unit != "") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show unit before Value", "ctx-blocks"),
    checked: prefixedUnit,
    onChange: event => setAttributes({
      prefixedUnit: event
    }),
    hidden: unit == "" || !showValues
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/section/edit.js":
/*!************************************!*\
  !*** ./src/blocks/section/edit.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var colord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! colord */ "./node_modules/colord/index.mjs");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector */ "./src/blocks/section/inspector.js");
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbar */ "./src/blocks/section/toolbar.js");






function Edit(_ref) {
  var _backgroundColor$colo;
  let {
    ...props
  } = _ref;
  const template = [['core/paragraph']];
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps)({
    className: 'ctx:section__container'
  }, {
    template,
    renderAppender: false
  });
  const {
    attributes: {
      imagePosition,
      parallaxEffect,
      paddingTop,
      paddingBottom,
      textAlignment,
      backgroundImage,
      fromDate,
      toDate,
      customBackgroundColor
    },
    className,
    backgroundColor
  } = props;
  const isHidden = () => {
    if (!fromDate && !toDate) return false;
    if (fromDate && !toDate && new Date(fromDate) > new Date()) return true;
    if (!fromDate && toDate && new Date(toDate) < new Date()) return true;
    if (fromDate && toDate && (new Date(fromDate) > new Date() || new Date(toDate) < new Date())) return true;
  };
  const isVisible = () => {
    if (!fromDate && !toDate) return false;
    if (fromDate && !toDate && new Date(fromDate) <= new Date()) return true;
    if (!fromDate && toDate && new Date(toDate) >= new Date()) return true;
    if (fromDate && toDate && new Date(fromDate) <= new Date() && new Date(toDate) >= new Date()) return true;
  };
  console.log(backgroundColor);
  const textColor = () => {
    if (backgroundColor.color == '' && customBackgroundColor == '') return '#000000';
    return (0,colord__WEBPACK_IMPORTED_MODULE_5__.colord)(backgroundColor.color).isLight() ? '#000000' : '#ffffff';
  };
  const style = {
    background: (_backgroundColor$colo = backgroundColor.color) !== null && _backgroundColor$colo !== void 0 ? _backgroundColor$colo : customBackgroundColor,
    backgroundSize: 'cover',
    backgroundPosition: imagePosition,
    backgroundImage: backgroundImage ? 'url(' + backgroundImage.sizes.large.url + ')' : 'none',
    color: textColor(),
    paddingTop: `${paddingTop}0px`,
    paddingBottom: `${paddingBottom}0px`
  };
  const classes = ['ctx-section', 'alignfull', parallaxEffect ? 'parallax' : false, className || false, `ctx-text-align-${textAlignment}`].filter(Boolean).join(' ');
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: classes,
    style: style
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_3__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, !isHidden() && !isVisible() && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:control__label section__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Section', 'ctx-blocks')), isHidden() && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:control__label section__label ctx:control__label--error"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Section', 'ctx-blocks') + ' (' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hidden', 'ctx-blocks') + ')'), isVisible() && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:control__label section__label ctx:control__label--success"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Section', 'ctx-blocks') + ' (' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Visible', 'ctx-blocks') + ')'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps)));
}

/***/ }),

/***/ "./src/blocks/section/icon.js":
/*!************************************!*\
  !*** ./src/blocks/section/icon.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
})));

/***/ }),

/***/ "./src/blocks/section/index.js":
/*!*************************************!*\
  !*** ./src/blocks/section/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/section/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/section/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/section/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/blocks/section/icon.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);

/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */


const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_1__,
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(description, 'ctx-blocks'),
  edit: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.withColors)({
    backgroundColor: 'backgroundColor'
  })(_edit__WEBPACK_IMPORTED_MODULE_2__["default"]),
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.Content, null);
  }
};


/***/ }),

/***/ "./src/blocks/section/inspector.js":
/*!*****************************************!*\
  !*** ./src/blocks/section/inspector.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */




/**
 * Inspector controls
 */
const Inspector = props => {
  const {
    attributes: {
      backgroundImage,
      imagePosition,
      paddingTop,
      paddingBottom,
      parallaxEffect,
      fromDate,
      toDate
    },
    setAttributes,
    backgroundColor,
    setBackgroundColor
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
    colorSettings: [{
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Colors', 'ctx-blocks'),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Color', 'ctx-blocks'),
      onChange: setBackgroundColor,
      value: backgroundColor.color,
      disableCustomColors: false
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Image', 'ctx-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: media => setAttributes({
      backgroundImage: media
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image', 'ctx-blocks'),
    value: backgroundImage,
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "editor-post-featured-image ctx-image-select"
      }, !backgroundImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        type: "button",
        className: "components-button editor-post-featured-image__toggle",
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Select image', 'ctx-blocks')), backgroundImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: "",
        src: backgroundImage.sizes.medium.url,
        onClick: open,
        alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No image loaded', 'ctx-blocks')
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        type: "button",
        className: "components-button is-button is-default is-large",
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace image', 'ctx-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        type: "button",
        className: "components-button is-link is-destructive",
        onClick: () => setAttributes({
          backgroundImage: null
        })
      }, ' ', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Remove image', 'ctx-blocks'))));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-image-position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image orientation', 'ctx-blocks'),
    selected: imagePosition,
    disabled: !backgroundImage,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top left', 'ctx-blocks'),
      value: 'top left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top center', 'ctx-blocks'),
      value: 'top center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top right', 'ctx-blocks'),
      value: 'top right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Middel left', 'ctx-blocks'),
      value: 'center left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fully centered', 'ctx-blocks'),
      value: 'center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Middle right', 'ctx-blocks'),
      value: 'center right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom left', 'ctx-blocks'),
      value: 'bottom left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom center', 'ctx-blocks'),
      value: 'bottom center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom right', 'ctx-blocks'),
      value: 'bottom right'
    }],
    onChange: position => {
      setAttributes({
        imagePosition: position
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Parallax-Effect', 'ctx-blocks'),
    disabled: !backgroundImage,
    onChange: event => {
      setAttributes({
        parallaxEffect: event
      });
    },
    checked: parallaxEffect
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Padding', 'ctx-blocks'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Padding Top', 'ctx-blocks'),
    value: paddingTop,
    onChange: event => {
      setAttributes({
        paddingTop: event
      });
    },
    min: 0,
    max: 11
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Padding Bottom', 'ctx-blocks'),
    value: paddingBottom,
    onChange: event => {
      setAttributes({
        paddingBottom: event
      });
    },
    min: 0,
    max: 11
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Date', 'ctx-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show only...', 'ctx-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('From', 'ctx-blocks'),
    value: fromDate,
    onChange: newDate => setAttributes({
      fromDate: newDate
    }),
    is12Hour: false,
    type: "date"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('To', 'ctx-blocks'),
    value: toDate,
    onChange: newDate => setAttributes({
      toDate: newDate
    }),
    is12Hour: false,
    type: "date"
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/section/toolbar.js":
/*!***************************************!*\
  !*** ./src/blocks/section/toolbar.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const Toolbar = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    textAlignment
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.AlignmentToolbar, {
    value: textAlignment,
    onChange: event => setAttributes({
      textAlignment: event
    })
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "./src/common/utils/relurl.js":
/*!************************************!*\
  !*** ./src/common/utils/relurl.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function relativeUrl(url) {
  let virtualLink = document.createElement('a');
  virtualLink.href = url;
  return virtualLink.pathname;
}
/* harmony default export */ __webpack_exports__["default"] = (relativeUrl);

/***/ }),

/***/ "./src/mods/additionalFonts.js":
/*!*************************************!*\
  !*** ./src/mods/additionalFonts.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment
} = wp.element;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl
} = wp.components;
const {
  addFilter
} = wp.hooks;
const {
  __
} = wp.i18n;
const allowedBlocks = ['core/heading', 'core/paragraph'];
const fontOptions = [{
  label: __('Standard', 'ctx-blocks'),
  value: ''
}, {
  label: __('Monospace', 'ctx-blocks'),
  value: 'mono'
}, {
  label: __('Fancy', 'ctx-blocks'),
  value: 'script'
}, {
  label: __('Serif', 'ctx-blocks'),
  value: 'serif'
}];
const addFontControlAttribute = (props, name) => {
  if (!allowedBlocks.includes(name)) {
    return props;
  }
  const attributes = {
    ...props.attributes,
    font: {
      type: 'string',
      default: ''
    }
  };
  return {
    ...props,
    attributes
  };
};
addFilter('blocks.registerBlockType', 'ctx-blocks/core-font', addFontControlAttribute);
const withFontControl = createHigherOrderComponent(BlockEdit => {
  return props => {
    if (!allowedBlocks.includes(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
    }
    const {
      attributes,
      setAttributes
    } = props;
    const {
      font
    } = attributes;
    if (font) {
      attributes.className = `ctx-font-${font}`;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Font settings', 'ctx-base'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __('Select font', 'ctx-base'),
      value: font,
      options: fontOptions,
      onChange: value => {
        setAttributes({
          font: value
        });
      }
    }))));
  };
}, 'withFontControl');
addFilter('editor.BlockEdit', 'ctx-blocks/core-font', withFontControl);
const addFontClass = (extraProps, blockType, attributes) => {
  const {
    font
  } = attributes;
  if (!allowedBlocks.includes(blockType.name)) {
    return extraProps;
  }
  extraProps.className = [extraProps.className || false, font || false].filter(Boolean).join(' ');
  return extraProps;
};
addFilter('blocks.getSaveContent.extraProps', 'ctx-blocks/core-font', addFontClass);

/***/ }),

/***/ "./src/mods/featuredImageProps.js":
/*!****************************************!*\
  !*** ./src/mods/featuredImageProps.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  createHigherOrderComponent
} = wp.compose;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl
} = wp.components;
const {
  addFilter
} = wp.hooks;
const {
  __
} = wp.i18n;
const addFeaturedImageAttribute = (props, name) => {
  if (name !== 'core/post-featured-image') {
    return props;
  }
  const attributes = {
    ...props.attributes,
    aspectRatio: {
      type: 'string',
      default: '4/4'
    },
    mobileOrientation: {
      type: 'string',
      default: 'center'
    }
  };
  return {
    ...props,
    attributes
  };
};
addFilter('blocks.registerBlockType', 'ctx-blocks/featured-image', addFeaturedImageAttribute);
const withFeaturedImageControl = createHigherOrderComponent(BlockEdit => {
  return props => {
    if (props.name !== 'core/post-featured-image') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
    }
    console.log(BlockEdit);
    const {
      attributes,
      setAttributes
    } = props;
    const {
      aspectRatio,
      mobileOrientation
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Mobile Options', 'ctx-blocks'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __('Image Orientation on mobile devices', 'ctx-blocks'),
      options: [{
        label: 'Left',
        value: 'left'
      }, {
        label: 'Center',
        value: 'center'
      }, {
        label: 'Right',
        value: 'right'
      }],
      onChange: value => {
        setAttributes({
          mobileOrientation: value
        });
      },
      value: mobileOrientation
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __('Image size on mobile devices', 'ctx-blocks'),
      options: [{
        label: '16/9',
        value: '16/9'
      }, {
        label: '4/3',
        value: '4/3'
      }, {
        label: '1/1',
        value: '1/1'
      }, {
        label: '3/4',
        value: '3/4'
      }, {
        label: 'Original',
        value: 'original'
      }],
      onChange: value => {
        setAttributes({
          aspectRatio: value
        });
      },
      value: aspectRatio
    }))));
  };
}, 'withFeaturedImageControl');
addFilter('editor.BlockEdit', 'ctx-blocks/featured-image', withFeaturedImageControl);

/***/ }),

/***/ "./src/mods/postTitleProps.js":
/*!************************************!*\
  !*** ./src/mods/postTitleProps.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  createHigherOrderComponent
} = wp.compose;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  TextControl,
  RadioControl
} = wp.components;
const {
  addFilter
} = wp.hooks;
const {
  __
} = wp.i18n;
const addPostTitleAttribute = (props, name) => {
  if (name !== 'core/post-title') {
    return props;
  }
  const attributes = {
    ...props.attributes,
    linkTitle: {
      type: 'string',
      default: ''
    },
    linkIcon: {
      type: 'string',
      default: ''
    },
    linkIconOrientation: {
      type: 'string',
      default: 'right'
    }
  };
  return {
    ...props,
    attributes
  };
};
addFilter('blocks.registerBlockType', 'ctx-blocks/title', addPostTitleAttribute);
const withPostTitleControl = createHigherOrderComponent(BlockEdit => {
  return props => {
    if (props.name !== 'core/post-title') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
    }
    console.log(BlockEdit);
    const {
      attributes,
      setAttributes
    } = props;
    const {
      linkTitle,
      linkIcon,
      linkIconOrientation
    } = attributes;
    console.log(BlockEdit.InspectorControls);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Link Options', 'ctx-blocks'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Link Text', 'ctx-blocks'),
      onChange: value => {
        setAttributes({
          linkTitle: value
        });
      },
      value: linkTitle
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Icon', 'ctx-blocks'),
      onChange: value => {
        setAttributes({
          linkIcon: value
        });
      },
      value: linkIcon
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioControl, {
      label: "Icon Position",
      help: "Prepend or append the icon",
      selected: linkIconOrientation,
      options: [{
        label: __('Left', 'ctx-blocks'),
        value: 'left'
      }, {
        label: __('Right', 'ctx-blocks'),
        value: 'right'
      }],
      onChange: value => setAttributes({
        linkIconOrientation: value
      })
    }))));
  };
}, 'withPostTitleControl');
addFilter('editor.BlockEdit', 'ctx-blocks/title', withPostTitleControl);

/***/ }),

/***/ "./src/mods/spacerAutoOption.js":
/*!**************************************!*\
  !*** ./src/mods/spacerAutoOption.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment
} = wp.element;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  ToggleControl
} = wp.components;
const {
  addFilter
} = wp.hooks;
const {
  __
} = wp.i18n;
const addAutoMarginAttribute = (props, name) => {
  if (name != 'core/spacer') {
    return props;
  }
  const attributes = {
    ...props.attributes,
    autoMargin: {
      type: 'boolean',
      default: false
    }
  };
  return {
    ...props,
    attributes
  };
};
addFilter('blocks.registerBlockType', 'ctx-blocks/core-mtauto', addAutoMarginAttribute);
const withAutoMarginControl = createHigherOrderComponent(BlockEdit => {
  return props => {
    if (props.name != 'core/spacer') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
    }
    const {
      attributes,
      setAttributes
    } = props;
    const {
      autoMargin
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Auto Height', 'ctx-blocks'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Use as auto height control in a card', 'ctx-blocks'),
      checked: autoMargin,
      onChange: value => {
        setAttributes({
          autoMargin: value
        });
      }
    }))));
  };
}, 'withAutoMarginControl');
addFilter('editor.BlockEdit', 'ctx-blocks/core-mtauto', withAutoMarginControl);
const addAutoMarginClass = (extraProps, blockType, attributes) => {
  const {
    autoMargin
  } = attributes;
  if (blockType.name != 'core/spacer') {
    return extraProps;
  }
  extraProps.className = [autoMargin ? "mt-auto" : false, extraProps.className || false].filter(Boolean).join(" ");
  return extraProps;
};
addFilter('blocks.getSaveContent.extraProps', 'ctx-blocks/core-mtauto', addAutoMarginClass);

/***/ }),

/***/ "./src/blocks/alert/editor.scss":
/*!**************************************!*\
  !*** ./src/blocks/alert/editor.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/buttons/button-group/editor.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/buttons/button-group/editor.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/buttons/button-spacer/editor.scss":
/*!******************************************************!*\
  !*** ./src/blocks/buttons/button-spacer/editor.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/buttons/button/editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/buttons/button/editor.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/card/editor.scss":
/*!*************************************!*\
  !*** ./src/blocks/card/editor.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/conditional/editor.scss":
/*!********************************************!*\
  !*** ./src/blocks/conditional/editor.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/description/description-item/editor.scss":
/*!*************************************************************!*\
  !*** ./src/blocks/description/description-item/editor.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/description/description-list/editor.scss":
/*!*************************************************************!*\
  !*** ./src/blocks/description/description-list/editor.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/footer/editor.scss":
/*!***************************************!*\
  !*** ./src/blocks/footer/editor.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/grid/grid-column/editor.scss":
/*!*************************************************!*\
  !*** ./src/blocks/grid/grid-column/editor.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/grid/grid-row/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/grid/grid-row/editor.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/header/header-content/editor.scss":
/*!******************************************************!*\
  !*** ./src/blocks/header/header-content/editor.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/header/header/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/header/header/editor.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/image/editor.scss":
/*!**************************************!*\
  !*** ./src/blocks/image/editor.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/nav/editor.scss":
/*!************************************!*\
  !*** ./src/blocks/nav/editor.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/posts/editor.scss":
/*!**************************************!*\
  !*** ./src/blocks/posts/editor.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/progress/editor.scss":
/*!*****************************************!*\
  !*** ./src/blocks/progress/editor.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/section/editor.scss":
/*!****************************************!*\
  !*** ./src/blocks/section/editor.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/topbar/editor.scss":
/*!***************************************!*\
  !*** ./src/blocks/topbar/editor.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common/styles/editor.scss":
/*!***************************************!*\
  !*** ./src/common/styles/editor.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common/styles/style.scss":
/*!**************************************!*\
  !*** ./src/common/styles/style.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "./src/blocks/alert/edit.tsx":
/*!***********************************!*\
  !*** ./src/blocks/alert/edit.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AlertEdit; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/alert/inspector.tsx");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

/**
 * Internal dependencies
 */

/**
 * Wordpress dependencies
 */


function AlertEdit(_a) {
    var props = __rest(_a, []);
    const { attributes: { alertText, title, isDismissable }, setAttributes, className, alertColor } = props;
    const textColor = props.colorUtils.getMostReadableColor(alertColor.color);
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
        className: `${className} ctx-blocks-alert`,
        style: { background: alertColor.color, color: textColor }
    });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, props)), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({}, blockProps, { children: [isDismissable &&
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", Object.assign({ className: "ctx-close" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "\u00D7" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, { tagName: "h3", label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Title", 'ctx-blocks'), value: title, onChange: (value) => setAttributes({ title: value }), placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Alert Title", 'ctx-blocks') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, { tagName: "p", value: alertText, onChange: (value) => setAttributes({ alertText: value }), placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Type message here...", 'ctx-blocks') })] }))] }));
}


/***/ }),

/***/ "./src/blocks/alert/icon.tsx":
/*!***********************************!*\
  !*** ./src/blocks/alert/icon.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, Object.assign({ xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, { d: "M0 0h24v24H0z", fill: "none" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, { d: "M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" })] })));


/***/ }),

/***/ "./src/blocks/alert/index.tsx":
/*!************************************!*\
  !*** ./src/blocks/alert/index.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/alert/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/alert/edit.tsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/alert/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/blocks/alert/icon.tsx");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Internal dependencies
 */




/**
 * Wordpress dependencies
 */


const { name, title, description } = _block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = Object.assign(Object.assign({}, _block_json__WEBPACK_IMPORTED_MODULE_0__), { title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(title, 'ctx-blocks'), description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(description, 'ctx-blocks'), icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"], edit: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.withColors)({ alertColor: 'alertColor' })(_edit__WEBPACK_IMPORTED_MODULE_1__["default"]), save: () => { return null; } });



/***/ }),

/***/ "./src/blocks/alert/inspector.tsx":
/*!****************************************!*\
  !*** ./src/blocks/alert/inspector.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

/**
 * Wordpress Dependencies
 */



const Inspector = (_a) => {
    var props = __rest(_a, []);
    const { attributes: { isDismissable }, setAttributes, alertColor, setAlertColor, } = props;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, Object.assign({ title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Behaviour', 'ctx-blocks'), initialOpen: true }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, { label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("User can dismiss the alert", 'ctx-blocks'), checked: isDismissable, onChange: (value) => setAttributes({ isDismissable: value }) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, { title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Color", 'ctx-blocks'), initialOpen: true, colorSettings: [
                    {
                        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Background color of the alert", 'ctx-blocks'),
                        onChange: setAlertColor,
                        value: alertColor.color,
                        disableCustomColors: true,
                    },
                ] })] }));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);


/***/ }),

/***/ "./src/blocks/footer/edit.tsx":
/*!************************************!*\
  !*** ./src/blocks/footer/edit.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function Edit(props) {
    const { className } = props;
    const template = [
        [
            'ctx-blocks/section',
            {
                className: 'footer',
                lock: { move: false, remove: false },
                element: 'footer',
            },
            [['core/paragraph']],
        ],
        [
            'ctx-blocks/section',
            {
                className: 'bottom',
                paddingTop: 0,
                paddingBottom: 0,
                lock: {
                    move: false,
                    remove: false,
                },
            },
            [['core/paragraph']],
        ],
    ];
    const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps)({ className: 'ctx:section__container' }, { template, renderAppender: false });
    const classes = ['ctx-footer', 'alignfull', className || false]
        .filter(Boolean)
        .join(' ');
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({ className: classes });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({}, blockProps, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({}, innerBlocksProps)) })) }));
}


/***/ }),

/***/ "./src/blocks/header/header/edit.tsx":
/*!*******************************************!*\
  !*** ./src/blocks/header/header/edit.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/blocks/header/header/inspector.tsx");





const Edit = (props) => {
    const { attributes: { paragraphOrientation }, className, backgroundColor, clientId, setAttributes, } = props;
    const blocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)((select) => {
        const { getBlocks } = select('core/block-editor');
        return getBlocks(clientId);
    }, [clientId]);
    const hasImage = !!blocks.find((block) => {
        return block.name == 'core/post-featured-image';
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        setAttributes({ hasImage });
    }, [hasImage]);
    const template = [
        ['core/post-featured-image', []],
        [
            'ctx-blocks/header-content',
            { className: 'header__content' },
            [
                [
                    'core/group',
                    { className: 'ctx:header-text' },
                    [['core/paragraph']],
                ],
                ['core/post-title'],
            ],
        ],
    ];
    const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps)({ className: 'ctx:header__container' }, { template, renderAppender: false });
    const style = {
        backgroundColor: backgroundColor.color,
    };
    const classes = [
        'ctx-header',
        hasImage ? 'ctx-header-has-image' : false,
        'ctx:header-' + paragraphOrientation,
    ]
        .filter(Boolean)
        .join(' ');
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({ className: classes, style });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props)), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({}, blockProps, { style: style }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({}, innerBlocksProps)) }))] }));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);


/***/ }),

/***/ "./src/blocks/header/header/icon.tsx":
/*!*******************************************!*\
  !*** ./src/blocks/header/header/icon.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, Object.assign({ xmlns: "http://www.w3.org/2000/svg", height: "24", width: "24" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M6 17h12v-3H6Zm-2 3q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h16V6H4v12Zm0 0V6v12Z" }) })));


/***/ }),

/***/ "./src/blocks/header/header/index.tsx":
/*!********************************************!*\
  !*** ./src/blocks/header/header/index.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/header/header/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/header/header/edit.tsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/header/header/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/blocks/header/header/icon.tsx");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);

/**
 * Internal dependencies
 */




/**
 * Wordpress dependencies
 */


const { name, title, description } = _block_json__WEBPACK_IMPORTED_MODULE_1__;
const settings = Object.assign(Object.assign({}, _block_json__WEBPACK_IMPORTED_MODULE_1__), { title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(title, 'ctx-blocks'), description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(description, 'ctx-blocks'), icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"], edit: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.withColors)({
        backgroundColor: 'backgroundColor',
        accentColor: 'accentColor',
    })(_edit__WEBPACK_IMPORTED_MODULE_2__["default"]), save: () => {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.Content, {});
    } });



/***/ }),

/***/ "./src/blocks/header/header/inspector.tsx":
/*!************************************************!*\
  !*** ./src/blocks/header/header/inspector.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */



/**
 * Inspector controls
 */
const Inspector = (props) => {
    const { attributes: { paragraphOrientation, mobileParagraphPosition, showBreadcrumbs, margin, }, setAttributes, backgroundColor, setBackgroundColor, } = props;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, { colorSettings: [
                    {
                        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Colors', 'ctx-blocks'),
                        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Color', 'ctx-blocks'),
                        onChange: setBackgroundColor,
                        value: backgroundColor.color,
                        disableCustomColors: true,
                    },
                ] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, Object.assign({ title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Button settings', 'ctx-blocks'), initialOpen: true }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, { title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text Orientation'), options: [
                            {
                                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top', 'ctx-blocks'),
                                value: 'top',
                            },
                            {
                                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center', 'ctx-blocks'),
                                value: 'center',
                            },
                            {
                                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom', 'ctx-blocks'),
                                value: 'bottom',
                            },
                        ], onChange: (value) => {
                            setAttributes({ paragraphOrientation: value });
                        }, value: paragraphOrientation }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, { title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text position on mobile'), options: [
                            {
                                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Over image', 'ctx-blocks'),
                                value: 'top',
                            },
                            {
                                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Within image', 'ctx-blocks'),
                                value: 'within',
                            },
                            {
                                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Under image', 'ctx-blocks'),
                                value: 'bottom',
                            },
                        ], onChange: (value) => {
                            setAttributes({ mobileParagraphPosition: value });
                        }, value: mobileParagraphPosition }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, { label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show margin at bottom', 'ctx-blocks'), help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('If active, the rest of the page is set apart from the header'), checked: margin, onChange: (value) => setAttributes({ margin: !!value }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, { label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show breadcrumbs', 'ctx-blocks'), help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('If active, the breadcrumbs are shown'), checked: showBreadcrumbs, onChange: (value) => setAttributes({ showBreadcrumbs: !!value }) })] }))] }));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);


/***/ }),

/***/ "./src/blocks/topbar/edit.tsx":
/*!************************************!*\
  !*** ./src/blocks/topbar/edit.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_utils_SVGUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/utils/SVGUrl */ "./src/common/utils/SVGUrl.tsx");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/blocks/topbar/inspector.tsx");






const Edit = (props) => {
    const { attributes: { claim }, setAttributes, className, primaryColor, } = props;
    const logoUrl = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)((select) => {
        const { getMedia, getEntityRecord } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
        const siteData = getEntityRecord('root', '__unstableBase');
        const _siteLogoId = siteData === null || siteData === void 0 ? void 0 : siteData.site_logo;
        const query = { hide_empty: true };
        return getMedia(_siteLogoId, {
            context: 'view',
        });
    }, []);
    console.log(logoUrl);
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
        className: `ctx-topbar`,
    });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", { children: `	
        .fill-primary {
          fill: ${primaryColor.color};
        }
    ` }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({}, blockProps, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "brand" }, { children: [logoUrl && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_utils_SVGUrl__WEBPACK_IMPORTED_MODULE_4__["default"], { size: 60, url: logoUrl.source_url })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: claim })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "Menu" })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_inspector__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, props))] }));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);


/***/ }),

/***/ "./src/blocks/topbar/icon.tsx":
/*!************************************!*\
  !*** ./src/blocks/topbar/icon.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, Object.assign({ xmlns: "http://www.w3.org/2000/svg", height: "24", width: "24" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h16V8H4v10Z" }) })));


/***/ }),

/***/ "./src/blocks/topbar/index.tsx":
/*!*************************************!*\
  !*** ./src/blocks/topbar/index.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/topbar/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/topbar/edit.tsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/topbar/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/blocks/topbar/icon.tsx");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Internal dependencies
 */




/**
 * Wordpress dependencies
 */


const { name, title, description } = _block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = Object.assign(Object.assign({}, _block_json__WEBPACK_IMPORTED_MODULE_0__), { title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(title, 'ctx-blocks'), description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(description, 'ctx-blocks'), icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"], edit: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.withColors)({ primaryColor: 'primaryColor' })(_edit__WEBPACK_IMPORTED_MODULE_1__["default"]), save: () => {
        return null;
    } });



/***/ }),

/***/ "./src/blocks/topbar/inspector.tsx":
/*!*****************************************!*\
  !*** ./src/blocks/topbar/inspector.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

/**
 * Wordpress Dependencies
 */



const Inspector = (_a) => {
    var props = __rest(_a, []);
    const { attributes: { claim, customPrimaryColor }, setAttributes, primaryColor, setPrimaryColor, } = props;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, { title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Color', 'ctx-blocks'), initialOpen: true, colorSettings: [
                    {
                        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Color for menu highlight and logo', 'ctx-blocks'),
                        onChange: setPrimaryColor,
                        value: primaryColor,
                        disableCustomColors: false,
                    },
                ] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, Object.assign({ title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Content', 'ctx-blocks'), initialOpen: true }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, { label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Claim', 'ctx-blocks'), value: claim, onChange: (value) => {
                        setAttributes({ claim: value });
                    } }) }))] }));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);


/***/ }),

/***/ "./src/common/utils/SVGUrl.tsx":
/*!*************************************!*\
  !*** ./src/common/utils/SVGUrl.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SVGUrl = (props) => {
    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { url, size } = props;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.text())
            .then((res) => {
            const domParser = new DOMParser();
            setImage(res);
            setLoading(false);
        });
    }, []);
    return loading ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: size + 'px' }, dangerouslySetInnerHTML: { __html: image } }));
};
SVGUrl.defaultProps = {
    size: 100,
};
/* harmony default export */ __webpack_exports__["default"] = (SVGUrl);


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["date"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ (function(module) {

module.exports = window["wp"]["url"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/colord/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/colord/index.mjs ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Colord": function() { return /* binding */ j; },
/* harmony export */   "colord": function() { return /* binding */ w; },
/* harmony export */   "extend": function() { return /* binding */ k; },
/* harmony export */   "getFormat": function() { return /* binding */ I; },
/* harmony export */   "random": function() { return /* binding */ E; }
/* harmony export */ });
var r={grad:.9,turn:360,rad:360/(2*Math.PI)},t=function(r){return"string"==typeof r?r.length>0:"number"==typeof r},n=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=Math.pow(10,t)),Math.round(n*r)/n+0},e=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=1),r>n?n:r>t?r:t},u=function(r){return(r=isFinite(r)?r%360:0)>0?r:r+360},a=function(r){return{r:e(r.r,0,255),g:e(r.g,0,255),b:e(r.b,0,255),a:e(r.a)}},o=function(r){return{r:n(r.r),g:n(r.g),b:n(r.b),a:n(r.a,3)}},i=/^#([0-9a-f]{3,8})$/i,s=function(r){var t=r.toString(16);return t.length<2?"0"+t:t},h=function(r){var t=r.r,n=r.g,e=r.b,u=r.a,a=Math.max(t,n,e),o=a-Math.min(t,n,e),i=o?a===t?(n-e)/o:a===n?2+(e-t)/o:4+(t-n)/o:0;return{h:60*(i<0?i+6:i),s:a?o/a*100:0,v:a/255*100,a:u}},b=function(r){var t=r.h,n=r.s,e=r.v,u=r.a;t=t/360*6,n/=100,e/=100;var a=Math.floor(t),o=e*(1-n),i=e*(1-(t-a)*n),s=e*(1-(1-t+a)*n),h=a%6;return{r:255*[e,i,o,o,s,e][h],g:255*[s,e,e,i,o,o][h],b:255*[o,o,s,e,e,i][h],a:u}},g=function(r){return{h:u(r.h),s:e(r.s,0,100),l:e(r.l,0,100),a:e(r.a)}},d=function(r){return{h:n(r.h),s:n(r.s),l:n(r.l),a:n(r.a,3)}},f=function(r){return b((n=(t=r).s,{h:t.h,s:(n*=((e=t.l)<50?e:100-e)/100)>0?2*n/(e+n)*100:0,v:e+n,a:t.a}));var t,n,e},c=function(r){return{h:(t=h(r)).h,s:(u=(200-(n=t.s))*(e=t.v)/100)>0&&u<200?n*e/100/(u<=100?u:200-u)*100:0,l:u/2,a:t.a};var t,n,e,u},l=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,p=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,v=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,m=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,y={string:[[function(r){var t=i.exec(r);return t?(r=t[1]).length<=4?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:4===r.length?n(parseInt(r[3]+r[3],16)/255,2):1}:6===r.length||8===r.length?{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:8===r.length?n(parseInt(r.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(r){var t=v.exec(r)||m.exec(r);return t?t[2]!==t[4]||t[4]!==t[6]?null:a({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(t){var n=l.exec(t)||p.exec(t);if(!n)return null;var e,u,a=g({h:(e=n[1],u=n[2],void 0===u&&(u="deg"),Number(e)*(r[u]||1)),s:Number(n[3]),l:Number(n[4]),a:void 0===n[5]?1:Number(n[5])/(n[6]?100:1)});return f(a)},"hsl"]],object:[[function(r){var n=r.r,e=r.g,u=r.b,o=r.a,i=void 0===o?1:o;return t(n)&&t(e)&&t(u)?a({r:Number(n),g:Number(e),b:Number(u),a:Number(i)}):null},"rgb"],[function(r){var n=r.h,e=r.s,u=r.l,a=r.a,o=void 0===a?1:a;if(!t(n)||!t(e)||!t(u))return null;var i=g({h:Number(n),s:Number(e),l:Number(u),a:Number(o)});return f(i)},"hsl"],[function(r){var n=r.h,a=r.s,o=r.v,i=r.a,s=void 0===i?1:i;if(!t(n)||!t(a)||!t(o))return null;var h=function(r){return{h:u(r.h),s:e(r.s,0,100),v:e(r.v,0,100),a:e(r.a)}}({h:Number(n),s:Number(a),v:Number(o),a:Number(s)});return b(h)},"hsv"]]},N=function(r,t){for(var n=0;n<t.length;n++){var e=t[n][0](r);if(e)return[e,t[n][1]]}return[null,void 0]},x=function(r){return"string"==typeof r?N(r.trim(),y.string):"object"==typeof r&&null!==r?N(r,y.object):[null,void 0]},I=function(r){return x(r)[1]},M=function(r,t){var n=c(r);return{h:n.h,s:e(n.s+100*t,0,100),l:n.l,a:n.a}},H=function(r){return(299*r.r+587*r.g+114*r.b)/1e3/255},$=function(r,t){var n=c(r);return{h:n.h,s:n.s,l:e(n.l+100*t,0,100),a:n.a}},j=function(){function r(r){this.parsed=x(r)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return r.prototype.isValid=function(){return null!==this.parsed},r.prototype.brightness=function(){return n(H(this.rgba),2)},r.prototype.isDark=function(){return H(this.rgba)<.5},r.prototype.isLight=function(){return H(this.rgba)>=.5},r.prototype.toHex=function(){return r=o(this.rgba),t=r.r,e=r.g,u=r.b,i=(a=r.a)<1?s(n(255*a)):"","#"+s(t)+s(e)+s(u)+i;var r,t,e,u,a,i},r.prototype.toRgb=function(){return o(this.rgba)},r.prototype.toRgbString=function(){return r=o(this.rgba),t=r.r,n=r.g,e=r.b,(u=r.a)<1?"rgba("+t+", "+n+", "+e+", "+u+")":"rgb("+t+", "+n+", "+e+")";var r,t,n,e,u},r.prototype.toHsl=function(){return d(c(this.rgba))},r.prototype.toHslString=function(){return r=d(c(this.rgba)),t=r.h,n=r.s,e=r.l,(u=r.a)<1?"hsla("+t+", "+n+"%, "+e+"%, "+u+")":"hsl("+t+", "+n+"%, "+e+"%)";var r,t,n,e,u},r.prototype.toHsv=function(){return r=h(this.rgba),{h:n(r.h),s:n(r.s),v:n(r.v),a:n(r.a,3)};var r},r.prototype.invert=function(){return w({r:255-(r=this.rgba).r,g:255-r.g,b:255-r.b,a:r.a});var r},r.prototype.saturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,r))},r.prototype.desaturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,-r))},r.prototype.grayscale=function(){return w(M(this.rgba,-1))},r.prototype.lighten=function(r){return void 0===r&&(r=.1),w($(this.rgba,r))},r.prototype.darken=function(r){return void 0===r&&(r=.1),w($(this.rgba,-r))},r.prototype.rotate=function(r){return void 0===r&&(r=15),this.hue(this.hue()+r)},r.prototype.alpha=function(r){return"number"==typeof r?w({r:(t=this.rgba).r,g:t.g,b:t.b,a:r}):n(this.rgba.a,3);var t},r.prototype.hue=function(r){var t=c(this.rgba);return"number"==typeof r?w({h:r,s:t.s,l:t.l,a:t.a}):n(t.h)},r.prototype.isEqual=function(r){return this.toHex()===w(r).toHex()},r}(),w=function(r){return r instanceof j?r:new j(r)},S=[],k=function(r){r.forEach(function(r){S.indexOf(r)<0&&(r(j,y),S.push(r))})},E=function(){return new j({r:255*Math.random(),g:255*Math.random(),b:255*Math.random()})};


/***/ }),

/***/ "./src/blocks/alert/block.json":
/*!*************************************!*\
  !*** ./src/blocks/alert/block.json ***!
  \*************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ctx-blocks/alert","title":"Alert","category":"formatting","keywords":["message","alert","warning","info","error"],"textdomain":"ctx-blocks","description":"Show an information or warning to the user","attributes":{"alertColor":{"type":"string","default":"default"},"alertText":{"type":"string","default":""},"title":{"type":"string","default":""},"isDismissable":{"type":"boolean","default":false}},"editorStyle":"wp-block-alert-editor"}');

/***/ }),

/***/ "./src/blocks/buttons/button-group/block.json":
/*!****************************************************!*\
  !*** ./src/blocks/buttons/button-group/block.json ***!
  \****************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ctx-blocks/button-group","title":"Button Group","keywords":["link","action","button"],"textdomain":"ctx-blocks","description":"Collection of buttons that can be aligned or spaced.","api_version":2,"category":"layout","attributes":{"textAlignment":{"type":"string","default":"left"},"paddingTop":{"type":"integer","default":10},"paddingBottom":{"type":"integer","default":10}},"supports":{"align":["full"],"default":"alignfull"}}');

/***/ }),

/***/ "./src/blocks/buttons/button-spacer/block.json":
/*!*****************************************************!*\
  !*** ./src/blocks/buttons/button-spacer/block.json ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ctx-blocks/button-spacer","title":"Button Spacer","keywords":["link","action","button"],"textdomain":"ctx-blocks","description":"Display a button with a link or a modal","api_version":2,"category":"layout","attributes":{"textAlignment":{"type":"string","default":"left"}},"supports":{"align":["full"],"default":"alignfull"},"parent":["ctx-blocks/button-group"]}');

/***/ }),

/***/ "./src/blocks/buttons/button/block.json":
/*!**********************************************!*\
  !*** ./src/blocks/buttons/button/block.json ***!
  \**********************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ctx-blocks/button","title":"Button","keywords":["link","action","button"],"textdomain":"ctx-blocks","description":"Display a button with a link or a modal","category":"common","attributes":{"title":{"type":"string","default":""},"buttonColor":{"type":"string","default":"primary"},"size":{"type":"string","default":""},"url":{"type":"string","default":""},"outline":{"type":"boolean","default":false},"icon":{"type":"string","default":""},"iconRight":{"type":"boolean","default":false},"iconOnly":{"type":"boolean","default":false},"isLink":{"type":"boolean","default":false},"fullWidth":{"type":"boolean","default":false},"modalFull":{"type":"boolean","default":false},"modalTitle":{"type":"string","default":""},"hasModal":{"type":"boolean","default":false}},"parent":["ctx-blocks/button-group"]}');

/***/ }),

/***/ "./src/blocks/card/block.json":
/*!************************************!*\
  !*** ./src/blocks/card/block.json ***!
  \************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"ctx-blocks/card","apiVersion":2,"title":"Card","keywords":["container","card"],"description":"Card component to hold different Information","textdomain":"ctx-blocks","category":"layout","attributes":{"backgroundColor":{"type":"string","default":"white"},"secondaryColor":{"type":"string","default":""},"transparent":{"type":"boolean","default":false},"shadow":{"type":"boolean","default":true},"url":{"type":"string","default":""},"hover":{"type":"boolean","default":false},"textAlign":{"type":"string","default":"left"},"image":{"type":"object","default":null},"imageRound":{"type":"boolean","default":false},"imageWidth":{"type":"integer","default":100},"imageBorder":{"type":"boolean","default":false},"imagePosition":{"type":"string","default":"top"},"isFirst":{"type":"boolean","default":false},"isLast":{"type":"boolean","default":false},"label":{"type":"string","default":""},"badge":{"type":"string","default":""},"actions":{"type":"array","default":[]}}}');

/***/ }),

/***/ "./src/blocks/conditional/block.json":
/*!*******************************************!*\
  !*** ./src/blocks/conditional/block.json ***!
  \*******************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ctx-blocks/conditional","title":"Conditional Content","category":"formatting","keywords":["date","time","country"],"textdomain":"ctx-blocks","description":"Show or hide a block under certain conditions","attributes":{"fromDate":{"type":"string","default":"default"},"toDate":{"type":"string","default":""}},"editorStyle":"wp-block-alert-editor"}');

/***/ }),

/***/ "./src/blocks/description/description-item/block.json":
/*!************************************************************!*\
  !*** ./src/blocks/description/description-item/block.json ***!
  \************************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"ctx-blocks/description-item","api_version":2,"title":"Description Item","keywords":["list","table"],"description":"Singel item of a description list","textdomain":"ctx-blocks","category":"common","attributes":{"image":{"type":"object","default":null},"title":{"type":"string","default":""},"icon":{"type":"string","default":""},"text":{"type":"string","default":""},"url":{"type":"string","default":""},"urlIcon":{"type":"string","default":"more_horiz"},"contentType":{"type":"string","default":""},"roundImage":{"type":"boolean","default":false},"seperationLines":{"type":"boolean","default":false}},"parent":["ctx-blocks/description-list"]}');

/***/ }),

/***/ "./src/blocks/description/description-list/block.json":
/*!************************************************************!*\
  !*** ./src/blocks/description/description-list/block.json ***!
  \************************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"ctx-blocks/description-list","apiVersion":2,"title":"Description List","keywords":["list","table"],"description":"List containing items with an image or icon and a text","textdomain":"ctx-blocks","category":"layout","attributes":{"dividers":{"type":"boolean","default":false}}}');

/***/ }),

/***/ "./src/blocks/footer/block.json":
/*!**************************************!*\
  !*** ./src/blocks/footer/block.json ***!
  \**************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"name":"ctx-blocks/footer","apiVersion":2,"title":"Footer","keywords":["link","action","button"],"textdomain":"ctx-blocks","description":"Last block on page","category":"layout","attributes":{"backgroundColor":{"type":"string","default":""},"customBackgroundColor":{"type":"string","default":""},"paddingTop":{"type":"integer","default":10},"paddingBottom":{"type":"integer","default":10},"bottomLinks":{"type":"array","default":[]}},"supports":{"align":["full"],"default":"alignfull"}}');

/***/ }),

/***/ "./src/blocks/grid/grid-column/block.json":
/*!************************************************!*\
  !*** ./src/blocks/grid/grid-column/block.json ***!
  \************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"ctx-blocks/grid-column","apiVersion":2,"title":"Column","keywords":["list","table"],"description":"Single column as child of a columns collection","textdomain":"ctx-blocks","category":"layout","attributes":{"widthSmall":{"type":"integer","default":0},"widthMedium":{"type":"integer","default":0},"widthLarge":{"type":"integer","default":0},"startSmall":{"type":"integer","default":0},"startMedium":{"type":"integer","default":0},"startLarge":{"type":"integer","default":0},"endSmall":{"type":"integer","default":0},"endMedium":{"type":"integer","default":0},"endLarge":{"type":"integer","default":0},"mobilePosition":{"type":"string","default":""}},"parent":["ctx-blocks/grid-row"]}');

/***/ }),

/***/ "./src/blocks/grid/grid-row/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/grid/grid-row/block.json ***!
  \*********************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"ctx-blocks/grid-row","apiVersion":2,"title":"Columns","keywords":["columns","responsive"],"description":"Displays content in columns of different width","textdomain":"ctx-blocks","category":"layout","attributes":{"equalizer":{"type":"boolean","default":false},"divider":{"type":"boolean","default":false},"childrenWidthSmall":{"type":"integer","default":1},"childrenWidthMedium":{"type":"integer","default":2},"childrenWidthLarge":{"type":"integer","default":3}},"supports":{"align":["full"],"default":"alignfull"}}');

/***/ }),

/***/ "./src/blocks/header/header-content/block.json":
/*!*****************************************************!*\
  !*** ./src/blocks/header/header-content/block.json ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"name":"ctx-blocks/header-content","apiVersion":2,"title":"Header Content","keywords":["link","action","button"],"textdomain":"ctx-blocks","description":"Simple Container for the header content","category":"layout","attributes":{},"supports":{"align":["full"],"default":"alignfull"},"parent":["ctx-blocks/header"]}');

/***/ }),

/***/ "./src/blocks/header/header/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/header/header/block.json ***!
  \*********************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ctx-blocks/header","title":"Header","category":"layout","keywords":["navigation","logo","menu","claim"],"textdomain":"ctx-blocks","description":"Contains main menu, logo and claim","attributes":{"backgroundColor":{"type":"string","default":"primary"},"hasImage":{"type":"boolean","default":true},"paragraphOrientation":{"type":"string","default":"bottom"},"mobileParagraphPosition":{"type":"string","default":"within"},"showBreadcrumbs":{"type":"boolean","default":true},"margin":{"type":"boolean","default":true}},"editorStyle":"wp-block-alert-editor"}');

/***/ }),

/***/ "./src/blocks/image/block.json":
/*!*************************************!*\
  !*** ./src/blocks/image/block.json ***!
  \*************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"ctx-blocks/image","apiVersion":2,"title":"Image","keywords":["list","table"],"description":"List containing items with an image or icon and a text","textdomain":"ctx-blocks","category":"common","attributes":{"hasLightbox":{"type":"boolean","default":false},"url":{"type":"string","default":""},"lightboxText":{"type":"string","default":""},"image":{"type":"object","default":null},"width":{"type":"integer","default":100},"alignment":{"type":"string","default":"left"},"round":{"type":"boolean","default":false},"roundCorners":{"type":"boolean","default":true},"border":{"type":"boolean","default":false},"shadow":{"type":"boolean","default":false},"flip":{"type":"boolean","default":false},"caption":{"type":"string","default":""}}}');

/***/ }),

/***/ "./src/blocks/nav/block.json":
/*!***********************************!*\
  !*** ./src/blocks/nav/block.json ***!
  \***********************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"ctx-blocks/nav","apiVersion":2,"title":"Navigation","keywords":["list","navigation"],"description":"List of subpages, categories or posts","textdomain":"ctx-blocks","category":"widgets","attributes":{"dropDown":{"type":"boolean","default":false},"depth":{"type":"number","default":1},"showIcons":{"type":"boolean","default":false},"isPrimary":{"type":"boolean","default":false},"showActive":{"type":"boolean","default":true},"parentPage":{"type":"number","default":0},"parentCategory":{"type":"number","default":0},"dataType":{"type":"string","default":"posts"},"limit":{"type":"number","default":50},"order":{"type":"string","default":"desc"},"orderBy":{"type":"string","default":"date"},"textAlignment":{"type":"string","default":"left"}}}');

/***/ }),

/***/ "./src/blocks/posts/block.json":
/*!*************************************!*\
  !*** ./src/blocks/posts/block.json ***!
  \*************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"ctx-blocks/posts","apiVersion":2,"title":"Posts","keywords":["list","table"],"description":"Collection of posts, listed as cards or item List","textdomain":"ctx-blocks","category":"widgets","attributes":{"columnsSmall":{"type":"number","default":1},"columnsMedium":{"type":"number","default":2},"columnsLarge":{"type":"number","default":3},"showImages":{"type":"boolean","default":true},"roundImages":{"type":"boolean","default":false},"dropShadow":{"type":"boolean","default":true},"hover":{"type":"boolean","default":true},"imageSize":{"type":"number","default":100},"showDate":{"type":"boolean","default":true},"showCategory":{"type":"boolean","default":true},"showTag":{"type":"boolean","default":true},"style":{"type":"string","default":"list"},"limit":{"type":"number","default":6},"order":{"type":"string","default":"desc"},"orderBy":{"type":"string","default":"date"},"category":{"type":"string","default":""},"excerptLength":{"type":"number","default":20},"textAlignment":{"type":"string","default":"left"}}}');

/***/ }),

/***/ "./src/blocks/progress/block.json":
/*!****************************************!*\
  !*** ./src/blocks/progress/block.json ***!
  \****************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"ctx-blocks/progress","apiVersion":2,"title":"Progress Bar","keywords":["percent","progress"],"description":"Shows a progress bar","textdomain":"ctx-blocks","category":"common","attributes":{"maxValue":{"type":"string","default":"30"},"currentValue":{"type":"string","default":"100"},"showValues":{"type":"boolean","default":true},"unit":{"type":"string","default":""},"prefixedUnit":{"type":"boolean","default":false},"thousandSeparators":{"type":"boolean","default":false},"decimalPlaces":{"type":"integer","default":0},"colorBar":{"type":"string","default":"blue"},"colorBackground":{"type":"string","default":"lightgray"},"title":{"type":"string","default":""},"currentDescription":{"type":"string","default":""},"maxDescription":{"type":"string","default":""}}}');

/***/ }),

/***/ "./src/blocks/section/block.json":
/*!***************************************!*\
  !*** ./src/blocks/section/block.json ***!
  \***************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"name":"ctx-blocks/section","apiVersion":2,"title":"Section","keywords":["link","action","button"],"textdomain":"ctx-blocks","description":"Container block that adds a maximum width to it\'s content","category":"layout","attributes":{"backgroundColor":{"type":"string","default":""},"customBackgroundColor":{"type":"string","default":""},"backgroundImage":{"type":"object","default":null},"imagePosition":{"type":"string","default":"center"},"parallaxEffect":{"type":"boolean","default":false},"textAlignment":{"type":"string","default":"left"},"paddingTop":{"type":"integer","default":10},"paddingBottom":{"type":"integer","default":10},"fromDate":{"type":"string","default":""},"toDate":{"type":"string","default":""},"element":{"type":"string","default":"section"}},"supports":{"align":["full"],"default":"alignfull"}}');

/***/ }),

/***/ "./src/blocks/topbar/block.json":
/*!**************************************!*\
  !*** ./src/blocks/topbar/block.json ***!
  \**************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ctx-blocks/topbar","title":"Top Bar","category":"layout","keywords":["navigation","logo","menu","claim"],"textdomain":"ctx-blocks","description":"Contains main menu, logo and claim","attributes":{"primaryColor":{"type":"string","default":""},"customPrimaryColor":{"type":"string","default":""},"claim":{"type":"string","default":""}},"editorStyle":"wp-block-alert-editor"}');

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerBlocks": function() { return /* binding */ registerBlocks; }
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/alert */ "./src/blocks/alert/index.tsx");
/* harmony import */ var _blocks_buttons_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/buttons/button */ "./src/blocks/buttons/button/index.js");
/* harmony import */ var _blocks_buttons_button_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/buttons/button-group */ "./src/blocks/buttons/button-group/index.js");
/* harmony import */ var _blocks_buttons_button_spacer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/buttons/button-spacer */ "./src/blocks/buttons/button-spacer/index.js");
/* harmony import */ var _blocks_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/card */ "./src/blocks/card/index.js");
/* harmony import */ var _blocks_conditional__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/conditional */ "./src/blocks/conditional/index.js");
/* harmony import */ var _blocks_description_description_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/description/description-item */ "./src/blocks/description/description-item/index.js");
/* harmony import */ var _blocks_description_description_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/description/description-list */ "./src/blocks/description/description-list/index.js");
/* harmony import */ var _blocks_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/footer */ "./src/blocks/footer/index.js");
/* harmony import */ var _blocks_header_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/header/header */ "./src/blocks/header/header/index.tsx");
/* harmony import */ var _blocks_header_header_content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/header/header-content */ "./src/blocks/header/header-content/index.js");
/* harmony import */ var _blocks_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/image */ "./src/blocks/image/index.js");
/* harmony import */ var _blocks_nav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/nav */ "./src/blocks/nav/index.js");
/* harmony import */ var _blocks_posts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/posts */ "./src/blocks/posts/index.js");
/* harmony import */ var _blocks_progress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/progress */ "./src/blocks/progress/index.js");
/* harmony import */ var _blocks_section__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocks/section */ "./src/blocks/section/index.js");
/* harmony import */ var _blocks_topbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blocks/topbar */ "./src/blocks/topbar/index.tsx");
/* harmony import */ var _blocks_grid_grid_column__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blocks/grid/grid-column */ "./src/blocks/grid/grid-column/index.js");
/* harmony import */ var _blocks_grid_grid_row__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blocks/grid/grid-row */ "./src/blocks/grid/grid-row/index.js");
/* harmony import */ var _mods_additionalFonts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mods/additionalFonts */ "./src/mods/additionalFonts.js");
/* harmony import */ var _mods_featuredImageProps__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mods/featuredImageProps */ "./src/mods/featuredImageProps.js");
/* harmony import */ var _mods_postTitleProps__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mods/postTitleProps */ "./src/mods/postTitleProps.js");
/* harmony import */ var _mods_spacerAutoOption__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mods/spacerAutoOption */ "./src/mods/spacerAutoOption.js");
/* harmony import */ var _common_styles_editor_scss__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./common/styles/editor.scss */ "./src/common/styles/editor.scss");
/* harmony import */ var _common_styles_style_scss__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./common/styles/style.scss */ "./src/common/styles/style.scss");
/**
 * WordPress dependencies
 */

/**
 * Blocks dependencies.
 */

//import * as base from './blocks/base';
















//import * as modal from './blocks/modal';


/**
 * Core Block modification dependencies.
 */



//import './mods/removeCoreBlocks';

/**
 * Stylesheets
 */


const registerBlock = (block) => {
    if (!block)
        return;
    const { name, settings } = block;
    (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, settings);
};
const registerBlocks = () => {
    [
        _blocks_buttons_button_group__WEBPACK_IMPORTED_MODULE_3__,
        _blocks_buttons_button_spacer__WEBPACK_IMPORTED_MODULE_4__,
        _blocks_buttons_button__WEBPACK_IMPORTED_MODULE_2__,
        _blocks_alert__WEBPACK_IMPORTED_MODULE_1__,
        _blocks_card__WEBPACK_IMPORTED_MODULE_5__,
        _blocks_description_description_list__WEBPACK_IMPORTED_MODULE_8__,
        _blocks_description_description_item__WEBPACK_IMPORTED_MODULE_7__,
        _blocks_conditional__WEBPACK_IMPORTED_MODULE_6__,
        _blocks_section__WEBPACK_IMPORTED_MODULE_16__,
        _blocks_footer__WEBPACK_IMPORTED_MODULE_9__,
        _blocks_posts__WEBPACK_IMPORTED_MODULE_14__,
        _blocks_header_header__WEBPACK_IMPORTED_MODULE_10__,
        _blocks_header_header_content__WEBPACK_IMPORTED_MODULE_11__,
        _blocks_nav__WEBPACK_IMPORTED_MODULE_13__,
        _blocks_progress__WEBPACK_IMPORTED_MODULE_15__,
        _blocks_grid_grid_row__WEBPACK_IMPORTED_MODULE_19__,
        _blocks_topbar__WEBPACK_IMPORTED_MODULE_17__,
        _blocks_grid_grid_column__WEBPACK_IMPORTED_MODULE_18__,
        _blocks_image__WEBPACK_IMPORTED_MODULE_12__,
    ].forEach(registerBlock);
};
registerBlocks();

}();
/******/ })()
;
//# sourceMappingURL=index.js.map