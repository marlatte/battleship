export const PubSub = (() => {
    const eventsList = {};
    // { key: "triggerEvent", value: [ array of functions ] }

    function subscribe(triggerEvent, subscriber) {
        if (!eventsList[triggerEvent]) {
            eventsList[triggerEvent] = [subscriber];
        } else {
            eventsList[triggerEvent].push(subscriber);
        }
        return {
            unsubscribe: () => {
                const functionList = eventsList[triggerEvent];
                const i = functionList.indexOf(subscriber);
                if (i > -1) {
                    functionList.splice(i, 1);
                }
            },
        };
    }

    function publish(triggerEvent, ...args) {
        const functionList = eventsList[triggerEvent];
        if (Array.isArray(functionList)) {
            functionList.forEach((subscriber) => {
                subscriber(...args);
            });
        }
    }

    return { subscribe, publish };
})();

export const E = {
    GAME: {
        START: 'StartGame',
        FIRE: 'PlayerFire',
        TOGGLE: 'TogglePlayer',
        COMP_TURN: 'ComputerTurn',
    },
    SCREEN: {
        GRID: 'UpdateGrids',
        CURRENT: 'UpdateCurrentPlayerText',
        UNLOCK: 'UnlockGrid',
    },
    BOARD: {
        ATTACK: 'ReceiveAttack',
        RESET: 'ResetBoards',
        PLACE: 'PlaceShip',
        TURN: 'TurnShip',
        PUB_TO_SCREEN: 'PublishToScreen',
    },
};
