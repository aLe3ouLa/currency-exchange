import { createStore } from "redux";
import rates from "../../apis/rates";
import ActionTypes from "./rates.types";
import rootReducer from "../root-reducer";

describe("Loading", () => {
  const INITIAL_STATE = {
    rates: {
      base: "GBP",
      rates: {},
      date: new Date(),
    },
  };
  it("should get the correct rates state for base EUR  when `FETCH_RATES` action is dispatched", async () => {
    const store = createStore(rootReducer, INITIAL_STATE);

    const response = await rates.get(`/latest?base=EUR`);
    const action = {
      type: ActionTypes.FETCH_RATES,
      payload: response.data,
    };
    store.dispatch(action);

    const actual = await store.getState();

    expect(actual.isLoading.isLoading).toEqual(true);
    expect(actual.rates.rates).toEqual(response.data);
  });
});
