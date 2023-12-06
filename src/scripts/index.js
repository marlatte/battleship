import { Game, Player } from './game-controller';
import '../styles/style.css';
import { elFactory, htmlFactory } from './helpers';

const TestButtons = (() => {
    const startBtn = document.querySelector('#start-btn');
    startBtn.addEventListener('click', Game.reset);

    const playerHits = document.querySelector('#player-hits');
    playerHits.addEventListener('click', () => {
        Player.reset();
        Game.playRound(3);
    });
    const playerMiss = document.querySelector('#player-miss');
    playerMiss.addEventListener('click', () => {
        Player.reset();
        Game.playRound(2);
    });

    const compHits = document.querySelector('#comp-hits');
    compHits.addEventListener('click', () => {
        Player.reset();
        Player.toggle();
        Game.playRound(0);
    });
    const compMiss = document.querySelector('#comp-miss');
    compMiss.addEventListener('click', () => {
        Player.reset();
        Player.toggle();
        Game.playRound(7);
    });
})();

const boardsSection = document.querySelector('section.boards');

function buildBoards() {
    const shipsBoard = elFactory('div', { classList: 'board ships' }, []);
    const attacksBoard = elFactory('div', { classList: 'board attacks' }, []);

    for (let i = 0; i < 100; i += 1) {
        shipsBoard.children.push(
            elFactory('button', {
                classList: 'square',
                dataset: { coord: `ship-${i}` },
            })
        );
        attacksBoard.children.push(
            elFactory('button', {
                classList: 'square',
                dataset: { coord: `attack-${i}` },
            })
        );
    }

    const container = elFactory('div', { classList: 'container' }, [
        shipsBoard,
        attacksBoard,
    ]);
    boardsSection.appendChild(htmlFactory(container));
}

buildBoards();
