import { createStore, combineReducers } from 'redux';
import userReducer from './redusers/user';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
