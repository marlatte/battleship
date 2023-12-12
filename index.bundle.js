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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywrRkFBK0YsUUFBUSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLGNBQWMsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksY0FBYyxjQUFjLE1BQU0sV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxhQUFhLGNBQWMsTUFBTSxVQUFVLGFBQWEsYUFBYSxPQUFPLFlBQVksY0FBYyxjQUFjLE1BQU0sVUFBVSxZQUFZLE9BQU8sYUFBYSxjQUFjLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFB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QUFTO0FBQ3JCO0FBQ0Esb0NBQW9DLGFBQWE7QUFDakQsMkJBQTJCLGdCQUFnQjtBQUMzQyxhQUFhO0FBQ2I7QUFDQTs7QUFFQSw2QkFBNkIscURBQVc7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxFQUFFLDhEQUFZOztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDJEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGtFQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsSUFBSSxrRUFBZ0I7QUFDcEIsSUFBSSxrRUFBZ0I7QUFDcEI7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsMkNBQU0sV0FBVyxzQ0FBQzs7QUFFbEI7Ozs7Ozs7VUM3SkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBNkI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWUtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcHVic3ViLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9zY3JlZW4tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIC0tLS0tLS0tLS0tLS0tLSAgICAgUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC8qIGNvbG9yOiB1bnNldDsgKi9cbn1cblxuYSB7XG4gICAgY29sb3I6IHVuc2V0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbjpyb290IHtcbiAgICAtLWVnLXZhcjogcmVkO1xuICAgIC0tc3F1YXJlLWRpbTogM3N2aDtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDBzdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2hydW5rIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuICAgIDpyb290IHtcbiAgICAgICAgLS1zcXVhcmUtZGltOiA1c3ZoO1xuICAgIH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvVXRpbGl0aWVzICYgVW5pdmVyc2FscyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIENPTlRFTlQgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEhlYWRlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbmhlYWRlciB7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNob21lLWJ0biB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0hlYWRlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgTWFpbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5tYWluIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDNzdmg7XG59XG5cbi5jdXJyZW50LWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuICAgIG1haW4ge1xuICAgICAgICBnYXA6IDEwc3ZoO1xuICAgIH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBCb2FyZHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuLmdhbWUtYm9hcmRzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNXB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLmJvYXJkIHtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgdmFyKC0tc3F1YXJlLWRpbSkpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCB2YXIoLS1zcXVhcmUtZGltKSk7XG4gICAgZ2FwOiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnNxdWFyZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcbiAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAvKiBkZXZNb2RlICovXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuYnV0dG9uLnNxdWFyZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24uc3F1YXJlOm5vdCgubWlzcyk6bm90KC5oaXQpOm5vdCguc2hpcCk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDUsIDc1JSwgNTAlKTtcbn1cblxuLnNxdWFyZS5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xufVxuXG4uc3F1YXJlLmhpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uc3F1YXJlLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxufVxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvQm9hcmRzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBTY29yZXMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uc2NvcmVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1Njb3JlcyAgICAgLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9NYWluICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBIb21lLVNjcmVlbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbi5tb2RhbCBidXR0b24ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0hvbWUtU2NyZWVuICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBFbmQgU2NyZWVuICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLm1vZGFsIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMHN2aDtcbiAgICB3aWR0aDogMTAwdnc7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA0ZDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcbn1cblxuLnBvcC11cCB7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xufVxuXG4uZW5kLXNjcmVlbiAucG9wLXVwIHtcbiAgICBtaW4td2lkdGg6IDYwdnc7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL0VuZCBTY3JlZW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEZvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5cbmZvb3RlciB7XG4gICAgcGFkZGluZzogNXB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDhweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZhLmZhLWdpdGh1YiB7XG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEuMyk7XG4gICAgfVxufVxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvQ09OVEVOVCAgICAgLS0tLS0tLS0tLS0tLS0tICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1EQUFtRDs7QUFFbkQ7OztJQUdJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUEsb0RBQW9EO0FBQ3BELG1FQUFtRTs7QUFFbkU7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBLG9FQUFvRTtBQUNwRSxvREFBb0Q7O0FBRXBELG1EQUFtRDs7QUFFbkQ7SUFDSSxhQUFhOztJQUViLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUEsb0RBQW9EOztBQUVwRCxpREFBaUQ7QUFDakQ7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQSxtREFBbUQ7QUFDbkQ7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUzs7SUFFVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9EQUFvRDtJQUNwRCxpREFBaUQ7SUFDakQsUUFBUTtJQUNSLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZOztJQUVaLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7QUFDQSxvREFBb0Q7O0FBRXBELG1EQUFtRDs7QUFFbkQ7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCOztJQUU3QixpQkFBaUI7QUFDckI7O0FBRUEsb0RBQW9EO0FBQ3BELGtEQUFrRDs7QUFFbEQsd0RBQXdEOztBQUV4RDtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUEseURBQXlEOztBQUV6RCx1REFBdUQ7O0FBRXZEO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTs7SUFFWixhQUFhO0lBQ2IscUJBQXFCOztJQUVyQiwyQkFBMkI7SUFDM0IsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixTQUFTOztJQUVULHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCOztJQUV0QixrQkFBa0I7O0lBRWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsd0RBQXdEOztBQUV4RCxtREFBbUQ7O0FBRW5EO0lBQ0ksWUFBWTs7SUFFWixhQUFhO0lBQ2IsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlOztJQUVmO1FBQ0ksc0NBQXNDO1FBQ3RDLHFDQUFxQztJQUN6QztBQUNKO0FBQ0Esb0RBQW9EOztBQUVwRCxxREFBcURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogLS0tLS0tLS0tLS0tLS0tICAgICBSZWJvb3QgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiBjb2xvcjogdW5zZXQ7ICovXFxufVxcblxcbmEge1xcbiAgICBjb2xvcjogdW5zZXQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvUmVib290ICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIFV0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbjpyb290IHtcXG4gICAgLS1lZy12YXI6IHJlZDtcXG4gICAgLS1zcXVhcmUtZGltOiAzc3ZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDBzdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaHJ1bmsge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG4gICAgOnJvb3Qge1xcbiAgICAgICAgLS1zcXVhcmUtZGltOiA1c3ZoO1xcbiAgICB9XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL1V0aWxpdGllcyAmIFVuaXZlcnNhbHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgQ09OVEVOVCAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICBIZWFkZXIgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hvbWUtYnRuIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvSGVhZGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIE1haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbm1haW4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDNzdmg7XFxufVxcblxcbi5jdXJyZW50LWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuICAgIG1haW4ge1xcbiAgICAgICAgZ2FwOiAxMHN2aDtcXG4gICAgfVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEJvYXJkcyAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuLmdhbWUtYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCB2YXIoLS1zcXVhcmUtZGltKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCB2YXIoLS1zcXVhcmUtZGltKSk7XFxuICAgIGdhcDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcblxcbiAgICAvKiBkZXZNb2RlICovXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmJ1dHRvbi5zcXVhcmUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbi5zcXVhcmU6bm90KC5taXNzKTpub3QoLmhpdCk6bm90KC5zaGlwKTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDUsIDc1JSwgNTAlKTtcXG59XFxuXFxuLnNxdWFyZS5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcXG59XFxuXFxuLnNxdWFyZS5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5zcXVhcmUubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9Cb2FyZHMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgU2NvcmVzICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uc2NvcmVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9TY29yZXMgICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgL01haW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgSG9tZS1TY3JlZW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5tb2RhbCBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvSG9tZS1TY3JlZW4gICAgIC0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLSAgICAgRW5kIFNjcmVlbiAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLm1vZGFsIHtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDEwMHN2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA0ZDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxufVxcblxcbi5wb3AtdXAge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG5cXG4uZW5kLXNjcmVlbiAucG9wLXVwIHtcXG4gICAgbWluLXdpZHRoOiA2MHZ3O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9FbmQgU2NyZWVuICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIEZvb3RlciAgICAgLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZm9vdGVyIHtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmZhLmZhLWdpdGh1YiB7XFxuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dDtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEuMyk7XFxuICAgIH1cXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tICAgICAvRm9vdGVyICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0gICAgIC9DT05URU5UICAgICAtLS0tLS0tLS0tLS0tLS0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIFNoaXBGYWN0b3J5KGlkLCBsZW5ndGgpIHtcbiAgICBsZXQgaGVhbHRoID0gbGVuZ3RoO1xuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGVhbHRoIC09IDE7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEhlYWx0aCA9ICgpID0+IGhlYWx0aDtcblxuICAgIGxldCB2ZXJ0aWNhbCA9IGZhbHNlO1xuICAgIGNvbnN0IGNoYW5nZVZlcnRpY2FsID0gKCkgPT4ge1xuICAgICAgICB2ZXJ0aWNhbCA9ICF2ZXJ0aWNhbDtcbiAgICB9O1xuICAgIGNvbnN0IGlzVmVydGljYWwgPSAoKSA9PiB2ZXJ0aWNhbDtcblxuICAgIGNvbnN0IGlzQWZsb2F0ID0gKCkgPT4gaGVhbHRoID49IDE7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SUQ6ICgpID0+IGlkLFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGdldEhlYWx0aCxcbiAgICAgICAgaGl0LFxuICAgICAgICBpc0FmbG9hdCxcbiAgICAgICAgY2hhbmdlVmVydGljYWwsXG4gICAgICAgIGlzVmVydGljYWwsXG4gICAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFNxdWFyZSA9ICgpID0+IHtcbiAgICBsZXQgYXR0YWNrZWQgPSAwO1xuICAgIGNvbnN0IHdhc0F0dGFja2VkID0gKCkgPT4gYXR0YWNrZWQ7XG5cbiAgICBsZXQgc2hpcCA9IG51bGw7XG4gICAgY29uc3QgaXNUYWtlbiA9ICgpID0+ICEhc2hpcDtcbiAgICBjb25zdCBhZGRTaGlwID0gKG5ld1NoaXApID0+IHtcbiAgICAgICAgc2hpcCA9IG5ld1NoaXA7XG4gICAgfTtcblxuICAgIGNvbnN0IGF0dGFjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNoaXApIHtcbiAgICAgICAgICAgIGF0dGFja2VkID0gMjtcbiAgICAgICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgICAgICBjb25zdCBzdW5rID0gIXNoaXAuaXNBZmxvYXQoKTtcbiAgICAgICAgICAgIHJldHVybiB7IGhpdDogdHJ1ZSwgc3VuayB9O1xuICAgICAgICB9XG4gICAgICAgIGF0dGFja2VkID0gMTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGVja1NoaXBBZmxvYXQgPSAoKSA9PiBzaGlwPy5pc0FmbG9hdCgpO1xuXG4gICAgY29uc3QgZ2V0U2hpcElkID0gKCkgPT4gc2hpcC5nZXRJRCgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2FzQXR0YWNrZWQsXG4gICAgICAgIGlzVGFrZW4sXG4gICAgICAgIGFkZFNoaXAsXG4gICAgICAgIGF0dGFjayxcbiAgICAgICAgY2hlY2tTaGlwQWZsb2F0LFxuICAgICAgICBnZXRTaGlwSWQsXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBCb2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgICAgZ3JpZC5wdXNoKFNxdWFyZSgpKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0R3JpZCA9ICgpID0+IFsuLi5ncmlkXTtcbiAgICBjb25zdCBnZXRHcmlkQXR0YWNrcyA9ICgpID0+IGdyaWQubWFwKChzcXVhcmUpID0+IHNxdWFyZS53YXNBdHRhY2tlZCgpKTtcbiAgICBjb25zdCBnZXRHcmlkU2hpcHMgPSAoKSA9PiBncmlkLm1hcCgoc3F1YXJlKSA9PiArc3F1YXJlLmlzVGFrZW4oKSk7XG4gICAgY29uc3QgZ2V0R3JpZElsbGVnYWwgPSAoKSA9PlxuICAgICAgICBncmlkLm1hcCgoc3F1YXJlLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXN0QmFzZSA9IFswLCAxMCwgLTEwXTtcbiAgICAgICAgICAgIGlmICghKGkgJSAxMCkpIHRlc3RCYXNlLnB1c2goLTksIDEsIDExKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKCEoKGkgKyAxKSAlIDEwKSkgdGVzdEJhc2UucHVzaCgtMTEsIC0xLCA5KTtcbiAgICAgICAgICAgIGVsc2UgdGVzdEJhc2UucHVzaCgtOSwgMSwgMTEsIC0xMSwgLTEsIDkpO1xuICAgICAgICAgICAgY29uc3QgYWRqYWNlbnQgPSB0ZXN0QmFzZVxuICAgICAgICAgICAgICAgIC5tYXAoKG51bSkgPT4gZ3JpZFtpICsgbnVtXT8uaXNUYWtlbigpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbikubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuICshIWFkamFjZW50O1xuICAgICAgICB9KTtcblxuICAgIGNvbnN0IHNoaXBzQWZsb2F0ID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IHVwZGF0ZVNoaXBzQWZsb2F0ID0gKCkgPT4ge1xuICAgICAgICBzaGlwc0FmbG9hdC5jbGVhcigpO1xuICAgICAgICBjb25zdCBzaGlwcyA9IGdyaWQuZmlsdGVyKChzcSkgPT4gc3EuY2hlY2tTaGlwQWZsb2F0KCkpO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzaGlwc0FmbG9hdC5hZGQoaXRlbS5nZXRTaGlwSWQoKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgZ2V0U2hpcHNBZmxvYXQgPSAoKSA9PiBbLi4uc2hpcHNBZmxvYXRdO1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHN0YXJ0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNwb3RzID0gW107XG4gICAgICAgIGNvbnN0IHsgbGVuZ3RoLCBpc1ZlcnRpY2FsIH0gPSBzaGlwO1xuICAgICAgICBjb25zdCBtdWx0aXBsaWVyID0gaXNWZXJ0aWNhbCgpID8gMTAgOiAxO1xuICAgICAgICBjb25zdCBlbmQgPSBzdGFydCArIG11bHRpcGxpZXIgKiBsZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSBtdWx0aXBsaWVyKSB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0Qm9vbCA9IGkgPj0gMTAwO1xuICAgICAgICAgICAgY29uc3QgaG9yaXpCb29sID0gIShpICUgMTApIHx8IHZlcnRCb29sO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChpc1ZlcnRpY2FsKCkgPyB2ZXJ0Qm9vbCA6IGhvcml6Qm9vbCAmJiBpICE9PSBzdGFydCkgfHxcbiAgICAgICAgICAgICAgICBnZXRHcmlkSWxsZWdhbCgpW2ldXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcG90cy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHNwb3RzLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICAgIGdyaWRbaV0uYWRkU2hpcChzaGlwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHVwZGF0ZVNoaXBzQWZsb2F0KCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGdyaWRbY29vcmRdLmF0dGFjaygpO1xuICAgICAgICB1cGRhdGVTaGlwc0FmbG9hdCgpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRHcmlkLFxuICAgICAgICBnZXRHcmlkQXR0YWNrcyxcbiAgICAgICAgZ2V0R3JpZFNoaXBzLFxuICAgICAgICBnZXRHcmlkSWxsZWdhbCxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICBnZXRTaGlwc0FmbG9hdCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGJvYXJkcyA9IHtcbiAgICBwOiB7fSxcbiAgICBjOiB7fSxcbiAgICByZXNldDogKHRhcmdldCA9IGZhbHNlKSA9PiB7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIGJvYXJkc1t0YXJnZXRdID0gQm9hcmRGYWN0b3J5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2FyZHMucCA9IEJvYXJkRmFjdG9yeSgpO1xuICAgICAgICAgICAgYm9hcmRzLmMgPSBCb2FyZEZhY3RvcnkoKTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG5leHBvcnQgY29uc3Qgc2hpcHMgPSB7XG4gICAgcDoge30sXG4gICAgYzoge30sXG4gICAgcmVzZXQ6ICgpID0+IHtcbiAgICAgICAgW1xuICAgICAgICAgICAgWydjYXJyaWVyJywgNV0sXG4gICAgICAgICAgICBbJ2JhdHRsZXNoaXAnLCA0XSxcbiAgICAgICAgICAgIFsnY3J1aXNlcicsIDRdLFxuICAgICAgICAgICAgWydkZXN0cm95ZXInLCAzXSxcbiAgICAgICAgICAgIFsnc3VibWFyaW5lJywgM10sXG4gICAgICAgICAgICBbJ3BhdHJvbDEnLCAyXSxcbiAgICAgICAgICAgIFsncGF0cm9sMicsIDJdLFxuICAgICAgICBdLmZvckVhY2goKFtuYW1lLCBsZW5dKSA9PiB7XG4gICAgICAgICAgICBzaGlwcy5wW25hbWVdID0gU2hpcEZhY3RvcnkobmFtZSwgbGVuKTtcbiAgICAgICAgICAgIHNoaXBzLmNbbmFtZV0gPSBTaGlwRmFjdG9yeShuYW1lLCBsZW4pO1xuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuLy8gZnVuY3Rpb24gZ3JpZGlmeShncmlkKSB7XG4vLyAgICAgcmV0dXJuIGdyaWQucmVkdWNlKFxuLy8gICAgICAgICAoYWNjLCBjdXJyLCBpbmRleCkgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKCEoaW5kZXggJSAxMCkgJiYgaW5kZXggPiAwKSBhY2MucHVzaChbXSk7XG4vLyAgICAgICAgICAgICBhY2NbYWNjLmxlbmd0aCAtIDFdLnB1c2goY3Vycik7XG4vLyAgICAgICAgICAgICByZXR1cm4gYWNjO1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBbW11dXG4vLyAgICAgKTtcbi8vIH1cbiIsImltcG9ydCB7IGJvYXJkcywgc2hpcHMgfSBmcm9tICcuL2JvYXJkJztcbmltcG9ydCB7IEUsIFB1YlN1YiB9IGZyb20gJy4vcHVic3ViJztcblxubGV0IGdhbWVTdGFydGVkID0gZmFsc2U7XG5leHBvcnQgY29uc3QgY2hlY2tHYW1lU3RhcnRlZCA9ICgpID0+IGdhbWVTdGFydGVkO1xuXG5leHBvcnQgY29uc3QgUGxheWVyID0gKCgpID0+IHtcbiAgICBsZXQgaHVtYW4gPSB0cnVlO1xuXG4gICAgY29uc3QgdG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICBodW1hbiA9ICFodW1hbjtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Q29tcENob2ljZSA9IChncmlkKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBncmlkLnJlZHVjZSgoYWNjLCBjdXJyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnIgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhY2MucHVzaChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIHJldHVybiBvcHRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9wdGlvbnMubGVuZ3RoKV07XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBodW1hbiA9IHRydWU7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvZ2dsZSxcbiAgICAgICAgZ2V0Q29tcENob2ljZSxcbiAgICAgICAgcmVzZXQsXG4gICAgICAgIGlzSHVtYW5UdXJuOiAoKSA9PiBodW1hbixcbiAgICB9O1xufSkoKTtcblxuZnVuY3Rpb24gY2hlY2tHYW1lT3ZlcigpIHtcbiAgICBsZXQgd2lubmVyID0gJyc7XG4gICAgaWYgKGJvYXJkcy5wLmdldFNoaXBzQWZsb2F0KCkubGVuZ3RoIDwgMSkge1xuICAgICAgICB3aW5uZXIgPSAnQ29tcHV0ZXInO1xuICAgIH1cbiAgICBpZiAoYm9hcmRzLmMuZ2V0U2hpcHNBZmxvYXQoKS5sZW5ndGggPCAxKSB7XG4gICAgICAgIHdpbm5lciA9ICdQbGF5ZXInO1xuICAgIH1cbiAgICByZXR1cm4gd2lubmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheVJvdW5kKGNvb3JkKSB7XG4gICAgY29uc3Qgb3Bwb25lbnQgPSBQbGF5ZXIuaXNIdW1hblR1cm4oKSA/ICdjJyA6ICdwJztcbiAgICBjb25zdCB7IGhpdCwgc3VuayB9ID0gYm9hcmRzW29wcG9uZW50XS5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbiAgICBjb25zdCBnYW1lT3ZlciA9IGNoZWNrR2FtZU92ZXIoKTtcblxuICAgIGlmIChzdW5rKSB7XG4gICAgICAgIC8vIGF0dGFjayBuZWFyYnkgY29vcmRzXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdW5rJyk7XG4gICAgfVxuXG4gICAgaWYgKCFoaXQpIFBsYXllci50b2dnbGUoKTtcblxuICAgIFB1YlN1Yi5wdWJsaXNoKEUuVVBEQVRFKTtcblxuICAgIGlmIChnYW1lT3ZlcikgcmV0dXJuIGdhbWVPdmVyO1xuXG4gICAgaWYgKCFQbGF5ZXIuaXNIdW1hblR1cm4oKSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHBsYXlSb3VuZChQbGF5ZXIuZ2V0Q29tcENob2ljZShib2FyZHMucC5nZXRHcmlkQXR0YWNrcygpKSk7XG4gICAgICAgIH0sIDgwMCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgICBnYW1lU3RhcnRlZCA9IGZhbHNlO1xuICAgIFBsYXllci5yZXNldCgpO1xuICAgIGJvYXJkcy5yZXNldCgpO1xuICAgIHNoaXBzLnJlc2V0KCk7XG4gICAgUHViU3ViLnB1Ymxpc2goRS5VUERBVEUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3BlbkluZGljZXMocGxheWVyKSB7XG4gICAgcmV0dXJuIGJvYXJkc1twbGF5ZXJdXG4gICAgICAgIC5nZXRHcmlkSWxsZWdhbCgpXG4gICAgICAgIC5tYXAoKHZhbCwgaW5kZXgpID0+ICh7IHZhbCwgaW5kZXggfSkpXG4gICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udmFsID09PSAwKVxuICAgICAgICAubWFwKChpdGVtKSA9PiBpdGVtLmluZGV4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlUmFuZG9tU2hpcHMocGxheWVyKSB7XG4gICAgYm9hcmRzLnJlc2V0KHBsYXllcik7XG4gICAgZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xuICAgIGNvbnN0IGZhaWxlZFNwb3RzID0gW107XG4gICAgY29uc3Qgc2hpcE5hbWVzID0gW1xuICAgICAgICAnY2FycmllcicsXG4gICAgICAgICdiYXR0bGVzaGlwJyxcbiAgICAgICAgJ2NydWlzZXInLFxuICAgICAgICAnZGVzdHJveWVyJyxcbiAgICAgICAgJ3N1Ym1hcmluZScsXG4gICAgICAgICdwYXRyb2wxJyxcbiAgICAgICAgJ3BhdHJvbDInLFxuICAgIF07XG4gICAgc2hpcE5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IHNoaXBzW3BsYXllcl1bbmFtZV07XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHdoaWxlIChmYWlsZWRTcG90cy5sZW5ndGggPCA4OCAmJiAhc3VjY2Vzcykge1xuICAgICAgICAgICAgY29uc3Qgb3BlbkluZGljZXMgPSBnZXRPcGVuSW5kaWNlcyhwbGF5ZXIpO1xuICAgICAgICAgICAgY29uc3Qgc3BvdCA9XG4gICAgICAgICAgICAgICAgb3BlbkluZGljZXNbXG4gICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChvcGVuSW5kaWNlcy5sZW5ndGggLSAxKSlcbiAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICsgMC41KSkge1xuICAgICAgICAgICAgICAgIHNoaXAuY2hhbmdlVmVydGljYWwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3VjY2VzcyA9IGJvYXJkc1twbGF5ZXJdLnBsYWNlU2hpcChzaGlwLCBzcG90KTtcblxuICAgICAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgc2hpcC5jaGFuZ2VWZXJ0aWNhbCgpO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSBib2FyZHNbcGxheWVyXS5wbGFjZVNoaXAoc2hpcCwgc3BvdCk7XG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZhaWxlZFNwb3RzLnB1c2goc3BvdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHYW1lU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxheWVyU2hpcHNHcmlkOiBib2FyZHMucC5nZXRHcmlkU2hpcHMoKSxcbiAgICAgICAgcGxheWVyQXR0YWNrc0dyaWQ6IGJvYXJkcy5wLmdldEdyaWRBdHRhY2tzKCksXG4gICAgICAgIGNvbXBBdHRhY2tzR3JpZDogYm9hcmRzLmMuZ2V0R3JpZEF0dGFja3MoKSxcbiAgICAgICAgaXNIdW1hbjogUGxheWVyLmlzSHVtYW5UdXJuKCksXG4gICAgICAgIHBTY29yZTogYm9hcmRzLnAuZ2V0U2hpcHNBZmxvYXQoKS5sZW5ndGgsXG4gICAgICAgIGNTY29yZTogYm9hcmRzLmMuZ2V0U2hpcHNBZmxvYXQoKS5sZW5ndGgsXG4gICAgfTtcbn1cblxucmVzZXRHYW1lKCk7XG4iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLSBET00gRmFjdG9yaWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBlbEZhY3RvcnkodHlwZSwgYXR0cmlidXRlcywgY2hpbGRyZW4gPSBbXSkge1xuICAgIHJldHVybiB7IHR5cGUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodG1sRmFjdG9yeShvYmopIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnR5cGUpO1xuICAgIGNvbnN0IHsgYXR0cmlidXRlcyB9ID0gb2JqO1xuXG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGlmIChrZXkgIT09ICdkYXRhc2V0Jykge1xuICAgICAgICAgICAgZWxba2V5XSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBkaXJlY3Rpb25zIG5lZWRlZCB0byBzZXQgXCJkYXRhLVwiIHByb3BlcnRpZXNcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChbcHJvcCwgZGF0YV0pID0+IHtcbiAgICAgICAgICAgICAgICBlbC5kYXRhc2V0W3Byb3BdID0gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBvYmouY2hpbGRyZW4/LmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIC8vIEFsbG93cyBmb3IgY29uZGl0aW9uYWxseSBhZGRpbmcgY2hpbGRyZW4gdXBzdHJlYW0gYnlcbiAgICAgICAgLy8gc2V0dGluZyBcIlwiIGFzIHRoZSBhbHRlcm5hdGl2ZSB0byBlbEZhY3RvcnkoKVxuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5KGNoaWxkKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlbDtcbn1cbiIsImV4cG9ydCBjb25zdCBQdWJTdWIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGV2ZW50c0xpc3QgPSB7fTtcbiAgICAvLyB7IGtleTogXCJ0cmlnZ2VyRXZlbnRcIiwgdmFsdWU6IFsgYXJyYXkgb2YgZnVuY3Rpb25zIF0gfVxuXG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKHRyaWdnZXJFdmVudCwgc3Vic2NyaWJlcikge1xuICAgICAgICBpZiAoIWV2ZW50c0xpc3RbdHJpZ2dlckV2ZW50XSkge1xuICAgICAgICAgICAgZXZlbnRzTGlzdFt0cmlnZ2VyRXZlbnRdID0gW3N1YnNjcmliZXJdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRzTGlzdFt0cmlnZ2VyRXZlbnRdLnB1c2goc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZnVuY3Rpb25MaXN0ID0gZXZlbnRzTGlzdFt0cmlnZ2VyRXZlbnRdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGkgPSBmdW5jdGlvbkxpc3QuaW5kZXhPZihzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdWJsaXNoKHRyaWdnZXJFdmVudCwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBmdW5jdGlvbkxpc3QgPSBldmVudHNMaXN0W3RyaWdnZXJFdmVudF07XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZ1bmN0aW9uTGlzdCkpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uTGlzdC5mb3JFYWNoKChzdWJzY3JpYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlciguLi5hcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3Vic2NyaWJlLCBwdWJsaXNoIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgRSA9IHtcbiAgICBVUERBVEU6ICdVcGRhdGVEaXNwbGF5Jyxcbn07XG4iLCJpbXBvcnQgeyBFLCBQdWJTdWIgfSBmcm9tICcuL3B1YnN1Yic7XG5pbXBvcnQge1xuICAgIGNoZWNrR2FtZVN0YXJ0ZWQsXG4gICAgZ2V0R2FtZVN0YXRlLFxuICAgIHBsYWNlUmFuZG9tU2hpcHMsXG4gICAgcGxheVJvdW5kLFxuICAgIHJlc2V0R2FtZSxcbn0gZnJvbSAnLi9nYW1lLWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgZWxGYWN0b3J5LCBodG1sRmFjdG9yeSB9IGZyb20gJy4vaGVscGVycyc7XG5cbi8vIFByZS1nYW1lIFZhcnNcbmNvbnN0IGhvbWVTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1zY3JlZW4nKTtcbmNvbnN0IHByZUdhbWVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmUtZ2FtZS1ib2FyZCcpO1xuY29uc3QgcmFuZG9tQm9hcmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFuZG9tLWJvYXJkLWJ0bicpO1xuY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtYnRuJyk7XG5cbi8vIEluLWdhbWUgVmFyc1xuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lLWJ0bicpO1xuY29uc3QgY3VycmVudFR1cm5UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQnKTtcbmNvbnN0IHNoaXBzQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1ib2FyZHMgLnNoaXBzJyk7XG5jb25zdCBhdHRhY2tzQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1ib2FyZHMgLmF0dGFja3MnKTtcbmNvbnN0IHBTY29yZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyLXNjb3JlJyk7XG5jb25zdCBjU2NvcmVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXB1dGVyLXNjb3JlJyk7XG5cbi8vIFBvc3QtZ2FtZSBWYXJzXG5jb25zdCB3aW5uZXJEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbm5lcicpO1xuY29uc3QgZW5kU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1zY3JlZW4nKTtcbmNvbnN0IGVuZFBvcFVwID0gZW5kU2NyZWVuLnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXAnKTtcbmNvbnN0IG5ld0dhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LWdhbWUtYnRuJyk7XG5cbmZ1bmN0aW9uIGVuZEdhbWVEaXNwbGF5KHdpbm5lcikge1xuICAgIHdpbm5lckRpc3BsYXkudGV4dENvbnRlbnQgPSB3aW5uZXI7XG4gICAgZW5kU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbmRQb3BVcC5jbGFzc0xpc3QucmVtb3ZlKCdzaHJ1bmsnKTtcbiAgICB9LCAxNTApO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVCb2FyZENsaWNrKGUpIHtcbiAgICBjb25zdCBjb29yZCA9IGUudGFyZ2V0LmRhdGFzZXQuYXR0YWNrQ29vcmQ7XG4gICAgaWYgKCFjb29yZCkgcmV0dXJuO1xuICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQuYXR0YWNrcycpXG4gICAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUJvYXJkQ2xpY2spO1xuICAgIGNvbnN0IGdhbWVPdmVyID0gcGxheVJvdW5kKGNvb3JkKTtcbiAgICBpZiAoZ2FtZU92ZXIpIHtcbiAgICAgICAgZW5kR2FtZURpc3BsYXkoZ2FtZU92ZXIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3VycmVudFBsYXllcihpc0h1bWFuID0gdHJ1ZSkge1xuICAgIGlmIChpc0h1bWFuKSB7XG4gICAgICAgIGN1cnJlbnRUdXJuVGV4dC50ZXh0Q29udGVudCA9ICdQbGF5ZXInO1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC5hdHRhY2tzJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUJvYXJkQ2xpY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRUdXJuVGV4dC50ZXh0Q29udGVudCA9ICdDb21wdXRlcic7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVTaGlwc0JvYXJkKFxuICAgIGlzUGxhY2VtZW50UGhhc2UgPSBmYWxzZSxcbiAgICBwbGF5ZXJTaGlwc0dyaWQgPSBbXSxcbiAgICBwbGF5ZXJBdHRhY2tzR3JpZCA9IFtdXG4pIHtcbiAgICBjb25zdCBhcHBlbmRUYXJnZXQgPSBpc1BsYWNlbWVudFBoYXNlID8gcHJlR2FtZUJvYXJkIDogc2hpcHNCb2FyZDtcbiAgICBhcHBlbmRUYXJnZXQudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBzaGlwc0dyaWQgPSBlbEZhY3RvcnkoJ2RpdicsIHsgY2xhc3NMaXN0OiAnYm9hcmQgc2hpcHMnIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCB0YWtlbiA9IHBsYXllclNoaXBzR3JpZFtpXSA/ICcgc2hpcCcgOiAnJztcbiAgICAgICAgY29uc3QgY29tcEF0dGFjayA9IFsnJywgJyBtaXNzJywgJyBoaXQnXVtwbGF5ZXJBdHRhY2tzR3JpZFtpXV0gPz8gJyc7XG4gICAgICAgIGNvbnN0IHBsYWNlID0gaXNQbGFjZW1lbnRQaGFzZSA/ICcgcGxhY2UnIDogJyc7XG4gICAgICAgIHNoaXBzR3JpZC5jaGlsZHJlbi5wdXNoKFxuICAgICAgICAgICAgZWxGYWN0b3J5KCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IGksIC8vIGRldk1vZGVcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IGBzcXVhcmUke3Rha2VufSR7Y29tcEF0dGFja30ke3BsYWNlfWAsXG4gICAgICAgICAgICAgICAgZGF0YXNldDogeyBzaGlwQ29vcmQ6IGkgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXBwZW5kVGFyZ2V0LmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5KHNoaXBzR3JpZCkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBdHRhY2tzQm9hcmQoY29tcEF0dGFja3NHcmlkID0gW10pIHtcbiAgICBhdHRhY2tzQm9hcmQudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IGF0dGFja3NHcmlkID0gZWxGYWN0b3J5KCdkaXYnLCB7IGNsYXNzTGlzdDogJ2JvYXJkIGF0dGFja3MnIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBwbGF5ZXJBdHRhY2sgPSBbJycsICcgbWlzcycsICcgaGl0J11bY29tcEF0dGFja3NHcmlkW2ldXSA/PyAnJztcbiAgICAgICAgYXR0YWNrc0dyaWQuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICAgIGVsRmFjdG9yeSgnYnV0dG9uJywge1xuICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBpLCAvLyBkZXZNb2RlXG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBgc3F1YXJlJHtwbGF5ZXJBdHRhY2t9YCxcbiAgICAgICAgICAgICAgICBkYXRhc2V0OiB7IGF0dGFja0Nvb3JkOiBpIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGF0dGFja3NCb2FyZC5hcHBlbmRDaGlsZChodG1sRmFjdG9yeShhdHRhY2tzR3JpZCkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTY29yZXMocFNjb3JlLCBjU2NvcmUpIHtcbiAgICBwU2NvcmVEaXNwbGF5LnRleHRDb250ZW50ID0gcFNjb3JlO1xuICAgIGNTY29yZURpc3BsYXkudGV4dENvbnRlbnQgPSBjU2NvcmU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoaXNQbGFjZW1lbnRQaGFzZSA9IGZhbHNlKSB7XG4gICAgLy8gR2V0cyBpbmZvIGZyb20gZ2FtZS1jb250cm9sbGVyXG4gICAgY29uc3Qge1xuICAgICAgICBwbGF5ZXJTaGlwc0dyaWQsXG4gICAgICAgIHBsYXllckF0dGFja3NHcmlkLFxuICAgICAgICBjb21wQXR0YWNrc0dyaWQsXG4gICAgICAgIGlzSHVtYW4sXG4gICAgICAgIHBTY29yZSxcbiAgICAgICAgY1Njb3JlLFxuICAgIH0gPSBnZXRHYW1lU3RhdGUoKTtcblxuICAgIC8vIFVwZGF0ZXMgYm9hcmRzLCBjdXJyZW50IHBsYXllciwgYW5kIHNjb3Jlc1xuICAgIHVwZGF0ZVNoaXBzQm9hcmQoaXNQbGFjZW1lbnRQaGFzZSwgcGxheWVyU2hpcHNHcmlkLCBwbGF5ZXJBdHRhY2tzR3JpZCk7XG4gICAgdXBkYXRlQXR0YWNrc0JvYXJkKGNvbXBBdHRhY2tzR3JpZCk7XG4gICAgdXBkYXRlQ3VycmVudFBsYXllcihpc0h1bWFuKTtcbiAgICB1cGRhdGVTY29yZXMocFNjb3JlLCBjU2NvcmUpO1xufVxuXG5mdW5jdGlvbiBzdGFydEFwcCgpIHtcbiAgICByZXNldEdhbWUoKTtcbiAgICBlbmRTY3JlZW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgaG9tZVNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB1cGRhdGVEaXNwbGF5KHRydWUpO1xufVxuXG5zdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoY2hlY2tHYW1lU3RhcnRlZCgpKSB7XG4gICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICAgICAgaG9tZVNjcmVlbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG59KTtcblxucmFuZG9tQm9hcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcGxhY2VSYW5kb21TaGlwcygncCcpO1xuICAgIHBsYWNlUmFuZG9tU2hpcHMoJ2MnKTtcbiAgICB1cGRhdGVEaXNwbGF5KHRydWUpO1xufSk7XG5cbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEFwcCk7XG5cbm5ld0dhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc3RhcnRBcHAoKTtcbiAgICB1cGRhdGVEaXNwbGF5KCk7XG59KTtcblxuUHViU3ViLnN1YnNjcmliZShFLlVQREFURSwgdXBkYXRlRGlzcGxheSk7XG5cbnN0YXJ0QXBwKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc2NyZWVuLWNvbnRyb2xsZXInO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==