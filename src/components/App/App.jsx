import {
  Notifications,
  Filter,
  Section,
  ContactList,
  ContactForm,
} from 'components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsOperations';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && <div>Loading...</div>}
        {contacts.length > 0 && !isLoading ? (
          <ContactList />
        ) : (
          <Notifications message={'There are no contacts in your phonebook.'} />
        )}
      </Section>
    </>
  );
};
