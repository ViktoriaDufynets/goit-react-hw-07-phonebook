import PropTypes from 'prop-types';
import css from './Container.module.css';

function Container({ children, title }) {
  return (
    <div  className={css.Container}>
      {title && <p>{title}</p>}
      {children}
    </div>
  );
}

Container.prototype = {
  children: PropTypes.element,
  title: PropTypes.string,
};

export default Container;
