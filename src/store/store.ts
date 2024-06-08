import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "./features/UserSlice";
import AssetsSlice from "./features/AssetsSlice";
import PageSettingsSlice from "./features/PageSettingsSlice";
import AssetsCalculationsSlice from "./features/AssetsCalculationsSlice";

const store = configureStore({
  reducer: {
    pageSettings: PageSettingsSlice.reducer,
    assests: AssetsSlice.reducer,
    assetsCalculations: AssetsCalculationsSlice.reducer,
    user: UserSlice.reducer,
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
