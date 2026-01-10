import { configureStore } from "@reduxjs/toolkit";
import {authApi} from "../api/auth-api"
const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export {store}