import { icons } from "../data/books";
import "./CartPage.css";

function CartPage({ cartItems, onRemoveItem }) {
  return (
    <section className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <img
                src={item.cover}
                alt={`${item.title} cover`}
                className="cart-item-cover"
              />
              <span>{item.title}</span>
              <span>Qty: {item.quantity || 1}</span>
              {}
              <button onClick={() => onRemoveItem(item.id)}>
                <img src={icons.cross} alt="Remove" className="icon" />
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <button className="checkout-btn">Checkout</button>
    </section>
  );
}

export default CartPage;
