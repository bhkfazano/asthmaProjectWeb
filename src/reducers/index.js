import { combineReducers } from 'redux';

import viewReducer from './lib/viewReducer'
import userReducer from './lib/userReducer'
import patientReducer from './lib/patientReducer'
import currentPatientReducer from './lib/currentPatientReducer'
import teamReducer from './lib/teamReducer'

const initialState = {
  currentUser: JSON.parse(sessionStorage.getItem('userData')) || {},
  patients: JSON.parse(sessionStorage.getItem('patients')) || [],
  currentView: sessionStorage.getItem('view') || "home",
  team: []
};

const appReducer = combineReducers({
  currentView: viewReducer,
  currentUser: userReducer,
  patients: patientReducer,
  team: teamReducer,
  currentPatient: currentPatientReducer
})

const rootReducer = (state = initialState, action) => {
  return appReducer(state, action);
}

export default rootReducer;
