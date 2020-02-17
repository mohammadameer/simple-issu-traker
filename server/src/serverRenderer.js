import React from "react";
import ReactDOMServer from "react-dom/server";

// import our main App component
import App from "../../src/App";

// react router
import { StaticRouter } from "react-router-dom";

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

    // render the app as a string
    const html = ReactDOMServer.renderToString(
      <StaticRouter url={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.redirect(301, context.url);
    } else {
      // inject the rendered app into our html and send it
      return res.send(
        htmlData.replace(
          '<div id="root"></div>',
          `<div id="root">${html}</div>`
        )
      );
    }
  });
};
