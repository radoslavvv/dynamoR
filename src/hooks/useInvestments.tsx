import React from "react";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../store/store";
import {
  setCryptoLastInvestmentData,
  setLastInvestmentDataIsCalcualted,
  setPropertiesLastInvestmentData,
  setRareMetalsLastInvestmentData,
  setStocksLastInvestmentData,
} from "../store/features/AssetsCalculationsSlice";

import { AssetType } from "../models/enums/AssetType";
import { IInvestmentData } from "../models/contracts/IInvestmentData";

import { getLastInvestmentsData } from "../utils/assets-helper";

const useInvestments = () => {
  const dispatch = useAppDispatch();

  const { properties, crypto, stocks, rareMetals } = useSelector(
    (state: RootState) => state.assests,
  );

  const {
    propertiesLastInvestmentData,
    cryptoLastInvestmentData,
    stocksLastInvestmentData,
    rareMetalsLastInvestmentData,
    lastInvestmentDataIsCalculated,
  } = useSelector((state: RootState) => state.assetsCalculations);

  const calculateLastInvestments = () => {
    const propertiesLastInvestmentData = getLastInvestmentsData(
      properties as IInvestmentData,
      AssetType.Property,
    );
    dispatch(setPropertiesLastInvestmentData(propertiesLastInvestmentData));

    const cryptoLastInvestmentData = getLastInvestmentsData(
      crypto as IInvestmentData,
      AssetType.Crypto,
    );
    dispatch(setCryptoLastInvestmentData(cryptoLastInvestmentData));

    const rareMetalsLastInvestmentData = getLastInvestmentsData(
      rareMetals as IInvestmentData,
      AssetType.RareMetal,
    );
    dispatch(setRareMetalsLastInvestmentData(rareMetalsLastInvestmentData));

    const stocksLastInvestmentData = getLastInvestmentsData(
      stocks as IInvestmentData,
      AssetType.Stock,
    );
    dispatch(setStocksLastInvestmentData(stocksLastInvestmentData));

    dispatch(setLastInvestmentDataIsCalcualted(true));
  };

  React.useEffect(() => {
    if (properties && crypto && stocks && rareMetals) {
      calculateLastInvestments();
    }
  }, [properties, crypto, stocks, rareMetals]);

  return {
    stocksLastInvestmentData,
    propertiesLastInvestmentData,
    rareMetalsLastInvestmentData,
    cryptoLastInvestmentData,
    lastInvestmentDataIsCalculated,
  };
};

export default useInvestments;
