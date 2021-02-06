import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { chengeFilter } from '../../redux/actions';
import { getFilter } from '../../redux/selectors';
import s from './Filter.module.css';

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.background}>
      <label className={s.label}>
        Пошук контактів по імені{' '}
        <input
          type="text"
          value={value}
          placeholder="Введіть ім'я"
          onChange={e => dispatch(chengeFilter(e.currentTarget.value))}
          className={s.input}
        />
      </label>
    </div>
  );
}

export default Filter;
