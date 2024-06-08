import moment from "moment";
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

export const getMonthsLastDates = (investmentData: IInvestmentData) => {
  const lastDates = [];

  const seriesPrices = investmentData.marketPrices[0].seriesPrice;
  const dates = seriesPrices.map((s) => s.date);
  for (let i = 0; i < dates.length; i++) {
    const currentDate = dates[i];

    const [, currentMonth] = currentDate.split("-").map(Number);

    if (
      i === dates.length - 1 ||
      dates[i + 1].split("-")[1] !== String(currentMonth).padStart(2, "0")
    ) {
      lastDates.push(currentDate);
    }
  }

  return lastDates;
};

export const getInvestmentValueByMonths = (
  investmentData: IInvestmentData,
  assetType: AssetType,
) => {
  const investmentValueByMonths: number[] = [];

  const monthsLastDates = getMonthsLastDates(investmentData);
  for (let i = 0; i < monthsLastDates.length; i++) {
    const currentMonthLastDate = monthsLastDates[i];

    let currentMonthInvestmentValue = 0;
    for (let j = 0; j < investmentData.walletBalance.length; j++) {
      const currentAsset = investmentData.walletBalance[j];

      const transactionsBeforeLastDate = currentAsset.transactions.filter(
        (t) =>
          moment(t.date, "DD/MM/YYYY") <
          moment(currentMonthLastDate, "DD/MM/YYYY"),
      );

      if (transactionsBeforeLastDate.length === 0) {
        continue;
      }

      const marketDataForAsset = investmentData.marketPrices.filter((mp) => {
        if (assetType === AssetType.Property) {
          return mp.address === currentAsset.address;
        } else {
          return mp.name === currentAsset.name;
        }
      })[0];

      if (!marketDataForAsset) {
        continue;
      }

      const lastMarketPrice = marketDataForAsset.seriesPrice.filter(
        (c) => c.date === currentMonthLastDate,
      )[0];

      if (!lastMarketPrice) {
        continue;
      }

      currentMonthInvestmentValue +=
        transactionsBeforeLastDate[transactionsBeforeLastDate.length - 1]
          .balance * lastMarketPrice.value;
    }

    investmentValueByMonths.push(Math.round(currentMonthInvestmentValue));
  }

  return investmentValueByMonths;
};