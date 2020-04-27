import { createStore } from "redux";

import ActionTypes from "./balance.types";
import rootReducer from "../root-reducer";

describe("Loading", () => {
  const INITIAL_STATE = {
    active: {
      active: {
        fromCurrency: "EUR",
        fromValue: 0,
        toCurrency: "GBP",
        toValue: 0,
      },
    },
    balance: {
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
    },
    rates: {
      rates: {
        base: "EUR",
        rates: {
          GBP: 1,
        },
        date: new Date(),
      },
    },
  };
  it("should get the correct loading state when `SET_LOADING` action is dispatched", async () => {
    const store = createStore(rootReducer, INITIAL_STATE);

    const active = store.getState().active;
    const balance = store.getState().balance;
    const rates = store.getState().rates;

    const action = {
      type: ActionTypes.FETCH_BALANCE,
      payload: { balance, active, rates },
    };
    store.dispatch(action);

    const actual = store.getState().balance;

    expect(actual.balance.EUR).toEqual("12.01");
  });
});
