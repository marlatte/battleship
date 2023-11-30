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

export const example = '';
