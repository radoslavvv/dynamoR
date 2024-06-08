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
import Loader from "./layout/Loader";

const App = () => {
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

  return (
    <>
      <Header />
      <Sidebar>{dataIsLoaded ? <Main /> : <Loader />}</Sidebar>
    </>
  );
};

export default App;
