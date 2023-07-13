import css from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
        <h1 className={css.MainTitle}>Phonebook</h1>
      <Link to="/contacts/add">
        <button className={css.openButton}>Add contact 📲</button>
      </Link>
    </>
  );
}

export default Header;
