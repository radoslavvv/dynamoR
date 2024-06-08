import { Navigate, Route, Routes } from "react-router-dom";

import AccountSettings from "../pages/AccountSettings";
import PersonalInvestments from "../pages/PersonalInvestments";

import routesConfig from "../routes/routes";

const Main = (): JSX.Element => {
  return (
    <Routes>
      <Route
        path={routesConfig.personalInvestments.path}
        element={<PersonalInvestments />}
      />
      <Route
        path={routesConfig.accountSettings.path}
        element={<AccountSettings />}
      />
      <Route
        path="*"
        element={<Navigate to={routesConfig.personalInvestments.path} />}
      />
    </Routes>
  );
};

export default Main;
