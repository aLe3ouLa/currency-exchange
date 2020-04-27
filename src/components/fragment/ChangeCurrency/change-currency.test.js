import React from "react";
import ChangeCurrency from "./change-currency.component";
import { cleanup, render, fireEvent } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import { theme, Defaults } from "../../../styles";

describe("Change Currency tests", () => {
  afterEach(cleanup);

  it("has a valid snapshot ", () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Defaults />
          <ChangeCurrency />
        </React.Fragment>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("fires click successfully", () => {
    const handler = jest.fn();
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Defaults />
          <ChangeCurrency id="test" handeExchangeCurrencies={handler} />
        </React.Fragment>
      </ThemeProvider>
    );
    fireEvent.click(getByRole("button"));
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
