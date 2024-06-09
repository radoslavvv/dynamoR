import { AssetType } from "../enums/AssetType";
import { ISeriesPrice } from "./ISeriesPrice";
import { ITransaction } from "./ITransaction";

export interface ILastInvestmentData {
  name: string;
  balance: number;
  // amount: number;
  value: number;
  marketPrice: number;
  // position: boolean;
  date: string;
  seriesPrice: ISeriesPrice[];
  assetType: AssetType;
  transactions: ITransaction[];
}
