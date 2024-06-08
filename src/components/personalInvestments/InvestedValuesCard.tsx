import { IOpenClosedPositions } from "../../models/contracts/IOpenClosedPositions";

import { formatNumber } from "../../utils/assets-helper";

interface IInvestedValuesCardProps {
  title: string;
  value: number;
  openClosedPositions: IOpenClosedPositions;
}

const InvestedValuesCard = ({
  title,
  value,
  openClosedPositions,
}: IInvestedValuesCardProps): JSX.Element => {
  return (
    <div className="stat">
      <div className="stat-title">{title}</div>
      <div className="stat-value">${formatNumber(value)}</div>
      <div className="stat-desc text-center">
        {`${openClosedPositions.openCount} open / ${openClosedPositions.closedCount} closed`}
      </div>
    </div>
  );
};

export default InvestedValuesCard;
