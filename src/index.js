import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// redux
import { Provider } from "react-redux";
import store from "./store";

// mock server
import mockServer from "./mock/server";

mockServer();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
