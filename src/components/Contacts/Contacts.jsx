import React, { Component } from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/todos/todos-actions';

class Contacts extends Component {
  state = {};

  render() {
    const { filterSearch, contacts, deleteContacts } = this.props;

    const normalizedFilter = filterSearch.toLowerCase();
    const searchName = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      contacts && (
        <ul className={s.contactsBlock}>
          {searchName.map(({ name, number, id }) => {
            return (
              <li key={id} className={s.flex}>
                <p>
                  <span>{name}: </span>
                  <span className={s.number}>{number}</span>
                </p>

                <Button
                  name="Delete"
                  type="button"
                  onClick={() => deleteContacts(id)}
                />
              </li>
            );
          })}
        </ul>
      )
    );
  }
}

Contacts.protoTypes = {
  filterSearch: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

const mapStateToprops = state => ({
  contacts: state.contacts.items,
  filterSearch: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  deleteContacts: text => dispatch(contactsActions.deleteContacts(text)),
});

export default connect(mapStateToprops, mapDispatchToProps)(Contacts);
