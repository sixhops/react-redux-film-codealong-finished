import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

// Create an initial state
import TMDB from '../TMDB';
const films = TMDB.films
const initialState = {
  films,
  faves: [],
  current: {},
  isFetching: false,
  hasErrored: false
}

const store = createStore(rootReducer, /* Our reducers */
                          initialState, /* Initial State is needed when using the third parameter below */
                          applyMiddleware(thunk), /* Optional parameter for middleware */
                          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// The last parameter above is for linking up with the Redux DevTools for Chrome

export default store;
