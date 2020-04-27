import React from "react";
import ReactDOM from "react-dom";
import FormInput from "./form-input.component";

import { cleanup, render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme, Defaults } from "../../../styles";

describe("Form Input", () => {
  afterEach(cleanup);
  const props = {
    name: "value",
    value: "",
    onChange: jest.fn(),
    disabled: false,
    isFromValue: true,
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Defaults />
          <FormInput {...props} />
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
          <FormInput {...props} />
        </React.Fragment>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should call handleChange method when input changes", () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Defaults />
          <FormInput {...props} onChange={handleChange} />
        </React.Fragment>
      </ThemeProvider>
    );

    fireEvent.change(getByLabelText("form-input"), {
      target: { value: 1 },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should not accept type other than number", () => {
    let value;
    const handleChange = (ev) => {
      ev.preventDefault();
      value = ev.target.value;
    };
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Defaults />
          <FormInput {...props} onChange={handleChange} />
        </React.Fragment>
      </ThemeProvider>
    );

    fireEvent.change(getByLabelText("form-input"), {
      target: { value: "a" },
    });

    expect(value).toBe(undefined); //default value
  });

  it("should not accept type other than number", () => {
    let value;
    const handleChange = (ev) => {
      ev.preventDefault();
      value = ev.target.value;
    };
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Defaults />
          <FormInput {...props} onChange={handleChange} />
        </React.Fragment>
      </ThemeProvider>
    );

    const input = getByLabelText("form-input");

    fireEvent.change(input, { target: { value: "23.0" } });
    expect(value).toBe("23.0");
  });
});
