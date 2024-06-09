import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import withReactContent from "sweetalert2-react-content";

import { RootState } from "../store/store";

import { ThemeType } from "../models/enums/ThemeType";
import { IUserData } from "../models/contracts/IUserData";

import { submitUserAccountSettings } from "../api/client-api";

const useAccountSettingsForm = () => {
  const { themeType } = useSelector((state: RootState) => state.pageSettings);

  const MySwal = withReactContent(Swal);

  const textColor = themeType === ThemeType.Light ? "text-gray" : "text-white";

  const submitForm = (userData: IUserData) => {
    MySwal.fire({
      title: "Are you sure you want to submit the new settings?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      customClass: {
        confirmButton: "btn btn-secondary",
        cancelButton: "",
        popup: `bg-base-300 ${textColor}`,
      },
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        submitUserAccountSettings(userData);
      }
    });
  };

  return { submitForm };
};

export default useAccountSettingsForm;
