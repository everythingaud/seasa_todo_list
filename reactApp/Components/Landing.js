import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  HashRouter,
  hashHistory,
  Switch,
  browserHistory
} from "react-router-dom";


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attempt: ''
    }
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("pass submitted");
    if (this.state.attempt == "test") {
      this.props.submitAuth;
      this.props.history.push("/todos");
    } else {
      alert("please try again");
    }
  }

  onAttemptChange(e) {
    this.setState({ attempt: e.target.value });
  }

  render() {
    return (
      <form className="login_form" onSubmit={(e) => this.onSubmit(e)}>
        <input id="pass-field"
          type="password" placeholder="magic word"
          value={this.state.attempt}
          onChange={(e) => this.onAttemptChange(e)}>
        </input>
        <input type="submit"
          onClick={(e) => this.onSubmit(e)}
          value="submit">
        </input>
      </form>
    )
  }
}

export default Landing;
