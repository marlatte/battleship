import { BoardFactory, ShipFactory, Square } from '../scripts/board';

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
        const mockShip = ShipFactory(3);
        mockShip.hit();
        expect(mockShip.getHealth()).toBe(2);
    });
    test('ship starts afloat', () => {
        const ship = ShipFactory(2);
        expect(ship.isAfloat()).toBe(true);
    });
    test('ship can be sunk', () => {
        const ship = ShipFactory(2);
        ship.hit();
        ship.hit();
        expect(ship.isAfloat()).toBe(false);
    });
});

describe('Square()', () => {
    test('Squares start empty', () => {
        const testSquare = Square();
        expect(testSquare.wasAttacked()).toBe(0);
    });
    test('Squares register misses as 1', () => {
        const testSquare = Square();
        testSquare.attack();
        expect(testSquare.wasAttacked()).toBe(1);
    });
    test('Squares register hits as 2', () => {
        const testSquare = Square();
        testSquare.addShip(ShipFactory(1));
        testSquare.attack();
        expect(testSquare.wasAttacked()).toBe(2);
    });
    test('Squares know whether their ship is sunk', () => {
        const testSquare = Square();
        testSquare.addShip(ShipFactory(1));
        expect(testSquare.checkShipAfloat()).toBe(true);
        testSquare.attack();
        expect(testSquare.checkShipAfloat()).toBe(false);
    });
});

describe('BoardFactory(): basics', () => {
    test('Factory creates a board that returns a positions array', () => {
        expect(BoardFactory()).toBeTruthy;
    });
    test('board.getGrid() has length 100', () => {
        expect(BoardFactory().getGrid().length).toBe(100);
    });
    test('Board sets up a Square() for each position', () => {
        expect(BoardFactory().getGrid()[0].wasAttacked()).toBe(0);
        expect(BoardFactory().getGrid()[50].wasAttacked()).toBe(0);
        expect(BoardFactory().getGrid()[100]).toBeFalsy();
    });
    test('Board can return values to be printed to the console', () => {
        expect(BoardFactory().getGridAttacks().length).toBe(100);
    });
});

describe('BoardFactory(): Pre-game setup', () => {
    test('Board can place a ship of length 1 in a Square', () => {
        const board = BoardFactory();
        expect(board.getGrid()[0].checkShipAfloat()).toBeFalsy();
        board.placeShip(ShipFactory(1), 0);
        expect(board.getGrid()[0].checkShipAfloat()).toBeTruthy();
    });
    test('Board can place a ship of length 2 horizontally', () => {
        const board = BoardFactory();
        expect(board.getGrid()[0].checkShipAfloat()).toBeFalsy();
        board.placeShip(ShipFactory(2), 0);
        expect(board.getGrid()[0].checkShipAfloat()).toBeTruthy();
        expect(board.getGrid()[1].checkShipAfloat()).toBeTruthy();
    });
    test('Board can place a ship of length 2 vertically', () => {
        const board = BoardFactory();
        const mockShip = ShipFactory(2);
        mockShip.changeVertical();
        expect(board.getGrid()[0].checkShipAfloat()).toBeFalsy();
        board.placeShip(mockShip, 0);
        expect(board.getGrid()[0].checkShipAfloat()).toBeTruthy();
        expect(board.getGrid()[10].checkShipAfloat()).toBeTruthy();
    });
    test('Board will REJECT a horizontal ship placed illegally across 2 rows', () => {
        const board = BoardFactory();
        board.placeShip(ShipFactory(2), 0);
        expect(board.getGrid()[9].checkShipAfloat()).toBeFalsy();
        expect(board.getGrid()[10].checkShipAfloat()).toBeFalsy();
    });
    test('Board will REJECT a vertical ship placed illegally beyond the bounds', () => {
        const board = BoardFactory();
        const mockShip = ShipFactory(2);
        mockShip.changeVertical();
        board.placeShip(mockShip, 95);
        expect(board.getGrid()[95].checkShipAfloat()).toBeFalsy();
    });
    test('Board will REJECT attempts to overlap', () => {
        const board = BoardFactory();
        const mockShip1 = ShipFactory(3);
        const mockShip2 = ShipFactory(4);
        board.placeShip(mockShip1, 70);
        board.placeShip(mockShip2, 70);
        expect(board.getGrid()[72].isTaken()).toBeTruthy();
        expect(board.getGrid()[73].isTaken()).toBeFalsy();
    });
    test('Board will REJECT attempts to be adjacent', () => {
        const board = BoardFactory();
        const mockShip3 = ShipFactory(3);
        const mockShip4 = ShipFactory(4);
        mockShip3.changeVertical();
        mockShip4.changeVertical();
        board.placeShip(mockShip3, 40);
        board.placeShip(mockShip4, 41);
        expect(board.getGrid()[40].isTaken()).toBeTruthy();
        expect(board.getGrid()[41].isTaken()).toBeFalsy();
    });
    test('Board has an afloat id list', () => {
        const board = BoardFactory();
        board.placeShip(ShipFactory(1), 0);
        board.placeShip(ShipFactory(1), 3);
        expect(board.getShipsAfloat().length).toBe(2);
    });
});

describe('BoardFactory(): in-game changes', () => {
    test('Board receives attacks and marks misses appropriately', () => {
        const board = BoardFactory();
        board.receiveAttack(0);
        expect(board.getGrid()[0].wasAttacked()).toBe(1);
    });
    test('Board receives attacks and marks hits appropriately', () => {
        const board = BoardFactory();
        board.placeShip(ShipFactory(2), 0);
        board.receiveAttack(0);
        expect(board.getGrid()[0].wasAttacked()).toBe(2);
    });
    test('Board updates afloat id list after attacks', () => {
        const board = BoardFactory();
        board.placeShip(ShipFactory(2), 0);
        board.receiveAttack(0);
        expect(board.getShipsAfloat().length).toBe(1);
    });
    test('Board updates afloat id list after sinks', () => {
        const board = BoardFactory();
        board.placeShip(ShipFactory(1), 0);
        board.receiveAttack(0);
        expect(board.getShipsAfloat().length).toBe(0);
    });
});
