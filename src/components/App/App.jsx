import {
  Notifications,
  Filter,
  Section,
  ContactList,
  ContactForm,
  Loader,
} from 'components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsOperations';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const visibleContacts = useSelector(selectVisibleContacts);
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
        {contacts.length > 0 && visibleContacts.length === 0 && (
          <Notifications message={'No one found with that name.'} />
        )}
        {contacts.length === 0 && !isLoading && (
          <Notifications message={'There are no contacts in your phonebook.'} />
        )}
        {isLoading && <Loader />}
        {contacts.length > 0 && <ContactList />}
      </Section>
    </>
  );
};
