import { ISeriesPrice } from "./ISeriesPrice";

export interface IMarketPrice {
  name?: string;
  address?: string;
  city?: string;
  iconUrl?: string;
  amount?: number;
  seriesPrice: ISeriesPrice[];
}
