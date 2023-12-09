import { E, PubSub } from './pubsub';
import { testShipPlacement } from './game-controller';
import { elFactory, htmlFactory } from './helpers';

const startBtn = document.querySelector('#start-btn');

const boardsContainer = document.querySelector('.boards .container');
const winnerDisplay = document.querySelector('#winner');
const modal = document.querySelector('.modal');
const popUp = document.querySelector('.pop-up');

function updateDisplay() {
    // Gets info from game-controller
    // Calls updateBoards(info) and updateCurrentPlayer(info)
}

function handleBoardClick(e) {
    const coord = e.target.dataset.attackCoord;
    if (!coord) return;
    PubSub.publish(E.GAME.FIRE, coord);
}

function updateCurrentPlayer(isHuman = true) {
    const currentTurnText = document.querySelector('#current');
    currentTurnText.textContent = isHuman ? 'Player' : 'Computer';
}

function updateBoards(
    playerShipsGrid = [],
    playerAttacksGrid = [],
    compAttacksGrid = []
) {
    boardsContainer.textContent = '';
    const shipsBoard = elFactory('div', { classList: 'board ships' });
    const attacksBoard = elFactory('div', { classList: 'board attacks' });

    for (let i = 0; i < 100; i += 1) {
        const taken = playerShipsGrid[i] ? ' ship' : '';
        const compAttack = ['', ' miss', ' hit'][playerAttacksGrid[i]] ?? '';
        shipsBoard.children.push(
            elFactory('div', {
                textContent: i, // devMode
                classList: `square${taken}${compAttack}`,
                dataset: { shipCoord: i },
            })
        );

        const playerAttack = ['', ' miss', ' hit'][compAttacksGrid[i]] ?? '';
        attacksBoard.children.push(
            elFactory('button', {
                textContent: i, // devMode
                classList: `square${playerAttack}`,
                dataset: { attackCoord: i },
            })
        );
    }

    boardsContainer.appendChild(htmlFactory(shipsBoard));
    boardsContainer.appendChild(htmlFactory(attacksBoard));

    document
        .querySelector('.board.attacks')
        .addEventListener('click', handleBoardClick);
}

function endGameDisplay(winner) {
    winnerDisplay.textContent = winner;
    modal.classList.toggle('hidden');
    setTimeout(() => {
        popUp.classList.toggle('shrunk');
    }, 150);
}

updateBoards();

PubSub.subscribe(E.SCREEN.GRID, updateBoards);
PubSub.subscribe(E.SCREEN.CURRENT, updateCurrentPlayer);
PubSub.subscribe(E.SCREEN.OVER, endGameDisplay);

startBtn.addEventListener('click', () => {
    testShipPlacement();
    updateDisplay();
});
