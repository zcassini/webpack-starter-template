var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
// var yeti = require('yeticss')
var precss       = require('precss')
var autoprefixer = require('autoprefixer')
var sugarss      = require('sugarss')

module.exports = {
  context: path.join(__dirname, '/app'),
  entry: './app.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.pug$/, loader: 'pug'},
      // { test: /\.styl$/,
      //   loader: 'style-loader!css-loader!stylus-loader'
      //   },
      { test: /\.js$/,
        exclude: /(node_mdules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['babel-preset-es2015'].map(require.resolve)
        }
      },
      {
        test:   /\.sss$/,
        loader: "style-loader!css-loader!postcss-loader?parser=sugarss"
      },
    ]
  },
  postcss: function () {
    return {
      plugins: [autoprefixer, precss],
      parser: sugarss
    }
  },
  // stylus: {
  //   // use: [require('yeticss')]
  //   use: [yeti()]
  // },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      // favicon: 'favicon.ico',
      template: path.join(__dirname, '/app/pug/index.pug'),
      title: 'Page Title'
    }),
  ]
}
