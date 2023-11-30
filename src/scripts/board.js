/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import currentPlayer from '.';

export function ShipFactory(length) {
    let health = length;
    const hit = () => --health;

    let vertical = false;
    const changeVertical = () => {
        vertical = !vertical;
    };
    const isVertical = () => vertical;

    const isSunk = () => health < 1;
    return { length, hit, isSunk, changeVertical, isVertical };
}

export const DefenseBoards = (() => {
    const player = {};
    const computer = {};
    [player, computer].forEach((obj) => {
        obj.placeShip = (ship, square) => {
            obj[square] = ship;
        };
    });
    return { player, computer };
})();

export const OffenseBoards = (() => {
    const player = [];
    const computer = [];

    for (let i = 0; i < 100; i++) {
        player[i] = 0;
        computer[i] = 0;
    }

    [player, computer].forEach((arr) => {
        arr.fireShot = (square) => {
            if (DefenseBoards[currentPlayer][square]) {
                arr[square] = 2;
            } else {
                arr[square] = 1;
            }
        };
    });

    return { player, computer };
})();
