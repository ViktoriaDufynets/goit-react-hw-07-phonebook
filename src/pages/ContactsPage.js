import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Message from 'components/Message';
import { useGetContactsQuery } from 'redux/contact-api';
import Container from 'components/Container/Container';
import css from './ContactsPage.module.css';

function ContactsPage() {
  const { data } = useGetContactsQuery();

  return (
    <Container>
    <h2 className={css.title}>Contacts</h2>
      <Filter />
      {!data || data.length === 0 ? <Message /> : <ContactList />}
    </Container>
  );
}

export default ContactsPage;
