import "./BookGrid.css";
import { icons } from "../../data/books";

function BookGrid({ books, addToCart }) {
  return (
    <section className="book-grid">
      <h2>Featured Books</h2>
      <div className="book-grid-items">
        {books.map(book => (
          <div key={book.id} className="book-grid-item">
            <img
              src={book.cover}
              alt={`${book.title} cover`}
              className="book-grid-cover"
            />
            <span>{book.title}</span>
            <img
              src={icons.rating}
              alt="Rating"
              className="rating-icon"
            />
            <button onClick={() => addToCart(book)}>
              <img src={icons.bag} alt="Cart" className="icon" />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BookGrid;
