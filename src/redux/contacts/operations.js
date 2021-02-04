import * as actions from './actions';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error));
  }
};

export const fetchContact = () => async dispatch => {
  dispatch(actions.fetchContactRequest());
  try {
    const data = await axios.get(`/contacts`);
    dispatch(actions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactError(error));
  }
};

export const addContact = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(actions.formSubmitRequest());
  try {
    const { data } = await axios.post(`/contacts`, contact);
    dispatch(actions.formSubmitSuccess(data));
  } catch (error) {
    dispatch(actions.formSubmitError(error));
  }
};
