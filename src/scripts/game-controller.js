import { boards, ships } from './board';
import { E, PubSub } from './pubsub';

let gameStarted = false;
export const checkGameStarted = () => gameStarted;

export const Player = (() => {
    let human = true;

    const toggle = () => {
        human = !human;
    };

    const getCompChoice = (grid) => {
        const options = grid.reduce((acc, curr, index) => {
            if (curr === 0) {
                acc.push(index);
            }
            return acc;
        }, []);
        return options[Math.floor(Math.random() * options.length)];
    };

    const reset = () => {
        human = true;
    };

    return {
        toggle,
        getCompChoice,
        reset,
        isHumanTurn: () => human,
    };
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
    const opponent = Player.isHumanTurn() ? 'c' : 'p';
    const { hit, sunk } = boards[opponent].receiveAttack(coord);
    const gameOver = checkGameOver();

    if (sunk) {
        // attack nearby coords
        console.log('sunk');
    }

    if (!hit) Player.toggle();

    PubSub.publish(E.UPDATE);

    if (gameOver) return gameOver;

    if (!Player.isHumanTurn()) {
        setTimeout(() => {
            playRound(Player.getCompChoice(boards.p.getGridAttacks()));
        }, 800);
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
                openIndices[
                    Math.floor(Math.random() * (openIndices.length - 1))
                ];

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
