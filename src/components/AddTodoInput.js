import React from 'react';

export default class AddTodoInput extends React.Component {
  render() {

    return (
        <input type="text" onChange={ (e) => this.handleInputChange(e) } value={this.props.addTodoInputText} />
    );
  };

  handleInputChange(event) {
    console.log('AddTodoInput - handleInputChange');
    this.props.foo(event.target.value);
  }
}

