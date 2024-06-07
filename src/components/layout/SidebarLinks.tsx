import { AiOutlineStock } from "react-icons/ai";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import ThemeChanger from "../shared/ThemeChanger";
import routesConfig from "../routes/routes";
import { Link } from "react-router-dom";

const SidebarLinks = () => {
  return (
    <ul className="menu min-h-full w-96 bg-base-100 p-0 text-xl text-base-content">
      <h1 className="mb-5 flex select-none items-center justify-center gap-3 bg-base-300 p-5 text-center text-5xl font-bold">
        <AiOutlineStock /> dynamoR
      </h1>
      <li className="rounded-none">
        <Link
          className="flex items-center gap-3 rounded-none pl-5 "
          to={routesConfig.personalInvestments.path}
        >
          <FaMoneyBillTrendUp /> Personal Investments
        </Link>
      </li>
      <li>
        <Link
          className="mt-2 flex items-center gap-2 rounded-none pl-5"
          to={routesConfig.accountSettings.path}
        >
          <IoSettings /> Account Settings
        </Link>
      </li>
      <li className="mt-auto flex items-center p-5">
        <ThemeChanger />
      </li>
    </ul>
  );
};

export default SidebarLinks;
