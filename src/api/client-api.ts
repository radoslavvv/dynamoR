import axios from "axios";
import { IInvestmentData } from "../models/contracts/IInvestmentData";
// import { DYNAMO_API_URL } from "../utils/constants";
import { crypto, properties, rareMaterials, stocks, user } from "../data/data";
import { IUserData } from "../models/contracts/IUserData";

export const loadProperitesData = async (): Promise<IInvestmentData> => {
  // const axiosInstance = axios.create({
  //   baseURL: `${DYNAMO_API_URL}`,
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Content-Type": "application/json;charset=UTF-8", //this line solved cors
  //   },
  // });

  // const res = axiosInstance.get("/asset/properties");

  // console.log(res);
  //   const url = ;
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

export const loadUserData = async (): Promise<IUserData> => {
  //   const url = `${DYNAMO_API_URL}/asset/stocks`;
  //   return getDataFromURL(url);

  return user;
};

export const getDataFromURL = async (url: string): Promise<IInvestmentData> => {
  const response = await axios.get<IInvestmentData>(url);
  return response.data;
};
