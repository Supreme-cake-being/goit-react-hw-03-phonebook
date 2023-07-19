import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormBox, Label, Input, Button } from './Form.styled';

class Form extends Component {
  nameId = nanoid();
  numberId = nanoid();

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    e.target.reset();

    this.props.onSubmit({ id: nanoid(), name, number });
  };

  render() {
    const { nameId, numberId, handleSubmit, handleChange } = this;
    return (
      <FormBox onSubmit={handleSubmit} autoComplete="off">
        <Label htmlFor={nameId}>Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameId}
          onChange={handleChange}
        />

        <Label htmlFor={numberId}>Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberId}
          onChange={handleChange}
        />

        <Button type="submit">Add contact</Button>
      </FormBox>
    );
  }
}

export default Form;
