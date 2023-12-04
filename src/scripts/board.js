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

    const isSunk = () => getHealth() < 1;
    return {
        id,
        length,
        getHealth,
        hit,
        isSunk,
        changeVertical,
        isVertical,
    };
}

export const DefenseBoards = (() => {
    const player = {};
    const computer = {};
    const clear = () => {
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
                ].filter((ship) => !ship.isSunk()).length;
        });
    };
    clear();
    return {
        player,
        computer,
        clear,
    };
})();

export const OffenseBoards = (() => {
    const player = [];
    const computer = [];

    for (let i = 0; i < 100; i += 1) {
        player[i] = 0;
        computer[i] = 0;
    }

    [player, computer].forEach((arr) => {
        arr.receiveAttack = (square) => {
            const ship = DefenseBoards[currentPlayer][square];
            if (ship) {
                ship.hit();
                arr[square] = 2;
                return ship.isSunk();
            }
            arr[square] = 1;
            return undefined;
        };
    });

    return { player, computer };
})();
