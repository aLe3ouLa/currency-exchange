import BalanceActionTypes from "./balance.types";

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

  const newFrom = (balance.balance[fromCurrency] - fromValue).toFixed(2);
  const newTo = (balance.balance[toCurrency] + newBalance).toFixed(2);

  return {
    ...state,
    balance: {
      ...balance.balance,
      [fromCurrency]: newFrom,
      [toCurrency]: newTo,
      lastExchange: {
        fromValue: fromValue,
        toValue: newBalance.toFixed(2),
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
