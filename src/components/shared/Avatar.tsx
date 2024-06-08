import { Link } from "react-router-dom";
import routesConfig from "../routes/routes";
import useUserData from "../../hooks/useUserData";
import { DEFAULT_AVATAR_URL } from "../../utils/constants";

const Avatar = () => {
  const { userData, fullName } = useUserData();

  return (
    <Link
      className="avatar flex items-center justify-center gap-3 p-4 text-xl"
      to={routesConfig.accountSettings.path}
    >
      {fullName}
      <div className="w-10 rounded-full ring ring-black ring-offset-2 ring-offset-base-100">
        <img src={userData?.avatarUrl || DEFAULT_AVATAR_URL} />
      </div>
    </Link>
  );
};

export default Avatar;
