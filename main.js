/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/pubsub.js
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

;// CONCATENATED MODULE: ./src/scripts/board.js
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

    const findAdjacent = (sunkCoords, noDiagonals = false) => {
        const freeAttacks = new Set();
        sunkCoords.forEach((spot) => {
            const testBase = [10, -10];
            if (!(spot % 10)) testBase.push(-9, 1, 11);
            else if (!((spot + 1) % 10)) testBase.push(-11, -1, 9);
            else testBase.push(-9, 1, 11, -11, -1, 9);

            if (noDiagonals) {
                [9, -9, 11, -11].forEach((num) => {
                    if (testBase.includes(num)) {
                        const i = testBase.indexOf(num);
                        testBase.splice(i, 1);
                    }
                });
            }

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
            result.sunkCoords = findShip(grid[coord].getShipId());
            findAdjacent(result.sunkCoords).forEach((freeAttack) => {
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

;// CONCATENATED MODULE: ./src/scripts/game-controller.js



let gameStarted = false;
const checkGameStarted = () => gameStarted;

const Player = (() => {
    const PlayerFactory = () => {
        const pastHits = new Set();
        const addHit = (coord) => {
            pastHits.add(coord);
        };
        const removeHit = (coord) => {
            pastHits.delete(coord);
        };
        const getPastHits = () => [...pastHits];
        const clearHits = () => {
            pastHits.clear();
        };

        const getCompSmart = (options) =>
            options[Math.floor(Math.random() * options.length)];

        const getCompGuess = (grid) => {
            const options = grid.reduce((acc, curr, index) => {
                if (curr === 0) {
                    acc.push(index);
                }
                return acc;
            }, []);
            return options[Math.floor(Math.random() * options.length)];
        };

        return {
            addHit,
            removeHit,
            getPastHits,
            clearHits,
            getCompSmart,
            getCompGuess,
        };
    };
    const p = PlayerFactory();
    const c = PlayerFactory();

    let human = true;
    const toggle = () => {
        human = !human;
    };

    const reset = () => {
        human = true;
        p.clearHits();
    };

    return { p, c, toggle, reset, isHumanTurn: () => human };
})();

function checkGameOver() {
    let winner = '';
    if (boards.p.getShipsAfloat().length < 1) {
        winner = 'Computer';
    }
    if (boards.c.getShipsAfloat().length < 1) {
        winner = 'Player';
    }
    return winner;
}

function playRound(coord) {
    const current = !Player.isHumanTurn() ? 'c' : 'p';
    const opponent = Player.isHumanTurn() ? 'c' : 'p';
    const { hit, sunk, sunkCoords } = boards[opponent].receiveAttack(coord);
    const gameOver = checkGameOver();

    if (hit) {
        Player[current].addHit(coord);
        if (sunk) {
            sunkCoords.forEach((sunkCoord) => {
                Player.c.removeHit(sunkCoord);
            });
        }
    } else Player.toggle();

    PubSub.publish(E.UPDATE);

    if (gameOver) return gameOver;

    if (!Player.isHumanTurn()) {
        let compChoice;
        const pastHits = Player.c.getPastHits();
        const lastHit = pastHits[pastHits.length - 1];
        const options = boards.p.findAdjacent([lastHit], true);

        if (options.length) {
            compChoice = Player.c.getCompSmart(options);
        } else if (pastHits.length > 1) {
            Player.c.removeHit(lastHit);
            const pastHits2 = Player.c.getPastHits();
            const lastHit2 = pastHits2[0];
            const options2 = boards.p.findAdjacent([lastHit2], true);
            if (options2.length) {
                compChoice = Player.c.getCompSmart(options2);
            } else {
                compChoice = Player.c.getCompGuess(boards.p.getGridAttacks());
            }
        } else {
            compChoice = Player.c.getCompGuess(boards.p.getGridAttacks());
        }
        setTimeout(() => {
            playRound(compChoice);
        }, 400);
    }
    return false;
}

function resetGame() {
    gameStarted = false;
    Player.reset();
    boards.reset();
    ships.reset();
    PubSub.publish(E.UPDATE);
}

function getOpenIndices(player) {
    return boards[player]
        .getGridIllegal()
        .map((val, index) => ({ val, index }))
        .filter((item) => item.val === 0)
        .map((item) => item.index);
}

function placeRandomShips(player) {
    boards.reset(player);
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
        const ship = ships[player][name];
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

            success = boards[player].placeShip(ship, spot);

            if (!success) {
                ship.changeVertical();
                success = boards[player].placeShip(ship, spot);
                if (!success) {
                    failedSpots.push(spot);
                }
            }
        }
    });
}

function getGameState() {
    return {
        playerShipsGrid: boards.p.getGridShips(),
        playerAttacksGrid: boards.p.getGridAttacks(),
        compAttacksGrid: boards.c.getGridAttacks(),
        isHuman: Player.isHumanTurn(),
        pScore: boards.p.getShipsAfloat().length,
        cScore: boards.c.getShipsAfloat().length,
    };
}

resetGame();

;// CONCATENATED MODULE: ./src/scripts/helpers.js
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

;// CONCATENATED MODULE: ./src/scripts/screen-controller.js




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
    if (!coord || e.target.classList.value !== 'square') return;
    document
        .querySelector('.board.attacks')
        .removeEventListener('click', handleBoardClick);
    const gameOver = playRound(coord);
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
    const shipsGrid = elFactory('div', { classList: 'board ships' });

    for (let i = 0; i < 100; i += 1) {
        const taken = playerShipsGrid[i] ? ' ship' : '';
        const compAttack = ['', ' miss', ' hit'][playerAttacksGrid[i]] ?? '';
        const place = isPlacementPhase ? ' place' : '';
        shipsGrid.children.push(
            elFactory('div', {
                classList: `square${taken}${compAttack}${place}`,
                dataset: { shipCoord: i },
            })
        );
    }

    appendTarget.appendChild(htmlFactory(shipsGrid));
}

function updateAttacksBoard(compAttacksGrid = []) {
    attacksBoard.textContent = '';

    const attacksGrid = elFactory('div', { classList: 'board attacks' });

    for (let i = 0; i < 100; i += 1) {
        const playerAttack = ['', ' miss', ' hit'][compAttacksGrid[i]] ?? '';
        attacksGrid.children.push(
            elFactory('button', {
                classList: `square${playerAttack}`,
                dataset: { attackCoord: i },
            })
        );
    }

    attacksBoard.appendChild(htmlFactory(attacksGrid));
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
    } = getGameState();

    // Updates boards, current player, and scores
    updateShipsBoard(isPlacementPhase, playerShipsGrid, playerAttacksGrid);
    updateAttacksBoard(compAttacksGrid);
    updateCurrentPlayer(isHuman);
    updateScores(pScore, cScore);
}

function startApp() {
    resetGame();
    endScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
    updateDisplay(true);
}

startBtn.addEventListener('click', () => {
    if (checkGameStarted()) {
        updateDisplay();
        homeScreen.classList.add('hidden');
    }
});

randomBoardBtn.addEventListener('click', () => {
    placeRandomShips('p');
    placeRandomShips('c');
    updateDisplay(true);
});

homeBtn.addEventListener('click', startApp);

newGameBtn.addEventListener('click', () => {
    startApp();
    updateDisplay();
});

PubSub.subscribe(E.UPDATE, updateDisplay);

startApp();

;// CONCATENATED MODULE: ./src/scripts/index.js



/******/ })()
;
//# sourceMappingURL=main.js.map