import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';
import s from './ContactForm.module.css';

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
    <div className={s.background}>
      <h1 className={s.title}>Додати контакт до книги</h1>
      <form className={s.formBlock} onSubmit={handleSubmit}>
        <label className={s.label}>
          Ім'я{' '}
          <input
            type="text"
            value={name}
            placeholder="Ім'я"
            onChange={handleChange}
            name="name"
            className={s.input}
          />
        </label>
        <label className={s.label}>
          Номер телефону{' '}
          <input
            type="tel"
            placeholder="+38 (000) 000-00-00"
            value={number}
            onChange={handleChange}
            name="number"
            className={s.input}
          />
        </label>
        <button type="submit" className={s.button} disabled={!name || !number}>
          Додати
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
