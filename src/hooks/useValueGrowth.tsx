import React from "react";
import { RootState, useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import {
  getInvestmentValueByMonths,
  getMonthsLastDates,
} from "../utils/assets-helper";
import { IInvestmentData } from "../models/contracts/IInvestmentData";
import { AssetType } from "../models/enums/AssetType";
import {
  setCryptoValueByMonth,
  setPropertiesValueByMonth,
  setRareMetalsValueByMonth,
  setStocksValueByMonth,
} from "../store/features/AssetsCalculationsSlice";
import moment from "moment";

const useValueGrowth = () => {
  const dispatch = useAppDispatch();

  const properties: IInvestmentData | null = useSelector(
    (state: RootState) => state.assests.properties,
  );
  const crypto: IInvestmentData | null = useSelector(
    (state: RootState) => state.assests.crypto,
  );
  const stocks: IInvestmentData | null = useSelector(
    (state: RootState) => state.assests.stocks,
  );
  const rareMetals: IInvestmentData | null = useSelector(
    (state: RootState) => state.assests.rareMetals,
  );

  const propertiesValueByMonth: number[] = useSelector(
    (state: RootState) => state.assetsCalculations.propertiesValueByMonth,
  );
  const cryptoValueByMonth: number[] = useSelector(
    (state: RootState) => state.assetsCalculations.cryptoValueByMonth,
  );
  const stocksValueByMonth: number[] = useSelector(
    (state: RootState) => state.assetsCalculations.stocksValueByMonth,
  );
  const rareMetalsValueByMonth: number[] = useSelector(
    (state: RootState) => state.assetsCalculations.rareMetalsValueByMonth,
  );

  const monthsLastDates = properties ? getMonthsLastDates(properties) : [];

  const calculateInvestmentValuePerMonth = () => {
    const propertiesInvestmentValuePerMonth = getInvestmentValueByMonths(
      properties as IInvestmentData,
      AssetType.Property,
    );

    dispatch(setPropertiesValueByMonth(propertiesInvestmentValuePerMonth));

    const cryptoInvestmentValuePerMonth = getInvestmentValueByMonths(
      crypto as IInvestmentData,
      AssetType.Crypto,
    );
    dispatch(setCryptoValueByMonth(cryptoInvestmentValuePerMonth));

    const rareMetalsInvestmentValuePerMonth = getInvestmentValueByMonths(
      rareMetals as IInvestmentData,
      AssetType.RareMetal,
    );
    dispatch(setRareMetalsValueByMonth(rareMetalsInvestmentValuePerMonth));

    const stocksInvestmentValuePerMonth = getInvestmentValueByMonths(
      stocks as IInvestmentData,
      AssetType.Stock,
    );
    dispatch(setStocksValueByMonth(stocksInvestmentValuePerMonth));
  };

  const chartStartDate = moment(monthsLastDates[0], "DD/MM/YYYY").toDate();
  const chartEndDate = moment(
    monthsLastDates[monthsLastDates.length - 1],
    "DD/MM/YYYY",
  )
    .add(1, "month")
    .toDate();

  const color = "white";

  const chartOptions = {
    chart: {
      backgroundColor: "transparent",
    },
    title: {
      text: "",
    },
    yAxis: {
      title: {
        text: "Investment Value",
        style: {
          color: color,
        },
      },
      labels: {
        style: {
          color: color,
        },
      },
    },
    xAxis: {
      title: {
        text: "Date",
        style: {
          color: color,
        },
      },
      labels: {
        style: {
          color: color,
        },
      },
      min: Date.UTC(
        chartStartDate.getFullYear(),
        chartStartDate.getMonth(),
        chartStartDate.getDate(),
      ),
      max: Date.UTC(
        chartEndDate.getFullYear(),
        chartEndDate.getMonth(),
        chartEndDate.getDate(),
      ),
      type: "datetime",
      tickInterval: 24 * 3600 * 1000 * 30,
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      itemStyle: {
        color: color,
      },
    },
    plotOptions: {
      series: {
        pointStart: Date.UTC(
          chartStartDate.getFullYear(),
          chartStartDate.getMonth(),
          chartStartDate.getDate(),
        ),
        pointInterval: 24 * 3600 * 1000 * 30,
      },
    },
    series: [
      {
        name: "Properties",
        data: propertiesValueByMonth,
      },
      {
        name: "Crypto",
        data: cryptoValueByMonth,
      },
      {
        name: "Stocks",
        data: stocksValueByMonth,
      },
      {
        name: "Rare Materials",
        data: rareMetalsValueByMonth,
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };

  React.useEffect(() => {
    if (properties && crypto && stocks && rareMetals) {
      calculateInvestmentValuePerMonth();
    }
  }, [properties, crypto, stocks, rareMetals]);

  return {
    propertiesValueByMonth,
    cryptoValueByMonth,
    stocksValueByMonth,
    rareMetalsValueByMonth,
    monthsLastDates,
    chartOptions,
  };
};

export default useValueGrowth;
