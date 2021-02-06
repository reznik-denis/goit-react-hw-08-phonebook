import { useEffect } from 'react';
import ButtonDelete from '../ButtonDel/ButtonDelete';
import { useSelector, useDispatch } from 'react-redux';
import * as operations from '../../redux/operations';
import { getVisibleContacts, getError } from '../../redux/selectors';
import Loader from '../Loader/Loader';
import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContact());
  }, [dispatch]);

  if (contacts.length > 0 && !error) {
    return (
      <div className={s.background}>
        <ul className={s.list}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.listItem}>
              <div className={s.item}>{name}</div>
              <div className={s.item}>{number}</div>
              <ButtonDelete id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  } else if (contacts.length === 0 && !error) {
    return (
      <div className={s.background}>
        <Loader />
        <p className={s.title}>У вас не збережено жодного контакту!</p>
      </div>
    );
  } else if (error) {
    return (
      <div className={s.background}>
        {error && <h2>{error.message}</h2>}
        <p className={s.title}>Помилка!</p>
      </div>
    );
  } else {
    return <Loader />;
  }
}

export default ContactList;
