import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from "extract-text-webpack-plugin";

const NODE_ENV = process.env.NODE_ENV || 'development'

export default {
  // devtool: 'cheap-inline-eval-source-map',

  entry: [ 'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index')
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin("bundle.css"),
    new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel',
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
