import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from '../ContactList/ContactList.module.css';

const ContactList = ({ contactsForList, onDeleteContact }) => (
  <ul className={styles.contactList}>
    {contactsForList.map(contact => (
      <li key={uuidv4()} className={styles.contactList__item}>
        <span className={styles.contactList__elem}> {contact.name}:</span>
        <span>{contact.number} </span>
        <button
          type="button"
          className={styles.contactList__button}
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contactsForList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
