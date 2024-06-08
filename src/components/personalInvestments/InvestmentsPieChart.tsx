import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import useValueAllocation from "../../hooks/useValueAllocation";

const InvestmentsPieChart = (): JSX.Element => {
  const { chartOptions, investedValuesAreCalculated } = useValueAllocation();

  if (!investedValuesAreCalculated) {
    return <></>;
  }

  return (
    <div className="flex-1 animate-slideLeft">
      <h1 className="mb-3 flex justify-start text-2xl font-bold">
        Value Allocation:
      </h1>
      <div className="rounded-3xl bg-base-200 p-5 shadow-xl">
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </div>
  );
};

export default InvestmentsPieChart;
