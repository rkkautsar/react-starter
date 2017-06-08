import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import history from '../common/routing';
import rootReducer from '../redux_modules';

const enhancer = applyMiddleware(routerMiddleware(history), thunk);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
