const INCREMENT = 'app/counter/INCREMENT';
const DECREMENT = 'app/counter/DECREMENT';
const LOADING = 'app/counter/LOADING';
const DONE = 'app/counter/DONE';

const initialState = {
  isLoading: false,
  count: 0,
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case LOADING:
      return { ...state, isLoading: true };
    case DONE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

// Action Creator
export function incrementCounter() {
  return { type: INCREMENT };
}

export function decrementCounter() {
  return { type: DECREMENT };
}

export function loadingCounter() {
  return { type: LOADING };
}

export function doneCounter() {
  return { type: DONE };
}

// Thunk
export function delayedIncrementCounter() {
  return async dispatch => {
    dispatch(loadingCounter());
    const promise = new Promise(resolve => setTimeout(resolve, 500));
    await promise;
    dispatch(incrementCounter());
    dispatch(doneCounter());
  };
}
