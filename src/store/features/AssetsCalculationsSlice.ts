/* eslint-disable react-refresh/only-export-components */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOpenClosedPositions } from "../../models/contracts/IOpenClosedPositions";

interface IPageSettingsState {
  propertiesInvestedValue: number;
  propertiesOpenClosedPositions: IOpenClosedPositions;

  cryptoInvestedValue: number;
  cryptoOpenClosedPositions: IOpenClosedPositions;

  stocksInvestedValue: number;
  stocksOpenClosedPositions: IOpenClosedPositions;

  rareMetalsInvestedValue: number;
  rareMetalsOpenClosedPositions: IOpenClosedPositions;
}

const initialState: IPageSettingsState = {
  propertiesInvestedValue: 0,
  propertiesOpenClosedPositions: { openCount: 0, closedCount: 0 },

  cryptoInvestedValue: 0,
  cryptoOpenClosedPositions: { openCount: 0, closedCount: 0 },

  stocksInvestedValue: 0,
  stocksOpenClosedPositions: { openCount: 0, closedCount: 0 },

  rareMetalsInvestedValue: 0,
  rareMetalsOpenClosedPositions: { openCount: 0, closedCount: 0 },
};

export const AssetsCalculationsSlice = createSlice({
  name: "assetsCalculationsSlice",
  initialState,
  reducers: {
    setPropertiesInvestedValue: (state, action: PayloadAction<number>) => {
      state.propertiesInvestedValue = action.payload;
    },
    setPropertiesOpenClosedPositions: (
      state,
      action: PayloadAction<IOpenClosedPositions>,
    ) => {
      state.propertiesOpenClosedPositions = { ...action.payload };
    },
    setCryptoInvestedValue: (state, action: PayloadAction<number>) => {
      state.cryptoInvestedValue = action.payload;
    },
    setCryptoOpenClosedPositions: (
      state,
      action: PayloadAction<IOpenClosedPositions>,
    ) => {
      state.cryptoOpenClosedPositions = { ...action.payload };
    },
    setStocksInvestedValue: (state, action: PayloadAction<number>) => {
      state.stocksInvestedValue = action.payload;
    },
    setStocksOpenClosedPositions: (
      state,
      action: PayloadAction<IOpenClosedPositions>,
    ) => {
      state.stocksOpenClosedPositions = { ...action.payload };
    },
    setRareMetalsInvestedValue: (state, action: PayloadAction<number>) => {
      state.rareMetalsInvestedValue = action.payload;
    },
    setRareMetalsOpenClosedPositions: (
      state,
      action: PayloadAction<IOpenClosedPositions>,
    ) => {
      state.rareMetalsOpenClosedPositions = { ...action.payload };
    },
  },
});

export const {
  setCryptoInvestedValue,
  setPropertiesInvestedValue,
  setRareMetalsInvestedValue,
  setStocksInvestedValue,
  setCryptoOpenClosedPositions,
  setPropertiesOpenClosedPositions,
  setRareMetalsOpenClosedPositions,
  setStocksOpenClosedPositions,
} = AssetsCalculationsSlice.actions;

export default AssetsCalculationsSlice;
