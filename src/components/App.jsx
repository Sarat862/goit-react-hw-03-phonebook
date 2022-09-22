import { Component } from "react";
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { nanoid } from 'nanoid';

export class App extends Component{

  state = {
    contacts: [],
    filter: ''
  } 

  formSubmitHandler = (contact) => {
    if (this.isDublicate(contact)) {
      return alert(`${contact.name} is already in contacts.`)
    }
      
    this.setState((prev) => {
      const newContact = {
        id: nanoid(),
        ...contact
      }
      return {
        contacts: [ ...prev.contacts, newContact]
      }
    })
  }

  removeContact = (id) => {
    this.setState((prev) => {
      const newContacts = prev.contacts.filter((contact) => contact.id !== id);
      return {
        contacts: newContacts
      }
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  isDublicate({ name }) {
    const { contacts } = this.state;
    const result = contacts.find((contact) => contact.name === name);
    return result;
  }
  
  getFilteredContacts() {
    const { contacts, filter } = this.state;

    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(normalizedFilter);
    })  
    return filteredContacts;
  }

  render() {
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleChange} />
        <ContactList items={contacts} onRemoveContact={this.removeContact} />
      </div>
    );
  }
};
