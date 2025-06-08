import "./BookList.css";
import { icons } from "../../data/books";

function BookList({ books, addToCart }) {
  return (
    <section className="book-list">
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <div className="book-info">
              <img
                src={book.cover}
                alt={`${book.title} cover`}
                className="book-cover"
              />
              <div className="book-details">
                <span>{book.title}</span>
                <img
                  src={icons.rating}
                  alt="Rating"
                  className="rating-icon"
                />
              </div>
            </div>
            <button onClick={() => addToCart(book)}>
              <img src={icons.bag} alt="Cart" className="icon" />
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BookList;
