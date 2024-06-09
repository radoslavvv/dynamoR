import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../store/store";
import {
  setCryptoLastInvestmentData,
  setPropertiesLastInvestmentData,
  setRareMetalsLastInvestmentData,
  setStocksLastInvestmentData,
} from "../store/features/AssetsCalculationsSlice";

import { AssetType } from "../models/enums/AssetType";
import { ThemeType } from "../models/enums/ThemeType";
import { IInvestmentData } from "../models/contracts/IInvestmentData";
import { ILastInvestmentData } from "../models/contracts/ILastInvestmentData";

import { DATE_FORMAT } from "../utils/constants";
import { getLastInvestmentsData } from "../utils/assets-helper";

const useMarketChartData = (lastInvestmentData: ILastInvestmentData) => {
  const dispatch = useAppDispatch();

  const { properties, crypto, stocks, rareMetals } = useSelector(
    (state: RootState) => state.assests,
  );

  const {
    propertiesLastInvestmentData,
    cryptoLastInvestmentData,
    stocksLastInvestmentData,
    rareMetalsLastInvestmentData,
    lastInvestmentDataIsCalculated,
  } = useSelector((state: RootState) => state.assetsCalculations);

  const themeType: ThemeType = useSelector(
    (state: RootState) => state.pageSettings.themeType,
  );

  const calculateLastInvestments = () => {
    const propertiesLastInvestmentData = getLastInvestmentsData(
      properties as IInvestmentData,
      AssetType.Property,
    );
    dispatch(setPropertiesLastInvestmentData(propertiesLastInvestmentData));

    const cryptoLastInvestmentData = getLastInvestmentsData(
      crypto as IInvestmentData,
      AssetType.Crypto,
    );
    dispatch(setCryptoLastInvestmentData(cryptoLastInvestmentData));

    const rareMetalsLastInvestmentData = getLastInvestmentsData(
      rareMetals as IInvestmentData,
      AssetType.RareMetal,
    );
    dispatch(setRareMetalsLastInvestmentData(rareMetalsLastInvestmentData));

    const stocksLastInvestmentData = getLastInvestmentsData(
      stocks as IInvestmentData,
      AssetType.Stock,
    );
    dispatch(setStocksLastInvestmentData(stocksLastInvestmentData));
  };

  const color = themeType === ThemeType.Dark ? "white" : "black";

  const chartStartDate = moment(
    lastInvestmentData.seriesPrice[0].date,
    DATE_FORMAT,
  ).toDate();
  const chartEndDate = moment(
    lastInvestmentData.seriesPrice[lastInvestmentData.seriesPrice.length - 1]
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
        data: lastInvestmentData.seriesPrice.map(
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
      calculateLastInvestments();
    }
  }, [properties, crypto, stocks, rareMetals]);

  return {
    stocksLastInvestmentData,
    propertiesLastInvestmentData,
    rareMetalsLastInvestmentData,
    cryptoLastInvestmentData,
    chartOptions,
    lastInvestmentDataIsCalculated,
  };
};

export default useMarketChartData;
