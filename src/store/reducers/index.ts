import { combineReducers } from 'redux';

import launchesReducer from './launches.reducer';

const reducers = combineReducers({
  launches: launchesReducer,
});

export default reducers;
