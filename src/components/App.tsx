import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Main from "./layout/Main";

const App = () => {
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
