import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { operations, selectors } from '../redux/contacts';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactsItems = useSelector(selectors.getContacts);
  const dispatch = useDispatch();

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const repeatName = name => {
    return contactsItems.find(
      contact =>
        contact.name && contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const repeatPhone = number => {
    return contactsItems.find(contact => contact.number === number);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (repeatName(name)) {
      alert(`${name} is already added.`);
    } else if (repeatPhone(number)) {
      alert(`${number} is already added.`);
    } else if (name.trim() === '' || number.trim() === '') {
      alert('All of inputs must be not empty');
    } else {
      dispatch(operations.addContact(name, number));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="formBlock" onSubmit={handleSubmit}>
      <label className="labelBlock">
        Name{' '}
        <input
          type="text"
          value={name}
          onChange={handleChangeName}
          name="name"
          className="inputStyles"
        />
      </label>
      <label className="labelBlock">
        Number{' '}
        <input
          type="tel"
          value={number}
          onChange={handleChangeNumber}
          name="number"
          className="inputStyles"
        />
      </label>
      <button type="submit" className="button" disabled={!name || !number}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
