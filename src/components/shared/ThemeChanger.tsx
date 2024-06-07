import { FiMoon, FiSun } from "react-icons/fi";
// import { RootState, useAppDispatch } from "../../store/store";
// import { useSelector } from "react-redux";

const ThemeChanger = () => {
  // const dispatch = useAppDispatch();
  // const theme: string = useSelector(
  //   (state: RootState) => state.pageSettings.theme,
  // );

  return (
    <label className="flex cursor-pointer gap-2 bg-base-200">
      <FiMoon />
      <input type="checkbox" value="nord" className="theme-controller toggle" />
      <FiSun />
    </label>
  );
};

export default ThemeChanger;
