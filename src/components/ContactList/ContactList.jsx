import { ContactItem, DeleteButton } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const displayedContacts = useSelector(selectVisibleContacts);
  console.log(displayedContacts);
  return (
    <ul>
      {displayedContacts.map(({ name, id, phone }) => (
        <ContactItem key={id}>
          {name}: {phone}
          <DeleteButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ul>
  );
};
