import { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import ContactForm from './components/ContactForm/ContactForm';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';

class App extends Component {
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
