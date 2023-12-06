import { BoardFactory, ShipFactory } from './board';

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

    function showPlayerLocations() {
        console.log('Player Locations;');
        console.log(player.getGridShips());
    }

    function showCompLocations() {
        console.log('Computer Locations;');
        console.log(comp.getGridShips());
    }

    function showPlayerAttacks() {
        console.log('Player Attacks;');
        console.log(comp.getGridAttacks());
    }

    function showCompAttacks() {
        console.log('Computer Attacks;');
        console.log(player.getGridAttacks());
    }

    function playRound(coord) {
        showPlayerLocations();
        showCompLocations();

        if (Player.isHumanTurn()) {
            comp.receiveAttack(coord);
        } else {
            player.receiveAttack(coord);
        }

        showPlayerAttacks();
        showCompAttacks();
    }

    function reset() {
        console.log('---------- \n New Game \n----------');

        Player.reset();
        player = BoardFactory();
        comp = BoardFactory();

        // Temporary!!!
        player.placeShip(playerShips[0], 0);
        comp.placeShip(compShips[4], 3);
    }

    reset();

    return { reset, playRound };
})();
