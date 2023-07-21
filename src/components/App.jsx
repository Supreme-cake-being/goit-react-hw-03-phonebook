import React, { Component } from 'react';

import { Box, Title, Subtitle } from './App.styled';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const { contacts } = this.state;

    const isInContacts = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) return alert(`${contact.name} is already in contacts`);

    this.setState({ contacts: [...contacts, contact] });
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    this.setState({ contacts });
  }

  componentDidUpdate = (_, prevState) => {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts)
      localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );

    return (
      <Box>
        <Title>Phonebook</Title>
        <Form onSubmit={this.addContact} />

        <Subtitle>Contacts</Subtitle>
        <Filter filterValue={filter} onFilter={this.handleFilter}></Filter>
        <Contacts
          contacts={filteredContacts}
          handleClick={this.deleteContact}
        />
      </Box>
    );
  }
}

export default App;
