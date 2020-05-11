import { combineReducers } from 'redux';
import site from './site_reducer';

const rootReducer = combineReducers({
  site,
});

export default rootReducer;
