import React, { Component } from 'react';

export default class AddItemForm extends Component {
  onSubmitForm = (e) => {
    e.preventDefault()
    this.props.handleNewRandomCard();
  }
  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <button type='submit'>Add Item</button>
      </form>
    )
  }
}