import { combineReducers } from 'redux';

// reducers
import hotels from './hotels';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  hotels,
  filters: filterReducer
});

export default rootReducer;
