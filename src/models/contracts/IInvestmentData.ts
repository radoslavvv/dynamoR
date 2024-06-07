import { IMarketPrice } from "./IMarketPrice";
import { IWalletBalance } from "./IWalletBalance";

export interface IInvestmentData {
  marketPrices: IMarketPrice[];
  walletBalance: IWalletBalance[];
}
