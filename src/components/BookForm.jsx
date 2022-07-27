import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
  const { isDark, themes } = useContext(ThemeContext);
  const theme = isDark ? themes.dark : themes.light;

  const { dispatch } = useContext(BookContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        required
        style={{ background: theme.ele }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="author"
        required
        style={{ background: theme.ele }}
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="submit"
        style={{ background: theme.btnbg, color: theme.btntxt }}
        value="Add Book"
      />
    </form>
  );
};

export default BookForm;
