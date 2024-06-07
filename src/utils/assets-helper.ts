import { IInvestmentData } from "../models/contracts/IInvestmentData";
import { IMarketPrice } from "../models/contracts/IMarketPrice";
import { IOpenClosedPositions } from "../models/contracts/IOpenClosedPositions";
import { AssetType } from "../models/enums/AssetType";

export const formatNumber = (number: number): string => {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(number);
};

export const getAssetInvestedValue = (
  data: IInvestmentData,
  assetType: AssetType,
) => {
  let value: number = 0;

  for (let i = 0; i < data.walletBalance.length; i++) {
    const currentAsset = data.walletBalance[i];

    if (currentAsset.transactions.length === 0) {
      continue;
    }

    const lastTransaction =
      currentAsset.transactions[currentAsset.transactions.length - 1];

    const currentPrice = getLastAssetPrice(
      data.marketPrices,
      assetType,
      currentAsset.address || currentAsset.name,
    );

    if (!lastTransaction || !currentPrice) {
      continue;
    }

    value += lastTransaction.balance * currentPrice;
  }

  return value;
};

export const getLastAssetPrice = (
  marketPrices: IMarketPrice[],
  assetType: AssetType,
  filterValue: string,
) => {
  const marketPrice = marketPrices.filter((mp) => {
    if (assetType === AssetType.Property) {
      return mp.address === filterValue;
    } else {
      return mp.name === filterValue;
    }
  })[0];

  if (!marketPrice) {
    return null;
  }

  return marketPrice.seriesPrice[marketPrice.seriesPrice.length - 1].value;
};

export const getOpenClosedPositionsCount = (
  investmentData: IInvestmentData,
  assetType: AssetType,
) => {
  const openClosedPositionsCount: IOpenClosedPositions = {
    openCount: 0,
    closedCount: 0,
  };

  for (let i = 0; i < investmentData.walletBalance.length; i++) {
    const currentAsset = investmentData.walletBalance[i];
    const openPositions = currentAsset.transactions.filter((t) => {
      if (assetType === AssetType.Property) {
        return t.amount > 0;
      } else {
        return t.open;
      }
    });

    const closedPositions = currentAsset.transactions.filter((t) => {
      if (assetType === AssetType.Property) {
        return t.amount === 0;
      } else {
        return !t.open;
      }
    });

    openClosedPositionsCount.openCount += openPositions.length;
    openClosedPositionsCount.closedCount += closedPositions.length;
  }

  return openClosedPositionsCount;
};
