/**
 * Entry point for Webpack
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { loadableReady } from '@loadable/component'
import App from './app'

const bootstrap = () => {
  ReactDOM.hydrate(
    <Router>
      <App />
    </Router>,
    document.getElementById('app'),
  )
}

loadableReady(() => bootstrap())
