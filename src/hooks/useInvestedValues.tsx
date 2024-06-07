import { IInvestmentData } from "../models/contracts/IInvestmentData";
import { AssetType } from "../models/enums/AssetType";
import { RootState, useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import { getAssetInvestedValue } from "../utils/assets-helper";
import {
  setCryptoInvestedValue,
  setPropertiesInvestedValue,
  setRareMetalsInvestedValue,
  setStocksInvestedValue,
} from "../store/features/AssetsCalculationsSlice";
import React from "react";

const useInvestedValues = () => {
  const dispatch = useAppDispatch();

  const properties: IInvestmentData | null = useSelector(
    (state: RootState) => state.assests.properties,
  );
  const crypto: IInvestmentData | null = useSelector(
    (state: RootState) => state.assests.crypto,
  );
  const stocks: IInvestmentData | null = useSelector(
    (state: RootState) => state.assests.stocks,
  );
  const rareMetals: IInvestmentData | null = useSelector(
    (state: RootState) => state.assests.rareMetals,
  );

  const propertiesInvestedValue: number = useSelector(
    (state: RootState) => state.assetsCalculations.propertiesInvestedValue,
  );
  const cryptoInvestedValue: number = useSelector(
    (state: RootState) => state.assetsCalculations.cryptoInvestedValue,
  );
  const rareMetalsInvestedValue: number = useSelector(
    (state: RootState) => state.assetsCalculations.rareMetalsInvestedValue,
  );
  const stocksInvestedValue: number = useSelector(
    (state: RootState) => state.assetsCalculations.stocksInvestedValue,
  );

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
  };

  React.useEffect(() => {
    if (properties && crypto && stocks && rareMetals) {
      calculateInvestedValues();
    }
  }, [properties, crypto, stocks, rareMetals]);

  return [
    propertiesInvestedValue,
    cryptoInvestedValue,
    rareMetalsInvestedValue,
    stocksInvestedValue,
    totalInvestedValue,
  ];
};

export default useInvestedValues;
