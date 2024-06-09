import HighchartsReact from "highcharts-react-official";

import { ILastInvestmentData } from "../../models/contracts/ILastInvestmentData";

import { formatNumber } from "../../utils/assets-helper";
import Highcharts from "highcharts";
import useMarketChartData from "../../hooks/useMarketChartData";
import useInvestmentsOpenClose from "../../hooks/useInvestmentsOpenClose";

interface IInvestmentTableCardProps {
  data: ILastInvestmentData;
}
const InvestmentTableCard = ({
  data,
}: IInvestmentTableCardProps): JSX.Element => {
  const { chartOptions } = useMarketChartData(data);

  const { openPositionDialog, closePositionDialog } =
    useInvestmentsOpenClose(data);

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body flex flex-col-reverse lg:flex-col">
        <div className="flex flex-col items-start gap-5  lg:flex-row">
          <p className="flex flex-1 flex-col">
            <span className="text-gray-400">Name:</span> {data.name}
          </p>
          <p className="flex flex-1 flex-col">
            <span className="text-gray-400">Market Price:</span>$
            {formatNumber(data.marketPrice)}
          </p>
          <p className="flex flex-1 flex-col">
            <span className="text-gray-400">Amount:</span>
            {formatNumber(data.balance)}
          </p>
          <p className="flex flex-1 flex-col">
            <span className="text-gray-400">Balance:</span>$
            {formatNumber(data.value)}
          </p>
          <p className="flex flex-1 flex-col">
            <span className="text-gray-400">Position:</span>
            {data.balance > 0 ? "Open" : "Closed"}
          </p>
          <p className="flex flex-1 flex-col">
            <span className="text-gray-400">Last Transaction Date:</span>
            {data.date}
          </p>

          <p className="flex w-full flex-1  flex-col self-center">
            <button
              className="btn btn-secondary"
              disabled={data.balance === 0}
              onClick={closePositionDialog}
            >
              Close
            </button>
          </p>

          <p className="flex w-full flex-1  flex-col self-center">
            <button className="btn btn-secondary" onClick={openPositionDialog}>
              Open
            </button>
          </p>
        </div>
        <div className="mt-5 rounded-xl bg-base-300 p-2">
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default InvestmentTableCard;
