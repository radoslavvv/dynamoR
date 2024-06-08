import { ILastInvestmentData } from "../../models/contracts/ILastInvestmentData";
import { formatNumber } from "../../utils/assets-helper";

interface IInvestmentTableCardProps {
  data: ILastInvestmentData;
}
const InvestmentTableCard = ({ data }: IInvestmentTableCardProps) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
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
            {formatNumber(data.amount)}
          </p>
          <p className="flex flex-1 flex-col">
            <span className="text-gray-400">Balance:</span>$
            {formatNumber(data.balance)}
          </p>
          <p className="flex flex-1 flex-col">
            <span className="text-gray-400">Position:</span>
            {data.position ? "Open" : "Closed"}
          </p>

          <p className="flex w-full flex-1  flex-col self-center">
            <button className="btn btn-secondary" disabled={!data.position}>
              Close
            </button>
          </p>

          <p className="flex w-full flex-1  flex-col self-center">
            <button className="btn btn-secondary" disabled={data.position}>
              Open
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentTableCard;
