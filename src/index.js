import React from "react";
import { hydrate } from "react-dom";
import "./index.css";
import App from "./App";

// redux
import { Provider } from "react-redux";
import store from "./store";

// react router
import { BrowserRouter } from "react-router-dom";

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
