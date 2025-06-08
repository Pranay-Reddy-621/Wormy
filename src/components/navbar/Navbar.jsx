import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import profileIcon from "../../assets/profile_icon.png";
import bagIcon from "../../assets/bag_icon.png";
import SignInPopup from "../SignInPopup/SignInPopup";

function Navbar() {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <header>
      <div className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="logo">
            <span className="w">W</span>ormy
          </Link>
        </div>
        <nav className="navbar-nav">
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/about">About</Link>
        </nav>
        <div className="navbar-actions">
          <button className="sign-in" onClick={() => setShowSignIn(true)}>
            <img src={profileIcon} alt="Profile" className="icon" />
          </button>
          <Link to="/cart" className="cart">
            <img src={bagIcon} alt="Cart" className="icon" />
          </Link>
        </div>
      </div>
      {showSignIn && <SignInPopup onClose={() => setShowSignIn(false)} />}
    </header>
  );
}

export default Navbar;
