const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CURRENT_WORKING_DIR = process.cwd();

const config = {
  name: "server",
  entry: [path.join(CURRENT_WORKING_DIR, "./server/src/index.js")],
  target: "node",
  output: {
    path: path.join(CURRENT_WORKING_DIR, "/build/"),
    filename: "server.generated.js",
    publicPath: "/build/",
    libraryTarget: "commonjs2"
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
        use: "file-loader"
      },
      {
        test: /\.html$/i,
        loader: "html-loader"
      }
    ]
  }
};

module.exports = config;
