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

    return {
        toggle,
        chooseFrom,
        humanTurn: () => human,
    };
})();

export const test = '';
