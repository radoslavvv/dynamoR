import React from "react";

import { useAppDispatch } from "../store/store";
import {
  fetchCryptoData,
  fetchPropertiesData,
  fetchRareMetalsData,
  fetchStocksData,
} from "../store/features/AssetsSlice";
import { fetchUserData } from "../store/features/UserSlice";

import Main from "./layout/Main";
import Header from "./layout/Header";
import Loader from "./layout/Loader";
import Sidebar from "./layout/Sidebar";

const App = (): JSX.Element => {
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

  if (!dataIsLoaded) {
    return <Loader />;
  }

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
