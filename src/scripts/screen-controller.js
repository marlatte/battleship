import { E, PubSub } from './pubsub';
import {
    checkGameStarted,
    getGameState,
    placeRandomShips,
    playRound,
    resetGame,
} from './game-controller';
import { elFactory, htmlFactory } from './helpers';

// Pre-game Vars
const homeScreen = document.querySelector('.home-screen');
const preGameBoard = document.querySelector('.pre-game-board');
const randomBoardBtn = document.querySelector('#random-board-btn');
const startBtn = document.querySelector('#start-btn');

// In-game Vars
const homeBtn = document.querySelector('#home-btn');
const currentTurnText = document.querySelector('#current');
const shipsBoard = document.querySelector('.game-boards .ships');
const attacksBoard = document.querySelector('.game-boards .attacks');
const pScoreDisplay = document.querySelector('#player-score');
const cScoreDisplay = document.querySelector('#computer-score');

// Post-game Vars
const winnerDisplay = document.querySelector('#winner');
const endScreen = document.querySelector('.end-screen');
const popUp = document.querySelector('.pop-up');
const newGameBtn = document.querySelector('#new-game-btn');

function endGameDisplay(winner) {
    winnerDisplay.textContent = winner;
    endScreen.classList.remove('hidden');
    setTimeout(() => {
        popUp.classList.toggle('shrunk');
    }, 150);
}

function handleBoardClick(e) {
    const coord = e.target.dataset.attackCoord;
    if (!coord) return;
    document
        .querySelector('.board.attacks')
        .removeEventListener('click', handleBoardClick);
    const gameOver = playRound(coord);
    if (gameOver) {
        endGameDisplay(gameOver);
    }
}

function updateCurrentPlayer(isHuman = true) {
    if (isHuman) {
        currentTurnText.textContent = 'Player';
        document
            .querySelector('.board.attacks')
            .addEventListener('click', handleBoardClick);
    } else {
        currentTurnText.textContent = 'Computer';
    }
}

function updateShipsBoard(
    isPlacementPhase = false,
    playerShipsGrid = [],
    playerAttacksGrid = []
) {
    const appendTarget = isPlacementPhase ? preGameBoard : shipsBoard;
    appendTarget.textContent = '';
    const shipsGrid = elFactory('div', { classList: 'board ships' });

    for (let i = 0; i < 100; i += 1) {
        const taken = playerShipsGrid[i] ? ' ship' : '';
        const compAttack = ['', ' miss', ' hit'][playerAttacksGrid[i]] ?? '';
        const place = isPlacementPhase ? ' place' : '';
        shipsGrid.children.push(
            elFactory('div', {
                textContent: i, // devMode
                classList: `square${taken}${compAttack}${place}`,
                dataset: { shipCoord: i },
            })
        );
    }

    appendTarget.appendChild(htmlFactory(shipsGrid));
}

function updateAttacksBoard(compAttacksGrid = []) {
    attacksBoard.textContent = '';

    const attacksGrid = elFactory('div', { classList: 'board attacks' });

    for (let i = 0; i < 100; i += 1) {
        const playerAttack = ['', ' miss', ' hit'][compAttacksGrid[i]] ?? '';
        attacksGrid.children.push(
            elFactory('button', {
                textContent: i, // devMode
                classList: `square${playerAttack}`,
                dataset: { attackCoord: i },
            })
        );
    }

    attacksBoard.appendChild(htmlFactory(attacksGrid));
}

function updateScores(pScore, cScore) {
    pScoreDisplay.textContent = pScore;
    cScoreDisplay.textContent = cScore;
}

function updateDisplay(isPlacementPhase = false) {
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
    updateShipsBoard(isPlacementPhase, playerShipsGrid, playerAttacksGrid);
    updateAttacksBoard(compAttacksGrid);
    updateCurrentPlayer(isHuman);
    updateScores(pScore, cScore);
}

function startApp() {
    resetGame();
    endScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
    updateDisplay(true);
}

startBtn.addEventListener('click', () => {
    if (checkGameStarted()) {
        updateDisplay();
        homeScreen.classList.add('hidden');
    }
});

randomBoardBtn.addEventListener('click', () => {
    placeRandomShips('p');
    placeRandomShips('c');
    updateDisplay(true);
});

homeBtn.addEventListener('click', startApp);

newGameBtn.addEventListener('click', () => {
    startApp();
    updateDisplay();
});

PubSub.subscribe(E.UPDATE, updateDisplay);

startApp();
