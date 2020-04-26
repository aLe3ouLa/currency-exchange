import CurrentActionTypes from "./current-values.types";

const INITIAL_STATE = {
  active: {
    fromCurrency: "GBP",
    fromValue: 0,
    toCurrency: "EUR",
    toValue: 0,
  },
};

const setFromValue = (state, action) => {
  const { toCurrency, fromCurrency } = state.active;
  const { fromValue, rates } = action.payload;
  const toValue = fromValue * rates.rates.rates[toCurrency];

  return {
    ...state,
    active: {
      fromValue: +fromValue,
      toValue: toValue,
      toCurrency: toCurrency,
      fromCurrency: fromCurrency,
    },
  };
};

const setToValue = (state, action) => {
  const { toValue, rates } = action.payload;
  const { toCurrency, fromCurrency } = state.active;
  const fromValue = toValue / rates.rates.rates[toCurrency];

  return {
    ...state,
    active: {
      fromValue: fromValue,
      toValue: toValue,
      toCurrency: toCurrency,
      fromCurrency: fromCurrency,
    },
  };
};

const setFromCurrency = (state, action) => {
  const { fromValue } = state.active;
  const { fromCurrency, rates } = action.payload;
  const toCurrency =
    state.active.toCurrency === fromCurrency
      ? state.active.fromCurrency
      : state.active.toCurrency;

  const toValue = fromValue * rates.rates.rates[toCurrency];

  return {
    ...state,
    active: {
      fromValue: fromValue,
      toValue: toValue,
      toCurrency: toCurrency,
      fromCurrency: fromCurrency,
    },
  };
};

const setToCurrency = (state, action) => {
  const { fromValue } = state.active;
  const { toCurrency, fromCurrency, rates } = action.payload;
  const toValue = fromValue * rates.rates.rates[toCurrency];

  return {
    ...state,
    active: {
      fromValue: fromValue,
      toValue: toValue,
      toCurrency: toCurrency,
      fromCurrency: fromCurrency,
    },
  };
};

const changeFromTo = (state, action) => {
  const { active } = state;
  const { fromValue, fromCurrency, toValue, toCurrency } = active;

  return {
    ...state,
    active: {
      fromValue: toValue,
      toValue: fromValue,
      toCurrency: fromCurrency,
      fromCurrency: toCurrency,
    },
  };
};

export default function currentValuesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CurrentActionTypes.SET_FROM_VALUE:
      return setFromValue(state, action);
    case CurrentActionTypes.SET_TO_VALUE:
      return setToValue(state, action);
    case CurrentActionTypes.SET_FROM_CURRENCY:
      return setFromCurrency(state, action);
    case CurrentActionTypes.SET_TO_CURRENCY:
      return setToCurrency(state, action);
    case CurrentActionTypes.EXCHANGE_CURRENCY:
      return changeFromTo(state, action);
    default:
      return state;
  }
}
