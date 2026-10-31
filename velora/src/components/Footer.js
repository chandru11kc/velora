import React from "react";
import { Link } from "react-router-dom"; // ✅ ADD THIS
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* 🔥 BRAND */}
        <div className="footer-section">
          <h2 className="logo">VELORA</h2>
          <p>Fresh from Farm to Your Door</p>
          <p>Naturally grown, Carefully delivered</p>
        </div>

        {/* 🔗 NAVIGATION */}
        <div className="footer-section">
          <h3 className="topic">Explore</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/farmer">Farmer</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        {/* 📞 CONTACT */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email : supportvelora@gmail.com</p>
          <p>Phone : 9344876437</p>
        </div>

      </div>

      {/* 🔻 BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Velora. All rights reserved</p>
      </div>

    </footer>
  );
}

export default Footer;