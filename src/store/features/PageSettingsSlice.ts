/* eslint-disable react-refresh/only-export-components */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ThemeType } from "../../models/enums/ThemeType";

interface IPageSettingsState {
  theme: string;
  themeType: ThemeType;
  sidebarIsOpen: boolean;
  sectionHeader: string;
}

const initialState: IPageSettingsState = {
  theme: "",
  themeType: ThemeType.Dark,
  sidebarIsOpen: false,
  sectionHeader: "Personal Investments",
};

export const PageSettingsSlice = createSlice({
  name: "pageSettings",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    setThemeType: (state, action: PayloadAction<ThemeType>) => {
      state.themeType = action.payload;
    },
    setSidebarIsOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarIsOpen = action.payload;
    },
    setSectionHeader: (state, action: PayloadAction<string>) => {
      state.sectionHeader = action.payload;
    },
  },
});

export const { setTheme, setThemeType, setSidebarIsOpen, setSectionHeader } =
  PageSettingsSlice.actions;

export default PageSettingsSlice;
