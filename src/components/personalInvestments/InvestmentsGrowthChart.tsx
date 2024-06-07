/* eslint-disable @typescript-eslint/no-explicit-any */
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const InvestmentsGrowthChart = () => {
  const color = "white";

  const options: any = {
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
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },
    series: [
      {
        name: "Properties",
        data: [
          43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157,
          161454, 154610,
        ],
      },
      {
        name: "Crypto",
        data: [
          24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726, 34243,
          31050,
        ],
      },
      {
        name: "Stocks",
        data: [
          11744, 30000, 16005, 19771, 20185, 24377, 32147, 30912, 29243, 29213,
          25663,
        ],
      },
      {
        name: "Rare Materials",
        data: [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          11164,
          11218,
          10077,
        ],
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

  return (
    <div className="flex-1 animate-slideRight">
      <h1 className="mb-3 flex justify-start text-2xl font-bold">
        Value Growth Timeline:
      </h1>
      <div className="rounded-3xl bg-base-200 p-5 shadow-xl">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default InvestmentsGrowthChart;
