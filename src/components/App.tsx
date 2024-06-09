import Main from "./layout/Main";
import Header from "./layout/Header";
import Loader from "./layout/Loader";
import Sidebar from "./layout/Sidebar";
import useFetchData from "../hooks/useFetchData";

const App = (): JSX.Element => {
  const { dataIsLoaded } = useFetchData();

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
