import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: "",
    }
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({inputText: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state.inputText);
    this.setState({inputText: ""});
  }
  render() {
    return(
      <form className="form">
        <input type="text" value={this.state.inputText} onChange={(e) => this.handleChange(e)} placeholder="Input task here"></input>
        <input type="submit" onClick={(e) => this.handleSubmit(e)} value="Add todo"></input>
      </form>
    )
  }
}

export default InputLine;
