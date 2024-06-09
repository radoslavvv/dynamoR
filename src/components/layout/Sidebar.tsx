import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../../store/store";
import { setSidebarIsOpen } from "../../store/features/PageSettingsSlice";

import SidebarLinks from "./SidebarLinks";

interface ISidebarProps {
  children: JSX.Element;
}

const Sidebar = (props: ISidebarProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const sidebarIsOpen: boolean = useSelector(
    (state: RootState) => state.pageSettings.sidebarIsOpen,
  );

  const handleSidebarToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSidebarIsOpen(event.target.checked));
  };

  return (
    <div className="drawer">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarIsOpen}
        onChange={handleSidebarToggle}
      />
      <div className="drawer-content">{props.children}</div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <SidebarLinks />
      </div>
    </div>
  );
};

export default Sidebar;
