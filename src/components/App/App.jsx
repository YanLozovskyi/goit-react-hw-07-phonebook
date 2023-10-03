import {
  Notifications,
  Filter,
  Section,
  ContactList,
  ContactForm,
} from 'components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <Notifications message={'There are no contacts in your phonebook.'} />
        )}
      </Section>
    </>
  );
};
