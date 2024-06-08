/* eslint-disable @typescript-eslint/no-explicit-any */
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import useValueGrowth from "../../hooks/useValueGrowth";

const InvestmentsGrowthChart = () => {
  const { chartOptions } = useValueGrowth();

  return (
    <div className="flex-1 animate-slideRight">
      <h1 className="mb-3 flex justify-start text-2xl font-bold">
        Value Growth Timeline:
      </h1>
      <div className="rounded-3xl bg-base-200 p-5 shadow-xl">
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </div>
  );
};

export default InvestmentsGrowthChart;
