import React from "react";
import { useState } from "react";

function Header() {
  const [nome, setNome] = useState();

  let nome_prompt = prompt("Qual é o seu nome?");

  function renderNome() {
    if (nome_prompt) {
      setNome(nome_prompt);
    } else {
      setNome("Escreva um nome!");
    }
  }

  return (
    <div className="p-3 mb-2 bg-warning">
      <nav className="navbar navbar-light bg-light text-center rounded">
        <span className="navbar-brand">
          Seu nome é {nome}
        </span>
      </nav>
    </div>
  );
}

export default Header;
