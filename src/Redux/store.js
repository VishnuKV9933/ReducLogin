import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./Logn";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
