import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Label, Input } from './Filter.styled';

class Filter extends Component {
  static propTypes = {
    filterValue: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
  };

  render() {
    const { filterValue, onFilter } = this.props;
    return (
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          onChange={onFilter}
          value={filterValue}
        ></Input>
      </Label>
    );
  }
}

export default Filter;
