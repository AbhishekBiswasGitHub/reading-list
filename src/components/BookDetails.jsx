import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
  const { isDark, themes } = useContext(ThemeContext);
  const theme = isDark ? themes.dark : themes.light;

  const { dispatch } = useContext(BookContext);

  return (
    <li
      style={{ background: theme.ele }}
      onClick={() => dispatch({ type: "REMOVE_BOOK", book: { id: book.id } })}
    >
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
