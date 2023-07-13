import { useDeleteContactMutation } from 'redux/contact-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function DeletingContact({ id, name, toggleModal }) {
  const navigate = useNavigate();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const deleteSelectedContact = () => {
    deleteContact(id);
    navigate('/');
    Notify.success(`The ${name} has been removed from your contact list.`);
  };

  return (
    <>
      <p>
        Are you sure you want to delete a contact <span>{name}</span>?
      </p>
      <ul>
        <li>
          <button type="button" onClick={toggleModal}>
            Cancel
          </button>
        </li>
        <li>
          <button type="button" onClick={deleteSelectedContact}>
            {isDeleting ? '...' : 'Delete'}
          </button>
        </li>
      </ul>
    </>
  );
}

DeletingContact.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default DeletingContact;
