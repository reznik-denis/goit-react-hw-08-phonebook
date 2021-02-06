import React from 'react';
import { useDispatch } from 'react-redux';
import * as operations from '../../redux/operations';
import s from './ButtonDelete.module.css';

function Button({ id }) {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={s.button}
      onClick={() => dispatch(operations.deleteContact(id))}
    >
      Видалити
    </button>
  );
}

export default Button;
