import React from "./node_modules/react";
import ReactDOM from "./node_modules/react-dom";
import Actions from "./actions.components";
import { cleanup, render } from "./node_modules/@testing-library/react";

import { ThemeProvider } from "./node_modules/styled-components";
import { theme, Defaults } from "../../../styles";
import { BrowserRouter as Router } from "react-router-dom";

describe("Actions tests", () => {
  afterEach(cleanup);

  it("renders the Actions component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Defaults />
            <Actions />
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
            <Actions />
          </React.Fragment>
        </ThemeProvider>
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
