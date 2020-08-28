import React from 'react'
import ReactDOM from 'react-dom'
import { loadableReady } from '@loadable/component'
import App from './app'

const bootstrap = () => {
  ReactDOM.render(<App />, document.getElementById('app'))
}

loadableReady(() => bootstrap())
