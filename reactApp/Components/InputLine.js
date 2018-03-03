import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import TodoModal from "./TodoModal";

//modifying so that input line triggers a modal
class InputLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state.inputText);
    this.setState({inputText: ""});
  }

  render() {
    return(
      <div>
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
       <Modal
         isOpen={this.state.showModal}
         contentLabel="onRequestClose Example"
         onRequestClose={this.handleCloseModal}
         shouldCloseOnOverlayClick={false}
         >
           <TodoModal submit={(a) => this.props.submit(a)}/>
           <button onClick={this.handleCloseModal}>Close Modal</button>

      </Modal>
      </div>
    )
  }
}

export default InputLine;
