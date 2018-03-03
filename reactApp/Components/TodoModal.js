import React from 'react';
import ReactDOM from 'react-dom';

//modifying so that input line triggers a modal
class TodoModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: "",
      inputDeadline: "",
      inputFor: "",
      inputEvent: ""
    }
  }

  handleTaskChange(e) {
    e.preventDefault();
    console.log('task');
    var newState = this.state;
    newState.inputText = e.target.value;
    this.setState(newState);
  }

  handleDeadlineChange(e) {
    e.preventDefault();
    console.log('deadline');
    var newState = this.state;
    newState.inputDeadline = e.target.value;
    this.setState(newState);
  }

  handleForChange(e) {
    e.preventDefault();
    console.log('for');
    var newState = this.state;
    newState.inputFor = e.target.value;
    this.setState(newState);
  }

  handleEventChange(e) {
    console.log('event');
    e.preventDefault();
    var newState = this.state;
    newState.inputEvent = e.target.value;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
    this.setState({
      inputText: "",
      inputDeadline: "",
      inputFor: "",
      inputEvent: ""
    });
  }

  render() {
    return(
      <form className="form">
        <input type="text" value={this.state.inputText} onChange={(e) => this.handleTaskChange(e)} placeholder="Input task here" required></input>
        <input type="text" value={this.state.inputDeadline} onChange={(e) => this.handleDeadlineChange(e)} placeholder="Deadline" required></input>
        <input type="text" value={this.state.inputFor} onChange={(e) => this.handleForChange(e)} placeholder="For" required></input>
        <input type="text" value={this.state.inputEvent} onChange={(e) => this.handleEventChange(e)} placeholder="Event" required></input>

        <input type="submit" onClick={(e) => this.handleSubmit(e)} value="Add todo"></input>
      </form>
    )
  }
}

export default TodoModal;
