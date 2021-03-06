/**
 * inspired by:
 * @see https://github.com/gregberge/loadable-components/blob/8d29fef8f02e5b0cdd4a1add3399e48089a7b97a/examples/server-side-rendering/webpack.config.babel.js
 */
const path = require('path')

const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')

const {
  createLoadableComponentsTransformer,
} = require('typescript-loadable-components-plugin')

const DIST_PATH = path.resolve(__dirname, './dist')

const production = process.env.NODE_ENV === 'production'
const development =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

module.exports = (target) => ({
  name: target,
  mode: development ? 'development' : 'production',
  // include source maps only in dev mode (https://webpack.js.org/configuration/devtool/)
  devtool: development ? 'cheap-module-source-map' : undefined,
  target: target,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  entry: path.resolve(__dirname, './src/client/main-' + target + '.tsx'),
  output: {
    filename: production ? '[name]-bundle-[chunkhash:8].js' : '[name].js',
    path: path.join(DIST_PATH, target),
    /**
     * In the client app we use `__webpack_public_path__` to set `publicPath`
     * during runtime. We are not required to set it here actually. On the
     * server we set it with the `ChunkExtractor`.
     *
     * Read more about an environment based publich-path here:
     * @see https://webpack.js.org/guides/public-path/
     */
    publicPath: '/static/',
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: [
          /**
           * babel-loader and ts-loader are used together, which requires us to
           * set `module` to `esnext` in our tsconfig.json. If we don't
           * loadable-components will not work.
           *
           * @see https://github.com/gregberge/loadable-components/issues/173#issuecomment-459915787
           */
          {
            loader: 'babel-loader',
            options: {
              // caller is used in babel-config for further optimisations
              caller: { target },
            },
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
  plugins: [
    new LoadablePlugin(),
    new CleanWebpackPlugin({
      /**
       * during rebuilds (watch mode) we do not clean old files
       * @see https://github.com/johnagan/clean-webpack-plugin/issues/152#issuecomment-509028712
       */
      cleanStaleWebpackAssets: false,
    }),
    new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
  ],
  watchOptions: {
    aggregateTimeout: 1000,
    poll: (process.platform === 'linux' && 1000) || false, // make --watch work on linux
    ignored: ['node_modules', 'dist', 'lib'],
  },
})
