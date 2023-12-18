import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import delivery_icon from "../Assets/arrow.png";
import burger_icon from "../Assets/burger_icon.png";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>FOODY</p>
      </div>
      {/* Burger icon for mobile */}
      <div className="burger-icon" onClick={toggleMobileMenu}>
        <img id="burger" src={burger_icon} alt="Burger Icon" />
      </div>

      <ul className={`nav-menu ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          Home {menu === "home" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("about");
          }}
        >
          About{menu === "about" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("menu");
          }}
        >
          Menu{menu === "menu" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("contact");
          }}
        >
          Contact{menu === "contact" && <hr />}
        </li>
      </ul>
      <div className="nav-cart-delivery">
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
        <div className="fast-delivery">
          <p>Fast Delivery</p>
          <img src={delivery_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
