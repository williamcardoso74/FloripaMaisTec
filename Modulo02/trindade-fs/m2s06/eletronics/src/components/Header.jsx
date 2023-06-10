import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <nav>
      <div className="container-fluid">
        <img
          src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg"
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
