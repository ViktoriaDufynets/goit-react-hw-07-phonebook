import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function NotFound({ data, status }) {
  return (
    <div>
      <p>
        Sorry {status} {data}
      </p>
      <p>Try reloading the page.</p>
      <Link to="/">Go back to the main page</Link>
    </div>
  );
}

NotFound.prototype = {
  data: propTypes.string,
  status: propTypes.number,
};

export default NotFound;
