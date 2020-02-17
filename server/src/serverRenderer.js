import React from "react";
import ReactDOMServer from "react-dom/server";

// import our main App component
import App from "../../src/App";

// react router
import { StaticRouter } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../../src/reducers";

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(process.cwd(), "build", "index.html");

  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("err", err);
      return res.status(404).end();
    }

    const context = {};
    const store = createStore(reducers);

    // render the app as a string
    const html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter url={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    );

    const preloadState = store.getState();

    if (context.url) {
      res.redirect(301, context.url);
    } else {
      // inject the rendered app into our html and send it
      return res.send(
        htmlData
          .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
          .replace(
            "__preloadState__",
            JSON.stringify(preloadState).replace(/</g, "\\u003c")
          )
      );
    }
  });
};
