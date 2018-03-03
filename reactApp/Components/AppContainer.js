import React from 'react';
import ReactDOM from 'react-dom';
//import { HashRouter, Route, Switch, hashHistory } from 'react-router-dom';

//import createBrowserHistory from 'history/lib/createBrowserHistory'
import createBrowserHistory from 'history/createBrowserHistory'


import {
  //BrowserRouter as Router,
  Router,
  Route,
  Redirect,
} from "react-router-dom";

import Landing from './Landing';
import TodoApp from './TodoApp';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false
    }
  }

  authenticate() {
    this.setState({auth: true})
  }

  isAuthenticated() {
    console.log(this.state.auth);
    if (!this.state.auth) {
      <Redirect to="/"/>
      console.log("why")
    }
  }

  render() {
    console.log("in app container");
    console.log(this.state.auth)
    return (
      <Router history={createBrowserHistory()}>
        <div>
          <Route exact path="/" component={Landing} submitAuth={() => this.authenticate()} />
          <Route exact path="/todos" component={TodoApp} onEnter={this.isAuthenticated()}/>
        </div>
      </Router>
    )
  }
}

export default AppContainer;
