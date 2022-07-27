import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const SwitchTheme = () => {
  const { isDark, themes, toggleTheme } = useContext(ThemeContext);
  const theme = isDark ? themes.dark : themes.light;

  return (
    <div
      className="switch-theme"
      style={{ background: theme.btnbg, color: theme.btntxt }}
      onClick={toggleTheme}
    >
      Switch Theme
    </div>
  );
};

export default SwitchTheme;
