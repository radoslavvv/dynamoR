import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

import {
  setCryptoValueByMonth,
  setPropertiesValueByMonth,
  setRareMetalsValueByMonth,
  setStocksValueByMonth,
  setValuesByMonthAreCalculated,
} from "../store/features/AssetsCalculationsSlice";
import { RootState, useAppDispatch } from "../store/store";

import { AssetType } from "../models/enums/AssetType";
import { ThemeType } from "../models/enums/ThemeType";
import { IInvestmentData } from "../models/contracts/IInvestmentData";

import {
  getInvestmentValueByMonths,
  getMonthsLastDates,
} from "../utils/assets-helper";
import { CHART_COLORS, CHART_LABELS, DATE_FORMAT } from "../utils/constants";

const useValueGrowth = () => {
  const dispatch = useAppDispatch();

  const { properties, crypto, stocks, rareMetals } = useSelector(
    (state: RootState) => state.assests,
  );

  const {
    propertiesValueByMonth,
    cryptoValueByMonth,
    stocksValueByMonth,
    rareMetalsValueByMonth,
    valuesByMonthAreCalculated,
  } = useSelector((state: RootState) => state.assetsCalculations);

  const themeType: ThemeType = useSelector(
    (state: RootState) => state.pageSettings.themeType,
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

    dispatch(setValuesByMonthAreCalculated(true));
  };

  const chartStartDate = moment(monthsLastDates[0], DATE_FORMAT).toDate();
  const chartEndDate = moment(
    monthsLastDates[monthsLastDates.length - 1],
    DATE_FORMAT,
  )
    .add(1, "month")
    .toDate();

  const color = themeType === ThemeType.Dark ? "white" : "black";

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
    // tooltip: {
    //   formatter: function () {
    //     return (
    //       "The value for <b>" +
    //       this.x +
    //       "</b> is <b>" +
    //       this.y +
    //       "</b>, in series " +
    //       this.series.name
    //     );
    //   },
    // },
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
        name: CHART_LABELS.properties,
        data: [...propertiesValueByMonth],
        color: CHART_COLORS.properties,
      },
      {
        name: CHART_LABELS.crypto,
        data: [...cryptoValueByMonth],
        color: CHART_COLORS.crypto,
      },
      {
        name: CHART_LABELS.stocks,
        data: [...stocksValueByMonth],
        color: CHART_COLORS.stocks,
      },
      {
        name: CHART_LABELS.rareMetals,
        data: [...rareMetalsValueByMonth],
        color: CHART_COLORS.rareMetals,
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
    valuesByMonthAreCalculated,
  };
};

export default useValueGrowth;
