import axios from "axios";
import { IInvestmentData } from "../models/contracts/IInvestmentData";
// import { DYNAMO_API_URL } from "../utils/constants";
import { crypto, properties, rareMaterials, stocks } from "../data";

export const loadProperitesData = async (): Promise<IInvestmentData> => {
  //   const url = `${DYNAMO_API_URL}/asset/properties`;
  //   return getDataFromURL(url);

  return properties;
};

export const loadCryptoData = async (): Promise<IInvestmentData> => {
  //   const url = `${DYNAMO_API_URL}/asset/crypto`;
  //   return getDataFromURL(url);

  return crypto;
};

export const loadRareMetalsData = async (): Promise<IInvestmentData> => {
  //   const url = `${DYNAMO_API_URL}/asset/rare_metals`;
  //   return getDataFromURL(url);
  return rareMaterials;
};

export const loadStocksData = async (): Promise<IInvestmentData> => {
  //   const url = `${DYNAMO_API_URL}/asset/stocks`;
  //   return getDataFromURL(url);

  return stocks;
};

export const getDataFromURL = async (url: string): Promise<IInvestmentData> => {
  const response = await axios.get<IInvestmentData>(url);
  return response.data;
};
