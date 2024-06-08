/* eslint-disable react-refresh/only-export-components */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOpenClosedPositions } from "../../models/contracts/IOpenClosedPositions";

interface IPageSettingsState {
  propertiesInvestedValue: number;
  propertiesOpenClosedPositions: IOpenClosedPositions;
  propertiesValueByMonth: number[];

  cryptoInvestedValue: number;
  cryptoOpenClosedPositions: IOpenClosedPositions;
  cryptoValueByMonth: number[];

  stocksInvestedValue: number;
  stocksOpenClosedPositions: IOpenClosedPositions;
  stocksValueByMonth: number[];

  rareMetalsInvestedValue: number;
  rareMetalsOpenClosedPositions: IOpenClosedPositions;
  rareMetalsValueByMonth: number[];
}

const initialState: IPageSettingsState = {
  propertiesInvestedValue: 0,
  propertiesOpenClosedPositions: { openCount: 0, closedCount: 0 },
  propertiesValueByMonth: [],

  cryptoInvestedValue: 0,
  cryptoOpenClosedPositions: { openCount: 0, closedCount: 0 },
  cryptoValueByMonth: [],

  stocksInvestedValue: 0,
  stocksOpenClosedPositions: { openCount: 0, closedCount: 0 },
  stocksValueByMonth: [],

  rareMetalsInvestedValue: 0,
  rareMetalsOpenClosedPositions: { openCount: 0, closedCount: 0 },
  rareMetalsValueByMonth: [],
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
    setPropertiesValueByMonth: (state, action: PayloadAction<number[]>) => {
      state.propertiesValueByMonth = [...action.payload];
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
    setCryptoValueByMonth: (state, action: PayloadAction<number[]>) => {
      state.cryptoValueByMonth = [...action.payload];
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
    setStocksValueByMonth: (state, action: PayloadAction<number[]>) => {
      state.stocksValueByMonth = [...action.payload];
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
    setRareMetalsValueByMonth: (state, action: PayloadAction<number[]>) => {
      state.rareMetalsValueByMonth = [...action.payload];
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
  setCryptoValueByMonth,
  setPropertiesValueByMonth,
  setRareMetalsValueByMonth,
  setStocksValueByMonth,
} = AssetsCalculationsSlice.actions;

export default AssetsCalculationsSlice;
