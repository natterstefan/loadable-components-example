const path = require('path')
const LoadablePlugin = require('@loadable/webpack-plugin')

const {
  createLoadableComponentsTransformer,
} = require('typescript-loadable-components-plugin')

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
          /**
           * babel-loader and ts-loader are used together, which requires us to
           * set `module` to `esnext` in our tsconfig.json. If we don't
           * loadable-components will not work.
           *
           * @see https://github.com/gregberge/loadable-components/issues/173#issuecomment-459915787
           */
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
  plugins: [new LoadablePlugin()],
}
