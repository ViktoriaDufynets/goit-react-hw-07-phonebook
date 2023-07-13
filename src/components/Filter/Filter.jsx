import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts-slice';

function Filter() {
  const dispatch = useDispatch();

  const changeFieldFilter = e => {
    const value = e.currentTarget.value;
    dispatch(changeFilter(value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={changeFieldFilter} name="filter" />
    </div>
  );
}

export default Filter;
