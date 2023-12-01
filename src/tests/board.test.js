import { DefenseBoards, OffenseBoards, ShipFactory } from '../scripts/board';
import currentPlayer from '../scripts';

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
    test('Misses get marked on the board', () => {
        OffenseBoards[currentPlayer].fireShot(3);
        expect(OffenseBoards.player[3]).toBe(1);
    });
    test('Hits get marked on the board', () => {
        DefenseBoards.player[50] = 'destroyer';
        OffenseBoards[currentPlayer].fireShot(3);
        OffenseBoards[currentPlayer].fireShot(50);
        expect(OffenseBoards.player[3]).toBe(1);
        expect(OffenseBoards.player[50]).toBe(2);
    });
});

describe('defenseBoards', () => {
    test('There are boards for both players', () => {
        expect(DefenseBoards.player).toBeTruthy();
        expect(DefenseBoards.computer).toBeTruthy();
    });
    test('A ship of length 1 can be assigned to a square', () => {
        const mockShip = ShipFactory(1);
        DefenseBoards[currentPlayer].placeShip(mockShip, 0);
        expect(DefenseBoards.player[0]).toBe(mockShip);
    });
    test('A ship of length 2 can be placed horizontally within the grid', () => {
        const mockShip = ShipFactory(2);
        DefenseBoards[currentPlayer].placeShip(mockShip, 2);
        expect(DefenseBoards.player[2]).toBe(mockShip);
        expect(DefenseBoards.player[3]).toBe(mockShip);
    });
    test('A ship of length 2 CANNOT be placed horizontally across 2 rows', () => {
        const mockShip = ShipFactory(2);
        DefenseBoards[currentPlayer].placeShip(mockShip, 9);
        expect(DefenseBoards.player[9]).toBeFalsy();
        expect(DefenseBoards.player[10]).toBeFalsy();
    });
    test('A ship of length 2 can be placed vertically within the grid', () => {
        const mockShip = ShipFactory(2);
        mockShip.changeVertical();
        DefenseBoards[currentPlayer].placeShip(mockShip, 10);
        expect(DefenseBoards.player[10]).toBe(mockShip);
        expect(DefenseBoards.player[20]).toBe(mockShip);
    });
    test('A ship of length 5 can be placed horizontally within the grid', () => {
        const mockShip2 = ShipFactory(5);
        DefenseBoards[currentPlayer].placeShip(mockShip2, 0);
        expect(DefenseBoards.player[0]).toBe(mockShip2);
        expect(DefenseBoards.player[4]).toBe(mockShip2);
    });
    test('A ship of length 5 can be placed vertically within the grid', () => {
        const mockShip2 = ShipFactory(5);
        mockShip2.changeVertical();
        DefenseBoards[currentPlayer].placeShip(mockShip2, 10);
        expect(DefenseBoards.player[10]).toBe(mockShip2);
        expect(DefenseBoards.player[50]).toBe(mockShip2);
    });
    test('A ship of length 5 CANNOT be placed across 2 rows', () => {
        const mockShip2 = ShipFactory(5);
        DefenseBoards[currentPlayer].placeShip(mockShip2, 78);
        expect(DefenseBoards.player[78]).toBeFalsy();
        expect(DefenseBoards.player[83]).toBeFalsy();
    });
    test('Ships can be placed without being overlapping or adjacent', () => {
        const mockShip3 = ShipFactory(3);
        const mockShip4 = ShipFactory(3);
        mockShip3.id = 3;
        mockShip4.id = 4;
        DefenseBoards[currentPlayer].placeShip(mockShip3, 70);
        DefenseBoards[currentPlayer].placeShip(mockShip4, 70);
        expect(DefenseBoards.player[70].id).toBe(3);
        expect(DefenseBoards.player[73].id).toBe(3);
    });
});
