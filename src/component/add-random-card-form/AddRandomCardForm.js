import React, { Component } from 'react';

export default class AddItemForm extends Component {
  onSubmitForm = (e) => {
    e.preventDefault()
    // e.target['inputName'] references `<input name='inputName' />`
    this.props.handleNewRandomCard();
  }
  render() {
    /* TODO: need to wire up the form to add items in App state... */
    return (
      <form onSubmit={this.onSubmitForm}>
        <button type='submit'>Add Item</button>
      </form>
    )
  }
}