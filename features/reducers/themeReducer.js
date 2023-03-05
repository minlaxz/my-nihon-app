import { createSlice } from "@reduxjs/toolkit";

// value => "dark" or "light"
const initialState = { value: "dark" };

const themeSlice = createSlice({
  name: "themeReducer",
  initialState,
  reducers: {
    toggle: (state) => { 
      state.value = !state.value
    },
  }
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;