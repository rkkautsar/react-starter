import test from 'ava';
import reducer from './index';
import { incrementCounter } from './counter';

test('reducer', t => {
  const initialState = {
    counter: {
      count: 0,
    },
    router: {
      location: null,
    },
  };

  const expected = {
    counter: {
      count: 1,
    },
    router: {
      location: null,
    },
  };

  const actual = reducer(initialState, incrementCounter());

  t.deepEqual(expected, actual);
});
