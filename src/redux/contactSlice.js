import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = [
  { id: 'id-1', name: 'Igor Piliaev', number: '+380984834857' },
  { id: 'id-2', name: 'Aleksey Kudriavtcev', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: initialState },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      if (index !== -1) {
        state.contacts.splice(index, 1);
      }
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);
