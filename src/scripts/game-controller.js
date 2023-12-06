/* eslint-disable no-unused-vars */
import { BoardFactory, ShipFactory } from './board';
import { E, PubSub } from './pubsub';

export const Player = (() => {
    let human = true;

    const toggle = () => {
        human = !human;
    };

    const chooseFrom = (grid) => {
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
        chooseFrom,
        reset,
        isHumanTurn: () => human,
    };
})();

export const Game = (() => {
    let player;
    let comp;

    const playerShips = [
        ShipFactory('carrier', 5),
        ShipFactory('battleship', 4),
        ShipFactory('destroyer', 3),
        ShipFactory('submarine', 3),
        ShipFactory('patrol 1', 2),
        ShipFactory('patrol 2', 2),
    ];
    const compShips = [
        ShipFactory('carrier', 5),
        ShipFactory('battleship', 4),
        ShipFactory('destroyer', 3),
        ShipFactory('submarine', 3),
        ShipFactory('patrol 1', 2),
        ShipFactory('patrol 2', 2),
    ];

    function publishUpdate() {
        PubSub.publish(
            E.TEST.UPDATE,
            player.getGridShips(),
            player.getGridAttacks(),
            comp.getGridAttacks()
        );
    }

    function playRound(coord) {
        if (Player.isHumanTurn()) {
            comp.receiveAttack(coord);
        } else {
            player.receiveAttack(coord);
        }

        publishUpdate();
    }

    function reset() {
        console.log('---------- \n New Game \n----------');

        Player.reset();
        player = BoardFactory();
        comp = BoardFactory();
    }

    // Temporary!!!
    function testShipPlacement() {
        reset();
        player.placeShip(playerShips[0], 0);
        comp.placeShip(compShips[4], 3);

        publishUpdate();
    }

    reset();

    return { reset, playRound, testShipPlacement };
})();

const testShot = PubSub.subscribe(E.TEST.FIRE, Game.playRound);
