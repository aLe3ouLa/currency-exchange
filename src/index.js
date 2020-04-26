import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme, Defaults } from "./styles";

import App from "./App";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Defaults />
          <App />
        </React.Fragment>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
