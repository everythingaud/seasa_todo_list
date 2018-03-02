import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';

let dummyData = [{taskText: 'Take out the trash', completed: false},
{taskText: 'Walk the dog', completed: false}, {taskText: 'Clean the room', completed: true}];

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
    // this.addTodo = this.addTodo.bind(this);
  }
  componentDidMount() {
    this.setState({todos: dummyData})
  }
  addTodo(todo) {
    dummyData.push({taskText: todo, completed: false})
    this.setState({todos: dummyData});
  }
  removeTodo(index) {
    console.log("remove", index)
    var newArr = this.state.todos.slice();
    newArr.splice(index, 1);
    this.setState({todos: newArr});
  }
  toggle(index) {
    console.log("toggle", index)
    var newArr = this.state.todos.slice();
    newArr[index].completed = !newArr[index].completed;
    this.setState({todos: newArr});
  }
  render() {
    return(
      <div>
        <h1 className="header">Todo List</h1>
        <InputLine submit={(a) => this.addTodo(a)}/>
        <TodoList todos={this.state.todos} remove={(a) => this.removeTodo(a)} toggle={(i) => this.toggle(i)}/>
      </div>
    )
  }
}

export default TodoApp;
