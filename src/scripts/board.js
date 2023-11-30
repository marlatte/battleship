import currentPlayer from '.';

/* eslint-disable no-plusplus */
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

const DefenseBoards = (() => ({ player: { 50: 'destroyer' }, computer: {} }))();

export const OffenseBoards = (() => {
    const player = [];
    const computer = [];

    for (let i = 0; i < 100; i++) {
        player[i] = 0;
        computer[i] = 0;
    }

    [player, computer].forEach((arr) => {
        // eslint-disable-next-line no-param-reassign
        arr.fireShot = (square) => {
            if (DefenseBoards[currentPlayer][square]) {
                // eslint-disable-next-line no-param-reassign
                arr[square] = 2;
            } else {
                // eslint-disable-next-line no-param-reassign
                arr[square] = 1;
            }
        };
    });

    return { player, computer };
})();
