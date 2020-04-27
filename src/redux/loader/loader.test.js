import { createStore } from "redux";

import ActionTypes from "./loader.types";
import rootReducer from "../root-reducer";

describe("Loading", () => {
  const INITIAL_STATE = {
    isLoading: true,
  };
  it("should get the correct loading state when `SET_LOADING` action is dispatched", async () => {
    const store = createStore(rootReducer, INITIAL_STATE);
    const action = {
      type: ActionTypes.SET_LOADING,
      payload: { isLoading: true },
    };
    store.dispatch(action);

    const actual = await store.getState();

    expect(actual.isLoading.isLoading).toEqual(true);
  });
});
