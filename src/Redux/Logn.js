import { createSlice } from "@reduxjs/toolkit";

const INITISL_STATE = {
  user: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState: INITISL_STATE,
  reducers: {
    registeration: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { registeration, logOut } = loginSlice.actions;

export default loginSlice.reducer;
