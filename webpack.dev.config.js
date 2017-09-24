var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({template: 'index.html'});

module.exports = {
  entry: ['./App.js'],
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }, {
        test: /\.(woff2?|jpe?g|png|gif|ico|svg)$/,
        use: 'file-loader?name=./app/images/[name].[ext]'
      }, {
        test: /\.(eot|ttf|woff|otf)$/,
        loader: 'file-loader?name=./app/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
}
