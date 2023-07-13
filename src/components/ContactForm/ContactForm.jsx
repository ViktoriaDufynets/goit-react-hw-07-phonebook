import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/contact-api';
import { Formik, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Report } from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './ContactForm.module.css';

function ContactForm() {
  const navigate = useNavigate();

  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const onSubmitForm = ({ name, phone }) => {
    contacts.some(contact => contact.name === name)
      ? Report.warning(
          `${name}`,
          'This user is already in the contact list.',
          'OK',
        )
      : createContact({ name, phone });
      Notify.success(`The ${name} has been added to your contact list.`);

    navigate('/');


  };


  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      onSubmit={onSubmitForm}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <div className={css.form}>
            <span className={css.field}>Name</span>
            <input className={css.input}
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="div" />

            <span className={css.field1}>Phone</span>
            <input className={css.input}
              type="tel"
              name="phone"
              onChange={handleChange}
              value={values.phone}
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="phone" component="div" />
          <button className={css.button} type="submit" disabled={isSubmitting}>
            Add contact
          </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
