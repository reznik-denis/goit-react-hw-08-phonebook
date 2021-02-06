import ContactList from '../Components/ContactList/ContactList';
import ContactForm from '../Components/ContactForm/ContactForm';
import Container from '../Components/container/Container';
import Filter from '../Components/Filter/Filter';
import s from './ContactList.module.css';

function Contacts() {
  return (
    <Container>
      <div className={s.flex}>
        <div className={s.margin}>
          <ContactForm />
          <Filter />
        </div>
        <div>
          <ContactList />
        </div>
      </div>
    </Container>
  );
}

export default Contacts;
