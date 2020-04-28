import React from "react";
import ReactDOM from "react-dom";
import Exchange from "./index";
import { Provider } from "react-redux";
import { cleanup, render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import { theme, Defaults } from "../../../styles";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

describe("Exchange Page tests", () => {
  afterEach(cleanup);

  let store;
  beforeEach(() => {
    store = mockStore({
      rates: {
        rates: {
          base: "GBP",
          rates: {},
          date: new Date(),
        },
      },
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
      isLoading: false,
    });
  });

  it("renders the Rate page component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <Defaults />
              <Exchange />
            </React.Fragment>
          </ThemeProvider>
        </Router>
      </Provider>,
      div
    );
  });

  it("has a valid snapshot ", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <Defaults />
              <Exchange />
            </React.Fragment>
          </ThemeProvider>
        </Router>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
