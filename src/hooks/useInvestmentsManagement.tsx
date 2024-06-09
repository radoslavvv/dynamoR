import React from "react";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../store/store";
import {
  setCryptoInvestmentTableData,
  setInvestmentTableDataIsCalcualted,
  setPropertiesInvestmentTableData,
  setRareMetalsInvestmentTableData,
  setStocksInvestmentTableData,
} from "../store/features/AssetsCalculationsSlice";

import { AssetType } from "../models/enums/AssetType";
import { IInvestmentData } from "../models/contracts/IInvestmentData";

import { getAssetInvestmentTableData } from "../utils/assets-helper";

const useInvestmentsManagement = () => {
  const dispatch = useAppDispatch();

  const { properties, crypto, stocks, rareMetals } = useSelector(
    (state: RootState) => state.assests,
  );

  const {
    propertiesInvestmentTableData,
    cryptoInvestmentTableData,
    stocksInvestmentTableData,
    rareMetalsInvestmentTableData,
    investmentTableDataIsCalculated,
  } = useSelector((state: RootState) => state.assetsCalculations);

  const calculateInvestmentTableData = () => {
    const propertiesInvestmentTableData = getAssetInvestmentTableData(
      properties as IInvestmentData,
      AssetType.Property,
    );
    dispatch(setPropertiesInvestmentTableData(propertiesInvestmentTableData));

    const cryptoInvestmentTableData = getAssetInvestmentTableData(
      crypto as IInvestmentData,
      AssetType.Crypto,
    );
    dispatch(setCryptoInvestmentTableData(cryptoInvestmentTableData));

    const rareMetalsInvestmentTableData = getAssetInvestmentTableData(
      rareMetals as IInvestmentData,
      AssetType.RareMetal,
    );
    dispatch(setRareMetalsInvestmentTableData(rareMetalsInvestmentTableData));

    const stocksInvestmentTableData = getAssetInvestmentTableData(
      stocks as IInvestmentData,
      AssetType.Stock,
    );
    dispatch(setStocksInvestmentTableData(stocksInvestmentTableData));

    dispatch(setInvestmentTableDataIsCalcualted(true));
  };

  React.useEffect(() => {
    if (properties && crypto && stocks && rareMetals) {
      calculateInvestmentTableData();
    }
  }, [properties, crypto, stocks, rareMetals]);

  return {
    stocksInvestmentTableData,
    propertiesInvestmentTableData,
    rareMetalsInvestmentTableData,
    cryptoInvestmentTableData,
    investmentTableDataIsCalculated,
  };
};

export default useInvestmentsManagement;
