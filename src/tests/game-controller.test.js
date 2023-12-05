import { Player } from '../scripts/game-controller';

describe('Player module', () => {
    test('Player has current player', () => {
        expect(Player.humanTurn()).toBe(true);
    });
    test('Current player can alternate', () => {
        Player.toggle();
        expect(Player.humanTurn()).toBe(false);
    });
    test('Computer can make a legal move', () => {
        const grid = [0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 1, 0];
        const computerChoice = Player.chooseFrom(grid);
        expect(grid[computerChoice]).toBe(0);
    });
});
