import React from "react";
import { useState } from "react";
import "./Footer.css";
import logo from "../Assets/logo.png";
const Footer = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo-and-quote">
          <div className="footer-logo">
            <img src={logo} alt="" />
            <p>FOODY</p>
          </div>
          <div className="footer-quote">
            <h4>Foody- A restaurant where you will completely eat up.</h4>
          </div>
        </div>
        <div className="footer-links">
          <ul className="footer-menu">
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
        </div>
        <div className="email-and-number">
          <div className="email-and-p">
            <input type="email" placeholder="Email" />
            <p>&gt;</p>
          </div>

          <h4 className="phone-number">+234 812 234 5676</h4>
        </div>
      </div>
      <p className="copyright">
        Copyright &copy;2023 Foody. All rights reserved.
      </p>
    </div>
  );
};
export default Footer;
