import React from "react";

import {
  setSectionHeader,
  setSidebarIsOpen,
} from "../../store/features/PageSettingsSlice";
import { useAppDispatch } from "../../store/store";

import AccountSettingsForm from "../accountSettings/AccountSettingsForm";

import routesConfig from "../routes/routes";

const AccountSettings = (): JSX.Element => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setSectionHeader(routesConfig.accountSettings.name));
    dispatch(setSidebarIsOpen(false));
  }, []);

  return (
    <div className="mt-5 flex justify-center">
      <AccountSettingsForm />
    </div>
  );
};

export default AccountSettings;
