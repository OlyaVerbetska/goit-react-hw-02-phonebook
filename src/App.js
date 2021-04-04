import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  nameInputId = uuidv4();
  telInputId = uuidv4();
  filterInputId = uuidv4();

  getContactId = () => uuidv4();

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  changeInput = e => {
    const inputName = e.currentTarget.name;
    this.setState({
      [inputName]: e.currentTarget.value,
    });
  };

  addContact = e => {
    e.preventDefault();
    const contactData = {
      name: this.state.name,
      number: this.state.number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contactData, ...contacts],
    }));
    this.resetInput();
  };

  resetInput = () => {
    this.setState({ name: '', number: '' });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { name, contacts, number } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <form onSubmit={this.addContact}>
          <h1>Pnonebook</h1>
          <label htmlFor={this.nameInputId} />
          <input
            id={this.nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            value={name}
            required
            onChange={this.changeInput}
          />

          <label htmlFor={this.telInputId} />
          <input
            id={this.telInputId}
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            value={number}
            required
            onChange={this.changeInput}
          />
          <button type="submit">Add contact</button>
        </form>
        {/* filter */}
        <p>Find contacts by name:</p>
        <label htmlFor={this.filterInputId} />
        <input
          id={this.filterInputId}
          type="text"
          name="filter"
          onChange={this.changeInput}
        />

        {contacts.length > 0 && (
          <ul>
            <h2>Contacts</h2>
            {visibleContacts.map(contact => (
              <li key={this.getContactId()}>
                {contact.name}:{contact.number}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
