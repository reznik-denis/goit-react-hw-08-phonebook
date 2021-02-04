import ContactList from '../Components/ContactList';
import ContactForm from '../Components/ContactForm';
import Container from '../Components/container/Container';
import Filter from '../Components/Filter';

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
