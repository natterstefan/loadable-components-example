import React, { FunctionComponent } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import loadable from '@loadable/component'

/**
 * TODO:
 * - `webpackChunkName` comment does not work, needs further investigation.
 * - test https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/dynamic-import-chunkname.md
 *
 * Issue `webpackChunkName` does not work
 * @see https://github.com/acrazing/typescript-loadable-components-plugin/issues/3
 */
const Home = loadable(() => import('./pages/home'))
const About = loadable(() => import('./pages/about'))

const App: FunctionComponent = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
