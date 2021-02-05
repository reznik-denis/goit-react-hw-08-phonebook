import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactsItems = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const repeatName = name => {
    return contactsItems.find(
      contact =>
        contact.name && contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const repeatNumber = number => {
    return contactsItems.find(contact => contact.number === number);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (repeatName(name)) {
      alert(`${name}. Таке ім'я вже існує`);
    } else if (repeatNumber(number)) {
      alert(`${number}. Такий номер вже існує`);
    } else if (name.trim() === '' || number.trim() === '') {
      alert('Заповніть будь-ласка всі поля форми');
    } else {
      dispatch(addContact(name, number));
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
          onChange={handleChange}
          name="name"
          className="inputStyles"
        />
      </label>
      <label className="labelBlock">
        Number{' '}
        <input
          type="tel"
          value={number}
          onChange={handleChange}
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
