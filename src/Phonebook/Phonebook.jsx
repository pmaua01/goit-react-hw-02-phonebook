import React, { Component } from 'react';
import shortid from 'shortid';
export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmitForm(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.onChangeInput}
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.onChangeInput}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
