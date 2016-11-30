var path = require('path');
var webpack = require('webpack');

module.exports = {

  devtool: 'eval',
  debug: true,
  cache: true,
  verbose: true,
  displayErrorDetails: true,
  stats: {
    colors: true,
    reasons: true
  },

  // our Development Server config
  devServer: {
    inline: true,
    colors: true,
    hot: true,
    historyApiFallback: true,
  },

   // Config for our build files
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './client'
  ],

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.optimize.DedupePlugin(), todo : check dependencies
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: [
          path.join(__dirname, '../src'),
          path.join(__dirname, './src'),
          path.join(__dirname, './client'),
          path.join(__dirname, './routes')
        ]
      },
      {
        test:   /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.png($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
