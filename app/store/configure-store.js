import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

import reduxThunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';

const enhancer = compose(
  applyMiddleware(reduxThunkMiddleware, createLogger())
);

export default function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
}
