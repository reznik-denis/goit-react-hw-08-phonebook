import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { chengeFilter } from '../redux/contacts/actions';
import { selectors } from '../redux/contacts';

function Filter() {
  const value = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  return (
    <label className="labelBlock">
      Find contacts by name{' '}
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
