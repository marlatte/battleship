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

a {
    color: unset;
    text-decoration: none;
}

/* ---------------     /Reboot     --------------- */
/* ---------------     Utilities & Universals     --------------- */

:root {
    --eg-var: red;
    --square-dim: 3svh;
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
        --square-dim: 5svh;
    }
}

/* ---------------     /Utilities & Universals     --------------- */
/* ---------------     CONTENT     --------------- */

/* ---------------     Header     --------------- */

header {
    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
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
    gap: 3svh;
}

.current-info {
    display: flex;
    justify-content: center;
}

@media (min-width: 700px) {
    main {
        gap: 10svh;
    }
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

.modal button {
    padding: 10px;
    font-size: 1.2rem;
}

/* ---------------     /Home-Screen     --------------- */

/* ---------------     End Screen     --------------- */

.modal {
    z-index: 1;
    position: fixed;
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

.end-screen .pop-up {
    min-width: 60vw;
}

/* ---------------     /End Screen     --------------- */

/* ---------------     Footer     --------------- */

footer {
    padding: 5px;

    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;

    background-color: black;
    color: white;
    font-size: 16px;
}

.fa.fa-github {
    color: currentColor;
    font-size: 20px;

    &:hover {
        transition: transform 0.4s ease-in-out;
        transform: rotate(-360deg) scale(1.3);
    }
}
/* ---------------     /Footer     --------------- */

/* ---------------     /CONTENT     --------------- */
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA,mDAAmD;;AAEnD;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB;;AAEA,oDAAoD;AACpD,mEAAmE;;AAEnE;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI;QACI,kBAAkB;IACtB;AACJ;;AAEA,oEAAoE;AACpE,oDAAoD;;AAEpD,mDAAmD;;AAEnD;IACI,aAAa;;IAEb,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA,oDAAoD;;AAEpD,iDAAiD;AACjD;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA,mDAAmD;AACnD;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,oDAAoD;IACpD,iDAAiD;IACjD,QAAQ;IACR,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,YAAY;;IAEZ,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI;QACI,mBAAmB;IACvB;AACJ;AACA,oDAAoD;;AAEpD,mDAAmD;;AAEnD;IACI,aAAa;IACb,6BAA6B;;IAE7B,iBAAiB;AACrB;;AAEA,oDAAoD;AACpD,kDAAkD;;AAElD,wDAAwD;;AAExD;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA,yDAAyD;;AAEzD,uDAAuD;;AAEvD;IACI,UAAU;IACV,eAAe;IACf,cAAc;IACd,YAAY;;IAEZ,aAAa;IACb,qBAAqB;;IAErB,2BAA2B;IAC3B,0BAA0B;AAC9B;;AAEA;IACI,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;;IAET,sBAAsB;IACtB,kBAAkB;IAClB,sBAAsB;;IAEtB,kBAAkB;;IAElB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA,wDAAwD;;AAExD,mDAAmD;;AAEnD;IACI,YAAY;;IAEZ,aAAa;IACb,QAAQ;IACR,uBAAuB;IACvB,mBAAmB;;IAEnB,uBAAuB;IACvB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,eAAe;;IAEf;QACI,sCAAsC;QACtC,qCAAqC;IACzC;AACJ;AACA,oDAAoD;;AAEpD,qDAAqD","sourcesContent":["/* ---------------     Reboot     --------------- */\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* color: unset; */\n}\n\na {\n    color: unset;\n    text-decoration: none;\n}\n\n/* ---------------     /Reboot     --------------- */\n/* ---------------     Utilities & Universals     --------------- */\n\n:root {\n    --eg-var: red;\n    --square-dim: 3svh;\n}\n\nbody {\n    height: 100svh;\n    display: flex;\n    flex-direction: column;\n}\n\n.shrunk {\n    transform: scale(0);\n}\n\n.hidden {\n    display: none !important;\n}\n\n@media (min-width: 700px) {\n    :root {\n        --square-dim: 5svh;\n    }\n}\n\n/* ---------------     /Utilities & Universals     --------------- */\n/* ---------------     CONTENT     --------------- */\n\n/* ---------------     Header     --------------- */\n\nheader {\n    padding: 10px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#home-btn {\n    padding: 10px;\n    border-radius: 6px;\n    font-size: 1.2rem;\n}\n\n/* ---------------     /Header     --------------- */\n\n/* ---------------     Main     --------------- */\nmain {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 3svh;\n}\n\n.current-info {\n    display: flex;\n    justify-content: center;\n}\n\n@media (min-width: 700px) {\n    main {\n        gap: 10svh;\n    }\n}\n\n/* ---------------     Boards     --------------- */\n.game-boards {\n    display: grid;\n    place-content: center;\n}\n\n.container {\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n\n    background-color: grey;\n}\n\n.board {\n    padding: 3px;\n    display: grid;\n    grid-template-columns: repeat(10, var(--square-dim));\n    grid-template-rows: repeat(10, var(--square-dim));\n    gap: 3px;\n    background-color: #fff;\n}\n\n.square {\n    background-color: skyblue;\n    border: none;\n\n    /* devMode */\n    color: white;\n    display: grid;\n    place-content: center;\n    font-size: 1rem;\n}\n\nbutton.square {\n    cursor: pointer;\n}\n\nbutton.square:not(.miss):not(.hit):not(.ship):hover {\n    background-color: hsl(205, 75%, 50%);\n}\n\n.square.ship {\n    background-color: navy;\n}\n\n.square.hit {\n    background-color: red;\n}\n\n.square.miss {\n    background-color: yellow;\n}\n\n@media (min-width: 700px) {\n    .container {\n        flex-direction: row;\n    }\n}\n/* ---------------     /Boards     --------------- */\n\n/* ---------------     Scores     --------------- */\n\n.scores {\n    display: flex;\n    justify-content: space-evenly;\n\n    text-align: right;\n}\n\n/* ---------------     /Scores     --------------- */\n/* ---------------     /Main     --------------- */\n\n/* ---------------     Home-Screen     --------------- */\n\n.modal button {\n    padding: 10px;\n    font-size: 1.2rem;\n}\n\n/* ---------------     /Home-Screen     --------------- */\n\n/* ---------------     End Screen     --------------- */\n\n.modal {\n    z-index: 1;\n    position: fixed;\n    height: 100svh;\n    width: 100vw;\n\n    display: grid;\n    place-content: center;\n\n    background-color: #0000004d;\n    backdrop-filter: blur(2px);\n}\n\n.pop-up {\n    padding: 20px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n\n    border: 1px solid #000;\n    border-radius: 5px;\n    background-color: #fff;\n\n    text-align: center;\n\n    transition: all 1s;\n}\n\n.end-screen .pop-up {\n    min-width: 60vw;\n}\n\n/* ---------------     /End Screen     --------------- */\n\n/* ---------------     Footer     --------------- */\n\nfooter {\n    padding: 5px;\n\n    display: flex;\n    gap: 8px;\n    justify-content: center;\n    align-items: center;\n\n    background-color: black;\n    color: white;\n    font-size: 16px;\n}\n\n.fa.fa-github {\n    color: currentColor;\n    font-size: 20px;\n\n    &:hover {\n        transition: transform 0.4s ease-in-out;\n        transform: rotate(-360deg) scale(1.3);\n    }\n}\n/* ---------------     /Footer     --------------- */\n\n/* ---------------     /CONTENT     --------------- */\n"],"sourceRoot":""}]);
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

    const getShipId = () => ship?.getID();

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

    const findShip = (id) => {
        const coords = [];
        grid.forEach((square, index) => {
            if (square.getShipId() === id) {
                coords.push(index);
            }
        });
        return coords;
    };

    const findAdjacent = (sunkCoords) => {
        const freeAttacks = new Set();
        sunkCoords.forEach((spot) => {
            const testBase = [10, -10];
            if (!(spot % 10)) testBase.push(-9, 1, 11);
            else if (!((spot + 1) % 10)) testBase.push(-11, -1, 9);
            else testBase.push(-9, 1, 11, -11, -1, 9);
            testBase.forEach((num) => {
                const coord = spot + num;
                if (grid[coord]?.wasAttacked() === 0) {
                    freeAttacks.add(coord);
                }
            });
        });
        return [...freeAttacks].sort((a, b) => a - b);
    };

    const receiveAttack = (coord) => {
        const result = grid[coord].attack();
        if (result.sunk) {
            const sunkCoords = findShip(grid[coord].getShipId());
            findAdjacent(sunkCoords).forEach((freeAttack) => {
                grid[freeAttack].attack();
            });
        }
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
        findAdjacent,
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
    const { hit } = _board__WEBPACK_IMPORTED_MODULE_0__.boards[opponent].receiveAttack(coord);
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
const endPopUp = endScreen.querySelector('.pop-up');
const newGameBtn = document.querySelector('#new-game-btn');

function endGameDisplay(winner) {
    winnerDisplay.textContent = winner;
    endScreen.classList.remove('hidden');
    setTimeout(() => {
        endPopUp.classList.remove('shrunk');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywrRkFBK0YsUUFBUSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLGNBQWMsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksY0FBYyxjQUFjLE1BQU0sV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxhQUFhLGNBQWMsTUFBTSxVQUFVLGFBQWEsYUFBYSxPQUFPLFlBQVksY0FBYyxjQUFjLE1BQU0sVUFBVSxZQUFZLE9BQU8sYUFBYSxjQUFjLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFB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Ozs7Ozs7OztBQ0E2QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9oZWxwZXJzLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3NjcmVlbi1jb250cm9sbGVyLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogLS0tLS0tLS0tLS0tLS0tICAgICBSZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLyogY29sb3I6IHVuc2V0OyAqL1xufVxuXG5hIHtcbiAgICBjb2xvcjogdW5zZXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9SZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tICAgICBVdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuOnJvb3Qge1xuICAgIC0tZWctdmFyOiByZWQ7XG4gICAgLS1zcXVhcmUtZGltOiAzc3ZoO1xufVxuXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHN2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaHJ1bmsge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgOnJvb3Qge1xuICAgICAgICAtLXNxdWFyZS1kaW06IDVzdmg7XG4gICAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9VdGlsaXRpZXMgJiBVbml2ZXJzYWxzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgQ09OVEVOVCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2hvbWUtYnRuIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBNYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbm1haW4ge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogM3N2aDtcbn1cblxuLmN1cnJlbnQtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgbWFpbiB7XG4gICAgICAgIGdhcDogMTBzdmg7XG4gICAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEJvYXJkcyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4uZ2FtZS1ib2FyZHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE1cHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4uYm9hcmQge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCB2YXIoLS1zcXVhcmUtZGltKSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIHZhcigtLXNxdWFyZS1kaW0pKTtcbiAgICBnYXA6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uc3F1YXJlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xuICAgIGJvcmRlcjogbm9uZTtcblxuICAgIC8qIGRldk1vZGUgKi9cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5idXR0b24uc3F1YXJlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbi5zcXVhcmU6bm90KC5taXNzKTpub3QoLmhpdCk6bm90KC5zaGlwKTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwNSwgNzUlLCA1MCUpO1xufVxuXG4uc3F1YXJlLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XG59XG5cbi5zcXVhcmUuaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5zcXVhcmUubWlzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Cb2FyZHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFNjb3JlcyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5zY29yZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvU2NvcmVzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL01haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEhvbWUtU2NyZWVuICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLm1vZGFsIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvSG9tZS1TY3JlZW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEVuZCBTY3JlZW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubW9kYWwge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMTAwc3ZoO1xuICAgIHdpZHRoOiAxMDB2dztcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDRkO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xufVxuXG4ucG9wLXVwIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG59XG5cbi5lbmQtc2NyZWVuIC5wb3AtdXAge1xuICAgIG1pbi13aWR0aDogNjB2dztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRW5kIFNjcmVlbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuZm9vdGVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZmEuZmEtZ2l0aHViIHtcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZykgc2NhbGUoMS4zKTtcbiAgICB9XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Gb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9DT05URU5UICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbURBQW1EOztBQUVuRDs7O0lBR0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQSxvREFBb0Q7QUFDcEQsbUVBQW1FOztBQUVuRTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUEsb0VBQW9FO0FBQ3BFLG9EQUFvRDs7QUFFcEQsbURBQW1EOztBQUVuRDtJQUNJLGFBQWE7O0lBRWIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQSxvREFBb0Q7O0FBRXBELGlEQUFpRDtBQUNqRDtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBLG1EQUFtRDtBQUNuRDtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTOztJQUVULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0RBQW9EO0lBQ3BELGlEQUFpRDtJQUNqRCxRQUFRO0lBQ1Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7O0lBRVosWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSjtBQUNBLG9EQUFvRDs7QUFFcEQsbURBQW1EOztBQUVuRDtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7O0lBRTdCLGlCQUFpQjtBQUNyQjs7QUFFQSxvREFBb0Q7QUFDcEQsa0RBQWtEOztBQUVsRCx3REFBd0Q7O0FBRXhEO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQSx5REFBeUQ7O0FBRXpELHVEQUF1RDs7QUFFdkQ7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZOztJQUVaLGFBQWE7SUFDYixxQkFBcUI7O0lBRXJCLDJCQUEyQjtJQUMzQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhOztJQUViLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7O0lBRVQsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7O0lBRXRCLGtCQUFrQjs7SUFFbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSx3REFBd0Q7O0FBRXhELG1EQUFtRDs7QUFFbkQ7SUFDSSxZQUFZOztJQUVaLGFBQWE7SUFDYixRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7O0lBRWY7UUFDSSxzQ0FBc0M7UUFDdEMscUNBQXFDO0lBQ3pDO0FBQ0o7QUFDQSxvREFBb0Q7O0FBRXBELHFEQUFxRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAtLS0tLS0tLS0tLS0tLS0gICAgIFJlYm9vdCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIGNvbG9yOiB1bnNldDsgKi9cXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiB1bnNldDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9SZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLWVnLXZhcjogcmVkO1xcbiAgICAtLXNxdWFyZS1kaW06IDNzdmg7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHN2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNocnVuayB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgICA6cm9vdCB7XFxuICAgICAgICAtLXNxdWFyZS1kaW06IDVzdmg7XFxuICAgIH1cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBDT05URU5UICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEhlYWRlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaG9tZS1idG4ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9IZWFkZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxubWFpbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM3N2aDtcXG59XFxuXFxuLmN1cnJlbnQtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG4gICAgbWFpbiB7XFxuICAgICAgICBnYXA6IDEwc3ZoO1xcbiAgICB9XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgQm9hcmRzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4uZ2FtZS1ib2FyZHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIHZhcigtLXNxdWFyZS1kaW0pKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIHZhcigtLXNxdWFyZS1kaW0pKTtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxuICAgIC8qIGRldk1vZGUgKi9cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuYnV0dG9uLnNxdWFyZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uLnNxdWFyZTpub3QoLm1pc3MpOm5vdCguaGl0KTpub3QoLnNoaXApOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwNSwgNzUlLCA1MCUpO1xcbn1cXG5cXG4uc3F1YXJlLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xcbn1cXG5cXG4uc3F1YXJlLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnNxdWFyZS5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxufVxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0JvYXJkcyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBTY29yZXMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5zY29yZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1Njb3JlcyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBIb21lLVNjcmVlbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLm1vZGFsIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Ib21lLVNjcmVlbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBFbmQgU2NyZWVuICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ubW9kYWwge1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogMTAwc3ZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDRkO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG59XFxuXFxuLnBvcC11cCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxufVxcblxcbi5lbmQtc2NyZWVuIC5wb3AtdXAge1xcbiAgICBtaW4td2lkdGg6IDYwdnc7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0VuZCBTY3JlZW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5mb290ZXIge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uZmEuZmEtZ2l0aHViIHtcXG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZykgc2NhbGUoMS4zKTtcXG4gICAgfVxcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Gb290ZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0NPTlRFTlQgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gU2hpcEZhY3RvcnkoaWQsIGxlbmd0aCkge1xuICAgIGxldCBoZWFsdGggPSBsZW5ndGg7XG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoZWFsdGggLT0gMTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0SGVhbHRoID0gKCkgPT4gaGVhbHRoO1xuXG4gICAgbGV0IHZlcnRpY2FsID0gZmFsc2U7XG4gICAgY29uc3QgY2hhbmdlVmVydGljYWwgPSAoKSA9PiB7XG4gICAgICAgIHZlcnRpY2FsID0gIXZlcnRpY2FsO1xuICAgIH07XG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9ICgpID0+IHZlcnRpY2FsO1xuXG4gICAgY29uc3QgaXNBZmxvYXQgPSAoKSA9PiBoZWFsdGggPj0gMTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRJRDogKCkgPT4gaWQsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgZ2V0SGVhbHRoLFxuICAgICAgICBoaXQsXG4gICAgICAgIGlzQWZsb2F0LFxuICAgICAgICBjaGFuZ2VWZXJ0aWNhbCxcbiAgICAgICAgaXNWZXJ0aWNhbCxcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgU3F1YXJlID0gKCkgPT4ge1xuICAgIGxldCBhdHRhY2tlZCA9IDA7XG4gICAgY29uc3Qgd2FzQXR0YWNrZWQgPSAoKSA9PiBhdHRhY2tlZDtcblxuICAgIGxldCBzaGlwID0gbnVsbDtcbiAgICBjb25zdCBpc1Rha2VuID0gKCkgPT4gISFzaGlwO1xuICAgIGNvbnN0IGFkZFNoaXAgPSAobmV3U2hpcCkgPT4ge1xuICAgICAgICBzaGlwID0gbmV3U2hpcDtcbiAgICB9O1xuXG4gICAgY29uc3QgYXR0YWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAoc2hpcCkge1xuICAgICAgICAgICAgYXR0YWNrZWQgPSAyO1xuICAgICAgICAgICAgc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIGNvbnN0IHN1bmsgPSAhc2hpcC5pc0FmbG9hdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHsgaGl0OiB0cnVlLCBzdW5rIH07XG4gICAgICAgIH1cbiAgICAgICAgYXR0YWNrZWQgPSAxO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrU2hpcEFmbG9hdCA9ICgpID0+IHNoaXA/LmlzQWZsb2F0KCk7XG5cbiAgICBjb25zdCBnZXRTaGlwSWQgPSAoKSA9PiBzaGlwPy5nZXRJRCgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2FzQXR0YWNrZWQsXG4gICAgICAgIGlzVGFrZW4sXG4gICAgICAgIGFkZFNoaXAsXG4gICAgICAgIGF0dGFjayxcbiAgICAgICAgY2hlY2tTaGlwQWZsb2F0LFxuICAgICAgICBnZXRTaGlwSWQsXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBCb2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgICAgZ3JpZC5wdXNoKFNxdWFyZSgpKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0R3JpZCA9ICgpID0+IFsuLi5ncmlkXTtcbiAgICBjb25zdCBnZXRHcmlkQXR0YWNrcyA9ICgpID0+IGdyaWQubWFwKChzcXVhcmUpID0+IHNxdWFyZS53YXNBdHRhY2tlZCgpKTtcbiAgICBjb25zdCBnZXRHcmlkU2hpcHMgPSAoKSA9PiBncmlkLm1hcCgoc3F1YXJlKSA9PiArc3F1YXJlLmlzVGFrZW4oKSk7XG4gICAgY29uc3QgZ2V0R3JpZElsbGVnYWwgPSAoKSA9PlxuICAgICAgICBncmlkLm1hcCgoc3F1YXJlLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXN0QmFzZSA9IFswLCAxMCwgLTEwXTtcbiAgICAgICAgICAgIGlmICghKGkgJSAxMCkpIHRlc3RCYXNlLnB1c2goLTksIDEsIDExKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKCEoKGkgKyAxKSAlIDEwKSkgdGVzdEJhc2UucHVzaCgtMTEsIC0xLCA5KTtcbiAgICAgICAgICAgIGVsc2UgdGVzdEJhc2UucHVzaCgtOSwgMSwgMTEsIC0xMSwgLTEsIDkpO1xuICAgICAgICAgICAgY29uc3QgYWRqYWNlbnQgPSB0ZXN0QmFzZVxuICAgICAgICAgICAgICAgIC5tYXAoKG51bSkgPT4gZ3JpZFtpICsgbnVtXT8uaXNUYWtlbigpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbikubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuICshIWFkamFjZW50O1xuICAgICAgICB9KTtcblxuICAgIGNvbnN0IHNoaXBzQWZsb2F0ID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IHVwZGF0ZVNoaXBzQWZsb2F0ID0gKCkgPT4ge1xuICAgICAgICBzaGlwc0FmbG9hdC5jbGVhcigpO1xuICAgICAgICBjb25zdCBzaGlwcyA9IGdyaWQuZmlsdGVyKChzcSkgPT4gc3EuY2hlY2tTaGlwQWZsb2F0KCkpO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzaGlwc0FmbG9hdC5hZGQoaXRlbS5nZXRTaGlwSWQoKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgZ2V0U2hpcHNBZmxvYXQgPSAoKSA9PiBbLi4uc2hpcHNBZmxvYXRdO1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHN0YXJ0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNwb3RzID0gW107XG4gICAgICAgIGNvbnN0IHsgbGVuZ3RoLCBpc1ZlcnRpY2FsIH0gPSBzaGlwO1xuICAgICAgICBjb25zdCBtdWx0aXBsaWVyID0gaXNWZXJ0aWNhbCgpID8gMTAgOiAxO1xuICAgICAgICBjb25zdCBlbmQgPSBzdGFydCArIG11bHRpcGxpZXIgKiBsZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSBtdWx0aXBsaWVyKSB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0Qm9vbCA9IGkgPj0gMTAwO1xuICAgICAgICAgICAgY29uc3QgaG9yaXpCb29sID0gIShpICUgMTApIHx8IHZlcnRCb29sO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChpc1ZlcnRpY2FsKCkgPyB2ZXJ0Qm9vbCA6IGhvcml6Qm9vbCAmJiBpICE9PSBzdGFydCkgfHxcbiAgICAgICAgICAgICAgICBnZXRHcmlkSWxsZWdhbCgpW2ldXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcG90cy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHNwb3RzLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICAgIGdyaWRbaV0uYWRkU2hpcChzaGlwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHVwZGF0ZVNoaXBzQWZsb2F0KCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBmaW5kU2hpcCA9IChpZCkgPT4ge1xuICAgICAgICBjb25zdCBjb29yZHMgPSBbXTtcbiAgICAgICAgZ3JpZC5mb3JFYWNoKChzcXVhcmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoc3F1YXJlLmdldFNoaXBJZCgpID09PSBpZCkge1xuICAgICAgICAgICAgICAgIGNvb3Jkcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb29yZHM7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbmRBZGphY2VudCA9IChzdW5rQ29vcmRzKSA9PiB7XG4gICAgICAgIGNvbnN0IGZyZWVBdHRhY2tzID0gbmV3IFNldCgpO1xuICAgICAgICBzdW5rQ29vcmRzLmZvckVhY2goKHNwb3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlc3RCYXNlID0gWzEwLCAtMTBdO1xuICAgICAgICAgICAgaWYgKCEoc3BvdCAlIDEwKSkgdGVzdEJhc2UucHVzaCgtOSwgMSwgMTEpO1xuICAgICAgICAgICAgZWxzZSBpZiAoISgoc3BvdCArIDEpICUgMTApKSB0ZXN0QmFzZS5wdXNoKC0xMSwgLTEsIDkpO1xuICAgICAgICAgICAgZWxzZSB0ZXN0QmFzZS5wdXNoKC05LCAxLCAxMSwgLTExLCAtMSwgOSk7XG4gICAgICAgICAgICB0ZXN0QmFzZS5mb3JFYWNoKChudW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZCA9IHNwb3QgKyBudW07XG4gICAgICAgICAgICAgICAgaWYgKGdyaWRbY29vcmRdPy53YXNBdHRhY2tlZCgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyZWVBdHRhY2tzLmFkZChjb29yZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gWy4uLmZyZWVBdHRhY2tzXS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmQpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZ3JpZFtjb29yZF0uYXR0YWNrKCk7XG4gICAgICAgIGlmIChyZXN1bHQuc3Vuaykge1xuICAgICAgICAgICAgY29uc3Qgc3Vua0Nvb3JkcyA9IGZpbmRTaGlwKGdyaWRbY29vcmRdLmdldFNoaXBJZCgpKTtcbiAgICAgICAgICAgIGZpbmRBZGphY2VudChzdW5rQ29vcmRzKS5mb3JFYWNoKChmcmVlQXR0YWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgZ3JpZFtmcmVlQXR0YWNrXS5hdHRhY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVNoaXBzQWZsb2F0KCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldEdyaWQsXG4gICAgICAgIGdldEdyaWRBdHRhY2tzLFxuICAgICAgICBnZXRHcmlkU2hpcHMsXG4gICAgICAgIGdldEdyaWRJbGxlZ2FsLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIGdldFNoaXBzQWZsb2F0LFxuICAgICAgICBmaW5kQWRqYWNlbnQsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBib2FyZHMgPSB7XG4gICAgcDoge30sXG4gICAgYzoge30sXG4gICAgcmVzZXQ6ICh0YXJnZXQgPSBmYWxzZSkgPT4ge1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICBib2FyZHNbdGFyZ2V0XSA9IEJvYXJkRmFjdG9yeSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9hcmRzLnAgPSBCb2FyZEZhY3RvcnkoKTtcbiAgICAgICAgICAgIGJvYXJkcy5jID0gQm9hcmRGYWN0b3J5KCk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHNoaXBzID0ge1xuICAgIHA6IHt9LFxuICAgIGM6IHt9LFxuICAgIHJlc2V0OiAoKSA9PiB7XG4gICAgICAgIFtcbiAgICAgICAgICAgIFsnY2FycmllcicsIDVdLFxuICAgICAgICAgICAgWydiYXR0bGVzaGlwJywgNF0sXG4gICAgICAgICAgICBbJ2NydWlzZXInLCA0XSxcbiAgICAgICAgICAgIFsnZGVzdHJveWVyJywgM10sXG4gICAgICAgICAgICBbJ3N1Ym1hcmluZScsIDNdLFxuICAgICAgICAgICAgWydwYXRyb2wxJywgMl0sXG4gICAgICAgICAgICBbJ3BhdHJvbDInLCAyXSxcbiAgICAgICAgXS5mb3JFYWNoKChbbmFtZSwgbGVuXSkgPT4ge1xuICAgICAgICAgICAgc2hpcHMucFtuYW1lXSA9IFNoaXBGYWN0b3J5KG5hbWUsIGxlbik7XG4gICAgICAgICAgICBzaGlwcy5jW25hbWVdID0gU2hpcEZhY3RvcnkobmFtZSwgbGVuKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG5cbi8vIGZ1bmN0aW9uIGdyaWRpZnkoZ3JpZCkge1xuLy8gICAgIHJldHVybiBncmlkLnJlZHVjZShcbi8vICAgICAgICAgKGFjYywgY3VyciwgaW5kZXgpID0+IHtcbi8vICAgICAgICAgICAgIGlmICghKGluZGV4ICUgMTApICYmIGluZGV4ID4gMCkgYWNjLnB1c2goW10pO1xuLy8gICAgICAgICAgICAgYWNjW2FjYy5sZW5ndGggLSAxXS5wdXNoKGN1cnIpO1xuLy8gICAgICAgICAgICAgcmV0dXJuIGFjYztcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgW1tdXVxuLy8gICAgICk7XG4vLyB9XG4iLCJpbXBvcnQgeyBib2FyZHMsIHNoaXBzIH0gZnJvbSAnLi9ib2FyZCc7XG5pbXBvcnQgeyBFLCBQdWJTdWIgfSBmcm9tICcuL3B1YnN1Yic7XG5cbmxldCBnYW1lU3RhcnRlZCA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IGNoZWNrR2FtZVN0YXJ0ZWQgPSAoKSA9PiBnYW1lU3RhcnRlZDtcblxuZXhwb3J0IGNvbnN0IFBsYXllciA9ICgoKSA9PiB7XG4gICAgbGV0IGh1bWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgaHVtYW4gPSAhaHVtYW47XG4gICAgfTtcblxuICAgIGNvbnN0IGdldENvbXBDaG9pY2UgPSAoZ3JpZCkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gZ3JpZC5yZWR1Y2UoKGFjYywgY3VyciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWNjLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwgW10pO1xuICAgICAgICByZXR1cm4gb3B0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcHRpb25zLmxlbmd0aCldO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgaHVtYW4gPSB0cnVlO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b2dnbGUsXG4gICAgICAgIGdldENvbXBDaG9pY2UsXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBpc0h1bWFuVHVybjogKCkgPT4gaHVtYW4sXG4gICAgfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGNoZWNrR2FtZU92ZXIoKSB7XG4gICAgbGV0IHdpbm5lciA9ICcnO1xuICAgIGlmIChib2FyZHMucC5nZXRTaGlwc0FmbG9hdCgpLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgd2lubmVyID0gJ0NvbXB1dGVyJztcbiAgICB9XG4gICAgaWYgKGJvYXJkcy5jLmdldFNoaXBzQWZsb2F0KCkubGVuZ3RoIDwgMSkge1xuICAgICAgICB3aW5uZXIgPSAnUGxheWVyJztcbiAgICB9XG4gICAgcmV0dXJuIHdpbm5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXlSb3VuZChjb29yZCkge1xuICAgIGNvbnN0IG9wcG9uZW50ID0gUGxheWVyLmlzSHVtYW5UdXJuKCkgPyAnYycgOiAncCc7XG4gICAgY29uc3QgeyBoaXQgfSA9IGJvYXJkc1tvcHBvbmVudF0ucmVjZWl2ZUF0dGFjayhjb29yZCk7XG4gICAgY29uc3QgZ2FtZU92ZXIgPSBjaGVja0dhbWVPdmVyKCk7XG5cbiAgICBpZiAoIWhpdCkgUGxheWVyLnRvZ2dsZSgpO1xuXG4gICAgUHViU3ViLnB1Ymxpc2goRS5VUERBVEUpO1xuXG4gICAgaWYgKGdhbWVPdmVyKSByZXR1cm4gZ2FtZU92ZXI7XG5cbiAgICBpZiAoIVBsYXllci5pc0h1bWFuVHVybigpKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcGxheVJvdW5kKFBsYXllci5nZXRDb21wQ2hvaWNlKGJvYXJkcy5wLmdldEdyaWRBdHRhY2tzKCkpKTtcbiAgICAgICAgfSwgODAwKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRHYW1lKCkge1xuICAgIGdhbWVTdGFydGVkID0gZmFsc2U7XG4gICAgUGxheWVyLnJlc2V0KCk7XG4gICAgYm9hcmRzLnJlc2V0KCk7XG4gICAgc2hpcHMucmVzZXQoKTtcbiAgICBQdWJTdWIucHVibGlzaChFLlVQREFURSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcGVuSW5kaWNlcyhwbGF5ZXIpIHtcbiAgICByZXR1cm4gYm9hcmRzW3BsYXllcl1cbiAgICAgICAgLmdldEdyaWRJbGxlZ2FsKClcbiAgICAgICAgLm1hcCgodmFsLCBpbmRleCkgPT4gKHsgdmFsLCBpbmRleCB9KSlcbiAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS52YWwgPT09IDApXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+IGl0ZW0uaW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VSYW5kb21TaGlwcyhwbGF5ZXIpIHtcbiAgICBib2FyZHMucmVzZXQocGxheWVyKTtcbiAgICBnYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgY29uc3QgZmFpbGVkU3BvdHMgPSBbXTtcbiAgICBjb25zdCBzaGlwTmFtZXMgPSBbXG4gICAgICAgICdjYXJyaWVyJyxcbiAgICAgICAgJ2JhdHRsZXNoaXAnLFxuICAgICAgICAnY3J1aXNlcicsXG4gICAgICAgICdkZXN0cm95ZXInLFxuICAgICAgICAnc3VibWFyaW5lJyxcbiAgICAgICAgJ3BhdHJvbDEnLFxuICAgICAgICAncGF0cm9sMicsXG4gICAgXTtcbiAgICBzaGlwTmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwID0gc2hpcHNbcGxheWVyXVtuYW1lXTtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKGZhaWxlZFNwb3RzLmxlbmd0aCA8IDg4ICYmICFzdWNjZXNzKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVuSW5kaWNlcyA9IGdldE9wZW5JbmRpY2VzKHBsYXllcik7XG4gICAgICAgICAgICBjb25zdCBzcG90ID1cbiAgICAgICAgICAgICAgICBvcGVuSW5kaWNlc1tcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG9wZW5JbmRpY2VzLmxlbmd0aCAtIDEpKVxuICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKyAwLjUpKSB7XG4gICAgICAgICAgICAgICAgc2hpcC5jaGFuZ2VWZXJ0aWNhbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdWNjZXNzID0gYm9hcmRzW3BsYXllcl0ucGxhY2VTaGlwKHNoaXAsIHNwb3QpO1xuXG4gICAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBzaGlwLmNoYW5nZVZlcnRpY2FsKCk7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9IGJvYXJkc1twbGF5ZXJdLnBsYWNlU2hpcChzaGlwLCBzcG90KTtcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZmFpbGVkU3BvdHMucHVzaChzcG90KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdhbWVTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5ZXJTaGlwc0dyaWQ6IGJvYXJkcy5wLmdldEdyaWRTaGlwcygpLFxuICAgICAgICBwbGF5ZXJBdHRhY2tzR3JpZDogYm9hcmRzLnAuZ2V0R3JpZEF0dGFja3MoKSxcbiAgICAgICAgY29tcEF0dGFja3NHcmlkOiBib2FyZHMuYy5nZXRHcmlkQXR0YWNrcygpLFxuICAgICAgICBpc0h1bWFuOiBQbGF5ZXIuaXNIdW1hblR1cm4oKSxcbiAgICAgICAgcFNjb3JlOiBib2FyZHMucC5nZXRTaGlwc0FmbG9hdCgpLmxlbmd0aCxcbiAgICAgICAgY1Njb3JlOiBib2FyZHMuYy5nZXRTaGlwc0FmbG9hdCgpLmxlbmd0aCxcbiAgICB9O1xufVxuXG5yZXNldEdhbWUoKTtcbiIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tIERPTSBGYWN0b3JpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGVsRmFjdG9yeSh0eXBlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiA9IFtdKSB7XG4gICAgcmV0dXJuIHsgdHlwZSwgYXR0cmlidXRlcywgY2hpbGRyZW4gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxGYWN0b3J5KG9iaikge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmoudHlwZSk7XG4gICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSBvYmo7XG5cbiAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgaWYgKGtleSAhPT0gJ2RhdGFzZXQnKSB7XG4gICAgICAgICAgICBlbFtrZXldID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGRpcmVjdGlvbnMgbmVlZGVkIHRvIHNldCBcImRhdGEtXCIgcHJvcGVydGllc1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtwcm9wLCBkYXRhXSkgPT4ge1xuICAgICAgICAgICAgICAgIGVsLmRhdGFzZXRbcHJvcF0gPSBkYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIG9iai5jaGlsZHJlbj8uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgLy8gQWxsb3dzIGZvciBjb25kaXRpb25hbGx5IGFkZGluZyBjaGlsZHJlbiB1cHN0cmVhbSBieVxuICAgICAgICAvLyBzZXR0aW5nIFwiXCIgYXMgdGhlIGFsdGVybmF0aXZlIHRvIGVsRmFjdG9yeSgpXG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkoY2hpbGQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVsO1xufVxuIiwiZXhwb3J0IGNvbnN0IFB1YlN1YiA9ICgoKSA9PiB7XG4gICAgY29uc3QgZXZlbnRzTGlzdCA9IHt9O1xuICAgIC8vIHsga2V5OiBcInRyaWdnZXJFdmVudFwiLCB2YWx1ZTogWyBhcnJheSBvZiBmdW5jdGlvbnMgXSB9XG5cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUodHJpZ2dlckV2ZW50LCBzdWJzY3JpYmVyKSB7XG4gICAgICAgIGlmICghZXZlbnRzTGlzdFt0cmlnZ2VyRXZlbnRdKSB7XG4gICAgICAgICAgICBldmVudHNMaXN0W3RyaWdnZXJFdmVudF0gPSBbc3Vic2NyaWJlcl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudHNMaXN0W3RyaWdnZXJFdmVudF0ucHVzaChzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmdW5jdGlvbkxpc3QgPSBldmVudHNMaXN0W3RyaWdnZXJFdmVudF07XG4gICAgICAgICAgICAgICAgY29uc3QgaSA9IGZ1bmN0aW9uTGlzdC5pbmRleE9mKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgICAgIGlmIChpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25MaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHB1Ymxpc2godHJpZ2dlckV2ZW50LCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGZ1bmN0aW9uTGlzdCA9IGV2ZW50c0xpc3RbdHJpZ2dlckV2ZW50XTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZnVuY3Rpb25MaXN0KSkge1xuICAgICAgICAgICAgZnVuY3Rpb25MaXN0LmZvckVhY2goKHN1YnNjcmliZXIpID0+IHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyKC4uLmFyZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWJzY3JpYmUsIHB1Ymxpc2ggfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBFID0ge1xuICAgIFVQREFURTogJ1VwZGF0ZURpc3BsYXknLFxufTtcbiIsImltcG9ydCB7IEUsIFB1YlN1YiB9IGZyb20gJy4vcHVic3ViJztcbmltcG9ydCB7XG4gICAgY2hlY2tHYW1lU3RhcnRlZCxcbiAgICBnZXRHYW1lU3RhdGUsXG4gICAgcGxhY2VSYW5kb21TaGlwcyxcbiAgICBwbGF5Um91bmQsXG4gICAgcmVzZXRHYW1lLFxufSBmcm9tICcuL2dhbWUtY29udHJvbGxlcic7XG5pbXBvcnQgeyBlbEZhY3RvcnksIGh0bWxGYWN0b3J5IH0gZnJvbSAnLi9oZWxwZXJzJztcblxuLy8gUHJlLWdhbWUgVmFyc1xuY29uc3QgaG9tZVNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLXNjcmVlbicpO1xuY29uc3QgcHJlR2FtZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZS1nYW1lLWJvYXJkJyk7XG5jb25zdCByYW5kb21Cb2FyZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYW5kb20tYm9hcmQtYnRuJyk7XG5jb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydC1idG4nKTtcblxuLy8gSW4tZ2FtZSBWYXJzXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtYnRuJyk7XG5jb25zdCBjdXJyZW50VHVyblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudCcpO1xuY29uc3Qgc2hpcHNCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWJvYXJkcyAuc2hpcHMnKTtcbmNvbnN0IGF0dGFja3NCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWJvYXJkcyAuYXR0YWNrcycpO1xuY29uc3QgcFNjb3JlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItc2NvcmUnKTtcbmNvbnN0IGNTY29yZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcHV0ZXItc2NvcmUnKTtcblxuLy8gUG9zdC1nYW1lIFZhcnNcbmNvbnN0IHdpbm5lckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2lubmVyJyk7XG5jb25zdCBlbmRTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLXNjcmVlbicpO1xuY29uc3QgZW5kUG9wVXAgPSBlbmRTY3JlZW4ucXVlcnlTZWxlY3RvcignLnBvcC11cCcpO1xuY29uc3QgbmV3R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctZ2FtZS1idG4nKTtcblxuZnVuY3Rpb24gZW5kR2FtZURpc3BsYXkod2lubmVyKSB7XG4gICAgd2lubmVyRGlzcGxheS50ZXh0Q29udGVudCA9IHdpbm5lcjtcbiAgICBlbmRTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVuZFBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoJ3NocnVuaycpO1xuICAgIH0sIDE1MCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUJvYXJkQ2xpY2soZSkge1xuICAgIGNvbnN0IGNvb3JkID0gZS50YXJnZXQuZGF0YXNldC5hdHRhY2tDb29yZDtcbiAgICBpZiAoIWNvb3JkKSByZXR1cm47XG4gICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC5hdHRhY2tzJylcbiAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQm9hcmRDbGljayk7XG4gICAgY29uc3QgZ2FtZU92ZXIgPSBwbGF5Um91bmQoY29vcmQpO1xuICAgIGlmIChnYW1lT3Zlcikge1xuICAgICAgICBlbmRHYW1lRGlzcGxheShnYW1lT3Zlcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDdXJyZW50UGxheWVyKGlzSHVtYW4gPSB0cnVlKSB7XG4gICAgaWYgKGlzSHVtYW4pIHtcbiAgICAgICAgY3VycmVudFR1cm5UZXh0LnRleHRDb250ZW50ID0gJ1BsYXllcic7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmJvYXJkLmF0dGFja3MnKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQm9hcmRDbGljayk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFR1cm5UZXh0LnRleHRDb250ZW50ID0gJ0NvbXB1dGVyJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNoaXBzQm9hcmQoXG4gICAgaXNQbGFjZW1lbnRQaGFzZSA9IGZhbHNlLFxuICAgIHBsYXllclNoaXBzR3JpZCA9IFtdLFxuICAgIHBsYXllckF0dGFja3NHcmlkID0gW11cbikge1xuICAgIGNvbnN0IGFwcGVuZFRhcmdldCA9IGlzUGxhY2VtZW50UGhhc2UgPyBwcmVHYW1lQm9hcmQgOiBzaGlwc0JvYXJkO1xuICAgIGFwcGVuZFRhcmdldC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnN0IHNoaXBzR3JpZCA9IGVsRmFjdG9yeSgnZGl2JywgeyBjbGFzc0xpc3Q6ICdib2FyZCBzaGlwcycgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHRha2VuID0gcGxheWVyU2hpcHNHcmlkW2ldID8gJyBzaGlwJyA6ICcnO1xuICAgICAgICBjb25zdCBjb21wQXR0YWNrID0gWycnLCAnIG1pc3MnLCAnIGhpdCddW3BsYXllckF0dGFja3NHcmlkW2ldXSA/PyAnJztcbiAgICAgICAgY29uc3QgcGxhY2UgPSBpc1BsYWNlbWVudFBoYXNlID8gJyBwbGFjZScgOiAnJztcbiAgICAgICAgc2hpcHNHcmlkLmNoaWxkcmVuLnB1c2goXG4gICAgICAgICAgICBlbEZhY3RvcnkoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogaSwgLy8gZGV2TW9kZVxuICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogYHNxdWFyZSR7dGFrZW59JHtjb21wQXR0YWNrfSR7cGxhY2V9YCxcbiAgICAgICAgICAgICAgICBkYXRhc2V0OiB7IHNoaXBDb29yZDogaSB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhcHBlbmRUYXJnZXQuYXBwZW5kQ2hpbGQoaHRtbEZhY3Rvcnkoc2hpcHNHcmlkKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUF0dGFja3NCb2FyZChjb21wQXR0YWNrc0dyaWQgPSBbXSkge1xuICAgIGF0dGFja3NCb2FyZC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3QgYXR0YWNrc0dyaWQgPSBlbEZhY3RvcnkoJ2RpdicsIHsgY2xhc3NMaXN0OiAnYm9hcmQgYXR0YWNrcycgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHBsYXllckF0dGFjayA9IFsnJywgJyBtaXNzJywgJyBoaXQnXVtjb21wQXR0YWNrc0dyaWRbaV1dID8/ICcnO1xuICAgICAgICBhdHRhY2tzR3JpZC5jaGlsZHJlbi5wdXNoKFxuICAgICAgICAgICAgZWxGYWN0b3J5KCdidXR0b24nLCB7XG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IGksIC8vIGRldk1vZGVcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IGBzcXVhcmUke3BsYXllckF0dGFja31gLFxuICAgICAgICAgICAgICAgIGRhdGFzZXQ6IHsgYXR0YWNrQ29vcmQ6IGkgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXR0YWNrc0JvYXJkLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5KGF0dGFja3NHcmlkKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNjb3JlcyhwU2NvcmUsIGNTY29yZSkge1xuICAgIHBTY29yZURpc3BsYXkudGV4dENvbnRlbnQgPSBwU2NvcmU7XG4gICAgY1Njb3JlRGlzcGxheS50ZXh0Q29udGVudCA9IGNTY29yZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheShpc1BsYWNlbWVudFBoYXNlID0gZmFsc2UpIHtcbiAgICAvLyBHZXRzIGluZm8gZnJvbSBnYW1lLWNvbnRyb2xsZXJcbiAgICBjb25zdCB7XG4gICAgICAgIHBsYXllclNoaXBzR3JpZCxcbiAgICAgICAgcGxheWVyQXR0YWNrc0dyaWQsXG4gICAgICAgIGNvbXBBdHRhY2tzR3JpZCxcbiAgICAgICAgaXNIdW1hbixcbiAgICAgICAgcFNjb3JlLFxuICAgICAgICBjU2NvcmUsXG4gICAgfSA9IGdldEdhbWVTdGF0ZSgpO1xuXG4gICAgLy8gVXBkYXRlcyBib2FyZHMsIGN1cnJlbnQgcGxheWVyLCBhbmQgc2NvcmVzXG4gICAgdXBkYXRlU2hpcHNCb2FyZChpc1BsYWNlbWVudFBoYXNlLCBwbGF5ZXJTaGlwc0dyaWQsIHBsYXllckF0dGFja3NHcmlkKTtcbiAgICB1cGRhdGVBdHRhY2tzQm9hcmQoY29tcEF0dGFja3NHcmlkKTtcbiAgICB1cGRhdGVDdXJyZW50UGxheWVyKGlzSHVtYW4pO1xuICAgIHVwZGF0ZVNjb3JlcyhwU2NvcmUsIGNTY29yZSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0QXBwKCkge1xuICAgIHJlc2V0R2FtZSgpO1xuICAgIGVuZFNjcmVlbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBob21lU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHVwZGF0ZURpc3BsYXkodHJ1ZSk7XG59XG5cbnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChjaGVja0dhbWVTdGFydGVkKCkpIHtcbiAgICAgICAgdXBkYXRlRGlzcGxheSgpO1xuICAgICAgICBob21lU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbn0pO1xuXG5yYW5kb21Cb2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwbGFjZVJhbmRvbVNoaXBzKCdwJyk7XG4gICAgcGxhY2VSYW5kb21TaGlwcygnYycpO1xuICAgIHVwZGF0ZURpc3BsYXkodHJ1ZSk7XG59KTtcblxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0QXBwKTtcblxubmV3R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzdGFydEFwcCgpO1xuICAgIHVwZGF0ZURpc3BsYXkoKTtcbn0pO1xuXG5QdWJTdWIuc3Vic2NyaWJlKEUuVVBEQVRFLCB1cGRhdGVEaXNwbGF5KTtcblxuc3RhcnRBcHAoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zY3JlZW4tY29udHJvbGxlcic7XG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9