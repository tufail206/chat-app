import { configureStore } from "@reduxjs/toolkit";
import {authApi} from "../api/auth-api"
import authReducer from "./slices/auth"
const store = configureStore({
  reducer: {
    auth:authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export {store}