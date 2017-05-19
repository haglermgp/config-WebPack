var Webpack = require('webpack');
var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('extract-text-webpack-plugin');

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
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
          // options: {
          //   presets: ['env']
          // }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
        // it just work in produccion
        // use: ExtractTextPlugin.extract({
        //   use: 'css-loader'
        //    })
      }
    ]
  },
  plugins: [
    new Webpack.optimize.UglifyJsPlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
    // it just work in produccion
    // new ExtractTextPlugin('styles.css')
  ]
}
