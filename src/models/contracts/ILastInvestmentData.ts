import { ISeriesPrice } from "./ISeriesPrice";

export interface ILastInvestmentData {
  name: string;
  balance: number;
  amount: number;
  marketPrice: number;
  position: boolean;
  seriesPrice: ISeriesPrice[];
}
