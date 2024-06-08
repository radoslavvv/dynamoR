import { useSelector } from "react-redux";

import { RootState } from "../store/store";

const useValueAllocation = () => {
  const propertiesInvestedValue: number = useSelector(
    (state: RootState) => state.assetsCalculations.propertiesInvestedValue,
  );

  const {
    cryptoInvestedValue,
    rareMetalsInvestedValue,
    stocksInvestedValue,
    investedValuesAreCalculated,
  } = useSelector((state: RootState) => state.assetsCalculations);

  const totalInvestedValue =
    stocksInvestedValue +
    cryptoInvestedValue +
    rareMetalsInvestedValue +
    propertiesInvestedValue;

  const propertiesPercentage = Math.round(
    (propertiesInvestedValue / totalInvestedValue) * 100,
  );
  const cryptoPercentage = Math.round(
    (cryptoInvestedValue / totalInvestedValue) * 100,
  );
  const stocksPercentage = Math.round(
    (stocksInvestedValue / totalInvestedValue) * 100,
  );
  const rareMetalsPercentage = Math.round(
    (rareMetalsInvestedValue / totalInvestedValue) * 100,
  );

  const pieChartData = [
    {
      name: "Properties",
      y: propertiesPercentage,
    },
    {
      name: "Crypto",
      y: cryptoPercentage,
    },
    {
      name: "Stocks",
      y: stocksPercentage,
    },
    {
      name: "Rare Metals",
      y: rareMetalsPercentage,
    },
  ];

  const chartOptions = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
    },
    title: {
      text: "",
    },
    tooltip: {
      valueSuffix: "%",
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: [
          {
            enabled: true,
            distance: 20,
          },
          {
            enabled: true,
            distance: -40,
            format: "{point.percentage:1f}%",
            style: {
              fontSize: "1.2em",
              textOutline: "none",
              opacity: 0.7,
            },
            filter: {
              operator: ">",
              property: "percentage",
              value: 10,
            },
          },
        ],
      },
    },
    series: [
      {
        name: "Percentage",
        type: "pie",
        data: pieChartData,
        dataLabels: {
          style: {
            color: "red",
          },
        },
      },
    ],
    labels: {},
  };

  return {
    propertiesPercentage,
    cryptoPercentage,
    stocksPercentage,
    rareMetalsPercentage,
    pieChartData,
    chartOptions,
    investedValuesAreCalculated,
  };
};

export default useValueAllocation;
