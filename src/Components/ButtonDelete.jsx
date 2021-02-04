import React from 'react';
import { useDispatch } from 'react-redux';
import { operations } from '../redux/contacts';

function Button({ id }) {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="buttonDelete"
      onClick={() => dispatch(operations.deleteContact(id))}
    >
      Delete
    </button>
  );
}

export default Button;
