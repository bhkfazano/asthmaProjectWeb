import { combineReducers } from 'redux';

import viewReducer from './lib/viewReducer'
import userReducer from './lib/userReducer'
import pacientReducer from './lib/pacientReducer'

const initialState = {
  currentUser: {},
  pacients: [],
  currentView: "home"
};

const appReducer = combineReducers({
  currentView: viewReducer,
  currentUser: userReducer,
  pacients: pacientReducer
})

const rootReducer = (state = initialState, action) => {
  return appReducer(state, action);
}

export default rootReducer;
