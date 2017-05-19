var Webpack = require('webpack');
var path = require('path');

var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'components', 'app.jsx'),
  output: {
    path: path.join(buildPath, 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
