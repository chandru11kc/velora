import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./navbar.css";

function Navbar({ user, setUser }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      {/* LOGO */}
      <div className="logo">
        <img src={Logo} alt="Velora" />
      </div>

      {/* TOGGLE */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </div>

      {/* MENU */}
      <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        
        <ul className="nav-link">
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/farmer" onClick={() => setIsMenuOpen(false)}>Farmer</Link>
          </li>
        </ul>

        <div className="auth-buttons">
          <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
            <button className="cart-btn">Cart</button>
          </Link>

          {user ? (
            <>
              <div className="nav-user">
                {user.role === "farmer"
                  ? `👨‍🌾 ${user.farmerId}`
                  : `👤 ${user.email}`}
              </div>

              <button
                className="login-btn"
                onClick={() => {
                  localStorage.removeItem("user");
                  setUser(null); // ✅ FIX ONLY
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <button className="login-btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;