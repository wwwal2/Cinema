const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
    hashDigestLength: 5,
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 7000,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash:5].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
      templateParameters: {
        hash: true,
      },
    }),
    new UglifyJsPlugin({
      test: /\.js(\?.*)?$/i,
      exclude: /node_modules/,
      cache: true,
      sourceMap: true,
      parallel: true,
      uglifyOptions: {
        output: {
          comments: false,
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
      sourceMap: true,
      ignoreOrder: false,
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        map: {
          inline: false,
          annotation: true,
        },
      },
    }),
  ],
};
