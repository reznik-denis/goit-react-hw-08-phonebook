import ContactList from '../Components/ContactList/ContactList';
import ContactForm from '../Components/ContactForm/ContactForm';
import Container from '../Components/container/Container';
import Filter from '../Components/Filter/Filter';

function Contacts() {
  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
}

export default Contacts;
