import React from "react";
import Currencies from "./currencies.component";
import { cleanup, render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import { theme, Defaults } from "../../../styles";

describe("Change Currency tests", () => {
  afterEach(cleanup);

  const props = {
    name: "select",
    value: "EUR",
    onChange: jest.fn(),
    isDisabled: false,
  };

  it("has a valid snapshot ", () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Defaults />
          <Currencies {...props} />
        </React.Fragment>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
