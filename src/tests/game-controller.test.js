import { Player } from '../scripts/game-controller';

describe('Player module', () => {
  test('Player has current player', () => {
    expect(Player.isHumanTurn()).toBe(true);
  });
  test('Current player can alternate', () => {
    expect(Player.isHumanTurn()).toBe(true);
    Player.toggle();
    expect(Player.isHumanTurn()).toBe(false);
  });
  test('Current player can be reset to human', () => {
    expect(Player.isHumanTurn()).toBe(false);
    Player.reset();
    expect(Player.isHumanTurn()).toBe(true);
  });
  test('Computer can make a legal move', () => {
    const grid = [0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 1, 0];
    const computerChoice = Player.c.getCompGuess(grid);
    expect(grid[computerChoice]).toBe(0);
  });
});
