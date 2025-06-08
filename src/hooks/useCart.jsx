import { useState } from "react";

export default function useCart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === book.id);
      if (isItemInCart) {
        return prev.map(item =>
          item.id === book.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prev, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return { cartItems, addToCart, removeFromCart };
}
