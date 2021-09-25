import { SAVE_COIN, GET_SINGLE_COIN, UPDATE_SORT_VALUE } from '../actions/CoinAction';
import { coinsData } from '../data/myCoinsData';

export const INITIAL_STATE = {
  coinList: coinsData,
  selectedCoin: {},
  sortBy: 'Name',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_COIN:
      return {
        ...state,
        coinList: [...coinsData, action.payload],
        selectedCoin: action.payload,
      };
    case GET_SINGLE_COIN:
      return {
        ...state,
        selectedCoin: action.payload,
      };
    case UPDATE_SORT_VALUE:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};
