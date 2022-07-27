import { useContext } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import NavBar from "./components/NavBar";
import { ThemeContext } from "./contexts/ThemeContext";
import BookContextProvider from "./contexts/BookContext";

function App() {
  const { isDark, themes } = useContext(ThemeContext);
  const theme = isDark ? themes.dark : themes.light;

  return (
    <div className="App" style={{ background: theme.bg, color: theme.txt }}>
      <BookContextProvider>
        <NavBar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
