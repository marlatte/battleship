import { E, PubSub } from './pubsub';

export const Player = (() => {
    let human = true;

    const toggle = () => {
        human = !human;
        PubSub.publish(E.SCREEN.CURRENT, human);
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
        PubSub.publish(E.SCREEN.CURRENT, human);
    };

    return {
        toggle,
        getCompChoice,
        reset,
        isHumanTurn: () => human,
    };
})();

const [
    c,
    p,
    carrier,
    battleship,
    cruiser,
    destroyer,
    submarine,
    patrol1,
    patrol2,
] = [
    'c',
    'p',
    'carrier',
    'battleship',
    'cruiser',
    'destroyer',
    'submarine',
    'patrol1',
    'patrol2',
];

function playRound(coord) {
    const current = Player.isHumanTurn() ? 'c' : 'p';
    PubSub.publish(E.BOARD.ATTACK, current, coord);
    PubSub.publish(E.BOARD.PUB_TO_SCREEN);
}

function checkCompTurn(grid) {
    if (!Player.isHumanTurn()) {
        setTimeout(() => {
            playRound(Player.getCompChoice(grid));
        }, 800);
    }
}

function checkGameOver(pShips, cShips) {
    PubSub.publish(E.SCREEN.AFLOAT, pShips.length, cShips.length);
    if (pShips.length < 1) {
        PubSub.publish(E.SCREEN.OVER, 'Computer');
    } else if (cShips.length < 1) {
        PubSub.publish(E.SCREEN.OVER, 'Player');
    }
}

function resetGame() {
    Player.reset();
    PubSub.publish(E.BOARD.RESET);
    PubSub.publish(E.BOARD.PUB_TO_SCREEN);
}

// devMode
export function testShipPlacement() {
    resetGame();

    [p, c].forEach((player) => {
        PubSub.publish(E.BOARD.PLACE, player, carrier, 0);
        PubSub.publish(E.BOARD.TURN, player, battleship);
        PubSub.publish(E.BOARD.PLACE, player, battleship, 22);
        PubSub.publish(E.BOARD.PLACE, player, cruiser, 45);
        PubSub.publish(E.BOARD.PLACE, player, destroyer, 94);
        PubSub.publish(E.BOARD.PLACE, player, submarine, 67);
        PubSub.publish(E.BOARD.PLACE, player, patrol1, 17);
        PubSub.publish(E.BOARD.TURN, player, patrol2);
        PubSub.publish(E.BOARD.PLACE, player, patrol2, 81);
    });

    PubSub.publish(E.BOARD.PUB_TO_SCREEN);
}

resetGame();

PubSub.subscribe(E.GAME.FIRE, playRound);
PubSub.subscribe(E.GAME.TOGGLE, Player.toggle);
PubSub.subscribe(E.GAME.COMP_TURN, checkCompTurn);
PubSub.subscribe(E.GAME.AFLOAT, checkGameOver);
