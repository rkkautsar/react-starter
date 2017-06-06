import test from 'ava';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, {
  incrementCounter,
  decrementCounter,
  loadingCounter,
  doneCounter,
  delayedIncrementCounter,
} from './index';

test('increment', t => {
  const initialState = {
    count: 0,
  };

  const expected = {
    count: 1,
  };

  const actual = reducer(initialState, incrementCounter());

  t.deepEqual(expected, actual);
});

test('decrement', t => {
  const initialState = {
    count: 0,
  };

  const expected = {
    count: -1,
  };

  const actual = reducer(initialState, decrementCounter());

  t.deepEqual(expected, actual);
});

test('delayed increment', t => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({ count: 0, loading: 0 });
  const expectedActions = [loadingCounter(), incrementCounter(), doneCounter()];
  return new Promise(resolve =>
    store.dispatch(delayedIncrementCounter()).then(() => {
      t.deepEqual(store.getActions(), expectedActions);
      resolve();
    })
  );
});
