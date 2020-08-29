/**
 * Entry point for Webpack
 */
import React from 'react'
import { StaticRouter } from 'react-router'

import App from './app'

const AppSSr = () => (
  <StaticRouter>
    <App />
  </StaticRouter>
)

export default AppSSr
