/* eslint-disable react-refresh/only-export-components */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserData } from "../../models/contracts/IUserData";

import { loadUserData } from "../../api/client-api";

interface IUserSliceState {
  userData: IUserData | null;
}

const initialState: IUserSliceState = {
  userData: null,
};

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const response = await loadUserData();
    return response;
  },
);

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUserData>) => {
      state.userData = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.userData = { ...action.payload };
    });
  },
});

export const { setUserData } = UserSlice.actions;

export default UserSlice;
