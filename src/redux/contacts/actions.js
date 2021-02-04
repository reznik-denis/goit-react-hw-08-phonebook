import { createAction } from '@reduxjs/toolkit';

export const chengeFilter = createAction('contact/ChengeFilter');

export const formSubmitRequest = createAction('contact/formSubmitRequest');
export const formSubmitSuccess = createAction('contact/formSubmitSuccess');
export const formSubmitError = createAction('contact/formSubmitError');

export const deleteContactRequest = createAction(
  'contact/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contact/deleteContactSuccess',
);
export const deleteContactError = createAction('contact/deleteContactError');

export const fetchContactRequest = createAction('contact/fetchContactRequest');
export const fetchContactSuccess = createAction('contact/fetchContactSuccess');
export const fetchContactError = createAction('contact/fetchContactError');
