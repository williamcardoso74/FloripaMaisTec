import React from "react";
import "../styles/Header.css";
import BannerImage from '../images/banner-tronics.jpg';

function Header() {
  return (
    <nav>
      <div className="container-fluid">
        <img
          src={BannerImage} 
          alt=""
        />
        <ul>
          <li>
            <a href="#">Som</a>
          </li>
          <li>
            <a href="#">Celulares</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
