import { FaTrash, FaUserEdit, FaArrowLeft } from 'react-icons/fa';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ChangeContactPage from 'pages/ChangeContactPage';
import { useGetContactByidQuery } from 'redux/contact-api';
import Loader from 'components/Loader/Loader';
import NotFound from 'components/NotFound/NotFound';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import DeletingContact from 'components/DeletingContact/DeletingContact';
import css from './ContactInfo.module.css';

function ContactInfo() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  const navigate = useNavigate();
  const { contactId } = useParams();

  const {
    data: contact,
    isFetching,
    error,
  } = useGetContactByidQuery(contactId);

  return (
    <>
      {showModal && (
        <Modal onClose={toggleModal} title={contact.name}>
          <DeletingContact
            id={contactId}
            name={contact.name}
            toggleModal={toggleModal}
          />
        </Modal>
      )}

      {isFetching && <Loader />}
      {error && <NotFound data={error.data} status={error.status} />}
      {contact && (
        <div>
          <button className={css.GoBack} type="button" onClick={() => navigate('/')}>
            <FaArrowLeft />
          </button>
          <div className={css.Card} >
            <img src={"https://loremflickr.com/320/240"} alt={contact.name} />
            <p>{contact.name}</p>
            <p>Phone: {contact.phone}</p>
          <div>
            <button className={css.butt} type="button" onClick={toggleModal}>
              <FaTrash />
            </button>
            <button className={css.butt}>
            <Link to="edit" type="button">
              <FaUserEdit />
            </Link>
            </button>
          </div>
          </div>
        </div>
      )}

      <Routes>
        <Route path="edit" element={<ChangeContactPage />} />
      </Routes>
    </>
  );
}

export default ContactInfo;
