import React from "react";
import ReactDOM from "react-dom";
import Balance from "./balance.component";
import { cleanup, render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import { theme, Defaults } from "../../../styles";

describe("Balance tests", () => {
  afterEach(cleanup);

  const props = {
    balance: {
      EUR: 5,
    },
    currency: "EUR",
  };

  it("renders the Balance component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Defaults />
          <Balance {...props} />
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
          <Balance {...props} />
        </React.Fragment>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct output text for props ", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Defaults />
          <Balance {...props} />
        </React.Fragment>
      </ThemeProvider>
    );

    expect(getByText("Balance: € 5")).toBeInTheDocument();
  });
});
