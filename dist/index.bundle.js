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
    --square-dim: 5vw;
}

body {
    height: 100svh;
    display: flex;
    flex-direction: column;
}

.shrunk {
    transform: scale(0);
}

.hidden {
    display: none !important;
}

@media (min-width: 700px) {
    :root {
        --square-dim: 3vw;
    }
}

/* ---------------     /Utilities & Universals     --------------- */
/* ---------------     CONTENT     --------------- */

/* ---------------     Header     --------------- */

header {
    padding: 15px;

    display: flex;
    justify-content: space-between;
}

#home-btn {
    padding: 10px;
    border-radius: 6px;
    font-size: 1.2rem;
}

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
.game-boards {
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

button.square:not(.miss):not(.hit):not(.ship):hover {
    background-color: hsl(205, 75%, 50%);
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
}
/* ---------------     /Boards     --------------- */

/* ---------------     Scores     --------------- */

.scores {
    display: flex;
    justify-content: space-evenly;

    text-align: right;
}

/* ---------------     /Scores     --------------- */
/* ---------------     /Main     --------------- */

/* ---------------     Home-Screen     --------------- */

.home-screen button {
    padding: 10px;
    font-size: 1.2rem;
}

/* ---------------     /Home-Screen     --------------- */

/* ---------------     End Screen     --------------- */

.modal {
    z-index: 1;
    position: absolute;
    height: 100svh;
    width: 100vw;

    display: grid;
    place-content: center;

    background-color: #0000004d;
    backdrop-filter: blur(2px);
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

/* ---------------     /End Screen     --------------- */

/* ---------------     Footer     --------------- */

footer {
    margin-top: auto;
    margin-bottom: 10px;
    text-align: center;
}
/* ---------------     /Footer     --------------- */

/* ---------------     /CONTENT     --------------- */
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA,mDAAmD;;AAEnD;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA,oDAAoD;AACpD,mEAAmE;;AAEnE;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI;QACI,iBAAiB;IACrB;AACJ;;AAEA,oEAAoE;AACpE,oDAAoD;;AAEpD,mDAAmD;;AAEnD;IACI,aAAa;;IAEb,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA,oDAAoD;;AAEpD,iDAAiD;AACjD;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA,mDAAmD;AACnD;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,oDAAoD;IACpD,iDAAiD;IACjD,QAAQ;IACR,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,YAAY;;IAEZ,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI;QACI,mBAAmB;IACvB;AACJ;AACA,oDAAoD;;AAEpD,mDAAmD;;AAEnD;IACI,aAAa;IACb,6BAA6B;;IAE7B,iBAAiB;AACrB;;AAEA,oDAAoD;AACpD,kDAAkD;;AAElD,wDAAwD;;AAExD;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA,yDAAyD;;AAEzD,uDAAuD;;AAEvD;IACI,UAAU;IACV,kBAAkB;IAClB,cAAc;IACd,YAAY;;IAEZ,aAAa;IACb,qBAAqB;;IAErB,2BAA2B;IAC3B,0BAA0B;AAC9B;;AAEA;IACI,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;;IAET,sBAAsB;IACtB,kBAAkB;IAClB,sBAAsB;;IAEtB,kBAAkB;;IAElB,kBAAkB;AACtB;;AAEA,wDAAwD;;AAExD,mDAAmD;;AAEnD;IACI,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB;AACA,oDAAoD;;AAEpD,qDAAqD","sourcesContent":["/* ---------------     Reboot     --------------- */\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* color: unset; */\n}\n\n/* ---------------     /Reboot     --------------- */\n/* ---------------     Utilities & Universals     --------------- */\n\n:root {\n    --eg-var: red;\n    --square-dim: 5vw;\n}\n\nbody {\n    height: 100svh;\n    display: flex;\n    flex-direction: column;\n}\n\n.shrunk {\n    transform: scale(0);\n}\n\n.hidden {\n    display: none !important;\n}\n\n@media (min-width: 700px) {\n    :root {\n        --square-dim: 3vw;\n    }\n}\n\n/* ---------------     /Utilities & Universals     --------------- */\n/* ---------------     CONTENT     --------------- */\n\n/* ---------------     Header     --------------- */\n\nheader {\n    padding: 15px;\n\n    display: flex;\n    justify-content: space-between;\n}\n\n#home-btn {\n    padding: 10px;\n    border-radius: 6px;\n    font-size: 1.2rem;\n}\n\n/* ---------------     /Header     --------------- */\n\n/* ---------------     Main     --------------- */\nmain {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n.current-info {\n    display: flex;\n    justify-content: center;\n}\n/* ---------------     Boards     --------------- */\n.game-boards {\n    display: grid;\n    place-content: center;\n}\n\n.container {\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n\n    background-color: grey;\n}\n\n.board {\n    padding: 3px;\n    display: grid;\n    grid-template-columns: repeat(10, var(--square-dim));\n    grid-template-rows: repeat(10, var(--square-dim));\n    gap: 3px;\n    background-color: #fff;\n}\n\n.square {\n    background-color: skyblue;\n    border: none;\n\n    /* devMode */\n    color: white;\n    display: grid;\n    place-content: center;\n    font-size: 1rem;\n}\n\nbutton.square {\n    cursor: pointer;\n}\n\nbutton.square:not(.miss):not(.hit):not(.ship):hover {\n    background-color: hsl(205, 75%, 50%);\n}\n\n.square.ship {\n    background-color: navy;\n}\n\n.square.hit {\n    background-color: red;\n}\n\n.square.miss {\n    background-color: yellow;\n}\n\n@media (min-width: 700px) {\n    .container {\n        flex-direction: row;\n    }\n}\n/* ---------------     /Boards     --------------- */\n\n/* ---------------     Scores     --------------- */\n\n.scores {\n    display: flex;\n    justify-content: space-evenly;\n\n    text-align: right;\n}\n\n/* ---------------     /Scores     --------------- */\n/* ---------------     /Main     --------------- */\n\n/* ---------------     Home-Screen     --------------- */\n\n.home-screen button {\n    padding: 10px;\n    font-size: 1.2rem;\n}\n\n/* ---------------     /Home-Screen     --------------- */\n\n/* ---------------     End Screen     --------------- */\n\n.modal {\n    z-index: 1;\n    position: absolute;\n    height: 100svh;\n    width: 100vw;\n\n    display: grid;\n    place-content: center;\n\n    background-color: #0000004d;\n    backdrop-filter: blur(2px);\n}\n\n.pop-up {\n    padding: 20px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n\n    border: 1px solid #000;\n    border-radius: 5px;\n    background-color: #fff;\n\n    text-align: center;\n\n    transition: all 1s;\n}\n\n/* ---------------     /End Screen     --------------- */\n\n/* ---------------     Footer     --------------- */\n\nfooter {\n    margin-top: auto;\n    margin-bottom: 10px;\n    text-align: center;\n}\n/* ---------------     /Footer     --------------- */\n\n/* ---------------     /CONTENT     --------------- */\n"],"sourceRoot":""}]);
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
            const sunk = !ship.isAfloat();
            return { hit: true, sunk };
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
            const vertBool = i >= 100;
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
    reset: (target = false) => {
        if (target) {
            boards[target] = BoardFactory();
        } else {
            boards.p = BoardFactory();
            boards.c = BoardFactory();
        }
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
/* harmony export */   checkGameStarted: () => (/* binding */ checkGameStarted),
/* harmony export */   getGameState: () => (/* binding */ getGameState),
/* harmony export */   getOpenIndices: () => (/* binding */ getOpenIndices),
/* harmony export */   placeRandomShips: () => (/* binding */ placeRandomShips),
/* harmony export */   playRound: () => (/* binding */ playRound),
/* harmony export */   resetGame: () => (/* binding */ resetGame)
/* harmony export */ });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/scripts/board.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/scripts/pubsub.js");



let gameStarted = false;
const checkGameStarted = () => gameStarted;

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
    const { hit, sunk } = _board__WEBPACK_IMPORTED_MODULE_0__.boards[opponent].receiveAttack(coord);
    const gameOver = checkGameOver();

    if (sunk) {
        // attack nearby coords
        console.log('sunk');
    }

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
    gameStarted = false;
    Player.reset();
    _board__WEBPACK_IMPORTED_MODULE_0__.boards.reset();
    _board__WEBPACK_IMPORTED_MODULE_0__.ships.reset();
    _pubsub__WEBPACK_IMPORTED_MODULE_1__.PubSub.publish(_pubsub__WEBPACK_IMPORTED_MODULE_1__.E.UPDATE);
}

function getOpenIndices(player) {
    return _board__WEBPACK_IMPORTED_MODULE_0__.boards[player]
        .getGridIllegal()
        .map((val, index) => ({ val, index }))
        .filter((item) => item.val === 0)
        .map((item) => item.index);
}

function placeRandomShips(player) {
    _board__WEBPACK_IMPORTED_MODULE_0__.boards.reset(player);
    gameStarted = true;
    const failedSpots = [];
    const shipNames = [
        'carrier',
        'battleship',
        'cruiser',
        'destroyer',
        'submarine',
        'patrol1',
        'patrol2',
    ];
    shipNames.forEach((name) => {
        const ship = _board__WEBPACK_IMPORTED_MODULE_0__.ships[player][name];
        let success = false;
        while (failedSpots.length < 88 && !success) {
            const openIndices = getOpenIndices(player);
            const spot =
                openIndices[
                    Math.floor(Math.random() * (openIndices.length - 1))
                ];

            if (Math.floor(Math.random() + 0.5)) {
                ship.changeVertical();
            }

            success = _board__WEBPACK_IMPORTED_MODULE_0__.boards[player].placeShip(ship, spot);

            if (!success) {
                ship.changeVertical();
                success = _board__WEBPACK_IMPORTED_MODULE_0__.boards[player].placeShip(ship, spot);
                if (!success) {
                    failedSpots.push(spot);
                }
            }
        }
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




// Pre-game Vars
const homeScreen = document.querySelector('.home-screen');
const preGameBoard = document.querySelector('.pre-game-board');
const randomBoardBtn = document.querySelector('#random-board-btn');
const startBtn = document.querySelector('#start-btn');

// In-game Vars
const homeBtn = document.querySelector('#home-btn');
const currentTurnText = document.querySelector('#current');
const shipsBoard = document.querySelector('.game-boards .ships');
const attacksBoard = document.querySelector('.game-boards .attacks');
const pScoreDisplay = document.querySelector('#player-score');
const cScoreDisplay = document.querySelector('#computer-score');

// Post-game Vars
const winnerDisplay = document.querySelector('#winner');
const endScreen = document.querySelector('.end-screen');
const popUp = document.querySelector('.pop-up');
const newGameBtn = document.querySelector('#new-game-btn');

function endGameDisplay(winner) {
    winnerDisplay.textContent = winner;
    endScreen.classList.remove('hidden');
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
        document
            .querySelector('.board.attacks')
            .addEventListener('click', handleBoardClick);
    } else {
        currentTurnText.textContent = 'Computer';
    }
}

function updateShipsBoard(
    isPlacementPhase = false,
    playerShipsGrid = [],
    playerAttacksGrid = []
) {
    const appendTarget = isPlacementPhase ? preGameBoard : shipsBoard;
    appendTarget.textContent = '';
    const shipsGrid = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.elFactory)('div', { classList: 'board ships' });

    for (let i = 0; i < 100; i += 1) {
        const taken = playerShipsGrid[i] ? ' ship' : '';
        const compAttack = ['', ' miss', ' hit'][playerAttacksGrid[i]] ?? '';
        const place = isPlacementPhase ? ' place' : '';
        shipsGrid.children.push(
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.elFactory)('div', {
                textContent: i, // devMode
                classList: `square${taken}${compAttack}${place}`,
                dataset: { shipCoord: i },
            })
        );
    }

    appendTarget.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.htmlFactory)(shipsGrid));
}

function updateAttacksBoard(compAttacksGrid = []) {
    attacksBoard.textContent = '';

    const attacksGrid = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.elFactory)('div', { classList: 'board attacks' });

    for (let i = 0; i < 100; i += 1) {
        const playerAttack = ['', ' miss', ' hit'][compAttacksGrid[i]] ?? '';
        attacksGrid.children.push(
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.elFactory)('button', {
                textContent: i, // devMode
                classList: `square${playerAttack}`,
                dataset: { attackCoord: i },
            })
        );
    }

    attacksBoard.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.htmlFactory)(attacksGrid));
}

function updateScores(pScore, cScore) {
    pScoreDisplay.textContent = pScore;
    cScoreDisplay.textContent = cScore;
}

function updateDisplay(isPlacementPhase = false) {
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
    updateShipsBoard(isPlacementPhase, playerShipsGrid, playerAttacksGrid);
    updateAttacksBoard(compAttacksGrid);
    updateCurrentPlayer(isHuman);
    updateScores(pScore, cScore);
}

function startApp() {
    (0,_game_controller__WEBPACK_IMPORTED_MODULE_1__.resetGame)();
    endScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
    updateDisplay(true);
}

startBtn.addEventListener('click', () => {
    if ((0,_game_controller__WEBPACK_IMPORTED_MODULE_1__.checkGameStarted)()) {
        updateDisplay();
        homeScreen.classList.add('hidden');
    }
});

randomBoardBtn.addEventListener('click', () => {
    (0,_game_controller__WEBPACK_IMPORTED_MODULE_1__.placeRandomShips)('p');
    (0,_game_controller__WEBPACK_IMPORTED_MODULE_1__.placeRandomShips)('c');
    updateDisplay(true);
});

homeBtn.addEventListener('click', startApp);

newGameBtn.addEventListener('click', () => {
    startApp();
    updateDisplay();
});

_pubsub__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(_pubsub__WEBPACK_IMPORTED_MODULE_0__.E.UPDATE, updateDisplay);

startApp();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywrRkFBK0YsUUFBUSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxjQUFjLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLGNBQWMsY0FBYyxNQUFNLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLGFBQWEsYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssYUFBYSxjQUFjLE1BQU0sVUFBVSxhQUFhLGFBQWEsT0FBTyxZQUFZLGNBQWMsY0FBYyxNQUFNLFVBQVUsWUFBWSxPQUFPLGFBQWEsY0FBYyxNQUFNLFVBQVUsWUFBWSxXQUFXLFdBQVcsVUFBVSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxjQUFjLGNBQWMsYUFBYSxPQUFPLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sYUFBYSxtSEFBbUgsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsdUJBQXVCLEtBQUssMElBQTBJLG9CQUFvQix3QkFBd0IsR0FBRyxVQUFVLHFCQUFxQixvQkFBb0IsNkJBQTZCLEdBQUcsYUFBYSwwQkFBMEIsR0FBRyxhQUFhLCtCQUErQixHQUFHLCtCQUErQixhQUFhLDRCQUE0QixPQUFPLEdBQUcsb01BQW9NLG9CQUFvQixzQkFBc0IscUNBQXFDLEdBQUcsZUFBZSxvQkFBb0IseUJBQXlCLHdCQUF3QixHQUFHLHVIQUF1SCxjQUFjLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsbUJBQW1CLG9CQUFvQiw4QkFBOEIsR0FBRyxzRUFBc0Usb0JBQW9CLDRCQUE0QixHQUFHLGdCQUFnQixvQkFBb0Isb0JBQW9CLDZCQUE2QixnQkFBZ0IsK0JBQStCLEdBQUcsWUFBWSxtQkFBbUIsb0JBQW9CLDJEQUEyRCx3REFBd0QsZUFBZSw2QkFBNkIsR0FBRyxhQUFhLGdDQUFnQyxtQkFBbUIsd0NBQXdDLG9CQUFvQiw0QkFBNEIsc0JBQXNCLEdBQUcsbUJBQW1CLHNCQUFzQixHQUFHLHlEQUF5RCwyQ0FBMkMsR0FBRyxrQkFBa0IsNkJBQTZCLEdBQUcsaUJBQWlCLDRCQUE0QixHQUFHLGtCQUFrQiwrQkFBK0IsR0FBRywrQkFBK0Isa0JBQWtCLDhCQUE4QixPQUFPLEdBQUcsNEhBQTRILG9CQUFvQixvQ0FBb0MsMEJBQTBCLEdBQUcsb01BQW9NLG9CQUFvQix3QkFBd0IsR0FBRyxzSUFBc0ksaUJBQWlCLHlCQUF5QixxQkFBcUIsbUJBQW1CLHNCQUFzQiw0QkFBNEIsb0NBQW9DLGlDQUFpQyxHQUFHLGFBQWEsb0JBQW9CLHNCQUFzQiw2QkFBNkIsOEJBQThCLGdCQUFnQiwrQkFBK0IseUJBQXlCLDZCQUE2QiwyQkFBMkIsMkJBQTJCLEdBQUcsaUlBQWlJLHVCQUF1QiwwQkFBMEIseUJBQXlCLEdBQUcsc0lBQXNJO0FBQ3pvSztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzdNMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0E7QUFDQSw0QkFBNEIsU0FBUztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxTQUFTO0FBQ1QsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUCxTQUFTO0FBQ1QsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1S3dDO0FBQ0g7O0FBRXJDO0FBQ087O0FBRUE7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLFFBQVEsMENBQU07QUFDZDtBQUNBO0FBQ0EsUUFBUSwwQ0FBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxZQUFZLFlBQVksRUFBRSwwQ0FBTTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLDJDQUFNLFNBQVMsc0NBQUM7O0FBRXBCOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsMENBQU07QUFDakQsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxJQUFJLDBDQUFNO0FBQ1YsSUFBSSx5Q0FBSztBQUNULElBQUksMkNBQU0sU0FBUyxzQ0FBQztBQUNwQjs7QUFFTztBQUNQLFdBQVcsMENBQU07QUFDakI7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1QztBQUNBO0FBQ0E7O0FBRU87QUFDUCxJQUFJLDBDQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlDQUFLO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsMENBQU07O0FBRTVCO0FBQ0E7QUFDQSwwQkFBMEIsMENBQU07QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0EseUJBQXlCLDBDQUFNO0FBQy9CLDJCQUEyQiwwQ0FBTTtBQUNqQyx5QkFBeUIsMENBQU07QUFDL0I7QUFDQSxnQkFBZ0IsMENBQU07QUFDdEIsZ0JBQWdCLDBDQUFNO0FBQ3RCO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SUE7QUFDQTtBQUNBOztBQUVPO0FBQ1AsYUFBYTtBQUNiOztBQUVPO0FBQ1A7QUFDQSxZQUFZLGFBQWE7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDTztBQUNQO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVNO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkNxQztBQU9WO0FBQ3dCOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtREFBUyxVQUFVLDBCQUEwQjs7QUFFbkUsb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFTO0FBQ3JCO0FBQ0Esb0NBQW9DLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTTtBQUMvRCwyQkFBMkIsY0FBYztBQUN6QyxhQUFhO0FBQ2I7QUFDQTs7QUFFQSw2QkFBNkIscURBQVc7QUFDeEM7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0IsbURBQVMsVUFBVSw0QkFBNEI7O0FBRXZFLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQSxZQUFZLG1EQUFTO0FBQ3JCO0FBQ0Esb0NBQW9DLGFBQWE7QUFDakQsMkJBQTJCLGdCQUFnQjtBQUMzQyxhQUFhO0FBQ2I7QUFDQTs7QUFFQSw2QkFBNkIscURBQVc7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxFQUFFLDhEQUFZOztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDJEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGtFQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsSUFBSSxrRUFBZ0I7QUFDcEIsSUFBSSxrRUFBZ0I7QUFDcEI7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsMkNBQU0sV0FBVyxzQ0FBQzs7QUFFbEI7Ozs7Ozs7VUM3SkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBNkI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWUtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcHVic3ViLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9zY3JlZW4tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC8qIGNvbG9yOiB1bnNldDsgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbjpyb290IHtcbiAgICAtLWVnLXZhcjogcmVkO1xuICAgIC0tc3F1YXJlLWRpbTogNXZ3O1xufVxuXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHN2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaHJ1bmsge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgOnJvb3Qge1xuICAgICAgICAtLXNxdWFyZS1kaW06IDN2dztcbiAgICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1V0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICBDT05URU5UICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBIZWFkZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI2hvbWUtYnRuIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBNYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbm1haW4ge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMzBweDtcbn1cblxuLmN1cnJlbnQtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgQm9hcmRzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi5nYW1lLWJvYXJkcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTVweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi5ib2FyZCB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIHZhcigtLXNxdWFyZS1kaW0pKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgdmFyKC0tc3F1YXJlLWRpbSkpO1xuICAgIGdhcDogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5zcXVhcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgLyogZGV2TW9kZSAqL1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbmJ1dHRvbi5zcXVhcmUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uLnNxdWFyZTpub3QoLm1pc3MpOm5vdCguaGl0KTpub3QoLnNoaXApOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA1LCA3NSUsIDUwJSk7XG59XG5cbi5zcXVhcmUuc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcbn1cblxuLnNxdWFyZS5oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnNxdWFyZS5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbn1cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0JvYXJkcyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgU2NvcmVzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLnNjb3JlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9TY29yZXMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgSG9tZS1TY3JlZW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uaG9tZS1zY3JlZW4gYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Ib21lLVNjcmVlbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRW5kIFNjcmVlbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5tb2RhbCB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDBzdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNGQ7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG59XG5cbi5wb3AtdXAge1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIHRyYW5zaXRpb246IGFsbCAxcztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRW5kIFNjcmVlbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvQ09OVEVOVCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1EQUFtRDs7QUFFbkQ7OztJQUdJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQSxvREFBb0Q7QUFDcEQsbUVBQW1FOztBQUVuRTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUEsb0VBQW9FO0FBQ3BFLG9EQUFvRDs7QUFFcEQsbURBQW1EOztBQUVuRDtJQUNJLGFBQWE7O0lBRWIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBLG9EQUFvRDs7QUFFcEQsaURBQWlEO0FBQ2pEO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBLG1EQUFtRDtBQUNuRDtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTOztJQUVULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0RBQW9EO0lBQ3BELGlEQUFpRDtJQUNqRCxRQUFRO0lBQ1Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7O0lBRVosWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSjtBQUNBLG9EQUFvRDs7QUFFcEQsbURBQW1EOztBQUVuRDtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7O0lBRTdCLGlCQUFpQjtBQUNyQjs7QUFFQSxvREFBb0Q7QUFDcEQsa0RBQWtEOztBQUVsRCx3REFBd0Q7O0FBRXhEO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQSx5REFBeUQ7O0FBRXpELHVEQUF1RDs7QUFFdkQ7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZOztJQUVaLGFBQWE7SUFDYixxQkFBcUI7O0lBRXJCLDJCQUEyQjtJQUMzQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhOztJQUViLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7O0lBRVQsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7O0lBRXRCLGtCQUFrQjs7SUFFbEIsa0JBQWtCO0FBQ3RCOztBQUVBLHdEQUF3RDs7QUFFeEQsbURBQW1EOztBQUVuRDtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0Esb0RBQW9EOztBQUVwRCxxREFBcURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogLS0tLS0tLS0tLS0tLS0tICAgICBSZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiBjb2xvcjogdW5zZXQ7ICovXFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1JlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBVdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tZWctdmFyOiByZWQ7XFxuICAgIC0tc3F1YXJlLWRpbTogNXZ3O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDBzdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaHJ1bmsge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG4gICAgOnJvb3Qge1xcbiAgICAgICAgLS1zcXVhcmUtZGltOiAzdnc7XFxuICAgIH1cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBDT05URU5UICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEhlYWRlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jaG9tZS1idG4ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9IZWFkZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxubWFpbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLmN1cnJlbnQtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEJvYXJkcyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLmdhbWUtYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCB2YXIoLS1zcXVhcmUtZGltKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCB2YXIoLS1zcXVhcmUtZGltKSk7XFxuICAgIGdhcDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcblxcbiAgICAvKiBkZXZNb2RlICovXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmJ1dHRvbi5zcXVhcmUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbi5zcXVhcmU6bm90KC5taXNzKTpub3QoLmhpdCk6bm90KC5zaGlwKTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDUsIDc1JSwgNTAlKTtcXG59XFxuXFxuLnNxdWFyZS5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcXG59XFxuXFxuLnNxdWFyZS5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5zcXVhcmUubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Cb2FyZHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgU2NvcmVzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uc2NvcmVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9TY29yZXMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL01haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgSG9tZS1TY3JlZW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5ob21lLXNjcmVlbiBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvSG9tZS1TY3JlZW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRW5kIFNjcmVlbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLm1vZGFsIHtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMHN2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA0ZDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxufVxcblxcbi5wb3AtdXAge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9FbmQgU2NyZWVuICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEZvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Gb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0NPTlRFTlQgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gU2hpcEZhY3RvcnkoaWQsIGxlbmd0aCkge1xuICAgIGxldCBoZWFsdGggPSBsZW5ndGg7XG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoZWFsdGggLT0gMTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0SGVhbHRoID0gKCkgPT4gaGVhbHRoO1xuXG4gICAgbGV0IHZlcnRpY2FsID0gZmFsc2U7XG4gICAgY29uc3QgY2hhbmdlVmVydGljYWwgPSAoKSA9PiB7XG4gICAgICAgIHZlcnRpY2FsID0gIXZlcnRpY2FsO1xuICAgIH07XG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9ICgpID0+IHZlcnRpY2FsO1xuXG4gICAgY29uc3QgaXNBZmxvYXQgPSAoKSA9PiBoZWFsdGggPj0gMTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRJRDogKCkgPT4gaWQsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgZ2V0SGVhbHRoLFxuICAgICAgICBoaXQsXG4gICAgICAgIGlzQWZsb2F0LFxuICAgICAgICBjaGFuZ2VWZXJ0aWNhbCxcbiAgICAgICAgaXNWZXJ0aWNhbCxcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgU3F1YXJlID0gKCkgPT4ge1xuICAgIGxldCBhdHRhY2tlZCA9IDA7XG4gICAgY29uc3Qgd2FzQXR0YWNrZWQgPSAoKSA9PiBhdHRhY2tlZDtcblxuICAgIGxldCBzaGlwID0gbnVsbDtcbiAgICBjb25zdCBpc1Rha2VuID0gKCkgPT4gISFzaGlwO1xuICAgIGNvbnN0IGFkZFNoaXAgPSAobmV3U2hpcCkgPT4ge1xuICAgICAgICBzaGlwID0gbmV3U2hpcDtcbiAgICB9O1xuXG4gICAgY29uc3QgYXR0YWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAoc2hpcCkge1xuICAgICAgICAgICAgYXR0YWNrZWQgPSAyO1xuICAgICAgICAgICAgc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIGNvbnN0IHN1bmsgPSAhc2hpcC5pc0FmbG9hdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHsgaGl0OiB0cnVlLCBzdW5rIH07XG4gICAgICAgIH1cbiAgICAgICAgYXR0YWNrZWQgPSAxO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrU2hpcEFmbG9hdCA9ICgpID0+IHNoaXA/LmlzQWZsb2F0KCk7XG5cbiAgICBjb25zdCBnZXRTaGlwSWQgPSAoKSA9PiBzaGlwLmdldElEKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB3YXNBdHRhY2tlZCxcbiAgICAgICAgaXNUYWtlbixcbiAgICAgICAgYWRkU2hpcCxcbiAgICAgICAgYXR0YWNrLFxuICAgICAgICBjaGVja1NoaXBBZmxvYXQsXG4gICAgICAgIGdldFNoaXBJZCxcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEJvYXJkRmFjdG9yeSA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgICBncmlkLnB1c2goU3F1YXJlKCkpO1xuICAgIH1cbiAgICBjb25zdCBnZXRHcmlkID0gKCkgPT4gWy4uLmdyaWRdO1xuICAgIGNvbnN0IGdldEdyaWRBdHRhY2tzID0gKCkgPT4gZ3JpZC5tYXAoKHNxdWFyZSkgPT4gc3F1YXJlLndhc0F0dGFja2VkKCkpO1xuICAgIGNvbnN0IGdldEdyaWRTaGlwcyA9ICgpID0+IGdyaWQubWFwKChzcXVhcmUpID0+ICtzcXVhcmUuaXNUYWtlbigpKTtcbiAgICBjb25zdCBnZXRHcmlkSWxsZWdhbCA9ICgpID0+XG4gICAgICAgIGdyaWQubWFwKChzcXVhcmUsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlc3RCYXNlID0gWzAsIDEwLCAtMTBdO1xuICAgICAgICAgICAgaWYgKCEoaSAlIDEwKSkgdGVzdEJhc2UucHVzaCgtOSwgMSwgMTEpO1xuICAgICAgICAgICAgZWxzZSBpZiAoISgoaSArIDEpICUgMTApKSB0ZXN0QmFzZS5wdXNoKC0xMSwgLTEsIDkpO1xuICAgICAgICAgICAgZWxzZSB0ZXN0QmFzZS5wdXNoKC05LCAxLCAxMSwgLTExLCAtMSwgOSk7XG4gICAgICAgICAgICBjb25zdCBhZGphY2VudCA9IHRlc3RCYXNlXG4gICAgICAgICAgICAgICAgLm1hcCgobnVtKSA9PiBncmlkW2kgKyBudW1dPy5pc1Rha2VuKCkpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKS5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gKyEhYWRqYWNlbnQ7XG4gICAgICAgIH0pO1xuXG4gICAgY29uc3Qgc2hpcHNBZmxvYXQgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgdXBkYXRlU2hpcHNBZmxvYXQgPSAoKSA9PiB7XG4gICAgICAgIHNoaXBzQWZsb2F0LmNsZWFyKCk7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gZ3JpZC5maWx0ZXIoKHNxKSA9PiBzcS5jaGVja1NoaXBBZmxvYXQoKSk7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHNoaXBzQWZsb2F0LmFkZChpdGVtLmdldFNoaXBJZCgpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRTaGlwc0FmbG9hdCA9ICgpID0+IFsuLi5zaGlwc0FmbG9hdF07XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgc3RhcnQpID0+IHtcbiAgICAgICAgY29uc3Qgc3BvdHMgPSBbXTtcbiAgICAgICAgY29uc3QgeyBsZW5ndGgsIGlzVmVydGljYWwgfSA9IHNoaXA7XG4gICAgICAgIGNvbnN0IG11bHRpcGxpZXIgPSBpc1ZlcnRpY2FsKCkgPyAxMCA6IDE7XG4gICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgbXVsdGlwbGllciAqIGxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IG11bHRpcGxpZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRCb29sID0gaSA+PSAxMDA7XG4gICAgICAgICAgICBjb25zdCBob3JpekJvb2wgPSAhKGkgJSAxMCkgfHwgdmVydEJvb2w7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKGlzVmVydGljYWwoKSA/IHZlcnRCb29sIDogaG9yaXpCb29sICYmIGkgIT09IHN0YXJ0KSB8fFxuICAgICAgICAgICAgICAgIGdldEdyaWRJbGxlZ2FsKClbaV1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwb3RzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgc3BvdHMuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICAgICAgZ3JpZFtpXS5hZGRTaGlwKHNoaXApO1xuICAgICAgICB9KTtcbiAgICAgICAgdXBkYXRlU2hpcHNBZmxvYXQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmQpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZ3JpZFtjb29yZF0uYXR0YWNrKCk7XG4gICAgICAgIHVwZGF0ZVNoaXBzQWZsb2F0KCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldEdyaWQsXG4gICAgICAgIGdldEdyaWRBdHRhY2tzLFxuICAgICAgICBnZXRHcmlkU2hpcHMsXG4gICAgICAgIGdldEdyaWRJbGxlZ2FsLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIGdldFNoaXBzQWZsb2F0LFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgYm9hcmRzID0ge1xuICAgIHA6IHt9LFxuICAgIGM6IHt9LFxuICAgIHJlc2V0OiAodGFyZ2V0ID0gZmFsc2UpID0+IHtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgYm9hcmRzW3RhcmdldF0gPSBCb2FyZEZhY3RvcnkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkcy5wID0gQm9hcmRGYWN0b3J5KCk7XG4gICAgICAgICAgICBib2FyZHMuYyA9IEJvYXJkRmFjdG9yeSgpO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBzaGlwcyA9IHtcbiAgICBwOiB7fSxcbiAgICBjOiB7fSxcbiAgICByZXNldDogKCkgPT4ge1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ2NhcnJpZXInLCA1XSxcbiAgICAgICAgICAgIFsnYmF0dGxlc2hpcCcsIDRdLFxuICAgICAgICAgICAgWydjcnVpc2VyJywgNF0sXG4gICAgICAgICAgICBbJ2Rlc3Ryb3llcicsIDNdLFxuICAgICAgICAgICAgWydzdWJtYXJpbmUnLCAzXSxcbiAgICAgICAgICAgIFsncGF0cm9sMScsIDJdLFxuICAgICAgICAgICAgWydwYXRyb2wyJywgMl0sXG4gICAgICAgIF0uZm9yRWFjaCgoW25hbWUsIGxlbl0pID0+IHtcbiAgICAgICAgICAgIHNoaXBzLnBbbmFtZV0gPSBTaGlwRmFjdG9yeShuYW1lLCBsZW4pO1xuICAgICAgICAgICAgc2hpcHMuY1tuYW1lXSA9IFNoaXBGYWN0b3J5KG5hbWUsIGxlbik7XG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xuXG4vLyBmdW5jdGlvbiBncmlkaWZ5KGdyaWQpIHtcbi8vICAgICByZXR1cm4gZ3JpZC5yZWR1Y2UoXG4vLyAgICAgICAgIChhY2MsIGN1cnIsIGluZGV4KSA9PiB7XG4vLyAgICAgICAgICAgICBpZiAoIShpbmRleCAlIDEwKSAmJiBpbmRleCA+IDApIGFjYy5wdXNoKFtdKTtcbi8vICAgICAgICAgICAgIGFjY1thY2MubGVuZ3RoIC0gMV0ucHVzaChjdXJyKTtcbi8vICAgICAgICAgICAgIHJldHVybiBhY2M7XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIFtbXV1cbi8vICAgICApO1xuLy8gfVxuIiwiaW1wb3J0IHsgYm9hcmRzLCBzaGlwcyB9IGZyb20gJy4vYm9hcmQnO1xuaW1wb3J0IHsgRSwgUHViU3ViIH0gZnJvbSAnLi9wdWJzdWInO1xuXG5sZXQgZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBjaGVja0dhbWVTdGFydGVkID0gKCkgPT4gZ2FtZVN0YXJ0ZWQ7XG5cbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSAoKCkgPT4ge1xuICAgIGxldCBodW1hbiA9IHRydWU7XG5cbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIGh1bWFuID0gIWh1bWFuO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRDb21wQ2hvaWNlID0gKGdyaWQpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGdyaWQucmVkdWNlKChhY2MsIGN1cnIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoY3VyciA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFjYy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIFtdKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb3B0aW9ucy5sZW5ndGgpXTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIGh1bWFuID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9nZ2xlLFxuICAgICAgICBnZXRDb21wQ2hvaWNlLFxuICAgICAgICByZXNldCxcbiAgICAgICAgaXNIdW1hblR1cm46ICgpID0+IGh1bWFuLFxuICAgIH07XG59KSgpO1xuXG5mdW5jdGlvbiBjaGVja0dhbWVPdmVyKCkge1xuICAgIGxldCB3aW5uZXIgPSAnJztcbiAgICBpZiAoYm9hcmRzLnAuZ2V0U2hpcHNBZmxvYXQoKS5sZW5ndGggPCAxKSB7XG4gICAgICAgIHdpbm5lciA9ICdDb21wdXRlcic7XG4gICAgfVxuICAgIGlmIChib2FyZHMuYy5nZXRTaGlwc0FmbG9hdCgpLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgd2lubmVyID0gJ1BsYXllcic7XG4gICAgfVxuICAgIHJldHVybiB3aW5uZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5Um91bmQoY29vcmQpIHtcbiAgICBjb25zdCBvcHBvbmVudCA9IFBsYXllci5pc0h1bWFuVHVybigpID8gJ2MnIDogJ3AnO1xuICAgIGNvbnN0IHsgaGl0LCBzdW5rIH0gPSBib2FyZHNbb3Bwb25lbnRdLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICAgIGNvbnN0IGdhbWVPdmVyID0gY2hlY2tHYW1lT3ZlcigpO1xuXG4gICAgaWYgKHN1bmspIHtcbiAgICAgICAgLy8gYXR0YWNrIG5lYXJieSBjb29yZHNcbiAgICAgICAgY29uc29sZS5sb2coJ3N1bmsnKTtcbiAgICB9XG5cbiAgICBpZiAoIWhpdCkgUGxheWVyLnRvZ2dsZSgpO1xuXG4gICAgUHViU3ViLnB1Ymxpc2goRS5VUERBVEUpO1xuXG4gICAgaWYgKGdhbWVPdmVyKSByZXR1cm4gZ2FtZU92ZXI7XG5cbiAgICBpZiAoIVBsYXllci5pc0h1bWFuVHVybigpKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcGxheVJvdW5kKFBsYXllci5nZXRDb21wQ2hvaWNlKGJvYXJkcy5wLmdldEdyaWRBdHRhY2tzKCkpKTtcbiAgICAgICAgfSwgODAwKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRHYW1lKCkge1xuICAgIGdhbWVTdGFydGVkID0gZmFsc2U7XG4gICAgUGxheWVyLnJlc2V0KCk7XG4gICAgYm9hcmRzLnJlc2V0KCk7XG4gICAgc2hpcHMucmVzZXQoKTtcbiAgICBQdWJTdWIucHVibGlzaChFLlVQREFURSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcGVuSW5kaWNlcyhwbGF5ZXIpIHtcbiAgICByZXR1cm4gYm9hcmRzW3BsYXllcl1cbiAgICAgICAgLmdldEdyaWRJbGxlZ2FsKClcbiAgICAgICAgLm1hcCgodmFsLCBpbmRleCkgPT4gKHsgdmFsLCBpbmRleCB9KSlcbiAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS52YWwgPT09IDApXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+IGl0ZW0uaW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VSYW5kb21TaGlwcyhwbGF5ZXIpIHtcbiAgICBib2FyZHMucmVzZXQocGxheWVyKTtcbiAgICBnYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgY29uc3QgZmFpbGVkU3BvdHMgPSBbXTtcbiAgICBjb25zdCBzaGlwTmFtZXMgPSBbXG4gICAgICAgICdjYXJyaWVyJyxcbiAgICAgICAgJ2JhdHRsZXNoaXAnLFxuICAgICAgICAnY3J1aXNlcicsXG4gICAgICAgICdkZXN0cm95ZXInLFxuICAgICAgICAnc3VibWFyaW5lJyxcbiAgICAgICAgJ3BhdHJvbDEnLFxuICAgICAgICAncGF0cm9sMicsXG4gICAgXTtcbiAgICBzaGlwTmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwID0gc2hpcHNbcGxheWVyXVtuYW1lXTtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKGZhaWxlZFNwb3RzLmxlbmd0aCA8IDg4ICYmICFzdWNjZXNzKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVuSW5kaWNlcyA9IGdldE9wZW5JbmRpY2VzKHBsYXllcik7XG4gICAgICAgICAgICBjb25zdCBzcG90ID1cbiAgICAgICAgICAgICAgICBvcGVuSW5kaWNlc1tcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG9wZW5JbmRpY2VzLmxlbmd0aCAtIDEpKVxuICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKyAwLjUpKSB7XG4gICAgICAgICAgICAgICAgc2hpcC5jaGFuZ2VWZXJ0aWNhbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdWNjZXNzID0gYm9hcmRzW3BsYXllcl0ucGxhY2VTaGlwKHNoaXAsIHNwb3QpO1xuXG4gICAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBzaGlwLmNoYW5nZVZlcnRpY2FsKCk7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9IGJvYXJkc1twbGF5ZXJdLnBsYWNlU2hpcChzaGlwLCBzcG90KTtcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZmFpbGVkU3BvdHMucHVzaChzcG90KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdhbWVTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5ZXJTaGlwc0dyaWQ6IGJvYXJkcy5wLmdldEdyaWRTaGlwcygpLFxuICAgICAgICBwbGF5ZXJBdHRhY2tzR3JpZDogYm9hcmRzLnAuZ2V0R3JpZEF0dGFja3MoKSxcbiAgICAgICAgY29tcEF0dGFja3NHcmlkOiBib2FyZHMuYy5nZXRHcmlkQXR0YWNrcygpLFxuICAgICAgICBpc0h1bWFuOiBQbGF5ZXIuaXNIdW1hblR1cm4oKSxcbiAgICAgICAgcFNjb3JlOiBib2FyZHMucC5nZXRTaGlwc0FmbG9hdCgpLmxlbmd0aCxcbiAgICAgICAgY1Njb3JlOiBib2FyZHMuYy5nZXRTaGlwc0FmbG9hdCgpLmxlbmd0aCxcbiAgICB9O1xufVxuXG5yZXNldEdhbWUoKTtcbiIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tIERPTSBGYWN0b3JpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGVsRmFjdG9yeSh0eXBlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiA9IFtdKSB7XG4gICAgcmV0dXJuIHsgdHlwZSwgYXR0cmlidXRlcywgY2hpbGRyZW4gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxGYWN0b3J5KG9iaikge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmoudHlwZSk7XG4gICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSBvYmo7XG5cbiAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgaWYgKGtleSAhPT0gJ2RhdGFzZXQnKSB7XG4gICAgICAgICAgICBlbFtrZXldID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGRpcmVjdGlvbnMgbmVlZGVkIHRvIHNldCBcImRhdGEtXCIgcHJvcGVydGllc1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtwcm9wLCBkYXRhXSkgPT4ge1xuICAgICAgICAgICAgICAgIGVsLmRhdGFzZXRbcHJvcF0gPSBkYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIG9iai5jaGlsZHJlbj8uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgLy8gQWxsb3dzIGZvciBjb25kaXRpb25hbGx5IGFkZGluZyBjaGlsZHJlbiB1cHN0cmVhbSBieVxuICAgICAgICAvLyBzZXR0aW5nIFwiXCIgYXMgdGhlIGFsdGVybmF0aXZlIHRvIGVsRmFjdG9yeSgpXG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkoY2hpbGQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVsO1xufVxuIiwiZXhwb3J0IGNvbnN0IFB1YlN1YiA9ICgoKSA9PiB7XG4gICAgY29uc3QgZXZlbnRzTGlzdCA9IHt9O1xuICAgIC8vIHsga2V5OiBcInRyaWdnZXJFdmVudFwiLCB2YWx1ZTogWyBhcnJheSBvZiBmdW5jdGlvbnMgXSB9XG5cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUodHJpZ2dlckV2ZW50LCBzdWJzY3JpYmVyKSB7XG4gICAgICAgIGlmICghZXZlbnRzTGlzdFt0cmlnZ2VyRXZlbnRdKSB7XG4gICAgICAgICAgICBldmVudHNMaXN0W3RyaWdnZXJFdmVudF0gPSBbc3Vic2NyaWJlcl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudHNMaXN0W3RyaWdnZXJFdmVudF0ucHVzaChzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmdW5jdGlvbkxpc3QgPSBldmVudHNMaXN0W3RyaWdnZXJFdmVudF07XG4gICAgICAgICAgICAgICAgY29uc3QgaSA9IGZ1bmN0aW9uTGlzdC5pbmRleE9mKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgICAgIGlmIChpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25MaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHB1Ymxpc2godHJpZ2dlckV2ZW50LCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGZ1bmN0aW9uTGlzdCA9IGV2ZW50c0xpc3RbdHJpZ2dlckV2ZW50XTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZnVuY3Rpb25MaXN0KSkge1xuICAgICAgICAgICAgZnVuY3Rpb25MaXN0LmZvckVhY2goKHN1YnNjcmliZXIpID0+IHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyKC4uLmFyZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWJzY3JpYmUsIHB1Ymxpc2ggfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBFID0ge1xuICAgIFVQREFURTogJ1VwZGF0ZURpc3BsYXknLFxufTtcbiIsImltcG9ydCB7IEUsIFB1YlN1YiB9IGZyb20gJy4vcHVic3ViJztcbmltcG9ydCB7XG4gICAgY2hlY2tHYW1lU3RhcnRlZCxcbiAgICBnZXRHYW1lU3RhdGUsXG4gICAgcGxhY2VSYW5kb21TaGlwcyxcbiAgICBwbGF5Um91bmQsXG4gICAgcmVzZXRHYW1lLFxufSBmcm9tICcuL2dhbWUtY29udHJvbGxlcic7XG5pbXBvcnQgeyBlbEZhY3RvcnksIGh0bWxGYWN0b3J5IH0gZnJvbSAnLi9oZWxwZXJzJztcblxuLy8gUHJlLWdhbWUgVmFyc1xuY29uc3QgaG9tZVNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLXNjcmVlbicpO1xuY29uc3QgcHJlR2FtZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZS1nYW1lLWJvYXJkJyk7XG5jb25zdCByYW5kb21Cb2FyZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYW5kb20tYm9hcmQtYnRuJyk7XG5jb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydC1idG4nKTtcblxuLy8gSW4tZ2FtZSBWYXJzXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtYnRuJyk7XG5jb25zdCBjdXJyZW50VHVyblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudCcpO1xuY29uc3Qgc2hpcHNCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWJvYXJkcyAuc2hpcHMnKTtcbmNvbnN0IGF0dGFja3NCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWJvYXJkcyAuYXR0YWNrcycpO1xuY29uc3QgcFNjb3JlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItc2NvcmUnKTtcbmNvbnN0IGNTY29yZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcHV0ZXItc2NvcmUnKTtcblxuLy8gUG9zdC1nYW1lIFZhcnNcbmNvbnN0IHdpbm5lckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2lubmVyJyk7XG5jb25zdCBlbmRTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLXNjcmVlbicpO1xuY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwJyk7XG5jb25zdCBuZXdHYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1nYW1lLWJ0bicpO1xuXG5mdW5jdGlvbiBlbmRHYW1lRGlzcGxheSh3aW5uZXIpIHtcbiAgICB3aW5uZXJEaXNwbGF5LnRleHRDb250ZW50ID0gd2lubmVyO1xuICAgIGVuZFNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcG9wVXAuY2xhc3NMaXN0LnRvZ2dsZSgnc2hydW5rJyk7XG4gICAgfSwgMTUwKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQm9hcmRDbGljayhlKSB7XG4gICAgY29uc3QgY29vcmQgPSBlLnRhcmdldC5kYXRhc2V0LmF0dGFja0Nvb3JkO1xuICAgIGlmICghY29vcmQpIHJldHVybjtcbiAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmJvYXJkLmF0dGFja3MnKVxuICAgICAgICAucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVCb2FyZENsaWNrKTtcbiAgICBjb25zdCBnYW1lT3ZlciA9IHBsYXlSb3VuZChjb29yZCk7XG4gICAgaWYgKGdhbWVPdmVyKSB7XG4gICAgICAgIGVuZEdhbWVEaXNwbGF5KGdhbWVPdmVyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRQbGF5ZXIoaXNIdW1hbiA9IHRydWUpIHtcbiAgICBpZiAoaXNIdW1hbikge1xuICAgICAgICBjdXJyZW50VHVyblRleHQudGV4dENvbnRlbnQgPSAnUGxheWVyJztcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQuYXR0YWNrcycpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVCb2FyZENsaWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50VHVyblRleHQudGV4dENvbnRlbnQgPSAnQ29tcHV0ZXInO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlU2hpcHNCb2FyZChcbiAgICBpc1BsYWNlbWVudFBoYXNlID0gZmFsc2UsXG4gICAgcGxheWVyU2hpcHNHcmlkID0gW10sXG4gICAgcGxheWVyQXR0YWNrc0dyaWQgPSBbXVxuKSB7XG4gICAgY29uc3QgYXBwZW5kVGFyZ2V0ID0gaXNQbGFjZW1lbnRQaGFzZSA/IHByZUdhbWVCb2FyZCA6IHNoaXBzQm9hcmQ7XG4gICAgYXBwZW5kVGFyZ2V0LnRleHRDb250ZW50ID0gJyc7XG4gICAgY29uc3Qgc2hpcHNHcmlkID0gZWxGYWN0b3J5KCdkaXYnLCB7IGNsYXNzTGlzdDogJ2JvYXJkIHNoaXBzJyB9KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgdGFrZW4gPSBwbGF5ZXJTaGlwc0dyaWRbaV0gPyAnIHNoaXAnIDogJyc7XG4gICAgICAgIGNvbnN0IGNvbXBBdHRhY2sgPSBbJycsICcgbWlzcycsICcgaGl0J11bcGxheWVyQXR0YWNrc0dyaWRbaV1dID8/ICcnO1xuICAgICAgICBjb25zdCBwbGFjZSA9IGlzUGxhY2VtZW50UGhhc2UgPyAnIHBsYWNlJyA6ICcnO1xuICAgICAgICBzaGlwc0dyaWQuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICAgIGVsRmFjdG9yeSgnZGl2Jywge1xuICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBpLCAvLyBkZXZNb2RlXG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBgc3F1YXJlJHt0YWtlbn0ke2NvbXBBdHRhY2t9JHtwbGFjZX1gLFxuICAgICAgICAgICAgICAgIGRhdGFzZXQ6IHsgc2hpcENvb3JkOiBpIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFwcGVuZFRhcmdldC5hcHBlbmRDaGlsZChodG1sRmFjdG9yeShzaGlwc0dyaWQpKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQXR0YWNrc0JvYXJkKGNvbXBBdHRhY2tzR3JpZCA9IFtdKSB7XG4gICAgYXR0YWNrc0JvYXJkLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBjb25zdCBhdHRhY2tzR3JpZCA9IGVsRmFjdG9yeSgnZGl2JywgeyBjbGFzc0xpc3Q6ICdib2FyZCBhdHRhY2tzJyB9KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgcGxheWVyQXR0YWNrID0gWycnLCAnIG1pc3MnLCAnIGhpdCddW2NvbXBBdHRhY2tzR3JpZFtpXV0gPz8gJyc7XG4gICAgICAgIGF0dGFja3NHcmlkLmNoaWxkcmVuLnB1c2goXG4gICAgICAgICAgICBlbEZhY3RvcnkoJ2J1dHRvbicsIHtcbiAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogaSwgLy8gZGV2TW9kZVxuICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogYHNxdWFyZSR7cGxheWVyQXR0YWNrfWAsXG4gICAgICAgICAgICAgICAgZGF0YXNldDogeyBhdHRhY2tDb29yZDogaSB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhdHRhY2tzQm9hcmQuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkoYXR0YWNrc0dyaWQpKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2NvcmVzKHBTY29yZSwgY1Njb3JlKSB7XG4gICAgcFNjb3JlRGlzcGxheS50ZXh0Q29udGVudCA9IHBTY29yZTtcbiAgICBjU2NvcmVEaXNwbGF5LnRleHRDb250ZW50ID0gY1Njb3JlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVEaXNwbGF5KGlzUGxhY2VtZW50UGhhc2UgPSBmYWxzZSkge1xuICAgIC8vIEdldHMgaW5mbyBmcm9tIGdhbWUtY29udHJvbGxlclxuICAgIGNvbnN0IHtcbiAgICAgICAgcGxheWVyU2hpcHNHcmlkLFxuICAgICAgICBwbGF5ZXJBdHRhY2tzR3JpZCxcbiAgICAgICAgY29tcEF0dGFja3NHcmlkLFxuICAgICAgICBpc0h1bWFuLFxuICAgICAgICBwU2NvcmUsXG4gICAgICAgIGNTY29yZSxcbiAgICB9ID0gZ2V0R2FtZVN0YXRlKCk7XG5cbiAgICAvLyBVcGRhdGVzIGJvYXJkcywgY3VycmVudCBwbGF5ZXIsIGFuZCBzY29yZXNcbiAgICB1cGRhdGVTaGlwc0JvYXJkKGlzUGxhY2VtZW50UGhhc2UsIHBsYXllclNoaXBzR3JpZCwgcGxheWVyQXR0YWNrc0dyaWQpO1xuICAgIHVwZGF0ZUF0dGFja3NCb2FyZChjb21wQXR0YWNrc0dyaWQpO1xuICAgIHVwZGF0ZUN1cnJlbnRQbGF5ZXIoaXNIdW1hbik7XG4gICAgdXBkYXRlU2NvcmVzKHBTY29yZSwgY1Njb3JlKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRBcHAoKSB7XG4gICAgcmVzZXRHYW1lKCk7XG4gICAgZW5kU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGhvbWVTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgdXBkYXRlRGlzcGxheSh0cnVlKTtcbn1cblxuc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGNoZWNrR2FtZVN0YXJ0ZWQoKSkge1xuICAgICAgICB1cGRhdGVEaXNwbGF5KCk7XG4gICAgICAgIGhvbWVTY3JlZW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxufSk7XG5cbnJhbmRvbUJvYXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBsYWNlUmFuZG9tU2hpcHMoJ3AnKTtcbiAgICBwbGFjZVJhbmRvbVNoaXBzKCdjJyk7XG4gICAgdXBkYXRlRGlzcGxheSh0cnVlKTtcbn0pO1xuXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRBcHApO1xuXG5uZXdHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHN0YXJ0QXBwKCk7XG4gICAgdXBkYXRlRGlzcGxheSgpO1xufSk7XG5cblB1YlN1Yi5zdWJzY3JpYmUoRS5VUERBVEUsIHVwZGF0ZURpc3BsYXkpO1xuXG5zdGFydEFwcCgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3NjcmVlbi1jb250cm9sbGVyJztcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=