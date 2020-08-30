/**
 * inspired by
 * @see https://github.com/gregberge/loadable-components/blob/8d29fef8f02e5b0cdd4a1add3399e48089a7b97a/examples/server-side-rendering/src/server/main.js
 */
import path from 'path'

import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { ChunkExtractor } from '@loadable/server'

const nodeStats = path.resolve(__dirname, '../../dist/node/loadable-stats.json')
const webStats = path.resolve(__dirname, '../../dist/web/loadable-stats.json')

const app = express()

app.use(express.static(path.join(__dirname, '../../dist/web')))

app.get('*', (req, res) => {
  /**
   * node extractor is used for the server-side rendering
   * web extractor is used to get the browser-side compiled files.
   *
   * ## Learnings
   * - use `collectChunks` instead of `ChunkExtractorManager`. This was more
   *   reliable in my apps.
   * - Issue `<App />` is undefined -> resolved with `libraryTarget: 'commonjs2'`
   * in webpack.server.js config
   * @see https://github.com/gregberge/loadable-components/issues/620
   */
  const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats })
  const { default: App } = nodeExtractor.requireEntrypoint()

  const webExtractor = new ChunkExtractor({ statsFile: webStats })

  const jsx = webExtractor.collectChunks(
    React.createElement(App as any, { url: req.url }),
  )
  const html = renderToString(jsx)

  res.set('content-type', 'text/html')
  res.send(`
    <!doctype html>
    <html lang="en">
      <head>
        <title>loadable-components-example</title>
        ${webExtractor.getLinkTags()}
        ${webExtractor.getStyleTags()}
      </head>
      <body>
        <div id="app">${html}</div>
        ${webExtractor.getScriptTags()}
      </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log('Running on http://localhost:3000/')
})
