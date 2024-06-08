import { GiHamburgerMenu } from "react-icons/gi";
import Avatar from "../shared/Avatar";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";
import routesConfig from "../routes/routes";

const Header = () => {
  const sectionHeader: string = useSelector(
    (state: RootState) => state.pageSettings.sectionHeader,
  );

  return (
    <div className="navbar sticky top-0 z-10  bg-base-300">
      <div className="flex-none">
        <label htmlFor="my-drawer" className="btn btn-square btn-ghost text-xl">
          <GiHamburgerMenu />
        </label>
      </div>

      <div className="flex-1">
        <a className="mx-5 text-3xl font-bold">{sectionHeader}</a>
      </div>

      <div className="flex-none">
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
