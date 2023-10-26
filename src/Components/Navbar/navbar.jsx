import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import delivery_icon from "../Assets/arrow.png";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>FOODY</p>
      </div>

      <ul className="nav-menu">
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
