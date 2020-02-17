import express from "express";
import bodyParser from "body-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import path from "path";

// ssr
import serverRenderer from "./serverRenderer";

// routes
import issueRoutes from "./routes/issue.routes";

const app = express();

app.use(express.static(path.resolve(process.cwd(), "build")));

app.use(express.static(path.resolve(process.cwd(), "build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compress());
app.use(helmet());
app.use(cors());

app.use("/api", issueRoutes);

app.get("*", serverRenderer);

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  }
});

export default app;
