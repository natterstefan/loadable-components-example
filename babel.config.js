/**
 * inspired by:
 * @see https://github.com/gregberge/loadable-components/blob/8d29fef8f02e5b0cdd4a1add3399e48089a7b97a/examples/server-side-rendering/babel.config.js
 *
 * Alternative with process.env.BABEL_ENV
 * @see https://github.com/hiroppy/ssr-sample/blob/50a7e35226ea083cf59a1896e507bf80bdae82e8/babel.config.js
 */

function isWebTarget(caller) {
  return Boolean(caller && caller.target === 'web')
}

function isWebpack(caller) {
  return Boolean(caller && caller.name === 'babel-loader')
}

module.exports = (api) => {
  const web = api.caller(isWebTarget)
  const webpack = api.caller(isWebpack)

  /**
   * optimize the build process performance by caching config function execution
   * result
   * @see https://babeljs.io/docs/en/config-files#apicache
   */
  api.cache(true)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: web ? 'entry' : undefined,
          corejs: web ? 'core-js@3' : false,
          targets: !web ? { node: 'current' } : undefined,
          modules: webpack ? false : 'commonjs',
        },
      ],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      /**
       * `@loadable/babel-plugin` is required to make SSR work with
       * loadable-components.
       *
       * No need to include `@babel/plugin-syntax-dynamic-import`, since
       * Babel supports it now out of the box.
       *
       * @see https://loadable-components.com/docs/server-side-rendering/
       */
      '@loadable/babel-plugin',
    ],
  }
}
