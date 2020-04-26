import BalanceActionTypes from "./balance.types";
import { setToValue, setFromValue } from "../current/current-values.actions";

export const exchange = () => async (dispatch, getState) => {
  const active = getState().active;
  const balance = getState().balance;
  const rates = getState().rates;
  dispatch({
    type: BalanceActionTypes.FETCH_BALANCE,
    payload: { balance, active, rates },
  });

  dispatch(setToValue(0));
  dispatch(setFromValue(0));
};
