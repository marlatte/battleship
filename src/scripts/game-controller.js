import { boards, ships } from './board';
import { E, PubSub } from './pubsub';

let gameStarted = false;
export const checkGameStarted = () => gameStarted;

export const Player = (() => {
  const PlayerFactory = () => {
    const pastHits = new Set();
    const addHit = (coord) => {
      pastHits.add(coord);
    };
    const removeHit = (coord) => {
      pastHits.delete(coord);
    };
    const getPastHits = () => [...pastHits];
    const clearHits = () => {
      pastHits.clear();
    };

    const getCompSmart = (options) =>
      options[Math.floor(Math.random() * options.length)];

    const getCompGuess = (grid) => {
      const options = grid.reduce((acc, curr, index) => {
        if (curr === 0) {
          acc.push(index);
        }
        return acc;
      }, []);
      return options[Math.floor(Math.random() * options.length)];
    };

    return {
      addHit,
      removeHit,
      getPastHits,
      clearHits,
      getCompSmart,
      getCompGuess,
    };
  };
  const p = PlayerFactory();
  const c = PlayerFactory();

  let human = true;
  const toggle = () => {
    human = !human;
  };

  const reset = () => {
    human = true;
    p.clearHits();
  };

  return { p, c, toggle, reset, isHumanTurn: () => human };
})();

function checkGameOver() {
  let winner = '';
  if (boards.p.getShipsAfloat().length < 1) {
    winner = 'Computer';
  }
  if (boards.c.getShipsAfloat().length < 1) {
    winner = 'Player';
  }
  return winner;
}

export function playRound(coord) {
  const current = !Player.isHumanTurn() ? 'c' : 'p';
  const opponent = Player.isHumanTurn() ? 'c' : 'p';
  const { hit, sunk, sunkCoords } = boards[opponent].receiveAttack(coord);
  const gameOver = checkGameOver();

  if (hit) {
    Player[current].addHit(coord);
    if (sunk) {
      sunkCoords.forEach((sunkCoord) => {
        Player.c.removeHit(sunkCoord);
      });
    }
  } else Player.toggle();

  PubSub.publish(E.UPDATE);

  if (gameOver) return gameOver;

  if (!Player.isHumanTurn()) {
    let compChoice;
    const pastHits = Player.c.getPastHits();
    const lastHit = pastHits[pastHits.length - 1];
    const options = boards.p.findAdjacent([lastHit], true);

    if (options.length) {
      compChoice = Player.c.getCompSmart(options);
    } else if (pastHits.length > 1) {
      Player.c.removeHit(lastHit);
      const pastHits2 = Player.c.getPastHits();
      const lastHit2 = pastHits2[0];
      const options2 = boards.p.findAdjacent([lastHit2], true);
      if (options2.length) {
        compChoice = Player.c.getCompSmart(options2);
      } else {
        compChoice = Player.c.getCompGuess(boards.p.getGridAttacks());
      }
    } else {
      compChoice = Player.c.getCompGuess(boards.p.getGridAttacks());
    }
    setTimeout(() => {
      playRound(compChoice);
    }, 400);
  }
  return false;
}

export function resetGame() {
  gameStarted = false;
  Player.reset();
  boards.reset();
  ships.reset();
  PubSub.publish(E.UPDATE);
}

export function getOpenIndices(player) {
  return boards[player]
    .getGridIllegal()
    .map((val, index) => ({ val, index }))
    .filter((item) => item.val === 0)
    .map((item) => item.index);
}

export function placeRandomShips(player) {
  boards.reset(player);
  gameStarted = true;
  const failedSpots = [];
  const shipNames = [
    'carrier',
    'battleship',
    'cruiser',
    'destroyer',
    'submarine',
    'patrol1',
    'patrol2',
  ];
  shipNames.forEach((name) => {
    const ship = ships[player][name];
    let success = false;
    while (failedSpots.length < 88 && !success) {
      const openIndices = getOpenIndices(player);
      const spot =
        openIndices[Math.floor(Math.random() * (openIndices.length - 1))];

      if (Math.floor(Math.random() + 0.5)) {
        ship.changeVertical();
      }

      success = boards[player].placeShip(ship, spot);

      if (!success) {
        ship.changeVertical();
        success = boards[player].placeShip(ship, spot);
        if (!success) {
          failedSpots.push(spot);
        }
      }
    }
  });
}

export function getGameState() {
  return {
    playerShipsGrid: boards.p.getGridShips(),
    playerAttacksGrid: boards.p.getGridAttacks(),
    compAttacksGrid: boards.c.getGridAttacks(),
    isHuman: Player.isHumanTurn(),
    pScore: boards.p.getShipsAfloat().length,
    cScore: boards.c.getShipsAfloat().length,
  };
}

resetGame();
