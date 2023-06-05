import React from "react";
import "../styles/Header.css";
import appsIcon from "../images/google-apps-icon.png";
import signInLogo from "../images/gmailfoto.jpg";

function Header() {
  return (
    <div className="Header">
      <ul className="Menu">
        <li>
          <a href="https://mail.google.com">Gmail</a>
        </li>

        <li>
          <a href="https://images.google.com">Imagens</a>
        </li>

        <li>
          <img className="Menu-icon" src={appsIcon} alt="menu" />
        </li>

        <li>
          <img className="icon" src={signInLogo} alt="profile" />
        </li>
      </ul>
    </div>
  );
}

export default Header;
