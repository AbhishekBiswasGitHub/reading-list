import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";
import SwitchTheme from "./SwitchTheme";

const NavBar = () => {
  const { isDark, themes } = useContext(ThemeContext);
  const theme = isDark ? themes.dark : themes.light;

  const { books } = useContext(BookContext);

  return (
    <div className="navbar" style={{ background: theme.ele, color: theme.txt }}>
      <SwitchTheme />
      <h1>Reading List</h1>
      <p>currently you have {books.length} books to go through...</p>
    </div>
  );
};

export default NavBar;
