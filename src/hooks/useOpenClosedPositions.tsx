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

import { getAssetOpenClosedPositionsCount } from "../utils/assets-helper";

const useOpenClosedPositions = () => {
  const dispatch = useAppDispatch();

  const { properties, crypto, stocks, rareMetals } = useSelector(
    (state: RootState) => state.assests,
  );

  const {
    propertiesOpenClosedPositions,
    cryptoOpenClosedPositions,
    rareMetalsOpenClosedPositions,
    stocksOpenClosedPositions,
  } = useSelector((state: RootState) => state.assetsCalculations);

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
    const propertiesOpenClosedPositions = getAssetOpenClosedPositionsCount(
      properties as IInvestmentData,
      AssetType.Property,
    );
    dispatch(setPropertiesOpenClosedPositions(propertiesOpenClosedPositions));

    const stocksOpenClosedPositions = getAssetOpenClosedPositionsCount(
      stocks as IInvestmentData,
      AssetType.Stock,
    );
    dispatch(setStocksOpenClosedPositions(stocksOpenClosedPositions));

    const rareMetalsOpenClosedPositions = getAssetOpenClosedPositionsCount(
      rareMetals as IInvestmentData,
      AssetType.RareMetal,
    );
    dispatch(setRareMetalsOpenClosedPositions(rareMetalsOpenClosedPositions));

    const cryptoOpenClosedPositions = getAssetOpenClosedPositionsCount(
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
