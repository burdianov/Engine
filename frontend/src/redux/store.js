import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducer';

const reducers = combineReducers({
  auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

// for debugging purpose
window.store = store;

export default store;
