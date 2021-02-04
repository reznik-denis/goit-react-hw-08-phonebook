import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  chengeFilter,
  formSubmitRequest,
  formSubmitSuccess,
  formSubmitError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './actions.js';

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [formSubmitSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [chengeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [formSubmitRequest]: () => true,
  [formSubmitSuccess]: () => false,
  [formSubmitError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactError]: (_, action) => action.payload,
  [fetchContactRequest]: () => null,
  [formSubmitRequest]: () => null,
  [deleteContactRequest]: () => null,
  [deleteContactError]: (_, action) => action.payload,
  [formSubmitError]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
