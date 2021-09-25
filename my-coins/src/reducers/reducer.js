import { combineReducers } from 'redux';
import CoinReducer from './coinReducer';

export const reducers = combineReducers({
  coinObject: CoinReducer,
});
