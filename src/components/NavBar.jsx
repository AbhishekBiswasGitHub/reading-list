import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const NavBar = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>Reading List</h1>
      <p>currently you have {books.length} books to go through...</p>
    </div>
  );
};

export default NavBar;
