import BookGrid from "../components/BookGrid/BookGrid";
import books from "../data/books";

export default function Home({ addToCart }) {
  return (
    <section className="intro">
      <h2>Welcome to Wormy</h2>
      <p>Browse our collection of books!</p>
      <BookGrid books={books} addToCart={addToCart} />
    </section>
  );
}
