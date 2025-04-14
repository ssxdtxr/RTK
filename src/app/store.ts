import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../shared/api/api";
import { router } from "./router";

export const extraArgument = {
  router,
};

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument } }).concat(
      baseApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
