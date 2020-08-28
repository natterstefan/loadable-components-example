module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    /**
     * @loadable/babel-plugin and @babel/plugin-syntax-dynamic-import are both
     * required to make SSR work with loadable-components.
     * @see https://loadable-components.com/docs/server-side-rendering/
     */
    '@loadable/babel-plugin',
  ],
}
