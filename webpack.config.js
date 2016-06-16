var webpack = require('webpack');


var config = {
  context: __dirname + '/client',
  entry: "./index.js",

  output: {
    filename: "bundle.js",
    path: __dirname + "/public",
  },
  module: {
    loaders: [
      {
        test: /.js$|.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ],
  }
};

module.exports = config;
