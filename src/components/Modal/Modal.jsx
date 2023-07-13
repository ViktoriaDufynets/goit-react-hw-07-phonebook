import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({children, onClose}) {

   useEffect(() => {
    const hanpleKeydown = e => {
        if (e.code === 'Escape') {
          onClose();
        }
    }
   
    window.addEventListener('keydown', hanpleKeydown);

    return () => window.removeEventListener('keydown', hanpleKeydown);
  }, [onClose]);

  const hanpleClickOnBack = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
   };

        return createPortal(
            <div className={css.modalBackdrop} onClick={hanpleClickOnBack}>
                <div className={css.modalContent}> {children} </div>
            </div>,
            modalRoot,
        )
};

Modal.propTypes = {
  children: PropTypes.element,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
