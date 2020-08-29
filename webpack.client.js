const path = require('path')

const LoadablePlugin = require('@loadable/webpack-plugin')
const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.config')

module.exports = merge(baseConfig('client'), {
  entry: {
    main: [path.resolve(__dirname, './src/client/index.tsx')],
  },
  plugins: [new LoadablePlugin()],
})
