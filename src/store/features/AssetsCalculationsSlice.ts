/* eslint-disable react-refresh/only-export-components */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IOpenClosedPositions } from "../../models/contracts/IOpenClosedPositions";
import { IInvestmentTableData } from "../../models/contracts/IInvestmentTableData";

interface IPageSettingsState {
  investedValuesAreCalculated: boolean;
  valuesByMonthAreCalculated: boolean;
  investmentTableDataIsCalculated: boolean;

  propertiesInvestedValue: number;
  propertiesOpenClosedPositions: IOpenClosedPositions;
  propertiesValueByMonth: number[];
  propertiesInvestmentTableData: IInvestmentTableData[];

  cryptoInvestedValue: number;
  cryptoOpenClosedPositions: IOpenClosedPositions;
  cryptoValueByMonth: number[];
  cryptoInvestmentTableData: IInvestmentTableData[];

  stocksInvestedValue: number;
  stocksOpenClosedPositions: IOpenClosedPositions;
  stocksValueByMonth: number[];
  stocksInvestmentTableData: IInvestmentTableData[];

  rareMetalsInvestedValue: number;
  rareMetalsOpenClosedPositions: IOpenClosedPositions;
  rareMetalsValueByMonth: number[];
  rareMetalsInvestmentTableData: IInvestmentTableData[];
}

const initialState: IPageSettingsState = {
  investedValuesAreCalculated: false,
  valuesByMonthAreCalculated: false,
  investmentTableDataIsCalculated: false,

  propertiesInvestedValue: 0,
  propertiesOpenClosedPositions: { openCount: 0, closedCount: 0 },
  propertiesValueByMonth: [],
  propertiesInvestmentTableData: [],

  cryptoInvestedValue: 0,
  cryptoOpenClosedPositions: { openCount: 0, closedCount: 0 },
  cryptoValueByMonth: [],
  cryptoInvestmentTableData: [],

  stocksInvestedValue: 0,
  stocksOpenClosedPositions: { openCount: 0, closedCount: 0 },
  stocksValueByMonth: [],
  stocksInvestmentTableData: [],

  rareMetalsInvestedValue: 0,
  rareMetalsOpenClosedPositions: { openCount: 0, closedCount: 0 },
  rareMetalsValueByMonth: [],
  rareMetalsInvestmentTableData: [],
};

export const AssetsCalculationsSlice = createSlice({
  name: "assetsCalculationsSlice",
  initialState,
  reducers: {
    setInvestedValuesAreCalculated: (state, action: PayloadAction<boolean>) => {
      state.investedValuesAreCalculated = action.payload;
    },
    setValuesByMonthAreCalculated: (state, action: PayloadAction<boolean>) => {
      state.valuesByMonthAreCalculated = action.payload;
    },
    setInvestmentTableDataIsCalcualted: (
      state,
      action: PayloadAction<boolean>,
    ) => {
      state.investmentTableDataIsCalculated = action.payload;
    },
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
    setPropertiesInvestmentTableData: (
      state,
      action: PayloadAction<IInvestmentTableData[]>,
    ) => {
      state.propertiesInvestmentTableData = [...action.payload];
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
    setCryptoInvestmentTableData: (
      state,
      action: PayloadAction<IInvestmentTableData[]>,
    ) => {
      state.cryptoInvestmentTableData = [...action.payload];
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
    setStocksInvestmentTableData: (
      state,
      action: PayloadAction<IInvestmentTableData[]>,
    ) => {
      state.stocksInvestmentTableData = [...action.payload];
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
    setRareMetalsInvestmentTableData: (
      state,
      action: PayloadAction<IInvestmentTableData[]>,
    ) => {
      state.rareMetalsInvestmentTableData = [...action.payload];
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
  setCryptoInvestmentTableData,
  setPropertiesInvestmentTableData,
  setRareMetalsInvestmentTableData,
  setStocksInvestmentTableData,
  setInvestedValuesAreCalculated,
  setValuesByMonthAreCalculated,
  setInvestmentTableDataIsCalcualted,
} = AssetsCalculationsSlice.actions;

export default AssetsCalculationsSlice;
