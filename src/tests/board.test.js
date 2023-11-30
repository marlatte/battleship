import { OffenseBoards, ShipFactory } from '../scripts/board';

describe('ShipFactory', () => {
    test('ship exists', () => {
        expect(ShipFactory()).toBeTruthy();
    });
    test('ship has length', () => {
        expect(ShipFactory(5).length).toBe(5);
    });
    test('ship can change alignment', () => {
        const ship = ShipFactory(5);
        ship.changeVertical();
        expect(ship.isVertical()).toBe(true);
    });
    test('ship hit reduces health', () => {
        expect(ShipFactory(3).hit()).toBe(2);
    });
    test('ship can be sunk', () => {
        const ship = ShipFactory(2);
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
});

describe('offenseBoards', () => {
    test('There are board arrays for both players', () => {
        expect(OffenseBoards.player).toBeTruthy();
        expect(OffenseBoards.computer).toBeTruthy();
    });
    test('Each board is 100 items long', () => {
        expect(OffenseBoards.player.length).toBe(100);
        expect(OffenseBoards.computer.length).toBe(100);
    });
    test('Missed shots get marked on the board', () => {
        const currentPlayer = 'player';
        OffenseBoards[currentPlayer].fireShot(3);
        expect(OffenseBoards.player[3]).toBe(1);
    });
    test('Hits get marked on the board', () => {
        const currentPlayer = 'player';
        OffenseBoards[currentPlayer].fireShot(3);
        OffenseBoards[currentPlayer].fireShot(50);
        expect(OffenseBoards.player[3]).toBe(1);
        expect(OffenseBoards.player[50]).toBe(2);
    });
});

describe('defenseBoards', () => {
    test.todo('There are boards for both players');
    test.todo('A ship of length 1 can be assigned to a square');
    test.todo('A ship of length 2 can be placed horizontally within the grid');
    test.todo('A ship of length 2 can be placed vertically within the grid');
    test.todo('A ship of length 5 can be placed either way within the grid');
    test.todo('Ships can be placed without being overlapping or adjacent');
});
