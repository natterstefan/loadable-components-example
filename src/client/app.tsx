import React from 'react'
import loadable from '@loadable/component'

const Lazy = loadable(() => import('./lazy'))

const App = () => {
  return <Lazy />
}

export default App