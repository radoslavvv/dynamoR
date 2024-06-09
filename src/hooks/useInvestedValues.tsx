import React from "react";
import { useSelector } from "react-redux";

import {
  setCryptoInvestedValue,
  setInvestedValuesAreCalculated,
  setPropertiesInvestedValue,
  setRareMetalsInvestedValue,
  setStocksInvestedValue,
} from "../store/features/AssetsCalculationsSlice";
import { RootState, useAppDispatch } from "../store/store";

import { AssetType } from "../models/enums/AssetType";
import { IInvestmentData } from "../models/contracts/IInvestmentData";

import { getAssetInvestedValue } from "../utils/assets-helper";

const useInvestedValues = () => {
  const dispatch = useAppDispatch();

  const { properties, crypto, stocks, rareMetals } = useSelector(
    (state: RootState) => state.assests,
  );

  const {
    propertiesInvestedValue,
    cryptoInvestedValue,
    rareMetalsInvestedValue,
    stocksInvestedValue,
    investedValuesAreCalculated,
  } = useSelector((state: RootState) => state.assetsCalculations);

  const totalInvestedValue =
    stocksInvestedValue +
    cryptoInvestedValue +
    rareMetalsInvestedValue +
    propertiesInvestedValue;

  const calculateInvestedValues = () => {
    const propertiesInvestedValue = getAssetInvestedValue(
      properties as IInvestmentData,
      AssetType.Property,
    );
    dispatch(setPropertiesInvestedValue(propertiesInvestedValue));

    const cryptoInvestedValue = getAssetInvestedValue(
      crypto as IInvestmentData,
      AssetType.Crypto,
    );
    dispatch(setCryptoInvestedValue(cryptoInvestedValue));

    const stockInvestedValue = getAssetInvestedValue(
      stocks as IInvestmentData,
      AssetType.Stock,
    );
    dispatch(setStocksInvestedValue(stockInvestedValue));

    const rareMetalsInvestedValue = getAssetInvestedValue(
      rareMetals as IInvestmentData,
      AssetType.RareMetal,
    );
    dispatch(setRareMetalsInvestedValue(rareMetalsInvestedValue));

    dispatch(setInvestedValuesAreCalculated(true));
  };

  React.useEffect(() => {
    if (properties && crypto && stocks && rareMetals) {
      calculateInvestedValues();
    }
  }, [properties, crypto, stocks, rareMetals]);

  return {
    propertiesInvestedValue,
    cryptoInvestedValue,
    rareMetalsInvestedValue,
    stocksInvestedValue,
    totalInvestedValue,
    investedValuesAreCalculated,
  };
};

export default useInvestedValues;
