import { combineReducers } from 'redux';
import reducer from './quotes';

const rootReducer = combineReducers({
  quotes: reducer,
});

export default rootReducer