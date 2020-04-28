import React from "react";
import ReactDOM from "react-dom";
import Convert from "./convert.component";
import { cleanup, render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import { theme, Defaults } from "../../../styles";
describe("Convert tests", () => {
  afterEach(cleanup);

  let props = {
    rates: {
      base: "GBP",
      rates: {
        EUR: 12.01,
        GBP: 0.0,
        USD: 10.01,
      },
      date: new Date(),
    },
    active: {
      fromCurrency: "EUR",
      fromValue: 1,
      toCurrency: "GBP",
      toValue: 1,
    },
    balance: {
      EUR: 12.01,
      GBP: 1.0,
      USD: 10.01,
      JPY: 11.0,
      lastExchange: {
        fromCurrency: "GBP",
        fromValue: 1,
        toCurrency: "EUR",
        toValue: 1,
        date: new Date(),
      },
    },
    isLoading: false,
  };

  it("renders the Convert component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Defaults />
          <Convert
            balance={props.balance}
            toValue={props.active.toValue}
            toCurrency={props.active.toCurrency}
            fromCurrency={props.active.fromCurrency}
            fromValue={props.active.fromValue}
            rates={props.rates}
            isFromValue={false}
            handleChange={jest.fn()}
            handleCurrencyChange={jest.fn()}
          />
        </React.Fragment>
      </ThemeProvider>,
      div
    );
  });

  it("has a valid snapshot ", () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Defaults />
          <Convert
            balance={props.balance}
            toValue={props.active.toValue}
            toCurrency={props.active.toCurrency}
            fromCurrency={props.active.fromCurrency}
            fromValue={props.active.fromValue}
            rates={props.rates}
            isFromValue={false}
            handleChange={jest.fn()}
            handleCurrencyChange={jest.fn()}
          />
        </React.Fragment>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
