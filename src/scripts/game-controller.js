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

export const newGame = () => {
    Player.reset();
    // console.log('---------- \n New Game \n----------');

    const player = BoardFactory();
    // const computer = BoardFactory();

    const shipTypes = [
        ShipFactory('carrier', 5),
        ShipFactory('battleship', 4),
        ShipFactory('destroyer', 3),
        ShipFactory('submarine', 3),
        ShipFactory('patrol 1', 2),
        ShipFactory('patrol 2', 2),
    ];

    player.placeShip(shipTypes[0], 0);
    player.getGridShips();
};
