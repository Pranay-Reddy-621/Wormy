import { useState } from "react";
import BookList from "../components/BookList/BookList";
import books from "../data/books";
import { icons } from "../data/books";

export default function Books({ addToCart }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <img src={icons.search} alt="Search" className="search-icon" />
      </div>
      {filteredBooks.length === 0 ? (
        <p>No books match your search.</p>
      ) : (
        <BookList books={filteredBooks} addToCart={addToCart} />
      )}
    </div>
  );
}
