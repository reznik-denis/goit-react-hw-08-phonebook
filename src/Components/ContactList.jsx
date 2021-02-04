import { useEffect } from 'react';
import ButtonDelete from './ButtonDelete';
import { useSelector, useDispatch } from 'react-redux';
import { operations, selectors } from '../redux/contacts';
import Loader from './Loader';

function ContactList() {
  const contacts = useSelector(selectors.getVisibleContacts);
  const error = useSelector(selectors.getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContact());
  }, [dispatch]);
  if (contacts.length > 0 && !error) {
    return (
      <ul className="list">
        {contacts.map(({ id, name, number }) => (
          <li key={id} className="listItem">
            {name}: {number}
            <ButtonDelete id={id} />
          </li>
        ))}
      </ul>
    );
  } else if (contacts.length === 0 && !error) {
    return (
      <div>
        <Loader />
        <p>Тут пока ничего нет!</p>
      </div>
    );
  } else if (error) {
    return (
      <div>
        {error && <h2>{error.message}</h2>}
        <p>Триває обробка помилки!</p>
      </div>
    );
  } else {
    return <Loader />;
  }
}

export default ContactList;
