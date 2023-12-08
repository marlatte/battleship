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
        AFLOAT: 'CheckShipsAfloat',
        COMP_TURN: 'ComputerTurn',
        FIRE: 'PlayerFire',
        START: 'StartGame',
        TOGGLE: 'TogglePlayer',
    },
    SCREEN: {
        AFLOAT: 'UpdateShipsAfloat',
        CURRENT: 'UpdateCurrentPlayerText',
        GRID: 'UpdateGrids',
        UNLOCK: 'UnlockGrid',
        OVER: 'GameOver',
    },
    BOARD: {
        ATTACK: 'ReceiveAttack',
        PLACE: 'PlaceShip',
        PUB_TO_SCREEN: 'PublishToScreen',
        RESET: 'ResetBoards',
        TURN: 'TurnShip',
    },
};
