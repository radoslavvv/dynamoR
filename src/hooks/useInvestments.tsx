import React from "react";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../store/store";
import {
  setCryptoLastInvestmentData,
  setPropertiesLastInvestmentData,
  setRareMetalsLastInvestmentData,
  setStocksLastInvestmentData,
} from "../store/features/AssetsCalculationsSlice";

import { AssetType } from "../models/enums/AssetType";
import { IInvestmentData } from "../models/contracts/IInvestmentData";
import { ILastInvestmentData } from "../models/contracts/ILastInvestmentData";

import { getLastInvestmentsData } from "../utils/assets-helper";

const useInvestments = () => {
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

  const propertiesLastInvestmentData: ILastInvestmentData[] = useSelector(
    (state: RootState) => state.assetsCalculations.propertiesLastInvestmentData,
  );
  const cryptoLastInvestmentData: ILastInvestmentData[] = useSelector(
    (state: RootState) => state.assetsCalculations.cryptoLastInvestmentData,
  );
  const stocksLastInvestmentData: ILastInvestmentData[] = useSelector(
    (state: RootState) => state.assetsCalculations.stocksLastInvestmentData,
  );
  const rareMetalsLastInvestmentData: ILastInvestmentData[] = useSelector(
    (state: RootState) => state.assetsCalculations.rareMetalsLastInvestmentData,
  );

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
  };

  React.useEffect(() => {
    if (properties && crypto && stocks && rareMetals) {
      calculateLastInvestments();
    }
  }, [properties, crypto, stocks, rareMetals]);

  return [
    stocksLastInvestmentData,
    propertiesLastInvestmentData,
    rareMetalsLastInvestmentData,
    cryptoLastInvestmentData,
  ];
};

export default useInvestments;
