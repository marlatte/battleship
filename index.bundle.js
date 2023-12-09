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

/* ---------------     Scores     --------------- */

.scores {
    display: grid;
    place-content: center;

    text-align: right;
}

/* ---------------     /Scores     --------------- */
/* ---------------     /Main     --------------- */

/* ---------------     Modal     --------------- */

.modal {
    z-index: 1;
    position: absolute;
    height: 100svh;
    width: 100vw;

    display: grid;
    place-content: center;

    background-color: #80808052;
    backdrop-filter: blur(2px);
}

.shrunk {
    transform: scale(0);
}

.hidden {
    display: none;
}

.pop-up {
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    border: 1px solid #000;
    border-radius: 5px;
    background-color: #fff;

    text-align: center;

    transition: all 1s;
}

/* ---------------     /Modal     --------------- */

/* ---------------     Footer     --------------- */

footer {
    margin-top: auto;
    margin-bottom: 10px;
    text-align: center;
}
/* ---------------     /Footer     --------------- */

/* ---------------     /CONTENT     --------------- */
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA,mDAAmD;;AAEnD;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA,oDAAoD;AACpD,mEAAmE;;AAEnE;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;AAC1B;;AAEA,oEAAoE;AACpE,oDAAoD;;AAEpD,mDAAmD;AACnD,oDAAoD;;AAEpD,iDAAiD;AACjD;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA,mDAAmD;AACnD;IACI,gBAAgB;IAChB,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,oDAAoD;IACpD,iDAAiD;IACjD,QAAQ;IACR,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,YAAY;;IAEZ,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI;QACI,mBAAmB;IACvB;;IAEA;QACI,iBAAiB;IACrB;AACJ;AACA,oDAAoD;;AAEpD,mDAAmD;;AAEnD;IACI,aAAa;IACb,qBAAqB;;IAErB,iBAAiB;AACrB;;AAEA,oDAAoD;AACpD,kDAAkD;;AAElD,kDAAkD;;AAElD;IACI,UAAU;IACV,kBAAkB;IAClB,cAAc;IACd,YAAY;;IAEZ,aAAa;IACb,qBAAqB;;IAErB,2BAA2B;IAC3B,0BAA0B;AAC9B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;;IAET,sBAAsB;IACtB,kBAAkB;IAClB,sBAAsB;;IAEtB,kBAAkB;;IAElB,kBAAkB;AACtB;;AAEA,mDAAmD;;AAEnD,mDAAmD;;AAEnD;IACI,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB;AACA,oDAAoD;;AAEpD,qDAAqD","sourcesContent":["/* ---------------     Reboot     --------------- */\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* color: unset; */\n}\n\n/* ---------------     /Reboot     --------------- */\n/* ---------------     Utilities & Universals     --------------- */\n\n:root {\n    --eg-var: red;\n}\n\nbody {\n    height: 100svh;\n    display: flex;\n    flex-direction: column;\n}\n\n/* ---------------     /Utilities & Universals     --------------- */\n/* ---------------     CONTENT     --------------- */\n\n/* ---------------     Header     --------------- */\n/* ---------------     /Header     --------------- */\n\n/* ---------------     Main     --------------- */\nmain {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n.current-info {\n    display: flex;\n    justify-content: center;\n}\n/* ---------------     Boards     --------------- */\n.boards {\n    margin-top: 10px;\n    display: grid;\n    place-content: center;\n}\n\n.container {\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n\n    background-color: grey;\n}\n\n.board {\n    --square-dim: 7vw;\n    padding: 3px;\n    display: grid;\n    grid-template-columns: repeat(10, var(--square-dim));\n    grid-template-rows: repeat(10, var(--square-dim));\n    gap: 3px;\n    background-color: #fff;\n}\n\n.square {\n    background-color: skyblue;\n    border: none;\n\n    /* devMode */\n    color: white;\n    display: grid;\n    place-content: center;\n    font-size: 1rem;\n}\n\nbutton.square {\n    cursor: pointer;\n}\n\n.square.ship {\n    background-color: navy;\n}\n\n.square.hit {\n    background-color: red;\n}\n\n.square.miss {\n    background-color: yellow;\n}\n\n@media (min-width: 700px) {\n    .container {\n        flex-direction: row;\n    }\n\n    .board {\n        --square-dim: 4vw;\n    }\n}\n/* ---------------     /Boards     --------------- */\n\n/* ---------------     Scores     --------------- */\n\n.scores {\n    display: grid;\n    place-content: center;\n\n    text-align: right;\n}\n\n/* ---------------     /Scores     --------------- */\n/* ---------------     /Main     --------------- */\n\n/* ---------------     Modal     --------------- */\n\n.modal {\n    z-index: 1;\n    position: absolute;\n    height: 100svh;\n    width: 100vw;\n\n    display: grid;\n    place-content: center;\n\n    background-color: #80808052;\n    backdrop-filter: blur(2px);\n}\n\n.shrunk {\n    transform: scale(0);\n}\n\n.hidden {\n    display: none;\n}\n\n.pop-up {\n    padding: 20px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n\n    border: 1px solid #000;\n    border-radius: 5px;\n    background-color: #fff;\n\n    text-align: center;\n\n    transition: all 1s;\n}\n\n/* ---------------     /Modal     --------------- */\n\n/* ---------------     Footer     --------------- */\n\nfooter {\n    margin-top: auto;\n    margin-bottom: 10px;\n    text-align: center;\n}\n/* ---------------     /Footer     --------------- */\n\n/* ---------------     /CONTENT     --------------- */\n"],"sourceRoot":""}]);
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
/* harmony export */   Square: () => (/* binding */ Square),
/* harmony export */   boards: () => (/* binding */ boards),
/* harmony export */   ships: () => (/* binding */ ships)
/* harmony export */ });
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


/***/ }),

/***/ "./src/scripts/game-controller.js":
/*!****************************************!*\
  !*** ./src/scripts/game-controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   getGameState: () => (/* binding */ getGameState),
/* harmony export */   playRound: () => (/* binding */ playRound),
/* harmony export */   testShipPlacement: () => (/* binding */ testShipPlacement)
/* harmony export */ });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/scripts/board.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/scripts/pubsub.js");



const Player = (() => {
    let human = true;

    const toggle = () => {
        human = !human;
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

function checkGameOver() {
    let winner = '';
    if (_board__WEBPACK_IMPORTED_MODULE_0__.boards.p.getShipsAfloat().length < 1) {
        winner = 'Computer';
    }
    if (_board__WEBPACK_IMPORTED_MODULE_0__.boards.c.getShipsAfloat().length < 1) {
        winner = 'Player';
    }
    return winner;
}

function playRound(coord) {
    const opponent = Player.isHumanTurn() ? 'c' : 'p';
    const hit = _board__WEBPACK_IMPORTED_MODULE_0__.boards[opponent].receiveAttack(coord);
    const gameOver = checkGameOver();

    if (!hit) Player.toggle();

    _pubsub__WEBPACK_IMPORTED_MODULE_1__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_1__.E.UPDATE);

    if (gameOver) return gameOver;

    if (!Player.isHumanTurn()) {
        setTimeout(() => {
            playRound(Player.getCompChoice(_board__WEBPACK_IMPORTED_MODULE_0__.boards.p.getGridAttacks()));
        }, 800);
    }
    return false;
}

function resetGame() {
    Player.reset();
    _board__WEBPACK_IMPORTED_MODULE_0__.boards.reset();
    _board__WEBPACK_IMPORTED_MODULE_0__.ships.reset();
    _pubsub__WEBPACK_IMPORTED_MODULE_1__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_1__.E.UPDATE);
}

// devMode
function testShipPlacement() {
    resetGame();

    [p, c].forEach((player) => {
        [
            [carrier, 0],
            [battleship, 22],
            [cruiser, 45],
            [destroyer, 94],
            [submarine, 67],
            [patrol1, 17],
            [patrol2, 81],
        ].forEach(([shipName, spot]) => {
            if (shipName === battleship || shipName === patrol2) {
                _board__WEBPACK_IMPORTED_MODULE_0__.ships[player][shipName].changeVertical();
            }
            _board__WEBPACK_IMPORTED_MODULE_0__.boards[player].placeShip(_board__WEBPACK_IMPORTED_MODULE_0__.ships[player][shipName], spot);
        });
    });
}

function getGameState() {
    return {
        playerShipsGrid: _board__WEBPACK_IMPORTED_MODULE_0__.boards.p.getGridShips(),
        playerAttacksGrid: _board__WEBPACK_IMPORTED_MODULE_0__.boards.p.getGridAttacks(),
        compAttacksGrid: _board__WEBPACK_IMPORTED_MODULE_0__.boards.c.getGridAttacks(),
        isHuman: Player.isHumanTurn(),
        pScore: _board__WEBPACK_IMPORTED_MODULE_0__.boards.p.getShipsAfloat().length,
        cScore: _board__WEBPACK_IMPORTED_MODULE_0__.boards.c.getShipsAfloat().length,
    };
}

resetGame();


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
    UPDATE: 'UpdateDisplay',
};


/***/ }),

/***/ "./src/scripts/screen-controller.js":
/*!******************************************!*\
  !*** ./src/scripts/screen-controller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/scripts/pubsub.js");
/* harmony import */ var _game_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-controller */ "./src/scripts/game-controller.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/scripts/helpers.js");




const startBtn = document.querySelector('#start-btn');

const currentTurnText = document.querySelector('#current');
const boardsContainer = document.querySelector('.boards .container');
const pScoreDisplay = document.querySelector('#player-score');
const cScoreDisplay = document.querySelector('#computer-score');
const winnerDisplay = document.querySelector('#winner');
const modal = document.querySelector('.modal');
const popUp = document.querySelector('.pop-up');
const newGameBtn = document.querySelector('#new-game-btn');

function endGameDisplay(winner) {
    winnerDisplay.textContent = winner;
    modal.classList.toggle('hidden');
    setTimeout(() => {
        popUp.classList.toggle('shrunk');
    }, 150);
}

function handleBoardClick(e) {
    const coord = e.target.dataset.attackCoord;
    if (!coord) return;
    document
        .querySelector('.board.attacks')
        .removeEventListener('click', handleBoardClick);
    const gameOver = (0,_game_controller__WEBPACK_IMPORTED_MODULE_1__.playRound)(coord);
    if (gameOver) {
        endGameDisplay(gameOver);
    }
}

function updateCurrentPlayer(isHuman = true) {
    if (isHuman) {
        currentTurnText.textContent = 'Player';
        // Unlock grid
        document
            .querySelector('.board.attacks')
            .addEventListener('click', handleBoardClick);
    } else {
        currentTurnText.textContent = 'Computer';
    }
}

function updateBoards(
    playerShipsGrid = [],
    playerAttacksGrid = [],
    compAttacksGrid = []
) {
    boardsContainer.textContent = '';
    const shipsBoard = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.elFactory)('div', { classList: 'board ships' });
    const attacksBoard = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.elFactory)('div', { classList: 'board attacks' });

    for (let i = 0; i < 100; i += 1) {
        const taken = playerShipsGrid[i] ? ' ship' : '';
        const compAttack = ['', ' miss', ' hit'][playerAttacksGrid[i]] ?? '';
        shipsBoard.children.push(
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.elFactory)('div', {
                textContent: i, // devMode
                classList: `square${taken}${compAttack}`,
                dataset: { shipCoord: i },
            })
        );

        const playerAttack = ['', ' miss', ' hit'][compAttacksGrid[i]] ?? '';
        attacksBoard.children.push(
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.elFactory)('button', {
                textContent: i, // devMode
                classList: `square${playerAttack}`,
                dataset: { attackCoord: i },
            })
        );
    }

    boardsContainer.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.htmlFactory)(shipsBoard));
    boardsContainer.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.htmlFactory)(attacksBoard));
}

function updateScores(pScore, cScore) {
    pScoreDisplay.textContent = pScore;
    cScoreDisplay.textContent = cScore;
}

function updateDisplay() {
    // Gets info from game-controller
    const {
        playerShipsGrid,
        playerAttacksGrid,
        compAttacksGrid,
        isHuman,
        pScore,
        cScore,
    } = (0,_game_controller__WEBPACK_IMPORTED_MODULE_1__.getGameState)();

    // Updates boards, current player, and scores
    updateBoards(playerShipsGrid, playerAttacksGrid, compAttacksGrid);
    updateCurrentPlayer(isHuman);
    updateScores(pScore, cScore);
}

updateDisplay();

// devMode
startBtn.addEventListener('click', () => {
    (0,_game_controller__WEBPACK_IMPORTED_MODULE_1__.testShipPlacement)();
    updateDisplay();
});

// devMode
newGameBtn.addEventListener('click', () => {
    (0,_game_controller__WEBPACK_IMPORTED_MODULE_1__.testShipPlacement)();
    updateDisplay();
});

_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.UPDATE, updateDisplay);


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
/* harmony import */ var _screen_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen-controller */ "./src/scripts/screen-controller.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFEQUFXO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sRUFBRSw4REFBWTs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxtRUFBaUI7QUFDckI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLG1FQUFpQjtBQUNyQjtBQUNBLENBQUM7O0FBRUQsMkNBQU0sV0FBVyxzQ0FBQzs7Ozs7OztVQ3JIbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBNkI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWUtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcHVic3ViLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9zY3JlZW4tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC8qIGNvbG9yOiB1bnNldDsgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbjpyb290IHtcbiAgICAtLWVnLXZhcjogcmVkO1xufVxuXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHN2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1V0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICBDT05URU5UICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBIZWFkZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBNYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbm1haW4ge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMzBweDtcbn1cblxuLmN1cnJlbnQtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgQm9hcmRzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi5ib2FyZHMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTVweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi5ib2FyZCB7XG4gICAgLS1zcXVhcmUtZGltOiA3dnc7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIHZhcigtLXNxdWFyZS1kaW0pKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgdmFyKC0tc3F1YXJlLWRpbSkpO1xuICAgIGdhcDogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5zcXVhcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgLyogZGV2TW9kZSAqL1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbmJ1dHRvbi5zcXVhcmUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNxdWFyZS5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xufVxuXG4uc3F1YXJlLmhpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uc3F1YXJlLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuXG4gICAgLmJvYXJkIHtcbiAgICAgICAgLS1zcXVhcmUtZGltOiA0dnc7XG4gICAgfVxufVxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvQm9hcmRzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBTY29yZXMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uc2NvcmVzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9TY29yZXMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTW9kYWwgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubW9kYWwge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwc3ZoO1xuICAgIHdpZHRoOiAxMDB2dztcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDUyO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xufVxuXG4uc2hydW5rIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ucG9wLXVwIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL01vZGFsICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBGb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Gb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9DT05URU5UICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbURBQW1EOztBQUVuRDs7O0lBR0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBLG9EQUFvRDtBQUNwRCxtRUFBbUU7O0FBRW5FO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBLG9FQUFvRTtBQUNwRSxvREFBb0Q7O0FBRXBELG1EQUFtRDtBQUNuRCxvREFBb0Q7O0FBRXBELGlEQUFpRDtBQUNqRDtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQSxtREFBbUQ7QUFDbkQ7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7O0lBRVQsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0RBQW9EO0lBQ3BELGlEQUFpRDtJQUNqRCxRQUFRO0lBQ1Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7O0lBRVosWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjtBQUNBLG9EQUFvRDs7QUFFcEQsbURBQW1EOztBQUVuRDtJQUNJLGFBQWE7SUFDYixxQkFBcUI7O0lBRXJCLGlCQUFpQjtBQUNyQjs7QUFFQSxvREFBb0Q7QUFDcEQsa0RBQWtEOztBQUVsRCxrREFBa0Q7O0FBRWxEO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTs7SUFFWixhQUFhO0lBQ2IscUJBQXFCOztJQUVyQiwyQkFBMkI7SUFDM0IsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7O0lBRWIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUzs7SUFFVCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjs7SUFFdEIsa0JBQWtCOztJQUVsQixrQkFBa0I7QUFDdEI7O0FBRUEsbURBQW1EOztBQUVuRCxtREFBbUQ7O0FBRW5EO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQSxvREFBb0Q7O0FBRXBELHFEQUFxRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAtLS0tLS0tLS0tLS0tLS0gICAgIFJlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIGNvbG9yOiB1bnNldDsgKi9cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFV0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbjpyb290IHtcXG4gICAgLS1lZy12YXI6IHJlZDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwc3ZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9VdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIENPTlRFTlQgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9IZWFkZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxubWFpbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLmN1cnJlbnQtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEJvYXJkcyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLmJvYXJkcyB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgLS1zcXVhcmUtZGltOiA3dnc7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIHZhcigtLXNxdWFyZS1kaW0pKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIHZhcigtLXNxdWFyZS1kaW0pKTtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxuICAgIC8qIGRldk1vZGUgKi9cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuYnV0dG9uLnNxdWFyZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNxdWFyZS5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcXG59XFxuXFxuLnNxdWFyZS5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5zcXVhcmUubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcblxcbiAgICAuYm9hcmQge1xcbiAgICAgICAgLS1zcXVhcmUtZGltOiA0dnc7XFxuICAgIH1cXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvQm9hcmRzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFNjb3JlcyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnNjb3JlcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1Njb3JlcyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBNb2RhbCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLm1vZGFsIHtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMHN2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA1MjtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxufVxcblxcbi5zaHJ1bmsge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnBvcC11cCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL01vZGFsICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEZvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Gb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0NPTlRFTlQgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gU2hpcEZhY3RvcnkoaWQsIGxlbmd0aCkge1xuICAgIGxldCBoZWFsdGggPSBsZW5ndGg7XG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoZWFsdGggLT0gMTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0SGVhbHRoID0gKCkgPT4gaGVhbHRoO1xuXG4gICAgbGV0IHZlcnRpY2FsID0gZmFsc2U7XG4gICAgY29uc3QgY2hhbmdlVmVydGljYWwgPSAoKSA9PiB7XG4gICAgICAgIHZlcnRpY2FsID0gIXZlcnRpY2FsO1xuICAgIH07XG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9ICgpID0+IHZlcnRpY2FsO1xuXG4gICAgY29uc3QgaXNBZmxvYXQgPSAoKSA9PiBoZWFsdGggPj0gMTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRJRDogKCkgPT4gaWQsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgZ2V0SGVhbHRoLFxuICAgICAgICBoaXQsXG4gICAgICAgIGlzQWZsb2F0LFxuICAgICAgICBjaGFuZ2VWZXJ0aWNhbCxcbiAgICAgICAgaXNWZXJ0aWNhbCxcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgU3F1YXJlID0gKCkgPT4ge1xuICAgIGxldCBhdHRhY2tlZCA9IDA7XG4gICAgY29uc3Qgd2FzQXR0YWNrZWQgPSAoKSA9PiBhdHRhY2tlZDtcblxuICAgIGxldCBzaGlwID0gbnVsbDtcbiAgICBjb25zdCBpc1Rha2VuID0gKCkgPT4gISFzaGlwO1xuICAgIGNvbnN0IGFkZFNoaXAgPSAobmV3U2hpcCkgPT4ge1xuICAgICAgICBzaGlwID0gbmV3U2hpcDtcbiAgICB9O1xuXG4gICAgY29uc3QgYXR0YWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAoc2hpcCkge1xuICAgICAgICAgICAgYXR0YWNrZWQgPSAyO1xuICAgICAgICAgICAgc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGF0dGFja2VkID0gMTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGVja1NoaXBBZmxvYXQgPSAoKSA9PiBzaGlwPy5pc0FmbG9hdCgpO1xuXG4gICAgY29uc3QgZ2V0U2hpcElkID0gKCkgPT4gc2hpcC5nZXRJRCgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2FzQXR0YWNrZWQsXG4gICAgICAgIGlzVGFrZW4sXG4gICAgICAgIGFkZFNoaXAsXG4gICAgICAgIGF0dGFjayxcbiAgICAgICAgY2hlY2tTaGlwQWZsb2F0LFxuICAgICAgICBnZXRTaGlwSWQsXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBCb2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgICAgZ3JpZC5wdXNoKFNxdWFyZSgpKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0R3JpZCA9ICgpID0+IFsuLi5ncmlkXTtcbiAgICBjb25zdCBnZXRHcmlkQXR0YWNrcyA9ICgpID0+IGdyaWQubWFwKChzcXVhcmUpID0+IHNxdWFyZS53YXNBdHRhY2tlZCgpKTtcbiAgICBjb25zdCBnZXRHcmlkU2hpcHMgPSAoKSA9PiBncmlkLm1hcCgoc3F1YXJlKSA9PiArc3F1YXJlLmlzVGFrZW4oKSk7XG4gICAgY29uc3QgZ2V0R3JpZElsbGVnYWwgPSAoKSA9PlxuICAgICAgICBncmlkLm1hcCgoc3F1YXJlLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXN0QmFzZSA9IFswLCAxMCwgLTEwXTtcbiAgICAgICAgICAgIGlmICghKGkgJSAxMCkpIHRlc3RCYXNlLnB1c2goLTksIDEsIDExKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKCEoKGkgKyAxKSAlIDEwKSkgdGVzdEJhc2UucHVzaCgtMTEsIC0xLCA5KTtcbiAgICAgICAgICAgIGVsc2UgdGVzdEJhc2UucHVzaCgtOSwgMSwgMTEsIC0xMSwgLTEsIDkpO1xuICAgICAgICAgICAgY29uc3QgYWRqYWNlbnQgPSB0ZXN0QmFzZVxuICAgICAgICAgICAgICAgIC5tYXAoKG51bSkgPT4gZ3JpZFtpICsgbnVtXT8uaXNUYWtlbigpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbikubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuICshIWFkamFjZW50O1xuICAgICAgICB9KTtcblxuICAgIGNvbnN0IHNoaXBzQWZsb2F0ID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IHVwZGF0ZVNoaXBzQWZsb2F0ID0gKCkgPT4ge1xuICAgICAgICBzaGlwc0FmbG9hdC5jbGVhcigpO1xuICAgICAgICBjb25zdCBzaGlwcyA9IGdyaWQuZmlsdGVyKChzcSkgPT4gc3EuY2hlY2tTaGlwQWZsb2F0KCkpO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzaGlwc0FmbG9hdC5hZGQoaXRlbS5nZXRTaGlwSWQoKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgZ2V0U2hpcHNBZmxvYXQgPSAoKSA9PiBbLi4uc2hpcHNBZmxvYXRdO1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHN0YXJ0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNwb3RzID0gW107XG4gICAgICAgIGNvbnN0IHsgbGVuZ3RoLCBpc1ZlcnRpY2FsIH0gPSBzaGlwO1xuICAgICAgICBjb25zdCBtdWx0aXBsaWVyID0gaXNWZXJ0aWNhbCgpID8gMTAgOiAxO1xuICAgICAgICBjb25zdCBlbmQgPSBzdGFydCArIG11bHRpcGxpZXIgKiBsZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSBtdWx0aXBsaWVyKSB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0Qm9vbCA9IGkgPiAxMDA7XG4gICAgICAgICAgICBjb25zdCBob3JpekJvb2wgPSAhKGkgJSAxMCkgfHwgdmVydEJvb2w7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKGlzVmVydGljYWwoKSA/IHZlcnRCb29sIDogaG9yaXpCb29sICYmIGkgIT09IHN0YXJ0KSB8fFxuICAgICAgICAgICAgICAgIGdldEdyaWRJbGxlZ2FsKClbaV1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwb3RzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgc3BvdHMuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICAgICAgZ3JpZFtpXS5hZGRTaGlwKHNoaXApO1xuICAgICAgICB9KTtcbiAgICAgICAgdXBkYXRlU2hpcHNBZmxvYXQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmQpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZ3JpZFtjb29yZF0uYXR0YWNrKCk7XG4gICAgICAgIHVwZGF0ZVNoaXBzQWZsb2F0KCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldEdyaWQsXG4gICAgICAgIGdldEdyaWRBdHRhY2tzLFxuICAgICAgICBnZXRHcmlkU2hpcHMsXG4gICAgICAgIGdldEdyaWRJbGxlZ2FsLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIGdldFNoaXBzQWZsb2F0LFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgYm9hcmRzID0ge1xuICAgIHA6IHt9LFxuICAgIGM6IHt9LFxuICAgIHJlc2V0OiAoKSA9PiB7XG4gICAgICAgIGJvYXJkcy5wID0gQm9hcmRGYWN0b3J5KCk7XG4gICAgICAgIGJvYXJkcy5jID0gQm9hcmRGYWN0b3J5KCk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBzaGlwcyA9IHtcbiAgICBwOiB7fSxcbiAgICBjOiB7fSxcbiAgICByZXNldDogKCkgPT4ge1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ2NhcnJpZXInLCA1XSxcbiAgICAgICAgICAgIFsnYmF0dGxlc2hpcCcsIDRdLFxuICAgICAgICAgICAgWydjcnVpc2VyJywgNF0sXG4gICAgICAgICAgICBbJ2Rlc3Ryb3llcicsIDNdLFxuICAgICAgICAgICAgWydzdWJtYXJpbmUnLCAzXSxcbiAgICAgICAgICAgIFsncGF0cm9sMScsIDJdLFxuICAgICAgICAgICAgWydwYXRyb2wyJywgMl0sXG4gICAgICAgIF0uZm9yRWFjaCgoW25hbWUsIGxlbl0pID0+IHtcbiAgICAgICAgICAgIHNoaXBzLnBbbmFtZV0gPSBTaGlwRmFjdG9yeShuYW1lLCBsZW4pO1xuICAgICAgICAgICAgc2hpcHMuY1tuYW1lXSA9IFNoaXBGYWN0b3J5KG5hbWUsIGxlbik7XG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xuXG4vLyBmdW5jdGlvbiBncmlkaWZ5KGdyaWQpIHtcbi8vICAgICByZXR1cm4gZ3JpZC5yZWR1Y2UoXG4vLyAgICAgICAgIChhY2MsIGN1cnIsIGluZGV4KSA9PiB7XG4vLyAgICAgICAgICAgICBpZiAoIShpbmRleCAlIDEwKSAmJiBpbmRleCA+IDApIGFjYy5wdXNoKFtdKTtcbi8vICAgICAgICAgICAgIGFjY1thY2MubGVuZ3RoIC0gMV0ucHVzaChjdXJyKTtcbi8vICAgICAgICAgICAgIHJldHVybiBhY2M7XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIFtbXV1cbi8vICAgICApO1xuLy8gfVxuIiwiaW1wb3J0IHsgYm9hcmRzLCBzaGlwcyB9IGZyb20gJy4vYm9hcmQnO1xuaW1wb3J0IHsgRSwgUHViU3ViIH0gZnJvbSAnLi9wdWJzdWInO1xuXG5leHBvcnQgY29uc3QgUGxheWVyID0gKCgpID0+IHtcbiAgICBsZXQgaHVtYW4gPSB0cnVlO1xuXG4gICAgY29uc3QgdG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICBodW1hbiA9ICFodW1hbjtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Q29tcENob2ljZSA9IChncmlkKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBncmlkLnJlZHVjZSgoYWNjLCBjdXJyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnIgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhY2MucHVzaChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIHJldHVybiBvcHRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9wdGlvbnMubGVuZ3RoKV07XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBodW1hbiA9IHRydWU7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvZ2dsZSxcbiAgICAgICAgZ2V0Q29tcENob2ljZSxcbiAgICAgICAgcmVzZXQsXG4gICAgICAgIGlzSHVtYW5UdXJuOiAoKSA9PiBodW1hbixcbiAgICB9O1xufSkoKTtcblxuY29uc3QgW1xuICAgIGMsXG4gICAgcCxcbiAgICBjYXJyaWVyLFxuICAgIGJhdHRsZXNoaXAsXG4gICAgY3J1aXNlcixcbiAgICBkZXN0cm95ZXIsXG4gICAgc3VibWFyaW5lLFxuICAgIHBhdHJvbDEsXG4gICAgcGF0cm9sMixcbl0gPSBbXG4gICAgJ2MnLFxuICAgICdwJyxcbiAgICAnY2FycmllcicsXG4gICAgJ2JhdHRsZXNoaXAnLFxuICAgICdjcnVpc2VyJyxcbiAgICAnZGVzdHJveWVyJyxcbiAgICAnc3VibWFyaW5lJyxcbiAgICAncGF0cm9sMScsXG4gICAgJ3BhdHJvbDInLFxuXTtcblxuZnVuY3Rpb24gY2hlY2tHYW1lT3ZlcigpIHtcbiAgICBsZXQgd2lubmVyID0gJyc7XG4gICAgaWYgKGJvYXJkcy5wLmdldFNoaXBzQWZsb2F0KCkubGVuZ3RoIDwgMSkge1xuICAgICAgICB3aW5uZXIgPSAnQ29tcHV0ZXInO1xuICAgIH1cbiAgICBpZiAoYm9hcmRzLmMuZ2V0U2hpcHNBZmxvYXQoKS5sZW5ndGggPCAxKSB7XG4gICAgICAgIHdpbm5lciA9ICdQbGF5ZXInO1xuICAgIH1cbiAgICByZXR1cm4gd2lubmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheVJvdW5kKGNvb3JkKSB7XG4gICAgY29uc3Qgb3Bwb25lbnQgPSBQbGF5ZXIuaXNIdW1hblR1cm4oKSA/ICdjJyA6ICdwJztcbiAgICBjb25zdCBoaXQgPSBib2FyZHNbb3Bwb25lbnRdLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICAgIGNvbnN0IGdhbWVPdmVyID0gY2hlY2tHYW1lT3ZlcigpO1xuXG4gICAgaWYgKCFoaXQpIFBsYXllci50b2dnbGUoKTtcblxuICAgIFB1YlN1Yi5wdWJsaXNoKEUuVVBEQVRFKTtcblxuICAgIGlmIChnYW1lT3ZlcikgcmV0dXJuIGdhbWVPdmVyO1xuXG4gICAgaWYgKCFQbGF5ZXIuaXNIdW1hblR1cm4oKSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHBsYXlSb3VuZChQbGF5ZXIuZ2V0Q29tcENob2ljZShib2FyZHMucC5nZXRHcmlkQXR0YWNrcygpKSk7XG4gICAgICAgIH0sIDgwMCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcmVzZXRHYW1lKCkge1xuICAgIFBsYXllci5yZXNldCgpO1xuICAgIGJvYXJkcy5yZXNldCgpO1xuICAgIHNoaXBzLnJlc2V0KCk7XG4gICAgUHViU3ViLnB1Ymxpc2goRS5VUERBVEUpO1xufVxuXG4vLyBkZXZNb2RlXG5leHBvcnQgZnVuY3Rpb24gdGVzdFNoaXBQbGFjZW1lbnQoKSB7XG4gICAgcmVzZXRHYW1lKCk7XG5cbiAgICBbcCwgY10uZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICAgIFtcbiAgICAgICAgICAgIFtjYXJyaWVyLCAwXSxcbiAgICAgICAgICAgIFtiYXR0bGVzaGlwLCAyMl0sXG4gICAgICAgICAgICBbY3J1aXNlciwgNDVdLFxuICAgICAgICAgICAgW2Rlc3Ryb3llciwgOTRdLFxuICAgICAgICAgICAgW3N1Ym1hcmluZSwgNjddLFxuICAgICAgICAgICAgW3BhdHJvbDEsIDE3XSxcbiAgICAgICAgICAgIFtwYXRyb2wyLCA4MV0sXG4gICAgICAgIF0uZm9yRWFjaCgoW3NoaXBOYW1lLCBzcG90XSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXBOYW1lID09PSBiYXR0bGVzaGlwIHx8IHNoaXBOYW1lID09PSBwYXRyb2wyKSB7XG4gICAgICAgICAgICAgICAgc2hpcHNbcGxheWVyXVtzaGlwTmFtZV0uY2hhbmdlVmVydGljYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkc1twbGF5ZXJdLnBsYWNlU2hpcChzaGlwc1twbGF5ZXJdW3NoaXBOYW1lXSwgc3BvdCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2FtZVN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBsYXllclNoaXBzR3JpZDogYm9hcmRzLnAuZ2V0R3JpZFNoaXBzKCksXG4gICAgICAgIHBsYXllckF0dGFja3NHcmlkOiBib2FyZHMucC5nZXRHcmlkQXR0YWNrcygpLFxuICAgICAgICBjb21wQXR0YWNrc0dyaWQ6IGJvYXJkcy5jLmdldEdyaWRBdHRhY2tzKCksXG4gICAgICAgIGlzSHVtYW46IFBsYXllci5pc0h1bWFuVHVybigpLFxuICAgICAgICBwU2NvcmU6IGJvYXJkcy5wLmdldFNoaXBzQWZsb2F0KCkubGVuZ3RoLFxuICAgICAgICBjU2NvcmU6IGJvYXJkcy5jLmdldFNoaXBzQWZsb2F0KCkubGVuZ3RoLFxuICAgIH07XG59XG5cbnJlc2V0R2FtZSgpO1xuIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0gRE9NIEZhY3RvcmllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gZWxGYWN0b3J5KHR5cGUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuID0gW10pIHtcbiAgICByZXR1cm4geyB0eXBlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHRtbEZhY3Rvcnkob2JqKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iai50eXBlKTtcbiAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IG9iajtcblxuICAgIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBpZiAoa2V5ICE9PSAnZGF0YXNldCcpIHtcbiAgICAgICAgICAgIGVsW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgZGlyZWN0aW9ucyBuZWVkZWQgdG8gc2V0IFwiZGF0YS1cIiBwcm9wZXJ0aWVzXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW3Byb3AsIGRhdGFdKSA9PiB7XG4gICAgICAgICAgICAgICAgZWwuZGF0YXNldFtwcm9wXSA9IGRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgb2JqLmNoaWxkcmVuPy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAvLyBBbGxvd3MgZm9yIGNvbmRpdGlvbmFsbHkgYWRkaW5nIGNoaWxkcmVuIHVwc3RyZWFtIGJ5XG4gICAgICAgIC8vIHNldHRpbmcgXCJcIiBhcyB0aGUgYWx0ZXJuYXRpdmUgdG8gZWxGYWN0b3J5KClcbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChodG1sRmFjdG9yeShjaGlsZCkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWw7XG59XG4iLCJleHBvcnQgY29uc3QgUHViU3ViID0gKCgpID0+IHtcbiAgICBjb25zdCBldmVudHNMaXN0ID0ge307XG4gICAgLy8geyBrZXk6IFwidHJpZ2dlckV2ZW50XCIsIHZhbHVlOiBbIGFycmF5IG9mIGZ1bmN0aW9ucyBdIH1cblxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZSh0cmlnZ2VyRXZlbnQsIHN1YnNjcmliZXIpIHtcbiAgICAgICAgaWYgKCFldmVudHNMaXN0W3RyaWdnZXJFdmVudF0pIHtcbiAgICAgICAgICAgIGV2ZW50c0xpc3RbdHJpZ2dlckV2ZW50XSA9IFtzdWJzY3JpYmVyXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50c0xpc3RbdHJpZ2dlckV2ZW50XS5wdXNoKHN1YnNjcmliZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZ1bmN0aW9uTGlzdCA9IGV2ZW50c0xpc3RbdHJpZ2dlckV2ZW50XTtcbiAgICAgICAgICAgICAgICBjb25zdCBpID0gZnVuY3Rpb25MaXN0LmluZGV4T2Yoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbkxpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHVibGlzaCh0cmlnZ2VyRXZlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgZnVuY3Rpb25MaXN0ID0gZXZlbnRzTGlzdFt0cmlnZ2VyRXZlbnRdO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmdW5jdGlvbkxpc3QpKSB7XG4gICAgICAgICAgICBmdW5jdGlvbkxpc3QuZm9yRWFjaCgoc3Vic2NyaWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIoLi4uYXJncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHN1YnNjcmliZSwgcHVibGlzaCB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IEUgPSB7XG4gICAgVVBEQVRFOiAnVXBkYXRlRGlzcGxheScsXG59O1xuIiwiaW1wb3J0IHsgRSwgUHViU3ViIH0gZnJvbSAnLi9wdWJzdWInO1xuaW1wb3J0IHsgZ2V0R2FtZVN0YXRlLCBwbGF5Um91bmQsIHRlc3RTaGlwUGxhY2VtZW50IH0gZnJvbSAnLi9nYW1lLWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgZWxGYWN0b3J5LCBodG1sRmFjdG9yeSB9IGZyb20gJy4vaGVscGVycyc7XG5cbmNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJ0LWJ0bicpO1xuXG5jb25zdCBjdXJyZW50VHVyblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudCcpO1xuY29uc3QgYm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcyAuY29udGFpbmVyJyk7XG5jb25zdCBwU2NvcmVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllci1zY29yZScpO1xuY29uc3QgY1Njb3JlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wdXRlci1zY29yZScpO1xuY29uc3Qgd2lubmVyRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5uZXInKTtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5jb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXAnKTtcbmNvbnN0IG5ld0dhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LWdhbWUtYnRuJyk7XG5cbmZ1bmN0aW9uIGVuZEdhbWVEaXNwbGF5KHdpbm5lcikge1xuICAgIHdpbm5lckRpc3BsYXkudGV4dENvbnRlbnQgPSB3aW5uZXI7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHBvcFVwLmNsYXNzTGlzdC50b2dnbGUoJ3NocnVuaycpO1xuICAgIH0sIDE1MCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUJvYXJkQ2xpY2soZSkge1xuICAgIGNvbnN0IGNvb3JkID0gZS50YXJnZXQuZGF0YXNldC5hdHRhY2tDb29yZDtcbiAgICBpZiAoIWNvb3JkKSByZXR1cm47XG4gICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC5hdHRhY2tzJylcbiAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQm9hcmRDbGljayk7XG4gICAgY29uc3QgZ2FtZU92ZXIgPSBwbGF5Um91bmQoY29vcmQpO1xuICAgIGlmIChnYW1lT3Zlcikge1xuICAgICAgICBlbmRHYW1lRGlzcGxheShnYW1lT3Zlcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDdXJyZW50UGxheWVyKGlzSHVtYW4gPSB0cnVlKSB7XG4gICAgaWYgKGlzSHVtYW4pIHtcbiAgICAgICAgY3VycmVudFR1cm5UZXh0LnRleHRDb250ZW50ID0gJ1BsYXllcic7XG4gICAgICAgIC8vIFVubG9jayBncmlkXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmJvYXJkLmF0dGFja3MnKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQm9hcmRDbGljayk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFR1cm5UZXh0LnRleHRDb250ZW50ID0gJ0NvbXB1dGVyJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUJvYXJkcyhcbiAgICBwbGF5ZXJTaGlwc0dyaWQgPSBbXSxcbiAgICBwbGF5ZXJBdHRhY2tzR3JpZCA9IFtdLFxuICAgIGNvbXBBdHRhY2tzR3JpZCA9IFtdXG4pIHtcbiAgICBib2FyZHNDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBzaGlwc0JvYXJkID0gZWxGYWN0b3J5KCdkaXYnLCB7IGNsYXNzTGlzdDogJ2JvYXJkIHNoaXBzJyB9KTtcbiAgICBjb25zdCBhdHRhY2tzQm9hcmQgPSBlbEZhY3RvcnkoJ2RpdicsIHsgY2xhc3NMaXN0OiAnYm9hcmQgYXR0YWNrcycgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHRha2VuID0gcGxheWVyU2hpcHNHcmlkW2ldID8gJyBzaGlwJyA6ICcnO1xuICAgICAgICBjb25zdCBjb21wQXR0YWNrID0gWycnLCAnIG1pc3MnLCAnIGhpdCddW3BsYXllckF0dGFja3NHcmlkW2ldXSA/PyAnJztcbiAgICAgICAgc2hpcHNCb2FyZC5jaGlsZHJlbi5wdXNoKFxuICAgICAgICAgICAgZWxGYWN0b3J5KCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IGksIC8vIGRldk1vZGVcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IGBzcXVhcmUke3Rha2VufSR7Y29tcEF0dGFja31gLFxuICAgICAgICAgICAgICAgIGRhdGFzZXQ6IHsgc2hpcENvb3JkOiBpIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHBsYXllckF0dGFjayA9IFsnJywgJyBtaXNzJywgJyBoaXQnXVtjb21wQXR0YWNrc0dyaWRbaV1dID8/ICcnO1xuICAgICAgICBhdHRhY2tzQm9hcmQuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICAgIGVsRmFjdG9yeSgnYnV0dG9uJywge1xuICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBpLCAvLyBkZXZNb2RlXG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBgc3F1YXJlJHtwbGF5ZXJBdHRhY2t9YCxcbiAgICAgICAgICAgICAgICBkYXRhc2V0OiB7IGF0dGFja0Nvb3JkOiBpIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChodG1sRmFjdG9yeShzaGlwc0JvYXJkKSk7XG4gICAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5KGF0dGFja3NCb2FyZCkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTY29yZXMocFNjb3JlLCBjU2NvcmUpIHtcbiAgICBwU2NvcmVEaXNwbGF5LnRleHRDb250ZW50ID0gcFNjb3JlO1xuICAgIGNTY29yZURpc3BsYXkudGV4dENvbnRlbnQgPSBjU2NvcmU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgLy8gR2V0cyBpbmZvIGZyb20gZ2FtZS1jb250cm9sbGVyXG4gICAgY29uc3Qge1xuICAgICAgICBwbGF5ZXJTaGlwc0dyaWQsXG4gICAgICAgIHBsYXllckF0dGFja3NHcmlkLFxuICAgICAgICBjb21wQXR0YWNrc0dyaWQsXG4gICAgICAgIGlzSHVtYW4sXG4gICAgICAgIHBTY29yZSxcbiAgICAgICAgY1Njb3JlLFxuICAgIH0gPSBnZXRHYW1lU3RhdGUoKTtcblxuICAgIC8vIFVwZGF0ZXMgYm9hcmRzLCBjdXJyZW50IHBsYXllciwgYW5kIHNjb3Jlc1xuICAgIHVwZGF0ZUJvYXJkcyhwbGF5ZXJTaGlwc0dyaWQsIHBsYXllckF0dGFja3NHcmlkLCBjb21wQXR0YWNrc0dyaWQpO1xuICAgIHVwZGF0ZUN1cnJlbnRQbGF5ZXIoaXNIdW1hbik7XG4gICAgdXBkYXRlU2NvcmVzKHBTY29yZSwgY1Njb3JlKTtcbn1cblxudXBkYXRlRGlzcGxheSgpO1xuXG4vLyBkZXZNb2RlXG5zdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0ZXN0U2hpcFBsYWNlbWVudCgpO1xuICAgIHVwZGF0ZURpc3BsYXkoKTtcbn0pO1xuXG4vLyBkZXZNb2RlXG5uZXdHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRlc3RTaGlwUGxhY2VtZW50KCk7XG4gICAgdXBkYXRlRGlzcGxheSgpO1xufSk7XG5cblB1YlN1Yi5zdWJzY3JpYmUoRS5VUERBVEUsIHVwZGF0ZURpc3BsYXkpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3NjcmVlbi1jb250cm9sbGVyJztcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=