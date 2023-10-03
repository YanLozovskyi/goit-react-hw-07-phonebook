import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    isDeleting: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = false;
        state.contacts = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = false;
        state.contacts.push(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isDeleting = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isDeleting = false;
        state.error = false;
        const index = state.contacts.findIndex(
          contact => contact.id === payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isDeleting = false;
        state.error = payload;
      });
  },
});

export const contactsReducer = contactSlice.reducer;
