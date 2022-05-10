'use strict'

const { join } = require('path')

module.exports = {
  entry: join(__dirname, '..', 'src', 'index'),

  output: {
    filename: '[name]-[fullhash].js',
    path: join(__dirname, '..', 'dist')
  },

  HtmlPluginConfig: (template) => ({
    title: 'GitHub app',
    template: join(__dirname, '..', 'src', 'html', template)
  }),

  standardLoader: {
    test: /\.js$/,
    exclude: /none_modules/,
    include: join(__dirname, '..', 'src'),
    enforce: 'pre',
    use: 'standard-loader'
  },

  jsLoader: {
    test: /\.js$/,
    exclude: /none_modules/,
    include: join(__dirname, '..', 'src'),
    use: 'babel-loader'
  },

  cssLoader: {
    test: /\.css$/i,
    exclude: /none_modules/,
    include: join(__dirname, '..', 'src'),
    use: ['style-loader', 'css-loader']
  },

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      src: join(__dirname, '..', 'src'),
      components: join(__dirname, '..', 'src', 'components'),
      utils: join(__dirname, '..', 'src', 'utils')
    }
  }
}
