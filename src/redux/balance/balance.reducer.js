import BalanceActionTypes from "./balance.types";

const INITIAL_STATE = {
  balance: {
    EUR: 12.01,
    GBP: 0,
    USD: 10.01,
    lastExchange: {},
  },
};

const exchange = (state, action) => {
  const { active, rates, balance } = action.payload;
  const { fromValue, fromCurrency, toCurrency } = active.active;
  const newBalance = fromValue * rates.rates.rates[toCurrency];

  const newFrom = balance.balance[fromCurrency] - fromValue;
  const newTo = balance.balance[toCurrency] + newBalance;

  return {
    ...state,
    balance: {
      ...balance.balance,
      [fromCurrency]: newFrom,
      [toCurrency]: newTo,
      lastExchange: {
        fromValue: fromValue,
        toValue: newBalance,
        fromCurrency: fromCurrency,
        toCurrency: toCurrency,
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
