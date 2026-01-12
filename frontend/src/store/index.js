import { configureStore } from "@reduxjs/toolkit";
import {authApi} from "../api/auth-api"
import authReducer from "./slices/auth"
import { messageApi } from "../api/message-api";
const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(messageApi.middleware),
});

export {store}