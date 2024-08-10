import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContactsThunk,
  deleteContactsThunk,
  fetchContactsThunk,
} from "./contactsOps";

const initialState = {
  items: [],
  isLoading: false,
  isError: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          deleteContactsThunk.pending,
          addContactsThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          deleteContactsThunk.rejected,
          addContactsThunk.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.fulfilled,
          deleteContactsThunk.fulfilled,
          addContactsThunk.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
