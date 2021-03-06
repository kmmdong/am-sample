const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const UglifyJSPlugin = new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      }
});
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});


const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'] 
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,         
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {modules: true}
          }]                  
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: './dist'
          }
        }
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify("production") 
      }
    }),
    UglifyJSPlugin
  ]
};

module.exports = config;
