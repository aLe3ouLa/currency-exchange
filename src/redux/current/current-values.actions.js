import CurrentActionTypes from "./current-values.types";
import { fetchRates } from "../rates/rates.actions";

export const setFromValue = (fromValue) => (dispatch, getState) => {
  const rates = getState().rates;
  return dispatch({
    type: CurrentActionTypes.SET_FROM_VALUE,
    payload: {
      fromValue,
      rates,
    },
  });
};

export const setToValue = (toValue) => (dispatch, getState) => {
  const rates = getState().rates;
  return dispatch({
    type: CurrentActionTypes.SET_TO_VALUE,
    payload: {
      toValue,
      rates,
    },
  });
};

export const setFromCurrency = (fromCurrency) => (dispatch, getState) => {
  return dispatch(fetchRates(fromCurrency)).then(() => {
    const rates = getState().rates;

    return dispatch({
      type: CurrentActionTypes.SET_FROM_CURRENCY,
      payload: {
        fromCurrency,
        rates,
      },
    });
  });
};

export const setToCurrency = (toCurrency) => (dispatch, getState) => {
  const active = getState().active;
  const fromCurrency =
    active.fromCurrency === toCurrency
      ? active.active.toCurrency
      : active.active.fromCurrency;

  return dispatch(fetchRates(fromCurrency)).then(() => {
    const rates = getState().rates;

    return dispatch({
      type: CurrentActionTypes.SET_TO_CURRENCY,
      payload: { fromCurrency, toCurrency, rates },
    });
  });
};
