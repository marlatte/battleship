import { E, PubSub } from './pubsub';
import { getGameState, playRound, testShipPlacement } from './game-controller';
import { elFactory, htmlFactory } from './helpers';

const startBtn = document.querySelector('#start-btn');

const currentTurnText = document.querySelector('#current');
const boardsContainer = document.querySelector('.boards .container');
const pScoreDisplay = document.querySelector('#player-score');
const cScoreDisplay = document.querySelector('#computer-score');
const winnerDisplay = document.querySelector('#winner');
const modal = document.querySelector('.modal');
const popUp = document.querySelector('.pop-up');

function handleBoardClick(e) {
    const coord = e.target.dataset.attackCoord;
    if (!coord) return;
    document
        .querySelector('.board.attacks')
        .removeEventListener('click', handleBoardClick);
    playRound(coord);
}

function updateCurrentPlayer(isHuman = true) {
    if (isHuman) {
        currentTurnText.textContent = 'Player';
        // Unlock grid
        document
            .querySelector('.board.attacks')
            .addEventListener('click', handleBoardClick);
    } else {
        currentTurnText.textContent = 'Computer';
    }
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
}

function updateScores(pScore, cScore) {
    pScoreDisplay.textContent = pScore;
    cScoreDisplay.textContent = cScore;
}

function updateDisplay() {
    // Gets info from game-controller
    const {
        playerShipsGrid,
        playerAttacksGrid,
        compAttacksGrid,
        isHuman,
        pScore,
        cScore,
    } = getGameState();

    // Updates boards, current player, and scores
    updateBoards(playerShipsGrid, playerAttacksGrid, compAttacksGrid);
    updateCurrentPlayer(isHuman);
    updateScores(pScore, cScore);
}

function endGameDisplay(winner) {
    winnerDisplay.textContent = winner;
    modal.classList.toggle('hidden');
    setTimeout(() => {
        popUp.classList.toggle('shrunk');
    }, 150);
}

updateDisplay();

startBtn.addEventListener('click', () => {
    testShipPlacement();
    updateDisplay();
});

PubSub.subscribe(E.SCREEN.OVER, endGameDisplay);
PubSub.subscribe(E.SCREEN.UPDATE, updateDisplay);
