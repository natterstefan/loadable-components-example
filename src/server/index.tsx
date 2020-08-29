/**
 * inspired by
 * @see https://github.com/gregberge/loadable-components/blob/8d29fef8f02e5b0cdd4a1add3399e48089a7b97a/examples/server-side-rendering/src/server/main.js
 */
import path from 'path'
import React from 'react'
import { StaticRouter } from 'react-router'
import express from 'express'
import ReactDOMServer from 'react-dom/server'
import { ChunkExtractor } from '@loadable/server'
import App from '../client/app'

const webStats = path.resolve(
  __dirname,
  '../../dist/client/loadable-stats.json',
)

const app = express()

app.use(express.static(path.join(__dirname, '../../dist/client')))

app.get('*', (_res, res) => {
  /**
   * NOTE: use `collectChunks` instead of `ChunkExtractorManager`. This was more
   * reliable in my apps.
   */
  const webExtractor = new ChunkExtractor({ statsFile: webStats })
  webExtractor.collectChunks(<App />)

  res.set('content-type', 'text/html')
  res.send(`
    <!doctype html>
    <html lang="en">
      <head>
        <title>Hello Loadable Components</title>
      </head>
      <body>
        <div id="app">
          ${ReactDOMServer.renderToString(
            <StaticRouter>
              <App />
            </StaticRouter>,
          )}
        </div>
        ${webExtractor.getScriptTags()}
      </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log('Running on http://localhost:3000/')
})
