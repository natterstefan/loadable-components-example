const path = require('path')
const LoadablePlugin = require('@loadable/webpack-plugin')

const DIST_PATH = path.resolve(__dirname, './dist')

module.exports = {
  mode: 'production',
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  entry: {
    main: [path.resolve(__dirname, './src/client/index.tsx')],
  },
  output: {
    path: path.join(DIST_PATH, 'client'),
    filename: '[name].js',
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
