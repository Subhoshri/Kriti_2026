import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Optional: Prevent scrolling when menu is open
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  return (
    <>
      {/* The Fixed "Three Lines" Button */}
      <button 
        className={`menu-trigger ${isOpen ? "active" : ""}`} 
        onClick={toggleMenu}
        aria-label="Toggle Navigation"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      {/* The Full Screen Overlay */}
      <nav className={`nav-overlay ${isOpen ? "show" : ""}`}>
        <div className="nav-links">
          <a href="/" onClick={toggleMenu} className="ruslan">HOME</a>
          <a href="/events" onClick={toggleMenu} className="ruslan">EVENTS</a>
          <a href="#artists" onClick={toggleMenu} className="ruslan">ARTISTS</a>
          <a href="#organizers" onClick={toggleMenu} className="ruslan">ORGANIZERS</a>
          <a href="/merchandise" onClick={toggleMenu} className="ruslan">MERCHANDISE</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;