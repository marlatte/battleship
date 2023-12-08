/* eslint-disable no-unused-vars */
import { BoardFactory, ShipFactory } from './board';
import { E, PubSub } from './pubsub';

export const Player = (() => {
    let human = true;

    const toggle = () => {
        human = !human;
        PubSub.publish(E.SCREEN.CURRENT_TEXT, human);
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

export const Game = (() => {
    const boards = {
        p: {},
        c: {},
        reset: () => {
            boards.p = BoardFactory();
            boards.c = BoardFactory();
        },
    };

    const ships = {
        p: {},
        c: {},
        reset: () => {
            [
                ['carrier', 5],
                ['battleship', 4],
                ['cruiser', 4],
                ['destroyer', 3],
                ['submarine', 3],
                ['patrol1', 2],
                ['patrol2', 2],
            ].forEach(([name, len]) => {
                ships.p[name] = ShipFactory(name, len);
                ships.c[name] = ShipFactory(name, len);
            });
        },
    };
    ships.reset();

    function publishUpdate() {
        PubSub.publish(
            E.SCREEN.UPDATE,
            boards.p.getGridShips(),
            boards.p.getGridAttacks(),
            boards.c.getGridAttacks()
        );
    }

    function playRound(coord) {
        const hit =
            boards[Player.isHumanTurn() ? 'c' : 'p'].receiveAttack(coord);
        publishUpdate();
        if (!hit) Player.toggle();
        if (!Player.isHumanTurn()) {
            setTimeout(() => {
                playRound(Player.getCompChoice(boards.p.getGridAttacks()));
            }, 800);
        }
    }

    function reset() {
        Player.reset();
        boards.reset();
        ships.reset();
    }

    // devMode
    function testShipPlacement() {
        reset();

        // Player ships
        boards.p.placeShip(ships.p.carrier, 0);
        ships.p.battleship.changeVertical();
        boards.p.placeShip(ships.p.battleship, 22);
        boards.p.placeShip(ships.p.cruiser, 45);
        boards.p.placeShip(ships.p.destroyer, 94);
        boards.p.placeShip(ships.p.submarine, 67);
        boards.p.placeShip(ships.p.patrol1, 17);
        ships.p.patrol2.changeVertical();
        boards.p.placeShip(ships.p.patrol2, 81);

        // Computer ships
        boards.c.placeShip(ships.c.carrier, 0);
        ships.c.battleship.changeVertical();
        boards.c.placeShip(ships.c.battleship, 22);
        boards.c.placeShip(ships.c.cruiser, 45);
        boards.c.placeShip(ships.c.destroyer, 94);
        boards.c.placeShip(ships.c.submarine, 67);
        boards.c.placeShip(ships.c.patrol1, 17);
        ships.c.patrol2.changeVertical();
        boards.c.placeShip(ships.c.patrol2, 81);

        publishUpdate();
    }

    reset();

    return { reset, playRound, testShipPlacement };
})();

const fireShot = PubSub.subscribe(E.GAME.FIRE, Game.playRound);
