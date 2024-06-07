import React from "react";
import {
  setSectionHeader,
  setSidebarIsOpen,
} from "../../store/features/PageSettingsSlice";
import { useAppDispatch } from "../../store/store";
import routesConfig from "../routes/routes";

const AccountSettings = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setSectionHeader(routesConfig.accountSettings.name));
    dispatch(setSidebarIsOpen(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>AccountSettings</div>;
};

export default AccountSettings;
