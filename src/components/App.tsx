import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Main from "./layout/Main";
import React from "react";
import { useAppDispatch } from "../store/store";
import {
  fetchCryptoData,
  fetchPropertiesData,
  fetchRareMetalsData,
  fetchStocksData,
} from "../store/features/AssetsSlice";
import { fetchUserData } from "../store/features/UserSlice";

const App = () => {
  const dispatch = useAppDispatch();
  // const [properties, crypto, stocks, rareMetals] = useAssets();

  const loadData = async () => {
    Promise.all([
      dispatch(fetchPropertiesData()),
      dispatch(fetchCryptoData()),
      dispatch(fetchRareMetalsData()),
      dispatch(fetchStocksData()),
      dispatch(fetchUserData()),
    ]);
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Header />
      <Sidebar>
        <Main />
      </Sidebar>
    </>
  );
};

export default App;
