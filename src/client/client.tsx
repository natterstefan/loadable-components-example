import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { loadableReady } from '@loadable/component'

import App from './app-web'

loadableReady(() => {
  const root = document.getElementById('app')
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    root,
  )
})
