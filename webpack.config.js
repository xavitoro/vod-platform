const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      { enforce: 'pre', test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader'},
      { test: /\.json$/, loader: 'json-loader'},
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: [ 'style-loader', { loader: 'css-loader', options: { url: false } } ] }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
