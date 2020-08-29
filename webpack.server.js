const path = require('path')

const {
  createLoadableComponentsTransformer,
} = require('typescript-loadable-components-plugin')

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
  /**
   * NOTE:
   * excluding @loadable/* did not work, not sure why though.
   *
   * @see https://github.com/gregberge/loadable-components/blob/8d29fef8f02e5b0cdd4a1add3399e48089a7b97a/examples/server-side-rendering/webpack.config.babel.js#L39-L40
   */
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
          {
            loader: 'ts-loader',
            options: {
              getCustomTransformers: (program) => ({
                before: [createLoadableComponentsTransformer(program, {})],
              }),
            },
          },
        ],
      },
    ],
  },
}
