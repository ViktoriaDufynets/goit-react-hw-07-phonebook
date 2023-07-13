import { useSelector } from 'react-redux';
import Contact from 'components/Contact/Contact';
import Loader from 'components/Loader/Loader';
import { useGetContactsQuery } from 'redux/contact-api';
import NotFound from 'components/NotFound/NotFound';
import { getFilter } from 'redux/contact-selectors';
import css from './ContactsList.module.css';

function ContactList() {
  const { data: contacts, isFetching, error } = useGetContactsQuery();
  const { filter } = useSelector(state => getFilter(state));

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      )
    );
  };

  const filteredContactList = filtredContacts();

  return (
    <ul className={css.list}>
      {isFetching && <Loader />}
      {error && <NotFound data={error.data} status={error.status} />}
      {contacts &&
        filteredContactList.map(
          ({ id, name, phone }) => {
            return (
              <li className={css.contact} key={id}>
                <Contact
                  id={id}
                  name={name}
                  phone={phone}
                />
              </li>
            );
          },
        )}
    </ul>
  );
}

export default ContactList;
