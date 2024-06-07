import { ITransaction } from "./ITransaction";

export interface IWalletBalance {
  name: string;
  address?: string;
  city?: string;
  iconUrl?: string;
  amount?: number;
  transactions: ITransaction[];
  closed?: boolean;
}
