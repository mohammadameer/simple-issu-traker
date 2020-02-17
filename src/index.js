import React from "react";
import { hydrate } from "react-dom";
import "./index.css";
import App from "./App";

// redux
import { Provider } from "react-redux";
import { createStore } from "redux";

// material-ui
import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";

// react router
import { BrowserRouter } from "react-router-dom";

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = createStore(preloadedState);

hydrate(
  <Provider store={store}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
