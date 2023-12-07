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
        player: {},
        comp: {},
        reset: () => {
            boards.player = BoardFactory();
            boards.comp = BoardFactory();
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
            E.TEST.UPDATE,
            boards.player.getGridShips(),
            boards.player.getGridAttacks(),
            boards.comp.getGridAttacks()
        );
    }

    function attack(coord) {
        if (Player.isHumanTurn()) {
            boards.comp.receiveAttack(coord);
        } else {
            boards.player.receiveAttack(coord);
        }
    }

    function playRound(coord) {
        attack(coord);
        publishUpdate();
        Player.toggle();
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
        boards.player.placeShip(ships.p.carrier, 0);
        ships.p.battleship.changeVertical();
        boards.player.placeShip(ships.p.battleship, 22);
        boards.player.placeShip(ships.p.cruiser, 45);
        boards.player.placeShip(ships.p.destroyer, 94);
        boards.player.placeShip(ships.p.submarine, 67);
        boards.player.placeShip(ships.p.patrol1, 17);
        ships.p.patrol2.changeVertical();
        boards.player.placeShip(ships.p.patrol2, 81);

        // Computer ships
        boards.comp.placeShip(ships.c.carrier, 0);
        ships.c.battleship.changeVertical();
        boards.comp.placeShip(ships.c.battleship, 22);
        boards.comp.placeShip(ships.c.cruiser, 45);
        boards.comp.placeShip(ships.c.destroyer, 94);
        boards.comp.placeShip(ships.c.submarine, 67);
        boards.comp.placeShip(ships.c.patrol1, 17);
        ships.c.patrol2.changeVertical();
        boards.comp.placeShip(ships.c.patrol2, 81);

        publishUpdate();
    }

    reset();

    return { reset, playRound, testShipPlacement };
})();

const testShot = PubSub.subscribe(E.TEST.FIRE, Game.playRound);
