const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: null,

  entry: [
    './client/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("bundle.css"),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      drop_console: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
  { test: /\.js?$/,
    loader: 'react-hot-loader/webpack!babel',
    include: path.join(__dirname, 'client')
  },
  { test: /\.scss$/,
    loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
    include: [path.join(__dirname, 'client'),
      path.join(__dirname, 'node_modules/@blueprintjs/core/src/components')] },
  { test: /\.css$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader'),
    include: [path.join(__dirname, 'client'),
      path.join(__dirname, 'semantic/out/components')
    ]
  },
  { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "url-loader?limit=10000&minetype=application/font-woff"
  },
  { test: /\.(jpg|png|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "file-loader"
  }
]
  }
}
