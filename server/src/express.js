import express from "express";
import bodyParser from "body-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import Template from "../../public/index.html";
import path from "path";

import issueRoutes from "./routes/issue.routes";

const CURRENT_WORKING_DIR = process.cwd();

const app = express();
if (process.env.NODE_ENV === "development") devBundle.compile(app);

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));
// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compress());
// secure apps by setting various HTTP headers
app.use(helmet());
// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount routes
app.use("/", issueRoutes);

app.get("/*", (req, res) => {
  res.status(200).send(Template());
});

// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  }
});

export default app;
