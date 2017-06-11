import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import './style.css'
import { Grid, Row, Col } from 'react-flexbox-grid'

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
        <Route path="/login" component={Login}/>
      </div>
    </Router>
  </MuiThemeProvider>
)

const Home = (props) => (
  <div>
    <h2>Home</h2>
  </div>
)

const Login = (props) => (
  <div>
    <h1>Login</h1>
    <Grid>
      <Row center="xs" middle="xs">
        <Col xs={12} sm={4}>
          <Paper zDepth={2} style={{margin: 10, height: 300}} className="row middle-xs">
            <Col xs={12}>
              <TextField hintText="Username" style={{maxWidth: '100%'}}/><br />
              <TextField hintText="Password" style={{maxWidth: '100%'}}/><br />
              <RaisedButton label="Login" />
            </Col>
          </Paper>
        </Col>
      </Row>
    </Grid>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default App
