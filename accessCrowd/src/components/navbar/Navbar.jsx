import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav">
      <Link to="/" className="logo-container">
        <h3>AccessCrowd</h3>
      </Link>

      {/* Hamburger menu visible only on mobile */}
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>

      {/* Regular nav links, hidden on mobile */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/submit-feedback">
            <button>Submit Feedback</button>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
