import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../store/store";
import {
  setCryptoInvestmentTableData,
  setPropertiesInvestmentTableData,
  setRareMetalsInvestmentTableData,
  setStocksInvestmentTableData,
} from "../store/features/AssetsCalculationsSlice";

import { AssetType } from "../models/enums/AssetType";
import { ThemeType } from "../models/enums/ThemeType";
import { IInvestmentData } from "../models/contracts/IInvestmentData";
import { IInvestmentTableData } from "../models/contracts/IInvestmentTableData";

import { DATE_FORMAT } from "../utils/constants";
import { getAssetInvestmentTableData } from "../utils/assets-helper";

const useMarketChartData = (investmentTableData: IInvestmentTableData) => {
  const dispatch = useAppDispatch();

  const { properties, crypto, stocks, rareMetals } = useSelector(
    (state: RootState) => state.assests,
  );

  const {
    propertiesInvestmentTableData,
    cryptoInvestmentTableData,
    stocksInvestmentTableData,
    rareMetalsInvestmentTableData,
    investmentTableDataIsCalculated,
  } = useSelector((state: RootState) => state.assetsCalculations);

  const themeType: ThemeType = useSelector(
    (state: RootState) => state.pageSettings.themeType,
  );

  const calculateInvestmentTableData = () => {
    const propertiesInvestmentTableData = getAssetInvestmentTableData(
      properties as IInvestmentData,
      AssetType.Property,
    );
    dispatch(setPropertiesInvestmentTableData(propertiesInvestmentTableData));

    const cryptoInvestmentTableData = getAssetInvestmentTableData(
      crypto as IInvestmentData,
      AssetType.Crypto,
    );
    dispatch(setCryptoInvestmentTableData(cryptoInvestmentTableData));

    const rareMetalsInvestmentTableData = getAssetInvestmentTableData(
      rareMetals as IInvestmentData,
      AssetType.RareMetal,
    );
    dispatch(setRareMetalsInvestmentTableData(rareMetalsInvestmentTableData));

    const stocksInvestmentTableData = getAssetInvestmentTableData(
      stocks as IInvestmentData,
      AssetType.Stock,
    );
    dispatch(setStocksInvestmentTableData(stocksInvestmentTableData));
  };

  const color = themeType === ThemeType.Dark ? "white" : "black";

  const chartStartDate = moment(
    investmentTableData.seriesPrice[0].date,
    DATE_FORMAT,
  ).toDate();
  const chartEndDate = moment(
    investmentTableData.seriesPrice[investmentTableData.seriesPrice.length - 1]
      .date,
    DATE_FORMAT,
  ).toDate();

  const chartOptions = {
    chart: {
      backgroundColor: "transparent",
    },
    title: {
      text: "",
    },
    yAxis: {
      title: {
        text: "Value",
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
      tickInterval: 24 * 3600 * 1000,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        pointStart: Date.UTC(
          chartStartDate.getFullYear(),
          chartStartDate.getMonth(),
          chartStartDate.getDate(),
        ),
        pointInterval: 24 * 3600 * 1000,
      },
    },
    series: [
      {
        name: "Value",
        data: investmentTableData.seriesPrice.map(
          (c) => Math.round(c.value * 100) / 100,
        ),
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
      calculateInvestmentTableData();
    }
  }, [properties, crypto, stocks, rareMetals]);

  return {
    stocksInvestmentTableData,
    propertiesInvestmentTableData,
    rareMetalsInvestmentTableData,
    cryptoInvestmentTableData,
    chartOptions,
    investmentTableDataIsCalculated,
  };
};

export default useMarketChartData;
