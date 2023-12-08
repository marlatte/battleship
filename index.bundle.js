/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ---------------     Reboot     --------------- */

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* color: unset; */
}

/* ---------------     /Reboot     --------------- */
/* ---------------     Utilities & Universals     --------------- */

:root {
    --eg-var: red;
}

body {
    height: 100svh;
    display: flex;
    flex-direction: column;
}

/* ---------------     /Utilities & Universals     --------------- */
/* ---------------     CONTENT     --------------- */

/* ---------------     Header     --------------- */
/* ---------------     /Header     --------------- */

/* ---------------     Main     --------------- */
main {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.current-info {
    display: flex;
    justify-content: center;
}
/* ---------------     Boards     --------------- */
.boards {
    margin-top: 10px;
    display: grid;
    place-content: center;
}

.container {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    background-color: grey;
}

.board {
    --square-dim: 7vw;
    padding: 3px;
    display: grid;
    grid-template-columns: repeat(10, var(--square-dim));
    grid-template-rows: repeat(10, var(--square-dim));
    gap: 3px;
    background-color: #fff;
}

.square {
    background-color: skyblue;
    border: none;

    /* devMode */
    color: white;
    display: grid;
    place-content: center;
    font-size: 1rem;
}

button.square {
    cursor: pointer;
}

.square.ship {
    background-color: navy;
}

.square.hit {
    background-color: red;
}

.square.miss {
    background-color: yellow;
}

@media (min-width: 700px) {
    .container {
        flex-direction: row;
    }

    .board {
        --square-dim: 4vw;
    }
}
/* ---------------     /Boards     --------------- */
/* ---------------     /Main     --------------- */

/* ---------------     Footer     --------------- */

footer {
    margin-top: auto;
    margin-bottom: 10px;
    text-align: center;
}
/* ---------------     /Footer     --------------- */

/* ---------------     /CONTENT     --------------- */
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA,mDAAmD;;AAEnD;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA,oDAAoD;AACpD,mEAAmE;;AAEnE;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;AAC1B;;AAEA,oEAAoE;AACpE,oDAAoD;;AAEpD,mDAAmD;AACnD,oDAAoD;;AAEpD,iDAAiD;AACjD;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA,mDAAmD;AACnD;IACI,gBAAgB;IAChB,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,oDAAoD;IACpD,iDAAiD;IACjD,QAAQ;IACR,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,YAAY;;IAEZ,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI;QACI,mBAAmB;IACvB;;IAEA;QACI,iBAAiB;IACrB;AACJ;AACA,oDAAoD;AACpD,kDAAkD;;AAElD,mDAAmD;;AAEnD;IACI,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB;AACA,oDAAoD;;AAEpD,qDAAqD","sourcesContent":["/* ---------------     Reboot     --------------- */\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* color: unset; */\n}\n\n/* ---------------     /Reboot     --------------- */\n/* ---------------     Utilities & Universals     --------------- */\n\n:root {\n    --eg-var: red;\n}\n\nbody {\n    height: 100svh;\n    display: flex;\n    flex-direction: column;\n}\n\n/* ---------------     /Utilities & Universals     --------------- */\n/* ---------------     CONTENT     --------------- */\n\n/* ---------------     Header     --------------- */\n/* ---------------     /Header     --------------- */\n\n/* ---------------     Main     --------------- */\nmain {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n.current-info {\n    display: flex;\n    justify-content: center;\n}\n/* ---------------     Boards     --------------- */\n.boards {\n    margin-top: 10px;\n    display: grid;\n    place-content: center;\n}\n\n.container {\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n\n    background-color: grey;\n}\n\n.board {\n    --square-dim: 7vw;\n    padding: 3px;\n    display: grid;\n    grid-template-columns: repeat(10, var(--square-dim));\n    grid-template-rows: repeat(10, var(--square-dim));\n    gap: 3px;\n    background-color: #fff;\n}\n\n.square {\n    background-color: skyblue;\n    border: none;\n\n    /* devMode */\n    color: white;\n    display: grid;\n    place-content: center;\n    font-size: 1rem;\n}\n\nbutton.square {\n    cursor: pointer;\n}\n\n.square.ship {\n    background-color: navy;\n}\n\n.square.hit {\n    background-color: red;\n}\n\n.square.miss {\n    background-color: yellow;\n}\n\n@media (min-width: 700px) {\n    .container {\n        flex-direction: row;\n    }\n\n    .board {\n        --square-dim: 4vw;\n    }\n}\n/* ---------------     /Boards     --------------- */\n/* ---------------     /Main     --------------- */\n\n/* ---------------     Footer     --------------- */\n\nfooter {\n    margin-top: auto;\n    margin-bottom: 10px;\n    text-align: center;\n}\n/* ---------------     /Footer     --------------- */\n\n/* ---------------     /CONTENT     --------------- */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoardFactory: () => (/* binding */ BoardFactory),
/* harmony export */   ShipFactory: () => (/* binding */ ShipFactory),
/* harmony export */   Square: () => (/* binding */ Square)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/scripts/pubsub.js");


function ShipFactory(id, length) {
    let health = length;
    const hit = () => {
        health -= 1;
    };

    const getHealth = () => health;

    let vertical = false;
    const changeVertical = () => {
        vertical = !vertical;
    };
    const isVertical = () => vertical;

    const isAfloat = () => health >= 1;
    return {
        getID: () => id,
        length,
        getHealth,
        hit,
        isAfloat,
        changeVertical,
        isVertical,
    };
}

const Square = () => {
    let attacked = 0;
    const wasAttacked = () => attacked;

    let ship = null;
    const isTaken = () => !!ship;
    const addShip = (newShip) => {
        ship = newShip;
    };

    const attack = () => {
        if (ship) {
            attacked = 2;
            ship.hit();
            return true;
        }
        attacked = 1;
        return false;
    };

    const checkShipAfloat = () => ship?.isAfloat();

    const getShipId = () => ship.getID();

    return {
        wasAttacked,
        isTaken,
        addShip,
        attack,
        checkShipAfloat,
        getShipId,
    };
};

const BoardFactory = () => {
    const grid = [];
    for (let i = 0; i < 100; i += 1) {
        grid.push(Square());
    }
    const getGrid = () => [...grid];
    const getGridAttacks = () => grid.map((square) => square.wasAttacked());
    const getGridShips = () => grid.map((square) => +square.isTaken());
    const getGridIllegal = () =>
        grid.map((square, i) => {
            const testBase = [0, 10, -10];
            if (!(i % 10)) testBase.push(-9, 1, 11);
            else if (!((i + 1) % 10)) testBase.push(-11, -1, 9);
            else testBase.push(-9, 1, 11, -11, -1, 9);
            const adjacent = testBase
                .map((num) => grid[i + num]?.isTaken())
                .filter(Boolean).length;
            return +!!adjacent;
        });

    const shipsAfloat = new Set();
    const updateShipsAfloat = () => {
        shipsAfloat.clear();
        const ships = grid.filter((sq) => sq.checkShipAfloat());
        ships.forEach((item) => {
            shipsAfloat.add(item.getShipId());
        });
    };
    const getShipsAfloat = () => [...shipsAfloat];

    const placeShip = (ship, start) => {
        const spots = [];
        const { length, isVertical } = ship;
        const multiplier = isVertical() ? 10 : 1;
        const end = start + multiplier * length;
        for (let i = start; i < end; i += multiplier) {
            const vertBool = i > 100;
            const horizBool = !(i % 10) || vertBool;
            if (
                (isVertical() ? vertBool : horizBool && i !== start) ||
                getGridIllegal()[i]
            ) {
                return false;
            }
            spots.push(i);
        }
        spots.forEach((i) => {
            grid[i].addShip(ship);
        });
        updateShipsAfloat();
        return true;
    };

    const receiveAttack = (coord) => {
        const result = grid[coord].attack();
        updateShipsAfloat();
        return result;
    };

    return {
        getGrid,
        getGridAttacks,
        getGridShips,
        getGridIllegal,
        placeShip,
        getShipsAfloat,
        receiveAttack,
    };
};

const boards = {
    p: {},
    c: {},
    reset: () => {
        boards.p = BoardFactory();
        boards.c = BoardFactory();
    },
};

const ships = {
    p: {},
    c: {},
    reset: () => {
        [
            ['carrier', 5],
            ['battleship', 4],
            ['cruiser', 4],
            ['destroyer', 3],
            ['submarine', 3],
            ['patrol1', 2],
            ['patrol2', 2],
        ].forEach(([name, len]) => {
            ships.p[name] = ShipFactory(name, len);
            ships.c[name] = ShipFactory(name, len);
        });
    },
};

// Rename?
function passPlacement(player, shipName, spot) {
    boards[player].placeShip(ships[player][shipName], spot);
}

function turnShip(player, shipName) {
    ships[player][shipName].changeVertical();
}

function passAttack(player, coord) {
    const hit = boards[player].receiveAttack(coord);
    if (!hit) {
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.GAME.TOGGLE);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.GAME.COMP_TURN, boards.p.getGridAttacks());
    } else if (player === 'p') {
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.GAME.COMP_TURN, boards.p.getGridAttacks());
    }
}

// function gridify(grid) {
//     return grid.reduce(
//         (acc, curr, index) => {
//             if (!(index % 10) && index > 0) acc.push([]);
//             acc[acc.length - 1].push(curr);
//             return acc;
//         },
//         [[]]
//     );
// }

function updateGrids() {
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.E.SCREEN.GRID,
        boards.p.getGridShips(),
        boards.p.getGridAttacks(),
        boards.c.getGridAttacks()
    );
}

_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.PUB_TO_SCREEN, updateGrids);
_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.PLACE, passPlacement);
_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.TURN, turnShip);
_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.RESET, boards.reset);
_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.RESET, ships.reset);
_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.ATTACK, passAttack);


/***/ }),

/***/ "./src/scripts/game-controller.js":
/*!****************************************!*\
  !*** ./src/scripts/game-controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   testShipPlacement: () => (/* binding */ testShipPlacement)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/scripts/pubsub.js");


const Player = (() => {
    let human = true;

    const toggle = () => {
        human = !human;
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.SCREEN.CURRENT, human);
    };

    const getCompChoice = (grid) => {
        const options = grid.reduce((acc, curr, index) => {
            if (curr === 0) {
                acc.push(index);
            }
            return acc;
        }, []);
        return options[Math.floor(Math.random() * options.length)];
    };

    const reset = () => {
        human = true;
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.SCREEN.CURRENT, human);
    };

    return {
        toggle,
        getCompChoice,
        reset,
        isHumanTurn: () => human,
    };
})();

const [
    c,
    p,
    carrier,
    battleship,
    cruiser,
    destroyer,
    submarine,
    patrol1,
    patrol2,
] = [
    'c',
    'p',
    'carrier',
    'battleship',
    'cruiser',
    'destroyer',
    'submarine',
    'patrol1',
    'patrol2',
];

function playRound(coord) {
    const current = Player.isHumanTurn() ? 'c' : 'p';
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.ATTACK, current, coord);
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.PUB_TO_SCREEN);
}

function checkCompTurn(grid) {
    if (!Player.isHumanTurn()) {
        setTimeout(() => {
            playRound(Player.getCompChoice(grid));
        }, 800);
    }
}

function resetGame() {
    Player.reset();
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.RESET);
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.PUB_TO_SCREEN);
}

// devMode
function testShipPlacement() {
    resetGame();

    [p, c].forEach((player) => {
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.PLACE, player, carrier, 0);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.TURN, player, battleship);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.PLACE, player, battleship, 22);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.PLACE, player, cruiser, 45);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.PLACE, player, destroyer, 94);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.PLACE, player, submarine, 67);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.PLACE, player, patrol1, 17);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.TURN, player, patrol2);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.PLACE, player, patrol2, 81);
    });

    _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.BOARD.PUB_TO_SCREEN);
}

resetGame();

_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.GAME.FIRE, playRound);
_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.GAME.TOGGLE, Player.toggle);
_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.GAME.COMP_TURN, checkCompTurn);


/***/ }),

/***/ "./src/scripts/helpers.js":
/*!********************************!*\
  !*** ./src/scripts/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elFactory: () => (/* binding */ elFactory),
/* harmony export */   htmlFactory: () => (/* binding */ htmlFactory)
/* harmony export */ });
// ------------------------------------------------------- //
// -------------------- DOM Factories -------------------- //
// ------------------------------------------------------- //

function elFactory(type, attributes, children = []) {
    return { type, attributes, children };
}

function htmlFactory(obj) {
    const el = document.createElement(obj.type);
    const { attributes } = obj;

    Object.entries(attributes).forEach(([key, value]) => {
        if (key !== 'dataset') {
            el[key] = value;
        } else {
            // Special directions needed to set "data-" properties
            Object.entries(value).forEach(([prop, data]) => {
                el.dataset[prop] = data;
            });
        }
    });

    obj.children?.forEach((child) => {
        // Allows for conditionally adding children upstream by
        // setting "" as the alternative to elFactory()
        if (child) {
            el.appendChild(htmlFactory(child));
        }
    });

    return el;
}


/***/ }),

/***/ "./src/scripts/pubsub.js":
/*!*******************************!*\
  !*** ./src/scripts/pubsub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ E),
/* harmony export */   PubSub: () => (/* binding */ PubSub)
/* harmony export */ });
const PubSub = (() => {
    const eventsList = {};
    // { key: "triggerEvent", value: [ array of functions ] }

    function subscribe(triggerEvent, subscriber) {
        if (!eventsList[triggerEvent]) {
            eventsList[triggerEvent] = [subscriber];
        } else {
            eventsList[triggerEvent].push(subscriber);
        }
        return {
            unsubscribe: () => {
                const functionList = eventsList[triggerEvent];
                const i = functionList.indexOf(subscriber);
                if (i > -1) {
                    functionList.splice(i, 1);
                }
            },
        };
    }

    function publish(triggerEvent, ...args) {
        const functionList = eventsList[triggerEvent];
        if (Array.isArray(functionList)) {
            functionList.forEach((subscriber) => {
                subscriber(...args);
            });
        }
    }

    return { subscribe, publish };
})();

const E = {
    GAME: {
        START: 'StartGame',
        FIRE: 'PlayerFire',
        TOGGLE: 'TogglePlayer',
        COMP_TURN: 'ComputerTurn',
    },
    SCREEN: {
        GRID: 'UpdateGrids',
        CURRENT: 'UpdateCurrentPlayerText',
        UNLOCK: 'UnlockGrid',
    },
    BOARD: {
        ATTACK: 'ReceiveAttack',
        RESET: 'ResetBoards',
        PLACE: 'PlaceShip',
        TURN: 'TurnShip',
        PUB_TO_SCREEN: 'PublishToScreen',
    },
};


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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/scripts/pubsub.js");
/* harmony import */ var _game_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-controller */ "./src/scripts/game-controller.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board */ "./src/scripts/board.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/scripts/helpers.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* eslint-disable no-unused-vars */






const startBtn = document.querySelector('#start-btn');
startBtn.addEventListener('click', _game_controller__WEBPACK_IMPORTED_MODULE_1__.testShipPlacement);

const boardsContainer = document.querySelector('.boards .container');

function handlePlayerAttack(e) {
    const coord = e.target.dataset.attackCoord;
    if (!coord) return;
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.GAME.FIRE, coord);
}

function updateCurrentPlayer(isHuman) {
    const currentTurnText = document.querySelector('#current');
    currentTurnText.textContent = isHuman ? 'Player' : 'Computer';
}

function updateBoards(
    playerShipsGrid = [],
    playerAttacksGrid = [],
    compAttacksGrid = []
) {
    boardsContainer.textContent = '';
    const shipsBoard = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)('div', { classList: 'board ships' });
    const attacksBoard = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)('div', { classList: 'board attacks' });

    for (let i = 0; i < 100; i += 1) {
        const taken = playerShipsGrid[i] ? ' ship' : '';
        const compAttack = ['', ' miss', ' hit'][playerAttacksGrid[i]] ?? '';
        shipsBoard.children.push(
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)('div', {
                textContent: i, // devMode
                classList: `square${taken}${compAttack}`,
                dataset: { shipCoord: i },
            })
        );

        const playerAttack = ['', ' miss', ' hit'][compAttacksGrid[i]] ?? '';
        attacksBoard.children.push(
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.elFactory)('button', {
                textContent: i, // devMode
                classList: `square${playerAttack}`,
                dataset: { attackCoord: i },
            })
        );
    }

    boardsContainer.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.htmlFactory)(shipsBoard));
    boardsContainer.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.htmlFactory)(attacksBoard));

    document
        .querySelector('.board.attacks')
        .addEventListener('click', handlePlayerAttack);
}

updateBoards();

_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.SCREEN.GRID, updateBoards);
_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.SCREEN.CURRENT, updateCurrentPlayer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixjQUFjO0FBQ3pDLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxtREFBUztBQUNyQjtBQUNBLG9DQUFvQyxhQUFhO0FBQ2pELDJCQUEyQixnQkFBZ0I7QUFDM0MsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsZ0NBQWdDLHFEQUFXO0FBQzNDLGdDQUFnQyxxREFBVzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkNBQU0sV0FBVyxzQ0FBQztBQUNsQiwyQ0FBTSxXQUFXLHNDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9oZWxwZXJzLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiAtLS0tLS0tLS0tLS0tLS0gICAgIFJlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAvKiBjb2xvcjogdW5zZXQ7ICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1JlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFV0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG46cm9vdCB7XG4gICAgLS1lZy12YXI6IHJlZDtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDBzdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9VdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgQ09OVEVOVCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0hlYWRlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5tYWluIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDMwcHg7XG59XG5cbi5jdXJyZW50LWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEJvYXJkcyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4uYm9hcmRzIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE1cHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4uYm9hcmQge1xuICAgIC0tc3F1YXJlLWRpbTogN3Z3O1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCB2YXIoLS1zcXVhcmUtZGltKSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIHZhcigtLXNxdWFyZS1kaW0pKTtcbiAgICBnYXA6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uc3F1YXJlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xuICAgIGJvcmRlcjogbm9uZTtcblxuICAgIC8qIGRldk1vZGUgKi9cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5idXR0b24uc3F1YXJlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zcXVhcmUuc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcbn1cblxuLnNxdWFyZS5oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnNxdWFyZS5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cblxuICAgIC5ib2FyZCB7XG4gICAgICAgIC0tc3F1YXJlLWRpbTogNHZ3O1xuICAgIH1cbn1cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0JvYXJkcyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9NYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBGb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Gb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9DT05URU5UICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbURBQW1EOztBQUVuRDs7O0lBR0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBLG9EQUFvRDtBQUNwRCxtRUFBbUU7O0FBRW5FO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBLG9FQUFvRTtBQUNwRSxvREFBb0Q7O0FBRXBELG1EQUFtRDtBQUNuRCxvREFBb0Q7O0FBRXBELGlEQUFpRDtBQUNqRDtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQSxtREFBbUQ7QUFDbkQ7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7O0lBRVQsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0RBQW9EO0lBQ3BELGlEQUFpRDtJQUNqRCxRQUFRO0lBQ1Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7O0lBRVosWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjtBQUNBLG9EQUFvRDtBQUNwRCxrREFBa0Q7O0FBRWxELG1EQUFtRDs7QUFFbkQ7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBLG9EQUFvRDs7QUFFcEQscURBQXFEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogY29sb3I6IHVuc2V0OyAqL1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9SZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLWVnLXZhcjogcmVkO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDBzdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1V0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgQ09OVEVOVCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBIZWFkZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0hlYWRlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBNYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5tYWluIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uY3VycmVudC1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgQm9hcmRzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4uYm9hcmRzIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICAtLXNxdWFyZS1kaW06IDd2dztcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgdmFyKC0tc3F1YXJlLWRpbSkpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgdmFyKC0tc3F1YXJlLWRpbSkpO1xcbiAgICBnYXA6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG4gICAgLyogZGV2TW9kZSAqL1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5idXR0b24uc3F1YXJlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3F1YXJlLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xcbn1cXG5cXG4uc3F1YXJlLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnNxdWFyZS5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZCB7XFxuICAgICAgICAtLXNxdWFyZS1kaW06IDR2dztcXG4gICAgfVxcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Cb2FyZHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL01haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5mb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0Zvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvQ09OVEVOVCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEUsIFB1YlN1YiB9IGZyb20gJy4vcHVic3ViJztcblxuZXhwb3J0IGZ1bmN0aW9uIFNoaXBGYWN0b3J5KGlkLCBsZW5ndGgpIHtcbiAgICBsZXQgaGVhbHRoID0gbGVuZ3RoO1xuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGVhbHRoIC09IDE7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEhlYWx0aCA9ICgpID0+IGhlYWx0aDtcblxuICAgIGxldCB2ZXJ0aWNhbCA9IGZhbHNlO1xuICAgIGNvbnN0IGNoYW5nZVZlcnRpY2FsID0gKCkgPT4ge1xuICAgICAgICB2ZXJ0aWNhbCA9ICF2ZXJ0aWNhbDtcbiAgICB9O1xuICAgIGNvbnN0IGlzVmVydGljYWwgPSAoKSA9PiB2ZXJ0aWNhbDtcblxuICAgIGNvbnN0IGlzQWZsb2F0ID0gKCkgPT4gaGVhbHRoID49IDE7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SUQ6ICgpID0+IGlkLFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGdldEhlYWx0aCxcbiAgICAgICAgaGl0LFxuICAgICAgICBpc0FmbG9hdCxcbiAgICAgICAgY2hhbmdlVmVydGljYWwsXG4gICAgICAgIGlzVmVydGljYWwsXG4gICAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFNxdWFyZSA9ICgpID0+IHtcbiAgICBsZXQgYXR0YWNrZWQgPSAwO1xuICAgIGNvbnN0IHdhc0F0dGFja2VkID0gKCkgPT4gYXR0YWNrZWQ7XG5cbiAgICBsZXQgc2hpcCA9IG51bGw7XG4gICAgY29uc3QgaXNUYWtlbiA9ICgpID0+ICEhc2hpcDtcbiAgICBjb25zdCBhZGRTaGlwID0gKG5ld1NoaXApID0+IHtcbiAgICAgICAgc2hpcCA9IG5ld1NoaXA7XG4gICAgfTtcblxuICAgIGNvbnN0IGF0dGFjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNoaXApIHtcbiAgICAgICAgICAgIGF0dGFja2VkID0gMjtcbiAgICAgICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBhdHRhY2tlZCA9IDE7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tTaGlwQWZsb2F0ID0gKCkgPT4gc2hpcD8uaXNBZmxvYXQoKTtcblxuICAgIGNvbnN0IGdldFNoaXBJZCA9ICgpID0+IHNoaXAuZ2V0SUQoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHdhc0F0dGFja2VkLFxuICAgICAgICBpc1Rha2VuLFxuICAgICAgICBhZGRTaGlwLFxuICAgICAgICBhdHRhY2ssXG4gICAgICAgIGNoZWNrU2hpcEFmbG9hdCxcbiAgICAgICAgZ2V0U2hpcElkLFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgQm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICAgIGdyaWQucHVzaChTcXVhcmUoKSk7XG4gICAgfVxuICAgIGNvbnN0IGdldEdyaWQgPSAoKSA9PiBbLi4uZ3JpZF07XG4gICAgY29uc3QgZ2V0R3JpZEF0dGFja3MgPSAoKSA9PiBncmlkLm1hcCgoc3F1YXJlKSA9PiBzcXVhcmUud2FzQXR0YWNrZWQoKSk7XG4gICAgY29uc3QgZ2V0R3JpZFNoaXBzID0gKCkgPT4gZ3JpZC5tYXAoKHNxdWFyZSkgPT4gK3NxdWFyZS5pc1Rha2VuKCkpO1xuICAgIGNvbnN0IGdldEdyaWRJbGxlZ2FsID0gKCkgPT5cbiAgICAgICAgZ3JpZC5tYXAoKHNxdWFyZSwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVzdEJhc2UgPSBbMCwgMTAsIC0xMF07XG4gICAgICAgICAgICBpZiAoIShpICUgMTApKSB0ZXN0QmFzZS5wdXNoKC05LCAxLCAxMSk7XG4gICAgICAgICAgICBlbHNlIGlmICghKChpICsgMSkgJSAxMCkpIHRlc3RCYXNlLnB1c2goLTExLCAtMSwgOSk7XG4gICAgICAgICAgICBlbHNlIHRlc3RCYXNlLnB1c2goLTksIDEsIDExLCAtMTEsIC0xLCA5KTtcbiAgICAgICAgICAgIGNvbnN0IGFkamFjZW50ID0gdGVzdEJhc2VcbiAgICAgICAgICAgICAgICAubWFwKChudW0pID0+IGdyaWRbaSArIG51bV0/LmlzVGFrZW4oKSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiArISFhZGphY2VudDtcbiAgICAgICAgfSk7XG5cbiAgICBjb25zdCBzaGlwc0FmbG9hdCA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCB1cGRhdGVTaGlwc0FmbG9hdCA9ICgpID0+IHtcbiAgICAgICAgc2hpcHNBZmxvYXQuY2xlYXIoKTtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBncmlkLmZpbHRlcigoc3EpID0+IHNxLmNoZWNrU2hpcEFmbG9hdCgpKTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc2hpcHNBZmxvYXQuYWRkKGl0ZW0uZ2V0U2hpcElkKCkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGdldFNoaXBzQWZsb2F0ID0gKCkgPT4gWy4uLnNoaXBzQWZsb2F0XTtcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBzdGFydCkgPT4ge1xuICAgICAgICBjb25zdCBzcG90cyA9IFtdO1xuICAgICAgICBjb25zdCB7IGxlbmd0aCwgaXNWZXJ0aWNhbCB9ID0gc2hpcDtcbiAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IGlzVmVydGljYWwoKSA/IDEwIDogMTtcbiAgICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyBtdWx0aXBsaWVyICogbGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gbXVsdGlwbGllcikge1xuICAgICAgICAgICAgY29uc3QgdmVydEJvb2wgPSBpID4gMTAwO1xuICAgICAgICAgICAgY29uc3QgaG9yaXpCb29sID0gIShpICUgMTApIHx8IHZlcnRCb29sO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChpc1ZlcnRpY2FsKCkgPyB2ZXJ0Qm9vbCA6IGhvcml6Qm9vbCAmJiBpICE9PSBzdGFydCkgfHxcbiAgICAgICAgICAgICAgICBnZXRHcmlkSWxsZWdhbCgpW2ldXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcG90cy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHNwb3RzLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICAgIGdyaWRbaV0uYWRkU2hpcChzaGlwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHVwZGF0ZVNoaXBzQWZsb2F0KCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGdyaWRbY29vcmRdLmF0dGFjaygpO1xuICAgICAgICB1cGRhdGVTaGlwc0FmbG9hdCgpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRHcmlkLFxuICAgICAgICBnZXRHcmlkQXR0YWNrcyxcbiAgICAgICAgZ2V0R3JpZFNoaXBzLFxuICAgICAgICBnZXRHcmlkSWxsZWdhbCxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICBnZXRTaGlwc0FmbG9hdCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICB9O1xufTtcblxuY29uc3QgYm9hcmRzID0ge1xuICAgIHA6IHt9LFxuICAgIGM6IHt9LFxuICAgIHJlc2V0OiAoKSA9PiB7XG4gICAgICAgIGJvYXJkcy5wID0gQm9hcmRGYWN0b3J5KCk7XG4gICAgICAgIGJvYXJkcy5jID0gQm9hcmRGYWN0b3J5KCk7XG4gICAgfSxcbn07XG5cbmNvbnN0IHNoaXBzID0ge1xuICAgIHA6IHt9LFxuICAgIGM6IHt9LFxuICAgIHJlc2V0OiAoKSA9PiB7XG4gICAgICAgIFtcbiAgICAgICAgICAgIFsnY2FycmllcicsIDVdLFxuICAgICAgICAgICAgWydiYXR0bGVzaGlwJywgNF0sXG4gICAgICAgICAgICBbJ2NydWlzZXInLCA0XSxcbiAgICAgICAgICAgIFsnZGVzdHJveWVyJywgM10sXG4gICAgICAgICAgICBbJ3N1Ym1hcmluZScsIDNdLFxuICAgICAgICAgICAgWydwYXRyb2wxJywgMl0sXG4gICAgICAgICAgICBbJ3BhdHJvbDInLCAyXSxcbiAgICAgICAgXS5mb3JFYWNoKChbbmFtZSwgbGVuXSkgPT4ge1xuICAgICAgICAgICAgc2hpcHMucFtuYW1lXSA9IFNoaXBGYWN0b3J5KG5hbWUsIGxlbik7XG4gICAgICAgICAgICBzaGlwcy5jW25hbWVdID0gU2hpcEZhY3RvcnkobmFtZSwgbGVuKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG5cbi8vIFJlbmFtZT9cbmZ1bmN0aW9uIHBhc3NQbGFjZW1lbnQocGxheWVyLCBzaGlwTmFtZSwgc3BvdCkge1xuICAgIGJvYXJkc1twbGF5ZXJdLnBsYWNlU2hpcChzaGlwc1twbGF5ZXJdW3NoaXBOYW1lXSwgc3BvdCk7XG59XG5cbmZ1bmN0aW9uIHR1cm5TaGlwKHBsYXllciwgc2hpcE5hbWUpIHtcbiAgICBzaGlwc1twbGF5ZXJdW3NoaXBOYW1lXS5jaGFuZ2VWZXJ0aWNhbCgpO1xufVxuXG5mdW5jdGlvbiBwYXNzQXR0YWNrKHBsYXllciwgY29vcmQpIHtcbiAgICBjb25zdCBoaXQgPSBib2FyZHNbcGxheWVyXS5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbiAgICBpZiAoIWhpdCkge1xuICAgICAgICBQdWJTdWIucHVibGlzaChFLkdBTUUuVE9HR0xFKTtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goRS5HQU1FLkNPTVBfVFVSTiwgYm9hcmRzLnAuZ2V0R3JpZEF0dGFja3MoKSk7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdwJykge1xuICAgICAgICBQdWJTdWIucHVibGlzaChFLkdBTUUuQ09NUF9UVVJOLCBib2FyZHMucC5nZXRHcmlkQXR0YWNrcygpKTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIGdyaWRpZnkoZ3JpZCkge1xuLy8gICAgIHJldHVybiBncmlkLnJlZHVjZShcbi8vICAgICAgICAgKGFjYywgY3VyciwgaW5kZXgpID0+IHtcbi8vICAgICAgICAgICAgIGlmICghKGluZGV4ICUgMTApICYmIGluZGV4ID4gMCkgYWNjLnB1c2goW10pO1xuLy8gICAgICAgICAgICAgYWNjW2FjYy5sZW5ndGggLSAxXS5wdXNoKGN1cnIpO1xuLy8gICAgICAgICAgICAgcmV0dXJuIGFjYztcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgW1tdXVxuLy8gICAgICk7XG4vLyB9XG5cbmZ1bmN0aW9uIHVwZGF0ZUdyaWRzKCkge1xuICAgIFB1YlN1Yi5wdWJsaXNoKFxuICAgICAgICBFLlNDUkVFTi5HUklELFxuICAgICAgICBib2FyZHMucC5nZXRHcmlkU2hpcHMoKSxcbiAgICAgICAgYm9hcmRzLnAuZ2V0R3JpZEF0dGFja3MoKSxcbiAgICAgICAgYm9hcmRzLmMuZ2V0R3JpZEF0dGFja3MoKVxuICAgICk7XG59XG5cblB1YlN1Yi5zdWJzY3JpYmUoRS5CT0FSRC5QVUJfVE9fU0NSRUVOLCB1cGRhdGVHcmlkcyk7XG5QdWJTdWIuc3Vic2NyaWJlKEUuQk9BUkQuUExBQ0UsIHBhc3NQbGFjZW1lbnQpO1xuUHViU3ViLnN1YnNjcmliZShFLkJPQVJELlRVUk4sIHR1cm5TaGlwKTtcblB1YlN1Yi5zdWJzY3JpYmUoRS5CT0FSRC5SRVNFVCwgYm9hcmRzLnJlc2V0KTtcblB1YlN1Yi5zdWJzY3JpYmUoRS5CT0FSRC5SRVNFVCwgc2hpcHMucmVzZXQpO1xuUHViU3ViLnN1YnNjcmliZShFLkJPQVJELkFUVEFDSywgcGFzc0F0dGFjayk7XG4iLCJpbXBvcnQgeyBFLCBQdWJTdWIgfSBmcm9tICcuL3B1YnN1Yic7XG5cbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSAoKCkgPT4ge1xuICAgIGxldCBodW1hbiA9IHRydWU7XG5cbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIGh1bWFuID0gIWh1bWFuO1xuICAgICAgICBQdWJTdWIucHVibGlzaChFLlNDUkVFTi5DVVJSRU5ULCBodW1hbik7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldENvbXBDaG9pY2UgPSAoZ3JpZCkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gZ3JpZC5yZWR1Y2UoKGFjYywgY3VyciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWNjLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwgW10pO1xuICAgICAgICByZXR1cm4gb3B0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcHRpb25zLmxlbmd0aCldO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgaHVtYW4gPSB0cnVlO1xuICAgICAgICBQdWJTdWIucHVibGlzaChFLlNDUkVFTi5DVVJSRU5ULCBodW1hbik7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvZ2dsZSxcbiAgICAgICAgZ2V0Q29tcENob2ljZSxcbiAgICAgICAgcmVzZXQsXG4gICAgICAgIGlzSHVtYW5UdXJuOiAoKSA9PiBodW1hbixcbiAgICB9O1xufSkoKTtcblxuY29uc3QgW1xuICAgIGMsXG4gICAgcCxcbiAgICBjYXJyaWVyLFxuICAgIGJhdHRsZXNoaXAsXG4gICAgY3J1aXNlcixcbiAgICBkZXN0cm95ZXIsXG4gICAgc3VibWFyaW5lLFxuICAgIHBhdHJvbDEsXG4gICAgcGF0cm9sMixcbl0gPSBbXG4gICAgJ2MnLFxuICAgICdwJyxcbiAgICAnY2FycmllcicsXG4gICAgJ2JhdHRsZXNoaXAnLFxuICAgICdjcnVpc2VyJyxcbiAgICAnZGVzdHJveWVyJyxcbiAgICAnc3VibWFyaW5lJyxcbiAgICAncGF0cm9sMScsXG4gICAgJ3BhdHJvbDInLFxuXTtcblxuZnVuY3Rpb24gcGxheVJvdW5kKGNvb3JkKSB7XG4gICAgY29uc3QgY3VycmVudCA9IFBsYXllci5pc0h1bWFuVHVybigpID8gJ2MnIDogJ3AnO1xuICAgIFB1YlN1Yi5wdWJsaXNoKEUuQk9BUkQuQVRUQUNLLCBjdXJyZW50LCBjb29yZCk7XG4gICAgUHViU3ViLnB1Ymxpc2goRS5CT0FSRC5QVUJfVE9fU0NSRUVOKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tDb21wVHVybihncmlkKSB7XG4gICAgaWYgKCFQbGF5ZXIuaXNIdW1hblR1cm4oKSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHBsYXlSb3VuZChQbGF5ZXIuZ2V0Q29tcENob2ljZShncmlkKSk7XG4gICAgICAgIH0sIDgwMCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXNldEdhbWUoKSB7XG4gICAgUGxheWVyLnJlc2V0KCk7XG4gICAgUHViU3ViLnB1Ymxpc2goRS5CT0FSRC5SRVNFVCk7XG4gICAgUHViU3ViLnB1Ymxpc2goRS5CT0FSRC5QVUJfVE9fU0NSRUVOKTtcbn1cblxuLy8gZGV2TW9kZVxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RTaGlwUGxhY2VtZW50KCkge1xuICAgIHJlc2V0R2FtZSgpO1xuXG4gICAgW3AsIGNdLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgICBQdWJTdWIucHVibGlzaChFLkJPQVJELlBMQUNFLCBwbGF5ZXIsIGNhcnJpZXIsIDApO1xuICAgICAgICBQdWJTdWIucHVibGlzaChFLkJPQVJELlRVUk4sIHBsYXllciwgYmF0dGxlc2hpcCk7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKEUuQk9BUkQuUExBQ0UsIHBsYXllciwgYmF0dGxlc2hpcCwgMjIpO1xuICAgICAgICBQdWJTdWIucHVibGlzaChFLkJPQVJELlBMQUNFLCBwbGF5ZXIsIGNydWlzZXIsIDQ1KTtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goRS5CT0FSRC5QTEFDRSwgcGxheWVyLCBkZXN0cm95ZXIsIDk0KTtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goRS5CT0FSRC5QTEFDRSwgcGxheWVyLCBzdWJtYXJpbmUsIDY3KTtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goRS5CT0FSRC5QTEFDRSwgcGxheWVyLCBwYXRyb2wxLCAxNyk7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKEUuQk9BUkQuVFVSTiwgcGxheWVyLCBwYXRyb2wyKTtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goRS5CT0FSRC5QTEFDRSwgcGxheWVyLCBwYXRyb2wyLCA4MSk7XG4gICAgfSk7XG5cbiAgICBQdWJTdWIucHVibGlzaChFLkJPQVJELlBVQl9UT19TQ1JFRU4pO1xufVxuXG5yZXNldEdhbWUoKTtcblxuUHViU3ViLnN1YnNjcmliZShFLkdBTUUuRklSRSwgcGxheVJvdW5kKTtcblB1YlN1Yi5zdWJzY3JpYmUoRS5HQU1FLlRPR0dMRSwgUGxheWVyLnRvZ2dsZSk7XG5QdWJTdWIuc3Vic2NyaWJlKEUuR0FNRS5DT01QX1RVUk4sIGNoZWNrQ29tcFR1cm4pO1xuIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0gRE9NIEZhY3RvcmllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gZWxGYWN0b3J5KHR5cGUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuID0gW10pIHtcbiAgICByZXR1cm4geyB0eXBlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHRtbEZhY3Rvcnkob2JqKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iai50eXBlKTtcbiAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IG9iajtcblxuICAgIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBpZiAoa2V5ICE9PSAnZGF0YXNldCcpIHtcbiAgICAgICAgICAgIGVsW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgZGlyZWN0aW9ucyBuZWVkZWQgdG8gc2V0IFwiZGF0YS1cIiBwcm9wZXJ0aWVzXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW3Byb3AsIGRhdGFdKSA9PiB7XG4gICAgICAgICAgICAgICAgZWwuZGF0YXNldFtwcm9wXSA9IGRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgb2JqLmNoaWxkcmVuPy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAvLyBBbGxvd3MgZm9yIGNvbmRpdGlvbmFsbHkgYWRkaW5nIGNoaWxkcmVuIHVwc3RyZWFtIGJ5XG4gICAgICAgIC8vIHNldHRpbmcgXCJcIiBhcyB0aGUgYWx0ZXJuYXRpdmUgdG8gZWxGYWN0b3J5KClcbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChodG1sRmFjdG9yeShjaGlsZCkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWw7XG59XG4iLCJleHBvcnQgY29uc3QgUHViU3ViID0gKCgpID0+IHtcbiAgICBjb25zdCBldmVudHNMaXN0ID0ge307XG4gICAgLy8geyBrZXk6IFwidHJpZ2dlckV2ZW50XCIsIHZhbHVlOiBbIGFycmF5IG9mIGZ1bmN0aW9ucyBdIH1cblxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZSh0cmlnZ2VyRXZlbnQsIHN1YnNjcmliZXIpIHtcbiAgICAgICAgaWYgKCFldmVudHNMaXN0W3RyaWdnZXJFdmVudF0pIHtcbiAgICAgICAgICAgIGV2ZW50c0xpc3RbdHJpZ2dlckV2ZW50XSA9IFtzdWJzY3JpYmVyXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50c0xpc3RbdHJpZ2dlckV2ZW50XS5wdXNoKHN1YnNjcmliZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZ1bmN0aW9uTGlzdCA9IGV2ZW50c0xpc3RbdHJpZ2dlckV2ZW50XTtcbiAgICAgICAgICAgICAgICBjb25zdCBpID0gZnVuY3Rpb25MaXN0LmluZGV4T2Yoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbkxpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHVibGlzaCh0cmlnZ2VyRXZlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgZnVuY3Rpb25MaXN0ID0gZXZlbnRzTGlzdFt0cmlnZ2VyRXZlbnRdO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmdW5jdGlvbkxpc3QpKSB7XG4gICAgICAgICAgICBmdW5jdGlvbkxpc3QuZm9yRWFjaCgoc3Vic2NyaWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIoLi4uYXJncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHN1YnNjcmliZSwgcHVibGlzaCB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IEUgPSB7XG4gICAgR0FNRToge1xuICAgICAgICBTVEFSVDogJ1N0YXJ0R2FtZScsXG4gICAgICAgIEZJUkU6ICdQbGF5ZXJGaXJlJyxcbiAgICAgICAgVE9HR0xFOiAnVG9nZ2xlUGxheWVyJyxcbiAgICAgICAgQ09NUF9UVVJOOiAnQ29tcHV0ZXJUdXJuJyxcbiAgICB9LFxuICAgIFNDUkVFTjoge1xuICAgICAgICBHUklEOiAnVXBkYXRlR3JpZHMnLFxuICAgICAgICBDVVJSRU5UOiAnVXBkYXRlQ3VycmVudFBsYXllclRleHQnLFxuICAgICAgICBVTkxPQ0s6ICdVbmxvY2tHcmlkJyxcbiAgICB9LFxuICAgIEJPQVJEOiB7XG4gICAgICAgIEFUVEFDSzogJ1JlY2VpdmVBdHRhY2snLFxuICAgICAgICBSRVNFVDogJ1Jlc2V0Qm9hcmRzJyxcbiAgICAgICAgUExBQ0U6ICdQbGFjZVNoaXAnLFxuICAgICAgICBUVVJOOiAnVHVyblNoaXAnLFxuICAgICAgICBQVUJfVE9fU0NSRUVOOiAnUHVibGlzaFRvU2NyZWVuJyxcbiAgICB9LFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgeyBFLCBQdWJTdWIgfSBmcm9tICcuL3B1YnN1Yic7XG5pbXBvcnQgeyB0ZXN0U2hpcFBsYWNlbWVudCB9IGZyb20gJy4vZ2FtZS1jb250cm9sbGVyJztcbmltcG9ydCAnLi9ib2FyZCc7XG5pbXBvcnQgeyBlbEZhY3RvcnksIGh0bWxGYWN0b3J5IH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG5cbmNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJ0LWJ0bicpO1xuc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0ZXN0U2hpcFBsYWNlbWVudCk7XG5cbmNvbnN0IGJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMgLmNvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBoYW5kbGVQbGF5ZXJBdHRhY2soZSkge1xuICAgIGNvbnN0IGNvb3JkID0gZS50YXJnZXQuZGF0YXNldC5hdHRhY2tDb29yZDtcbiAgICBpZiAoIWNvb3JkKSByZXR1cm47XG4gICAgUHViU3ViLnB1Ymxpc2goRS5HQU1FLkZJUkUsIGNvb3JkKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3VycmVudFBsYXllcihpc0h1bWFuKSB7XG4gICAgY29uc3QgY3VycmVudFR1cm5UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQnKTtcbiAgICBjdXJyZW50VHVyblRleHQudGV4dENvbnRlbnQgPSBpc0h1bWFuID8gJ1BsYXllcicgOiAnQ29tcHV0ZXInO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVCb2FyZHMoXG4gICAgcGxheWVyU2hpcHNHcmlkID0gW10sXG4gICAgcGxheWVyQXR0YWNrc0dyaWQgPSBbXSxcbiAgICBjb21wQXR0YWNrc0dyaWQgPSBbXVxuKSB7XG4gICAgYm9hcmRzQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgY29uc3Qgc2hpcHNCb2FyZCA9IGVsRmFjdG9yeSgnZGl2JywgeyBjbGFzc0xpc3Q6ICdib2FyZCBzaGlwcycgfSk7XG4gICAgY29uc3QgYXR0YWNrc0JvYXJkID0gZWxGYWN0b3J5KCdkaXYnLCB7IGNsYXNzTGlzdDogJ2JvYXJkIGF0dGFja3MnIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCB0YWtlbiA9IHBsYXllclNoaXBzR3JpZFtpXSA/ICcgc2hpcCcgOiAnJztcbiAgICAgICAgY29uc3QgY29tcEF0dGFjayA9IFsnJywgJyBtaXNzJywgJyBoaXQnXVtwbGF5ZXJBdHRhY2tzR3JpZFtpXV0gPz8gJyc7XG4gICAgICAgIHNoaXBzQm9hcmQuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICAgIGVsRmFjdG9yeSgnZGl2Jywge1xuICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBpLCAvLyBkZXZNb2RlXG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBgc3F1YXJlJHt0YWtlbn0ke2NvbXBBdHRhY2t9YCxcbiAgICAgICAgICAgICAgICBkYXRhc2V0OiB7IHNoaXBDb29yZDogaSB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwbGF5ZXJBdHRhY2sgPSBbJycsICcgbWlzcycsICcgaGl0J11bY29tcEF0dGFja3NHcmlkW2ldXSA/PyAnJztcbiAgICAgICAgYXR0YWNrc0JvYXJkLmNoaWxkcmVuLnB1c2goXG4gICAgICAgICAgICBlbEZhY3RvcnkoJ2J1dHRvbicsIHtcbiAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogaSwgLy8gZGV2TW9kZVxuICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogYHNxdWFyZSR7cGxheWVyQXR0YWNrfWAsXG4gICAgICAgICAgICAgICAgZGF0YXNldDogeyBhdHRhY2tDb29yZDogaSB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbEZhY3Rvcnkoc2hpcHNCb2FyZCkpO1xuICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChodG1sRmFjdG9yeShhdHRhY2tzQm9hcmQpKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQuYXR0YWNrcycpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXllckF0dGFjayk7XG59XG5cbnVwZGF0ZUJvYXJkcygpO1xuXG5QdWJTdWIuc3Vic2NyaWJlKEUuU0NSRUVOLkdSSUQsIHVwZGF0ZUJvYXJkcyk7XG5QdWJTdWIuc3Vic2NyaWJlKEUuU0NSRUVOLkNVUlJFTlQsIHVwZGF0ZUN1cnJlbnRQbGF5ZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9