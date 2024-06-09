import React from "react";

import {
  fetchCryptoData,
  fetchPropertiesData,
  fetchRareMetalsData,
  fetchStocksData,
} from "../store/features/AssetsSlice";
import { fetchUserData } from "../store/features/UserSlice";
import { useAppDispatch } from "../store/store";

const useFetchData = () => {
  const dispatch = useAppDispatch();
  const [dataIsLoaded, setDataIsLoaded] = React.useState<boolean>(false);

  const loadData = async () => {
    await Promise.all([
      dispatch(fetchPropertiesData()),
      dispatch(fetchCryptoData()),
      dispatch(fetchRareMetalsData()),
      dispatch(fetchStocksData()),
      dispatch(fetchUserData()),
    ]);

    setDataIsLoaded(true);
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return { dataIsLoaded };
};

export default useFetchData;
