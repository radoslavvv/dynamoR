import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { IUserData } from "../models/contracts/IUserData";

const useUserData = () => {
  //   const dispatch = useAppDispatch();

  const userData: IUserData | null = useSelector(
    (state: RootState) => state.user.userData,
  );

  const fullName: string | null = userData
    ? `${userData?.firstName} ${userData?.lastName}`
    : null;

  return { userData, fullName };
};

export default useUserData;
