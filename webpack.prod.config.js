var Webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DefinePlugin = new Webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
});
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({template: 'index.html'});
var UglifyPlugin = new Webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  }
});
var CommonChunksPlugin = new Webpack.optimize.CommonsChunkPlugin({name: 'bundle'});

module.exports = {
  entry: {
    bundle: [
      'react', 'react-dom', './App.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false']
      }, {
        test: /\.(eot|ttf|woff|otf)$/,
        loader: 'file-loader?name=./app/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [DefinePlugin, HTMLWebpackPluginConfig, UglifyPlugin, CommonChunksPlugin]
}
