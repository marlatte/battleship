/* eslint-disable no-unused-vars */
import { E, PubSub } from './pubsub';
import { testShipPlacement } from './game-controller';
import './board';
import { elFactory, htmlFactory } from './helpers';
import '../styles/style.css';

const startBtn = document.querySelector('#start-btn');
startBtn.addEventListener('click', testShipPlacement);

const boardsContainer = document.querySelector('.boards .container');

function handlePlayerAttack(e) {
    const coord = e.target.dataset.attackCoord;
    if (!coord) return;
    PubSub.publish(E.GAME.FIRE, coord);
}

function updateCurrentPlayer(isHuman) {
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
        .addEventListener('click', handlePlayerAttack);
}

updateBoards();

PubSub.subscribe(E.SCREEN.GRID, updateBoards);
PubSub.subscribe(E.SCREEN.CURRENT, updateCurrentPlayer);