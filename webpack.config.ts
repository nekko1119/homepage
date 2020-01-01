// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="src/type/global.d.ts" />

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackRootPlugin from 'html-webpack-root-plugin';
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin';
import { resolve } from 'path';

const config: webpack.Configuration = {
  mode: process.env.NODE_ENV,
  entry: resolve('src', 'index.tsx'),
  output: {
    path: resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devServer: {
    contentBase: '.',
    publicPath: '/dist',
    inline: true,
    historyApiFallback: true,
    open: true,
    hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'nekko1119',
      meta: {
        viewport: 'width = device - width, initial- scale=1'
      },
      filename: resolve('index.html'),
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackRootPlugin(),
    new HtmlWebpackHarddiskPlugin()
  ]
};

export default config;
