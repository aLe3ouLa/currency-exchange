import RatesActionTypes from "./rates.types";

const INITIAL_STATE = {
  rates: {
    base: "GBP",
    rates: {},
    date: new Date(),
  },
};

const ratesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RatesActionTypes.FETCH_RATES:
      return {
        ...state,
        rates: action.payload,
      };
    default:
      return state;
  }
};

export default ratesReducer;
