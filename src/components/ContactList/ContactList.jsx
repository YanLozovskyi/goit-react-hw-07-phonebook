import { ContactItem, DeleteButton } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const displayedContacts = useSelector(selectVisibleContacts);
  return (
    <ul>
      {displayedContacts.map(({ name, id, number }) => (
        <ContactItem key={id}>
          {name}: {number}
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
