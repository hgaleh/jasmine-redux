import {createStore} from 'redux';

function hungry(state = false, action) {
    if (action.type === 'EAT') {
        return state = false;
    } else {
        return state = true;
    }
}

let store;

describe('test hungry', () => {
    beforeEach(() => {
        store = createStore(hungry);
    });

    it('when eat', () => {
        store.dispatch({type: 'EAT'})
        expect(store.getState()).toBe(false);
    });

    it('when not eat', () => {
        store.dispatch({type: 'NOTEAT'})
        expect(store.getState()).toBe(true);
    });
});