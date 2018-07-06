const path = require('path');
const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");


module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  externals: [nodeExternals()],
  mode: 'development',
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: 'src/handler.js',
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: __dirname
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
    ],
  },
};
