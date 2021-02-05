import { useEffect } from 'react';
import ButtonDelete from '../ButtonDel/ButtonDelete';
import { useSelector, useDispatch } from 'react-redux';
import * as operations from '../../redux/operations';
import { getVisibleContacts, getError } from '../../redux/selectors';
import Loader from '../Loader/Loader';

function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const error = useSelector(getError);
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
        <p>У вас не збережено жодного контакту!</p>
      </div>
    );
  } else if (error) {
    return (
      <div>
        {error && <h2>{error.message}</h2>}
        <p>Помилка!</p>
      </div>
    );
  } else {
    return <Loader />;
  }
}

export default ContactList;
