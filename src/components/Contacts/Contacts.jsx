import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { List } from './Contacts.styled';
import { Contact } from '../Contact/Contact';

class Contacts extends Component {
  filterId = nanoid();

  static defaultProps = {
    contacts: [],
  };

  static propTypes = {
    handleClick: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };

  render() {
    const { contacts, handleClick } = this.props;
    return (
      <>
        <List>
          {contacts.length !== 0 ? (
            contacts.map(({ id, name, number }) => (
              <Contact
                key={id}
                name={name}
                number={number}
                onClick={() => handleClick(id)}
              ></Contact>
            ))
          ) : (
            <p>There are no contacts :(</p>
          )}
        </List>
      </>
    );
  }
}

export default Contacts;
