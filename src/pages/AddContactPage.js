import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import { Link } from 'react-router-dom';
import css from './AddContactPage.module.css';

function AddContactPage() {
  return (
    <Container>
      <Link to="/">
        <button className={css.GoBackButton}> ⬅ Go back</button>
      </Link>
      <ContactForm />
    </Container>
  );
}

export default AddContactPage;
