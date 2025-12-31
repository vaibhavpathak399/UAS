import React from "react";
import { Link } from "react-router-dom";
import "../styles/layout.css";

const Navbar = () => {
  return (
    <header className="gov-navbar">
      {/* LEFT: CONTACT */}
      <div className="gov-left">

      </div>

      {/* CENTER: LINKS */}
      <nav className="gov-center">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/investors">Gallery</Link>
        <Link to="/capabilities">Capabilities</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/tenders">Tenders</Link>
        
        <Link to="/contact">Contact</Link>
      </nav>

      {/* RIGHT: CTA */}
      <div className="gov-right">
        <Link to="/quotation" className="gov-quote-btn">
          Get a Quote
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
