module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    /**
     * @loadable/babel-plugin is required to make SSR work with
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
