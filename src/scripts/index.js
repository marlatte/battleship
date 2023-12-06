import { Game, Player } from './game-controller';
import '../styles/style.css';

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

const shipsBoard = document.querySelector('.board ships');

const attacksBoard = document.querySelector('.board attacks');
