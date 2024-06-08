/* eslint-disable react-refresh/only-export-components */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IOpenClosedPositions } from "../../models/contracts/IOpenClosedPositions";
import { ILastInvestmentData } from "../../models/contracts/ILastInvestmentData";

interface IPageSettingsState {
  propertiesInvestedValue: number;
  propertiesOpenClosedPositions: IOpenClosedPositions;
  propertiesValueByMonth: number[];
  propertiesLastInvestmentData: ILastInvestmentData[];

  cryptoInvestedValue: number;
  cryptoOpenClosedPositions: IOpenClosedPositions;
  cryptoValueByMonth: number[];
  cryptoLastInvestmentData: ILastInvestmentData[];

  stocksInvestedValue: number;
  stocksOpenClosedPositions: IOpenClosedPositions;
  stocksValueByMonth: number[];
  stocksLastInvestmentData: ILastInvestmentData[];

  rareMetalsInvestedValue: number;
  rareMetalsOpenClosedPositions: IOpenClosedPositions;
  rareMetalsValueByMonth: number[];
  rareMetalsLastInvestmentData: ILastInvestmentData[];
}

const initialState: IPageSettingsState = {
  propertiesInvestedValue: 0,
  propertiesOpenClosedPositions: { openCount: 0, closedCount: 0 },
  propertiesValueByMonth: [],
  propertiesLastInvestmentData: [],

  cryptoInvestedValue: 0,
  cryptoOpenClosedPositions: { openCount: 0, closedCount: 0 },
  cryptoValueByMonth: [],
  cryptoLastInvestmentData: [],

  stocksInvestedValue: 0,
  stocksOpenClosedPositions: { openCount: 0, closedCount: 0 },
  stocksValueByMonth: [],
  stocksLastInvestmentData: [],

  rareMetalsInvestedValue: 0,
  rareMetalsOpenClosedPositions: { openCount: 0, closedCount: 0 },
  rareMetalsValueByMonth: [],
  rareMetalsLastInvestmentData: [],
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
    setPropertiesLastInvestmentData: (
      state,
      action: PayloadAction<ILastInvestmentData[]>,
    ) => {
      state.propertiesLastInvestmentData = [...action.payload];
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
    setCryptoLastInvestmentData: (
      state,
      action: PayloadAction<ILastInvestmentData[]>,
    ) => {
      state.cryptoLastInvestmentData = [...action.payload];
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
    setStocksLastInvestmentData: (
      state,
      action: PayloadAction<ILastInvestmentData[]>,
    ) => {
      state.stocksLastInvestmentData = [...action.payload];
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
    setRareMetalsLastInvestmentData: (
      state,
      action: PayloadAction<ILastInvestmentData[]>,
    ) => {
      state.rareMetalsLastInvestmentData = [...action.payload];
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
  setCryptoLastInvestmentData,
  setPropertiesLastInvestmentData,
  setRareMetalsLastInvestmentData,
  setStocksLastInvestmentData,
} = AssetsCalculationsSlice.actions;

export default AssetsCalculationsSlice;
