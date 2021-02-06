import './App.css';
import ContactList from './views/ContactList';
import HomeView from './views/HomeView';
import LoginView from './views/LoginViews/LoginView';
import RegisterView from './views/ReigsterViews/RegisterView';
import { Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
import Container from './Components/container';
import AppBar from './Components/AppBar';
import PrivatRoute from './Components/PrivatRoute';
import PublicRoute from './Components/PublicRoute';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <Container>
          <AppBar />
          <Switch>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" restricted>
              <LoginView />
            </PublicRoute>
            <PrivatRoute>
              <ContactList path="/contacts" />
            </PrivatRoute>
          </Switch>
        </Container>
      </>
    )
  );
}

export default App;
