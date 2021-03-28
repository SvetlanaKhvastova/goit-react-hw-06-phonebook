import React, { Component } from 'react';
import ProtoTypes from 'prop-types';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/todos/todos-actions';

class Filter extends Component {
  state = {};

  handlerFilterSearch = e => {
    const { value } = e.currentTarget;
    const { filterContacts } = this.props;

    filterContacts(value);
  };

  render() {
    const { filterSearch } = this.props;
    const { handlerFilterSearch } = this;

    return (
      <div className={s.filterBox}>
        <h3 className={s.filterTitle}>Find contact by name</h3>
        <input
          className={s.filterInput}
          type="text"
          name="filter"
          value={filterSearch}
          onChange={handlerFilterSearch}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ filterSearch: state.contacts.filter });

const mapDispatchToProps = dispatch => ({
  filterContacts: text => dispatch(contactsActions.filterContacts(text)),
});

Filter.protoTypes = {
  filterSearch: ProtoTypes.string.isRequired,
  handlerFilterSearch: ProtoTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
