import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import { userApi } from "./features/api/apiSlice";
import formSlice from "./features/form/formSlice";

const store = configureStore({
  devTools: true,
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    users: userReducer,
    form: formSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;
