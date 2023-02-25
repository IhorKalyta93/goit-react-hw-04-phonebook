import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const newContact = {
      name: contact.name,
      number: contact.number,
      id: nanoid(),
    };

    if (contacts.some(event => event.name === contact.name)) {
      alert(`${contact.name} is already in contacts.`);
    } else {
      return setContacts(prevState => [newContact, ...prevState]);
    }
  };
  
  render() {
    return (
      <div>
        <form className={css.form} onSubmit={this.onSubmit}>
          <label className={css.label}>
            Name
            <input
              className={css.inputContact}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.onInputChange}
            />
          </label>
          <label className={css.label}>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.onInputChange}
            />
          </label>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
