
const createStore = (reducer) => {
    let listeners = [];
    let currentState = reducer(undefined, {});

    return {
        getState: () => currentState,
        dispatch: (action) => {
            currentState = reducer(currentState, action);
            listeners.forEach((listener) => {
                listener();
            });
        },
        subscribe: (listener) => {
            listeners.push(listener);
            const unsubscribe = () => {
                listeners = listeners.filter((l) => l !== listener);
            };
            return unsubscribe;
        },
    };
};
