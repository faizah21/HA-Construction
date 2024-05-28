import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => (
  <header className="header-container">
    <h1 className="title">H.A. Construction</h1>
    <nav className="nav">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/services">
        Services
      </Link>
      <Link className="nav-link" to="/about">
        About Us
      </Link>
      <Link className="nav-link" to="/contact">
        Contact
      </Link>
    </nav>
  </header>
);

export default Header;
