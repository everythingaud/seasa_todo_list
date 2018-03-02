import React from 'react';
import ReactDOM from 'react-dom';
import ClickNHold from 'react-click-n-hold';

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  strikethrough(e){
    e.preventDefault();

  }

  start(e){
  		console.log('START');
  	}

  	end(e, enough){
  		console.log('END');
          console.log(enough ? 'Click released after enough time': 'Click released too soon');
  	}

  	clickNHold(e){
  		console.log('CLICK AND HOLD');
  	}


  render() {
      if(this.props.task.completed) {
        return(
          <ClickNHold
            time={0.5} // Time to keep pressing. Default is 2
            onStart={this.start} // Start callback
            onClickNHold={this.props.remove} //Timeout callback
            onEnd={this.end}>
            <li key={this.props.task} className="items strikethrough" onClick={this.props.toggle}>
              ☑️ {this.props.task.taskText}
            </li>
          </ClickNHold>
        )
      } else {
        return(
          <ClickNHold
            time={0.5} // Time to keep pressing. Default is 2
            onStart={this.start} // Start callback
            onClickNHold={this.props.remove} //Timeout callback
            onEnd={this.end}>
            <li key={this.props.task} className="items" onClick={this.props.toggle}>
              ⭕ {this.props.task.taskText}
            </li>
          </ClickNHold>
        )
      }
  }
}

export default Todo;
