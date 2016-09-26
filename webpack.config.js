var HtmlWebpackPlugin = require('html-webpack-plugin')
var yeti = require('yeticss')
var path = require('path')

module.exports = {
  context: __dirname + '/app',
  entry: './app.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  }, 
  module: {
    loaders: [
      { test: /\.pug$/, loader: 'pug'},
      { test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
        },
      { test: /\.js$/,
        exclude: /(node_mdules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['babel-preset-es2015'].map(require.resolve)
        }
      }
    ]
  },
  stylus: {
    // use: [require('yeticss')]
    use: [yeti()]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      // favicon: 'favicon.ico',
      template: path.join(__dirname, '/app/pug/index.pug'),
      title: 'Jade demo'
    }),
    // new ExtractTextPlugin('styles.css')
  ]
}
