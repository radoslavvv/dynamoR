import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { PageSettingsSlice } from "./features/PageSettingsSlice";

const store = configureStore({
  reducer: {
    pageSettings: PageSettingsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
