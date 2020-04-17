import { combineReducers } from 'redux';

import viewReducer from './lib/viewReducer'

const initialState = {
  currentUser: {},
  pacients: [],
  currentView: "home"
};

const appReducer = combineReducers({
  currentView: viewReducer
  //currentUser: UserReducer,
  //pacients: PacientsReducer
})

const rootReducer = (state = initialState, action) => {
  return appReducer(state, action);
}

export default rootReducer;
