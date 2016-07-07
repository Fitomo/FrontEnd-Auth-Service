const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, 'src/index.js'),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]___[local]___[hash:base64:5]!postcss',
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file?name=[path][name].[hash].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        FILE_REQUEST_SERVER: JSON.stringify(process.env.FILE_REQUEST_SERVER),
      },
    }),
  ],
  postcss: (webpack) => [
    require('postcss-import')({ addDependencyTo: webpack }),
    require('postcss-font-magician')(),
    require('postcss-url')(),
    require('postcss-for')(),
    require('postcss-cssnext')(),
    require('postcss-simple-vars')(),
    require('postcss-browser-reporter')(),
    require('postcss-reporter')({ clearMessages: true }),
  ],
};