import { E, PubSub } from './pubsub';
import {
    getGameState,
    placeRandomShips,
    playRound,
    testShipPlacement,
} from './game-controller';
import { elFactory, htmlFactory } from './helpers';

const startBtn = document.querySelector('#start-btn');

const preGame = (() => {
    const homeScreen = document.querySelector('.home-screen');
    const placementBoard = document.querySelector('.placement-board');
    const randomBtn = document.querySelector('#random-board');

    function populateBoard(shipsGrid = []) {
        const gridDisplay = elFactory('div', { classList: 'placement board' });
        for (let i = 0; i < 100; i += 1) {
            const taken = shipsGrid[i] ? ' ship' : '';
            gridDisplay.children.push(
                elFactory('div', {
                    textContent: i, // devMode
                    classList: `square${taken}`,
                    dataset: { placeCoord: i },
                })
            );
        }
        placementBoard.appendChild(htmlFactory(gridDisplay));
    }

    function showHome() {
        homeScreen.classList.remove('up-north');
        populateBoard();
    }

    function hideHome() {
        homeScreen.classList.add('up-north');
    }

    function placeRandom() {}

    randomBtn.addEventListener('click', placeRandom);

    populateBoard();

    return { showHome, hideHome };
})();

const Game = (() => {
    const currentTurnText = document.querySelector('#current');
    const gameBoards = document.querySelector('section.game-boards');
    const gameBoardsContainer = document.querySelector(
        '.game-boards .container'
    );
    const pScoreDisplay = document.querySelector('#player-score');
    const cScoreDisplay = document.querySelector('#computer-score');
    const winnerDisplay = document.querySelector('#winner');
    const modal = document.querySelector('.modal');
    const popUp = document.querySelector('.pop-up');
    const newGameBtn = document.querySelector('#new-game-btn');

    function endGameDisplay(winner) {
        winnerDisplay.textContent = winner;
        modal.classList.toggle('hidden');
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

    function updateGameBoards(
        playerShipsGrid = [],
        playerAttacksGrid = [],
        compAttacksGrid = []
    ) {
        gameBoardsContainer.textContent = '';
        const shipsBoard = elFactory('div', { classList: 'board ships' });
        const attacksBoard = elFactory('div', { classList: 'board attacks' });

        for (let i = 0; i < 100; i += 1) {
            const taken = playerShipsGrid[i] ? ' ship' : '';
            const compAttack =
                ['', ' miss', ' hit'][playerAttacksGrid[i]] ?? '';
            shipsBoard.children.push(
                elFactory('div', {
                    textContent: i, // devMode
                    classList: `square${taken}${compAttack}`,
                    dataset: { shipCoord: i },
                })
            );

            const playerAttack =
                ['', ' miss', ' hit'][compAttacksGrid[i]] ?? '';
            attacksBoard.children.push(
                elFactory('button', {
                    textContent: i, // devMode
                    classList: `square${playerAttack}`,
                    dataset: { attackCoord: i },
                })
            );
        }

        gameBoardsContainer.appendChild(htmlFactory(shipsBoard));
        gameBoardsContainer.appendChild(htmlFactory(attacksBoard));
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
        updateGameBoards(playerShipsGrid, playerAttacksGrid, compAttacksGrid);
        updateCurrentPlayer(isHuman);
        updateScores(pScore, cScore);
    }

    updateDisplay();

    // devMode
    startBtn.addEventListener('click', () => {
        gameBoards.classList.remove('hidden');
        placeRandomShips('p');
        placeRandomShips('c');
        updateDisplay();
    });

    // devMode
    newGameBtn.addEventListener('click', () => {
        testShipPlacement();
        updateDisplay();
    });

    return { updateDisplay };
})();

PubSub.subscribe(E.UPDATE, Game.updateDisplay);
