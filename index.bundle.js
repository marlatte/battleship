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
/* harmony export */   Game: () => (/* binding */ Game),
/* harmony export */   Player: () => (/* binding */ Player)
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

const Game = (() => {
    let player;
    let comp;

    const playerShips = [
        (0,_board__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)('carrier', 5),
        (0,_board__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)('battleship', 4),
        (0,_board__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)('destroyer', 3),
        (0,_board__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)('submarine', 3),
        (0,_board__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)('patrol 1', 2),
        (0,_board__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)('patrol 2', 2),
    ];
    const compShips = [
        (0,_board__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)('carrier', 5),
        (0,_board__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)('battleship', 4),
        (0,_board__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)('destroyer', 3),
        (0,_board__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)('submarine', 3),
        (0,_board__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)('patrol 1', 2),
        (0,_board__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)('patrol 2', 2),
    ];

    function showPlayerLocations() {
        console.log('Player Locations;');
        console.log(player.getGridShips());
    }

    function showCompLocations() {
        console.log('Computer Locations;');
        console.log(comp.getGridShips());
    }

    function showPlayerAttacks() {
        console.log('Player Attacks;');
        console.log(comp.getGridAttacks());
    }

    function showCompAttacks() {
        console.log('Computer Attacks;');
        console.log(player.getGridAttacks());
    }

    function playRound(coord) {
        showPlayerLocations();
        showCompLocations();

        if (Player.isHumanTurn()) {
            comp.receiveAttack(coord);
        } else {
            player.receiveAttack(coord);
        }

        showPlayerAttacks();
        showCompAttacks();
    }

    function reset() {
        console.log('---------- \n New Game \n----------');

        Player.reset();
        player = (0,_board__WEBPACK_IMPORTED_MODULE_0__.BoardFactory)();
        comp = (0,_board__WEBPACK_IMPORTED_MODULE_0__.BoardFactory)();

        // Temporary!!!
        player.placeShip(playerShips[0], 0);
        comp.placeShip(compShips[4], 3);
    }

    reset();

    return { reset, playRound };
})();


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


const startBtn = document.querySelector('#start-btn');
startBtn.addEventListener('click', _game_controller__WEBPACK_IMPORTED_MODULE_0__.Game.reset);

const playerHits = document.querySelector('#player-hits');
playerHits.addEventListener('click', () => {
    _game_controller__WEBPACK_IMPORTED_MODULE_0__.Player.reset();
    _game_controller__WEBPACK_IMPORTED_MODULE_0__.Game.playRound(3);
});
const playerMiss = document.querySelector('#player-miss');
playerMiss.addEventListener('click', () => {
    _game_controller__WEBPACK_IMPORTED_MODULE_0__.Player.reset();
    _game_controller__WEBPACK_IMPORTED_MODULE_0__.Game.playRound(2);
});

const compHits = document.querySelector('#comp-hits');
compHits.addEventListener('click', () => {
    _game_controller__WEBPACK_IMPORTED_MODULE_0__.Player.reset();
    _game_controller__WEBPACK_IMPORTED_MODULE_0__.Player.toggle();
    _game_controller__WEBPACK_IMPORTED_MODULE_0__.Game.playRound(0);
});
const compMiss = document.querySelector('#comp-miss');
compMiss.addEventListener('click', () => {
    _game_controller__WEBPACK_IMPORTED_MODULE_0__.Player.reset();
    _game_controller__WEBPACK_IMPORTED_MODULE_0__.Player.toggle();
    _game_controller__WEBPACK_IMPORTED_MODULE_0__.Game.playRound(7);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDVixJQUFJLG9EQUFNO0FBQ1YsSUFBSSxrREFBSTtBQUNSLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWUtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hcmxhdHRlLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYXJsYXR0ZS1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFybGF0dGUtYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBTaGlwRmFjdG9yeShpZCwgbGVuZ3RoKSB7XG4gICAgbGV0IGhlYWx0aCA9IGxlbmd0aDtcbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhlYWx0aCAtPSAxO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRIZWFsdGggPSAoKSA9PiBoZWFsdGg7XG5cbiAgICBsZXQgdmVydGljYWwgPSBmYWxzZTtcbiAgICBjb25zdCBjaGFuZ2VWZXJ0aWNhbCA9ICgpID0+IHtcbiAgICAgICAgdmVydGljYWwgPSAhdmVydGljYWw7XG4gICAgfTtcbiAgICBjb25zdCBpc1ZlcnRpY2FsID0gKCkgPT4gdmVydGljYWw7XG5cbiAgICBjb25zdCBpc0FmbG9hdCA9ICgpID0+IGhlYWx0aCA+PSAxO1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldElEOiAoKSA9PiBpZCxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBnZXRIZWFsdGgsXG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNBZmxvYXQsXG4gICAgICAgIGNoYW5nZVZlcnRpY2FsLFxuICAgICAgICBpc1ZlcnRpY2FsLFxuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCBTcXVhcmUgPSAoKSA9PiB7XG4gICAgbGV0IGF0dGFja2VkID0gMDtcbiAgICBjb25zdCB3YXNBdHRhY2tlZCA9ICgpID0+IGF0dGFja2VkO1xuXG4gICAgbGV0IHNoaXAgPSBudWxsO1xuICAgIGNvbnN0IGlzVGFrZW4gPSAoKSA9PiAhIXNoaXA7XG4gICAgY29uc3QgYWRkU2hpcCA9IChuZXdTaGlwKSA9PiB7XG4gICAgICAgIHNoaXAgPSBuZXdTaGlwO1xuICAgIH07XG5cbiAgICBjb25zdCBhdHRhY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzaGlwKSB7XG4gICAgICAgICAgICBhdHRhY2tlZCA9IDI7XG4gICAgICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXR0YWNrZWQgPSAxO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrU2hpcEFmbG9hdCA9ICgpID0+IHNoaXA/LmlzQWZsb2F0KCk7XG5cbiAgICBjb25zdCBnZXRTaGlwSWQgPSAoKSA9PiBzaGlwLmdldElEKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB3YXNBdHRhY2tlZCxcbiAgICAgICAgaXNUYWtlbixcbiAgICAgICAgYWRkU2hpcCxcbiAgICAgICAgYXR0YWNrLFxuICAgICAgICBjaGVja1NoaXBBZmxvYXQsXG4gICAgICAgIGdldFNoaXBJZCxcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEJvYXJkRmFjdG9yeSA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgICBncmlkLnB1c2goU3F1YXJlKCkpO1xuICAgIH1cbiAgICBjb25zdCBnZXRHcmlkID0gKCkgPT4gWy4uLmdyaWRdO1xuICAgIGNvbnN0IGdldEdyaWRBdHRhY2tzID0gKCkgPT4gZ3JpZC5tYXAoKHNxdWFyZSkgPT4gc3F1YXJlLndhc0F0dGFja2VkKCkpO1xuICAgIGNvbnN0IGdldEdyaWRTaGlwcyA9ICgpID0+IGdyaWQubWFwKChzcXVhcmUpID0+ICtzcXVhcmUuaXNUYWtlbigpKTtcblxuICAgIGNvbnN0IHNoaXBzQWZsb2F0ID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IHVwZGF0ZVNoaXBzQWZsb2F0ID0gKCkgPT4ge1xuICAgICAgICBzaGlwc0FmbG9hdC5jbGVhcigpO1xuICAgICAgICBjb25zdCBzaGlwcyA9IGdyaWQuZmlsdGVyKChzcSkgPT4gc3EuY2hlY2tTaGlwQWZsb2F0KCkpO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzaGlwc0FmbG9hdC5hZGQoaXRlbS5nZXRTaGlwSWQoKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgZ2V0U2hpcHNBZmxvYXQgPSAoKSA9PiBbLi4uc2hpcHNBZmxvYXRdO1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHN0YXJ0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNwb3RzID0gW107XG4gICAgICAgIGNvbnN0IG11bHRpcGxpZXIgPSBzaGlwLmlzVmVydGljYWwoKSA/IDEwIDogMTtcbiAgICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyBtdWx0aXBsaWVyICogc2hpcC5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSBtdWx0aXBsaWVyKSB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0Qm9vbCA9IGkgPiAxMDA7XG4gICAgICAgICAgICBjb25zdCBob3JpekJvb2wgPSAhKGkgJSAxMCkgfHwgdmVydEJvb2w7XG4gICAgICAgICAgICBjb25zdCBvdmVybGFwQWRqID0gWzAsIC0xLCAxLCAtMTAsIDEwXVxuICAgICAgICAgICAgICAgIC5tYXAoKG51bSkgPT4gZ3JpZFtpICsgbnVtXT8uaXNUYWtlbigpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHNoaXAuaXNWZXJ0aWNhbCgpID8gdmVydEJvb2wgOiBob3JpekJvb2wgJiYgaSAhPT0gc3RhcnQpIHx8XG4gICAgICAgICAgICAgICAgb3ZlcmxhcEFkai5sZW5ndGhcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwb3RzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgc3BvdHMuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICAgICAgZ3JpZFtpXS5hZGRTaGlwKHNoaXApO1xuICAgICAgICB9KTtcbiAgICAgICAgdXBkYXRlU2hpcHNBZmxvYXQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZCkgPT4ge1xuICAgICAgICBncmlkW2Nvb3JkXS5hdHRhY2soKTtcbiAgICAgICAgdXBkYXRlU2hpcHNBZmxvYXQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0R3JpZCxcbiAgICAgICAgZ2V0R3JpZEF0dGFja3MsXG4gICAgICAgIGdldEdyaWRTaGlwcyxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICBnZXRTaGlwc0FmbG9hdCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICB9O1xufTtcbiIsImltcG9ydCB7IEJvYXJkRmFjdG9yeSwgU2hpcEZhY3RvcnkgfSBmcm9tICcuL2JvYXJkJztcblxuZXhwb3J0IGNvbnN0IFBsYXllciA9ICgoKSA9PiB7XG4gICAgbGV0IGh1bWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgaHVtYW4gPSAhaHVtYW47XG4gICAgfTtcblxuICAgIGNvbnN0IGNob29zZUZyb20gPSAoZ3JpZCkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gZ3JpZC5yZWR1Y2UoKGFjYywgY3VyciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWNjLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwgW10pO1xuICAgICAgICByZXR1cm4gb3B0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcHRpb25zLmxlbmd0aCldO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgaHVtYW4gPSB0cnVlO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b2dnbGUsXG4gICAgICAgIGNob29zZUZyb20sXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBpc0h1bWFuVHVybjogKCkgPT4gaHVtYW4sXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBHYW1lID0gKCgpID0+IHtcbiAgICBsZXQgcGxheWVyO1xuICAgIGxldCBjb21wO1xuXG4gICAgY29uc3QgcGxheWVyU2hpcHMgPSBbXG4gICAgICAgIFNoaXBGYWN0b3J5KCdjYXJyaWVyJywgNSksXG4gICAgICAgIFNoaXBGYWN0b3J5KCdiYXR0bGVzaGlwJywgNCksXG4gICAgICAgIFNoaXBGYWN0b3J5KCdkZXN0cm95ZXInLCAzKSxcbiAgICAgICAgU2hpcEZhY3RvcnkoJ3N1Ym1hcmluZScsIDMpLFxuICAgICAgICBTaGlwRmFjdG9yeSgncGF0cm9sIDEnLCAyKSxcbiAgICAgICAgU2hpcEZhY3RvcnkoJ3BhdHJvbCAyJywgMiksXG4gICAgXTtcbiAgICBjb25zdCBjb21wU2hpcHMgPSBbXG4gICAgICAgIFNoaXBGYWN0b3J5KCdjYXJyaWVyJywgNSksXG4gICAgICAgIFNoaXBGYWN0b3J5KCdiYXR0bGVzaGlwJywgNCksXG4gICAgICAgIFNoaXBGYWN0b3J5KCdkZXN0cm95ZXInLCAzKSxcbiAgICAgICAgU2hpcEZhY3RvcnkoJ3N1Ym1hcmluZScsIDMpLFxuICAgICAgICBTaGlwRmFjdG9yeSgncGF0cm9sIDEnLCAyKSxcbiAgICAgICAgU2hpcEZhY3RvcnkoJ3BhdHJvbCAyJywgMiksXG4gICAgXTtcblxuICAgIGZ1bmN0aW9uIHNob3dQbGF5ZXJMb2NhdGlvbnMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQbGF5ZXIgTG9jYXRpb25zOycpO1xuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIuZ2V0R3JpZFNoaXBzKCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dDb21wTG9jYXRpb25zKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQ29tcHV0ZXIgTG9jYXRpb25zOycpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb21wLmdldEdyaWRTaGlwcygpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93UGxheWVyQXR0YWNrcygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1BsYXllciBBdHRhY2tzOycpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb21wLmdldEdyaWRBdHRhY2tzKCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dDb21wQXR0YWNrcygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbXB1dGVyIEF0dGFja3M7Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllci5nZXRHcmlkQXR0YWNrcygpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGF5Um91bmQoY29vcmQpIHtcbiAgICAgICAgc2hvd1BsYXllckxvY2F0aW9ucygpO1xuICAgICAgICBzaG93Q29tcExvY2F0aW9ucygpO1xuXG4gICAgICAgIGlmIChQbGF5ZXIuaXNIdW1hblR1cm4oKSkge1xuICAgICAgICAgICAgY29tcC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBsYXllci5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNob3dQbGF5ZXJBdHRhY2tzKCk7XG4gICAgICAgIHNob3dDb21wQXR0YWNrcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLSBcXG4gTmV3IEdhbWUgXFxuLS0tLS0tLS0tLScpO1xuXG4gICAgICAgIFBsYXllci5yZXNldCgpO1xuICAgICAgICBwbGF5ZXIgPSBCb2FyZEZhY3RvcnkoKTtcbiAgICAgICAgY29tcCA9IEJvYXJkRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIFRlbXBvcmFyeSEhIVxuICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKHBsYXllclNoaXBzWzBdLCAwKTtcbiAgICAgICAgY29tcC5wbGFjZVNoaXAoY29tcFNoaXBzWzRdLCAzKTtcbiAgICB9XG5cbiAgICByZXNldCgpO1xuXG4gICAgcmV0dXJuIHsgcmVzZXQsIHBsYXlSb3VuZCB9O1xufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR2FtZSwgUGxheWVyIH0gZnJvbSAnLi9nYW1lLWNvbnRyb2xsZXInO1xuXG5jb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydC1idG4nKTtcbnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgR2FtZS5yZXNldCk7XG5cbmNvbnN0IHBsYXllckhpdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyLWhpdHMnKTtcbnBsYXllckhpdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgUGxheWVyLnJlc2V0KCk7XG4gICAgR2FtZS5wbGF5Um91bmQoMyk7XG59KTtcbmNvbnN0IHBsYXllck1pc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyLW1pc3MnKTtcbnBsYXllck1pc3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgUGxheWVyLnJlc2V0KCk7XG4gICAgR2FtZS5wbGF5Um91bmQoMik7XG59KTtcblxuY29uc3QgY29tcEhpdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcC1oaXRzJyk7XG5jb21wSGl0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBQbGF5ZXIucmVzZXQoKTtcbiAgICBQbGF5ZXIudG9nZ2xlKCk7XG4gICAgR2FtZS5wbGF5Um91bmQoMCk7XG59KTtcbmNvbnN0IGNvbXBNaXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXAtbWlzcycpO1xuY29tcE1pc3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgUGxheWVyLnJlc2V0KCk7XG4gICAgUGxheWVyLnRvZ2dsZSgpO1xuICAgIEdhbWUucGxheVJvdW5kKDcpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=