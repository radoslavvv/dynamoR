/* eslint-disable react-refresh/only-export-components */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInvestmentData } from "../../models/contracts/IInvestmentData";
import {
  loadCryptoData,
  loadProperitesData,
  loadRareMetalsData,
  loadStocksData,
} from "../../api/client-api";

interface IAssetsState {
  properties: IInvestmentData | null;
  crypto: IInvestmentData | null;
  stocks: IInvestmentData | null;
  rareMetals: IInvestmentData | null;
}

const initialState: IAssetsState = {
  properties: null,
  crypto: null,
  stocks: null,
  rareMetals: null,
};

export const fetchPropertiesData = createAsyncThunk(
  "assets/fetchPropertiesData",
  async () => {
    const response = await loadProperitesData();
    return response;
  },
);

export const fetchCryptoData = createAsyncThunk(
  "assets/fetchCryptoData",
  async () => {
    const response = await loadCryptoData();
    return response;
  },
);

export const fetchStocksData = createAsyncThunk(
  "assets/fetchStocksData",
  async () => {
    const response = await loadStocksData();
    return response;
  },
);

export const fetchRareMetalsData = createAsyncThunk(
  "assets/fetchRareMetalsData",
  async () => {
    const response = await loadRareMetalsData();
    return response;
  },
);

export const AssetsSlice = createSlice({
  name: "assetsSlice",
  initialState,
  reducers: {
    setProperties: (state, action: PayloadAction<IInvestmentData>) => {
      state.properties = { ...action.payload };
    },
    setCrypto: (state, action: PayloadAction<IInvestmentData>) => {
      state.crypto = { ...action.payload };
    },
    setRareMaterials: (state, action: PayloadAction<IInvestmentData>) => {
      state.rareMetals = { ...action.payload };
    },
    setStocks: (state, action: PayloadAction<IInvestmentData>) => {
      state.stocks = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPropertiesData.fulfilled, (state, action) => {
      state.properties = { ...action.payload };
    });

    builder.addCase(fetchCryptoData.fulfilled, (state, action) => {
      state.crypto = { ...action.payload };
    });

    builder.addCase(fetchStocksData.fulfilled, (state, action) => {
      state.stocks = { ...action.payload };
    });

    builder.addCase(fetchRareMetalsData.fulfilled, (state, action) => {
      state.rareMetals = { ...action.payload };
    });
  },
});

export const { setCrypto, setProperties, setRareMaterials, setStocks } =
  AssetsSlice.actions;

export default AssetsSlice;
