import { combineReducers } from 'redux';
import resetReducer from './resetReducer';

const rootReducer = combineReducers({
  resetReducer,
});

export default rootReducer;
