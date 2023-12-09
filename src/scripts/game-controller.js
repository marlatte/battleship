import { boards, ships } from './board';
import { E, PubSub } from './pubsub';

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

export const Game = (() => {})();
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
    const hit = boards[opponent].receiveAttack(coord);
    const gameOver = checkGameOver();

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

function resetGame() {
    Player.reset();
    boards.reset();
    ships.reset();
    PubSub.publish(E.UPDATE);
}

// devMode
export function testShipPlacement() {
    resetGame();

    ['p', 'c'].forEach((player) => {
        [
            ['carrier', 0],
            ['battleship', 22],
            ['cruiser', 45],
            ['destroyer', 94],
            ['submarine', 67],
            ['patrol1', 17],
            ['patrol2', 81],
        ].forEach(([shipName, spot]) => {
            if (shipName === 'battleship' || shipName === 'patrol2') {
                ships[player][shipName].changeVertical();
            }
            boards[player].placeShip(ships[player][shipName], spot);
        });
    });
}

function placeRandomShips(player) {
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
    shipNames.forEach(([name]) => {
        /*
        WHILE failedSpots.length < 95
            Choose a random open spot on getIllegalGrid()
            Flip a coin as to whether to make it vertical or not
            Attempt placement
            If it fails, changeVertical,
            If it still fails, push the spot to failedSpots

        
        OLD CODE:

        if (shipDoesntFit) {
            ships[player][name].changeVertical();
        }
        boards[player].placeShip(ships[player][name], spot);
        */
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
