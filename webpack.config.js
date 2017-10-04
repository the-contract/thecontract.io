const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'source-map',

  entry: {
    javascript: [
      'babel-polyfill',
      './src/index.js'
    ]
  },

  resolve: {
    // Add `src` path to resolve modules to enable absolute
    // imports like import 'styles/base.scss'
    modules: [path.resolve('src'), 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        include: path.resolve('src'),
        loader: 'html-loader'
      },
      {
        // See .babelrc for presets and plugins
        test: /\.js$/,
        include: path.resolve('src'),
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: path.resolve('src'),
        use: [
          { loader: 'style-loader' }, // create style nodes from JS strings
          { loader: 'css-loader' },   // transate CSS to CommonJS
          { loader: 'sass-loader' }   // compile SASS to CSS
        ]
      }
    ]
  },

  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'js/[name].js'
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve('src', 'index.html'),
      filename: 'index.html'
    })
  ]
};

module.exports = config;
