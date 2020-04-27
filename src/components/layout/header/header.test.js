import React from "react";
import ReactDOM from "react-dom";
import Header from "./header.component";
import { cleanup, render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import { theme, Defaults } from "../../../styles";

import { BrowserRouter as Router } from "react-router-dom";

describe("Header tests", () => {
  afterEach(cleanup);

  it("renders the Header component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Defaults />
            <Header />
          </React.Fragment>
        </ThemeProvider>
      </Router>,
      div
    );
  });

  it("has a valid snapshot ", () => {
    const { asFragment } = render(
      <Router>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Defaults />
            <Header />
          </React.Fragment>
        </ThemeProvider>
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
