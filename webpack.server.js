const path = require('path')
// const nodeExternals = require('webpack-node-externals')

const DIST_PATH = path.resolve(__dirname, 'dist')

module.exports = {
  mode: 'production',
  target: 'node',
  // why? @see https://github.com/webpack/webpack/issues/1599#issuecomment-186841345
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  entry: {
    main: [path.resolve(__dirname, './src/server/index.tsx')],
  },

  output: {
    path: path.join(DIST_PATH, 'server'),
    filename: '[name].js',
  },
  // NOTE: this does not work...
  // externals: [/^@loadable\/component$/, nodeExternals()],
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
}
