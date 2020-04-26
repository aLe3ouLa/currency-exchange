import RatesActionTypes from "./rates.types";

import rates from "../../apis/rates";
import { setLoading } from "../loader/loader.actions";

export const fetchRates = (currency) => async (dispatch, getState) => {
  const { active } = getState().active;
  const curr = currency === undefined ? active.fromCurrency : currency;
  dispatch(setLoading(true));

  const response = await rates.get(`/latest?base=${curr}`);

  dispatch(setLoading(false));

  return dispatch({
    type: RatesActionTypes.FETCH_RATES,
    payload: response.data,
  });
};
