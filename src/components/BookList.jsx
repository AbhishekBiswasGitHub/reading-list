import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <BookDetails book={book} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
