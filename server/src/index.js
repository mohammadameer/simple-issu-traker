import config from "./config/config";
import app from "./express";
import mongoose from "mongoose";

import "regenerator-runtime/runtime";

// Connection URL
mongoose.connect(config.mongoUri);
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

app.listen(config.port, err => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
