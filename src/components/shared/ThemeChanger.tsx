import { FiMoon, FiSun } from "react-icons/fi";

import { useAppDispatch } from "../../store/store";
import { setThemeType } from "../../store/features/PageSettingsSlice";

import { ThemeType } from "../../models/enums/ThemeType";

const ThemeChanger = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const updateThemeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(setThemeType(ThemeType.Light));
    } else {
      dispatch(setThemeType(ThemeType.Dark));
    }
  };

  return (
    <label className="flex cursor-pointer gap-2 bg-base-200">
      <FiMoon />
      <input
        type="checkbox"
        value="nord"
        className="theme-controller toggle"
        onChange={(e) => updateThemeType(e)}
      />
      <FiSun />
    </label>
  );
};

export default ThemeChanger;
