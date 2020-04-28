import React from "react";
import ReactDOM from "react-dom";
import LastExchange from "./last-exchange.components";
import { cleanup, render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import { theme, Defaults } from "../../../styles";

describe("Last exchange tests", () => {
  afterEach(cleanup);

  const props = {
    lastExchange: {
      fromCurrency: "GBP",
      fromValue: 0,
      toCurrency: "EUR",
      toValue: 0,
    },
  };

  it("renders the Balance component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Defaults />
          <LastExchange {...props} />
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
          <LastExchange {...props} />
        </React.Fragment>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
