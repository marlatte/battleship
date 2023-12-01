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
    const clear = () => {
        Object.keys(player).forEach((key) => {
            delete player[key];
        });
        Object.keys(computer).forEach((key) => {
            delete computer[key];
        });
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
                        (ship.isVertical() ? vertBool : horizBool) &&
                        (i !== start || overlapAdj.length)
                    ) {
                        return;
                    }
                    spots.push(i);
                }
                spots.forEach((i) => {
                    obj[i] = ship;
                });
            };
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
