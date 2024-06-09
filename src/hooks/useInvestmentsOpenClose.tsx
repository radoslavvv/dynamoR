import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import withReactContent from "sweetalert2-react-content";

import {
  addCryptoTransaction,
  addPropertiesTransaction,
  addRareMetalsTransaction,
  addStocksTransaction,
} from "../store/features/AssetsSlice";

import { RootState, useAppDispatch } from "../store/store";

import { AssetType } from "../models/enums/AssetType";
import { ThemeType } from "../models/enums/ThemeType";
import { ITransaction } from "../models/contracts/ITransaction";
import { ILastInvestmentData } from "../models/contracts/ILastInvestmentData";

const useInvestmentsOpenClose = (data: ILastInvestmentData) => {
  const dispatch = useAppDispatch();

  const { themeType } = useSelector((state: RootState) => state.pageSettings);

  const MySwal = withReactContent(Swal);

  const textColor = themeType === ThemeType.Light ? "text-gray" : "text-white";

  function addTransaction(
    data: ILastInvestmentData,
    newLastTransaction: ITransaction,
  ) {
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
  }

  const closePositionDialog = () => {
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
      if (result.isConfirmed && result.value) {
        const lastTransaction = data.transactions[data.transactions.length - 1];
        const newLastTransaction = {
          ...lastTransaction,
          balance: lastTransaction.balance - Number(result.value),
          amount: Number(result.value) * -1,
          date: data.seriesPrice[data.seriesPrice.length - 1].date,
        };

        addTransaction(data, newLastTransaction);

        showSuccessDialog("Position was closed successfully!");
      }
    });
  };

  const openPositionDialog = () => {
    MySwal.fire({
      title: "Please enter the desired amount:",
      input: "number",
      inputAttributes: {
        min: "0",
        step: "0.0000000000000001",
      },
      showCancelButton: true,
      confirmButtonText: "Open",
      customClass: {
        confirmButton: "btn btn-secondary",
        cancelButton: "",
        popup: `bg-base-300 ${textColor}`,
      },
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        const lastTransaction = data.transactions[data.transactions.length - 1];

        const newLastTransaction = {
          ...lastTransaction,
          open: true,
          balance: lastTransaction.balance + Number(result.value),
          amount: Number(result.value) + 1,
          date: data.seriesPrice[data.seriesPrice.length - 1].date,
        };

        addTransaction(data, newLastTransaction);

        showSuccessDialog("Position was opened successfully!");
      }
    });
  };

  const showSuccessDialog = (message: string) => {
    Swal.fire({
      title: message,
      icon: "success",
      customClass: {
        confirmButton: "btn btn-secondary",
        cancelButton: "",
        popup: `bg-base-300 ${textColor}`,
      },
    });
  };

  return {
    closePositionDialog,
    openPositionDialog,
    addTransaction,
  };
};

export default useInvestmentsOpenClose;
