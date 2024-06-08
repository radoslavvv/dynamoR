import HighchartsReact from "highcharts-react-official";

import { ILastInvestmentData } from "../../models/contracts/ILastInvestmentData";

import { formatNumber } from "../../utils/assets-helper";
import Highcharts from "highcharts";
import useMarketChartData from "../../hooks/useMarketChartData";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { ThemeType } from "../../models/enums/ThemeType";
import { closePosition } from "../../store/features/AssetsSlice";
import { AssetType } from "../../models/enums/AssetType";

interface IInvestmentTableCardProps {
  data: ILastInvestmentData;
}
const InvestmentTableCard = ({
  data,
}: IInvestmentTableCardProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const { themeType } = useSelector((state: RootState) => state.pageSettings);

  const { chartOptions } = useMarketChartData(data);

  const closePositionDialog = () => {
    const MySwal = withReactContent(Swal);

    const textColor =
      themeType === ThemeType.Light ? "text-gray" : "text-white";

    MySwal.fire({
      title: "Are you sure you want to close this position?",
      showCancelButton: true,
      confirmButtonText: "Close",
      customClass: {
        confirmButton: "btn btn-secondary",
        cancelButton: "",
        popup: `bg-base-300 ${textColor}`,
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // const lastTransaction = data.transactions[data.transactions.length - 1];
        // let newLastTransaction = null;
        // if (data.assetType === AssetType.Property) {
        //   newLastTransaction = { ...lastTransaction, amount: 0 };
        // } else {
        //   newLastTransaction = { ...lastTransaction, open: false };
        // }

        // dispatch(
        //   closePosition({
        //     transaction: newLastTransaction,
        //     assetType: data.assetType,
        //     name: data.name,
        //   }),
        // );

        Swal.fire({
          title: "Position was closed successfully!",
          icon: "success",
          customClass: {
            confirmButton: "btn btn-secondary",
            cancelButton: "",
            popup: `bg-base-300 ${textColor}`,
          },
        });
      }
    });
  };

  const openPositionDialog = () => {
    const MySwal = withReactContent(Swal);

    const textColor =
      themeType === ThemeType.Light ? "text-gray" : "text-white";

    MySwal.fire({
      title: "Please enter the desired amount:",
      input: "number",
      showCancelButton: true,
      confirmButtonText: "Open",
      customClass: {
        confirmButton: "btn btn-secondary",
        cancelButton: "",
        popup: `bg-base-300 ${textColor}`,
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // dispatch(
        //   closePosition({
        //     transaction: {
        //       amount: 1000,

        //     },
        //     assetType: data.assetType,
        //     name: data.name,
        //   }),
        // );

        Swal.fire({
          title: "Position was opened successfully!",
          icon: "success",
          customClass: {
            confirmButton: "btn btn-secondary",
            cancelButton: "",
            popup: `bg-base-300 ${textColor}`,
          },
        });
      }
    });
  };

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
            <button
              className="btn btn-secondary"
              disabled={!data.position}
              onClick={closePositionDialog}
            >
              Close
            </button>
          </p>

          <p className="flex w-full flex-1  flex-col self-center">
            <button
              className="btn btn-secondary"
              disabled={data.position}
              onClick={openPositionDialog}
            >
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
