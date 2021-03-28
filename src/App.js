import { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import ContactForm from './components/ContactForm/ContactForm';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';

class App extends Component {
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const jsonContacts = JSON.parse(contacts);
    if (jsonContacts) {
      this.setState({ contacts: [...jsonContacts] });
    }
  }

  componentDidUpdate(prevProps, _) {
    const { contacts } = this.props;

    if (contacts !== prevProps.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />

        <Contacts />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
