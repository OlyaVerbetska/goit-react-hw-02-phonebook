import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  nameInputId = uuidv4();
  telInputId = uuidv4();

  state = {
    name: '',
    number: '',
  };

  changeInput = e => {
    const inputName = e.currentTarget.name;
    this.setState({
      [inputName]: e.currentTarget.value,
    });
  };

  // checkContact = () => {
  //   this.state.name ===
  // }

  handleFormSubmit = e => {
    e.preventDefault();
    const checkContact = Boolean(
      this.props.existContacts.find(
        element => element.name === this.state.name,
      ),
    );
    //console.log(checkContact===true);

    checkContact
      ? alert(`${this.state.name} is already in contacts`)
      : this.props.onFormSubmit(this.state);

    this.resetInput();
  };

  resetInput = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
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
    );
  }
}

export default ContactForm;
