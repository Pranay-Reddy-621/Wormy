import { useState } from "react";
import { icons } from "../../data/books";
import "./SignInPopup.css";

function SignInPopup({ onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="signin-popup">
      <div className="popup-content">
        <button onClick={onClose} className="close-btn">
          <img src={icons.cross} alt="Close" className="icon" />
        </button>
        <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <form>
          {isSignUp && (
            <input type="text" placeholder="Name" />
          )}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {isSignUp && (
            <input type="password" placeholder="Confirm Password" />
          )}
          <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
        </form>
        <p className="toggle-form">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="toggle-btn"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignInPopup;
