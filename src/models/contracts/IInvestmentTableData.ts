import { AssetType } from "../enums/AssetType";
import { ISeriesPrice } from "./ISeriesPrice";
import { ITransaction } from "./ITransaction";

export interface IInvestmentTableData {
  name: string;
  balance: number;
  value: number;
  marketPrice: number;
  date: string;
  seriesPrice: ISeriesPrice[];
  assetType: AssetType;
  transactions: ITransaction[];
}
