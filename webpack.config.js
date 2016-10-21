var HtmlWebpackPlugin = require('html-webpack-plugin')
var path              = require('path')
var precss            = require('precss')
var autoprefixer      = require('autoprefixer')
var sugarss           = require('sugarss')
var fontMagician      = require('postcss-font-magician')
var rucksack          = require('rucksack-css')
var lost              = require('lost')

module.exports = {
  context: path.join(__dirname, '/app'),
  entry: './app.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.pug$/, loader: 'pug' },
      { test: /\.js$/,
        exclude: /(node_mdules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['babel-preset-es2015'].map(require.resolve)
        }
      },
      { test: /\.sss$/,
        loader: 'style-loader!css-loader!postcss-loader?parser=sugarss'
      }
    ]
  },
  postcss: function () {
    return {
      plugins: [autoprefixer, precss, lost, rucksack, fontMagician],
      parser: sugarss
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      // favicon: 'favicon.ico',
      template: path.join(__dirname, '/app/pug/index.pug'),
      title: 'Page Title'
    })
  ]
}
