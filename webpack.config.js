const config = {
  context: __dirname + '/src',
  entry: './index.jsx',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
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
      },
      {
        loader: 'jade-loader',
        test: /\.jade$/
      }
    ],
  }
};

module.exports = config;
