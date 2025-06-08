import { useState } from "react";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import About from "./pages/About";
import CartPage from "./pages/CartPage";
import useCart from "./hooks/useCart";

function App() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home addToCart={addToCart} />} />
              <Route path="/books" element={<Books addToCart={addToCart} />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/cart"
                element={<CartPage cartItems={cartItems} onRemoveItem={removeFromCart} />}
              />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
