import BalanceActionTypes from "./balance.types";

import { convert } from "../../utils/convert";

const INITIAL_STATE = {
  balance: {
    EUR: 12.01,
    GBP: 0.0,
    USD: 10.01,
    JPY: 0.0,
    lastExchange: {
      fromCurrency: "GBP",
      fromValue: 0,
      toCurrency: "EUR",
      toValue: 0,
      date: new Date(),
    },
  },
};

const exchange = (state, action) => {
  const { active, rates, balance } = action.payload;
  const { fromValue, fromCurrency, toCurrency } = active.active;
  const newBalance = fromValue * rates.rates.rates[toCurrency];

  const newFrom = balance.balance[fromCurrency] - fromValue;
  const newTo = balance.balance[toCurrency] + newBalance;

  const renderedNewFrom = +convert(newFrom);
  const renderedNewTo = +convert(newTo);

  return {
    ...state,
    balance: {
      ...balance.balance,
      [fromCurrency]: renderedNewFrom,
      [toCurrency]: renderedNewTo,
      lastExchange: {
        fromValue: fromValue,
        toValue: +convert(newBalance),
        fromCurrency: fromCurrency,
        toCurrency: toCurrency,
        date: new Date(),
      },
    },
  };
};

const balanceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BalanceActionTypes.FETCH_BALANCE:
      return exchange(state, action);
    default:
      return state;
  }
};

export default balanceReducer;
