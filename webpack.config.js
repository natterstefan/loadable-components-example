const path = require('path')
const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  entry: {
    main: [path.resolve(__dirname, './src/client/index.tsx')],
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [new LoadablePlugin()],
}