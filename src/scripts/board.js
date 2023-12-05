/* eslint-disable no-param-reassign */

import { currentPlayer } from '.';

let counter = 0;

export function ShipFactory(length) {
    counter += 1;
    const id = counter;

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
        id,
        length,
        getHealth,
        hit,
        isAfloat,
        changeVertical,
        isVertical,
    };
}

export const DefenseBoards = (() => {
    const player = {};
    const computer = {};
    const resetBoards = () => {
        Object.keys(player).forEach((key) => {
            delete player[key];
        });
        Object.keys(computer).forEach((key) => {
            delete computer[key];
        });

        // Reassign methods
        [player, computer].forEach((obj) => {
            obj.placeShip = (ship, start) => {
                const spots = [];
                const multiplier = ship.isVertical() ? 10 : 1;
                const end = start + multiplier * ship.length;
                for (let i = start; i < end; i += multiplier) {
                    const vertBool = i > 100;
                    const horizBool = !(i % 10) || vertBool;
                    const overlapAdj = [0, -1, 1, -10, 10]
                        .map((num) => obj[i + num])
                        .filter(Boolean);
                    if (
                        (ship.isVertical()
                            ? vertBool
                            : horizBool && i !== start) ||
                        overlapAdj.length
                    ) {
                        return;
                    }
                    spots.push(i);
                }
                spots.forEach((i) => {
                    obj[i] = ship;
                });
            };
            obj.getShipsLeft = () =>
                [
                    ...new Set(Object.values(obj).filter((item) => item.id)),
                ].filter((ship) => ship.isAfloat()).length;
        });
    };
    resetBoards();
    return {
        player,
        computer,
        resetBoards,
    };
})();

export const OffenseBoards = (() => {
    const player = [];
    const computer = [];

    const resetBoards = () => {
        for (let i = 0; i < 100; i += 1) {
            player[i] = 0;
            computer[i] = 0;
        }
    };

    [player, computer].forEach((arr) => {
        arr.receiveAttack = (square) => {
            const ship = DefenseBoards[currentPlayer][square];
            if (ship) {
                ship.hit();
                arr[square] = 2;
                return ship.isAfloat();
            }
            arr[square] = 1;
            return undefined;
        };
    });

    resetBoards();

    return { player, computer, resetBoards };
})();

export const Square = () => {
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

    const getShipId = () => ship.id;

    return {
        wasAttacked,
        isTaken,
        addShip,
        attack,
        checkShipAfloat,
        getShipId,
    };
};

export const BoardFactory = () => {
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
