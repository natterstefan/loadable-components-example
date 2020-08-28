const path = require('path')
// const LoadablePlugin = require('@loadable/webpack-plugin')

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
          // {
          //   /**
          //    * transpile with ts first, before babel takes over
          //    *
          //    * docs:
          //    * @see https://github.com/TypeStrong/ts-loader
          //    *
          //    * example:
          //    * @see https://github.com/microsoft/TypeScriptSamples/blob/master/react-flux-babel-karma/webpack.config.js#L42-L49
          //    */
          //   loader: 'ts-loader',
          //   options: {
          //     configFile: tsConfig,
          //     /**
          //      * required to make loadable-components work
          //      * @see https://blog.logrocket.com/code-splitting-react-components-with-typescript-and-no-babel/
          //      * @see https://github.com/Quramy/loadable-ts-transformer
          //      */
          //     getCustomTransformers: () => ({ before: [loadableTransformer] }),
          //   },
          // },
        ],
      },
    ],
  },
  // plugins: [new LoadablePlugin()],
}