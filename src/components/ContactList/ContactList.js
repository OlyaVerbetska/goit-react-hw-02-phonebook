import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const ContactList = ({ contactsForList, onDeleteContact }) => (
  <ul>
    {contactsForList.map(contact => (
      <li key={uuidv4()}>
        {contact.name}:{contact.number}
        <button type="button" onClick={() => onDeleteContact(contact.id)}>
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
