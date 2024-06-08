import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { IUserData } from "../models/contracts/IUserData";

const useUserData = () => {
  //   const dispatch = useAppDispatch();

  const userData: IUserData | null = useSelector(
    (state: RootState) => state.user.userData,
  );

  const fullName: string = userData
    ? `${userData?.firstName} ${userData?.lastName}`
    : "user";

  return { userData, fullName };
};

export default useUserData;
