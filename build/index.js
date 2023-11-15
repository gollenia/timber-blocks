/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/align-justify.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/align-justify.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const alignJustify = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 12.8h16v-1.5H4v1.5zm0 7h12.4v-1.5H4v1.5zM4 4.3v1.5h16V4.3H4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (alignJustify);
//# sourceMappingURL=align-justify.js.map

/***/ }),

/***/ "./src/blocks/button/button-group/edit.js":
/*!************************************************!*\
  !*** ./src/blocks/button/button-group/edit.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar */ "./src/blocks/button/button-group/toolbar.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




function Edit({
  ...props
}) {
  const {
    attributes: {
      textAlignment
    },
    context
  } = props;
  const {
    postType
  } = context;
  const ALLOWED_BLOCKS = ['ctx-blocks/button', 'ctx-blocks/button-spacer', 'events-manager/booking', 'core/spacer'];
  const TEMPLATE = postType == 'event' ? [['events-manager/booking']] : [['ctx-blocks/button']];
  const classes = ['ctx:buttons', `ctx:buttons__${textAlignment}`].filter(Boolean).join(' ');
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)({
    className: classes
  }, {
    template: TEMPLATE,
    allowedBlocks: ALLOWED_BLOCKS,
    orientation: 'horizontal'
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'allignfull'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_toolbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "ctx:control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Deprecated - Please use Groups instead', 'ctx-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocksProps
  })));
}

/***/ }),

/***/ "./src/blocks/button/button-group/icon.js":
/*!************************************************!*\
  !*** ./src/blocks/button/button-group/icon.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"
})));

/***/ }),

/***/ "./src/blocks/button/button-group/index.js":
/*!*************************************************!*\
  !*** ./src/blocks/button/button-group/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   name: function() { return /* binding */ name; },
/* harmony export */   settings: function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/button/button-group/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/button/button-group/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/button/button-group/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/blocks/button/button-group/icon.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transforms */ "./src/blocks/button/button-group/transforms.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);

/**
 * Internal dependencies
 */






/**
 * Wordpress dependencies
 */


const {
  name,
  title
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_1__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)(title, 'ctx-blocks'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_5__["default"],
  save: () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InnerBlocks.Content, null);
  }
};


/***/ }),

/***/ "./src/blocks/button/button-group/toolbar.js":
/*!***************************************************!*\
  !*** ./src/blocks/button/button-group/toolbar.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.AlignmentToolbar, {
    value: textAlignment,
    onChange: event => setAttributes({
      textAlignment: event
    })
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "./src/blocks/button/button-group/transforms.js":
/*!******************************************************!*\
  !*** ./src/blocks/button/button-group/transforms.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);

const transforms = {
  to: [{
    type: 'block',
    blocks: ['core/group'],
    transform: (attributes, innerBlocks) => {
      attributes = {
        ...attributes,
        layout: {
          type: 'flex',
          flexWrap: 'nowrap'
        }
      };
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/group', attributes, innerBlocks);
    }
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (transforms);

/***/ }),

/***/ "./src/blocks/button/deprecated.js":
/*!*****************************************!*\
  !*** ./src/blocks/button/deprecated.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const migrateAttributes = attributes => {
  if (attributes.hasModal === undefined) {
    return attributes;
  }
  return {
    ...attributes,
    action: attributes.hasModal ? 'modal' : 'link',
    hasModal: undefined
  };
};
const deprecated = [{
  attributes: {
    title: {
      type: 'string',
      default: ''
    },
    buttonColor: {
      type: 'string',
      default: 'primary'
    },
    customButtonColor: {
      type: 'string',
      default: ''
    },
    size: {
      type: 'string',
      default: ''
    },
    url: {
      type: 'string',
      default: ''
    },
    outline: {
      type: 'boolean',
      default: false
    },
    icon: {
      type: 'string',
      default: ''
    },
    iconRight: {
      type: 'boolean',
      default: false
    },
    iconOnly: {
      type: 'boolean',
      default: false
    },
    isLink: {
      type: 'boolean',
      default: false
    },
    fullWidth: {
      type: 'boolean',
      default: false
    },
    modalFull: {
      type: 'boolean',
      default: false
    },
    modalTitle: {
      type: 'string',
      default: ''
    },
    hasModal: {
      type: 'boolean',
      default: false
    }
  },
  migrate: migrateAttributes,
  isEligible: (attributes, innerBlocks) => {
    return attributes.hasModal !== undefined;
  },
  save: () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);
  }
}, {
  attributes: {
    title: {
      type: 'string',
      default: ''
    },
    url: {
      type: 'string',
      default: ''
    },
    newTab: {
      type: 'boolean',
      default: false
    },
    outline: {
      type: 'boolean',
      default: false
    },
    icon: {
      type: 'string',
      default: ''
    },
    buttonColor: {
      type: 'string',
      default: 'primary'
    },
    customButtonColor: {
      type: 'string',
      default: ''
    },
    iconRight: {
      type: 'boolean',
      default: false
    },
    iconOnly: {
      type: 'boolean',
      default: false
    },
    modalFull: {
      type: 'boolean',
      default: false
    },
    modalTitle: {
      type: 'string',
      default: ''
    },
    action: {
      type: 'string',
      default: 'link'
    },
    script: {
      type: 'string',
      default: ''
    },
    scriptTarget: {
      type: 'string',
      default: ''
    }
  },
  migrate: function (attributes) {
    return {
      ...attributes
    };
  },
  save: () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./src/blocks/button/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/button/edit.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ButtonEdit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector */ "./src/blocks/button/inspector.js");

/**
 * Wordpress dependencies
 */






/**
 * Internal dependencies
 */

function ButtonEdit({
  ...props
}) {
  const {
    attributes: {
      title,
      size,
      modalTitle,
      modalFull,
      action,
      outline,
      icon,
      iconRight,
      iconOnly
    },
    setAttributes,
    className
  } = props;
  const [deleteButton, setDeleteButton] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const hasModal = action == 'modal';
  const TEMPLATE = [['core/paragraph']];
  const [showModal, setShowModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const buttonClasses = [className || false, 'ctx__button', iconRight ? 'reverse' : false, size || false].filter(Boolean).join(' ');
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: buttonClasses
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    onClick: () => {
      if (!hasModal) return;
      setShowModal(true);
    }
  }, icon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "material-icons"
  }, icon), !iconOnly && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "span",
    value: title,
    disableLineBreaks: true,
    onChange: value => setAttributes({
      title: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Button title', 'ctx-blocks'),
    allowedFormats: ['core/bold', 'core/italic'],
    onKeyUp: event => {
      if (event.keyCode === 13) {
        if (title == '') return;
        event.preventDefault();
        const newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.createBlock)('core/paragraph', {});
        props.insertBlocksAfter(newBlock);
      }
      if (event.keyCode === 8 && title == '') {
        event.preventDefault();
        if (deleteButton) {
          setDeleteButton(false);
          props.onRemove();
          return;
        }
        setDeleteButton(true);
      }
    }
  })), showModal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Edit Modal content', 'ctx-blocks'),
    isOpen: showModal,
    onRequestClose: () => {
      setShowModal(false);
    },
    isFullScreen: modalFull
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h1",
    value: modalTitle,
    onChange: value => setAttributes({
      modalTitle: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Modal title', 'ctx-blocks'),
    allowedFormats: ['core/bold', 'core/italic']
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    template: TEMPLATE
  })));
}

/***/ }),

/***/ "./src/blocks/button/icon.js":
/*!***********************************!*\
  !*** ./src/blocks/button/icon.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"
})));

/***/ }),

/***/ "./src/blocks/button/icons.js":
/*!************************************!*\
  !*** ./src/blocks/button/icons.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const icons = {
  link: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M450 776H280q-83 0-141.5-58.5T80 576q0-83 58.5-141.5T280 376h170v60H280q-58.333 0-99.167 40.765-40.833 40.764-40.833 99Q140 634 180.833 675q40.834 41 99.167 41h170v60ZM325 606v-60h310v60H325Zm185 170v-60h170q58.333 0 99.167-40.765 40.833-40.764 40.833-99Q820 518 779.167 477 738.333 436 680 436H510v-60h170q83 0 141.5 58.5T880 576q0 83-58.5 141.5T680 776H510Z"
  })),
  window: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M180 936q-24.75 0-42.375-17.625T120 876V276q0-24.75 17.625-42.375T180 216h600q24.75 0 42.375 17.625T840 276v600q0 24.75-17.625 42.375T780 936H180Zm0-60h600V356H180v520Zm100-310v-60h390v60H280Zm0 160v-60h230v60H280Z"
  })),
  script: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M274 696q-15 0-24.5-9.5T240 662v-66h48v52h84V456h48v206q0 15-9.5 24.5T386 696H274Zm240 0q-15 0-24.5-9.5T480 662v-46h48v32h104v-53H514q-14 0-24-10t-10-24v-71q0-15 9.5-24.5T514 456h132q15 0 24.5 9.5T680 490v46h-48v-32H528v53h118q14 0 24 10t10 24v71q0 15-9.5 24.5T646 696H514Z"
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/blocks/button/index.js":
/*!************************************!*\
  !*** ./src/blocks/button/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   name: function() { return /* binding */ name; },
/* harmony export */   settings: function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/button/block.json");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deprecated */ "./src/blocks/button/deprecated.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/button/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/button/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon */ "./src/blocks/button/icon.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/button/style.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);

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
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)(description, 'ctx-blocks'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_6__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.withColors)({
    buttonColor: 'buttonColor'
  })(_edit__WEBPACK_IMPORTED_MODULE_4__["default"]),
  save: () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);
  }
};


/***/ }),

/***/ "./src/blocks/button/inspector.js":
/*!****************************************!*\
  !*** ./src/blocks/button/inspector.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./src/blocks/button/icons.js");

/**
 * WordPress dependencies
 */




/**
 * Inspector controls
 */
const Inspector = props => {
  const {
    attributes: {
      url,
      modalFull,
      icon,
      iconOnly,
      iconRight,
      newTab,
      action,
      script,
      scriptTarget,
      customButtonColor
    },
    setAttributes,
    setButtonColor,
    buttonColor
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icon', 'ctx-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icon', 'ctx-blocks'),
    value: icon,
    onChange: value => {
      setAttributes({
        icon: value
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show icon on the right', 'ctx-blocks'),
    checked: iconRight,
    onChange: value => setAttributes({
      iconRight: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Hide button text and show icon only', 'ctx-blocks'),
    checked: iconOnly,
    onChange: value => setAttributes({
      iconOnly: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Behaviour', 'ctx-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-style-selector"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      action: 'link'
    }),
    className: action === 'link' ? 'active' : ''
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    size: "64",
    className: "icon",
    icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].link
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Link', 'gutenberg-form'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      action: 'modal',
      modalId: 'modal-' + Math.random().toString(36).substr(2, 9)
    }),
    className: action === 'modal' ? 'active' : ''
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    size: "64",
    className: "icon",
    icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].window
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Modal', 'gutenberg-form'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      action: 'script'
    }),
    className: action === 'script' ? 'active' : ''
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    size: "64",
    className: "icon",
    icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].script
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Script', 'gutenberg-form')))), action === 'modal' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Full screen size', 'ctx-blocks'),
    checked: modalFull,
    onChange: value => setAttributes({
      modalFull: !modalFull
    })
  })), action == 'link' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-editor-link-control__search-input-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInput, {
    value: url,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Search or type url'),
    onChange: (url, post) => setAttributes({
      url,
      text: post && post.title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Click here', 'ctx-blocks')
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Open in new Tab', 'ctx-blocks'),
    checked: newTab,
    onChange: value => setAttributes({
      newTab: !newTab
    })
  })), action == 'script' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Script', 'ctx-blocks'),
    value: script,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Select a script', 'ctx-blocks'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Toggle Element', 'ctx-blocks'),
      value: 'toggle'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Hide Element', 'ctx-blocks'),
      value: 'hide'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Element', 'ctx-blocks'),
      value: 'show'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Scroll to Element', 'ctx-blocks'),
      value: 'scroll'
    }],
    onChange: value => {
      setAttributes({
        script: value
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Element ID', 'ctx-blocks'),
    value: scriptTarget,
    onChange: value => {
      setAttributes({
        scriptTarget: value
      });
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/card/deprecated.js":
/*!***************************************!*\
  !*** ./src/blocks/card/deprecated.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var colord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! colord */ "./node_modules/colord/index.mjs");



const migrateAttributes = attributes => {
  var _attributes$image$url, _attributes$image$id;
  console.log(attributes);
  console.log('migrating (shouldn`t happen)', attributes);
  attributes.imageUrl = (_attributes$image$url = attributes.image?.url) !== null && _attributes$image$url !== void 0 ? _attributes$image$url : '';
  attributes.imageId = (_attributes$image$id = attributes.image?.id) !== null && _attributes$image$id !== void 0 ? _attributes$image$id : 0;
  delete attributes.image;
  delete attributes.imageRound;
  delete attributes.imageWidth;
  delete attributes.imageBorder;
  delete attributes.isFirst;
  delete attributes.isLast;
  return attributes;
};
const deprecated = [{
  attributes: {
    secondaryColor: {
      type: 'string',
      default: ''
    },
    customSecondaryColor: {
      type: 'string',
      default: ''
    },
    backgroundColor: {
      type: 'string',
      default: ''
    },
    customBackgroundColor: {
      type: 'string',
      default: ''
    },
    shadow: {
      type: 'boolean',
      default: true
    },
    focalPoint: {
      type: 'object'
    },
    url: {
      type: 'string',
      default: ''
    },
    hover: {
      type: 'boolean',
      default: false
    },
    textAlign: {
      type: 'string',
      default: 'left'
    },
    imageUrl: {
      type: 'string',
      default: ''
    },
    imageAlt: {
      type: 'string',
      default: ''
    },
    imageId: {
      type: 'number',
      default: 0
    },
    imagePosition: {
      type: 'string',
      default: 'top'
    },
    label: {
      type: 'string',
      default: ''
    },
    badge: {
      type: 'string',
      default: ''
    },
    anchor: {
      type: 'string'
    }
  },
  migrate: function (attributes) {
    console.log('migrating', attributes);
    attributes.labelText = attributes.label;
    attributes.badgeText = attributes.badge;
    attributes.hasBadge = !!attributes.badge;
    attributes.hasLabel = !!attributes.label;
    delete attributes.label;
    delete attributes.badge;
    return attributes;
  },
  save: function (props) {
    var _blockProps$style$pad, _blockProps$style$pad2, _blockProps$style$pad3, _blockProps$style$pad4;
    console.log('saving', props);
    const {
      attributes,
      className,
      children
    } = props;
    const {
      imagePosition,
      textAlign,
      label,
      badge,
      hover,
      imageId,
      imageUrl,
      shadow,
      url,
      style,
      backgroundColor,
      secondaryColor,
      customBackgroundColor,
      customSecondaryColor
    } = attributes;
    const backgroundColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.getColorClassName)('background-color', backgroundColor);
    const secondaryColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.getColorClassName)('background-color', secondaryColor);
    const classes = [className, 'ctx-card', backgroundColorClass, url || hover ? 'ctx-card-hover' : false, shadow ? 'ctx-card-shadow' : false, `ctx-card-${textAlign}`, `ctx-card-image-${imagePosition}`].filter(Boolean).join(' ');
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: classes
    });
    const contentStyle = {
      paddingTop: (_blockProps$style$pad = blockProps.style?.paddingTop) !== null && _blockProps$style$pad !== void 0 ? _blockProps$style$pad : '1rem',
      paddingBottom: (_blockProps$style$pad2 = blockProps.style?.paddingBottom) !== null && _blockProps$style$pad2 !== void 0 ? _blockProps$style$pad2 : '1rem',
      paddingLeft: (_blockProps$style$pad3 = blockProps.style?.paddingLeft) !== null && _blockProps$style$pad3 !== void 0 ? _blockProps$style$pad3 : '1rem',
      paddingRight: (_blockProps$style$pad4 = blockProps.style?.paddingRight) !== null && _blockProps$style$pad4 !== void 0 ? _blockProps$style$pad4 : '1rem'
    };
    const accentStyle = {
      background: customSecondaryColor,
      color: (0,colord__WEBPACK_IMPORTED_MODULE_2__.colord)(customSecondaryColor).isDark() ? '#ffffff' : '#000000'
    };
    const cardStyle = {
      ...blockProps.style,
      backgroundColor: !backgroundColorClass ? customBackgroundColor : undefined,
      padding: '0 !important'
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps,
      style: cardStyle,
      className: classes
    }, !!badge && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", {
      className: "ctx-card-badge",
      style: accentStyle
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, badge)), imageUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ctx-card-image"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imageUrl !== null && imageUrl !== void 0 ? imageUrl : ''
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ctx-card-content",
      style: contentStyle
    }, !!label && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "ctx-card-label",
      style: accentStyle
    }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save({
        className: 'wp-block-card__inner-container'
      })
    })));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var colord__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! colord */ "./node_modules/colord/index.mjs");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/blocks/card/inspector.js");
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar */ "./src/blocks/card/toolbar.js");







function CardEdit({
  ...props
}) {
  var _backgroundColor$colo, _secondaryColor$color, _blockProps$style$pad, _blockProps$style$pad2, _blockProps$style$pad3, _blockProps$style$pad4;
  const {
    attributes: {
      imagePosition,
      textAlign,
      hover,
      imageId,
      imageUrl,
      shadow,
      url,
      badgeText,
      labelText,
      hasBadge,
      hasLabel,
      customBackgroundColor,
      customSecondaryColor
    },
    backgroundColor,
    secondaryColor,
    setAttributes,
    __unstableLayoutClassNames: layoutClassNames
  } = props;
  console.log('edit', props);
  const allowedBlocks = ['core/spacer', 'core/separator', 'core/paragraph', 'core/heading', 'core/list', 'core/group', 'ctx-blocks/progress', 'events-manager/details', 'events-manager/booking', !url ? 'ctx-blocks/button' : false];
  const imageRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  const onSelectMedia = media => {
    var _media$sizes$large$ur;
    if (!media || !media.url) {
      setAttributes({
        imageUrl: undefined,
        imageId: undefined
      });
      return;
    }
    setAttributes({
      imageUrl: (_media$sizes$large$ur = media.sizes?.large?.url) !== null && _media$sizes$large$ur !== void 0 ? _media$sizes$large$ur : media.url,
      imageId: media.id
    });
  };
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
  const backgroundColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.getColorClassName)('background-color', backgroundColor);
  const secondaryColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.getColorClassName)('background-color', secondaryColor);
  const backgroundColorValue = customBackgroundColor ? customBackgroundColor : (_backgroundColor$colo = backgroundColor.color) !== null && _backgroundColor$colo !== void 0 ? _backgroundColor$colo : '';
  const secondaryColorValue = customSecondaryColor ? customSecondaryColor : (_secondaryColor$color = secondaryColor.color) !== null && _secondaryColor$color !== void 0 ? _secondaryColor$color : 'var(--primary)';
  const secondaryStyle = {
    background: secondaryColorValue,
    color: (0,colord__WEBPACK_IMPORTED_MODULE_6__.colord)(secondaryColorValue).isDark() ? '#ffffff' : '#000000'
  };
  const innerBlockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps)({}, {
    allowedBlocks,
    template
  });
  const classes = ['ctx-card', backgroundColorClass, url || hover ? 'ctx-card-hover' : false, shadow ? 'ctx-card-shadow' : false, `ctx-card-${textAlign}`, `ctx-card-image-${imagePosition}`].filter(Boolean).join(' ');
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: classes
  });
  const cardStyle = {
    ...blockProps.style,
    backgroundColor: backgroundColorValue,
    padding: '0 !important'
  };
  const contentStyle = {
    paddingTop: (_blockProps$style$pad = blockProps.style?.paddingTop) !== null && _blockProps$style$pad !== void 0 ? _blockProps$style$pad : '1rem',
    paddingBottom: (_blockProps$style$pad2 = blockProps.style?.paddingBottom) !== null && _blockProps$style$pad2 !== void 0 ? _blockProps$style$pad2 : '1rem',
    paddingLeft: (_blockProps$style$pad3 = blockProps.style?.paddingLeft) !== null && _blockProps$style$pad3 !== void 0 ? _blockProps$style$pad3 : '1rem',
    paddingRight: (_blockProps$style$pad4 = blockProps.style?.paddingRight) !== null && _blockProps$style$pad4 !== void 0 ? _blockProps$style$pad4 : '1rem'
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ...props,
    imageRef: imageRef
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_toolbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ...props,
    onSelectMedia: onSelectMedia
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    style: cardStyle
  }, !!hasBadge && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: `ctx-card-badge ${secondaryColorClass}`,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Badge', 'ctx-blocks'),
    value: badgeText,
    onChange: value => setAttributes({
      badgeText: value
    }),
    style: secondaryStyle
  }), imageUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    ref: imageRef,
    src: imageUrl !== null && imageUrl !== void 0 ? imageUrl : ''
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-card-content",
    style: contentStyle
  }, !!hasLabel && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: `ctx-card-label ${secondaryColorClass}`,
    tagName: "label",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Label', 'ctx-blocks'),
    value: labelText,
    onChange: value => setAttributes({
      labelText: value
    }),
    style: secondaryStyle
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlockProps
  }))));
}

/***/ }),

/***/ "./src/blocks/card/icons.js":
/*!**********************************!*\
  !*** ./src/blocks/card/icons.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


let icons = [];
icons.card = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/SVG",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}));
icons.topimage = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 64 64",
  xmlns: "http://www.w3.org/2000/SVG",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinecap: "square",
  strokeLinejoin: "round",
  strokeMiterlimit: 1.5
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "#898989",
  d: "M15.512 26.113h34.371v32.809H15.512z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "#fff",
  d: "M15.512 3.627h34.371v22.486H15.512z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M49.883 3.627H15.512v22.486h34.371V3.627zm-1 1v20.486H16.512V4.627h32.371z",
  fill: "#898989"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M25.64 17.094l7.001 6.417H18.636l7.003-6.417z",
  fill: "#898989"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M37.022 12.575l9.736 10.936H27.285l9.737-10.936z",
  fill: "#898989"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.031 30.019H39.84M20.031 36.163h22.598M20.031 42.518h18.19",
  fill: "none",
  stroke: "#fff"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M46.256 52.464a.795.795 0 00-.795-.795h-9.625a.795.795 0 00-.795.795v1.59c0 .439.356.795.795.795h9.625a.795.795 0 00.795-.795v-1.59z",
  fill: "#fff"
}));
icons.bottomimage = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 64 64",
  xmlns: "http://www.w3.org/2000/SVG",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinecap: "square",
  strokeLinejoin: "round",
  strokeMiterlimit: 1.5
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "#898989",
  d: "M15.456 4.817h34.371v32.81h-34.37z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "#fff",
  d: "M15.512 37.627h34.371v22.486H15.512z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M49.883 37.627H15.512v22.486h34.371V37.627zm-1 1v20.486H16.512V38.627h32.371z",
  fill: "#898989"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M25.64 51.094l7.001 6.417H18.636l7.003-6.417z",
  fill: "#898989"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M37.022 46.575l9.736 10.936H27.285l9.737-10.936z",
  fill: "#898989"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19.975 8.723h19.81M19.975 14.867h22.598M19.975 21.222h18.19",
  fill: "none",
  stroke: "#fff"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M46.2 31.168a.795.795 0 00-.795-.795H35.78a.795.795 0 00-.795.795v1.59c0 .44.356.795.795.795h9.625a.795.795 0 00.795-.795v-1.59z",
  fill: "#fff"
})));
icons.leftimage = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 64 64",
  xmlns: "http://www.w3.org/2000/SVG",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinecap: "square",
  strokeLinejoin: "round",
  strokeMiterlimit: 1.5
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "#898989",
  d: "M30.28 15.595h29.852v32.81H30.28z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "#fff",
  d: "M3.493 15.596H30.28v32.808H3.493z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M30.28 15.596H3.493v32.808H30.28V15.596zm-1 1v30.809H4.493v-30.81H29.28z",
  fill: "#898989"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11.255 41.234l5.587 4.777H5.667l5.588-4.777z",
  fill: "#898989"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.337 37.87l7.769 8.14H12.568l7.77-8.14z",
  fill: "#898989"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M33.907 22.483h19.809M33.907 28.627h22.598M33.907 34.982h18.19",
  fill: "none",
  stroke: "#fff"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M56.505 41.946a.795.795 0 00-.795-.795h-9.625a.795.795 0 00-.795.795v1.59c0 .44.356.795.795.795h9.625a.795.795 0 00.795-.795v-1.59z",
  fill: "#fff"
})));
icons.rightimage = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 64 64",
  xmlns: "http://www.w3.org/2000/SVG",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinecap: "square",
  strokeLinejoin: "round",
  strokeMiterlimit: 1.5
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "#898989",
  d: "M4.28 15.595h29.852v32.81H4.28z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fill: "#fff",
  d: "M34.132 15.596H60.92v32.808H34.132z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M60.92 15.596H34.131v32.808H60.92V15.596zm-1 1v30.809H35.131v-30.81h24.787z",
  fill: "#898989"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M41.894 41.234l5.587 4.777H36.306l5.588-4.777z",
  fill: "#898989"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M50.976 37.87l7.769 8.14H43.207l7.77-8.14z",
  fill: "#898989"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7.907 22.483h19.809M7.907 28.627h22.598M7.907 34.982h18.19",
  fill: "none",
  stroke: "#fff"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M30.505 41.946a.795.795 0 00-.795-.795h-9.625a.795.795 0 00-.795.795v1.59c0 .44.356.795.795.795h9.625a.795.795 0 00.795-.795v-1.59z",
  fill: "#fff"
})));
icons.url = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/SVG",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
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
/* harmony export */   name: function() { return /* binding */ name; },
/* harmony export */   settings: function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/card/block.json");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deprecated */ "./src/blocks/card/deprecated.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/card/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/card/editor.scss");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./src/blocks/card/icons.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/card/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/card/style.scss");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
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
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_0__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)(description, 'ctx-blocks'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].card,
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.withColors)({
    backgroundColor: 'backgroundColor',
    secondaryColor: 'secondaryColor'
  })(_edit__WEBPACK_IMPORTED_MODULE_2__["default"]),
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
};


/***/ }),

/***/ "./src/blocks/card/inspector.js":
/*!**************************************!*\
  !*** ./src/blocks/card/inspector.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons.js */ "./src/blocks/card/icons.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../common/utils/mediaPosition.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






const Inspector = props => {
  const {
    attributes: {
      imagePosition,
      hover,
      transparent,
      url,
      imageUrl,
      shadow,
      focalPoint,
      customSecondaryColor,
      hasBadge,
      hasLabel
    },
    setAttributes,
    imageRef,
    backgroundColor,
    setBackgroundColor,
    secondaryColor,
    setSecondaryColor
  } = props;
  const imperativeFocalPointPreview = value => {
    const [styleOfRef, property] = imageRef.current ? [imageRef.current.style, 'objectPosition'] : [imageRef.current.style, 'backgroundPosition'];
    styleOfRef[property] = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../common/utils/mediaPosition.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Color settings', 'ctx-blocks'),
    initialOpen: false,
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background color', 'ctx-blocks'),
      onChange: setBackgroundColor,
      value: backgroundColor.color,
      disableCustomColors: false,
      defaultPalette: false,
      enableAlpha: true
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Secondary color', 'ctx-blocks'),
      onChange: setSecondaryColor,
      value: secondaryColor.color,
      disableCustomColors: false,
      defaultPalette: false
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Appearance', 'ctx-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Shadow', 'ctx-blocks'),
    checked: shadow,
    onChange: value => {
      setAttributes({
        shadow: value
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Label', 'ctx-blocks'),
    checked: hasLabel,
    onChange: value => {
      setAttributes({
        hasLabel: value
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Badge', 'ctx-blocks'),
    checked: hasBadge,
    onChange: value => {
      setAttributes({
        hasBadge: value
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image', 'ctx-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FocalPointPicker, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Focal point picker'),
    url: imageUrl,
    value: focalPoint,
    onDragStart: imperativeFocalPointPreview,
    onDrag: imperativeFocalPointPreview,
    onChange: newFocalPoint => setAttributes({
      focalPoint: newFocalPoint
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "components-base-control__label",
    htmlFor: "inspector-range-control-4"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image position', 'ctx-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "imagePositionSelector"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      imagePosition: 'top'
    }),
    className: imagePosition == 'top' ? 'active' : ''
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    size: "64",
    className: "icon",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_4__["default"].topimage
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('top', 'ctx-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      imagePosition: 'bottom'
    }),
    className: imagePosition == 'bottom' ? 'active' : ''
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    size: "64",
    className: "icon",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_4__["default"].bottomimage
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('bottom', 'ctx-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      imagePosition: 'left'
    }),
    className: imagePosition == 'left' ? 'active' : ''
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    size: "64",
    className: "icon",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_4__["default"].leftimage
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('left', 'ctx-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      imagePosition: 'right'
    }),
    className: imagePosition == 'right' ? 'active' : ''
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    size: "64",
    className: "icon",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_4__["default"].rightimage
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('right', 'ctx-blocks'))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Behaviour', 'ctx-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Link', 'ctx-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInput, {
    value: url,
    onChange: (url, post) => setAttributes({
      url,
      text: post && post.title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Click here...', 'ctx-blocks')
    })
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/card/save.js":
/*!*********************************!*\
  !*** ./src/blocks/card/save.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var colord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! colord */ "./node_modules/colord/index.mjs");



const CardSave = props => {
  var _blockProps$style$pad, _blockProps$style$pad2, _blockProps$style$pad3, _blockProps$style$pad4;
  const {
    attributes,
    children
  } = props;
  const {
    imagePosition,
    textAlign,
    labelText,
    badgeText,
    hasLabel,
    hasBadge,
    hover,
    imageId,
    imageUrl,
    shadow,
    url,
    backgroundColor,
    secondaryColor,
    customBackgroundColor,
    customSecondaryColor
  } = attributes;
  console.log('SAVE', props);
  const backgroundColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.getColorClassName)('background-color', backgroundColor);
  const classes = ['ctx-card', backgroundColorClass, url || hover ? 'ctx-card-hover' : false, shadow ? 'ctx-card-shadow' : false, `ctx-card-${textAlign}`, `ctx-card-image-${imagePosition}`].filter(Boolean).join(' ');
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: classes
  });

  // Temporary hack until selectors work (see block.json)
  const contentStyle = {
    paddingTop: (_blockProps$style$pad = blockProps.style?.paddingTop) !== null && _blockProps$style$pad !== void 0 ? _blockProps$style$pad : '1rem',
    paddingBottom: (_blockProps$style$pad2 = blockProps.style?.paddingBottom) !== null && _blockProps$style$pad2 !== void 0 ? _blockProps$style$pad2 : '1rem',
    paddingLeft: (_blockProps$style$pad3 = blockProps.style?.paddingLeft) !== null && _blockProps$style$pad3 !== void 0 ? _blockProps$style$pad3 : '1rem',
    paddingRight: (_blockProps$style$pad4 = blockProps.style?.paddingRight) !== null && _blockProps$style$pad4 !== void 0 ? _blockProps$style$pad4 : '1rem'
  };
  const accentStyle = {
    background: customSecondaryColor,
    color: (0,colord__WEBPACK_IMPORTED_MODULE_2__.colord)(customSecondaryColor).isDark() ? '#ffffff' : '#000000'
  };
  const accentClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.getColorClassName)('background-color', secondaryColor);
  const cardStyle = {
    ...blockProps.style,
    backgroundColor: !backgroundColorClass ? customBackgroundColor : undefined,
    padding: '0 !important'
  };
  const Tag = url ? 'a' : 'div';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
    ...blockProps,
    style: cardStyle,
    href: url ? url : undefined
  }, hasBadge && !!badgeText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", {
    className: `ctx-card-badge ${accentClass}`,
    style: accentStyle
  }, badgeText), imageUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-card-image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageUrl !== null && imageUrl !== void 0 ? imageUrl : ''
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-card-content",
    style: contentStyle
  }, hasLabel && !!labelText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: `ctx-card-label ${accentClass}`,
    style: accentStyle
  }, labelText), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save({
      className: 'wp-block-card__inner-container'
    })
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (CardSave);

/***/ }),

/***/ "./src/blocks/card/toolbar.js":
/*!************************************!*\
  !*** ./src/blocks/card/toolbar.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const ALLOWED_MEDIA_TYPES = ['image', 'video'];
const Toolbar = props => {
  const {
    attributes,
    setAttributes,
    onSelectMedia
  } = props;
  const {
    textAlign,
    imageId,
    imageUrl
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.AlignmentToolbar, {
    value: textAlign,
    onChange: event => setAttributes({
      textAlign: event
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
    group: "other"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaReplaceFlow, {
    mediaId: imageId,
    mediaURL: imageUrl,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    accept: "image/*,video/*",
    onSelect: onSelectMedia,
    name: !imageUrl ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add Media', 'ctx-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace')
  }), imageUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    icon: "trash",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Remove Media', 'ctx-blocks'),
    onClick: () => {
      setAttributes({
        imageId: 0,
        imageUrl: '',
        focalPoint: undefined
      });
    }
  })));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/conditional/inspector.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Internal dependencies
 */

/**
 * Wordpress dependencies
 */

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
function edit({
  ...props
}) {
  const {
    clientId
  } = props;
  const {
    fromDate,
    toDate,
    hideWithinDateRange,
    usersOnly
  } = props.attributes;
  const template = [['core/paragraph']];
  const hisHiddenByDate = () => {
    if (!fromDate && !toDate) {
      return false;
    }
    const now = new Date();
    const from = fromDate ? new Date(fromDate) : new Date('1970-01-01');
    const to = toDate ? new Date(toDate) : new Date('2100-01-01');
    const withinDateRange = now >= from && now <= to;
    return hideWithinDateRange ? withinDateRange : !withinDateRange;
  };
  const classes = ['ctx:conditional', usersOnly ? 'ctx:conditional__logged-in' : '', hisHiddenByDate() ? 'ctx:conditional__unscheduled' : ''].join(' ');
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classes
  });
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)({
    className: 'ctx:contitional__inner'
  }, {
    template
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocksProps
  }));
}

/***/ }),

/***/ "./src/blocks/conditional/icon.js":
/*!****************************************!*\
  !*** ./src/blocks/conditional/icon.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 96 960 960"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M450 976V776q0-48-16-79t-49-64l43-43q13 11 27.5 30t24.5 35q17-26 33.5-45t31.5-32q58-47 83.5-113.5T648 290l-90 90-42-42 162-162 162 162-42 42-90-90q5 126-24.5 198.5T585 624q-44 40-59.5 73T510 776v200h-60ZM258 420q-4-18-6.5-52.5T251 291l-89 89-42-42 162-162 162 162-42 42-90-90q-2 38-1 66.5t5 49.5l-58 14Zm84 171q-17-18-37.5-47.5T273 479l59-15q9 25 24 48t28 37l-42 42Z"
})));

/***/ }),

/***/ "./src/blocks/conditional/icons.js":
/*!*****************************************!*\
  !*** ./src/blocks/conditional/icons.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const icons = {
  show: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M480.118 726Q551 726 600.5 676.382q49.5-49.617 49.5-120.5Q650 485 600.382 435.5q-49.617-49.5-120.5-49.5Q409 386 359.5 435.618q-49.5 49.617-49.5 120.5Q310 627 359.618 676.5q49.617 49.5 120.5 49.5Zm-.353-58Q433 668 400.5 635.265q-32.5-32.736-32.5-79.5Q368 509 400.735 476.5q32.736-32.5 79.5-32.5Q527 444 559.5 476.735q32.5 32.736 32.5 79.5Q592 603 559.265 635.5q-32.736 32.5-79.5 32.5ZM480 856q-146 0-264-83T40 556q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83Zm0-300Zm-.169 240Q601 796 702.5 730.5 804 665 857 556q-53-109-154.331-174.5-101.332-65.5-222.5-65.5Q359 316 257.5 381.5 156 447 102 556q54 109 155.331 174.5 101.332 65.5 222.5 65.5Z"
  })),
  hide: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m629 637-44-44q26-71-27-118t-115-24l-44-44q17-11 38-16t43-5q71 0 120.5 49.5T650 556q0 22-5.5 43.5T629 637Zm129 129-40-40q49-36 85.5-80.5T857 556q-50-111-150-175.5T490 316q-42 0-86 8t-69 19l-46-47q35-16 89.5-28T485 256q143 0 261.5 81.5T920 556q-26 64-67 117t-95 93Zm58 226L648 827q-35 14-79 21.5t-89 7.5q-146 0-265-81.5T40 556q20-52 55.5-101.5T182 360L56 234l42-43 757 757-39 44ZM223 402q-37 27-71.5 71T102 556q51 111 153.5 175.5T488 796q33 0 65-4t48-12l-64-64q-11 5-27 7.5t-30 2.5q-70 0-120-49t-50-121q0-15 2.5-30t7.5-27l-97-97Zm305 142Zm-116 58Z"
  })),
  user: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M753 807q27.917 0 47.458-19.559Q820 767.882 820 739.941T800.458 693Q780.917 674 753 674q-27.5 0-46.75 19.353t-19.25 47Q687 768 706.25 787.5T753 807Zm-.214 133Q786 940 815 924.5t47-42.5q-26-14-53-22.5t-56-8.5q-29 0-56 8.5T644 882q18 27 46.786 42.5 28.785 15.5 62 15.5ZM350 422h260v-93q0-57-37.5-95T480 196q-55 0-92.5 38T350 329v93Zm207 554H220q-23 0-41.5-18.5T160 916V482q0-23 18.5-41.5T220 422h70v-93q0-81 55-137t135-56q80 0 135 56t55 137v93h70q23 0 41.5 18.5T800 482v87q-13-3-27-4t-33-1v-82H220v434h301q7 17 15 30.5t21 29.5Zm196 34q-79 0-136-57t-57-136q0-79 57-136t136-57q79 0 136 57t57 136q0 79-57 136t-136 57ZM220 482v434-434Z"
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/blocks/conditional/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/conditional/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   name: function() { return /* binding */ name; },
/* harmony export */   settings: function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/conditional/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/conditional/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/conditional/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/blocks/conditional/icon.js");
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
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(description, 'ctx-blocks'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.Content, null);
  }
};


/***/ }),

/***/ "./src/blocks/conditional/inspector.js":
/*!*********************************************!*\
  !*** ./src/blocks/conditional/inspector.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons.js */ "./src/blocks/conditional/icons.js");

/**
 * Wordpress Dependencies
 */




const Inspector = props => {
  const {
    attributes: {
      fromDate,
      toDate,
      usersOnly,
      hideWithinDateRange,
      showLoginNotice,
      includeLoginForm,
      loginNotice
    },
    setAttributes
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Date', 'ctx-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "styleSelector"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      hideWithinDateRange: true
    }),
    className: hideWithinDateRange ? 'active' : ''
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    size: "40",
    className: "icon",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_4__["default"].hide
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Hide', 'ctx-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      hideWithinDateRange: false
    }),
    className: hideWithinDateRange ? '' : 'active'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    size: "40",
    className: "icon",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_4__["default"].show
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show', 'ctx-blocks')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: fromDate,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('From', 'ctx-blocks'),
    onChange: newDate => setAttributes({
      fromDate: newDate
    }),
    is12Hour: false,
    type: "date"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('To', 'ctx-blocks'),
    value: toDate,
    onChange: newDate => setAttributes({
      toDate: newDate
    }),
    is12Hour: false,
    type: "date"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Access Control', 'ctx-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show only to logged in users', 'ctx-blocks'),
    checked: usersOnly,
    onChange: value => setAttributes({
      usersOnly: !usersOnly
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show login notice', 'ctx-blocks'),
    checked: showLoginNotice,
    onChange: value => setAttributes({
      showLoginNotice: !showLoginNotice
    })
  }), showLoginNotice && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Login notice', 'ctx-blocks'),
    value: loginNotice,
    onChange: value => setAttributes({
      loginNotice: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Include login form', 'ctx-blocks'),
    checked: includeLoginForm,
    onChange: value => setAttributes({
      includeLoginForm: !includeLoginForm
    })
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/description-item/edit.js":
/*!*********************************************!*\
  !*** ./src/blocks/description-item/edit.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/description-item/inspector.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);

/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */


function ItemEdit({
  ...props
}) {
  var _ref, _iconColor$color, _ref2, _iconBackgroundColor$;
  const {
    attributes: {
      image,
      icon,
      roundImage,
      styleVariation,
      url,
      urlIcon
    },
    iconColor,
    customIconColor,
    customIconBackgroundColor,
    iconBackgroundColor,
    className
  } = props;
  const classes = [className, 'ctx__description-item'].filter(Boolean).join(' ');
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classes
  });
  const iconStyle = {
    color: (_ref = (_iconColor$color = iconColor?.color) !== null && _iconColor$color !== void 0 ? _iconColor$color : customIconColor) !== null && _ref !== void 0 ? _ref : 'none',
    backgroundColor: (_ref2 = (_iconBackgroundColor$ = iconBackgroundColor?.color) !== null && _iconBackgroundColor$ !== void 0 ? _iconBackgroundColor$ : customIconBackgroundColor) !== null && _ref2 !== void 0 ? _ref2 : 'none',
    borderRadius: roundImage ? '50%' : '0'
  };
  const iconClasses = [styleVariation === 'icon' && 'ctx__description-item__icon', styleVariation === 'bullet' && 'ctx__description-item__bullet', (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', iconColor), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('background-color', iconBackgroundColor)].join(' ');
  const TEMPLATE = [['core/heading', {
    placeholder: 'Title',
    level: 4,
    className: 'title',
    style: {
      spacing: {
        margin: {
          top: '0px',
          bottom: '0px'
        }
      }
    }
  }], ['core/paragraph', {
    placeholder: 'Description'
  }]];
  const innerBlockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)({
    className: 'ctx__description-item__content'
  }, {
    template: TEMPLATE,
    allowedBlocks: ['core/paragraph', 'core/heading']
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), styleVariation == 'image' && image && image.subtype != 'svg+xml' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: roundImage ? 'round' : '',
    src: image.sizes.thumbnail.url,
    style: iconStyle
  }), styleVariation == 'icon' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: iconClasses,
    style: iconStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "material-icons"
  }, icon)), styleVariation == 'bullet' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: iconClasses,
    style: iconStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "material-icons"
  }, icon ? icon : 'label')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx__description-item__content",
    ...innerBlockProps
  }), url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "ctx__description-item__action"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: "material-icons"
  }, urlIcon)))));
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.withColors)({
  iconColor: 'icon-color',
  iconBackgroundColor: 'background-color'
})])(ItemEdit));

/***/ }),

/***/ "./src/blocks/description-item/icon.js":
/*!*********************************************!*\
  !*** ./src/blocks/description-item/icon.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/blocks/description-item/icons.js":
/*!**********************************************!*\
  !*** ./src/blocks/description-item/icons.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const icons = {
  image: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "96",
    viewBox: "0 -960 960 960",
    width: "96"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z"
  })),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "96",
    viewBox: "0 -960 960 960",
    width: "96"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M260-280q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T320-340q0 26-17.5 43T260-280Zm0-280q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T320-620q0 26-17.5 43T260-560Zm140 120v-80h160v80H400Zm288 200-66-44q28-43 43-92.5T680-480q0-66-21.5-124T598-709l61-51q48 57 74.5 128.5T760-480q0 67-19 127.5T688-240Z"
  })),
  bullet: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "96",
    viewBox: "0 -960 960 960",
    width: "96"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M840-480 666-234q-11 16-28.5 25t-37.5 9H200q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h400q20 0 37.5 9t28.5 25l174 246Zm-98 0L600-680H200v400h400l142-200Zm-542 0v200-400 200Z"
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/blocks/description-item/index.js":
/*!**********************************************!*\
  !*** ./src/blocks/description-item/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   name: function() { return /* binding */ name; },
/* harmony export */   settings: function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/description-item/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/description-item/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/description-item/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/blocks/description-item/icon.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/description-item/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/description-item/style.scss");
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
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_0__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(description, 'ctx-blocks'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
};


/***/ }),

/***/ "./src/blocks/description-item/inspector.js":
/*!**************************************************!*\
  !*** ./src/blocks/description-item/inspector.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./src/blocks/description-item/icons.js");





const Inspector = props => {
  const {
    attributes,
    setAttributes,
    iconColor,
    iconBackgroundColor,
    setIconColor,
    setIconBackgroundColor
  } = props;
  const {
    image,
    roundImage,
    url,
    urlIcon,
    icon,
    styleVariation
  } = attributes;
  console.log(props.attributes);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Behaviour', 'ctx-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Link', 'ctx-blocks'),
    value: url,
    onChange: value => setAttributes({
      url: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icon for Link', 'ctx-blocks'),
    value: urlIcon,
    onChange: value => setAttributes({
      urlIcon: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image', 'ctx-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx-style-selector"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      styleVariation: 'image'
    }),
    className: styleVariation === 'image' ? 'active' : ''
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    size: "64",
    className: "icon",
    icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].image
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image', 'ctx-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      styleVariation: 'icon'
    }),
    className: styleVariation === 'icon' ? 'active' : ''
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    size: "64",
    className: "icon",
    icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].icon
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icon', 'ctx-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      styleVariation: 'bullet'
    }),
    className: styleVariation === 'bullet' ? 'active' : ''
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    size: "64",
    className: "icon",
    icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].bullet
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bullet', 'ctx-blocks')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: media => setAttributes({
      image: media
    }),
    label: "Bild",
    value: image,
    render: ({
      open
    }) => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "editor-post-featured-image ctx-image-select"
      }, !image && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        type: "button",
        className: "components-button editor-post-featured-image__toggle",
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Choose image', 'ctx-blocks')), image && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: "",
        src: image.url,
        onClick: open,
        alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No image loaded', 'ctx-blocks')
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        type: "button",
        className: "components-button is-button is-default is-large",
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace image', 'ctx-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        type: "button",
        className: "components-button is-link is-destructive",
        onClick: () => setAttributes({
          image: null
        })
      }, ' ', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Remove image', 'ctx-blocks'))));
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Rounded', 'ctx-blocks'),
    checked: roundImage,
    onChange: value => setAttributes({
      roundImage: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icon', 'ctx-blocks'),
    value: icon,
    onChange: value => setAttributes({
      icon: value
    })
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Color settings', 'ctx-blocks'),
    initialOpen: false,
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icon color', 'ctx-blocks'),
      onChange: setIconColor,
      value: iconColor.color,
      disableCustomColors: false,
      clearable: true,
      defaultPalette: false,
      enableAlpha: true
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background color', 'ctx-blocks'),
      onChange: setIconBackgroundColor,
      value: iconBackgroundColor.color,
      clearable: true,
      disableCustomColors: false,
      defaultPalette: false
    }]
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/description-item/save.js":
/*!*********************************************!*\
  !*** ./src/blocks/description-item/save.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

function Save({
  ...props
}) {
  var _ref, _iconColor$color, _ref2, _iconBackgroundColor$;
  const {
    attributes: {
      text,
      contentType,
      image,
      icon,
      roundImage,
      styleVariation,
      title,
      url,
      urlIcon,
      iconColor,
      customIconColor,
      iconBackgroundColor,
      customIconBackgroundColor
    },
    setAttributes,
    className
  } = props;
  const classes = [className, 'ctx__description-item'].filter(Boolean).join(' ');
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: classes
  });
  const iconStyle = {
    color: (_ref = (_iconColor$color = iconColor?.color) !== null && _iconColor$color !== void 0 ? _iconColor$color : customIconColor) !== null && _ref !== void 0 ? _ref : 'none',
    backgroundColor: (_ref2 = (_iconBackgroundColor$ = iconBackgroundColor?.color) !== null && _iconBackgroundColor$ !== void 0 ? _iconBackgroundColor$ : customIconBackgroundColor) !== null && _ref2 !== void 0 ? _ref2 : 'none',
    borderRadius: roundImage ? '50%' : '0'
  };
  const iconClasses = [styleVariation === 'icon' && 'ctx__description-item__icon', styleVariation === 'bullet' && 'ctx__description-item__bullet', (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.getColorClassName)('color', iconColor), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.getColorClassName)('background-color', iconBackgroundColor)].join(' ');
  console.log(props.attributes);
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, styleVariation === 'image' && image && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    style: iconStyle,
    src: image?.sizes?.thumbnail?.url,
    alt: title
  }), styleVariation === 'icon' && icon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: iconStyle,
    className: iconClasses
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "material-icons"
  }, icon)), styleVariation === 'bullet' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: iconClasses,
    style: iconStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "material-icons"
  }, icon ? icon : 'label')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocksProps,
    className: "ctx__description-item__content"
  }), url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "ctx__description-item__link",
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, urlIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "material-icons"
  }, urlIcon)));
}

/***/ }),

/***/ "./src/blocks/description-list/edit.js":
/*!*********************************************!*\
  !*** ./src/blocks/description-list/edit.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/description-list/inspector.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

function Edit({
  ...props
}) {
  const allowedBlocks = ['ctx-blocks/description-item'];
  const {
    attributes: {
      dividers
    },
    className
  } = props;
  const classes = ['ctx:description__wrapper', className, dividers ? 'ctx-description--divider' : false].filter(Boolean).join(' ');
  const template = [['ctx-blocks/description-item']];
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classes
  });
  const innerBlockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)({}, {
    allowedBlocks,
    template,
    templateLock: false
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlockProps
  })));
}

/***/ }),

/***/ "./src/blocks/description-list/icon.js":
/*!*********************************************!*\
  !*** ./src/blocks/description-list/icon.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/blocks/description-list/index.js":
/*!**********************************************!*\
  !*** ./src/blocks/description-list/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   name: function() { return /* binding */ name; },
/* harmony export */   settings: function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/description-list/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/description-list/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/description-list/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/blocks/description-list/icon.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/description-list/save.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
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
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_0__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(description, 'ctx-blocks'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
};


/***/ }),

/***/ "./src/blocks/description-list/inspector.js":
/*!**************************************************!*\
  !*** ./src/blocks/description-list/inspector.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const Inspector = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    dividers
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Appearance', 'ctx-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Lines as separators', 'ctx-blocks'),
    checked: dividers,
    onChange: event => setAttributes({
      dividers: event
    })
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/description-list/save.js":
/*!*********************************************!*\
  !*** ./src/blocks/description-list/save.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

function Save({
  ...props
}) {
  const {
    attributes: {
      dividers
    },
    className
  } = props;
  const classes = ['ctx:description__wrapper', className, dividers ? 'ctx-description--divider' : false].filter(Boolean).join(' ');
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: classes
  });
  const innerBlockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save(blockProps);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlockProps
  });
}

/***/ }),

/***/ "./src/blocks/grid-column/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/grid-column/edit.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GridColumnEdit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/grid-column/inspector.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



function GridColumnEdit({
  ...props
}) {
  const {
    attributes: {
      widthLarge
    },
    className
  } = props;
  const TEMPLATE = [['core/paragraph', {}]];
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: className + ` ctx:column ctx:column--${widthLarge}`
  });
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(blockProps, {
    template: TEMPLATE
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocksProps
  }));
}

/***/ }),

/***/ "./src/blocks/grid-column/icons.js":
/*!*****************************************!*\
  !*** ./src/blocks/grid-column/icons.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


let icons = [];
icons.column = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/SVG",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}));
icons.zoom = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/SVG",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15,3l2.3,2.3l-2.89,2.87l1.42,1.42L18.7,6.7L21,9V3H15z M3,9l2.3-2.3l2.87,2.89l1.42-1.42L6.7,5.3L9,3H3V9z M9,21 l-2.3-2.3l2.89-2.87l-1.42-1.42L5.3,17.3L3,15v6H9z M21,15l-2.3,2.3l-2.87-2.89l-1.42,1.42l2.89,2.87L15,21h6V15z"
})))));
icons.collapse = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/SVG",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  fill: "none",
  height: "24",
  width: "24",
  x: "0"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M9.01,14H2v2h7.01v3L13,15l-3.99-4V14z M14.99,13v-3H22V8h-7.01V5L11,9L14.99,13z"
})))));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/blocks/grid-column/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/grid-column/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   name: function() { return /* binding */ name; },
/* harmony export */   settings: function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/grid-column/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/grid-column/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/grid-column/editor.scss");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./src/blocks/grid-column/icons.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/grid-column/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/grid-column/style.scss");
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
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_0__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(description, 'ctx-blocks'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_3__["default"].column,
  getEditWrapperProps(props) {
    return {
      'data-width': props.widthLarge || false
    };
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
};


/***/ }),

/***/ "./src/blocks/grid-column/inspector.js":
/*!*********************************************!*\
  !*** ./src/blocks/grid-column/inspector.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mobile appearance", 'ctx-blocks'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("How should the column behave on small devices?"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Column span on mobile devices", 'ctx-blocks'),
    max: 3,
    min: 0,
    onChange: event => {
      setAttributes({
        widthSmall: event
      });
    },
    value: widthSmall
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Columns span on tablets and small displays", 'ctx-blocks'),
    max: 12,
    min: 0,
    onChange: event => {
      setAttributes({
        widthMedium: event
      });
    },
    value: widthMedium
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Column span on Desktops", 'ctx-blocks'),
    max: 12,
    min: 0,
    onChange: event => {
      setAttributes({
        widthLarge: event
      });
    },
    value: widthLarge
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
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

/***/ "./src/blocks/grid-column/save.js":
/*!****************************************!*\
  !*** ./src/blocks/grid-column/save.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GridColumnEdit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function GridColumnEdit({
  ...props
}) {
  const {
    attributes: {
      widthLarge,
      widthMedium,
      widthSmall,
      mobilePosition
    },
    className
  } = props;
  const classes = [className, 'grid__column', `grid__column--span-${widthSmall}`, `md:grid__column--span-${widthMedium}`, `xl:grid__column--span-${widthLarge}`, `grid__column--start-${mobilePosition}`];
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: className + ` grid__column grid__column--span-${widthSmall} md:grid__column--span-${widthMedium} xl:grid__column--span-${widthLarge}`
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save(blockProps, {});
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocksProps
  }));
}

/***/ }),

/***/ "./src/blocks/grid-row/edit.js":
/*!*************************************!*\
  !*** ./src/blocks/grid-row/edit.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GridRowEdit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/blocks/grid-row/inspector.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../common/utils/blockGapStyle'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons.js */ "./src/blocks/grid-row/icons.js");

/**
 * Internal dependencies
 */


/**
 * Wordpress dependencies
 */







const ALLOWED_BLOCKS = ['ctx-blocks/grid-column'];
function GridRowEdit({
  ...props
}) {
  const {
    className,
    clientId,
    attributes: {
      equalizer,
      divider,
      childrenWidthLarge
    },
    __unstableLayoutClassNames: layoutClassNames
  } = props;
  const [templateIndex, setTemplateIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
  const TEMPLATE0 = [];
  const TEMPLATE1 = [['ctx-blocks/grid-column'], ['ctx-blocks/grid-column'], ['ctx-blocks/grid-column']];
  const TEMPLATE2 = [['ctx-blocks/grid-column', {
    widthLarge: 2
  }], ['ctx-blocks/grid-column']];
  const TEMPLATE3 = [['ctx-blocks/grid-column'], ['ctx-blocks/grid-column', {
    widthLarge: 2
  }]];
  const templates = [TEMPLATE0, TEMPLATE1, TEMPLATE2, TEMPLATE3];
  const hasInnerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getBlock
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
    const block = getBlock(clientId);
    return !!(block && block.innerBlocks.length);
  }, [clientId]);
  const classes = [className, 'ctx:row', hasInnerBlocks && 'ctx:row__columns', hasInnerBlocks && `ctx:row__columns--${childrenWidthLarge}`, equalizer ? `ctx:row--equalize` : false, divider ? `ctx:row--separator` : false].filter(Boolean).join(' ');
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classes
  });
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(blockProps, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: templates[templateIndex],
    orientation: 'horizontal'
  });
  const style = {
    gap: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../common/utils/blockGapStyle'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(props.attributes?.style?.spacing?.blockGap || '1.5rem')
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), !hasInnerBlocks && templateIndex == 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, {
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Group blocks together. Select a layout:'),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Columns')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => setTemplateIndex(1)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    width: 44,
    height: 44,
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].threeEqual
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => setTemplateIndex(2)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    width: 44,
    height: 44,
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].twoLeft
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => setTemplateIndex(3)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    width: 44,
    height: 44,
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].twoRight
  }))))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocksProps,
    style: {
      ...style,
      ...blockProps.style
    }
  }));
}

/***/ }),

/***/ "./src/blocks/grid-row/icons.js":
/*!**************************************!*\
  !*** ./src/blocks/grid-row/icons.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


let icons = {};
icons.row = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z"
}));
icons.parallax = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/SVG",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}));
icons.masnory = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/SVG",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
}));
icons.equalizer = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/SVG",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}));
icons.divider = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/SVG",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M3 9h2V7H3v2zm0-4h2V3H3v2zm4 16h2v-2H7v2zm0-8h2v-2H7v2zm-4 0h2v-2H3v2zm0 8h2v-2H3v2zm0-4h2v-2H3v2zM7 5h2V3H7v2zm12 12h2v-2h-2v2zm-8 4h2V3h-2v18zm8 0h2v-2h-2v2zm0-8h2v-2h-2v2zm0-10v2h2V3h-2zm0 6h2V7h-2v2zm-4-4h2V3h-2v2zm0 16h2v-2h-2v2zm0-8h2v-2h-2v2z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M0 0h24v24H0z",
  fill: "none"
}));
icons.threeEqual = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "48",
  viewBox: "0 96 960 960",
  width: "48"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M140 836h187V316H140v520Zm247 0h186V316H387v520Zm246 0h187V316H633v520Zm-493 60q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Z"
}));
icons.twoRight = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 48 48",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7,40C6.2,40 5.5,39.7 4.9,39.1C4.3,38.5 4,37.8 4,37L4,11C4,10.2 4.3,9.5 4.9,8.9C5.5,8.3 6.2,8 7,8L41,8C41.8,8 42.5,8.3 43.1,8.9C43.7,9.5 44,10.2 44,11L44,37C44,37.8 43.7,38.5 43.1,39.1C42.5,39.7 41.8,40 41,40L7,40ZM28.65,11L7,11L7,37L28.65,37L28.65,11ZM31.65,37L41,37L41,11L31.65,11L31.65,37Z"
}));
icons.twoLeft = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 48 48",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M41,40C41.8,40 42.5,39.7 43.1,39.1C43.7,38.5 44,37.8 44,37L44,11C44,10.2 43.7,9.5 43.1,8.9C42.5,8.3 41.8,8 41,8L7,8C6.2,8 5.5,8.3 4.9,8.9C4.3,9.5 4,10.2 4,11L4,37C4,37.8 4.3,38.5 4.9,39.1C5.5,39.7 6.2,40 7,40L41,40ZM19.35,11L41,11L41,37L19.35,37L19.35,11ZM16.35,37L7,37L7,11L16.35,11L16.35,37Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/blocks/grid-row/index.js":
/*!**************************************!*\
  !*** ./src/blocks/grid-row/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   name: function() { return /* binding */ name; },
/* harmony export */   settings: function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/grid-row/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/grid-row/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/grid-row/editor.scss");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./src/blocks/grid-row/icons.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/grid-row/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/grid-row/style.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);







/**
 * Wordpress dependencies
 */

const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_0__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(description, 'ctx-blocks'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_3__["default"].row,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
};


/***/ }),

/***/ "./src/blocks/grid-row/inspector.js":
/*!******************************************!*\
  !*** ./src/blocks/grid-row/inspector.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Appearance", 'ctx-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Columns on mobile devices", 'ctx-blocks'),
    max: 3,
    min: 1,
    onChange: value => {
      setAttributes({
        childrenWidthSmall: value
      });
    },
    value: childrenWidthSmall
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Columns on tablets and medium screens", 'ctx-blocks'),
    max: 6,
    min: 1,
    onChange: value => {
      setAttributes({
        childrenWidthMedium: value
      });
    },
    value: childrenWidthMedium
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Columns on desktops", 'ctx-blocks'),
    max: 6,
    min: 1,
    onChange: value => {
      setAttributes({
        childrenWidthLarge: value
      });
    },
    value: childrenWidthLarge
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Make all columns same height", 'ctx-blocks'),
    checked: equalizer,
    onChange: value => {
      setAttributes({
        equalizer: value
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
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

/***/ "./src/blocks/grid-row/save.js":
/*!*************************************!*\
  !*** ./src/blocks/grid-row/save.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function Save(props) {
  const {
    attributes: {
      equalizer,
      divider,
      childrenWidthLarge,
      childrenWidthMedium,
      childrenWidthSmall
    },
    className
  } = props;
  const classes = ['grid__row', 'grid', `grid--columns-${childrenWidthSmall}`, `md:grid--columns-${childrenWidthMedium}`, `xl:grid--columns-${childrenWidthLarge}`, equalizer && 'grid--equalizer', divider && 'grid--divider', props.className].filter(Boolean).join(' ');
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: classes
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save(blockProps, {});
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocksProps
  });
}

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector */ "./src/blocks/progress/inspector.js");




function Edit({
  ...props
}) {
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
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'ctx-progress alignwide'
  });
  const replaceDecimalDot = value => {
    return decimalPlaces ? value.replace(/.([^.]*)$/, ',$1') : value;
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      color: colorBar.color
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "div",
    className: "cur-value-description",
    value: currentDescription,
    onChange: value => setAttributes({
      currentDescription: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Current value description...', 'ctx-blocks')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cur-value"
  }, unit != '' && prefixedUnit && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, unit), ' ', decimalPlaces > 0 ? replaceDecimalDot(currentValueString) : currentValueString, ' ', unit != '' && !prefixedUnit && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, unit))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "div",
    className: "max-value-description",
    value: maxDescription,
    onChange: value => setAttributes({
      maxDescription: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Max value description...', 'ctx-blocks')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "max-value"
  }, unit != '' && prefixedUnit && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, unit), ' ', decimalPlaces > 0 ? replaceDecimalDot(maxValueString) : maxValueString, ' ', unit != '' && !prefixedUnit && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, unit)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "outer",
    style: {
      backgroundColor: colorBackground.color
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: `${percent()}%`,
      backgroundColor: colorBar.color
    },
    className: "inner"
  }, showValues && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  viewBox: "0 0 24 24",
  height: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M 17,7 H 7 c -2.76,0 -5,2.24 -5,5 0,2.76 2.24,5 5,5 h 10 c 2.76,0 5,-2.24 5,-5 0,-2.76 -2.24,-5 -5,-5 z m -4,8 H 7 C 5.34,15 4,13.66 4,12 4,10.34 5.34,9 7,9 h 6 c 1.66,0 3,1.34 3,3 0,1.66 -1.34,3 -3,3 z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
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
/* harmony export */   name: function() { return /* binding */ name; },
/* harmony export */   settings: function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/progress/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/progress/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/progress/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/blocks/progress/icon.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/progress/save.js");
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
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_0__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(description, 'ctx-blocks'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.withColors)({
    colorBar: 'colorBar',
    colorBackground: 'colorBackground'
  })(_edit__WEBPACK_IMPORTED_MODULE_1__["default"]),
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
};


/***/ }),

/***/ "./src/blocks/progress/inspector.js":
/*!******************************************!*\
  !*** ./src/blocks/progress/inspector.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
      title,
      animate,
      barLabel,
      barType,
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Values', 'ctx-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Max value', 'ctx-blocks'),
    value: maxValue,
    onChange: event => setAttributes({
      maxValue: event
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Current value', 'ctx-blocks'),
    value: currentValue,
    onChange: event => setAttributes({
      currentValue: event
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Labels', 'ctx-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Values', 'ctx-blocks'),
    checked: showValues,
    onChange: event => setAttributes({
      showValues: event
    })
  })), showValues && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Separate Thousands', 'ctx-blocks'),
    checked: thousandSeparators,
    onChange: event => setAttributes({
      thousandSeparators: event
    }),
    hidden: !showValues
  })), showValues && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Decimal places', 'ctx-blocks'),
    value: decimalPlaces,
    onChange: event => {
      setAttributes({
        decimalPlaces: event
      });
    },
    min: 0,
    max: 4,
    hidden: !showValues
  }), showValues && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Unit', 'ctx-blocks'),
    value: unit,
    onChange: event => setAttributes({
      unit: event
    }),
    hidden: !showValues
  })), (showValues || unit != '') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show unit before Value', 'ctx-blocks'),
    checked: prefixedUnit,
    onChange: event => setAttributes({
      prefixedUnit: event
    }),
    hidden: unit == '' || !showValues
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bar', 'ctx-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bar type', 'ctx-blocks'),
    value: barType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Normal', 'ctx-blocks'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Gradient (experimental)', 'ctx-blocks'),
      value: 'gradient'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stripes', 'ctx-blocks'),
      value: 'stripes'
    }],
    onChange: event => setAttributes({
      barType: event
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bar Label', 'ctx-blocks'),
    value: barLabel,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('None', 'ctx-blocks'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Percentage', 'ctx-blocks'),
      value: 'percentage'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Value', 'ctx-blocks'),
      value: 'value'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Both', 'ctx-blocks'),
      value: 'both'
    }],
    onChange: event => setAttributes({
      barLabel: event
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Animate', 'ctx-blocks'),
    checked: animate,
    onChange: event => setAttributes({
      animate: !animate
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Colors', 'ctx-blocks'),
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Color for low values', 'ctx-blocks'),
      onChange: setColorBar,
      value: colorBar.color,
      disableCustomColors: true
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Color for medium values', 'ctx-blocks'),
      onChange: setColorBackground,
      value: colorBackground.color,
      disableCustomColors: true
    }]
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/progress/save.js":
/*!*************************************!*\
  !*** ./src/blocks/progress/save.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const save = props => {
  const {
    attributes,
    className
  } = props;
  const {
    maxValue,
    currentValue,
    unit,
    prefixedUnit,
    currentDescription,
    maxDescription,
    decimalPlaces,
    thousandSeparators,
    colorBar,
    colorBarBackground
  } = attributes;
  const classes = ['ctx-progress', className, decimalPlaces ? 'ctx-progress--decimal' : false, thousandSeparators ? 'ctx-progress--thousand-separators' : false];
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: classes
  });
  const percent = currentValue < maxValue ? 100 : Math.floor(currentValue * 100 / maxValue);
  const fullPercent = Math.floor(currentValue * 100 / maxValue);
  const formattedCurrentValue = new Intl.NumberFormat('de-DE').format(currentValue);
  const formattedMaxValue = new Intl.NumberFormat('de-DE').format(maxValue);
  (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.getColorClassName)('background-color', colorBarBackground);
  (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.getColorClassName)('background-color', colorBar);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "progress",
    "data-max": maxValue,
    "data-current": currentValue,
    "data-unit": unit,
    "data-prefixed": prefixedUnit
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "progress__legends"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: "color: {{fg.color}}",
    class: "legend--current"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "legend__label"
  }, {
    currentDescription
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "legend__value"
  }, prefixedUnit ? unit : '', ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "progress__number-injection"
  }, formattedCurrentValue), ' ', !prefixedUnit ? unit : '')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: "color: var(--black)",
    class: "legend--max"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "legend__label"
  }, maxDescription), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "legend__value"
  }, prefixedUnit ? unit : '', " ", formattedMaxValue, ' ', !prefixedUnit ? unit : ''))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: "background: {{bg.color}}",
    class: "progress__track"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: "background-color: {{fg.color}}; width: 0%;",
    class: "progress__indicator"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "progress__label"
  }, fullPercent, "%"))));
};
/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./src/blocks/svg/edit.js":
/*!********************************!*\
  !*** ./src/blocks/svg/edit.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/blocks/svg/inspector.js");
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar */ "./src/blocks/svg/toolbar.js");






const Edit = props => {
  const {
    attributes: {
      url,
      id,
      width,
      height,
      strokeWidth
    },
    setAttributes,
    toggleSelection,
    strokeColor,
    fillColor
  } = props;
  const [svgData, setSvgData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const onSelectMedia = media => {
    var _media$sizes$large$ur;
    if (!media || !media.url) {
      setAttributes({
        url: undefined,
        fileId: undefined
      });
      return;
    }
    console.log(media);
    setAttributes({
      url: (_media$sizes$large$ur = media.sizes?.large?.url) !== null && _media$sizes$large$ur !== void 0 ? _media$sizes$large$ur : media.url,
      id: media.id
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!url) {
      return;
    }
    fetch(url).then(response => response.text()).then(data => {
      setSvgData(data);
    });
  }, [url]);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  const svgStyle = {
    width: width + 'px',
    height: height + 'px'
  };
  console.log(strokeColor, fillColor);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_toolbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ...props,
    onSelectMedia: onSelectMedia
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    scoped: true
  }, `
					#svg-${id} svg path {
						stroke: ${strokeColor.color};
						fill: ${fillColor.color};
						stroke-width: ${strokeWidth};
					}
				`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    ...blockProps
  }, svgData && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ResizableBox, {
    minWidth: 16,
    minHeight: 16,
    size: {
      width,
      height
    },
    onResizeStart: () => {
      toggleSelection(false);
    },
    onResizeStop: (event, direction, elt, delta) => {
      setAttributes({
        width: width + delta.width,
        height: height + delta.height
      });
      toggleSelection(true);
    },
    enable: {
      top: false,
      right: true,
      bottom: true,
      left: false
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: 'svg-' + id,
    style: svgStyle,
    dangerouslySetInnerHTML: {
      __html: svgData
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/blocks/svg/icon.js":
/*!********************************!*\
  !*** ./src/blocks/svg/icon.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  width: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M6 17h12v-3H6Zm-2 3q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h16V6H4v12Zm0 0V6v12Z"
})));

/***/ }),

/***/ "./src/blocks/svg/index.js":
/*!*********************************!*\
  !*** ./src/blocks/svg/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   name: function() { return /* binding */ name; },
/* harmony export */   settings: function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/svg/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/svg/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/svg/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/blocks/svg/icon.js");
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


const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_0__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(title, 'ctx-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(description, 'ctx-blocks'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.withColors)({
    strokeColor: 'strokeColor',
    fillColor: 'fillColor'
  })(_edit__WEBPACK_IMPORTED_MODULE_1__["default"]),
  save: () => {
    return null;
  }
};


/***/ }),

/***/ "./src/blocks/svg/inspector.js":
/*!*************************************!*\
  !*** ./src/blocks/svg/inspector.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
      width,
      height,
      url,
      id,
      linkTo,
      link,
      strokeWidth
    },
    setAttributes,
    setStrokeColor,
    setFillColor,
    strokeColor,
    fillColor
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image Size', 'ctx-blocks'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Width', 'ctx-blocks'),
    value: width,
    onChange: value => setAttributes({
      width: parseInt(value)
    }),
    min: 16
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Height', 'ctx-blocks'),
    value: height,
    onChange: value => setAttributes({
      height: parseInt(value)
    }),
    min: 16
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image Manipulation', 'ctx-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stroke Width', 'ctx-blocks'),
    value: strokeWidth,
    onChange: value => setAttributes({
      strokeWidth: parseInt(value)
    }),
    min: 0
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Color settings', 'ctx-blocks'),
    initialOpen: false,
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stroke color', 'ctx-blocks'),
      onChange: setStrokeColor,
      value: strokeColor.color,
      disableCustomColors: false,
      defaultPalette: false,
      enableAlpha: false
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fill color', 'ctx-blocks'),
      onChange: setFillColor,
      value: fillColor.color,
      disableCustomColors: false,
      defaultPalette: false
    }]
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/svg/toolbar.js":
/*!***********************************!*\
  !*** ./src/blocks/svg/toolbar.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



const ALLOWED_MEDIA_TYPES = ['image', 'video'];
const Toolbar = props => {
  const {
    attributes,
    setAttributes,
    onSelectMedia
  } = props;
  const {
    url,
    id,
    linkTarget,
    linkDestination,
    linkClass,
    linkRel,
    href
  } = attributes;
  function onSetHref(props) {
    setAttributes(props);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
    group: "other"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaReplaceFlow, {
    mediaId: id,
    mediaURL: url,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    accept: "image/svg+xml",
    onSelect: onSelectMedia,
    name: !url ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add SVG', 'ctx-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalImageURLInputUI, {
    url: href || '',
    onChangeUrl: onSetHref,
    linkDestination: linkDestination,
    mediaUrl: url,
    mediaLink: false,
    linkTarget: linkTarget,
    linkClass: linkClass,
    rel: linkRel
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerBlocks: function() { return /* binding */ registerBlocks; }
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/button */ "./src/blocks/button/index.js");
/* harmony import */ var _blocks_button_button_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/button/button-group */ "./src/blocks/button/button-group/index.js");
/* harmony import */ var _blocks_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/card */ "./src/blocks/card/index.js");
/* harmony import */ var _blocks_conditional__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/conditional */ "./src/blocks/conditional/index.js");
/* harmony import */ var _blocks_description_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/description-item */ "./src/blocks/description-item/index.js");
/* harmony import */ var _blocks_description_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/description-list */ "./src/blocks/description-list/index.js");
/* harmony import */ var _blocks_grid_column__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/grid-column */ "./src/blocks/grid-column/index.js");
/* harmony import */ var _blocks_grid_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/grid-row */ "./src/blocks/grid-row/index.js");
/* harmony import */ var _blocks_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/progress */ "./src/blocks/progress/index.js");
/* harmony import */ var _blocks_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/svg */ "./src/blocks/svg/index.js");
/* harmony import */ var _mods_featuredImageProps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mods/featuredImageProps */ "./src/mods/featuredImageProps.js");
/* harmony import */ var _mods_paragraphJustify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mods/paragraphJustify */ "./src/mods/paragraphJustify.js");
/* harmony import */ var _mods_postTitleProps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mods/postTitleProps */ "./src/mods/postTitleProps.js");
/* harmony import */ var _mods_scrollAnimation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mods/scrollAnimation */ "./src/mods/scrollAnimation.js");
/* harmony import */ var _mods_spacerAutoOption__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mods/spacerAutoOption */ "./src/mods/spacerAutoOption.js");
/* harmony import */ var _common_styles_editor_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/styles/editor.scss */ "./src/common/styles/editor.scss");
/* harmony import */ var _common_styles_style_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common/styles/style.scss */ "./src/common/styles/style.scss");
/**
 * WordPress dependencies
 */


/**
 * Blocks dependencies.
 */











/**
 * Core Block modification dependencies.
 */






/**
 * Stylesheets
 */


const registerBlock = block => {
  if (!block) return;
  const {
    name,
    settings
  } = block;
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, settings);
};
const registerBlocks = () => {
  [_blocks_button_button_group__WEBPACK_IMPORTED_MODULE_2__, _blocks_button__WEBPACK_IMPORTED_MODULE_1__, _blocks_card__WEBPACK_IMPORTED_MODULE_3__, _blocks_description_list__WEBPACK_IMPORTED_MODULE_6__, _blocks_description_item__WEBPACK_IMPORTED_MODULE_5__, _blocks_conditional__WEBPACK_IMPORTED_MODULE_4__, _blocks_svg__WEBPACK_IMPORTED_MODULE_10__, _blocks_progress__WEBPACK_IMPORTED_MODULE_9__, _blocks_grid_row__WEBPACK_IMPORTED_MODULE_8__, _blocks_grid_column__WEBPACK_IMPORTED_MODULE_7__].forEach(registerBlock);
};
registerBlocks();

/***/ }),

/***/ "./src/mods/featuredImageProps.js":
/*!****************************************!*\
  !*** ./src/mods/featuredImageProps.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    const {
      attributes,
      setAttributes
    } = props;
    const {
      aspectRatio,
      mobileOrientation
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Mobile Options', 'ctx-blocks'),
      initialOpen: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
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
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
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

/***/ "./src/mods/paragraphJustify.js":
/*!**************************************!*\
  !*** ./src/mods/paragraphJustify.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/align-justify.js");

const {
  createHigherOrderComponent
} = wp.compose;




const {
  addFilter
} = wp.hooks;
const addParagraphAttribute = (props, name) => {
  if (name !== 'core/paragraph') {
    return props;
  }
  const attributes = {
    ...props.attributes,
    justifyText: {
      type: 'boolean',
      default: false
    }
  };
  return {
    ...props,
    attributes
  };
};
addFilter('blocks.registerBlockType', 'ctx-blocks/paragraph', addParagraphAttribute);
const withParagraphControl = createHigherOrderComponent(BlockEdit => {
  return props => {
    if (props.name !== 'core/paragraph') {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    const {
      attributes,
      setAttributes
    } = props;
    const {
      justifyText,
      className
    } = attributes;
    props.attributes.className = justifyText ? 'wp-justify' : '';
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Justify text', 'ctx-blocks'),
      isActive: justifyText,
      onClick: value => {
        setAttributes({
          justifyText: !justifyText,
          className: justifyText ? '' : 'wp-justify'
        });
      }
    })));
  };
}, 'withParagraphControl');
addFilter('editor.BlockEdit', 'ctx-blocks/paragraph', withParagraphControl);

/***/ }),

/***/ "./src/mods/postTitleProps.js":
/*!************************************!*\
  !*** ./src/mods/postTitleProps.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  createHigherOrderComponent
} = wp.compose;
const {
  InspectorControls,
  URLInput
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
    url: {
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
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    const {
      attributes,
      setAttributes
    } = props;
    const {
      linkTitle,
      linkIcon,
      linkIconOrientation,
      url
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Link Options', 'ctx-blocks'),
      initialOpen: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(URLInput, {
      value: url,
      onChange: (url, post) => setAttributes({
        url,
        text: post && post.title || __('Click here', 'ctx-blocks')
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Link Text', 'ctx-blocks'),
      onChange: value => {
        setAttributes({
          linkTitle: value
        });
      },
      value: linkTitle
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Icon', 'ctx-blocks'),
      onChange: value => {
        setAttributes({
          linkIcon: value
        });
      },
      value: linkIcon
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioControl, {
      label: __('Icon Position', 'ctx-blocks'),
      help: __('Prepend or append the icon', 'ctx-blocks'),
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

/***/ "./src/mods/scrollAnimation.js":
/*!*************************************!*\
  !*** ./src/mods/scrollAnimation.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  createHigherOrderComponent
} = wp.compose;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  ToggleControl,
  SelectControl
} = wp.components;
const {
  addFilter
} = wp.hooks;
const {
  __
} = wp.i18n;
const forbiddenBlocks = ['core/shortcode', 'ctx-blocks/nav'];
const addAnimationControlAttribute = (props, name) => {
  if (forbiddenBlocks.includes(name)) {
    return props;
  }
  const attributes = {
    ...props.attributes,
    animateOnScroll: {
      type: 'boolean',
      default: false
    },
    animationType: {
      type: 'string',
      default: ''
    }
  };
  return {
    ...props,
    attributes
  };
};
addFilter('blocks.registerBlockType', 'ctx-blocks/core-scrollanimation', addAnimationControlAttribute);
const withAnimationControl = createHigherOrderComponent(BlockEdit => {
  return props => {
    if (forbiddenBlocks.includes(props.name)) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    const {
      attributes,
      setAttributes
    } = props;
    const {
      animateOnScroll,
      animationType
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Animation', 'ctx-blocks'),
      initialOpen: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Animate on scroll', 'ctx-blocks'),
      checked: animateOnScroll,
      onChange: value => {
        setAttributes({
          animateOnScroll: value
        });
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      disabled: !animateOnScroll,
      label: __('Select Animation', 'ctx-blocks'),
      value: animationType,
      options: [{
        label: __('None', 'ctx-blocks'),
        value: ''
      }, {
        label: __('Fade In', 'ctx-blocks'),
        value: 'fade-in'
      }, {
        label: __('Fade In Up', 'ctx-blocks'),
        value: 'fade-in-up'
      }, {
        label: __('Fade In Down', 'ctx-blocks'),
        value: 'fade-in-down'
      }, {
        label: __('Fade In Left', 'ctx-blocks'),
        value: 'fade-in-left'
      }, {
        label: __('Fade In Right', 'ctx-blocks'),
        value: 'fade-in-right'
      }, {
        label: __('Fade In Up Big', 'ctx-blocks'),
        value: 'fade-in-up-big'
      }, {
        label: __('Fade In Down Big', 'ctx-blocks'),
        value: 'fade-in-down-big'
      }, {
        label: __('Fade In Left Big', 'ctx-blocks'),
        value: 'fade-in-left-big'
      }, {
        label: __('Fade In Right Big', 'ctx-blocks'),
        value: 'fade-in-right-big'
      }, {
        label: __('Flip In', 'ctx-blocks'),
        value: 'flip-in-x'
      }, {
        label: __('Zoom In', 'ctx-blocks'),
        value: 'zoom-in'
      }, {
        label: __('Bounce in In', 'ctx-blocks'),
        value: 'bounce-in'
      }, {
        label: __('Fade in Zoom', 'ctx-blocks'),
        value: 'zoom-in-up'
      }],
      onChange: value => {
        setAttributes({
          animationType: value
        });
      }
    }))));
  };
}, 'withAnimationControl');
addFilter('editor.BlockEdit', 'ctx-blocks/core-scrollanimation', withAnimationControl);
const addAnimationClass = (extraProps, blockType, attributes) => {
  const {
    animateOnScroll,
    animationType
  } = attributes;
  if (forbiddenBlocks.includes(blockType.name)) {
    return extraProps;
  }
  extraProps.className = [animateOnScroll ? 'ctx-animate-on-scroll' : false, animationType ? `ctx-${animationType}` : false, extraProps.className || false].filter(Boolean).join(' ');
  return extraProps;
};
addFilter('blocks.getSaveContent.extraProps', 'ctx-blocks/core-scrollanimation', addAnimationClass);

/***/ }),

/***/ "./src/mods/spacerAutoOption.js":
/*!**************************************!*\
  !*** ./src/mods/spacerAutoOption.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    const {
      attributes,
      setAttributes
    } = props;
    const {
      autoMargin
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Auto Height', 'ctx-blocks'),
      initialOpen: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
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

/***/ "./src/blocks/button/button-group/editor.scss":
/*!****************************************************!*\
  !*** ./src/blocks/button/button-group/editor.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/button/editor.scss":
/*!***************************************!*\
  !*** ./src/blocks/button/editor.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/button/style.scss":
/*!**************************************!*\
  !*** ./src/blocks/button/style.scss ***!
  \**************************************/
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

/***/ "./src/blocks/card/style.scss":
/*!************************************!*\
  !*** ./src/blocks/card/style.scss ***!
  \************************************/
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

/***/ "./src/blocks/description-item/editor.scss":
/*!*************************************************!*\
  !*** ./src/blocks/description-item/editor.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/description-item/style.scss":
/*!************************************************!*\
  !*** ./src/blocks/description-item/style.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/description-list/editor.scss":
/*!*************************************************!*\
  !*** ./src/blocks/description-list/editor.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/grid-column/editor.scss":
/*!********************************************!*\
  !*** ./src/blocks/grid-column/editor.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/grid-column/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/grid-column/style.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/grid-row/editor.scss":
/*!*****************************************!*\
  !*** ./src/blocks/grid-row/editor.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/grid-row/style.scss":
/*!****************************************!*\
  !*** ./src/blocks/grid-row/style.scss ***!
  \****************************************/
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

/***/ "./src/blocks/svg/editor.scss":
/*!************************************!*\
  !*** ./src/blocks/svg/editor.scss ***!
  \************************************/
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

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

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

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

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

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./node_modules/colord/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/colord/index.mjs ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Colord: function() { return /* binding */ j; },
/* harmony export */   colord: function() { return /* binding */ w; },
/* harmony export */   extend: function() { return /* binding */ k; },
/* harmony export */   getFormat: function() { return /* binding */ I; },
/* harmony export */   random: function() { return /* binding */ E; }
/* harmony export */ });
var r={grad:.9,turn:360,rad:360/(2*Math.PI)},t=function(r){return"string"==typeof r?r.length>0:"number"==typeof r},n=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=Math.pow(10,t)),Math.round(n*r)/n+0},e=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=1),r>n?n:r>t?r:t},u=function(r){return(r=isFinite(r)?r%360:0)>0?r:r+360},a=function(r){return{r:e(r.r,0,255),g:e(r.g,0,255),b:e(r.b,0,255),a:e(r.a)}},o=function(r){return{r:n(r.r),g:n(r.g),b:n(r.b),a:n(r.a,3)}},i=/^#([0-9a-f]{3,8})$/i,s=function(r){var t=r.toString(16);return t.length<2?"0"+t:t},h=function(r){var t=r.r,n=r.g,e=r.b,u=r.a,a=Math.max(t,n,e),o=a-Math.min(t,n,e),i=o?a===t?(n-e)/o:a===n?2+(e-t)/o:4+(t-n)/o:0;return{h:60*(i<0?i+6:i),s:a?o/a*100:0,v:a/255*100,a:u}},b=function(r){var t=r.h,n=r.s,e=r.v,u=r.a;t=t/360*6,n/=100,e/=100;var a=Math.floor(t),o=e*(1-n),i=e*(1-(t-a)*n),s=e*(1-(1-t+a)*n),h=a%6;return{r:255*[e,i,o,o,s,e][h],g:255*[s,e,e,i,o,o][h],b:255*[o,o,s,e,e,i][h],a:u}},g=function(r){return{h:u(r.h),s:e(r.s,0,100),l:e(r.l,0,100),a:e(r.a)}},d=function(r){return{h:n(r.h),s:n(r.s),l:n(r.l),a:n(r.a,3)}},f=function(r){return b((n=(t=r).s,{h:t.h,s:(n*=((e=t.l)<50?e:100-e)/100)>0?2*n/(e+n)*100:0,v:e+n,a:t.a}));var t,n,e},c=function(r){return{h:(t=h(r)).h,s:(u=(200-(n=t.s))*(e=t.v)/100)>0&&u<200?n*e/100/(u<=100?u:200-u)*100:0,l:u/2,a:t.a};var t,n,e,u},l=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,p=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,v=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,m=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,y={string:[[function(r){var t=i.exec(r);return t?(r=t[1]).length<=4?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:4===r.length?n(parseInt(r[3]+r[3],16)/255,2):1}:6===r.length||8===r.length?{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:8===r.length?n(parseInt(r.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(r){var t=v.exec(r)||m.exec(r);return t?t[2]!==t[4]||t[4]!==t[6]?null:a({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(t){var n=l.exec(t)||p.exec(t);if(!n)return null;var e,u,a=g({h:(e=n[1],u=n[2],void 0===u&&(u="deg"),Number(e)*(r[u]||1)),s:Number(n[3]),l:Number(n[4]),a:void 0===n[5]?1:Number(n[5])/(n[6]?100:1)});return f(a)},"hsl"]],object:[[function(r){var n=r.r,e=r.g,u=r.b,o=r.a,i=void 0===o?1:o;return t(n)&&t(e)&&t(u)?a({r:Number(n),g:Number(e),b:Number(u),a:Number(i)}):null},"rgb"],[function(r){var n=r.h,e=r.s,u=r.l,a=r.a,o=void 0===a?1:a;if(!t(n)||!t(e)||!t(u))return null;var i=g({h:Number(n),s:Number(e),l:Number(u),a:Number(o)});return f(i)},"hsl"],[function(r){var n=r.h,a=r.s,o=r.v,i=r.a,s=void 0===i?1:i;if(!t(n)||!t(a)||!t(o))return null;var h=function(r){return{h:u(r.h),s:e(r.s,0,100),v:e(r.v,0,100),a:e(r.a)}}({h:Number(n),s:Number(a),v:Number(o),a:Number(s)});return b(h)},"hsv"]]},N=function(r,t){for(var n=0;n<t.length;n++){var e=t[n][0](r);if(e)return[e,t[n][1]]}return[null,void 0]},x=function(r){return"string"==typeof r?N(r.trim(),y.string):"object"==typeof r&&null!==r?N(r,y.object):[null,void 0]},I=function(r){return x(r)[1]},M=function(r,t){var n=c(r);return{h:n.h,s:e(n.s+100*t,0,100),l:n.l,a:n.a}},H=function(r){return(299*r.r+587*r.g+114*r.b)/1e3/255},$=function(r,t){var n=c(r);return{h:n.h,s:n.s,l:e(n.l+100*t,0,100),a:n.a}},j=function(){function r(r){this.parsed=x(r)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return r.prototype.isValid=function(){return null!==this.parsed},r.prototype.brightness=function(){return n(H(this.rgba),2)},r.prototype.isDark=function(){return H(this.rgba)<.5},r.prototype.isLight=function(){return H(this.rgba)>=.5},r.prototype.toHex=function(){return r=o(this.rgba),t=r.r,e=r.g,u=r.b,i=(a=r.a)<1?s(n(255*a)):"","#"+s(t)+s(e)+s(u)+i;var r,t,e,u,a,i},r.prototype.toRgb=function(){return o(this.rgba)},r.prototype.toRgbString=function(){return r=o(this.rgba),t=r.r,n=r.g,e=r.b,(u=r.a)<1?"rgba("+t+", "+n+", "+e+", "+u+")":"rgb("+t+", "+n+", "+e+")";var r,t,n,e,u},r.prototype.toHsl=function(){return d(c(this.rgba))},r.prototype.toHslString=function(){return r=d(c(this.rgba)),t=r.h,n=r.s,e=r.l,(u=r.a)<1?"hsla("+t+", "+n+"%, "+e+"%, "+u+")":"hsl("+t+", "+n+"%, "+e+"%)";var r,t,n,e,u},r.prototype.toHsv=function(){return r=h(this.rgba),{h:n(r.h),s:n(r.s),v:n(r.v),a:n(r.a,3)};var r},r.prototype.invert=function(){return w({r:255-(r=this.rgba).r,g:255-r.g,b:255-r.b,a:r.a});var r},r.prototype.saturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,r))},r.prototype.desaturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,-r))},r.prototype.grayscale=function(){return w(M(this.rgba,-1))},r.prototype.lighten=function(r){return void 0===r&&(r=.1),w($(this.rgba,r))},r.prototype.darken=function(r){return void 0===r&&(r=.1),w($(this.rgba,-r))},r.prototype.rotate=function(r){return void 0===r&&(r=15),this.hue(this.hue()+r)},r.prototype.alpha=function(r){return"number"==typeof r?w({r:(t=this.rgba).r,g:t.g,b:t.b,a:r}):n(this.rgba.a,3);var t},r.prototype.hue=function(r){var t=c(this.rgba);return"number"==typeof r?w({h:r,s:t.s,l:t.l,a:t.a}):n(t.h)},r.prototype.isEqual=function(r){return this.toHex()===w(r).toHex()},r}(),w=function(r){return r instanceof j?r:new j(r)},S=[],k=function(r){r.forEach(function(r){S.indexOf(r)<0&&(r(j,y),S.push(r))})},E=function(){return new j({r:255*Math.random(),g:255*Math.random(),b:255*Math.random()})};


/***/ }),

/***/ "./src/blocks/button/block.json":
/*!**************************************!*\
  !*** ./src/blocks/button/block.json ***!
  \**************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ctx-blocks/button","title":"Button","keywords":["link","action","button"],"textdomain":"ctx-blocks","description":"Display a button with a link or a modal","category":"common","attributes":{"title":{"type":"string","default":""},"url":{"type":"string","default":""},"newTab":{"type":"boolean","default":false},"icon":{"type":"string","default":""},"iconRight":{"type":"boolean","default":false},"iconOnly":{"type":"boolean","default":false},"modalFull":{"type":"boolean","default":false},"modalTitle":{"type":"string","default":""},"action":{"type":"string","default":"link"},"script":{"type":"string","default":""},"scriptTarget":{"type":"string","default":""},"style":{"type":"object","default":{"spacing":{"padding":{"top":"0.6rem","right":"1rem","bottom":"0.6rem","left":"1rem"}}}}},"parent":["ctx-blocks/button-group","core/group"],"supports":{"anchor":true,"html":false,"color":{"link":true,"text":true,"background":true},"__experimentalBorder":{"color":true,"radius":true,"style":false,"width":false,"__experimentalDefaultControls":{"radius":true,"style":false,"width":true,"linked":false,"color":true}},"spacing":{"padding":true,"margin":true}},"styles":[{"name":"fill","label":"Fill","isDefault":true},{"name":"outline","label":"Outline"}],"example":{"attributes":{"title":"Button","url":"","newTab":false,"outline":false,"icon":"","iconRight":false,"iconOnly":false,"modalFull":false,"modalTitle":"Modal Title","action":"link"}},"editorStyle":"ctx-blocks-editor-style","editorScript":"ctx-blocks-editor","style":"ctx-blocks-style","viewScript":"file:./view.js","render":"file:./render.php"}');

/***/ }),

/***/ "./src/blocks/button/button-group/block.json":
/*!***************************************************!*\
  !*** ./src/blocks/button/button-group/block.json ***!
  \***************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ctx-blocks/button-group","title":"Button Group","keywords":["link","action","button"],"textdomain":"ctx-blocks","description":"Collection of buttons that can be aligned or spaced.","category":"layout","attributes":{"textAlignment":{"type":"string","default":"left"},"paddingTop":{"type":"integer","default":10},"paddingBottom":{"type":"integer","default":10}},"supports":{"align":["full"],"default":"alignfull","spacing":{"margin":true,"padding":true}},"usesContext":["postType"],"render":"./render.php"}');

/***/ }),

/***/ "./src/blocks/card/block.json":
/*!************************************!*\
  !*** ./src/blocks/card/block.json ***!
  \************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"ctx-blocks/card","apiVersion":2,"title":"Card","keywords":["container","card"],"description":"Card component to hold different Information","textdomain":"ctx-blocks","category":"layout","attributes":{"secondaryColor":{"type":"string","default":""},"customSecondaryColor":{"type":"string","default":""},"backgroundColor":{"type":"string","default":""},"customBackgroundColor":{"type":"string","default":""},"shadow":{"type":"boolean","default":true},"focalPoint":{"type":"object"},"url":{"type":"string","default":""},"hover":{"type":"boolean","default":false},"textAlign":{"type":"string","default":"left"},"imageUrl":{"type":"string","default":""},"imageAlt":{"type":"string","default":""},"imageId":{"type":"number","default":0},"imagePosition":{"type":"string","default":"top"},"hasBadge":{"type":"boolean","default":false},"hasLabel":{"type":"boolean","default":false},"labelText":{"type":"string","default":""},"badgeText":{"type":"string","default":""},"anchor":{"type":"string"}},"usesContext":["postId","postType"],"supports":{"anchor":true,"html":false,"shadow":true,"className":true,"layout":true,"spacing":{"blockGap":true,"padding":true,"__experimentalDefaultControls":{"padding":true,"blockGap":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}}},"selectors":{"root":".wp-block-ctx-blocks-card","spacing":".wp-block ctx-card .ctx-card-content"},"editorStyle":"ctx-cards-editor-style","style":"ctx-cards-style"}');

/***/ }),

/***/ "./src/blocks/conditional/block.json":
/*!*******************************************!*\
  !*** ./src/blocks/conditional/block.json ***!
  \*******************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ctx-blocks/conditional","title":"Conditional Content","category":"formatting","keywords":["date","time","country","user"],"textdomain":"ctx-blocks","description":"Show or hide a block under certain conditions","attributes":{"fromDate":{"type":"string","default":""},"toDate":{"type":"string","default":""},"usersOnly":{"type":"boolean","default":false},"showLoginNotice":{"type":"boolean","default":false},"loginNotice":{"type":"string","default":""},"includeLoginForm":{"type":"boolean","default":false},"includeRegisterLink":{"type":"boolean","default":true},"hideWithinDateRange":{"type":"boolean","default":false}},"editorStyle":"wp-block-alert-editor"}');

/***/ }),

/***/ "./src/blocks/description-item/block.json":
/*!************************************************!*\
  !*** ./src/blocks/description-item/block.json ***!
  \************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"ctx-blocks/description-item","apiVersion":2,"title":"Description Item","keywords":["list","table"],"description":"Singel item of a description list","textdomain":"ctx-blocks","category":"common","attributes":{"image":{"type":"object","default":null},"icon":{"type":"string","default":"done"},"styleVariation":{"type":"string","default":"icon"},"url":{"type":"string","default":""},"urlIcon":{"type":"string","default":"more_horiz"},"roundImage":{"type":"boolean","default":false},"seperationLines":{"type":"boolean","default":false},"iconColor":{"type":"string","default":""},"customIconColor":{"type":"string","default":""},"iconBackgroundColor":{"type":"string","default":""},"customIconBackgroundColor":{"type":"string","default":""}},"parent":["ctx-blocks/description-list"],"supports":{"spacing":{"margin":["top","bottom"],"__experimentalDefaultControls":{"margin":true}},"color":{"background":true,"text":true}},"selectors":{"root":".wp-block-ctx-blocks-description-item","color":".wp-block-ctx-blocks-description-item > .ctx__description-item__icon"},"editorStyle":"ctx-description-item-editor-style","style":"ctx-description-item-style"}');

/***/ }),

/***/ "./src/blocks/description-list/block.json":
/*!************************************************!*\
  !*** ./src/blocks/description-list/block.json ***!
  \************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"ctx-blocks/description-list","apiVersion":2,"title":"Description List","keywords":["list","table"],"description":"List containing items with an image or icon and a text","textdomain":"ctx-blocks","category":"layout","attributes":{"dividers":{"type":"boolean","default":false}},"supports":{"__experimentalOnEnter":true,"__experimentalSettings":true,"spacing":{"margin":true,"padding":true,"blockGap":true,"__experimentalDefaultControls":{"blockGap":true}},"__experimentalLayout":{"allowSizingOnChildren":true}},"editorStyle":"wp-block-descriptiopn-list-editor","style":"wp-block-descriptiopn-list"}');

/***/ }),

/***/ "./src/blocks/grid-column/block.json":
/*!*******************************************!*\
  !*** ./src/blocks/grid-column/block.json ***!
  \*******************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"ctx-blocks/grid-column","apiVersion":2,"title":"Column","keywords":["list","table"],"description":"Single column as child of a columns collection","textdomain":"ctx-blocks","category":"layout","attributes":{"widthSmall":{"type":"integer","default":0},"widthMedium":{"type":"integer","default":0},"widthLarge":{"type":"integer","default":0},"mobilePosition":{"type":"string","default":""}},"parent":["ctx-blocks/grid-row"]}');

/***/ }),

/***/ "./src/blocks/grid-row/block.json":
/*!****************************************!*\
  !*** ./src/blocks/grid-row/block.json ***!
  \****************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"ctx-blocks/grid-row","apiVersion":2,"title":"Columns","keywords":["columns","responsive","container","wrapper","row","section"],"description":"Displays content in columns of different width","textdomain":"ctx-blocks","category":"layout","attributes":{"equalizer":{"type":"boolean","default":false},"divider":{"type":"boolean","default":false},"childrenWidthSmall":{"type":"integer","default":1},"childrenWidthMedium":{"type":"integer","default":2},"childrenWidthLarge":{"type":"integer","default":3}},"supports":{"__experimentalOnEnter":true,"__experimentalSettings":true,"align":["wide","full"],"ariaLabel":true,"anchor":true,"html":false,"spacing":{"margin":["top","bottom"],"padding":["left","right"],"blockGap":true,"__experimentalDefaultControls":{"padding":true,"blockGap":true}},"__experimentalLayout":{"allowSizingOnChildren":true}},"style":"wp-block-ctx-blocks-grid-row","editorStyle":"wp-block-ctx-blocks-grid-row-editor"}');

/***/ }),

/***/ "./src/blocks/progress/block.json":
/*!****************************************!*\
  !*** ./src/blocks/progress/block.json ***!
  \****************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"ctx-blocks/progress","apiVersion":2,"title":"Progress Bar","keywords":["percent","progress"],"description":"Shows a progress bar","textdomain":"ctx-blocks","category":"common","attributes":{"maxValue":{"type":"string","default":"100"},"currentValue":{"type":"string","default":"50"},"showValues":{"type":"boolean","default":true},"unit":{"type":"string","default":""},"prefixedUnit":{"type":"boolean","default":false},"thousandSeparators":{"type":"boolean","default":false},"decimalPlaces":{"type":"integer","default":0},"colorBar":{"type":"string","default":"blue"},"customColorBar":{"type":"string","default":""},"colorBackground":{"type":"string","default":"lightgray"},"customColorBackground":{"type":"string","default":""},"title":{"type":"string","default":""},"currentDescription":{"type":"string","default":""},"maxDescription":{"type":"string","default":""},"animate":{"type":"boolean","default":true},"barLabel":{"type":"string","default":""},"barType":{"type":"string","default":""}},"supports":{"spacing":{"margin":true,"padding":true}},"editorStyle":"ctx-cards-editor-style","style":"ctx-cards-style","viewScript":["file:../../view.js"]}');

/***/ }),

/***/ "./src/blocks/svg/block.json":
/*!***********************************!*\
  !*** ./src/blocks/svg/block.json ***!
  \***********************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ctx-blocks/svg","title":"Inline SVG","category":"widgets","keywords":["navigation","logo","menu","claim"],"textdomain":"ctx-blocks","description":"Inject an SVG file into the page.","attributes":{"url":{"type":"string","default":""},"id":{"type":"number","default":0},"width":{"type":"number","default":500},"height":{"type":"number","default":500},"fillColor":{"type":"string","default":""},"strokeColor":{"type":"string","default":""},"customFillColor":{"type":"string","default":""},"customStrokeColor":{"type":"string","default":""},"strokeWidth":{"type":"number","default":0},"linkTarget":{"type":"string","default":""},"linkDestination":{"type":"string","default":""},"linkClass":{"type":"string","default":""},"linkRel":{"type":"string","default":""},"href":{"type":"string","default":""}},"render":"file:./render.php"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktimber_blocks"] = self["webpackChunktimber_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map