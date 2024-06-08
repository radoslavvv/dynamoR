import React from "react";
import InvestedValues from "../personalInvestments/InvestedValues";
import InvestmentsGrowthChart from "../personalInvestments/InvestmentsGrowthChart";
import InvestmentsPieChart from "../personalInvestments/InvestmentsPieChart";
import { useAppDispatch } from "../../store/store";
import {
  setSectionHeader,
  setSidebarIsOpen,
} from "../../store/features/PageSettingsSlice";
import routesConfig from "../routes/routes";
import Investments from "../personalInvestments/Investments";

const PersonalInvestments = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setSectionHeader(routesConfig.personalInvestments.name));
    dispatch(setSidebarIsOpen(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10 px-5 lg:px-20">
        <div className="mt-5 flex justify-center">
          <InvestedValues />
        </div>
        <div className="mt-10 flex w-full flex-col gap-10 lg:flex-row ">
          <InvestmentsPieChart />
          <InvestmentsGrowthChart />
        </div>
        <Investments />
      </div>
      <div></div>
    </>
  );
};

export default PersonalInvestments;
