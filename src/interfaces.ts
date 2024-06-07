export interface MarketPrice {
	name?: string;
	address?: string;
	city?: string;
	iconUrl?: string;
	amount?: number;
	seriesPrice: SeriesPrice[];
}

export interface SeriesPrice {
	date: string;
	value: number;
}

export interface WalletBalance {
	name: string;
	address?: string;
	city?: string;
	iconUrl?: string;
	amount?: number;
	transactions: Transaction[];
	closed?: boolean;
}

export interface Transaction {
	date: string;
	balance: number;
	amount: number;
	open?: boolean;
}

export interface InvestmentData {
	marketPrices: MarketPrice[];
	walletBalance: WalletBalance[];
}
