import { BoardFactory, ShipFactory, Square } from '../scripts/board';

describe('ShipFactory', () => {
    let mockShip;

    beforeEach(() => {
        mockShip = ShipFactory('mockShip', 3);
    });

    test('ship exists', () => {
        expect(mockShip).toBeTruthy();
    });
    test('ship has length', () => {
        expect(mockShip.length).toBe(3);
    });
    test('ship can change alignment', () => {
        mockShip.changeVertical();
        expect(mockShip.isVertical()).toBe(true);
    });
    test('ship hit reduces health', () => {
        mockShip.hit();
        expect(mockShip.getHealth()).toBe(2);
    });
    test('ship starts afloat', () => {
        expect(mockShip.isAfloat()).toBe(true);
    });
    test('ship can be sunk', () => {
        mockShip.hit();
        mockShip.hit();
        mockShip.hit();
        expect(mockShip.isAfloat()).toBe(false);
    });
});

describe('Square()', () => {
    let testSquare;

    beforeEach(() => {
        testSquare = Square();
    });

    test('Squares start empty', () => {
        expect(testSquare.wasAttacked()).toBe(0);
    });
    test('Squares register misses as 1', () => {
        testSquare.attack();
        expect(testSquare.wasAttacked()).toBe(1);
    });
    test('Squares register hits as 2', () => {
        testSquare.addShip(ShipFactory(1));
        testSquare.attack();
        expect(testSquare.wasAttacked()).toBe(2);
    });
    test('Squares know whether their ship is sunk', () => {
        testSquare.addShip(ShipFactory('test', 1));
        expect(testSquare.checkShipAfloat()).toBe(true);
        testSquare.attack();
        expect(testSquare.checkShipAfloat()).toBe(false);
    });
});

describe('BoardFactory()', () => {
    let board;
    let mockShip1;
    let mockShip2;

    beforeEach(() => {
        board = BoardFactory();
        mockShip1 = ShipFactory('test', 3);
        mockShip2 = ShipFactory('test', 4);
    });

    describe('Basics', () => {
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

    describe('Pre-game setup', () => {
        test('Board can place a ship of length 1 in a Square', () => {
            expect(board.getGrid()[0].checkShipAfloat()).toBeFalsy();
            board.placeShip(ShipFactory('test', 1), 0);
            expect(board.getGrid()[0].checkShipAfloat()).toBeTruthy();
        });
        test('Board can place a ship of length 3 horizontally', () => {
            expect(board.getGrid()[0].isTaken()).toBeFalsy();
            board.placeShip(mockShip1, 0);
            expect(board.getGrid()[0].isTaken()).toBeTruthy();
            expect(board.getGrid()[2].isTaken()).toBeTruthy();
        });
        test('Board can place a ship of length 3 vertically', () => {
            mockShip1.changeVertical();
            expect(board.getGrid()[0].checkShipAfloat()).toBeFalsy();
            board.placeShip(mockShip1, 0);
            expect(board.getGrid()[0].checkShipAfloat()).toBeTruthy();
            expect(board.getGrid()[10].checkShipAfloat()).toBeTruthy();
        });
        test('Board will REJECT a horizontal ship placed illegally across 2 rows', () => {
            board.placeShip(mockShip1, 0);
            expect(board.getGrid()[9].checkShipAfloat()).toBeFalsy();
            expect(board.getGrid()[10].checkShipAfloat()).toBeFalsy();
        });
        test('Board will REJECT a vertical ship placed illegally beyond the bounds', () => {
            mockShip1.changeVertical();
            board.placeShip(mockShip1, 95);
            expect(board.getGrid()[95].isTaken()).toBeFalsy();
        });
        test('Board will REJECT attempts to overlap', () => {
            board.placeShip(mockShip1, 70);
            board.placeShip(mockShip2, 70);
            expect(board.getGrid()[72].isTaken()).toBeTruthy();
            expect(board.getGrid()[73].isTaken()).toBeFalsy();
        });
        test('Board will REJECT attempts to be adjacent', () => {
            mockShip1.changeVertical();
            mockShip2.changeVertical();
            board.placeShip(mockShip1, 40);
            board.placeShip(mockShip2, 41);
            expect(board.getGrid()[40].isTaken()).toBeTruthy();
            expect(board.getGrid()[41].isTaken()).toBeFalsy();
        });
        test('Board has an afloat id list', () => {
            board.placeShip(ShipFactory('test 1', 1), 0);
            board.placeShip(ShipFactory('test 2', 1), 3);
            expect(board.getShipsAfloat().length).toBe(2);
        });
    });

    describe('In-game changes', () => {
        test('Board receives attacks and marks misses appropriately', () => {
            board.receiveAttack(0);
            expect(board.getGrid()[0].wasAttacked()).toBe(1);
        });
        test('Board receives attacks and marks hits appropriately', () => {
            board.placeShip(ShipFactory('test', 2), 0);
            board.receiveAttack(0);
            expect(board.getGrid()[0].wasAttacked()).toBe(2);
        });
        test('Board updates afloat id list after attacks', () => {
            board.placeShip(ShipFactory('test', 2), 0);
            board.receiveAttack(0);
            expect(board.getShipsAfloat().length).toBe(1);
        });
        test('Board updates afloat id list after sinks', () => {
            board.placeShip(ShipFactory(1), 0);
            board.receiveAttack(0);
            expect(board.getShipsAfloat().length).toBe(0);
        });
    });
});
