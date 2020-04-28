import { createStore } from "redux";

import ActionTypes from "./current-values.types";
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
  it("should get the correct toValue state when `SET_TO_VALUE` action is dispatched", async () => {
    const store = createStore(rootReducer, INITIAL_STATE);

    const rates = store.getState().rates;
    const toValue = 10;

    const action = {
      type: ActionTypes.SET_TO_VALUE,
      payload: {
        toValue,
        rates,
      },
    };
    store.dispatch(action);

    const actual = store.getState().active;

    expect(actual.active).toEqual({
      fromCurrency: "EUR",
      fromValue: "10.00",
      toCurrency: "GBP",
      toValue: 10,
    });
  });

  it("should get the correct fromCurrency state when `SET_FROM_CURRENCY` action is dispatched", async () => {
    const store = createStore(rootReducer, INITIAL_STATE);

    const rates = store.getState().rates;
    const fromCurrency = "EUR";

    const action = {
      type: ActionTypes.SET_FROM_CURRENCY,
      payload: {
        fromCurrency,
        rates,
      },
    };
    store.dispatch(action);

    const actual = store.getState().active;

    expect(actual.active).toEqual({
      fromCurrency: "EUR",
      fromValue: 0,
      toCurrency: "GBP",
      toValue: 0,
    });
  });

  it("should get the correct toCurrency state when `SET_FROM_CURRENCY` action is dispatched", async () => {
    const store = createStore(rootReducer, INITIAL_STATE);

    const rates = store.getState().rates;
    const toCurrency = "GBP";
    const fromCurrency = "EUR";

    const action = {
      type: ActionTypes.SET_TO_CURRENCY,
      payload: {
        fromCurrency,
        toCurrency,
        rates,
      },
    };
    store.dispatch(action);

    const actual = store.getState().active;

    expect(actual.active).toEqual({
      fromCurrency: "EUR",
      fromValue: 0,
      toCurrency: "GBP",
      toValue: 0,
    });
  });

  it("should get the correct fromValue state when `SET_FROM_VALUE` action is dispatched", async () => {
    const store = createStore(rootReducer, INITIAL_STATE);

    const rates = store.getState().rates;
    const fromValue = 10;

    const action = {
      type: ActionTypes.SET_FROM_VALUE,
      payload: {
        fromValue,
        rates,
      },
    };
    store.dispatch(action);

    const actual = store.getState().active;

    expect(actual.active).toEqual({
      fromCurrency: "EUR",
      fromValue: 10,
      toCurrency: "GBP",
      toValue: "10.00",
    });
  });

  it("should get the correct to and from Currencies state when `EXCHANGE_CURRENCY` action is dispatched", async () => {
    const store = createStore(rootReducer, INITIAL_STATE);


    const action = {
      type: ActionTypes.EXCHANGE_CURRENCY,
    };
    store.dispatch(action);

    const actual = store.getState().active;

    expect(actual.active).toEqual({
      fromCurrency: "GBP",
      fromValue: 0,
      toCurrency: "EUR",
      toValue: 0,
    });
  });
});
