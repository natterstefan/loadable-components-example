const path = require('path')

const NodemonPlugin = require('nodemon-webpack-plugin')
const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.config')

module.exports = merge(baseConfig('server'), {
  entry: {
    main: [path.resolve(__dirname, './src/server/index.tsx')],
  },
  // why? @see https://github.com/webpack/webpack/issues/1599#issuecomment-186841345
  node: {
    __dirname: false,
    __filename: false,
  },
  target: 'node',
  plugins: [
    new NodemonPlugin({
      script: './dist/server/main.js',
    }),
  ],
})
