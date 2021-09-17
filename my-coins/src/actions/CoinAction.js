import { coinsData } from "../data/myCoinsData";
/** Action Types */
export const UPDATE_FILTER_STATUS = "update-filter-status";
export const RESET_FILTER_STATUS = "reset-filter-status";

export const SAVE_COIN = "save-coin";
export const GET_SINGLE_COIN = "get-singl-coin";
export const UPDATE_SORT_VALUE = "update-sort-value";
export const DELETE_COIN = "delete-coin";

export const updateSortValue = (data,callBack)=>{
  return (dispatch) => {
    dispatch(updateSortValueData(data));
    callBack && callBack();
  };
}

export const saveCoin = (data, callBack) => {
  return (dispatch) => {
    dispatch(updateSeledctedCoin(data));
    callBack && callBack();
  };
};

export const getSingleCoin = (name,callBack) => {
    let SingleCoin = coinsData.filter(function (coin) {
        return coin.Name === name;
    });
  return (dispatch) => {
    dispatch(getSingleCoinData(SingleCoin));
    callBack && callBack();
  };
};
export const removeCoin = (name,callBack) => {
    let NewCoinList = coinsData.filter(function (coin) {
        return coin.Name !== name;
    });
  return (dispatch) => {
    dispatch(deleteCoinData(NewCoinList));
    callBack && callBack();
  };
};

export const updateSortValueData = (data)=>{
  return {
    type: UPDATE_SORT_VALUE,
    payload: data,
  };
}

export const updateSeledctedCoin = (data) => {
  return {
    type: SAVE_COIN,
    payload: data,
  };
};

export const getSingleCoinData = (data) => {
  return {
    type: GET_SINGLE_COIN,
    payload:data[0]
  };
};
export const deleteCoinData = (data) => {
    return {
      type: DELETE_COIN,
      payload:data
    };
  };
