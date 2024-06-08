import React from "react";
import { useSelector } from "react-redux";

import {
  setCryptoOpenClosedPositions,
  setPropertiesOpenClosedPositions,
  setRareMetalsOpenClosedPositions,
  setStocksOpenClosedPositions,
} from "../store/features/AssetsCalculationsSlice";
import { RootState, useAppDispatch } from "../store/store";

import { AssetType } from "../models/enums/AssetType";
import { IInvestmentData } from "../models/contracts/IInvestmentData";
import { IOpenClosedPositions } from "../models/contracts/IOpenClosedPositions";

import { getOpenClosedPositionsCount } from "../utils/assets-helper";

const useOpenClosedPositions = () => {
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

  const propertiesOpenClosedPositions: IOpenClosedPositions = useSelector(
    (state: RootState) =>
      state.assetsCalculations.propertiesOpenClosedPositions,
  );

  const cryptoOpenClosedPositions: IOpenClosedPositions = useSelector(
    (state: RootState) => state.assetsCalculations.cryptoOpenClosedPositions,
  );

  const rareMetalsOpenClosedPositions: IOpenClosedPositions = useSelector(
    (state: RootState) =>
      state.assetsCalculations.rareMetalsOpenClosedPositions,
  );

  const stocksOpenClosedPositions: IOpenClosedPositions = useSelector(
    (state: RootState) => state.assetsCalculations.stocksOpenClosedPositions,
  );

  const totalOpenClosedPositions: IOpenClosedPositions = {
    openCount:
      propertiesOpenClosedPositions.openCount +
      cryptoOpenClosedPositions.openCount +
      rareMetalsOpenClosedPositions.openCount +
      stocksOpenClosedPositions.openCount,
    closedCount:
      propertiesOpenClosedPositions.closedCount +
      cryptoOpenClosedPositions.closedCount +
      rareMetalsOpenClosedPositions.closedCount +
      stocksOpenClosedPositions.closedCount,
  };

  const calculateOpenClosedPositions = () => {
    const propertiesOpenClosedPositions = getOpenClosedPositionsCount(
      properties as IInvestmentData,
      AssetType.Property,
    );
    dispatch(setPropertiesOpenClosedPositions(propertiesOpenClosedPositions));

    const stocksOpenClosedPositions = getOpenClosedPositionsCount(
      stocks as IInvestmentData,
      AssetType.Stock,
    );
    dispatch(setStocksOpenClosedPositions(stocksOpenClosedPositions));

    const rareMetalsOpenClosedPositions = getOpenClosedPositionsCount(
      rareMetals as IInvestmentData,
      AssetType.RareMetal,
    );
    dispatch(setRareMetalsOpenClosedPositions(rareMetalsOpenClosedPositions));

    const cryptoOpenClosedPositions = getOpenClosedPositionsCount(
      crypto as IInvestmentData,
      AssetType.Crypto,
    );
    dispatch(setCryptoOpenClosedPositions(cryptoOpenClosedPositions));
  };

  React.useEffect(() => {
    if (properties && crypto && stocks && rareMetals) {
      calculateOpenClosedPositions();
    }
  }, [properties, crypto, stocks, rareMetals]);

  return [
    propertiesOpenClosedPositions,
    cryptoOpenClosedPositions,
    rareMetalsOpenClosedPositions,
    stocksOpenClosedPositions,
    totalOpenClosedPositions,
  ];
};

export default useOpenClosedPositions;
