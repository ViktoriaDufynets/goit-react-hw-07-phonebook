import PropTypes from 'prop-types';
import { FaTrash, FaUserEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import DeletingContact from 'components/DeletingContact/DeletingContact';

function Contact({ id, name, phone }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  const navigate = useNavigate();
  const openEditPage = () => navigate(`/contacts/${id}/edit`);

  return (
    <>
      {showModal && (
        <Modal onClose={toggleModal} title={name}>
          <DeletingContact id={id} name={name} toggleModal={toggleModal} />
        </Modal>
      )}

      <div>
        <Link to={`/contacts/${id}`}>
          <div>
          <img src={"https://loremflickr.com/320/240?random"} alt={name} />
            <p>{name}</p>
          </div>
          <div>
              <p>Phone: </p>
              {phone}
          </div>
        </Link>
        <div>
          <button type="button" onClick={toggleModal}>
            <FaTrash />
          </button>
          <button type="button" onClick={openEditPage}>
            <FaUserEdit />
          </button>
        </div>
      </div>
    </>
  );
}

Contact.prototype = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  photo: PropTypes.string,
};

export default Contact;
