import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const displayedContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <ul>
        {displayedContacts.map(({ name, id, phone }) => (
          <ContactItem name={name} key={id} id={id} phone={phone} />
        ))}
      </ul>
    </>
  );
};
