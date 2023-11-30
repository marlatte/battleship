import { ShipFactory } from './gameboard';

describe('ShipFactory', () => {
    test('ship exists', () => {
        expect(ShipFactory()).toBeTruthy();
    });
    test('ship has length', () => {
        expect(ShipFactory(5).length).toBe(5);
    });
});
