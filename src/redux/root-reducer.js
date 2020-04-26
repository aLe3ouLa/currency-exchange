import { combineReducers } from "redux";

import ratesReducer from "./rates/rates.reducer";
import currentValuesReducer from "./current/current-values.reducer";
import balanceReducer from "./balance/balance.reducer";

export default combineReducers({
  rates: ratesReducer,
  active: currentValuesReducer,
  balance: balanceReducer,
});
