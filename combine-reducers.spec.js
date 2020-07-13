const { combineReducers, createStore } = require("redux");

function contacts(state = [], action) {
    switch(action.type) {
        case 'ADD_CONTACT':
            return [...state, {name: action.name, phoneNumber: action.phoneNumber}];
        case 'REMOVE':
            return state.filter(x => x.name !== action.name);
        default:
            return state;
    }
}

function enabled(state = true, action) {
    switch(action.type) {
        case 'TOGGLE':
            return !state;
        default:
            return state;
    }
}

const combinedReducers = combineReducers({
    contacts,
    enabled
});

let store;
describe('combine contact and enabling them', () => {
    beforeEach(() => {
        store = createStore(combinedReducers);
    });

    it('default state', () => {
        const defaultState = store.getState();
        expect(defaultState.contacts.length).toBe(0);    
        expect(defaultState.enabled).toBe(true);    
    });

    it('add new contact', () => {
        store.dispatch({type: 'ADD_CONTACT', name: 'Ali', phoneNumber: 1236});
        const state = store.getState();
        expect(state.contacts[0].name).toBe('Ali');
        expect(state.contacts[0].phoneNumber).toBe(1236);
    });

    it('remove contact', () => {
        store.dispatch({type: 'ADD_CONTACT', name: 'Ali', phoneNumber: 1236});
        store.dispatch({type: 'REMOVE', name: 'Ali'});
        const state = store.getState();
        expect(state.contacts.length).toBe(0);
    });
});