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
import {
  addCryptoTransaction,
  addPropertiesTransaction,
  addRareMetalsTransaction,
  addStocksTransaction,
} from "../../store/features/AssetsSlice";
import moment from "moment";
import { AssetType } from "../../models/enums/AssetType";
import { ITransaction } from "../../models/contracts/ITransaction";
import { DATE_FORMAT } from "../../utils/constants";

interface IInvestmentTableCardProps {
  data: ILastInvestmentData;
}
const InvestmentTableCard = ({
  data,
}: IInvestmentTableCardProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const { themeType } = useSelector((state: RootState) => state.pageSettings);

  const { chartOptions } = useMarketChartData(data);

  const addTransaction = (
    data: ILastInvestmentData,
    newLastTransaction: ITransaction,
  ) => {
    switch (data.assetType) {
      case AssetType.Crypto:
        dispatch(
          addCryptoTransaction({
            transaction: newLastTransaction,
            assetType: data.assetType,
            name: data.name,
          }),
        );
        break;
      case AssetType.Property:
        dispatch(
          addPropertiesTransaction({
            transaction: newLastTransaction,
            assetType: data.assetType,
            name: data.name,
          }),
        );
        break;
      case AssetType.RareMetal:
        dispatch(
          addRareMetalsTransaction({
            transaction: newLastTransaction,
            assetType: data.assetType,
            name: data.name,
          }),
        );
        break;
      case AssetType.Stock:
        dispatch(
          addStocksTransaction({
            transaction: newLastTransaction,
            assetType: data.assetType,
            name: data.name,
          }),
        );
        break;
    }
  };
  
  const closePositionDialog = () => {
    const MySwal = withReactContent(Swal);

    const textColor =
      themeType === ThemeType.Light ? "text-gray" : "text-white";

    MySwal.fire({
      title: "Are you sure you want to close this position?",
      showCancelButton: true,
      input: "number",
      inputAttributes: {
        min: "0",
        max: data.balance.toString(),
        step: "0.0000000000000001",
      },
      inputValue: data.balance,
      confirmButtonText: "Close",
      customClass: {
        confirmButton: "btn btn-secondary",
        cancelButton: "",
        popup: `bg-base-300 ${textColor}`,
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const lastTransaction = data.transactions[data.transactions.length - 1];
        let newLastTransaction = null;
        newLastTransaction = {
          ...lastTransaction,
          balance: lastTransaction.balance - Number(result.value),
          amount: Number(result.value) * -1,
          date: moment().format(DATE_FORMAT),
        };

        addTransaction(data, newLastTransaction);

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
        const lastTransaction = data.transactions[data.transactions.length - 1];
        let newLastTransaction = null;

        newLastTransaction = {
          ...lastTransaction,
          open: true,
          balance: lastTransaction.balance + Number(result.value),
          amount: Number(result.value) + 1,
          date: moment().format(DATE_FORMAT),
        };

        addTransaction(data, newLastTransaction);

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
