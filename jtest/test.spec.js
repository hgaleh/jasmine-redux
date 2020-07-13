import { createStore } from 'redux'

function counter(state = 0, action) {
  switch (action.type) {
      case 'INCREMENT':
      return state + 1
      case 'DECREMENT':
      return state - 1
      default:
      return state
  }
}

let store;

describe('actions', () => {
  beforeEach(() => {
    store = createStore(counter);
  });

  it('simple test increment', () => {
    store.dispatch({type: 'INCREMENT'});
    expect(store.getState()).toBe(1);
  });

  it('simple test decrement', () => {
    store.dispatch({type: 'DECREMENT'});
    expect(store.getState()).toBe(-1);
  });

  it('current state is zero', () => {
    store.dispatch({type: 'ALAKI'});
    expect(store.getState()).toBe(0);
  });
})