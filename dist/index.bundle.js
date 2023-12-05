/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        } else {
            attacked = 1;
        }
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
        const multiplier = ship.isVertical() ? 10 : 1;
        const end = start + multiplier * ship.length;
        for (let i = start; i < end; i += multiplier) {
            const vertBool = i > 100;
            const horizBool = !(i % 10) || vertBool;
            const overlapAdj = [0, -1, 1, -10, 10]
                .map((num) => grid[i + num]?.isTaken())
                .filter(Boolean);
            if (
                (ship.isVertical() ? vertBool : horizBool && i !== start) ||
                overlapAdj.length
            ) {
                return;
            }
            spots.push(i);
        }
        spots.forEach((i) => {
            grid[i].addShip(ship);
        });
        updateShipsAfloat();
    };

    const receiveAttack = (coord) => {
        grid[coord].attack();
        updateShipsAfloat();
    };

    return {
        getGrid,
        getGridAttacks,
        getGridShips,
        placeShip,
        getShipsAfloat,
        receiveAttack,
    };
};


/***/ }),

/***/ "./src/scripts/game-controller.js":
/*!****************************************!*\
  !*** ./src/scripts/game-controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   newGame: () => (/* binding */ newGame)
/* harmony export */ });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/scripts/board.js");


const Player = (() => {
    let human = true;

    const toggle = () => {
        human = !human;
    };

    const chooseFrom = (grid) => {
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
        chooseFrom,
        reset,
        isHumanTurn: () => human,
    };
})();

const newGame = () => {
    Player.reset();
    // console.log('---------- \n New Game \n----------');

    const player = (0,_board__WEBPACK_IMPORTED_MODULE_0__.BoardFactory)();
    // const computer = BoardFactory();

    const shipTypes = [
        (0,_board__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)('carrier', 5),
        (0,_board__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)('battleship', 4),
        (0,_board__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)('destroyer', 3),
        (0,_board__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)('submarine', 3),
        (0,_board__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)('patrol 1', 2),
        (0,_board__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)('patrol 2', 2),
    ];

    player.placeShip(shipTypes[0], 0);
    player.getGridShips();
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-controller */ "./src/scripts/game-controller.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFNBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25Ib0Q7O0FBRTdDO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTs7QUFFQSxtQkFBbUIsb0RBQVk7QUFDL0I7O0FBRUE7QUFDQSxRQUFRLG1EQUFXO0FBQ25CLFFBQVEsbURBQVc7QUFDbkIsUUFBUSxtREFBVztBQUNuQixRQUFRLG1EQUFXO0FBQ25CLFFBQVEsbURBQVc7QUFDbkIsUUFBUSxtREFBVztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNqREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIFNoaXBGYWN0b3J5KGlkLCBsZW5ndGgpIHtcbiAgICBsZXQgaGVhbHRoID0gbGVuZ3RoO1xuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGVhbHRoIC09IDE7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEhlYWx0aCA9ICgpID0+IGhlYWx0aDtcblxuICAgIGxldCB2ZXJ0aWNhbCA9IGZhbHNlO1xuICAgIGNvbnN0IGNoYW5nZVZlcnRpY2FsID0gKCkgPT4ge1xuICAgICAgICB2ZXJ0aWNhbCA9ICF2ZXJ0aWNhbDtcbiAgICB9O1xuICAgIGNvbnN0IGlzVmVydGljYWwgPSAoKSA9PiB2ZXJ0aWNhbDtcblxuICAgIGNvbnN0IGlzQWZsb2F0ID0gKCkgPT4gaGVhbHRoID49IDE7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SUQ6ICgpID0+IGlkLFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGdldEhlYWx0aCxcbiAgICAgICAgaGl0LFxuICAgICAgICBpc0FmbG9hdCxcbiAgICAgICAgY2hhbmdlVmVydGljYWwsXG4gICAgICAgIGlzVmVydGljYWwsXG4gICAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFNxdWFyZSA9ICgpID0+IHtcbiAgICBsZXQgYXR0YWNrZWQgPSAwO1xuICAgIGNvbnN0IHdhc0F0dGFja2VkID0gKCkgPT4gYXR0YWNrZWQ7XG5cbiAgICBsZXQgc2hpcCA9IG51bGw7XG4gICAgY29uc3QgaXNUYWtlbiA9ICgpID0+ICEhc2hpcDtcbiAgICBjb25zdCBhZGRTaGlwID0gKG5ld1NoaXApID0+IHtcbiAgICAgICAgc2hpcCA9IG5ld1NoaXA7XG4gICAgfTtcblxuICAgIGNvbnN0IGF0dGFjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNoaXApIHtcbiAgICAgICAgICAgIGF0dGFja2VkID0gMjtcbiAgICAgICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdHRhY2tlZCA9IDE7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tTaGlwQWZsb2F0ID0gKCkgPT4gc2hpcD8uaXNBZmxvYXQoKTtcblxuICAgIGNvbnN0IGdldFNoaXBJZCA9ICgpID0+IHNoaXAuZ2V0SUQoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHdhc0F0dGFja2VkLFxuICAgICAgICBpc1Rha2VuLFxuICAgICAgICBhZGRTaGlwLFxuICAgICAgICBhdHRhY2ssXG4gICAgICAgIGNoZWNrU2hpcEFmbG9hdCxcbiAgICAgICAgZ2V0U2hpcElkLFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgQm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICAgIGdyaWQucHVzaChTcXVhcmUoKSk7XG4gICAgfVxuICAgIGNvbnN0IGdldEdyaWQgPSAoKSA9PiBbLi4uZ3JpZF07XG4gICAgY29uc3QgZ2V0R3JpZEF0dGFja3MgPSAoKSA9PiBncmlkLm1hcCgoc3F1YXJlKSA9PiBzcXVhcmUud2FzQXR0YWNrZWQoKSk7XG4gICAgY29uc3QgZ2V0R3JpZFNoaXBzID0gKCkgPT4gZ3JpZC5tYXAoKHNxdWFyZSkgPT4gK3NxdWFyZS5pc1Rha2VuKCkpO1xuXG4gICAgY29uc3Qgc2hpcHNBZmxvYXQgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgdXBkYXRlU2hpcHNBZmxvYXQgPSAoKSA9PiB7XG4gICAgICAgIHNoaXBzQWZsb2F0LmNsZWFyKCk7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gZ3JpZC5maWx0ZXIoKHNxKSA9PiBzcS5jaGVja1NoaXBBZmxvYXQoKSk7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHNoaXBzQWZsb2F0LmFkZChpdGVtLmdldFNoaXBJZCgpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRTaGlwc0FmbG9hdCA9ICgpID0+IFsuLi5zaGlwc0FmbG9hdF07XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgc3RhcnQpID0+IHtcbiAgICAgICAgY29uc3Qgc3BvdHMgPSBbXTtcbiAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IHNoaXAuaXNWZXJ0aWNhbCgpID8gMTAgOiAxO1xuICAgICAgICBjb25zdCBlbmQgPSBzdGFydCArIG11bHRpcGxpZXIgKiBzaGlwLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IG11bHRpcGxpZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRCb29sID0gaSA+IDEwMDtcbiAgICAgICAgICAgIGNvbnN0IGhvcml6Qm9vbCA9ICEoaSAlIDEwKSB8fCB2ZXJ0Qm9vbDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXBBZGogPSBbMCwgLTEsIDEsIC0xMCwgMTBdXG4gICAgICAgICAgICAgICAgLm1hcCgobnVtKSA9PiBncmlkW2kgKyBudW1dPy5pc1Rha2VuKCkpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoc2hpcC5pc1ZlcnRpY2FsKCkgPyB2ZXJ0Qm9vbCA6IGhvcml6Qm9vbCAmJiBpICE9PSBzdGFydCkgfHxcbiAgICAgICAgICAgICAgICBvdmVybGFwQWRqLmxlbmd0aFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BvdHMucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICBzcG90cy5mb3JFYWNoKChpKSA9PiB7XG4gICAgICAgICAgICBncmlkW2ldLmFkZFNoaXAoc2hpcCk7XG4gICAgICAgIH0pO1xuICAgICAgICB1cGRhdGVTaGlwc0FmbG9hdCgpO1xuICAgIH07XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkKSA9PiB7XG4gICAgICAgIGdyaWRbY29vcmRdLmF0dGFjaygpO1xuICAgICAgICB1cGRhdGVTaGlwc0FmbG9hdCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRHcmlkLFxuICAgICAgICBnZXRHcmlkQXR0YWNrcyxcbiAgICAgICAgZ2V0R3JpZFNoaXBzLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIGdldFNoaXBzQWZsb2F0LFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgIH07XG59O1xuIiwiaW1wb3J0IHsgQm9hcmRGYWN0b3J5LCBTaGlwRmFjdG9yeSB9IGZyb20gJy4vYm9hcmQnO1xuXG5leHBvcnQgY29uc3QgUGxheWVyID0gKCgpID0+IHtcbiAgICBsZXQgaHVtYW4gPSB0cnVlO1xuXG4gICAgY29uc3QgdG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICBodW1hbiA9ICFodW1hbjtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hvb3NlRnJvbSA9IChncmlkKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBncmlkLnJlZHVjZSgoYWNjLCBjdXJyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnIgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhY2MucHVzaChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIHJldHVybiBvcHRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9wdGlvbnMubGVuZ3RoKV07XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBodW1hbiA9IHRydWU7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvZ2dsZSxcbiAgICAgICAgY2hvb3NlRnJvbSxcbiAgICAgICAgcmVzZXQsXG4gICAgICAgIGlzSHVtYW5UdXJuOiAoKSA9PiBodW1hbixcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XG4gICAgUGxheWVyLnJlc2V0KCk7XG4gICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0gXFxuIE5ldyBHYW1lIFxcbi0tLS0tLS0tLS0nKTtcblxuICAgIGNvbnN0IHBsYXllciA9IEJvYXJkRmFjdG9yeSgpO1xuICAgIC8vIGNvbnN0IGNvbXB1dGVyID0gQm9hcmRGYWN0b3J5KCk7XG5cbiAgICBjb25zdCBzaGlwVHlwZXMgPSBbXG4gICAgICAgIFNoaXBGYWN0b3J5KCdjYXJyaWVyJywgNSksXG4gICAgICAgIFNoaXBGYWN0b3J5KCdiYXR0bGVzaGlwJywgNCksXG4gICAgICAgIFNoaXBGYWN0b3J5KCdkZXN0cm95ZXInLCAzKSxcbiAgICAgICAgU2hpcEZhY3RvcnkoJ3N1Ym1hcmluZScsIDMpLFxuICAgICAgICBTaGlwRmFjdG9yeSgncGF0cm9sIDEnLCAyKSxcbiAgICAgICAgU2hpcEZhY3RvcnkoJ3BhdHJvbCAyJywgMiksXG4gICAgXTtcblxuICAgIHBsYXllci5wbGFjZVNoaXAoc2hpcFR5cGVzWzBdLCAwKTtcbiAgICBwbGF5ZXIuZ2V0R3JpZFNoaXBzKCk7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL2dhbWUtY29udHJvbGxlcic7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=