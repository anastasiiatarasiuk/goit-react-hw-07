import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContacts: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContacts: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectContacts = (state) => state.contacts.items;

export const contactsReducer = contactsSlice.reducer;
export const { addContacts, deleteContacts } = contactsSlice.actions;
