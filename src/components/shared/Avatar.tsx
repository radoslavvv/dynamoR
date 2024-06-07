import { Link } from "react-router-dom";
import routesConfig from "../routes/routes";

const Avatar = () => {
  return (
    <Link
      className="avatar flex items-center justify-center gap-3 p-4 text-xl"
      to={routesConfig.accountSettings.path}
    >
      Radoslav
      <div className="w-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </Link>
  );
};

export default Avatar;
