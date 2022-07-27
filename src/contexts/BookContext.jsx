import { useReducer } from "react";
import { createContext } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [
    { title: "book1", author: "author1", id: 1 },
    { title: "book2", author: "author2", id: 2 },
    { title: "book3", author: "author3", id: 3 },
  ]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
