import React from "react";
import ReactDOM from "react-dom";
import Button from "./button.component";
import { cleanup, render, fireEvent } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import { theme, Defaults } from "../../../styles";

describe("Button tests", () => {
  afterEach(cleanup);

  const props = {
    isDisabled: false,
    onClick: jest.fn(),
    children: "Click me",
  };

  it("renders the Button component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Defaults />
          <Button {...props} />
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
          <Button {...props} />
        </React.Fragment>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("fires click successfully", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Defaults />
          <Button {...props} />
        </React.Fragment>
      </ThemeProvider>
    );
    fireEvent.click(getByText(/Click me/i));
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it("disables button successully", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Defaults />
          <Button {...props} isDisabled={true} />
        </React.Fragment>
      </ThemeProvider>
    );

    expect(getByText(/Click me/i)).toBeDisabled();
  });
});
