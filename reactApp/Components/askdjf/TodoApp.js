import React from 'react';
import ReactDOM from 'react-dom';

import InputLine from './InputLine';
import TodoList from './TodoList';

let dummyData = [{taskText: 'Take out the trash', completed: false},
{taskText: 'Walk the dog', completed: false}, {taskText: 'Clean the room', completed: true}];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] }
  }

  componentDidMount() {
    this.setState({
      todos: dummyData
    });
  }

  addTodo(todo) {
    dummyData.push({
      taskText: todo,
      completed: false
    });
    this.setState({ todos: dummyData });
  }

  removeTodo(index) {
    var arr = this.state.todos.slice();
    arr.splice(index, 1);
    this.setState({todos: arr});
  }

  toggle(index) {
    var arr = this.state.todos.slice();
    arr[index].completed = !arr[index].completed;
    this.setState({todos: arr});
  }

  render() {
    return(
      <div>
        <h1 className="header"> SEASA Todo List</h1>
        <InputLine submit={(a) => this.addTodo(a)}/>
        <TodoList todos={this.state.todos}
          onDoubleClick={(a) => { console.log("hello")
            this.removeTodo(a)}}
          toggle={(i) => {
            console.log("hello")
            this.toggle(i)}
          }/>
      </div>
    )
  }
}

export default TodoApp;
