import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { setSidebarIsOpen } from "../../store/features/PageSettingsSlice";
import SidebarLinks from "./SidebarLinks";

interface ISidebarProps {
  children: JSX.Element;
}

const Sidebar = (props: ISidebarProps) => {
  const dispatch = useAppDispatch();

  const sidebarIsOpen: boolean = useSelector(
    (state: RootState) => state.pageSettings.sidebarIsOpen,
  );

  return (
    <div className="drawer">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarIsOpen}
        onChange={(e) => dispatch(setSidebarIsOpen(e.target.checked))}
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
