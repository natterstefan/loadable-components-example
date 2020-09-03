import React, { FunctionComponent } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import loadable from '@loadable/component'

const Home = loadable(() => import('./pages/home'))
const About = loadable(() => import('./pages/about'))

const App: FunctionComponent = () => {
  return (
    <div>
      <nav>
        <h2>Navigation</h2>
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
