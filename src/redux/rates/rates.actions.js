import RatesActionTypes from "./rates.types";

import rates from "../../apis/rates";

export const fetchRates = (currency) => async (dispatch) => {
  const curr = currency === undefined ? "GBP" : currency;
  const response = await rates.get(`/latest?base=${curr}`);
  dispatch({
    type: RatesActionTypes.FETCH_RATES,
    payload: response.data,
  });
};
