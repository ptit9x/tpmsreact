import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import App from './App'
import IndexPage from './components/IndexPage'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import NoMatch from './components/NoMatch'

render((
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route component={App}>
      <Route path="/" component={IndexPage}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/login" component={Login}/>
      {/* <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>*/}
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>),
  document.getElementById('root')
);
