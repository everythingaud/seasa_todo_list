import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var strikethrough = {
      "text-decoration": "line-through"
    }

    if (this.props.task.completed) {
      return(
        <li key={this.props.task.taskText} clasName="task" style={strikethrough}
          onClick={this.props.toggle}>
          <button>❎</button>
          {this.props.task.taskText}
        </li>
      )
    } else {
      return (
        <li key={this.props.task.taskText} className="task">
          <button>✅</button>
          {this.props.task.taskText}
        </li>
      )
    }
  }
}

export default Todo;
