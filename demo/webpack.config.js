const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rootPath = process.cwd()

/** @type {import('webpack').Configuration} */
const webpackConfig = {
  target: 'web',
  mode: 'development',
  entry: path.join(rootPath, 'src/demo.ts'),

  output: {
    publicPath: '',
    path: path.join(rootPath, 'demo/dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /(?<!\.d)\.ts?$/,
        use: 'ts-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(rootPath, 'demo/index.html'),
    }),
  ],
}

module.exports = webpackConfig
