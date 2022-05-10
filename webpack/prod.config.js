'use strict'

const webpack = require('webpack')

const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')

const common = require('./common')

const Crp = MiniCssExtract
const Styles = MiniCssExtract

module.exports = {
  entry: common.entry,
  mode: 'production',

  output: common.output,

  plugins: [
    new Crp({
      filename: 'Crp.css'
    }),
    new Styles({
      filename: '[name]-[fullhash].css'
    }),

    new HtmlPlugin(
      Object.assign({}, common.HtmlPluginConfig('template.html'), { inject: false })
    ),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ],

  module: {

    rules: [
      common.standardLoader,
      common.jsLoader,

      Object.assign({}, common.cssLoader, {
        exclude: /none_modules|(search|style)\.css/,
        use: [Styles.loader, 'css-loader']
      }),

      Object.assign({}, common.cssLoader, {
        test: /(search|style)\.css$/,
        use: [Crp.loader, 'css-loader']
      })
    ]
  },

  resolve: common.resolve
}
