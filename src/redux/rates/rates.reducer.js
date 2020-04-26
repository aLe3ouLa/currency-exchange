import RatesActionTypes from "./rates.types";

const INITIAL_STATE = {
  rates: {
    base: "GBP",
    rates: {},
    date: new Date(),
  },
  isLoading: true,
};

const ratesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RatesActionTypes.FETCH_RATES:
      return {
        ...state,
        rates: action.payload,
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
};

export default ratesReducer;
