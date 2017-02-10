const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    stratosphere: 'main.js',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.s?css$/,
      use: ExtractTextPlugin.extract({
        use: [
          {loader: "css-loader", options: {minimize: true}},
          {loader: "sass-loader"},
        ]
      }),
    }],
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/,
  },
  devServer: {
    contentBase: [path.join(__dirname, 'lib'), path.join(__dirname, 'test')],
    compress: true,
    port: 9000,
  },
};
