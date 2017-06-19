import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route path='/' component={Home} />
        </div>
      </Router>
    )
  }
}

const Home = () => <h1>hihi</h1>

export default App
