import React, { Component } from 'react';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactList />
      </div>
    );
  }
}

export default App;
