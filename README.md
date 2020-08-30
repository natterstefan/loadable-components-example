# Loadable Components Typescript Example

## Start

```bash
yarn
yarn build
yarn start
```

Open <http://localhost:3000> and check out the network tab in your dev tools.

## References

- [loadable-components](https://github.com/gregberge/loadable-components)
  - [Server Side Rendering](https://loadable-components.com/docs/server-side-rendering/)
    - [SSR example](https://github.com/gregberge/loadable-components/blob/8d29fef8f02e5b0cdd4a1add3399e48089a7b97a/examples/server-side-rendering)
    - [SSR with Apollo example](https://github.com/gregberge/loadable-components/issues/282#issuecomment-491978634)
- [Loadable-Components SSR ✂️✨](https://medium.com/@shobhitsingh29/loadable-ssr-f8b501e92be8)
- [How To Improve React App Performance with SSR and Rust](https://pagespeed.green/blog/how-to-improve-react-app-performance-with-ssr-and-rust-part-i-ssr)
  - [Example](https://github.com/pagespeed-green/react-ssr)
- [React Server Side Rendering with Koa Part II](https://blog.lovemily.me/react-server-side-rendering-with-koa-part-2/)
- [react-loadable](https://github.com/jamiebuilds/react-loadable)

### Typescript

- [Code splitting React components with TypeScript and NO Babel](https://blog.logrocket.com/code-splitting-react-components-with-typescript-and-no-babel/)
- [Typescript plugin for working better with styled-components react-loadable and loadable-components.](https://medium.com/@joking.young/three-typescript-plugins-for-working-better-with-styled-components-react-loadable-9ae00fba5656)
- [typescript-loadable-components-plugin](https://github.com/acrazing/typescript-loadable-components-plugin)
- [typescript-react-loadable-plugin](https://github.com/acrazing/typescript-react-loadable-plugin)
- or
  [https://github.com/Quramy/loadable-ts-transformer](loadable-ts-transformer)

### Issues

- [Typescript: nodeExtractor.requireEntrypoint returns undefined](https://github.com/gregberge/loadable-components/issues/620)

## Tasks

- [ ] use `ForkTsCheckerWebpackPlugin` and use only `babel-loader`
      ([Example][1])

## License

MIT

[1]: https://github.com/hiroppy/ssr-sample/blob/master/webpack.config.js#L35
