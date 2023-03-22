import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  user: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.status = !state.status;
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = formSlice.actions;

export default formSlice.reducer;
