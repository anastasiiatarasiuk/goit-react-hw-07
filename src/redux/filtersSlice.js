import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.filter;

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
