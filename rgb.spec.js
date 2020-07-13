const { createStore } = require("redux");

function rgb(state = {red: false, green: false, blue: false}, action) {
    switch (action.type) {
        case 'GREEN':
            return {...state, green: !state.green};
        case 'BLUE':
            return {...state, blue: !state.blue};
        case 'RED':
            return {...state, red: !state.red};
        default:
            return state;
    }
}

let store;
describe('rgb state test', () => {
    beforeEach(() => {
        store = createStore(rgb);
    });

    it('red action', () => {
        store.dispatch({type: 'RED'});
        expect(store.getState().red).toBe(true);
        store.dispatch({type: 'RED'});
        expect(store.getState().red).toBe(false);
        expect(store.getState().green).toBe(false);
        expect(store.getState().blue).toBe(false);
    });

    it('blue action', () => {
        store.dispatch({type: 'BLUE'});
        expect(store.getState().blue).toBe(true);
        store.dispatch({type: 'BLUE'});
        expect(store.getState().blue).toBe(false);
        expect(store.getState().red).toBe(false);
        expect(store.getState().green).toBe(false);
    });

    it('green action', () => {
        store.dispatch({type: 'GREEN'});
        expect(store.getState().green).toBe(true);
        store.dispatch({type: 'GREEN'});
        expect(store.getState().green).toBe(false);
        expect(store.getState().blue).toBe(false);
        expect(store.getState().red).toBe(false);
    });
});