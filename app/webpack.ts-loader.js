var webpack = require("webpack");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    main: "./index.ts"
  },
  output: {
    filename: "index.bundle.js",
    publicPath: "./",
    libraryTarget: "amd"
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};
