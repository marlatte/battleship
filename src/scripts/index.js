/* eslint-disable no-unused-vars */
import { Game, Player } from './game-controller';
import '../styles/style.css';
import { elFactory, htmlFactory } from './helpers';
import { E, PubSub } from './pubsub';

const TestButtons = (() => {
    const startBtn = document.querySelector('#start-btn');
    startBtn.addEventListener('click', Game.testShipPlacement);

    const playerHits = document.querySelector('#player-hits');
    playerHits.addEventListener('click', () => {
        Player.reset();
        PubSub.publish(E.TEST.FIRE, 3);
    });
    const playerMiss = document.querySelector('#player-miss');
    playerMiss.addEventListener('click', () => {
        Player.reset();
        PubSub.publish(E.TEST.FIRE, 12);
    });

    const compHits = document.querySelector('#comp-hits');
    compHits.addEventListener('click', () => {
        Player.reset();
        Player.toggle();
        PubSub.publish(E.TEST.FIRE, 0);
    });
    const compMiss = document.querySelector('#comp-miss');
    compMiss.addEventListener('click', () => {
        Player.reset();
        Player.toggle();
        PubSub.publish(E.TEST.FIRE, 7);
    });
})();

const boardsContainer = document.querySelector('.boards .container');

function handlePlayerAttack(e) {
    const coord = e.target.dataset.attackCoord;
    if (!coord) return;
    PubSub.publish(E.TEST.FIRE, coord);
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

const testUpdate = PubSub.subscribe(E.TEST.UPDATE, updateBoards);
