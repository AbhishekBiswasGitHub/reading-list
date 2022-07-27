import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isDark, setIsDark] = useState(true);
  const [themes, setThemes] = useState({
    light: {
      bg: "#eee",
      txt: "#333",
      ele: "#bbb",
      btnbg: "#555",
      btntxt: "#ddd",
    },
    dark: {
      bg: "#555",
      txt: "#999",
      ele: "#111",
      btnbg: "#bbb",
      btntxt: "#000",
    },
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, themes, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
