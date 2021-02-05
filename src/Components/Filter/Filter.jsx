import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { chengeFilter } from '../../redux/actions';
import { getFilter } from '../../redux/selectors';

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className="labelBlock">
      Пошук контактів по імені{' '}
      <input
        type="text"
        value={value}
        onChange={e => dispatch(chengeFilter(e.currentTarget.value))}
        className="inputStyles"
      />
    </label>
  );
}

export default Filter;
