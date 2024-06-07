/* eslint-disable @typescript-eslint/no-explicit-any */
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const InvestmentsPieChart = () => {
  const options: any = {
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
            format: "{point.percentage:.1f}%",
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
        data: [
          {
            name: "Properties",
            y: 10,
          },
          {
            name: "Crypto",
            y: 25,
          },
          {
            name: "Rare Materials",
            y: 45,
          },
          {
            name: "Stocks",
            y: 10,
          },
        ],
        dataLabels: {
          style: {
            color: "red",
          },
        },
      },
    ],
    labels: {},
  };

  return (
    <div className="flex-1 animate-slideLeft">
      <h1 className="mb-3 flex justify-start text-2xl font-bold">
        Value Allocation:
      </h1>
      <div className="rounded-3xl bg-base-200 p-5 shadow-xl">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default InvestmentsPieChart;
